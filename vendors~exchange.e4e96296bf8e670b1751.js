(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ 2411:
/***/ (function(module, exports) {

module.exports = function browserLocale () {
  var lang

  if (navigator.languages && navigator.languages.length) {
    // latest versions of Chrome and Firefox set this correctly
    lang = navigator.languages[0]
  } else if (navigator.userLanguage) {
    // IE only
    lang = navigator.userLanguage
  } else {
    // latest versions of Chrome, Firefox, and Safari set this correctly
    lang = navigator.language
  }

  return lang
}


/***/ }),

/***/ 2430:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2431);

/***/ }),

/***/ 2431:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(387), __webpack_require__(729), __webpack_require__(2432), __webpack_require__(2433), __webpack_require__(2434), __webpack_require__(2435)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes, _Table, _Row, _Cell, elementResizeEvent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Cell = exports.Row = exports.Table = exports.StickyTable = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _Table2 = _interopRequireDefault(_Table);

  var _Row2 = _interopRequireDefault(_Row);

  var _Cell2 = _interopRequireDefault(_Cell);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var StickyTable = function (_PureComponent) {
    _inherits(StickyTable, _PureComponent);

    function StickyTable(props) {
      _classCallCheck(this, StickyTable);

      var _this = _possibleConstructorReturn(this, (StickyTable.__proto__ || Object.getPrototypeOf(StickyTable)).call(this, props));

      _this.setScrollData = function () {
        _this.suppressScrollX = false;
        _this.suppressScrollY = false;

        return _this.scrollData = {
          scrollTop: _this.yScrollbar.scrollTop,
          scrollHeight: _this.yScrollbar.scrollHeight,
          clientHeight: _this.yScrollbar.clientHeight,
          scrollLeft: _this.xScrollbar.scrollLeft,
          scrollWidth: _this.xScrollbar.scrollWidth,
          clientWidth: _this.xScrollbar.clientWidth
        };
      };

      _this.onScrollBarX = function () {
        if (!_this.suppressScrollX) {
          _this.scrollData.scrollLeft = _this.xWrapper.scrollLeft = _this.xScrollbar.scrollLeft;
          _this.suppressScrollX = true;
        } else {
          _this.handleScroll();
          _this.suppressScrollX = false;
        }
      };

      _this.onScrollBarY = function () {
        if (!_this.suppressScrollY) {
          _this.scrollData.scrollTop = _this.yWrapper.scrollTop = _this.yScrollbar.scrollTop;
          _this.suppressScrollY = true;
        } else {
          _this.handleScroll();
          _this.suppressScrollY = false;
        }
      };

      _this.onScrollX = function () {
        var scrollLeft = Math.max(_this.xWrapper.scrollLeft, 0);
        _this.stickyHeader.style.transform = 'translate(' + -1 * scrollLeft + 'px, 0)';
      };

      _this.scrollXScrollbar = function () {
        if (!_this.suppressScrollX) {
          _this.scrollData.scrollLeft = _this.xScrollbar.scrollLeft = _this.xWrapper.scrollLeft;
          _this.suppressScrollX = true;
        } else {
          _this.handleScroll();
          _this.suppressScrollX = false;
        }
      };

      _this.scrollYScrollbar = function () {
        if (!_this.suppressScrollY) {
          _this.scrollData.scrollTop = _this.yScrollbar.scrollTop = _this.yWrapper.scrollTop;
          _this.suppressScrollY = true;
        } else {
          _this.handleScroll();
          _this.suppressScrollY = false;
        }
      };

      _this.handleScroll = function () {
        if (_this.props.onScroll) {
          _this.props.onScroll(_this.scrollData);
        }
      };

      _this.onResize = function () {
        _this.setScrollBarDims();
        _this.setScrollBarWrapperDims();

        _this.setRowHeights();
        _this.setColumnWidths();

        _this.setScrollData();
        _this.handleScroll();
      };

      _this.setScrollBarWrapperDims = function () {
        _this.xScrollbar.style.width = 'calc(100% - ' + _this.yScrollSize + 'px)';
        _this.yScrollbar.style.height = 'calc(100% - ' + _this.stickyHeader.offsetHeight + 'px)';
        _this.yScrollbar.style.top = _this.stickyHeader.offsetHeight + 'px';
      };

      _this.id = Math.floor(Math.random() * 1000000000) + '';

      _this.rowCount = 0;
      _this.columnCount = 0;
      _this.xScrollSize = 0;
      _this.yScrollSize = 0;

      _this.stickyHeaderCount = props.stickyHeaderCount === 0 ? 0 : _this.stickyHeaderCount || 1;

      _this.isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
      return _this;
    }

    _createClass(StickyTable, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.table = document.getElementById('sticky-table-' + this.id);

        if (this.table) {
          this.realTable = this.table.querySelector('#sticky-table-x-wrapper').firstChild;
          this.xScrollbar = this.table.querySelector('#x-scrollbar');
          this.yScrollbar = this.table.querySelector('#y-scrollbar');
          this.xWrapper = this.table.querySelector('#sticky-table-x-wrapper');
          this.yWrapper = this.table.querySelector('#sticky-table-y-wrapper');
          this.stickyHeader = this.table.querySelector('#sticky-table-header');
          this.stickyColumn = this.table.querySelector('#sticky-table-column');
          this.stickyCorner = this.table.querySelector('#sticky-table-corner');
          this.setScrollData();

          elementResizeEvent(this.realTable, this.onResize);

          this.onResize();
          setTimeout(this.onResize);
          this.addScrollBarEventHandlers();
        }
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        this.onResize();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.table) {
          this.xWrapper.removeEventListener('scroll', this.onScrollX);
          this.xWrapper.removeEventListener('scroll', this.scrollXScrollbar);
          this.xScrollbar.removeEventListener('scroll', this.onScrollBarX);

          this.yWrapper.removeEventListener('scroll', this.scrollYScrollbar);
          this.yScrollbar.removeEventListener('scroll', this.onScrollBarY);

          elementResizeEvent.unbind(this.realTable);
        }
      }
    }, {
      key: 'addScrollBarEventHandlers',
      value: function addScrollBarEventHandlers() {
        this.xWrapper.addEventListener('scroll', this.onScrollX);

        //X Scrollbars
        this.xWrapper.addEventListener('scroll', this.scrollXScrollbar);
        this.xScrollbar.addEventListener('scroll', this.onScrollBarX);

        //Y Scrollbars
        this.yWrapper.addEventListener('scroll', this.scrollYScrollbar);
        this.yScrollbar.addEventListener('scroll', this.onScrollBarY);
      }
    }, {
      key: 'setScrollBarPaddings',
      value: function setScrollBarPaddings() {
        var scrollPadding = '0px 0px ' + this.xScrollSize + 'px 0px';
        this.table.style.padding = scrollPadding;

        var scrollPadding = '0px ' + this.yScrollSize + 'px 0px 0px';
        this.xWrapper.firstChild.style.padding = scrollPadding;
      }
    }, {
      key: 'setScrollBarDims',
      value: function setScrollBarDims() {
        this.xScrollSize = this.xScrollbar.offsetHeight - this.xScrollbar.clientHeight;
        this.yScrollSize = this.yScrollbar.offsetWidth - this.yScrollbar.clientWidth;

        if (!this.isFirefox) {
          this.setScrollBarPaddings();
        }

        var width = this.getSize(this.realTable.firstChild).width;
        this.xScrollbar.firstChild.style.width = width + 'px';

        var height = this.getSize(this.realTable).height + this.xScrollSize - this.stickyHeader.offsetHeight;
        this.yScrollbar.firstChild.style.height = height + 'px';

        if (this.xScrollSize) this.xScrollbar.style.height = this.xScrollSize + 1 + 'px';
        if (this.yScrollSize) this.yScrollbar.style.width = this.yScrollSize + 1 + 'px';
      }
    }, {
      key: 'setRowHeights',
      value: function setRowHeights() {
        var r, cellToCopy, height;

        if (this.props.stickyColumnCount) {
          for (r = 0; r < this.rowCount; r++) {
            cellToCopy = this.realTable.childNodes[r].firstChild;

            if (cellToCopy) {
              height = this.getSize(cellToCopy).height;
              this.stickyColumn.firstChild.childNodes[r].firstChild.style.height = height + 'px';

              if (r === 0 && this.stickyCorner.firstChild.childNodes[r]) {
                this.stickyCorner.firstChild.firstChild.firstChild.style.height = height + 'px';
              }
            }
          }
        }
      }
    }, {
      key: 'setColumnWidths',
      value: function setColumnWidths() {
        var c, cellToCopy, cellStyle, width, cell, stickyWidth;

        if (this.stickyHeaderCount) {
          stickyWidth = 0;

          for (c = 0; c < this.columnCount; c++) {
            cellToCopy = this.realTable.firstChild.childNodes[c];

            if (cellToCopy) {
              width = this.getSize(cellToCopy).width;

              cell = this.table.querySelector('#sticky-header-cell-' + c);

              cell.style.width = width + 'px';
              cell.style.minWidth = width + 'px';

              var fixedColumnsHeader = this.stickyCorner.firstChild.firstChild;
              if (fixedColumnsHeader && fixedColumnsHeader.childNodes[c]) {
                cell = fixedColumnsHeader.childNodes[c];
                cell.style.width = width + 'px';
                cell.style.minWidth = width + 'px';

                cell = fixedColumnsHeader.childNodes[c];
                cell.style.width = width + 'px';
                cell.style.minWidth = width + 'px';

                stickyWidth += width;
              }
            }
          }

          this.stickyColumn.firstChild.style.width = stickyWidth + 'px';
          this.stickyColumn.firstChild.style.minWidth = stickyWidth + 'px';
        }
      }
    }, {
      key: 'getStickyColumns',
      value: function getStickyColumns(rows) {
        var columnsCount = this.props.stickyColumnCount;
        var cells;
        var stickyRows = [];

        rows.forEach(function (row, r) {
          cells = _react2.default.Children.toArray(row.props.children);

          stickyRows.push(_react2.default.createElement(
            _Row2.default,
            _extends({}, row.props, { id: '', key: r }),
            cells.slice(0, columnsCount)
          ));
        });

        return stickyRows;
      }
    }, {
      key: 'getStickyHeader',
      value: function getStickyHeader(rows) {
        var row = rows[0];
        var cells = [];

        _react2.default.Children.toArray(row.props.children).forEach(function (cell, c) {
          cells.push(_react2.default.cloneElement(cell, { id: 'sticky-header-cell-' + c, key: c }));
        });

        return _react2.default.createElement(
          _Row2.default,
          _extends({}, row.props, { id: 'sticky-header-row' }),
          cells
        );
      }
    }, {
      key: 'getStickyCorner',
      value: function getStickyCorner(rows) {
        var columnsCount = this.props.stickyColumnCount;
        var cells;
        var stickyCorner = [];

        rows.forEach(function (row, r) {
          if (r === 0) {
            cells = _react2.default.Children.toArray(row.props.children);

            stickyCorner.push(_react2.default.createElement(
              _Row2.default,
              _extends({}, row.props, { id: '', key: r }),
              cells.slice(0, columnsCount)
            ));
          }
        });

        return stickyCorner;
      }
    }, {
      key: 'getSize',
      value: function getSize(node) {
        var width = node ? node.getBoundingClientRect().width : 0;
        var height = node ? node.getBoundingClientRect().height : 0;

        return { width: width, height: height };
      }
    }, {
      key: 'render',
      value: function render() {
        var rows = _react2.default.Children.toArray(this.props.children);
        var stickyColumn, stickyHeader, stickyCorner;

        this.rowCount = rows.length;
        this.columnCount = rows[0] && _react2.default.Children.toArray(rows[0].props.children).length || 0;

        if (rows.length) {
          if (this.props.stickyColumnCount > 0 && this.stickyHeaderCount > 0) {
            stickyCorner = this.getStickyCorner(rows);
          }
          if (this.props.stickyColumnCount > 0) {
            stickyColumn = this.getStickyColumns(rows);
          }
          if (this.stickyHeaderCount > 0) {
            stickyHeader = this.getStickyHeader(rows);
          }
        }

        return _react2.default.createElement(
          'div',
          { className: 'sticky-table ' + (this.props.className || ''), id: 'sticky-table-' + this.id },
          _react2.default.createElement(
            'div',
            { id: 'x-scrollbar' },
            _react2.default.createElement('div', null)
          ),
          _react2.default.createElement(
            'div',
            { id: 'y-scrollbar' },
            _react2.default.createElement('div', null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'sticky-table-corner', id: 'sticky-table-corner' },
            _react2.default.createElement(
              _Table2.default,
              null,
              stickyCorner
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'sticky-table-header', id: 'sticky-table-header' },
            _react2.default.createElement(
              _Table2.default,
              null,
              stickyHeader
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'sticky-table-y-wrapper', id: 'sticky-table-y-wrapper' },
            _react2.default.createElement(
              'div',
              { className: 'sticky-table-column', id: 'sticky-table-column' },
              _react2.default.createElement(
                _Table2.default,
                null,
                stickyColumn
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'sticky-table-x-wrapper', id: 'sticky-table-x-wrapper' },
              _react2.default.createElement(
                _Table2.default,
                null,
                rows
              )
            )
          )
        );
      }
    }]);

    return StickyTable;
  }(_react.PureComponent);

  StickyTable.propTypes = {
    stickyHeaderCount: _propTypes2.default.number,
    stickyColumnCount: _propTypes2.default.number,

    onScroll: _propTypes2.default.func
  };
  StickyTable.defaultProps = {
    stickyHeaderCount: 1,
    stickyColumnCount: 1
  };
  exports.StickyTable = StickyTable;
  exports.Table = _Table2.default;
  exports.Row = _Row2.default;
  exports.Cell = _Cell2.default;
});

/***/ }),

/***/ 2432:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(387), __webpack_require__(396)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _reactDom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Table = function (_Component) {
    _inherits(Table, _Component);

    function Table() {
      _classCallCheck(this, Table);

      return _possibleConstructorReturn(this, (Table.__proto__ || Object.getPrototypeOf(Table)).apply(this, arguments));
    }

    _createClass(Table, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          _extends({}, this.props, { className: 'sticky-table-container ' + (this.props.className || '') }),
          this.props.children
        );
      }
    }]);

    return Table;
  }(_react.Component);

  exports.default = Table;
});

/***/ }),

/***/ 2433:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(387), __webpack_require__(396)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _reactDom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Row = function (_Component) {
    _inherits(Row, _Component);

    function Row() {
      _classCallCheck(this, Row);

      return _possibleConstructorReturn(this, (Row.__proto__ || Object.getPrototypeOf(Row)).apply(this, arguments));
    }

    _createClass(Row, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          _extends({}, this.props, { className: 'sticky-table-row ' + (this.props.className || '') }),
          this.props.children
        );
      }
    }]);

    return Row;
  }(_react.Component);

  exports.default = Row;
});

/***/ }),

/***/ 2434:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(387), __webpack_require__(396)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _reactDom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var Cell = function (_Component) {
    _inherits(Cell, _Component);

    function Cell() {
      _classCallCheck(this, Cell);

      return _possibleConstructorReturn(this, (Cell.__proto__ || Object.getPrototypeOf(Cell)).apply(this, arguments));
    }

    _createClass(Cell, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          _extends({}, this.props, { className: 'sticky-table-cell ' + (this.props.className || '') }),
          this.props.children
        );
      }
    }]);

    return Cell;
  }(_react.Component);

  exports.default = Cell;
});

/***/ }),

/***/ 2435:
/***/ (function(module, exports) {

var requestFrame = (function () {
  var window = this
  var raf = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function fallbackRAF(func) {
      return window.setTimeout(func, 20)
    }
  return function requestFrameFunction(func) {
    return raf(func)
  }
})()

var cancelFrame = (function () {
  var window = this
  var cancel = window.cancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.clearTimeout
  return function cancelFrameFunction(id) {
    return cancel(id)
  }
})()

function resizeListener(e) {
  var win = e.target || e.srcElement
  if (win.__resizeRAF__) {
    cancelFrame(win.__resizeRAF__)
  }
  win.__resizeRAF__ = requestFrame(function () {
    var trigger = win.__resizeTrigger__
    trigger.__resizeListeners__.forEach(function (fn) {
      fn.call(trigger, e)
    })
  })
}

var exports = function exports(element, fn) {
  var window = this
  var document = window.document
  var isIE

  var attachEvent = document.attachEvent
  if (typeof navigator !== 'undefined') {
    isIE = navigator.userAgent.match(/Trident/) ||
      navigator.userAgent.match(/Edge/)
  }

  function objectLoad() {
    this.contentDocument.defaultView.__resizeTrigger__ = this.__resizeElement__
    this.contentDocument.defaultView.addEventListener('resize', resizeListener)
  }

  if (!element.__resizeListeners__) {
    element.__resizeListeners__ = []
    if (attachEvent) {
      element.__resizeTrigger__ = element
      element.attachEvent('onresize', resizeListener)
    } else {
      if (getComputedStyle(element).position === 'static') {
        element.style.position = 'relative'
      }
      var obj = (element.__resizeTrigger__ = document.createElement('object'))
      obj.setAttribute(
        'style',
        'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1; opacity: 0;'
      )
      obj.setAttribute('class', 'resize-sensor')
      obj.__resizeElement__ = element
      obj.onload = objectLoad
      obj.type = 'text/html'
      if (isIE) {
        element.appendChild(obj)
      }
      obj.data = 'about:blank'
      if (!isIE) {
        element.appendChild(obj)
      }
    }
  }
  element.__resizeListeners__.push(fn)
}

module.exports = typeof window === 'undefined' ? exports : exports.bind(window)

module.exports.unbind = function (element, fn) {
  var attachEvent = document.attachEvent
  if (fn) {
    element.__resizeListeners__.splice(
      element.__resizeListeners__.indexOf(fn),
      1
    )
  } else {
    element.__resizeListeners__ = []
  }
  if (!element.__resizeListeners__.length) {
    if (attachEvent) {
      element.detachEvent('onresize', resizeListener)
    } else {
      element.__resizeTrigger__.contentDocument.defaultView.removeEventListener(
        'resize',
        resizeListener
      )
      delete element.__resizeTrigger__.contentDocument.defaultView.__resizeTrigger__
      element.__resizeTrigger__ = !element.removeChild(
        element.__resizeTrigger__
      )
    }
    delete element.__resizeListeners__
  }
}


/***/ }),

/***/ 2448:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DatePicker = __webpack_require__(2449);

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _DatePicker2.default;
// export Calendar from './components/Calendar';

/***/ }),

/***/ 2449:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.outsideClickIgnoreClass = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(387);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(729);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = __webpack_require__(1346);

var _moment2 = _interopRequireDefault(_moment);

var _reactTether = __webpack_require__(2450);

var _reactTether2 = _interopRequireDefault(_reactTether);

var _Calendar = __webpack_require__(2453);

var _Calendar2 = _interopRequireDefault(_Calendar);

var _classnames2 = __webpack_require__(854);

var _classnames3 = _interopRequireDefault(_classnames2);

var _CustomTimePicker = __webpack_require__(2464);

var _CustomTimePicker2 = _interopRequireDefault(_CustomTimePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var outsideClickIgnoreClass = exports.outsideClickIgnoreClass = 'ignore--click--outside';

var DatePicker = function (_Component) {
  _inherits(DatePicker, _Component);

  function DatePicker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, DatePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call.apply(_ref, [this].concat(args))), _this), _this.lastValueChange = null, _this.state = {
      isOpen: false,
      momentValue: _this.props.defaultValue || null,
      inputValue: _this.getValue(_this.props.defaultValue, _this.props.timePicker),
      inputFormat: _this.props.inputFormat || _this.getInputFormat(_this.props.timePicker),
      timePicker: _this.props.timePicker,
      timePickerComponent: _this.props.timePicker ? _CustomTimePicker2.default : undefined
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(DatePicker, [{
    key: 'getInputFormat',
    value: function getInputFormat(timePicker) {
      if (!!timePicker) return 'YYYY/M/D hh:mm A';
      return 'YYYY/M/D';
    }
  }, {
    key: 'getValue',
    value: function getValue(inputValue, timePicker) {
      if (!inputValue) return '';
      var inputFormat = this.getInputFormat(timePicker);

      return inputValue.locale('en').format(this.props.inputFormat || inputFormat);
    }
  }, {
    key: 'setOpen',
    value: function setOpen(isOpen) {
      var momentValue = this.state.momentValue;

      if (momentValue && this.props.onChange) {
        this.handleChange(momentValue);
      }

      this.setState({ isOpen: isOpen });
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.value) {
        this.setMomentValue(this.props.value, false);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {

      if ('value' in nextProps && nextProps.value !== this.props.value) {
        this.setMomentValue(nextProps.value);
      }

      if ('timePicker' in nextProps && nextProps.timePicker !== this.props.timePicker) {
        this.setState({
          timePicker: nextProps.timePicker,
          timePickerComponent: this.props.timePicker ? _CustomTimePicker2.default : undefined
        });
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(value) {

      if (!this.lastValueChange || !this.lastValueChange.valueOf) {
        // console.log('change 1');
        this.lastValueChange = value;
        this.props.onChange(value);
        return;
      }

      if (value.valueOf && value.valueOf() !== this.lastValueChange.valueOf()) {
        // console.log('change 2');
        this.lastValueChange = value;
        this.props.onChange(value);
      }
    }
  }, {
    key: 'setMomentValue',
    value: function setMomentValue(momentValue, doChange) {
      var _state = this.state,
          inputFormat = _state.inputFormat,
          timePicker = _state.timePicker;


      if (doChange !== false && this.props.onChange) {
        this.handleChange(momentValue);
      }

      // const inputValue = momentValue.format(inputFormat);

      var inputValue = this.getValue(momentValue, timePicker);

      this.setState({ momentValue: momentValue, inputValue: inputValue });
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus() {
      this.setOpen(true);
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(event) {
      var onBlur = this.props.onBlur;
      var _state2 = this.state,
          isOpen = _state2.isOpen,
          momentValue = _state2.momentValue,
          inputFormat = _state2.inputFormat;


      if (isOpen) {
        this.refs.input.focus();
      } else if (onBlur) {
        onBlur(event);
      }

      if (momentValue) {
        var inputValue = momentValue.format(inputFormat);
        this.setState({ inputValue: inputValue });
      }
    }
  }, {
    key: 'handleClickOutsideCalendar',
    value: function handleClickOutsideCalendar() {
      this.setOpen(false);
    }
  }, {
    key: 'handleSelectDay',
    value: function handleSelectDay(selectedDay) {
      var oldValue = this.state.momentValue;

      var momentValue = selectedDay.clone();

      if (oldValue) {
        momentValue = momentValue.set({
          hour: oldValue.hours(),
          minute: oldValue.minutes(),
          second: oldValue.seconds()
        });
      }

      this.setMomentValue(momentValue);
    }
  }, {
    key: 'handleInputChange',
    value: function handleInputChange(event) {
      var inputFormat = this.state.inputFormat;

      var inputValue = event.target.value;
      var momentValue = (0, _moment2.default)(inputValue, inputFormat);

      if (momentValue.isValid()) {
        this.setState({ momentValue: momentValue });
      }

      this.setState({ inputValue: inputValue });
    }
  }, {
    key: 'handleInputClick',
    value: function handleInputClick() {
      if (!this.props.disabled) {
        this.setOpen(true);
      }
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      var _state3 = this.state,
          isOpen = _state3.isOpen,
          inputValue = _state3.inputValue;


      var className = (0, _classnames3.default)(this.props.className, _defineProperty({}, outsideClickIgnoreClass, isOpen));

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('input', {
          className: 'datepicker-input ' + className,
          type: 'text',
          ref: 'input',
          onFocus: this.handleFocus.bind(this),
          onBlur: this.handleBlur.bind(this),
          onChange: this.handleInputChange.bind(this),
          onClick: this.handleInputClick.bind(this),
          value: inputValue
        })
      );
    }
  }, {
    key: 'renderCalendar',
    value: function renderCalendar() {
      var _state4 = this.state,
          momentValue = _state4.momentValue,
          TimePicker = _state4.timePickerComponent;
      var _props = this.props,
          onChange = _props.onChange,
          min = _props.min,
          max = _props.max,
          defaultMonth = _props.defaultMonth,
          styles = _props.styles,
          calendarContainerProps = _props.calendarContainerProps;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _Calendar2.default,
          {
            min: min,
            max: max,
            selectedDay: momentValue,
            defaultMonth: defaultMonth,
            onSelect: this.handleSelectDay.bind(this),
            onClickOutside: this.handleClickOutsideCalendar.bind(this),
            outsideClickIgnoreClass: outsideClickIgnoreClass,
            styles: styles,
            containerProps: calendarContainerProps
          },
          TimePicker ? _react2.default.createElement(TimePicker, {
            min: min,
            max: max,
            momentValue: momentValue,
            setMomentValue: this.setMomentValue.bind(this)
          }) : null
        )
      );
    }
  }, {
    key: 'removeDate',
    value: function removeDate() {
      var onChange = this.props.onChange;

      if (onChange) {
        onChange('');
      }
      this.setState({
        input: '',
        inputValue: ''
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var isOpen = this.state.isOpen;


      return _react2.default.createElement(
        _reactTether2.default,
        { className: this.props.wrapperClassName || '', attachment: this.props.pickerPosition || 'top center' },
        this.renderInput(),
        isOpen ? this.renderCalendar() : null
      );
    }
  }]);

  return DatePicker;
}(_react.Component);

DatePicker.propTypes = {
  value: _propTypes2.default.object,
  defaultValue: _propTypes2.default.object,
  onChange: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onBlur: _propTypes2.default.func,
  children: _propTypes2.default.node,
  min: _propTypes2.default.object,
  max: _propTypes2.default.object,
  defaultMonth: _propTypes2.default.object,
  inputFormat: _propTypes2.default.string,
  pickerPosition: _propTypes2.default.string,
  removable: _propTypes2.default.bool,
  styles: _propTypes2.default.object,
  calendarStyles: _propTypes2.default.object,
  calendarContainerProps: _propTypes2.default.object,
  timePicker: _propTypes2.default.bool
};
DatePicker.defaultProps = {
  styles: undefined,
  calendarContainerProps: {},
  timePicker: true
};
exports.default = DatePicker;

/***/ }),

/***/ 2450:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _TetherComponent = __webpack_require__(2451);

var _TetherComponent2 = _interopRequireDefault(_TetherComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TetherComponent2.default;
module.exports = exports['default'];

/***/ }),

/***/ 2451:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(387);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(729);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(396);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _tether = __webpack_require__(2452);

var _tether2 = _interopRequireDefault(_tether);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (!_tether2.default) {
  console.error('It looks like Tether has not been included. Please load this dependency first https://github.com/HubSpot/tether');
}

var renderElementToPropTypes = [_propTypes2.default.string, _propTypes2.default.shape({
  appendChild: _propTypes2.default.func.isRequired
})];

var childrenPropType = function childrenPropType(_ref, propName, componentName) {
  var children = _ref.children;

  var childCount = _react.Children.count(children);
  if (childCount <= 0) {
    return new Error(componentName + ' expects at least one child to use as the target element.');
  } else if (childCount > 2) {
    return new Error('Only a max of two children allowed in ' + componentName + '.');
  }
};

var attachmentPositions = ['auto auto', 'top left', 'top center', 'top right', 'middle left', 'middle center', 'middle right', 'bottom left', 'bottom center', 'bottom right'];

var TetherComponent = function (_Component) {
  _inherits(TetherComponent, _Component);

  function TetherComponent() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, TetherComponent);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = TetherComponent.__proto__ || Object.getPrototypeOf(TetherComponent)).call.apply(_ref2, [this].concat(args))), _this), _this._targetNode = null, _this._elementParentNode = null, _this._tether = false, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TetherComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._targetNode = _reactDom2.default.findDOMNode(this);
      this._update();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      this._targetNode = _reactDom2.default.findDOMNode(this);
      this._update();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._destroy();
    }
  }, {
    key: 'getTetherInstance',
    value: function getTetherInstance() {
      return this._tether;
    }
  }, {
    key: 'disable',
    value: function disable() {
      this._tether.disable();
    }
  }, {
    key: 'enable',
    value: function enable() {
      this._tether.enable();
    }
  }, {
    key: 'on',
    value: function on(event, handler, ctx) {
      this._tether.on(event, handler, ctx);
    }
  }, {
    key: 'once',
    value: function once(event, handler, ctx) {
      this._tether.once(event, handler, ctx);
    }
  }, {
    key: 'off',
    value: function off(event, handler) {
      this._tether.off(event, handler);
    }
  }, {
    key: 'position',
    value: function position() {
      this._tether.position();
    }
  }, {
    key: '_registerEventListeners',
    value: function _registerEventListeners() {
      var _this2 = this,
          _arguments = arguments;

      this.on('update', function () {
        return _this2.props.onUpdate && _this2.props.onUpdate.apply(_this2, _arguments);
      });

      this.on('repositioned', function () {
        return _this2.props.onRepositioned && _this2.props.onRepositioned.apply(_this2, _arguments);
      });
    }
  }, {
    key: '_destroy',
    value: function _destroy() {
      if (this._elementParentNode) {
        _reactDom2.default.unmountComponentAtNode(this._elementParentNode);
        this._elementParentNode.parentNode.removeChild(this._elementParentNode);
      }

      if (this._tether) {
        this._tether.destroy();
      }

      this._elementParentNode = null;
      this._tether = null;
    }
  }, {
    key: '_update',
    value: function _update() {
      var _this3 = this;

      var _props = this.props,
          children = _props.children,
          renderElementTag = _props.renderElementTag;

      var elementComponent = _react.Children.toArray(children)[1];

      // if no element component provided, bail out
      if (!elementComponent) {
        // destroy Tether element if it has been created
        if (this._tether) {
          this._destroy();
        }
        return;
      }

      // create element node container if it hasn't been yet
      if (!this._elementParentNode) {
        // create a node that we can stick our content Component in
        this._elementParentNode = document.createElement(renderElementTag);

        // append node to the render node
        this._renderNode.appendChild(this._elementParentNode);
      }

      // render element component into the DOM
      _reactDom2.default.unstable_renderSubtreeIntoContainer(this, elementComponent, this._elementParentNode, function () {
        // if we're not destroyed, update Tether once the subtree has finished rendering
        if (_this3._elementParentNode) {
          _this3._updateTether();
        }
      });
    }
  }, {
    key: '_updateTether',
    value: function _updateTether() {
      var _this4 = this;

      var _props2 = this.props,
          children = _props2.children,
          renderElementTag = _props2.renderElementTag,
          renderElementTo = _props2.renderElementTo,
          id = _props2.id,
          className = _props2.className,
          style = _props2.style,
          options = _objectWithoutProperties(_props2, ['children', 'renderElementTag', 'renderElementTo', 'id', 'className', 'style']);

      var tetherOptions = _extends({
        target: this._targetNode,
        element: this._elementParentNode
      }, options);

      if (id) {
        this._elementParentNode.id = id;
      }

      if (className) {
        this._elementParentNode.className = className;
      }

      if (style) {
        Object.keys(style).forEach(function (key) {
          _this4._elementParentNode.style[key] = style[key];
        });
      }

      if (!this._tether) {
        this._tether = new _tether2.default(tetherOptions);
        this._registerEventListeners();
      } else {
        this._tether.setOptions(tetherOptions);
      }

      this._tether.position();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react.Children.toArray(this.props.children)[0];
    }
  }, {
    key: '_renderNode',
    get: function get() {
      var renderElementTo = this.props.renderElementTo;

      if (typeof renderElementTo === 'string') {
        return document.querySelector(renderElementTo);
      } else {
        return renderElementTo || document.body;
      }
    }
  }]);

  return TetherComponent;
}(_react.Component);

TetherComponent.propTypes = {
  renderElementTag: _propTypes2.default.string,
  renderElementTo: _propTypes2.default.oneOfType(renderElementToPropTypes),
  attachment: _propTypes2.default.oneOf(attachmentPositions).isRequired,
  targetAttachment: _propTypes2.default.oneOf(attachmentPositions),
  offset: _propTypes2.default.string,
  targetOffset: _propTypes2.default.string,
  targetModifier: _propTypes2.default.string,
  enabled: _propTypes2.default.bool,
  classes: _propTypes2.default.object,
  classPrefix: _propTypes2.default.string,
  optimizations: _propTypes2.default.object,
  constraints: _propTypes2.default.array,
  id: _propTypes2.default.string,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  onUpdate: _propTypes2.default.func,
  onRepositioned: _propTypes2.default.func,
  children: childrenPropType
};
TetherComponent.defaultProps = {
  renderElementTag: 'div',
  renderElementTo: null
};
exports.default = TetherComponent;
module.exports = exports['default'];

/***/ }),

/***/ 2452:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether 1.4.4 */

(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function() {

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TetherBase = undefined;
if (typeof TetherBase === 'undefined') {
  TetherBase = { modules: [] };
}

var zeroElement = null;

// Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
// if the element lies within a nested document (<frame> or <iframe>-like).
function getActualBoundingClientRect(node) {
  var boundingRect = node.getBoundingClientRect();

  // The original object returned by getBoundingClientRect is immutable, so we clone it
  // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
  var rect = {};
  for (var k in boundingRect) {
    rect[k] = boundingRect[k];
  }

  if (node.ownerDocument !== document) {
    var _frameElement = node.ownerDocument.defaultView.frameElement;
    if (_frameElement) {
      var frameRect = getActualBoundingClientRect(_frameElement);
      rect.top += frameRect.top;
      rect.bottom += frameRect.top;
      rect.left += frameRect.left;
      rect.right += frameRect.left;
    }
  }

  return rect;
}

function getScrollParents(el) {
  // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
  // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = getComputedStyle(el) || {};
  var position = computedStyle.position;
  var parents = [];

  if (position === 'fixed') {
    return [el];
  }

  var parent = el;
  while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
    var style = undefined;
    try {
      style = getComputedStyle(parent);
    } catch (err) {}

    if (typeof style === 'undefined' || style === null) {
      parents.push(parent);
      return parents;
    }

    var _style = style;
    var overflow = _style.overflow;
    var overflowX = _style.overflowX;
    var overflowY = _style.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
        parents.push(parent);
      }
    }
  }

  parents.push(el.ownerDocument.body);

  // If the node is within a frame, account for the parent window scroll
  if (el.ownerDocument !== document) {
    parents.push(el.ownerDocument.defaultView);
  }

  return parents;
}

var uniqueId = (function () {
  var id = 0;
  return function () {
    return ++id;
  };
})();

var zeroPosCache = {};
var getOrigin = function getOrigin() {
  // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
  // jitter as the user scrolls that messes with our ability to detect if two positions
  // are equivilant or not.  We place an element at the top left of the page that will
  // get the same jitter, so we can cancel the two out.
  var node = zeroElement;
  if (!node || !document.body.contains(node)) {
    node = document.createElement('div');
    node.setAttribute('data-tether-id', uniqueId());
    extend(node.style, {
      top: 0,
      left: 0,
      position: 'absolute'
    });

    document.body.appendChild(node);

    zeroElement = node;
  }

  var id = node.getAttribute('data-tether-id');
  if (typeof zeroPosCache[id] === 'undefined') {
    zeroPosCache[id] = getActualBoundingClientRect(node);

    // Clear the cache when this position call is done
    defer(function () {
      delete zeroPosCache[id];
    });
  }

  return zeroPosCache[id];
};

function removeUtilElements() {
  if (zeroElement) {
    document.body.removeChild(zeroElement);
  }
  zeroElement = null;
};

function getBounds(el) {
  var doc = undefined;
  if (el === document) {
    doc = document;
    el = document.documentElement;
  } else {
    doc = el.ownerDocument;
  }

  var docEl = doc.documentElement;

  var box = getActualBoundingClientRect(el);

  var origin = getOrigin();

  box.top -= origin.top;
  box.left -= origin.left;

  if (typeof box.width === 'undefined') {
    box.width = document.body.scrollWidth - box.left - box.right;
  }
  if (typeof box.height === 'undefined') {
    box.height = document.body.scrollHeight - box.top - box.bottom;
  }

  box.top = box.top - docEl.clientTop;
  box.left = box.left - docEl.clientLeft;
  box.right = doc.body.clientWidth - box.width - box.left;
  box.bottom = doc.body.clientHeight - box.height - box.top;

  return box;
}

function getOffsetParent(el) {
  return el.offsetParent || document.documentElement;
}

var _scrollBarSize = null;
function getScrollBarSize() {
  if (_scrollBarSize) {
    return _scrollBarSize;
  }
  var inner = document.createElement('div');
  inner.style.width = '100%';
  inner.style.height = '200px';

  var outer = document.createElement('div');
  extend(outer.style, {
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    visibility: 'hidden',
    width: '200px',
    height: '150px',
    overflow: 'hidden'
  });

  outer.appendChild(inner);

  document.body.appendChild(outer);

  var widthContained = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var widthScroll = inner.offsetWidth;

  if (widthContained === widthScroll) {
    widthScroll = outer.clientWidth;
  }

  document.body.removeChild(outer);

  var width = widthContained - widthScroll;

  _scrollBarSize = { width: width, height: width };
  return _scrollBarSize;
}

function extend() {
  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var args = [];

  Array.prototype.push.apply(args, arguments);

  args.slice(1).forEach(function (obj) {
    if (obj) {
      for (var key in obj) {
        if (({}).hasOwnProperty.call(obj, key)) {
          out[key] = obj[key];
        }
      }
    }
  });

  return out;
}

function removeClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.remove(cls);
      }
    });
  } else {
    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
    var className = getClassName(el).replace(regex, ' ');
    setClassName(el, className);
  }
}

function addClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.add(cls);
      }
    });
  } else {
    removeClass(el, name);
    var cls = getClassName(el) + (' ' + name);
    setClassName(el, cls);
  }
}

function hasClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    return el.classList.contains(name);
  }
  var className = getClassName(el);
  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
}

function getClassName(el) {
  // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
  // completely separately SVGAnimatedString base classes
  if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
    return el.className.baseVal;
  }
  return el.className;
}

function setClassName(el, className) {
  el.setAttribute('class', className);
}

function updateClasses(el, add, all) {
  // Of the set of 'all' classes, we need the 'add' classes, and only the
  // 'add' classes to be set.
  all.forEach(function (cls) {
    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
      removeClass(el, cls);
    }
  });

  add.forEach(function (cls) {
    if (!hasClass(el, cls)) {
      addClass(el, cls);
    }
  });
}

var deferred = [];

var defer = function defer(fn) {
  deferred.push(fn);
};

var flush = function flush() {
  var fn = undefined;
  while (fn = deferred.pop()) {
    fn();
  }
};

var Evented = (function () {
  function Evented() {
    _classCallCheck(this, Evented);
  }

  _createClass(Evented, [{
    key: 'on',
    value: function on(event, handler, ctx) {
      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

      if (typeof this.bindings === 'undefined') {
        this.bindings = {};
      }
      if (typeof this.bindings[event] === 'undefined') {
        this.bindings[event] = [];
      }
      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
    }
  }, {
    key: 'once',
    value: function once(event, handler, ctx) {
      this.on(event, handler, ctx, true);
    }
  }, {
    key: 'off',
    value: function off(event, handler) {
      if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
        return;
      }

      if (typeof handler === 'undefined') {
        delete this.bindings[event];
      } else {
        var i = 0;
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }, {
    key: 'trigger',
    value: function trigger(event) {
      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
        var i = 0;

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        while (i < this.bindings[event].length) {
          var _bindings$event$i = this.bindings[event][i];
          var handler = _bindings$event$i.handler;
          var ctx = _bindings$event$i.ctx;
          var once = _bindings$event$i.once;

          var context = ctx;
          if (typeof context === 'undefined') {
            context = this;
          }

          handler.apply(context, args);

          if (once) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }]);

  return Evented;
})();

TetherBase.Utils = {
  getActualBoundingClientRect: getActualBoundingClientRect,
  getScrollParents: getScrollParents,
  getBounds: getBounds,
  getOffsetParent: getOffsetParent,
  extend: extend,
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  updateClasses: updateClasses,
  defer: defer,
  flush: flush,
  uniqueId: uniqueId,
  Evented: Evented,
  getScrollBarSize: getScrollBarSize,
  removeUtilElements: removeUtilElements
};
/* globals TetherBase, performance */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x6, _x7, _x8) { var _again = true; _function: while (_again) { var object = _x6, property = _x7, receiver = _x8; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x6 = parent; _x7 = property; _x8 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof TetherBase === 'undefined') {
  throw new Error('You must include the utils.js file before tether.js');
}

var _TetherBase$Utils = TetherBase.Utils;
var getScrollParents = _TetherBase$Utils.getScrollParents;
var getBounds = _TetherBase$Utils.getBounds;
var getOffsetParent = _TetherBase$Utils.getOffsetParent;
var extend = _TetherBase$Utils.extend;
var addClass = _TetherBase$Utils.addClass;
var removeClass = _TetherBase$Utils.removeClass;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;
var flush = _TetherBase$Utils.flush;
var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
var removeUtilElements = _TetherBase$Utils.removeUtilElements;

function within(a, b) {
  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

  return a + diff >= b && b >= a - diff;
}

var transformKey = (function () {
  if (typeof document === 'undefined') {
    return '';
  }
  var el = document.createElement('div');

  var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
  for (var i = 0; i < transforms.length; ++i) {
    var key = transforms[i];
    if (el.style[key] !== undefined) {
      return key;
    }
  }
})();

var tethers = [];

var position = function position() {
  tethers.forEach(function (tether) {
    tether.position(false);
  });
  flush();
};

function now() {
  if (typeof performance === 'object' && typeof performance.now === 'function') {
    return performance.now();
  }
  return +new Date();
}

(function () {
  var lastCall = null;
  var lastDuration = null;
  var pendingTimeout = null;

  var tick = function tick() {
    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
      // We voluntarily throttle ourselves if we can't manage 60fps
      lastDuration = Math.min(lastDuration - 16, 250);

      // Just in case this is the last event, remember to position just once more
      pendingTimeout = setTimeout(tick, 250);
      return;
    }

    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
      // Some browsers call events a little too frequently, refuse to run more than is reasonable
      return;
    }

    if (pendingTimeout != null) {
      clearTimeout(pendingTimeout);
      pendingTimeout = null;
    }

    lastCall = now();
    position();
    lastDuration = now() - lastCall;
  };

  if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
      window.addEventListener(event, tick);
    });
  }
})();

var MIRROR_LR = {
  center: 'center',
  left: 'right',
  right: 'left'
};

var MIRROR_TB = {
  middle: 'middle',
  top: 'bottom',
  bottom: 'top'
};

var OFFSET_MAP = {
  top: 0,
  left: 0,
  middle: '50%',
  center: '50%',
  bottom: '100%',
  right: '100%'
};

var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (left === 'auto') {
    left = MIRROR_LR[relativeToAttachment.left];
  }

  if (top === 'auto') {
    top = MIRROR_TB[relativeToAttachment.top];
  }

  return { left: left, top: top };
};

var attachmentToOffset = function attachmentToOffset(attachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
    left = OFFSET_MAP[attachment.left];
  }

  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
    top = OFFSET_MAP[attachment.top];
  }

  return { left: left, top: top };
};

function addOffset() {
  var out = { top: 0, left: 0 };

  for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
    offsets[_key] = arguments[_key];
  }

  offsets.forEach(function (_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (typeof top === 'string') {
      top = parseFloat(top, 10);
    }
    if (typeof left === 'string') {
      left = parseFloat(left, 10);
    }

    out.top += top;
    out.left += left;
  });

  return out;
}

function offsetToPx(offset, size) {
  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
  }
  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
  }

  return offset;
}

var parseOffset = function parseOffset(value) {
  var _value$split = value.split(' ');

  var _value$split2 = _slicedToArray(_value$split, 2);

  var top = _value$split2[0];
  var left = _value$split2[1];

  return { top: top, left: left };
};
var parseAttachment = parseOffset;

var TetherClass = (function (_Evented) {
  _inherits(TetherClass, _Evented);

  function TetherClass(options) {
    var _this = this;

    _classCallCheck(this, TetherClass);

    _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
    this.position = this.position.bind(this);

    tethers.push(this);

    this.history = [];

    this.setOptions(options, false);

    TetherBase.modules.forEach(function (module) {
      if (typeof module.initialize !== 'undefined') {
        module.initialize.call(_this);
      }
    });

    this.position();
  }

  _createClass(TetherClass, [{
    key: 'getClass',
    value: function getClass() {
      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
      var classes = this.options.classes;

      if (typeof classes !== 'undefined' && classes[key]) {
        return this.options.classes[key];
      } else if (this.options.classPrefix) {
        return this.options.classPrefix + '-' + key;
      } else {
        return key;
      }
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      var _this2 = this;

      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      var defaults = {
        offset: '0 0',
        targetOffset: '0 0',
        targetAttachment: 'auto auto',
        classPrefix: 'tether'
      };

      this.options = extend(defaults, options);

      var _options = this.options;
      var element = _options.element;
      var target = _options.target;
      var targetModifier = _options.targetModifier;

      this.element = element;
      this.target = target;
      this.targetModifier = targetModifier;

      if (this.target === 'viewport') {
        this.target = document.body;
        this.targetModifier = 'visible';
      } else if (this.target === 'scroll-handle') {
        this.target = document.body;
        this.targetModifier = 'scroll-handle';
      }

      ['element', 'target'].forEach(function (key) {
        if (typeof _this2[key] === 'undefined') {
          throw new Error('Tether Error: Both element and target must be defined');
        }

        if (typeof _this2[key].jquery !== 'undefined') {
          _this2[key] = _this2[key][0];
        } else if (typeof _this2[key] === 'string') {
          _this2[key] = document.querySelector(_this2[key]);
        }
      });

      addClass(this.element, this.getClass('element'));
      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('target'));
      }

      if (!this.options.attachment) {
        throw new Error('Tether Error: You must provide an attachment');
      }

      this.targetAttachment = parseAttachment(this.options.targetAttachment);
      this.attachment = parseAttachment(this.options.attachment);
      this.offset = parseOffset(this.options.offset);
      this.targetOffset = parseOffset(this.options.targetOffset);

      if (typeof this.scrollParents !== 'undefined') {
        this.disable();
      }

      if (this.targetModifier === 'scroll-handle') {
        this.scrollParents = [this.target];
      } else {
        this.scrollParents = getScrollParents(this.target);
      }

      if (!(this.options.enabled === false)) {
        this.enable(pos);
      }
    }
  }, {
    key: 'getTargetBounds',
    value: function getTargetBounds() {
      if (typeof this.targetModifier !== 'undefined') {
        if (this.targetModifier === 'visible') {
          if (this.target === document.body) {
            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
          } else {
            var bounds = getBounds(this.target);

            var out = {
              height: bounds.height,
              width: bounds.width,
              top: bounds.top,
              left: bounds.left
            };

            out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
            out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
            out.height = Math.min(innerHeight, out.height);
            out.height -= 2;

            out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
            out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
            out.width = Math.min(innerWidth, out.width);
            out.width -= 2;

            if (out.top < pageYOffset) {
              out.top = pageYOffset;
            }
            if (out.left < pageXOffset) {
              out.left = pageXOffset;
            }

            return out;
          }
        } else if (this.targetModifier === 'scroll-handle') {
          var bounds = undefined;
          var target = this.target;
          if (target === document.body) {
            target = document.documentElement;

            bounds = {
              left: pageXOffset,
              top: pageYOffset,
              height: innerHeight,
              width: innerWidth
            };
          } else {
            bounds = getBounds(target);
          }

          var style = getComputedStyle(target);

          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;

          var scrollBottom = 0;
          if (hasBottomScroll) {
            scrollBottom = 15;
          }

          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;

          var out = {
            width: 15,
            height: height * 0.975 * (height / target.scrollHeight),
            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
          };

          var fitAdj = 0;
          if (height < 408 && this.target === document.body) {
            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
          }

          if (this.target !== document.body) {
            out.height = Math.max(out.height, 24);
          }

          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);

          if (this.target === document.body) {
            out.height = Math.max(out.height, 24);
          }

          return out;
        }
      } else {
        return getBounds(this.target);
      }
    }
  }, {
    key: 'clearCache',
    value: function clearCache() {
      this._cache = {};
    }
  }, {
    key: 'cache',
    value: function cache(k, getter) {
      // More than one module will often need the same DOM info, so
      // we keep a cache which is cleared on each position call
      if (typeof this._cache === 'undefined') {
        this._cache = {};
      }

      if (typeof this._cache[k] === 'undefined') {
        this._cache[k] = getter.call(this);
      }

      return this._cache[k];
    }
  }, {
    key: 'enable',
    value: function enable() {
      var _this3 = this;

      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('enabled'));
      }
      addClass(this.element, this.getClass('enabled'));
      this.enabled = true;

      this.scrollParents.forEach(function (parent) {
        if (parent !== _this3.target.ownerDocument) {
          parent.addEventListener('scroll', _this3.position);
        }
      });

      if (pos) {
        this.position();
      }
    }
  }, {
    key: 'disable',
    value: function disable() {
      var _this4 = this;

      removeClass(this.target, this.getClass('enabled'));
      removeClass(this.element, this.getClass('enabled'));
      this.enabled = false;

      if (typeof this.scrollParents !== 'undefined') {
        this.scrollParents.forEach(function (parent) {
          parent.removeEventListener('scroll', _this4.position);
        });
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this5 = this;

      this.disable();

      tethers.forEach(function (tether, i) {
        if (tether === _this5) {
          tethers.splice(i, 1);
        }
      });

      // Remove any elements we were using for convenience from the DOM
      if (tethers.length === 0) {
        removeUtilElements();
      }
    }
  }, {
    key: 'updateAttachClasses',
    value: function updateAttachClasses(elementAttach, targetAttach) {
      var _this6 = this;

      elementAttach = elementAttach || this.attachment;
      targetAttach = targetAttach || this.targetAttachment;
      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];

      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
        // updateAttachClasses can be called more than once in a position call, so
        // we need to clean up after ourselves such that when the last defer gets
        // ran it doesn't add any extra classes from previous calls.
        this._addAttachClasses.splice(0, this._addAttachClasses.length);
      }

      if (typeof this._addAttachClasses === 'undefined') {
        this._addAttachClasses = [];
      }
      var add = this._addAttachClasses;

      if (elementAttach.top) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
      }
      if (elementAttach.left) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
      }
      if (targetAttach.top) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
      }
      if (targetAttach.left) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
      }

      var all = [];
      sides.forEach(function (side) {
        all.push(_this6.getClass('element-attached') + '-' + side);
        all.push(_this6.getClass('target-attached') + '-' + side);
      });

      defer(function () {
        if (!(typeof _this6._addAttachClasses !== 'undefined')) {
          return;
        }

        updateClasses(_this6.element, _this6._addAttachClasses, all);
        if (!(_this6.options.addTargetClasses === false)) {
          updateClasses(_this6.target, _this6._addAttachClasses, all);
        }

        delete _this6._addAttachClasses;
      });
    }
  }, {
    key: 'position',
    value: function position() {
      var _this7 = this;

      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      // flushChanges commits the changes immediately, leave true unless you are positioning multiple
      // tethers (in which case call Tether.Utils.flush yourself when you're done)

      if (!this.enabled) {
        return;
      }

      this.clearCache();

      // Turn 'auto' attachments into the appropriate corner or edge
      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);

      this.updateAttachClasses(this.attachment, targetAttachment);

      var elementPos = this.cache('element-bounds', function () {
        return getBounds(_this7.element);
      });

      var width = elementPos.width;
      var height = elementPos.height;

      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
        var _lastSize = this.lastSize;

        // We cache the height and width to make it possible to position elements that are
        // getting hidden.
        width = _lastSize.width;
        height = _lastSize.height;
      } else {
        this.lastSize = { width: width, height: height };
      }

      var targetPos = this.cache('target-bounds', function () {
        return _this7.getTargetBounds();
      });
      var targetSize = targetPos;

      // Get an actual px offset from the attachment
      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);

      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);

      // Add the manually provided offset
      offset = addOffset(offset, manualOffset);
      targetOffset = addOffset(targetOffset, manualTargetOffset);

      // It's now our goal to make (element position + offset) == (target position + target offset)
      var left = targetPos.left + targetOffset.left - offset.left;
      var top = targetPos.top + targetOffset.top - offset.top;

      for (var i = 0; i < TetherBase.modules.length; ++i) {
        var _module2 = TetherBase.modules[i];
        var ret = _module2.position.call(this, {
          left: left,
          top: top,
          targetAttachment: targetAttachment,
          targetPos: targetPos,
          elementPos: elementPos,
          offset: offset,
          targetOffset: targetOffset,
          manualOffset: manualOffset,
          manualTargetOffset: manualTargetOffset,
          scrollbarSize: scrollbarSize,
          attachment: this.attachment
        });

        if (ret === false) {
          return false;
        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
          continue;
        } else {
          top = ret.top;
          left = ret.left;
        }
      }

      // We describe the position three different ways to give the optimizer
      // a chance to decide the best possible way to position the element
      // with the fewest repaints.
      var next = {
        // It's position relative to the page (absolute positioning when
        // the element is a child of the body)
        page: {
          top: top,
          left: left
        },

        // It's position relative to the viewport (fixed positioning)
        viewport: {
          top: top - pageYOffset,
          bottom: pageYOffset - top - height + innerHeight,
          left: left - pageXOffset,
          right: pageXOffset - left - width + innerWidth
        }
      };

      var doc = this.target.ownerDocument;
      var win = doc.defaultView;

      var scrollbarSize = undefined;
      if (win.innerHeight > doc.documentElement.clientHeight) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.bottom -= scrollbarSize.height;
      }

      if (win.innerWidth > doc.documentElement.clientWidth) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.right -= scrollbarSize.width;
      }

      if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
        next.page.bottom = doc.body.scrollHeight - top - height;
        next.page.right = doc.body.scrollWidth - left - width;
      }

      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
        (function () {
          var offsetParent = _this7.cache('target-offsetparent', function () {
            return getOffsetParent(_this7.target);
          });
          var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
            return getBounds(offsetParent);
          });
          var offsetParentStyle = getComputedStyle(offsetParent);
          var offsetParentSize = offsetPosition;

          var offsetBorder = {};
          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
          });

          offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
          offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;

          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
              // We're within the visible part of the target's scroll parent
              var scrollTop = offsetParent.scrollTop;
              var scrollLeft = offsetParent.scrollLeft;

              // It's position relative to the target's offset parent (absolute positioning when
              // the element is moved to be a child of the target's offset parent).
              next.offset = {
                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
              };
            }
          }
        })();
      }

      // We could also travel up the DOM and try each containing context, rather than only
      // looking at the body, but we're gonna get diminishing returns.

      this.move(next);

      this.history.unshift(next);

      if (this.history.length > 3) {
        this.history.pop();
      }

      if (flushChanges) {
        flush();
      }

      return true;
    }

    // THE ISSUE
  }, {
    key: 'move',
    value: function move(pos) {
      var _this8 = this;

      if (!(typeof this.element.parentNode !== 'undefined')) {
        return;
      }

      var same = {};

      for (var type in pos) {
        same[type] = {};

        for (var key in pos[type]) {
          var found = false;

          for (var i = 0; i < this.history.length; ++i) {
            var point = this.history[i];
            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
              found = true;
              break;
            }
          }

          if (!found) {
            same[type][key] = true;
          }
        }
      }

      var css = { top: '', left: '', right: '', bottom: '' };

      var transcribe = function transcribe(_same, _pos) {
        var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
        if (gpu !== false) {
          var yPos = undefined,
              xPos = undefined;
          if (_same.top) {
            css.top = 0;
            yPos = _pos.top;
          } else {
            css.bottom = 0;
            yPos = -_pos.bottom;
          }

          if (_same.left) {
            css.left = 0;
            xPos = _pos.left;
          } else {
            css.right = 0;
            xPos = -_pos.right;
          }

          if (window.matchMedia) {
            // HubSpot/tether#207
            var retina = window.matchMedia('only screen and (min-resolution: 1.3dppx)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3)').matches;
            if (!retina) {
              xPos = Math.round(xPos);
              yPos = Math.round(yPos);
            }
          }

          css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';

          if (transformKey !== 'msTransform') {
            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
            // but IE9 doesn't support 3d transforms and will choke.
            css[transformKey] += " translateZ(0)";
          }
        } else {
          if (_same.top) {
            css.top = _pos.top + 'px';
          } else {
            css.bottom = _pos.bottom + 'px';
          }

          if (_same.left) {
            css.left = _pos.left + 'px';
          } else {
            css.right = _pos.right + 'px';
          }
        }
      };

      var moved = false;
      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
        css.position = 'absolute';
        transcribe(same.page, pos.page);
      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
        css.position = 'fixed';
        transcribe(same.viewport, pos.viewport);
      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
        (function () {
          css.position = 'absolute';
          var offsetParent = _this8.cache('target-offsetparent', function () {
            return getOffsetParent(_this8.target);
          });

          if (getOffsetParent(_this8.element) !== offsetParent) {
            defer(function () {
              _this8.element.parentNode.removeChild(_this8.element);
              offsetParent.appendChild(_this8.element);
            });
          }

          transcribe(same.offset, pos.offset);
          moved = true;
        })();
      } else {
        css.position = 'absolute';
        transcribe({ top: true, left: true }, pos.page);
      }

      if (!moved) {
        if (this.options.bodyElement) {
          if (this.element.parentNode !== this.options.bodyElement) {
            this.options.bodyElement.appendChild(this.element);
          }
        } else {
          var offsetParentIsBody = true;
          var currentNode = this.element.parentNode;
          while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
            if (getComputedStyle(currentNode).position !== 'static') {
              offsetParentIsBody = false;
              break;
            }

            currentNode = currentNode.parentNode;
          }

          if (!offsetParentIsBody) {
            this.element.parentNode.removeChild(this.element);
            this.element.ownerDocument.body.appendChild(this.element);
          }
        }
      }

      // Any css change will trigger a repaint, so let's avoid one if nothing changed
      var writeCSS = {};
      var write = false;
      for (var key in css) {
        var val = css[key];
        var elVal = this.element.style[key];

        if (elVal !== val) {
          write = true;
          writeCSS[key] = val;
        }
      }

      if (write) {
        defer(function () {
          extend(_this8.element.style, writeCSS);
          _this8.trigger('repositioned');
        });
      }
    }
  }]);

  return TetherClass;
})(Evented);

TetherClass.modules = [];

TetherBase.position = position;

var Tether = extend(TetherClass, TetherBase);
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var extend = _TetherBase$Utils.extend;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

function getBoundingRect(tether, to) {
  if (to === 'scrollParent') {
    to = tether.scrollParents[0];
  } else if (to === 'window') {
    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
  }

  if (to === document) {
    to = to.documentElement;
  }

  if (typeof to.nodeType !== 'undefined') {
    (function () {
      var node = to;
      var size = getBounds(to);
      var pos = size;
      var style = getComputedStyle(to);

      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];

      // Account any parent Frames scroll offset
      if (node.ownerDocument !== document) {
        var win = node.ownerDocument.defaultView;
        to[0] += win.pageXOffset;
        to[1] += win.pageYOffset;
        to[2] += win.pageXOffset;
        to[3] += win.pageYOffset;
      }

      BOUNDS_FORMAT.forEach(function (side, i) {
        side = side[0].toUpperCase() + side.substr(1);
        if (side === 'Top' || side === 'Left') {
          to[i] += parseFloat(style['border' + side + 'Width']);
        } else {
          to[i] -= parseFloat(style['border' + side + 'Width']);
        }
      });
    })();
  }

  return to;
}

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;
    var targetAttachment = _ref.targetAttachment;

    if (!this.options.constraints) {
      return true;
    }

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
      var _lastSize = this.lastSize;

      // Handle the item getting hidden as a result of our positioning without glitching
      // the classes in and out
      width = _lastSize.width;
      height = _lastSize.height;
    }

    var targetSize = this.cache('target-bounds', function () {
      return _this.getTargetBounds();
    });

    var targetHeight = targetSize.height;
    var targetWidth = targetSize.width;

    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];

    this.options.constraints.forEach(function (constraint) {
      var outOfBoundsClass = constraint.outOfBoundsClass;
      var pinnedClass = constraint.pinnedClass;

      if (outOfBoundsClass) {
        allClasses.push(outOfBoundsClass);
      }
      if (pinnedClass) {
        allClasses.push(pinnedClass);
      }
    });

    allClasses.forEach(function (cls) {
      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
        allClasses.push(cls + '-' + side);
      });
    });

    var addClasses = [];

    var tAttachment = extend({}, targetAttachment);
    var eAttachment = extend({}, this.attachment);

    this.options.constraints.forEach(function (constraint) {
      var to = constraint.to;
      var attachment = constraint.attachment;
      var pin = constraint.pin;

      if (typeof attachment === 'undefined') {
        attachment = '';
      }

      var changeAttachX = undefined,
          changeAttachY = undefined;
      if (attachment.indexOf(' ') >= 0) {
        var _attachment$split = attachment.split(' ');

        var _attachment$split2 = _slicedToArray(_attachment$split, 2);

        changeAttachY = _attachment$split2[0];
        changeAttachX = _attachment$split2[1];
      } else {
        changeAttachX = changeAttachY = attachment;
      }

      var bounds = getBoundingRect(_this, to);

      if (changeAttachY === 'target' || changeAttachY === 'both') {
        if (top < bounds[1] && tAttachment.top === 'top') {
          top += targetHeight;
          tAttachment.top = 'bottom';
        }

        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
          top -= targetHeight;
          tAttachment.top = 'top';
        }
      }

      if (changeAttachY === 'together') {
        if (tAttachment.top === 'top') {
          if (eAttachment.top === 'bottom' && top < bounds[1]) {
            top += targetHeight;
            tAttachment.top = 'bottom';

            top += height;
            eAttachment.top = 'top';
          } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
            top -= height - targetHeight;
            tAttachment.top = 'bottom';

            eAttachment.top = 'bottom';
          }
        }

        if (tAttachment.top === 'bottom') {
          if (eAttachment.top === 'top' && top + height > bounds[3]) {
            top -= targetHeight;
            tAttachment.top = 'top';

            top -= height;
            eAttachment.top = 'bottom';
          } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
            top += height - targetHeight;
            tAttachment.top = 'top';

            eAttachment.top = 'top';
          }
        }

        if (tAttachment.top === 'middle') {
          if (top + height > bounds[3] && eAttachment.top === 'top') {
            top -= height;
            eAttachment.top = 'bottom';
          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
            top += height;
            eAttachment.top = 'top';
          }
        }
      }

      if (changeAttachX === 'target' || changeAttachX === 'both') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          left += targetWidth;
          tAttachment.left = 'right';
        }

        if (left + width > bounds[2] && tAttachment.left === 'right') {
          left -= targetWidth;
          tAttachment.left = 'left';
        }
      }

      if (changeAttachX === 'together') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          if (eAttachment.left === 'right') {
            left += targetWidth;
            tAttachment.left = 'right';

            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'left') {
            left += targetWidth;
            tAttachment.left = 'right';

            left -= width;
            eAttachment.left = 'right';
          }
        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
          if (eAttachment.left === 'left') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'right') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left += width;
            eAttachment.left = 'left';
          }
        } else if (tAttachment.left === 'center') {
          if (left + width > bounds[2] && eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (left < bounds[0] && eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          }
        }
      }

      if (changeAttachY === 'element' || changeAttachY === 'both') {
        if (top < bounds[1] && eAttachment.top === 'bottom') {
          top += height;
          eAttachment.top = 'top';
        }

        if (top + height > bounds[3] && eAttachment.top === 'top') {
          top -= height;
          eAttachment.top = 'bottom';
        }
      }

      if (changeAttachX === 'element' || changeAttachX === 'both') {
        if (left < bounds[0]) {
          if (eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'center') {
            left += width / 2;
            eAttachment.left = 'left';
          }
        }

        if (left + width > bounds[2]) {
          if (eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'center') {
            left -= width / 2;
            eAttachment.left = 'right';
          }
        }
      }

      if (typeof pin === 'string') {
        pin = pin.split(',').map(function (p) {
          return p.trim();
        });
      } else if (pin === true) {
        pin = ['top', 'left', 'right', 'bottom'];
      }

      pin = pin || [];

      var pinned = [];
      var oob = [];

      if (top < bounds[1]) {
        if (pin.indexOf('top') >= 0) {
          top = bounds[1];
          pinned.push('top');
        } else {
          oob.push('top');
        }
      }

      if (top + height > bounds[3]) {
        if (pin.indexOf('bottom') >= 0) {
          top = bounds[3] - height;
          pinned.push('bottom');
        } else {
          oob.push('bottom');
        }
      }

      if (left < bounds[0]) {
        if (pin.indexOf('left') >= 0) {
          left = bounds[0];
          pinned.push('left');
        } else {
          oob.push('left');
        }
      }

      if (left + width > bounds[2]) {
        if (pin.indexOf('right') >= 0) {
          left = bounds[2] - width;
          pinned.push('right');
        } else {
          oob.push('right');
        }
      }

      if (pinned.length) {
        (function () {
          var pinnedClass = undefined;
          if (typeof _this.options.pinnedClass !== 'undefined') {
            pinnedClass = _this.options.pinnedClass;
          } else {
            pinnedClass = _this.getClass('pinned');
          }

          addClasses.push(pinnedClass);
          pinned.forEach(function (side) {
            addClasses.push(pinnedClass + '-' + side);
          });
        })();
      }

      if (oob.length) {
        (function () {
          var oobClass = undefined;
          if (typeof _this.options.outOfBoundsClass !== 'undefined') {
            oobClass = _this.options.outOfBoundsClass;
          } else {
            oobClass = _this.getClass('out-of-bounds');
          }

          addClasses.push(oobClass);
          oob.forEach(function (side) {
            addClasses.push(oobClass + '-' + side);
          });
        })();
      }

      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
        eAttachment.left = tAttachment.left = false;
      }
      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
        eAttachment.top = tAttachment.top = false;
      }

      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
        _this.updateAttachClasses(eAttachment, tAttachment);
        _this.trigger('update', {
          attachment: eAttachment,
          targetAttachment: tAttachment
        });
      }
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return { top: top, left: left };
  }
});
/* globals TetherBase */

'use strict';

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    var targetPos = this.getTargetBounds();

    var bottom = top + height;
    var right = left + width;

    var abutted = [];
    if (top <= targetPos.bottom && bottom >= targetPos.top) {
      ['left', 'right'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === left || targetPosSide === right) {
          abutted.push(side);
        }
      });
    }

    if (left <= targetPos.right && right >= targetPos.left) {
      ['top', 'bottom'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === top || targetPosSide === bottom) {
          abutted.push(side);
        }
      });
    }

    var allClasses = [];
    var addClasses = [];

    var sides = ['left', 'top', 'right', 'bottom'];
    allClasses.push(this.getClass('abutted'));
    sides.forEach(function (side) {
      allClasses.push(_this.getClass('abutted') + '-' + side);
    });

    if (abutted.length) {
      addClasses.push(this.getClass('abutted'));
    }

    abutted.forEach(function (side) {
      addClasses.push(_this.getClass('abutted') + '-' + side);
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return true;
  }
});
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

TetherBase.modules.push({
  position: function position(_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (!this.options.shift) {
      return;
    }

    var shift = this.options.shift;
    if (typeof this.options.shift === 'function') {
      shift = this.options.shift.call(this, { top: top, left: left });
    }

    var shiftTop = undefined,
        shiftLeft = undefined;
    if (typeof shift === 'string') {
      shift = shift.split(' ');
      shift[1] = shift[1] || shift[0];

      var _shift = shift;

      var _shift2 = _slicedToArray(_shift, 2);

      shiftTop = _shift2[0];
      shiftLeft = _shift2[1];

      shiftTop = parseFloat(shiftTop, 10);
      shiftLeft = parseFloat(shiftLeft, 10);
    } else {
      shiftTop = shift.top;
      shiftLeft = shift.left;
    }

    top += shiftTop;
    left += shiftLeft;

    return { top: top, left: left };
  }
});
return Tether;

}));


/***/ }),

/***/ 2453:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Calendar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(387);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(729);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DaysViewHeading = __webpack_require__(2454);

var _DaysViewHeading2 = _interopRequireDefault(_DaysViewHeading);

var _DaysOfWeek = __webpack_require__(2457);

var _DaysOfWeek2 = _interopRequireDefault(_DaysOfWeek);

var _MonthSelector = __webpack_require__(2458);

var _MonthSelector2 = _interopRequireDefault(_MonthSelector);

var _Day = __webpack_require__(2460);

var _Day2 = _interopRequireDefault(_Day);

var _momentHelper = __webpack_require__(2461);

var _moment = __webpack_require__(1346);

var _moment2 = _interopRequireDefault(_moment);

var _reactOnclickoutside = __webpack_require__(2462);

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

var _DefaultStyles = __webpack_require__(2463);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calendar = exports.Calendar = function (_Component) {
  _inherits(Calendar, _Component);

  function Calendar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Calendar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      month: _this.props.defaultMonth || _this.props.selectedDay || (0, _moment2.default)(_this.props.min),
      selectedDay: _this.props.selectedDay || null,
      mode: 'days'
    }, _this.handleClickOnDay = function (selectedDay) {
      var onSelect = _this.props.onSelect;

      _this.selectDay(selectedDay);
      if (onSelect) {
        onSelect(selectedDay);
      }
    }, _this.days = null, _this.lastRenderedMonth = null, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Calendar, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        nextMonth: this.nextMonth.bind(this),
        prevMonth: this.prevMonth.bind(this),
        setCalendarMode: this.setMode.bind(this),
        setMonth: this.setMonth.bind(this),
        setType: this.setMonth.bind(this)
      };
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref2) {
      var selectedDay = _ref2.selectedDay,
          defaultMonth = _ref2.defaultMonth,
          min = _ref2.min;

      if (this.props.selectedDay !== selectedDay) {
        this.selectDay(selectedDay);
      } else if (defaultMonth && this.props.defaultMonth !== defaultMonth && this.state.month === this.props.defaultMonth) {
        this.setMonth(defaultMonth);
      } else if (min && this.props.min !== min && this.state.month.isSame(this.props.min)) {
        this.setMonth(min.clone());
      }
    }
  }, {
    key: 'setMode',
    value: function setMode(mode) {
      this.setState({ mode: mode });
    }
  }, {
    key: 'setMonth',
    value: function setMonth(month) {
      this.setState({ month: month });
    }
  }, {
    key: 'setType',
    value: function setType(type) {
      this.setState({ type: type });
    }
  }, {
    key: 'nextMonth',
    value: function nextMonth() {
      var monthFormat = 'Month';

      this.setState({
        month: this.state.month.clone().add(1, monthFormat)
      });
    }
  }, {
    key: 'prevMonth',
    value: function prevMonth() {
      var monthFormat = 'Month';

      this.setState({
        month: this.state.month.clone().subtract(1, monthFormat)
      });
    }
  }, {
    key: 'selectDay',
    value: function selectDay(selectedDay) {
      var month = this.state.month;

      var yearMonthFormat = 'YYYYMM';

      // Because there's no `m1.isSame(m2, 'jMonth')`
      if (selectedDay.format(yearMonthFormat) !== month.format(yearMonthFormat)) {
        this.setState({ month: selectedDay });
      }

      this.setState({ selectedDay: selectedDay });
    }
  }, {
    key: 'handleClickOutside',
    value: function handleClickOutside(event) {
      if (this.props.onClickOutside) {
        this.props.onClickOutside(event);
      }
    }
  }, {
    key: 'renderMonthSelector',
    value: function renderMonthSelector() {
      var month = this.state.month;
      var styles = this.props.styles;

      return _react2.default.createElement(_MonthSelector2.default, { styles: styles, selectedMonth: month });
    }
  }, {
    key: 'renderDays',
    value: function renderDays() {
      var _this2 = this;

      var _state = this.state,
          month = _state.month,
          selectedDay = _state.selectedDay;
      var _props = this.props,
          children = _props.children,
          min = _props.min,
          max = _props.max,
          styles = _props.styles,
          outsideClickIgnoreClass = _props.outsideClickIgnoreClass;


      var days = void 0;

      if (this.lastRenderedMonth === month) {
        days = this.days;
      } else {
        days = (0, _momentHelper.getDaysOfMonth)(month);
        this.days = days;
        this.lastRenderedMonth = month;
      }

      var monthFormat = 'MM';
      var dateFormat = 'YYYYMMDD';

      return _react2.default.createElement(
        'div',
        null,
        children,
        _react2.default.createElement(_DaysViewHeading2.default, { styles: styles, month: month }),
        _react2.default.createElement(_DaysOfWeek2.default, { styles: styles }),
        _react2.default.createElement(
          'div',
          { className: styles.dayPickerContainer },
          days.map(function (day) {
            var isCurrentMonth = day.format(monthFormat) === month.format(monthFormat);
            var disabled = (min ? day.isBefore(min) : false) || (max ? day.isAfter(max) : false);
            var selected = selectedDay ? selectedDay.isSame(day, 'day') : false;

            return _react2.default.createElement(_Day2.default, {
              key: day.format(dateFormat),
              onClick: _this2.handleClickOnDay,
              day: day,
              disabled: disabled,
              selected: selected,
              isCurrentMonth: isCurrentMonth,
              styles: styles
            });
          })
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          selectedDay = _props2.selectedDay,
          min = _props2.min,
          max = _props2.max,
          onClickOutside = _props2.onClickOutside,
          outsideClickIgnoreClass = _props2.outsideClickIgnoreClass,
          styles = _props2.styles,
          className = _props2.className;
      var mode = this.state.mode;


      return _react2.default.createElement(
        'div',
        { className: styles.calendarContainer + ' ' + className },
        mode === 'monthSelector' ? this.renderMonthSelector() : this.renderDays()
      );
    }
  }]);

  return Calendar;
}(_react.Component);

Calendar.propTypes = {
  min: _propTypes2.default.object,
  max: _propTypes2.default.object,
  styles: _propTypes2.default.object,
  selectedDay: _propTypes2.default.object,
  defaultMonth: _propTypes2.default.object,
  onSelect: _propTypes2.default.func,
  onClickOutside: _propTypes2.default.func,
  containerProps: _propTypes2.default.object
};
Calendar.childContextTypes = {
  nextMonth: _propTypes2.default.func.isRequired,
  prevMonth: _propTypes2.default.func.isRequired,
  setCalendarMode: _propTypes2.default.func.isRequired,
  setMonth: _propTypes2.default.func.isRequired,
  setType: _propTypes2.default.func.isRequired
};
Calendar.defaultProps = {
  styles: _DefaultStyles.defaultStyles,
  containerProps: {}
};
exports.default = (0, _reactOnclickoutside2.default)(Calendar);

/***/ }),

/***/ 2454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(387);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(729);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _persian = __webpack_require__(2455);

var _assets = __webpack_require__(2456);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Heading = function (_Component) {
  _inherits(Heading, _Component);

  function Heading() {
    _classCallCheck(this, Heading);

    return _possibleConstructorReturn(this, (Heading.__proto__ || Object.getPrototypeOf(Heading)).apply(this, arguments));
  }

  _createClass(Heading, [{
    key: 'handleMonthClick',
    value: function handleMonthClick(event) {
      var setCalendarMode = this.context.setCalendarMode;

      event.preventDefault();
      setCalendarMode('monthSelector');
    }
  }, {
    key: 'render',
    value: function render() {
      var _context = this.context,
          nextMonth = _context.nextMonth,
          prevMonth = _context.prevMonth;
      var _props = this.props,
          month = _props.month,
          styles = _props.styles;


      return _react2.default.createElement(
        'div',
        { className: styles.heading },
        _react2.default.createElement(
          'button',
          { className: styles.title, onClick: this.handleMonthClick.bind(this) },
          month.locale('en').format('MMMM YYYY')
        ),
        _react2.default.createElement('button', {
          type: 'button',
          title: '\u0645\u0627\u0647 \u0642\u0628\u0644',
          className: styles.prev,
          onClick: prevMonth,
          dangerouslySetInnerHTML: _assets.rightArrow
        }),
        _react2.default.createElement('button', {
          type: 'button',
          title: '\u0645\u0627\u0647 \u0628\u0639\u062F',
          className: styles.next,
          onClick: nextMonth,
          dangerouslySetInnerHTML: _assets.leftArrow
        })
      );
    }
  }]);

  return Heading;
}(_react.Component);

Heading.propTypes = {
  month: _propTypes2.default.object.isRequired
};
Heading.contextTypes = {
  styles: _propTypes2.default.object,
  nextMonth: _propTypes2.default.func.isRequired,
  prevMonth: _propTypes2.default.func.isRequired,
  setCalendarMode: _propTypes2.default.func.isRequired
};
exports.default = Heading;

/***/ }),

/***/ 2455:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.persianNumber = persianNumber;
var latinToPersianMap = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'];
var latinNumbers = [/1/g, /2/g, /3/g, /4/g, /5/g, /6/g, /7/g, /8/g, /9/g, /0/g];

function prepareNumber(input) {
  var string = void 0;
  if (typeof input === 'number') {
    string = input.toString();
  } else if (typeof input === 'undefined') {
    string = '';
  } else {
    string = input;
  }

  return string;
}

function latinToPersian(string) {
  var result = string;

  for (var index = 0; index < 10; index++) {
    result = result.replace(latinNumbers[index], latinToPersianMap[index]);
  }

  return result;
}

function persianNumber(input) {
  return latinToPersian(prepareNumber(input));
}

/***/ }),

/***/ 2456:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var leftArrow = exports.leftArrow = {
  __html: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 314.5 314.5" style="enable-background:new 0 0 314.5 314.5;" xml:space="preserve"><g><path class="arrow-icon" d="M125,157.5l116-116c10-10,10-24,0-34s-25-10-35,0l-133,133c-5,5-7,10-7,17s2,12,7,17l133,133c5,5,11,7,17,7s13-2,18-7c10-10,10-24,0-34L125,157.5z"/></g></svg>'
};

var rightArrow = exports.rightArrow = {
  __html: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 315.5 315.5" style="enable-background:new 0 0 315.5 315.5;" xml:space="preserve"><g><path class="arrow-icon" d="M242,141L109,8c-5-5-12-8-18-8S79,3,74,8c-10,10-10,24,0,34l116,116L74,274c-10,10-10,24,0,34s25,10,35,0l133-133c5-5,7-11,7-17C249,151,247,146,242,141z"/></g></svg>'
};

var remove = exports.remove = {
  __html: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 212.982 212.982" style="enable-background:new 0 0 212.982 212.982;" xml:space="preserve"><g><path style="fill-rule:evenodd;clip-rule:evenodd;" d="M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312   c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312   l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937   c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z" fill="#555555"/></g></svg>'
};

/***/ }),

/***/ 2457:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(387);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(729);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Day of week names for use in date-picker heading
var dayOfWeekNamesGregorian = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

var DaysOfWeek = function (_Component) {
  _inherits(DaysOfWeek, _Component);

  function DaysOfWeek() {
    _classCallCheck(this, DaysOfWeek);

    return _possibleConstructorReturn(this, (DaysOfWeek.__proto__ || Object.getPrototypeOf(DaysOfWeek)).apply(this, arguments));
  }

  _createClass(DaysOfWeek, [{
    key: 'render',
    value: function render() {
      var styles = this.props.styles;


      var dayOfWeekNames = dayOfWeekNamesGregorian;

      return _react2.default.createElement(
        'div',
        { className: styles.daysOfWeek },
        dayOfWeekNames.map(function (name, key) {
          return _react2.default.createElement(
            'div',
            { key: key },
            name
          );
        })
      );
    }
  }]);

  return DaysOfWeek;
}(_react.Component);

DaysOfWeek.propTypes = {
  styles: _propTypes2.default.object
};
exports.default = DaysOfWeek;

/***/ }),

/***/ 2458:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(387);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(729);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = __webpack_require__(1346);

var _moment2 = _interopRequireDefault(_moment);

var _classnames2 = __webpack_require__(854);

var _classnames3 = _interopRequireDefault(_classnames2);

var _MonthsViewHeading = __webpack_require__(2459);

var _MonthsViewHeading2 = _interopRequireDefault(_MonthsViewHeading);

var _assets = __webpack_require__(2456);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var monthsGregorian = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var MonthSelector = function (_Component) {
  _inherits(MonthSelector, _Component);

  function MonthSelector() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MonthSelector);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MonthSelector.__proto__ || Object.getPrototypeOf(MonthSelector)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      year: _this.props.selectedMonth
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MonthSelector, [{
    key: 'nextYear',
    value: function nextYear() {
      this.setState({
        year: this.state.year.clone().add(1, 'year')
      });
    }
  }, {
    key: 'prevYear',
    value: function prevYear() {
      this.setState({
        year: this.state.year.clone().subtract(1, 'year')
      });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(key) {
      var _context = this.context,
          setMonth = _context.setMonth,
          setCalendarMode = _context.setCalendarMode;

      var monthYearFormat = 'M-YYYY';
      setMonth((0, _moment2.default)(key, monthYearFormat));
      setCalendarMode('days');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var year = this.state.year;
      var _props = this.props,
          selectedMonth = _props.selectedMonth,
          styles = _props.styles;

      var yearFormat = 'YYYY';
      var monthYearFormat = 'M-YYYY';
      var months = monthsGregorian;

      return _react2.default.createElement(
        'div',
        { className: 'month-selector' },
        _react2.default.createElement(_MonthsViewHeading2.default, {
          styles: styles,
          year: year,
          onNextYear: this.nextYear.bind(this),
          onPrevYear: this.prevYear.bind(this)
        }),
        _react2.default.createElement(
          'div',
          { className: styles.monthsList },
          months.map(function (name, key) {
            var buttonFingerprint = key + 1 + '-' + year.format(yearFormat);
            var selectedMonthFingerprint = selectedMonth.format(monthYearFormat);
            var isCurrent = selectedMonthFingerprint === buttonFingerprint;

            var className = (0, _classnames3.default)(styles.monthWrapper, _defineProperty({}, styles.selected, isCurrent));

            return _react2.default.createElement(
              'div',
              { key: key, className: className },
              _react2.default.createElement(
                'button',
                { onClick: _this2.handleClick.bind(_this2, buttonFingerprint) },
                name
              )
            );
          })
        )
      );
    }
  }]);

  return MonthSelector;
}(_react.Component);

MonthSelector.propTypes = {
  styles: _propTypes2.default.object,
  selectedMonth: _propTypes2.default.object.isRequired
};
MonthSelector.contextTypes = {
  setCalendarMode: _propTypes2.default.func.isRequired,
  setMonth: _propTypes2.default.func.isRequired
};
exports.default = MonthSelector;

/***/ }),

/***/ 2459:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(387);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(729);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _persian = __webpack_require__(2455);

var _assets = __webpack_require__(2456);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MonthsViewHeading = function (_Component) {
  _inherits(MonthsViewHeading, _Component);

  function MonthsViewHeading() {
    _classCallCheck(this, MonthsViewHeading);

    return _possibleConstructorReturn(this, (MonthsViewHeading.__proto__ || Object.getPrototypeOf(MonthsViewHeading)).apply(this, arguments));
  }

  _createClass(MonthsViewHeading, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          year = _props.year,
          styles = _props.styles,
          type = _props.type;


      var yearFormat = 'YYYY';

      return _react2.default.createElement(
        'div',
        { className: styles.heading },
        _react2.default.createElement(
          'span',
          { className: styles.title },
          year.format(yearFormat)
        ),
        _react2.default.createElement('button', {
          type: 'button',
          title: "before year",
          style: styles.navButton,
          className: styles.prev,
          onClick: this.props.onPrevYear,
          dangerouslySetInnerHTML: _assets.rightArrow
        }),
        _react2.default.createElement('button', {
          type: 'button',
          title: "next year",
          style: styles.navButton,
          className: styles.next,
          onClick: this.props.onNextYear,
          dangerouslySetInnerHTML: _assets.leftArrow
        })
      );
    }
  }]);

  return MonthsViewHeading;
}(_react.Component);

MonthsViewHeading.propTypes = {
  year: _propTypes2.default.object.isRequired,
  onNextYear: _propTypes2.default.func.isRequired,
  onPrevYear: _propTypes2.default.func.isRequired
};
MonthsViewHeading.contextTypes = {
  styles: _propTypes2.default.object,
  type: _propTypes2.default.number
};
exports.default = MonthsViewHeading;

/***/ }),

/***/ 2460:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(387);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(729);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(854);

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  wrapper: {},
  button: {
    outline: 'none',
    cursor: 'pointer'
  }
};

var Day = function (_Component) {
  _inherits(Day, _Component);

  function Day() {
    _classCallCheck(this, Day);

    return _possibleConstructorReturn(this, (Day.__proto__ || Object.getPrototypeOf(Day)).apply(this, arguments));
  }

  _createClass(Day, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.selected !== this.props.selected || nextProps.disabled !== this.props.disabled || nextProps.isCurrentMonth !== this.props.isCurrentMonth;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(event) {
      event.preventDefault();
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
      var _props = this.props,
          onClick = _props.onClick,
          day = _props.day;


      if (onClick) {
        onClick(day);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props2 = this.props,
          day = _props2.day,
          disabled = _props2.disabled,
          selected = _props2.selected,
          isCurrentMonth = _props2.isCurrentMonth,
          onClick = _props2.onClick,
          styles = _props2.styles,
          rest = _objectWithoutProperties(_props2, ['day', 'disabled', 'selected', 'isCurrentMonth', 'onClick', 'styles']);

      var className = (0, _classnames3.default)(styles.dayWrapper, (_classnames = {}, _defineProperty(_classnames, styles.selected, selected), _defineProperty(_classnames, styles.currentMonth, isCurrentMonth), _classnames));

      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          'button',
          _extends({
            type: 'button',
            onClick: this.handleClick.bind(this),
            disabled: disabled
          }, rest),
          day.format('D')
        )
      );
    }
  }]);

  return Day;
}(_react.Component);

Day.propTypes = {
  day: _propTypes2.default.object.isRequired,
  isCurrentMonth: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  selected: _propTypes2.default.bool,
  onClick: _propTypes2.default.func
};
exports.default = Day;

/***/ }),

/***/ 2461:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDaysOfMonth = getDaysOfMonth;
/**
 * Get days of a month that should be shown on a month page
 *
 * @param month A moment object
 * @returns {Array}
 */
function getDaysOfMonth(month) {
  var days = [];

  var monthFormat = 'Month';
  var dayOffset = 0;

  var current = month.clone().startOf(monthFormat);
  var end = month.clone().endOf(monthFormat);

  // Set start to the first day of week in the last month
  current.subtract((current.day() + dayOffset) % 7, 'days');

  // Set end to the last day of week in the next month
  end.add(6 - (end.day() + dayOffset) % 7, 'days');

  while (current.isBefore(end)) {
    days.push(current.clone());
    current.add(1, 'days');
  }

  return days;
}

/***/ }),

/***/ 2462:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * A higher-order-component for handling onClickOutside for React components.
 */
(function(root) {

  // administrative
  var registeredComponents = [];
  var handlers = [];
  var IGNORE_CLASS = 'ignore-react-onclickoutside';
  var DEFAULT_EVENTS = ['mousedown', 'touchstart'];

  /**
   * Check whether some DOM node is our Component's node.
   */
  var isNodeFound = function(current, componentNode, ignoreClass) {
    if (current === componentNode) {
      return true;
    }
    // SVG <use/> elements do not technically reside in the rendered DOM, so
    // they do not have classList directly, but they offer a link to their
    // corresponding element, which can have classList. This extra check is for
    // that case.
    // See: http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGUseElement
    // Discussion: https://github.com/Pomax/react-onclickoutside/pull/17
    if (current.correspondingElement) {
      return current.correspondingElement.classList.contains(ignoreClass);
    }
    return current.classList.contains(ignoreClass);
  };

  /**
   * Try to find our node in a hierarchy of nodes, returning the document
   * node as highest noode if our node is not found in the path up.
   */
  var findHighest = function(current, componentNode, ignoreClass) {
    if (current === componentNode) {
      return true;
    }

    // If source=local then this event came from 'somewhere'
    // inside and should be ignored. We could handle this with
    // a layered approach, too, but that requires going back to
    // thinking in terms of Dom node nesting, running counter
    // to React's 'you shouldn't care about the DOM' philosophy.
    while(current.parentNode) {
      if (isNodeFound(current, componentNode, ignoreClass)) {
        return true;
      }
      current = current.parentNode;
    }
    return current;
  };

  /**
   * Check if the browser scrollbar was clicked
   */
  var clickedScrollbar = function(evt) {
    return document.documentElement.clientWidth <= evt.clientX || document.documentElement.clientHeight <= evt.clientY;
  };

  /**
   * Generate the event handler that checks whether a clicked DOM node
   * is inside of, or lives outside of, our Component's node tree.
   */
  var generateOutsideCheck = function(componentNode, componentInstance, eventHandler, ignoreClass, excludeScrollbar, preventDefault, stopPropagation) {
    return function(evt) {
      if (preventDefault) {
        evt.preventDefault();
      }
      if (stopPropagation) {
        evt.stopPropagation();
      }
      var current = evt.target;
      if((excludeScrollbar && clickedScrollbar(evt)) || (findHighest(current, componentNode, ignoreClass) !== document)) {
        return;
      }
      eventHandler(evt);
    };
  };

  /**
   * This function generates the HOC function that you'll use
   * in order to impart onOutsideClick listening to an
   * arbitrary component. It gets called at the end of the
   * bootstrapping code to yield an instance of the
   * onClickOutsideHOC function defined inside setupHOC().
   */
  function setupHOC(root, React, ReactDOM, createReactClass) {

    // The actual Component-wrapping HOC:
    return function onClickOutsideHOC(Component, config) {
      var wrapComponentWithOnClickOutsideHandling = createReactClass({
        statics: {
          /**
           * Access the wrapped Component's class.
           */
          getClass: function() {
            if (Component.getClass) {
              return Component.getClass();
            }
            return Component;
          }
        },

        /**
         * Access the wrapped Component's instance.
         */
        getInstance: function() {
          return Component.prototype.isReactComponent ? this.refs.instance : this;
        },

        // this is given meaning in componentDidMount
        __outsideClickHandler: function() {},

        getDefaultProps: function() {
          return {
            excludeScrollbar: config && config.excludeScrollbar
          };
        },

        /**
         * Add click listeners to the current document,
         * linked to this component's state.
         */
        componentDidMount: function() {
          // If we are in an environment without a DOM such
          // as shallow rendering or snapshots then we exit
          // early to prevent any unhandled errors being thrown.
          if (typeof document === 'undefined' || !document.createElement){
            return;
          }

          var instance = this.getInstance();
          var clickOutsideHandler;

          if(config && typeof config.handleClickOutside === 'function') {
            clickOutsideHandler = config.handleClickOutside(instance);
            if(typeof clickOutsideHandler !== 'function') {
              throw new Error('Component lacks a function for processing outside click events specified by the handleClickOutside config option.');
            }
          } else if(typeof instance.handleClickOutside === 'function') {
            if (React.Component.prototype.isPrototypeOf(instance)) {
              clickOutsideHandler = instance.handleClickOutside.bind(instance);
            } else {
              clickOutsideHandler = instance.handleClickOutside;
            }
          } else if(typeof instance.props.handleClickOutside === 'function') {
            clickOutsideHandler = instance.props.handleClickOutside;
          } else {
            throw new Error('Component lacks a handleClickOutside(event) function for processing outside click events.');
          }

          var componentNode = ReactDOM.findDOMNode(instance);
          if (componentNode === null) {
            console.warn('Antipattern warning: there was no DOM node associated with the component that is being wrapped by outsideClick.');
            console.warn([
              'This is typically caused by having a component that starts life with a render function that',
              'returns `null` (due to a state or props value), so that the component \'exist\' in the React',
              'chain of components, but not in the DOM.\n\nInstead, you need to refactor your code so that the',
              'decision of whether or not to show your component is handled by the parent, in their render()',
              'function.\n\nIn code, rather than:\n\n  A{render(){return check? <.../> : null;}\n  B{render(){<A check=... />}\n\nmake sure that you',
              'use:\n\n  A{render(){return <.../>}\n  B{render(){return <...>{ check ? <A/> : null }<...>}}\n\nThat is:',
              'the parent is always responsible for deciding whether or not to render any of its children.',
              'It is not the child\'s responsibility to decide whether a render instruction from above should',
              'get ignored or not by returning `null`.\n\nWhen any component gets its render() function called,',
              'that is the signal that it should be rendering its part of the UI. It may in turn decide not to',
              'render all of *its* children, but it should never return `null` for itself. It is not responsible',
              'for that decision.'
            ].join(' '));
          }

          var fn = this.__outsideClickHandler = generateOutsideCheck(
            componentNode,
            instance,
            clickOutsideHandler,
            this.props.outsideClickIgnoreClass || IGNORE_CLASS,
            this.props.excludeScrollbar, // fallback not needed, prop always exists because of getDefaultProps
            this.props.preventDefault || false,
            this.props.stopPropagation || false
          );

          var pos = registeredComponents.length;
          registeredComponents.push(this);
          handlers[pos] = fn;

          // If there is a truthy disableOnClickOutside property for this
          // component, don't immediately start listening for outside events.
          if (!this.props.disableOnClickOutside) {
            this.enableOnClickOutside();
          }
        },

        /**
        * Track for disableOnClickOutside props changes and enable/disable click outside
        */
        componentWillReceiveProps: function(nextProps) {
          if (this.props.disableOnClickOutside && !nextProps.disableOnClickOutside) {
            this.enableOnClickOutside();
          } else if (!this.props.disableOnClickOutside && nextProps.disableOnClickOutside) {
            this.disableOnClickOutside();
          }
        },

        /**
         * Remove the document's event listeners
         */
        componentWillUnmount: function() {
          this.disableOnClickOutside();
          this.__outsideClickHandler = false;
          var pos = registeredComponents.indexOf(this);
          if( pos>-1) {
            // clean up so we don't leak memory
            if (handlers[pos]) { handlers.splice(pos, 1); }
            registeredComponents.splice(pos, 1);
          }
        },

        /**
         * Can be called to explicitly enable event listening
         * for clicks and touches outside of this element.
         */
        enableOnClickOutside: function() {
          var fn = this.__outsideClickHandler;
          if (typeof document !== 'undefined') {
            var events = this.props.eventTypes || DEFAULT_EVENTS;
            if (!events.forEach) {
              events = [events];
            }
            events.forEach(function (eventName) {
              document.addEventListener(eventName, fn);
            });
          }
        },

        /**
         * Can be called to explicitly disable event listening
         * for clicks and touches outside of this element.
         */
        disableOnClickOutside: function() {
          var fn = this.__outsideClickHandler;
          if (typeof document !== 'undefined') {
            var events = this.props.eventTypes || DEFAULT_EVENTS;
            if (!events.forEach) {
              events = [events];
            }
            events.forEach(function (eventName) {
              document.removeEventListener(eventName, fn);
            });
          }
        },

        /**
         * Pass-through render
         */
        render: function() {
          var passedProps = this.props;
          var props = {};
          Object.keys(this.props).forEach(function(key) {
            if (key !== 'excludeScrollbar') {
              props[key] = passedProps[key];
            }
          });
          if (Component.prototype.isReactComponent) {
            props.ref = 'instance';
          }
          props.disableOnClickOutside = this.disableOnClickOutside;
          props.enableOnClickOutside = this.enableOnClickOutside;
          return React.createElement(Component, props);
        }
      });

      // Add display name for React devtools
      (function bindWrappedComponentName(c, wrapper) {
        var componentName = c.displayName || c.name || 'Component';
        wrapper.displayName = 'OnClickOutside(' + componentName + ')';
      }(Component, wrapComponentWithOnClickOutsideHandling));

      return wrapComponentWithOnClickOutsideHandling;
    };
  }

  /**
   * This function sets up the library in ways that
   * work with the various modulde loading solutions
   * used in JavaScript land today.
   */
  function setupBinding(root, factory) {
    if (true) {
      // AMD. Register as an anonymous module.
      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(387),__webpack_require__(396),__webpack_require__(774)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(React, ReactDom, createReactClass) {
        if (!createReactClass) createReactClass = React.createClass;
        return factory(root, React, ReactDom, createReactClass);
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else { var createReactClass; }
  }

  // Make it all happen
  setupBinding(root, setupHOC);

}(this));


/***/ }),

/***/ 2463:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultStyles = exports.defaultStyles = {
  calendarContainer: 'calendarContainer',
  heading: 'heading',
  prev: 'prev',
  next: 'next',
  title: 'title',
  dayWrapper: 'dayWrapper',
  currentMonth: 'currentMonth',
  daysOfWeek: 'daysOfWeek',
  monthsList: 'monthsList',
  selected: 'selected',
  dayPickerContainer: 'dayPickerContainer'
};

/***/ }),

/***/ 2464:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(387);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(729);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = __webpack_require__(1346);

var _moment2 = _interopRequireDefault(_moment);

var _TimePicker = __webpack_require__(2465);

var _TimePicker2 = _interopRequireDefault(_TimePicker);

var _DatePicker = __webpack_require__(2449);

var _persian = __webpack_require__(2455);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var disabledMinutes = function disabledMinutes() {
  return [].concat(_toConsumableArray(Array(60))).map(function (v, i) {
    return i;
  }).filter(function (v) {
    return v % 5 !== 0;
  });
};

var MyTimePicker = function (_Component) {
  _inherits(MyTimePicker, _Component);

  function MyTimePicker() {
    _classCallCheck(this, MyTimePicker);

    return _possibleConstructorReturn(this, (MyTimePicker.__proto__ || Object.getPrototypeOf(MyTimePicker)).apply(this, arguments));
  }

  _createClass(MyTimePicker, [{
    key: 'handleChange',
    value: function handleChange(value) {
      var _props = this.props,
          momentValue = _props.momentValue,
          min = _props.min;

      var newValue = void 0;

      if (momentValue) {
        newValue = momentValue.clone();
      } else if (min && min.isAfter((0, _moment2.default)())) {
        newValue = min.clone();
      } else {
        newValue = (0, _moment2.default)(value);
      }

      newValue.hour(value.hour());
      newValue.minute(value.minute());

      this.props.setMomentValue(newValue);
    }
  }, {
    key: 'render',
    value: function render() {
      var momentValue = this.props.momentValue;


      var timeLabel = 'time:';

      return momentValue ? _react2.default.createElement(
        'div',
        { className: 'time-picker-container' },
        _react2.default.createElement(
          'div',
          { className: 'time-label' },
          timeLabel
        ),
        _react2.default.createElement(
          'div',
          { className: 'time-picker-panel' },
          _react2.default.createElement(_TimePicker2.default, {
            showAMPM: true,
            showSecond: false,
            allowEmpty: false,
            value: momentValue,
            className: _DatePicker.outsideClickIgnoreClass,
            popupClassName: _DatePicker.outsideClickIgnoreClass,
            panelClassName: _DatePicker.outsideClickIgnoreClass + ' time-picker-panel',
            onChange: this.handleChange.bind(this),
            disabledMinutes: disabledMinutes,
            formatter: function formatter(value) {
              return (0, _persian.persianNumber)(value);
            },
            hideDisabledOptions: true
          })
        ),
        _react2.default.createElement('div', { style: { clear: 'both' } })
      ) : null;
    }
  }]);

  return MyTimePicker;
}(_react.Component);

MyTimePicker.propTypes = {
  momentValue: _propTypes2.default.object,
  setMomentValue: _propTypes2.default.func
};
exports.default = MyTimePicker;

/***/ }),

/***/ 2465:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TimePicker = __webpack_require__(2466);

var _TimePicker2 = _interopRequireDefault(_TimePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _TimePicker2.default;

/***/ }),

/***/ 2466:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(387);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(729);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _rcTrigger = __webpack_require__(2467);

var _rcTrigger2 = _interopRequireDefault(_rcTrigger);

var _Panel = __webpack_require__(2474);

var _Panel2 = _interopRequireDefault(_Panel);

var _placements = __webpack_require__(2478);

var _placements2 = _interopRequireDefault(_placements);

var _moment = __webpack_require__(1346);

var _moment2 = _interopRequireDefault(_moment);

var _createReactClass = __webpack_require__(774);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function noop() {}

function refFn(field, component) {
  this[field] = component;
}

var Picker = (0, _createReactClass2.default)({
  displayName: 'Picker',

  propTypes: {
    prefixCls: _propTypes2.default.string,
    clearText: _propTypes2.default.string,
    value: _propTypes2.default.object,
    defaultOpenValue: _propTypes2.default.object,
    disabled: _propTypes2.default.bool,
    allowEmpty: _propTypes2.default.bool,
    defaultValue: _propTypes2.default.object,
    open: _propTypes2.default.bool,
    defaultOpen: _propTypes2.default.bool,
    align: _propTypes2.default.object,
    placement: _propTypes2.default.any,
    transitionName: _propTypes2.default.string,
    getPopupContainer: _propTypes2.default.func,
    placeholder: _propTypes2.default.string,
    format: _propTypes2.default.string,
    showHour: _propTypes2.default.bool,
    style: _propTypes2.default.object,
    className: _propTypes2.default.string,
    showSecond: _propTypes2.default.bool,
    disabledHours: _propTypes2.default.func,
    disabledMinutes: _propTypes2.default.func,
    disabledSeconds: _propTypes2.default.func,
    hideDisabledOptions: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,
    onOpen: _propTypes2.default.func,
    onClose: _propTypes2.default.func,
    showAMPM: _propTypes2.default.bool,
    panelClassName: _propTypes2.default.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      clearText: 'clear',
      prefixCls: 'rc-time-picker',
      defaultOpen: false,
      style: {},
      className: '',
      align: {},
      defaultOpenValue: (0, _moment2.default)(),
      allowEmpty: true,
      showHour: true,
      showSecond: true,
      disabledHours: noop,
      disabledMinutes: noop,
      disabledSeconds: noop,
      hideDisabledOptions: false,
      placement: 'bottomLeft',
      onChange: noop,
      onOpen: noop,
      onClose: noop
    };
  },
  getInitialState: function getInitialState() {
    this.savePanelRef = refFn.bind(this, 'panelInstance');
    var _props = this.props,
        defaultOpen = _props.defaultOpen,
        defaultValue = _props.defaultValue,
        _props$open = _props.open,
        open = _props$open === undefined ? defaultOpen : _props$open,
        _props$value = _props.value,
        value = _props$value === undefined ? defaultValue : _props$value;

    return {
      open: open,
      value: value
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var value = nextProps.value,
        open = nextProps.open;

    if ('value' in nextProps) {
      this.setState({
        value: value
      });
    }
    if (open !== undefined) {
      this.setState({ open: open });
    }
  },
  onPanelChange: function onPanelChange(value) {
    this.setValue(value);
  },
  onPanelClear: function onPanelClear() {
    this.setValue(null);
    this.setOpen(false);
  },
  onVisibleChange: function onVisibleChange(open) {
    this.setOpen(open);
  },
  onEsc: function onEsc() {
    this.setOpen(false);
    this.refs.picker.focus();
  },
  onKeyDown: function onKeyDown(e) {
    if (e.keyCode === 40) {
      this.setOpen(true);
    }
  },
  setValue: function setValue(value) {
    if (!('value' in this.props)) {
      this.setState({
        value: value
      });
    }
    this.props.onChange(value);
  },
  getFormat: function getFormat() {
    var format = this.props.format;

    if (this.props.format) {
      format = this.props.format;
    } else if (!this.props.showSecond) {
      format = 'HH:mm';
    } else if (!this.props.showHour) {
      format = 'mm:ss';
    } else {
      format = 'HH:mm:ss';
    }

    if (this.props.showAMPM) {
      format = format.replace('HH', 'hh') + ' A';
    }

    return format;
  },
  getPanelElement: function getPanelElement() {
    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        placeholder = _props2.placeholder,
        disabledHours = _props2.disabledHours,
        disabledMinutes = _props2.disabledMinutes,
        disabledSeconds = _props2.disabledSeconds,
        hideDisabledOptions = _props2.hideDisabledOptions,
        allowEmpty = _props2.allowEmpty,
        showHour = _props2.showHour,
        showSecond = _props2.showSecond,
        showAMPM = _props2.showAMPM,
        defaultOpenValue = _props2.defaultOpenValue,
        clearText = _props2.clearText;

    return _react2.default.createElement(_Panel2.default, {
      clearText: clearText,
      prefixCls: prefixCls + '-panel',
      ref: this.savePanelRef,
      value: this.state.value,
      onChange: this.onPanelChange,
      onClear: this.onPanelClear,
      defaultOpenValue: defaultOpenValue,
      showHour: showHour,
      onEsc: this.onEsc,
      showSecond: showSecond,
      showAMPM: showAMPM,
      allowEmpty: allowEmpty,
      format: this.getFormat(),
      placeholder: placeholder,
      disabledHours: disabledHours,
      disabledMinutes: disabledMinutes,
      disabledSeconds: disabledSeconds,
      hideDisabledOptions: hideDisabledOptions
    });
  },
  setOpen: function setOpen(open, callback) {
    var _props3 = this.props,
        onOpen = _props3.onOpen,
        onClose = _props3.onClose;

    if (this.state.open !== open) {
      this.setState({
        open: open
      }, callback);
      var event = {
        open: open
      };
      if (open) {
        onOpen(event);
      } else {
        onClose(event);
      }
    }
  },
  render: function render() {
    var _props4 = this.props,
        panelClassName = _props4.panelClassName,
        prefixCls = _props4.prefixCls,
        placeholder = _props4.placeholder,
        placement = _props4.placement,
        align = _props4.align,
        disabled = _props4.disabled,
        transitionName = _props4.transitionName,
        style = _props4.style,
        className = _props4.className,
        showHour = _props4.showHour,
        showSecond = _props4.showSecond,
        getPopupContainer = _props4.getPopupContainer;
    var _state = this.state,
        open = _state.open,
        value = _state.value;

    var popupClassName = void 0;
    if (!showHour || !showSecond) {
      popupClassName = prefixCls + '-panel-narrow';
    }
    return _react2.default.createElement(
      _rcTrigger2.default,
      {
        prefixCls: prefixCls + '-panel  ' + panelClassName,
        popupClassName: popupClassName,
        popup: this.getPanelElement(),
        popupAlign: align,
        builtinPlacements: _placements2.default,
        popupPlacement: placement,
        action: disabled ? [] : ['click'],
        destroyPopupOnHide: true,
        getPopupContainer: getPopupContainer,
        popupTransitionName: transitionName,
        popupVisible: open,
        onPopupVisibleChange: this.onVisibleChange
      },
      _react2.default.createElement(
        'span',
        { className: prefixCls + ' ' + className, style: style },
        _react2.default.createElement('input', {
          className: prefixCls + '-input',
          ref: 'picker', type: 'text', placeholder: placeholder,
          readOnly: true,
          onKeyDown: this.onKeyDown,
          disabled: disabled, value: value && value.format(this.getFormat()) || ''
        }),
        _react2.default.createElement('span', { className: prefixCls + '-icon' })
      )
    );
  }
});

exports.default = Picker;

/***/ }),

/***/ 2467:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(1439);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(387);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(729);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(396);

var _createReactClass = __webpack_require__(774);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _contains = __webpack_require__(1557);

var _contains2 = _interopRequireDefault(_contains);

var _addEventListener = __webpack_require__(2468);

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _Popup = __webpack_require__(2469);

var _Popup2 = _interopRequireDefault(_Popup);

var _utils = __webpack_require__(2472);

var _getContainerRenderMixin = __webpack_require__(2473);

var _getContainerRenderMixin2 = _interopRequireDefault(_getContainerRenderMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function noop() {}

function returnEmptyString() {
  return '';
}

function returnDocument() {
  return window.document;
}

var isMobile = typeof navigator !== 'undefined' && !!navigator.userAgent.match(/(Android|iPhone|iPad|iPod|iOS|UCWEB)/i);

var ALL_HANDLERS = ['onClick', 'onMouseDown', 'onTouchStart', 'onMouseEnter', 'onMouseLeave', 'onFocus', 'onBlur'];

var Trigger = (0, _createReactClass2.default)({
  displayName: 'Trigger',
  propTypes: {
    children: _propTypes2.default.any,
    action: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)]),
    showAction: _propTypes2.default.any,
    hideAction: _propTypes2.default.any,
    getPopupClassNameFromAlign: _propTypes2.default.any,
    onPopupVisibleChange: _propTypes2.default.func,
    afterPopupVisibleChange: _propTypes2.default.func,
    popup: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.func]).isRequired,
    popupStyle: _propTypes2.default.object,
    prefixCls: _propTypes2.default.string,
    popupClassName: _propTypes2.default.string,
    popupPlacement: _propTypes2.default.string,
    builtinPlacements: _propTypes2.default.object,
    popupTransitionName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
    popupAnimation: _propTypes2.default.any,
    mouseEnterDelay: _propTypes2.default.number,
    mouseLeaveDelay: _propTypes2.default.number,
    zIndex: _propTypes2.default.number,
    focusDelay: _propTypes2.default.number,
    blurDelay: _propTypes2.default.number,
    getPopupContainer: _propTypes2.default.func,
    getDocument: _propTypes2.default.func,
    destroyPopupOnHide: _propTypes2.default.bool,
    mask: _propTypes2.default.bool,
    maskClosable: _propTypes2.default.bool,
    onPopupAlign: _propTypes2.default.func,
    popupAlign: _propTypes2.default.object,
    popupVisible: _propTypes2.default.bool,
    maskTransitionName: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
    maskAnimation: _propTypes2.default.string
  },

  mixins: [(0, _getContainerRenderMixin2.default)({
    autoMount: false,

    isVisible: function isVisible(instance) {
      return instance.state.popupVisible;
    },
    getContainer: function getContainer(instance) {
      var props = instance.props;

      var popupContainer = document.createElement('div');
      popupContainer.style.position = 'absolute';
      popupContainer.style.top = '0';
      popupContainer.style.left = '0';
      popupContainer.style.width = '100%';
      var mountNode = props.getPopupContainer ? props.getPopupContainer((0, _reactDom.findDOMNode)(instance)) : props.getDocument().body;
      mountNode.appendChild(popupContainer);
      return popupContainer;
    }
  })],

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'rc-trigger-popup',
      getPopupClassNameFromAlign: returnEmptyString,
      getDocument: returnDocument,
      onPopupVisibleChange: noop,
      afterPopupVisibleChange: noop,
      onPopupAlign: noop,
      popupClassName: '',
      mouseEnterDelay: 0,
      mouseLeaveDelay: 0.1,
      focusDelay: 0,
      blurDelay: 0.15,
      popupStyle: {},
      destroyPopupOnHide: false,
      popupAlign: {},
      defaultPopupVisible: false,
      mask: false,
      maskClosable: true,
      action: [],
      showAction: [],
      hideAction: []
    };
  },
  getInitialState: function getInitialState() {
    var props = this.props;
    var popupVisible = void 0;
    if ('popupVisible' in props) {
      popupVisible = !!props.popupVisible;
    } else {
      popupVisible = !!props.defaultPopupVisible;
    }
    return {
      popupVisible: popupVisible
    };
  },
  componentWillMount: function componentWillMount() {
    var _this = this;

    ALL_HANDLERS.forEach(function (h) {
      _this['fire' + h] = function (e) {
        _this.fireEvents(h, e);
      };
    });
  },
  componentDidMount: function componentDidMount() {
    this.componentDidUpdate({}, {
      popupVisible: this.state.popupVisible
    });
  },
  componentWillReceiveProps: function componentWillReceiveProps(_ref) {
    var popupVisible = _ref.popupVisible;

    if (popupVisible !== undefined) {
      this.setState({
        popupVisible: popupVisible
      });
    }
  },
  componentDidUpdate: function componentDidUpdate(_, prevState) {
    var props = this.props;
    var state = this.state;
    this.renderComponent(null, function () {
      if (prevState.popupVisible !== state.popupVisible) {
        props.afterPopupVisibleChange(state.popupVisible);
      }
    });

    if (state.popupVisible) {
      var currentDocument = void 0;
      if (!this.clickOutsideHandler && this.isClickToHide()) {
        currentDocument = props.getDocument();
        this.clickOutsideHandler = (0, _addEventListener2.default)(currentDocument, 'mousedown', this.onDocumentClick);
      }
      if (!this.touchOutsideHandler && isMobile) {
        currentDocument = currentDocument || props.getDocument();
        this.touchOutsideHandler = (0, _addEventListener2.default)(currentDocument, 'click', this.onDocumentClick);
      }
      return;
    }

    this.clearOutsideHandler();
  },
  componentWillUnmount: function componentWillUnmount() {
    this.clearDelayTimer();
    this.clearOutsideHandler();
  },
  onMouseEnter: function onMouseEnter(e) {
    this.fireEvents('onMouseEnter', e);
    this.delaySetPopupVisible(true, this.props.mouseEnterDelay);
  },
  onMouseLeave: function onMouseLeave(e) {
    this.fireEvents('onMouseLeave', e);
    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
  },
  onPopupMouseEnter: function onPopupMouseEnter() {
    this.clearDelayTimer();
  },
  onPopupMouseLeave: function onPopupMouseLeave(e) {
    if (e.relatedTarget && !e.relatedTarget.setTimeout && this._component && this._component.getPopupDomNode && (0, _contains2.default)(this._component.getPopupDomNode(), e.relatedTarget)) {
      return;
    }
    this.delaySetPopupVisible(false, this.props.mouseLeaveDelay);
  },
  onFocus: function onFocus(e) {
    this.fireEvents('onFocus', e);
    this.clearDelayTimer();
    if (this.isFocusToShow()) {
      this.focusTime = Date.now();
      this.delaySetPopupVisible(true, this.props.focusDelay);
    }
  },
  onMouseDown: function onMouseDown(e) {
    this.fireEvents('onMouseDown', e);
    this.preClickTime = Date.now();
  },
  onTouchStart: function onTouchStart(e) {
    this.fireEvents('onTouchStart', e);
    this.preTouchTime = Date.now();
  },
  onBlur: function onBlur(e) {
    this.fireEvents('onBlur', e);
    this.clearDelayTimer();
    if (this.isBlurToHide()) {
      this.delaySetPopupVisible(false, this.props.blurDelay);
    }
  },
  onClick: function onClick(event) {
    this.fireEvents('onClick', event);
    if (this.focusTime) {
      var preTime = void 0;
      if (this.preClickTime && this.preTouchTime) {
        preTime = Math.min(this.preClickTime, this.preTouchTime);
      } else if (this.preClickTime) {
        preTime = this.preClickTime;
      } else if (this.preTouchTime) {
        preTime = this.preTouchTime;
      }
      if (Math.abs(preTime - this.focusTime) < 20) {
        return;
      }
      this.focusTime = 0;
    }
    this.preClickTime = 0;
    this.preTouchTime = 0;
    event.preventDefault();
    var nextVisible = !this.state.popupVisible;
    if (this.isClickToHide() && !nextVisible || nextVisible && this.isClickToShow()) {
      this.setPopupVisible(!this.state.popupVisible);
    }
  },
  onDocumentClick: function onDocumentClick(event) {
    if (this.props.mask && !this.props.maskClosable) {
      return;
    }
    var target = event.target;
    var root = (0, _reactDom.findDOMNode)(this);
    var popupNode = this.getPopupDomNode();
    if (!(0, _contains2.default)(root, target) && !(0, _contains2.default)(popupNode, target)) {
      this.close();
    }
  },
  getPopupDomNode: function getPopupDomNode() {
    if (this._component && this._component.getPopupDomNode) {
      return this._component.getPopupDomNode();
    }
    return null;
  },
  getRootDomNode: function getRootDomNode() {
    return (0, _reactDom.findDOMNode)(this);
  },
  getPopupClassNameFromAlign: function getPopupClassNameFromAlign(align) {
    var className = [];
    var props = this.props;
    var popupPlacement = props.popupPlacement,
        builtinPlacements = props.builtinPlacements,
        prefixCls = props.prefixCls;

    if (popupPlacement && builtinPlacements) {
      className.push((0, _utils.getPopupClassNameFromAlign)(builtinPlacements, prefixCls, align));
    }
    if (props.getPopupClassNameFromAlign) {
      className.push(props.getPopupClassNameFromAlign(align));
    }
    return className.join(' ');
  },
  getPopupAlign: function getPopupAlign() {
    var props = this.props;
    var popupPlacement = props.popupPlacement,
        popupAlign = props.popupAlign,
        builtinPlacements = props.builtinPlacements;

    if (popupPlacement && builtinPlacements) {
      return (0, _utils.getAlignFromPlacement)(builtinPlacements, popupPlacement, popupAlign);
    }
    return popupAlign;
  },
  getComponent: function getComponent() {
    var props = this.props,
        state = this.state;

    var mouseProps = {};
    if (this.isMouseEnterToShow()) {
      mouseProps.onMouseEnter = this.onPopupMouseEnter;
    }
    if (this.isMouseLeaveToHide()) {
      mouseProps.onMouseLeave = this.onPopupMouseLeave;
    }
    return _react2.default.createElement(_Popup2.default, (0, _extends3.default)({
      prefixCls: props.prefixCls,
      destroyPopupOnHide: props.destroyPopupOnHide,
      visible: state.popupVisible,
      className: props.popupClassName,
      action: props.action,
      align: this.getPopupAlign(),
      onAlign: props.onPopupAlign,
      animation: props.popupAnimation,
      getClassNameFromAlign: this.getPopupClassNameFromAlign
    }, mouseProps, {
      getRootDomNode: this.getRootDomNode,
      style: props.popupStyle,
      mask: props.mask,
      zIndex: props.zIndex,
      transitionName: props.popupTransitionName,
      maskAnimation: props.maskAnimation,
      maskTransitionName: props.maskTransitionName
    }), typeof props.popup === 'function' ? props.popup() : props.popup);
  },
  setPopupVisible: function setPopupVisible(popupVisible) {
    this.clearDelayTimer();
    if (this.state.popupVisible !== popupVisible) {
      if (!('popupVisible' in this.props)) {
        this.setState({
          popupVisible: popupVisible
        });
      }
      this.props.onPopupVisibleChange(popupVisible);
    }
  },
  delaySetPopupVisible: function delaySetPopupVisible(visible, delayS) {
    var _this2 = this;

    var delay = delayS * 1000;
    this.clearDelayTimer();
    if (delay) {
      this.delayTimer = setTimeout(function () {
        _this2.setPopupVisible(visible);
        _this2.clearDelayTimer();
      }, delay);
    } else {
      this.setPopupVisible(visible);
    }
  },
  clearDelayTimer: function clearDelayTimer() {
    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
  },
  clearOutsideHandler: function clearOutsideHandler() {
    if (this.clickOutsideHandler) {
      this.clickOutsideHandler.remove();
      this.clickOutsideHandler = null;
    }

    if (this.touchOutsideHandler) {
      this.touchOutsideHandler.remove();
      this.touchOutsideHandler = null;
    }
  },
  createTwoChains: function createTwoChains(event) {
    var childPros = this.props.children.props;
    var props = this.props;
    if (childPros[event] && props[event]) {
      return this['fire' + event];
    }
    return childPros[event] || props[event];
  },
  isClickToShow: function isClickToShow() {
    var _props = this.props,
        action = _props.action,
        showAction = _props.showAction;

    return action.indexOf('click') !== -1 || showAction.indexOf('click') !== -1;
  },
  isClickToHide: function isClickToHide() {
    var _props2 = this.props,
        action = _props2.action,
        hideAction = _props2.hideAction;

    return action.indexOf('click') !== -1 || hideAction.indexOf('click') !== -1;
  },
  isMouseEnterToShow: function isMouseEnterToShow() {
    var _props3 = this.props,
        action = _props3.action,
        showAction = _props3.showAction;

    return action.indexOf('hover') !== -1 || showAction.indexOf('mouseEnter') !== -1;
  },
  isMouseLeaveToHide: function isMouseLeaveToHide() {
    var _props4 = this.props,
        action = _props4.action,
        hideAction = _props4.hideAction;

    return action.indexOf('hover') !== -1 || hideAction.indexOf('mouseLeave') !== -1;
  },
  isFocusToShow: function isFocusToShow() {
    var _props5 = this.props,
        action = _props5.action,
        showAction = _props5.showAction;

    return action.indexOf('focus') !== -1 || showAction.indexOf('focus') !== -1;
  },
  isBlurToHide: function isBlurToHide() {
    var _props6 = this.props,
        action = _props6.action,
        hideAction = _props6.hideAction;

    return action.indexOf('focus') !== -1 || hideAction.indexOf('blur') !== -1;
  },
  forcePopupAlign: function forcePopupAlign() {
    if (this.state.popupVisible && this._component && this._component.alignInstance) {
      this._component.alignInstance.forceAlign();
    }
  },
  fireEvents: function fireEvents(type, e) {
    var childCallback = this.props.children.props[type];
    if (childCallback) {
      childCallback(e);
    }
    var callback = this.props[type];
    if (callback) {
      callback(e);
    }
  },
  close: function close() {
    this.setPopupVisible(false);
  },
  render: function render() {
    var props = this.props;
    var children = props.children;
    var child = _react2.default.Children.only(children);
    var newChildProps = {};
    if (this.isClickToHide() || this.isClickToShow()) {
      newChildProps.onClick = this.onClick;
      newChildProps.onMouseDown = this.onMouseDown;
      newChildProps.onTouchStart = this.onTouchStart;
    } else {
      newChildProps.onClick = this.createTwoChains('onClick');
      newChildProps.onMouseDown = this.createTwoChains('onMouseDown');
      newChildProps.onTouchStart = this.createTwoChains('onTouchStart');
    }
    if (this.isMouseEnterToShow()) {
      newChildProps.onMouseEnter = this.onMouseEnter;
    } else {
      newChildProps.onMouseEnter = this.createTwoChains('onMouseEnter');
    }
    if (this.isMouseLeaveToHide()) {
      newChildProps.onMouseLeave = this.onMouseLeave;
    } else {
      newChildProps.onMouseLeave = this.createTwoChains('onMouseLeave');
    }
    if (this.isFocusToShow() || this.isBlurToHide()) {
      newChildProps.onFocus = this.onFocus;
      newChildProps.onBlur = this.onBlur;
    } else {
      newChildProps.onFocus = this.createTwoChains('onFocus');
      newChildProps.onBlur = this.createTwoChains('onBlur');
    }

    return _react2.default.cloneElement(child, newChildProps);
  }
});

exports.default = Trigger;

/***/ }),

/***/ 2468:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = addEventListenerWrap;

var _addDomEventListener = __webpack_require__(1507);

var _addDomEventListener2 = _interopRequireDefault(_addDomEventListener);

var _reactDom = __webpack_require__(396);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function addEventListenerWrap(target, eventType, cb) {
  /* eslint camelcase: 2 */
  var callback = _reactDom2['default'].unstable_batchedUpdates ? function run(e) {
    _reactDom2['default'].unstable_batchedUpdates(cb, e);
  } : cb;
  return (0, _addDomEventListener2['default'])(target, eventType, callback);
}
module.exports = exports['default'];

/***/ }),

/***/ 2469:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(1439);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(1462);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1463);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(1464);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1498);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(387);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(729);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(396);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcAlign = __webpack_require__(1559);

var _rcAlign2 = _interopRequireDefault(_rcAlign);

var _rcAnimate = __webpack_require__(1535);

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _PopupInner = __webpack_require__(2470);

var _PopupInner2 = _interopRequireDefault(_PopupInner);

var _LazyRenderBox = __webpack_require__(2471);

var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);

var _utils = __webpack_require__(2472);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Popup = function (_Component) {
  (0, _inherits3.default)(Popup, _Component);

  function Popup(props) {
    (0, _classCallCheck3.default)(this, Popup);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Popup.__proto__ || Object.getPrototypeOf(Popup)).call(this, props));

    _initialiseProps.call(_this);

    _this.savePopupRef = _utils.saveRef.bind(_this, 'popupInstance');
    _this.saveAlignRef = _utils.saveRef.bind(_this, 'alignInstance');
    return _this;
  }

  (0, _createClass3.default)(Popup, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.rootNode = this.getPopupDomNode();
    }
  }, {
    key: 'getPopupDomNode',
    value: function getPopupDomNode() {
      return _reactDom2.default.findDOMNode(this.popupInstance);
    }
  }, {
    key: 'getMaskTransitionName',
    value: function getMaskTransitionName() {
      var props = this.props;
      var transitionName = props.maskTransitionName;
      var animation = props.maskAnimation;
      if (!transitionName && animation) {
        transitionName = props.prefixCls + '-' + animation;
      }
      return transitionName;
    }
  }, {
    key: 'getTransitionName',
    value: function getTransitionName() {
      var props = this.props;
      var transitionName = props.transitionName;
      if (!transitionName && props.animation) {
        transitionName = props.prefixCls + '-' + props.animation;
      }
      return transitionName;
    }
  }, {
    key: 'getClassName',
    value: function getClassName(currentAlignClassName) {
      return this.props.prefixCls + ' ' + this.props.className + ' ' + currentAlignClassName;
    }
  }, {
    key: 'getPopupElement',
    value: function getPopupElement() {
      var savePopupRef = this.savePopupRef,
          props = this.props;
      var align = props.align,
          style = props.style,
          visible = props.visible,
          prefixCls = props.prefixCls,
          destroyPopupOnHide = props.destroyPopupOnHide;

      var className = this.getClassName(this.currentAlignClassName || props.getClassNameFromAlign(align));
      var hiddenClassName = prefixCls + '-hidden';
      if (!visible) {
        this.currentAlignClassName = null;
      }
      var newStyle = (0, _extends3.default)({}, style, this.getZIndexStyle());
      var popupInnerProps = {
        className: className,
        prefixCls: prefixCls,
        ref: savePopupRef,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        style: newStyle
      };
      if (destroyPopupOnHide) {
        return _react2.default.createElement(_rcAnimate2.default, {
          component: '',
          exclusive: true,
          transitionAppear: true,
          transitionName: this.getTransitionName()
        }, visible ? _react2.default.createElement(_rcAlign2.default, {
          target: this.getTarget,
          key: 'popup',
          ref: this.saveAlignRef,
          monitorWindowResize: true,
          align: align,
          onAlign: this.onAlign
        }, _react2.default.createElement(_PopupInner2.default, (0, _extends3.default)({
          visible: true
        }, popupInnerProps), props.children)) : null);
      }
      return _react2.default.createElement(_rcAnimate2.default, {
        component: '',
        exclusive: true,
        transitionAppear: true,
        transitionName: this.getTransitionName(),
        showProp: 'xVisible'
      }, _react2.default.createElement(_rcAlign2.default, {
        target: this.getTarget,
        key: 'popup',
        ref: this.saveAlignRef,
        monitorWindowResize: true,
        xVisible: visible,
        childrenProps: { visible: 'xVisible' },
        disabled: !visible,
        align: align,
        onAlign: this.onAlign
      }, _react2.default.createElement(_PopupInner2.default, (0, _extends3.default)({
        hiddenClassName: hiddenClassName
      }, popupInnerProps), props.children)));
    }
  }, {
    key: 'getZIndexStyle',
    value: function getZIndexStyle() {
      var style = {};
      var props = this.props;
      if (props.zIndex !== undefined) {
        style.zIndex = props.zIndex;
      }
      return style;
    }
  }, {
    key: 'getMaskElement',
    value: function getMaskElement() {
      var props = this.props;
      var maskElement = void 0;
      if (props.mask) {
        var maskTransition = this.getMaskTransitionName();
        maskElement = _react2.default.createElement(_LazyRenderBox2.default, {
          style: this.getZIndexStyle(),
          key: 'mask',
          className: props.prefixCls + '-mask',
          hiddenClassName: props.prefixCls + '-mask-hidden',
          visible: props.visible
        });
        if (maskTransition) {
          maskElement = _react2.default.createElement(_rcAnimate2.default, {
            key: 'mask',
            showProp: 'visible',
            transitionAppear: true,
            component: '',
            transitionName: maskTransition
          }, maskElement);
        }
      }
      return maskElement;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, this.getMaskElement(), this.getPopupElement());
    }
  }]);

  return Popup;
}(_react.Component);

Popup.propTypes = {
  visible: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  getClassNameFromAlign: _propTypes2.default.func,
  onAlign: _propTypes2.default.func,
  getRootDomNode: _propTypes2.default.func,
  onMouseEnter: _propTypes2.default.func,
  align: _propTypes2.default.any,
  destroyPopupOnHide: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  prefixCls: _propTypes2.default.string,
  onMouseLeave: _propTypes2.default.func
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.onAlign = function (popupDomNode, align) {
    var props = _this2.props;
    var currentAlignClassName = props.getClassNameFromAlign(align);
    // FIX: https://github.com/react-component/trigger/issues/56
    // FIX: https://github.com/react-component/tooltip/issues/79
    if (_this2.currentAlignClassName !== currentAlignClassName) {
      _this2.currentAlignClassName = currentAlignClassName;
      popupDomNode.className = _this2.getClassName(currentAlignClassName);
    }
    props.onAlign(popupDomNode, align);
  };

  this.getTarget = function () {
    return _this2.props.getRootDomNode();
  };
};

exports.default = Popup;

/***/ }),

/***/ 2470:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(1462);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1463);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(1464);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1498);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(387);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(729);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LazyRenderBox = __webpack_require__(2471);

var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PopupInner = function (_Component) {
  (0, _inherits3.default)(PopupInner, _Component);

  function PopupInner() {
    (0, _classCallCheck3.default)(this, PopupInner);

    return (0, _possibleConstructorReturn3.default)(this, (PopupInner.__proto__ || Object.getPrototypeOf(PopupInner)).apply(this, arguments));
  }

  (0, _createClass3.default)(PopupInner, [{
    key: 'render',
    value: function render() {
      var props = this.props;
      var className = props.className;
      if (!props.visible) {
        className += ' ' + props.hiddenClassName;
      }
      return _react2.default.createElement('div', {
        className: className,
        onMouseEnter: props.onMouseEnter,
        onMouseLeave: props.onMouseLeave,
        style: props.style
      }, _react2.default.createElement(_LazyRenderBox2.default, { className: props.prefixCls + '-content', visible: props.visible }, props.children));
    }
  }]);

  return PopupInner;
}(_react.Component);

PopupInner.propTypes = {
  hiddenClassName: _propTypes2.default.string,
  className: _propTypes2.default.string,
  prefixCls: _propTypes2.default.string,
  onMouseEnter: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  children: _propTypes2.default.any
};

exports.default = PopupInner;

/***/ }),

/***/ 2471:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = __webpack_require__(1545);

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = __webpack_require__(1462);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1463);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(1464);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(1498);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(387);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(729);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LazyRenderBox = function (_Component) {
  (0, _inherits3.default)(LazyRenderBox, _Component);

  function LazyRenderBox() {
    (0, _classCallCheck3.default)(this, LazyRenderBox);

    return (0, _possibleConstructorReturn3.default)(this, (LazyRenderBox.__proto__ || Object.getPrototypeOf(LazyRenderBox)).apply(this, arguments));
  }

  (0, _createClass3.default)(LazyRenderBox, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.hiddenClassName || nextProps.visible;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          hiddenClassName = _props.hiddenClassName,
          visible = _props.visible,
          props = (0, _objectWithoutProperties3.default)(_props, ['hiddenClassName', 'visible']);

      if (hiddenClassName || _react2.default.Children.count(props.children) > 1) {
        if (!visible && hiddenClassName) {
          props.className += ' ' + hiddenClassName;
        }
        return _react2.default.createElement('div', props);
      }

      return _react2.default.Children.only(props.children);
    }
  }]);

  return LazyRenderBox;
}(_react.Component);

LazyRenderBox.propTypes = {
  children: _propTypes2.default.any,
  className: _propTypes2.default.string,
  visible: _propTypes2.default.bool,
  hiddenClassName: _propTypes2.default.string
};

exports.default = LazyRenderBox;

/***/ }),

/***/ 2472:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlignFromPlacement = getAlignFromPlacement;
exports.getPopupClassNameFromAlign = getPopupClassNameFromAlign;
exports.saveRef = saveRef;

var _extends2 = __webpack_require__(1439);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isPointsEq(a1, a2) {
  return a1[0] === a2[0] && a1[1] === a2[1];
}

function getAlignFromPlacement(builtinPlacements, placementStr, align) {
  var baseAlign = builtinPlacements[placementStr] || {};
  return (0, _extends3.default)({}, baseAlign, align);
}

function getPopupClassNameFromAlign(builtinPlacements, prefixCls, align) {
  var points = align.points;
  for (var placement in builtinPlacements) {
    if (builtinPlacements.hasOwnProperty(placement)) {
      if (isPointsEq(builtinPlacements[placement].points, points)) {
        return prefixCls + '-placement-' + placement;
      }
    }
  }
  return '';
}

function saveRef(name, component) {
  this[name] = component;
}

/***/ }),

/***/ 2473:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(1439);

var _extends3 = _interopRequireDefault(_extends2);

exports['default'] = getContainerRenderMixin;

var _reactDom = __webpack_require__(396);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function defaultGetContainer() {
  var container = document.createElement('div');
  document.body.appendChild(container);
  return container;
}

function getContainerRenderMixin(config) {
  var _config$autoMount = config.autoMount,
      autoMount = _config$autoMount === undefined ? true : _config$autoMount,
      _config$autoDestroy = config.autoDestroy,
      autoDestroy = _config$autoDestroy === undefined ? true : _config$autoDestroy,
      isVisible = config.isVisible,
      isForceRender = config.isForceRender,
      getComponent = config.getComponent,
      _config$getContainer = config.getContainer,
      getContainer = _config$getContainer === undefined ? defaultGetContainer : _config$getContainer;


  var mixin = void 0;

  function _renderComponent(instance, componentArg, ready) {
    if (!isVisible || instance._component || isVisible(instance) || isForceRender && isForceRender(instance)) {
      if (!instance._container) {
        instance._container = getContainer(instance);
      }
      var component = void 0;
      if (instance.getComponent) {
        component = instance.getComponent(componentArg);
      } else {
        component = getComponent(instance, componentArg);
      }
      _reactDom2['default'].unstable_renderSubtreeIntoContainer(instance, component, instance._container, function callback() {
        instance._component = this;
        if (ready) {
          ready.call(this);
        }
      });
    }
  }

  if (autoMount) {
    mixin = (0, _extends3['default'])({}, mixin, {
      componentDidMount: function componentDidMount() {
        _renderComponent(this);
      },
      componentDidUpdate: function componentDidUpdate() {
        _renderComponent(this);
      }
    });
  }

  if (!autoMount || !autoDestroy) {
    mixin = (0, _extends3['default'])({}, mixin, {
      renderComponent: function renderComponent(componentArg, ready) {
        _renderComponent(this, componentArg, ready);
      }
    });
  }

  function _removeContainer(instance) {
    if (instance._container) {
      var container = instance._container;
      _reactDom2['default'].unmountComponentAtNode(container);
      container.parentNode.removeChild(container);
      instance._container = null;
    }
  }

  if (autoDestroy) {
    mixin = (0, _extends3['default'])({}, mixin, {
      componentWillUnmount: function componentWillUnmount() {
        _removeContainer(this);
      }
    });
  } else {
    mixin = (0, _extends3['default'])({}, mixin, {
      removeContainer: function removeContainer() {
        _removeContainer(this);
      }
    });
  }

  return mixin;
}
module.exports = exports['default'];

/***/ }),

/***/ 2474:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(387);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(729);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = __webpack_require__(2475);

var _Header2 = _interopRequireDefault(_Header);

var _Combobox = __webpack_require__(2476);

var _Combobox2 = _interopRequireDefault(_Combobox);

var _moment = __webpack_require__(1346);

var _moment2 = _interopRequireDefault(_moment);

var _createReactClass = __webpack_require__(774);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function noop() {}

function generateOptions(length, disabledOptions, hideDisabledOptions) {
  var arr = [];
  for (var value = 0; value < length; value++) {
    if (!disabledOptions || disabledOptions.indexOf(value) < 0 || !hideDisabledOptions) {
      arr.push(value);
    }
  }
  return arr;
}

var Panel = (0, _createReactClass2.default)({
  displayName: 'Panel',

  propTypes: {
    clearText: _propTypes2.default.string,
    prefixCls: _propTypes2.default.string,
    defaultOpenValue: _propTypes2.default.object,
    value: _propTypes2.default.object,
    placeholder: _propTypes2.default.string,
    format: _propTypes2.default.string,
    disabledHours: _propTypes2.default.func,
    disabledMinutes: _propTypes2.default.func,
    disabledSeconds: _propTypes2.default.func,
    hideDisabledOptions: _propTypes2.default.bool,
    onChange: _propTypes2.default.func,
    onEsc: _propTypes2.default.func,
    allowEmpty: _propTypes2.default.bool,
    showHour: _propTypes2.default.bool,
    showSecond: _propTypes2.default.bool,
    onClear: _propTypes2.default.func,
    showAMPM: _propTypes2.default.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'rc-time-picker-panel',
      onChange: noop,
      onClear: noop,
      defaultOpenValue: (0, _moment2.default)()
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.value,
      selectionRange: []
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var value = nextProps.value;
    if (value) {
      this.setState({
        value: value
      });
    }
  },
  onChange: function onChange(newValue) {
    this.setState({ value: newValue });
    this.props.onChange(newValue);
  },
  onClear: function onClear() {
    this.props.onClear();
  },
  onCurrentSelectPanelChange: function onCurrentSelectPanelChange(currentSelectPanel) {
    this.setState({ currentSelectPanel: currentSelectPanel });
  },
  render: function render() {
    var _props = this.props,
        formatter = _props.formatter,
        prefixCls = _props.prefixCls,
        className = _props.className,
        placeholder = _props.placeholder,
        disabledHours = _props.disabledHours,
        disabledMinutes = _props.disabledMinutes,
        disabledSeconds = _props.disabledSeconds,
        hideDisabledOptions = _props.hideDisabledOptions,
        allowEmpty = _props.allowEmpty,
        showHour = _props.showHour,
        showSecond = _props.showSecond,
        showAMPM = _props.showAMPM,
        format = _props.format,
        defaultOpenValue = _props.defaultOpenValue,
        clearText = _props.clearText,
        onEsc = _props.onEsc;
    var _state = this.state,
        value = _state.value,
        currentSelectPanel = _state.currentSelectPanel;

    var disabledHourOptions = disabledHours();
    var disabledMinuteOptions = disabledMinutes(value ? value.hour() : null);
    var disabledSecondOptions = disabledSeconds(value ? value.hour() : null, value ? value.minute() : null);
    var hourOptions = generateOptions(24, disabledHourOptions, hideDisabledOptions);
    var minuteOptions = generateOptions(60, disabledMinuteOptions, hideDisabledOptions);
    var secondOptions = generateOptions(60, disabledSecondOptions, hideDisabledOptions);

    return _react2.default.createElement(
      'div',
      { className: prefixCls + '-inner ' + className },
      _react2.default.createElement(_Header2.default, {
        clearText: clearText,
        prefixCls: prefixCls,
        defaultOpenValue: defaultOpenValue,
        value: value,
        currentSelectPanel: currentSelectPanel,
        onEsc: onEsc,
        format: format,
        placeholder: placeholder,
        hourOptions: hourOptions,
        minuteOptions: minuteOptions,
        secondOptions: secondOptions,
        disabledHours: disabledHours,
        disabledMinutes: disabledMinutes,
        disabledSeconds: disabledSeconds,
        onChange: this.onChange,
        onClear: this.onClear,
        allowEmpty: allowEmpty
      }),
      _react2.default.createElement(_Combobox2.default, {
        formatter: formatter,
        prefixCls: prefixCls,
        value: value,
        defaultOpenValue: defaultOpenValue,
        format: format,
        onChange: this.onChange,
        showAMPM: showAMPM,
        showHour: showHour,
        showSecond: showSecond,
        hourOptions: hourOptions,
        minuteOptions: minuteOptions,
        secondOptions: secondOptions,
        disabledHours: disabledHours,
        disabledMinutes: disabledMinutes,
        disabledSeconds: disabledSeconds,
        onCurrentSelectPanelChange: this.onCurrentSelectPanelChange
      })
    );
  }
});

exports.default = Panel;

/***/ }),

/***/ 2475:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(387);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(729);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = __webpack_require__(1346);

var _moment2 = _interopRequireDefault(_moment);

var _createReactClass = __webpack_require__(774);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = (0, _createReactClass2.default)({
  displayName: 'Header',

  propTypes: {
    format: _propTypes2.default.string,
    prefixCls: _propTypes2.default.string,
    disabledDate: _propTypes2.default.func,
    placeholder: _propTypes2.default.string,
    clearText: _propTypes2.default.string,
    value: _propTypes2.default.object,
    hourOptions: _propTypes2.default.array,
    minuteOptions: _propTypes2.default.array,
    secondOptions: _propTypes2.default.array,
    disabledHours: _propTypes2.default.func,
    disabledMinutes: _propTypes2.default.func,
    disabledSeconds: _propTypes2.default.func,
    onChange: _propTypes2.default.func,
    onClear: _propTypes2.default.func,
    onEsc: _propTypes2.default.func,
    allowEmpty: _propTypes2.default.bool,
    defaultOpenValue: _propTypes2.default.object,
    currentSelectPanel: _propTypes2.default.string
  },

  getInitialState: function getInitialState() {
    var _props = this.props,
        value = _props.value,
        format = _props.format;

    return {
      str: value && value.format(format) || '',
      invalid: false
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var value = nextProps.value,
        format = nextProps.format;

    this.setState({
      str: value && value.format(format) || '',
      invalid: false
    });
  },
  onInputChange: function onInputChange(event) {
    var str = event.target.value;
    this.setState({
      str: str
    });
    var _props2 = this.props,
        format = _props2.format,
        hourOptions = _props2.hourOptions,
        minuteOptions = _props2.minuteOptions,
        secondOptions = _props2.secondOptions,
        disabledHours = _props2.disabledHours,
        disabledMinutes = _props2.disabledMinutes,
        disabledSeconds = _props2.disabledSeconds,
        onChange = _props2.onChange,
        allowEmpty = _props2.allowEmpty;


    if (str) {
      var originalValue = this.props.value;
      var value = this.getProtoValue().clone();
      var parsed = (0, _moment2.default)(str, format, true);
      if (!parsed.isValid()) {
        this.setState({
          invalid: true
        });
        return;
      }
      value.hour(parsed.hour()).minute(parsed.minute()).second(parsed.second());

      // if time value not allowed, response warning.
      if (hourOptions.indexOf(value.hour()) < 0 || minuteOptions.indexOf(value.minute()) < 0 || secondOptions.indexOf(value.second()) < 0) {
        this.setState({
          invalid: true
        });
        return;
      }

      // if time value is disabled, response warning.
      var disabledHourOptions = disabledHours();
      var disabledMinuteOptions = disabledMinutes(value.hour());
      var disabledSecondOptions = disabledSeconds(value.hour(), value.minute());
      if (disabledHourOptions && disabledHourOptions.indexOf(value.hour()) >= 0 || disabledMinuteOptions && disabledMinuteOptions.indexOf(value.minute()) >= 0 || disabledSecondOptions && disabledSecondOptions.indexOf(value.second()) >= 0) {
        this.setState({
          invalid: true
        });
        return;
      }

      if (originalValue) {
        if (originalValue.hour() !== value.hour() || originalValue.minute() !== value.minute() || originalValue.second() !== value.second()) {
          // keep other fields for rc-calendar
          var changedValue = originalValue.clone();
          changedValue.hour(value.hour());
          changedValue.minute(value.minute());
          changedValue.second(value.second());
          onChange(changedValue);
        }
      } else if (originalValue !== value) {
        onChange(value);
      }
    } else if (allowEmpty) {
      onChange(null);
    } else {
      this.setState({
        invalid: true
      });
      return;
    }

    this.setState({
      invalid: false
    });
  },
  onKeyDown: function onKeyDown(e) {
    if (e.keyCode === 27) {
      this.props.onEsc();
    }
  },
  onClear: function onClear() {
    this.setState({ str: '' });
    this.props.onClear();
  },
  getClearButton: function getClearButton() {
    var _props3 = this.props,
        prefixCls = _props3.prefixCls,
        allowEmpty = _props3.allowEmpty;

    if (!allowEmpty) {
      return null;
    }
    return _react2.default.createElement('a', {
      className: prefixCls + '-clear-btn',
      role: 'button',
      title: this.props.clearText,
      onMouseDown: this.onClear
    });
  },
  getProtoValue: function getProtoValue() {
    return this.props.value || this.props.defaultOpenValue;
  },
  getInput: function getInput() {
    var _props4 = this.props,
        prefixCls = _props4.prefixCls,
        placeholder = _props4.placeholder;
    var _state = this.state,
        invalid = _state.invalid,
        str = _state.str;

    var invalidClass = invalid ? prefixCls + '-input-invalid' : '';
    return _react2.default.createElement('input', {
      className: prefixCls + '-input  ' + invalidClass,
      ref: 'input',
      onKeyDown: this.onKeyDown,
      value: str,
      placeholder: placeholder,
      onChange: this.onInputChange
    });
  },
  render: function render() {
    var prefixCls = this.props.prefixCls;

    return _react2.default.createElement(
      'div',
      { className: prefixCls + '-input-wrap' },
      this.getInput(),
      this.getClearButton()
    );
  }
});

exports.default = Header;

/***/ }),

/***/ 2476:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(387);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(729);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Select = __webpack_require__(2477);

var _Select2 = _interopRequireDefault(_Select);

var _createReactClass = __webpack_require__(774);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pad = function pad(value) {
  return value < 10 ? '0' + value : '' + value;
};

var formatOption = function formatOption(option, disabledOptions) {
  var value = pad(option);

  var disabled = false;
  if (disabledOptions && disabledOptions.indexOf(option) >= 0) {
    disabled = true;
  }

  return {
    value: value,
    disabled: disabled
  };
};

var Combobox = (0, _createReactClass2.default)({
  displayName: 'Combobox',

  propTypes: {
    format: _propTypes2.default.string,
    defaultOpenValue: _propTypes2.default.object,
    prefixCls: _propTypes2.default.string,
    value: _propTypes2.default.object,
    onChange: _propTypes2.default.func,
    showHour: _propTypes2.default.bool,
    showSecond: _propTypes2.default.bool,
    hourOptions: _propTypes2.default.array,
    minuteOptions: _propTypes2.default.array,
    secondOptions: _propTypes2.default.array,
    disabledHours: _propTypes2.default.func,
    disabledMinutes: _propTypes2.default.func,
    disabledSeconds: _propTypes2.default.func,
    onCurrentSelectPanelChange: _propTypes2.default.func
  },

  onItemChange: function onItemChange(type, itemValue) {
    var _props = this.props,
        onChange = _props.onChange,
        defaultOpenValue = _props.defaultOpenValue;

    var value = (this.props.value || defaultOpenValue).clone();

    if (type === 'hour') {
      value.hour(itemValue);
    } else if (type === 'minute') {
      value.minute(itemValue);
    } else if (type === 'second') {
      value.second(itemValue);
    } else {
      var actualPeriod = value.format('A');

      if (actualPeriod !== itemValue) {
        var hour24style = value.hour();
        var hour12style = hour24style < 12 ? hour24style : hour24style - 12;

        if (itemValue === 'PM') {
          value.hour(hour12style + 12);
        } else {
          value.hour(hour12style);
        }
      }
    }

    onChange(value);
  },
  onEnterSelectPanel: function onEnterSelectPanel(range) {
    this.props.onCurrentSelectPanelChange(range);
  },
  getHourSelect: function getHourSelect(hour) {
    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        showAMPM = _props2.showAMPM,
        disabledHours = _props2.disabledHours,
        showHour = _props2.showHour;

    if (!showHour) {
      return null;
    }

    var disabledOptions = disabledHours();
    var hourOptions = this.props.hourOptions;
    var formattedOptions = hourOptions.map(function (option) {
      return formatOption(option, disabledOptions);
    });

    if (showAMPM) {
      hourOptions = hourOptions.filter(function (value) {
        return hour < 12 ? value < 12 : value >= 12;
      });
      formattedOptions = formattedOptions.map(function (option) {
        return _extends({}, option, {
          label: option.value <= 12 ? option.value : pad(option.value - 12)
        });
      }).filter(function (_ref) {
        var value = _ref.value;
        return hour < 12 ? Number(value) < 12 : Number(value) >= 12;
      });
    }

    return _react2.default.createElement(_Select2.default, {
      prefixCls: prefixCls,
      options: formattedOptions,
      selectedIndex: hourOptions.indexOf(hour),
      type: 'hour',
      onSelect: this.onItemChange,
      onMouseEnter: this.onEnterSelectPanel.bind(this, 'hour')
    });
  },
  getMinuteSelect: function getMinuteSelect(minute) {
    var _props3 = this.props,
        prefixCls = _props3.prefixCls,
        minuteOptions = _props3.minuteOptions,
        disabledMinutes = _props3.disabledMinutes,
        defaultOpenValue = _props3.defaultOpenValue;

    var value = this.props.value || defaultOpenValue;
    var disabledOptions = disabledMinutes(value.hour());

    return _react2.default.createElement(_Select2.default, {
      prefixCls: prefixCls,
      options: minuteOptions.map(function (option) {
        return formatOption(option, disabledOptions);
      }),
      selectedIndex: minuteOptions.indexOf(minute),
      type: 'minute',
      onSelect: this.onItemChange,
      onMouseEnter: this.onEnterSelectPanel.bind(this, 'minute')
    });
  },
  getSecondSelect: function getSecondSelect(second) {
    var _props4 = this.props,
        prefixCls = _props4.prefixCls,
        secondOptions = _props4.secondOptions,
        disabledSeconds = _props4.disabledSeconds,
        showSecond = _props4.showSecond,
        defaultOpenValue = _props4.defaultOpenValue;

    if (!showSecond) {
      return null;
    }
    var value = this.props.value || defaultOpenValue;
    var disabledOptions = disabledSeconds(value.hour(), value.minute());

    return _react2.default.createElement(_Select2.default, {
      prefixCls: prefixCls,
      options: secondOptions.map(function (option) {
        return formatOption(option, disabledOptions);
      }),
      selectedIndex: secondOptions.indexOf(second),
      type: 'second',
      onSelect: this.onItemChange,
      onMouseEnter: this.onEnterSelectPanel.bind(this, 'second')
    });
  },
  getAMPMSelect: function getAMPMSelect(period) {
    var _props5 = this.props,
        prefixCls = _props5.prefixCls,
        showAMPM = _props5.showAMPM,
        defaultOpenValue = _props5.defaultOpenValue;


    if (!showAMPM) {
      return null;
    }

    var options = [{ value: 'AM', label: 'AM' }, { value: 'PM', label: 'PM' }];

    return _react2.default.createElement(_Select2.default, {
      prefixCls: prefixCls,
      options: options,
      selectedIndex: period === 'AM' ? 0 : 1,
      type: 'period',
      onSelect: this.onItemChange,
      onMouseEnter: this.onEnterSelectPanel.bind(this, 'period')
    });
  },
  render: function render() {
    var _props6 = this.props,
        prefixCls = _props6.prefixCls,
        defaultOpenValue = _props6.defaultOpenValue;

    var value = this.props.value || defaultOpenValue;
    return _react2.default.createElement(
      'div',
      { className: prefixCls + '-combobox' },
      this.getHourSelect(value.hour()),
      this.getMinuteSelect(value.minute()),
      this.getSecondSelect(value.second()),
      this.getAMPMSelect(value.hour() < 12 ? 'AM' : 'PM')
    );
  }
});

exports.default = Combobox;

/***/ }),

/***/ 2477:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(387);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(729);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(396);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames2 = __webpack_require__(854);

var _classnames3 = _interopRequireDefault(_classnames2);

var _createReactClass = __webpack_require__(774);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var scrollTo = function scrollTo(element, to, duration) {
  var requestAnimationFrame = window.requestAnimationFrame || function requestAnimationFrameTimeout() {
    return setTimeout(arguments[0], 10);
  };
  // jump to target if duration zero
  if (duration <= 0) {
    element.scrollTop = to;
    return;
  }
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  requestAnimationFrame(function () {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  });
};

var Select = (0, _createReactClass2.default)({
  displayName: 'Select',

  propTypes: {
    prefixCls: _propTypes2.default.string,
    options: _propTypes2.default.array,
    selectedIndex: _propTypes2.default.number,
    type: _propTypes2.default.string,
    onSelect: _propTypes2.default.func,
    onMouseEnter: _propTypes2.default.func
  },

  componentDidMount: function componentDidMount() {
    // jump to selected option
    this.scrollToSelected(0);
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    // smooth scroll to selected option
    if (prevProps.selectedIndex !== this.props.selectedIndex) {
      this.scrollToSelected(120);
    }
  },
  onSelect: function onSelect(value) {
    var _props = this.props,
        onSelect = _props.onSelect,
        type = _props.type;

    onSelect(type, value);
  },
  getOptions: function getOptions() {
    var _this = this;

    var _props2 = this.props,
        options = _props2.options,
        selectedIndex = _props2.selectedIndex,
        prefixCls = _props2.prefixCls;

    return options.map(function (item, index) {
      var _classnames;

      var cls = (0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, prefixCls + '-select-option-selected', selectedIndex === index), _defineProperty(_classnames, prefixCls + '-select-option-disabled', item.disabled), _classnames));
      var onclick = null;
      if (!item.disabled) {
        var value = +item.value;
        if (Number.isNaN(value)) {
          value = item.value;
        }
        onclick = _this.onSelect.bind(_this, value);
      }

      return _react2.default.createElement(
        'li',
        {
          className: cls,
          key: index,
          onClick: onclick,
          disabled: item.disabled
        },
        typeof item.label !== 'undefined' ? item.label : item.value
      );
    });
  },
  scrollToSelected: function scrollToSelected(duration) {
    // move to selected item
    var select = _reactDom2.default.findDOMNode(this);
    var list = _reactDom2.default.findDOMNode(this.refs.list);
    var index = this.props.selectedIndex;
    if (index < 0) {
      index = 0;
    }
    var topOption = list.children[index];
    var to = topOption.offsetTop;
    scrollTo(select, to, duration);
  },
  render: function render() {
    if (this.props.options.length === 0) {
      return null;
    }

    var prefixCls = this.props.prefixCls;


    return _react2.default.createElement(
      'div',
      {
        className: prefixCls + '-select',
        onMouseEnter: this.props.onMouseEnter
      },
      _react2.default.createElement(
        'ul',
        { ref: 'list' },
        this.getOptions()
      )
    );
  }
});

exports.default = Select;

/***/ }),

/***/ 2478:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};

var targetOffset = [0, 0];

var placements = {
  bottomLeft: {
    points: ['tl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -3],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -3],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 3],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 3],
    targetOffset: targetOffset
  }
};

exports.default = placements;

/***/ }),

/***/ 2484:
/***/ (function(module, exports, __webpack_require__) {

var moment = module.exports = __webpack_require__(2485);
moment.tz.load(__webpack_require__(2486));


/***/ }),

/***/ 2485:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//! moment-timezone.js
//! version : 0.5.21
//! Copyright (c) JS Foundation and other contributors
//! license : MIT
//! github.com/moment/moment-timezone

(function (root, factory) {
	"use strict";

	/*global define*/
	if (typeof module === 'object' && module.exports) {
		module.exports = factory(__webpack_require__(1346)); // Node
	} else if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(1346)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));                 // AMD
	} else {}
}(this, function (moment) {
	"use strict";

	// Do not load moment-timezone a second time.
	// if (moment.tz !== undefined) {
	// 	logError('Moment Timezone ' + moment.tz.version + ' was already loaded ' + (moment.tz.dataVersion ? 'with data from ' : 'without any data') + moment.tz.dataVersion);
	// 	return moment;
	// }

	var VERSION = "0.5.21",
		zones = {},
		links = {},
		names = {},
		guesses = {},
		cachedGuess;

	if (!moment || typeof moment.version !== 'string') {
		logError('Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/');
	}

	var momentVersion = moment.version.split('.'),
		major = +momentVersion[0],
		minor = +momentVersion[1];

	// Moment.js version check
	if (major < 2 || (major === 2 && minor < 6)) {
		logError('Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js ' + moment.version + '. See momentjs.com');
	}

	/************************************
		Unpacking
	************************************/

	function charCodeToInt(charCode) {
		if (charCode > 96) {
			return charCode - 87;
		} else if (charCode > 64) {
			return charCode - 29;
		}
		return charCode - 48;
	}

	function unpackBase60(string) {
		var i = 0,
			parts = string.split('.'),
			whole = parts[0],
			fractional = parts[1] || '',
			multiplier = 1,
			num,
			out = 0,
			sign = 1;

		// handle negative numbers
		if (string.charCodeAt(0) === 45) {
			i = 1;
			sign = -1;
		}

		// handle digits before the decimal
		for (i; i < whole.length; i++) {
			num = charCodeToInt(whole.charCodeAt(i));
			out = 60 * out + num;
		}

		// handle digits after the decimal
		for (i = 0; i < fractional.length; i++) {
			multiplier = multiplier / 60;
			num = charCodeToInt(fractional.charCodeAt(i));
			out += num * multiplier;
		}

		return out * sign;
	}

	function arrayToInt (array) {
		for (var i = 0; i < array.length; i++) {
			array[i] = unpackBase60(array[i]);
		}
	}

	function intToUntil (array, length) {
		for (var i = 0; i < length; i++) {
			array[i] = Math.round((array[i - 1] || 0) + (array[i] * 60000)); // minutes to milliseconds
		}

		array[length - 1] = Infinity;
	}

	function mapIndices (source, indices) {
		var out = [], i;

		for (i = 0; i < indices.length; i++) {
			out[i] = source[indices[i]];
		}

		return out;
	}

	function unpack (string) {
		var data = string.split('|'),
			offsets = data[2].split(' '),
			indices = data[3].split(''),
			untils  = data[4].split(' ');

		arrayToInt(offsets);
		arrayToInt(indices);
		arrayToInt(untils);

		intToUntil(untils, indices.length);

		return {
			name       : data[0],
			abbrs      : mapIndices(data[1].split(' '), indices),
			offsets    : mapIndices(offsets, indices),
			untils     : untils,
			population : data[5] | 0
		};
	}

	/************************************
		Zone object
	************************************/

	function Zone (packedString) {
		if (packedString) {
			this._set(unpack(packedString));
		}
	}

	Zone.prototype = {
		_set : function (unpacked) {
			this.name       = unpacked.name;
			this.abbrs      = unpacked.abbrs;
			this.untils     = unpacked.untils;
			this.offsets    = unpacked.offsets;
			this.population = unpacked.population;
		},

		_index : function (timestamp) {
			var target = +timestamp,
				untils = this.untils,
				i;

			for (i = 0; i < untils.length; i++) {
				if (target < untils[i]) {
					return i;
				}
			}
		},

		parse : function (timestamp) {
			var target  = +timestamp,
				offsets = this.offsets,
				untils  = this.untils,
				max     = untils.length - 1,
				offset, offsetNext, offsetPrev, i;

			for (i = 0; i < max; i++) {
				offset     = offsets[i];
				offsetNext = offsets[i + 1];
				offsetPrev = offsets[i ? i - 1 : i];

				if (offset < offsetNext && tz.moveAmbiguousForward) {
					offset = offsetNext;
				} else if (offset > offsetPrev && tz.moveInvalidForward) {
					offset = offsetPrev;
				}

				if (target < untils[i] - (offset * 60000)) {
					return offsets[i];
				}
			}

			return offsets[max];
		},

		abbr : function (mom) {
			return this.abbrs[this._index(mom)];
		},

		offset : function (mom) {
			logError("zone.offset has been deprecated in favor of zone.utcOffset");
			return this.offsets[this._index(mom)];
		},

		utcOffset : function (mom) {
			return this.offsets[this._index(mom)];
		}
	};

	/************************************
		Current Timezone
	************************************/

	function OffsetAt(at) {
		var timeString = at.toTimeString();
		var abbr = timeString.match(/\([a-z ]+\)/i);
		if (abbr && abbr[0]) {
			// 17:56:31 GMT-0600 (CST)
			// 17:56:31 GMT-0600 (Central Standard Time)
			abbr = abbr[0].match(/[A-Z]/g);
			abbr = abbr ? abbr.join('') : undefined;
		} else {
			// 17:56:31 CST
			// 17:56:31 GMT+0800 (台北標準時間)
			abbr = timeString.match(/[A-Z]{3,5}/g);
			abbr = abbr ? abbr[0] : undefined;
		}

		if (abbr === 'GMT') {
			abbr = undefined;
		}

		this.at = +at;
		this.abbr = abbr;
		this.offset = at.getTimezoneOffset();
	}

	function ZoneScore(zone) {
		this.zone = zone;
		this.offsetScore = 0;
		this.abbrScore = 0;
	}

	ZoneScore.prototype.scoreOffsetAt = function (offsetAt) {
		this.offsetScore += Math.abs(this.zone.utcOffset(offsetAt.at) - offsetAt.offset);
		if (this.zone.abbr(offsetAt.at).replace(/[^A-Z]/g, '') !== offsetAt.abbr) {
			this.abbrScore++;
		}
	};

	function findChange(low, high) {
		var mid, diff;

		while ((diff = ((high.at - low.at) / 12e4 | 0) * 6e4)) {
			mid = new OffsetAt(new Date(low.at + diff));
			if (mid.offset === low.offset) {
				low = mid;
			} else {
				high = mid;
			}
		}

		return low;
	}

	function userOffsets() {
		var startYear = new Date().getFullYear() - 2,
			last = new OffsetAt(new Date(startYear, 0, 1)),
			offsets = [last],
			change, next, i;

		for (i = 1; i < 48; i++) {
			next = new OffsetAt(new Date(startYear, i, 1));
			if (next.offset !== last.offset) {
				change = findChange(last, next);
				offsets.push(change);
				offsets.push(new OffsetAt(new Date(change.at + 6e4)));
			}
			last = next;
		}

		for (i = 0; i < 4; i++) {
			offsets.push(new OffsetAt(new Date(startYear + i, 0, 1)));
			offsets.push(new OffsetAt(new Date(startYear + i, 6, 1)));
		}

		return offsets;
	}

	function sortZoneScores (a, b) {
		if (a.offsetScore !== b.offsetScore) {
			return a.offsetScore - b.offsetScore;
		}
		if (a.abbrScore !== b.abbrScore) {
			return a.abbrScore - b.abbrScore;
		}
		return b.zone.population - a.zone.population;
	}

	function addToGuesses (name, offsets) {
		var i, offset;
		arrayToInt(offsets);
		for (i = 0; i < offsets.length; i++) {
			offset = offsets[i];
			guesses[offset] = guesses[offset] || {};
			guesses[offset][name] = true;
		}
	}

	function guessesForUserOffsets (offsets) {
		var offsetsLength = offsets.length,
			filteredGuesses = {},
			out = [],
			i, j, guessesOffset;

		for (i = 0; i < offsetsLength; i++) {
			guessesOffset = guesses[offsets[i].offset] || {};
			for (j in guessesOffset) {
				if (guessesOffset.hasOwnProperty(j)) {
					filteredGuesses[j] = true;
				}
			}
		}

		for (i in filteredGuesses) {
			if (filteredGuesses.hasOwnProperty(i)) {
				out.push(names[i]);
			}
		}

		return out;
	}

	function rebuildGuess () {

		// use Intl API when available and returning valid time zone
		try {
			var intlName = Intl.DateTimeFormat().resolvedOptions().timeZone;
			if (intlName && intlName.length > 3) {
				var name = names[normalizeName(intlName)];
				if (name) {
					return name;
				}
				logError("Moment Timezone found " + intlName + " from the Intl api, but did not have that data loaded.");
			}
		} catch (e) {
			// Intl unavailable, fall back to manual guessing.
		}

		var offsets = userOffsets(),
			offsetsLength = offsets.length,
			guesses = guessesForUserOffsets(offsets),
			zoneScores = [],
			zoneScore, i, j;

		for (i = 0; i < guesses.length; i++) {
			zoneScore = new ZoneScore(getZone(guesses[i]), offsetsLength);
			for (j = 0; j < offsetsLength; j++) {
				zoneScore.scoreOffsetAt(offsets[j]);
			}
			zoneScores.push(zoneScore);
		}

		zoneScores.sort(sortZoneScores);

		return zoneScores.length > 0 ? zoneScores[0].zone.name : undefined;
	}

	function guess (ignoreCache) {
		if (!cachedGuess || ignoreCache) {
			cachedGuess = rebuildGuess();
		}
		return cachedGuess;
	}

	/************************************
		Global Methods
	************************************/

	function normalizeName (name) {
		return (name || '').toLowerCase().replace(/\//g, '_');
	}

	function addZone (packed) {
		var i, name, split, normalized;

		if (typeof packed === "string") {
			packed = [packed];
		}

		for (i = 0; i < packed.length; i++) {
			split = packed[i].split('|');
			name = split[0];
			normalized = normalizeName(name);
			zones[normalized] = packed[i];
			names[normalized] = name;
			addToGuesses(normalized, split[2].split(' '));
		}
	}

	function getZone (name, caller) {
		
		name = normalizeName(name);

		var zone = zones[name];
		var link;

		if (zone instanceof Zone) {
			return zone;
		}

		if (typeof zone === 'string') {
			zone = new Zone(zone);
			zones[name] = zone;
			return zone;
		}

		// Pass getZone to prevent recursion more than 1 level deep
		if (links[name] && caller !== getZone && (link = getZone(links[name], getZone))) {
			zone = zones[name] = new Zone();
			zone._set(link);
			zone.name = names[name];
			return zone;
		}

		return null;
	}

	function getNames () {
		var i, out = [];

		for (i in names) {
			if (names.hasOwnProperty(i) && (zones[i] || zones[links[i]]) && names[i]) {
				out.push(names[i]);
			}
		}

		return out.sort();
	}

	function addLink (aliases) {
		var i, alias, normal0, normal1;

		if (typeof aliases === "string") {
			aliases = [aliases];
		}

		for (i = 0; i < aliases.length; i++) {
			alias = aliases[i].split('|');

			normal0 = normalizeName(alias[0]);
			normal1 = normalizeName(alias[1]);

			links[normal0] = normal1;
			names[normal0] = alias[0];

			links[normal1] = normal0;
			names[normal1] = alias[1];
		}
	}

	function loadData (data) {
		addZone(data.zones);
		addLink(data.links);
		tz.dataVersion = data.version;
	}

	function zoneExists (name) {
		if (!zoneExists.didShowError) {
			zoneExists.didShowError = true;
				logError("moment.tz.zoneExists('" + name + "') has been deprecated in favor of !moment.tz.zone('" + name + "')");
		}
		return !!getZone(name);
	}

	function needsOffset (m) {
		var isUnixTimestamp = (m._f === 'X' || m._f === 'x');
		return !!(m._a && (m._tzm === undefined) && !isUnixTimestamp);
	}

	function logError (message) {
		if (typeof console !== 'undefined' && typeof console.error === 'function') {
			console.error(message);
		}
	}

	/************************************
		moment.tz namespace
	************************************/

	function tz (input) {
		var args = Array.prototype.slice.call(arguments, 0, -1),
			name = arguments[arguments.length - 1],
			zone = getZone(name),
			out  = moment.utc.apply(null, args);

		if (zone && !moment.isMoment(input) && needsOffset(out)) {
			out.add(zone.parse(out), 'minutes');
		}

		out.tz(name);

		return out;
	}

	tz.version      = VERSION;
	tz.dataVersion  = '';
	tz._zones       = zones;
	tz._links       = links;
	tz._names       = names;
	tz.add          = addZone;
	tz.link         = addLink;
	tz.load         = loadData;
	tz.zone         = getZone;
	tz.zoneExists   = zoneExists; // deprecated in 0.1.0
	tz.guess        = guess;
	tz.names        = getNames;
	tz.Zone         = Zone;
	tz.unpack       = unpack;
	tz.unpackBase60 = unpackBase60;
	tz.needsOffset  = needsOffset;
	tz.moveInvalidForward   = true;
	tz.moveAmbiguousForward = false;

	/************************************
		Interface with Moment.js
	************************************/

	var fn = moment.fn;

	moment.tz = tz;

	moment.defaultZone = null;

	moment.updateOffset = function (mom, keepTime) {
		var zone = moment.defaultZone,
			offset;

		if (mom._z === undefined) {
			if (zone && needsOffset(mom) && !mom._isUTC) {
				mom._d = moment.utc(mom._a)._d;
				mom.utc().add(zone.parse(mom), 'minutes');
			}
			mom._z = zone;
		}
		if (mom._z) {
			offset = mom._z.utcOffset(mom);
			if (Math.abs(offset) < 16) {
				offset = offset / 60;
			}
			if (mom.utcOffset !== undefined) {
				mom.utcOffset(-offset, keepTime);
			} else {
				mom.zone(offset, keepTime);
			}
		}
	};

	fn.tz = function (name, keepTime) {
		if (name) {
			if (typeof name !== 'string') {
				throw new Error('Time zone name must be a string, got ' + name + ' [' + typeof name + ']');
			}
			this._z = getZone(name);
			if (this._z) {
				moment.updateOffset(this, keepTime);
			} else {
				logError("Moment Timezone has no data for " + name + ". See http://momentjs.com/timezone/docs/#/data-loading/.");
			}
			return this;
		}
		if (this._z) { return this._z.name; }
	};

	function abbrWrap (old) {
		return function () {
			if (this._z) { return this._z.abbr(this); }
			return old.call(this);
		};
	}

	function resetZoneWrap (old) {
		return function () {
			this._z = null;
			return old.apply(this, arguments);
		};
	}

	fn.zoneName = abbrWrap(fn.zoneName);
	fn.zoneAbbr = abbrWrap(fn.zoneAbbr);
	fn.utc      = resetZoneWrap(fn.utc);

	moment.tz.setDefault = function(name) {
		if (major < 2 || (major === 2 && minor < 9)) {
			logError('Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js ' + moment.version + '.');
		}
		moment.defaultZone = name ? getZone(name) : null;
		return moment;
	};

	// Cloning a moment should include the _z property.
	var momentProperties = moment.momentProperties;
	if (Object.prototype.toString.call(momentProperties) === '[object Array]') {
		// moment 2.8.1+
		momentProperties.push('_z');
		momentProperties.push('_a');
	} else if (momentProperties) {
		// moment 2.7.0
		momentProperties._z = null;
	}

	// INJECT DATA

	return moment;
}));


/***/ }),

/***/ 2486:
/***/ (function(module) {

module.exports = {"version":"2018e","zones":["Africa/Abidjan|LMT GMT|g.8 0|01|-2ldXH.Q|48e5","Africa/Accra|LMT GMT +0020|.Q 0 -k|012121212121212121212121212121212121212121212121|-26BbX.8 6tzX.8 MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE|41e5","Africa/Nairobi|LMT EAT +0230 +0245|-2r.g -30 -2u -2J|01231|-1F3Cr.g 3Dzr.g okMu MFXJ|47e5","Africa/Algiers|PMT WET WEST CET CEST|-9.l 0 -10 -10 -20|0121212121212121343431312123431213|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 DA0 Imo0 rd0 De0 9Xz0 1fb0 1ap0 16K0 2yo0 mEp0 hwL0 jxA0 11A0 dDd0 17b0 11B0 1cN0 2Dy0 1cN0 1fB0 1cL0|26e5","Africa/Lagos|LMT WAT|-d.A -10|01|-22y0d.A|17e6","Africa/Bissau|LMT -01 GMT|12.k 10 0|012|-2ldX0 2xoo0|39e4","Africa/Maputo|LMT CAT|-2a.k -20|01|-2GJea.k|26e5","Africa/Cairo|EET EEST|-20 -30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1bIO0 vb0 1ip0 11z0 1iN0 1nz0 12p0 1pz0 10N0 1pz0 16p0 1jz0 s3d0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1WL0 rd0 1Rz0 wp0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1qL0 Xd0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1ny0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 WL0 1qN0 Rb0 1wp0 On0 1zd0 Lz0 1EN0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0|15e6","Africa/Casablanca|LMT WET WEST CET|u.k 0 -10 -10|0121212121212121213121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2gMnt.E 130Lt.E rb0 Dd0 dVb0 b6p0 TX0 EoB0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4mn0 SyN0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0 11A0 5A0 e00 17c0 1fA0 1a00 1a00 1fA0 17c0 1io0 14o0 1lc0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1lc0 14o0 1fA0|32e5","Africa/Ceuta|WET WEST CET CEST|0 -10 -10 -20|010101010101010101010232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-25KN0 11z0 drd0 18p0 3HX0 17d0 1fz0 1a10 1io0 1a00 1y7o0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4VB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|85e3","Africa/El_Aaiun|LMT -01 WET WEST|Q.M 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1rDz7.c 1GVA7.c 6L0 AL0 1Nd0 XX0 1Cp0 pz0 1cBB0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0 11A0 5A0 e00 17c0 1fA0 1a00 1a00 1fA0 17c0 1io0 14o0 1lc0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1lc0 14o0 1fA0|20e4","Africa/Johannesburg|SAST SAST SAST|-1u -20 -30|012121|-2GJdu 1Ajdu 1cL0 1cN0 1cL0|84e5","Africa/Juba|LMT CAT CAST EAT|-26.s -20 -30 -30|01212121212121212121212121212121213|-1yW26.s 1zK06.s 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0","Africa/Khartoum|LMT CAT CAST EAT|-2a.8 -20 -30 -30|012121212121212121212121212121212131|-1yW2a.8 1zK0a.8 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0 HjL0|51e5","Africa/Monrovia|MMT MMT GMT|H.8 I.u 0|012|-23Lzg.Q 28G01.m|11e5","Africa/Ndjamena|LMT WAT WAST|-10.c -10 -20|0121|-2le10.c 2J3c0.c Wn0|13e5","Africa/Sao_Tome|LMT GMT WAT|A.J 0 -10|012|-2le00 4i6N0","Africa/Tripoli|LMT CET CEST EET|-Q.I -10 -20 -20|012121213121212121212121213123123|-21JcQ.I 1hnBQ.I vx0 4iP0 xx0 4eN0 Bb0 7ip0 U0n0 A10 1db0 1cN0 1db0 1dd0 1db0 1eN0 1bb0 1e10 1cL0 1c10 1db0 1dd0 1db0 1cN0 1db0 1q10 fAn0 1ep0 1db0 AKq0 TA0 1o00|11e5","Africa/Tunis|PMT CET CEST|-9.l -10 -20|0121212121212121212121212121212121|-2nco9.l 18pa9.l 1qM0 DA0 3Tc0 11B0 1ze0 WM0 7z0 3d0 14L0 1cN0 1f90 1ar0 16J0 1gXB0 WM0 1rA0 11c0 nwo0 Ko0 1cM0 1cM0 1rA0 10M0 zuM0 10N0 1aN0 1qM0 WM0 1qM0 11A0 1o00|20e5","Africa/Windhoek|+0130 SAST SAST CAT WAT|-1u -20 -30 -20 -10|01213434343434343434343434343434343434343434343434343|-2GJdu 1Ajdu 1cL0 1SqL0 9Io0 16P0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0|32e4","America/Adak|NST NWT NPT BST BDT AHST HST HDT|b0 a0 a0 b0 a0 a0 a0 90|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|326","America/Anchorage|AST AWT APT AHST AHDT YST AKST AKDT|a0 90 90 a0 90 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T00 8wX0 iA0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|30e4","America/Port_of_Spain|LMT AST|46.4 40|01|-2kNvR.U|43e3","America/Araguaina|LMT -03 -02|3c.M 30 20|0121212121212121212121212121212121212121212121212121|-2glwL.c HdKL.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 ny10 Lz0|14e4","America/Argentina/Buenos_Aires|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 A4p0 uL0 1qN0 WL0","America/Argentina/Catamarca|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323132321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 7B0 8zb0 uL0","America/Argentina/Cordoba|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323132323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0 1qN0 WL0","America/Argentina/Jujuy|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323121323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1ze0 TX0 1ld0 WK0 1wp0 TX0 A4p0 uL0","America/Argentina/La_Rioja|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0","America/Argentina/Mendoza|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232312121321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1u20 SL0 1vd0 Tb0 1wp0 TW0 ri10 Op0 7TX0 uL0","America/Argentina/Rio_Gallegos|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0","America/Argentina/Salta|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0","America/Argentina/San_Juan|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rld0 m10 8lb0 uL0","America/Argentina/San_Luis|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323121212321212|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 XX0 1q20 SL0 AN0 vDb0 m10 8lb0 8L0 jd0 1qN0 WL0 1qN0","America/Argentina/Tucuman|CMT -04 -03 -02|4g.M 40 30 20|0121212121212121212121212121212121212121212323232313232123232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 4N0 8BX0 uL0 1qN0 WL0","America/Argentina/Ushuaia|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rkN0 8p0 8zb0 uL0","America/Curacao|LMT -0430 AST|4z.L 4u 40|012|-2kV7o.d 28KLS.d|15e4","America/Asuncion|AMT -04 -03|3O.E 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-1x589.k 1DKM9.k 3CL0 3Dd0 10L0 1pB0 10n0 1pB0 10n0 1pB0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1lB0 14n0 1dd0 1cL0 1fd0 WL0 1rd0 1aL0 1dB0 Xz0 1qp0 Xb0 1qN0 10L0 1rB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 WN0 1qL0 11B0 1nX0 1ip0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 TX0 1tB0 19X0 1a10 1fz0 1a10 1fz0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0|28e5","America/Atikokan|CST CDT CWT CPT EST|60 50 50 50 50|0101234|-25TQ0 1in0 Rnb0 3je0 8x30 iw0|28e2","America/Bahia_Banderas|LMT MST CST PST MDT CDT|71 70 60 80 60 50|0121212131414141414141414141414141414152525252525252525252525252525252525252525252525252525252|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nW0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|84e3","America/Bahia|LMT -03 -02|2y.4 30 20|01212121212121212121212121212121212121212121212121212121212121|-2glxp.U HdLp.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 l5B0 Rb0|27e5","America/Barbados|LMT BMT AST ADT|3W.t 3W.t 40 30|01232323232|-1Q0I1.v jsM0 1ODC1.v IL0 1ip0 17b0 1ip0 17b0 1ld0 13b0|28e4","America/Belem|LMT -03 -02|3d.U 30 20|012121212121212121212121212121|-2glwK.4 HdKK.4 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|20e5","America/Belize|LMT CST -0530 CDT|5Q.M 60 5u 50|01212121212121212121212121212121212121212121212121213131|-2kBu7.c fPA7.c Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1f0Mu qn0 lxB0 mn0|57e3","America/Blanc-Sablon|AST ADT AWT APT|40 30 30 30|010230|-25TS0 1in0 UGp0 8x50 iu0|11e2","America/Boa_Vista|LMT -04 -03|42.E 40 30|0121212121212121212121212121212121|-2glvV.k HdKV.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 smp0 WL0 1tB0 2L0|62e2","America/Bogota|BMT -05 -04|4U.g 50 40|0121|-2eb73.I 38yo3.I 2en0|90e5","America/Boise|PST PDT MST MWT MPT MDT|80 70 70 60 60 60|0101023425252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-261q0 1nX0 11B0 1nX0 8C10 JCL0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 Dd0 1Kn0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e4","America/Cambridge_Bay|-00 MST MWT MPT MDDT MDT CST CDT EST|0 70 60 60 50 60 60 50 50|0123141515151515151515151515151515151515151515678651515151515151515151515151515151515151515151515151515151515151515151515151|-21Jc0 RO90 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11A0 1nX0 2K0 WQ0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e2","America/Campo_Grande|LMT -04 -03|3C.s 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwl.w HdLl.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0 IL0 1EN0 FX0 1HB0 FX0 1HB0 IL0 1EN0 IL0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1Kp0 FX0 1HB0 IL0 1EN0 FX0 1HB0 FX0 1HB0 IL0 1EN0|77e4","America/Cancun|LMT CST EST EDT CDT|5L.4 60 50 40 50|0123232341414141414141414141414141414141412|-1UQG0 2q2o0 yLB0 1lb0 14p0 1lb0 14p0 Lz0 xB0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4","America/Caracas|CMT -0430 -04|4r.E 4u 40|01212|-2kV7w.k 28KM2.k 1IwOu kqo0|29e5","America/Cayenne|LMT -04 -03|3t.k 40 30|012|-2mrwu.E 2gWou.E|58e3","America/Panama|CMT EST|5j.A 50|01|-2uduE.o|15e5","America/Chicago|CST CDT EST CWT CPT|60 50 50 50 50|01010101010101010101010101010101010102010101010103401010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 1wp0 TX0 WN0 1qL0 1cN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 11B0 1Hz0 14p0 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5","America/Chihuahua|LMT MST CST CDT MDT|74.k 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|81e4","America/Costa_Rica|SJMT CST CDT|5A.d 60 50|0121212121|-1Xd6n.L 2lu0n.L Db0 1Kp0 Db0 pRB0 15b0 1kp0 mL0|12e5","America/Creston|MST PST|70 80|010|-29DR0 43B0|53e2","America/Cuiaba|LMT -04 -03|3I.k 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwf.E HdLf.E 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 4a10 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0 IL0 1EN0 FX0 1HB0 FX0 1HB0 IL0 1EN0 IL0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1Kp0 FX0 1HB0 IL0 1EN0 FX0 1HB0 FX0 1HB0 IL0 1EN0|54e4","America/Danmarkshavn|LMT -03 -02 GMT|1e.E 30 20 0|01212121212121212121212121212121213|-2a5WJ.k 2z5fJ.k 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 DC0|8","America/Dawson_Creek|PST PDT PWT PPT MST|80 70 70 70 70|0102301010101010101010101010101010101010101010101010101014|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 ML0|12e3","America/Dawson|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 jrA0 fNd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|13e2","America/Denver|MST MDT MWT MPT|70 60 60 60|01010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 11B0 1qL0 WN0 mn0 Ord0 8x20 ix0 LCN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e5","America/Detroit|LMT CST EST EWT EPT EDT|5w.b 60 50 40 40 40|012342525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2Cgir.N peqr.N 156L0 8x40 iv0 6fd0 11z0 XQp0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e5","America/Edmonton|LMT MST MDT MWT MPT|7x.Q 70 60 60 60|01212121212121341212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2yd4q.8 shdq.8 1in0 17d0 hz0 2dB0 1fz0 1a10 11z0 1qN0 WL0 1qN0 11z0 IGN0 8x20 ix0 3NB0 11z0 LFB0 1cL0 3Cp0 1cL0 66N0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|10e5","America/Eirunepe|LMT -05 -04|4D.s 50 40|0121212121212121212121212121212121|-2glvk.w HdLk.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0 yTd0 d5X0|31e3","America/El_Salvador|LMT CST CDT|5U.M 60 50|012121|-1XiG3.c 2Fvc3.c WL0 1qN0 WL0|11e5","America/Tijuana|LMT MST PST PDT PWT PPT|7M.4 70 80 70 70 70|012123245232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQE0 4PX0 8mM0 8lc0 SN0 1cL0 pHB0 83r0 zI0 5O10 1Rz0 cOO0 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 BUp0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|20e5","America/Fort_Nelson|PST PDT PWT PPT MST|80 70 70 70 70|01023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010104|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2","America/Fort_Wayne|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010101023010101010101010101040454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 QI10 Db0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 5Tz0 1o10 qLb0 1cL0 1cN0 1cL0 1qhd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Fortaleza|LMT -03 -02|2y 30 20|0121212121212121212121212121212121212121|-2glxq HdLq 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 5z0 2mN0 On0|34e5","America/Glace_Bay|LMT AST ADT AWT APT|3X.M 40 30 30 30|012134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsI0.c CwO0.c 1in0 UGp0 8x50 iu0 iq10 11z0 Jg10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3","America/Godthab|LMT -03 -02|3q.U 30 20|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5Ux.4 2z5dx.4 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e3","America/Goose_Bay|NST NDT NST NDT NWT NPT AST ADT ADDT|3u.Q 2u.Q 3u 2u 2u 2u 40 30 20|010232323232323245232323232323232323232323232323232323232326767676767676767676767676767676767676767676768676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-25TSt.8 1in0 DXb0 2HbX.8 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 S10 g0u 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|76e2","America/Grand_Turk|KMT EST EDT AST|57.a 50 40 40|01212121212121212121212121212121212121212121212121212121212121212121212121232121212121212121212121212121212121212121|-2l1uQ.O 2HHBQ.O 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 5Ip0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e2","America/Guatemala|LMT CST CDT|62.4 60 50|0121212121|-24KhV.U 2efXV.U An0 mtd0 Nz0 ifB0 17b0 zDB0 11z0|13e5","America/Guayaquil|QMT -05 -04|5e 50 40|0121|-1yVSK 2uILK rz0|27e5","America/Guyana|LMT -0345 -03 -04|3Q.E 3J 30 40|0123|-2dvU7.k 2r6LQ.k Bxbf|80e4","America/Halifax|LMT AST ADT AWT APT|4e.o 40 30 30 30|0121212121212121212121212121212121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsHJ.A xzzJ.A 1db0 3I30 1in0 3HX0 IL0 1E10 ML0 1yN0 Pb0 1Bd0 Mn0 1Bd0 Rz0 1w10 Xb0 1w10 LX0 1w10 Xb0 1w10 Lz0 1C10 Jz0 1E10 OL0 1yN0 Un0 1qp0 Xb0 1qp0 11X0 1w10 Lz0 1HB0 LX0 1C10 FX0 1w10 Xb0 1qp0 Xb0 1BB0 LX0 1td0 Xb0 1qp0 Xb0 Rf0 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 6i10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|39e4","America/Havana|HMT CST CDT|5t.A 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Meuu.o 72zu.o ML0 sld0 An0 1Nd0 Db0 1Nd0 An0 6Ep0 An0 1Nd0 An0 JDd0 Mn0 1Ap0 On0 1fd0 11X0 1qN0 WL0 1wp0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 14n0 1ld0 14L0 1kN0 15b0 1kp0 1cL0 1cN0 1fz0 1a10 1fz0 1fB0 11z0 14p0 1nX0 11B0 1nX0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 1a10 1in0 1a10 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 17c0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 11A0 6i00 Rc0 1wo0 U00 1tA0 Rc0 1wo0 U00 1wo0 U00 1zc0 U00 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0|21e5","America/Hermosillo|LMT MST CST PST MDT|7n.Q 70 60 80 60|0121212131414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0|64e4","America/Indiana/Knox|CST CDT CWT CPT EST|60 50 50 50 50|0101023010101010101010101010101010101040101010101010101010101010101010101010101010101010141010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 3Cn0 8wp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 z8o0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Marengo|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010104545454545414545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 dyN0 11z0 6fd0 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1e6p0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Petersburg|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010104010101010101010101010141014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 njX0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 3Fb0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 19co0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Tell_City|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Vevay|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010102304545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 kPB0 Awn0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1lnd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Vincennes|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Indiana/Winamac|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010101010454541054545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1za0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Inuvik|-00 PST PDDT MST MDT|0 80 60 70 60|0121343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-FnA0 tWU0 1fA0 wPe0 2pz0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|35e2","America/Iqaluit|-00 EWT EPT EST EDDT EDT CST CDT|0 40 40 50 30 40 60 50|01234353535353535353535353535353535353535353567353535353535353535353535353535353535353535353535353535353535353535353535353|-16K00 7nX0 iv0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|67e2","America/Jamaica|KMT EST EDT|57.a 50 40|0121212121212121212121|-2l1uQ.O 2uM1Q.O 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0|94e4","America/Juneau|PST PWT PPT PDT YDT YST AKST AKDT|80 70 70 70 80 90 90 80|01203030303030303030303030403030356767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cM0 1cM0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|33e3","America/Kentucky/Louisville|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101010102301010101010101010101010101454545454545414545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 3Fd0 Nb0 LPd0 11z0 RB0 8x30 iw0 Bb0 10N0 2bB0 8in0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 xz0 gso0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Kentucky/Monticello|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 SWp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/La_Paz|CMT BST -04|4w.A 3w.A 40|012|-1x37r.o 13b0|19e5","America/Lima|LMT -05 -04|58.A 50 40|0121212121212121|-2tyGP.o 1bDzP.o zX0 1aN0 1cL0 1cN0 1cL0 1PrB0 zX0 1O10 zX0 6Gp0 zX0 98p0 zX0|11e6","America/Los_Angeles|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 5Wp1 1VaX 3dA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e6","America/Maceio|LMT -03 -02|2m.Q 30 20|012121212121212121212121212121212121212121|-2glxB.8 HdLB.8 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 8Q10 WL0 1tB0 5z0 2mN0 On0|93e4","America/Managua|MMT CST EST CDT|5J.c 60 50 50|0121313121213131|-1quie.M 1yAMe.M 4mn0 9Up0 Dz0 1K10 Dz0 s3F0 1KH0 DB0 9In0 k8p0 19X0 1o30 11y0|22e5","America/Manaus|LMT -04 -03|40.4 40 30|01212121212121212121212121212121|-2glvX.U HdKX.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0|19e5","America/Martinique|FFMT AST ADT|44.k 40 30|0121|-2mPTT.E 2LPbT.E 19X0|39e4","America/Matamoros|LMT CST CDT|6E 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|45e4","America/Mazatlan|LMT MST CST PST MDT|75.E 70 60 80 60|0121212131414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|44e4","America/Menominee|CST CDT CWT CPT EST|60 50 50 50 50|01010230101041010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 LCN0 1fz0 6410 9Jb0 1cM0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|85e2","America/Merida|LMT CST EST CDT|5W.s 60 50 50|0121313131313131313131313131313131313131313131313131313131313131313131313131313131313131|-1UQG0 2q2o0 2hz0 wu30 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|11e5","America/Metlakatla|PST PWT PPT PDT AKST AKDT|80 70 70 70 90 80|0120303030303030303030303030303030454545454545454545454545454545454545454545454|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1hU10 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2","America/Mexico_City|LMT MST CST CDT CWT|6A.A 70 60 50 50|012121232324232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 gEn0 TX0 3xd0 Jb0 6zB0 SL0 e5d0 17b0 1Pff0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|20e6","America/Miquelon|LMT AST -03 -02|3I.E 40 30 20|012323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2mKkf.k 2LTAf.k gQ10 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|61e2","America/Moncton|EST AST ADT AWT APT|50 40 30 30 30|012121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsH0 CwN0 1in0 zAo0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1K10 Lz0 1zB0 NX0 1u10 Wn0 S20 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14n1 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 ReX 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|64e3","America/Monterrey|LMT CST CDT|6F.g 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|41e5","America/Montevideo|LMT MMT -04 -03 -0330 -0230 -02 -0130|3I.P 3I.P 40 30 3u 2u 20 1u|012343434343434343434343435353636353636375363636363636363636363636363636363636363636363|-2tRUf.9 sVc0 8jcf.9 1db0 1dcu 1cLu 1dcu 1cLu ircu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu WLu 1fAu 1cLu 1o0u 11zu NAu 3jXu zXu Dq0u 19Xu pcu jz0 cm10 19X0 6tB0 1fbu 3o0u jX0 4vB0 xz0 3Cp0 mmu 1a10 IMu Db0 4c10 uL0 1Nd0 An0 1SN0 uL0 mp0 28L0 iPB0 un0 1SN0 xz0 1zd0 Lz0 1zd0 Rb0 1zd0 On0 1wp0 Rb0 s8p0 1fB0 1ip0 11z0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 11z0|17e5","America/Toronto|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101012301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 11Wu 1nzu 1fD0 WJ0 1wr0 Nb0 1Ap0 On0 1zd0 On0 1wp0 TX0 1tB0 TX0 1tB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 4kM0 8x40 iv0 1o10 11z0 1nX0 11z0 1o10 11z0 1o10 1qL0 11D0 1nX0 11B0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e5","America/Nassau|LMT EST EDT|59.u 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2kNuO.u 26XdO.u 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|24e4","America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6","America/Nipigon|EST EDT EWT EPT|50 40 40 40|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 Rnb0 3je0 8x40 iv0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|16e2","America/Nome|NST NWT NPT BST BDT YST AKST AKDT|b0 a0 a0 b0 a0 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cl0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|38e2","America/Noronha|LMT -02 -01|29.E 20 10|0121212121212121212121212121212121212121|-2glxO.k HdKO.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|30e2","America/North_Dakota/Beulah|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/North_Dakota/Center|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/North_Dakota/New_Salem|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","America/Ojinaga|LMT MST CST CDT MDT|6V.E 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3","America/Pangnirtung|-00 AST AWT APT ADDT ADT EDT EST CST CDT|0 40 30 30 20 30 40 50 60 50|012314151515151515151515151515151515167676767689767676767676767676767676767676767676767676767676767676767676767676767676767|-1XiM0 PnG0 8x50 iu0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1o00 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2","America/Paramaribo|LMT PMT PMT -0330 -03|3E.E 3E.Q 3E.A 3u 30|01234|-2nDUj.k Wqo0.c qanX.I 1yVXN.o|24e4","America/Phoenix|MST MDT MWT|70 60 60|01010202010|-261r0 1nX0 11B0 1nX0 SgN0 4Al1 Ap0 1db0 SWqX 1cL0|42e5","America/Port-au-Prince|PPMT EST EDT|4N 50 40|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-28RHb 2FnMb 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14q0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 i6n0 1nX0 11B0 1nX0 d430 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 3iN0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5","America/Rio_Branco|LMT -05 -04|4v.c 50 40|01212121212121212121212121212121|-2glvs.M HdLs.M 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0 d5X0|31e4","America/Porto_Velho|LMT -04 -03|4f.A 40 30|012121212121212121212121212121|-2glvI.o HdKI.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|37e4","America/Puerto_Rico|AST AWT APT|40 30 30|0120|-17lU0 7XT0 iu0|24e5","America/Punta_Arenas|SMT -05 -04 -03|4G.K 50 40 30|0102021212121212121232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 blz0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0","America/Rainy_River|CST CDT CWT CPT|60 50 50 50|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TQ0 1in0 Rnb0 3je0 8x30 iw0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|842","America/Rankin_Inlet|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313131313131313131313131313131313131313131313131313131313131313131|-vDc0 keu0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e2","America/Recife|LMT -03 -02|2j.A 30 20|0121212121212121212121212121212121212121|-2glxE.o HdLE.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|33e5","America/Regina|LMT MST MDT MWT MPT CST|6W.A 70 60 60 60 60|012121212121212121212121341212121212121212121212121215|-2AD51.o uHe1.o 1in0 s2L0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 66N0 1cL0 1cN0 19X0 1fB0 1cL0 1fB0 1cL0 1cN0 1cL0 M30 8x20 ix0 1ip0 1cL0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 3NB0 1cL0 1cN0|19e4","America/Resolute|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313431313131313131313131313131313131313131313131313131313131313131|-SnA0 GWS0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|229","America/Santarem|LMT -04 -03|3C.M 40 30|0121212121212121212121212121212|-2glwl.c HdLl.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0|21e4","America/Santiago|SMT -05 -04 -03|4G.K 50 40 30|010202121212121212321232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 9Bz0 jb0 1oN0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|62e5","America/Santo_Domingo|SDMT EST EDT -0430 AST|4E 50 40 4u 40|01213131313131414|-1ttjk 1lJMk Mn0 6sp0 Lbu 1Cou yLu 1RAu wLu 1QMu xzu 1Q0u xXu 1PAu 13jB0 e00|29e5","America/Sao_Paulo|LMT -03 -02|36.s 30 20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2glwR.w HdKR.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 pTd0 PX0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0 IL0 1EN0 FX0 1HB0 FX0 1HB0 IL0 1EN0 IL0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1HB0 FX0 1Kp0 FX0 1HB0 IL0 1EN0 FX0 1HB0 FX0 1HB0 IL0 1EN0|20e6","America/Scoresbysund|LMT -02 -01 +00|1r.Q 20 10 0|0121323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2a5Ww.8 2z5ew.8 1a00 1cK0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|452","America/Sitka|PST PWT PPT PDT YST AKST AKDT|80 70 70 70 90 90 80|01203030303030303030303030303030345656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|90e2","America/St_Johns|NST NDT NST NDT NWT NPT NDDT|3u.Q 2u.Q 3u 2u 2u 2u 1u|01010101010101010101010101010101010102323232323232324523232323232323232323232323232323232323232323232323232323232323232323232323232323232326232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-28oit.8 14L0 1nB0 1in0 1gm0 Dz0 1JB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1fB0 19X0 1fB0 19X0 10O0 eKX.8 19X0 1iq0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4","America/Swift_Current|LMT MST MDT MWT MPT CST|7b.k 70 60 60 60 60|012134121212121212121215|-2AD4M.E uHdM.E 1in0 UGp0 8x20 ix0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 isN0 1cL0 3Cp0 1cL0 1cN0 11z0 1qN0 WL0 pMp0|16e3","America/Tegucigalpa|LMT CST CDT|5M.Q 60 50|01212121|-1WGGb.8 2ETcb.8 WL0 1qN0 WL0 GRd0 AL0|11e5","America/Thule|LMT AST ADT|4z.8 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5To.Q 31NBo.Q 1cL0 1cN0 1cL0 1fB0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|656","America/Thunder_Bay|CST EST EWT EPT EDT|60 50 40 40 40|0123141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-2q5S0 1iaN0 8x40 iv0 XNB0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4","America/Vancouver|PST PDT PWT PPT|80 70 70 70|0102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TO0 1in0 UGp0 8x10 iy0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5","America/Whitehorse|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 3NA0 vrd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3","America/Winnipeg|CST CDT CWT CPT|60 50 50 50|010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aIi0 WL0 3ND0 1in0 Jap0 Rb0 aCN0 8x30 iw0 1tB0 11z0 1ip0 11z0 1o10 11z0 1o10 11z0 1rd0 10L0 1op0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 1cL0 1cN0 11z0 6i10 WL0 6i10 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|66e4","America/Yakutat|YST YWT YPT YDT AKST AKDT|90 80 80 80 90 80|01203030303030303030303030303030304545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-17T10 8x00 iz0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cn0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|642","America/Yellowknife|-00 MST MWT MPT MDDT MDT|0 70 60 60 50 60|012314151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151|-1pdA0 hix0 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3","Antarctica/Casey|-00 +08 +11|0 -80 -b0|01212121|-2q00 1DjS0 T90 40P0 KL0 blz0 3m10|10","Antarctica/Davis|-00 +07 +05|0 -70 -50|01012121|-vyo0 iXt0 alj0 1D7v0 VB0 3Wn0 KN0|70","Antarctica/DumontDUrville|-00 +10|0 -a0|0101|-U0o0 cfq0 bFm0|80","Antarctica/Macquarie|AEST AEDT -00 +11|-a0 -b0 0 -b0|0102010101010101010101010101010101010101010101010101010101010101010101010101010101010101013|-29E80 19X0 4SL0 1ayy0 Lvs0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0|1","Antarctica/Mawson|-00 +06 +05|0 -60 -50|012|-CEo0 2fyk0|60","Pacific/Auckland|NZMT NZST NZST NZDT|-bu -cu -c0 -d0|01020202020202020202020202023232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1GCVu Lz0 1tB0 11zu 1o0u 11zu 1o0u 11zu 1o0u 14nu 1lcu 14nu 1lcu 1lbu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1qLu WMu 1qLu 11Au 1n1bu IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|14e5","Antarctica/Palmer|-00 -03 -04 -02|0 30 40 20|0121212121213121212121212121212121212121212121212121212121212121212121212121212121|-cao0 nD0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 jsN0 14N0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0|40","Antarctica/Rothera|-00 -03|0 30|01|gOo0|130","Antarctica/Syowa|-00 +03|0 -30|01|-vs00|20","Antarctica/Troll|-00 +00 +02|0 0 -20|01212121212121212121212121212121212121212121212121212121212121212121|1puo0 hd0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|40","Antarctica/Vostok|-00 +06|0 -60|01|-tjA0|25","Europe/Oslo|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2awM0 Qm0 W6o0 5pf0 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 wJc0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1qM0 WM0 zpc0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e4","Asia/Riyadh|LMT +03|-36.Q -30|01|-TvD6.Q|57e5","Asia/Almaty|LMT +05 +06 +07|-57.M -50 -60 -70|012323232323232323232321232323232323232323232323232|-1Pc57.M eUo7.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|15e5","Asia/Amman|LMT EET EEST|-2n.I -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1yW2n.I 1HiMn.I KL0 1oN0 11b0 1oN0 11b0 1pd0 1dz0 1cp0 11b0 1op0 11b0 fO10 1db0 1e10 1cL0 1cN0 1cL0 1cN0 1fz0 1pd0 10n0 1ld0 14n0 1hB0 15b0 1ip0 19X0 1cN0 1cL0 1cN0 17b0 1ld0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1So0 y00 1fc0 1dc0 1co0 1dc0 1cM0 1cM0 1cM0 1o00 11A0 1lc0 17c0 1cM0 1cM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|25e5","Asia/Anadyr|LMT +12 +13 +14 +11|-bN.U -c0 -d0 -e0 -b0|01232121212121212121214121212121212121212121212121212121212141|-1PcbN.U eUnN.U 23CL0 1db0 2q10 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|13e3","Asia/Aqtau|LMT +04 +05 +06|-3l.4 -40 -50 -60|012323232323232323232123232312121212121212121212|-1Pc3l.4 eUnl.4 24PX0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|15e4","Asia/Aqtobe|LMT +04 +05 +06|-3M.E -40 -50 -60|0123232323232323232321232323232323232323232323232|-1Pc3M.E eUnM.E 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|27e4","Asia/Ashgabat|LMT +04 +05 +06|-3R.w -40 -50 -60|0123232323232323232323212|-1Pc3R.w eUnR.w 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0|41e4","Asia/Atyrau|LMT +03 +05 +06 +04|-3r.I -30 -50 -60 -40|01232323232323232323242323232323232324242424242|-1Pc3r.I eUor.I 24PW0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 2sp0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0","Asia/Baghdad|BMT +03 +04|-2V.A -30 -40|012121212121212121212121212121212121212121212121212121|-26BeV.A 2ACnV.A 11b0 1cp0 1dz0 1dd0 1db0 1cN0 1cp0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1de0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0|66e5","Asia/Qatar|LMT +04 +03|-3q.8 -40 -30|012|-21Jfq.8 27BXq.8|96e4","Asia/Baku|LMT +03 +04 +05|-3j.o -30 -40 -50|01232323232323232323232123232323232323232323232323232323232323232|-1Pc3j.o 1jUoj.o WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 9Je0 1o00 11z0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5","Asia/Bangkok|BMT +07|-6G.4 -70|01|-218SG.4|15e6","Asia/Barnaul|LMT +06 +07 +08|-5z -60 -70 -80|0123232323232323232323212323232321212121212121212121212121212121212|-21S5z pCnz 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 p90 LE0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0","Asia/Beirut|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-21aq0 1on0 1410 1db0 19B0 1in0 1ip0 WL0 1lQp0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 q6N0 En0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1op0 11b0 dA10 17b0 1iN0 17b0 1iN0 17b0 1iN0 17b0 1vB0 SL0 1mp0 13z0 1iN0 17b0 1iN0 17b0 1jd0 12n0 1a10 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0|22e5","Asia/Bishkek|LMT +05 +06 +07|-4W.o -50 -60 -70|012323232323232323232321212121212121212121212121212|-1Pc4W.o eUnW.o 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2e00 1tX0 17b0 1ip0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1cPu 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0|87e4","Asia/Brunei|LMT +0730 +08|-7D.E -7u -80|012|-1KITD.E gDc9.E|42e4","Asia/Kolkata|MMT IST +0630|-5l.a -5u -6u|012121|-2zOtl.a 1r2LP.a 1un0 HB0 7zX0|15e6","Asia/Chita|LMT +08 +09 +10|-7x.Q -80 -90 -a0|012323232323232323232321232323232323232323232323232323232323232312|-21Q7x.Q pAnx.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3re0|33e4","Asia/Choibalsan|LMT +07 +08 +10 +09|-7C -70 -80 -a0 -90|0123434343434343434343434343434343434343434343424242|-2APHC 2UkoC cKn0 1da0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 3Db0 h1f0 1cJ0 1cP0 1cJ0|38e3","Asia/Shanghai|CST CDT|-80 -90|01010101010101010|-1c1I0 LX0 16p0 1jz0 1Myp0 Rb0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0|23e6","Asia/Colombo|MMT +0530 +06 +0630|-5j.w -5u -60 -6u|01231321|-2zOtj.w 1rFbN.w 1zzu 7Apu 23dz0 11zu n3cu|22e5","Asia/Dhaka|HMT +0630 +0530 +06 +07|-5R.k -6u -5u -60 -70|0121343|-18LFR.k 1unn.k HB0 m6n0 2kxbu 1i00|16e6","Asia/Damascus|LMT EET EEST|-2p.c -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-21Jep.c Hep.c 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1xRB0 11X0 1oN0 10L0 1pB0 11b0 1oN0 10L0 1mp0 13X0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 Nb0 1AN0 Nb0 bcp0 19X0 1gp0 19X0 3ld0 1xX0 Vd0 1Bz0 Sp0 1vX0 10p0 1dz0 1cN0 1cL0 1db0 1db0 1g10 1an0 1ap0 1db0 1fd0 1db0 1cN0 1db0 1dd0 1db0 1cp0 1dz0 1c10 1dX0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 19z0 1fB0 1qL0 11B0 1on0 Wp0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0|26e5","Asia/Dili|LMT +08 +09|-8m.k -80 -90|01212|-2le8m.k 1dnXm.k 1nfA0 Xld0|19e4","Asia/Dubai|LMT +04|-3F.c -40|01|-21JfF.c|39e5","Asia/Dushanbe|LMT +05 +06 +07|-4z.c -50 -60 -70|012323232323232323232321|-1Pc4z.c eUnz.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2hB0|76e4","Asia/Famagusta|LMT EET EEST +03|-2f.M -20 -30 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212312121212121212121212121212121212121212121|-1Vc2f.M 2a3cf.M 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 15U0 2Ks0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Asia/Gaza|EET EEST IST IDT|-20 -30 -20 -30|010101010101010101010101010101012323232323232323232323232320101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 11z0 1o10 14o0 1lA1 SKX 1xd1 MKX 1AN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0|18e5","Asia/Hebron|EET EEST IST IDT|-20 -30 -20 -30|01010101010101010101010101010101232323232323232323232323232010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 12L0 1mN0 14o0 1lc0 Tb0 1xd1 MKX bB0 cn0 1cN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0|25e4","Asia/Ho_Chi_Minh|LMT PLMT +07 +08 +09|-76.E -76.u -70 -80 -90|0123423232|-2yC76.E bK00.a 1h7b6.u 5lz0 18o0 3Oq0 k5b0 aW00 BAM0|90e5","Asia/Hong_Kong|LMT HKT HKST JST|-7A.G -80 -90 -90|0121312121212121212121212121212121212121212121212121212121212121212121|-2CFHA.G 1sEP6.G 1cL0 ylu 93X0 1qQu 1tX0 Rd0 1In0 NB0 1cL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1kL0 14N0 1nX0 U10 1tz0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 Rd0 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 17d0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0|73e5","Asia/Hovd|LMT +06 +07 +08|-66.A -60 -70 -80|012323232323232323232323232323232323232323232323232|-2APG6.A 2Uko6.A cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|81e3","Asia/Irkutsk|IMT +07 +08 +09|-6V.5 -70 -80 -90|01232323232323232323232123232323232323232323232323232323232323232|-21zGV.5 pjXV.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4","Europe/Istanbul|IMT EET EEST +04 +03|-1U.U -20 -30 -40 -30|012121212121212121212121212121212121212121212121212121234343434342121212121212121212121212121212121212121212121212121212121212124|-2ogNU.U dzzU.U 11b0 8tB0 1on0 1410 1db0 19B0 1in0 3Rd0 Un0 1oN0 11b0 zSp0 CL0 mN0 1Vz0 1gN0 1pz0 5Rd0 1fz0 1yp0 ML0 1kp0 17b0 1ip0 17b0 1fB0 19X0 1jB0 18L0 1ip0 17z0 qdd0 xX0 3S10 Tz0 dA10 11z0 1o10 11z0 1qN0 11z0 1ze0 11B0 WM0 1qO0 WI0 1nX0 1rB0 10L0 11B0 1in0 17d0 1in0 2pX0 19E0 1fU0 16Q0 1iI0 16Q0 1iI0 1Vd0 pb0 3Kp0 14o0 1de0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1a00 1fA0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WO0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 Xc0 1qo0 WM0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 15w0|13e6","Asia/Jakarta|BMT +0720 +0730 +09 +08 WIB|-77.c -7k -7u -90 -80 -70|01232425|-1Q0Tk luM0 mPzO 8vWu 6kpu 4PXu xhcu|31e6","Asia/Jayapura|LMT +09 +0930 WIT|-9m.M -90 -9u -90|0123|-1uu9m.M sMMm.M L4nu|26e4","Asia/Jerusalem|JMT IST IDT IDDT|-2k.E -20 -30 -40|01212121212132121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-26Bek.E SyMk.E 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 3LB0 Em0 or0 1cn0 1dB0 16n0 10O0 1ja0 1tC0 14o0 1cM0 1a00 11A0 1Na0 An0 1MP0 AJ0 1Kp0 LC0 1oo0 Wl0 EQN0 Db0 1fB0 Rb0 npB0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 1hB0 1dX0 1ep0 1aL0 1eN0 17X0 1nf0 11z0 1tB0 19W0 1e10 17b0 1ep0 1gL0 18N0 1fz0 1eN0 17b0 1gq0 1gn0 19d0 1dz0 1c10 17X0 1hB0 1gn0 19d0 1dz0 1c10 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0|81e4","Asia/Kabul|+04 +0430|-40 -4u|01|-10Qs0|46e5","Asia/Kamchatka|LMT +11 +12 +13|-ay.A -b0 -c0 -d0|012323232323232323232321232323232323232323232323232323232323212|-1SLKy.A ivXy.A 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|18e4","Asia/Karachi|LMT +0530 +0630 +05 PKT PKST|-4s.c -5u -6u -50 -50 -60|012134545454|-2xoss.c 1qOKW.c 7zX0 eup0 LqMu 1fy00 1cL0 dK10 11b0 1610 1jX0|24e6","Asia/Urumqi|LMT +06|-5O.k -60|01|-1GgtO.k|32e5","Asia/Kathmandu|LMT +0530 +0545|-5F.g -5u -5J|012|-21JhF.g 2EGMb.g|12e5","Asia/Khandyga|LMT +08 +09 +10 +11|-92.d -80 -90 -a0 -b0|0123232323232323232323212323232323232323232323232343434343434343432|-21Q92.d pAp2.d 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 qK0 yN0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|66e2","Asia/Krasnoyarsk|LMT +06 +07 +08|-6b.q -60 -70 -80|01232323232323232323232123232323232323232323232323232323232323232|-21Hib.q prAb.q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5","Asia/Kuala_Lumpur|SMT +07 +0720 +0730 +09 +08|-6T.p -70 -7k -7u -90 -80|0123435|-2Bg6T.p 17anT.p l5XE 17bO 8Fyu 1so1u|71e5","Asia/Kuching|LMT +0730 +08 +0820 +09|-7l.k -7u -80 -8k -90|0123232323232323242|-1KITl.k gDbP.k 6ynu AnE 1O0k AnE 1NAk AnE 1NAk AnE 1NAk AnE 1O0k AnE 1NAk AnE pAk 8Fz0|13e4","Asia/Macau|LMT CST CDT|-7y.k -80 -90|012121212121212121212121212121212121212121|-2le80 1XO3u 1wn0 Rd0 1wn0 R9u 1wqu U10 1tz0 TVu 1tz0 17gu 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cJu 1cL0 1cN0 1fz0 1cN0 1cOu 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cJu 1cL0 1cN0 1fz0 1cN0 1cL0|57e4","Asia/Magadan|LMT +10 +11 +12|-a3.c -a0 -b0 -c0|012323232323232323232321232323232323232323232323232323232323232312|-1Pca3.c eUo3.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Cq0|95e3","Asia/Makassar|LMT MMT +08 +09 WITA|-7V.A -7V.A -80 -90 -80|01234|-21JjV.A vfc0 myLV.A 8ML0|15e5","Asia/Manila|+08 +09|-80 -90|010101010|-1kJI0 AL0 cK10 65X0 mXB0 vX0 VK10 1db0|24e6","Asia/Nicosia|LMT EET EEST|-2d.s -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Vc2d.s 2a3cd.s 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|32e4","Asia/Novokuznetsk|LMT +06 +07 +08|-5M.M -60 -70 -80|012323232323232323232321232323232323232323232323232323232323212|-1PctM.M eULM.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|55e4","Asia/Novosibirsk|LMT +06 +07 +08|-5v.E -60 -70 -80|0123232323232323232323212323212121212121212121212121212121212121212|-21Qnv.E pAFv.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 ml0 Os0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 4eN0|15e5","Asia/Omsk|LMT +05 +06 +07|-4R.u -50 -60 -70|01232323232323232323232123232323232323232323232323232323232323232|-224sR.u pMLR.u 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|12e5","Asia/Oral|LMT +03 +05 +06 +04|-3p.o -30 -50 -60 -40|01232323232323232424242424242424242424242424242|-1Pc3p.o eUop.o 23CK0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 1cM0 IM0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|27e4","Asia/Pontianak|LMT PMT +0730 +09 +08 WITA WIB|-7h.k -7h.k -7u -90 -80 -80 -70|012324256|-2ua7h.k XE00 munL.k 8Rau 6kpu 4PXu xhcu Wqnu|23e4","Asia/Pyongyang|LMT KST JST KST|-8n -8u -90 -90|012313|-2um8n 97XR 1lTzu 2Onc0 6BAu|29e5","Asia/Qyzylorda|LMT +04 +05 +06|-4l.Q -40 -50 -60|0123232323232323232323232323232323232323232323|-1Pc4l.Q eUol.Q 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 3ao0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|73e4","Asia/Rangoon|RMT +0630 +09|-6o.L -6u -90|0121|-21Jio.L SmnS.L 7j9u|48e5","Asia/Sakhalin|LMT +09 +11 +12 +10|-9u.M -90 -b0 -c0 -a0|01232323232323232323232423232323232424242424242424242424242424242|-2AGVu.M 1BoMu.M 1qFa0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 2pB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|58e4","Asia/Samarkand|LMT +04 +05 +06|-4r.R -40 -50 -60|01232323232323232323232|-1Pc4r.R eUor.R 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|36e4","Asia/Seoul|LMT KST JST KST KDT KDT|-8r.Q -8u -90 -90 -9u -a0|0123141414141414135353|-2um8r.Q 97XV.Q 1m1zu kKo0 2I0u OL0 1FB0 Rb0 1qN0 TX0 1tB0 TX0 1tB0 TX0 1tB0 TX0 2ap0 12FBu 11A0 1o00 11A0|23e6","Asia/Srednekolymsk|LMT +10 +11 +12|-ae.Q -a0 -b0 -c0|01232323232323232323232123232323232323232323232323232323232323232|-1Pcae.Q eUoe.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|35e2","Asia/Taipei|CST JST CDT|-80 -90 -90|01020202020202020202020202020202020202020|-1iw80 joM0 1yo0 Tz0 1ip0 1jX0 1cN0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 10N0 1BX0 10p0 1pz0 10p0 1pz0 10p0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1BB0 ML0 1Bd0 ML0 uq10 1db0 1cN0 1db0 97B0 AL0|74e5","Asia/Tashkent|LMT +05 +06 +07|-4B.b -50 -60 -70|012323232323232323232321|-1Pc4B.b eUnB.b 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0|23e5","Asia/Tbilisi|TBMT +03 +04 +05|-2X.b -30 -40 -50|0123232323232323232323212121232323232323232323212|-1Pc2X.b 1jUnX.b WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cK0 1cL0 1cN0 1cL0 1cN0 2pz0 1cL0 1fB0 3Nz0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 An0 Os0 WM0|11e5","Asia/Tehran|LMT TMT +0330 +04 +05 +0430|-3p.I -3p.I -3u -40 -50 -4u|01234325252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2btDp.I 1d3c0 1huLT.I TXu 1pz0 sN0 vAu 1cL0 1dB0 1en0 pNB0 UL0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 64p0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0|14e6","Asia/Thimphu|LMT +0530 +06|-5W.A -5u -60|012|-Su5W.A 1BGMs.A|79e3","Asia/Tokyo|JST JDT|-90 -a0|010101010|-QJJ0 Rb0 1ld0 14n0 1zd0 On0 1zd0 On0|38e6","Asia/Tomsk|LMT +06 +07 +08|-5D.P -60 -70 -80|0123232323232323232323212323232323232323232323212121212121212121212|-21NhD.P pxzD.P 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 co0 1bB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Qp0|10e5","Asia/Ulaanbaatar|LMT +07 +08 +09|-77.w -70 -80 -90|012323232323232323232323232323232323232323232323232|-2APH7.w 2Uko7.w cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|12e5","Asia/Ust-Nera|LMT +08 +09 +12 +11 +10|-9w.S -80 -90 -c0 -b0 -a0|012343434343434343434345434343434343434343434343434343434343434345|-21Q9w.S pApw.S 23CL0 1d90 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|65e2","Asia/Vladivostok|LMT +09 +10 +11|-8L.v -90 -a0 -b0|01232323232323232323232123232323232323232323232323232323232323232|-1SJIL.v itXL.v 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4","Asia/Yakutsk|LMT +08 +09 +10|-8C.W -80 -90 -a0|01232323232323232323232123232323232323232323232323232323232323232|-21Q8C.W pAoC.W 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|28e4","Asia/Yekaterinburg|LMT PMT +04 +05 +06|-42.x -3J.5 -40 -50 -60|012343434343434343434343234343434343434343434343434343434343434343|-2ag42.x 7mQh.s qBvJ.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|14e5","Asia/Yerevan|LMT +03 +04 +05|-2W -30 -40 -50|0123232323232323232323212121212323232323232323232323232323232|-1Pc2W 1jUnW WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 4RX0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|13e5","Atlantic/Azores|HMT -02 -01 +00 WET|1S.w 20 10 0 0|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121232323232323232323232323232323234323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2ldW0 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|25e4","Atlantic/Bermuda|LMT AST ADT|4j.i 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1BnRE.G 1LTbE.G 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e3","Atlantic/Canary|LMT -01 WET WEST|11.A 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UtaW.o XPAW.o 1lAK0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4","Atlantic/Cape_Verde|LMT -02 -01|1y.4 20 10|01212|-2ldW0 1eEo0 7zX0 1djf0|50e4","Atlantic/Faroe|LMT WET WEST|r.4 0 -10|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2uSnw.U 2Wgow.U 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|49e3","Atlantic/Madeira|FMT -01 +00 +01 WET WEST|17.A 10 0 -10 0 -10|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2ldX0 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e4","Atlantic/Reykjavik|LMT -01 +00 GMT|1s 10 0 0|012121212121212121212121212121212121212121212121212121212121212121213|-2uWmw mfaw 1Bd0 ML0 1LB0 Cn0 1LB0 3fX0 C10 HrX0 1cO0 LB0 1EL0 LA0 1C00 Oo0 1wo0 Rc0 1wo0 Rc0 1wo0 Rc0 1zc0 Oo0 1zc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0|12e4","Atlantic/South_Georgia|-02|20|0||30","Atlantic/Stanley|SMT -04 -03 -02|3P.o 40 30 20|012121212121212323212121212121212121212121212121212121212121212121212|-2kJw8.A 12bA8.A 19X0 1fB0 19X0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 Cn0 1Cc10 WL0 1qL0 U10 1tz0 2mN0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 U10 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qN0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 U10 1tz0 U10 1tz0 U10|21e2","Australia/Sydney|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|40e5","Australia/Adelaide|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 WM0 1qM0 Rc0 1zc0 U00 1tA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|11e5","Australia/Brisbane|AEST AEDT|-a0 -b0|01010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0|20e5","Australia/Broken_Hill|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|18e3","Australia/Currie|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|746","Australia/Darwin|ACST ACDT|-9u -au|010101010|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0|12e4","Australia/Eucla|+0845 +0945|-8J -9J|0101010101010101010|-293kI xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|368","Australia/Hobart|AEST AEDT|-a0 -b0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 VfB0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|21e4","Australia/Lord_Howe|AEST +1030 +1130 +11|-a0 -au -bu -b0|0121212121313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313|raC0 1zdu Rb0 1zd0 On0 1zd0 On0 1zd0 On0 1zd0 TXu 1qMu WLu 1tAu WLu 1tAu TXu 1tAu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 11Au 1nXu 1qMu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu 11zu 1o0u WLu 1qMu 14nu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu|347","Australia/Lindeman|AEST AEDT|-a0 -b0|010101010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0|10","Australia/Melbourne|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1qM0 11A0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|39e5","Australia/Perth|AWST AWDT|-80 -90|0101010101010101010|-293jX xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|18e5","CET|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Pacific/Easter|EMT -07 -06 -05|7h.s 70 60 50|012121212121212121212121212123232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1uSgG.w 1s4IG.w WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 2pA0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|30e2","CST6CDT|CST CDT CWT CPT|60 50 50 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","EET|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","Europe/Dublin|DMT IST GMT BST IST|p.l -y.D 0 -10 -10|01232323232324242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242|-2ax9y.D Rc0 1fzy.D 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 g600 14o0 1wo0 17c0 1io0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","EST|EST|50|0|","EST5EDT|EST EDT EWT EPT|50 40 40 40|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 SgN0 8x40 iv0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","Etc/GMT-0|GMT|0|0|","Etc/GMT-1|+01|-10|0|","Pacific/Port_Moresby|+10|-a0|0||25e4","Pacific/Pohnpei|+11|-b0|0||34e3","Pacific/Tarawa|+12|-c0|0||29e3","Etc/GMT-13|+13|-d0|0|","Etc/GMT-14|+14|-e0|0|","Etc/GMT-2|+02|-20|0|","Etc/GMT-3|+03|-30|0|","Etc/GMT-4|+04|-40|0|","Etc/GMT-5|+05|-50|0|","Etc/GMT-6|+06|-60|0|","Indian/Christmas|+07|-70|0||21e2","Etc/GMT-8|+08|-80|0|","Pacific/Palau|+09|-90|0||21e3","Etc/GMT+1|-01|10|0|","Etc/GMT+10|-10|a0|0|","Etc/GMT+11|-11|b0|0|","Etc/GMT+12|-12|c0|0|","Etc/GMT+3|-03|30|0|","Etc/GMT+4|-04|40|0|","Etc/GMT+5|-05|50|0|","Etc/GMT+6|-06|60|0|","Etc/GMT+7|-07|70|0|","Etc/GMT+8|-08|80|0|","Etc/GMT+9|-09|90|0|","Etc/UCT|UCT|0|0|","Etc/UTC|UTC|0|0|","Europe/Amsterdam|AMT NST +0120 +0020 CEST CET|-j.w -1j.w -1k -k -20 -10|010101010101010101010101010101010101010101012323234545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545|-2aFcj.w 11b0 1iP0 11A0 1io0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1co0 1io0 1yo0 Pc0 1a00 1fA0 1Bc0 Mo0 1tc0 Uo0 1tA0 U00 1uo0 W00 1s00 VA0 1so0 Vc0 1sM0 UM0 1wo0 Rc0 1u00 Wo0 1rA0 W00 1s00 VA0 1sM0 UM0 1w00 fV0 BCX.w 1tA0 U00 1u00 Wo0 1sm0 601k WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|16e5","Europe/Andorra|WET CET CEST|0 -10 -20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-UBA0 1xIN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|79e3","Europe/Astrakhan|LMT +03 +04 +05|-3c.c -30 -40 -50|012323232323232323212121212121212121212121212121212121212121212|-1Pcrc.c eUMc.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0","Europe/Athens|AMT EET EEST CEST CET|-1y.Q -20 -30 -20 -10|012123434121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a61x.Q CNbx.Q mn0 kU10 9b0 3Es0 Xa0 1fb0 1dd0 k3X0 Nz0 SCp0 1vc0 SO0 1cM0 1a00 1ao0 1fc0 1a10 1fG0 1cg0 1dX0 1bX0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|35e5","Europe/London|GMT BST BDST|0 -10 -20|0101010101010101010101010101010101010101010101010121212121210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|10e6","Europe/Belgrade|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19RC0 3IP0 WM0 1fA0 1cM0 1cM0 1rc0 Qo0 1vmo0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","Europe/Berlin|CET CEST CEMT|-10 -20 -30|01010101010101210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 kL0 Nc0 m10 WM0 1ao0 1cp0 dX0 jz0 Dd0 1io0 17c0 1fA0 1a00 1ehA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e5","Europe/Prague|CET CEST GMT|-10 -20 0|01010101010101010201010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 1qM0 11c0 mp0 xA0 mn0 17c0 1io0 17c0 1fc0 1ao0 1bNc0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|13e5","Europe/Brussels|WET CET CEST WEST|0 -10 -20 -10|0121212103030303030303030303030303030303030303030303212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ehc0 3zX0 11c0 1iO0 11A0 1o00 11A0 my0 Ic0 1qM0 Rc0 1EM0 UM0 1u00 10o0 1io0 1io0 17c0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a30 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 y00 5Wn0 WM0 1fA0 1cM0 16M0 1iM0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|21e5","Europe/Bucharest|BMT EET EEST|-1I.o -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1xApI.o 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Axc0 On0 1fA0 1a10 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|19e5","Europe/Budapest|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1ip0 17b0 1op0 1tb0 Q2m0 3Ne0 WM0 1fA0 1cM0 1cM0 1oJ0 1dc0 1030 1fA0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1iM0 1fA0 8Ha0 Rb0 1wN0 Rb0 1BB0 Lz0 1C20 LB0 SNX0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5","Europe/Zurich|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19Lc0 11A0 1o00 11A0 1xG10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e4","Europe/Chisinau|CMT BMT EET EEST CEST CET MSK MSD|-1T -1I.o -20 -30 -20 -10 -30 -40|012323232323232323234545467676767676767676767323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-26jdT wGMa.A 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 27A0 2en0 39g0 WM0 1fA0 1cM0 V90 1t7z0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 gL0 WO0 1cM0 1cM0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11D0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|67e4","Europe/Copenhagen|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 Tz0 VuO0 60q0 WM0 1fA0 1cM0 1cM0 1cM0 S00 1HA0 Nc0 1C00 Dc0 1Nc0 Ao0 1h5A0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","Europe/Gibraltar|GMT BST BDST CET CEST|0 -10 -20 -10 -20|010101010101010101010101010101010101010101010101012121212121010121010101010101010101034343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 10Jz0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|30e3","Europe/Helsinki|HMT EET EEST|-1D.N -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1WuND.N OULD.N 1dA0 1xGq0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","Europe/Kaliningrad|CET CEST CET CEST MSK MSD EEST EET +03|-10 -20 -20 -30 -30 -40 -30 -20 -30|0101010101010232454545454545454546767676767676767676767676767676767676767676787|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 Am0 Lb0 1en0 op0 1pNz0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|44e4","Europe/Kiev|KMT EET MSK CEST CET MSD EEST|-22.4 -20 -30 -20 -10 -40 -30|0123434252525252525252525256161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc22.4 eUo2.4 rnz0 2Hg0 WM0 1fA0 da0 1v4m0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 Db0 3220 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|34e5","Europe/Kirov|LMT +03 +04 +05|-3i.M -30 -40 -50|01232323232323232321212121212121212121212121212121212121212121|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|48e4","Europe/Lisbon|LMT WET WEST WEMT CET CEST|A.J 0 -10 -20 -10 -20|012121212121212121212121212121212121212121212321232123212321212121212121212121212121212121212121214121212121212121212121212121212124545454212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2le00 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 pvy0 1cM0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e5","Europe/Luxembourg|LMT CET CEST WET WEST WEST WET|-o.A -10 -20 0 -10 -20 -10|0121212134343434343434343434343434343434343434343434565651212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2DG0o.A t6mo.A TB0 1nX0 Up0 1o20 11A0 rW0 CM0 1qP0 R90 1EO0 UK0 1u20 10m0 1ip0 1in0 17e0 19W0 1fB0 1db0 1cp0 1in0 17d0 1fz0 1a10 1in0 1a10 1in0 17f0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 vA0 60L0 WM0 1fA0 1cM0 17c0 1io0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4","Europe/Madrid|WET WEST WEMT CET CEST|0 -10 -20 -10 -20|010101010101010101210343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-25Td0 19B0 1cL0 1dd0 b1z0 18p0 3HX0 17d0 1fz0 1a10 1io0 1a00 1in0 17d0 iIn0 Hd0 1cL0 bb0 1200 2s20 14n0 5aL0 Mp0 1vz0 17d0 1in0 17d0 1in0 17d0 1in0 17d0 6hX0 11B0 XHX0 1a10 1fz0 1a10 19X0 1cN0 1fz0 1a10 1fC0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e5","Europe/Malta|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1co0 17c0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1co0 1cM0 1lA0 Xc0 1qq0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1iN0 19z0 1fB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4","Europe/Minsk|MMT EET MSK CEST CET MSD EEST +03|-1O -20 -30 -20 -10 -40 -30 -30|01234343252525252525252525261616161616161616161616161616161616161617|-1Pc1O eUnO qNX0 3gQ0 WM0 1fA0 1cM0 Al0 1tsn0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 3Fc0 1cN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0|19e5","Europe/Monaco|PMT WET WEST WEMT CET CEST|-9.l 0 -10 -20 -10 -20|01212121212121212121212121212121212121212121212121232323232345454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 2RV0 11z0 11B0 1ze0 WM0 1fA0 1cM0 1fa0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e3","Europe/Moscow|MMT MMT MST MDST MSD MSK +05 EET EEST MSK|-2u.h -2v.j -3v.j -4v.j -40 -30 -50 -20 -30 -40|012132345464575454545454545454545458754545454545454545454545454545454545454595|-2ag2u.h 2pyW.W 1bA0 11X0 GN0 1Hb0 c4v.j ik0 3DA0 dz0 15A0 c10 2q10 iM10 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|16e6","Europe/Paris|PMT WET WEST CEST CET WEMT|-9.l 0 -10 -20 -10 -20|0121212121212121212121212121212121212121212121212123434352543434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2nco8.l cNb8.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 Ik0 5M30 WM0 1fA0 1cM0 Vx0 hB0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e6","Europe/Riga|RMT LST EET MSK CEST CET MSD EEST|-1A.y -2A.y -20 -30 -20 -10 -40 -30|010102345454536363636363636363727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272|-25TzA.y 11A0 1iM0 ko0 gWm0 yDXA.y 2bX0 3fE0 WM0 1fA0 1cM0 1cM0 4m0 1sLy0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 1o00 11A0 1o00 11A0 1qM0 3oo0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|64e4","Europe/Rome|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1cM0 16M0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1C00 LA0 1zc0 Oo0 1C00 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1zc0 Oo0 1fC0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|39e5","Europe/Samara|LMT +03 +04 +05|-3k.k -30 -40 -50|0123232323232323232121232323232323232323232323232323232323212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2y10 14m0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|12e5","Europe/Saratov|LMT +03 +04 +05|-34.i -30 -40 -50|012323232323232321212121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 5810","Europe/Simferopol|SMT EET MSK CEST CET MSD EEST MSK|-2g -20 -30 -20 -10 -40 -30 -40|012343432525252525252525252161616525252616161616161616161616161616161616172|-1Pc2g eUog rEn0 2qs0 WM0 1fA0 1cM0 3V0 1u0L0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 4eL0 1cL0 1cN0 1cL0 1cN0 dX0 WL0 1cN0 1cL0 1fB0 1o30 11B0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11z0 1nW0|33e4","Europe/Sofia|EET CET CEST EEST|-20 -10 -20 -30|01212103030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030|-168L0 WM0 1fA0 1cM0 1cM0 1cN0 1mKH0 1dd0 1fb0 1ap0 1fb0 1a20 1fy0 1a30 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","Europe/Stockholm|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 TB0 2yDe0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|15e5","Europe/Tallinn|TMT CET CEST EET MSK MSD EEST|-1D -10 -20 -20 -30 -40 -30|012103421212454545454545454546363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363|-26oND teD 11A0 1Ta0 4rXl KSLD 2FX0 2Jg0 WM0 1fA0 1cM0 18J0 1sTX0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o10 11A0 1qM0 5QM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e4","Europe/Tirane|LMT CET CEST|-1j.k -10 -20|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glBj.k 14pcj.k 5LC0 WM0 4M0 1fCK0 10n0 1op0 11z0 1pd0 11z0 1qN0 WL0 1qp0 Xb0 1qp0 Xb0 1qp0 11z0 1lB0 11z0 1qN0 11z0 1iN0 16n0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4","Europe/Ulyanovsk|LMT +03 +04 +05 +02|-3d.A -30 -40 -50 -20|01232323232323232321214121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0","Europe/Uzhgorod|CET CEST MSK MSD EET EEST|-10 -20 -30 -40 -20 -30|010101023232323232323232320454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-1cqL0 6i00 WM0 1fA0 1cM0 1ml0 1Cp0 1r3W0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 1Nf0 2pw0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e4","Europe/Vienna|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 3KM0 14o0 LA00 6i00 WM0 1fA0 1cM0 1cM0 1cM0 400 2qM0 1a00 1cM0 1cM0 1io0 17c0 1gHa0 19X0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|18e5","Europe/Vilnius|WMT KMT CET EET MSK CEST MSD EEST|-1o -1z.A -10 -20 -30 -20 -40 -30|012324525254646464646464646473737373737373737352537373737373737373737373737373737373737373737373737373737373737373737373|-293do 6ILM.o 1Ooz.A zz0 Mfd0 29W0 3is0 WM0 1fA0 1cM0 LV0 1tgL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11B0 1o00 11A0 1qM0 8io0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4","Europe/Volgograd|LMT +03 +04 +05|-2V.E -30 -40 -50|01232323232323232121212121212121212121212121212121212121212121|-21IqV.E psLV.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5","Europe/Warsaw|WMT CET CEST EET EEST|-1o -10 -20 -20 -30|012121234312121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ctdo 1LXo 11d0 1iO0 11A0 1o00 11A0 1on0 11A0 6zy0 HWP0 5IM0 WM0 1fA0 1cM0 1dz0 1mL0 1en0 15B0 1aq0 1nA0 11A0 1io0 17c0 1fA0 1a00 iDX0 LA0 1cM0 1cM0 1C00 Oo0 1cM0 1cM0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1C00 LA0 uso0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5","Europe/Zaporozhye|+0220 EET MSK CEST CET MSD EEST|-2k -20 -30 -20 -10 -40 -30|01234342525252525252525252526161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc2k eUok rdb0 2RE0 WM0 1fA0 8m0 1v9a0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cK0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|77e4","HST|HST|a0|0|","Indian/Chagos|LMT +05 +06|-4N.E -50 -60|012|-2xosN.E 3AGLN.E|30e2","Indian/Cocos|+0630|-6u|0||596","Indian/Kerguelen|-00 +05|0 -50|01|-MG00|130","Indian/Mahe|LMT +04|-3F.M -40|01|-2yO3F.M|79e3","Indian/Maldives|MMT +05|-4S -50|01|-olgS|35e4","Indian/Mauritius|LMT +04 +05|-3O -40 -50|012121|-2xorO 34unO 14L0 12kr0 11z0|15e4","Indian/Reunion|LMT +04|-3F.Q -40|01|-2mDDF.Q|84e4","Pacific/Kwajalein|+11 -12 +12|-b0 c0 -c0|012|-AX0 W9X0|14e3","MET|MET MEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00","MST|MST|70|0|","MST7MDT|MST MDT MWT MPT|70 60 60 60|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","Pacific/Chatham|+1215 +1245 +1345|-cf -cJ -dJ|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-WqAf 1adef IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|600","Pacific/Apia|LMT -1130 -11 -10 +14 +13|bq.U bu b0 a0 -e0 -d0|01232345454545454545454545454545454545454545454545454545454|-2nDMx.4 1yW03.4 2rRbu 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|37e3","Pacific/Bougainville|+10 +09 +11|-a0 -90 -b0|0102|-16Wy0 7CN0 2MQp0|18e4","Pacific/Efate|LMT +11 +12|-bd.g -b0 -c0|0121212121212121212121|-2l9nd.g 2Szcd.g 1cL0 1oN0 10L0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 Lz0 1Nd0 An0|66e3","Pacific/Enderbury|-12 -11 +13|c0 b0 -d0|012|nIc0 B7X0|1","Pacific/Fakaofo|-11 +13|b0 -d0|01|1Gfn0|483","Pacific/Fiji|LMT +12 +13|-bT.I -c0 -d0|0121212121212121212121212121212121212121212121212121212121212121|-2bUzT.I 3m8NT.I LA0 1EM0 IM0 nJc0 LA0 1o00 Rc0 1wo0 Ao0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0|88e4","Pacific/Galapagos|LMT -05 -06|5W.o 50 60|01212|-1yVS1.A 2dTz1.A gNd0 rz0|25e3","Pacific/Gambier|LMT -09|8X.M 90|01|-2jof0.c|125","Pacific/Guadalcanal|LMT +11|-aD.M -b0|01|-2joyD.M|11e4","Pacific/Guam|GST ChST|-a0 -a0|01|1fpq0|17e4","Pacific/Honolulu|HST HDT HST|au 9u a0|010102|-1thLu 8x0 lef0 8Pz0 46p0|37e4","Pacific/Kiritimati|-1040 -10 +14|aE a0 -e0|012|nIaE B7Xk|51e2","Pacific/Kosrae|+11 +12|-b0 -c0|010|-AX0 1bdz0|66e2","Pacific/Majuro|+11 +12|-b0 -c0|01|-AX0|28e3","Pacific/Marquesas|LMT -0930|9i 9u|01|-2joeG|86e2","Pacific/Pago_Pago|LMT SST|bm.M b0|01|-2nDMB.c|37e2","Pacific/Nauru|LMT +1130 +09 +12|-b7.E -bu -90 -c0|01213|-1Xdn7.E PvzB.E 5RCu 1ouJu|10e3","Pacific/Niue|-1120 -1130 -11|bk bu b0|012|-KfME 17y0a|12e2","Pacific/Norfolk|+1112 +1130 +1230 +11|-bc -bu -cu -b0|01213|-Kgbc W01G On0 1COp0|25e4","Pacific/Noumea|LMT +11 +12|-b5.M -b0 -c0|01212121|-2l9n5.M 2EqM5.M xX0 1PB0 yn0 HeP0 Ao0|98e3","Pacific/Pitcairn|-0830 -08|8u 80|01|18Vku|56","Pacific/Rarotonga|-1030 -0930 -10|au 9u a0|012121212121212121212121212|lyWu IL0 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu|13e3","Pacific/Tahiti|LMT -10|9W.g a0|01|-2joe1.I|18e4","Pacific/Tongatapu|+1220 +13 +14|-ck -d0 -e0|0121212121|-1aB0k 2n5dk 15A0 1wo0 xz0 1Q10 xz0 zWN0 s00|75e3","PST8PDT|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0","WET|WET WEST|0 -10|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00"],"links":["Africa/Abidjan|Africa/Bamako","Africa/Abidjan|Africa/Banjul","Africa/Abidjan|Africa/Conakry","Africa/Abidjan|Africa/Dakar","Africa/Abidjan|Africa/Freetown","Africa/Abidjan|Africa/Lome","Africa/Abidjan|Africa/Nouakchott","Africa/Abidjan|Africa/Ouagadougou","Africa/Abidjan|Africa/Timbuktu","Africa/Abidjan|Atlantic/St_Helena","Africa/Cairo|Egypt","Africa/Johannesburg|Africa/Maseru","Africa/Johannesburg|Africa/Mbabane","Africa/Lagos|Africa/Bangui","Africa/Lagos|Africa/Brazzaville","Africa/Lagos|Africa/Douala","Africa/Lagos|Africa/Kinshasa","Africa/Lagos|Africa/Libreville","Africa/Lagos|Africa/Luanda","Africa/Lagos|Africa/Malabo","Africa/Lagos|Africa/Niamey","Africa/Lagos|Africa/Porto-Novo","Africa/Maputo|Africa/Blantyre","Africa/Maputo|Africa/Bujumbura","Africa/Maputo|Africa/Gaborone","Africa/Maputo|Africa/Harare","Africa/Maputo|Africa/Kigali","Africa/Maputo|Africa/Lubumbashi","Africa/Maputo|Africa/Lusaka","Africa/Nairobi|Africa/Addis_Ababa","Africa/Nairobi|Africa/Asmara","Africa/Nairobi|Africa/Asmera","Africa/Nairobi|Africa/Dar_es_Salaam","Africa/Nairobi|Africa/Djibouti","Africa/Nairobi|Africa/Kampala","Africa/Nairobi|Africa/Mogadishu","Africa/Nairobi|Indian/Antananarivo","Africa/Nairobi|Indian/Comoro","Africa/Nairobi|Indian/Mayotte","Africa/Tripoli|Libya","America/Adak|America/Atka","America/Adak|US/Aleutian","America/Anchorage|US/Alaska","America/Argentina/Buenos_Aires|America/Buenos_Aires","America/Argentina/Catamarca|America/Argentina/ComodRivadavia","America/Argentina/Catamarca|America/Catamarca","America/Argentina/Cordoba|America/Cordoba","America/Argentina/Cordoba|America/Rosario","America/Argentina/Jujuy|America/Jujuy","America/Argentina/Mendoza|America/Mendoza","America/Atikokan|America/Coral_Harbour","America/Chicago|US/Central","America/Curacao|America/Aruba","America/Curacao|America/Kralendijk","America/Curacao|America/Lower_Princes","America/Denver|America/Shiprock","America/Denver|Navajo","America/Denver|US/Mountain","America/Detroit|US/Michigan","America/Edmonton|Canada/Mountain","America/Fort_Wayne|America/Indiana/Indianapolis","America/Fort_Wayne|America/Indianapolis","America/Fort_Wayne|US/East-Indiana","America/Halifax|Canada/Atlantic","America/Havana|Cuba","America/Indiana/Knox|America/Knox_IN","America/Indiana/Knox|US/Indiana-Starke","America/Jamaica|Jamaica","America/Kentucky/Louisville|America/Louisville","America/Los_Angeles|US/Pacific","America/Los_Angeles|US/Pacific-New","America/Manaus|Brazil/West","America/Mazatlan|Mexico/BajaSur","America/Mexico_City|Mexico/General","America/New_York|US/Eastern","America/Noronha|Brazil/DeNoronha","America/Panama|America/Cayman","America/Phoenix|US/Arizona","America/Port_of_Spain|America/Anguilla","America/Port_of_Spain|America/Antigua","America/Port_of_Spain|America/Dominica","America/Port_of_Spain|America/Grenada","America/Port_of_Spain|America/Guadeloupe","America/Port_of_Spain|America/Marigot","America/Port_of_Spain|America/Montserrat","America/Port_of_Spain|America/St_Barthelemy","America/Port_of_Spain|America/St_Kitts","America/Port_of_Spain|America/St_Lucia","America/Port_of_Spain|America/St_Thomas","America/Port_of_Spain|America/St_Vincent","America/Port_of_Spain|America/Tortola","America/Port_of_Spain|America/Virgin","America/Regina|Canada/Saskatchewan","America/Rio_Branco|America/Porto_Acre","America/Rio_Branco|Brazil/Acre","America/Santiago|Chile/Continental","America/Sao_Paulo|Brazil/East","America/St_Johns|Canada/Newfoundland","America/Tijuana|America/Ensenada","America/Tijuana|America/Santa_Isabel","America/Tijuana|Mexico/BajaNorte","America/Toronto|America/Montreal","America/Toronto|Canada/Eastern","America/Vancouver|Canada/Pacific","America/Whitehorse|Canada/Yukon","America/Winnipeg|Canada/Central","Asia/Ashgabat|Asia/Ashkhabad","Asia/Bangkok|Asia/Phnom_Penh","Asia/Bangkok|Asia/Vientiane","Asia/Dhaka|Asia/Dacca","Asia/Dubai|Asia/Muscat","Asia/Ho_Chi_Minh|Asia/Saigon","Asia/Hong_Kong|Hongkong","Asia/Jerusalem|Asia/Tel_Aviv","Asia/Jerusalem|Israel","Asia/Kathmandu|Asia/Katmandu","Asia/Kolkata|Asia/Calcutta","Asia/Kuala_Lumpur|Asia/Singapore","Asia/Kuala_Lumpur|Singapore","Asia/Macau|Asia/Macao","Asia/Makassar|Asia/Ujung_Pandang","Asia/Nicosia|Europe/Nicosia","Asia/Qatar|Asia/Bahrain","Asia/Rangoon|Asia/Yangon","Asia/Riyadh|Asia/Aden","Asia/Riyadh|Asia/Kuwait","Asia/Seoul|ROK","Asia/Shanghai|Asia/Chongqing","Asia/Shanghai|Asia/Chungking","Asia/Shanghai|Asia/Harbin","Asia/Shanghai|PRC","Asia/Taipei|ROC","Asia/Tehran|Iran","Asia/Thimphu|Asia/Thimbu","Asia/Tokyo|Japan","Asia/Ulaanbaatar|Asia/Ulan_Bator","Asia/Urumqi|Asia/Kashgar","Atlantic/Faroe|Atlantic/Faeroe","Atlantic/Reykjavik|Iceland","Atlantic/South_Georgia|Etc/GMT+2","Australia/Adelaide|Australia/South","Australia/Brisbane|Australia/Queensland","Australia/Broken_Hill|Australia/Yancowinna","Australia/Darwin|Australia/North","Australia/Hobart|Australia/Tasmania","Australia/Lord_Howe|Australia/LHI","Australia/Melbourne|Australia/Victoria","Australia/Perth|Australia/West","Australia/Sydney|Australia/ACT","Australia/Sydney|Australia/Canberra","Australia/Sydney|Australia/NSW","Etc/GMT-0|Etc/GMT","Etc/GMT-0|Etc/GMT+0","Etc/GMT-0|Etc/GMT0","Etc/GMT-0|Etc/Greenwich","Etc/GMT-0|GMT","Etc/GMT-0|GMT+0","Etc/GMT-0|GMT-0","Etc/GMT-0|GMT0","Etc/GMT-0|Greenwich","Etc/UCT|UCT","Etc/UTC|Etc/Universal","Etc/UTC|Etc/Zulu","Etc/UTC|UTC","Etc/UTC|Universal","Etc/UTC|Zulu","Europe/Belgrade|Europe/Ljubljana","Europe/Belgrade|Europe/Podgorica","Europe/Belgrade|Europe/Sarajevo","Europe/Belgrade|Europe/Skopje","Europe/Belgrade|Europe/Zagreb","Europe/Chisinau|Europe/Tiraspol","Europe/Dublin|Eire","Europe/Helsinki|Europe/Mariehamn","Europe/Istanbul|Asia/Istanbul","Europe/Istanbul|Turkey","Europe/Lisbon|Portugal","Europe/London|Europe/Belfast","Europe/London|Europe/Guernsey","Europe/London|Europe/Isle_of_Man","Europe/London|Europe/Jersey","Europe/London|GB","Europe/London|GB-Eire","Europe/Moscow|W-SU","Europe/Oslo|Arctic/Longyearbyen","Europe/Oslo|Atlantic/Jan_Mayen","Europe/Prague|Europe/Bratislava","Europe/Rome|Europe/San_Marino","Europe/Rome|Europe/Vatican","Europe/Warsaw|Poland","Europe/Zurich|Europe/Busingen","Europe/Zurich|Europe/Vaduz","Indian/Christmas|Etc/GMT-7","Pacific/Auckland|Antarctica/McMurdo","Pacific/Auckland|Antarctica/South_Pole","Pacific/Auckland|NZ","Pacific/Chatham|NZ-CHAT","Pacific/Easter|Chile/EasterIsland","Pacific/Guam|Pacific/Saipan","Pacific/Honolulu|Pacific/Johnston","Pacific/Honolulu|US/Hawaii","Pacific/Kwajalein|Kwajalein","Pacific/Pago_Pago|Pacific/Midway","Pacific/Pago_Pago|Pacific/Samoa","Pacific/Pago_Pago|US/Samoa","Pacific/Palau|Etc/GMT-9","Pacific/Pohnpei|Etc/GMT-11","Pacific/Pohnpei|Pacific/Ponape","Pacific/Port_Moresby|Etc/GMT-10","Pacific/Port_Moresby|Pacific/Chuuk","Pacific/Port_Moresby|Pacific/Truk","Pacific/Port_Moresby|Pacific/Yap","Pacific/Tarawa|Etc/GMT-12","Pacific/Tarawa|Pacific/Funafuti","Pacific/Tarawa|Pacific/Wake","Pacific/Tarawa|Pacific/Wallis"]};

/***/ }),

/***/ 2491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(614);


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsFinite = _root_js__WEBPACK_IMPORTED_MODULE_0__["default"].isFinite;

/**
 * Checks if `value` is a finite primitive number.
 *
 * **Note:** This method is based on
 * [`Number.isFinite`](https://mdn.io/Number/isFinite).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
 * @example
 *
 * _.isFinite(3);
 * // => true
 *
 * _.isFinite(Number.MIN_VALUE);
 * // => true
 *
 * _.isFinite(Infinity);
 * // => false
 *
 * _.isFinite('3');
 * // => false
 */
function isFinite(value) {
  return typeof value == 'number' && nativeIsFinite(value);
}

/* harmony default export */ __webpack_exports__["default"] = (isFinite);


/***/ }),

/***/ 2494:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  Set: __webpack_require__(2495),
  Static: __webpack_require__(2497)
};

/***/ }),

/***/ 2495:
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = __webpack_require__(387);
var foundationApi = __webpack_require__(719);
var Notification = __webpack_require__(2496);
var Animation = __webpack_require__(850);
var createReactClass = __webpack_require__(774);

var NotificationSet = createReactClass({
  displayName: 'NotificationSet',

  getInitialState: function getInitialState() {
    return { notifications: [] };
  },
  componentDidMount: function componentDidMount() {
    foundationApi.subscribe(this.props.id, function (name, msg) {
      if (msg === 'clearall') {
        this.clearAll();
      } else {
        this.addNotification(msg);
      }
    }.bind(this));
  },
  addNotification: function addNotification(notification) {
    notification.id = foundationApi.generateUuid();
    var notifications = this.state.notifications.concat(notification);
    this.setState({
      notifications: notifications
    });
  },
  removeNotifcation: function removeNotifcation(id) {
    return function (e) {
      var notifications = [];
      this.state.notifications.forEach(function (notification) {
        if (notification.id !== id) {
          notifications.push(notification);
        }
      });
      this.setState({
        notifications: notifications
      });
      e.preventDefault();
    }.bind(this);
  },
  clearAll: function clearAll() {
    this.setState({ notifications: [] });
  },
  render: function render() {
    var notifications = this.state.notifications.map(function (notification) {
      return React.createElement(
        Notification,
        _extends({ key: notification.id }, notification, { closeHandler: this.removeNotifcation(notification.id), className: 'is-active' }),
        notification.content
      );
    }.bind(this));
    return React.createElement(
      'div',
      null,
      notifications
    );
  }
});

module.exports = NotificationSet;

/***/ }),

/***/ 2496:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(387);
var createReactClass = __webpack_require__(774);

var Notification = createReactClass({
  displayName: 'Notification',

  getDefaultProps: function getDefaultProps() {
    return {
      position: 'top-right',
      color: 'success',
      title: null,
      image: null,
      content: null,
      wrapperElement: "p"
    };
  },
  render: function render() {
    var classes = 'notification ' + this.props.position + ' ' + this.props.color;
    classes += ' ' + (this.props.className || '');
    var imageNode = null;
    if (this.props.image) {
      imageNode = React.createElement(
        'div',
        { className: 'notification-icon' },
        React.createElement('img', { src: '{{ image }}' })
      );
    }
    return React.createElement(
      'div',
      { id: this.props.id, 'data-closable': true, className: classes },
      React.createElement(
        'a',
        { href: '#', className: 'close-button', onClick: this.props.closeHandler },
        '\xD7'
      ),
      imageNode,
      React.createElement(
        'div',
        { className: 'notification-content' },
        React.createElement(
          'h1',
          null,
          this.props.title
        ),
        React.createElement(this.props.wrapperElement, null, this.props.children)
      )
    );
  }
});

module.exports = Notification;

/***/ }),

/***/ 2497:
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = __webpack_require__(387);
var classnames = __webpack_require__(854);
var foundationApi = __webpack_require__(719);
var Animation = __webpack_require__(850);
var Notification = __webpack_require__(2496);
var createReactClass = __webpack_require__(774);

var NotificationStatic = createReactClass({
  displayName: 'NotificationStatic',

  getInitialState: function getInitialState() {
    return { open: false };
  },
  componentDidMount: function componentDidMount() {
    foundationApi.subscribe(this.props.id, function (name, msg) {
      if (msg === 'open') {
        this.setState({ open: true });
      } else if (msg === 'close') {
        this.setState({ open: false });
      }
    }.bind(this));
  },
  componentWillUnmount: function componentWillUnmount() {
    foundationApi.unsubscribe(this.props.id);
  },
  closeHandler: function closeHandler(e) {
    this.setState({ open: false });
    e.preventDefault();
    e.stopPropagation();
  },
  render: function render() {
    return React.createElement(
      Animation,
      { active: this.state.open, animationIn: 'fadeIn', animationOut: 'fadeOut' },
      React.createElement(
        Notification,
        _extends({}, this.props, { closeHandler: this.closeHandler }),
        this.props.children
      )
    );
  }
});

module.exports = NotificationStatic;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35leGNoYW5nZS5lNGU5NjI5NmJmOGU2NzBiMTc1MS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9icm93c2VyLWxvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3RpY2t5LXRhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zdGlja3ktdGFibGUvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3RpY2t5LXRhYmxlL2Rpc3QvVGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0aWNreS10YWJsZS9kaXN0L1Jvdy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3RpY2t5LXRhYmxlL2Rpc3QvQ2VsbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZXZlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyMi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyMi9zcmMvY29tcG9uZW50cy9EYXRlUGlja2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC10ZXRoZXIvbGliL3JlYWN0LXRldGhlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtdGV0aGVyL2xpYi9UZXRoZXJDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RldGhlci9kaXN0L2pzL3RldGhlci5qcyIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGVwaWNrZXIyL3NyYy9jb21wb25lbnRzL0NhbGVuZGFyLmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZXBpY2tlcjIvc3JjL2NvbXBvbmVudHMvRGF5c1ZpZXdIZWFkaW5nLmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZXBpY2tlcjIvc3JjL3V0aWxzL3BlcnNpYW4uanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyMi9zcmMvdXRpbHMvYXNzZXRzLmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZXBpY2tlcjIvc3JjL2NvbXBvbmVudHMvRGF5c09mV2Vlay5qcyIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGVwaWNrZXIyL3NyYy9jb21wb25lbnRzL01vbnRoU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyMi9zcmMvY29tcG9uZW50cy9Nb250aHNWaWV3SGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGVwaWNrZXIyL3NyYy9jb21wb25lbnRzL0RheS5qcyIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGVwaWNrZXIyL3NyYy91dGlscy9tb21lbnQtaGVscGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1vbmNsaWNrb3V0c2lkZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGVwaWNrZXIyL3NyYy9jb21wb25lbnRzL0RlZmF1bHRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyMi9zcmMvY29tcG9uZW50cy9DdXN0b21UaW1lUGlja2VyLmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZXBpY2tlcjIvc3JjL2NvbXBvbmVudHMvVGltZVBpY2tlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGVwaWNrZXIyL3NyYy9jb21wb25lbnRzL1RpbWVQaWNrZXIvVGltZVBpY2tlci5qcyIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGVwaWNrZXIyL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2xpYi9Eb20vYWRkRXZlbnRMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGVwaWNrZXIyL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL1BvcHVwLmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZXBpY2tlcjIvbm9kZV9tb2R1bGVzL3JjLXRyaWdnZXIvZXMvUG9wdXBJbm5lci5qcyIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWRhdGVwaWNrZXIyL25vZGVfbW9kdWxlcy9yYy10cmlnZ2VyL2VzL0xhenlSZW5kZXJCb3guanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyMi9ub2RlX21vZHVsZXMvcmMtdHJpZ2dlci9lcy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdXRpbC9saWIvZ2V0Q29udGFpbmVyUmVuZGVyTWl4aW4uanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyMi9zcmMvY29tcG9uZW50cy9UaW1lUGlja2VyL1BhbmVsLmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZXBpY2tlcjIvc3JjL2NvbXBvbmVudHMvVGltZVBpY2tlci9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyMi9zcmMvY29tcG9uZW50cy9UaW1lUGlja2VyL0NvbWJvYm94LmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZGF0ZXBpY2tlcjIvc3JjL2NvbXBvbmVudHMvVGltZVBpY2tlci9TZWxlY3QuanMiLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1kYXRlcGlja2VyMi9zcmMvY29tcG9uZW50cy9UaW1lUGlja2VyL3BsYWNlbWVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL21vbWVudC10aW1lem9uZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9tZW50LXRpbWV6b25lL21vbWVudC10aW1lem9uZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL2lzRmluaXRlLmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZm91bmRhdGlvbi1hcHBzL3NyYy9ub3RpZmljYXRpb24vaW5kZXguanN4Iiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZm91bmRhdGlvbi1hcHBzL3NyYy9ub3RpZmljYXRpb24vc2V0LmpzeCIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWZvdW5kYXRpb24tYXBwcy9zcmMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1mb3VuZGF0aW9uLWFwcHMvc3JjL25vdGlmaWNhdGlvbi9zdGF0aWMuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnJvd3NlckxvY2FsZSAoKSB7XG4gIHZhciBsYW5nXG5cbiAgaWYgKG5hdmlnYXRvci5sYW5ndWFnZXMgJiYgbmF2aWdhdG9yLmxhbmd1YWdlcy5sZW5ndGgpIHtcbiAgICAvLyBsYXRlc3QgdmVyc2lvbnMgb2YgQ2hyb21lIGFuZCBGaXJlZm94IHNldCB0aGlzIGNvcnJlY3RseVxuICAgIGxhbmcgPSBuYXZpZ2F0b3IubGFuZ3VhZ2VzWzBdXG4gIH0gZWxzZSBpZiAobmF2aWdhdG9yLnVzZXJMYW5ndWFnZSkge1xuICAgIC8vIElFIG9ubHlcbiAgICBsYW5nID0gbmF2aWdhdG9yLnVzZXJMYW5ndWFnZVxuICB9IGVsc2Uge1xuICAgIC8vIGxhdGVzdCB2ZXJzaW9ucyBvZiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkgc2V0IHRoaXMgY29ycmVjdGx5XG4gICAgbGFuZyA9IG5hdmlnYXRvci5sYW5ndWFnZVxuICB9XG5cbiAgcmV0dXJuIGxhbmdcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2luZGV4Jyk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFsnZXhwb3J0cycsICdyZWFjdCcsICdwcm9wLXR5cGVzJywgJy4vVGFibGUnLCAnLi9Sb3cnLCAnLi9DZWxsJywgJ2VsZW1lbnQtcmVzaXplLWV2ZW50J10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKCdyZWFjdCcpLCByZXF1aXJlKCdwcm9wLXR5cGVzJyksIHJlcXVpcmUoJy4vVGFibGUnKSwgcmVxdWlyZSgnLi9Sb3cnKSwgcmVxdWlyZSgnLi9DZWxsJyksIHJlcXVpcmUoJ2VsZW1lbnQtcmVzaXplLWV2ZW50JykpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QuZXhwb3J0cywgZ2xvYmFsLnJlYWN0LCBnbG9iYWwucHJvcFR5cGVzLCBnbG9iYWwuVGFibGUsIGdsb2JhbC5Sb3csIGdsb2JhbC5DZWxsLCBnbG9iYWwuZWxlbWVudFJlc2l6ZUV2ZW50KTtcbiAgICBnbG9iYWwuaW5kZXggPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIF9yZWFjdCwgX3Byb3BUeXBlcywgX1RhYmxlLCBfUm93LCBfQ2VsbCwgZWxlbWVudFJlc2l6ZUV2ZW50KSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgZXhwb3J0cy5DZWxsID0gZXhwb3J0cy5Sb3cgPSBleHBvcnRzLlRhYmxlID0gZXhwb3J0cy5TdGlja3lUYWJsZSA9IHVuZGVmaW5lZDtcblxuICB2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuICB2YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG4gIHZhciBfVGFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGFibGUpO1xuXG4gIHZhciBfUm93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Jvdyk7XG5cbiAgdmFyIF9DZWxsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NlbGwpO1xuXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gIH1cblxuICB2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gICAgfTtcbiAgfSgpO1xuXG4gIGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgICBpZiAoIXNlbGYpIHtcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICAgIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICAgIH1cblxuICAgIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbiAgfVxuXG4gIHZhciBTdGlja3lUYWJsZSA9IGZ1bmN0aW9uIChfUHVyZUNvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhTdGlja3lUYWJsZSwgX1B1cmVDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gU3RpY2t5VGFibGUocHJvcHMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGlja3lUYWJsZSk7XG5cbiAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTdGlja3lUYWJsZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFN0aWNreVRhYmxlKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICBfdGhpcy5zZXRTY3JvbGxEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5zdXBwcmVzc1Njcm9sbFggPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuc3VwcHJlc3NTY3JvbGxZID0gZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIF90aGlzLnNjcm9sbERhdGEgPSB7XG4gICAgICAgICAgc2Nyb2xsVG9wOiBfdGhpcy55U2Nyb2xsYmFyLnNjcm9sbFRvcCxcbiAgICAgICAgICBzY3JvbGxIZWlnaHQ6IF90aGlzLnlTY3JvbGxiYXIuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgIGNsaWVudEhlaWdodDogX3RoaXMueVNjcm9sbGJhci5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgc2Nyb2xsTGVmdDogX3RoaXMueFNjcm9sbGJhci5zY3JvbGxMZWZ0LFxuICAgICAgICAgIHNjcm9sbFdpZHRoOiBfdGhpcy54U2Nyb2xsYmFyLnNjcm9sbFdpZHRoLFxuICAgICAgICAgIGNsaWVudFdpZHRoOiBfdGhpcy54U2Nyb2xsYmFyLmNsaWVudFdpZHRoXG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vblNjcm9sbEJhclggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghX3RoaXMuc3VwcHJlc3NTY3JvbGxYKSB7XG4gICAgICAgICAgX3RoaXMuc2Nyb2xsRGF0YS5zY3JvbGxMZWZ0ID0gX3RoaXMueFdyYXBwZXIuc2Nyb2xsTGVmdCA9IF90aGlzLnhTY3JvbGxiYXIuc2Nyb2xsTGVmdDtcbiAgICAgICAgICBfdGhpcy5zdXBwcmVzc1Njcm9sbFggPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLmhhbmRsZVNjcm9sbCgpO1xuICAgICAgICAgIF90aGlzLnN1cHByZXNzU2Nyb2xsWCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vblNjcm9sbEJhclkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghX3RoaXMuc3VwcHJlc3NTY3JvbGxZKSB7XG4gICAgICAgICAgX3RoaXMuc2Nyb2xsRGF0YS5zY3JvbGxUb3AgPSBfdGhpcy55V3JhcHBlci5zY3JvbGxUb3AgPSBfdGhpcy55U2Nyb2xsYmFyLnNjcm9sbFRvcDtcbiAgICAgICAgICBfdGhpcy5zdXBwcmVzc1Njcm9sbFkgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLmhhbmRsZVNjcm9sbCgpO1xuICAgICAgICAgIF90aGlzLnN1cHByZXNzU2Nyb2xsWSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vblNjcm9sbFggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzY3JvbGxMZWZ0ID0gTWF0aC5tYXgoX3RoaXMueFdyYXBwZXIuc2Nyb2xsTGVmdCwgMCk7XG4gICAgICAgIF90aGlzLnN0aWNreUhlYWRlci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKCcgKyAtMSAqIHNjcm9sbExlZnQgKyAncHgsIDApJztcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnNjcm9sbFhTY3JvbGxiYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghX3RoaXMuc3VwcHJlc3NTY3JvbGxYKSB7XG4gICAgICAgICAgX3RoaXMuc2Nyb2xsRGF0YS5zY3JvbGxMZWZ0ID0gX3RoaXMueFNjcm9sbGJhci5zY3JvbGxMZWZ0ID0gX3RoaXMueFdyYXBwZXIuc2Nyb2xsTGVmdDtcbiAgICAgICAgICBfdGhpcy5zdXBwcmVzc1Njcm9sbFggPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLmhhbmRsZVNjcm9sbCgpO1xuICAgICAgICAgIF90aGlzLnN1cHByZXNzU2Nyb2xsWCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5zY3JvbGxZU2Nyb2xsYmFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIV90aGlzLnN1cHByZXNzU2Nyb2xsWSkge1xuICAgICAgICAgIF90aGlzLnNjcm9sbERhdGEuc2Nyb2xsVG9wID0gX3RoaXMueVNjcm9sbGJhci5zY3JvbGxUb3AgPSBfdGhpcy55V3JhcHBlci5zY3JvbGxUb3A7XG4gICAgICAgICAgX3RoaXMuc3VwcHJlc3NTY3JvbGxZID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5oYW5kbGVTY3JvbGwoKTtcbiAgICAgICAgICBfdGhpcy5zdXBwcmVzc1Njcm9sbFkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuaGFuZGxlU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMucHJvcHMub25TY3JvbGwpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vblNjcm9sbChfdGhpcy5zY3JvbGxEYXRhKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMub25SZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLnNldFNjcm9sbEJhckRpbXMoKTtcbiAgICAgICAgX3RoaXMuc2V0U2Nyb2xsQmFyV3JhcHBlckRpbXMoKTtcblxuICAgICAgICBfdGhpcy5zZXRSb3dIZWlnaHRzKCk7XG4gICAgICAgIF90aGlzLnNldENvbHVtbldpZHRocygpO1xuXG4gICAgICAgIF90aGlzLnNldFNjcm9sbERhdGEoKTtcbiAgICAgICAgX3RoaXMuaGFuZGxlU2Nyb2xsKCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5zZXRTY3JvbGxCYXJXcmFwcGVyRGltcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMueFNjcm9sbGJhci5zdHlsZS53aWR0aCA9ICdjYWxjKDEwMCUgLSAnICsgX3RoaXMueVNjcm9sbFNpemUgKyAncHgpJztcbiAgICAgICAgX3RoaXMueVNjcm9sbGJhci5zdHlsZS5oZWlnaHQgPSAnY2FsYygxMDAlIC0gJyArIF90aGlzLnN0aWNreUhlYWRlci5vZmZzZXRIZWlnaHQgKyAncHgpJztcbiAgICAgICAgX3RoaXMueVNjcm9sbGJhci5zdHlsZS50b3AgPSBfdGhpcy5zdGlja3lIZWFkZXIub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMCkgKyAnJztcblxuICAgICAgX3RoaXMucm93Q291bnQgPSAwO1xuICAgICAgX3RoaXMuY29sdW1uQ291bnQgPSAwO1xuICAgICAgX3RoaXMueFNjcm9sbFNpemUgPSAwO1xuICAgICAgX3RoaXMueVNjcm9sbFNpemUgPSAwO1xuXG4gICAgICBfdGhpcy5zdGlja3lIZWFkZXJDb3VudCA9IHByb3BzLnN0aWNreUhlYWRlckNvdW50ID09PSAwID8gMCA6IF90aGlzLnN0aWNreUhlYWRlckNvdW50IHx8IDE7XG5cbiAgICAgIF90aGlzLmlzRmlyZWZveCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgPiAtMTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU3RpY2t5VGFibGUsIFt7XG4gICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMudGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RpY2t5LXRhYmxlLScgKyB0aGlzLmlkKTtcblxuICAgICAgICBpZiAodGhpcy50YWJsZSkge1xuICAgICAgICAgIHRoaXMucmVhbFRhYmxlID0gdGhpcy50YWJsZS5xdWVyeVNlbGVjdG9yKCcjc3RpY2t5LXRhYmxlLXgtd3JhcHBlcicpLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgdGhpcy54U2Nyb2xsYmFyID0gdGhpcy50YWJsZS5xdWVyeVNlbGVjdG9yKCcjeC1zY3JvbGxiYXInKTtcbiAgICAgICAgICB0aGlzLnlTY3JvbGxiYXIgPSB0aGlzLnRhYmxlLnF1ZXJ5U2VsZWN0b3IoJyN5LXNjcm9sbGJhcicpO1xuICAgICAgICAgIHRoaXMueFdyYXBwZXIgPSB0aGlzLnRhYmxlLnF1ZXJ5U2VsZWN0b3IoJyNzdGlja3ktdGFibGUteC13cmFwcGVyJyk7XG4gICAgICAgICAgdGhpcy55V3JhcHBlciA9IHRoaXMudGFibGUucXVlcnlTZWxlY3RvcignI3N0aWNreS10YWJsZS15LXdyYXBwZXInKTtcbiAgICAgICAgICB0aGlzLnN0aWNreUhlYWRlciA9IHRoaXMudGFibGUucXVlcnlTZWxlY3RvcignI3N0aWNreS10YWJsZS1oZWFkZXInKTtcbiAgICAgICAgICB0aGlzLnN0aWNreUNvbHVtbiA9IHRoaXMudGFibGUucXVlcnlTZWxlY3RvcignI3N0aWNreS10YWJsZS1jb2x1bW4nKTtcbiAgICAgICAgICB0aGlzLnN0aWNreUNvcm5lciA9IHRoaXMudGFibGUucXVlcnlTZWxlY3RvcignI3N0aWNreS10YWJsZS1jb3JuZXInKTtcbiAgICAgICAgICB0aGlzLnNldFNjcm9sbERhdGEoKTtcblxuICAgICAgICAgIGVsZW1lbnRSZXNpemVFdmVudCh0aGlzLnJlYWxUYWJsZSwgdGhpcy5vblJlc2l6ZSk7XG5cbiAgICAgICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgICAgICAgc2V0VGltZW91dCh0aGlzLm9uUmVzaXplKTtcbiAgICAgICAgICB0aGlzLmFkZFNjcm9sbEJhckV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy50YWJsZSkge1xuICAgICAgICAgIHRoaXMueFdyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbFgpO1xuICAgICAgICAgIHRoaXMueFdyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxYU2Nyb2xsYmFyKTtcbiAgICAgICAgICB0aGlzLnhTY3JvbGxiYXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbEJhclgpO1xuXG4gICAgICAgICAgdGhpcy55V3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbFlTY3JvbGxiYXIpO1xuICAgICAgICAgIHRoaXMueVNjcm9sbGJhci5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsQmFyWSk7XG5cbiAgICAgICAgICBlbGVtZW50UmVzaXplRXZlbnQudW5iaW5kKHRoaXMucmVhbFRhYmxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2FkZFNjcm9sbEJhckV2ZW50SGFuZGxlcnMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFNjcm9sbEJhckV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMueFdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbFgpO1xuXG4gICAgICAgIC8vWCBTY3JvbGxiYXJzXG4gICAgICAgIHRoaXMueFdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxYU2Nyb2xsYmFyKTtcbiAgICAgICAgdGhpcy54U2Nyb2xsYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGxCYXJYKTtcblxuICAgICAgICAvL1kgU2Nyb2xsYmFyc1xuICAgICAgICB0aGlzLnlXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsWVNjcm9sbGJhcik7XG4gICAgICAgIHRoaXMueVNjcm9sbGJhci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsQmFyWSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnc2V0U2Nyb2xsQmFyUGFkZGluZ3MnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFNjcm9sbEJhclBhZGRpbmdzKCkge1xuICAgICAgICB2YXIgc2Nyb2xsUGFkZGluZyA9ICcwcHggMHB4ICcgKyB0aGlzLnhTY3JvbGxTaXplICsgJ3B4IDBweCc7XG4gICAgICAgIHRoaXMudGFibGUuc3R5bGUucGFkZGluZyA9IHNjcm9sbFBhZGRpbmc7XG5cbiAgICAgICAgdmFyIHNjcm9sbFBhZGRpbmcgPSAnMHB4ICcgKyB0aGlzLnlTY3JvbGxTaXplICsgJ3B4IDBweCAwcHgnO1xuICAgICAgICB0aGlzLnhXcmFwcGVyLmZpcnN0Q2hpbGQuc3R5bGUucGFkZGluZyA9IHNjcm9sbFBhZGRpbmc7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnc2V0U2Nyb2xsQmFyRGltcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U2Nyb2xsQmFyRGltcygpIHtcbiAgICAgICAgdGhpcy54U2Nyb2xsU2l6ZSA9IHRoaXMueFNjcm9sbGJhci5vZmZzZXRIZWlnaHQgLSB0aGlzLnhTY3JvbGxiYXIuY2xpZW50SGVpZ2h0O1xuICAgICAgICB0aGlzLnlTY3JvbGxTaXplID0gdGhpcy55U2Nyb2xsYmFyLm9mZnNldFdpZHRoIC0gdGhpcy55U2Nyb2xsYmFyLmNsaWVudFdpZHRoO1xuXG4gICAgICAgIGlmICghdGhpcy5pc0ZpcmVmb3gpIHtcbiAgICAgICAgICB0aGlzLnNldFNjcm9sbEJhclBhZGRpbmdzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgd2lkdGggPSB0aGlzLmdldFNpemUodGhpcy5yZWFsVGFibGUuZmlyc3RDaGlsZCkud2lkdGg7XG4gICAgICAgIHRoaXMueFNjcm9sbGJhci5maXJzdENoaWxkLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuXG4gICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmdldFNpemUodGhpcy5yZWFsVGFibGUpLmhlaWdodCArIHRoaXMueFNjcm9sbFNpemUgLSB0aGlzLnN0aWNreUhlYWRlci5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHRoaXMueVNjcm9sbGJhci5maXJzdENoaWxkLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cbiAgICAgICAgaWYgKHRoaXMueFNjcm9sbFNpemUpIHRoaXMueFNjcm9sbGJhci5zdHlsZS5oZWlnaHQgPSB0aGlzLnhTY3JvbGxTaXplICsgMSArICdweCc7XG4gICAgICAgIGlmICh0aGlzLnlTY3JvbGxTaXplKSB0aGlzLnlTY3JvbGxiYXIuc3R5bGUud2lkdGggPSB0aGlzLnlTY3JvbGxTaXplICsgMSArICdweCc7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnc2V0Um93SGVpZ2h0cycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Um93SGVpZ2h0cygpIHtcbiAgICAgICAgdmFyIHIsIGNlbGxUb0NvcHksIGhlaWdodDtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zdGlja3lDb2x1bW5Db3VudCkge1xuICAgICAgICAgIGZvciAociA9IDA7IHIgPCB0aGlzLnJvd0NvdW50OyByKyspIHtcbiAgICAgICAgICAgIGNlbGxUb0NvcHkgPSB0aGlzLnJlYWxUYWJsZS5jaGlsZE5vZGVzW3JdLmZpcnN0Q2hpbGQ7XG5cbiAgICAgICAgICAgIGlmIChjZWxsVG9Db3B5KSB7XG4gICAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0U2l6ZShjZWxsVG9Db3B5KS5oZWlnaHQ7XG4gICAgICAgICAgICAgIHRoaXMuc3RpY2t5Q29sdW1uLmZpcnN0Q2hpbGQuY2hpbGROb2Rlc1tyXS5maXJzdENoaWxkLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cbiAgICAgICAgICAgICAgaWYgKHIgPT09IDAgJiYgdGhpcy5zdGlja3lDb3JuZXIuZmlyc3RDaGlsZC5jaGlsZE5vZGVzW3JdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGlja3lDb3JuZXIuZmlyc3RDaGlsZC5maXJzdENoaWxkLmZpcnN0Q2hpbGQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3NldENvbHVtbldpZHRocycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Q29sdW1uV2lkdGhzKCkge1xuICAgICAgICB2YXIgYywgY2VsbFRvQ29weSwgY2VsbFN0eWxlLCB3aWR0aCwgY2VsbCwgc3RpY2t5V2lkdGg7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RpY2t5SGVhZGVyQ291bnQpIHtcbiAgICAgICAgICBzdGlja3lXaWR0aCA9IDA7XG5cbiAgICAgICAgICBmb3IgKGMgPSAwOyBjIDwgdGhpcy5jb2x1bW5Db3VudDsgYysrKSB7XG4gICAgICAgICAgICBjZWxsVG9Db3B5ID0gdGhpcy5yZWFsVGFibGUuZmlyc3RDaGlsZC5jaGlsZE5vZGVzW2NdO1xuXG4gICAgICAgICAgICBpZiAoY2VsbFRvQ29weSkge1xuICAgICAgICAgICAgICB3aWR0aCA9IHRoaXMuZ2V0U2l6ZShjZWxsVG9Db3B5KS53aWR0aDtcblxuICAgICAgICAgICAgICBjZWxsID0gdGhpcy50YWJsZS5xdWVyeVNlbGVjdG9yKCcjc3RpY2t5LWhlYWRlci1jZWxsLScgKyBjKTtcblxuICAgICAgICAgICAgICBjZWxsLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICBjZWxsLnN0eWxlLm1pbldpZHRoID0gd2lkdGggKyAncHgnO1xuXG4gICAgICAgICAgICAgIHZhciBmaXhlZENvbHVtbnNIZWFkZXIgPSB0aGlzLnN0aWNreUNvcm5lci5maXJzdENoaWxkLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICAgIGlmIChmaXhlZENvbHVtbnNIZWFkZXIgJiYgZml4ZWRDb2x1bW5zSGVhZGVyLmNoaWxkTm9kZXNbY10pIHtcbiAgICAgICAgICAgICAgICBjZWxsID0gZml4ZWRDb2x1bW5zSGVhZGVyLmNoaWxkTm9kZXNbY107XG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLm1pbldpZHRoID0gd2lkdGggKyAncHgnO1xuXG4gICAgICAgICAgICAgICAgY2VsbCA9IGZpeGVkQ29sdW1uc0hlYWRlci5jaGlsZE5vZGVzW2NdO1xuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5taW5XaWR0aCA9IHdpZHRoICsgJ3B4JztcblxuICAgICAgICAgICAgICAgIHN0aWNreVdpZHRoICs9IHdpZHRoO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zdGlja3lDb2x1bW4uZmlyc3RDaGlsZC5zdHlsZS53aWR0aCA9IHN0aWNreVdpZHRoICsgJ3B4JztcbiAgICAgICAgICB0aGlzLnN0aWNreUNvbHVtbi5maXJzdENoaWxkLnN0eWxlLm1pbldpZHRoID0gc3RpY2t5V2lkdGggKyAncHgnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0U3RpY2t5Q29sdW1ucycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3RpY2t5Q29sdW1ucyhyb3dzKSB7XG4gICAgICAgIHZhciBjb2x1bW5zQ291bnQgPSB0aGlzLnByb3BzLnN0aWNreUNvbHVtbkNvdW50O1xuICAgICAgICB2YXIgY2VsbHM7XG4gICAgICAgIHZhciBzdGlja3lSb3dzID0gW107XG5cbiAgICAgICAgcm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIHIpIHtcbiAgICAgICAgICBjZWxscyA9IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KHJvdy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgICAgICBzdGlja3lSb3dzLnB1c2goX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBfUm93Mi5kZWZhdWx0LFxuICAgICAgICAgICAgX2V4dGVuZHMoe30sIHJvdy5wcm9wcywgeyBpZDogJycsIGtleTogciB9KSxcbiAgICAgICAgICAgIGNlbGxzLnNsaWNlKDAsIGNvbHVtbnNDb3VudClcbiAgICAgICAgICApKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHN0aWNreVJvd3M7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0U3RpY2t5SGVhZGVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdGlja3lIZWFkZXIocm93cykge1xuICAgICAgICB2YXIgcm93ID0gcm93c1swXTtcbiAgICAgICAgdmFyIGNlbGxzID0gW107XG5cbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkocm93LnByb3BzLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uIChjZWxsLCBjKSB7XG4gICAgICAgICAgY2VsbHMucHVzaChfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGNlbGwsIHsgaWQ6ICdzdGlja3ktaGVhZGVyLWNlbGwtJyArIGMsIGtleTogYyB9KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfUm93Mi5kZWZhdWx0LFxuICAgICAgICAgIF9leHRlbmRzKHt9LCByb3cucHJvcHMsIHsgaWQ6ICdzdGlja3ktaGVhZGVyLXJvdycgfSksXG4gICAgICAgICAgY2VsbHNcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdnZXRTdGlja3lDb3JuZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0aWNreUNvcm5lcihyb3dzKSB7XG4gICAgICAgIHZhciBjb2x1bW5zQ291bnQgPSB0aGlzLnByb3BzLnN0aWNreUNvbHVtbkNvdW50O1xuICAgICAgICB2YXIgY2VsbHM7XG4gICAgICAgIHZhciBzdGlja3lDb3JuZXIgPSBbXTtcblxuICAgICAgICByb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdywgcikge1xuICAgICAgICAgIGlmIChyID09PSAwKSB7XG4gICAgICAgICAgICBjZWxscyA9IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KHJvdy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgICAgICAgIHN0aWNreUNvcm5lci5wdXNoKF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBfUm93Mi5kZWZhdWx0LFxuICAgICAgICAgICAgICBfZXh0ZW5kcyh7fSwgcm93LnByb3BzLCB7IGlkOiAnJywga2V5OiByIH0pLFxuICAgICAgICAgICAgICBjZWxscy5zbGljZSgwLCBjb2x1bW5zQ291bnQpXG4gICAgICAgICAgICApKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzdGlja3lDb3JuZXI7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0U2l6ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2l6ZShub2RlKSB7XG4gICAgICAgIHZhciB3aWR0aCA9IG5vZGUgPyBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIDogMDtcbiAgICAgICAgdmFyIGhlaWdodCA9IG5vZGUgPyBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCA6IDA7XG5cbiAgICAgICAgcmV0dXJuIHsgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgcm93cyA9IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgICB2YXIgc3RpY2t5Q29sdW1uLCBzdGlja3lIZWFkZXIsIHN0aWNreUNvcm5lcjtcblxuICAgICAgICB0aGlzLnJvd0NvdW50ID0gcm93cy5sZW5ndGg7XG4gICAgICAgIHRoaXMuY29sdW1uQ291bnQgPSByb3dzWzBdICYmIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KHJvd3NbMF0ucHJvcHMuY2hpbGRyZW4pLmxlbmd0aCB8fCAwO1xuXG4gICAgICAgIGlmIChyb3dzLmxlbmd0aCkge1xuICAgICAgICAgIGlmICh0aGlzLnByb3BzLnN0aWNreUNvbHVtbkNvdW50ID4gMCAmJiB0aGlzLnN0aWNreUhlYWRlckNvdW50ID4gMCkge1xuICAgICAgICAgICAgc3RpY2t5Q29ybmVyID0gdGhpcy5nZXRTdGlja3lDb3JuZXIocm93cyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLnByb3BzLnN0aWNreUNvbHVtbkNvdW50ID4gMCkge1xuICAgICAgICAgICAgc3RpY2t5Q29sdW1uID0gdGhpcy5nZXRTdGlja3lDb2x1bW5zKHJvd3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5zdGlja3lIZWFkZXJDb3VudCA+IDApIHtcbiAgICAgICAgICAgIHN0aWNreUhlYWRlciA9IHRoaXMuZ2V0U3RpY2t5SGVhZGVyKHJvd3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ3N0aWNreS10YWJsZSAnICsgKHRoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnKSwgaWQ6ICdzdGlja3ktdGFibGUtJyArIHRoaXMuaWQgfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBpZDogJ3gtc2Nyb2xsYmFyJyB9LFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBpZDogJ3ktc2Nyb2xsYmFyJyB9LFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdzdGlja3ktdGFibGUtY29ybmVyJywgaWQ6ICdzdGlja3ktdGFibGUtY29ybmVyJyB9LFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIF9UYWJsZTIuZGVmYXVsdCxcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgc3RpY2t5Q29ybmVyXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdzdGlja3ktdGFibGUtaGVhZGVyJywgaWQ6ICdzdGlja3ktdGFibGUtaGVhZGVyJyB9LFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIF9UYWJsZTIuZGVmYXVsdCxcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgc3RpY2t5SGVhZGVyXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdzdGlja3ktdGFibGUteS13cmFwcGVyJywgaWQ6ICdzdGlja3ktdGFibGUteS13cmFwcGVyJyB9LFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3N0aWNreS10YWJsZS1jb2x1bW4nLCBpZDogJ3N0aWNreS10YWJsZS1jb2x1bW4nIH0sXG4gICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIF9UYWJsZTIuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIHN0aWNreUNvbHVtblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3N0aWNreS10YWJsZS14LXdyYXBwZXInLCBpZDogJ3N0aWNreS10YWJsZS14LXdyYXBwZXInIH0sXG4gICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIF9UYWJsZTIuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIHJvd3NcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU3RpY2t5VGFibGU7XG4gIH0oX3JlYWN0LlB1cmVDb21wb25lbnQpO1xuXG4gIFN0aWNreVRhYmxlLnByb3BUeXBlcyA9IHtcbiAgICBzdGlja3lIZWFkZXJDb3VudDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gICAgc3RpY2t5Q29sdW1uQ291bnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuXG4gICAgb25TY3JvbGw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xuICB9O1xuICBTdGlja3lUYWJsZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc3RpY2t5SGVhZGVyQ291bnQ6IDEsXG4gICAgc3RpY2t5Q29sdW1uQ291bnQ6IDFcbiAgfTtcbiAgZXhwb3J0cy5TdGlja3lUYWJsZSA9IFN0aWNreVRhYmxlO1xuICBleHBvcnRzLlRhYmxlID0gX1RhYmxlMi5kZWZhdWx0O1xuICBleHBvcnRzLlJvdyA9IF9Sb3cyLmRlZmF1bHQ7XG4gIGV4cG9ydHMuQ2VsbCA9IF9DZWxsMi5kZWZhdWx0O1xufSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFsnZXhwb3J0cycsICdyZWFjdCcsICdyZWFjdC1kb20nXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoJ3JlYWN0JyksIHJlcXVpcmUoJ3JlYWN0LWRvbScpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5yZWFjdCwgZ2xvYmFsLnJlYWN0RG9tKTtcbiAgICBnbG9iYWwuaW5kZXggPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIF9yZWFjdCwgX3JlYWN0RG9tKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcblxuICB2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuICB2YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICAgIH07XG4gIH0oKTtcblxuICBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gICAgaWYgKCFzZWxmKSB7XG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgICB9XG5cbiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG4gIH1cblxuICB2YXIgVGFibGUgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhUYWJsZSwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBUYWJsZSgpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUYWJsZSk7XG5cbiAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoVGFibGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUYWJsZSkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhUYWJsZSwgW3tcbiAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAnc3RpY2t5LXRhYmxlLWNvbnRhaW5lciAnICsgKHRoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnKSB9KSxcbiAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRhYmxlO1xuICB9KF9yZWFjdC5Db21wb25lbnQpO1xuXG4gIGV4cG9ydHMuZGVmYXVsdCA9IFRhYmxlO1xufSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFsnZXhwb3J0cycsICdyZWFjdCcsICdyZWFjdC1kb20nXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoJ3JlYWN0JyksIHJlcXVpcmUoJ3JlYWN0LWRvbScpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5yZWFjdCwgZ2xvYmFsLnJlYWN0RG9tKTtcbiAgICBnbG9iYWwuaW5kZXggPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIF9yZWFjdCwgX3JlYWN0RG9tKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcblxuICB2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuICB2YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICAgIH07XG4gIH0oKTtcblxuICBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gICAgaWYgKCFzZWxmKSB7XG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgICB9XG5cbiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG4gIH1cblxuICB2YXIgUm93ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoUm93LCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFJvdygpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb3cpO1xuXG4gICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFJvdy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJvdykpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhSb3csIFt7XG4gICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogJ3N0aWNreS10YWJsZS1yb3cgJyArICh0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJykgfSksXG4gICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSb3c7XG4gIH0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbiAgZXhwb3J0cy5kZWZhdWx0ID0gUm93O1xufSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFsnZXhwb3J0cycsICdyZWFjdCcsICdyZWFjdC1kb20nXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoJ3JlYWN0JyksIHJlcXVpcmUoJ3JlYWN0LWRvbScpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5yZWFjdCwgZ2xvYmFsLnJlYWN0RG9tKTtcbiAgICBnbG9iYWwuaW5kZXggPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIF9yZWFjdCwgX3JlYWN0RG9tKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcblxuICB2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuICB2YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICAgIH07XG4gIH0oKTtcblxuICBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gICAgaWYgKCFzZWxmKSB7XG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgICB9XG5cbiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG4gIH1cblxuICB2YXIgQ2VsbCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKENlbGwsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQ2VsbCgpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDZWxsKTtcblxuICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDZWxsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2VsbCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDZWxsLCBbe1xuICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICdzdGlja3ktdGFibGUtY2VsbCAnICsgKHRoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnKSB9KSxcbiAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENlbGw7XG4gIH0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbiAgZXhwb3J0cy5kZWZhdWx0ID0gQ2VsbDtcbn0pOyIsInZhciByZXF1ZXN0RnJhbWUgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgd2luZG93ID0gdGhpc1xuICB2YXIgcmFmID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgZnVuY3Rpb24gZmFsbGJhY2tSQUYoZnVuYykge1xuICAgICAgcmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmMsIDIwKVxuICAgIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcXVlc3RGcmFtZUZ1bmN0aW9uKGZ1bmMpIHtcbiAgICByZXR1cm4gcmFmKGZ1bmMpXG4gIH1cbn0pKClcblxudmFyIGNhbmNlbEZyYW1lID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHdpbmRvdyA9IHRoaXNcbiAgdmFyIGNhbmNlbCA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXRcbiAgcmV0dXJuIGZ1bmN0aW9uIGNhbmNlbEZyYW1lRnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2FuY2VsKGlkKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIHJlc2l6ZUxpc3RlbmVyKGUpIHtcbiAgdmFyIHdpbiA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudFxuICBpZiAod2luLl9fcmVzaXplUkFGX18pIHtcbiAgICBjYW5jZWxGcmFtZSh3aW4uX19yZXNpemVSQUZfXylcbiAgfVxuICB3aW4uX19yZXNpemVSQUZfXyA9IHJlcXVlc3RGcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRyaWdnZXIgPSB3aW4uX19yZXNpemVUcmlnZ2VyX19cbiAgICB0cmlnZ2VyLl9fcmVzaXplTGlzdGVuZXJzX18uZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgIGZuLmNhbGwodHJpZ2dlciwgZSlcbiAgICB9KVxuICB9KVxufVxuXG52YXIgZXhwb3J0cyA9IGZ1bmN0aW9uIGV4cG9ydHMoZWxlbWVudCwgZm4pIHtcbiAgdmFyIHdpbmRvdyA9IHRoaXNcbiAgdmFyIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50XG4gIHZhciBpc0lFXG5cbiAgdmFyIGF0dGFjaEV2ZW50ID0gZG9jdW1lbnQuYXR0YWNoRXZlbnRcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaXNJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnQvKSB8fFxuICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRWRnZS8pXG4gIH1cblxuICBmdW5jdGlvbiBvYmplY3RMb2FkKCkge1xuICAgIHRoaXMuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3Ll9fcmVzaXplVHJpZ2dlcl9fID0gdGhpcy5fX3Jlc2l6ZUVsZW1lbnRfX1xuICAgIHRoaXMuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUxpc3RlbmVyKVxuICB9XG5cbiAgaWYgKCFlbGVtZW50Ll9fcmVzaXplTGlzdGVuZXJzX18pIHtcbiAgICBlbGVtZW50Ll9fcmVzaXplTGlzdGVuZXJzX18gPSBbXVxuICAgIGlmIChhdHRhY2hFdmVudCkge1xuICAgICAgZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJfXyA9IGVsZW1lbnRcbiAgICAgIGVsZW1lbnQuYXR0YWNoRXZlbnQoJ29ucmVzaXplJywgcmVzaXplTGlzdGVuZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJ1xuICAgICAgfVxuICAgICAgdmFyIG9iaiA9IChlbGVtZW50Ll9fcmVzaXplVHJpZ2dlcl9fID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2JqZWN0JykpXG4gICAgICBvYmouc2V0QXR0cmlidXRlKFxuICAgICAgICAnc3R5bGUnLFxuICAgICAgICAnZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuOyBwb2ludGVyLWV2ZW50czogbm9uZTsgei1pbmRleDogLTE7IG9wYWNpdHk6IDA7J1xuICAgICAgKVxuICAgICAgb2JqLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmVzaXplLXNlbnNvcicpXG4gICAgICBvYmouX19yZXNpemVFbGVtZW50X18gPSBlbGVtZW50XG4gICAgICBvYmoub25sb2FkID0gb2JqZWN0TG9hZFxuICAgICAgb2JqLnR5cGUgPSAndGV4dC9odG1sJ1xuICAgICAgaWYgKGlzSUUpIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChvYmopXG4gICAgICB9XG4gICAgICBvYmouZGF0YSA9ICdhYm91dDpibGFuaydcbiAgICAgIGlmICghaXNJRSkge1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG9iailcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fLnB1c2goZm4pXG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBleHBvcnRzIDogZXhwb3J0cy5iaW5kKHdpbmRvdylcblxubW9kdWxlLmV4cG9ydHMudW5iaW5kID0gZnVuY3Rpb24gKGVsZW1lbnQsIGZuKSB7XG4gIHZhciBhdHRhY2hFdmVudCA9IGRvY3VtZW50LmF0dGFjaEV2ZW50XG4gIGlmIChmbikge1xuICAgIGVsZW1lbnQuX19yZXNpemVMaXN0ZW5lcnNfXy5zcGxpY2UoXG4gICAgICBlbGVtZW50Ll9fcmVzaXplTGlzdGVuZXJzX18uaW5kZXhPZihmbiksXG4gICAgICAxXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuX19yZXNpemVMaXN0ZW5lcnNfXyA9IFtdXG4gIH1cbiAgaWYgKCFlbGVtZW50Ll9fcmVzaXplTGlzdGVuZXJzX18ubGVuZ3RoKSB7XG4gICAgaWYgKGF0dGFjaEV2ZW50KSB7XG4gICAgICBlbGVtZW50LmRldGFjaEV2ZW50KCdvbnJlc2l6ZScsIHJlc2l6ZUxpc3RlbmVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50Ll9fcmVzaXplVHJpZ2dlcl9fLmNvbnRlbnREb2N1bWVudC5kZWZhdWx0Vmlldy5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAncmVzaXplJyxcbiAgICAgICAgcmVzaXplTGlzdGVuZXJcbiAgICAgIClcbiAgICAgIGRlbGV0ZSBlbGVtZW50Ll9fcmVzaXplVHJpZ2dlcl9fLmNvbnRlbnREb2N1bWVudC5kZWZhdWx0Vmlldy5fX3Jlc2l6ZVRyaWdnZXJfX1xuICAgICAgZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJfXyA9ICFlbGVtZW50LnJlbW92ZUNoaWxkKFxuICAgICAgICBlbGVtZW50Ll9fcmVzaXplVHJpZ2dlcl9fXG4gICAgICApXG4gICAgfVxuICAgIGRlbGV0ZSBlbGVtZW50Ll9fcmVzaXplTGlzdGVuZXJzX19cbiAgfVxufVxuIiwiaW1wb3J0IERhdGVQaWNrZXIgZnJvbSAnLi9jb21wb25lbnRzL0RhdGVQaWNrZXInO1xuZXhwb3J0IGRlZmF1bHQgRGF0ZVBpY2tlcjtcbi8vIGV4cG9ydCBDYWxlbmRhciBmcm9tICcuL2NvbXBvbmVudHMvQ2FsZW5kYXInO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBUZXRoZXJDb21wb25lbnQgZnJvbSAncmVhY3QtdGV0aGVyJztcbmltcG9ydCBDYWxlbmRhciBmcm9tICcuL0NhbGVuZGFyJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IE15VGltZVBpY2tlciBmcm9tICcuL0N1c3RvbVRpbWVQaWNrZXInXG5cbmV4cG9ydCBjb25zdCBvdXRzaWRlQ2xpY2tJZ25vcmVDbGFzcyA9ICdpZ25vcmUtLWNsaWNrLS1vdXRzaWRlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlUGlja2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBkZWZhdWx0VmFsdWU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRm9jdXM6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIG1pbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBtYXg6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZGVmYXVsdE1vbnRoOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGlucHV0Rm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHBpY2tlclBvc2l0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHJlbW92YWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc3R5bGVzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNhbGVuZGFyU3R5bGVzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNhbGVuZGFyQ29udGFpbmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdGltZVBpY2tlcjogUHJvcFR5cGVzLmJvb2xcbiAgfTtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIHN0eWxlczogdW5kZWZpbmVkLFxuICAgIGNhbGVuZGFyQ29udGFpbmVyUHJvcHM6IHt9LFxuICAgIHRpbWVQaWNrZXI6IHRydWVcbiAgfTtcblxuICBsYXN0VmFsdWVDaGFuZ2UgPSBudWxsO1xuXG4gIHN0YXRlID0ge1xuICAgIGlzT3BlbjogZmFsc2UsXG4gICAgbW9tZW50VmFsdWU6IHRoaXMucHJvcHMuZGVmYXVsdFZhbHVlIHx8IG51bGwsXG4gICAgaW5wdXRWYWx1ZTogdGhpcy5nZXRWYWx1ZSh0aGlzLnByb3BzLmRlZmF1bHRWYWx1ZSwgdGhpcy5wcm9wcy50aW1lUGlja2VyKSxcbiAgICBpbnB1dEZvcm1hdDogdGhpcy5wcm9wcy5pbnB1dEZvcm1hdCB8fCB0aGlzLmdldElucHV0Rm9ybWF0KHRoaXMucHJvcHMudGltZVBpY2tlciksXG4gICAgdGltZVBpY2tlcjogdGhpcy5wcm9wcy50aW1lUGlja2VyLFxuICAgIHRpbWVQaWNrZXJDb21wb25lbnQ6IHRoaXMucHJvcHMudGltZVBpY2tlciA/IE15VGltZVBpY2tlciA6IHVuZGVmaW5lZFxuICB9O1xuXG4gIGdldElucHV0Rm9ybWF0KHRpbWVQaWNrZXIpIHtcbiAgICBpZiAoISF0aW1lUGlja2VyKVxuICAgICAgcmV0dXJuICdZWVlZL00vRCBoaDptbSBBJztcbiAgICByZXR1cm4gJ1lZWVkvTS9EJztcbiAgfVxuXG4gIGdldFZhbHVlKGlucHV0VmFsdWUsIHRpbWVQaWNrZXIpIHtcbiAgICBpZiAoIWlucHV0VmFsdWUpXG4gICAgICByZXR1cm4gJyc7XG4gICAgY29uc3QgaW5wdXRGb3JtYXQgPSB0aGlzLmdldElucHV0Rm9ybWF0KHRpbWVQaWNrZXIpO1xuXG4gICAgcmV0dXJuIGlucHV0VmFsdWUubG9jYWxlKCdlbicpLmZvcm1hdCh0aGlzLnByb3BzLmlucHV0Rm9ybWF0IHx8IGlucHV0Rm9ybWF0KTtcbiAgfVxuXG4gIHNldE9wZW4oaXNPcGVuKSB7XG5cbiAgICBjb25zdCB7IG1vbWVudFZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGlmIChtb21lbnRWYWx1ZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKG1vbWVudFZhbHVlKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuIH0pO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLnZhbHVlKSB7XG4gICAgICB0aGlzLnNldE1vbWVudFZhbHVlKHRoaXMucHJvcHMudmFsdWUsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuXG4gICAgaWYgKCd2YWx1ZScgaW4gbmV4dFByb3BzICYmIG5leHRQcm9wcy52YWx1ZSAhPT0gdGhpcy5wcm9wcy52YWx1ZSkge1xuICAgICAgdGhpcy5zZXRNb21lbnRWYWx1ZShuZXh0UHJvcHMudmFsdWUpO1xuICAgIH1cblxuICAgIGlmICgndGltZVBpY2tlcicgaW4gbmV4dFByb3BzICYmIG5leHRQcm9wcy50aW1lUGlja2VyICE9PSB0aGlzLnByb3BzLnRpbWVQaWNrZXIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB0aW1lUGlja2VyOiBuZXh0UHJvcHMudGltZVBpY2tlcixcbiAgICAgICAgdGltZVBpY2tlckNvbXBvbmVudDogdGhpcy5wcm9wcy50aW1lUGlja2VyID8gTXlUaW1lUGlja2VyIDogdW5kZWZpbmVkXG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSh2YWx1ZSkge1xuXG4gICAgICBpZiAoIXRoaXMubGFzdFZhbHVlQ2hhbmdlIHx8ICF0aGlzLmxhc3RWYWx1ZUNoYW5nZS52YWx1ZU9mKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZSAxJyk7XG4gICAgICAgICAgdGhpcy5sYXN0VmFsdWVDaGFuZ2UgPSB2YWx1ZTtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh2YWx1ZS52YWx1ZU9mICYmIHZhbHVlLnZhbHVlT2YoKSAhPT0gdGhpcy5sYXN0VmFsdWVDaGFuZ2UudmFsdWVPZigpKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NoYW5nZSAyJyk7XG4gICAgICAgICAgdGhpcy5sYXN0VmFsdWVDaGFuZ2UgPSB2YWx1ZTtcbiAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgIH1cblxuICB9XG5cbiAgc2V0TW9tZW50VmFsdWUobW9tZW50VmFsdWUsIGRvQ2hhbmdlKSB7XG4gICAgY29uc3QgeyBpbnB1dEZvcm1hdCwgdGltZVBpY2tlciB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmIChkb0NoYW5nZSAhPT0gZmFsc2UgJiYgdGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UobW9tZW50VmFsdWUpO1xuICAgIH1cblxuICAgIC8vIGNvbnN0IGlucHV0VmFsdWUgPSBtb21lbnRWYWx1ZS5mb3JtYXQoaW5wdXRGb3JtYXQpO1xuXG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUobW9tZW50VmFsdWUsIHRpbWVQaWNrZXIpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vbWVudFZhbHVlLCBpbnB1dFZhbHVlIH0pO1xuICB9XG5cbiAgaGFuZGxlRm9jdXMoKSB7XG4gICAgdGhpcy5zZXRPcGVuKHRydWUpO1xuICB9XG5cbiAgaGFuZGxlQmx1cihldmVudCkge1xuICAgIGNvbnN0IHsgb25CbHVyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgaXNPcGVuLCBtb21lbnRWYWx1ZSwgaW5wdXRGb3JtYXQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoaXNPcGVuKSB7XG4gICAgICB0aGlzLnJlZnMuaW5wdXQuZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKG9uQmx1cikge1xuICAgICAgb25CbHVyKGV2ZW50KTtcbiAgICB9XG5cbiAgICBpZiAobW9tZW50VmFsdWUpIHtcbiAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSBtb21lbnRWYWx1ZS5mb3JtYXQoaW5wdXRGb3JtYXQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlucHV0VmFsdWUgfSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2xpY2tPdXRzaWRlQ2FsZW5kYXIoKSB7XG4gICAgdGhpcy5zZXRPcGVuKGZhbHNlKTtcbiAgfVxuXG4gIGhhbmRsZVNlbGVjdERheShzZWxlY3RlZERheSkge1xuICAgIGNvbnN0IHsgbW9tZW50VmFsdWU6IG9sZFZhbHVlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBtb21lbnRWYWx1ZSA9IHNlbGVjdGVkRGF5LmNsb25lKCk7XG5cbiAgICBpZiAob2xkVmFsdWUpIHtcbiAgICAgIG1vbWVudFZhbHVlID0gbW9tZW50VmFsdWVcbiAgICAgICAgLnNldCh7XG4gICAgICAgICAgaG91cjogb2xkVmFsdWUuaG91cnMoKSxcbiAgICAgICAgICBtaW51dGU6IG9sZFZhbHVlLm1pbnV0ZXMoKSxcbiAgICAgICAgICBzZWNvbmQ6IG9sZFZhbHVlLnNlY29uZHMoKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldE1vbWVudFZhbHVlKG1vbWVudFZhbHVlKTtcbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2hhbmdlKGV2ZW50KSB7XG4gICAgY29uc3QgeyBpbnB1dEZvcm1hdCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBpbnB1dFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGNvbnN0IG1vbWVudFZhbHVlID0gbW9tZW50KGlucHV0VmFsdWUsIGlucHV0Rm9ybWF0KTtcblxuICAgIGlmIChtb21lbnRWYWx1ZS5pc1ZhbGlkKCkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBtb21lbnRWYWx1ZSB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgaW5wdXRWYWx1ZSB9KTtcbiAgfVxuXG4gIGhhbmRsZUlucHV0Q2xpY2soKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLnNldE9wZW4odHJ1ZSlcbiAgICB9XG4gIH1cblxuICByZW5kZXJJbnB1dCgpIHtcbiAgICBjb25zdCB7IGlzT3BlbiwgaW5wdXRWYWx1ZSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzbmFtZXModGhpcy5wcm9wcy5jbGFzc05hbWUsIHtcbiAgICAgIFtvdXRzaWRlQ2xpY2tJZ25vcmVDbGFzc106IGlzT3BlblxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGNsYXNzTmFtZT17YGRhdGVwaWNrZXItaW5wdXQgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgICAgIG9uRm9jdXM9e3RoaXMuaGFuZGxlRm9jdXMuYmluZCh0aGlzKX1cbiAgICAgICAgICBvbkJsdXI9e3RoaXMuaGFuZGxlQmx1ci5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVJbnB1dENsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyQ2FsZW5kYXIoKSB7XG4gICAgY29uc3QgeyBtb21lbnRWYWx1ZSwgdGltZVBpY2tlckNvbXBvbmVudDogVGltZVBpY2tlciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IG9uQ2hhbmdlLCBtaW4sIG1heCwgZGVmYXVsdE1vbnRoLCBzdHlsZXMsIGNhbGVuZGFyQ29udGFpbmVyUHJvcHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPENhbGVuZGFyXG4gICAgICAgICAgbWluPXttaW59XG4gICAgICAgICAgbWF4PXttYXh9XG4gICAgICAgICAgc2VsZWN0ZWREYXk9e21vbWVudFZhbHVlfVxuICAgICAgICAgIGRlZmF1bHRNb250aD17ZGVmYXVsdE1vbnRofVxuICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLmhhbmRsZVNlbGVjdERheS5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uQ2xpY2tPdXRzaWRlPXt0aGlzLmhhbmRsZUNsaWNrT3V0c2lkZUNhbGVuZGFyLmJpbmQodGhpcyl9XG4gICAgICAgICAgb3V0c2lkZUNsaWNrSWdub3JlQ2xhc3M9e291dHNpZGVDbGlja0lnbm9yZUNsYXNzfVxuICAgICAgICAgIHN0eWxlcz17c3R5bGVzfVxuICAgICAgICAgIGNvbnRhaW5lclByb3BzPXtjYWxlbmRhckNvbnRhaW5lclByb3BzfVxuICAgICAgICA+XG4gICAgICAgICAge1xuICAgICAgICAgICAgVGltZVBpY2tlciA/IChcbiAgICAgICAgICAgICAgPFRpbWVQaWNrZXJcbiAgICAgICAgICAgICAgICBtaW49e21pbn1cbiAgICAgICAgICAgICAgICBtYXg9e21heH1cbiAgICAgICAgICAgICAgICBtb21lbnRWYWx1ZT17bW9tZW50VmFsdWV9XG4gICAgICAgICAgICAgICAgc2V0TW9tZW50VmFsdWU9e3RoaXMuc2V0TW9tZW50VmFsdWUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICA8L0NhbGVuZGFyPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbW92ZURhdGUoKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAob25DaGFuZ2UpIHtcbiAgICAgIG9uQ2hhbmdlKCcnKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBpbnB1dDogJycsXG4gICAgICBpbnB1dFZhbHVlOiAnJ1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNPcGVuIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXRoZXJDb21wb25lbnQgY2xhc3NOYW1lPXt0aGlzLnByb3BzLndyYXBwZXJDbGFzc05hbWUgfHwgJyd9IGF0dGFjaG1lbnQ9e3RoaXMucHJvcHMucGlja2VyUG9zaXRpb24gfHwgJ3RvcCBjZW50ZXInfT5cbiAgICAgICAge3RoaXMucmVuZGVySW5wdXQoKX1cbiAgICAgICAge2lzT3BlbiA/IHRoaXMucmVuZGVyQ2FsZW5kYXIoKSA6IG51bGx9XG4gICAgICA8L1RldGhlckNvbXBvbmVudD5cbiAgICApO1xuICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB1bmRlZmluZWQ7XG5cbnZhciBfVGV0aGVyQ29tcG9uZW50ID0gcmVxdWlyZSgnLi9UZXRoZXJDb21wb25lbnQnKTtcblxudmFyIF9UZXRoZXJDb21wb25lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGV0aGVyQ29tcG9uZW50KTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZXhwb3J0cy5kZWZhdWx0ID0gX1RldGhlckNvbXBvbmVudDIuZGVmYXVsdDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX3Byb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTtcblxudmFyIF9wcm9wVHlwZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJvcFR5cGVzKTtcblxudmFyIF9yZWFjdERvbSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xuXG52YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxudmFyIF90ZXRoZXIgPSByZXF1aXJlKCd0ZXRoZXInKTtcblxudmFyIF90ZXRoZXIyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdGV0aGVyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbmlmICghX3RldGhlcjIuZGVmYXVsdCkge1xuICBjb25zb2xlLmVycm9yKCdJdCBsb29rcyBsaWtlIFRldGhlciBoYXMgbm90IGJlZW4gaW5jbHVkZWQuIFBsZWFzZSBsb2FkIHRoaXMgZGVwZW5kZW5jeSBmaXJzdCBodHRwczovL2dpdGh1Yi5jb20vSHViU3BvdC90ZXRoZXInKTtcbn1cblxudmFyIHJlbmRlckVsZW1lbnRUb1Byb3BUeXBlcyA9IFtfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZywgX3Byb3BUeXBlczIuZGVmYXVsdC5zaGFwZSh7XG4gIGFwcGVuZENoaWxkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMuaXNSZXF1aXJlZFxufSldO1xuXG52YXIgY2hpbGRyZW5Qcm9wVHlwZSA9IGZ1bmN0aW9uIGNoaWxkcmVuUHJvcFR5cGUoX3JlZiwgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgdmFyIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcblxuICB2YXIgY2hpbGRDb3VudCA9IF9yZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbik7XG4gIGlmIChjaGlsZENvdW50IDw9IDApIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKGNvbXBvbmVudE5hbWUgKyAnIGV4cGVjdHMgYXQgbGVhc3Qgb25lIGNoaWxkIHRvIHVzZSBhcyB0aGUgdGFyZ2V0IGVsZW1lbnQuJyk7XG4gIH0gZWxzZSBpZiAoY2hpbGRDb3VudCA+IDIpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKCdPbmx5IGEgbWF4IG9mIHR3byBjaGlsZHJlbiBhbGxvd2VkIGluICcgKyBjb21wb25lbnROYW1lICsgJy4nKTtcbiAgfVxufTtcblxudmFyIGF0dGFjaG1lbnRQb3NpdGlvbnMgPSBbJ2F1dG8gYXV0bycsICd0b3AgbGVmdCcsICd0b3AgY2VudGVyJywgJ3RvcCByaWdodCcsICdtaWRkbGUgbGVmdCcsICdtaWRkbGUgY2VudGVyJywgJ21pZGRsZSByaWdodCcsICdib3R0b20gbGVmdCcsICdib3R0b20gY2VudGVyJywgJ2JvdHRvbSByaWdodCddO1xuXG52YXIgVGV0aGVyQ29tcG9uZW50ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgX2luaGVyaXRzKFRldGhlckNvbXBvbmVudCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gVGV0aGVyQ29tcG9uZW50KCkge1xuICAgIHZhciBfcmVmMjtcblxuICAgIHZhciBfdGVtcCwgX3RoaXMsIF9yZXQ7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGV0aGVyQ29tcG9uZW50KTtcblxuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiBfcmV0ID0gKF90ZW1wID0gKF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKF9yZWYyID0gVGV0aGVyQ29tcG9uZW50Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoVGV0aGVyQ29tcG9uZW50KSkuY2FsbC5hcHBseShfcmVmMiwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLl90YXJnZXROb2RlID0gbnVsbCwgX3RoaXMuX2VsZW1lbnRQYXJlbnROb2RlID0gbnVsbCwgX3RoaXMuX3RldGhlciA9IGZhbHNlLCBfdGVtcCksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKF90aGlzLCBfcmV0KTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhUZXRoZXJDb21wb25lbnQsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMuX3RhcmdldE5vZGUgPSBfcmVhY3REb20yLmRlZmF1bHQuZmluZERPTU5vZGUodGhpcyk7XG4gICAgICB0aGlzLl91cGRhdGUoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjb21wb25lbnREaWRVcGRhdGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICB0aGlzLl90YXJnZXROb2RlID0gX3JlYWN0RG9tMi5kZWZhdWx0LmZpbmRET01Ob2RlKHRoaXMpO1xuICAgICAgdGhpcy5fdXBkYXRlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIHRoaXMuX2Rlc3Ryb3koKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRUZXRoZXJJbnN0YW5jZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRldGhlckluc3RhbmNlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RldGhlcjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkaXNhYmxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICAgIHRoaXMuX3RldGhlci5kaXNhYmxlKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZW5hYmxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZW5hYmxlKCkge1xuICAgICAgdGhpcy5fdGV0aGVyLmVuYWJsZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXZlbnQsIGhhbmRsZXIsIGN0eCkge1xuICAgICAgdGhpcy5fdGV0aGVyLm9uKGV2ZW50LCBoYW5kbGVyLCBjdHgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uY2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbmNlKGV2ZW50LCBoYW5kbGVyLCBjdHgpIHtcbiAgICAgIHRoaXMuX3RldGhlci5vbmNlKGV2ZW50LCBoYW5kbGVyLCBjdHgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29mZicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9mZihldmVudCwgaGFuZGxlcikge1xuICAgICAgdGhpcy5fdGV0aGVyLm9mZihldmVudCwgaGFuZGxlcik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncG9zaXRpb24nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwb3NpdGlvbigpIHtcbiAgICAgIHRoaXMuX3RldGhlci5wb3NpdGlvbigpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19yZWdpc3RlckV2ZW50TGlzdGVuZXJzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3JlZ2lzdGVyRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcyxcbiAgICAgICAgICBfYXJndW1lbnRzID0gYXJndW1lbnRzO1xuXG4gICAgICB0aGlzLm9uKCd1cGRhdGUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczIucHJvcHMub25VcGRhdGUgJiYgX3RoaXMyLnByb3BzLm9uVXBkYXRlLmFwcGx5KF90aGlzMiwgX2FyZ3VtZW50cyk7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5vbigncmVwb3NpdGlvbmVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMyLnByb3BzLm9uUmVwb3NpdGlvbmVkICYmIF90aGlzMi5wcm9wcy5vblJlcG9zaXRpb25lZC5hcHBseShfdGhpczIsIF9hcmd1bWVudHMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX2Rlc3Ryb3knLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfZGVzdHJveSgpIHtcbiAgICAgIGlmICh0aGlzLl9lbGVtZW50UGFyZW50Tm9kZSkge1xuICAgICAgICBfcmVhY3REb20yLmRlZmF1bHQudW5tb3VudENvbXBvbmVudEF0Tm9kZSh0aGlzLl9lbGVtZW50UGFyZW50Tm9kZSk7XG4gICAgICAgIHRoaXMuX2VsZW1lbnRQYXJlbnROb2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5fZWxlbWVudFBhcmVudE5vZGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fdGV0aGVyKSB7XG4gICAgICAgIHRoaXMuX3RldGhlci5kZXN0cm95KCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2VsZW1lbnRQYXJlbnROb2RlID0gbnVsbDtcbiAgICAgIHRoaXMuX3RldGhlciA9IG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX3VwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGUoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfcHJvcHMuY2hpbGRyZW4sXG4gICAgICAgICAgcmVuZGVyRWxlbWVudFRhZyA9IF9wcm9wcy5yZW5kZXJFbGVtZW50VGFnO1xuXG4gICAgICB2YXIgZWxlbWVudENvbXBvbmVudCA9IF9yZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkcmVuKVsxXTtcblxuICAgICAgLy8gaWYgbm8gZWxlbWVudCBjb21wb25lbnQgcHJvdmlkZWQsIGJhaWwgb3V0XG4gICAgICBpZiAoIWVsZW1lbnRDb21wb25lbnQpIHtcbiAgICAgICAgLy8gZGVzdHJveSBUZXRoZXIgZWxlbWVudCBpZiBpdCBoYXMgYmVlbiBjcmVhdGVkXG4gICAgICAgIGlmICh0aGlzLl90ZXRoZXIpIHtcbiAgICAgICAgICB0aGlzLl9kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBjcmVhdGUgZWxlbWVudCBub2RlIGNvbnRhaW5lciBpZiBpdCBoYXNuJ3QgYmVlbiB5ZXRcbiAgICAgIGlmICghdGhpcy5fZWxlbWVudFBhcmVudE5vZGUpIHtcbiAgICAgICAgLy8gY3JlYXRlIGEgbm9kZSB0aGF0IHdlIGNhbiBzdGljayBvdXIgY29udGVudCBDb21wb25lbnQgaW5cbiAgICAgICAgdGhpcy5fZWxlbWVudFBhcmVudE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHJlbmRlckVsZW1lbnRUYWcpO1xuXG4gICAgICAgIC8vIGFwcGVuZCBub2RlIHRvIHRoZSByZW5kZXIgbm9kZVxuICAgICAgICB0aGlzLl9yZW5kZXJOb2RlLmFwcGVuZENoaWxkKHRoaXMuX2VsZW1lbnRQYXJlbnROb2RlKTtcbiAgICAgIH1cblxuICAgICAgLy8gcmVuZGVyIGVsZW1lbnQgY29tcG9uZW50IGludG8gdGhlIERPTVxuICAgICAgX3JlYWN0RG9tMi5kZWZhdWx0LnVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyKHRoaXMsIGVsZW1lbnRDb21wb25lbnQsIHRoaXMuX2VsZW1lbnRQYXJlbnROb2RlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGlmIHdlJ3JlIG5vdCBkZXN0cm95ZWQsIHVwZGF0ZSBUZXRoZXIgb25jZSB0aGUgc3VidHJlZSBoYXMgZmluaXNoZWQgcmVuZGVyaW5nXG4gICAgICAgIGlmIChfdGhpczMuX2VsZW1lbnRQYXJlbnROb2RlKSB7XG4gICAgICAgICAgX3RoaXMzLl91cGRhdGVUZXRoZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnX3VwZGF0ZVRldGhlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF91cGRhdGVUZXRoZXIoKSB7XG4gICAgICB2YXIgX3RoaXM0ID0gdGhpcztcblxuICAgICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGNoaWxkcmVuID0gX3Byb3BzMi5jaGlsZHJlbixcbiAgICAgICAgICByZW5kZXJFbGVtZW50VGFnID0gX3Byb3BzMi5yZW5kZXJFbGVtZW50VGFnLFxuICAgICAgICAgIHJlbmRlckVsZW1lbnRUbyA9IF9wcm9wczIucmVuZGVyRWxlbWVudFRvLFxuICAgICAgICAgIGlkID0gX3Byb3BzMi5pZCxcbiAgICAgICAgICBjbGFzc05hbWUgPSBfcHJvcHMyLmNsYXNzTmFtZSxcbiAgICAgICAgICBzdHlsZSA9IF9wcm9wczIuc3R5bGUsXG4gICAgICAgICAgb3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcHJvcHMyLCBbJ2NoaWxkcmVuJywgJ3JlbmRlckVsZW1lbnRUYWcnLCAncmVuZGVyRWxlbWVudFRvJywgJ2lkJywgJ2NsYXNzTmFtZScsICdzdHlsZSddKTtcblxuICAgICAgdmFyIHRldGhlck9wdGlvbnMgPSBfZXh0ZW5kcyh7XG4gICAgICAgIHRhcmdldDogdGhpcy5fdGFyZ2V0Tm9kZSxcbiAgICAgICAgZWxlbWVudDogdGhpcy5fZWxlbWVudFBhcmVudE5vZGVcbiAgICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgICBpZiAoaWQpIHtcbiAgICAgICAgdGhpcy5fZWxlbWVudFBhcmVudE5vZGUuaWQgPSBpZDtcbiAgICAgIH1cblxuICAgICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgICB0aGlzLl9lbGVtZW50UGFyZW50Tm9kZS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICBPYmplY3Qua2V5cyhzdHlsZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgX3RoaXM0Ll9lbGVtZW50UGFyZW50Tm9kZS5zdHlsZVtrZXldID0gc3R5bGVba2V5XTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5fdGV0aGVyKSB7XG4gICAgICAgIHRoaXMuX3RldGhlciA9IG5ldyBfdGV0aGVyMi5kZWZhdWx0KHRldGhlck9wdGlvbnMpO1xuICAgICAgICB0aGlzLl9yZWdpc3RlckV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl90ZXRoZXIuc2V0T3B0aW9ucyh0ZXRoZXJPcHRpb25zKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fdGV0aGVyLnBvc2l0aW9uKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIF9yZWFjdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pWzBdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19yZW5kZXJOb2RlJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciByZW5kZXJFbGVtZW50VG8gPSB0aGlzLnByb3BzLnJlbmRlckVsZW1lbnRUbztcblxuICAgICAgaWYgKHR5cGVvZiByZW5kZXJFbGVtZW50VG8gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlbmRlckVsZW1lbnRUbyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVuZGVyRWxlbWVudFRvIHx8IGRvY3VtZW50LmJvZHk7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRldGhlckNvbXBvbmVudDtcbn0oX3JlYWN0LkNvbXBvbmVudCk7XG5cblRldGhlckNvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIHJlbmRlckVsZW1lbnRUYWc6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICByZW5kZXJFbGVtZW50VG86IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2ZUeXBlKHJlbmRlckVsZW1lbnRUb1Byb3BUeXBlcyksXG4gIGF0dGFjaG1lbnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQub25lT2YoYXR0YWNobWVudFBvc2l0aW9ucykuaXNSZXF1aXJlZCxcbiAgdGFyZ2V0QXR0YWNobWVudDogX3Byb3BUeXBlczIuZGVmYXVsdC5vbmVPZihhdHRhY2htZW50UG9zaXRpb25zKSxcbiAgb2Zmc2V0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgdGFyZ2V0T2Zmc2V0OiBfcHJvcFR5cGVzMi5kZWZhdWx0LnN0cmluZyxcbiAgdGFyZ2V0TW9kaWZpZXI6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBlbmFibGVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmJvb2wsXG4gIGNsYXNzZXM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBjbGFzc1ByZWZpeDogX3Byb3BUeXBlczIuZGVmYXVsdC5zdHJpbmcsXG4gIG9wdGltaXphdGlvbnM6IF9wcm9wVHlwZXMyLmRlZmF1bHQub2JqZWN0LFxuICBjb25zdHJhaW50czogX3Byb3BUeXBlczIuZGVmYXVsdC5hcnJheSxcbiAgaWQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBjbGFzc05hbWU6IF9wcm9wVHlwZXMyLmRlZmF1bHQuc3RyaW5nLFxuICBzdHlsZTogX3Byb3BUeXBlczIuZGVmYXVsdC5vYmplY3QsXG4gIG9uVXBkYXRlOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIG9uUmVwb3NpdGlvbmVkOiBfcHJvcFR5cGVzMi5kZWZhdWx0LmZ1bmMsXG4gIGNoaWxkcmVuOiBjaGlsZHJlblByb3BUeXBlXG59O1xuVGV0aGVyQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHtcbiAgcmVuZGVyRWxlbWVudFRhZzogJ2RpdicsXG4gIHJlbmRlckVsZW1lbnRUbzogbnVsbFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IFRldGhlckNvbXBvbmVudDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8qISB0ZXRoZXIgMS40LjQgKi9cblxuKGZ1bmN0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgcm9vdC5UZXRoZXIgPSBmYWN0b3J5KCk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24oKSB7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBUZXRoZXJCYXNlID0gdW5kZWZpbmVkO1xuaWYgKHR5cGVvZiBUZXRoZXJCYXNlID09PSAndW5kZWZpbmVkJykge1xuICBUZXRoZXJCYXNlID0geyBtb2R1bGVzOiBbXSB9O1xufVxuXG52YXIgemVyb0VsZW1lbnQgPSBudWxsO1xuXG4vLyBTYW1lIGFzIG5hdGl2ZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QsIGV4Y2VwdCBpdCB0YWtlcyBpbnRvIGFjY291bnQgcGFyZW50IDxmcmFtZT4gb2Zmc2V0c1xuLy8gaWYgdGhlIGVsZW1lbnQgbGllcyB3aXRoaW4gYSBuZXN0ZWQgZG9jdW1lbnQgKDxmcmFtZT4gb3IgPGlmcmFtZT4tbGlrZSkuXG5mdW5jdGlvbiBnZXRBY3R1YWxCb3VuZGluZ0NsaWVudFJlY3Qobm9kZSkge1xuICB2YXIgYm91bmRpbmdSZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAvLyBUaGUgb3JpZ2luYWwgb2JqZWN0IHJldHVybmVkIGJ5IGdldEJvdW5kaW5nQ2xpZW50UmVjdCBpcyBpbW11dGFibGUsIHNvIHdlIGNsb25lIGl0XG4gIC8vIFdlIGNhbid0IHVzZSBleHRlbmQgYmVjYXVzZSB0aGUgcHJvcGVydGllcyBhcmUgbm90IGNvbnNpZGVyZWQgcGFydCBvZiB0aGUgb2JqZWN0IGJ5IGhhc093blByb3BlcnR5IGluIElFOVxuICB2YXIgcmVjdCA9IHt9O1xuICBmb3IgKHZhciBrIGluIGJvdW5kaW5nUmVjdCkge1xuICAgIHJlY3Rba10gPSBib3VuZGluZ1JlY3Rba107XG4gIH1cblxuICBpZiAobm9kZS5vd25lckRvY3VtZW50ICE9PSBkb2N1bWVudCkge1xuICAgIHZhciBfZnJhbWVFbGVtZW50ID0gbm9kZS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3LmZyYW1lRWxlbWVudDtcbiAgICBpZiAoX2ZyYW1lRWxlbWVudCkge1xuICAgICAgdmFyIGZyYW1lUmVjdCA9IGdldEFjdHVhbEJvdW5kaW5nQ2xpZW50UmVjdChfZnJhbWVFbGVtZW50KTtcbiAgICAgIHJlY3QudG9wICs9IGZyYW1lUmVjdC50b3A7XG4gICAgICByZWN0LmJvdHRvbSArPSBmcmFtZVJlY3QudG9wO1xuICAgICAgcmVjdC5sZWZ0ICs9IGZyYW1lUmVjdC5sZWZ0O1xuICAgICAgcmVjdC5yaWdodCArPSBmcmFtZVJlY3QubGVmdDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50cyhlbCkge1xuICAvLyBJbiBmaXJlZm94IGlmIHRoZSBlbCBpcyBpbnNpZGUgYW4gaWZyYW1lIHdpdGggZGlzcGxheTogbm9uZTsgd2luZG93LmdldENvbXB1dGVkU3R5bGUoKSB3aWxsIHJldHVybiBudWxsO1xuICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD01NDgzOTdcbiAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKSB8fCB7fTtcbiAgdmFyIHBvc2l0aW9uID0gY29tcHV0ZWRTdHlsZS5wb3NpdGlvbjtcbiAgdmFyIHBhcmVudHMgPSBbXTtcblxuICBpZiAocG9zaXRpb24gPT09ICdmaXhlZCcpIHtcbiAgICByZXR1cm4gW2VsXTtcbiAgfVxuXG4gIHZhciBwYXJlbnQgPSBlbDtcbiAgd2hpbGUgKChwYXJlbnQgPSBwYXJlbnQucGFyZW50Tm9kZSkgJiYgcGFyZW50ICYmIHBhcmVudC5ub2RlVHlwZSA9PT0gMSkge1xuICAgIHZhciBzdHlsZSA9IHVuZGVmaW5lZDtcbiAgICB0cnkge1xuICAgICAgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKHBhcmVudCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7fVxuXG4gICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ3VuZGVmaW5lZCcgfHwgc3R5bGUgPT09IG51bGwpIHtcbiAgICAgIHBhcmVudHMucHVzaChwYXJlbnQpO1xuICAgICAgcmV0dXJuIHBhcmVudHM7XG4gICAgfVxuXG4gICAgdmFyIF9zdHlsZSA9IHN0eWxlO1xuICAgIHZhciBvdmVyZmxvdyA9IF9zdHlsZS5vdmVyZmxvdztcbiAgICB2YXIgb3ZlcmZsb3dYID0gX3N0eWxlLm92ZXJmbG93WDtcbiAgICB2YXIgb3ZlcmZsb3dZID0gX3N0eWxlLm92ZXJmbG93WTtcblxuICAgIGlmICgvKGF1dG98c2Nyb2xsfG92ZXJsYXkpLy50ZXN0KG92ZXJmbG93ICsgb3ZlcmZsb3dZICsgb3ZlcmZsb3dYKSkge1xuICAgICAgaWYgKHBvc2l0aW9uICE9PSAnYWJzb2x1dGUnIHx8IFsncmVsYXRpdmUnLCAnYWJzb2x1dGUnLCAnZml4ZWQnXS5pbmRleE9mKHN0eWxlLnBvc2l0aW9uKSA+PSAwKSB7XG4gICAgICAgIHBhcmVudHMucHVzaChwYXJlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHBhcmVudHMucHVzaChlbC5vd25lckRvY3VtZW50LmJvZHkpO1xuXG4gIC8vIElmIHRoZSBub2RlIGlzIHdpdGhpbiBhIGZyYW1lLCBhY2NvdW50IGZvciB0aGUgcGFyZW50IHdpbmRvdyBzY3JvbGxcbiAgaWYgKGVsLm93bmVyRG9jdW1lbnQgIT09IGRvY3VtZW50KSB7XG4gICAgcGFyZW50cy5wdXNoKGVsLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpO1xuICB9XG5cbiAgcmV0dXJuIHBhcmVudHM7XG59XG5cbnZhciB1bmlxdWVJZCA9IChmdW5jdGlvbiAoKSB7XG4gIHZhciBpZCA9IDA7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICsraWQ7XG4gIH07XG59KSgpO1xuXG52YXIgemVyb1Bvc0NhY2hlID0ge307XG52YXIgZ2V0T3JpZ2luID0gZnVuY3Rpb24gZ2V0T3JpZ2luKCkge1xuICAvLyBnZXRCb3VuZGluZ0NsaWVudFJlY3QgaXMgdW5mb3J0dW5hdGVseSB0b28gYWNjdXJhdGUuICBJdCBpbnRyb2R1Y2VzIGEgcGl4ZWwgb3IgdHdvIG9mXG4gIC8vIGppdHRlciBhcyB0aGUgdXNlciBzY3JvbGxzIHRoYXQgbWVzc2VzIHdpdGggb3VyIGFiaWxpdHkgdG8gZGV0ZWN0IGlmIHR3byBwb3NpdGlvbnNcbiAgLy8gYXJlIGVxdWl2aWxhbnQgb3Igbm90LiAgV2UgcGxhY2UgYW4gZWxlbWVudCBhdCB0aGUgdG9wIGxlZnQgb2YgdGhlIHBhZ2UgdGhhdCB3aWxsXG4gIC8vIGdldCB0aGUgc2FtZSBqaXR0ZXIsIHNvIHdlIGNhbiBjYW5jZWwgdGhlIHR3byBvdXQuXG4gIHZhciBub2RlID0gemVyb0VsZW1lbnQ7XG4gIGlmICghbm9kZSB8fCAhZG9jdW1lbnQuYm9keS5jb250YWlucyhub2RlKSkge1xuICAgIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBub2RlLnNldEF0dHJpYnV0ZSgnZGF0YS10ZXRoZXItaWQnLCB1bmlxdWVJZCgpKTtcbiAgICBleHRlbmQobm9kZS5zdHlsZSwge1xuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gICAgemVyb0VsZW1lbnQgPSBub2RlO1xuICB9XG5cbiAgdmFyIGlkID0gbm9kZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGV0aGVyLWlkJyk7XG4gIGlmICh0eXBlb2YgemVyb1Bvc0NhY2hlW2lkXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB6ZXJvUG9zQ2FjaGVbaWRdID0gZ2V0QWN0dWFsQm91bmRpbmdDbGllbnRSZWN0KG5vZGUpO1xuXG4gICAgLy8gQ2xlYXIgdGhlIGNhY2hlIHdoZW4gdGhpcyBwb3NpdGlvbiBjYWxsIGlzIGRvbmVcbiAgICBkZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICBkZWxldGUgemVyb1Bvc0NhY2hlW2lkXTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB6ZXJvUG9zQ2FjaGVbaWRdO1xufTtcblxuZnVuY3Rpb24gcmVtb3ZlVXRpbEVsZW1lbnRzKCkge1xuICBpZiAoemVyb0VsZW1lbnQpIHtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHplcm9FbGVtZW50KTtcbiAgfVxuICB6ZXJvRWxlbWVudCA9IG51bGw7XG59O1xuXG5mdW5jdGlvbiBnZXRCb3VuZHMoZWwpIHtcbiAgdmFyIGRvYyA9IHVuZGVmaW5lZDtcbiAgaWYgKGVsID09PSBkb2N1bWVudCkge1xuICAgIGRvYyA9IGRvY3VtZW50O1xuICAgIGVsID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICB9IGVsc2Uge1xuICAgIGRvYyA9IGVsLm93bmVyRG9jdW1lbnQ7XG4gIH1cblxuICB2YXIgZG9jRWwgPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXG4gIHZhciBib3ggPSBnZXRBY3R1YWxCb3VuZGluZ0NsaWVudFJlY3QoZWwpO1xuXG4gIHZhciBvcmlnaW4gPSBnZXRPcmlnaW4oKTtcblxuICBib3gudG9wIC09IG9yaWdpbi50b3A7XG4gIGJveC5sZWZ0IC09IG9yaWdpbi5sZWZ0O1xuXG4gIGlmICh0eXBlb2YgYm94LndpZHRoID09PSAndW5kZWZpbmVkJykge1xuICAgIGJveC53aWR0aCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsV2lkdGggLSBib3gubGVmdCAtIGJveC5yaWdodDtcbiAgfVxuICBpZiAodHlwZW9mIGJveC5oZWlnaHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgYm94LmhlaWdodCA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0IC0gYm94LnRvcCAtIGJveC5ib3R0b207XG4gIH1cblxuICBib3gudG9wID0gYm94LnRvcCAtIGRvY0VsLmNsaWVudFRvcDtcbiAgYm94LmxlZnQgPSBib3gubGVmdCAtIGRvY0VsLmNsaWVudExlZnQ7XG4gIGJveC5yaWdodCA9IGRvYy5ib2R5LmNsaWVudFdpZHRoIC0gYm94LndpZHRoIC0gYm94LmxlZnQ7XG4gIGJveC5ib3R0b20gPSBkb2MuYm9keS5jbGllbnRIZWlnaHQgLSBib3guaGVpZ2h0IC0gYm94LnRvcDtcblxuICByZXR1cm4gYm94O1xufVxuXG5mdW5jdGlvbiBnZXRPZmZzZXRQYXJlbnQoZWwpIHtcbiAgcmV0dXJuIGVsLm9mZnNldFBhcmVudCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG59XG5cbnZhciBfc2Nyb2xsQmFyU2l6ZSA9IG51bGw7XG5mdW5jdGlvbiBnZXRTY3JvbGxCYXJTaXplKCkge1xuICBpZiAoX3Njcm9sbEJhclNpemUpIHtcbiAgICByZXR1cm4gX3Njcm9sbEJhclNpemU7XG4gIH1cbiAgdmFyIGlubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlubmVyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICBpbm5lci5zdHlsZS5oZWlnaHQgPSAnMjAwcHgnO1xuXG4gIHZhciBvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBleHRlbmQob3V0ZXIuc3R5bGUsIHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3A6IDAsXG4gICAgbGVmdDogMCxcbiAgICBwb2ludGVyRXZlbnRzOiAnbm9uZScsXG4gICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXG4gICAgd2lkdGg6ICcyMDBweCcsXG4gICAgaGVpZ2h0OiAnMTUwcHgnLFxuICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICB9KTtcblxuICBvdXRlci5hcHBlbmRDaGlsZChpbm5lcik7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChvdXRlcik7XG5cbiAgdmFyIHdpZHRoQ29udGFpbmVkID0gaW5uZXIub2Zmc2V0V2lkdGg7XG4gIG91dGVyLnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gIHZhciB3aWR0aFNjcm9sbCA9IGlubmVyLm9mZnNldFdpZHRoO1xuXG4gIGlmICh3aWR0aENvbnRhaW5lZCA9PT0gd2lkdGhTY3JvbGwpIHtcbiAgICB3aWR0aFNjcm9sbCA9IG91dGVyLmNsaWVudFdpZHRoO1xuICB9XG5cbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChvdXRlcik7XG5cbiAgdmFyIHdpZHRoID0gd2lkdGhDb250YWluZWQgLSB3aWR0aFNjcm9sbDtcblxuICBfc2Nyb2xsQmFyU2l6ZSA9IHsgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IHdpZHRoIH07XG4gIHJldHVybiBfc2Nyb2xsQmFyU2l6ZTtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICB2YXIgb3V0ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgdmFyIGFyZ3MgPSBbXTtcblxuICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShhcmdzLCBhcmd1bWVudHMpO1xuXG4gIGFyZ3Muc2xpY2UoMSkuZm9yRWFjaChmdW5jdGlvbiAob2JqKSB7XG4gICAgaWYgKG9iaikge1xuICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICBpZiAoKHt9KS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICAgIG91dFtrZXldID0gb2JqW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsLCBuYW1lKSB7XG4gIGlmICh0eXBlb2YgZWwuY2xhc3NMaXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgIG5hbWUuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChjbHMpIHtcbiAgICAgIGlmIChjbHMudHJpbSgpKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCcoXnwgKScgKyBuYW1lLnNwbGl0KCcgJykuam9pbignfCcpICsgJyggfCQpJywgJ2dpJyk7XG4gICAgdmFyIGNsYXNzTmFtZSA9IGdldENsYXNzTmFtZShlbCkucmVwbGFjZShyZWdleCwgJyAnKTtcbiAgICBzZXRDbGFzc05hbWUoZWwsIGNsYXNzTmFtZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MoZWwsIG5hbWUpIHtcbiAgaWYgKHR5cGVvZiBlbC5jbGFzc0xpc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZS5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKGNscykge1xuICAgICAgaWYgKGNscy50cmltKCkpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJlbW92ZUNsYXNzKGVsLCBuYW1lKTtcbiAgICB2YXIgY2xzID0gZ2V0Q2xhc3NOYW1lKGVsKSArICgnICcgKyBuYW1lKTtcbiAgICBzZXRDbGFzc05hbWUoZWwsIGNscyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFzQ2xhc3MoZWwsIG5hbWUpIHtcbiAgaWYgKHR5cGVvZiBlbC5jbGFzc0xpc3QgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5jb250YWlucyhuYW1lKTtcbiAgfVxuICB2YXIgY2xhc3NOYW1lID0gZ2V0Q2xhc3NOYW1lKGVsKTtcbiAgcmV0dXJuIG5ldyBSZWdFeHAoJyhefCApJyArIG5hbWUgKyAnKCB8JCknLCAnZ2knKS50ZXN0KGNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENsYXNzTmFtZShlbCkge1xuICAvLyBDYW4ndCB1c2UganVzdCBTVkdBbmltYXRlZFN0cmluZyBoZXJlIHNpbmNlIG5vZGVzIHdpdGhpbiBhIEZyYW1lIGluIElFIGhhdmVcbiAgLy8gY29tcGxldGVseSBzZXBhcmF0ZWx5IFNWR0FuaW1hdGVkU3RyaW5nIGJhc2UgY2xhc3Nlc1xuICBpZiAoZWwuY2xhc3NOYW1lIGluc3RhbmNlb2YgZWwub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5TVkdBbmltYXRlZFN0cmluZykge1xuICAgIHJldHVybiBlbC5jbGFzc05hbWUuYmFzZVZhbDtcbiAgfVxuICByZXR1cm4gZWwuY2xhc3NOYW1lO1xufVxuXG5mdW5jdGlvbiBzZXRDbGFzc05hbWUoZWwsIGNsYXNzTmFtZSkge1xuICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY2xhc3NOYW1lKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ2xhc3NlcyhlbCwgYWRkLCBhbGwpIHtcbiAgLy8gT2YgdGhlIHNldCBvZiAnYWxsJyBjbGFzc2VzLCB3ZSBuZWVkIHRoZSAnYWRkJyBjbGFzc2VzLCBhbmQgb25seSB0aGVcbiAgLy8gJ2FkZCcgY2xhc3NlcyB0byBiZSBzZXQuXG4gIGFsbC5mb3JFYWNoKGZ1bmN0aW9uIChjbHMpIHtcbiAgICBpZiAoYWRkLmluZGV4T2YoY2xzKSA9PT0gLTEgJiYgaGFzQ2xhc3MoZWwsIGNscykpIHtcbiAgICAgIHJlbW92ZUNsYXNzKGVsLCBjbHMpO1xuICAgIH1cbiAgfSk7XG5cbiAgYWRkLmZvckVhY2goZnVuY3Rpb24gKGNscykge1xuICAgIGlmICghaGFzQ2xhc3MoZWwsIGNscykpIHtcbiAgICAgIGFkZENsYXNzKGVsLCBjbHMpO1xuICAgIH1cbiAgfSk7XG59XG5cbnZhciBkZWZlcnJlZCA9IFtdO1xuXG52YXIgZGVmZXIgPSBmdW5jdGlvbiBkZWZlcihmbikge1xuICBkZWZlcnJlZC5wdXNoKGZuKTtcbn07XG5cbnZhciBmbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCkge1xuICB2YXIgZm4gPSB1bmRlZmluZWQ7XG4gIHdoaWxlIChmbiA9IGRlZmVycmVkLnBvcCgpKSB7XG4gICAgZm4oKTtcbiAgfVxufTtcblxudmFyIEV2ZW50ZWQgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBFdmVudGVkKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFdmVudGVkKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhFdmVudGVkLCBbe1xuICAgIGtleTogJ29uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb24oZXZlbnQsIGhhbmRsZXIsIGN0eCkge1xuICAgICAgdmFyIG9uY2UgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDMgfHwgYXJndW1lbnRzWzNdID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IGFyZ3VtZW50c1szXTtcblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLmJpbmRpbmdzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmJpbmRpbmdzID0ge307XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRoaXMuYmluZGluZ3NbZXZlbnRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLmJpbmRpbmdzW2V2ZW50XSA9IFtdO1xuICAgICAgfVxuICAgICAgdGhpcy5iaW5kaW5nc1tldmVudF0ucHVzaCh7IGhhbmRsZXI6IGhhbmRsZXIsIGN0eDogY3R4LCBvbmNlOiBvbmNlIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uY2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbmNlKGV2ZW50LCBoYW5kbGVyLCBjdHgpIHtcbiAgICAgIHRoaXMub24oZXZlbnQsIGhhbmRsZXIsIGN0eCwgdHJ1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb2ZmJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb2ZmKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuYmluZGluZ3MgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiB0aGlzLmJpbmRpbmdzW2V2ZW50XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLmJpbmRpbmdzW2V2ZW50XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPCB0aGlzLmJpbmRpbmdzW2V2ZW50XS5sZW5ndGgpIHtcbiAgICAgICAgICBpZiAodGhpcy5iaW5kaW5nc1tldmVudF1baV0uaGFuZGxlciA9PT0gaGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5iaW5kaW5nc1tldmVudF0uc3BsaWNlKGksIDEpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICArK2k7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndHJpZ2dlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRyaWdnZXIoZXZlbnQpIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5iaW5kaW5ncyAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5iaW5kaW5nc1tldmVudF0pIHtcbiAgICAgICAgdmFyIGkgPSAwO1xuXG4gICAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKGkgPCB0aGlzLmJpbmRpbmdzW2V2ZW50XS5sZW5ndGgpIHtcbiAgICAgICAgICB2YXIgX2JpbmRpbmdzJGV2ZW50JGkgPSB0aGlzLmJpbmRpbmdzW2V2ZW50XVtpXTtcbiAgICAgICAgICB2YXIgaGFuZGxlciA9IF9iaW5kaW5ncyRldmVudCRpLmhhbmRsZXI7XG4gICAgICAgICAgdmFyIGN0eCA9IF9iaW5kaW5ncyRldmVudCRpLmN0eDtcbiAgICAgICAgICB2YXIgb25jZSA9IF9iaW5kaW5ncyRldmVudCRpLm9uY2U7XG5cbiAgICAgICAgICB2YXIgY29udGV4dCA9IGN0eDtcbiAgICAgICAgICBpZiAodHlwZW9mIGNvbnRleHQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb250ZXh0ID0gdGhpcztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoYW5kbGVyLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXG4gICAgICAgICAgaWYgKG9uY2UpIHtcbiAgICAgICAgICAgIHRoaXMuYmluZGluZ3NbZXZlbnRdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgKytpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBFdmVudGVkO1xufSkoKTtcblxuVGV0aGVyQmFzZS5VdGlscyA9IHtcbiAgZ2V0QWN0dWFsQm91bmRpbmdDbGllbnRSZWN0OiBnZXRBY3R1YWxCb3VuZGluZ0NsaWVudFJlY3QsXG4gIGdldFNjcm9sbFBhcmVudHM6IGdldFNjcm9sbFBhcmVudHMsXG4gIGdldEJvdW5kczogZ2V0Qm91bmRzLFxuICBnZXRPZmZzZXRQYXJlbnQ6IGdldE9mZnNldFBhcmVudCxcbiAgZXh0ZW5kOiBleHRlbmQsXG4gIGFkZENsYXNzOiBhZGRDbGFzcyxcbiAgcmVtb3ZlQ2xhc3M6IHJlbW92ZUNsYXNzLFxuICBoYXNDbGFzczogaGFzQ2xhc3MsXG4gIHVwZGF0ZUNsYXNzZXM6IHVwZGF0ZUNsYXNzZXMsXG4gIGRlZmVyOiBkZWZlcixcbiAgZmx1c2g6IGZsdXNoLFxuICB1bmlxdWVJZDogdW5pcXVlSWQsXG4gIEV2ZW50ZWQ6IEV2ZW50ZWQsXG4gIGdldFNjcm9sbEJhclNpemU6IGdldFNjcm9sbEJhclNpemUsXG4gIHJlbW92ZVV0aWxFbGVtZW50czogcmVtb3ZlVXRpbEVsZW1lbnRzXG59O1xuLyogZ2xvYmFscyBUZXRoZXJCYXNlLCBwZXJmb3JtYW5jZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfc2xpY2VkVG9BcnJheSA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pWydyZXR1cm4nXSkgX2lbJ3JldHVybiddKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UnKTsgfSB9OyB9KSgpO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG52YXIgX2dldCA9IGZ1bmN0aW9uIGdldChfeDYsIF94NywgX3g4KSB7IHZhciBfYWdhaW4gPSB0cnVlOyBfZnVuY3Rpb246IHdoaWxlIChfYWdhaW4pIHsgdmFyIG9iamVjdCA9IF94NiwgcHJvcGVydHkgPSBfeDcsIHJlY2VpdmVyID0gX3g4OyBfYWdhaW4gPSBmYWxzZTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IF94NiA9IHBhcmVudDsgX3g3ID0gcHJvcGVydHk7IF94OCA9IHJlY2VpdmVyOyBfYWdhaW4gPSB0cnVlOyBkZXNjID0gcGFyZW50ID0gdW5kZWZpbmVkOyBjb250aW51ZSBfZnVuY3Rpb247IH0gfSBlbHNlIGlmICgndmFsdWUnIGluIGRlc2MpIHsgcmV0dXJuIGRlc2MudmFsdWU7IH0gZWxzZSB7IHZhciBnZXR0ZXIgPSBkZXNjLmdldDsgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTsgfSB9IH07XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uJyk7IH0gfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSAnZnVuY3Rpb24nICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCAnICsgdHlwZW9mIHN1cGVyQ2xhc3MpOyB9IHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogc3ViQ2xhc3MsIGVudW1lcmFibGU6IGZhbHNlLCB3cml0YWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlIH0gfSk7IGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG5pZiAodHlwZW9mIFRldGhlckJhc2UgPT09ICd1bmRlZmluZWQnKSB7XG4gIHRocm93IG5ldyBFcnJvcignWW91IG11c3QgaW5jbHVkZSB0aGUgdXRpbHMuanMgZmlsZSBiZWZvcmUgdGV0aGVyLmpzJyk7XG59XG5cbnZhciBfVGV0aGVyQmFzZSRVdGlscyA9IFRldGhlckJhc2UuVXRpbHM7XG52YXIgZ2V0U2Nyb2xsUGFyZW50cyA9IF9UZXRoZXJCYXNlJFV0aWxzLmdldFNjcm9sbFBhcmVudHM7XG52YXIgZ2V0Qm91bmRzID0gX1RldGhlckJhc2UkVXRpbHMuZ2V0Qm91bmRzO1xudmFyIGdldE9mZnNldFBhcmVudCA9IF9UZXRoZXJCYXNlJFV0aWxzLmdldE9mZnNldFBhcmVudDtcbnZhciBleHRlbmQgPSBfVGV0aGVyQmFzZSRVdGlscy5leHRlbmQ7XG52YXIgYWRkQ2xhc3MgPSBfVGV0aGVyQmFzZSRVdGlscy5hZGRDbGFzcztcbnZhciByZW1vdmVDbGFzcyA9IF9UZXRoZXJCYXNlJFV0aWxzLnJlbW92ZUNsYXNzO1xudmFyIHVwZGF0ZUNsYXNzZXMgPSBfVGV0aGVyQmFzZSRVdGlscy51cGRhdGVDbGFzc2VzO1xudmFyIGRlZmVyID0gX1RldGhlckJhc2UkVXRpbHMuZGVmZXI7XG52YXIgZmx1c2ggPSBfVGV0aGVyQmFzZSRVdGlscy5mbHVzaDtcbnZhciBnZXRTY3JvbGxCYXJTaXplID0gX1RldGhlckJhc2UkVXRpbHMuZ2V0U2Nyb2xsQmFyU2l6ZTtcbnZhciByZW1vdmVVdGlsRWxlbWVudHMgPSBfVGV0aGVyQmFzZSRVdGlscy5yZW1vdmVVdGlsRWxlbWVudHM7XG5cbmZ1bmN0aW9uIHdpdGhpbihhLCBiKSB7XG4gIHZhciBkaWZmID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gMSA6IGFyZ3VtZW50c1syXTtcblxuICByZXR1cm4gYSArIGRpZmYgPj0gYiAmJiBiID49IGEgLSBkaWZmO1xufVxuXG52YXIgdHJhbnNmb3JtS2V5ID0gKGZ1bmN0aW9uICgpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgdmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgdmFyIHRyYW5zZm9ybXMgPSBbJ3RyYW5zZm9ybScsICdXZWJraXRUcmFuc2Zvcm0nLCAnT1RyYW5zZm9ybScsICdNb3pUcmFuc2Zvcm0nLCAnbXNUcmFuc2Zvcm0nXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0cmFuc2Zvcm1zLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIGtleSA9IHRyYW5zZm9ybXNbaV07XG4gICAgaWYgKGVsLnN0eWxlW2tleV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbn0pKCk7XG5cbnZhciB0ZXRoZXJzID0gW107XG5cbnZhciBwb3NpdGlvbiA9IGZ1bmN0aW9uIHBvc2l0aW9uKCkge1xuICB0ZXRoZXJzLmZvckVhY2goZnVuY3Rpb24gKHRldGhlcikge1xuICAgIHRldGhlci5wb3NpdGlvbihmYWxzZSk7XG4gIH0pO1xuICBmbHVzaCgpO1xufTtcblxuZnVuY3Rpb24gbm93KCkge1xuICBpZiAodHlwZW9mIHBlcmZvcm1hbmNlID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgcGVyZm9ybWFuY2Uubm93ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpO1xuICB9XG4gIHJldHVybiArbmV3IERhdGUoKTtcbn1cblxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGxhc3RDYWxsID0gbnVsbDtcbiAgdmFyIGxhc3REdXJhdGlvbiA9IG51bGw7XG4gIHZhciBwZW5kaW5nVGltZW91dCA9IG51bGw7XG5cbiAgdmFyIHRpY2sgPSBmdW5jdGlvbiB0aWNrKCkge1xuICAgIGlmICh0eXBlb2YgbGFzdER1cmF0aW9uICE9PSAndW5kZWZpbmVkJyAmJiBsYXN0RHVyYXRpb24gPiAxNikge1xuICAgICAgLy8gV2Ugdm9sdW50YXJpbHkgdGhyb3R0bGUgb3Vyc2VsdmVzIGlmIHdlIGNhbid0IG1hbmFnZSA2MGZwc1xuICAgICAgbGFzdER1cmF0aW9uID0gTWF0aC5taW4obGFzdER1cmF0aW9uIC0gMTYsIDI1MCk7XG5cbiAgICAgIC8vIEp1c3QgaW4gY2FzZSB0aGlzIGlzIHRoZSBsYXN0IGV2ZW50LCByZW1lbWJlciB0byBwb3NpdGlvbiBqdXN0IG9uY2UgbW9yZVxuICAgICAgcGVuZGluZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KHRpY2ssIDI1MCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBsYXN0Q2FsbCAhPT0gJ3VuZGVmaW5lZCcgJiYgbm93KCkgLSBsYXN0Q2FsbCA8IDEwKSB7XG4gICAgICAvLyBTb21lIGJyb3dzZXJzIGNhbGwgZXZlbnRzIGEgbGl0dGxlIHRvbyBmcmVxdWVudGx5LCByZWZ1c2UgdG8gcnVuIG1vcmUgdGhhbiBpcyByZWFzb25hYmxlXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHBlbmRpbmdUaW1lb3V0ICE9IG51bGwpIHtcbiAgICAgIGNsZWFyVGltZW91dChwZW5kaW5nVGltZW91dCk7XG4gICAgICBwZW5kaW5nVGltZW91dCA9IG51bGw7XG4gICAgfVxuXG4gICAgbGFzdENhbGwgPSBub3coKTtcbiAgICBwb3NpdGlvbigpO1xuICAgIGxhc3REdXJhdGlvbiA9IG5vdygpIC0gbGFzdENhbGw7XG4gIH07XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBbJ3Jlc2l6ZScsICdzY3JvbGwnLCAndG91Y2htb3ZlJ10uZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCB0aWNrKTtcbiAgICB9KTtcbiAgfVxufSkoKTtcblxudmFyIE1JUlJPUl9MUiA9IHtcbiAgY2VudGVyOiAnY2VudGVyJyxcbiAgbGVmdDogJ3JpZ2h0JyxcbiAgcmlnaHQ6ICdsZWZ0J1xufTtcblxudmFyIE1JUlJPUl9UQiA9IHtcbiAgbWlkZGxlOiAnbWlkZGxlJyxcbiAgdG9wOiAnYm90dG9tJyxcbiAgYm90dG9tOiAndG9wJ1xufTtcblxudmFyIE9GRlNFVF9NQVAgPSB7XG4gIHRvcDogMCxcbiAgbGVmdDogMCxcbiAgbWlkZGxlOiAnNTAlJyxcbiAgY2VudGVyOiAnNTAlJyxcbiAgYm90dG9tOiAnMTAwJScsXG4gIHJpZ2h0OiAnMTAwJSdcbn07XG5cbnZhciBhdXRvVG9GaXhlZEF0dGFjaG1lbnQgPSBmdW5jdGlvbiBhdXRvVG9GaXhlZEF0dGFjaG1lbnQoYXR0YWNobWVudCwgcmVsYXRpdmVUb0F0dGFjaG1lbnQpIHtcbiAgdmFyIGxlZnQgPSBhdHRhY2htZW50LmxlZnQ7XG4gIHZhciB0b3AgPSBhdHRhY2htZW50LnRvcDtcblxuICBpZiAobGVmdCA9PT0gJ2F1dG8nKSB7XG4gICAgbGVmdCA9IE1JUlJPUl9MUltyZWxhdGl2ZVRvQXR0YWNobWVudC5sZWZ0XTtcbiAgfVxuXG4gIGlmICh0b3AgPT09ICdhdXRvJykge1xuICAgIHRvcCA9IE1JUlJPUl9UQltyZWxhdGl2ZVRvQXR0YWNobWVudC50b3BdO1xuICB9XG5cbiAgcmV0dXJuIHsgbGVmdDogbGVmdCwgdG9wOiB0b3AgfTtcbn07XG5cbnZhciBhdHRhY2htZW50VG9PZmZzZXQgPSBmdW5jdGlvbiBhdHRhY2htZW50VG9PZmZzZXQoYXR0YWNobWVudCkge1xuICB2YXIgbGVmdCA9IGF0dGFjaG1lbnQubGVmdDtcbiAgdmFyIHRvcCA9IGF0dGFjaG1lbnQudG9wO1xuXG4gIGlmICh0eXBlb2YgT0ZGU0VUX01BUFthdHRhY2htZW50LmxlZnRdICE9PSAndW5kZWZpbmVkJykge1xuICAgIGxlZnQgPSBPRkZTRVRfTUFQW2F0dGFjaG1lbnQubGVmdF07XG4gIH1cblxuICBpZiAodHlwZW9mIE9GRlNFVF9NQVBbYXR0YWNobWVudC50b3BdICE9PSAndW5kZWZpbmVkJykge1xuICAgIHRvcCA9IE9GRlNFVF9NQVBbYXR0YWNobWVudC50b3BdO1xuICB9XG5cbiAgcmV0dXJuIHsgbGVmdDogbGVmdCwgdG9wOiB0b3AgfTtcbn07XG5cbmZ1bmN0aW9uIGFkZE9mZnNldCgpIHtcbiAgdmFyIG91dCA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG9mZnNldHMgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBvZmZzZXRzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgb2Zmc2V0cy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgdmFyIHRvcCA9IF9yZWYudG9wO1xuICAgIHZhciBsZWZ0ID0gX3JlZi5sZWZ0O1xuXG4gICAgaWYgKHR5cGVvZiB0b3AgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0b3AgPSBwYXJzZUZsb2F0KHRvcCwgMTApO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGxlZnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZWZ0ID0gcGFyc2VGbG9hdChsZWZ0LCAxMCk7XG4gICAgfVxuXG4gICAgb3V0LnRvcCArPSB0b3A7XG4gICAgb3V0LmxlZnQgKz0gbGVmdDtcbiAgfSk7XG5cbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gb2Zmc2V0VG9QeChvZmZzZXQsIHNpemUpIHtcbiAgaWYgKHR5cGVvZiBvZmZzZXQubGVmdCA9PT0gJ3N0cmluZycgJiYgb2Zmc2V0LmxlZnQuaW5kZXhPZignJScpICE9PSAtMSkge1xuICAgIG9mZnNldC5sZWZ0ID0gcGFyc2VGbG9hdChvZmZzZXQubGVmdCwgMTApIC8gMTAwICogc2l6ZS53aWR0aDtcbiAgfVxuICBpZiAodHlwZW9mIG9mZnNldC50b3AgPT09ICdzdHJpbmcnICYmIG9mZnNldC50b3AuaW5kZXhPZignJScpICE9PSAtMSkge1xuICAgIG9mZnNldC50b3AgPSBwYXJzZUZsb2F0KG9mZnNldC50b3AsIDEwKSAvIDEwMCAqIHNpemUuaGVpZ2h0O1xuICB9XG5cbiAgcmV0dXJuIG9mZnNldDtcbn1cblxudmFyIHBhcnNlT2Zmc2V0ID0gZnVuY3Rpb24gcGFyc2VPZmZzZXQodmFsdWUpIHtcbiAgdmFyIF92YWx1ZSRzcGxpdCA9IHZhbHVlLnNwbGl0KCcgJyk7XG5cbiAgdmFyIF92YWx1ZSRzcGxpdDIgPSBfc2xpY2VkVG9BcnJheShfdmFsdWUkc3BsaXQsIDIpO1xuXG4gIHZhciB0b3AgPSBfdmFsdWUkc3BsaXQyWzBdO1xuICB2YXIgbGVmdCA9IF92YWx1ZSRzcGxpdDJbMV07XG5cbiAgcmV0dXJuIHsgdG9wOiB0b3AsIGxlZnQ6IGxlZnQgfTtcbn07XG52YXIgcGFyc2VBdHRhY2htZW50ID0gcGFyc2VPZmZzZXQ7XG5cbnZhciBUZXRoZXJDbGFzcyA9IChmdW5jdGlvbiAoX0V2ZW50ZWQpIHtcbiAgX2luaGVyaXRzKFRldGhlckNsYXNzLCBfRXZlbnRlZCk7XG5cbiAgZnVuY3Rpb24gVGV0aGVyQ2xhc3Mob3B0aW9ucykge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGV0aGVyQ2xhc3MpO1xuXG4gICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoVGV0aGVyQ2xhc3MucHJvdG90eXBlKSwgJ2NvbnN0cnVjdG9yJywgdGhpcykuY2FsbCh0aGlzKTtcbiAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5iaW5kKHRoaXMpO1xuXG4gICAgdGV0aGVycy5wdXNoKHRoaXMpO1xuXG4gICAgdGhpcy5oaXN0b3J5ID0gW107XG5cbiAgICB0aGlzLnNldE9wdGlvbnMob3B0aW9ucywgZmFsc2UpO1xuXG4gICAgVGV0aGVyQmFzZS5tb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgICAgaWYgKHR5cGVvZiBtb2R1bGUuaW5pdGlhbGl6ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgbW9kdWxlLmluaXRpYWxpemUuY2FsbChfdGhpcyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnBvc2l0aW9uKCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoVGV0aGVyQ2xhc3MsIFt7XG4gICAga2V5OiAnZ2V0Q2xhc3MnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDbGFzcygpIHtcbiAgICAgIHZhciBrZXkgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyAnJyA6IGFyZ3VtZW50c1swXTtcbiAgICAgIHZhciBjbGFzc2VzID0gdGhpcy5vcHRpb25zLmNsYXNzZXM7XG5cbiAgICAgIGlmICh0eXBlb2YgY2xhc3NlcyAhPT0gJ3VuZGVmaW5lZCcgJiYgY2xhc3Nlc1trZXldKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY2xhc3Nlc1trZXldO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuY2xhc3NQcmVmaXgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jbGFzc1ByZWZpeCArICctJyArIGtleTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0T3B0aW9ucycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBwb3MgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB0cnVlIDogYXJndW1lbnRzWzFdO1xuXG4gICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgIG9mZnNldDogJzAgMCcsXG4gICAgICAgIHRhcmdldE9mZnNldDogJzAgMCcsXG4gICAgICAgIHRhcmdldEF0dGFjaG1lbnQ6ICdhdXRvIGF1dG8nLFxuICAgICAgICBjbGFzc1ByZWZpeDogJ3RldGhlcidcbiAgICAgIH07XG5cbiAgICAgIHRoaXMub3B0aW9ucyA9IGV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG5cbiAgICAgIHZhciBfb3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgICAgIHZhciBlbGVtZW50ID0gX29wdGlvbnMuZWxlbWVudDtcbiAgICAgIHZhciB0YXJnZXQgPSBfb3B0aW9ucy50YXJnZXQ7XG4gICAgICB2YXIgdGFyZ2V0TW9kaWZpZXIgPSBfb3B0aW9ucy50YXJnZXRNb2RpZmllcjtcblxuICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgdGhpcy50YXJnZXRNb2RpZmllciA9IHRhcmdldE1vZGlmaWVyO1xuXG4gICAgICBpZiAodGhpcy50YXJnZXQgPT09ICd2aWV3cG9ydCcpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBkb2N1bWVudC5ib2R5O1xuICAgICAgICB0aGlzLnRhcmdldE1vZGlmaWVyID0gJ3Zpc2libGUnO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnRhcmdldCA9PT0gJ3Njcm9sbC1oYW5kbGUnKSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gZG9jdW1lbnQuYm9keTtcbiAgICAgICAgdGhpcy50YXJnZXRNb2RpZmllciA9ICdzY3JvbGwtaGFuZGxlJztcbiAgICAgIH1cblxuICAgICAgWydlbGVtZW50JywgJ3RhcmdldCddLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAodHlwZW9mIF90aGlzMltrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGV0aGVyIEVycm9yOiBCb3RoIGVsZW1lbnQgYW5kIHRhcmdldCBtdXN0IGJlIGRlZmluZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgX3RoaXMyW2tleV0uanF1ZXJ5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgIF90aGlzMltrZXldID0gX3RoaXMyW2tleV1bMF07XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIF90aGlzMltrZXldID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIF90aGlzMltrZXldID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihfdGhpczJba2V5XSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQsIHRoaXMuZ2V0Q2xhc3MoJ2VsZW1lbnQnKSk7XG4gICAgICBpZiAoISh0aGlzLm9wdGlvbnMuYWRkVGFyZ2V0Q2xhc3NlcyA9PT0gZmFsc2UpKSB7XG4gICAgICAgIGFkZENsYXNzKHRoaXMudGFyZ2V0LCB0aGlzLmdldENsYXNzKCd0YXJnZXQnKSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5vcHRpb25zLmF0dGFjaG1lbnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUZXRoZXIgRXJyb3I6IFlvdSBtdXN0IHByb3ZpZGUgYW4gYXR0YWNobWVudCcpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnRhcmdldEF0dGFjaG1lbnQgPSBwYXJzZUF0dGFjaG1lbnQodGhpcy5vcHRpb25zLnRhcmdldEF0dGFjaG1lbnQpO1xuICAgICAgdGhpcy5hdHRhY2htZW50ID0gcGFyc2VBdHRhY2htZW50KHRoaXMub3B0aW9ucy5hdHRhY2htZW50KTtcbiAgICAgIHRoaXMub2Zmc2V0ID0gcGFyc2VPZmZzZXQodGhpcy5vcHRpb25zLm9mZnNldCk7XG4gICAgICB0aGlzLnRhcmdldE9mZnNldCA9IHBhcnNlT2Zmc2V0KHRoaXMub3B0aW9ucy50YXJnZXRPZmZzZXQpO1xuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuc2Nyb2xsUGFyZW50cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnRhcmdldE1vZGlmaWVyID09PSAnc2Nyb2xsLWhhbmRsZScpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxQYXJlbnRzID0gW3RoaXMudGFyZ2V0XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsUGFyZW50cyA9IGdldFNjcm9sbFBhcmVudHModGhpcy50YXJnZXQpO1xuICAgICAgfVxuXG4gICAgICBpZiAoISh0aGlzLm9wdGlvbnMuZW5hYmxlZCA9PT0gZmFsc2UpKSB7XG4gICAgICAgIHRoaXMuZW5hYmxlKHBvcyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VGFyZ2V0Qm91bmRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VGFyZ2V0Qm91bmRzKCkge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLnRhcmdldE1vZGlmaWVyICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBpZiAodGhpcy50YXJnZXRNb2RpZmllciA9PT0gJ3Zpc2libGUnKSB7XG4gICAgICAgICAgaWYgKHRoaXMudGFyZ2V0ID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICByZXR1cm4geyB0b3A6IHBhZ2VZT2Zmc2V0LCBsZWZ0OiBwYWdlWE9mZnNldCwgaGVpZ2h0OiBpbm5lckhlaWdodCwgd2lkdGg6IGlubmVyV2lkdGggfTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGJvdW5kcyA9IGdldEJvdW5kcyh0aGlzLnRhcmdldCk7XG5cbiAgICAgICAgICAgIHZhciBvdXQgPSB7XG4gICAgICAgICAgICAgIGhlaWdodDogYm91bmRzLmhlaWdodCxcbiAgICAgICAgICAgICAgd2lkdGg6IGJvdW5kcy53aWR0aCxcbiAgICAgICAgICAgICAgdG9wOiBib3VuZHMudG9wLFxuICAgICAgICAgICAgICBsZWZ0OiBib3VuZHMubGVmdFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgb3V0LmhlaWdodCA9IE1hdGgubWluKG91dC5oZWlnaHQsIGJvdW5kcy5oZWlnaHQgLSAocGFnZVlPZmZzZXQgLSBib3VuZHMudG9wKSk7XG4gICAgICAgICAgICBvdXQuaGVpZ2h0ID0gTWF0aC5taW4ob3V0LmhlaWdodCwgYm91bmRzLmhlaWdodCAtIChib3VuZHMudG9wICsgYm91bmRzLmhlaWdodCAtIChwYWdlWU9mZnNldCArIGlubmVySGVpZ2h0KSkpO1xuICAgICAgICAgICAgb3V0LmhlaWdodCA9IE1hdGgubWluKGlubmVySGVpZ2h0LCBvdXQuaGVpZ2h0KTtcbiAgICAgICAgICAgIG91dC5oZWlnaHQgLT0gMjtcblxuICAgICAgICAgICAgb3V0LndpZHRoID0gTWF0aC5taW4ob3V0LndpZHRoLCBib3VuZHMud2lkdGggLSAocGFnZVhPZmZzZXQgLSBib3VuZHMubGVmdCkpO1xuICAgICAgICAgICAgb3V0LndpZHRoID0gTWF0aC5taW4ob3V0LndpZHRoLCBib3VuZHMud2lkdGggLSAoYm91bmRzLmxlZnQgKyBib3VuZHMud2lkdGggLSAocGFnZVhPZmZzZXQgKyBpbm5lcldpZHRoKSkpO1xuICAgICAgICAgICAgb3V0LndpZHRoID0gTWF0aC5taW4oaW5uZXJXaWR0aCwgb3V0LndpZHRoKTtcbiAgICAgICAgICAgIG91dC53aWR0aCAtPSAyO1xuXG4gICAgICAgICAgICBpZiAob3V0LnRvcCA8IHBhZ2VZT2Zmc2V0KSB7XG4gICAgICAgICAgICAgIG91dC50b3AgPSBwYWdlWU9mZnNldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvdXQubGVmdCA8IHBhZ2VYT2Zmc2V0KSB7XG4gICAgICAgICAgICAgIG91dC5sZWZ0ID0gcGFnZVhPZmZzZXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudGFyZ2V0TW9kaWZpZXIgPT09ICdzY3JvbGwtaGFuZGxlJykge1xuICAgICAgICAgIHZhciBib3VuZHMgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgICAgICAgIGlmICh0YXJnZXQgPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgICAgICAgYm91bmRzID0ge1xuICAgICAgICAgICAgICBsZWZ0OiBwYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgdG9wOiBwYWdlWU9mZnNldCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBpbm5lckhlaWdodCxcbiAgICAgICAgICAgICAgd2lkdGg6IGlubmVyV2lkdGhcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvdW5kcyA9IGdldEJvdW5kcyh0YXJnZXQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGFyZ2V0KTtcblxuICAgICAgICAgIHZhciBoYXNCb3R0b21TY3JvbGwgPSB0YXJnZXQuc2Nyb2xsV2lkdGggPiB0YXJnZXQuY2xpZW50V2lkdGggfHwgW3N0eWxlLm92ZXJmbG93LCBzdHlsZS5vdmVyZmxvd1hdLmluZGV4T2YoJ3Njcm9sbCcpID49IDAgfHwgdGhpcy50YXJnZXQgIT09IGRvY3VtZW50LmJvZHk7XG5cbiAgICAgICAgICB2YXIgc2Nyb2xsQm90dG9tID0gMDtcbiAgICAgICAgICBpZiAoaGFzQm90dG9tU2Nyb2xsKSB7XG4gICAgICAgICAgICBzY3JvbGxCb3R0b20gPSAxNTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgaGVpZ2h0ID0gYm91bmRzLmhlaWdodCAtIHBhcnNlRmxvYXQoc3R5bGUuYm9yZGVyVG9wV2lkdGgpIC0gcGFyc2VGbG9hdChzdHlsZS5ib3JkZXJCb3R0b21XaWR0aCkgLSBzY3JvbGxCb3R0b207XG5cbiAgICAgICAgICB2YXIgb3V0ID0ge1xuICAgICAgICAgICAgd2lkdGg6IDE1LFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHQgKiAwLjk3NSAqIChoZWlnaHQgLyB0YXJnZXQuc2Nyb2xsSGVpZ2h0KSxcbiAgICAgICAgICAgIGxlZnQ6IGJvdW5kcy5sZWZ0ICsgYm91bmRzLndpZHRoIC0gcGFyc2VGbG9hdChzdHlsZS5ib3JkZXJMZWZ0V2lkdGgpIC0gMTVcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgdmFyIGZpdEFkaiA9IDA7XG4gICAgICAgICAgaWYgKGhlaWdodCA8IDQwOCAmJiB0aGlzLnRhcmdldCA9PT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgZml0QWRqID0gLTAuMDAwMTEgKiBNYXRoLnBvdyhoZWlnaHQsIDIpIC0gMC4wMDcyNyAqIGhlaWdodCArIDIyLjU4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLnRhcmdldCAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgb3V0LmhlaWdodCA9IE1hdGgubWF4KG91dC5oZWlnaHQsIDI0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgc2Nyb2xsUGVyY2VudGFnZSA9IHRoaXMudGFyZ2V0LnNjcm9sbFRvcCAvICh0YXJnZXQuc2Nyb2xsSGVpZ2h0IC0gaGVpZ2h0KTtcbiAgICAgICAgICBvdXQudG9wID0gc2Nyb2xsUGVyY2VudGFnZSAqIChoZWlnaHQgLSBvdXQuaGVpZ2h0IC0gZml0QWRqKSArIGJvdW5kcy50b3AgKyBwYXJzZUZsb2F0KHN0eWxlLmJvcmRlclRvcFdpZHRoKTtcblxuICAgICAgICAgIGlmICh0aGlzLnRhcmdldCA9PT0gZG9jdW1lbnQuYm9keSkge1xuICAgICAgICAgICAgb3V0LmhlaWdodCA9IE1hdGgubWF4KG91dC5oZWlnaHQsIDI0KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZ2V0Qm91bmRzKHRoaXMudGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjbGVhckNhY2hlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXJDYWNoZSgpIHtcbiAgICAgIHRoaXMuX2NhY2hlID0ge307XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY2FjaGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjYWNoZShrLCBnZXR0ZXIpIHtcbiAgICAgIC8vIE1vcmUgdGhhbiBvbmUgbW9kdWxlIHdpbGwgb2Z0ZW4gbmVlZCB0aGUgc2FtZSBET00gaW5mbywgc29cbiAgICAgIC8vIHdlIGtlZXAgYSBjYWNoZSB3aGljaCBpcyBjbGVhcmVkIG9uIGVhY2ggcG9zaXRpb24gY2FsbFxuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jYWNoZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5fY2FjaGUgPSB7fTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jYWNoZVtrXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5fY2FjaGVba10gPSBnZXR0ZXIuY2FsbCh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuX2NhY2hlW2tdO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2VuYWJsZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGVuYWJsZSgpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICB2YXIgcG9zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IGFyZ3VtZW50c1swXTtcblxuICAgICAgaWYgKCEodGhpcy5vcHRpb25zLmFkZFRhcmdldENsYXNzZXMgPT09IGZhbHNlKSkge1xuICAgICAgICBhZGRDbGFzcyh0aGlzLnRhcmdldCwgdGhpcy5nZXRDbGFzcygnZW5hYmxlZCcpKTtcbiAgICAgIH1cbiAgICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudCwgdGhpcy5nZXRDbGFzcygnZW5hYmxlZCcpKTtcbiAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAgIHRoaXMuc2Nyb2xsUGFyZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudCAhPT0gX3RoaXMzLnRhcmdldC5vd25lckRvY3VtZW50KSB7XG4gICAgICAgICAgcGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIF90aGlzMy5wb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAocG9zKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24oKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkaXNhYmxlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGlzYWJsZSgpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICByZW1vdmVDbGFzcyh0aGlzLnRhcmdldCwgdGhpcy5nZXRDbGFzcygnZW5hYmxlZCcpKTtcbiAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudCwgdGhpcy5nZXRDbGFzcygnZW5hYmxlZCcpKTtcbiAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuc2Nyb2xsUGFyZW50cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxQYXJlbnRzLmZvckVhY2goZnVuY3Rpb24gKHBhcmVudCkge1xuICAgICAgICAgIHBhcmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBfdGhpczQucG9zaXRpb24pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkZXN0cm95JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHZhciBfdGhpczUgPSB0aGlzO1xuXG4gICAgICB0aGlzLmRpc2FibGUoKTtcblxuICAgICAgdGV0aGVycy5mb3JFYWNoKGZ1bmN0aW9uICh0ZXRoZXIsIGkpIHtcbiAgICAgICAgaWYgKHRldGhlciA9PT0gX3RoaXM1KSB7XG4gICAgICAgICAgdGV0aGVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBSZW1vdmUgYW55IGVsZW1lbnRzIHdlIHdlcmUgdXNpbmcgZm9yIGNvbnZlbmllbmNlIGZyb20gdGhlIERPTVxuICAgICAgaWYgKHRldGhlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlbW92ZVV0aWxFbGVtZW50cygpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VwZGF0ZUF0dGFjaENsYXNzZXMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVBdHRhY2hDbGFzc2VzKGVsZW1lbnRBdHRhY2gsIHRhcmdldEF0dGFjaCkge1xuICAgICAgdmFyIF90aGlzNiA9IHRoaXM7XG5cbiAgICAgIGVsZW1lbnRBdHRhY2ggPSBlbGVtZW50QXR0YWNoIHx8IHRoaXMuYXR0YWNobWVudDtcbiAgICAgIHRhcmdldEF0dGFjaCA9IHRhcmdldEF0dGFjaCB8fCB0aGlzLnRhcmdldEF0dGFjaG1lbnQ7XG4gICAgICB2YXIgc2lkZXMgPSBbJ2xlZnQnLCAndG9wJywgJ2JvdHRvbScsICdyaWdodCcsICdtaWRkbGUnLCAnY2VudGVyJ107XG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5fYWRkQXR0YWNoQ2xhc3NlcyAhPT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5fYWRkQXR0YWNoQ2xhc3Nlcy5sZW5ndGgpIHtcbiAgICAgICAgLy8gdXBkYXRlQXR0YWNoQ2xhc3NlcyBjYW4gYmUgY2FsbGVkIG1vcmUgdGhhbiBvbmNlIGluIGEgcG9zaXRpb24gY2FsbCwgc29cbiAgICAgICAgLy8gd2UgbmVlZCB0byBjbGVhbiB1cCBhZnRlciBvdXJzZWx2ZXMgc3VjaCB0aGF0IHdoZW4gdGhlIGxhc3QgZGVmZXIgZ2V0c1xuICAgICAgICAvLyByYW4gaXQgZG9lc24ndCBhZGQgYW55IGV4dHJhIGNsYXNzZXMgZnJvbSBwcmV2aW91cyBjYWxscy5cbiAgICAgICAgdGhpcy5fYWRkQXR0YWNoQ2xhc3Nlcy5zcGxpY2UoMCwgdGhpcy5fYWRkQXR0YWNoQ2xhc3Nlcy5sZW5ndGgpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHRoaXMuX2FkZEF0dGFjaENsYXNzZXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRoaXMuX2FkZEF0dGFjaENsYXNzZXMgPSBbXTtcbiAgICAgIH1cbiAgICAgIHZhciBhZGQgPSB0aGlzLl9hZGRBdHRhY2hDbGFzc2VzO1xuXG4gICAgICBpZiAoZWxlbWVudEF0dGFjaC50b3ApIHtcbiAgICAgICAgYWRkLnB1c2godGhpcy5nZXRDbGFzcygnZWxlbWVudC1hdHRhY2hlZCcpICsgJy0nICsgZWxlbWVudEF0dGFjaC50b3ApO1xuICAgICAgfVxuICAgICAgaWYgKGVsZW1lbnRBdHRhY2gubGVmdCkge1xuICAgICAgICBhZGQucHVzaCh0aGlzLmdldENsYXNzKCdlbGVtZW50LWF0dGFjaGVkJykgKyAnLScgKyBlbGVtZW50QXR0YWNoLmxlZnQpO1xuICAgICAgfVxuICAgICAgaWYgKHRhcmdldEF0dGFjaC50b3ApIHtcbiAgICAgICAgYWRkLnB1c2godGhpcy5nZXRDbGFzcygndGFyZ2V0LWF0dGFjaGVkJykgKyAnLScgKyB0YXJnZXRBdHRhY2gudG9wKTtcbiAgICAgIH1cbiAgICAgIGlmICh0YXJnZXRBdHRhY2gubGVmdCkge1xuICAgICAgICBhZGQucHVzaCh0aGlzLmdldENsYXNzKCd0YXJnZXQtYXR0YWNoZWQnKSArICctJyArIHRhcmdldEF0dGFjaC5sZWZ0KTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFsbCA9IFtdO1xuICAgICAgc2lkZXMuZm9yRWFjaChmdW5jdGlvbiAoc2lkZSkge1xuICAgICAgICBhbGwucHVzaChfdGhpczYuZ2V0Q2xhc3MoJ2VsZW1lbnQtYXR0YWNoZWQnKSArICctJyArIHNpZGUpO1xuICAgICAgICBhbGwucHVzaChfdGhpczYuZ2V0Q2xhc3MoJ3RhcmdldC1hdHRhY2hlZCcpICsgJy0nICsgc2lkZSk7XG4gICAgICB9KTtcblxuICAgICAgZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoISh0eXBlb2YgX3RoaXM2Ll9hZGRBdHRhY2hDbGFzc2VzICE9PSAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVDbGFzc2VzKF90aGlzNi5lbGVtZW50LCBfdGhpczYuX2FkZEF0dGFjaENsYXNzZXMsIGFsbCk7XG4gICAgICAgIGlmICghKF90aGlzNi5vcHRpb25zLmFkZFRhcmdldENsYXNzZXMgPT09IGZhbHNlKSkge1xuICAgICAgICAgIHVwZGF0ZUNsYXNzZXMoX3RoaXM2LnRhcmdldCwgX3RoaXM2Ll9hZGRBdHRhY2hDbGFzc2VzLCBhbGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsZXRlIF90aGlzNi5fYWRkQXR0YWNoQ2xhc3NlcztcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3Bvc2l0aW9uJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcG9zaXRpb24oKSB7XG4gICAgICB2YXIgX3RoaXM3ID0gdGhpcztcblxuICAgICAgdmFyIGZsdXNoQ2hhbmdlcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhcmd1bWVudHNbMF07XG5cbiAgICAgIC8vIGZsdXNoQ2hhbmdlcyBjb21taXRzIHRoZSBjaGFuZ2VzIGltbWVkaWF0ZWx5LCBsZWF2ZSB0cnVlIHVubGVzcyB5b3UgYXJlIHBvc2l0aW9uaW5nIG11bHRpcGxlXG4gICAgICAvLyB0ZXRoZXJzIChpbiB3aGljaCBjYXNlIGNhbGwgVGV0aGVyLlV0aWxzLmZsdXNoIHlvdXJzZWxmIHdoZW4geW91J3JlIGRvbmUpXG5cbiAgICAgIGlmICghdGhpcy5lbmFibGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdGhpcy5jbGVhckNhY2hlKCk7XG5cbiAgICAgIC8vIFR1cm4gJ2F1dG8nIGF0dGFjaG1lbnRzIGludG8gdGhlIGFwcHJvcHJpYXRlIGNvcm5lciBvciBlZGdlXG4gICAgICB2YXIgdGFyZ2V0QXR0YWNobWVudCA9IGF1dG9Ub0ZpeGVkQXR0YWNobWVudCh0aGlzLnRhcmdldEF0dGFjaG1lbnQsIHRoaXMuYXR0YWNobWVudCk7XG5cbiAgICAgIHRoaXMudXBkYXRlQXR0YWNoQ2xhc3Nlcyh0aGlzLmF0dGFjaG1lbnQsIHRhcmdldEF0dGFjaG1lbnQpO1xuXG4gICAgICB2YXIgZWxlbWVudFBvcyA9IHRoaXMuY2FjaGUoJ2VsZW1lbnQtYm91bmRzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZ2V0Qm91bmRzKF90aGlzNy5lbGVtZW50KTtcbiAgICAgIH0pO1xuXG4gICAgICB2YXIgd2lkdGggPSBlbGVtZW50UG9zLndpZHRoO1xuICAgICAgdmFyIGhlaWdodCA9IGVsZW1lbnRQb3MuaGVpZ2h0O1xuXG4gICAgICBpZiAod2lkdGggPT09IDAgJiYgaGVpZ2h0ID09PSAwICYmIHR5cGVvZiB0aGlzLmxhc3RTaXplICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgX2xhc3RTaXplID0gdGhpcy5sYXN0U2l6ZTtcblxuICAgICAgICAvLyBXZSBjYWNoZSB0aGUgaGVpZ2h0IGFuZCB3aWR0aCB0byBtYWtlIGl0IHBvc3NpYmxlIHRvIHBvc2l0aW9uIGVsZW1lbnRzIHRoYXQgYXJlXG4gICAgICAgIC8vIGdldHRpbmcgaGlkZGVuLlxuICAgICAgICB3aWR0aCA9IF9sYXN0U2l6ZS53aWR0aDtcbiAgICAgICAgaGVpZ2h0ID0gX2xhc3RTaXplLmhlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGFzdFNpemUgPSB7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfTtcbiAgICAgIH1cblxuICAgICAgdmFyIHRhcmdldFBvcyA9IHRoaXMuY2FjaGUoJ3RhcmdldC1ib3VuZHMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfdGhpczcuZ2V0VGFyZ2V0Qm91bmRzKCk7XG4gICAgICB9KTtcbiAgICAgIHZhciB0YXJnZXRTaXplID0gdGFyZ2V0UG9zO1xuXG4gICAgICAvLyBHZXQgYW4gYWN0dWFsIHB4IG9mZnNldCBmcm9tIHRoZSBhdHRhY2htZW50XG4gICAgICB2YXIgb2Zmc2V0ID0gb2Zmc2V0VG9QeChhdHRhY2htZW50VG9PZmZzZXQodGhpcy5hdHRhY2htZW50KSwgeyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH0pO1xuICAgICAgdmFyIHRhcmdldE9mZnNldCA9IG9mZnNldFRvUHgoYXR0YWNobWVudFRvT2Zmc2V0KHRhcmdldEF0dGFjaG1lbnQpLCB0YXJnZXRTaXplKTtcblxuICAgICAgdmFyIG1hbnVhbE9mZnNldCA9IG9mZnNldFRvUHgodGhpcy5vZmZzZXQsIHsgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9KTtcbiAgICAgIHZhciBtYW51YWxUYXJnZXRPZmZzZXQgPSBvZmZzZXRUb1B4KHRoaXMudGFyZ2V0T2Zmc2V0LCB0YXJnZXRTaXplKTtcblxuICAgICAgLy8gQWRkIHRoZSBtYW51YWxseSBwcm92aWRlZCBvZmZzZXRcbiAgICAgIG9mZnNldCA9IGFkZE9mZnNldChvZmZzZXQsIG1hbnVhbE9mZnNldCk7XG4gICAgICB0YXJnZXRPZmZzZXQgPSBhZGRPZmZzZXQodGFyZ2V0T2Zmc2V0LCBtYW51YWxUYXJnZXRPZmZzZXQpO1xuXG4gICAgICAvLyBJdCdzIG5vdyBvdXIgZ29hbCB0byBtYWtlIChlbGVtZW50IHBvc2l0aW9uICsgb2Zmc2V0KSA9PSAodGFyZ2V0IHBvc2l0aW9uICsgdGFyZ2V0IG9mZnNldClcbiAgICAgIHZhciBsZWZ0ID0gdGFyZ2V0UG9zLmxlZnQgKyB0YXJnZXRPZmZzZXQubGVmdCAtIG9mZnNldC5sZWZ0O1xuICAgICAgdmFyIHRvcCA9IHRhcmdldFBvcy50b3AgKyB0YXJnZXRPZmZzZXQudG9wIC0gb2Zmc2V0LnRvcDtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBUZXRoZXJCYXNlLm1vZHVsZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIF9tb2R1bGUyID0gVGV0aGVyQmFzZS5tb2R1bGVzW2ldO1xuICAgICAgICB2YXIgcmV0ID0gX21vZHVsZTIucG9zaXRpb24uY2FsbCh0aGlzLCB7XG4gICAgICAgICAgbGVmdDogbGVmdCxcbiAgICAgICAgICB0b3A6IHRvcCxcbiAgICAgICAgICB0YXJnZXRBdHRhY2htZW50OiB0YXJnZXRBdHRhY2htZW50LFxuICAgICAgICAgIHRhcmdldFBvczogdGFyZ2V0UG9zLFxuICAgICAgICAgIGVsZW1lbnRQb3M6IGVsZW1lbnRQb3MsXG4gICAgICAgICAgb2Zmc2V0OiBvZmZzZXQsXG4gICAgICAgICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXQsXG4gICAgICAgICAgbWFudWFsT2Zmc2V0OiBtYW51YWxPZmZzZXQsXG4gICAgICAgICAgbWFudWFsVGFyZ2V0T2Zmc2V0OiBtYW51YWxUYXJnZXRPZmZzZXQsXG4gICAgICAgICAgc2Nyb2xsYmFyU2l6ZTogc2Nyb2xsYmFyU2l6ZSxcbiAgICAgICAgICBhdHRhY2htZW50OiB0aGlzLmF0dGFjaG1lbnRcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJldCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHJldCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHJldCAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b3AgPSByZXQudG9wO1xuICAgICAgICAgIGxlZnQgPSByZXQubGVmdDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBXZSBkZXNjcmliZSB0aGUgcG9zaXRpb24gdGhyZWUgZGlmZmVyZW50IHdheXMgdG8gZ2l2ZSB0aGUgb3B0aW1pemVyXG4gICAgICAvLyBhIGNoYW5jZSB0byBkZWNpZGUgdGhlIGJlc3QgcG9zc2libGUgd2F5IHRvIHBvc2l0aW9uIHRoZSBlbGVtZW50XG4gICAgICAvLyB3aXRoIHRoZSBmZXdlc3QgcmVwYWludHMuXG4gICAgICB2YXIgbmV4dCA9IHtcbiAgICAgICAgLy8gSXQncyBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgcGFnZSAoYWJzb2x1dGUgcG9zaXRpb25pbmcgd2hlblxuICAgICAgICAvLyB0aGUgZWxlbWVudCBpcyBhIGNoaWxkIG9mIHRoZSBib2R5KVxuICAgICAgICBwYWdlOiB7XG4gICAgICAgICAgdG9wOiB0b3AsXG4gICAgICAgICAgbGVmdDogbGVmdFxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEl0J3MgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIHZpZXdwb3J0IChmaXhlZCBwb3NpdGlvbmluZylcbiAgICAgICAgdmlld3BvcnQ6IHtcbiAgICAgICAgICB0b3A6IHRvcCAtIHBhZ2VZT2Zmc2V0LFxuICAgICAgICAgIGJvdHRvbTogcGFnZVlPZmZzZXQgLSB0b3AgLSBoZWlnaHQgKyBpbm5lckhlaWdodCxcbiAgICAgICAgICBsZWZ0OiBsZWZ0IC0gcGFnZVhPZmZzZXQsXG4gICAgICAgICAgcmlnaHQ6IHBhZ2VYT2Zmc2V0IC0gbGVmdCAtIHdpZHRoICsgaW5uZXJXaWR0aFxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgZG9jID0gdGhpcy50YXJnZXQub3duZXJEb2N1bWVudDtcbiAgICAgIHZhciB3aW4gPSBkb2MuZGVmYXVsdFZpZXc7XG5cbiAgICAgIHZhciBzY3JvbGxiYXJTaXplID0gdW5kZWZpbmVkO1xuICAgICAgaWYgKHdpbi5pbm5lckhlaWdodCA+IGRvYy5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSB7XG4gICAgICAgIHNjcm9sbGJhclNpemUgPSB0aGlzLmNhY2hlKCdzY3JvbGxiYXItc2l6ZScsIGdldFNjcm9sbEJhclNpemUpO1xuICAgICAgICBuZXh0LnZpZXdwb3J0LmJvdHRvbSAtPSBzY3JvbGxiYXJTaXplLmhlaWdodDtcbiAgICAgIH1cblxuICAgICAgaWYgKHdpbi5pbm5lcldpZHRoID4gZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCkge1xuICAgICAgICBzY3JvbGxiYXJTaXplID0gdGhpcy5jYWNoZSgnc2Nyb2xsYmFyLXNpemUnLCBnZXRTY3JvbGxCYXJTaXplKTtcbiAgICAgICAgbmV4dC52aWV3cG9ydC5yaWdodCAtPSBzY3JvbGxiYXJTaXplLndpZHRoO1xuICAgICAgfVxuXG4gICAgICBpZiAoWycnLCAnc3RhdGljJ10uaW5kZXhPZihkb2MuYm9keS5zdHlsZS5wb3NpdGlvbikgPT09IC0xIHx8IFsnJywgJ3N0YXRpYyddLmluZGV4T2YoZG9jLmJvZHkucGFyZW50RWxlbWVudC5zdHlsZS5wb3NpdGlvbikgPT09IC0xKSB7XG4gICAgICAgIC8vIEFic29sdXRlIHBvc2l0aW9uaW5nIGluIHRoZSBib2R5IHdpbGwgYmUgcmVsYXRpdmUgdG8gdGhlIHBhZ2UsIG5vdCB0aGUgJ2luaXRpYWwgY29udGFpbmluZyBibG9jaydcbiAgICAgICAgbmV4dC5wYWdlLmJvdHRvbSA9IGRvYy5ib2R5LnNjcm9sbEhlaWdodCAtIHRvcCAtIGhlaWdodDtcbiAgICAgICAgbmV4dC5wYWdlLnJpZ2h0ID0gZG9jLmJvZHkuc2Nyb2xsV2lkdGggLSBsZWZ0IC0gd2lkdGg7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgdGhpcy5vcHRpb25zLm9wdGltaXphdGlvbnMgIT09ICd1bmRlZmluZWQnICYmIHRoaXMub3B0aW9ucy5vcHRpbWl6YXRpb25zLm1vdmVFbGVtZW50ICE9PSBmYWxzZSAmJiAhKHR5cGVvZiB0aGlzLnRhcmdldE1vZGlmaWVyICE9PSAndW5kZWZpbmVkJykpIHtcbiAgICAgICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgb2Zmc2V0UGFyZW50ID0gX3RoaXM3LmNhY2hlKCd0YXJnZXQtb2Zmc2V0cGFyZW50JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldE9mZnNldFBhcmVudChfdGhpczcudGFyZ2V0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB2YXIgb2Zmc2V0UG9zaXRpb24gPSBfdGhpczcuY2FjaGUoJ3RhcmdldC1vZmZzZXRwYXJlbnQtYm91bmRzJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldEJvdW5kcyhvZmZzZXRQYXJlbnQpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHZhciBvZmZzZXRQYXJlbnRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUob2Zmc2V0UGFyZW50KTtcbiAgICAgICAgICB2YXIgb2Zmc2V0UGFyZW50U2l6ZSA9IG9mZnNldFBvc2l0aW9uO1xuXG4gICAgICAgICAgdmFyIG9mZnNldEJvcmRlciA9IHt9O1xuICAgICAgICAgIFsnVG9wJywgJ0xlZnQnLCAnQm90dG9tJywgJ1JpZ2h0J10uZm9yRWFjaChmdW5jdGlvbiAoc2lkZSkge1xuICAgICAgICAgICAgb2Zmc2V0Qm9yZGVyW3NpZGUudG9Mb3dlckNhc2UoKV0gPSBwYXJzZUZsb2F0KG9mZnNldFBhcmVudFN0eWxlWydib3JkZXInICsgc2lkZSArICdXaWR0aCddKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIG9mZnNldFBvc2l0aW9uLnJpZ2h0ID0gZG9jLmJvZHkuc2Nyb2xsV2lkdGggLSBvZmZzZXRQb3NpdGlvbi5sZWZ0IC0gb2Zmc2V0UGFyZW50U2l6ZS53aWR0aCArIG9mZnNldEJvcmRlci5yaWdodDtcbiAgICAgICAgICBvZmZzZXRQb3NpdGlvbi5ib3R0b20gPSBkb2MuYm9keS5zY3JvbGxIZWlnaHQgLSBvZmZzZXRQb3NpdGlvbi50b3AgLSBvZmZzZXRQYXJlbnRTaXplLmhlaWdodCArIG9mZnNldEJvcmRlci5ib3R0b207XG5cbiAgICAgICAgICBpZiAobmV4dC5wYWdlLnRvcCA+PSBvZmZzZXRQb3NpdGlvbi50b3AgKyBvZmZzZXRCb3JkZXIudG9wICYmIG5leHQucGFnZS5ib3R0b20gPj0gb2Zmc2V0UG9zaXRpb24uYm90dG9tKSB7XG4gICAgICAgICAgICBpZiAobmV4dC5wYWdlLmxlZnQgPj0gb2Zmc2V0UG9zaXRpb24ubGVmdCArIG9mZnNldEJvcmRlci5sZWZ0ICYmIG5leHQucGFnZS5yaWdodCA+PSBvZmZzZXRQb3NpdGlvbi5yaWdodCkge1xuICAgICAgICAgICAgICAvLyBXZSdyZSB3aXRoaW4gdGhlIHZpc2libGUgcGFydCBvZiB0aGUgdGFyZ2V0J3Mgc2Nyb2xsIHBhcmVudFxuICAgICAgICAgICAgICB2YXIgc2Nyb2xsVG9wID0gb2Zmc2V0UGFyZW50LnNjcm9sbFRvcDtcbiAgICAgICAgICAgICAgdmFyIHNjcm9sbExlZnQgPSBvZmZzZXRQYXJlbnQuc2Nyb2xsTGVmdDtcblxuICAgICAgICAgICAgICAvLyBJdCdzIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSB0YXJnZXQncyBvZmZzZXQgcGFyZW50IChhYnNvbHV0ZSBwb3NpdGlvbmluZyB3aGVuXG4gICAgICAgICAgICAgIC8vIHRoZSBlbGVtZW50IGlzIG1vdmVkIHRvIGJlIGEgY2hpbGQgb2YgdGhlIHRhcmdldCdzIG9mZnNldCBwYXJlbnQpLlxuICAgICAgICAgICAgICBuZXh0Lm9mZnNldCA9IHtcbiAgICAgICAgICAgICAgICB0b3A6IG5leHQucGFnZS50b3AgLSBvZmZzZXRQb3NpdGlvbi50b3AgKyBzY3JvbGxUb3AgLSBvZmZzZXRCb3JkZXIudG9wLFxuICAgICAgICAgICAgICAgIGxlZnQ6IG5leHQucGFnZS5sZWZ0IC0gb2Zmc2V0UG9zaXRpb24ubGVmdCArIHNjcm9sbExlZnQgLSBvZmZzZXRCb3JkZXIubGVmdFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICAgIH1cblxuICAgICAgLy8gV2UgY291bGQgYWxzbyB0cmF2ZWwgdXAgdGhlIERPTSBhbmQgdHJ5IGVhY2ggY29udGFpbmluZyBjb250ZXh0LCByYXRoZXIgdGhhbiBvbmx5XG4gICAgICAvLyBsb29raW5nIGF0IHRoZSBib2R5LCBidXQgd2UncmUgZ29ubmEgZ2V0IGRpbWluaXNoaW5nIHJldHVybnMuXG5cbiAgICAgIHRoaXMubW92ZShuZXh0KTtcblxuICAgICAgdGhpcy5oaXN0b3J5LnVuc2hpZnQobmV4dCk7XG5cbiAgICAgIGlmICh0aGlzLmhpc3RvcnkubGVuZ3RoID4gMykge1xuICAgICAgICB0aGlzLmhpc3RvcnkucG9wKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChmbHVzaENoYW5nZXMpIHtcbiAgICAgICAgZmx1c2goKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gVEhFIElTU1VFXG4gIH0sIHtcbiAgICBrZXk6ICdtb3ZlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbW92ZShwb3MpIHtcbiAgICAgIHZhciBfdGhpczggPSB0aGlzO1xuXG4gICAgICBpZiAoISh0eXBlb2YgdGhpcy5lbGVtZW50LnBhcmVudE5vZGUgIT09ICd1bmRlZmluZWQnKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBzYW1lID0ge307XG5cbiAgICAgIGZvciAodmFyIHR5cGUgaW4gcG9zKSB7XG4gICAgICAgIHNhbWVbdHlwZV0gPSB7fTtcblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcG9zW3R5cGVdKSB7XG4gICAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaGlzdG9yeS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIHBvaW50ID0gdGhpcy5oaXN0b3J5W2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBwb2ludFt0eXBlXSAhPT0gJ3VuZGVmaW5lZCcgJiYgIXdpdGhpbihwb2ludFt0eXBlXVtrZXldLCBwb3NbdHlwZV1ba2V5XSkpIHtcbiAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICBzYW1lW3R5cGVdW2tleV0gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgY3NzID0geyB0b3A6ICcnLCBsZWZ0OiAnJywgcmlnaHQ6ICcnLCBib3R0b206ICcnIH07XG5cbiAgICAgIHZhciB0cmFuc2NyaWJlID0gZnVuY3Rpb24gdHJhbnNjcmliZShfc2FtZSwgX3Bvcykge1xuICAgICAgICB2YXIgaGFzT3B0aW1pemF0aW9ucyA9IHR5cGVvZiBfdGhpczgub3B0aW9ucy5vcHRpbWl6YXRpb25zICE9PSAndW5kZWZpbmVkJztcbiAgICAgICAgdmFyIGdwdSA9IGhhc09wdGltaXphdGlvbnMgPyBfdGhpczgub3B0aW9ucy5vcHRpbWl6YXRpb25zLmdwdSA6IG51bGw7XG4gICAgICAgIGlmIChncHUgIT09IGZhbHNlKSB7XG4gICAgICAgICAgdmFyIHlQb3MgPSB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIHhQb3MgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgaWYgKF9zYW1lLnRvcCkge1xuICAgICAgICAgICAgY3NzLnRvcCA9IDA7XG4gICAgICAgICAgICB5UG9zID0gX3Bvcy50b3A7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNzcy5ib3R0b20gPSAwO1xuICAgICAgICAgICAgeVBvcyA9IC1fcG9zLmJvdHRvbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoX3NhbWUubGVmdCkge1xuICAgICAgICAgICAgY3NzLmxlZnQgPSAwO1xuICAgICAgICAgICAgeFBvcyA9IF9wb3MubGVmdDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3NzLnJpZ2h0ID0gMDtcbiAgICAgICAgICAgIHhQb3MgPSAtX3Bvcy5yaWdodDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEpIHtcbiAgICAgICAgICAgIC8vIEh1YlNwb3QvdGV0aGVyIzIwN1xuICAgICAgICAgICAgdmFyIHJldGluYSA9IHdpbmRvdy5tYXRjaE1lZGlhKCdvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAxLjNkcHB4KScpLm1hdGNoZXMgfHwgd2luZG93Lm1hdGNoTWVkaWEoJ29ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAxLjMpJykubWF0Y2hlcztcbiAgICAgICAgICAgIGlmICghcmV0aW5hKSB7XG4gICAgICAgICAgICAgIHhQb3MgPSBNYXRoLnJvdW5kKHhQb3MpO1xuICAgICAgICAgICAgICB5UG9zID0gTWF0aC5yb3VuZCh5UG9zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjc3NbdHJhbnNmb3JtS2V5XSA9ICd0cmFuc2xhdGVYKCcgKyB4UG9zICsgJ3B4KSB0cmFuc2xhdGVZKCcgKyB5UG9zICsgJ3B4KSc7XG5cbiAgICAgICAgICBpZiAodHJhbnNmb3JtS2V5ICE9PSAnbXNUcmFuc2Zvcm0nKSB7XG4gICAgICAgICAgICAvLyBUaGUgWiB0cmFuc2Zvcm0gd2lsbCBrZWVwIHRoaXMgaW4gdGhlIEdQVSAoZmFzdGVyLCBhbmQgcHJldmVudHMgYXJ0aWZhY3RzKSxcbiAgICAgICAgICAgIC8vIGJ1dCBJRTkgZG9lc24ndCBzdXBwb3J0IDNkIHRyYW5zZm9ybXMgYW5kIHdpbGwgY2hva2UuXG4gICAgICAgICAgICBjc3NbdHJhbnNmb3JtS2V5XSArPSBcIiB0cmFuc2xhdGVaKDApXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChfc2FtZS50b3ApIHtcbiAgICAgICAgICAgIGNzcy50b3AgPSBfcG9zLnRvcCArICdweCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNzcy5ib3R0b20gPSBfcG9zLmJvdHRvbSArICdweCc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKF9zYW1lLmxlZnQpIHtcbiAgICAgICAgICAgIGNzcy5sZWZ0ID0gX3Bvcy5sZWZ0ICsgJ3B4JztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3NzLnJpZ2h0ID0gX3Bvcy5yaWdodCArICdweCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB2YXIgbW92ZWQgPSBmYWxzZTtcbiAgICAgIGlmICgoc2FtZS5wYWdlLnRvcCB8fCBzYW1lLnBhZ2UuYm90dG9tKSAmJiAoc2FtZS5wYWdlLmxlZnQgfHwgc2FtZS5wYWdlLnJpZ2h0KSkge1xuICAgICAgICBjc3MucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICB0cmFuc2NyaWJlKHNhbWUucGFnZSwgcG9zLnBhZ2UpO1xuICAgICAgfSBlbHNlIGlmICgoc2FtZS52aWV3cG9ydC50b3AgfHwgc2FtZS52aWV3cG9ydC5ib3R0b20pICYmIChzYW1lLnZpZXdwb3J0LmxlZnQgfHwgc2FtZS52aWV3cG9ydC5yaWdodCkpIHtcbiAgICAgICAgY3NzLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgdHJhbnNjcmliZShzYW1lLnZpZXdwb3J0LCBwb3Mudmlld3BvcnQpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2FtZS5vZmZzZXQgIT09ICd1bmRlZmluZWQnICYmIHNhbWUub2Zmc2V0LnRvcCAmJiBzYW1lLm9mZnNldC5sZWZ0KSB7XG4gICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY3NzLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICB2YXIgb2Zmc2V0UGFyZW50ID0gX3RoaXM4LmNhY2hlKCd0YXJnZXQtb2Zmc2V0cGFyZW50JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldE9mZnNldFBhcmVudChfdGhpczgudGFyZ2V0KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChnZXRPZmZzZXRQYXJlbnQoX3RoaXM4LmVsZW1lbnQpICE9PSBvZmZzZXRQYXJlbnQpIHtcbiAgICAgICAgICAgIGRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgX3RoaXM4LmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChfdGhpczguZWxlbWVudCk7XG4gICAgICAgICAgICAgIG9mZnNldFBhcmVudC5hcHBlbmRDaGlsZChfdGhpczguZWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0cmFuc2NyaWJlKHNhbWUub2Zmc2V0LCBwb3Mub2Zmc2V0KTtcbiAgICAgICAgICBtb3ZlZCA9IHRydWU7XG4gICAgICAgIH0pKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjc3MucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICB0cmFuc2NyaWJlKHsgdG9wOiB0cnVlLCBsZWZ0OiB0cnVlIH0sIHBvcy5wYWdlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFtb3ZlZCkge1xuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmJvZHlFbGVtZW50KSB7XG4gICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5wYXJlbnROb2RlICE9PSB0aGlzLm9wdGlvbnMuYm9keUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5ib2R5RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgb2Zmc2V0UGFyZW50SXNCb2R5ID0gdHJ1ZTtcbiAgICAgICAgICB2YXIgY3VycmVudE5vZGUgPSB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICAgICAgICB3aGlsZSAoY3VycmVudE5vZGUgJiYgY3VycmVudE5vZGUubm9kZVR5cGUgPT09IDEgJiYgY3VycmVudE5vZGUudGFnTmFtZSAhPT0gJ0JPRFknKSB7XG4gICAgICAgICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShjdXJyZW50Tm9kZSkucG9zaXRpb24gIT09ICdzdGF0aWMnKSB7XG4gICAgICAgICAgICAgIG9mZnNldFBhcmVudElzQm9keSA9IGZhbHNlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY3VycmVudE5vZGUgPSBjdXJyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghb2Zmc2V0UGFyZW50SXNCb2R5KSB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50Lm93bmVyRG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBBbnkgY3NzIGNoYW5nZSB3aWxsIHRyaWdnZXIgYSByZXBhaW50LCBzbyBsZXQncyBhdm9pZCBvbmUgaWYgbm90aGluZyBjaGFuZ2VkXG4gICAgICB2YXIgd3JpdGVDU1MgPSB7fTtcbiAgICAgIHZhciB3cml0ZSA9IGZhbHNlO1xuICAgICAgZm9yICh2YXIga2V5IGluIGNzcykge1xuICAgICAgICB2YXIgdmFsID0gY3NzW2tleV07XG4gICAgICAgIHZhciBlbFZhbCA9IHRoaXMuZWxlbWVudC5zdHlsZVtrZXldO1xuXG4gICAgICAgIGlmIChlbFZhbCAhPT0gdmFsKSB7XG4gICAgICAgICAgd3JpdGUgPSB0cnVlO1xuICAgICAgICAgIHdyaXRlQ1NTW2tleV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHdyaXRlKSB7XG4gICAgICAgIGRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBleHRlbmQoX3RoaXM4LmVsZW1lbnQuc3R5bGUsIHdyaXRlQ1NTKTtcbiAgICAgICAgICBfdGhpczgudHJpZ2dlcigncmVwb3NpdGlvbmVkJyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUZXRoZXJDbGFzcztcbn0pKEV2ZW50ZWQpO1xuXG5UZXRoZXJDbGFzcy5tb2R1bGVzID0gW107XG5cblRldGhlckJhc2UucG9zaXRpb24gPSBwb3NpdGlvbjtcblxudmFyIFRldGhlciA9IGV4dGVuZChUZXRoZXJDbGFzcywgVGV0aGVyQmFzZSk7XG4vKiBnbG9iYWxzIFRldGhlckJhc2UgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3NsaWNlZFRvQXJyYXkgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBzbGljZUl0ZXJhdG9yKGFyciwgaSkgeyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVsncmV0dXJuJ10pIF9pWydyZXR1cm4nXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH0gcmV0dXJuIGZ1bmN0aW9uIChhcnIsIGkpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyByZXR1cm4gYXJyOyB9IGVsc2UgaWYgKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkgeyByZXR1cm4gc2xpY2VJdGVyYXRvcihhcnIsIGkpOyB9IGVsc2UgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlJyk7IH0gfTsgfSkoKTtcblxudmFyIF9UZXRoZXJCYXNlJFV0aWxzID0gVGV0aGVyQmFzZS5VdGlscztcbnZhciBnZXRCb3VuZHMgPSBfVGV0aGVyQmFzZSRVdGlscy5nZXRCb3VuZHM7XG52YXIgZXh0ZW5kID0gX1RldGhlckJhc2UkVXRpbHMuZXh0ZW5kO1xudmFyIHVwZGF0ZUNsYXNzZXMgPSBfVGV0aGVyQmFzZSRVdGlscy51cGRhdGVDbGFzc2VzO1xudmFyIGRlZmVyID0gX1RldGhlckJhc2UkVXRpbHMuZGVmZXI7XG5cbnZhciBCT1VORFNfRk9STUFUID0gWydsZWZ0JywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nXTtcblxuZnVuY3Rpb24gZ2V0Qm91bmRpbmdSZWN0KHRldGhlciwgdG8pIHtcbiAgaWYgKHRvID09PSAnc2Nyb2xsUGFyZW50Jykge1xuICAgIHRvID0gdGV0aGVyLnNjcm9sbFBhcmVudHNbMF07XG4gIH0gZWxzZSBpZiAodG8gPT09ICd3aW5kb3cnKSB7XG4gICAgdG8gPSBbcGFnZVhPZmZzZXQsIHBhZ2VZT2Zmc2V0LCBpbm5lcldpZHRoICsgcGFnZVhPZmZzZXQsIGlubmVySGVpZ2h0ICsgcGFnZVlPZmZzZXRdO1xuICB9XG5cbiAgaWYgKHRvID09PSBkb2N1bWVudCkge1xuICAgIHRvID0gdG8uZG9jdW1lbnRFbGVtZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0by5ub2RlVHlwZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG5vZGUgPSB0bztcbiAgICAgIHZhciBzaXplID0gZ2V0Qm91bmRzKHRvKTtcbiAgICAgIHZhciBwb3MgPSBzaXplO1xuICAgICAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZSh0byk7XG5cbiAgICAgIHRvID0gW3Bvcy5sZWZ0LCBwb3MudG9wLCBzaXplLndpZHRoICsgcG9zLmxlZnQsIHNpemUuaGVpZ2h0ICsgcG9zLnRvcF07XG5cbiAgICAgIC8vIEFjY291bnQgYW55IHBhcmVudCBGcmFtZXMgc2Nyb2xsIG9mZnNldFxuICAgICAgaWYgKG5vZGUub3duZXJEb2N1bWVudCAhPT0gZG9jdW1lbnQpIHtcbiAgICAgICAgdmFyIHdpbiA9IG5vZGUub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICAgICAgdG9bMF0gKz0gd2luLnBhZ2VYT2Zmc2V0O1xuICAgICAgICB0b1sxXSArPSB3aW4ucGFnZVlPZmZzZXQ7XG4gICAgICAgIHRvWzJdICs9IHdpbi5wYWdlWE9mZnNldDtcbiAgICAgICAgdG9bM10gKz0gd2luLnBhZ2VZT2Zmc2V0O1xuICAgICAgfVxuXG4gICAgICBCT1VORFNfRk9STUFULmZvckVhY2goZnVuY3Rpb24gKHNpZGUsIGkpIHtcbiAgICAgICAgc2lkZSA9IHNpZGVbMF0udG9VcHBlckNhc2UoKSArIHNpZGUuc3Vic3RyKDEpO1xuICAgICAgICBpZiAoc2lkZSA9PT0gJ1RvcCcgfHwgc2lkZSA9PT0gJ0xlZnQnKSB7XG4gICAgICAgICAgdG9baV0gKz0gcGFyc2VGbG9hdChzdHlsZVsnYm9yZGVyJyArIHNpZGUgKyAnV2lkdGgnXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdG9baV0gLT0gcGFyc2VGbG9hdChzdHlsZVsnYm9yZGVyJyArIHNpZGUgKyAnV2lkdGgnXSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pKCk7XG4gIH1cblxuICByZXR1cm4gdG87XG59XG5cblRldGhlckJhc2UubW9kdWxlcy5wdXNoKHtcbiAgcG9zaXRpb246IGZ1bmN0aW9uIHBvc2l0aW9uKF9yZWYpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIHRvcCA9IF9yZWYudG9wO1xuICAgIHZhciBsZWZ0ID0gX3JlZi5sZWZ0O1xuICAgIHZhciB0YXJnZXRBdHRhY2htZW50ID0gX3JlZi50YXJnZXRBdHRhY2htZW50O1xuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuY29uc3RyYWludHMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHZhciBfY2FjaGUgPSB0aGlzLmNhY2hlKCdlbGVtZW50LWJvdW5kcycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBnZXRCb3VuZHMoX3RoaXMuZWxlbWVudCk7XG4gICAgfSk7XG5cbiAgICB2YXIgaGVpZ2h0ID0gX2NhY2hlLmhlaWdodDtcbiAgICB2YXIgd2lkdGggPSBfY2FjaGUud2lkdGg7XG5cbiAgICBpZiAod2lkdGggPT09IDAgJiYgaGVpZ2h0ID09PSAwICYmIHR5cGVvZiB0aGlzLmxhc3RTaXplICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIF9sYXN0U2l6ZSA9IHRoaXMubGFzdFNpemU7XG5cbiAgICAgIC8vIEhhbmRsZSB0aGUgaXRlbSBnZXR0aW5nIGhpZGRlbiBhcyBhIHJlc3VsdCBvZiBvdXIgcG9zaXRpb25pbmcgd2l0aG91dCBnbGl0Y2hpbmdcbiAgICAgIC8vIHRoZSBjbGFzc2VzIGluIGFuZCBvdXRcbiAgICAgIHdpZHRoID0gX2xhc3RTaXplLndpZHRoO1xuICAgICAgaGVpZ2h0ID0gX2xhc3RTaXplLmhlaWdodDtcbiAgICB9XG5cbiAgICB2YXIgdGFyZ2V0U2l6ZSA9IHRoaXMuY2FjaGUoJ3RhcmdldC1ib3VuZHMnLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX3RoaXMuZ2V0VGFyZ2V0Qm91bmRzKCk7XG4gICAgfSk7XG5cbiAgICB2YXIgdGFyZ2V0SGVpZ2h0ID0gdGFyZ2V0U2l6ZS5oZWlnaHQ7XG4gICAgdmFyIHRhcmdldFdpZHRoID0gdGFyZ2V0U2l6ZS53aWR0aDtcblxuICAgIHZhciBhbGxDbGFzc2VzID0gW3RoaXMuZ2V0Q2xhc3MoJ3Bpbm5lZCcpLCB0aGlzLmdldENsYXNzKCdvdXQtb2YtYm91bmRzJyldO1xuXG4gICAgdGhpcy5vcHRpb25zLmNvbnN0cmFpbnRzLmZvckVhY2goZnVuY3Rpb24gKGNvbnN0cmFpbnQpIHtcbiAgICAgIHZhciBvdXRPZkJvdW5kc0NsYXNzID0gY29uc3RyYWludC5vdXRPZkJvdW5kc0NsYXNzO1xuICAgICAgdmFyIHBpbm5lZENsYXNzID0gY29uc3RyYWludC5waW5uZWRDbGFzcztcblxuICAgICAgaWYgKG91dE9mQm91bmRzQ2xhc3MpIHtcbiAgICAgICAgYWxsQ2xhc3Nlcy5wdXNoKG91dE9mQm91bmRzQ2xhc3MpO1xuICAgICAgfVxuICAgICAgaWYgKHBpbm5lZENsYXNzKSB7XG4gICAgICAgIGFsbENsYXNzZXMucHVzaChwaW5uZWRDbGFzcyk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBhbGxDbGFzc2VzLmZvckVhY2goZnVuY3Rpb24gKGNscykge1xuICAgICAgWydsZWZ0JywgJ3RvcCcsICdyaWdodCcsICdib3R0b20nXS5mb3JFYWNoKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgICAgIGFsbENsYXNzZXMucHVzaChjbHMgKyAnLScgKyBzaWRlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdmFyIGFkZENsYXNzZXMgPSBbXTtcblxuICAgIHZhciB0QXR0YWNobWVudCA9IGV4dGVuZCh7fSwgdGFyZ2V0QXR0YWNobWVudCk7XG4gICAgdmFyIGVBdHRhY2htZW50ID0gZXh0ZW5kKHt9LCB0aGlzLmF0dGFjaG1lbnQpO1xuXG4gICAgdGhpcy5vcHRpb25zLmNvbnN0cmFpbnRzLmZvckVhY2goZnVuY3Rpb24gKGNvbnN0cmFpbnQpIHtcbiAgICAgIHZhciB0byA9IGNvbnN0cmFpbnQudG87XG4gICAgICB2YXIgYXR0YWNobWVudCA9IGNvbnN0cmFpbnQuYXR0YWNobWVudDtcbiAgICAgIHZhciBwaW4gPSBjb25zdHJhaW50LnBpbjtcblxuICAgICAgaWYgKHR5cGVvZiBhdHRhY2htZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBhdHRhY2htZW50ID0gJyc7XG4gICAgICB9XG5cbiAgICAgIHZhciBjaGFuZ2VBdHRhY2hYID0gdW5kZWZpbmVkLFxuICAgICAgICAgIGNoYW5nZUF0dGFjaFkgPSB1bmRlZmluZWQ7XG4gICAgICBpZiAoYXR0YWNobWVudC5pbmRleE9mKCcgJykgPj0gMCkge1xuICAgICAgICB2YXIgX2F0dGFjaG1lbnQkc3BsaXQgPSBhdHRhY2htZW50LnNwbGl0KCcgJyk7XG5cbiAgICAgICAgdmFyIF9hdHRhY2htZW50JHNwbGl0MiA9IF9zbGljZWRUb0FycmF5KF9hdHRhY2htZW50JHNwbGl0LCAyKTtcblxuICAgICAgICBjaGFuZ2VBdHRhY2hZID0gX2F0dGFjaG1lbnQkc3BsaXQyWzBdO1xuICAgICAgICBjaGFuZ2VBdHRhY2hYID0gX2F0dGFjaG1lbnQkc3BsaXQyWzFdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hhbmdlQXR0YWNoWCA9IGNoYW5nZUF0dGFjaFkgPSBhdHRhY2htZW50O1xuICAgICAgfVxuXG4gICAgICB2YXIgYm91bmRzID0gZ2V0Qm91bmRpbmdSZWN0KF90aGlzLCB0byk7XG5cbiAgICAgIGlmIChjaGFuZ2VBdHRhY2hZID09PSAndGFyZ2V0JyB8fCBjaGFuZ2VBdHRhY2hZID09PSAnYm90aCcpIHtcbiAgICAgICAgaWYgKHRvcCA8IGJvdW5kc1sxXSAmJiB0QXR0YWNobWVudC50b3AgPT09ICd0b3AnKSB7XG4gICAgICAgICAgdG9wICs9IHRhcmdldEhlaWdodDtcbiAgICAgICAgICB0QXR0YWNobWVudC50b3AgPSAnYm90dG9tJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b3AgKyBoZWlnaHQgPiBib3VuZHNbM10gJiYgdEF0dGFjaG1lbnQudG9wID09PSAnYm90dG9tJykge1xuICAgICAgICAgIHRvcCAtPSB0YXJnZXRIZWlnaHQ7XG4gICAgICAgICAgdEF0dGFjaG1lbnQudG9wID0gJ3RvcCc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNoYW5nZUF0dGFjaFkgPT09ICd0b2dldGhlcicpIHtcbiAgICAgICAgaWYgKHRBdHRhY2htZW50LnRvcCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICBpZiAoZUF0dGFjaG1lbnQudG9wID09PSAnYm90dG9tJyAmJiB0b3AgPCBib3VuZHNbMV0pIHtcbiAgICAgICAgICAgIHRvcCArPSB0YXJnZXRIZWlnaHQ7XG4gICAgICAgICAgICB0QXR0YWNobWVudC50b3AgPSAnYm90dG9tJztcblxuICAgICAgICAgICAgdG9wICs9IGhlaWdodDtcbiAgICAgICAgICAgIGVBdHRhY2htZW50LnRvcCA9ICd0b3AnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZUF0dGFjaG1lbnQudG9wID09PSAndG9wJyAmJiB0b3AgKyBoZWlnaHQgPiBib3VuZHNbM10gJiYgdG9wIC0gKGhlaWdodCAtIHRhcmdldEhlaWdodCkgPj0gYm91bmRzWzFdKSB7XG4gICAgICAgICAgICB0b3AgLT0gaGVpZ2h0IC0gdGFyZ2V0SGVpZ2h0O1xuICAgICAgICAgICAgdEF0dGFjaG1lbnQudG9wID0gJ2JvdHRvbSc7XG5cbiAgICAgICAgICAgIGVBdHRhY2htZW50LnRvcCA9ICdib3R0b20nO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0QXR0YWNobWVudC50b3AgPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgaWYgKGVBdHRhY2htZW50LnRvcCA9PT0gJ3RvcCcgJiYgdG9wICsgaGVpZ2h0ID4gYm91bmRzWzNdKSB7XG4gICAgICAgICAgICB0b3AgLT0gdGFyZ2V0SGVpZ2h0O1xuICAgICAgICAgICAgdEF0dGFjaG1lbnQudG9wID0gJ3RvcCc7XG5cbiAgICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgICAgICBlQXR0YWNobWVudC50b3AgPSAnYm90dG9tJztcbiAgICAgICAgICB9IGVsc2UgaWYgKGVBdHRhY2htZW50LnRvcCA9PT0gJ2JvdHRvbScgJiYgdG9wIDwgYm91bmRzWzFdICYmIHRvcCArIChoZWlnaHQgKiAyIC0gdGFyZ2V0SGVpZ2h0KSA8PSBib3VuZHNbM10pIHtcbiAgICAgICAgICAgIHRvcCArPSBoZWlnaHQgLSB0YXJnZXRIZWlnaHQ7XG4gICAgICAgICAgICB0QXR0YWNobWVudC50b3AgPSAndG9wJztcblxuICAgICAgICAgICAgZUF0dGFjaG1lbnQudG9wID0gJ3RvcCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRBdHRhY2htZW50LnRvcCA9PT0gJ21pZGRsZScpIHtcbiAgICAgICAgICBpZiAodG9wICsgaGVpZ2h0ID4gYm91bmRzWzNdICYmIGVBdHRhY2htZW50LnRvcCA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgICAgICBlQXR0YWNobWVudC50b3AgPSAnYm90dG9tJztcbiAgICAgICAgICB9IGVsc2UgaWYgKHRvcCA8IGJvdW5kc1sxXSAmJiBlQXR0YWNobWVudC50b3AgPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgICB0b3AgKz0gaGVpZ2h0O1xuICAgICAgICAgICAgZUF0dGFjaG1lbnQudG9wID0gJ3RvcCc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGFuZ2VBdHRhY2hYID09PSAndGFyZ2V0JyB8fCBjaGFuZ2VBdHRhY2hYID09PSAnYm90aCcpIHtcbiAgICAgICAgaWYgKGxlZnQgPCBib3VuZHNbMF0gJiYgdEF0dGFjaG1lbnQubGVmdCA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgbGVmdCArPSB0YXJnZXRXaWR0aDtcbiAgICAgICAgICB0QXR0YWNobWVudC5sZWZ0ID0gJ3JpZ2h0JztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsZWZ0ICsgd2lkdGggPiBib3VuZHNbMl0gJiYgdEF0dGFjaG1lbnQubGVmdCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgIGxlZnQgLT0gdGFyZ2V0V2lkdGg7XG4gICAgICAgICAgdEF0dGFjaG1lbnQubGVmdCA9ICdsZWZ0JztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hhbmdlQXR0YWNoWCA9PT0gJ3RvZ2V0aGVyJykge1xuICAgICAgICBpZiAobGVmdCA8IGJvdW5kc1swXSAmJiB0QXR0YWNobWVudC5sZWZ0ID09PSAnbGVmdCcpIHtcbiAgICAgICAgICBpZiAoZUF0dGFjaG1lbnQubGVmdCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgbGVmdCArPSB0YXJnZXRXaWR0aDtcbiAgICAgICAgICAgIHRBdHRhY2htZW50LmxlZnQgPSAncmlnaHQnO1xuXG4gICAgICAgICAgICBsZWZ0ICs9IHdpZHRoO1xuICAgICAgICAgICAgZUF0dGFjaG1lbnQubGVmdCA9ICdsZWZ0JztcbiAgICAgICAgICB9IGVsc2UgaWYgKGVBdHRhY2htZW50LmxlZnQgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgbGVmdCArPSB0YXJnZXRXaWR0aDtcbiAgICAgICAgICAgIHRBdHRhY2htZW50LmxlZnQgPSAncmlnaHQnO1xuXG4gICAgICAgICAgICBsZWZ0IC09IHdpZHRoO1xuICAgICAgICAgICAgZUF0dGFjaG1lbnQubGVmdCA9ICdyaWdodCc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGxlZnQgKyB3aWR0aCA+IGJvdW5kc1syXSAmJiB0QXR0YWNobWVudC5sZWZ0ID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgaWYgKGVBdHRhY2htZW50LmxlZnQgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgbGVmdCAtPSB0YXJnZXRXaWR0aDtcbiAgICAgICAgICAgIHRBdHRhY2htZW50LmxlZnQgPSAnbGVmdCc7XG5cbiAgICAgICAgICAgIGxlZnQgLT0gd2lkdGg7XG4gICAgICAgICAgICBlQXR0YWNobWVudC5sZWZ0ID0gJ3JpZ2h0JztcbiAgICAgICAgICB9IGVsc2UgaWYgKGVBdHRhY2htZW50LmxlZnQgPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIGxlZnQgLT0gdGFyZ2V0V2lkdGg7XG4gICAgICAgICAgICB0QXR0YWNobWVudC5sZWZ0ID0gJ2xlZnQnO1xuXG4gICAgICAgICAgICBsZWZ0ICs9IHdpZHRoO1xuICAgICAgICAgICAgZUF0dGFjaG1lbnQubGVmdCA9ICdsZWZ0JztcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodEF0dGFjaG1lbnQubGVmdCA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgICBpZiAobGVmdCArIHdpZHRoID4gYm91bmRzWzJdICYmIGVBdHRhY2htZW50LmxlZnQgPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aDtcbiAgICAgICAgICAgIGVBdHRhY2htZW50LmxlZnQgPSAncmlnaHQnO1xuICAgICAgICAgIH0gZWxzZSBpZiAobGVmdCA8IGJvdW5kc1swXSAmJiBlQXR0YWNobWVudC5sZWZ0ID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICBsZWZ0ICs9IHdpZHRoO1xuICAgICAgICAgICAgZUF0dGFjaG1lbnQubGVmdCA9ICdsZWZ0JztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNoYW5nZUF0dGFjaFkgPT09ICdlbGVtZW50JyB8fCBjaGFuZ2VBdHRhY2hZID09PSAnYm90aCcpIHtcbiAgICAgICAgaWYgKHRvcCA8IGJvdW5kc1sxXSAmJiBlQXR0YWNobWVudC50b3AgPT09ICdib3R0b20nKSB7XG4gICAgICAgICAgdG9wICs9IGhlaWdodDtcbiAgICAgICAgICBlQXR0YWNobWVudC50b3AgPSAndG9wJztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0b3AgKyBoZWlnaHQgPiBib3VuZHNbM10gJiYgZUF0dGFjaG1lbnQudG9wID09PSAndG9wJykge1xuICAgICAgICAgIHRvcCAtPSBoZWlnaHQ7XG4gICAgICAgICAgZUF0dGFjaG1lbnQudG9wID0gJ2JvdHRvbSc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGNoYW5nZUF0dGFjaFggPT09ICdlbGVtZW50JyB8fCBjaGFuZ2VBdHRhY2hYID09PSAnYm90aCcpIHtcbiAgICAgICAgaWYgKGxlZnQgPCBib3VuZHNbMF0pIHtcbiAgICAgICAgICBpZiAoZUF0dGFjaG1lbnQubGVmdCA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgbGVmdCArPSB3aWR0aDtcbiAgICAgICAgICAgIGVBdHRhY2htZW50LmxlZnQgPSAnbGVmdCc7XG4gICAgICAgICAgfSBlbHNlIGlmIChlQXR0YWNobWVudC5sZWZ0ID09PSAnY2VudGVyJykge1xuICAgICAgICAgICAgbGVmdCArPSB3aWR0aCAvIDI7XG4gICAgICAgICAgICBlQXR0YWNobWVudC5sZWZ0ID0gJ2xlZnQnO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsZWZ0ICsgd2lkdGggPiBib3VuZHNbMl0pIHtcbiAgICAgICAgICBpZiAoZUF0dGFjaG1lbnQubGVmdCA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICBsZWZ0IC09IHdpZHRoO1xuICAgICAgICAgICAgZUF0dGFjaG1lbnQubGVmdCA9ICdyaWdodCc7XG4gICAgICAgICAgfSBlbHNlIGlmIChlQXR0YWNobWVudC5sZWZ0ID09PSAnY2VudGVyJykge1xuICAgICAgICAgICAgbGVmdCAtPSB3aWR0aCAvIDI7XG4gICAgICAgICAgICBlQXR0YWNobWVudC5sZWZ0ID0gJ3JpZ2h0JztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBwaW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHBpbiA9IHBpbi5zcGxpdCgnLCcpLm1hcChmdW5jdGlvbiAocCkge1xuICAgICAgICAgIHJldHVybiBwLnRyaW0oKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHBpbiA9PT0gdHJ1ZSkge1xuICAgICAgICBwaW4gPSBbJ3RvcCcsICdsZWZ0JywgJ3JpZ2h0JywgJ2JvdHRvbSddO1xuICAgICAgfVxuXG4gICAgICBwaW4gPSBwaW4gfHwgW107XG5cbiAgICAgIHZhciBwaW5uZWQgPSBbXTtcbiAgICAgIHZhciBvb2IgPSBbXTtcblxuICAgICAgaWYgKHRvcCA8IGJvdW5kc1sxXSkge1xuICAgICAgICBpZiAocGluLmluZGV4T2YoJ3RvcCcpID49IDApIHtcbiAgICAgICAgICB0b3AgPSBib3VuZHNbMV07XG4gICAgICAgICAgcGlubmVkLnB1c2goJ3RvcCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9vYi5wdXNoKCd0b3AnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodG9wICsgaGVpZ2h0ID4gYm91bmRzWzNdKSB7XG4gICAgICAgIGlmIChwaW4uaW5kZXhPZignYm90dG9tJykgPj0gMCkge1xuICAgICAgICAgIHRvcCA9IGJvdW5kc1szXSAtIGhlaWdodDtcbiAgICAgICAgICBwaW5uZWQucHVzaCgnYm90dG9tJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb29iLnB1c2goJ2JvdHRvbScpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChsZWZ0IDwgYm91bmRzWzBdKSB7XG4gICAgICAgIGlmIChwaW4uaW5kZXhPZignbGVmdCcpID49IDApIHtcbiAgICAgICAgICBsZWZ0ID0gYm91bmRzWzBdO1xuICAgICAgICAgIHBpbm5lZC5wdXNoKCdsZWZ0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb29iLnB1c2goJ2xlZnQnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobGVmdCArIHdpZHRoID4gYm91bmRzWzJdKSB7XG4gICAgICAgIGlmIChwaW4uaW5kZXhPZigncmlnaHQnKSA+PSAwKSB7XG4gICAgICAgICAgbGVmdCA9IGJvdW5kc1syXSAtIHdpZHRoO1xuICAgICAgICAgIHBpbm5lZC5wdXNoKCdyaWdodCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9vYi5wdXNoKCdyaWdodCcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChwaW5uZWQubGVuZ3RoKSB7XG4gICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIHBpbm5lZENsYXNzID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGlmICh0eXBlb2YgX3RoaXMub3B0aW9ucy5waW5uZWRDbGFzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHBpbm5lZENsYXNzID0gX3RoaXMub3B0aW9ucy5waW5uZWRDbGFzcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGlubmVkQ2xhc3MgPSBfdGhpcy5nZXRDbGFzcygncGlubmVkJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYWRkQ2xhc3Nlcy5wdXNoKHBpbm5lZENsYXNzKTtcbiAgICAgICAgICBwaW5uZWQuZm9yRWFjaChmdW5jdGlvbiAoc2lkZSkge1xuICAgICAgICAgICAgYWRkQ2xhc3Nlcy5wdXNoKHBpbm5lZENsYXNzICsgJy0nICsgc2lkZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pKCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChvb2IubGVuZ3RoKSB7XG4gICAgICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIG9vYkNsYXNzID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGlmICh0eXBlb2YgX3RoaXMub3B0aW9ucy5vdXRPZkJvdW5kc0NsYXNzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgb29iQ2xhc3MgPSBfdGhpcy5vcHRpb25zLm91dE9mQm91bmRzQ2xhc3M7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9vYkNsYXNzID0gX3RoaXMuZ2V0Q2xhc3MoJ291dC1vZi1ib3VuZHMnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhZGRDbGFzc2VzLnB1c2gob29iQ2xhc3MpO1xuICAgICAgICAgIG9vYi5mb3JFYWNoKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgICAgICAgICBhZGRDbGFzc2VzLnB1c2gob29iQ2xhc3MgKyAnLScgKyBzaWRlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSkoKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBpbm5lZC5pbmRleE9mKCdsZWZ0JykgPj0gMCB8fCBwaW5uZWQuaW5kZXhPZigncmlnaHQnKSA+PSAwKSB7XG4gICAgICAgIGVBdHRhY2htZW50LmxlZnQgPSB0QXR0YWNobWVudC5sZWZ0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZiAocGlubmVkLmluZGV4T2YoJ3RvcCcpID49IDAgfHwgcGlubmVkLmluZGV4T2YoJ2JvdHRvbScpID49IDApIHtcbiAgICAgICAgZUF0dGFjaG1lbnQudG9wID0gdEF0dGFjaG1lbnQudG9wID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICh0QXR0YWNobWVudC50b3AgIT09IHRhcmdldEF0dGFjaG1lbnQudG9wIHx8IHRBdHRhY2htZW50LmxlZnQgIT09IHRhcmdldEF0dGFjaG1lbnQubGVmdCB8fCBlQXR0YWNobWVudC50b3AgIT09IF90aGlzLmF0dGFjaG1lbnQudG9wIHx8IGVBdHRhY2htZW50LmxlZnQgIT09IF90aGlzLmF0dGFjaG1lbnQubGVmdCkge1xuICAgICAgICBfdGhpcy51cGRhdGVBdHRhY2hDbGFzc2VzKGVBdHRhY2htZW50LCB0QXR0YWNobWVudCk7XG4gICAgICAgIF90aGlzLnRyaWdnZXIoJ3VwZGF0ZScsIHtcbiAgICAgICAgICBhdHRhY2htZW50OiBlQXR0YWNobWVudCxcbiAgICAgICAgICB0YXJnZXRBdHRhY2htZW50OiB0QXR0YWNobWVudFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghKF90aGlzLm9wdGlvbnMuYWRkVGFyZ2V0Q2xhc3NlcyA9PT0gZmFsc2UpKSB7XG4gICAgICAgIHVwZGF0ZUNsYXNzZXMoX3RoaXMudGFyZ2V0LCBhZGRDbGFzc2VzLCBhbGxDbGFzc2VzKTtcbiAgICAgIH1cbiAgICAgIHVwZGF0ZUNsYXNzZXMoX3RoaXMuZWxlbWVudCwgYWRkQ2xhc3NlcywgYWxsQ2xhc3Nlcyk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyB0b3A6IHRvcCwgbGVmdDogbGVmdCB9O1xuICB9XG59KTtcbi8qIGdsb2JhbHMgVGV0aGVyQmFzZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfVGV0aGVyQmFzZSRVdGlscyA9IFRldGhlckJhc2UuVXRpbHM7XG52YXIgZ2V0Qm91bmRzID0gX1RldGhlckJhc2UkVXRpbHMuZ2V0Qm91bmRzO1xudmFyIHVwZGF0ZUNsYXNzZXMgPSBfVGV0aGVyQmFzZSRVdGlscy51cGRhdGVDbGFzc2VzO1xudmFyIGRlZmVyID0gX1RldGhlckJhc2UkVXRpbHMuZGVmZXI7XG5cblRldGhlckJhc2UubW9kdWxlcy5wdXNoKHtcbiAgcG9zaXRpb246IGZ1bmN0aW9uIHBvc2l0aW9uKF9yZWYpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgdmFyIHRvcCA9IF9yZWYudG9wO1xuICAgIHZhciBsZWZ0ID0gX3JlZi5sZWZ0O1xuXG4gICAgdmFyIF9jYWNoZSA9IHRoaXMuY2FjaGUoJ2VsZW1lbnQtYm91bmRzJywgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGdldEJvdW5kcyhfdGhpcy5lbGVtZW50KTtcbiAgICB9KTtcblxuICAgIHZhciBoZWlnaHQgPSBfY2FjaGUuaGVpZ2h0O1xuICAgIHZhciB3aWR0aCA9IF9jYWNoZS53aWR0aDtcblxuICAgIHZhciB0YXJnZXRQb3MgPSB0aGlzLmdldFRhcmdldEJvdW5kcygpO1xuXG4gICAgdmFyIGJvdHRvbSA9IHRvcCArIGhlaWdodDtcbiAgICB2YXIgcmlnaHQgPSBsZWZ0ICsgd2lkdGg7XG5cbiAgICB2YXIgYWJ1dHRlZCA9IFtdO1xuICAgIGlmICh0b3AgPD0gdGFyZ2V0UG9zLmJvdHRvbSAmJiBib3R0b20gPj0gdGFyZ2V0UG9zLnRvcCkge1xuICAgICAgWydsZWZ0JywgJ3JpZ2h0J10uZm9yRWFjaChmdW5jdGlvbiAoc2lkZSkge1xuICAgICAgICB2YXIgdGFyZ2V0UG9zU2lkZSA9IHRhcmdldFBvc1tzaWRlXTtcbiAgICAgICAgaWYgKHRhcmdldFBvc1NpZGUgPT09IGxlZnQgfHwgdGFyZ2V0UG9zU2lkZSA9PT0gcmlnaHQpIHtcbiAgICAgICAgICBhYnV0dGVkLnB1c2goc2lkZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChsZWZ0IDw9IHRhcmdldFBvcy5yaWdodCAmJiByaWdodCA+PSB0YXJnZXRQb3MubGVmdCkge1xuICAgICAgWyd0b3AnLCAnYm90dG9tJ10uZm9yRWFjaChmdW5jdGlvbiAoc2lkZSkge1xuICAgICAgICB2YXIgdGFyZ2V0UG9zU2lkZSA9IHRhcmdldFBvc1tzaWRlXTtcbiAgICAgICAgaWYgKHRhcmdldFBvc1NpZGUgPT09IHRvcCB8fCB0YXJnZXRQb3NTaWRlID09PSBib3R0b20pIHtcbiAgICAgICAgICBhYnV0dGVkLnB1c2goc2lkZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBhbGxDbGFzc2VzID0gW107XG4gICAgdmFyIGFkZENsYXNzZXMgPSBbXTtcblxuICAgIHZhciBzaWRlcyA9IFsnbGVmdCcsICd0b3AnLCAncmlnaHQnLCAnYm90dG9tJ107XG4gICAgYWxsQ2xhc3Nlcy5wdXNoKHRoaXMuZ2V0Q2xhc3MoJ2FidXR0ZWQnKSk7XG4gICAgc2lkZXMuZm9yRWFjaChmdW5jdGlvbiAoc2lkZSkge1xuICAgICAgYWxsQ2xhc3Nlcy5wdXNoKF90aGlzLmdldENsYXNzKCdhYnV0dGVkJykgKyAnLScgKyBzaWRlKTtcbiAgICB9KTtcblxuICAgIGlmIChhYnV0dGVkLmxlbmd0aCkge1xuICAgICAgYWRkQ2xhc3Nlcy5wdXNoKHRoaXMuZ2V0Q2xhc3MoJ2FidXR0ZWQnKSk7XG4gICAgfVxuXG4gICAgYWJ1dHRlZC5mb3JFYWNoKGZ1bmN0aW9uIChzaWRlKSB7XG4gICAgICBhZGRDbGFzc2VzLnB1c2goX3RoaXMuZ2V0Q2xhc3MoJ2FidXR0ZWQnKSArICctJyArIHNpZGUpO1xuICAgIH0pO1xuXG4gICAgZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCEoX3RoaXMub3B0aW9ucy5hZGRUYXJnZXRDbGFzc2VzID09PSBmYWxzZSkpIHtcbiAgICAgICAgdXBkYXRlQ2xhc3NlcyhfdGhpcy50YXJnZXQsIGFkZENsYXNzZXMsIGFsbENsYXNzZXMpO1xuICAgICAgfVxuICAgICAgdXBkYXRlQ2xhc3NlcyhfdGhpcy5lbGVtZW50LCBhZGRDbGFzc2VzLCBhbGxDbGFzc2VzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG59KTtcbi8qIGdsb2JhbHMgVGV0aGVyQmFzZSAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBfc2xpY2VkVG9BcnJheSA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pWydyZXR1cm4nXSkgX2lbJ3JldHVybiddKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UnKTsgfSB9OyB9KSgpO1xuXG5UZXRoZXJCYXNlLm1vZHVsZXMucHVzaCh7XG4gIHBvc2l0aW9uOiBmdW5jdGlvbiBwb3NpdGlvbihfcmVmKSB7XG4gICAgdmFyIHRvcCA9IF9yZWYudG9wO1xuICAgIHZhciBsZWZ0ID0gX3JlZi5sZWZ0O1xuXG4gICAgaWYgKCF0aGlzLm9wdGlvbnMuc2hpZnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc2hpZnQgPSB0aGlzLm9wdGlvbnMuc2hpZnQ7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuc2hpZnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHNoaWZ0ID0gdGhpcy5vcHRpb25zLnNoaWZ0LmNhbGwodGhpcywgeyB0b3A6IHRvcCwgbGVmdDogbGVmdCB9KTtcbiAgICB9XG5cbiAgICB2YXIgc2hpZnRUb3AgPSB1bmRlZmluZWQsXG4gICAgICAgIHNoaWZ0TGVmdCA9IHVuZGVmaW5lZDtcbiAgICBpZiAodHlwZW9mIHNoaWZ0ID09PSAnc3RyaW5nJykge1xuICAgICAgc2hpZnQgPSBzaGlmdC5zcGxpdCgnICcpO1xuICAgICAgc2hpZnRbMV0gPSBzaGlmdFsxXSB8fCBzaGlmdFswXTtcblxuICAgICAgdmFyIF9zaGlmdCA9IHNoaWZ0O1xuXG4gICAgICB2YXIgX3NoaWZ0MiA9IF9zbGljZWRUb0FycmF5KF9zaGlmdCwgMik7XG5cbiAgICAgIHNoaWZ0VG9wID0gX3NoaWZ0MlswXTtcbiAgICAgIHNoaWZ0TGVmdCA9IF9zaGlmdDJbMV07XG5cbiAgICAgIHNoaWZ0VG9wID0gcGFyc2VGbG9hdChzaGlmdFRvcCwgMTApO1xuICAgICAgc2hpZnRMZWZ0ID0gcGFyc2VGbG9hdChzaGlmdExlZnQsIDEwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2hpZnRUb3AgPSBzaGlmdC50b3A7XG4gICAgICBzaGlmdExlZnQgPSBzaGlmdC5sZWZ0O1xuICAgIH1cblxuICAgIHRvcCArPSBzaGlmdFRvcDtcbiAgICBsZWZ0ICs9IHNoaWZ0TGVmdDtcblxuICAgIHJldHVybiB7IHRvcDogdG9wLCBsZWZ0OiBsZWZ0IH07XG4gIH1cbn0pO1xucmV0dXJuIFRldGhlcjtcblxufSkpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBEYXlzVmlld0hlYWRpbmcgZnJvbSAnLi9EYXlzVmlld0hlYWRpbmcnO1xuaW1wb3J0IERheXNPZldlZWsgZnJvbSAnLi9EYXlzT2ZXZWVrJztcbmltcG9ydCBNb250aFNlbGVjdG9yIGZyb20gJy4vTW9udGhTZWxlY3Rvcic7XG5pbXBvcnQgRGF5IGZyb20gJy4vRGF5JztcbmltcG9ydCB7IGdldERheXNPZk1vbnRoIH0gZnJvbSAnLi4vdXRpbHMvbW9tZW50LWhlbHBlcic7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgb25DbGlja091dHNpZGUgZnJvbSAncmVhY3Qtb25jbGlja291dHNpZGUnO1xuaW1wb3J0IHsgZGVmYXVsdFN0eWxlcyB9IGZyb20gJy4vRGVmYXVsdFN0eWxlcyc7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbWluOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIG1heDogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBzdHlsZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgc2VsZWN0ZWREYXk6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZGVmYXVsdE1vbnRoOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkNsaWNrT3V0c2lkZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgY29udGFpbmVyUHJvcHM6IFByb3BUeXBlcy5vYmplY3RcbiAgfTtcblxuICBzdGF0aWMgY2hpbGRDb250ZXh0VHlwZXMgPSB7XG4gICAgbmV4dE1vbnRoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHByZXZNb250aDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBzZXRDYWxlbmRhck1vZGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2V0TW9udGg6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgc2V0VHlwZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgc3R5bGVzOiBkZWZhdWx0U3R5bGVzLFxuICAgIGNvbnRhaW5lclByb3BzOiB7fVxuICB9O1xuXG4gIHN0YXRlID0ge1xuICAgIG1vbnRoOiB0aGlzLnByb3BzLmRlZmF1bHRNb250aCB8fCB0aGlzLnByb3BzLnNlbGVjdGVkRGF5IHx8IG1vbWVudCh0aGlzLnByb3BzLm1pbiksXG4gICAgc2VsZWN0ZWREYXk6IHRoaXMucHJvcHMuc2VsZWN0ZWREYXkgfHwgbnVsbCxcbiAgICBtb2RlOiAnZGF5cydcbiAgfTtcblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5leHRNb250aDogdGhpcy5uZXh0TW9udGguYmluZCh0aGlzKSxcbiAgICAgIHByZXZNb250aDogdGhpcy5wcmV2TW9udGguYmluZCh0aGlzKSxcbiAgICAgIHNldENhbGVuZGFyTW9kZTogdGhpcy5zZXRNb2RlLmJpbmQodGhpcyksXG4gICAgICBzZXRNb250aDogdGhpcy5zZXRNb250aC5iaW5kKHRoaXMpLFxuICAgICAgc2V0VHlwZTogdGhpcy5zZXRNb250aC5iaW5kKHRoaXMpXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoeyBzZWxlY3RlZERheSwgZGVmYXVsdE1vbnRoLCBtaW4gfSkge1xuICAgIGlmICh0aGlzLnByb3BzLnNlbGVjdGVkRGF5ICE9PSBzZWxlY3RlZERheSkge1xuICAgICAgdGhpcy5zZWxlY3REYXkoc2VsZWN0ZWREYXkpO1xuICAgIH0gZWxzZSBpZiAoZGVmYXVsdE1vbnRoICYmIHRoaXMucHJvcHMuZGVmYXVsdE1vbnRoICE9PSBkZWZhdWx0TW9udGggJiYgdGhpcy5zdGF0ZS5tb250aCA9PT0gdGhpcy5wcm9wcy5kZWZhdWx0TW9udGgpIHtcbiAgICAgIHRoaXMuc2V0TW9udGgoZGVmYXVsdE1vbnRoKTtcbiAgICB9IGVsc2UgaWYgKG1pbiAmJiB0aGlzLnByb3BzLm1pbiAhPT0gbWluICYmIHRoaXMuc3RhdGUubW9udGguaXNTYW1lKHRoaXMucHJvcHMubWluKSkge1xuICAgICAgdGhpcy5zZXRNb250aChtaW4uY2xvbmUoKSk7XG4gICAgfVxuICB9XG5cbiAgc2V0TW9kZShtb2RlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1vZGUgfSk7XG4gIH1cblxuICBzZXRNb250aChtb250aCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBtb250aCB9KTtcbiAgfVxuXG4gIHNldFR5cGUodHlwZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0eXBlIH0pO1xuICB9XG5cbiAgbmV4dE1vbnRoKCkge1xuICAgIGNvbnN0IG1vbnRoRm9ybWF0ID0gJ01vbnRoJztcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbW9udGg6IHRoaXMuc3RhdGUubW9udGguY2xvbmUoKS5hZGQoMSwgbW9udGhGb3JtYXQpXG4gICAgfSk7XG4gIH1cblxuICBwcmV2TW9udGgoKSB7XG4gICAgY29uc3QgbW9udGhGb3JtYXQgPSAnTW9udGgnO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBtb250aDogdGhpcy5zdGF0ZS5tb250aC5jbG9uZSgpLnN1YnRyYWN0KDEsIG1vbnRoRm9ybWF0KVxuICAgIH0pO1xuICB9XG5cbiAgc2VsZWN0RGF5KHNlbGVjdGVkRGF5KSB7XG4gICAgY29uc3QgeyBtb250aCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB5ZWFyTW9udGhGb3JtYXQgPSAnWVlZWU1NJztcblxuICAgIC8vIEJlY2F1c2UgdGhlcmUncyBubyBgbTEuaXNTYW1lKG0yLCAnak1vbnRoJylgXG4gICAgaWYgKHNlbGVjdGVkRGF5LmZvcm1hdCh5ZWFyTW9udGhGb3JtYXQpICE9PSBtb250aC5mb3JtYXQoeWVhck1vbnRoRm9ybWF0KSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1vbnRoOiBzZWxlY3RlZERheSB9KTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWREYXkgfSk7XG4gIH1cblxuICBoYW5kbGVDbGlja09uRGF5ID0gc2VsZWN0ZWREYXkgPT4ge1xuICAgIGNvbnN0IHsgb25TZWxlY3QgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5zZWxlY3REYXkoc2VsZWN0ZWREYXkpO1xuICAgIGlmIChvblNlbGVjdCkge1xuICAgICAgb25TZWxlY3Qoc2VsZWN0ZWREYXkpO1xuICAgIH1cbiAgfTtcblxuICBoYW5kbGVDbGlja091dHNpZGUoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5vbkNsaWNrT3V0c2lkZSkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrT3V0c2lkZShldmVudCk7XG4gICAgfVxuICB9XG5cbiAgZGF5cyA9IG51bGw7XG4gIGxhc3RSZW5kZXJlZE1vbnRoID0gbnVsbDtcblxuICByZW5kZXJNb250aFNlbGVjdG9yKCkge1xuICAgIGNvbnN0IHsgbW9udGggfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBzdHlsZXMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuICg8TW9udGhTZWxlY3RvciBzdHlsZXM9e3N0eWxlc30gc2VsZWN0ZWRNb250aD17bW9udGh9IC8+KTtcbiAgfVxuXG4gIHJlbmRlckRheXMoKSB7XG4gICAgY29uc3QgeyBtb250aCwgc2VsZWN0ZWREYXkgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBjaGlsZHJlbiwgbWluLCBtYXgsIHN0eWxlcywgb3V0c2lkZUNsaWNrSWdub3JlQ2xhc3MgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgZGF5cztcblxuICAgIGlmICh0aGlzLmxhc3RSZW5kZXJlZE1vbnRoID09PSBtb250aCkge1xuICAgICAgZGF5cyA9IHRoaXMuZGF5cztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5cyA9IGdldERheXNPZk1vbnRoKG1vbnRoKTtcbiAgICAgIHRoaXMuZGF5cyA9IGRheXM7XG4gICAgICB0aGlzLmxhc3RSZW5kZXJlZE1vbnRoID0gbW9udGg7XG4gICAgfVxuXG4gICAgY29uc3QgbW9udGhGb3JtYXQgPSAnTU0nO1xuICAgIGNvbnN0IGRhdGVGb3JtYXQgPSAnWVlZWU1NREQnO1xuXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8RGF5c1ZpZXdIZWFkaW5nIHN0eWxlcz17c3R5bGVzfSBtb250aD17bW9udGh9IC8+XG4gICAgICAgIDxEYXlzT2ZXZWVrIHN0eWxlcz17c3R5bGVzfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRheVBpY2tlckNvbnRhaW5lcn0+XG4gICAgICAgICAge1xuICAgICAgICAgICAgZGF5cy5tYXAoZGF5ID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50TW9udGggPSBkYXkuZm9ybWF0KG1vbnRoRm9ybWF0KSA9PT0gbW9udGguZm9ybWF0KG1vbnRoRm9ybWF0KTtcbiAgICAgICAgICAgICAgY29uc3QgZGlzYWJsZWQgPSAobWluID8gZGF5LmlzQmVmb3JlKG1pbikgOiBmYWxzZSkgfHwgKG1heCA/IGRheS5pc0FmdGVyKG1heCkgOiBmYWxzZSk7XG4gICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gc2VsZWN0ZWREYXkgPyBzZWxlY3RlZERheS5pc1NhbWUoZGF5LCAnZGF5JykgOiBmYWxzZTtcblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxEYXlcbiAgICAgICAgICAgICAgICAgIGtleT17ZGF5LmZvcm1hdChkYXRlRm9ybWF0KX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2tPbkRheX1cbiAgICAgICAgICAgICAgICAgIGRheT17ZGF5fVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxuICAgICAgICAgICAgICAgICAgaXNDdXJyZW50TW9udGg9e2lzQ3VycmVudE1vbnRofVxuICAgICAgICAgICAgICAgICAgc3R5bGVzPXtzdHlsZXN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc2VsZWN0ZWREYXksXG4gICAgICBtaW4sXG4gICAgICBtYXgsXG4gICAgICBvbkNsaWNrT3V0c2lkZSxcbiAgICAgIG91dHNpZGVDbGlja0lnbm9yZUNsYXNzLFxuICAgICAgc3R5bGVzLFxuICAgICAgY2xhc3NOYW1lXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBtb2RlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FsZW5kYXJDb250YWluZXIgKyAnICcgKyBjbGFzc05hbWV9PlxuICAgICAgICB7bW9kZSA9PT0gJ21vbnRoU2VsZWN0b3InID8gdGhpcy5yZW5kZXJNb250aFNlbGVjdG9yKCkgOiB0aGlzLnJlbmRlckRheXMoKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgb25DbGlja091dHNpZGUoQ2FsZW5kYXIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IHBlcnNpYW5OdW1iZXIgfSBmcm9tICcuLi91dGlscy9wZXJzaWFuJztcbmltcG9ydCB7IGxlZnRBcnJvdywgcmlnaHRBcnJvdyB9IGZyb20gJy4uL3V0aWxzL2Fzc2V0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRpbmcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIG1vbnRoOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcbiAgfTtcblxuICBzdGF0aWMgY29udGV4dFR5cGVzID0ge1xuICAgIHN0eWxlczogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBuZXh0TW9udGg6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgcHJldk1vbnRoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHNldENhbGVuZGFyTW9kZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxuICB9O1xuXG4gIGhhbmRsZU1vbnRoQ2xpY2soZXZlbnQpIHtcbiAgICBjb25zdCB7IHNldENhbGVuZGFyTW9kZSB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2V0Q2FsZW5kYXJNb2RlKCdtb250aFNlbGVjdG9yJyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuZXh0TW9udGgsIHByZXZNb250aCB9ID0gdGhpcy5jb250ZXh0O1xuICAgIGNvbnN0IHsgbW9udGgsIHN0eWxlcyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRpbmd9PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfSBvbkNsaWNrPXt0aGlzLmhhbmRsZU1vbnRoQ2xpY2suYmluZCh0aGlzKX0+XG4gICAgICAgICAge21vbnRoLmxvY2FsZSgnZW4nKS5mb3JtYXQoJ01NTU0gWVlZWScpfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHRpdGxlPVwi2YXYp9mHINmC2KjZhFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJldn1cbiAgICAgICAgICBvbkNsaWNrPXtwcmV2TW9udGh9XG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3JpZ2h0QXJyb3d9XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICB0aXRsZT1cItmF2KfZhyDYqNi52K9cIlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5leHR9XG4gICAgICAgICAgb25DbGljaz17bmV4dE1vbnRofVxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtsZWZ0QXJyb3d9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJjb25zdCBsYXRpblRvUGVyc2lhbk1hcCA9IFsn27EnLCAn27InLCAn27MnLCAn27QnLCAn27UnLCAn27YnLCAn27cnLCAn27gnLCAn27knLCAn27AnXTtcbmNvbnN0IGxhdGluTnVtYmVycyA9IFsvMS9nLCAvMi9nLCAvMy9nLCAvNC9nLCAvNS9nLCAvNi9nLCAvNy9nLCAvOC9nLCAvOS9nLCAvMC9nXTtcblxuZnVuY3Rpb24gcHJlcGFyZU51bWJlcihpbnB1dCkge1xuICBsZXQgc3RyaW5nO1xuICBpZiAodHlwZW9mIGlucHV0ID09PSAnbnVtYmVyJykge1xuICAgIHN0cmluZyA9IGlucHV0LnRvU3RyaW5nKCk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGlucHV0ID09PSAndW5kZWZpbmVkJykge1xuICAgIHN0cmluZyA9ICcnO1xuICB9IGVsc2Uge1xuICAgIHN0cmluZyA9IGlucHV0O1xuICB9XG5cbiAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gbGF0aW5Ub1BlcnNpYW4oc3RyaW5nKSB7XG4gIGxldCByZXN1bHQgPSBzdHJpbmc7XG5cbiAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEwOyBpbmRleCsrKSB7XG4gICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UobGF0aW5OdW1iZXJzW2luZGV4XSwgbGF0aW5Ub1BlcnNpYW5NYXBbaW5kZXhdKTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwZXJzaWFuTnVtYmVyKGlucHV0KSB7XG4gIHJldHVybiBsYXRpblRvUGVyc2lhbihwcmVwYXJlTnVtYmVyKGlucHV0KSk7XG59XG4iLCJleHBvcnQgY29uc3QgbGVmdEFycm93ID0ge1xuICBfX2h0bWw6ICc8c3ZnIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDMxNC41IDMxNC41XCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMxNC41IDMxNC41O1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+PGc+PHBhdGggY2xhc3M9XCJhcnJvdy1pY29uXCIgZD1cIk0xMjUsMTU3LjVsMTE2LTExNmMxMC0xMCwxMC0yNCwwLTM0cy0yNS0xMC0zNSwwbC0xMzMsMTMzYy01LDUtNywxMC03LDE3czIsMTIsNywxN2wxMzMsMTMzYzUsNSwxMSw3LDE3LDdzMTMtMiwxOC03YzEwLTEwLDEwLTI0LDAtMzRMMTI1LDE1Ny41elwiLz48L2c+PC9zdmc+J1xufTtcblxuZXhwb3J0IGNvbnN0IHJpZ2h0QXJyb3cgPSB7XG4gIF9faHRtbDogJzxzdmcgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgMzE1LjUgMzE1LjVcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzE1LjUgMzE1LjU7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj48Zz48cGF0aCBjbGFzcz1cImFycm93LWljb25cIiBkPVwiTTI0MiwxNDFMMTA5LDhjLTUtNS0xMi04LTE4LThTNzksMyw3NCw4Yy0xMCwxMC0xMCwyNCwwLDM0bDExNiwxMTZMNzQsMjc0Yy0xMCwxMC0xMCwyNCwwLDM0czI1LDEwLDM1LDBsMTMzLTEzM2M1LTUsNy0xMSw3LTE3QzI0OSwxNTEsMjQ3LDE0NiwyNDIsMTQxelwiLz48L2c+PC9zdmc+J1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZSA9IHtcbiAgX19odG1sOiAnPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAyMTIuOTgyIDIxMi45ODJcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjEyLjk4MiAyMTIuOTgyO1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+PGc+PHBhdGggc3R5bGU9XCJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtcIiBkPVwiTTEzMS44MDQsMTA2LjQ5MWw3NS45MzYtNzUuOTM2YzYuOTktNi45OSw2Ljk5LTE4LjMyMywwLTI1LjMxMiAgIGMtNi45OS02Ljk5LTE4LjMyMi02Ljk5LTI1LjMxMiwwbC03NS45MzcsNzUuOTM3TDMwLjU1NCw1LjI0MmMtNi45OS02Ljk5LTE4LjMyMi02Ljk5LTI1LjMxMiwwYy02Ljk4OSw2Ljk5LTYuOTg5LDE4LjMyMywwLDI1LjMxMiAgIGw3NS45MzcsNzUuOTM2TDUuMjQyLDE4Mi40MjdjLTYuOTg5LDYuOTktNi45ODksMTguMzIzLDAsMjUuMzEyYzYuOTksNi45OSwxOC4zMjIsNi45OSwyNS4zMTIsMGw3NS45MzctNzUuOTM3bDc1LjkzNyw3NS45MzcgICBjNi45ODksNi45OSwxOC4zMjIsNi45OSwyNS4zMTIsMGM2Ljk5LTYuOTksNi45OS0xOC4zMjIsMC0yNS4zMTJMMTMxLjgwNCwxMDYuNDkxelwiIGZpbGw9XCIjNTU1NTU1XCIvPjwvZz48L3N2Zz4nXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuLy8gRGF5IG9mIHdlZWsgbmFtZXMgZm9yIHVzZSBpbiBkYXRlLXBpY2tlciBoZWFkaW5nXG5jb25zdCBkYXlPZldlZWtOYW1lc0dyZWdvcmlhbiA9IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF5c09mV2VlayBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc3R5bGVzOiBQcm9wVHlwZXMub2JqZWN0XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgc3R5bGVzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgZGF5T2ZXZWVrTmFtZXMgPSBkYXlPZldlZWtOYW1lc0dyZWdvcmlhbjtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRheXNPZldlZWt9PlxuICAgICAgICB7ZGF5T2ZXZWVrTmFtZXMubWFwKChuYW1lLCBrZXkpID0+IDxkaXYga2V5PXtrZXl9PntuYW1lfTwvZGl2Pil9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgTW9udGhzVmlld0hlYWRpbmcgZnJvbSAnLi9Nb250aHNWaWV3SGVhZGluZyc7XG5pbXBvcnQgeyBsZWZ0QXJyb3csIHJpZ2h0QXJyb3cgfSBmcm9tICcuLi91dGlscy9hc3NldHMnO1xuXG5jb25zdCBtb250aHNHcmVnb3JpYW4gPSBbXG4gICdKYW51YXJ5JyxcbiAgJ0ZlYnJ1YXJ5JyxcbiAgJ01hcmNoJyxcbiAgJ0FwcmlsJyxcbiAgJ01heScsXG4gICdKdW5lJyxcbiAgJ0p1bHknLFxuICAnQXVndXN0JyxcbiAgJ1NlcHRlbWJlcicsXG4gICdPY3RvYmVyJyxcbiAgJ05vdmVtYmVyJyxcbiAgJ0RlY2VtYmVyJ1xuXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9udGhTZWxlY3RvciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgc3R5bGVzOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHNlbGVjdGVkTW9udGg6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxuICB9O1xuXG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgc2V0Q2FsZW5kYXJNb2RlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHNldE1vbnRoOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH07XG5cbiAgc3RhdGUgPSB7XG4gICAgeWVhcjogdGhpcy5wcm9wcy5zZWxlY3RlZE1vbnRoXG4gIH07XG5cbiAgbmV4dFllYXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB5ZWFyOiB0aGlzLnN0YXRlLnllYXIuY2xvbmUoKS5hZGQoMSwgJ3llYXInKVxuICAgIH0pO1xuICB9XG5cbiAgcHJldlllYXIoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICB5ZWFyOiB0aGlzLnN0YXRlLnllYXIuY2xvbmUoKS5zdWJ0cmFjdCgxLCAneWVhcicpXG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVDbGljayhrZXkpIHtcbiAgICBjb25zdCB7IHNldE1vbnRoLCBzZXRDYWxlbmRhck1vZGUgfSA9IHRoaXMuY29udGV4dDtcbiAgICBjb25zdCBtb250aFllYXJGb3JtYXQ9ICdNLVlZWVknO1xuICAgIHNldE1vbnRoKG1vbWVudChrZXksIG1vbnRoWWVhckZvcm1hdCkpO1xuICAgIHNldENhbGVuZGFyTW9kZSgnZGF5cycpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgeWVhciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IHNlbGVjdGVkTW9udGgsIHN0eWxlcyB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgICAgICAgY29uc3QgeWVhckZvcm1hdD0gJ1lZWVknO1xuICAgIGNvbnN0IG1vbnRoWWVhckZvcm1hdD0gJ00tWVlZWSc7XG4gICAgY29uc3QgbW9udGhzPW1vbnRoc0dyZWdvcmlhbjtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vbnRoLXNlbGVjdG9yXCI+XG4gICAgICAgIDxNb250aHNWaWV3SGVhZGluZ1xuICAgICAgICAgIHN0eWxlcz17c3R5bGVzfVxuICAgICAgICAgIHllYXI9e3llYXJ9XG4gICAgICAgICAgb25OZXh0WWVhcj17dGhpcy5uZXh0WWVhci5iaW5kKHRoaXMpIH1cbiAgICAgICAgICBvblByZXZZZWFyPXt0aGlzLnByZXZZZWFyLmJpbmQodGhpcykgfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vbnRoc0xpc3R9PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG1vbnRocy5tYXAoKG5hbWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBidXR0b25GaW5nZXJwcmludCA9IChrZXkgKyAxKSArICctJyArIHllYXIuZm9ybWF0KHllYXJGb3JtYXQpO1xuICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZE1vbnRoRmluZ2VycHJpbnQgPSBzZWxlY3RlZE1vbnRoLmZvcm1hdChtb250aFllYXJGb3JtYXQpO1xuICAgICAgICAgICAgICBjb25zdCBpc0N1cnJlbnQgPSBzZWxlY3RlZE1vbnRoRmluZ2VycHJpbnQgPT09IGJ1dHRvbkZpbmdlcnByaW50O1xuXG4gICAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoc3R5bGVzLm1vbnRoV3JhcHBlciwge1xuICAgICAgICAgICAgICAgIFtzdHlsZXMuc2VsZWN0ZWRdOiBpc0N1cnJlbnRcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzLCBidXR0b25GaW5nZXJwcmludCl9PlxuICAgICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+KTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IHBlcnNpYW5OdW1iZXIgfSBmcm9tICcuLi91dGlscy9wZXJzaWFuJztcbmltcG9ydCB7IGxlZnRBcnJvdywgcmlnaHRBcnJvdyB9IGZyb20gJy4uL3V0aWxzL2Fzc2V0cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vbnRoc1ZpZXdIZWFkaW5nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICB5ZWFyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgb25OZXh0WWVhcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBvblByZXZZZWFyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXG4gIH07XG5cbiAgc3RhdGljIGNvbnRleHRUeXBlcyA9IHtcbiAgICBzdHlsZXM6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgdHlwZTogUHJvcFR5cGVzLm51bWJlclxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHllYXIsIHN0eWxlcywgdHlwZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHllYXJGb3JtYXQgPSAnWVlZWSc7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nfT5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIHt5ZWFyLmZvcm1hdCh5ZWFyRm9ybWF0KX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgdGl0bGU9e1wiYmVmb3JlIHllYXJcIn1cbiAgICAgICAgICBzdHlsZT17c3R5bGVzLm5hdkJ1dHRvbn1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcmV2fVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMub25QcmV2WWVhcn1cbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17cmlnaHRBcnJvd31cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHRpdGxlPXtcIm5leHQgeWVhclwifVxuICAgICAgICAgIHN0eWxlPXtzdHlsZXMubmF2QnV0dG9ufVxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5leHR9XG4gICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5vbk5leHRZZWFyfVxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtsZWZ0QXJyb3d9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgd3JhcHBlcjoge30sXG4gIGJ1dHRvbjoge1xuICAgIG91dGxpbmU6ICdub25lJyxcbiAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXkgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgIGRheTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGlzQ3VycmVudE1vbnRoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uQ2xpY2s6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgIHJldHVybiBuZXh0UHJvcHMuc2VsZWN0ZWQgIT09IHRoaXMucHJvcHMuc2VsZWN0ZWQgfHxcbiAgICAgIG5leHRQcm9wcy5kaXNhYmxlZCAhPT0gdGhpcy5wcm9wcy5kaXNhYmxlZCB8fFxuICAgICAgbmV4dFByb3BzLmlzQ3VycmVudE1vbnRoICE9PSB0aGlzLnByb3BzLmlzQ3VycmVudE1vbnRoO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV2ZW50Lm5hdGl2ZUV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHsgb25DbGljaywgZGF5IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKG9uQ2xpY2spIHtcbiAgICAgIG9uQ2xpY2soZGF5KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXksIGRpc2FibGVkLCBzZWxlY3RlZCwgaXNDdXJyZW50TW9udGgsIG9uQ2xpY2ssIHN0eWxlcywgLi4ucmVzdCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzbmFtZXMoc3R5bGVzLmRheVdyYXBwZXIsIHtcbiAgICAgIFtzdHlsZXMuc2VsZWN0ZWRdOiBzZWxlY3RlZCxcbiAgICAgIFtzdHlsZXMuY3VycmVudE1vbnRoXTogaXNDdXJyZW50TW9udGhcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSB9XG4gICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgIHsuLi5yZXN0fVxuICAgICAgICA+XG4gICAgICAgICAgeyBkYXkuZm9ybWF0KCdEJykgfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiIsIi8qKlxuICogR2V0IGRheXMgb2YgYSBtb250aCB0aGF0IHNob3VsZCBiZSBzaG93biBvbiBhIG1vbnRoIHBhZ2VcbiAqXG4gKiBAcGFyYW0gbW9udGggQSBtb21lbnQgb2JqZWN0XG4gKiBAcmV0dXJucyB7QXJyYXl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXREYXlzT2ZNb250aChtb250aCkge1xuICBjb25zdCBkYXlzID0gW107XG5cbiAgY29uc3QgbW9udGhGb3JtYXQgPSAnTW9udGgnO1xuICBjb25zdCBkYXlPZmZzZXQgPSAwO1xuXG4gIGNvbnN0IGN1cnJlbnQgPSBtb250aC5jbG9uZSgpLnN0YXJ0T2YobW9udGhGb3JtYXQpO1xuICBjb25zdCBlbmQgPSBtb250aC5jbG9uZSgpLmVuZE9mKG1vbnRoRm9ybWF0KTtcblxuICAvLyBTZXQgc3RhcnQgdG8gdGhlIGZpcnN0IGRheSBvZiB3ZWVrIGluIHRoZSBsYXN0IG1vbnRoXG4gIGN1cnJlbnQuc3VidHJhY3QoKGN1cnJlbnQuZGF5KCkgKyBkYXlPZmZzZXQpICUgNywgJ2RheXMnKTtcblxuICAvLyBTZXQgZW5kIHRvIHRoZSBsYXN0IGRheSBvZiB3ZWVrIGluIHRoZSBuZXh0IG1vbnRoXG4gIGVuZC5hZGQoNiAtIChlbmQuZGF5KCkgKyBkYXlPZmZzZXQpICUgNywgJ2RheXMnKTtcblxuICB3aGlsZSAoY3VycmVudC5pc0JlZm9yZShlbmQpKSB7XG4gICAgZGF5cy5wdXNoKGN1cnJlbnQuY2xvbmUoKSk7XG4gICAgY3VycmVudC5hZGQoMSwgJ2RheXMnKTtcbiAgfVxuXG4gIHJldHVybiBkYXlzO1xufVxuIiwiLyoqXG4gKiBBIGhpZ2hlci1vcmRlci1jb21wb25lbnQgZm9yIGhhbmRsaW5nIG9uQ2xpY2tPdXRzaWRlIGZvciBSZWFjdCBjb21wb25lbnRzLlxuICovXG4oZnVuY3Rpb24ocm9vdCkge1xuXG4gIC8vIGFkbWluaXN0cmF0aXZlXG4gIHZhciByZWdpc3RlcmVkQ29tcG9uZW50cyA9IFtdO1xuICB2YXIgaGFuZGxlcnMgPSBbXTtcbiAgdmFyIElHTk9SRV9DTEFTUyA9ICdpZ25vcmUtcmVhY3Qtb25jbGlja291dHNpZGUnO1xuICB2YXIgREVGQVVMVF9FVkVOVFMgPSBbJ21vdXNlZG93bicsICd0b3VjaHN0YXJ0J107XG5cbiAgLyoqXG4gICAqIENoZWNrIHdoZXRoZXIgc29tZSBET00gbm9kZSBpcyBvdXIgQ29tcG9uZW50J3Mgbm9kZS5cbiAgICovXG4gIHZhciBpc05vZGVGb3VuZCA9IGZ1bmN0aW9uKGN1cnJlbnQsIGNvbXBvbmVudE5vZGUsIGlnbm9yZUNsYXNzKSB7XG4gICAgaWYgKGN1cnJlbnQgPT09IGNvbXBvbmVudE5vZGUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICAvLyBTVkcgPHVzZS8+IGVsZW1lbnRzIGRvIG5vdCB0ZWNobmljYWxseSByZXNpZGUgaW4gdGhlIHJlbmRlcmVkIERPTSwgc29cbiAgICAvLyB0aGV5IGRvIG5vdCBoYXZlIGNsYXNzTGlzdCBkaXJlY3RseSwgYnV0IHRoZXkgb2ZmZXIgYSBsaW5rIHRvIHRoZWlyXG4gICAgLy8gY29ycmVzcG9uZGluZyBlbGVtZW50LCB3aGljaCBjYW4gaGF2ZSBjbGFzc0xpc3QuIFRoaXMgZXh0cmEgY2hlY2sgaXMgZm9yXG4gICAgLy8gdGhhdCBjYXNlLlxuICAgIC8vIFNlZTogaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvc3RydWN0Lmh0bWwjSW50ZXJmYWNlU1ZHVXNlRWxlbWVudFxuICAgIC8vIERpc2N1c3Npb246IGh0dHBzOi8vZ2l0aHViLmNvbS9Qb21heC9yZWFjdC1vbmNsaWNrb3V0c2lkZS9wdWxsLzE3XG4gICAgaWYgKGN1cnJlbnQuY29ycmVzcG9uZGluZ0VsZW1lbnQpIHtcbiAgICAgIHJldHVybiBjdXJyZW50LmNvcnJlc3BvbmRpbmdFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhpZ25vcmVDbGFzcyk7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50LmNsYXNzTGlzdC5jb250YWlucyhpZ25vcmVDbGFzcyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFRyeSB0byBmaW5kIG91ciBub2RlIGluIGEgaGllcmFyY2h5IG9mIG5vZGVzLCByZXR1cm5pbmcgdGhlIGRvY3VtZW50XG4gICAqIG5vZGUgYXMgaGlnaGVzdCBub29kZSBpZiBvdXIgbm9kZSBpcyBub3QgZm91bmQgaW4gdGhlIHBhdGggdXAuXG4gICAqL1xuICB2YXIgZmluZEhpZ2hlc3QgPSBmdW5jdGlvbihjdXJyZW50LCBjb21wb25lbnROb2RlLCBpZ25vcmVDbGFzcykge1xuICAgIGlmIChjdXJyZW50ID09PSBjb21wb25lbnROb2RlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBJZiBzb3VyY2U9bG9jYWwgdGhlbiB0aGlzIGV2ZW50IGNhbWUgZnJvbSAnc29tZXdoZXJlJ1xuICAgIC8vIGluc2lkZSBhbmQgc2hvdWxkIGJlIGlnbm9yZWQuIFdlIGNvdWxkIGhhbmRsZSB0aGlzIHdpdGhcbiAgICAvLyBhIGxheWVyZWQgYXBwcm9hY2gsIHRvbywgYnV0IHRoYXQgcmVxdWlyZXMgZ29pbmcgYmFjayB0b1xuICAgIC8vIHRoaW5raW5nIGluIHRlcm1zIG9mIERvbSBub2RlIG5lc3RpbmcsIHJ1bm5pbmcgY291bnRlclxuICAgIC8vIHRvIFJlYWN0J3MgJ3lvdSBzaG91bGRuJ3QgY2FyZSBhYm91dCB0aGUgRE9NJyBwaGlsb3NvcGh5LlxuICAgIHdoaWxlKGN1cnJlbnQucGFyZW50Tm9kZSkge1xuICAgICAgaWYgKGlzTm9kZUZvdW5kKGN1cnJlbnQsIGNvbXBvbmVudE5vZGUsIGlnbm9yZUNsYXNzKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50LnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBjdXJyZW50O1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0aGUgYnJvd3NlciBzY3JvbGxiYXIgd2FzIGNsaWNrZWRcbiAgICovXG4gIHZhciBjbGlja2VkU2Nyb2xsYmFyID0gZnVuY3Rpb24oZXZ0KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA8PSBldnQuY2xpZW50WCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0IDw9IGV2dC5jbGllbnRZO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSB0aGUgZXZlbnQgaGFuZGxlciB0aGF0IGNoZWNrcyB3aGV0aGVyIGEgY2xpY2tlZCBET00gbm9kZVxuICAgKiBpcyBpbnNpZGUgb2YsIG9yIGxpdmVzIG91dHNpZGUgb2YsIG91ciBDb21wb25lbnQncyBub2RlIHRyZWUuXG4gICAqL1xuICB2YXIgZ2VuZXJhdGVPdXRzaWRlQ2hlY2sgPSBmdW5jdGlvbihjb21wb25lbnROb2RlLCBjb21wb25lbnRJbnN0YW5jZSwgZXZlbnRIYW5kbGVyLCBpZ25vcmVDbGFzcywgZXhjbHVkZVNjcm9sbGJhciwgcHJldmVudERlZmF1bHQsIHN0b3BQcm9wYWdhdGlvbikge1xuICAgIHJldHVybiBmdW5jdGlvbihldnQpIHtcbiAgICAgIGlmIChwcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIGlmIChzdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgZXZ0LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgICAgdmFyIGN1cnJlbnQgPSBldnQudGFyZ2V0O1xuICAgICAgaWYoKGV4Y2x1ZGVTY3JvbGxiYXIgJiYgY2xpY2tlZFNjcm9sbGJhcihldnQpKSB8fCAoZmluZEhpZ2hlc3QoY3VycmVudCwgY29tcG9uZW50Tm9kZSwgaWdub3JlQ2xhc3MpICE9PSBkb2N1bWVudCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZXZlbnRIYW5kbGVyKGV2dCk7XG4gICAgfTtcbiAgfTtcblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBnZW5lcmF0ZXMgdGhlIEhPQyBmdW5jdGlvbiB0aGF0IHlvdSdsbCB1c2VcbiAgICogaW4gb3JkZXIgdG8gaW1wYXJ0IG9uT3V0c2lkZUNsaWNrIGxpc3RlbmluZyB0byBhblxuICAgKiBhcmJpdHJhcnkgY29tcG9uZW50LiBJdCBnZXRzIGNhbGxlZCBhdCB0aGUgZW5kIG9mIHRoZVxuICAgKiBib290c3RyYXBwaW5nIGNvZGUgdG8geWllbGQgYW4gaW5zdGFuY2Ugb2YgdGhlXG4gICAqIG9uQ2xpY2tPdXRzaWRlSE9DIGZ1bmN0aW9uIGRlZmluZWQgaW5zaWRlIHNldHVwSE9DKCkuXG4gICAqL1xuICBmdW5jdGlvbiBzZXR1cEhPQyhyb290LCBSZWFjdCwgUmVhY3RET00sIGNyZWF0ZVJlYWN0Q2xhc3MpIHtcblxuICAgIC8vIFRoZSBhY3R1YWwgQ29tcG9uZW50LXdyYXBwaW5nIEhPQzpcbiAgICByZXR1cm4gZnVuY3Rpb24gb25DbGlja091dHNpZGVIT0MoQ29tcG9uZW50LCBjb25maWcpIHtcbiAgICAgIHZhciB3cmFwQ29tcG9uZW50V2l0aE9uQ2xpY2tPdXRzaWRlSGFuZGxpbmcgPSBjcmVhdGVSZWFjdENsYXNzKHtcbiAgICAgICAgc3RhdGljczoge1xuICAgICAgICAgIC8qKlxuICAgICAgICAgICAqIEFjY2VzcyB0aGUgd3JhcHBlZCBDb21wb25lbnQncyBjbGFzcy5cbiAgICAgICAgICAgKi9cbiAgICAgICAgICBnZXRDbGFzczogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoQ29tcG9uZW50LmdldENsYXNzKSB7XG4gICAgICAgICAgICAgIHJldHVybiBDb21wb25lbnQuZ2V0Q2xhc3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBDb21wb25lbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBY2Nlc3MgdGhlIHdyYXBwZWQgQ29tcG9uZW50J3MgaW5zdGFuY2UuXG4gICAgICAgICAqL1xuICAgICAgICBnZXRJbnN0YW5jZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIENvbXBvbmVudC5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCA/IHRoaXMucmVmcy5pbnN0YW5jZSA6IHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gdGhpcyBpcyBnaXZlbiBtZWFuaW5nIGluIGNvbXBvbmVudERpZE1vdW50XG4gICAgICAgIF9fb3V0c2lkZUNsaWNrSGFuZGxlcjogZnVuY3Rpb24oKSB7fSxcblxuICAgICAgICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBleGNsdWRlU2Nyb2xsYmFyOiBjb25maWcgJiYgY29uZmlnLmV4Y2x1ZGVTY3JvbGxiYXJcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgY2xpY2sgbGlzdGVuZXJzIHRvIHRoZSBjdXJyZW50IGRvY3VtZW50LFxuICAgICAgICAgKiBsaW5rZWQgdG8gdGhpcyBjb21wb25lbnQncyBzdGF0ZS5cbiAgICAgICAgICovXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBJZiB3ZSBhcmUgaW4gYW4gZW52aXJvbm1lbnQgd2l0aG91dCBhIERPTSBzdWNoXG4gICAgICAgICAgLy8gYXMgc2hhbGxvdyByZW5kZXJpbmcgb3Igc25hcHNob3RzIHRoZW4gd2UgZXhpdFxuICAgICAgICAgIC8vIGVhcmx5IHRvIHByZXZlbnQgYW55IHVuaGFuZGxlZCBlcnJvcnMgYmVpbmcgdGhyb3duLlxuICAgICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8ICFkb2N1bWVudC5jcmVhdGVFbGVtZW50KXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLmdldEluc3RhbmNlKCk7XG4gICAgICAgICAgdmFyIGNsaWNrT3V0c2lkZUhhbmRsZXI7XG5cbiAgICAgICAgICBpZihjb25maWcgJiYgdHlwZW9mIGNvbmZpZy5oYW5kbGVDbGlja091dHNpZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNsaWNrT3V0c2lkZUhhbmRsZXIgPSBjb25maWcuaGFuZGxlQ2xpY2tPdXRzaWRlKGluc3RhbmNlKTtcbiAgICAgICAgICAgIGlmKHR5cGVvZiBjbGlja091dHNpZGVIYW5kbGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IGxhY2tzIGEgZnVuY3Rpb24gZm9yIHByb2Nlc3Npbmcgb3V0c2lkZSBjbGljayBldmVudHMgc3BlY2lmaWVkIGJ5IHRoZSBoYW5kbGVDbGlja091dHNpZGUgY29uZmlnIG9wdGlvbi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYodHlwZW9mIGluc3RhbmNlLmhhbmRsZUNsaWNrT3V0c2lkZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgaWYgKFJlYWN0LkNvbXBvbmVudC5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihpbnN0YW5jZSkpIHtcbiAgICAgICAgICAgICAgY2xpY2tPdXRzaWRlSGFuZGxlciA9IGluc3RhbmNlLmhhbmRsZUNsaWNrT3V0c2lkZS5iaW5kKGluc3RhbmNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNsaWNrT3V0c2lkZUhhbmRsZXIgPSBpbnN0YW5jZS5oYW5kbGVDbGlja091dHNpZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmKHR5cGVvZiBpbnN0YW5jZS5wcm9wcy5oYW5kbGVDbGlja091dHNpZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNsaWNrT3V0c2lkZUhhbmRsZXIgPSBpbnN0YW5jZS5wcm9wcy5oYW5kbGVDbGlja091dHNpZGU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50IGxhY2tzIGEgaGFuZGxlQ2xpY2tPdXRzaWRlKGV2ZW50KSBmdW5jdGlvbiBmb3IgcHJvY2Vzc2luZyBvdXRzaWRlIGNsaWNrIGV2ZW50cy4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgY29tcG9uZW50Tm9kZSA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGluc3RhbmNlKTtcbiAgICAgICAgICBpZiAoY29tcG9uZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdBbnRpcGF0dGVybiB3YXJuaW5nOiB0aGVyZSB3YXMgbm8gRE9NIG5vZGUgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb21wb25lbnQgdGhhdCBpcyBiZWluZyB3cmFwcGVkIGJ5IG91dHNpZGVDbGljay4nKTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihbXG4gICAgICAgICAgICAgICdUaGlzIGlzIHR5cGljYWxseSBjYXVzZWQgYnkgaGF2aW5nIGEgY29tcG9uZW50IHRoYXQgc3RhcnRzIGxpZmUgd2l0aCBhIHJlbmRlciBmdW5jdGlvbiB0aGF0JyxcbiAgICAgICAgICAgICAgJ3JldHVybnMgYG51bGxgIChkdWUgdG8gYSBzdGF0ZSBvciBwcm9wcyB2YWx1ZSksIHNvIHRoYXQgdGhlIGNvbXBvbmVudCBcXCdleGlzdFxcJyBpbiB0aGUgUmVhY3QnLFxuICAgICAgICAgICAgICAnY2hhaW4gb2YgY29tcG9uZW50cywgYnV0IG5vdCBpbiB0aGUgRE9NLlxcblxcbkluc3RlYWQsIHlvdSBuZWVkIHRvIHJlZmFjdG9yIHlvdXIgY29kZSBzbyB0aGF0IHRoZScsXG4gICAgICAgICAgICAgICdkZWNpc2lvbiBvZiB3aGV0aGVyIG9yIG5vdCB0byBzaG93IHlvdXIgY29tcG9uZW50IGlzIGhhbmRsZWQgYnkgdGhlIHBhcmVudCwgaW4gdGhlaXIgcmVuZGVyKCknLFxuICAgICAgICAgICAgICAnZnVuY3Rpb24uXFxuXFxuSW4gY29kZSwgcmF0aGVyIHRoYW46XFxuXFxuICBBe3JlbmRlcigpe3JldHVybiBjaGVjaz8gPC4uLi8+IDogbnVsbDt9XFxuICBCe3JlbmRlcigpezxBIGNoZWNrPS4uLiAvPn1cXG5cXG5tYWtlIHN1cmUgdGhhdCB5b3UnLFxuICAgICAgICAgICAgICAndXNlOlxcblxcbiAgQXtyZW5kZXIoKXtyZXR1cm4gPC4uLi8+fVxcbiAgQntyZW5kZXIoKXtyZXR1cm4gPC4uLj57IGNoZWNrID8gPEEvPiA6IG51bGwgfTwuLi4+fX1cXG5cXG5UaGF0IGlzOicsXG4gICAgICAgICAgICAgICd0aGUgcGFyZW50IGlzIGFsd2F5cyByZXNwb25zaWJsZSBmb3IgZGVjaWRpbmcgd2hldGhlciBvciBub3QgdG8gcmVuZGVyIGFueSBvZiBpdHMgY2hpbGRyZW4uJyxcbiAgICAgICAgICAgICAgJ0l0IGlzIG5vdCB0aGUgY2hpbGRcXCdzIHJlc3BvbnNpYmlsaXR5IHRvIGRlY2lkZSB3aGV0aGVyIGEgcmVuZGVyIGluc3RydWN0aW9uIGZyb20gYWJvdmUgc2hvdWxkJyxcbiAgICAgICAgICAgICAgJ2dldCBpZ25vcmVkIG9yIG5vdCBieSByZXR1cm5pbmcgYG51bGxgLlxcblxcbldoZW4gYW55IGNvbXBvbmVudCBnZXRzIGl0cyByZW5kZXIoKSBmdW5jdGlvbiBjYWxsZWQsJyxcbiAgICAgICAgICAgICAgJ3RoYXQgaXMgdGhlIHNpZ25hbCB0aGF0IGl0IHNob3VsZCBiZSByZW5kZXJpbmcgaXRzIHBhcnQgb2YgdGhlIFVJLiBJdCBtYXkgaW4gdHVybiBkZWNpZGUgbm90IHRvJyxcbiAgICAgICAgICAgICAgJ3JlbmRlciBhbGwgb2YgKml0cyogY2hpbGRyZW4sIGJ1dCBpdCBzaG91bGQgbmV2ZXIgcmV0dXJuIGBudWxsYCBmb3IgaXRzZWxmLiBJdCBpcyBub3QgcmVzcG9uc2libGUnLFxuICAgICAgICAgICAgICAnZm9yIHRoYXQgZGVjaXNpb24uJ1xuICAgICAgICAgICAgXS5qb2luKCcgJykpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBmbiA9IHRoaXMuX19vdXRzaWRlQ2xpY2tIYW5kbGVyID0gZ2VuZXJhdGVPdXRzaWRlQ2hlY2soXG4gICAgICAgICAgICBjb21wb25lbnROb2RlLFxuICAgICAgICAgICAgaW5zdGFuY2UsXG4gICAgICAgICAgICBjbGlja091dHNpZGVIYW5kbGVyLFxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vdXRzaWRlQ2xpY2tJZ25vcmVDbGFzcyB8fCBJR05PUkVfQ0xBU1MsXG4gICAgICAgICAgICB0aGlzLnByb3BzLmV4Y2x1ZGVTY3JvbGxiYXIsIC8vIGZhbGxiYWNrIG5vdCBuZWVkZWQsIHByb3AgYWx3YXlzIGV4aXN0cyBiZWNhdXNlIG9mIGdldERlZmF1bHRQcm9wc1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5wcmV2ZW50RGVmYXVsdCB8fCBmYWxzZSxcbiAgICAgICAgICAgIHRoaXMucHJvcHMuc3RvcFByb3BhZ2F0aW9uIHx8IGZhbHNlXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHZhciBwb3MgPSByZWdpc3RlcmVkQ29tcG9uZW50cy5sZW5ndGg7XG4gICAgICAgICAgcmVnaXN0ZXJlZENvbXBvbmVudHMucHVzaCh0aGlzKTtcbiAgICAgICAgICBoYW5kbGVyc1twb3NdID0gZm47XG5cbiAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIHRydXRoeSBkaXNhYmxlT25DbGlja091dHNpZGUgcHJvcGVydHkgZm9yIHRoaXNcbiAgICAgICAgICAvLyBjb21wb25lbnQsIGRvbid0IGltbWVkaWF0ZWx5IHN0YXJ0IGxpc3RlbmluZyBmb3Igb3V0c2lkZSBldmVudHMuXG4gICAgICAgICAgaWYgKCF0aGlzLnByb3BzLmRpc2FibGVPbkNsaWNrT3V0c2lkZSkge1xuICAgICAgICAgICAgdGhpcy5lbmFibGVPbkNsaWNrT3V0c2lkZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgKiBUcmFjayBmb3IgZGlzYWJsZU9uQ2xpY2tPdXRzaWRlIHByb3BzIGNoYW5nZXMgYW5kIGVuYWJsZS9kaXNhYmxlIGNsaWNrIG91dHNpZGVcbiAgICAgICAgKi9cbiAgICAgICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24obmV4dFByb3BzKSB7XG4gICAgICAgICAgaWYgKHRoaXMucHJvcHMuZGlzYWJsZU9uQ2xpY2tPdXRzaWRlICYmICFuZXh0UHJvcHMuZGlzYWJsZU9uQ2xpY2tPdXRzaWRlKSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZU9uQ2xpY2tPdXRzaWRlKCk7XG4gICAgICAgICAgfSBlbHNlIGlmICghdGhpcy5wcm9wcy5kaXNhYmxlT25DbGlja091dHNpZGUgJiYgbmV4dFByb3BzLmRpc2FibGVPbkNsaWNrT3V0c2lkZSkge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlT25DbGlja091dHNpZGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSB0aGUgZG9jdW1lbnQncyBldmVudCBsaXN0ZW5lcnNcbiAgICAgICAgICovXG4gICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aGlzLmRpc2FibGVPbkNsaWNrT3V0c2lkZSgpO1xuICAgICAgICAgIHRoaXMuX19vdXRzaWRlQ2xpY2tIYW5kbGVyID0gZmFsc2U7XG4gICAgICAgICAgdmFyIHBvcyA9IHJlZ2lzdGVyZWRDb21wb25lbnRzLmluZGV4T2YodGhpcyk7XG4gICAgICAgICAgaWYoIHBvcz4tMSkge1xuICAgICAgICAgICAgLy8gY2xlYW4gdXAgc28gd2UgZG9uJ3QgbGVhayBtZW1vcnlcbiAgICAgICAgICAgIGlmIChoYW5kbGVyc1twb3NdKSB7IGhhbmRsZXJzLnNwbGljZShwb3MsIDEpOyB9XG4gICAgICAgICAgICByZWdpc3RlcmVkQ29tcG9uZW50cy5zcGxpY2UocG9zLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENhbiBiZSBjYWxsZWQgdG8gZXhwbGljaXRseSBlbmFibGUgZXZlbnQgbGlzdGVuaW5nXG4gICAgICAgICAqIGZvciBjbGlja3MgYW5kIHRvdWNoZXMgb3V0c2lkZSBvZiB0aGlzIGVsZW1lbnQuXG4gICAgICAgICAqL1xuICAgICAgICBlbmFibGVPbkNsaWNrT3V0c2lkZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGZuID0gdGhpcy5fX291dHNpZGVDbGlja0hhbmRsZXI7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHZhciBldmVudHMgPSB0aGlzLnByb3BzLmV2ZW50VHlwZXMgfHwgREVGQVVMVF9FVkVOVFM7XG4gICAgICAgICAgICBpZiAoIWV2ZW50cy5mb3JFYWNoKSB7XG4gICAgICAgICAgICAgIGV2ZW50cyA9IFtldmVudHNdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZm4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYW4gYmUgY2FsbGVkIHRvIGV4cGxpY2l0bHkgZGlzYWJsZSBldmVudCBsaXN0ZW5pbmdcbiAgICAgICAgICogZm9yIGNsaWNrcyBhbmQgdG91Y2hlcyBvdXRzaWRlIG9mIHRoaXMgZWxlbWVudC5cbiAgICAgICAgICovXG4gICAgICAgIGRpc2FibGVPbkNsaWNrT3V0c2lkZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGZuID0gdGhpcy5fX291dHNpZGVDbGlja0hhbmRsZXI7XG4gICAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHZhciBldmVudHMgPSB0aGlzLnByb3BzLmV2ZW50VHlwZXMgfHwgREVGQVVMVF9FVkVOVFM7XG4gICAgICAgICAgICBpZiAoIWV2ZW50cy5mb3JFYWNoKSB7XG4gICAgICAgICAgICAgIGV2ZW50cyA9IFtldmVudHNdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZm4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBQYXNzLXRocm91Z2ggcmVuZGVyXG4gICAgICAgICAqL1xuICAgICAgICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBwYXNzZWRQcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgdmFyIHByb3BzID0ge307XG4gICAgICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wcykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIGlmIChrZXkgIT09ICdleGNsdWRlU2Nyb2xsYmFyJykge1xuICAgICAgICAgICAgICBwcm9wc1trZXldID0gcGFzc2VkUHJvcHNba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAoQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KSB7XG4gICAgICAgICAgICBwcm9wcy5yZWYgPSAnaW5zdGFuY2UnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwcm9wcy5kaXNhYmxlT25DbGlja091dHNpZGUgPSB0aGlzLmRpc2FibGVPbkNsaWNrT3V0c2lkZTtcbiAgICAgICAgICBwcm9wcy5lbmFibGVPbkNsaWNrT3V0c2lkZSA9IHRoaXMuZW5hYmxlT25DbGlja091dHNpZGU7XG4gICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBwcm9wcyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICAvLyBBZGQgZGlzcGxheSBuYW1lIGZvciBSZWFjdCBkZXZ0b29sc1xuICAgICAgKGZ1bmN0aW9uIGJpbmRXcmFwcGVkQ29tcG9uZW50TmFtZShjLCB3cmFwcGVyKSB7XG4gICAgICAgIHZhciBjb21wb25lbnROYW1lID0gYy5kaXNwbGF5TmFtZSB8fCBjLm5hbWUgfHwgJ0NvbXBvbmVudCc7XG4gICAgICAgIHdyYXBwZXIuZGlzcGxheU5hbWUgPSAnT25DbGlja091dHNpZGUoJyArIGNvbXBvbmVudE5hbWUgKyAnKSc7XG4gICAgICB9KENvbXBvbmVudCwgd3JhcENvbXBvbmVudFdpdGhPbkNsaWNrT3V0c2lkZUhhbmRsaW5nKSk7XG5cbiAgICAgIHJldHVybiB3cmFwQ29tcG9uZW50V2l0aE9uQ2xpY2tPdXRzaWRlSGFuZGxpbmc7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIGZ1bmN0aW9uIHNldHMgdXAgdGhlIGxpYnJhcnkgaW4gd2F5cyB0aGF0XG4gICAqIHdvcmsgd2l0aCB0aGUgdmFyaW91cyBtb2R1bGRlIGxvYWRpbmcgc29sdXRpb25zXG4gICAqIHVzZWQgaW4gSmF2YVNjcmlwdCBsYW5kIHRvZGF5LlxuICAgKi9cbiAgZnVuY3Rpb24gc2V0dXBCaW5kaW5nKHJvb3QsIGZhY3RvcnkpIHtcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgICBkZWZpbmUoWydyZWFjdCcsJ3JlYWN0LWRvbScsJ2NyZWF0ZS1yZWFjdC1jbGFzcyddLCBmdW5jdGlvbihSZWFjdCwgUmVhY3REb20sIGNyZWF0ZVJlYWN0Q2xhc3MpIHtcbiAgICAgICAgaWYgKCFjcmVhdGVSZWFjdENsYXNzKSBjcmVhdGVSZWFjdENsYXNzID0gUmVhY3QuY3JlYXRlQ2xhc3M7XG4gICAgICAgIHJldHVybiBmYWN0b3J5KHJvb3QsIFJlYWN0LCBSZWFjdERvbSwgY3JlYXRlUmVhY3RDbGFzcyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgICAgLy8gTm9kZS4gTm90ZSB0aGF0IHRoaXMgZG9lcyBub3Qgd29yayB3aXRoIHN0cmljdFxuICAgICAgLy8gQ29tbW9uSlMsIGJ1dCBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzXG4gICAgICAvLyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHNcbiAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyb290LCByZXF1aXJlKCdyZWFjdCcpLCByZXF1aXJlKCdyZWFjdC1kb20nKSwgcmVxdWlyZSgnY3JlYXRlLXJlYWN0LWNsYXNzJykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBCcm93c2VyIGdsb2JhbHMgKHJvb3QgaXMgd2luZG93KVxuICAgICAgdmFyIGNyZWF0ZVJlYWN0Q2xhc3MgPSBSZWFjdC5jcmVhdGVDbGFzcyA/IFJlYWN0LmNyZWF0ZUNsYXNzIDogd2luZG93LmNyZWF0ZVJlYWN0Q2xhc3M7XG4gICAgICByb290Lm9uQ2xpY2tPdXRzaWRlID0gZmFjdG9yeShyb290LCBSZWFjdCwgUmVhY3RET00sIGNyZWF0ZVJlYWN0Q2xhc3MpO1xuICAgIH1cbiAgfVxuXG4gIC8vIE1ha2UgaXQgYWxsIGhhcHBlblxuICBzZXR1cEJpbmRpbmcocm9vdCwgc2V0dXBIT0MpO1xuXG59KHRoaXMpKTtcbiIsImV4cG9ydCBjb25zdCBkZWZhdWx0U3R5bGVzID0ge1xuICBjYWxlbmRhckNvbnRhaW5lcjogJ2NhbGVuZGFyQ29udGFpbmVyJyxcbiAgaGVhZGluZzogJ2hlYWRpbmcnLFxuICBwcmV2OiAncHJldicsXG4gIG5leHQ6ICduZXh0JyxcbiAgdGl0bGU6ICd0aXRsZScsXG4gIGRheVdyYXBwZXI6ICdkYXlXcmFwcGVyJyxcbiAgY3VycmVudE1vbnRoOiAnY3VycmVudE1vbnRoJyxcbiAgZGF5c09mV2VlazogJ2RheXNPZldlZWsnLFxuICBtb250aHNMaXN0OiAnbW9udGhzTGlzdCcsXG4gIHNlbGVjdGVkOiAnc2VsZWN0ZWQnLFxuICBkYXlQaWNrZXJDb250YWluZXI6ICdkYXlQaWNrZXJDb250YWluZXInXG59OyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgVGltZVBpY2tlciBmcm9tICcuL1RpbWVQaWNrZXInO1xuaW1wb3J0IHsgb3V0c2lkZUNsaWNrSWdub3JlQ2xhc3MgfSBmcm9tICcuL0RhdGVQaWNrZXInO1xuaW1wb3J0IHsgcGVyc2lhbk51bWJlciB9IGZyb20gJy4uL3V0aWxzL3BlcnNpYW4nO1xuXG5jb25zdCBkaXNhYmxlZE1pbnV0ZXMgPSAoKSA9PiB7XG4gIHJldHVybiBbLi4uQXJyYXkoNjApXS5tYXAoKHYsIGkpID0+IGkpLmZpbHRlcih2ID0+IHYgJSA1ICE9PSAwKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE15VGltZVBpY2tlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbW9tZW50VmFsdWU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgc2V0TW9tZW50VmFsdWU6IFByb3BUeXBlcy5mdW5jXG4gIH07XG5cbiAgaGFuZGxlQ2hhbmdlKHZhbHVlKSB7XG4gICAgY29uc3QgeyBtb21lbnRWYWx1ZSwgbWluIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCBuZXdWYWx1ZTtcblxuICAgIGlmIChtb21lbnRWYWx1ZSkge1xuICAgICAgbmV3VmFsdWUgPSBtb21lbnRWYWx1ZS5jbG9uZSgpO1xuICAgIH0gZWxzZSBpZiAobWluICYmIG1pbi5pc0FmdGVyKG1vbWVudCgpKSkge1xuICAgICAgbmV3VmFsdWUgPSBtaW4uY2xvbmUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3VmFsdWUgPSBtb21lbnQodmFsdWUpO1xuICAgIH1cblxuICAgIG5ld1ZhbHVlLmhvdXIodmFsdWUuaG91cigpKTtcbiAgICBuZXdWYWx1ZS5taW51dGUodmFsdWUubWludXRlKCkpO1xuXG4gICAgdGhpcy5wcm9wcy5zZXRNb21lbnRWYWx1ZShuZXdWYWx1ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBtb21lbnRWYWx1ZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IHRpbWVMYWJlbD0ndGltZTonO1xuXG4gICAgcmV0dXJuIG1vbWVudFZhbHVlID8gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2B0aW1lLXBpY2tlci1jb250YWluZXJgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RpbWUtbGFiZWwnPnt0aW1lTGFiZWx9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0aW1lLXBpY2tlci1wYW5lbCc+XG4gICAgICAgICAgPFRpbWVQaWNrZXJcbiAgICAgICAgICAgIHNob3dBTVBNXG4gICAgICAgICAgICBzaG93U2Vjb25kPXtmYWxzZX1cbiAgICAgICAgICAgIGFsbG93RW1wdHk9e2ZhbHNlfVxuICAgICAgICAgICAgdmFsdWU9e21vbWVudFZhbHVlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtvdXRzaWRlQ2xpY2tJZ25vcmVDbGFzc31cbiAgICAgICAgICAgIHBvcHVwQ2xhc3NOYW1lPXtvdXRzaWRlQ2xpY2tJZ25vcmVDbGFzc31cbiAgICAgICAgICAgIHBhbmVsQ2xhc3NOYW1lPXtgJHtvdXRzaWRlQ2xpY2tJZ25vcmVDbGFzc30gdGltZS1waWNrZXItcGFuZWxgfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBkaXNhYmxlZE1pbnV0ZXM9e2Rpc2FibGVkTWludXRlc31cbiAgICAgICAgICAgIGZvcm1hdHRlcj17dmFsdWUgPT4gcGVyc2lhbk51bWJlcih2YWx1ZSl9XG4gICAgICAgICAgICBoaWRlRGlzYWJsZWRPcHRpb25zXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgY2xlYXI6ICdib3RoJyB9fT48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICkgOiBudWxsO1xuICB9XG59XG4iLCJpbXBvcnQgVGltZVBpY2tlciBmcm9tICcuL1RpbWVQaWNrZXInO1xuZXhwb3J0IGRlZmF1bHQgVGltZVBpY2tlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgVHJpZ2dlciBmcm9tICdyYy10cmlnZ2VyJztcbmltcG9ydCBQYW5lbCBmcm9tICcuL1BhbmVsJztcbmltcG9ydCBwbGFjZW1lbnRzIGZyb20gJy4vcGxhY2VtZW50cyc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgY3JlYXRlUmVhY3RDbGFzcyBmcm9tIFwiY3JlYXRlLXJlYWN0LWNsYXNzXCI7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7XG59XG5cbmZ1bmN0aW9uIHJlZkZuKGZpZWxkLCBjb21wb25lbnQpIHtcbiAgdGhpc1tmaWVsZF0gPSBjb21wb25lbnQ7XG59XG5cbmNvbnN0IFBpY2tlciA9IGNyZWF0ZVJlYWN0Q2xhc3Moe1xuICBwcm9wVHlwZXM6IHtcbiAgICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xlYXJUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGRlZmF1bHRPcGVuVmFsdWU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGFsbG93RW1wdHk6IFByb3BUeXBlcy5ib29sLFxuICAgIGRlZmF1bHRWYWx1ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkZWZhdWx0T3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgYWxpZ246IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcGxhY2VtZW50OiBQcm9wVHlwZXMuYW55LFxuICAgIHRyYW5zaXRpb25OYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGdldFBvcHVwQ29udGFpbmVyOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2hvd0hvdXI6IFByb3BUeXBlcy5ib29sLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaG93U2Vjb25kOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZEhvdXJzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZE1pbnV0ZXM6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkU2Vjb25kczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgaGlkZURpc2FibGVkT3B0aW9uczogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uT3BlbjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2hvd0FNUE06IFByb3BUeXBlcy5ib29sLFxuICAgIHBhbmVsQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjbGVhclRleHQ6ICdjbGVhcicsXG4gICAgICBwcmVmaXhDbHM6ICdyYy10aW1lLXBpY2tlcicsXG4gICAgICBkZWZhdWx0T3BlbjogZmFsc2UsXG4gICAgICBzdHlsZToge30sXG4gICAgICBjbGFzc05hbWU6ICcnLFxuICAgICAgYWxpZ246IHt9LFxuICAgICAgZGVmYXVsdE9wZW5WYWx1ZTogbW9tZW50KCksXG4gICAgICBhbGxvd0VtcHR5OiB0cnVlLFxuICAgICAgc2hvd0hvdXI6IHRydWUsXG4gICAgICBzaG93U2Vjb25kOiB0cnVlLFxuICAgICAgZGlzYWJsZWRIb3Vyczogbm9vcCxcbiAgICAgIGRpc2FibGVkTWludXRlczogbm9vcCxcbiAgICAgIGRpc2FibGVkU2Vjb25kczogbm9vcCxcbiAgICAgIGhpZGVEaXNhYmxlZE9wdGlvbnM6IGZhbHNlLFxuICAgICAgcGxhY2VtZW50OiAnYm90dG9tTGVmdCcsXG4gICAgICBvbkNoYW5nZTogbm9vcCxcbiAgICAgIG9uT3Blbjogbm9vcCxcbiAgICAgIG9uQ2xvc2U6IG5vb3AsXG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgdGhpcy5zYXZlUGFuZWxSZWYgPSByZWZGbi5iaW5kKHRoaXMsICdwYW5lbEluc3RhbmNlJyk7XG4gICAgY29uc3QgeyBkZWZhdWx0T3BlbiwgZGVmYXVsdFZhbHVlLCBvcGVuID0gZGVmYXVsdE9wZW4sIHZhbHVlID0gZGVmYXVsdFZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiB7XG4gICAgICBvcGVuLFxuICAgICAgdmFsdWUsXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGNvbnN0IHsgdmFsdWUsIG9wZW4gfSA9IG5leHRQcm9wcztcbiAgICBpZiAoJ3ZhbHVlJyBpbiBuZXh0UHJvcHMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2YWx1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAob3BlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbiB9KTtcbiAgICB9XG4gIH0sXG5cbiAgb25QYW5lbENoYW5nZSh2YWx1ZSkge1xuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9LFxuXG4gIG9uUGFuZWxDbGVhcigpIHtcbiAgICB0aGlzLnNldFZhbHVlKG51bGwpO1xuICAgIHRoaXMuc2V0T3BlbihmYWxzZSk7XG4gIH0sXG5cbiAgb25WaXNpYmxlQ2hhbmdlKG9wZW4pIHtcbiAgICB0aGlzLnNldE9wZW4ob3Blbik7XG4gIH0sXG5cbiAgb25Fc2MoKSB7XG4gICAgdGhpcy5zZXRPcGVuKGZhbHNlKTtcbiAgICB0aGlzLnJlZnMucGlja2VyLmZvY3VzKCk7XG4gIH0sXG5cbiAgb25LZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSA0MCkge1xuICAgICAgdGhpcy5zZXRPcGVuKHRydWUpO1xuICAgIH1cbiAgfSxcblxuICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICghKCd2YWx1ZScgaW4gdGhpcy5wcm9wcykpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2YWx1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgfSxcblxuICBnZXRGb3JtYXQoKSB7XG4gICAgbGV0IGZvcm1hdCA9IHRoaXMucHJvcHMuZm9ybWF0O1xuXG4gICAgaWYgKHRoaXMucHJvcHMuZm9ybWF0KSB7XG4gICAgICBmb3JtYXQgPSB0aGlzLnByb3BzLmZvcm1hdFxuICAgIH0gZWxzZSBpZiAoIXRoaXMucHJvcHMuc2hvd1NlY29uZCkge1xuICAgICAgZm9ybWF0ID0gJ0hIOm1tJztcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnByb3BzLnNob3dIb3VyKSB7XG4gICAgICBmb3JtYXQgPSAnbW06c3MnO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtYXQgPSAnSEg6bW06c3MnO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLnNob3dBTVBNKSB7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKCdISCcsICdoaCcpICsgJyBBJztcbiAgICB9XG5cbiAgICByZXR1cm4gZm9ybWF0O1xuICB9LFxuXG4gIGdldFBhbmVsRWxlbWVudCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBwcmVmaXhDbHMsIHBsYWNlaG9sZGVyLCBkaXNhYmxlZEhvdXJzLFxuICAgICAgZGlzYWJsZWRNaW51dGVzLCBkaXNhYmxlZFNlY29uZHMsIGhpZGVEaXNhYmxlZE9wdGlvbnMsXG4gICAgICBhbGxvd0VtcHR5LCBzaG93SG91ciwgc2hvd1NlY29uZCwgc2hvd0FNUE0sIGRlZmF1bHRPcGVuVmFsdWUsIGNsZWFyVGV4dFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8UGFuZWxcbiAgICAgICAgY2xlYXJUZXh0PXtjbGVhclRleHR9XG4gICAgICAgIHByZWZpeENscz17YCR7cHJlZml4Q2xzfS1wYW5lbGB9XG4gICAgICAgIHJlZj17dGhpcy5zYXZlUGFuZWxSZWZ9XG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5vblBhbmVsQ2hhbmdlfVxuICAgICAgICBvbkNsZWFyPXt0aGlzLm9uUGFuZWxDbGVhcn1cbiAgICAgICAgZGVmYXVsdE9wZW5WYWx1ZT17ZGVmYXVsdE9wZW5WYWx1ZX1cbiAgICAgICAgc2hvd0hvdXI9e3Nob3dIb3VyfVxuICAgICAgICBvbkVzYz17dGhpcy5vbkVzY31cbiAgICAgICAgc2hvd1NlY29uZD17c2hvd1NlY29uZH1cbiAgICAgICAgc2hvd0FNUE09e3Nob3dBTVBNfVxuICAgICAgICBhbGxvd0VtcHR5PXthbGxvd0VtcHR5fVxuICAgICAgICBmb3JtYXQ9e3RoaXMuZ2V0Rm9ybWF0KCl9XG4gICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgZGlzYWJsZWRIb3Vycz17ZGlzYWJsZWRIb3Vyc31cbiAgICAgICAgZGlzYWJsZWRNaW51dGVzPXtkaXNhYmxlZE1pbnV0ZXN9XG4gICAgICAgIGRpc2FibGVkU2Vjb25kcz17ZGlzYWJsZWRTZWNvbmRzfVxuICAgICAgICBoaWRlRGlzYWJsZWRPcHRpb25zPXtoaWRlRGlzYWJsZWRPcHRpb25zfVxuICAgICAgLz5cbiAgICApO1xuICB9LFxuXG4gIHNldE9wZW4ob3BlbiwgY2FsbGJhY2spIHtcbiAgICBjb25zdCB7IG9uT3Blbiwgb25DbG9zZSB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAodGhpcy5zdGF0ZS5vcGVuICE9PSBvcGVuKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgb3BlbixcbiAgICAgIH0sIGNhbGxiYWNrKTtcbiAgICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgICBvcGVuLFxuICAgICAgfTtcbiAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgIG9uT3BlbihldmVudCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbkNsb3NlKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhbmVsQ2xhc3NOYW1lLHByZWZpeENscywgcGxhY2Vob2xkZXIsIHBsYWNlbWVudCwgYWxpZ24sXG4gICAgICBkaXNhYmxlZCwgdHJhbnNpdGlvbk5hbWUsIHN0eWxlLCBjbGFzc05hbWUsIHNob3dIb3VyLFxuICAgICAgc2hvd1NlY29uZCwgZ2V0UG9wdXBDb250YWluZXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBvcGVuLCB2YWx1ZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgcG9wdXBDbGFzc05hbWU7XG4gICAgaWYgKCFzaG93SG91ciB8fCAhc2hvd1NlY29uZCkge1xuICAgICAgcG9wdXBDbGFzc05hbWUgPSBgJHtwcmVmaXhDbHN9LXBhbmVsLW5hcnJvd2A7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8VHJpZ2dlclxuICAgICAgICBwcmVmaXhDbHM9e2Ake3ByZWZpeENsc30tcGFuZWwgICR7cGFuZWxDbGFzc05hbWV9YH1cbiAgICAgICAgcG9wdXBDbGFzc05hbWU9e3BvcHVwQ2xhc3NOYW1lfVxuICAgICAgICBwb3B1cD17dGhpcy5nZXRQYW5lbEVsZW1lbnQoKX1cbiAgICAgICAgcG9wdXBBbGlnbj17YWxpZ259XG4gICAgICAgIGJ1aWx0aW5QbGFjZW1lbnRzPXtwbGFjZW1lbnRzfVxuICAgICAgICBwb3B1cFBsYWNlbWVudD17cGxhY2VtZW50fVxuICAgICAgICBhY3Rpb249e2Rpc2FibGVkID8gW10gOiBbJ2NsaWNrJ119XG4gICAgICAgIGRlc3Ryb3lQb3B1cE9uSGlkZVxuICAgICAgICBnZXRQb3B1cENvbnRhaW5lcj17Z2V0UG9wdXBDb250YWluZXJ9XG4gICAgICAgIHBvcHVwVHJhbnNpdGlvbk5hbWU9e3RyYW5zaXRpb25OYW1lfVxuICAgICAgICBwb3B1cFZpc2libGU9e29wZW59XG4gICAgICAgIG9uUG9wdXBWaXNpYmxlQ2hhbmdlPXt0aGlzLm9uVmlzaWJsZUNoYW5nZX1cbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtwcmVmaXhDbHN9ICR7Y2xhc3NOYW1lfWB9IHN0eWxlPXtzdHlsZX0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3ByZWZpeENsc30taW5wdXRgfVxuICAgICAgICAgICAgcmVmPVwicGlja2VyXCIgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICByZWFkT25seVxuICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bn1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH0gdmFsdWU9e3ZhbHVlICYmIHZhbHVlLmZvcm1hdCh0aGlzLmdldEZvcm1hdCgpKSB8fCAnJ31cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17YCR7cHJlZml4Q2xzfS1pY29uYH0vPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L1RyaWdnZXI+XG4gICAgKTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBQaWNrZXI7XG4iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBmaW5kRE9NTm9kZSB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgY3JlYXRlUmVhY3RDbGFzcyBmcm9tICdjcmVhdGUtcmVhY3QtY2xhc3MnO1xuaW1wb3J0IGNvbnRhaW5zIGZyb20gJ3JjLXV0aWwvZXMvRG9tL2NvbnRhaW5zJztcbmltcG9ydCBhZGRFdmVudExpc3RlbmVyIGZyb20gJ3JjLXV0aWwvbGliL0RvbS9hZGRFdmVudExpc3RlbmVyJztcbmltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwJztcbmltcG9ydCB7IGdldEFsaWduRnJvbVBsYWNlbWVudCwgZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ24gYXMgX2dldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgZ2V0Q29udGFpbmVyUmVuZGVyTWl4aW4gZnJvbSAncmMtdXRpbC9saWIvZ2V0Q29udGFpbmVyUmVuZGVyTWl4aW4nO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxuZnVuY3Rpb24gcmV0dXJuRW1wdHlTdHJpbmcoKSB7XG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gcmV0dXJuRG9jdW1lbnQoKSB7XG4gIHJldHVybiB3aW5kb3cuZG9jdW1lbnQ7XG59XG5cbnZhciBpc01vYmlsZSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmICEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKEFuZHJvaWR8aVBob25lfGlQYWR8aVBvZHxpT1N8VUNXRUIpL2kpO1xuXG52YXIgQUxMX0hBTkRMRVJTID0gWydvbkNsaWNrJywgJ29uTW91c2VEb3duJywgJ29uVG91Y2hTdGFydCcsICdvbk1vdXNlRW50ZXInLCAnb25Nb3VzZUxlYXZlJywgJ29uRm9jdXMnLCAnb25CbHVyJ107XG5cbnZhciBUcmlnZ2VyID0gY3JlYXRlUmVhY3RDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnVHJpZ2dlcicsXG4gIHByb3BUeXBlczoge1xuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICAgIGFjdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyldKSxcbiAgICBzaG93QWN0aW9uOiBQcm9wVHlwZXMuYW55LFxuICAgIGhpZGVBY3Rpb246IFByb3BUeXBlcy5hbnksXG4gICAgZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ246IFByb3BUeXBlcy5hbnksXG4gICAgb25Qb3B1cFZpc2libGVDaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIGFmdGVyUG9wdXBWaXNpYmxlQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwb3B1cDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm5vZGUsIFByb3BUeXBlcy5mdW5jXSkuaXNSZXF1aXJlZCxcbiAgICBwb3B1cFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwb3B1cENsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwb3B1cFBsYWNlbWVudDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBidWlsdGluUGxhY2VtZW50czogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBwb3B1cFRyYW5zaXRpb25OYW1lOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgcG9wdXBBbmltYXRpb246IFByb3BUeXBlcy5hbnksXG4gICAgbW91c2VFbnRlckRlbGF5OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG1vdXNlTGVhdmVEZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgICB6SW5kZXg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZm9jdXNEZWxheTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBibHVyRGVsYXk6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIGdldERvY3VtZW50OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkZXN0cm95UG9wdXBPbkhpZGU6IFByb3BUeXBlcy5ib29sLFxuICAgIG1hc2s6IFByb3BUeXBlcy5ib29sLFxuICAgIG1hc2tDbG9zYWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25Qb3B1cEFsaWduOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBwb3B1cEFsaWduOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHBvcHVwVmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgbWFza1RyYW5zaXRpb25OYW1lOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSksXG4gICAgbWFza0FuaW1hdGlvbjogUHJvcFR5cGVzLnN0cmluZ1xuICB9LFxuXG4gIG1peGluczogW2dldENvbnRhaW5lclJlbmRlck1peGluKHtcbiAgICBhdXRvTW91bnQ6IGZhbHNlLFxuXG4gICAgaXNWaXNpYmxlOiBmdW5jdGlvbiBpc1Zpc2libGUoaW5zdGFuY2UpIHtcbiAgICAgIHJldHVybiBpbnN0YW5jZS5zdGF0ZS5wb3B1cFZpc2libGU7XG4gICAgfSxcbiAgICBnZXRDb250YWluZXI6IGZ1bmN0aW9uIGdldENvbnRhaW5lcihpbnN0YW5jZSkge1xuICAgICAgdmFyIHByb3BzID0gaW5zdGFuY2UucHJvcHM7XG5cbiAgICAgIHZhciBwb3B1cENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgcG9wdXBDb250YWluZXIuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgcG9wdXBDb250YWluZXIuc3R5bGUudG9wID0gJzAnO1xuICAgICAgcG9wdXBDb250YWluZXIuc3R5bGUubGVmdCA9ICcwJztcbiAgICAgIHBvcHVwQ29udGFpbmVyLnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgICAgdmFyIG1vdW50Tm9kZSA9IHByb3BzLmdldFBvcHVwQ29udGFpbmVyID8gcHJvcHMuZ2V0UG9wdXBDb250YWluZXIoZmluZERPTU5vZGUoaW5zdGFuY2UpKSA6IHByb3BzLmdldERvY3VtZW50KCkuYm9keTtcbiAgICAgIG1vdW50Tm9kZS5hcHBlbmRDaGlsZChwb3B1cENvbnRhaW5lcik7XG4gICAgICByZXR1cm4gcG9wdXBDb250YWluZXI7XG4gICAgfVxuICB9KV0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByZWZpeENsczogJ3JjLXRyaWdnZXItcG9wdXAnLFxuICAgICAgZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ246IHJldHVybkVtcHR5U3RyaW5nLFxuICAgICAgZ2V0RG9jdW1lbnQ6IHJldHVybkRvY3VtZW50LFxuICAgICAgb25Qb3B1cFZpc2libGVDaGFuZ2U6IG5vb3AsXG4gICAgICBhZnRlclBvcHVwVmlzaWJsZUNoYW5nZTogbm9vcCxcbiAgICAgIG9uUG9wdXBBbGlnbjogbm9vcCxcbiAgICAgIHBvcHVwQ2xhc3NOYW1lOiAnJyxcbiAgICAgIG1vdXNlRW50ZXJEZWxheTogMCxcbiAgICAgIG1vdXNlTGVhdmVEZWxheTogMC4xLFxuICAgICAgZm9jdXNEZWxheTogMCxcbiAgICAgIGJsdXJEZWxheTogMC4xNSxcbiAgICAgIHBvcHVwU3R5bGU6IHt9LFxuICAgICAgZGVzdHJveVBvcHVwT25IaWRlOiBmYWxzZSxcbiAgICAgIHBvcHVwQWxpZ246IHt9LFxuICAgICAgZGVmYXVsdFBvcHVwVmlzaWJsZTogZmFsc2UsXG4gICAgICBtYXNrOiBmYWxzZSxcbiAgICAgIG1hc2tDbG9zYWJsZTogdHJ1ZSxcbiAgICAgIGFjdGlvbjogW10sXG4gICAgICBzaG93QWN0aW9uOiBbXSxcbiAgICAgIGhpZGVBY3Rpb246IFtdXG4gICAgfTtcbiAgfSxcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgcG9wdXBWaXNpYmxlID0gdm9pZCAwO1xuICAgIGlmICgncG9wdXBWaXNpYmxlJyBpbiBwcm9wcykge1xuICAgICAgcG9wdXBWaXNpYmxlID0gISFwcm9wcy5wb3B1cFZpc2libGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvcHVwVmlzaWJsZSA9ICEhcHJvcHMuZGVmYXVsdFBvcHVwVmlzaWJsZTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHBvcHVwVmlzaWJsZTogcG9wdXBWaXNpYmxlXG4gICAgfTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbE1vdW50OiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIEFMTF9IQU5ETEVSUy5mb3JFYWNoKGZ1bmN0aW9uIChoKSB7XG4gICAgICBfdGhpc1snZmlyZScgKyBoXSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIF90aGlzLmZpcmVFdmVudHMoaCwgZSk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9LFxuICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5jb21wb25lbnREaWRVcGRhdGUoe30sIHtcbiAgICAgIHBvcHVwVmlzaWJsZTogdGhpcy5zdGF0ZS5wb3B1cFZpc2libGVcbiAgICB9KTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wczogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhfcmVmKSB7XG4gICAgdmFyIHBvcHVwVmlzaWJsZSA9IF9yZWYucG9wdXBWaXNpYmxlO1xuXG4gICAgaWYgKHBvcHVwVmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgcG9wdXBWaXNpYmxlOiBwb3B1cFZpc2libGVcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgY29tcG9uZW50RGlkVXBkYXRlOiBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUoXywgcHJldlN0YXRlKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMucmVuZGVyQ29tcG9uZW50KG51bGwsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChwcmV2U3RhdGUucG9wdXBWaXNpYmxlICE9PSBzdGF0ZS5wb3B1cFZpc2libGUpIHtcbiAgICAgICAgcHJvcHMuYWZ0ZXJQb3B1cFZpc2libGVDaGFuZ2Uoc3RhdGUucG9wdXBWaXNpYmxlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUucG9wdXBWaXNpYmxlKSB7XG4gICAgICB2YXIgY3VycmVudERvY3VtZW50ID0gdm9pZCAwO1xuICAgICAgaWYgKCF0aGlzLmNsaWNrT3V0c2lkZUhhbmRsZXIgJiYgdGhpcy5pc0NsaWNrVG9IaWRlKCkpIHtcbiAgICAgICAgY3VycmVudERvY3VtZW50ID0gcHJvcHMuZ2V0RG9jdW1lbnQoKTtcbiAgICAgICAgdGhpcy5jbGlja091dHNpZGVIYW5kbGVyID0gYWRkRXZlbnRMaXN0ZW5lcihjdXJyZW50RG9jdW1lbnQsICdtb3VzZWRvd24nLCB0aGlzLm9uRG9jdW1lbnRDbGljayk7XG4gICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMudG91Y2hPdXRzaWRlSGFuZGxlciAmJiBpc01vYmlsZSkge1xuICAgICAgICBjdXJyZW50RG9jdW1lbnQgPSBjdXJyZW50RG9jdW1lbnQgfHwgcHJvcHMuZ2V0RG9jdW1lbnQoKTtcbiAgICAgICAgdGhpcy50b3VjaE91dHNpZGVIYW5kbGVyID0gYWRkRXZlbnRMaXN0ZW5lcihjdXJyZW50RG9jdW1lbnQsICdjbGljaycsIHRoaXMub25Eb2N1bWVudENsaWNrKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmNsZWFyT3V0c2lkZUhhbmRsZXIoKTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMuY2xlYXJEZWxheVRpbWVyKCk7XG4gICAgdGhpcy5jbGVhck91dHNpZGVIYW5kbGVyKCk7XG4gIH0sXG4gIG9uTW91c2VFbnRlcjogZnVuY3Rpb24gb25Nb3VzZUVudGVyKGUpIHtcbiAgICB0aGlzLmZpcmVFdmVudHMoJ29uTW91c2VFbnRlcicsIGUpO1xuICAgIHRoaXMuZGVsYXlTZXRQb3B1cFZpc2libGUodHJ1ZSwgdGhpcy5wcm9wcy5tb3VzZUVudGVyRGVsYXkpO1xuICB9LFxuICBvbk1vdXNlTGVhdmU6IGZ1bmN0aW9uIG9uTW91c2VMZWF2ZShlKSB7XG4gICAgdGhpcy5maXJlRXZlbnRzKCdvbk1vdXNlTGVhdmUnLCBlKTtcbiAgICB0aGlzLmRlbGF5U2V0UG9wdXBWaXNpYmxlKGZhbHNlLCB0aGlzLnByb3BzLm1vdXNlTGVhdmVEZWxheSk7XG4gIH0sXG4gIG9uUG9wdXBNb3VzZUVudGVyOiBmdW5jdGlvbiBvblBvcHVwTW91c2VFbnRlcigpIHtcbiAgICB0aGlzLmNsZWFyRGVsYXlUaW1lcigpO1xuICB9LFxuICBvblBvcHVwTW91c2VMZWF2ZTogZnVuY3Rpb24gb25Qb3B1cE1vdXNlTGVhdmUoZSkge1xuICAgICAgICAgICAgaWYgKGUucmVsYXRlZFRhcmdldCAmJiAhZS5yZWxhdGVkVGFyZ2V0LnNldFRpbWVvdXQgJiYgdGhpcy5fY29tcG9uZW50ICYmIHRoaXMuX2NvbXBvbmVudC5nZXRQb3B1cERvbU5vZGUgJiYgY29udGFpbnModGhpcy5fY29tcG9uZW50LmdldFBvcHVwRG9tTm9kZSgpLCBlLnJlbGF0ZWRUYXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGVsYXlTZXRQb3B1cFZpc2libGUoZmFsc2UsIHRoaXMucHJvcHMubW91c2VMZWF2ZURlbGF5KTtcbiAgfSxcbiAgb25Gb2N1czogZnVuY3Rpb24gb25Gb2N1cyhlKSB7XG4gICAgdGhpcy5maXJlRXZlbnRzKCdvbkZvY3VzJywgZSk7XG4gICAgICAgIHRoaXMuY2xlYXJEZWxheVRpbWVyKCk7XG4gICAgaWYgKHRoaXMuaXNGb2N1c1RvU2hvdygpKSB7XG4gICAgICB0aGlzLmZvY3VzVGltZSA9IERhdGUubm93KCk7XG4gICAgICB0aGlzLmRlbGF5U2V0UG9wdXBWaXNpYmxlKHRydWUsIHRoaXMucHJvcHMuZm9jdXNEZWxheSk7XG4gICAgfVxuICB9LFxuICBvbk1vdXNlRG93bjogZnVuY3Rpb24gb25Nb3VzZURvd24oZSkge1xuICAgIHRoaXMuZmlyZUV2ZW50cygnb25Nb3VzZURvd24nLCBlKTtcbiAgICB0aGlzLnByZUNsaWNrVGltZSA9IERhdGUubm93KCk7XG4gIH0sXG4gIG9uVG91Y2hTdGFydDogZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KGUpIHtcbiAgICB0aGlzLmZpcmVFdmVudHMoJ29uVG91Y2hTdGFydCcsIGUpO1xuICAgIHRoaXMucHJlVG91Y2hUaW1lID0gRGF0ZS5ub3coKTtcbiAgfSxcbiAgb25CbHVyOiBmdW5jdGlvbiBvbkJsdXIoZSkge1xuICAgIHRoaXMuZmlyZUV2ZW50cygnb25CbHVyJywgZSk7XG4gICAgdGhpcy5jbGVhckRlbGF5VGltZXIoKTtcbiAgICBpZiAodGhpcy5pc0JsdXJUb0hpZGUoKSkge1xuICAgICAgdGhpcy5kZWxheVNldFBvcHVwVmlzaWJsZShmYWxzZSwgdGhpcy5wcm9wcy5ibHVyRGVsYXkpO1xuICAgIH1cbiAgfSxcbiAgb25DbGljazogZnVuY3Rpb24gb25DbGljayhldmVudCkge1xuICAgIHRoaXMuZmlyZUV2ZW50cygnb25DbGljaycsIGV2ZW50KTtcbiAgICAgICAgaWYgKHRoaXMuZm9jdXNUaW1lKSB7XG4gICAgICB2YXIgcHJlVGltZSA9IHZvaWQgMDtcbiAgICAgIGlmICh0aGlzLnByZUNsaWNrVGltZSAmJiB0aGlzLnByZVRvdWNoVGltZSkge1xuICAgICAgICBwcmVUaW1lID0gTWF0aC5taW4odGhpcy5wcmVDbGlja1RpbWUsIHRoaXMucHJlVG91Y2hUaW1lKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmVDbGlja1RpbWUpIHtcbiAgICAgICAgcHJlVGltZSA9IHRoaXMucHJlQ2xpY2tUaW1lO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnByZVRvdWNoVGltZSkge1xuICAgICAgICBwcmVUaW1lID0gdGhpcy5wcmVUb3VjaFRpbWU7XG4gICAgICB9XG4gICAgICBpZiAoTWF0aC5hYnMocHJlVGltZSAtIHRoaXMuZm9jdXNUaW1lKSA8IDIwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZm9jdXNUaW1lID0gMDtcbiAgICB9XG4gICAgdGhpcy5wcmVDbGlja1RpbWUgPSAwO1xuICAgIHRoaXMucHJlVG91Y2hUaW1lID0gMDtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhciBuZXh0VmlzaWJsZSA9ICF0aGlzLnN0YXRlLnBvcHVwVmlzaWJsZTtcbiAgICBpZiAodGhpcy5pc0NsaWNrVG9IaWRlKCkgJiYgIW5leHRWaXNpYmxlIHx8IG5leHRWaXNpYmxlICYmIHRoaXMuaXNDbGlja1RvU2hvdygpKSB7XG4gICAgICB0aGlzLnNldFBvcHVwVmlzaWJsZSghdGhpcy5zdGF0ZS5wb3B1cFZpc2libGUpO1xuICAgIH1cbiAgfSxcbiAgb25Eb2N1bWVudENsaWNrOiBmdW5jdGlvbiBvbkRvY3VtZW50Q2xpY2soZXZlbnQpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXNrICYmICF0aGlzLnByb3BzLm1hc2tDbG9zYWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIHZhciByb290ID0gZmluZERPTU5vZGUodGhpcyk7XG4gICAgdmFyIHBvcHVwTm9kZSA9IHRoaXMuZ2V0UG9wdXBEb21Ob2RlKCk7XG4gICAgaWYgKCFjb250YWlucyhyb290LCB0YXJnZXQpICYmICFjb250YWlucyhwb3B1cE5vZGUsIHRhcmdldCkpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH0sXG4gIGdldFBvcHVwRG9tTm9kZTogZnVuY3Rpb24gZ2V0UG9wdXBEb21Ob2RlKCkge1xuICAgICAgICBpZiAodGhpcy5fY29tcG9uZW50ICYmIHRoaXMuX2NvbXBvbmVudC5nZXRQb3B1cERvbU5vZGUpIHtcbiAgICAgIHJldHVybiB0aGlzLl9jb21wb25lbnQuZ2V0UG9wdXBEb21Ob2RlKCk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9LFxuICBnZXRSb290RG9tTm9kZTogZnVuY3Rpb24gZ2V0Um9vdERvbU5vZGUoKSB7XG4gICAgcmV0dXJuIGZpbmRET01Ob2RlKHRoaXMpO1xuICB9LFxuICBnZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbjogZnVuY3Rpb24gZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ24oYWxpZ24pIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gW107XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICB2YXIgcG9wdXBQbGFjZW1lbnQgPSBwcm9wcy5wb3B1cFBsYWNlbWVudCxcbiAgICAgICAgYnVpbHRpblBsYWNlbWVudHMgPSBwcm9wcy5idWlsdGluUGxhY2VtZW50cyxcbiAgICAgICAgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzO1xuXG4gICAgaWYgKHBvcHVwUGxhY2VtZW50ICYmIGJ1aWx0aW5QbGFjZW1lbnRzKSB7XG4gICAgICBjbGFzc05hbWUucHVzaChfZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ24oYnVpbHRpblBsYWNlbWVudHMsIHByZWZpeENscywgYWxpZ24pKTtcbiAgICB9XG4gICAgaWYgKHByb3BzLmdldFBvcHVwQ2xhc3NOYW1lRnJvbUFsaWduKSB7XG4gICAgICBjbGFzc05hbWUucHVzaChwcm9wcy5nZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbihhbGlnbikpO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NOYW1lLmpvaW4oJyAnKTtcbiAgfSxcbiAgZ2V0UG9wdXBBbGlnbjogZnVuY3Rpb24gZ2V0UG9wdXBBbGlnbigpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgIHZhciBwb3B1cFBsYWNlbWVudCA9IHByb3BzLnBvcHVwUGxhY2VtZW50LFxuICAgICAgICBwb3B1cEFsaWduID0gcHJvcHMucG9wdXBBbGlnbixcbiAgICAgICAgYnVpbHRpblBsYWNlbWVudHMgPSBwcm9wcy5idWlsdGluUGxhY2VtZW50cztcblxuICAgIGlmIChwb3B1cFBsYWNlbWVudCAmJiBidWlsdGluUGxhY2VtZW50cykge1xuICAgICAgcmV0dXJuIGdldEFsaWduRnJvbVBsYWNlbWVudChidWlsdGluUGxhY2VtZW50cywgcG9wdXBQbGFjZW1lbnQsIHBvcHVwQWxpZ24pO1xuICAgIH1cbiAgICByZXR1cm4gcG9wdXBBbGlnbjtcbiAgfSxcbiAgZ2V0Q29tcG9uZW50OiBmdW5jdGlvbiBnZXRDb21wb25lbnQoKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgc3RhdGUgPSB0aGlzLnN0YXRlO1xuXG4gICAgdmFyIG1vdXNlUHJvcHMgPSB7fTtcbiAgICBpZiAodGhpcy5pc01vdXNlRW50ZXJUb1Nob3coKSkge1xuICAgICAgbW91c2VQcm9wcy5vbk1vdXNlRW50ZXIgPSB0aGlzLm9uUG9wdXBNb3VzZUVudGVyO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc01vdXNlTGVhdmVUb0hpZGUoKSkge1xuICAgICAgbW91c2VQcm9wcy5vbk1vdXNlTGVhdmUgPSB0aGlzLm9uUG9wdXBNb3VzZUxlYXZlO1xuICAgIH1cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgIFBvcHVwLFxuICAgICAgX2V4dGVuZHMoe1xuICAgICAgICBwcmVmaXhDbHM6IHByb3BzLnByZWZpeENscyxcbiAgICAgICAgZGVzdHJveVBvcHVwT25IaWRlOiBwcm9wcy5kZXN0cm95UG9wdXBPbkhpZGUsXG4gICAgICAgIHZpc2libGU6IHN0YXRlLnBvcHVwVmlzaWJsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBwcm9wcy5wb3B1cENsYXNzTmFtZSxcbiAgICAgICAgYWN0aW9uOiBwcm9wcy5hY3Rpb24sXG4gICAgICAgIGFsaWduOiB0aGlzLmdldFBvcHVwQWxpZ24oKSxcbiAgICAgICAgb25BbGlnbjogcHJvcHMub25Qb3B1cEFsaWduLFxuICAgICAgICBhbmltYXRpb246IHByb3BzLnBvcHVwQW5pbWF0aW9uLFxuICAgICAgICBnZXRDbGFzc05hbWVGcm9tQWxpZ246IHRoaXMuZ2V0UG9wdXBDbGFzc05hbWVGcm9tQWxpZ25cbiAgICAgIH0sIG1vdXNlUHJvcHMsIHtcbiAgICAgICAgZ2V0Um9vdERvbU5vZGU6IHRoaXMuZ2V0Um9vdERvbU5vZGUsXG4gICAgICAgIHN0eWxlOiBwcm9wcy5wb3B1cFN0eWxlLFxuICAgICAgICBtYXNrOiBwcm9wcy5tYXNrLFxuICAgICAgICB6SW5kZXg6IHByb3BzLnpJbmRleCxcbiAgICAgICAgdHJhbnNpdGlvbk5hbWU6IHByb3BzLnBvcHVwVHJhbnNpdGlvbk5hbWUsXG4gICAgICAgIG1hc2tBbmltYXRpb246IHByb3BzLm1hc2tBbmltYXRpb24sXG4gICAgICAgIG1hc2tUcmFuc2l0aW9uTmFtZTogcHJvcHMubWFza1RyYW5zaXRpb25OYW1lXG4gICAgICB9KSxcbiAgICAgIHR5cGVvZiBwcm9wcy5wb3B1cCA9PT0gJ2Z1bmN0aW9uJyA/IHByb3BzLnBvcHVwKCkgOiBwcm9wcy5wb3B1cFxuICAgICk7XG4gIH0sXG4gIHNldFBvcHVwVmlzaWJsZTogZnVuY3Rpb24gc2V0UG9wdXBWaXNpYmxlKHBvcHVwVmlzaWJsZSkge1xuICAgIHRoaXMuY2xlYXJEZWxheVRpbWVyKCk7XG4gICAgaWYgKHRoaXMuc3RhdGUucG9wdXBWaXNpYmxlICE9PSBwb3B1cFZpc2libGUpIHtcbiAgICAgIGlmICghKCdwb3B1cFZpc2libGUnIGluIHRoaXMucHJvcHMpKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIHBvcHVwVmlzaWJsZTogcG9wdXBWaXNpYmxlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5wcm9wcy5vblBvcHVwVmlzaWJsZUNoYW5nZShwb3B1cFZpc2libGUpO1xuICAgIH1cbiAgfSxcbiAgZGVsYXlTZXRQb3B1cFZpc2libGU6IGZ1bmN0aW9uIGRlbGF5U2V0UG9wdXBWaXNpYmxlKHZpc2libGUsIGRlbGF5Uykge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIGRlbGF5ID0gZGVsYXlTICogMTAwMDtcbiAgICB0aGlzLmNsZWFyRGVsYXlUaW1lcigpO1xuICAgIGlmIChkZWxheSkge1xuICAgICAgdGhpcy5kZWxheVRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMi5zZXRQb3B1cFZpc2libGUodmlzaWJsZSk7XG4gICAgICAgIF90aGlzMi5jbGVhckRlbGF5VGltZXIoKTtcbiAgICAgIH0sIGRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRQb3B1cFZpc2libGUodmlzaWJsZSk7XG4gICAgfVxuICB9LFxuICBjbGVhckRlbGF5VGltZXI6IGZ1bmN0aW9uIGNsZWFyRGVsYXlUaW1lcigpIHtcbiAgICBpZiAodGhpcy5kZWxheVRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheVRpbWVyKTtcbiAgICAgIHRoaXMuZGVsYXlUaW1lciA9IG51bGw7XG4gICAgfVxuICB9LFxuICBjbGVhck91dHNpZGVIYW5kbGVyOiBmdW5jdGlvbiBjbGVhck91dHNpZGVIYW5kbGVyKCkge1xuICAgIGlmICh0aGlzLmNsaWNrT3V0c2lkZUhhbmRsZXIpIHtcbiAgICAgIHRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlci5yZW1vdmUoKTtcbiAgICAgIHRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlciA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudG91Y2hPdXRzaWRlSGFuZGxlcikge1xuICAgICAgdGhpcy50b3VjaE91dHNpZGVIYW5kbGVyLnJlbW92ZSgpO1xuICAgICAgdGhpcy50b3VjaE91dHNpZGVIYW5kbGVyID0gbnVsbDtcbiAgICB9XG4gIH0sXG4gIGNyZWF0ZVR3b0NoYWluczogZnVuY3Rpb24gY3JlYXRlVHdvQ2hhaW5zKGV2ZW50KSB7XG4gICAgdmFyIGNoaWxkUHJvcyA9IHRoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHM7XG4gICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICBpZiAoY2hpbGRQcm9zW2V2ZW50XSAmJiBwcm9wc1tldmVudF0pIHtcbiAgICAgIHJldHVybiB0aGlzWydmaXJlJyArIGV2ZW50XTtcbiAgICB9XG4gICAgcmV0dXJuIGNoaWxkUHJvc1tldmVudF0gfHwgcHJvcHNbZXZlbnRdO1xuICB9LFxuICBpc0NsaWNrVG9TaG93OiBmdW5jdGlvbiBpc0NsaWNrVG9TaG93KCkge1xuICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICBhY3Rpb24gPSBfcHJvcHMuYWN0aW9uLFxuICAgICAgICBzaG93QWN0aW9uID0gX3Byb3BzLnNob3dBY3Rpb247XG5cbiAgICByZXR1cm4gYWN0aW9uLmluZGV4T2YoJ2NsaWNrJykgIT09IC0xIHx8IHNob3dBY3Rpb24uaW5kZXhPZignY2xpY2snKSAhPT0gLTE7XG4gIH0sXG4gIGlzQ2xpY2tUb0hpZGU6IGZ1bmN0aW9uIGlzQ2xpY2tUb0hpZGUoKSB7XG4gICAgdmFyIF9wcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICBhY3Rpb24gPSBfcHJvcHMyLmFjdGlvbixcbiAgICAgICAgaGlkZUFjdGlvbiA9IF9wcm9wczIuaGlkZUFjdGlvbjtcblxuICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignY2xpY2snKSAhPT0gLTEgfHwgaGlkZUFjdGlvbi5pbmRleE9mKCdjbGljaycpICE9PSAtMTtcbiAgfSxcbiAgaXNNb3VzZUVudGVyVG9TaG93OiBmdW5jdGlvbiBpc01vdXNlRW50ZXJUb1Nob3coKSB7XG4gICAgdmFyIF9wcm9wczMgPSB0aGlzLnByb3BzLFxuICAgICAgICBhY3Rpb24gPSBfcHJvcHMzLmFjdGlvbixcbiAgICAgICAgc2hvd0FjdGlvbiA9IF9wcm9wczMuc2hvd0FjdGlvbjtcblxuICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignaG92ZXInKSAhPT0gLTEgfHwgc2hvd0FjdGlvbi5pbmRleE9mKCdtb3VzZUVudGVyJykgIT09IC0xO1xuICB9LFxuICBpc01vdXNlTGVhdmVUb0hpZGU6IGZ1bmN0aW9uIGlzTW91c2VMZWF2ZVRvSGlkZSgpIHtcbiAgICB2YXIgX3Byb3BzNCA9IHRoaXMucHJvcHMsXG4gICAgICAgIGFjdGlvbiA9IF9wcm9wczQuYWN0aW9uLFxuICAgICAgICBoaWRlQWN0aW9uID0gX3Byb3BzNC5oaWRlQWN0aW9uO1xuXG4gICAgcmV0dXJuIGFjdGlvbi5pbmRleE9mKCdob3ZlcicpICE9PSAtMSB8fCBoaWRlQWN0aW9uLmluZGV4T2YoJ21vdXNlTGVhdmUnKSAhPT0gLTE7XG4gIH0sXG4gIGlzRm9jdXNUb1Nob3c6IGZ1bmN0aW9uIGlzRm9jdXNUb1Nob3coKSB7XG4gICAgdmFyIF9wcm9wczUgPSB0aGlzLnByb3BzLFxuICAgICAgICBhY3Rpb24gPSBfcHJvcHM1LmFjdGlvbixcbiAgICAgICAgc2hvd0FjdGlvbiA9IF9wcm9wczUuc2hvd0FjdGlvbjtcblxuICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignZm9jdXMnKSAhPT0gLTEgfHwgc2hvd0FjdGlvbi5pbmRleE9mKCdmb2N1cycpICE9PSAtMTtcbiAgfSxcbiAgaXNCbHVyVG9IaWRlOiBmdW5jdGlvbiBpc0JsdXJUb0hpZGUoKSB7XG4gICAgdmFyIF9wcm9wczYgPSB0aGlzLnByb3BzLFxuICAgICAgICBhY3Rpb24gPSBfcHJvcHM2LmFjdGlvbixcbiAgICAgICAgaGlkZUFjdGlvbiA9IF9wcm9wczYuaGlkZUFjdGlvbjtcblxuICAgIHJldHVybiBhY3Rpb24uaW5kZXhPZignZm9jdXMnKSAhPT0gLTEgfHwgaGlkZUFjdGlvbi5pbmRleE9mKCdibHVyJykgIT09IC0xO1xuICB9LFxuICBmb3JjZVBvcHVwQWxpZ246IGZ1bmN0aW9uIGZvcmNlUG9wdXBBbGlnbigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5wb3B1cFZpc2libGUgJiYgdGhpcy5fY29tcG9uZW50ICYmIHRoaXMuX2NvbXBvbmVudC5hbGlnbkluc3RhbmNlKSB7XG4gICAgICB0aGlzLl9jb21wb25lbnQuYWxpZ25JbnN0YW5jZS5mb3JjZUFsaWduKCk7XG4gICAgfVxuICB9LFxuICBmaXJlRXZlbnRzOiBmdW5jdGlvbiBmaXJlRXZlbnRzKHR5cGUsIGUpIHtcbiAgICB2YXIgY2hpbGRDYWxsYmFjayA9IHRoaXMucHJvcHMuY2hpbGRyZW4ucHJvcHNbdHlwZV07XG4gICAgaWYgKGNoaWxkQ2FsbGJhY2spIHtcbiAgICAgIGNoaWxkQ2FsbGJhY2soZSk7XG4gICAgfVxuICAgIHZhciBjYWxsYmFjayA9IHRoaXMucHJvcHNbdHlwZV07XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjayhlKTtcbiAgICB9XG4gIH0sXG4gIGNsb3NlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICB0aGlzLnNldFBvcHVwVmlzaWJsZShmYWxzZSk7XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gICAgdmFyIGNoaWxkID0gUmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgdmFyIG5ld0NoaWxkUHJvcHMgPSB7fTtcbiAgICBpZiAodGhpcy5pc0NsaWNrVG9IaWRlKCkgfHwgdGhpcy5pc0NsaWNrVG9TaG93KCkpIHtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25DbGljayA9IHRoaXMub25DbGljaztcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZURvd24gPSB0aGlzLm9uTW91c2VEb3duO1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vblRvdWNoU3RhcnQgPSB0aGlzLm9uVG91Y2hTdGFydDtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbkNsaWNrID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uQ2xpY2snKTtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Nb3VzZURvd24gPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25Nb3VzZURvd24nKTtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Ub3VjaFN0YXJ0ID0gdGhpcy5jcmVhdGVUd29DaGFpbnMoJ29uVG91Y2hTdGFydCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc01vdXNlRW50ZXJUb1Nob3coKSkge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSB0aGlzLm9uTW91c2VFbnRlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3Q2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSB0aGlzLmNyZWF0ZVR3b0NoYWlucygnb25Nb3VzZUVudGVyJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzTW91c2VMZWF2ZVRvSGlkZSgpKSB7XG4gICAgICBuZXdDaGlsZFByb3BzLm9uTW91c2VMZWF2ZSA9IHRoaXMub25Nb3VzZUxlYXZlO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdDaGlsZFByb3BzLm9uTW91c2VMZWF2ZSA9IHRoaXMuY3JlYXRlVHdvQ2hhaW5zKCdvbk1vdXNlTGVhdmUnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNGb2N1c1RvU2hvdygpIHx8IHRoaXMuaXNCbHVyVG9IaWRlKCkpIHtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Gb2N1cyA9IHRoaXMub25Gb2N1cztcbiAgICAgIG5ld0NoaWxkUHJvcHMub25CbHVyID0gdGhpcy5vbkJsdXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0NoaWxkUHJvcHMub25Gb2N1cyA9IHRoaXMuY3JlYXRlVHdvQ2hhaW5zKCdvbkZvY3VzJyk7XG4gICAgICBuZXdDaGlsZFByb3BzLm9uQmx1ciA9IHRoaXMuY3JlYXRlVHdvQ2hhaW5zKCdvbkJsdXInKTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBuZXdDaGlsZFByb3BzKTtcbiAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IFRyaWdnZXI7IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gYWRkRXZlbnRMaXN0ZW5lcldyYXA7XG5cbnZhciBfYWRkRG9tRXZlbnRMaXN0ZW5lciA9IHJlcXVpcmUoJ2FkZC1kb20tZXZlbnQtbGlzdGVuZXInKTtcblxudmFyIF9hZGREb21FdmVudExpc3RlbmVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2FkZERvbUV2ZW50TGlzdGVuZXIpO1xuXG52YXIgX3JlYWN0RG9tID0gcmVxdWlyZSgncmVhY3QtZG9tJyk7XG5cbnZhciBfcmVhY3REb20yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3REb20pO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJXcmFwKHRhcmdldCwgZXZlbnRUeXBlLCBjYikge1xuICAvKiBlc2xpbnQgY2FtZWxjYXNlOiAyICovXG4gIHZhciBjYWxsYmFjayA9IF9yZWFjdERvbTJbJ2RlZmF1bHQnXS51bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyA/IGZ1bmN0aW9uIHJ1bihlKSB7XG4gICAgX3JlYWN0RG9tMlsnZGVmYXVsdCddLnVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzKGNiLCBlKTtcbiAgfSA6IGNiO1xuICByZXR1cm4gKDAsIF9hZGREb21FdmVudExpc3RlbmVyMlsnZGVmYXVsdCddKSh0YXJnZXQsIGV2ZW50VHlwZSwgY2FsbGJhY2spO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzJztcbmltcG9ydCBfY2xhc3NDYWxsQ2hlY2sgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzJztcbmltcG9ydCBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybic7XG5pbXBvcnQgX2luaGVyaXRzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0cyc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IEFsaWduIGZyb20gJ3JjLWFsaWduJztcbmltcG9ydCBBbmltYXRlIGZyb20gJ3JjLWFuaW1hdGUnO1xuaW1wb3J0IFBvcHVwSW5uZXIgZnJvbSAnLi9Qb3B1cElubmVyJztcbmltcG9ydCBMYXp5UmVuZGVyQm94IGZyb20gJy4vTGF6eVJlbmRlckJveCc7XG5pbXBvcnQgeyBzYXZlUmVmIH0gZnJvbSAnLi91dGlscyc7XG5cbnZhciBQb3B1cCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhQb3B1cCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUG9wdXAocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9wdXApO1xuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFBvcHVwLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoUG9wdXApKS5jYWxsKHRoaXMsIHByb3BzKSk7XG5cbiAgICBfaW5pdGlhbGlzZVByb3BzLmNhbGwoX3RoaXMpO1xuXG4gICAgX3RoaXMuc2F2ZVBvcHVwUmVmID0gc2F2ZVJlZi5iaW5kKF90aGlzLCAncG9wdXBJbnN0YW5jZScpO1xuICAgIF90aGlzLnNhdmVBbGlnblJlZiA9IHNhdmVSZWYuYmluZChfdGhpcywgJ2FsaWduSW5zdGFuY2UnKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUG9wdXAsIFt7XG4gICAga2V5OiAnY29tcG9uZW50RGlkTW91bnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgIHRoaXMucm9vdE5vZGUgPSB0aGlzLmdldFBvcHVwRG9tTm9kZSgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFBvcHVwRG9tTm9kZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFBvcHVwRG9tTm9kZSgpIHtcbiAgICAgIHJldHVybiBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzLnBvcHVwSW5zdGFuY2UpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldE1hc2tUcmFuc2l0aW9uTmFtZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldE1hc2tUcmFuc2l0aW9uTmFtZSgpIHtcbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgdHJhbnNpdGlvbk5hbWUgPSBwcm9wcy5tYXNrVHJhbnNpdGlvbk5hbWU7XG4gICAgICB2YXIgYW5pbWF0aW9uID0gcHJvcHMubWFza0FuaW1hdGlvbjtcbiAgICAgIGlmICghdHJhbnNpdGlvbk5hbWUgJiYgYW5pbWF0aW9uKSB7XG4gICAgICAgIHRyYW5zaXRpb25OYW1lID0gcHJvcHMucHJlZml4Q2xzICsgJy0nICsgYW5pbWF0aW9uO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRyYW5zaXRpb25OYW1lO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFRyYW5zaXRpb25OYW1lJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VHJhbnNpdGlvbk5hbWUoKSB7XG4gICAgICB2YXIgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIHRyYW5zaXRpb25OYW1lID0gcHJvcHMudHJhbnNpdGlvbk5hbWU7XG4gICAgICBpZiAoIXRyYW5zaXRpb25OYW1lICYmIHByb3BzLmFuaW1hdGlvbikge1xuICAgICAgICB0cmFuc2l0aW9uTmFtZSA9IHByb3BzLnByZWZpeENscyArICctJyArIHByb3BzLmFuaW1hdGlvbjtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cmFuc2l0aW9uTmFtZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRDbGFzc05hbWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRDbGFzc05hbWUoY3VycmVudEFsaWduQ2xhc3NOYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5wcmVmaXhDbHMgKyAnICcgKyB0aGlzLnByb3BzLmNsYXNzTmFtZSArICcgJyArIGN1cnJlbnRBbGlnbkNsYXNzTmFtZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRQb3B1cEVsZW1lbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQb3B1cEVsZW1lbnQoKSB7XG4gICAgICB2YXIgc2F2ZVBvcHVwUmVmID0gdGhpcy5zYXZlUG9wdXBSZWYsXG4gICAgICAgICAgcHJvcHMgPSB0aGlzLnByb3BzO1xuICAgICAgdmFyIGFsaWduID0gcHJvcHMuYWxpZ24sXG4gICAgICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgICAgICB2aXNpYmxlID0gcHJvcHMudmlzaWJsZSxcbiAgICAgICAgICBwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgICAgZGVzdHJveVBvcHVwT25IaWRlID0gcHJvcHMuZGVzdHJveVBvcHVwT25IaWRlO1xuXG4gICAgICB2YXIgY2xhc3NOYW1lID0gdGhpcy5nZXRDbGFzc05hbWUodGhpcy5jdXJyZW50QWxpZ25DbGFzc05hbWUgfHwgcHJvcHMuZ2V0Q2xhc3NOYW1lRnJvbUFsaWduKGFsaWduKSk7XG4gICAgICB2YXIgaGlkZGVuQ2xhc3NOYW1lID0gcHJlZml4Q2xzICsgJy1oaWRkZW4nO1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEFsaWduQ2xhc3NOYW1lID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIHZhciBuZXdTdHlsZSA9IF9leHRlbmRzKHt9LCBzdHlsZSwgdGhpcy5nZXRaSW5kZXhTdHlsZSgpKTtcbiAgICAgIHZhciBwb3B1cElubmVyUHJvcHMgPSB7XG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBwcmVmaXhDbHM6IHByZWZpeENscyxcbiAgICAgICAgcmVmOiBzYXZlUG9wdXBSZWYsXG4gICAgICAgIG9uTW91c2VFbnRlcjogcHJvcHMub25Nb3VzZUVudGVyLFxuICAgICAgICBvbk1vdXNlTGVhdmU6IHByb3BzLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgc3R5bGU6IG5ld1N0eWxlXG4gICAgICB9O1xuICAgICAgaWYgKGRlc3Ryb3lQb3B1cE9uSGlkZSkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBBbmltYXRlLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogJycsXG4gICAgICAgICAgICBleGNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgICB0cmFuc2l0aW9uQXBwZWFyOiB0cnVlLFxuICAgICAgICAgICAgdHJhbnNpdGlvbk5hbWU6IHRoaXMuZ2V0VHJhbnNpdGlvbk5hbWUoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmlzaWJsZSA/IFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBBbGlnbixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmdldFRhcmdldCxcbiAgICAgICAgICAgICAga2V5OiAncG9wdXAnLFxuICAgICAgICAgICAgICByZWY6IHRoaXMuc2F2ZUFsaWduUmVmLFxuICAgICAgICAgICAgICBtb25pdG9yV2luZG93UmVzaXplOiB0cnVlLFxuICAgICAgICAgICAgICBhbGlnbjogYWxpZ24sXG4gICAgICAgICAgICAgIG9uQWxpZ246IHRoaXMub25BbGlnblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIFBvcHVwSW5uZXIsXG4gICAgICAgICAgICAgIF9leHRlbmRzKHtcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlXG4gICAgICAgICAgICAgIH0sIHBvcHVwSW5uZXJQcm9wcyksXG4gICAgICAgICAgICAgIHByb3BzLmNoaWxkcmVuXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBBbmltYXRlLFxuICAgICAgICB7XG4gICAgICAgICAgY29tcG9uZW50OiAnJyxcbiAgICAgICAgICBleGNsdXNpdmU6IHRydWUsXG4gICAgICAgICAgdHJhbnNpdGlvbkFwcGVhcjogdHJ1ZSxcbiAgICAgICAgICB0cmFuc2l0aW9uTmFtZTogdGhpcy5nZXRUcmFuc2l0aW9uTmFtZSgpLFxuICAgICAgICAgIHNob3dQcm9wOiAneFZpc2libGUnXG4gICAgICAgIH0sXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgQWxpZ24sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLmdldFRhcmdldCxcbiAgICAgICAgICAgIGtleTogJ3BvcHVwJyxcbiAgICAgICAgICAgIHJlZjogdGhpcy5zYXZlQWxpZ25SZWYsXG4gICAgICAgICAgICBtb25pdG9yV2luZG93UmVzaXplOiB0cnVlLFxuICAgICAgICAgICAgeFZpc2libGU6IHZpc2libGUsXG4gICAgICAgICAgICBjaGlsZHJlblByb3BzOiB7IHZpc2libGU6ICd4VmlzaWJsZScgfSxcbiAgICAgICAgICAgIGRpc2FibGVkOiAhdmlzaWJsZSxcbiAgICAgICAgICAgIGFsaWduOiBhbGlnbixcbiAgICAgICAgICAgIG9uQWxpZ246IHRoaXMub25BbGlnblxuICAgICAgICAgIH0sXG4gICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgIFBvcHVwSW5uZXIsXG4gICAgICAgICAgICBfZXh0ZW5kcyh7XG4gICAgICAgICAgICAgIGhpZGRlbkNsYXNzTmFtZTogaGlkZGVuQ2xhc3NOYW1lXG4gICAgICAgICAgICB9LCBwb3B1cElubmVyUHJvcHMpLFxuICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0WkluZGV4U3R5bGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRaSW5kZXhTdHlsZSgpIHtcbiAgICAgIHZhciBzdHlsZSA9IHt9O1xuICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcztcbiAgICAgIGlmIChwcm9wcy56SW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBzdHlsZS56SW5kZXggPSBwcm9wcy56SW5kZXg7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0TWFza0VsZW1lbnQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRNYXNrRWxlbWVudCgpIHtcbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgbWFza0VsZW1lbnQgPSB2b2lkIDA7XG4gICAgICBpZiAocHJvcHMubWFzaykge1xuICAgICAgICB2YXIgbWFza1RyYW5zaXRpb24gPSB0aGlzLmdldE1hc2tUcmFuc2l0aW9uTmFtZSgpO1xuICAgICAgICBtYXNrRWxlbWVudCA9IFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGF6eVJlbmRlckJveCwge1xuICAgICAgICAgIHN0eWxlOiB0aGlzLmdldFpJbmRleFN0eWxlKCksXG4gICAgICAgICAga2V5OiAnbWFzaycsXG4gICAgICAgICAgY2xhc3NOYW1lOiBwcm9wcy5wcmVmaXhDbHMgKyAnLW1hc2snLFxuICAgICAgICAgIGhpZGRlbkNsYXNzTmFtZTogcHJvcHMucHJlZml4Q2xzICsgJy1tYXNrLWhpZGRlbicsXG4gICAgICAgICAgdmlzaWJsZTogcHJvcHMudmlzaWJsZVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG1hc2tUcmFuc2l0aW9uKSB7XG4gICAgICAgICAgbWFza0VsZW1lbnQgPSBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgQW5pbWF0ZSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiAnbWFzaycsXG4gICAgICAgICAgICAgIHNob3dQcm9wOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb25BcHBlYXI6IHRydWUsXG4gICAgICAgICAgICAgIGNvbXBvbmVudDogJycsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb25OYW1lOiBtYXNrVHJhbnNpdGlvblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1hc2tFbGVtZW50XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG1hc2tFbGVtZW50O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgdGhpcy5nZXRNYXNrRWxlbWVudCgpLFxuICAgICAgICB0aGlzLmdldFBvcHVwRWxlbWVudCgpXG4gICAgICApO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBQb3B1cDtcbn0oQ29tcG9uZW50KTtcblxuUG9wdXAucHJvcFR5cGVzID0ge1xuICB2aXNpYmxlOiBQcm9wVHlwZXMuYm9vbCxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gIGdldENsYXNzTmFtZUZyb21BbGlnbjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uQWxpZ246IFByb3BUeXBlcy5mdW5jLFxuICBnZXRSb290RG9tTm9kZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTW91c2VFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIGFsaWduOiBQcm9wVHlwZXMuYW55LFxuICBkZXN0cm95UG9wdXBPbkhpZGU6IFByb3BUeXBlcy5ib29sLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgb25Nb3VzZUxlYXZlOiBQcm9wVHlwZXMuZnVuY1xufTtcblxudmFyIF9pbml0aWFsaXNlUHJvcHMgPSBmdW5jdGlvbiBfaW5pdGlhbGlzZVByb3BzKCkge1xuICB2YXIgX3RoaXMyID0gdGhpcztcblxuICB0aGlzLm9uQWxpZ24gPSBmdW5jdGlvbiAocG9wdXBEb21Ob2RlLCBhbGlnbikge1xuICAgIHZhciBwcm9wcyA9IF90aGlzMi5wcm9wcztcbiAgICB2YXIgY3VycmVudEFsaWduQ2xhc3NOYW1lID0gcHJvcHMuZ2V0Q2xhc3NOYW1lRnJvbUFsaWduKGFsaWduKTtcbiAgICAvLyBGSVg6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvdHJpZ2dlci9pc3N1ZXMvNTZcbiAgICAvLyBGSVg6IGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvdG9vbHRpcC9pc3N1ZXMvNzlcbiAgICBpZiAoX3RoaXMyLmN1cnJlbnRBbGlnbkNsYXNzTmFtZSAhPT0gY3VycmVudEFsaWduQ2xhc3NOYW1lKSB7XG4gICAgICBfdGhpczIuY3VycmVudEFsaWduQ2xhc3NOYW1lID0gY3VycmVudEFsaWduQ2xhc3NOYW1lO1xuICAgICAgcG9wdXBEb21Ob2RlLmNsYXNzTmFtZSA9IF90aGlzMi5nZXRDbGFzc05hbWUoY3VycmVudEFsaWduQ2xhc3NOYW1lKTtcbiAgICB9XG4gICAgcHJvcHMub25BbGlnbihwb3B1cERvbU5vZGUsIGFsaWduKTtcbiAgfTtcblxuICB0aGlzLmdldFRhcmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gX3RoaXMyLnByb3BzLmdldFJvb3REb21Ob2RlKCk7XG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3B1cDsiLCJpbXBvcnQgX2NsYXNzQ2FsbENoZWNrIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjayc7XG5pbXBvcnQgX2NyZWF0ZUNsYXNzIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGVDbGFzcyc7XG5pbXBvcnQgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4nO1xuaW1wb3J0IF9pbmhlcml0cyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMnO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTGF6eVJlbmRlckJveCBmcm9tICcuL0xhenlSZW5kZXJCb3gnO1xuXG52YXIgUG9wdXBJbm5lciA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhQb3B1cElubmVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBQb3B1cElubmVyKCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBQb3B1cElubmVyKTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoUG9wdXBJbm5lci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFBvcHVwSW5uZXIpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhQb3B1cElubmVyLCBbe1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBwcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgICB2YXIgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lO1xuICAgICAgaWYgKCFwcm9wcy52aXNpYmxlKSB7XG4gICAgICAgIGNsYXNzTmFtZSArPSAnICcgKyBwcm9wcy5oaWRkZW5DbGFzc05hbWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgJ2RpdicsXG4gICAgICAgIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgICBvbk1vdXNlRW50ZXI6IHByb3BzLm9uTW91c2VFbnRlcixcbiAgICAgICAgICBvbk1vdXNlTGVhdmU6IHByb3BzLm9uTW91c2VMZWF2ZSxcbiAgICAgICAgICBzdHlsZTogcHJvcHMuc3R5bGVcbiAgICAgICAgfSxcbiAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBMYXp5UmVuZGVyQm94LFxuICAgICAgICAgIHsgY2xhc3NOYW1lOiBwcm9wcy5wcmVmaXhDbHMgKyAnLWNvbnRlbnQnLCB2aXNpYmxlOiBwcm9wcy52aXNpYmxlIH0sXG4gICAgICAgICAgcHJvcHMuY2hpbGRyZW5cbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUG9wdXBJbm5lcjtcbn0oQ29tcG9uZW50KTtcblxuUG9wdXBJbm5lci5wcm9wVHlwZXMgPSB7XG4gIGhpZGRlbkNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uTW91c2VFbnRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTW91c2VMZWF2ZTogUHJvcFR5cGVzLmZ1bmMsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwSW5uZXI7IiwiaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnO1xuaW1wb3J0IF9jbGFzc0NhbGxDaGVjayBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2snO1xuaW1wb3J0IF9jcmVhdGVDbGFzcyBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuIGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuJztcbmltcG9ydCBfaW5oZXJpdHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2luaGVyaXRzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG52YXIgTGF6eVJlbmRlckJveCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0cyhMYXp5UmVuZGVyQm94LCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBMYXp5UmVuZGVyQm94KCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBMYXp5UmVuZGVyQm94KTtcblxuICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTGF6eVJlbmRlckJveC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKExhenlSZW5kZXJCb3gpKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhMYXp5UmVuZGVyQm94LCBbe1xuICAgIGtleTogJ3Nob3VsZENvbXBvbmVudFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMpIHtcbiAgICAgIHJldHVybiBuZXh0UHJvcHMuaGlkZGVuQ2xhc3NOYW1lIHx8IG5leHRQcm9wcy52aXNpYmxlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlbmRlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGhpZGRlbkNsYXNzTmFtZSA9IF9wcm9wcy5oaWRkZW5DbGFzc05hbWUsXG4gICAgICAgICAgdmlzaWJsZSA9IF9wcm9wcy52aXNpYmxlLFxuICAgICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWydoaWRkZW5DbGFzc05hbWUnLCAndmlzaWJsZSddKTtcblxuICAgICAgaWYgKGhpZGRlbkNsYXNzTmFtZSB8fCBSZWFjdC5DaGlsZHJlbi5jb3VudChwcm9wcy5jaGlsZHJlbikgPiAxKSB7XG4gICAgICAgIGlmICghdmlzaWJsZSAmJiBoaWRkZW5DbGFzc05hbWUpIHtcbiAgICAgICAgICBwcm9wcy5jbGFzc05hbWUgKz0gJyAnICsgaGlkZGVuQ2xhc3NOYW1lO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdkaXYnLCBwcm9wcyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5DaGlsZHJlbi5vbmx5KHByb3BzLmNoaWxkcmVuKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gTGF6eVJlbmRlckJveDtcbn0oQ29tcG9uZW50KTtcblxuTGF6eVJlbmRlckJveC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICBoaWRkZW5DbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmdcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgTGF6eVJlbmRlckJveDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnO1xuZnVuY3Rpb24gaXNQb2ludHNFcShhMSwgYTIpIHtcbiAgcmV0dXJuIGExWzBdID09PSBhMlswXSAmJiBhMVsxXSA9PT0gYTJbMV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGlnbkZyb21QbGFjZW1lbnQoYnVpbHRpblBsYWNlbWVudHMsIHBsYWNlbWVudFN0ciwgYWxpZ24pIHtcbiAgdmFyIGJhc2VBbGlnbiA9IGJ1aWx0aW5QbGFjZW1lbnRzW3BsYWNlbWVudFN0cl0gfHwge307XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgYmFzZUFsaWduLCBhbGlnbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3B1cENsYXNzTmFtZUZyb21BbGlnbihidWlsdGluUGxhY2VtZW50cywgcHJlZml4Q2xzLCBhbGlnbikge1xuICB2YXIgcG9pbnRzID0gYWxpZ24ucG9pbnRzO1xuICBmb3IgKHZhciBwbGFjZW1lbnQgaW4gYnVpbHRpblBsYWNlbWVudHMpIHtcbiAgICBpZiAoYnVpbHRpblBsYWNlbWVudHMuaGFzT3duUHJvcGVydHkocGxhY2VtZW50KSkge1xuICAgICAgaWYgKGlzUG9pbnRzRXEoYnVpbHRpblBsYWNlbWVudHNbcGxhY2VtZW50XS5wb2ludHMsIHBvaW50cykpIHtcbiAgICAgICAgcmV0dXJuIHByZWZpeENscyArICctcGxhY2VtZW50LScgKyBwbGFjZW1lbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVSZWYobmFtZSwgY29tcG9uZW50KSB7XG4gIHRoaXNbbmFtZV0gPSBjb21wb25lbnQ7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMyID0gcmVxdWlyZSgnYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcblxudmFyIF9leHRlbmRzMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dGVuZHMyKTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gZ2V0Q29udGFpbmVyUmVuZGVyTWl4aW47XG5cbnZhciBfcmVhY3REb20gPSByZXF1aXJlKCdyZWFjdC1kb20nKTtcblxudmFyIF9yZWFjdERvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdERvbSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gZGVmYXVsdEdldENvbnRhaW5lcigpIHtcbiAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRhaW5lclJlbmRlck1peGluKGNvbmZpZykge1xuICB2YXIgX2NvbmZpZyRhdXRvTW91bnQgPSBjb25maWcuYXV0b01vdW50LFxuICAgICAgYXV0b01vdW50ID0gX2NvbmZpZyRhdXRvTW91bnQgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfY29uZmlnJGF1dG9Nb3VudCxcbiAgICAgIF9jb25maWckYXV0b0Rlc3Ryb3kgPSBjb25maWcuYXV0b0Rlc3Ryb3ksXG4gICAgICBhdXRvRGVzdHJveSA9IF9jb25maWckYXV0b0Rlc3Ryb3kgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfY29uZmlnJGF1dG9EZXN0cm95LFxuICAgICAgaXNWaXNpYmxlID0gY29uZmlnLmlzVmlzaWJsZSxcbiAgICAgIGlzRm9yY2VSZW5kZXIgPSBjb25maWcuaXNGb3JjZVJlbmRlcixcbiAgICAgIGdldENvbXBvbmVudCA9IGNvbmZpZy5nZXRDb21wb25lbnQsXG4gICAgICBfY29uZmlnJGdldENvbnRhaW5lciA9IGNvbmZpZy5nZXRDb250YWluZXIsXG4gICAgICBnZXRDb250YWluZXIgPSBfY29uZmlnJGdldENvbnRhaW5lciA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdEdldENvbnRhaW5lciA6IF9jb25maWckZ2V0Q29udGFpbmVyO1xuXG5cbiAgdmFyIG1peGluID0gdm9pZCAwO1xuXG4gIGZ1bmN0aW9uIF9yZW5kZXJDb21wb25lbnQoaW5zdGFuY2UsIGNvbXBvbmVudEFyZywgcmVhZHkpIHtcbiAgICBpZiAoIWlzVmlzaWJsZSB8fCBpbnN0YW5jZS5fY29tcG9uZW50IHx8IGlzVmlzaWJsZShpbnN0YW5jZSkgfHwgaXNGb3JjZVJlbmRlciAmJiBpc0ZvcmNlUmVuZGVyKGluc3RhbmNlKSkge1xuICAgICAgaWYgKCFpbnN0YW5jZS5fY29udGFpbmVyKSB7XG4gICAgICAgIGluc3RhbmNlLl9jb250YWluZXIgPSBnZXRDb250YWluZXIoaW5zdGFuY2UpO1xuICAgICAgfVxuICAgICAgdmFyIGNvbXBvbmVudCA9IHZvaWQgMDtcbiAgICAgIGlmIChpbnN0YW5jZS5nZXRDb21wb25lbnQpIHtcbiAgICAgICAgY29tcG9uZW50ID0gaW5zdGFuY2UuZ2V0Q29tcG9uZW50KGNvbXBvbmVudEFyZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wb25lbnQgPSBnZXRDb21wb25lbnQoaW5zdGFuY2UsIGNvbXBvbmVudEFyZyk7XG4gICAgICB9XG4gICAgICBfcmVhY3REb20yWydkZWZhdWx0J10udW5zdGFibGVfcmVuZGVyU3VidHJlZUludG9Db250YWluZXIoaW5zdGFuY2UsIGNvbXBvbmVudCwgaW5zdGFuY2UuX2NvbnRhaW5lciwgZnVuY3Rpb24gY2FsbGJhY2soKSB7XG4gICAgICAgIGluc3RhbmNlLl9jb21wb25lbnQgPSB0aGlzO1xuICAgICAgICBpZiAocmVhZHkpIHtcbiAgICAgICAgICByZWFkeS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpZiAoYXV0b01vdW50KSB7XG4gICAgbWl4aW4gPSAoMCwgX2V4dGVuZHMzWydkZWZhdWx0J10pKHt9LCBtaXhpbiwge1xuICAgICAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBfcmVuZGVyQ29tcG9uZW50KHRoaXMpO1xuICAgICAgfSxcbiAgICAgIGNvbXBvbmVudERpZFVwZGF0ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBfcmVuZGVyQ29tcG9uZW50KHRoaXMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKCFhdXRvTW91bnQgfHwgIWF1dG9EZXN0cm95KSB7XG4gICAgbWl4aW4gPSAoMCwgX2V4dGVuZHMzWydkZWZhdWx0J10pKHt9LCBtaXhpbiwge1xuICAgICAgcmVuZGVyQ29tcG9uZW50OiBmdW5jdGlvbiByZW5kZXJDb21wb25lbnQoY29tcG9uZW50QXJnLCByZWFkeSkge1xuICAgICAgICBfcmVuZGVyQ29tcG9uZW50KHRoaXMsIGNvbXBvbmVudEFyZywgcmVhZHkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gX3JlbW92ZUNvbnRhaW5lcihpbnN0YW5jZSkge1xuICAgIGlmIChpbnN0YW5jZS5fY29udGFpbmVyKSB7XG4gICAgICB2YXIgY29udGFpbmVyID0gaW5zdGFuY2UuX2NvbnRhaW5lcjtcbiAgICAgIF9yZWFjdERvbTJbJ2RlZmF1bHQnXS51bm1vdW50Q29tcG9uZW50QXROb2RlKGNvbnRhaW5lcik7XG4gICAgICBjb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuICAgICAgaW5zdGFuY2UuX2NvbnRhaW5lciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgaWYgKGF1dG9EZXN0cm95KSB7XG4gICAgbWl4aW4gPSAoMCwgX2V4dGVuZHMzWydkZWZhdWx0J10pKHt9LCBtaXhpbiwge1xuICAgICAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBfcmVtb3ZlQ29udGFpbmVyKHRoaXMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG1peGluID0gKDAsIF9leHRlbmRzM1snZGVmYXVsdCddKSh7fSwgbWl4aW4sIHtcbiAgICAgIHJlbW92ZUNvbnRhaW5lcjogZnVuY3Rpb24gcmVtb3ZlQ29udGFpbmVyKCkge1xuICAgICAgICBfcmVtb3ZlQ29udGFpbmVyKHRoaXMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG1peGluO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInO1xuaW1wb3J0IENvbWJvYm94IGZyb20gJy4vQ29tYm9ib3gnO1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IGNyZWF0ZVJlYWN0Q2xhc3MgZnJvbSBcImNyZWF0ZS1yZWFjdC1jbGFzc1wiO1xuXG5mdW5jdGlvbiBub29wKCkge1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZU9wdGlvbnMobGVuZ3RoLCBkaXNhYmxlZE9wdGlvbnMsIGhpZGVEaXNhYmxlZE9wdGlvbnMpIHtcbiAgY29uc3QgYXJyID0gW107XG4gIGZvciAobGV0IHZhbHVlID0gMDsgdmFsdWUgPCBsZW5ndGg7IHZhbHVlKyspIHtcbiAgICBpZiAoIWRpc2FibGVkT3B0aW9ucyB8fCBkaXNhYmxlZE9wdGlvbnMuaW5kZXhPZih2YWx1ZSkgPCAwIHx8ICFoaWRlRGlzYWJsZWRPcHRpb25zKSB7XG4gICAgICBhcnIucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbmNvbnN0IFBhbmVsID0gY3JlYXRlUmVhY3RDbGFzcyh7XG4gIHByb3BUeXBlczoge1xuICAgIGNsZWFyVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVmYXVsdE9wZW5WYWx1ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICB2YWx1ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBmb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGlzYWJsZWRIb3VyczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWRNaW51dGVzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZFNlY29uZHM6IFByb3BUeXBlcy5mdW5jLFxuICAgIGhpZGVEaXNhYmxlZE9wdGlvbnM6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkVzYzogUHJvcFR5cGVzLmZ1bmMsXG4gICAgYWxsb3dFbXB0eTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd0hvdXI6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dTZWNvbmQ6IFByb3BUeXBlcy5ib29sLFxuICAgIG9uQ2xlYXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIHNob3dBTVBNOiBQcm9wVHlwZXMuYm9vbFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJlZml4Q2xzOiAncmMtdGltZS1waWNrZXItcGFuZWwnLFxuICAgICAgb25DaGFuZ2U6IG5vb3AsXG4gICAgICBvbkNsZWFyOiBub29wLFxuICAgICAgZGVmYXVsdE9wZW5WYWx1ZTogbW9tZW50KCksXG4gICAgfTtcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB0aGlzLnByb3BzLnZhbHVlLFxuICAgICAgc2VsZWN0aW9uUmFuZ2U6IFtdLFxuICAgIH07XG4gIH0sXG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zdCB2YWx1ZSA9IG5leHRQcm9wcy52YWx1ZTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB2YWx1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICBvbkNoYW5nZShuZXdWYWx1ZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogbmV3VmFsdWUgfSk7XG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuZXdWYWx1ZSk7XG4gIH0sXG5cbiAgb25DbGVhcigpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2xlYXIoKTtcbiAgfSxcblxuICBvbkN1cnJlbnRTZWxlY3RQYW5lbENoYW5nZShjdXJyZW50U2VsZWN0UGFuZWwpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY3VycmVudFNlbGVjdFBhbmVsIH0pO1xuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmb3JtYXR0ZXIsIHByZWZpeENscywgY2xhc3NOYW1lLCBwbGFjZWhvbGRlciwgZGlzYWJsZWRIb3VycywgZGlzYWJsZWRNaW51dGVzLFxuICAgICAgZGlzYWJsZWRTZWNvbmRzLCBoaWRlRGlzYWJsZWRPcHRpb25zLCBhbGxvd0VtcHR5LCBzaG93SG91ciwgc2hvd1NlY29uZCwgc2hvd0FNUE0sXG4gICAgICBmb3JtYXQsIGRlZmF1bHRPcGVuVmFsdWUsIGNsZWFyVGV4dCwgb25Fc2MsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qge1xuICAgICAgdmFsdWUsIGN1cnJlbnRTZWxlY3RQYW5lbCxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBkaXNhYmxlZEhvdXJPcHRpb25zID0gZGlzYWJsZWRIb3VycygpO1xuICAgIGNvbnN0IGRpc2FibGVkTWludXRlT3B0aW9ucyA9IGRpc2FibGVkTWludXRlcyh2YWx1ZSA/IHZhbHVlLmhvdXIoKSA6IG51bGwpO1xuICAgIGNvbnN0IGRpc2FibGVkU2Vjb25kT3B0aW9ucyA9IGRpc2FibGVkU2Vjb25kcyh2YWx1ZSA/IHZhbHVlLmhvdXIoKSA6IG51bGwsXG4gICAgICB2YWx1ZSA/IHZhbHVlLm1pbnV0ZSgpIDogbnVsbCk7XG4gICAgY29uc3QgaG91ck9wdGlvbnMgPSBnZW5lcmF0ZU9wdGlvbnMoMjQsIGRpc2FibGVkSG91ck9wdGlvbnMsIGhpZGVEaXNhYmxlZE9wdGlvbnMpO1xuICAgIGNvbnN0IG1pbnV0ZU9wdGlvbnMgPSBnZW5lcmF0ZU9wdGlvbnMoNjAsIGRpc2FibGVkTWludXRlT3B0aW9ucywgaGlkZURpc2FibGVkT3B0aW9ucyk7XG4gICAgY29uc3Qgc2Vjb25kT3B0aW9ucyA9IGdlbmVyYXRlT3B0aW9ucyg2MCwgZGlzYWJsZWRTZWNvbmRPcHRpb25zLCBoaWRlRGlzYWJsZWRPcHRpb25zKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7cHJlZml4Q2xzfS1pbm5lciAke2NsYXNzTmFtZX1gfT5cbiAgICAgICAgPEhlYWRlclxuICAgICAgICAgIGNsZWFyVGV4dD17Y2xlYXJUZXh0fVxuICAgICAgICAgIHByZWZpeENscz17cHJlZml4Q2xzfVxuICAgICAgICAgIGRlZmF1bHRPcGVuVmFsdWU9e2RlZmF1bHRPcGVuVmFsdWV9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIGN1cnJlbnRTZWxlY3RQYW5lbD17Y3VycmVudFNlbGVjdFBhbmVsfVxuICAgICAgICAgIG9uRXNjPXtvbkVzY31cbiAgICAgICAgICBmb3JtYXQ9e2Zvcm1hdH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgaG91ck9wdGlvbnM9e2hvdXJPcHRpb25zfVxuICAgICAgICAgIG1pbnV0ZU9wdGlvbnM9e21pbnV0ZU9wdGlvbnN9XG4gICAgICAgICAgc2Vjb25kT3B0aW9ucz17c2Vjb25kT3B0aW9uc31cbiAgICAgICAgICBkaXNhYmxlZEhvdXJzPXtkaXNhYmxlZEhvdXJzfVxuICAgICAgICAgIGRpc2FibGVkTWludXRlcz17ZGlzYWJsZWRNaW51dGVzfVxuICAgICAgICAgIGRpc2FibGVkU2Vjb25kcz17ZGlzYWJsZWRTZWNvbmRzfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfVxuICAgICAgICAgIG9uQ2xlYXI9e3RoaXMub25DbGVhcn1cbiAgICAgICAgICBhbGxvd0VtcHR5PXthbGxvd0VtcHR5fVxuICAgICAgICAvPlxuICAgICAgICA8Q29tYm9ib3hcbiAgICAgICAgICBmb3JtYXR0ZXI9e2Zvcm1hdHRlcn1cbiAgICAgICAgICBwcmVmaXhDbHM9e3ByZWZpeENsc31cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgZGVmYXVsdE9wZW5WYWx1ZT17ZGVmYXVsdE9wZW5WYWx1ZX1cbiAgICAgICAgICBmb3JtYXQ9e2Zvcm1hdH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX1cbiAgICAgICAgICBzaG93QU1QTT17c2hvd0FNUE19XG4gICAgICAgICAgc2hvd0hvdXI9e3Nob3dIb3VyfVxuICAgICAgICAgIHNob3dTZWNvbmQ9e3Nob3dTZWNvbmR9XG4gICAgICAgICAgaG91ck9wdGlvbnM9e2hvdXJPcHRpb25zfVxuICAgICAgICAgIG1pbnV0ZU9wdGlvbnM9e21pbnV0ZU9wdGlvbnN9XG4gICAgICAgICAgc2Vjb25kT3B0aW9ucz17c2Vjb25kT3B0aW9uc31cbiAgICAgICAgICBkaXNhYmxlZEhvdXJzPXtkaXNhYmxlZEhvdXJzfVxuICAgICAgICAgIGRpc2FibGVkTWludXRlcz17ZGlzYWJsZWRNaW51dGVzfVxuICAgICAgICAgIGRpc2FibGVkU2Vjb25kcz17ZGlzYWJsZWRTZWNvbmRzfVxuICAgICAgICAgIG9uQ3VycmVudFNlbGVjdFBhbmVsQ2hhbmdlPXt0aGlzLm9uQ3VycmVudFNlbGVjdFBhbmVsQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBQYW5lbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgY3JlYXRlUmVhY3RDbGFzcyBmcm9tIFwiY3JlYXRlLXJlYWN0LWNsYXNzXCI7XG5cbmNvbnN0IEhlYWRlciA9IGNyZWF0ZVJlYWN0Q2xhc3Moe1xuICBwcm9wVHlwZXM6IHtcbiAgICBmb3JtYXQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRpc2FibGVkRGF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY2xlYXJUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGhvdXJPcHRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgbWludXRlT3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICAgIHNlY29uZE9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBkaXNhYmxlZEhvdXJzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBkaXNhYmxlZE1pbnV0ZXM6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkU2Vjb25kczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQ2xlYXI6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uRXNjOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBhbGxvd0VtcHR5OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkZWZhdWx0T3BlblZhbHVlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGN1cnJlbnRTZWxlY3RQYW5lbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgfSxcblxuICBnZXRJbml0aWFsU3RhdGUoKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgZm9ybWF0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiB7XG4gICAgICBzdHI6IHZhbHVlICYmIHZhbHVlLmZvcm1hdChmb3JtYXQpIHx8ICcnLFxuICAgICAgaW52YWxpZDogZmFsc2UsXG4gICAgfTtcbiAgfSxcblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgIGNvbnN0IHsgdmFsdWUsIGZvcm1hdCB9ID0gbmV4dFByb3BzO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3RyOiB2YWx1ZSAmJiB2YWx1ZS5mb3JtYXQoZm9ybWF0KSB8fCAnJyxcbiAgICAgIGludmFsaWQ6IGZhbHNlLFxuICAgIH0pO1xuICB9LFxuXG4gIG9uSW5wdXRDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCBzdHIgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdHIsXG4gICAgfSk7XG4gICAgY29uc3Qge1xuICAgICAgZm9ybWF0LCBob3VyT3B0aW9ucywgbWludXRlT3B0aW9ucywgc2Vjb25kT3B0aW9ucyxcbiAgICAgIGRpc2FibGVkSG91cnMsIGRpc2FibGVkTWludXRlcyxcbiAgICAgIGRpc2FibGVkU2Vjb25kcywgb25DaGFuZ2UsIGFsbG93RW1wdHksXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoc3RyKSB7XG4gICAgICBjb25zdCBvcmlnaW5hbFZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZTtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRQcm90b1ZhbHVlKCkuY2xvbmUoKTtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IG1vbWVudChzdHIsIGZvcm1hdCwgdHJ1ZSk7XG4gICAgICBpZiAoIXBhcnNlZC5pc1ZhbGlkKCkpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgaW52YWxpZDogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhbHVlLmhvdXIocGFyc2VkLmhvdXIoKSkubWludXRlKHBhcnNlZC5taW51dGUoKSkuc2Vjb25kKHBhcnNlZC5zZWNvbmQoKSk7XG5cbiAgICAgIC8vIGlmIHRpbWUgdmFsdWUgbm90IGFsbG93ZWQsIHJlc3BvbnNlIHdhcm5pbmcuXG4gICAgICBpZiAoXG4gICAgICAgIGhvdXJPcHRpb25zLmluZGV4T2YodmFsdWUuaG91cigpKSA8IDAgfHxcbiAgICAgICAgbWludXRlT3B0aW9ucy5pbmRleE9mKHZhbHVlLm1pbnV0ZSgpKSA8IDAgfHxcbiAgICAgICAgc2Vjb25kT3B0aW9ucy5pbmRleE9mKHZhbHVlLnNlY29uZCgpKSA8IDBcbiAgICAgICkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBpbnZhbGlkOiB0cnVlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiB0aW1lIHZhbHVlIGlzIGRpc2FibGVkLCByZXNwb25zZSB3YXJuaW5nLlxuICAgICAgY29uc3QgZGlzYWJsZWRIb3VyT3B0aW9ucyA9IGRpc2FibGVkSG91cnMoKTtcbiAgICAgIGNvbnN0IGRpc2FibGVkTWludXRlT3B0aW9ucyA9IGRpc2FibGVkTWludXRlcyh2YWx1ZS5ob3VyKCkpO1xuICAgICAgY29uc3QgZGlzYWJsZWRTZWNvbmRPcHRpb25zID0gZGlzYWJsZWRTZWNvbmRzKHZhbHVlLmhvdXIoKSwgdmFsdWUubWludXRlKCkpO1xuICAgICAgaWYgKFxuICAgICAgICAoZGlzYWJsZWRIb3VyT3B0aW9ucyAmJiBkaXNhYmxlZEhvdXJPcHRpb25zLmluZGV4T2YodmFsdWUuaG91cigpKSA+PSAwKSB8fFxuICAgICAgICAoZGlzYWJsZWRNaW51dGVPcHRpb25zICYmIGRpc2FibGVkTWludXRlT3B0aW9ucy5pbmRleE9mKHZhbHVlLm1pbnV0ZSgpKSA+PSAwKSB8fFxuICAgICAgICAoZGlzYWJsZWRTZWNvbmRPcHRpb25zICYmIGRpc2FibGVkU2Vjb25kT3B0aW9ucy5pbmRleE9mKHZhbHVlLnNlY29uZCgpKSA+PSAwKVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGludmFsaWQ6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChvcmlnaW5hbFZhbHVlKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBvcmlnaW5hbFZhbHVlLmhvdXIoKSAhPT0gdmFsdWUuaG91cigpIHx8XG4gICAgICAgICAgb3JpZ2luYWxWYWx1ZS5taW51dGUoKSAhPT0gdmFsdWUubWludXRlKCkgfHxcbiAgICAgICAgICBvcmlnaW5hbFZhbHVlLnNlY29uZCgpICE9PSB2YWx1ZS5zZWNvbmQoKVxuICAgICAgICApIHtcbiAgICAgICAgICAvLyBrZWVwIG90aGVyIGZpZWxkcyBmb3IgcmMtY2FsZW5kYXJcbiAgICAgICAgICBjb25zdCBjaGFuZ2VkVmFsdWUgPSBvcmlnaW5hbFZhbHVlLmNsb25lKCk7XG4gICAgICAgICAgY2hhbmdlZFZhbHVlLmhvdXIodmFsdWUuaG91cigpKTtcbiAgICAgICAgICBjaGFuZ2VkVmFsdWUubWludXRlKHZhbHVlLm1pbnV0ZSgpKTtcbiAgICAgICAgICBjaGFuZ2VkVmFsdWUuc2Vjb25kKHZhbHVlLnNlY29uZCgpKTtcbiAgICAgICAgICBvbkNoYW5nZShjaGFuZ2VkVmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG9yaWdpbmFsVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIG9uQ2hhbmdlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFsbG93RW1wdHkpIHtcbiAgICAgIG9uQ2hhbmdlKG51bGwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaW52YWxpZDogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaW52YWxpZDogZmFsc2UsXG4gICAgfSk7XG4gIH0sXG5cbiAgb25LZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgdGhpcy5wcm9wcy5vbkVzYygpO1xuICAgIH1cbiAgfSxcblxuICBvbkNsZWFyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdHI6ICcnIH0pO1xuICAgIHRoaXMucHJvcHMub25DbGVhcigpO1xuICB9LFxuXG4gIGdldENsZWFyQnV0dG9uKCkge1xuICAgIGNvbnN0IHsgcHJlZml4Q2xzLCBhbGxvd0VtcHR5IH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghYWxsb3dFbXB0eSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiAoPGFcbiAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4Q2xzfS1jbGVhci1idG5gfVxuICAgICAgcm9sZT1cImJ1dHRvblwiXG4gICAgICB0aXRsZT17dGhpcy5wcm9wcy5jbGVhclRleHR9XG4gICAgICBvbk1vdXNlRG93bj17dGhpcy5vbkNsZWFyfVxuICAgIC8+KTtcbiAgfSxcblxuICBnZXRQcm90b1ZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLnZhbHVlIHx8IHRoaXMucHJvcHMuZGVmYXVsdE9wZW5WYWx1ZTtcbiAgfSxcblxuICBnZXRJbnB1dCgpIHtcbiAgICBjb25zdCB7IHByZWZpeENscywgcGxhY2Vob2xkZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBpbnZhbGlkLCBzdHIgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgaW52YWxpZENsYXNzID0gaW52YWxpZCA/IGAke3ByZWZpeENsc30taW5wdXQtaW52YWxpZGAgOiAnJztcbiAgICByZXR1cm4gKDxpbnB1dFxuICAgICAgY2xhc3NOYW1lPXtgJHtwcmVmaXhDbHN9LWlucHV0ICAke2ludmFsaWRDbGFzc31gfVxuICAgICAgcmVmPVwiaW5wdXRcIlxuICAgICAgb25LZXlEb3duPXt0aGlzLm9uS2V5RG93bn1cbiAgICAgIHZhbHVlPXtzdHJ9XG4gICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICBvbkNoYW5nZT17dGhpcy5vbklucHV0Q2hhbmdlfVxuICAgIC8+KTtcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwcmVmaXhDbHMgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtwcmVmaXhDbHN9LWlucHV0LXdyYXBgfT5cbiAgICAgICAge3RoaXMuZ2V0SW5wdXQoKX1cbiAgICAgICAge3RoaXMuZ2V0Q2xlYXJCdXR0b24oKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9TZWxlY3QnO1xuaW1wb3J0IGNyZWF0ZVJlYWN0Q2xhc3MgZnJvbSBcImNyZWF0ZS1yZWFjdC1jbGFzc1wiO1xuXG5jb25zdCBwYWQgPSB2YWx1ZSA9PiB2YWx1ZSA8IDEwID8gYDAke3ZhbHVlfWAgOiBgJHt2YWx1ZX1gO1xuXG5jb25zdCBmb3JtYXRPcHRpb24gPSAob3B0aW9uLCBkaXNhYmxlZE9wdGlvbnMpID0+IHtcbiAgY29uc3QgdmFsdWUgPSBwYWQob3B0aW9uKTtcblxuICBsZXQgZGlzYWJsZWQgPSBmYWxzZTtcbiAgaWYgKGRpc2FibGVkT3B0aW9ucyAmJiBkaXNhYmxlZE9wdGlvbnMuaW5kZXhPZihvcHRpb24pID49IDApIHtcbiAgICBkaXNhYmxlZCA9IHRydWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHZhbHVlLFxuICAgIGRpc2FibGVkLFxuICB9O1xufTtcblxuY29uc3QgQ29tYm9ib3ggPSBjcmVhdGVSZWFjdENsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgZm9ybWF0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlZmF1bHRPcGVuVmFsdWU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHZhbHVlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBzaG93SG91cjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hvd1NlY29uZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgaG91ck9wdGlvbnM6IFByb3BUeXBlcy5hcnJheSxcbiAgICBtaW51dGVPcHRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgc2Vjb25kT3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICAgIGRpc2FibGVkSG91cnM6IFByb3BUeXBlcy5mdW5jLFxuICAgIGRpc2FibGVkTWludXRlczogUHJvcFR5cGVzLmZ1bmMsXG4gICAgZGlzYWJsZWRTZWNvbmRzOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbkN1cnJlbnRTZWxlY3RQYW5lbENoYW5nZTogUHJvcFR5cGVzLmZ1bmNcbiAgfSxcblxuICBvbkl0ZW1DaGFuZ2UodHlwZSwgaXRlbVZhbHVlKSB7XG4gICAgY29uc3QgeyBvbkNoYW5nZSwgZGVmYXVsdE9wZW5WYWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB2YWx1ZSA9ICh0aGlzLnByb3BzLnZhbHVlIHx8IGRlZmF1bHRPcGVuVmFsdWUpLmNsb25lKCk7XG5cbiAgICBpZiAodHlwZSA9PT0gJ2hvdXInKSB7XG4gICAgICB2YWx1ZS5ob3VyKGl0ZW1WYWx1ZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnbWludXRlJykge1xuICAgICAgdmFsdWUubWludXRlKGl0ZW1WYWx1ZSk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnc2Vjb25kJykge1xuICAgICAgdmFsdWUuc2Vjb25kKGl0ZW1WYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFjdHVhbFBlcmlvZCA9IHZhbHVlLmZvcm1hdCgnQScpO1xuXG4gICAgICBpZiAoYWN0dWFsUGVyaW9kICE9PSBpdGVtVmFsdWUpIHtcbiAgICAgICAgY29uc3QgaG91cjI0c3R5bGUgPSB2YWx1ZS5ob3VyKCk7XG4gICAgICAgIGNvbnN0IGhvdXIxMnN0eWxlID0gaG91cjI0c3R5bGUgPCAxMiA/IGhvdXIyNHN0eWxlIDogaG91cjI0c3R5bGUgLSAxMjtcblxuICAgICAgICBpZiAoaXRlbVZhbHVlID09PSAnUE0nKSB7XG4gICAgICAgICAgICB2YWx1ZS5ob3VyKGhvdXIxMnN0eWxlICsgMTIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUuaG91cihob3VyMTJzdHlsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSk7XG4gIH0sXG5cbiAgb25FbnRlclNlbGVjdFBhbmVsKHJhbmdlKSB7XG4gICAgdGhpcy5wcm9wcy5vbkN1cnJlbnRTZWxlY3RQYW5lbENoYW5nZShyYW5nZSk7XG4gIH0sXG5cbiAgZ2V0SG91clNlbGVjdChob3VyKSB7XG4gICAgY29uc3QgeyBwcmVmaXhDbHMsIHNob3dBTVBNLCBkaXNhYmxlZEhvdXJzLCBzaG93SG91ciB9ID0gdGhpcy5wcm9wcztcbiAgICBpZiAoIXNob3dIb3VyKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNhYmxlZE9wdGlvbnMgPSBkaXNhYmxlZEhvdXJzKCk7XG4gICAgbGV0IGhvdXJPcHRpb25zID0gdGhpcy5wcm9wcy5ob3VyT3B0aW9ucztcbiAgICBsZXQgZm9ybWF0dGVkT3B0aW9ucyA9IGhvdXJPcHRpb25zLm1hcChvcHRpb24gPT4gZm9ybWF0T3B0aW9uKG9wdGlvbiwgZGlzYWJsZWRPcHRpb25zKSk7XG5cbiAgICBpZiAoc2hvd0FNUE0pIHtcbiAgICAgIGhvdXJPcHRpb25zID0gaG91ck9wdGlvbnMuZmlsdGVyKHZhbHVlID0+IGhvdXIgPCAxMiA/IHZhbHVlIDwgMTIgOiB2YWx1ZSA+PSAxMik7XG4gICAgICBmb3JtYXR0ZWRPcHRpb25zID0gZm9ybWF0dGVkT3B0aW9uc1xuICAgICAgICAubWFwKFxuICAgICAgICAgIG9wdGlvbiA9PiAoe1xuICAgICAgICAgICAgLi4ub3B0aW9uLFxuICAgICAgICAgICAgbGFiZWw6IG9wdGlvbi52YWx1ZSA8PSAxMiA/IG9wdGlvbi52YWx1ZSA6IHBhZChvcHRpb24udmFsdWUgLSAxMilcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIC5maWx0ZXIoKHt2YWx1ZX0pID0+IGhvdXIgPCAxMiA/IE51bWJlcih2YWx1ZSkgPCAxMiA6IE51bWJlcih2YWx1ZSkgPj0gMTIpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3RcbiAgICAgICAgcHJlZml4Q2xzPXtwcmVmaXhDbHN9XG4gICAgICAgIG9wdGlvbnM9e2Zvcm1hdHRlZE9wdGlvbnN9XG4gICAgICAgIHNlbGVjdGVkSW5kZXg9e2hvdXJPcHRpb25zLmluZGV4T2YoaG91cil9XG4gICAgICAgIHR5cGU9XCJob3VyXCJcbiAgICAgICAgb25TZWxlY3Q9e3RoaXMub25JdGVtQ2hhbmdlfVxuICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMub25FbnRlclNlbGVjdFBhbmVsLmJpbmQodGhpcywgJ2hvdXInKX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfSxcblxuICBnZXRNaW51dGVTZWxlY3QobWludXRlKSB7XG4gICAgY29uc3QgeyBwcmVmaXhDbHMsIG1pbnV0ZU9wdGlvbnMsIGRpc2FibGVkTWludXRlcywgZGVmYXVsdE9wZW5WYWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgfHwgZGVmYXVsdE9wZW5WYWx1ZTtcbiAgICBjb25zdCBkaXNhYmxlZE9wdGlvbnMgPSBkaXNhYmxlZE1pbnV0ZXModmFsdWUuaG91cigpKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U2VsZWN0XG4gICAgICAgIHByZWZpeENscz17cHJlZml4Q2xzfVxuICAgICAgICBvcHRpb25zPXttaW51dGVPcHRpb25zLm1hcChvcHRpb24gPT4gZm9ybWF0T3B0aW9uKG9wdGlvbiwgZGlzYWJsZWRPcHRpb25zKSl9XG4gICAgICAgIHNlbGVjdGVkSW5kZXg9e21pbnV0ZU9wdGlvbnMuaW5kZXhPZihtaW51dGUpfVxuICAgICAgICB0eXBlPVwibWludXRlXCJcbiAgICAgICAgb25TZWxlY3Q9e3RoaXMub25JdGVtQ2hhbmdlfVxuICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMub25FbnRlclNlbGVjdFBhbmVsLmJpbmQodGhpcywgJ21pbnV0ZScpfVxuICAgICAgLz5cbiAgICApO1xuICB9LFxuXG4gIGdldFNlY29uZFNlbGVjdChzZWNvbmQpIHtcbiAgICBjb25zdCB7IHByZWZpeENscywgc2Vjb25kT3B0aW9ucywgZGlzYWJsZWRTZWNvbmRzLCBzaG93U2Vjb25kLCBkZWZhdWx0T3BlblZhbHVlIH0gPSB0aGlzLnByb3BzO1xuICAgIGlmICghc2hvd1NlY29uZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZSB8fCBkZWZhdWx0T3BlblZhbHVlO1xuICAgIGNvbnN0IGRpc2FibGVkT3B0aW9ucyA9IGRpc2FibGVkU2Vjb25kcyh2YWx1ZS5ob3VyKCksIHZhbHVlLm1pbnV0ZSgpKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8U2VsZWN0XG4gICAgICAgIHByZWZpeENscz17cHJlZml4Q2xzfVxuICAgICAgICBvcHRpb25zPXtzZWNvbmRPcHRpb25zLm1hcChvcHRpb24gPT4gZm9ybWF0T3B0aW9uKG9wdGlvbiwgZGlzYWJsZWRPcHRpb25zKSl9XG4gICAgICAgIHNlbGVjdGVkSW5kZXg9e3NlY29uZE9wdGlvbnMuaW5kZXhPZihzZWNvbmQpfVxuICAgICAgICB0eXBlPVwic2Vjb25kXCJcbiAgICAgICAgb25TZWxlY3Q9e3RoaXMub25JdGVtQ2hhbmdlfVxuICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMub25FbnRlclNlbGVjdFBhbmVsLmJpbmQodGhpcywgJ3NlY29uZCcpfVxuICAgICAgLz5cbiAgICApO1xuICB9LFxuXG4gIGdldEFNUE1TZWxlY3QocGVyaW9kKSB7XG4gICAgY29uc3QgeyBwcmVmaXhDbHMsIHNob3dBTVBNLCBkZWZhdWx0T3BlblZhbHVlLH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFzaG93QU1QTSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3Qgb3B0aW9ucyA9IFtcbiAgICAgIHt2YWx1ZTogJ0FNJywgbGFiZWw6ICdBTSd9LFxuICAgICAge3ZhbHVlOiAnUE0nLCBsYWJlbDogJ1BNJ31cbiAgICBdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxTZWxlY3RcbiAgICAgICAgcHJlZml4Q2xzPXtwcmVmaXhDbHN9XG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAgIHNlbGVjdGVkSW5kZXg9e3BlcmlvZCA9PT0gJ0FNJyA/IDAgOiAxfVxuICAgICAgICB0eXBlPVwicGVyaW9kXCJcbiAgICAgICAgb25TZWxlY3Q9e3RoaXMub25JdGVtQ2hhbmdlfVxuICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMub25FbnRlclNlbGVjdFBhbmVsLmJpbmQodGhpcywgJ3BlcmlvZCcpfVxuICAgICAgLz5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHByZWZpeENscywgZGVmYXVsdE9wZW5WYWx1ZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUgfHwgZGVmYXVsdE9wZW5WYWx1ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3ByZWZpeENsc30tY29tYm9ib3hgfT5cbiAgICAgICAge3RoaXMuZ2V0SG91clNlbGVjdCh2YWx1ZS5ob3VyKCkpfVxuICAgICAgICB7dGhpcy5nZXRNaW51dGVTZWxlY3QodmFsdWUubWludXRlKCkpfVxuICAgICAgICB7dGhpcy5nZXRTZWNvbmRTZWxlY3QodmFsdWUuc2Vjb25kKCkpfVxuICAgICAgICB7dGhpcy5nZXRBTVBNU2VsZWN0KHZhbHVlLmhvdXIoKSA8IDEyID8gJ0FNJyA6ICdQTScpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBDb21ib2JveDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IGNyZWF0ZVJlYWN0Q2xhc3MgZnJvbSBcImNyZWF0ZS1yZWFjdC1jbGFzc1wiO1xuXG5jb25zdCBzY3JvbGxUbyA9IChlbGVtZW50LCB0bywgZHVyYXRpb24pID0+IHtcbiAgY29uc3QgcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIGZ1bmN0aW9uIHJlcXVlc3RBbmltYXRpb25GcmFtZVRpbWVvdXQoKSB7XG4gICAgICByZXR1cm4gc2V0VGltZW91dChhcmd1bWVudHNbMF0sIDEwKTtcbiAgICB9O1xuICAvLyBqdW1wIHRvIHRhcmdldCBpZiBkdXJhdGlvbiB6ZXJvXG4gIGlmIChkdXJhdGlvbiA8PSAwKSB7XG4gICAgZWxlbWVudC5zY3JvbGxUb3AgPSB0bztcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZGlmZmVyZW5jZSA9IHRvIC0gZWxlbWVudC5zY3JvbGxUb3A7XG4gIGNvbnN0IHBlclRpY2sgPSBkaWZmZXJlbmNlIC8gZHVyYXRpb24gKiAxMDtcblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxUb3AgKyBwZXJUaWNrO1xuICAgIGlmIChlbGVtZW50LnNjcm9sbFRvcCA9PT0gdG8pIHJldHVybjtcbiAgICBzY3JvbGxUbyhlbGVtZW50LCB0bywgZHVyYXRpb24gLSAxMCk7XG4gIH0pO1xufTtcblxuY29uc3QgU2VsZWN0ID0gY3JlYXRlUmVhY3RDbGFzcyh7XG4gIHByb3BUeXBlczoge1xuICAgIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvcHRpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gICAgc2VsZWN0ZWRJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgICB0eXBlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uU2VsZWN0OiBQcm9wVHlwZXMuZnVuYyxcbiAgICBvbk1vdXNlRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuICB9LFxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vIGp1bXAgdG8gc2VsZWN0ZWQgb3B0aW9uXG4gICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKDApO1xuICB9LFxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAvLyBzbW9vdGggc2Nyb2xsIHRvIHNlbGVjdGVkIG9wdGlvblxuICAgIGlmIChwcmV2UHJvcHMuc2VsZWN0ZWRJbmRleCAhPT0gdGhpcy5wcm9wcy5zZWxlY3RlZEluZGV4KSB7XG4gICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQoMTIwKTtcbiAgICB9XG4gIH0sXG5cbiAgb25TZWxlY3QodmFsdWUpIHtcbiAgICBjb25zdCB7IG9uU2VsZWN0LCB0eXBlIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uU2VsZWN0KHR5cGUsIHZhbHVlKTtcbiAgfSxcblxuICBnZXRPcHRpb25zKCkge1xuICAgIGNvbnN0IHsgb3B0aW9ucywgc2VsZWN0ZWRJbmRleCwgcHJlZml4Q2xzIH0gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiBvcHRpb25zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGNscyA9IGNsYXNzbmFtZXMoe1xuICAgICAgICBbYCR7cHJlZml4Q2xzfS1zZWxlY3Qtb3B0aW9uLXNlbGVjdGVkYF06IHNlbGVjdGVkSW5kZXggPT09IGluZGV4LFxuICAgICAgICBbYCR7cHJlZml4Q2xzfS1zZWxlY3Qtb3B0aW9uLWRpc2FibGVkYF06IGl0ZW0uZGlzYWJsZWQsXG4gICAgICB9KTtcbiAgICAgIGxldCBvbmNsaWNrID0gbnVsbDtcbiAgICAgIGlmICghaXRlbS5kaXNhYmxlZCkge1xuICAgICAgICBsZXQgdmFsdWUgPSAraXRlbS52YWx1ZTtcbiAgICAgICAgaWYgKE51bWJlci5pc05hTih2YWx1ZSkpIHtcbiAgICAgICAgICB2YWx1ZSA9IGl0ZW0udmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgb25jbGljayA9IHRoaXMub25TZWxlY3QuYmluZCh0aGlzLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoPGxpXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzfVxuICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICBvbkNsaWNrPXtvbmNsaWNrfVxuICAgICAgICBkaXNhYmxlZD17aXRlbS5kaXNhYmxlZH1cbiAgICAgID5cbiAgICAgICAge3R5cGVvZiBpdGVtLmxhYmVsICE9PSAndW5kZWZpbmVkJyA/IGl0ZW0ubGFiZWwgOiBpdGVtLnZhbHVlfVxuICAgICAgPC9saT4pO1xuICAgIH0pO1xuICB9LFxuXG4gIHNjcm9sbFRvU2VsZWN0ZWQoZHVyYXRpb24pIHtcbiAgICAvLyBtb3ZlIHRvIHNlbGVjdGVkIGl0ZW1cbiAgICBjb25zdCBzZWxlY3QgPSBSZWFjdERvbS5maW5kRE9NTm9kZSh0aGlzKTtcbiAgICBjb25zdCBsaXN0ID0gUmVhY3REb20uZmluZERPTU5vZGUodGhpcy5yZWZzLmxpc3QpO1xuICAgIGxldCBpbmRleCA9IHRoaXMucHJvcHMuc2VsZWN0ZWRJbmRleDtcbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICBpbmRleCA9IDA7XG4gICAgfVxuICAgIGNvbnN0IHRvcE9wdGlvbiA9IGxpc3QuY2hpbGRyZW5baW5kZXhdO1xuICAgIGNvbnN0IHRvID0gdG9wT3B0aW9uLm9mZnNldFRvcDtcbiAgICBzY3JvbGxUbyhzZWxlY3QsIHRvLCBkdXJhdGlvbik7XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnByb3BzLm9wdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB7IHByZWZpeENscyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YCR7cHJlZml4Q2xzfS1zZWxlY3RgfVxuICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMucHJvcHMub25Nb3VzZUVudGVyfVxuICAgICAgPlxuICAgICAgICA8dWwgcmVmPVwibGlzdFwiPnt0aGlzLmdldE9wdGlvbnMoKX08L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3Q7XG4iLCJjb25zdCBhdXRvQWRqdXN0T3ZlcmZsb3cgPSB7XG4gIGFkanVzdFg6IDEsXG4gIGFkanVzdFk6IDEsXG59O1xuXG5jb25zdCB0YXJnZXRPZmZzZXQgPSBbMCwgMF07XG5cbmNvbnN0IHBsYWNlbWVudHMgPSB7XG4gIGJvdHRvbUxlZnQ6IHtcbiAgICBwb2ludHM6IFsndGwnLCAndGwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIC0zXSxcbiAgICB0YXJnZXRPZmZzZXQsXG4gIH0sXG4gIGJvdHRvbVJpZ2h0OiB7XG4gICAgcG9pbnRzOiBbJ3RyJywgJ3RyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtM10sXG4gICAgdGFyZ2V0T2Zmc2V0LFxuICB9LFxuICB0b3BSaWdodDoge1xuICAgIHBvaW50czogWydicicsICdiciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgM10sXG4gICAgdGFyZ2V0T2Zmc2V0LFxuICB9LFxuICB0b3BMZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ2JsJywgJ2JsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAzXSxcbiAgICB0YXJnZXRPZmZzZXQsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBwbGFjZW1lbnRzO1xuIiwidmFyIG1vbWVudCA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vbW9tZW50LXRpbWV6b25lXCIpO1xubW9tZW50LnR6LmxvYWQocmVxdWlyZSgnLi9kYXRhL3BhY2tlZC9sYXRlc3QuanNvbicpKTtcbiIsIi8vISBtb21lbnQtdGltZXpvbmUuanNcbi8vISB2ZXJzaW9uIDogMC41LjIxXG4vLyEgQ29weXJpZ2h0IChjKSBKUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbi8vISBsaWNlbnNlIDogTUlUXG4vLyEgZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50LXRpbWV6b25lXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHQvKmdsb2JhbCBkZWZpbmUqL1xuXHRpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnbW9tZW50JykpOyAvLyBOb2RlXG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKFsnbW9tZW50J10sIGZhY3RvcnkpOyAgICAgICAgICAgICAgICAgLy8gQU1EXG5cdH0gZWxzZSB7XG5cdFx0ZmFjdG9yeShyb290Lm1vbWVudCk7ICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnJvd3NlclxuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChtb21lbnQpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0Ly8gRG8gbm90IGxvYWQgbW9tZW50LXRpbWV6b25lIGEgc2Vjb25kIHRpbWUuXG5cdC8vIGlmIChtb21lbnQudHogIT09IHVuZGVmaW5lZCkge1xuXHQvLyBcdGxvZ0Vycm9yKCdNb21lbnQgVGltZXpvbmUgJyArIG1vbWVudC50ei52ZXJzaW9uICsgJyB3YXMgYWxyZWFkeSBsb2FkZWQgJyArIChtb21lbnQudHouZGF0YVZlcnNpb24gPyAnd2l0aCBkYXRhIGZyb20gJyA6ICd3aXRob3V0IGFueSBkYXRhJykgKyBtb21lbnQudHouZGF0YVZlcnNpb24pO1xuXHQvLyBcdHJldHVybiBtb21lbnQ7XG5cdC8vIH1cblxuXHR2YXIgVkVSU0lPTiA9IFwiMC41LjIxXCIsXG5cdFx0em9uZXMgPSB7fSxcblx0XHRsaW5rcyA9IHt9LFxuXHRcdG5hbWVzID0ge30sXG5cdFx0Z3Vlc3NlcyA9IHt9LFxuXHRcdGNhY2hlZEd1ZXNzO1xuXG5cdGlmICghbW9tZW50IHx8IHR5cGVvZiBtb21lbnQudmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcblx0XHRsb2dFcnJvcignTW9tZW50IFRpbWV6b25lIHJlcXVpcmVzIE1vbWVudC5qcy4gU2VlIGh0dHBzOi8vbW9tZW50anMuY29tL3RpbWV6b25lL2RvY3MvIy91c2UtaXQvYnJvd3Nlci8nKTtcblx0fVxuXG5cdHZhciBtb21lbnRWZXJzaW9uID0gbW9tZW50LnZlcnNpb24uc3BsaXQoJy4nKSxcblx0XHRtYWpvciA9ICttb21lbnRWZXJzaW9uWzBdLFxuXHRcdG1pbm9yID0gK21vbWVudFZlcnNpb25bMV07XG5cblx0Ly8gTW9tZW50LmpzIHZlcnNpb24gY2hlY2tcblx0aWYgKG1ham9yIDwgMiB8fCAobWFqb3IgPT09IDIgJiYgbWlub3IgPCA2KSkge1xuXHRcdGxvZ0Vycm9yKCdNb21lbnQgVGltZXpvbmUgcmVxdWlyZXMgTW9tZW50LmpzID49IDIuNi4wLiBZb3UgYXJlIHVzaW5nIE1vbWVudC5qcyAnICsgbW9tZW50LnZlcnNpb24gKyAnLiBTZWUgbW9tZW50anMuY29tJyk7XG5cdH1cblxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0VW5wYWNraW5nXG5cdCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRmdW5jdGlvbiBjaGFyQ29kZVRvSW50KGNoYXJDb2RlKSB7XG5cdFx0aWYgKGNoYXJDb2RlID4gOTYpIHtcblx0XHRcdHJldHVybiBjaGFyQ29kZSAtIDg3O1xuXHRcdH0gZWxzZSBpZiAoY2hhckNvZGUgPiA2NCkge1xuXHRcdFx0cmV0dXJuIGNoYXJDb2RlIC0gMjk7XG5cdFx0fVxuXHRcdHJldHVybiBjaGFyQ29kZSAtIDQ4O1xuXHR9XG5cblx0ZnVuY3Rpb24gdW5wYWNrQmFzZTYwKHN0cmluZykge1xuXHRcdHZhciBpID0gMCxcblx0XHRcdHBhcnRzID0gc3RyaW5nLnNwbGl0KCcuJyksXG5cdFx0XHR3aG9sZSA9IHBhcnRzWzBdLFxuXHRcdFx0ZnJhY3Rpb25hbCA9IHBhcnRzWzFdIHx8ICcnLFxuXHRcdFx0bXVsdGlwbGllciA9IDEsXG5cdFx0XHRudW0sXG5cdFx0XHRvdXQgPSAwLFxuXHRcdFx0c2lnbiA9IDE7XG5cblx0XHQvLyBoYW5kbGUgbmVnYXRpdmUgbnVtYmVyc1xuXHRcdGlmIChzdHJpbmcuY2hhckNvZGVBdCgwKSA9PT0gNDUpIHtcblx0XHRcdGkgPSAxO1xuXHRcdFx0c2lnbiA9IC0xO1xuXHRcdH1cblxuXHRcdC8vIGhhbmRsZSBkaWdpdHMgYmVmb3JlIHRoZSBkZWNpbWFsXG5cdFx0Zm9yIChpOyBpIDwgd2hvbGUubGVuZ3RoOyBpKyspIHtcblx0XHRcdG51bSA9IGNoYXJDb2RlVG9JbnQod2hvbGUuY2hhckNvZGVBdChpKSk7XG5cdFx0XHRvdXQgPSA2MCAqIG91dCArIG51bTtcblx0XHR9XG5cblx0XHQvLyBoYW5kbGUgZGlnaXRzIGFmdGVyIHRoZSBkZWNpbWFsXG5cdFx0Zm9yIChpID0gMDsgaSA8IGZyYWN0aW9uYWwubGVuZ3RoOyBpKyspIHtcblx0XHRcdG11bHRpcGxpZXIgPSBtdWx0aXBsaWVyIC8gNjA7XG5cdFx0XHRudW0gPSBjaGFyQ29kZVRvSW50KGZyYWN0aW9uYWwuY2hhckNvZGVBdChpKSk7XG5cdFx0XHRvdXQgKz0gbnVtICogbXVsdGlwbGllcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0ICogc2lnbjtcblx0fVxuXG5cdGZ1bmN0aW9uIGFycmF5VG9JbnQgKGFycmF5KSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0YXJyYXlbaV0gPSB1bnBhY2tCYXNlNjAoYXJyYXlbaV0pO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGludFRvVW50aWwgKGFycmF5LCBsZW5ndGgpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHRhcnJheVtpXSA9IE1hdGgucm91bmQoKGFycmF5W2kgLSAxXSB8fCAwKSArIChhcnJheVtpXSAqIDYwMDAwKSk7IC8vIG1pbnV0ZXMgdG8gbWlsbGlzZWNvbmRzXG5cdFx0fVxuXG5cdFx0YXJyYXlbbGVuZ3RoIC0gMV0gPSBJbmZpbml0eTtcblx0fVxuXG5cdGZ1bmN0aW9uIG1hcEluZGljZXMgKHNvdXJjZSwgaW5kaWNlcykge1xuXHRcdHZhciBvdXQgPSBbXSwgaTtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCBpbmRpY2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRvdXRbaV0gPSBzb3VyY2VbaW5kaWNlc1tpXV07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG91dDtcblx0fVxuXG5cdGZ1bmN0aW9uIHVucGFjayAoc3RyaW5nKSB7XG5cdFx0dmFyIGRhdGEgPSBzdHJpbmcuc3BsaXQoJ3wnKSxcblx0XHRcdG9mZnNldHMgPSBkYXRhWzJdLnNwbGl0KCcgJyksXG5cdFx0XHRpbmRpY2VzID0gZGF0YVszXS5zcGxpdCgnJyksXG5cdFx0XHR1bnRpbHMgID0gZGF0YVs0XS5zcGxpdCgnICcpO1xuXG5cdFx0YXJyYXlUb0ludChvZmZzZXRzKTtcblx0XHRhcnJheVRvSW50KGluZGljZXMpO1xuXHRcdGFycmF5VG9JbnQodW50aWxzKTtcblxuXHRcdGludFRvVW50aWwodW50aWxzLCBpbmRpY2VzLmxlbmd0aCk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0bmFtZSAgICAgICA6IGRhdGFbMF0sXG5cdFx0XHRhYmJycyAgICAgIDogbWFwSW5kaWNlcyhkYXRhWzFdLnNwbGl0KCcgJyksIGluZGljZXMpLFxuXHRcdFx0b2Zmc2V0cyAgICA6IG1hcEluZGljZXMob2Zmc2V0cywgaW5kaWNlcyksXG5cdFx0XHR1bnRpbHMgICAgIDogdW50aWxzLFxuXHRcdFx0cG9wdWxhdGlvbiA6IGRhdGFbNV0gfCAwXG5cdFx0fTtcblx0fVxuXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0XHRab25lIG9iamVjdFxuXHQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0ZnVuY3Rpb24gWm9uZSAocGFja2VkU3RyaW5nKSB7XG5cdFx0aWYgKHBhY2tlZFN0cmluZykge1xuXHRcdFx0dGhpcy5fc2V0KHVucGFjayhwYWNrZWRTdHJpbmcpKTtcblx0XHR9XG5cdH1cblxuXHRab25lLnByb3RvdHlwZSA9IHtcblx0XHRfc2V0IDogZnVuY3Rpb24gKHVucGFja2VkKSB7XG5cdFx0XHR0aGlzLm5hbWUgICAgICAgPSB1bnBhY2tlZC5uYW1lO1xuXHRcdFx0dGhpcy5hYmJycyAgICAgID0gdW5wYWNrZWQuYWJicnM7XG5cdFx0XHR0aGlzLnVudGlscyAgICAgPSB1bnBhY2tlZC51bnRpbHM7XG5cdFx0XHR0aGlzLm9mZnNldHMgICAgPSB1bnBhY2tlZC5vZmZzZXRzO1xuXHRcdFx0dGhpcy5wb3B1bGF0aW9uID0gdW5wYWNrZWQucG9wdWxhdGlvbjtcblx0XHR9LFxuXG5cdFx0X2luZGV4IDogZnVuY3Rpb24gKHRpbWVzdGFtcCkge1xuXHRcdFx0dmFyIHRhcmdldCA9ICt0aW1lc3RhbXAsXG5cdFx0XHRcdHVudGlscyA9IHRoaXMudW50aWxzLFxuXHRcdFx0XHRpO1xuXG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgdW50aWxzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmICh0YXJnZXQgPCB1bnRpbHNbaV0pIHtcblx0XHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRwYXJzZSA6IGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcblx0XHRcdHZhciB0YXJnZXQgID0gK3RpbWVzdGFtcCxcblx0XHRcdFx0b2Zmc2V0cyA9IHRoaXMub2Zmc2V0cyxcblx0XHRcdFx0dW50aWxzICA9IHRoaXMudW50aWxzLFxuXHRcdFx0XHRtYXggICAgID0gdW50aWxzLmxlbmd0aCAtIDEsXG5cdFx0XHRcdG9mZnNldCwgb2Zmc2V0TmV4dCwgb2Zmc2V0UHJldiwgaTtcblxuXHRcdFx0Zm9yIChpID0gMDsgaSA8IG1heDsgaSsrKSB7XG5cdFx0XHRcdG9mZnNldCAgICAgPSBvZmZzZXRzW2ldO1xuXHRcdFx0XHRvZmZzZXROZXh0ID0gb2Zmc2V0c1tpICsgMV07XG5cdFx0XHRcdG9mZnNldFByZXYgPSBvZmZzZXRzW2kgPyBpIC0gMSA6IGldO1xuXG5cdFx0XHRcdGlmIChvZmZzZXQgPCBvZmZzZXROZXh0ICYmIHR6Lm1vdmVBbWJpZ3VvdXNGb3J3YXJkKSB7XG5cdFx0XHRcdFx0b2Zmc2V0ID0gb2Zmc2V0TmV4dDtcblx0XHRcdFx0fSBlbHNlIGlmIChvZmZzZXQgPiBvZmZzZXRQcmV2ICYmIHR6Lm1vdmVJbnZhbGlkRm9yd2FyZCkge1xuXHRcdFx0XHRcdG9mZnNldCA9IG9mZnNldFByZXY7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodGFyZ2V0IDwgdW50aWxzW2ldIC0gKG9mZnNldCAqIDYwMDAwKSkge1xuXHRcdFx0XHRcdHJldHVybiBvZmZzZXRzW2ldO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvZmZzZXRzW21heF07XG5cdFx0fSxcblxuXHRcdGFiYnIgOiBmdW5jdGlvbiAobW9tKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5hYmJyc1t0aGlzLl9pbmRleChtb20pXTtcblx0XHR9LFxuXG5cdFx0b2Zmc2V0IDogZnVuY3Rpb24gKG1vbSkge1xuXHRcdFx0bG9nRXJyb3IoXCJ6b25lLm9mZnNldCBoYXMgYmVlbiBkZXByZWNhdGVkIGluIGZhdm9yIG9mIHpvbmUudXRjT2Zmc2V0XCIpO1xuXHRcdFx0cmV0dXJuIHRoaXMub2Zmc2V0c1t0aGlzLl9pbmRleChtb20pXTtcblx0XHR9LFxuXG5cdFx0dXRjT2Zmc2V0IDogZnVuY3Rpb24gKG1vbSkge1xuXHRcdFx0cmV0dXJuIHRoaXMub2Zmc2V0c1t0aGlzLl9pbmRleChtb20pXTtcblx0XHR9XG5cdH07XG5cblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHRcdEN1cnJlbnQgVGltZXpvbmVcblx0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdGZ1bmN0aW9uIE9mZnNldEF0KGF0KSB7XG5cdFx0dmFyIHRpbWVTdHJpbmcgPSBhdC50b1RpbWVTdHJpbmcoKTtcblx0XHR2YXIgYWJiciA9IHRpbWVTdHJpbmcubWF0Y2goL1xcKFthLXogXStcXCkvaSk7XG5cdFx0aWYgKGFiYnIgJiYgYWJiclswXSkge1xuXHRcdFx0Ly8gMTc6NTY6MzEgR01ULTA2MDAgKENTVClcblx0XHRcdC8vIDE3OjU2OjMxIEdNVC0wNjAwIChDZW50cmFsIFN0YW5kYXJkIFRpbWUpXG5cdFx0XHRhYmJyID0gYWJiclswXS5tYXRjaCgvW0EtWl0vZyk7XG5cdFx0XHRhYmJyID0gYWJiciA/IGFiYnIuam9pbignJykgOiB1bmRlZmluZWQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIDE3OjU2OjMxIENTVFxuXHRcdFx0Ly8gMTc6NTY6MzEgR01UKzA4MDAgKOWPsOWMl+aomea6luaZgumWkylcblx0XHRcdGFiYnIgPSB0aW1lU3RyaW5nLm1hdGNoKC9bQS1aXXszLDV9L2cpO1xuXHRcdFx0YWJiciA9IGFiYnIgPyBhYmJyWzBdIDogdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdGlmIChhYmJyID09PSAnR01UJykge1xuXHRcdFx0YWJiciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHR0aGlzLmF0ID0gK2F0O1xuXHRcdHRoaXMuYWJiciA9IGFiYnI7XG5cdFx0dGhpcy5vZmZzZXQgPSBhdC5nZXRUaW1lem9uZU9mZnNldCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gWm9uZVNjb3JlKHpvbmUpIHtcblx0XHR0aGlzLnpvbmUgPSB6b25lO1xuXHRcdHRoaXMub2Zmc2V0U2NvcmUgPSAwO1xuXHRcdHRoaXMuYWJiclNjb3JlID0gMDtcblx0fVxuXG5cdFpvbmVTY29yZS5wcm90b3R5cGUuc2NvcmVPZmZzZXRBdCA9IGZ1bmN0aW9uIChvZmZzZXRBdCkge1xuXHRcdHRoaXMub2Zmc2V0U2NvcmUgKz0gTWF0aC5hYnModGhpcy56b25lLnV0Y09mZnNldChvZmZzZXRBdC5hdCkgLSBvZmZzZXRBdC5vZmZzZXQpO1xuXHRcdGlmICh0aGlzLnpvbmUuYWJicihvZmZzZXRBdC5hdCkucmVwbGFjZSgvW15BLVpdL2csICcnKSAhPT0gb2Zmc2V0QXQuYWJicikge1xuXHRcdFx0dGhpcy5hYmJyU2NvcmUrKztcblx0XHR9XG5cdH07XG5cblx0ZnVuY3Rpb24gZmluZENoYW5nZShsb3csIGhpZ2gpIHtcblx0XHR2YXIgbWlkLCBkaWZmO1xuXG5cdFx0d2hpbGUgKChkaWZmID0gKChoaWdoLmF0IC0gbG93LmF0KSAvIDEyZTQgfCAwKSAqIDZlNCkpIHtcblx0XHRcdG1pZCA9IG5ldyBPZmZzZXRBdChuZXcgRGF0ZShsb3cuYXQgKyBkaWZmKSk7XG5cdFx0XHRpZiAobWlkLm9mZnNldCA9PT0gbG93Lm9mZnNldCkge1xuXHRcdFx0XHRsb3cgPSBtaWQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRoaWdoID0gbWlkO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBsb3c7XG5cdH1cblxuXHRmdW5jdGlvbiB1c2VyT2Zmc2V0cygpIHtcblx0XHR2YXIgc3RhcnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC0gMixcblx0XHRcdGxhc3QgPSBuZXcgT2Zmc2V0QXQobmV3IERhdGUoc3RhcnRZZWFyLCAwLCAxKSksXG5cdFx0XHRvZmZzZXRzID0gW2xhc3RdLFxuXHRcdFx0Y2hhbmdlLCBuZXh0LCBpO1xuXG5cdFx0Zm9yIChpID0gMTsgaSA8IDQ4OyBpKyspIHtcblx0XHRcdG5leHQgPSBuZXcgT2Zmc2V0QXQobmV3IERhdGUoc3RhcnRZZWFyLCBpLCAxKSk7XG5cdFx0XHRpZiAobmV4dC5vZmZzZXQgIT09IGxhc3Qub2Zmc2V0KSB7XG5cdFx0XHRcdGNoYW5nZSA9IGZpbmRDaGFuZ2UobGFzdCwgbmV4dCk7XG5cdFx0XHRcdG9mZnNldHMucHVzaChjaGFuZ2UpO1xuXHRcdFx0XHRvZmZzZXRzLnB1c2gobmV3IE9mZnNldEF0KG5ldyBEYXRlKGNoYW5nZS5hdCArIDZlNCkpKTtcblx0XHRcdH1cblx0XHRcdGxhc3QgPSBuZXh0O1xuXHRcdH1cblxuXHRcdGZvciAoaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0XHRcdG9mZnNldHMucHVzaChuZXcgT2Zmc2V0QXQobmV3IERhdGUoc3RhcnRZZWFyICsgaSwgMCwgMSkpKTtcblx0XHRcdG9mZnNldHMucHVzaChuZXcgT2Zmc2V0QXQobmV3IERhdGUoc3RhcnRZZWFyICsgaSwgNiwgMSkpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb2Zmc2V0cztcblx0fVxuXG5cdGZ1bmN0aW9uIHNvcnRab25lU2NvcmVzIChhLCBiKSB7XG5cdFx0aWYgKGEub2Zmc2V0U2NvcmUgIT09IGIub2Zmc2V0U2NvcmUpIHtcblx0XHRcdHJldHVybiBhLm9mZnNldFNjb3JlIC0gYi5vZmZzZXRTY29yZTtcblx0XHR9XG5cdFx0aWYgKGEuYWJiclNjb3JlICE9PSBiLmFiYnJTY29yZSkge1xuXHRcdFx0cmV0dXJuIGEuYWJiclNjb3JlIC0gYi5hYmJyU2NvcmU7XG5cdFx0fVxuXHRcdHJldHVybiBiLnpvbmUucG9wdWxhdGlvbiAtIGEuem9uZS5wb3B1bGF0aW9uO1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkVG9HdWVzc2VzIChuYW1lLCBvZmZzZXRzKSB7XG5cdFx0dmFyIGksIG9mZnNldDtcblx0XHRhcnJheVRvSW50KG9mZnNldHMpO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBvZmZzZXRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRvZmZzZXQgPSBvZmZzZXRzW2ldO1xuXHRcdFx0Z3Vlc3Nlc1tvZmZzZXRdID0gZ3Vlc3Nlc1tvZmZzZXRdIHx8IHt9O1xuXHRcdFx0Z3Vlc3Nlc1tvZmZzZXRdW25hbWVdID0gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBndWVzc2VzRm9yVXNlck9mZnNldHMgKG9mZnNldHMpIHtcblx0XHR2YXIgb2Zmc2V0c0xlbmd0aCA9IG9mZnNldHMubGVuZ3RoLFxuXHRcdFx0ZmlsdGVyZWRHdWVzc2VzID0ge30sXG5cdFx0XHRvdXQgPSBbXSxcblx0XHRcdGksIGosIGd1ZXNzZXNPZmZzZXQ7XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgb2Zmc2V0c0xlbmd0aDsgaSsrKSB7XG5cdFx0XHRndWVzc2VzT2Zmc2V0ID0gZ3Vlc3Nlc1tvZmZzZXRzW2ldLm9mZnNldF0gfHwge307XG5cdFx0XHRmb3IgKGogaW4gZ3Vlc3Nlc09mZnNldCkge1xuXHRcdFx0XHRpZiAoZ3Vlc3Nlc09mZnNldC5oYXNPd25Qcm9wZXJ0eShqKSkge1xuXHRcdFx0XHRcdGZpbHRlcmVkR3Vlc3Nlc1tqXSA9IHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGkgaW4gZmlsdGVyZWRHdWVzc2VzKSB7XG5cdFx0XHRpZiAoZmlsdGVyZWRHdWVzc2VzLmhhc093blByb3BlcnR5KGkpKSB7XG5cdFx0XHRcdG91dC5wdXNoKG5hbWVzW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0O1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVidWlsZEd1ZXNzICgpIHtcblxuXHRcdC8vIHVzZSBJbnRsIEFQSSB3aGVuIGF2YWlsYWJsZSBhbmQgcmV0dXJuaW5nIHZhbGlkIHRpbWUgem9uZVxuXHRcdHRyeSB7XG5cdFx0XHR2YXIgaW50bE5hbWUgPSBJbnRsLkRhdGVUaW1lRm9ybWF0KCkucmVzb2x2ZWRPcHRpb25zKCkudGltZVpvbmU7XG5cdFx0XHRpZiAoaW50bE5hbWUgJiYgaW50bE5hbWUubGVuZ3RoID4gMykge1xuXHRcdFx0XHR2YXIgbmFtZSA9IG5hbWVzW25vcm1hbGl6ZU5hbWUoaW50bE5hbWUpXTtcblx0XHRcdFx0aWYgKG5hbWUpIHtcblx0XHRcdFx0XHRyZXR1cm4gbmFtZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsb2dFcnJvcihcIk1vbWVudCBUaW1lem9uZSBmb3VuZCBcIiArIGludGxOYW1lICsgXCIgZnJvbSB0aGUgSW50bCBhcGksIGJ1dCBkaWQgbm90IGhhdmUgdGhhdCBkYXRhIGxvYWRlZC5cIik7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Ly8gSW50bCB1bmF2YWlsYWJsZSwgZmFsbCBiYWNrIHRvIG1hbnVhbCBndWVzc2luZy5cblx0XHR9XG5cblx0XHR2YXIgb2Zmc2V0cyA9IHVzZXJPZmZzZXRzKCksXG5cdFx0XHRvZmZzZXRzTGVuZ3RoID0gb2Zmc2V0cy5sZW5ndGgsXG5cdFx0XHRndWVzc2VzID0gZ3Vlc3Nlc0ZvclVzZXJPZmZzZXRzKG9mZnNldHMpLFxuXHRcdFx0em9uZVNjb3JlcyA9IFtdLFxuXHRcdFx0em9uZVNjb3JlLCBpLCBqO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IGd1ZXNzZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHpvbmVTY29yZSA9IG5ldyBab25lU2NvcmUoZ2V0Wm9uZShndWVzc2VzW2ldKSwgb2Zmc2V0c0xlbmd0aCk7XG5cdFx0XHRmb3IgKGogPSAwOyBqIDwgb2Zmc2V0c0xlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHpvbmVTY29yZS5zY29yZU9mZnNldEF0KG9mZnNldHNbal0pO1xuXHRcdFx0fVxuXHRcdFx0em9uZVNjb3Jlcy5wdXNoKHpvbmVTY29yZSk7XG5cdFx0fVxuXG5cdFx0em9uZVNjb3Jlcy5zb3J0KHNvcnRab25lU2NvcmVzKTtcblxuXHRcdHJldHVybiB6b25lU2NvcmVzLmxlbmd0aCA+IDAgPyB6b25lU2NvcmVzWzBdLnpvbmUubmFtZSA6IHVuZGVmaW5lZDtcblx0fVxuXG5cdGZ1bmN0aW9uIGd1ZXNzIChpZ25vcmVDYWNoZSkge1xuXHRcdGlmICghY2FjaGVkR3Vlc3MgfHwgaWdub3JlQ2FjaGUpIHtcblx0XHRcdGNhY2hlZEd1ZXNzID0gcmVidWlsZEd1ZXNzKCk7XG5cdFx0fVxuXHRcdHJldHVybiBjYWNoZWRHdWVzcztcblx0fVxuXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0XHRHbG9iYWwgTWV0aG9kc1xuXHQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0ZnVuY3Rpb24gbm9ybWFsaXplTmFtZSAobmFtZSkge1xuXHRcdHJldHVybiAobmFtZSB8fCAnJykudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXC8vZywgJ18nKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGFkZFpvbmUgKHBhY2tlZCkge1xuXHRcdHZhciBpLCBuYW1lLCBzcGxpdCwgbm9ybWFsaXplZDtcblxuXHRcdGlmICh0eXBlb2YgcGFja2VkID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRwYWNrZWQgPSBbcGFja2VkXTtcblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgcGFja2VkLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRzcGxpdCA9IHBhY2tlZFtpXS5zcGxpdCgnfCcpO1xuXHRcdFx0bmFtZSA9IHNwbGl0WzBdO1xuXHRcdFx0bm9ybWFsaXplZCA9IG5vcm1hbGl6ZU5hbWUobmFtZSk7XG5cdFx0XHR6b25lc1tub3JtYWxpemVkXSA9IHBhY2tlZFtpXTtcblx0XHRcdG5hbWVzW25vcm1hbGl6ZWRdID0gbmFtZTtcblx0XHRcdGFkZFRvR3Vlc3Nlcyhub3JtYWxpemVkLCBzcGxpdFsyXS5zcGxpdCgnICcpKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRab25lIChuYW1lLCBjYWxsZXIpIHtcblx0XHRcblx0XHRuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKTtcblxuXHRcdHZhciB6b25lID0gem9uZXNbbmFtZV07XG5cdFx0dmFyIGxpbms7XG5cblx0XHRpZiAoem9uZSBpbnN0YW5jZW9mIFpvbmUpIHtcblx0XHRcdHJldHVybiB6b25lO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2Ygem9uZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdHpvbmUgPSBuZXcgWm9uZSh6b25lKTtcblx0XHRcdHpvbmVzW25hbWVdID0gem9uZTtcblx0XHRcdHJldHVybiB6b25lO1xuXHRcdH1cblxuXHRcdC8vIFBhc3MgZ2V0Wm9uZSB0byBwcmV2ZW50IHJlY3Vyc2lvbiBtb3JlIHRoYW4gMSBsZXZlbCBkZWVwXG5cdFx0aWYgKGxpbmtzW25hbWVdICYmIGNhbGxlciAhPT0gZ2V0Wm9uZSAmJiAobGluayA9IGdldFpvbmUobGlua3NbbmFtZV0sIGdldFpvbmUpKSkge1xuXHRcdFx0em9uZSA9IHpvbmVzW25hbWVdID0gbmV3IFpvbmUoKTtcblx0XHRcdHpvbmUuX3NldChsaW5rKTtcblx0XHRcdHpvbmUubmFtZSA9IG5hbWVzW25hbWVdO1xuXHRcdFx0cmV0dXJuIHpvbmU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXROYW1lcyAoKSB7XG5cdFx0dmFyIGksIG91dCA9IFtdO1xuXG5cdFx0Zm9yIChpIGluIG5hbWVzKSB7XG5cdFx0XHRpZiAobmFtZXMuaGFzT3duUHJvcGVydHkoaSkgJiYgKHpvbmVzW2ldIHx8IHpvbmVzW2xpbmtzW2ldXSkgJiYgbmFtZXNbaV0pIHtcblx0XHRcdFx0b3V0LnB1c2gobmFtZXNbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBvdXQuc29ydCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkTGluayAoYWxpYXNlcykge1xuXHRcdHZhciBpLCBhbGlhcywgbm9ybWFsMCwgbm9ybWFsMTtcblxuXHRcdGlmICh0eXBlb2YgYWxpYXNlcyA9PT0gXCJzdHJpbmdcIikge1xuXHRcdFx0YWxpYXNlcyA9IFthbGlhc2VzXTtcblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgYWxpYXNlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0YWxpYXMgPSBhbGlhc2VzW2ldLnNwbGl0KCd8Jyk7XG5cblx0XHRcdG5vcm1hbDAgPSBub3JtYWxpemVOYW1lKGFsaWFzWzBdKTtcblx0XHRcdG5vcm1hbDEgPSBub3JtYWxpemVOYW1lKGFsaWFzWzFdKTtcblxuXHRcdFx0bGlua3Nbbm9ybWFsMF0gPSBub3JtYWwxO1xuXHRcdFx0bmFtZXNbbm9ybWFsMF0gPSBhbGlhc1swXTtcblxuXHRcdFx0bGlua3Nbbm9ybWFsMV0gPSBub3JtYWwwO1xuXHRcdFx0bmFtZXNbbm9ybWFsMV0gPSBhbGlhc1sxXTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBsb2FkRGF0YSAoZGF0YSkge1xuXHRcdGFkZFpvbmUoZGF0YS56b25lcyk7XG5cdFx0YWRkTGluayhkYXRhLmxpbmtzKTtcblx0XHR0ei5kYXRhVmVyc2lvbiA9IGRhdGEudmVyc2lvbjtcblx0fVxuXG5cdGZ1bmN0aW9uIHpvbmVFeGlzdHMgKG5hbWUpIHtcblx0XHRpZiAoIXpvbmVFeGlzdHMuZGlkU2hvd0Vycm9yKSB7XG5cdFx0XHR6b25lRXhpc3RzLmRpZFNob3dFcnJvciA9IHRydWU7XG5cdFx0XHRcdGxvZ0Vycm9yKFwibW9tZW50LnR6LnpvbmVFeGlzdHMoJ1wiICsgbmFtZSArIFwiJykgaGFzIGJlZW4gZGVwcmVjYXRlZCBpbiBmYXZvciBvZiAhbW9tZW50LnR6LnpvbmUoJ1wiICsgbmFtZSArIFwiJylcIik7XG5cdFx0fVxuXHRcdHJldHVybiAhIWdldFpvbmUobmFtZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBuZWVkc09mZnNldCAobSkge1xuXHRcdHZhciBpc1VuaXhUaW1lc3RhbXAgPSAobS5fZiA9PT0gJ1gnIHx8IG0uX2YgPT09ICd4Jyk7XG5cdFx0cmV0dXJuICEhKG0uX2EgJiYgKG0uX3R6bSA9PT0gdW5kZWZpbmVkKSAmJiAhaXNVbml4VGltZXN0YW1wKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGxvZ0Vycm9yIChtZXNzYWdlKSB7XG5cdFx0aWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y29uc29sZS5lcnJvcihtZXNzYWdlKTtcblx0XHR9XG5cdH1cblxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0bW9tZW50LnR6IG5hbWVzcGFjZVxuXHQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0ZnVuY3Rpb24gdHogKGlucHV0KSB7XG5cdFx0dmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDAsIC0xKSxcblx0XHRcdG5hbWUgPSBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdLFxuXHRcdFx0em9uZSA9IGdldFpvbmUobmFtZSksXG5cdFx0XHRvdXQgID0gbW9tZW50LnV0Yy5hcHBseShudWxsLCBhcmdzKTtcblxuXHRcdGlmICh6b25lICYmICFtb21lbnQuaXNNb21lbnQoaW5wdXQpICYmIG5lZWRzT2Zmc2V0KG91dCkpIHtcblx0XHRcdG91dC5hZGQoem9uZS5wYXJzZShvdXQpLCAnbWludXRlcycpO1xuXHRcdH1cblxuXHRcdG91dC50eihuYW1lKTtcblxuXHRcdHJldHVybiBvdXQ7XG5cdH1cblxuXHR0ei52ZXJzaW9uICAgICAgPSBWRVJTSU9OO1xuXHR0ei5kYXRhVmVyc2lvbiAgPSAnJztcblx0dHouX3pvbmVzICAgICAgID0gem9uZXM7XG5cdHR6Ll9saW5rcyAgICAgICA9IGxpbmtzO1xuXHR0ei5fbmFtZXMgICAgICAgPSBuYW1lcztcblx0dHouYWRkICAgICAgICAgID0gYWRkWm9uZTtcblx0dHoubGluayAgICAgICAgID0gYWRkTGluaztcblx0dHoubG9hZCAgICAgICAgID0gbG9hZERhdGE7XG5cdHR6LnpvbmUgICAgICAgICA9IGdldFpvbmU7XG5cdHR6LnpvbmVFeGlzdHMgICA9IHpvbmVFeGlzdHM7IC8vIGRlcHJlY2F0ZWQgaW4gMC4xLjBcblx0dHouZ3Vlc3MgICAgICAgID0gZ3Vlc3M7XG5cdHR6Lm5hbWVzICAgICAgICA9IGdldE5hbWVzO1xuXHR0ei5ab25lICAgICAgICAgPSBab25lO1xuXHR0ei51bnBhY2sgICAgICAgPSB1bnBhY2s7XG5cdHR6LnVucGFja0Jhc2U2MCA9IHVucGFja0Jhc2U2MDtcblx0dHoubmVlZHNPZmZzZXQgID0gbmVlZHNPZmZzZXQ7XG5cdHR6Lm1vdmVJbnZhbGlkRm9yd2FyZCAgID0gdHJ1ZTtcblx0dHoubW92ZUFtYmlndW91c0ZvcndhcmQgPSBmYWxzZTtcblxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0SW50ZXJmYWNlIHdpdGggTW9tZW50LmpzXG5cdCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHR2YXIgZm4gPSBtb21lbnQuZm47XG5cblx0bW9tZW50LnR6ID0gdHo7XG5cblx0bW9tZW50LmRlZmF1bHRab25lID0gbnVsbDtcblxuXHRtb21lbnQudXBkYXRlT2Zmc2V0ID0gZnVuY3Rpb24gKG1vbSwga2VlcFRpbWUpIHtcblx0XHR2YXIgem9uZSA9IG1vbWVudC5kZWZhdWx0Wm9uZSxcblx0XHRcdG9mZnNldDtcblxuXHRcdGlmIChtb20uX3ogPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0aWYgKHpvbmUgJiYgbmVlZHNPZmZzZXQobW9tKSAmJiAhbW9tLl9pc1VUQykge1xuXHRcdFx0XHRtb20uX2QgPSBtb21lbnQudXRjKG1vbS5fYSkuX2Q7XG5cdFx0XHRcdG1vbS51dGMoKS5hZGQoem9uZS5wYXJzZShtb20pLCAnbWludXRlcycpO1xuXHRcdFx0fVxuXHRcdFx0bW9tLl96ID0gem9uZTtcblx0XHR9XG5cdFx0aWYgKG1vbS5feikge1xuXHRcdFx0b2Zmc2V0ID0gbW9tLl96LnV0Y09mZnNldChtb20pO1xuXHRcdFx0aWYgKE1hdGguYWJzKG9mZnNldCkgPCAxNikge1xuXHRcdFx0XHRvZmZzZXQgPSBvZmZzZXQgLyA2MDtcblx0XHRcdH1cblx0XHRcdGlmIChtb20udXRjT2Zmc2V0ICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0bW9tLnV0Y09mZnNldCgtb2Zmc2V0LCBrZWVwVGltZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtb20uem9uZShvZmZzZXQsIGtlZXBUaW1lKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Zm4udHogPSBmdW5jdGlvbiAobmFtZSwga2VlcFRpbWUpIHtcblx0XHRpZiAobmFtZSkge1xuXHRcdFx0aWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RpbWUgem9uZSBuYW1lIG11c3QgYmUgYSBzdHJpbmcsIGdvdCAnICsgbmFtZSArICcgWycgKyB0eXBlb2YgbmFtZSArICddJyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl96ID0gZ2V0Wm9uZShuYW1lKTtcblx0XHRcdGlmICh0aGlzLl96KSB7XG5cdFx0XHRcdG1vbWVudC51cGRhdGVPZmZzZXQodGhpcywga2VlcFRpbWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bG9nRXJyb3IoXCJNb21lbnQgVGltZXpvbmUgaGFzIG5vIGRhdGEgZm9yIFwiICsgbmFtZSArIFwiLiBTZWUgaHR0cDovL21vbWVudGpzLmNvbS90aW1lem9uZS9kb2NzLyMvZGF0YS1sb2FkaW5nLy5cIik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0aWYgKHRoaXMuX3opIHsgcmV0dXJuIHRoaXMuX3oubmFtZTsgfVxuXHR9O1xuXG5cdGZ1bmN0aW9uIGFiYnJXcmFwIChvbGQpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHRoaXMuX3opIHsgcmV0dXJuIHRoaXMuX3ouYWJicih0aGlzKTsgfVxuXHRcdFx0cmV0dXJuIG9sZC5jYWxsKHRoaXMpO1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiByZXNldFpvbmVXcmFwIChvbGQpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy5feiA9IG51bGw7XG5cdFx0XHRyZXR1cm4gb2xkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0fTtcblx0fVxuXG5cdGZuLnpvbmVOYW1lID0gYWJicldyYXAoZm4uem9uZU5hbWUpO1xuXHRmbi56b25lQWJiciA9IGFiYnJXcmFwKGZuLnpvbmVBYmJyKTtcblx0Zm4udXRjICAgICAgPSByZXNldFpvbmVXcmFwKGZuLnV0Yyk7XG5cblx0bW9tZW50LnR6LnNldERlZmF1bHQgPSBmdW5jdGlvbihuYW1lKSB7XG5cdFx0aWYgKG1ham9yIDwgMiB8fCAobWFqb3IgPT09IDIgJiYgbWlub3IgPCA5KSkge1xuXHRcdFx0bG9nRXJyb3IoJ01vbWVudCBUaW1lem9uZSBzZXREZWZhdWx0KCkgcmVxdWlyZXMgTW9tZW50LmpzID49IDIuOS4wLiBZb3UgYXJlIHVzaW5nIE1vbWVudC5qcyAnICsgbW9tZW50LnZlcnNpb24gKyAnLicpO1xuXHRcdH1cblx0XHRtb21lbnQuZGVmYXVsdFpvbmUgPSBuYW1lID8gZ2V0Wm9uZShuYW1lKSA6IG51bGw7XG5cdFx0cmV0dXJuIG1vbWVudDtcblx0fTtcblxuXHQvLyBDbG9uaW5nIGEgbW9tZW50IHNob3VsZCBpbmNsdWRlIHRoZSBfeiBwcm9wZXJ0eS5cblx0dmFyIG1vbWVudFByb3BlcnRpZXMgPSBtb21lbnQubW9tZW50UHJvcGVydGllcztcblx0aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtb21lbnRQcm9wZXJ0aWVzKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuXHRcdC8vIG1vbWVudCAyLjguMStcblx0XHRtb21lbnRQcm9wZXJ0aWVzLnB1c2goJ196Jyk7XG5cdFx0bW9tZW50UHJvcGVydGllcy5wdXNoKCdfYScpO1xuXHR9IGVsc2UgaWYgKG1vbWVudFByb3BlcnRpZXMpIHtcblx0XHQvLyBtb21lbnQgMi43LjBcblx0XHRtb21lbnRQcm9wZXJ0aWVzLl96ID0gbnVsbDtcblx0fVxuXG5cdC8vIElOSkVDVCBEQVRBXG5cblx0cmV0dXJuIG1vbWVudDtcbn0pKTtcbiIsImltcG9ydCByb290IGZyb20gJy4vX3Jvb3QuanMnO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlSXNGaW5pdGUgPSByb290LmlzRmluaXRlO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgZmluaXRlIHByaW1pdGl2ZSBudW1iZXIuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIGlzIGJhc2VkIG9uXG4gKiBbYE51bWJlci5pc0Zpbml0ZWBdKGh0dHBzOi8vbWRuLmlvL051bWJlci9pc0Zpbml0ZSkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBmaW5pdGUgbnVtYmVyLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGaW5pdGUoMyk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0Zpbml0ZShOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRmluaXRlKEluZmluaXR5KTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc0Zpbml0ZSgnMycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGaW5pdGUodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnbnVtYmVyJyAmJiBuYXRpdmVJc0Zpbml0ZSh2YWx1ZSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGlzRmluaXRlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFNldDogcmVxdWlyZSgnLi9zZXQnKSxcbiAgU3RhdGljOiByZXF1aXJlKCcuL3N0YXRpYycpXG59OyIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgZm91bmRhdGlvbkFwaSA9IHJlcXVpcmUoJy4uL3V0aWxzL2ZvdW5kYXRpb24tYXBpJyk7XG52YXIgTm90aWZpY2F0aW9uID0gcmVxdWlyZSgnLi9ub3RpZmljYXRpb24nKTtcbnZhciBBbmltYXRpb24gPSByZXF1aXJlKCcuLi91dGlscy9hbmltYXRpb24nKTtcbnZhciBjcmVhdGVSZWFjdENsYXNzID0gcmVxdWlyZShcImNyZWF0ZS1yZWFjdC1jbGFzc1wiKTtcblxudmFyIE5vdGlmaWNhdGlvblNldCA9IGNyZWF0ZVJlYWN0Q2xhc3Moe1xuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge25vdGlmaWNhdGlvbnM6IFtdfTtcbiAgfSxcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBmb3VuZGF0aW9uQXBpLnN1YnNjcmliZSh0aGlzLnByb3BzLmlkLCBmdW5jdGlvbihuYW1lLCBtc2cpIHtcbiAgICAgIGlmKG1zZyA9PT0gJ2NsZWFyYWxsJykge1xuICAgICAgICB0aGlzLmNsZWFyQWxsKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFkZE5vdGlmaWNhdGlvbihtc2cpO1xuICAgICAgfVxuICAgIH0uYmluZCh0aGlzKSk7XG4gIH0sXG4gIGFkZE5vdGlmaWNhdGlvbjogZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xuICAgIG5vdGlmaWNhdGlvbi5pZCA9IGZvdW5kYXRpb25BcGkuZ2VuZXJhdGVVdWlkKCk7XG4gICAgdmFyIG5vdGlmaWNhdGlvbnMgPSB0aGlzLnN0YXRlLm5vdGlmaWNhdGlvbnMuY29uY2F0KG5vdGlmaWNhdGlvbik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBub3RpZmljYXRpb25zOiBub3RpZmljYXRpb25zXG4gICAgfSk7XG4gIH0sXG4gIHJlbW92ZU5vdGlmY2F0aW9uOiBmdW5jdGlvbiAoaWQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciBub3RpZmljYXRpb25zID0gW11cbiAgICAgIHRoaXMuc3RhdGUubm90aWZpY2F0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChub3RpZmljYXRpb24pIHtcbiAgICAgICAgaWYgKG5vdGlmaWNhdGlvbi5pZCAhPT0gaWQpIHtcbiAgICAgICAgICBub3RpZmljYXRpb25zLnB1c2gobm90aWZpY2F0aW9uKVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBub3RpZmljYXRpb25zOiBub3RpZmljYXRpb25zXG4gICAgICB9KTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9LmJpbmQodGhpcyk7XG4gIH0sXG4gIGNsZWFyQWxsOiBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7bm90aWZpY2F0aW9uczogW119KTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG5vdGlmaWNhdGlvbnMgPSB0aGlzLnN0YXRlLm5vdGlmaWNhdGlvbnMubWFwKGZ1bmN0aW9uIChub3RpZmljYXRpb24pIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxOb3RpZmljYXRpb24ga2V5PXtub3RpZmljYXRpb24uaWR9IHsuLi5ub3RpZmljYXRpb259IGNsb3NlSGFuZGxlcj17dGhpcy5yZW1vdmVOb3RpZmNhdGlvbihub3RpZmljYXRpb24uaWQpfSBjbGFzc05hbWU9J2lzLWFjdGl2ZSc+XG4gICAgICAgICAge25vdGlmaWNhdGlvbi5jb250ZW50fVxuICAgICAgICA8L05vdGlmaWNhdGlvbj5cbiAgICAgICk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2Pntub3RpZmljYXRpb25zfTwvZGl2PlxuICAgIClcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTm90aWZpY2F0aW9uU2V0O1xuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBjcmVhdGVSZWFjdENsYXNzID0gcmVxdWlyZShcImNyZWF0ZS1yZWFjdC1jbGFzc1wiKTtcblxudmFyIE5vdGlmaWNhdGlvbiA9IGNyZWF0ZVJlYWN0Q2xhc3Moe1xuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb246ICd0b3AtcmlnaHQnLFxuICAgICAgY29sb3I6ICdzdWNjZXNzJyxcbiAgICAgIHRpdGxlOiBudWxsLFxuICAgICAgaW1hZ2U6IG51bGwsXG4gICAgICBjb250ZW50OiBudWxsLFxuICAgICAgd3JhcHBlckVsZW1lbnQ6IFwicFwiXG4gICAgfTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGNsYXNzZXMgPSAnbm90aWZpY2F0aW9uICcgKyB0aGlzLnByb3BzLnBvc2l0aW9uICsgJyAnICsgdGhpcy5wcm9wcy5jb2xvcjtcbiAgICBjbGFzc2VzICs9ICAnICcgKyAodGhpcy5wcm9wcy5jbGFzc05hbWUgfHwgJycpO1xuICAgIHZhciBpbWFnZU5vZGUgPSBudWxsO1xuICAgIGlmICh0aGlzLnByb3BzLmltYWdlKSB7XG4gICAgICBpbWFnZU5vZGUgPSAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uLWljb25cIj5cbiAgICAgICAgICA8aW1nIHNyYz1cInt7IGltYWdlIH19XCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD17dGhpcy5wcm9wcy5pZH0gZGF0YS1jbG9zYWJsZT17dHJ1ZX0gY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJjbG9zZS1idXR0b25cIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlSGFuZGxlcn0+JnRpbWVzOzwvYT5cbiAgICAgICAge2ltYWdlTm9kZX1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3RpZmljYXRpb24tY29udGVudFwiPlxuICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy50aXRsZX08L2gxPlxuICAgICAgICAgIHtSZWFjdC5jcmVhdGVFbGVtZW50KHRoaXMucHJvcHMud3JhcHBlckVsZW1lbnQsIG51bGwsIHRoaXMucHJvcHMuY2hpbGRyZW4pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE5vdGlmaWNhdGlvbjtcbiIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgY2xhc3NuYW1lcyA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcbnZhciBmb3VuZGF0aW9uQXBpID0gcmVxdWlyZSgnLi4vdXRpbHMvZm91bmRhdGlvbi1hcGknKTtcbnZhciBBbmltYXRpb24gPSByZXF1aXJlKCcuLi91dGlscy9hbmltYXRpb24nKTtcbnZhciBOb3RpZmljYXRpb24gPSByZXF1aXJlKCcuL25vdGlmaWNhdGlvbicpO1xudmFyIGNyZWF0ZVJlYWN0Q2xhc3MgPSByZXF1aXJlKFwiY3JlYXRlLXJlYWN0LWNsYXNzXCIpO1xuXG52YXIgTm90aWZpY2F0aW9uU3RhdGljID0gY3JlYXRlUmVhY3RDbGFzcyh7XG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7IG9wZW46IGZhbHNlIH07XG4gIH0sXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XG4gICAgZm91bmRhdGlvbkFwaS5zdWJzY3JpYmUodGhpcy5wcm9wcy5pZCwgZnVuY3Rpb24gKG5hbWUsIG1zZykge1xuICAgICAgaWYgKG1zZyA9PT0gJ29wZW4nKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcbiAgICAgIH0gZWxzZSBpZiAobXNnID09PSAnY2xvc2UnKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IGZhbHNlfSk7XG4gICAgICB9XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSxcbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpIHtcbiAgICBmb3VuZGF0aW9uQXBpLnVuc3Vic2NyaWJlKHRoaXMucHJvcHMuaWQpO1xuICB9LFxuICBjbG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjogZmFsc2V9KTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxBbmltYXRpb24gYWN0aXZlPXt0aGlzLnN0YXRlLm9wZW59IGFuaW1hdGlvbkluPVwiZmFkZUluXCIgYW5pbWF0aW9uT3V0PVwiZmFkZU91dFwiPlxuICAgICAgICA8Tm90aWZpY2F0aW9uIHsuLi50aGlzLnByb3BzfSBjbG9zZUhhbmRsZXI9e3RoaXMuY2xvc2VIYW5kbGVyfSA+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvTm90aWZpY2F0aW9uPlxuICAgICAgPC9BbmltYXRpb24+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gTm90aWZpY2F0aW9uU3RhdGljO1xuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2ZBOzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EscUJBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3JmQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxxQkFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuSEE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EscUJBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbkhBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLHFCQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25IQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzlHQTtBQUNBOzs7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUEwQkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTs7Ozs7QUFTQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFEQTtBQWFBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBWUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBYkE7QUFEQTtBQXlCQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTs7OztBQXRQQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQURBO0FBcUJBO0FBQ0E7QUFDQTtBQUhBO0FBcEJBOzs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDeFJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxXQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNweERBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQWtFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUtBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVVBO0FBbEJBO0FBSkE7QUEyQkE7OztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTs7OztBQW5MQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFEQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVpBO0FBcUJBO0FBQ0E7QUFGQTtBQWtLQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2pNQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBWUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVhBO0FBb0JBOzs7O0FBM0NBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFEQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFMQTs7Ozs7Ozs7Ozs7OztBQ3FCQTtBQTFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUtBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTs7OztBQWZBO0FBQ0E7QUFEQTtBQUVBO0FBREE7QUFEQTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQWNBOzs7Ozs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFEQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUFsQkE7QUFQQTtBQTZCQTs7OztBQXZFQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFGQTtBQU5BOzs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFaQTtBQXNCQTs7OztBQXhDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFDQTtBQUZBO0FBUEE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBQ0E7QUFPQTs7Ozs7Ozs7Ozs7QUFTQTtBQUNBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQU5BO0FBREE7QUFXQTs7OztBQTlDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFEQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBTkE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBLG9DQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3BUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFYQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQVhBO0FBREE7QUFlQTtBQWpCQTtBQW9CQTs7OztBQWxEQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFEQTs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVCQTtBQUNBO0FBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFvQkE7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFxQkE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkE7QUFjQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBUkE7QUFkQTtBQTBCQTtBQXROQTtBQUNBO0FBd05BOzs7Ozs7Ozs7Ozs7OztBQ3hPQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlCQTtBQUNBO0FBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQUNBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBO0FBc0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOWFBO0FBQ0E7QUFnYkE7Ozs7Ozs7O0FDMWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFWQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFXQTtBQURBO0FBT0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBY0E7QUFEQTtBQU9BO0FBckZBO0FBdUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUE3QkE7QUErQkE7QUFDQTtBQUNBO0FBTUE7QUFUQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEE7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoUEE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBWUE7QUF0QkE7QUFDQTtBQXdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFTQTs7Ozs7Ozs7Ozs7Ozs7QUN2REE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQUNBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBT0E7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7QUFLQTtBQVlBO0FBQ0E7QUF2QkE7QUFDQTs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RHQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpCQTtBQUNBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoQkE7QUFwQkE7QUF3Q0E7QUFySEE7QUFDQTtBQXVIQTs7Ozs7Ozs7Ozs7Ozs7QUM1SUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQUNBO0FBb0JBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQXhLQTtBQUNBO0FBMEtBOzs7Ozs7Ozs7Ozs7Ozs7O0FDaExBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEE7QUFDQTtBQWdCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFGQTtBQUFBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFTQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUE1SkE7QUFDQTtBQThKQTs7Ozs7Ozs7Ozs7Ozs7QUNwTEE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQU5BO0FBUUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkE7QUFPQTtBQWxGQTtBQUNBO0FBb0ZBOzs7Ozs7Ozs7Ozs7O0FDL0dBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFuQkE7QUFDQTtBQTBCQTs7Ozs7OztBQ2xDQTtBQUNBOzs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxVQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3BtQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNuQ0E7QUFDQTtBQUNBO0FBRkE7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFoREE7QUFDQTtBQWtEQTs7Ozs7OztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUhBO0FBU0E7QUFoQ0E7QUFDQTtBQWtDQTs7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBTUE7QUE3QkE7QUFDQTtBQStCQTs7OztBIiwic291cmNlUm9vdCI6IiJ9