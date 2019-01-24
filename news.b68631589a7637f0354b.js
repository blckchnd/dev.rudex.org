(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ 2795:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(387);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(572);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var steem_js_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2796);
/* harmony import */ var steem_js_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(steem_js_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(782);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1828);
/* harmony import */ var sanitize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1998);
/* harmony import */ var sanitize__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sanitize__WEBPACK_IMPORTED_MODULE_5__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var query = { tag: "blockchained", limit: 20 };

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
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { content: "news.errors.fetch" })
    );
};

var ReusableLink = function ReusableLink(_ref) {
    var data = _ref.data,
        url = _ref.url,
        _ref$isLink = _ref.isLink,
        isLink = _ref$isLink === undefined ? false : _ref$isLink;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        "a",
        {
            href: "https://steemit.com" + url,
            rel: "noreferrer noopener",
            target: "_blank",
            style: { display: "block" },
            className: !isLink ? "primary-text" : ""
        },
        sanitize__WEBPACK_IMPORTED_MODULE_5___default()(data, {
            whiteList: [], // empty, means filter out all tags
            stripIgnoreTag: true // filter out all HTML not in the whilelist
        })
    );
};

var NewsTable = function NewsTable(_ref2) {
    var data = _ref2.data,
        width = _ref2.width;

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
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                        component: "span",
                        content: "account.votes.line"
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { style: leftCellHeader },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, {
                        component: "span",
                        content: "explorer.block.date"
                    })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { style: leftCellHeader },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { component: "span", content: "news.subject" })
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "th",
                    { style: leftCellHeader },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_translate_component__WEBPACK_IMPORTED_MODULE_3___default.a, { component: "span", content: "news.author" })
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
                            url: singleNews.url
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        { style: secondCol },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReusableLink, {
                            data: formattedDate,
                            url: singleNews.url
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        { style: leftCell },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReusableLink, {
                            data: smartTitle,
                            url: singleNews.url,
                            isLink: true
                        })
                    ),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "td",
                        { style: leftCell },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ReusableLink, {
                            data: theAuthor,
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
            width: 1200
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
            steem_js_api__WEBPACK_IMPORTED_MODULE_2__["api"].getDiscussionsByBlog(query).then(function (discussions) {
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
                width = _state.width;


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
                                isLoading ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__["default"], null) : null,
                                !isWrong && !isLoading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NewsTable, {
                                    width: width,
                                    data: discussions
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

/***/ 2814:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5iNjg2MzE1ODlhNzYzN2YwMzU0Yi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9OZXdzLmpzeCIsIndlYnBhY2s6Ly8vd3MgKGlnbm9yZWQpPzhjNGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IHthcGl9IGZyb20gXCJzdGVlbS1qcy1hcGlcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuL0xvYWRpbmdJbmRpY2F0b3JcIjtcbmltcG9ydCBzYW5pdGl6ZSBmcm9tIFwic2FuaXRpemVcIjtcblxuY29uc3QgcXVlcnkgPSB7dGFnOiBcImJsb2NrY2hhaW5lZFwiLCBsaW1pdDogMjB9O1xuXG5jb25zdCBhbGlnblJpZ2h0ID0ge3RleHRBbGlnbjogXCJyaWdodFwifTtcbmNvbnN0IGFsaWduTGVmdCA9IHt0ZXh0QWxpZ246IFwibGVmdFwifTtcbmNvbnN0IHJvd0hlaWdodCA9IHtoZWlnaHQ6IFwiMnJlbVwifTtcbmNvbnN0IGJvZHlDZWxsID0ge3BhZGRpbmc6IFwiMC41cmVtIDFyZW1cIn07XG5jb25zdCBoZWFkZXJDZWxsID0ge3BhZGRpbmc6IFwiMC44NXJlbSAxcmVtXCJ9O1xuXG5jb25zdCBsZWZ0Q2VsbCA9IHsuLi5hbGlnbkxlZnQsIC4uLmJvZHlDZWxsfTtcbmNvbnN0IHJpZ2h0Q2VsbCA9IHsuLi5hbGlnblJpZ2h0LCAuLi5ib2R5Q2VsbH07XG5cbmNvbnN0IGxlZnRDZWxsSGVhZGVyID0gey4uLmFsaWduTGVmdCwgLi4uaGVhZGVyQ2VsbH07XG5jb25zdCByaWdodENlbGxIZWFkZXIgPSB7Li4uYWxpZ25SaWdodCwgLi4uaGVhZGVyQ2VsbH07XG5cbmNvbnN0IHNlY29uZENvbCA9IHsuLi5sZWZ0Q2VsbCwgd2lkdGg6IFwiMTgwcHhcIn07XG5cbmNvbnN0IFNvbWV0aGluZ1dlbnRXcm9uZyA9ICgpID0+IChcbiAgICA8cD5cbiAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibmV3cy5lcnJvcnMuZmV0Y2hcIiAvPlxuICAgIDwvcD5cbik7XG5cbmNvbnN0IFJldXNhYmxlTGluayA9ICh7ZGF0YSwgdXJsLCBpc0xpbmsgPSBmYWxzZX0pID0+IChcbiAgICA8YVxuICAgICAgICBocmVmPXtgaHR0cHM6Ly9zdGVlbWl0LmNvbSR7dXJsfWB9XG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIn19XG4gICAgICAgIGNsYXNzTmFtZT17IWlzTGluayA/IFwicHJpbWFyeS10ZXh0XCIgOiBcIlwifVxuICAgID5cbiAgICAgICAge3Nhbml0aXplKGRhdGEsIHtcbiAgICAgICAgICAgIHdoaXRlTGlzdDogW10sIC8vIGVtcHR5LCBtZWFucyBmaWx0ZXIgb3V0IGFsbCB0YWdzXG4gICAgICAgICAgICBzdHJpcElnbm9yZVRhZzogdHJ1ZSAvLyBmaWx0ZXIgb3V0IGFsbCBIVE1MIG5vdCBpbiB0aGUgd2hpbGVsaXN0XG4gICAgICAgIH0pfVxuICAgIDwvYT5cbik7XG5cbmNvbnN0IE5ld3NUYWJsZSA9ICh7ZGF0YSwgd2lkdGh9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRhYmxlXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlciBkYXNoYm9hcmQtdGFibGVcIlxuICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTogXCIwLjg1cmVtXCJ9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3JpZ2h0Q2VsbEhlYWRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImFjY291bnQudm90ZXMubGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e2xlZnRDZWxsSGVhZGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2suZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e2xlZnRDZWxsSGVhZGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJuZXdzLnN1YmplY3RcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e2xlZnRDZWxsSGVhZGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJuZXdzLmF1dGhvclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAge2RhdGEubWFwKChzaW5nbGVOZXdzLCBpdGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRoZUF1dGhvciA9IHNpbmdsZU5ld3MucGFyZW50QXV0aG9yXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHNpbmdsZU5ld3MucGFyZW50QXV0aG9yXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHNpbmdsZU5ld3MuYXV0aG9yO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gY291bnRlcnBhcnQubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShzaW5nbGVOZXdzLmNyZWF0ZWQpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNtYXJ0VGl0bGUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgc2luZ2xlTmV3cy50aXRsZS5sZW5ndGggKiA2ID4gd2lkdGggLSA0NTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGAke3NpbmdsZU5ld3MudGl0bGUuc2xpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKHdpZHRoIC0gNDUwKSAvIDZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9Li4uYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc2luZ2xlTmV3cy50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2Ake3NpbmdsZU5ld3MudGl0bGUuc2xpY2UoMCwgMTApfSR7aXRlcn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3JpZ2h0Q2VsbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXVzYWJsZUxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2l0ZXIgKyAxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtzaW5nbGVOZXdzLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17c2Vjb25kQ29sfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldXNhYmxlTGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17Zm9ybWF0dGVkRGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17c2luZ2xlTmV3cy51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e2xlZnRDZWxsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldXNhYmxlTGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17c21hcnRUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17c2luZ2xlTmV3cy51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17bGVmdENlbGx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV1c2FibGVMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXt0aGVBdXRob3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e3NpbmdsZU5ld3MudXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHIgc3R5bGU9e3Jvd0hlaWdodH0+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17cmlnaHRDZWxsfSAvPlxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e2xlZnRDZWxsfSAvPlxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e2xlZnRDZWxsfSAvPlxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e2xlZnRDZWxsfSAvPlxuICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8L3RhYmxlPlxuICAgICk7XG59O1xuXG5jbGFzcyBOZXdzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgICAgICAgICBpc1dyb25nOiBmYWxzZSxcbiAgICAgICAgICAgIGRpc2N1c3Npb25zOiBbXSxcbiAgICAgICAgICAgIHdpZHRoOiAxMjAwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucyA9IHRoaXMudXBkYXRlRGltZW5zaW9ucy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9yZGVyRGlzY3Vzc2lvbnMgPSB0aGlzLm9yZGVyRGlzY3Vzc2lvbnMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICB1cGRhdGVEaW1lbnNpb25zKCkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt3aWR0aDogd2luZG93LmlubmVyV2lkdGh9KTtcbiAgICB9XG5cbiAgICBvcmRlckRpc2N1c3Npb25zKGRpc2N1c3Npb25zKSB7XG4gICAgICAgIGNvbnN0IG9yZGVyZWREaXNjdXNzaW9ucyA9IGRpc2N1c3Npb25zLnNvcnQoXG4gICAgICAgICAgICAoYSwgYikgPT4gbmV3IERhdGUoYi5jcmVhdGVkKSAtIG5ldyBEYXRlKGEuY3JlYXRlZClcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGlzY3Vzc2lvbnM6IG9yZGVyZWREaXNjdXNzaW9ucywgaXNMb2FkaW5nOiBmYWxzZX0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnVwZGF0ZURpbWVuc2lvbnMoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVEaW1lbnNpb25zKTtcbiAgICAgICAgYXBpLmdldERpc2N1c3Npb25zQnlCbG9nKHF1ZXJ5KVxuICAgICAgICAgICAgLnRoZW4oZGlzY3Vzc2lvbnMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub3JkZXJEaXNjdXNzaW9ucyhkaXNjdXNzaW9ucyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc0xvYWRpbmc6IGZhbHNlLCBpc1dyb25nOiB0cnVlfSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy51cGRhdGVEaW1lbnNpb25zKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtpc0xvYWRpbmcsIGlzV3JvbmcsIGRpc2N1c3Npb25zLCB3aWR0aH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgcGFnZS1sYXlvdXRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY2NvdW50LXRhYnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFiLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzV3JvbmcgJiYgPFNvbWV0aGluZ1dlbnRXcm9uZyAvPn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzTG9hZGluZyA/IDxMb2FkaW5nSW5kaWNhdG9yIC8+IDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFpc1dyb25nICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNMb2FkaW5nICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmV3c1RhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGlzY3Vzc2lvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5ld3M7XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBREE7QUFDQTtBQWNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWhCQTtBQURBO0FBc0JBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBO0FBcEJBO0FBNEJBO0FBNUNBO0FBOENBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFEQTtBQXhFQTtBQWtGQTtBQUNBO0FBQ0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBVEE7QUFVQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUZBO0FBTEE7QUFEQTtBQURBO0FBREE7QUFEQTtBQW9CQTs7OztBQWhFQTtBQUNBO0FBa0VBOzs7Ozs7O0FDck1BOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=