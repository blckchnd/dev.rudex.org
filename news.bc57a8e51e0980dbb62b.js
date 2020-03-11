(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[35],{

/***/ 3084:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(592);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var steem_js_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3085);
/* harmony import */ var steem_js_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(steem_js_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var golos_classic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3105);
/* harmony import */ var golos_classic_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(golos_classic_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1824);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1918);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(576);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var api = void 0;

var query = {
    select_authors: ["rudex"],
    tag: "rudex",
    limit: 20
};

var alignRight = { textAlign: "right" };
var alignLeft = { textAlign: "left" };
var rowHeight = { height: "2rem" };
var bodyCell = { padding: "0.5rem 1rem" };
var headerCell = { padding: "0.85rem 1rem" };

var leftCell = _extends({}, alignLeft, bodyCell);
var rightCell = _extends({}, alignRight, bodyCell);

var leftCellHeader = _extends({}, alignLeft, headerCell);
var rightCellHeader = _extends({}, alignRight, headerCell);

var secondCol = _extends({}, leftCell, { width: "180px" });

var SomethingWentWrong = function SomethingWentWrong() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "p",
        null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { content: "news.errors.fetch" })
    );
};

var ReusableLink = function ReusableLink(_ref) {
    var data = _ref.data,
        locale = _ref.locale,
        url = _ref.url,
        _ref$isLink = _ref.isLink,
        isLink = _ref$isLink === undefined ? false : _ref$isLink;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "a",
        {
            //href={`https://steemit.com${url}`}
            //href={`https://golos.id${url}`}
            href: locale == "ru" ? "https://golos.id" + url : "https://steemit.com" + url,
            rel: "noreferrer noopener",
            target: "_blank",
            style: { display: "block" },
            className: !isLink ? "primary-text" : "external-link"
        },
        common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].sanitize(data)
    );
};

var NewsTable = function NewsTable(_ref2) {
    var data = _ref2.data,
        width = _ref2.width,
        locale = _ref2.locale;

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "table",
        {
            className: "table table-hover dashboard-table",
            style: { fontSize: "0.85rem" }
        },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "thead",
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { style: rightCellHeader },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                        component: "span",
                        content: "account.votes.line"
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { style: leftCellHeader },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, {
                        component: "span",
                        content: "explorer.block.date"
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { style: leftCellHeader },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { component: "span", content: "news.subject" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { style: leftCellHeader },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a, { component: "span", content: "news.author" })
                )
            )
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "tbody",
            null,
            data.map(function (singleNews, iter) {
                var theAuthor = singleNews.parentAuthor ? singleNews.parentAuthor : singleNews.author;
                var formattedDate = counterpart__WEBPACK_IMPORTED_MODULE_1___default.a.localize(new Date(singleNews.created));
                var smartTitle = singleNews.title.length * 6 > width - 450 ? singleNews.title.slice(0, Math.floor(width - 450) / 6) + "..." : singleNews.title;
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "tr",
                    { key: "" + singleNews.title.slice(0, 10) + iter },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        { style: rightCell },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReusableLink, {
                            data: iter + 1,
                            locale: locale,
                            url: singleNews.url
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        { style: secondCol },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReusableLink, {
                            data: formattedDate,
                            locale: locale,
                            url: singleNews.url
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        { style: leftCell },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReusableLink, {
                            data: smartTitle,
                            locale: locale,
                            url: singleNews.url,
                            isLink: true
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        { style: leftCell },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReusableLink, {
                            data: theAuthor,
                            locale: locale,
                            url: singleNews.url
                        })
                    )
                );
            })
        ),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            "thead",
            null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "tr",
                { style: rowHeight },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { style: rightCell }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { style: leftCell }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { style: leftCell }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", { style: leftCell })
            )
        )
    );
};

var News = function (_React$Component) {
    _inherits(News, _React$Component);

    function News(props) {
        _classCallCheck(this, News);

        var _this = _possibleConstructorReturn(this, (News.__proto__ || Object.getPrototypeOf(News)).call(this, props));

        _this.state = {
            isLoading: true,
            isWrong: false,
            discussions: [],
            width: 1200,
            currentLocale: react_translate_component__WEBPACK_IMPORTED_MODULE_4___default.a.getLocale()
        };
        _this.updateDimensions = _this.updateDimensions.bind(_this);
        _this.orderDiscussions = _this.orderDiscussions.bind(_this);
        return _this;
    }

    _createClass(News, [{
        key: "updateDimensions",
        value: function updateDimensions() {
            this.setState({ width: window.innerWidth });
        }
    }, {
        key: "orderDiscussions",
        value: function orderDiscussions(discussions) {
            var orderedDiscussions = discussions.sort(function (a, b) {
                return new Date(b.created) - new Date(a.created);
            });
            this.setState({ discussions: orderedDiscussions, isLoading: false });
        }
    }, {
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            this.updateDimensions();
            window.addEventListener("resize", this.updateDimensions);

            if (this.state.currentLocale === "ru") {
                api = golos_classic_js__WEBPACK_IMPORTED_MODULE_3__["api"];
                api.setWebSocket("wss://api.golos.blckchnd.com/ws");
            } else api = steem_js_api__WEBPACK_IMPORTED_MODULE_2__["api"];

            api.getDiscussionsByBlog(query).then(function (discussions) {
                _this2.orderDiscussions(discussions);
            }).catch(function () {
                _this2.setState({ isLoading: false, isWrong: true });
            });
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener("resize", this.updateDimensions);
        }
    }, {
        key: "render",
        value: function render() {
            var _state = this.state,
                isLoading = _state.isLoading,
                isWrong = _state.isWrong,
                discussions = _state.discussions,
                width = _state.width,
                currentLocale = _state.currentLocale;


            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                { className: "grid-block page-layout" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "grid-block vertical" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "account-tabs" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "div",
                            { className: "tab-content" },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "div",
                                { className: "grid-block vertical" },
                                isWrong && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SomethingWentWrong, null),
                                isLoading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__["default"], null) : null,
                                !isWrong && !isLoading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NewsTable, {
                                    width: width,
                                    data: discussions,
                                    locale: currentLocale
                                })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return News;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ }),

/***/ 3103:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3130:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5iYzU3YThlNTFlMDk4MGRiYjYyYi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9OZXdzLmpzeCIsIndlYnBhY2s6Ly8vd3MgKGlnbm9yZWQpPzEzOWQiLCJ3ZWJwYWNrOi8vL3dzIChpZ25vcmVkKSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcclxuaW1wb3J0ICogYXMgYXBpX2VuIGZyb20gXCJzdGVlbS1qcy1hcGlcIjtcclxuaW1wb3J0ICogYXMgYXBpX3J1IGZyb20gXCJnb2xvcy1jbGFzc2ljLWpzXCI7XHJcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcclxuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4vTG9hZGluZ0luZGljYXRvclwiO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSBcImNvbW1vbi91dGlsc1wiO1xyXG5cclxubGV0IGFwaTtcclxuXHJcbmNvbnN0IHF1ZXJ5ID0ge1xyXG4gICAgc2VsZWN0X2F1dGhvcnM6IFtcInJ1ZGV4XCJdLFxyXG4gICAgdGFnOiBcInJ1ZGV4XCIsXHJcbiAgICBsaW1pdDogMjBcclxufTtcclxuXHJcbmNvbnN0IGFsaWduUmlnaHQgPSB7dGV4dEFsaWduOiBcInJpZ2h0XCJ9O1xyXG5jb25zdCBhbGlnbkxlZnQgPSB7dGV4dEFsaWduOiBcImxlZnRcIn07XHJcbmNvbnN0IHJvd0hlaWdodCA9IHtoZWlnaHQ6IFwiMnJlbVwifTtcclxuY29uc3QgYm9keUNlbGwgPSB7cGFkZGluZzogXCIwLjVyZW0gMXJlbVwifTtcclxuY29uc3QgaGVhZGVyQ2VsbCA9IHtwYWRkaW5nOiBcIjAuODVyZW0gMXJlbVwifTtcclxuXHJcbmNvbnN0IGxlZnRDZWxsID0gey4uLmFsaWduTGVmdCwgLi4uYm9keUNlbGx9O1xyXG5jb25zdCByaWdodENlbGwgPSB7Li4uYWxpZ25SaWdodCwgLi4uYm9keUNlbGx9O1xyXG5cclxuY29uc3QgbGVmdENlbGxIZWFkZXIgPSB7Li4uYWxpZ25MZWZ0LCAuLi5oZWFkZXJDZWxsfTtcclxuY29uc3QgcmlnaHRDZWxsSGVhZGVyID0gey4uLmFsaWduUmlnaHQsIC4uLmhlYWRlckNlbGx9O1xyXG5cclxuY29uc3Qgc2Vjb25kQ29sID0gey4uLmxlZnRDZWxsLCB3aWR0aDogXCIxODBweFwifTtcclxuXHJcbmNvbnN0IFNvbWV0aGluZ1dlbnRXcm9uZyA9ICgpID0+IChcclxuICAgIDxwPlxyXG4gICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIm5ld3MuZXJyb3JzLmZldGNoXCIgLz5cclxuICAgIDwvcD5cclxuKTtcclxuXHJcbmNvbnN0IFJldXNhYmxlTGluayA9ICh7ZGF0YSwgbG9jYWxlLCB1cmwsIGlzTGluayA9IGZhbHNlfSkgPT4gKFxyXG4gICAgPGFcclxuICAgICAgICAvL2hyZWY9e2BodHRwczovL3N0ZWVtaXQuY29tJHt1cmx9YH1cclxuICAgICAgICAvL2hyZWY9e2BodHRwczovL2dvbG9zLmlkJHt1cmx9YH1cclxuICAgICAgICBocmVmPXtcclxuICAgICAgICAgICAgbG9jYWxlID09IFwicnVcIlxyXG4gICAgICAgICAgICAgICAgPyBgaHR0cHM6Ly9nb2xvcy5pZCR7dXJsfWBcclxuICAgICAgICAgICAgICAgIDogYGh0dHBzOi8vc3RlZW1pdC5jb20ke3VybH1gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIlxyXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCJ9fVxyXG4gICAgICAgIGNsYXNzTmFtZT17IWlzTGluayA/IFwicHJpbWFyeS10ZXh0XCIgOiBcImV4dGVybmFsLWxpbmtcIn1cclxuICAgID5cclxuICAgICAgICB7dXRpbHMuc2FuaXRpemUoZGF0YSl9XHJcbiAgICA8L2E+XHJcbik7XHJcblxyXG5jb25zdCBOZXdzVGFibGUgPSAoe2RhdGEsIHdpZHRoLCBsb2NhbGV9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx0YWJsZVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlciBkYXNoYm9hcmQtdGFibGVcIlxyXG4gICAgICAgICAgICBzdHlsZT17e2ZvbnRTaXplOiBcIjAuODVyZW1cIn19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXtyaWdodENlbGxIZWFkZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJhY2NvdW50LnZvdGVzLmxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXtsZWZ0Q2VsbEhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2NrLmRhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXtsZWZ0Q2VsbEhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJuZXdzLnN1YmplY3RcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXtsZWZ0Q2VsbEhlYWRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJuZXdzLmF1dGhvclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoc2luZ2xlTmV3cywgaXRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRoZUF1dGhvciA9IHNpbmdsZU5ld3MucGFyZW50QXV0aG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc2luZ2xlTmV3cy5wYXJlbnRBdXRob3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzaW5nbGVOZXdzLmF1dGhvcjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gY291bnRlcnBhcnQubG9jYWxpemUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKHNpbmdsZU5ld3MuY3JlYXRlZClcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNtYXJ0VGl0bGUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaW5nbGVOZXdzLnRpdGxlLmxlbmd0aCAqIDYgPiB3aWR0aCAtIDQ1MFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgJHtzaW5nbGVOZXdzLnRpdGxlLnNsaWNlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3Iod2lkdGggLSA0NTApIC8gNlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfS4uLmBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc2luZ2xlTmV3cy50aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtgJHtzaW5nbGVOZXdzLnRpdGxlLnNsaWNlKDAsIDEwKX0ke2l0ZXJ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3JpZ2h0Q2VsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldXNhYmxlTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtpdGVyICsgMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17c2luZ2xlTmV3cy51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3NlY29uZENvbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldXNhYmxlTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtmb3JtYXR0ZWREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtzaW5nbGVOZXdzLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17bGVmdENlbGx9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXVzYWJsZUxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17c21hcnRUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17c2luZ2xlTmV3cy51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtsZWZ0Q2VsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldXNhYmxlTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXt0aGVBdXRob3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e3NpbmdsZU5ld3MudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRyIHN0eWxlPXtyb3dIZWlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17cmlnaHRDZWxsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17bGVmdENlbGx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXtsZWZ0Q2VsbH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e2xlZnRDZWxsfSAvPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmNsYXNzIE5ld3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICBpc1dyb25nOiBmYWxzZSxcclxuICAgICAgICAgICAgZGlzY3Vzc2lvbnM6IFtdLFxyXG4gICAgICAgICAgICB3aWR0aDogMTIwMCxcclxuICAgICAgICAgICAgY3VycmVudExvY2FsZTogVHJhbnNsYXRlLmdldExvY2FsZSgpXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnVwZGF0ZURpbWVuc2lvbnMgPSB0aGlzLnVwZGF0ZURpbWVuc2lvbnMuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9yZGVyRGlzY3Vzc2lvbnMgPSB0aGlzLm9yZGVyRGlzY3Vzc2lvbnMuYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVEaW1lbnNpb25zKCkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9yZGVyRGlzY3Vzc2lvbnMoZGlzY3Vzc2lvbnMpIHtcclxuICAgICAgICBjb25zdCBvcmRlcmVkRGlzY3Vzc2lvbnMgPSBkaXNjdXNzaW9ucy5zb3J0KFxyXG4gICAgICAgICAgICAoYSwgYikgPT4gbmV3IERhdGUoYi5jcmVhdGVkKSAtIG5ldyBEYXRlKGEuY3JlYXRlZClcclxuICAgICAgICApO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Rpc2N1c3Npb25zOiBvcmRlcmVkRGlzY3Vzc2lvbnMsIGlzTG9hZGluZzogZmFsc2V9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZURpbWVuc2lvbnMpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5jdXJyZW50TG9jYWxlID09PSBcInJ1XCIpIHtcclxuICAgICAgICAgICAgYXBpID0gYXBpX3J1LmFwaTtcclxuICAgICAgICAgICAgYXBpLnNldFdlYlNvY2tldChcIndzczovL2FwaS5nb2xvcy5ibGNrY2huZC5jb20vd3NcIik7XHJcbiAgICAgICAgfSBlbHNlIGFwaSA9IGFwaV9lbi5hcGk7XHJcblxyXG4gICAgICAgIGFwaS5nZXREaXNjdXNzaW9uc0J5QmxvZyhxdWVyeSlcclxuICAgICAgICAgICAgLnRoZW4oZGlzY3Vzc2lvbnMgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcmRlckRpc2N1c3Npb25zKGRpc2N1c3Npb25zKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzTG9hZGluZzogZmFsc2UsIGlzV3Jvbmc6IHRydWV9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVEaW1lbnNpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBpc0xvYWRpbmcsXHJcbiAgICAgICAgICAgIGlzV3JvbmcsXHJcbiAgICAgICAgICAgIGRpc2N1c3Npb25zLFxyXG4gICAgICAgICAgICB3aWR0aCxcclxuICAgICAgICAgICAgY3VycmVudExvY2FsZVxyXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgcGFnZS1sYXlvdXRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjb3VudC10YWJzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc1dyb25nICYmIDxTb21ldGhpbmdXZW50V3JvbmcgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzTG9hZGluZyA/IDxMb2FkaW5nSW5kaWNhdG9yIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWlzV3JvbmcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWlzTG9hZGluZyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmV3c1RhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2Rpc2N1c3Npb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZT17Y3VycmVudExvY2FsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV3cztcclxuIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQVhBO0FBYUE7QUFiQTtBQURBO0FBQ0E7QUFpQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFoQkE7QUFEQTtBQXNCQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQURBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBdkJBO0FBZ0NBO0FBaERBO0FBa0RBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQTVFQTtBQXNGQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFWQTtBQVdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBTEE7QUFEQTtBQURBO0FBREE7QUFEQTtBQXFCQTs7OztBQTlFQTtBQUNBO0FBZ0ZBOzs7Ozs7O0FDak9BOzs7Ozs7O0FDQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==