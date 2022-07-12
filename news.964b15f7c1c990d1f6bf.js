(this["webpackChunkRuDEX3_light"] = this["webpackChunkRuDEX3_light"] || []).push([[14],{

/***/ 2918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(428);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(623);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var steem_js_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2919);
/* harmony import */ var steem_js_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(steem_js_api__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var golos_lib_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2941);
/* harmony import */ var golos_lib_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(golos_lib_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1822);
/* harmony import */ var react_translate_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_translate_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1941);
/* harmony import */ var common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(607);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(656);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1816);
/* harmony import */ var _stores_IntlStore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2622);










let api;

let query_func = function (locale) {
  let query = {
    select_authors: ["rudex"],
    tag: "rudex",
    limit: 20
  };
  locale == "ru" ? query.filter_tag_masks = ["fm-"] : query;
  return query;
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
  }, "#"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", {
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
    let formattedDate = counterpart__WEBPACK_IMPORTED_MODULE_1___default().localize(new Date(singleNews.created));
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
      currentLocale: this.props.currentLocale
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
    this.processUpdateNews(this.state.currentLocale);
  }

  processUpdateNews(currentLocale, oldLocale = false) {
    if (oldLocale !== false && currentLocale !== "ru" && oldLocale !== "ru") return false;
    this.setState({
      isLoading: true
    });
    let api = false;

    if (currentLocale == "ru") {
      api = golos_lib_js__WEBPACK_IMPORTED_MODULE_3__.api; //api.setWebSocket("wss://api.golos.id/ws");//deprecated for new lib

      golos_lib_js__WEBPACK_IMPORTED_MODULE_3__.config.set('websocket', "wss://api.golos.id/ws");
      this.setState({
        currentLocale: currentLocale
      });
    } else api = steem_js_api__WEBPACK_IMPORTED_MODULE_2__.api;

    api.getDiscussionsByBlog(query_func(currentLocale)).then(discussions => {
      this.setState({
        isLoading: true,
        currentLocale: currentLocale,
        discussions: discussions
      });
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

  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.currentLocale !== this.props.currentLocale && nextState.discussions !== this.state.discussions) {
      this.processUpdateNews(nextProps.currentLocale, this.props.currentLocale);
    }
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
    }, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LoadingIndicator__WEBPACK_IMPORTED_MODULE_5__["default"], {
      loadingText: counterpart__WEBPACK_IMPORTED_MODULE_1___default().translate("footer.loading")
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "account-tabs"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "tab-content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "grid-block vertical"
    }, isWrong && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SomethingWentWrong, null), !isWrong && !isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(NewsTable, {
      width: width,
      data: discussions,
      locale: currentLocale
    }))))));
  }

}

News = (0,alt_react__WEBPACK_IMPORTED_MODULE_8__.connect)(News, {
  listenTo() {
    return [_stores_IntlStore__WEBPACK_IMPORTED_MODULE_9__["default"]];
  },

  getProps() {
    return {
      currentLocale: _stores_IntlStore__WEBPACK_IMPORTED_MODULE_9__["default"].getState().currentLocale
    };
  }

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (News);

/***/ }),

/***/ 3235:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 3281:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 2939:
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy45NjRiMTVmN2MxYzk5MGQxZjZiZi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7O0FBRUE7QUFFQTtBQUFBOztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBVEE7O0FBZUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQU1BO0FBQUE7QUFPQTtBQUFBO0FBRUE7QUFDQTtBQUZBO0FBS0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFNQTtBQUlBO0FBSUE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQVFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFFQTtBQUdBO0FBQ0E7QUFEQTtBQUlBOztBQUNBO0FBRUE7O0FBRUE7QUFFQTtBQUNBO0FBREE7QUFJQTs7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQUE7QUFHQTtBQURBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUhBO0FBYUE7O0FBdEhBOztBQXlIQTtBQUdBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOztBQVJBO0FBWUE7Ozs7Ozs7QUMvUkE7Ozs7Ozs7QUNBQTs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0Ly4vYXBwL2NvbXBvbmVudHMvTmV3cy5qc3giLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0L2lnbm9yZWR8RTpcXE9TUGFuZWxcXGRvbWFpbnNcXHJ1ZGV4XFwyLiBHVUlcXHJ1ZGV4LXVpXFxub2RlX21vZHVsZXNcXGdvbG9zLWxpYi1qc1xcbGliXFxhcGlcXHRyYW5zcG9ydHN8d3MiLCJ3ZWJwYWNrOi8vUnVERVgzLWxpZ2h0L2lnbm9yZWR8RTpcXE9TUGFuZWxcXGRvbWFpbnNcXHJ1ZGV4XFwyLiBHVUlcXHJ1ZGV4LXVpXFxub2RlX21vZHVsZXNcXGdvbG9zLWxpYi1qc1xcbm9kZV9tb2R1bGVzXFxzZWN1cmUtcmFuZG9tXFxsaWJ8Y3J5cHRvIiwid2VicGFjazovL1J1REVYMy1saWdodC9pZ25vcmVkfEU6XFxPU1BhbmVsXFxkb21haW5zXFxydWRleFxcMi4gR1VJXFxydWRleC11aVxcbm9kZV9tb2R1bGVzXFxzdGVlbS1qcy1hcGlcXGxpYlxcYXBpXFx0cmFuc3BvcnRzfHdzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCAqIGFzIGFwaV9lbiBmcm9tIFwic3RlZW0tanMtYXBpXCI7XG5pbXBvcnQgKiBhcyBhcGlfcnUgZnJvbSBcImdvbG9zLWxpYi1qc1wiO1xuaW1wb3J0IFRyYW5zbGF0ZSBmcm9tIFwicmVhY3QtdHJhbnNsYXRlLWNvbXBvbmVudFwiO1xuaW1wb3J0IExvYWRpbmdJbmRpY2F0b3IgZnJvbSBcIi4vTG9hZGluZ0luZGljYXRvclwiO1xuaW1wb3J0IHV0aWxzIGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XG5pbXBvcnQgSW50bFN0b3JlIGZyb20gXCIuLi9zdG9yZXMvSW50bFN0b3JlXCI7XG5cbmxldCBhcGk7XG5cbmxldCBxdWVyeV9mdW5jID0gZnVuY3Rpb24gKGxvY2FsZSkge1xuICAgIGxldCBxdWVyeSA9IHtcbiAgICAgICAgc2VsZWN0X2F1dGhvcnM6IFtcInJ1ZGV4XCJdLFxuICAgICAgICB0YWc6IFwicnVkZXhcIixcbiAgICAgICAgbGltaXQ6IDIwXG4gICAgfTtcbiAgICBsb2NhbGUgPT0gXCJydVwiID8gKHF1ZXJ5LmZpbHRlcl90YWdfbWFza3MgPSBbXCJmbS1cIl0pIDogcXVlcnk7XG4gICAgcmV0dXJuIHF1ZXJ5O1xufTtcblxuY29uc3QgYWxpZ25SaWdodCA9IHt0ZXh0QWxpZ246IFwicmlnaHRcIn07XG5jb25zdCBhbGlnbkxlZnQgPSB7dGV4dEFsaWduOiBcImxlZnRcIn07XG5jb25zdCByb3dIZWlnaHQgPSB7aGVpZ2h0OiBcIjJyZW1cIn07XG5jb25zdCBib2R5Q2VsbCA9IHtwYWRkaW5nOiBcIjAuNXJlbSAxcmVtXCJ9O1xuY29uc3QgaGVhZGVyQ2VsbCA9IHtwYWRkaW5nOiBcIjAuODVyZW0gMXJlbVwifTtcblxuY29uc3QgbGVmdENlbGwgPSB7Li4uYWxpZ25MZWZ0LCAuLi5ib2R5Q2VsbH07XG5jb25zdCByaWdodENlbGwgPSB7Li4uYWxpZ25SaWdodCwgLi4uYm9keUNlbGx9O1xuXG5jb25zdCBsZWZ0Q2VsbEhlYWRlciA9IHsuLi5hbGlnbkxlZnQsIC4uLmhlYWRlckNlbGx9O1xuY29uc3QgcmlnaHRDZWxsSGVhZGVyID0gey4uLmFsaWduUmlnaHQsIC4uLmhlYWRlckNlbGx9O1xuXG5jb25zdCBzZWNvbmRDb2wgPSB7Li4ubGVmdENlbGwsIHdpZHRoOiBcIjE4MHB4XCJ9O1xuXG5jb25zdCBTb21ldGhpbmdXZW50V3JvbmcgPSAoKSA9PiAoXG4gICAgPHA+XG4gICAgICAgIDxUcmFuc2xhdGUgY29udGVudD1cIm5ld3MuZXJyb3JzLmZldGNoXCIvPlxuICAgIDwvcD5cbik7XG5cbmNvbnN0IFJldXNhYmxlTGluayA9ICh7ZGF0YSwgbG9jYWxlLCB1cmwsIGlzTGluayA9IGZhbHNlfSkgPT4gKFxuICAgIDxhXG4gICAgICAgIGhyZWY9e1xuICAgICAgICAgICAgbG9jYWxlID09IFwicnVcIlxuICAgICAgICAgICAgICAgID8gYGh0dHBzOi8vZ29sb3MuaWQke3VybH1gXG4gICAgICAgICAgICAgICAgOiBgaHR0cHM6Ly9zdGVlbWl0LmNvbSR7dXJsfWBcbiAgICAgICAgfVxuICAgICAgICByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiBcImJsb2NrXCJ9fVxuICAgICAgICBjbGFzc05hbWU9eyFpc0xpbmsgPyBcInByaW1hcnktdGV4dFwiIDogXCJleHRlcm5hbC1saW5rXCJ9XG4gICAgPlxuICAgICAgICB7dXRpbHMuc2FuaXRpemUoZGF0YSl9XG4gICAgPC9hPlxuKTtcblxuY29uc3QgTmV3c1RhYmxlID0gKHtkYXRhLCB3aWR0aCwgbG9jYWxlfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDx0YWJsZVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtaG92ZXIgZGFzaGJvYXJkLXRhYmxlXCJcbiAgICAgICAgICAgIHN0eWxlPXt7Zm9udFNpemU6IFwiMC44NXJlbVwifX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17cmlnaHRDZWxsSGVhZGVyfT5cbiAgICAgICAgICAgICAgICAgICAgI1xuICAgICAgICAgICAgICAgICAgICB7Lyo8VHJhbnNsYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJzcGFuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJhY2NvdW50LnZvdGVzLmxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAvPiovfVxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHN0eWxlPXtsZWZ0Q2VsbEhlYWRlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInNwYW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudD1cImV4cGxvcmVyLmJsb2NrLmRhdGVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIHN0eWxlPXtsZWZ0Q2VsbEhlYWRlcn0+XG4gICAgICAgICAgICAgICAgICAgIDxUcmFuc2xhdGUgY29tcG9uZW50PVwic3BhblwiIGNvbnRlbnQ9XCJuZXdzLnN1YmplY3RcIi8+XG4gICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICA8dGggc3R5bGU9e2xlZnRDZWxsSGVhZGVyfT5cbiAgICAgICAgICAgICAgICAgICAgPFRyYW5zbGF0ZSBjb21wb25lbnQ9XCJzcGFuXCIgY29udGVudD1cIm5ld3MuYXV0aG9yXCIvPlxuICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtkYXRhLm1hcCgoc2luZ2xlTmV3cywgaXRlcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRoZUF1dGhvciA9IHNpbmdsZU5ld3MucGFyZW50QXV0aG9yXG4gICAgICAgICAgICAgICAgICAgID8gc2luZ2xlTmV3cy5wYXJlbnRBdXRob3JcbiAgICAgICAgICAgICAgICAgICAgOiBzaW5nbGVOZXdzLmF1dGhvcjtcblxuICAgICAgICAgICAgICAgIGxldCBmb3JtYXR0ZWREYXRlID0gY291bnRlcnBhcnQubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIG5ldyBEYXRlKHNpbmdsZU5ld3MuY3JlYXRlZCksXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNtYXJ0VGl0bGUgPVxuICAgICAgICAgICAgICAgICAgICBzaW5nbGVOZXdzLnRpdGxlLmxlbmd0aCAqIDYgPiB3aWR0aCAtIDQ1MFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBgJHtzaW5nbGVOZXdzLnRpdGxlLnNsaWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguZmxvb3Iod2lkdGggLSA0NTApIC8gNlxuICAgICAgICAgICAgICAgICAgICAgICAgKX0uLi5gXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHNpbmdsZU5ld3MudGl0bGU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17YCR7c2luZ2xlTmV3cy50aXRsZS5zbGljZSgwLCAxMCl9JHtpdGVyfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtyaWdodENlbGx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXVzYWJsZUxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17aXRlciArIDF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e3NpbmdsZU5ld3MudXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkIHN0eWxlPXtzZWNvbmRDb2x9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXVzYWJsZUxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17Zm9ybWF0dGVkRGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxlPXtsb2NhbGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD17c2luZ2xlTmV3cy51cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQgc3R5bGU9e2xlZnRDZWxsfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmV1c2FibGVMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e3NtYXJ0VGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZT17bG9jYWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9e3NpbmdsZU5ld3MudXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBzdHlsZT17bGVmdENlbGx9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZXVzYWJsZUxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17dGhlQXV0aG9yfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbGU9e2xvY2FsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtzaW5nbGVOZXdzLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyIHN0eWxlPXtyb3dIZWlnaHR9PlxuICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17cmlnaHRDZWxsfS8+XG4gICAgICAgICAgICAgICAgPHRoIHN0eWxlPXtsZWZ0Q2VsbH0vPlxuICAgICAgICAgICAgICAgIDx0aCBzdHlsZT17bGVmdENlbGx9Lz5cbiAgICAgICAgICAgICAgICA8dGggc3R5bGU9e2xlZnRDZWxsfS8+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgPC90YWJsZT5cbiAgICApO1xufTtcblxuY2xhc3MgTmV3cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgaXNXcm9uZzogZmFsc2UsXG4gICAgICAgICAgICBkaXNjdXNzaW9uczogW10sXG4gICAgICAgICAgICB3aWR0aDogMTIwMCxcbiAgICAgICAgICAgIGN1cnJlbnRMb2NhbGU6IHRoaXMucHJvcHMuY3VycmVudExvY2FsZSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51cGRhdGVEaW1lbnNpb25zID0gdGhpcy51cGRhdGVEaW1lbnNpb25zLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub3JkZXJEaXNjdXNzaW9ucyA9IHRoaXMub3JkZXJEaXNjdXNzaW9ucy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIHVwZGF0ZURpbWVuc2lvbnMoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3dpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aH0pO1xuICAgIH1cblxuICAgIG9yZGVyRGlzY3Vzc2lvbnMoZGlzY3Vzc2lvbnMpIHtcbiAgICAgICAgY29uc3Qgb3JkZXJlZERpc2N1c3Npb25zID0gZGlzY3Vzc2lvbnMuc29ydChcbiAgICAgICAgICAgIChhLCBiKSA9PiBuZXcgRGF0ZShiLmNyZWF0ZWQpIC0gbmV3IERhdGUoYS5jcmVhdGVkKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtkaXNjdXNzaW9uczogb3JkZXJlZERpc2N1c3Npb25zLCBpc0xvYWRpbmc6IGZhbHNlfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRGltZW5zaW9ucygpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnVwZGF0ZURpbWVuc2lvbnMpO1xuXG4gICAgICAgIHRoaXMucHJvY2Vzc1VwZGF0ZU5ld3ModGhpcy5zdGF0ZS5jdXJyZW50TG9jYWxlKTtcbiAgICB9XG5cbiAgICBwcm9jZXNzVXBkYXRlTmV3cyhjdXJyZW50TG9jYWxlLCBvbGRMb2NhbGUgPSBmYWxzZSkge1xuXG4gICAgICAgIGlmIChvbGRMb2NhbGUgIT09IGZhbHNlICYmIGN1cnJlbnRMb2NhbGUgIT09IFwicnVcIiAmJiBvbGRMb2NhbGUgIT09IFwicnVcIilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGFwaSA9IGZhbHNlO1xuICAgICAgICBpZiAoY3VycmVudExvY2FsZSA9PSBcInJ1XCIpIHtcblxuICAgICAgICAgICAgYXBpID0gYXBpX3J1LmFwaTtcbiAgICAgICAgICAgIC8vYXBpLnNldFdlYlNvY2tldChcIndzczovL2FwaS5nb2xvcy5pZC93c1wiKTsvL2RlcHJlY2F0ZWQgZm9yIG5ldyBsaWJcbiAgICAgICAgICAgIGFwaV9ydS5jb25maWcuc2V0KCd3ZWJzb2NrZXQnLCBcIndzczovL2FwaS5nb2xvcy5pZC93c1wiKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgY3VycmVudExvY2FsZTogY3VycmVudExvY2FsZSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgYXBpID0gYXBpX2VuLmFwaTtcblxuICAgICAgICBhcGkuZ2V0RGlzY3Vzc2lvbnNCeUJsb2cocXVlcnlfZnVuYyhjdXJyZW50TG9jYWxlKSlcbiAgICAgICAgICAgIC50aGVuKGRpc2N1c3Npb25zID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgaXNMb2FkaW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50TG9jYWxlOiBjdXJyZW50TG9jYWxlLFxuICAgICAgICAgICAgICAgICAgICBkaXNjdXNzaW9uczogZGlzY3Vzc2lvbnMsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9yZGVyRGlzY3Vzc2lvbnMoZGlzY3Vzc2lvbnMpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNMb2FkaW5nOiBmYWxzZSwgaXNXcm9uZzogdHJ1ZX0pO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMudXBkYXRlRGltZW5zaW9ucyk7XG4gICAgfVxuXG4gICAgVU5TQUZFX2NvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgbmV4dFByb3BzLmN1cnJlbnRMb2NhbGUgIT09IHRoaXMucHJvcHMuY3VycmVudExvY2FsZSAmJlxuICAgICAgICAgICAgbmV4dFN0YXRlLmRpc2N1c3Npb25zICE9PSB0aGlzLnN0YXRlLmRpc2N1c3Npb25zXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGhpcy5wcm9jZXNzVXBkYXRlTmV3cyhuZXh0UHJvcHMuY3VycmVudExvY2FsZSwgdGhpcy5wcm9wcy5jdXJyZW50TG9jYWxlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgaXNMb2FkaW5nLFxuICAgICAgICAgICAgaXNXcm9uZyxcbiAgICAgICAgICAgIGRpc2N1c3Npb25zLFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBjdXJyZW50TG9jYWxlXG4gICAgICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgcGFnZS1sYXlvdXRcIj5cbiAgICAgICAgICAgICAgICB7aXNMb2FkaW5nID9cbiAgICAgICAgICAgICAgICAgICAgPExvYWRpbmdJbmRpY2F0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmdUZXh0PXtjb3VudGVycGFydC50cmFuc2xhdGUoXCJmb290ZXIubG9hZGluZ1wiKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFjY291bnQtdGFic1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtYmxvY2sgdmVydGljYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNXcm9uZyAmJiA8U29tZXRoaW5nV2VudFdyb25nLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFpc1dyb25nICYmICFpc0xvYWRpbmcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmV3c1RhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkaXNjdXNzaW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZT17Y3VycmVudExvY2FsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbk5ld3MgPSBjb25uZWN0KFxuICAgIE5ld3MsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbSW50bFN0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRMb2NhbGU6IEludGxTdG9yZS5nZXRTdGF0ZSgpLmN1cnJlbnRMb2NhbGUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3cztcbiIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyIsIi8qIChpZ25vcmVkKSAqLyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==