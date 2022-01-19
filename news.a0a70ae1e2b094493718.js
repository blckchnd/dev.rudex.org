(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[15],{

/***/ 2882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(417);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(612);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var steem_js_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2883);
/* harmony import */ var steem_js_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(steem_js_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var golos_classic_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2905);
/* harmony import */ var golos_classic_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(golos_classic_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1810);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1905);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(596);







let api;
const query = {
  select_authors: ["rudex"],
  tag: "rudex",
  limit: 20,
  filter_tag_masks: ["fm-"]
};
const alignRight = {
  textAlign: "right"
};
const alignLeft = {
  textAlign: "left"
};
const rowHeight = {
  height: "2rem"
};
const bodyCell = {
  padding: "0.5rem 1rem"
};
const headerCell = {
  padding: "0.85rem 1rem"
};
const leftCell = { ...alignLeft,
  ...bodyCell
};
const rightCell = { ...alignRight,
  ...bodyCell
};
const leftCellHeader = { ...alignLeft,
  ...headerCell
};
const rightCellHeader = { ...alignRight,
  ...headerCell
};
const secondCol = { ...leftCell,
  width: "180px"
};

const SomethingWentWrong = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
  content: "news.errors.fetch"
}));

const ReusableLink = ({
  data,
  locale,
  url,
  isLink = false
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  //href={`https://steemit.com${url}`}
  //href={`https://golos.id${url}`}
  href: locale == "ru" ? `https://golos.id${url}` : `https://steemit.com${url}`,
  rel: "noreferrer noopener",
  target: "_blank",
  style: {
    display: "block"
  },
  className: !isLink ? "primary-text" : "external-link"
}, common_utils__WEBPACK_IMPORTED_MODULE_6__["default"].sanitize(data));

const NewsTable = ({
  data,
  width,
  locale
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", {
    className: "table table-hover dashboard-table",
    style: {
      fontSize: "0.85rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: rightCellHeader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
    component: "span",
    content: "account.votes.line"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: leftCellHeader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
    component: "span",
    content: "explorer.block.date"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: leftCellHeader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
    component: "span",
    content: "news.subject"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: leftCellHeader
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_translate_component__WEBPACK_IMPORTED_MODULE_4___default()), {
    component: "span",
    content: "news.author"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", null, data.map((singleNews, iter) => {
    const theAuthor = singleNews.parentAuthor ? singleNews.parentAuthor : singleNews.author;
    const formattedDate = counterpart__WEBPACK_IMPORTED_MODULE_1___default().localize(new Date(singleNews.created));
    const smartTitle = singleNews.title.length * 6 > width - 450 ? `${singleNews.title.slice(0, Math.floor(width - 450) / 6)}...` : singleNews.title;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
      key: `${singleNews.title.slice(0, 10)}${iter}`
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: rightCell
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReusableLink, {
      data: iter + 1,
      locale: locale,
      url: singleNews.url
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: secondCol
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReusableLink, {
      data: formattedDate,
      locale: locale,
      url: singleNews.url
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: leftCell
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReusableLink, {
      data: smartTitle,
      locale: locale,
      url: singleNews.url,
      isLink: true
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", {
      style: leftCell
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ReusableLink, {
      data: theAuthor,
      locale: locale,
      url: singleNews.url
    })));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", {
    style: rowHeight
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: rightCell
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: leftCell
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: leftCell
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
    style: leftCell
  }))));
};

class News extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isWrong: false,
      discussions: [],
      width: 1200,
      currentLocale: react_translate_component__WEBPACK_IMPORTED_MODULE_4___default().getLocale()
    };
    this.updateDimensions = this.updateDimensions.bind(this);
    this.orderDiscussions = this.orderDiscussions.bind(this);
  }

  updateDimensions() {
    this.setState({
      width: window.innerWidth
    });
  }

  orderDiscussions(discussions) {
    const orderedDiscussions = discussions.sort((a, b) => new Date(b.created) - new Date(a.created));
    this.setState({
      discussions: orderedDiscussions,
      isLoading: false
    });
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);

    if (this.state.currentLocale === "ru") {
      api = golos_classic_js__WEBPACK_IMPORTED_MODULE_3__.api;
      api.setWebSocket("wss://api.golos.id/ws");
    } else api = steem_js_api__WEBPACK_IMPORTED_MODULE_2__.api;

    api.getDiscussionsByBlog(query).then(discussions => {
      this.orderDiscussions(discussions);
    }).catch(() => {
      this.setState({
        isLoading: false,
        isWrong: true
      });
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const {
      isLoading,
      isWrong,
      discussions,
      width,
      currentLocale
    } = this.state;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block page-layout"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "account-tabs"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tab-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical"
    }, isWrong && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SomethingWentWrong, null), isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__["default"], null) : null, !isWrong && !isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NewsTable, {
      width: width,
      data: discussions,
      locale: currentLocale
    }))))));
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (News);

/***/ }),

/***/ 2935:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 2946:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 2903:
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy5hMGE3MGFlMWUyYjA5NDQ5MzcxOC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBOztBQUVBO0FBRUE7QUFBQTs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFYQTs7QUFpQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQU1BO0FBQUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFNQTtBQUdBO0FBR0E7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQVFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFZQTs7QUE5RUE7O0FBaUZBOzs7Ozs7O0FDbE9BOzs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL1J1REVYMy1saWdodC8uL2FwcC9jb21wb25lbnRzL05ld3MuanN4Iiwid2VicGFjazovL1J1REVYMy1saWdodC9pZ25vcmVkfEU6XFxPU1BhbmVsXFxkb21haW5zXFxydWRleFxcMi4gR1VJXFxydWRleC11aVxcbm9kZV9tb2R1bGVzXFxnb2xvcy1jbGFzc2ljLWpzXFxsaWJcXGFwaVxcdHJhbnNwb3J0c3x3cyIsIndlYnBhY2s6Ly9SdURFWDMtbGlnaHQvaWdub3JlZHxFOlxcT1NQYW5lbFxcZG9tYWluc1xccnVkZXhcXDIuIEdVSVxccnVkZXgtdWlcXG5vZGVfbW9kdWxlc1xcZ29sb3MtY2xhc3NpYy1qc1xcbm9kZV9tb2R1bGVzXFxzZWN1cmUtcmFuZG9tXFxsaWJ8Y3J5cHRvIiwid2VicGFjazovL1J1REVYMy1saWdodC9pZ25vcmVkfEU6XFxPU1BhbmVsXFxkb21haW5zXFxydWRleFxcMi4gR1VJXFxydWRleC11aVxcbm9kZV9tb2R1bGVzXFxzdGVlbS1qcy1hcGlcXGxpYlxcYXBpXFx0cmFuc3BvcnRzfHdzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCAqIGFzIGFwaV9lbiBmcm9tIFwic3RlZW0tanMtYXBpXCI7XG5pbXBvcnQgKiBhcyBhcGlfcnUgZnJvbSBcImdvbG9zLWNsYXNzaWMtanNcIjtcbmltcG9ydCBUcmFuc2xhdGUgZnJvbSBcInJlYWN0LXRyYW5zbGF0ZS1jb21wb25lbnRcIjtcbmltcG9ydCBMb2FkaW5nSW5kaWNhdG9yIGZyb20gXCIuL0xvYWRpbmdJbmRpY2F0b3JcIjtcbmltcG9ydCB1dGlscyBmcm9tIFwiY29tbW9uL3V0aWxzXCI7XG5cbmxldCBhcGk7XG5cbmNvbnN0IHF1ZXJ5ID0ge1xuICAgIHNlbGVjdF9hdXRob3JzOiBbXCJydWRleFwiXSxcbiAgICB0YWc6IFwicnVkZXhcIixcbiAgICBsaW1pdDogMjAsXG4gICAgZmlsdGVyX3RhZ19tYXNrczogW1wiZm0tXCJdXG59O1xuXG5jb25zdCBhbGlnblJpZ2h0ID0ge3RleHRBbGlnbjogXCJyaWdodFwifTtcbmNvbnN0IGFsaWduTGVmdCA9IHt0ZXh0QWxpZ246IFwibGVmdFwifTtcbmNvbnN0IHJvd0hlaWdodCA9IHtoZWlnaHQ6IFwiMnJlbVwifTtcbmNvbnN0IGJvZHlDZWxsID0ge3BhZGRpbmc6IFwiMC41cmVtIDFyZW1cIn07XG5jb25zdCBoZWFkZXJDZWxsID0ge3BhZGRpbmc6IFwiMC44NXJlbSAxcmVtXCJ9O1xuXG5jb25zdCBsZWZ0Q2VsbCA9IHsuLi5hbGlnbkxlZnQsIC4uLmJvZHlDZWxsfTtcbmNvbnN0IHJpZ2h0Q2VsbCA9IHsuLi5hbGlnblJpZ2h0LCAuLi5ib2R5Q2VsbH07XG5cbmNvbnN0IGxlZnRDZWxsSGVhZGVyID0gey4uLmFsaWduTGVmdCwgLi4uaGVhZGVyQ2VsbH07XG5jb25zdCByaWdodENlbGxIZWFkZXIgPSB7Li4uYWxpZ25SaWdodCwgLi4uaGVhZGVyQ2VsbH07XG5cbmNvbnN0IHNlY29uZENvbCA9IHsuLi5sZWZ0Q2VsbCwgd2lkdGg6IFwiMTgwcHhcIn07XG5cbmNvbnN0IFNvbWV0aGluZ1dlbnRXcm9uZyA9ICgpID0+IChcbiAgICA8cD5cbiAgICAgICAgPFRyYW5zbGF0ZSBjb250ZW50PVwibmV3cy5lcnJvcnMuZmV0Y2hcIiAvPlxuICAgIDwvcD5cbik7XG5cbmNvbnN0IFJldXNhYmxlTGluayA9ICh7ZGF0YSwgbG9jYWxlLCB1cmwsIGlzTGluayA9IGZhbHNlfSkgPT4gKFxuICAgIDxhXG4gICAgICAgIC8vaHJlZj17YGh0dHBzOi8vc3RlZW1pdC5jb20ke3VybH1gfVxuICAgICAgICAvL2hyZWY9e2BodHRwczovL2dvbG9zLmlkJHt1cmx9YH1cbiAgICAgICAgaHJlZj17XG4gICAgICAgICAgICBsb2NhbGUgPT0gXCJydVwiXG4gICAgICAgICAgICAgICAgPyBgaHR0cHM6Ly9nb2xvcy5pZCR7dXJsfWBcbiAgICAgICAgICAgICAgICA6IGBodHRwczovL3N0ZWVtaXQuY29tJHt1cmx9YFxuICAgICAgICB9XG4gICAgICAgIHJlbD1cIm5vcmVmZXJyZXIgbm9vcGVuZXJcIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICBzdHlsZT17e2Rpc3BsYXk6IFwiYmxvY2tcIn19XG4gICAgICAgIGNsYXNzTmFtZT17IWlzTGluayA/IFwicHJpbWFyeS10ZXh0XCIgOiBcImV4dGVybmFsLWxpbmtcIn1cbiAgICA+XG4gICAgICAgIHt1dGlscy5zYW5pdGl6ZShkYXRhKX1cbiAgICA8L2E+XG4pO1xuXG5jb25zdCBOZXdzVGFibGUgPSAoe2RhdGEsIHdpZHRoLCBsb2NhbGV9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPHRhYmxlXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1ob3ZlciBkYXNoYm9hcmQtdGFibGVcIlxuICAgICAgICAgICAgc3R5bGU9e3tmb250U2l6ZTogXCIwLjg1cmVtXCJ9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e3JpZ2h0Q2VsbEhlYWRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50PVwic3BhblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImFjY291bnQudm90ZXMubGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e2xlZnRDZWxsSGVhZGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50PVwiZXhwbG9yZXIuYmxvY2suZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e2xlZnRDZWxsSGVhZGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJuZXdzLnN1YmplY3RcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICA8dGggc3R5bGU9e2xlZnRDZWxsSGVhZGVyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJuZXdzLmF1dGhvclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAge2RhdGEubWFwKChzaW5nbGVOZXdzLCBpdGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRoZUF1dGhvciA9IHNpbmdsZU5ld3MucGFyZW50QXV0aG9yXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHNpbmdsZU5ld3MucGFyZW50QXV0aG9yXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHNpbmdsZU5ld3MuYXV0aG9yO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0ZWREYXRlID0gY291bnRlcnBhcnQubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShzaW5nbGVOZXdzLmNyZWF0ZWQpXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNtYXJ0VGl0bGUgPVxuICAgICAgICAgICAgICAgICAgICAgICAgc2luZ2xlTmV3cy50aXRsZS5sZW5ndGggKiA2ID4gd2lkdGggLSA0NTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGAke3NpbmdsZU5ld3MudGl0bGUuc2xpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKHdpZHRoIC0gNDUwKSAvIDZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9Li4uYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogc2luZ2xlTmV3cy50aXRsZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2Ake3NpbmdsZU5ld3MudGl0bGUuc2xpY2UoMCwgMTApfSR7aXRlcn1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e3JpZ2h0Q2VsbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXVzYWJsZUxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2l0ZXIgKyAxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e3NpbmdsZU5ld3MudXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtzZWNvbmRDb2x9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV1c2FibGVMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtmb3JtYXR0ZWREYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e3NpbmdsZU5ld3MudXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtsZWZ0Q2VsbH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXVzYWJsZUxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3NtYXJ0VGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17c2luZ2xlTmV3cy51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17bGVmdENlbGx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV1c2FibGVMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXt0aGVBdXRob3J9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17c2luZ2xlTmV3cy51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgIDx0ciBzdHlsZT17cm93SGVpZ2h0fT5cbiAgICAgICAgICAgICAgICAgICAgPHRoIHN0eWxlPXtyaWdodENlbGx9IC8+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17bGVmdENlbGx9IC8+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17bGVmdENlbGx9IC8+XG4gICAgICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17bGVmdENlbGx9IC8+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDwvdGFibGU+XG4gICAgKTtcbn07XG5cbmNsYXNzIE5ld3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgICAgIGlzV3Jvbmc6IGZhbHNlLFxuICAgICAgICAgICAgZGlzY3Vzc2lvbnM6IFtdLFxuICAgICAgICAgICAgd2lkdGg6IDEyMDAsXG4gICAgICAgICAgICBjdXJyZW50TG9jYWxlOiBUcmFuc2xhdGUuZ2V0TG9jYWxlKClcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51cGRhdGVEaW1lbnNpb25zID0gdGhpcy51cGRhdGVEaW1lbnNpb25zLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub3JkZXJEaXNjdXNzaW9ucyA9IHRoaXMub3JkZXJEaXNjdXNzaW9ucy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHVwZGF0ZURpbWVuc2lvbnMoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aH0pO1xuICAgIH1cblxuICAgIG9yZGVyRGlzY3Vzc2lvbnMoZGlzY3Vzc2lvbnMpIHtcbiAgICAgICAgY29uc3Qgb3JkZXJlZERpc2N1c3Npb25zID0gZGlzY3Vzc2lvbnMuc29ydChcbiAgICAgICAgICAgIChhLCBiKSA9PiBuZXcgRGF0ZShiLmNyZWF0ZWQpIC0gbmV3IERhdGUoYS5jcmVhdGVkKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtkaXNjdXNzaW9uczogb3JkZXJlZERpc2N1c3Npb25zLCBpc0xvYWRpbmc6IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucygpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZURpbWVuc2lvbnMpO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmN1cnJlbnRMb2NhbGUgPT09IFwicnVcIikge1xuICAgICAgICAgICAgYXBpID0gYXBpX3J1LmFwaTtcbiAgICAgICAgICAgIGFwaS5zZXRXZWJTb2NrZXQoXCJ3c3M6Ly9hcGkuZ29sb3MuaWQvd3NcIik7XG4gICAgICAgIH0gZWxzZSBhcGkgPSBhcGlfZW4uYXBpO1xuXG4gICAgICAgIGFwaS5nZXREaXNjdXNzaW9uc0J5QmxvZyhxdWVyeSlcbiAgICAgICAgICAgIC50aGVuKGRpc2N1c3Npb25zID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyRGlzY3Vzc2lvbnMoZGlzY3Vzc2lvbnMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNMb2FkaW5nOiBmYWxzZSwgaXNXcm9uZzogdHJ1ZX0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlRGltZW5zaW9ucyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBpc0xvYWRpbmcsXG4gICAgICAgICAgICBpc1dyb25nLFxuICAgICAgICAgICAgZGlzY3Vzc2lvbnMsXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGN1cnJlbnRMb2NhbGVcbiAgICAgICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayBwYWdlLWxheW91dFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnQtdGFic1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1ibG9jayB2ZXJ0aWNhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNXcm9uZyAmJiA8U29tZXRoaW5nV2VudFdyb25nIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNMb2FkaW5nID8gPExvYWRpbmdJbmRpY2F0b3IgLz4gOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWlzV3JvbmcgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFpc0xvYWRpbmcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXdzVGFibGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkaXNjdXNzaW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXtjdXJyZW50TG9jYWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXdzO1xuIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9