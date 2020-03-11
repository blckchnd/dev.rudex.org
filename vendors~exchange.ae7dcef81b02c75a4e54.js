(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[12],{

/***/ 2672:
/***/ (function(module, exports, __webpack_require__) {

/*!
 * 
 *             jsPDF AutoTable plugin v3.2.13
 *             
 *             Copyright (c) 2014 Simon Bengtsson, https://github.com/simonbengtsson/jsPDF-AutoTable
 *             Licensed under the MIT License.
 *             http://opensource.org/licenses/mit-license
 *             
 *             * /if (typeof window === 'object') window.jspdfAutoTableVersion = '" + newVersion + "';/*"
 *         
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(2608));
	else { var i, a; }
})(window, function(__WEBPACK_EXTERNAL_MODULE__7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var defaultsDocument = null;
var previousTableState;
var tableState = null;
exports.globalDefaults = {};
exports.documentDefaults = {};
function default_1() {
    return tableState;
}
exports.default = default_1;
function getGlobalOptions() {
    return exports.globalDefaults;
}
exports.getGlobalOptions = getGlobalOptions;
function getDocumentOptions() {
    return exports.documentDefaults;
}
exports.getDocumentOptions = getDocumentOptions;
var TableState = /** @class */ (function () {
    function TableState(doc) {
        this.doc = doc;
    }
    TableState.prototype.pageHeight = function () {
        return this.pageSize().height;
    };
    TableState.prototype.pageWidth = function () {
        return this.pageSize().width;
    };
    TableState.prototype.pageSize = function () {
        var pageSize = this.doc.internal.pageSize;
        // JSPDF 1.4 uses get functions instead of properties on pageSize
        if (pageSize.width == null) {
            pageSize = {
                width: pageSize.getWidth(),
                height: pageSize.getHeight(),
            };
        }
        return pageSize;
    };
    TableState.prototype.scaleFactor = function () {
        return this.doc.internal.scaleFactor;
    };
    TableState.prototype.pageNumber = function () {
        var pageInfo = this.doc.internal.getCurrentPageInfo();
        if (!pageInfo) {
            // Only recent versions of jspdf has pageInfo
            return this.doc.internal.getNumberOfPages();
        }
        return pageInfo.pageNumber;
    };
    return TableState;
}());
function setupState(doc) {
    previousTableState = tableState;
    tableState = new TableState(doc);
    if (doc !== defaultsDocument) {
        defaultsDocument = doc;
        exports.documentDefaults = {};
    }
}
exports.setupState = setupState;
function resetState() {
    tableState = previousTableState;
}
exports.resetState = resetState;
function setDefaults(defaults, doc) {
    if (doc === void 0) { doc = null; }
    if (doc) {
        exports.documentDefaults = defaults || {};
        defaultsDocument = doc;
    }
    else {
        exports.globalDefaults = defaults || {};
    }
}
exports.setDefaults = setDefaults;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(2);
var state_1 = __webpack_require__(0);
var polyfills_1 = __webpack_require__(3);
function getStringWidth(text, styles) {
    applyStyles(styles);
    var textArr = Array.isArray(text) ? text : [text];
    var widestLineWidth = textArr
        .map(function (text) { return state_1.default().doc.getTextWidth(text); })
        // Shave off a few digits for potential improvement in width calculation
        .map(function (val) { return Math.floor(val * 10000) / 10000; })
        .reduce(function (a, b) { return Math.max(a, b); }, 0);
    var fontSize = styles.fontSize / state_1.default().scaleFactor();
    return widestLineWidth;
}
exports.getStringWidth = getStringWidth;
/**
 * Ellipsize the text to fit in the width
 */
function ellipsize(text, width, styles, ellipsizeStr) {
    if (ellipsizeStr === void 0) { ellipsizeStr = '...'; }
    if (Array.isArray(text)) {
        var value_1 = [];
        text.forEach(function (str, i) {
            value_1[i] = ellipsize(str, width, styles, ellipsizeStr);
        });
        return value_1;
    }
    var precision = 10000 * state_1.default().scaleFactor();
    width = Math.ceil(width * precision) / precision;
    if (width >= getStringWidth(text, styles)) {
        return text;
    }
    while (width < getStringWidth(text + ellipsizeStr, styles)) {
        if (text.length <= 1) {
            break;
        }
        text = text.substring(0, text.length - 1);
    }
    return text.trim() + ellipsizeStr;
}
exports.ellipsize = ellipsize;
function addTableBorder() {
    var table = state_1.default().table;
    var styles = {
        lineWidth: table.settings.tableLineWidth,
        lineColor: table.settings.tableLineColor,
    };
    applyStyles(styles);
    var fs = getFillStyle(styles);
    if (fs) {
        state_1.default().doc.rect(table.pageStartX, table.pageStartY, table.width, table.cursor.y - table.pageStartY, fs);
    }
}
exports.addTableBorder = addTableBorder;
function getFillStyle(styles) {
    var drawLine = styles.lineWidth > 0;
    var drawBackground = styles.fillColor || styles.fillColor === 0;
    if (drawLine && drawBackground) {
        return 'DF'; // Fill then stroke
    }
    else if (drawLine) {
        return 'S'; // Only stroke (transparent background)
    }
    else if (drawBackground) {
        return 'F'; // Only fill, no stroke
    }
    else {
        return false;
    }
}
exports.getFillStyle = getFillStyle;
function applyUserStyles() {
    applyStyles(state_1.default().table.userStyles);
}
exports.applyUserStyles = applyUserStyles;
function applyStyles(styles) {
    var doc = state_1.default().doc;
    var styleModifiers = {
        fillColor: doc.setFillColor,
        textColor: doc.setTextColor,
        fontStyle: doc.setFontStyle,
        lineColor: doc.setDrawColor,
        lineWidth: doc.setLineWidth,
        font: doc.setFont,
        fontSize: doc.setFontSize,
    };
    Object.keys(styleModifiers).forEach(function (name) {
        var style = styles[name];
        var modifier = styleModifiers[name];
        if (typeof style !== 'undefined') {
            if (Array.isArray(style)) {
                modifier.apply(this, style);
            }
            else {
                modifier(style);
            }
        }
    });
}
exports.applyStyles = applyStyles;
// This is messy, only keep array and number format the next major version
function marginOrPadding(value, defaultValue) {
    var newValue = {};
    if (Array.isArray(value)) {
        if (value.length >= 4) {
            newValue = {
                top: value[0],
                right: value[1],
                bottom: value[2],
                left: value[3],
            };
        }
        else if (value.length === 3) {
            newValue = {
                top: value[0],
                right: value[1],
                bottom: value[2],
                left: value[1],
            };
        }
        else if (value.length === 2) {
            newValue = {
                top: value[0],
                right: value[1],
                bottom: value[0],
                left: value[1],
            };
        }
        else if (value.length === 1) {
            value = value[0];
        }
        else {
            value = defaultValue;
        }
    }
    else if (typeof value === 'object') {
        if (value['vertical']) {
            value['top'] = value['vertical'];
            value['bottom'] = value['vertical'];
        }
        if (value['horizontal']) {
            value['right'] = value['horizontal'];
            value['left'] = value['horizontal'];
        }
        for (var _i = 0, _a = ['top', 'right', 'bottom', 'left']; _i < _a.length; _i++) {
            var side = _a[_i];
            newValue[side] =
                value[side] || value[side] === 0 ? value[side] : defaultValue;
        }
    }
    if (typeof value === 'number') {
        newValue = { top: value, right: value, bottom: value, left: value };
    }
    return newValue;
}
exports.marginOrPadding = marginOrPadding;
function styles(styles) {
    styles = Array.isArray(styles) ? styles : [styles];
    return polyfills_1.assign.apply(void 0, __spreadArrays([config_1.defaultStyles()], styles));
}
exports.styles = styles;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Ratio between font size and font height. The number comes from jspdf's source code
 */
exports.FONT_ROW_RATIO = 1.15;
var state_1 = __webpack_require__(0);
function defaultConfig() {
    return {
        // Html content
        html: null,
        // Custom content
        head: null,
        body: null,
        foot: null,
        // Properties
        includeHiddenHtml: false,
        startY: null,
        margin: 40 / state_1.default().scaleFactor(),
        pageBreak: 'auto',
        rowPageBreak: 'auto',
        tableWidth: 'auto',
        showHead: 'everyPage',
        showFoot: 'everyPage',
        tableLineWidth: 0,
        tableLineColor: 200,
        tableId: null,
        // Styling
        theme: 'striped',
        useCss: false,
        styles: {},
        headStyles: {},
        bodyStyles: {},
        footStyles: {},
        alternateRowStyles: {},
        columnStyles: {},
        // Hooks
        // Use to change the content of the cell before width calculations etc are performed
        didParseCell: function (data) { },
        willDrawCell: function (data) { },
        // Use to draw additional content such as images in table cells
        didDrawCell: function (data) { },
        // Use to draw additional content to each page such as headers and footers
        didDrawPage: function (data) { },
    };
}
exports.defaultConfig = defaultConfig;
// Base style for all themes
function defaultStyles() {
    return {
        font: 'helvetica',
        fontStyle: 'normal',
        overflow: 'linebreak',
        fillColor: false,
        textColor: 20,
        halign: 'left',
        valign: 'top',
        fontSize: 10,
        cellPadding: 5 / state_1.default().scaleFactor(),
        lineColor: 200,
        lineWidth: 0 / state_1.default().scaleFactor(),
        cellWidth: 'auto',
        minCellHeight: 0,
    };
}
exports.defaultStyles = defaultStyles;
/**
 * Styles for the themes (overriding the default styles)
 */
function getTheme(name) {
    var themes = {
        striped: {
            table: { fillColor: 255, textColor: 80, fontStyle: 'normal' },
            head: { textColor: 255, fillColor: [41, 128, 185], fontStyle: 'bold' },
            body: {},
            foot: { textColor: 255, fillColor: [41, 128, 185], fontStyle: 'bold' },
            alternateRow: { fillColor: 245 },
        },
        grid: {
            table: {
                fillColor: 255,
                textColor: 80,
                fontStyle: 'normal',
                lineWidth: 0.1,
            },
            head: {
                textColor: 255,
                fillColor: [26, 188, 156],
                fontStyle: 'bold',
                lineWidth: 0,
            },
            body: {},
            foot: {
                textColor: 255,
                fillColor: [26, 188, 156],
                fontStyle: 'bold',
                lineWidth: 0,
            },
            alternateRow: {},
        },
        plain: {
            head: { fontStyle: 'bold' },
            foot: { fontStyle: 'bold' },
        },
    };
    return themes[name];
}
exports.getTheme = getTheme;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Include common small polyfills instead of requiring the user to to do it
 */
Object.defineProperty(exports, "__esModule", { value: true });
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
function assign(target) {
    'use strict';
    var varArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        varArgs[_i - 1] = arguments[_i];
    }
    if (target == null) {
        // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
    }
    var to = Object(target);
    for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];
        if (nextSource != null) {
            // Skip over if undefined or null
            for (var nextKey in nextSource) {
                // Avoid bugs when hasOwnProperty is shadowed
                if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                    to[nextKey] = nextSource[nextKey];
                }
            }
        }
    }
    return to;
}
exports.assign = assign;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(2);
var state_1 = __webpack_require__(0);
var HookData_1 = __webpack_require__(10);
var common_1 = __webpack_require__(1);
var assign = __webpack_require__(5);
var CellHooks = /** @class */ (function () {
    function CellHooks() {
        this.didParseCell = [];
        this.willDrawCell = [];
        this.didDrawCell = [];
        this.didDrawPage = [];
    }
    return CellHooks;
}());
var Table = /** @class */ (function () {
    function Table() {
        this.columns = [];
        this.head = [];
        this.body = [];
        this.foot = [];
        this.height = 0;
        this.width = 0;
        this.preferredWidth = 0;
        this.wrappedWidth = 0;
        this.minWidth = 0;
        this.headHeight = 0;
        this.footHeight = 0;
        this.startPageNumber = 1;
        this.pageNumber = 1;
        // Deprecated, use pageNumber instead
        // Not using getter since:
        // https://github.com/simonbengtsson/jsPDF-AutoTable/issues/596
        this.pageCount = 1;
        this.styles = {
            styles: {},
            headStyles: {},
            bodyStyles: {},
            footStyles: {},
            alternateRowStyles: {},
            columnStyles: {},
        };
        this.cellHooks = new CellHooks();
    }
    Table.prototype.allRows = function () {
        return this.head.concat(this.body).concat(this.foot);
    };
    Table.prototype.callCellHooks = function (handlers, cell, row, column) {
        for (var _i = 0, handlers_1 = handlers; _i < handlers_1.length; _i++) {
            var handler = handlers_1[_i];
            if (handler(new HookData_1.CellHookData(cell, row, column)) === false) {
                return false;
            }
        }
        return true;
    };
    Table.prototype.callEndPageHooks = function () {
        common_1.applyUserStyles();
        for (var _i = 0, _a = this.cellHooks.didDrawPage; _i < _a.length; _i++) {
            var handler = _a[_i];
            handler(new HookData_1.HookData());
        }
    };
    Table.prototype.margin = function (side) {
        return common_1.marginOrPadding(this.settings.margin, config_1.defaultConfig().margin)[side];
    };
    return Table;
}());
exports.Table = Table;
var Row = /** @class */ (function () {
    function Row(raw, index, section) {
        this.cells = {};
        this.height = 0;
        this.maxCellHeight = 0;
        this.spansMultiplePages = false;
        this.raw = raw;
        if (raw._element) {
            this.raw = raw._element;
        }
        this.index = index;
        this.section = section;
    }
    Row.prototype.canEntireRowFit = function (height) {
        return this.maxCellHeight <= height;
    };
    Row.prototype.getMinimumRowHeight = function () {
        var _this = this;
        return state_1.default().table.columns.reduce(function (acc, column) {
            var cell = _this.cells[column.index];
            if (!cell)
                return 0;
            var fontHeight = (cell.styles.fontSize / state_1.default().scaleFactor()) * config_1.FONT_ROW_RATIO;
            var vPadding = cell.padding('vertical');
            var oneRowHeight = vPadding + fontHeight;
            return oneRowHeight > acc ? oneRowHeight : acc;
        }, 0);
    };
    return Row;
}());
exports.Row = Row;
var Cell = /** @class */ (function () {
    function Cell(raw, themeStyles, section) {
        this.contentHeight = 0;
        this.contentWidth = 0;
        this.wrappedWidth = 0;
        this.minWidth = 0;
        this.textPos = {};
        this.height = 0;
        this.width = 0;
        this.rowSpan = (raw && raw.rowSpan) || 1;
        this.colSpan = (raw && raw.colSpan) || 1;
        this.styles = assign(themeStyles, (raw && raw.styles) || {});
        this.section = section;
        var text;
        var content = raw && raw.content != null ? raw.content : raw;
        content = content && content.title != null ? content.title : content;
        this.raw = raw && raw._element ? raw._element : raw;
        // Stringify 0 and false, but not undefined or null
        text = content != null ? '' + content : '';
        var splitRegex = /\r\n|\r|\n/g;
        this.text = text.split(splitRegex);
    }
    Cell.prototype.getContentHeight = function () {
        var lineCount = Array.isArray(this.text) ? this.text.length : 1;
        var fontHeight = (this.styles.fontSize / state_1.default().scaleFactor()) * config_1.FONT_ROW_RATIO;
        return lineCount * fontHeight + this.padding('vertical');
    };
    Cell.prototype.padding = function (name) {
        var padding = common_1.marginOrPadding(this.styles.cellPadding, common_1.styles([]).cellPadding);
        if (name === 'vertical') {
            return padding.top + padding.bottom;
        }
        else if (name === 'horizontal') {
            return padding.left + padding.right;
        }
        else {
            return padding[name];
        }
    };
    return Cell;
}());
exports.Cell = Cell;
var Column = /** @class */ (function () {
    function Column(dataKey, raw, index) {
        this.preferredWidth = 0;
        this.minWidth = 0;
        this.wrappedWidth = 0;
        this.width = 0;
        this.dataKey = dataKey;
        this.raw = raw;
        this.index = index;
    }
    return Column;
}());
exports.Column = Column;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cssParser_1 = __webpack_require__(13);
var state_1 = __webpack_require__(0);
function parseHtml(input, includeHiddenHtml, useCss) {
    if (includeHiddenHtml === void 0) { includeHiddenHtml = false; }
    if (useCss === void 0) { useCss = false; }
    var tableElement;
    if (typeof input === 'string') {
        tableElement = window.document.querySelector(input);
    }
    else {
        tableElement = input;
    }
    if (!tableElement) {
        console.error('Html table could not be found with input: ', input);
        return;
    }
    var head = parseTableSection(window, tableElement.tHead, includeHiddenHtml, useCss);
    var body = [];
    for (var i = 0; i < tableElement.tBodies.length; i++) {
        body = body.concat(parseTableSection(window, tableElement.tBodies[i], includeHiddenHtml, useCss));
    }
    var foot = parseTableSection(window, tableElement.tFoot, includeHiddenHtml, useCss);
    return { head: head, body: body, foot: foot };
}
exports.parseHtml = parseHtml;
function parseTableSection(window, sectionElement, includeHidden, useCss) {
    var results = [];
    if (!sectionElement) {
        return results;
    }
    for (var i = 0; i < sectionElement.rows.length; i++) {
        var row = sectionElement.rows[i];
        var resultRow = [];
        var rowStyles = useCss
            ? cssParser_1.parseCss(row, state_1.default().scaleFactor(), [
                'cellPadding',
                'lineWidth',
                'lineColor',
            ])
            : {};
        for (var i_1 = 0; i_1 < row.cells.length; i_1++) {
            var cell = row.cells[i_1];
            var style = window.getComputedStyle(cell);
            if (includeHidden || style.display !== 'none') {
                var cellStyles = useCss ? cssParser_1.parseCss(cell, state_1.default().scaleFactor()) : {};
                resultRow.push({
                    rowSpan: cell.rowSpan,
                    colSpan: cell.colSpan,
                    styles: useCss ? cellStyles : null,
                    _element: cell,
                    content: parseCellContent(cell),
                });
            }
        }
        if (resultRow.length > 0 &&
            (includeHidden || rowStyles.display !== 'none')) {
            resultRow._element = row;
            results.push(resultRow);
        }
    }
    return results;
}
function parseCellContent(orgCell) {
    // Work on cloned node to make sure no changes are applied to html table
    var cell = orgCell.cloneNode(true);
    // Remove extra space and line breaks in markup to make it more similar to
    // what would be shown in html
    cell.innerHTML = cell.innerHTML.replace(/\n/g, '').replace(/ +/g, ' ');
    // Preserve <br> tags as line breaks in the pdf
    cell.innerHTML = cell.innerHTML
        .split('<br>')
        .map(function (part) { return part.trim(); })
        .join('\n');
    // innerText for ie
    return cell.innerText || cell.textContent || '';
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tableDrawer_1 = __webpack_require__(9);
var widthCalculator_1 = __webpack_require__(11);
var inputParser_1 = __webpack_require__(12);
var state_1 = __webpack_require__(0);
__webpack_require__(15);
var common_1 = __webpack_require__(1);
var htmlParser_1 = __webpack_require__(6);
var jsPDF = __webpack_require__(7);
function autoTable() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    state_1.setupState(this);
    // 1. Parse and unify user input
    var table = inputParser_1.parseInput(args);
    // 2. Calculate preliminary table, column, row and cell dimensions
    widthCalculator_1.calculateWidths(table);
    // 3. Output table to pdf
    tableDrawer_1.drawTable(table);
    table.finalY = table.cursor.y;
    this.previousAutoTable = table;
    this.lastAutoTable = table;
    this.autoTable.previous = table; // Deprecated
    common_1.applyUserStyles();
    state_1.resetState();
    return this;
}
jsPDF.API.autoTable = autoTable;
// Assign false to enable `doc.lastAutoTable.finalY || 40` sugar;
jsPDF.API.lastAutoTable = false;
jsPDF.API.previousAutoTable = false; // deprecated in v3
jsPDF.API.autoTable.previous = false; // deprecated in v3
jsPDF.API.autoTableSetDefaults = function (defaults) {
    state_1.setDefaults(defaults, this);
    return this;
};
jsPDF.autoTableSetDefaults = function (defaults, doc) {
    state_1.setDefaults(defaults, doc);
    return this;
};
jsPDF.API.autoTableHtmlToJson = function (tableElem, includeHiddenElements) {
    includeHiddenElements = includeHiddenElements || false;
    if (!tableElem || !(tableElem instanceof HTMLTableElement)) {
        console.error('A HTMLTableElement has to be sent to autoTableHtmlToJson');
        return null;
    }
    var _a = htmlParser_1.parseHtml(tableElem, includeHiddenElements, false), head = _a.head, body = _a.body, foot = _a.foot;
    var firstRow = head[0] || body[0] || foot[0];
    return { columns: firstRow, rows: body, data: body };
};
/**
 * @deprecated
 */
jsPDF.API.autoTableEndPosY = function () {
    console.error('Use of deprecated function: autoTableEndPosY. Use doc.previousAutoTable.finalY instead.');
    var prev = this.previousAutoTable;
    if (prev.cursor && typeof prev.cursor.y === 'number') {
        return prev.cursor.y;
    }
    else {
        return 0;
    }
};
/**
 * @deprecated
 */
jsPDF.API.autoTableAddPageContent = function (hook) {
    console.error('Use of deprecated function: autoTableAddPageContent. Use jsPDF.autoTableSetDefaults({didDrawPage: () => {}}) instead.');
    if (!jsPDF.API.autoTable.globalDefaults) {
        jsPDF.API.autoTable.globalDefaults = {};
    }
    jsPDF.API.autoTable.globalDefaults.addPageContent = hook;
    return this;
};
/**
 * @deprecated
 */
jsPDF.API.autoTableAddPage = function () {
    console.error('Use of deprecated function: autoTableAddPage. Use doc.addPage()');
    this.addPage();
    return this;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(2);
var common_1 = __webpack_require__(1);
var models_1 = __webpack_require__(4);
var state_1 = __webpack_require__(0);
var assign = __webpack_require__(5);
function drawTable(table) {
    var settings = table.settings;
    table.cursor = {
        x: table.margin('left'),
        y: settings.startY == null ? table.margin('top') : settings.startY,
    };
    var minTableBottomPos = settings.startY +
        table.margin('bottom') +
        table.headHeight +
        table.footHeight;
    if (settings.pageBreak === 'avoid') {
        minTableBottomPos += table.height;
    }
    if (settings.pageBreak === 'always' ||
        (settings.startY != null &&
            settings.startY !== false &&
            minTableBottomPos > state_1.default().pageHeight())) {
        nextPage(state_1.default().doc);
        table.cursor.y = table.margin('top');
    }
    table.pageStartX = table.cursor.x;
    table.pageStartY = table.cursor.y;
    table.startPageNumber = state_1.default().pageNumber();
    // An empty row used to cached cells those break through page
    common_1.applyUserStyles();
    if (settings.showHead === true ||
        settings.showHead === 'firstPage' ||
        settings.showHead === 'everyPage') {
        table.head.forEach(function (row) { return printRow(row); });
    }
    common_1.applyUserStyles();
    table.body.forEach(function (row, index) {
        printFullRow(row, index === table.body.length - 1);
    });
    common_1.applyUserStyles();
    if (settings.showFoot === true ||
        settings.showFoot === 'lastPage' ||
        settings.showFoot === 'everyPage') {
        table.foot.forEach(function (row) { return printRow(row); });
    }
    common_1.addTableBorder();
    table.callEndPageHooks();
}
exports.drawTable = drawTable;
function getRemainingLineCount(cell, remainingPageSpace) {
    var fontHeight = (cell.styles.fontSize / state_1.default().scaleFactor()) * config_1.FONT_ROW_RATIO;
    var vPadding = cell.padding('vertical');
    var remainingLines = Math.floor((remainingPageSpace - vPadding) / fontHeight);
    return Math.max(0, remainingLines);
}
function modifyRowToFit(row, remainingPageSpace, table) {
    var remainderRow = new models_1.Row(row.raw, -1, row.section);
    remainderRow.spansMultiplePages = true;
    row.spansMultiplePages = true;
    row.height = 0;
    row.maxCellHeight = 0;
    for (var _i = 0, _a = table.columns; _i < _a.length; _i++) {
        var column = _a[_i];
        var cell = row.cells[column.index];
        if (!cell)
            continue;
        if (!Array.isArray(cell.text)) {
            cell.text = [cell.text];
        }
        var remainderCell = new models_1.Cell(cell.raw, {}, cell.section);
        remainderCell = assign(remainderCell, cell);
        remainderCell.textPos = assign({}, cell.textPos);
        remainderCell.text = [];
        var remainingLineCount = getRemainingLineCount(cell, remainingPageSpace);
        if (cell.text.length > remainingLineCount) {
            remainderCell.text = cell.text.splice(remainingLineCount, cell.text.length);
        }
        cell.contentHeight = cell.getContentHeight();
        if (cell.contentHeight > row.height) {
            row.height = cell.contentHeight;
            row.maxCellHeight = cell.contentHeight;
        }
        remainderCell.contentHeight = remainderCell.getContentHeight();
        if (remainderCell.contentHeight > remainderRow.height) {
            remainderRow.height = remainderCell.contentHeight;
            remainderRow.maxCellHeight = remainderCell.contentHeight;
        }
        remainderRow.cells[column.index] = remainderCell;
    }
    for (var _b = 0, _c = table.columns; _b < _c.length; _b++) {
        var column = _c[_b];
        var remainderCell = remainderRow.cells[column.index];
        if (remainderCell) {
            remainderCell.height = remainderRow.height;
        }
        var cell = row.cells[column.index];
        if (cell) {
            cell.height = row.height;
        }
    }
    return remainderRow;
}
function shouldPrintOnCurrentPage(row, remainingPageSpace, table) {
    var pageHeight = state_1.default().pageHeight();
    var marginHeight = table.margin('top') - table.margin('bottom');
    var maxTableHeight = pageHeight - marginHeight;
    var minRowFits = row.getMinimumRowHeight() < remainingPageSpace;
    if (row.getMinimumRowHeight() > maxTableHeight) {
        console.error("Will not be able to print row " + row.index + " correctly since it's minimum height is larger than page height");
        return true;
    }
    var rowHasRowSpanCell = table.columns.filter(function (column) {
        var cell = row.cells[column.index];
        if (!cell)
            return false;
        return cell.rowSpan > 1;
    }).length > 0;
    if (!minRowFits) {
        return false;
    }
    var rowHigherThanPage = row.maxCellHeight > maxTableHeight;
    if (rowHigherThanPage) {
        if (rowHasRowSpanCell) {
            console.error("The content of row " + row.index + " will not be drawn correctly since drawing rows with a height larger than the page height and has cells with rowspans is not supported.");
        }
        return true;
    }
    if (rowHasRowSpanCell) {
        // Currently a new page is required whenever a rowspan row don't fit a page.
        return false;
    }
    if (table.settings.rowPageBreak === 'avoid') {
        return false;
    }
    // In all other cases print the row on current page
    return true;
}
function printFullRow(row, isLastRow) {
    var table = state_1.default().table;
    var remainingPageSpace = getRemainingPageSpace(isLastRow);
    if (row.canEntireRowFit(remainingPageSpace)) {
        printRow(row);
    }
    else {
        if (shouldPrintOnCurrentPage(row, remainingPageSpace, table)) {
            var remainderRow = modifyRowToFit(row, remainingPageSpace, table);
            printRow(row);
            addPage();
            printFullRow(remainderRow, isLastRow);
        }
        else {
            addPage();
            printFullRow(row, isLastRow);
        }
    }
}
function printRow(row) {
    var table = state_1.default().table;
    table.cursor.x = table.margin('left');
    row.y = table.cursor.y;
    row.x = table.cursor.x;
    for (var _i = 0, _a = table.columns; _i < _a.length; _i++) {
        var column = _a[_i];
        var cell = row.cells[column.index];
        if (!cell) {
            table.cursor.x += column.width;
            continue;
        }
        common_1.applyStyles(cell.styles);
        cell.x = table.cursor.x;
        cell.y = row.y;
        if (cell.styles.valign === 'top') {
            cell.textPos.y = table.cursor.y + cell.padding('top');
        }
        else if (cell.styles.valign === 'bottom') {
            cell.textPos.y = table.cursor.y + cell.height - cell.padding('bottom');
        }
        else {
            cell.textPos.y = table.cursor.y + cell.height / 2;
        }
        if (cell.styles.halign === 'right') {
            cell.textPos.x = cell.x + cell.width - cell.padding('right');
        }
        else if (cell.styles.halign === 'center') {
            cell.textPos.x = cell.x + cell.width / 2;
        }
        else {
            cell.textPos.x = cell.x + cell.padding('left');
        }
        if (table.callCellHooks(table.cellHooks.willDrawCell, cell, row, column) ===
            false) {
            table.cursor.x += column.width;
            continue;
        }
        var fillStyle = common_1.getFillStyle(cell.styles);
        if (fillStyle) {
            state_1.default().doc.rect(cell.x, table.cursor.y, cell.width, cell.height, fillStyle);
        }
        state_1.default().doc.autoTableText(cell.text, cell.textPos.x, cell.textPos.y, {
            halign: cell.styles.halign,
            valign: cell.styles.valign,
            maxWidth: Math.ceil(cell.width - cell.padding('left') - cell.padding('right')),
        });
        table.callCellHooks(table.cellHooks.didDrawCell, cell, row, column);
        table.cursor.x += column.width;
    }
    table.cursor.y += row.height;
}
function getRemainingPageSpace(isLastRow) {
    var table = state_1.default().table;
    var bottomContentHeight = table.margin('bottom');
    var showFoot = table.settings.showFoot;
    if (showFoot === true ||
        showFoot === 'everyPage' ||
        (showFoot === 'lastPage' && isLastRow)) {
        bottomContentHeight += table.footHeight;
    }
    return state_1.default().pageHeight() - table.cursor.y - bottomContentHeight;
}
function addPage() {
    var table = state_1.default().table;
    common_1.applyUserStyles();
    if (table.settings.showFoot === true ||
        table.settings.showFoot === 'everyPage') {
        table.foot.forEach(function (row) { return printRow(row); });
    }
    table.finalY = table.cursor.y;
    // Add user content just before adding new page ensure it will
    // be drawn above other things on the page
    table.callEndPageHooks();
    common_1.addTableBorder();
    nextPage(state_1.default().doc);
    table.pageNumber++;
    table.pageCount++;
    table.cursor = { x: table.margin('left'), y: table.margin('top') };
    table.pageStartX = table.cursor.x;
    table.pageStartY = table.cursor.y;
    if (table.settings.showHead === true ||
        table.settings.showHead === 'everyPage') {
        table.head.forEach(function (row) { return printRow(row); });
    }
}
exports.addPage = addPage;
function nextPage(doc) {
    var current = state_1.default().pageNumber();
    doc.setPage(current + 1);
    var newCurrent = state_1.default().pageNumber();
    if (newCurrent === current) {
        doc.addPage();
    }
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var state_1 = __webpack_require__(0);
var HookData = /** @class */ (function () {
    function HookData() {
        var table = state_1.default().table;
        this.table = table;
        this.pageNumber = table.pageNumber;
        this.pageCount = this.pageNumber;
        this.settings = table.settings;
        this.cursor = table.cursor;
        this.doc = state_1.default().doc;
    }
    return HookData;
}());
exports.HookData = HookData;
var CellHookData = /** @class */ (function (_super) {
    __extends(CellHookData, _super);
    function CellHookData(cell, row, column) {
        var _this = _super.call(this) || this;
        _this.cell = cell;
        _this.row = row;
        _this.column = column;
        _this.section = row.section;
        return _this;
    }
    return CellHookData;
}(HookData));
exports.CellHookData = CellHookData;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(1);
var state_1 = __webpack_require__(0);
/**
 * Calculate the column widths
 */
function calculateWidths(table) {
    var columnMinWidth = 10 / state_1.default().scaleFactor();
    if (columnMinWidth * table.columns.length > table.width) {
        console.error('Columns could not fit on page');
    }
    else if (table.minWidth > table.width) {
        // Would be nice to improve the user experience of this
        console.error("Column widths too wide and can't fit page");
    }
    var copy = table.columns.slice(0);
    distributeWidth(copy, table.width, table.wrappedWidth);
    applyColSpans(table);
    fitContent(table);
    applyRowSpans(table);
}
exports.calculateWidths = calculateWidths;
function applyRowSpans(table) {
    var rowSpanCells = {};
    var colRowSpansLeft = 1;
    var all = table.allRows();
    for (var rowIndex = 0; rowIndex < all.length; rowIndex++) {
        var row = all[rowIndex];
        for (var _i = 0, _a = table.columns; _i < _a.length; _i++) {
            var column = _a[_i];
            var data = rowSpanCells[column.index];
            if (colRowSpansLeft > 1) {
                colRowSpansLeft--;
                delete row.cells[column.index];
            }
            else if (data) {
                data.cell.height += row.height;
                if (data.cell.height > row.maxCellHeight) {
                    data.row.maxCellHeight = data.cell.height;
                }
                colRowSpansLeft = data.cell.colSpan;
                delete row.cells[column.index];
                data.left--;
                if (data.left <= 1) {
                    delete rowSpanCells[column.index];
                }
            }
            else {
                var cell = row.cells[column.index];
                if (!cell) {
                    continue;
                }
                cell.height = row.height;
                if (cell.rowSpan > 1) {
                    var remaining = all.length - rowIndex;
                    var left = cell.rowSpan > remaining ? remaining : cell.rowSpan;
                    rowSpanCells[column.index] = { cell: cell, left: left, row: row };
                }
            }
        }
        if (row.section === 'head') {
            table.headHeight += row.maxCellHeight;
        }
        if (row.section === 'foot') {
            table.footHeight += row.maxCellHeight;
        }
        table.height += row.height;
    }
}
function applyColSpans(table) {
    var all = table.allRows();
    for (var rowIndex = 0; rowIndex < all.length; rowIndex++) {
        var row = all[rowIndex];
        var colSpanCell = null;
        var combinedColSpanWidth = 0;
        var colSpansLeft = 0;
        for (var columnIndex = 0; columnIndex < table.columns.length; columnIndex++) {
            var column = table.columns[columnIndex];
            var cell = null;
            // Width and colspan
            colSpansLeft -= 1;
            if (colSpansLeft > 1 && table.columns[columnIndex + 1]) {
                combinedColSpanWidth += column.width;
                delete row.cells[column.index];
                continue;
            }
            else if (colSpanCell) {
                cell = colSpanCell;
                delete row.cells[column.index];
                colSpanCell = null;
            }
            else {
                cell = row.cells[column.index];
                if (!cell)
                    continue;
                colSpansLeft = cell.colSpan;
                combinedColSpanWidth = 0;
                if (cell.colSpan > 1) {
                    colSpanCell = cell;
                    combinedColSpanWidth += column.width;
                    continue;
                }
            }
            cell.width = column.width + combinedColSpanWidth;
        }
    }
}
function fitContent(table) {
    var rowSpanHeight = { count: 0, height: 0 };
    for (var _i = 0, _a = table.allRows(); _i < _a.length; _i++) {
        var row = _a[_i];
        for (var _b = 0, _c = table.columns; _b < _c.length; _b++) {
            var column = _c[_b];
            var cell = row.cells[column.index];
            if (!cell)
                continue;
            common_1.applyStyles(cell.styles);
            var textSpace = cell.width - cell.padding('horizontal');
            if (cell.styles.overflow === 'linebreak') {
                // Add one pt to textSpace to fix rounding error
                cell.text = state_1.default().doc.splitTextToSize(cell.text, textSpace + 1 / (state_1.default().scaleFactor() || 1), { fontSize: cell.styles.fontSize });
            }
            else if (cell.styles.overflow === 'ellipsize') {
                cell.text = common_1.ellipsize(cell.text, textSpace, cell.styles);
            }
            else if (cell.styles.overflow === 'hidden') {
                cell.text = common_1.ellipsize(cell.text, textSpace, cell.styles, '');
            }
            else if (typeof cell.styles.overflow === 'function') {
                cell.text = cell.styles.overflow(cell.text, textSpace);
            }
            cell.contentHeight = cell.getContentHeight();
            if (cell.styles.minCellHeight > cell.contentHeight) {
                cell.contentHeight = cell.styles.minCellHeight;
            }
            var realContentHeight = cell.contentHeight / cell.rowSpan;
            if (cell.rowSpan > 1 &&
                rowSpanHeight.count * rowSpanHeight.height <
                    realContentHeight * cell.rowSpan) {
                rowSpanHeight = { height: realContentHeight, count: cell.rowSpan };
            }
            else if (rowSpanHeight && rowSpanHeight.count > 0) {
                if (rowSpanHeight.height > realContentHeight) {
                    realContentHeight = rowSpanHeight.height;
                }
            }
            if (realContentHeight > row.height) {
                row.height = realContentHeight;
                row.maxCellHeight = realContentHeight;
            }
        }
        rowSpanHeight.count--;
    }
}
function distributeWidth(autoColumns, availableSpace, wrappedAutoColumnsWidth) {
    var diffWidth = availableSpace - wrappedAutoColumnsWidth;
    for (var i = 0; i < autoColumns.length; i++) {
        var column = autoColumns[i];
        var ratio = column.wrappedWidth / wrappedAutoColumnsWidth;
        var suggestedChange = diffWidth * ratio;
        var suggestedWidth = column.wrappedWidth + suggestedChange;
        var hasCustomWidth = false;
        for (var _i = 0, _a = state_1.default().table.allRows(); _i < _a.length; _i++) {
            var row = _a[_i];
            var cell = row.cells[column.index];
            if (cell && typeof cell.styles.cellWidth === 'number') {
                hasCustomWidth = true;
                break;
            }
        }
        if (suggestedWidth < column.minWidth || hasCustomWidth) {
            // Add 1 to minWidth as linebreaks calc otherwise sometimes made two rows
            column.width = column.minWidth + 1 / state_1.default().scaleFactor();
            wrappedAutoColumnsWidth -= column.wrappedWidth;
            availableSpace -= column.width;
            autoColumns.splice(i, 1);
            distributeWidth(autoColumns, availableSpace, wrappedAutoColumnsWidth);
            break;
        }
        column.width = suggestedWidth;
    }
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __webpack_require__(4);
var config_1 = __webpack_require__(2);
var htmlParser_1 = __webpack_require__(6);
var polyfills_1 = __webpack_require__(3);
var common_1 = __webpack_require__(1);
var state_1 = __webpack_require__(0);
var inputValidator_1 = __webpack_require__(14);
/**
 * Create models from the user input
 */
function parseInput(args) {
    var tableOptions = parseUserArguments(args);
    var globalOptions = state_1.getGlobalOptions();
    var documentOptions = state_1.getDocumentOptions();
    var allOptions = [globalOptions, documentOptions, tableOptions];
    inputValidator_1.default(allOptions);
    var table = new models_1.Table();
    state_1.default().table = table;
    table.id = tableOptions.tableId;
    var doc = state_1.default().doc;
    table.userStyles = {
        // Setting to black for versions of jspdf without getTextColor
        textColor: doc.getTextColor ? doc.getTextColor() : 0,
        fontSize: doc.internal.getFontSize(),
        fontStyle: doc.internal.getFont().fontStyle,
        font: doc.internal.getFont().fontName,
    };
    var _loop_1 = function (styleProp) {
        var styles = allOptions.map(function (opts) { return opts[styleProp] || {}; });
        table.styles[styleProp] = polyfills_1.assign.apply(void 0, __spreadArrays([{}], styles));
    };
    // Merge styles one level deeper
    for (var _i = 0, _a = Object.keys(table.styles); _i < _a.length; _i++) {
        var styleProp = _a[_i];
        _loop_1(styleProp);
    }
    // Append hooks
    for (var _b = 0, allOptions_1 = allOptions; _b < allOptions_1.length; _b++) {
        var opts = allOptions_1[_b];
        for (var _c = 0, _d = Object.keys(table.cellHooks); _c < _d.length; _c++) {
            var hookName = _d[_c];
            if (opts && typeof opts[hookName] === 'function') {
                table.cellHooks[hookName].push(opts[hookName]);
            }
        }
    }
    table.settings = polyfills_1.assign.apply(void 0, __spreadArrays([{}, config_1.defaultConfig()], allOptions));
    table.settings.margin = common_1.marginOrPadding(table.settings.margin, config_1.defaultConfig().margin);
    if (table.settings.theme === 'auto') {
        table.settings.theme = table.settings.useCss ? 'plain' : 'striped';
    }
    if (table.settings.startY === false) {
        delete table.settings.startY;
    }
    var previous = state_1.default().doc.previousAutoTable;
    var isSamePageAsPrevious = previous &&
        previous.startPageNumber + previous.pageNumber - 1 === state_1.default().pageNumber();
    if (table.settings.startY == null && isSamePageAsPrevious) {
        table.settings.startY = previous.finalY + 20 / state_1.default().scaleFactor();
    }
    var htmlContent = {};
    if (table.settings.html) {
        htmlContent =
            htmlParser_1.parseHtml(table.settings.html, table.settings.includeHiddenHtml, table.settings.useCss) || {};
    }
    table.settings.head = htmlContent.head || table.settings.head || [];
    table.settings.body = htmlContent.body || table.settings.body || [];
    table.settings.foot = htmlContent.foot || table.settings.foot || [];
    parseContent(table);
    table.minWidth = table.columns.reduce(function (total, col) { return total + col.minWidth; }, 0);
    table.wrappedWidth = table.columns.reduce(function (total, col) { return total + col.wrappedWidth; }, 0);
    if (typeof table.settings.tableWidth === 'number') {
        table.width = table.settings.tableWidth;
    }
    else if (table.settings.tableWidth === 'wrap') {
        table.width = table.wrappedWidth;
    }
    else {
        table.width =
            state_1.default().pageWidth() - table.margin('left') - table.margin('right');
    }
    return table;
}
exports.parseInput = parseInput;
function parseUserArguments(args) {
    // Normal initialization on format doc.autoTable(options)
    if (args.length === 1) {
        return args[0];
    }
    else {
        // Deprecated initialization on format doc.autoTable(columns, body, [options])
        var opts = args[2] || {};
        opts.body = args[1];
        opts.columns = args[0];
        opts.columns.forEach(function (col) {
            // Support v2 title prop in v3
            if (typeof col === 'object' && col.header == null) {
                col.header = col.title;
            }
        });
        return opts;
    }
}
function parseContent(table) {
    var settings = table.settings;
    table.columns = getTableColumns(settings);
    var _loop_2 = function (sectionName) {
        var rowSpansLeftForColumn = {};
        var sectionRows = settings[sectionName];
        if (sectionRows.length === 0 &&
            settings.columns &&
            sectionName !== 'body') {
            // If no head or foot is set, try generating one with content in columns
            var sectionRow = generateSectionRowFromColumnData(table, sectionName);
            if (sectionRow) {
                sectionRows.push(sectionRow);
            }
        }
        sectionRows.forEach(function (rawRow, rowIndex) {
            var skippedRowForRowSpans = 0;
            var row = new models_1.Row(rawRow, rowIndex, sectionName);
            table[sectionName].push(row);
            var colSpansAdded = 0;
            var columnSpansLeft = 0;
            for (var _i = 0, _a = table.columns; _i < _a.length; _i++) {
                var column = _a[_i];
                if (rowSpansLeftForColumn[column.index] == null ||
                    rowSpansLeftForColumn[column.index].left === 0) {
                    if (columnSpansLeft === 0) {
                        var rawCell = void 0;
                        if (Array.isArray(rawRow)) {
                            rawCell =
                                rawRow[column.index - colSpansAdded - skippedRowForRowSpans];
                        }
                        else {
                            rawCell = rawRow[column.dataKey];
                        }
                        var styles = cellStyles(sectionName, column, rowIndex);
                        var cell = new models_1.Cell(rawCell, styles, sectionName);
                        // dataKey is not used internally anymore but keep for backwards compat in hooks
                        row.cells[column.dataKey] = cell;
                        row.cells[column.index] = cell;
                        columnSpansLeft = cell.colSpan - 1;
                        rowSpansLeftForColumn[column.index] = {
                            left: cell.rowSpan - 1,
                            times: columnSpansLeft,
                        };
                    }
                    else {
                        columnSpansLeft--;
                        colSpansAdded++;
                    }
                }
                else {
                    rowSpansLeftForColumn[column.index].left--;
                    columnSpansLeft = rowSpansLeftForColumn[column.index].times;
                    skippedRowForRowSpans++;
                }
            }
        });
    };
    for (var _i = 0, _a = ['head', 'body', 'foot']; _i < _a.length; _i++) {
        var sectionName = _a[_i];
        _loop_2(sectionName);
    }
    table.allRows().forEach(function (row) {
        for (var _i = 0, _a = table.columns; _i < _a.length; _i++) {
            var column = _a[_i];
            var cell = row.cells[column.index];
            if (!cell)
                continue;
            table.callCellHooks(table.cellHooks.didParseCell, cell, row, column);
            cell.contentWidth =
                cell.padding('horizontal') + common_1.getStringWidth(cell.text, cell.styles);
            if (typeof cell.styles.cellWidth === 'number') {
                cell.minWidth = cell.styles.cellWidth;
                cell.wrappedWidth = cell.styles.cellWidth;
            }
            else if (cell.styles.cellWidth === 'wrap') {
                cell.minWidth = cell.contentWidth;
                cell.wrappedWidth = cell.contentWidth;
            }
            else {
                // auto
                var defaultMinWidth = 10 / state_1.default().scaleFactor();
                cell.minWidth = cell.styles.minCellWidth || defaultMinWidth;
                cell.wrappedWidth = cell.contentWidth;
                if (cell.minWidth > cell.wrappedWidth) {
                    cell.wrappedWidth = cell.minWidth;
                }
            }
        }
    });
    table.allRows().forEach(function (row) {
        for (var _i = 0, _a = table.columns; _i < _a.length; _i++) {
            var column = _a[_i];
            var cell = row.cells[column.index];
            // For now we ignore the minWidth and wrappedWidth of colspan cells when calculating colspan widths.
            // Could probably be improved upon however.
            if (cell && cell.colSpan === 1) {
                if (cell.wrappedWidth > column.wrappedWidth) {
                    column.wrappedWidth = cell.wrappedWidth;
                }
                if (cell.minWidth > column.minWidth) {
                    column.minWidth = cell.minWidth;
                }
            }
            else {
                // Respect cellWidth set in columnStyles even if there is no cells for this column
                // or of it the column only have colspan cells. Since the width of colspan cells
                // does not affect the width of columns, setting columnStyles cellWidth enables the
                // user to at least do it manually.
                // Note that this is not perfect for now since for example row and table styles are
                // not accounted for
                var columnStyles = table.styles.columnStyles[column.dataKey] ||
                    table.styles.columnStyles[column.index] ||
                    {};
                var cellWidth = columnStyles.cellWidth;
                if (cellWidth && typeof cellWidth === 'number') {
                    column.minWidth = cellWidth;
                    column.wrappedWidth = cellWidth;
                }
            }
            if (cell) {
                // Make sure all columns get at least min width even though width calculations are not based on them
                if (cell.colSpan > 1 && !column.minWidth) {
                    column.minWidth = cell.minWidth;
                }
                if (cell.colSpan > 1 && !column.wrappedWidth) {
                    column.wrappedWidth = cell.minWidth;
                }
                table.callCellHooks(table.cellHooks.didParseCell, cell, row, column);
            }
        }
    });
}
function generateSectionRowFromColumnData(table, sectionName) {
    var sectionRow = {};
    table.columns.forEach(function (col) {
        var columnData = col.raw;
        if (sectionName === 'head') {
            var val = columnData && columnData.header ? columnData.header : columnData;
            if (val) {
                sectionRow[col.dataKey] = val;
            }
        }
        else if (sectionName === 'foot' && columnData.footer) {
            sectionRow[col.dataKey] = columnData.footer;
        }
    });
    return Object.keys(sectionRow).length > 0 ? sectionRow : null;
}
function getTableColumns(settings) {
    if (settings.columns) {
        var cols = settings.columns.map(function (input, index) {
            var key = input.dataKey || input.key || index;
            return new models_1.Column(key, input, index);
        });
        return cols;
    }
    else {
        var firstRow_1 = settings.head[0] || settings.body[0] || settings.foot[0] || [];
        var columns_1 = [];
        Object.keys(firstRow_1)
            .filter(function (key) { return key !== '_element'; })
            .forEach(function (key) {
            var colSpan = firstRow_1[key] && firstRow_1[key].colSpan ? firstRow_1[key].colSpan : 1;
            for (var i = 0; i < colSpan; i++) {
                var id = void 0;
                if (Array.isArray(firstRow_1)) {
                    id = columns_1.length;
                }
                else {
                    id = key + (i > 0 ? "_" + i : '');
                }
                columns_1.push(new models_1.Column(id, id, columns_1.length));
            }
        });
        return columns_1;
    }
}
function cellStyles(sectionName, column, rowIndex) {
    var table = state_1.default().table;
    var theme = config_1.getTheme(table.settings.theme);
    var otherStyles = [
        theme.table,
        theme[sectionName],
        table.styles.styles,
        table.styles[sectionName + "Styles"],
    ];
    var columnStyles = table.styles.columnStyles[column.dataKey] ||
        table.styles.columnStyles[column.index] ||
        {};
    var colStyles = sectionName === 'body' ? columnStyles : {};
    var rowStyles = sectionName === 'body' && rowIndex % 2 === 0
        ? polyfills_1.assign({}, theme.alternateRow, table.styles.alternateRowStyles)
        : {};
    return polyfills_1.assign.apply(void 0, __spreadArrays([config_1.defaultStyles()], __spreadArrays(otherStyles, [rowStyles, colStyles])));
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Limitations
// - No support for border spacing
// - No support for transparency
var common_1 = __webpack_require__(1);
var state_1 = __webpack_require__(0);
function parseCss(element, scaleFactor, ignored) {
    if (ignored === void 0) { ignored = []; }
    var result = {};
    var style = window.getComputedStyle(element);
    function assign(name, value, accepted) {
        if (accepted === void 0) { accepted = []; }
        if ((accepted.length === 0 || accepted.indexOf(value) !== -1) &&
            ignored.indexOf(name) === -1) {
            if (value === 0 || value) {
                result[name] = value;
            }
        }
    }
    var pxScaleFactor = 96 / 72;
    assign('fillColor', parseColor(element, 'backgroundColor'));
    assign('fontStyle', parseFontStyle(style));
    assign('textColor', parseColor(element, 'color'));
    assign('halign', style.textAlign, ['left', 'right', 'center', 'justify']);
    assign('valign', style.verticalAlign, ['middle', 'bottom', 'top']);
    assign('fontSize', parseInt(style.fontSize || '') / pxScaleFactor);
    assign('cellPadding', parsePadding([
        style.paddingTop,
        style.paddingRight,
        style.paddingBottom,
        style.paddingLeft,
    ], style.fontSize, style.lineHeight, scaleFactor));
    // style.borderWidth only works in chrome (borderTopWidth etc works in firefox and ie as well)
    assign('lineWidth', parseInt(style.borderTopWidth || '') / pxScaleFactor / scaleFactor);
    assign('lineColor', parseColor(element, 'borderTopColor'));
    var font = (style.fontFamily || '').toLowerCase();
    if (state_1.default().doc.getFontList()[font]) {
        assign('font', font);
    }
    return result;
}
exports.parseCss = parseCss;
function parseFontStyle(style) {
    var res = '';
    if (style.fontWeight === 'bold' ||
        style.fontWeight === 'bolder' ||
        parseInt(style.fontWeight) >= 700) {
        res += 'bold';
    }
    if (style.fontStyle === 'italic' || style.fontStyle === 'oblique') {
        res += 'italic';
    }
    return res;
}
function parseColor(element, colorProp) {
    var cssColor = realColor(element, colorProp);
    if (!cssColor)
        return null;
    var rgba = cssColor.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d*\.?\d*))?\)$/);
    if (!rgba || !Array.isArray(rgba)) {
        return null;
    }
    var color = [parseInt(rgba[1]), parseInt(rgba[2]), parseInt(rgba[3])];
    var alpha = parseInt(rgba[4]);
    if (alpha === 0 || isNaN(color[0]) || isNaN(color[1]) || isNaN(color[2])) {
        return null;
    }
    return color;
}
function realColor(elem, colorProp) {
    if (!elem)
        return null;
    var bg = window.getComputedStyle(elem)[colorProp];
    if (bg === 'rgba(0, 0, 0, 0)' ||
        bg === 'transparent' ||
        bg === 'initial' ||
        bg === 'inherit') {
        return realColor(elem.parentElement, colorProp);
    }
    else {
        return bg;
    }
}
function parsePadding(val, fontSize, lineHeight, scaleFactor) {
    if (!val)
        return null;
    var pxScaleFactor = 96 / (72 / scaleFactor);
    var linePadding = (parseInt(lineHeight) - parseInt(fontSize)) / scaleFactor / 2;
    var padding = val.map(function (n) {
        return parseInt(n) / pxScaleFactor;
    });
    padding = common_1.marginOrPadding(padding, 0);
    if (linePadding > padding.top) {
        padding.top = linePadding;
    }
    if (linePadding > padding.bottom) {
        padding.bottom = linePadding;
    }
    return padding;
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(1);
function default_1(allOptions) {
    var _loop_1 = function (settings) {
        if (settings && typeof settings !== 'object') {
            console.error('The options parameter should be of type object, is: ' + typeof settings);
        }
        if (typeof settings.extendWidth !== 'undefined') {
            settings.tableWidth = settings.extendWidth ? 'auto' : 'wrap';
            console.error('Use of deprecated option: extendWidth, use tableWidth instead.');
        }
        if (typeof settings.margins !== 'undefined') {
            if (typeof settings.margin === 'undefined')
                settings.margin = settings.margins;
            console.error('Use of deprecated option: margins, use margin instead.');
        }
        if (settings.startY && typeof settings.startY !== 'number') {
            console.error('Invalid value for startY option', settings.startY);
            delete settings.startY;
        }
        if (!settings.didDrawPage &&
            (settings.afterPageContent ||
                settings.beforePageContent ||
                settings.afterPageAdd)) {
            console.error('The afterPageContent, beforePageContent and afterPageAdd hooks are deprecated. Use didDrawPage instead');
            settings.didDrawPage = function (data) {
                common_1.applyUserStyles();
                if (settings.beforePageContent)
                    settings.beforePageContent(data);
                common_1.applyUserStyles();
                if (settings.afterPageContent)
                    settings.afterPageContent(data);
                common_1.applyUserStyles();
                if (settings.afterPageAdd && data.pageNumber > 1) {
                    data.afterPageAdd(data);
                }
                common_1.applyUserStyles();
            };
        }
        ;
        [
            'createdHeaderCell',
            'drawHeaderRow',
            'drawRow',
            'drawHeaderCell',
        ].forEach(function (name) {
            if (settings[name]) {
                console.error("The \"" + name + "\" hook has changed in version 3.0, check the changelog for how to migrate.");
            }
        });
        [
            ['showFoot', 'showFooter'],
            ['showHead', 'showHeader'],
            ['didDrawPage', 'addPageContent'],
            ['didParseCell', 'createdCell'],
            ['headStyles', 'headerStyles'],
        ].forEach(function (_a) {
            var current = _a[0], deprecated = _a[1];
            if (settings[deprecated]) {
                console.error("Use of deprecated option " + deprecated + ". Use " + current + " instead");
                settings[current] = settings[deprecated];
            }
        });
        [
            ['padding', 'cellPadding'],
            ['lineHeight', 'rowHeight'],
            'fontSize',
            'overflow',
        ].forEach(function (o) {
            var deprecatedOption = typeof o === 'string' ? o : o[0];
            var style = typeof o === 'string' ? o : o[1];
            if (typeof settings[deprecatedOption] !== 'undefined') {
                if (typeof settings.styles[style] === 'undefined') {
                    settings.styles[style] = settings[deprecatedOption];
                }
                console.error('Use of deprecated option: ' +
                    deprecatedOption +
                    ', use the style ' +
                    style +
                    ' instead.');
            }
        });
        for (var _i = 0, _a = [
            'styles',
            'bodyStyles',
            'headStyles',
            'footStyles',
        ]; _i < _a.length; _i++) {
            var styleProp = _a[_i];
            checkStyles(settings[styleProp] || {});
        }
        var columnStyles = settings['columnStyles'] || {};
        for (var _b = 0, _c = Object.keys(columnStyles); _b < _c.length; _b++) {
            var key = _c[_b];
            checkStyles(columnStyles[key] || {});
        }
    };
    for (var _i = 0, allOptions_1 = allOptions; _i < allOptions_1.length; _i++) {
        var settings = allOptions_1[_i];
        _loop_1(settings);
    }
}
exports.default = default_1;
function checkStyles(styles) {
    if (styles.rowHeight) {
        console.error('Use of deprecated style rowHeight. It is renamed to minCellHeight.');
        if (!styles.minCellHeight) {
            styles.minCellHeight = styles.rowHeight;
        }
    }
    else if (styles.columnWidth) {
        console.error('Use of deprecated style columnWidth. It is renamed to cellWidth.');
        if (!styles.cellWidth) {
            styles.cellWidth = styles.columnWidth;
        }
    }
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var jsPDF = __webpack_require__(7);
/**
 * Improved text function with halign and valign support
 * Inspiration from: http://stackoverflow.com/questions/28327510/align-text-right-using-jspdf/28433113#28433113
 */
jsPDF.API.autoTableText = function (text, x, y, styles) {
    styles = styles || {};
    var FONT_ROW_RATIO = 1.15;
    if (typeof x !== 'number' || typeof y !== 'number') {
        console.error('The x and y parameters are required. Missing for text: ', text);
    }
    var k = this.internal.scaleFactor;
    var fontSize = this.internal.getFontSize() / k;
    var splitRegex = /\r\n|\r|\n/g;
    var splitText = null;
    var lineCount = 1;
    if (styles.valign === 'middle' ||
        styles.valign === 'bottom' ||
        styles.halign === 'center' ||
        styles.halign === 'right') {
        splitText = typeof text === 'string' ? text.split(splitRegex) : text;
        lineCount = splitText.length || 1;
    }
    // Align the top
    y += fontSize * (2 - FONT_ROW_RATIO);
    if (styles.valign === 'middle')
        y -= (lineCount / 2) * fontSize * FONT_ROW_RATIO;
    else if (styles.valign === 'bottom')
        y -= lineCount * fontSize * FONT_ROW_RATIO;
    if (styles.halign === 'center' || styles.halign === 'right') {
        var alignSize = fontSize;
        if (styles.halign === 'center')
            alignSize *= 0.5;
        if (lineCount >= 1) {
            for (var iLine = 0; iLine < splitText.length; iLine++) {
                this.text(splitText[iLine], x - this.getStringUnitWidth(splitText[iLine]) * alignSize, y);
                y += fontSize * FONT_ROW_RATIO;
            }
            return this;
        }
        x -= this.getStringUnitWidth(text) * alignSize;
    }
    if (styles.halign === 'justify') {
        this.text(text, x, y, {
            maxWidth: styles.maxWidth || 100,
            align: 'justify',
        });
    }
    else {
        this.text(text, x, y);
    }
    return this;
};


/***/ })
/******/ ]);
});

/***/ }),

/***/ 2675:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Validator = module.exports.Validator = __webpack_require__(2676);

module.exports.ValidatorResult = __webpack_require__(2684).ValidatorResult;
module.exports.ValidationError = __webpack_require__(2684).ValidationError;
module.exports.SchemaError = __webpack_require__(2684).SchemaError;
module.exports.SchemaScanResult = __webpack_require__(2685).SchemaScanResult;
module.exports.scan = __webpack_require__(2685).scan;

module.exports.validate = function (instance, schema, options) {
  var v = new Validator();
  return v.validate(instance, schema, options);
};


/***/ }),

/***/ 2676:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var urilib = __webpack_require__(2677);

var attribute = __webpack_require__(2683);
var helpers = __webpack_require__(2684);
var scanSchema = __webpack_require__(2685).scan;
var ValidatorResult = helpers.ValidatorResult;
var SchemaError = helpers.SchemaError;
var SchemaContext = helpers.SchemaContext;
//var anonymousBase = 'vnd.jsonschema:///';
var anonymousBase = '/';

/**
 * Creates a new Validator object
 * @name Validator
 * @constructor
 */
var Validator = function Validator () {
  // Allow a validator instance to override global custom formats or to have their
  // own custom formats.
  this.customFormats = Object.create(Validator.prototype.customFormats);
  this.schemas = {};
  this.unresolvedRefs = [];

  // Use Object.create to make this extensible without Validator instances stepping on each other's toes.
  this.types = Object.create(types);
  this.attributes = Object.create(attribute.validators);
};

// Allow formats to be registered globally.
Validator.prototype.customFormats = {};

// Hint at the presence of a property
Validator.prototype.schemas = null;
Validator.prototype.types = null;
Validator.prototype.attributes = null;
Validator.prototype.unresolvedRefs = null;

/**
 * Adds a schema with a certain urn to the Validator instance.
 * @param schema
 * @param urn
 * @return {Object}
 */
Validator.prototype.addSchema = function addSchema (schema, base) {
  var self = this;
  if (!schema) {
    return null;
  }
  var scan = scanSchema(base||anonymousBase, schema);
  var ourUri = base || schema.id;
  for(var uri in scan.id){
    this.schemas[uri] = scan.id[uri];
  }
  for(var uri in scan.ref){
    this.unresolvedRefs.push(uri);
  }
  this.unresolvedRefs = this.unresolvedRefs.filter(function(uri){
    return typeof self.schemas[uri]==='undefined';
  });
  return this.schemas[ourUri];
};

Validator.prototype.addSubSchemaArray = function addSubSchemaArray(baseuri, schemas) {
  if(!(schemas instanceof Array)) return;
  for(var i=0; i<schemas.length; i++){
    this.addSubSchema(baseuri, schemas[i]);
  }
};

Validator.prototype.addSubSchemaObject = function addSubSchemaArray(baseuri, schemas) {
  if(!schemas || typeof schemas!='object') return;
  for(var p in schemas){
    this.addSubSchema(baseuri, schemas[p]);
  }
};



/**
 * Sets all the schemas of the Validator instance.
 * @param schemas
 */
Validator.prototype.setSchemas = function setSchemas (schemas) {
  this.schemas = schemas;
};

/**
 * Returns the schema of a certain urn
 * @param urn
 */
Validator.prototype.getSchema = function getSchema (urn) {
  return this.schemas[urn];
};

/**
 * Validates instance against the provided schema
 * @param instance
 * @param schema
 * @param [options]
 * @param [ctx]
 * @return {Array}
 */
Validator.prototype.validate = function validate (instance, schema, options, ctx) {
  if (!options) {
    options = {};
  }
  var propertyName = options.propertyName || 'instance';
  // This will work so long as the function at uri.resolve() will resolve a relative URI to a relative URI
  var base = urilib.resolve(options.base||anonymousBase, schema.id||'');
  if(!ctx){
    ctx = new SchemaContext(schema, options, propertyName, base, Object.create(this.schemas));
    if (!ctx.schemas[base]) {
      ctx.schemas[base] = schema;
    }
    var found = scanSchema(base, schema);
    for(var n in found.id){
      var sch = found.id[n];
      ctx.schemas[n] = sch;
    }
  }
  if (schema) {
    var result = this.validateSchema(instance, schema, options, ctx);
    if (!result) {
      throw new Error('Result undefined');
    }
    return result;
  }
  throw new SchemaError('no schema specified', schema);
};

/**
* @param Object schema
* @return mixed schema uri or false
*/
function shouldResolve(schema) {
  var ref = (typeof schema === 'string') ? schema : schema.$ref;
  if (typeof ref=='string') return ref;
  return false;
}

/**
 * Validates an instance against the schema (the actual work horse)
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @private
 * @return {ValidatorResult}
 */
Validator.prototype.validateSchema = function validateSchema (instance, schema, options, ctx) {
  var result = new ValidatorResult(instance, schema, options, ctx);

    // Support for the true/false schemas
  if(typeof schema==='boolean') {
    if(schema===true){
      // `true` is always valid
      schema = {};
    }else if(schema===false){
      // `false` is always invalid
      schema = {type: []};
    }
  }else if(!schema){
    // This might be a string
    throw new Error("schema is undefined");
  }

  if (schema['extends']) {
    if (schema['extends'] instanceof Array) {
      var schemaobj = {schema: schema, ctx: ctx};
      schema['extends'].forEach(this.schemaTraverser.bind(this, schemaobj));
      schema = schemaobj.schema;
      schemaobj.schema = null;
      schemaobj.ctx = null;
      schemaobj = null;
    } else {
      schema = helpers.deepMerge(schema, this.superResolve(schema['extends'], ctx));
    }
  }

  // If passed a string argument, load that schema URI
  var switchSchema;
  if (switchSchema = shouldResolve(schema)) {
    var resolved = this.resolve(schema, switchSchema, ctx);
    var subctx = new SchemaContext(resolved.subschema, options, ctx.propertyPath, resolved.switchSchema, ctx.schemas);
    return this.validateSchema(instance, resolved.subschema, options, subctx);
  }

  var skipAttributes = options && options.skipAttributes || [];
  // Validate each schema attribute against the instance
  for (var key in schema) {
    if (!attribute.ignoreProperties[key] && skipAttributes.indexOf(key) < 0) {
      var validatorErr = null;
      var validator = this.attributes[key];
      if (validator) {
        validatorErr = validator.call(this, instance, schema, options, ctx);
      } else if (options.allowUnknownAttributes === false) {
        // This represents an error with the schema itself, not an invalid instance
        throw new SchemaError("Unsupported attribute: " + key, schema);
      }
      if (validatorErr) {
        result.importErrors(validatorErr);
      }
    }
  }

  if (typeof options.rewrite == 'function') {
    var value = options.rewrite.call(this, instance, schema, options, ctx);
    result.instance = value;
  }
  return result;
};

/**
* @private
* @param Object schema
* @param SchemaContext ctx
* @returns Object schema or resolved schema
*/
Validator.prototype.schemaTraverser = function schemaTraverser (schemaobj, s) {
  schemaobj.schema = helpers.deepMerge(schemaobj.schema, this.superResolve(s, schemaobj.ctx));
}

/**
* @private
* @param Object schema
* @param SchemaContext ctx
* @returns Object schema or resolved schema
*/
Validator.prototype.superResolve = function superResolve (schema, ctx) {
  var ref;
  if(ref = shouldResolve(schema)) {
    return this.resolve(schema, ref, ctx).subschema;
  }
  return schema;
}

/**
* @private
* @param Object schema
* @param Object switchSchema
* @param SchemaContext ctx
* @return Object resolved schemas {subschema:String, switchSchema: String}
* @throws SchemaError
*/
Validator.prototype.resolve = function resolve (schema, switchSchema, ctx) {
  switchSchema = ctx.resolve(switchSchema);
  // First see if the schema exists under the provided URI
  if (ctx.schemas[switchSchema]) {
    return {subschema: ctx.schemas[switchSchema], switchSchema: switchSchema};
  }
  // Else try walking the property pointer
  var parsed = urilib.parse(switchSchema);
  var fragment = parsed && parsed.hash;
  var document = fragment && fragment.length && switchSchema.substr(0, switchSchema.length - fragment.length);
  if (!document || !ctx.schemas[document]) {
    throw new SchemaError("no such schema <" + switchSchema + ">", schema);
  }
  var subschema = helpers.objectGetPath(ctx.schemas[document], fragment.substr(1));
  if(subschema===undefined){
    throw new SchemaError("no such schema " + fragment + " located in <" + document + ">", schema);
  }
  return {subschema: subschema, switchSchema: switchSchema};
};

/**
 * Tests whether the instance if of a certain type.
 * @private
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @param type
 * @return {boolean}
 */
Validator.prototype.testType = function validateType (instance, schema, options, ctx, type) {
  if (typeof this.types[type] == 'function') {
    return this.types[type].call(this, instance);
  }
  if (type && typeof type == 'object') {
    var res = this.validateSchema(instance, type, options, ctx);
    return res === undefined || !(res && res.errors.length);
  }
  // Undefined or properties not on the list are acceptable, same as not being defined
  return true;
};

var types = Validator.prototype.types = {};
types.string = function testString (instance) {
  return typeof instance == 'string';
};
types.number = function testNumber (instance) {
  // isFinite returns false for NaN, Infinity, and -Infinity
  return typeof instance == 'number' && isFinite(instance);
};
types.integer = function testInteger (instance) {
  return (typeof instance == 'number') && instance % 1 === 0;
};
types.boolean = function testBoolean (instance) {
  return typeof instance == 'boolean';
};
types.array = function testArray (instance) {
  return Array.isArray(instance);
};
types['null'] = function testNull (instance) {
  return instance === null;
};
types.date = function testDate (instance) {
  return instance instanceof Date;
};
types.any = function testAny (instance) {
  return true;
};
types.object = function testObject (instance) {
  // TODO: fix this - see #15
  return instance && (typeof instance) === 'object' && !(instance instanceof Array) && !(instance instanceof Date);
};

module.exports = Validator;


/***/ }),

/***/ 2677:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(2678);
var util = __webpack_require__(2679);

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(2680);

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ 2678:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports =  true && exports &&
		!exports.nodeType && exports;
	var freeModule =  true && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(741)(module), __webpack_require__(5)))

/***/ }),

/***/ 2679:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),

/***/ 2680:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(2681);
exports.encode = exports.stringify = __webpack_require__(2682);


/***/ }),

/***/ 2681:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ 2682:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ 2683:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var helpers = __webpack_require__(2684);

/** @type ValidatorResult */
var ValidatorResult = helpers.ValidatorResult;
/** @type SchemaError */
var SchemaError = helpers.SchemaError;

var attribute = {};

attribute.ignoreProperties = {
  // informative properties
  'id': true,
  'default': true,
  'description': true,
  'title': true,
  // arguments to other properties
  'exclusiveMinimum': true,
  'exclusiveMaximum': true,
  'additionalItems': true,
  // special-handled properties
  '$schema': true,
  '$ref': true,
  'extends': true
};

/**
 * @name validators
 */
var validators = attribute.validators = {};

/**
 * Validates whether the instance if of a certain type
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @return {ValidatorResult|null}
 */
validators.type = function validateType (instance, schema, options, ctx) {
  // Ignore undefined instances
  if (instance === undefined) {
    return null;
  }
  var result = new ValidatorResult(instance, schema, options, ctx);
  var types = Array.isArray(schema.type) ? schema.type : [schema.type];
  if (!types.some(this.testType.bind(this, instance, schema, options, ctx))) {
    var list = types.map(function (v) {
      return v.id && ('<' + v.id + '>') || (v+'');
    });
    result.addError({
      name: 'type',
      argument: list,
      message: "is not of a type(s) " + list,
    });
  }
  return result;
};

function testSchemaNoThrow(instance, options, ctx, callback, schema){
  var throwError = options.throwError;
  options.throwError = false;
  var res = this.validateSchema(instance, schema, options, ctx);
  options.throwError = throwError;

  if (! res.valid && callback instanceof Function) {
    callback(res);
  }
  return res.valid;
}

/**
 * Validates whether the instance matches some of the given schemas
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @return {ValidatorResult|null}
 */
validators.anyOf = function validateAnyOf (instance, schema, options, ctx) {
  // Ignore undefined instances
  if (instance === undefined) {
    return null;
  }
  var result = new ValidatorResult(instance, schema, options, ctx);
  var inner = new ValidatorResult(instance, schema, options, ctx);
  if (!Array.isArray(schema.anyOf)){
    throw new SchemaError("anyOf must be an array");
  }
  if (!schema.anyOf.some(
    testSchemaNoThrow.bind(
      this, instance, options, ctx, function(res){inner.importErrors(res);}
      ))) {
    var list = schema.anyOf.map(function (v, i) {
      return (v.id && ('<' + v.id + '>')) || (v.title && JSON.stringify(v.title)) || (v['$ref'] && ('<' + v['$ref'] + '>')) || '[subschema '+i+']';
    });
    if (options.nestedErrors) {
      result.importErrors(inner);
    }
    result.addError({
      name: 'anyOf',
      argument: list,
      message: "is not any of " + list.join(','),
    });
  }
  return result;
};

/**
 * Validates whether the instance matches every given schema
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @return {String|null}
 */
validators.allOf = function validateAllOf (instance, schema, options, ctx) {
  // Ignore undefined instances
  if (instance === undefined) {
    return null;
  }
  if (!Array.isArray(schema.allOf)){
    throw new SchemaError("allOf must be an array");
  }
  var result = new ValidatorResult(instance, schema, options, ctx);
  var self = this;
  schema.allOf.forEach(function(v, i){
    var valid = self.validateSchema(instance, v, options, ctx);
    if(!valid.valid){
      var msg = (v.id && ('<' + v.id + '>')) || (v.title && JSON.stringify(v.title)) || (v['$ref'] && ('<' + v['$ref'] + '>')) || '[subschema '+i+']';
      result.addError({
        name: 'allOf',
        argument: { id: msg, length: valid.errors.length, valid: valid },
        message: 'does not match allOf schema ' + msg + ' with ' + valid.errors.length + ' error[s]:',
      });
      result.importErrors(valid);
    }
  });
  return result;
};

/**
 * Validates whether the instance matches exactly one of the given schemas
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @return {String|null}
 */
validators.oneOf = function validateOneOf (instance, schema, options, ctx) {
  // Ignore undefined instances
  if (instance === undefined) {
    return null;
  }
  if (!Array.isArray(schema.oneOf)){
    throw new SchemaError("oneOf must be an array");
  }
  var result = new ValidatorResult(instance, schema, options, ctx);
  var inner = new ValidatorResult(instance, schema, options, ctx);
  var count = schema.oneOf.filter(
    testSchemaNoThrow.bind(
      this, instance, options, ctx, function(res) {inner.importErrors(res);}
      ) ).length;
  var list = schema.oneOf.map(function (v, i) {
    return (v.id && ('<' + v.id + '>')) || (v.title && JSON.stringify(v.title)) || (v['$ref'] && ('<' + v['$ref'] + '>')) || '[subschema '+i+']';
  });
  if (count!==1) {
    if (options.nestedErrors) {
      result.importErrors(inner);
    }
    result.addError({
      name: 'oneOf',
      argument: list,
      message: "is not exactly one from " + list.join(','),
    });
  }
  return result;
};

/**
 * Validates properties
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @return {String|null|ValidatorResult}
 */
validators.properties = function validateProperties (instance, schema, options, ctx) {
  if(!this.types.object(instance)) return;
  var result = new ValidatorResult(instance, schema, options, ctx);
  var properties = schema.properties || {};
  for (var property in properties) {
    if (typeof options.preValidateProperty == 'function') {
      options.preValidateProperty(instance, property, properties[property], options, ctx);
    }

    var prop = Object.hasOwnProperty.call(instance, property) ? instance[property] : undefined;
    var res = this.validateSchema(prop, properties[property], options, ctx.makeChild(properties[property], property));
    if(res.instance !== result.instance[property]) result.instance[property] = res.instance;
    result.importErrors(res);
  }
  return result;
};

/**
 * Test a specific property within in instance against the additionalProperties schema attribute
 * This ignores properties with definitions in the properties schema attribute, but no other attributes.
 * If too many more types of property-existance tests pop up they may need their own class of tests (like `type` has)
 * @private
 * @return {boolean}
 */
function testAdditionalProperty (instance, schema, options, ctx, property, result) {
  if(!this.types.object(instance)) return;
  if (schema.properties && schema.properties[property] !== undefined) {
    return;
  }
  if (schema.additionalProperties === false) {
    result.addError({
      name: 'additionalProperties',
      argument: property,
      message: "additionalProperty " + JSON.stringify(property) + " exists in instance when not allowed",
    });
  } else {
    var additionalProperties = schema.additionalProperties || {};

    if (typeof options.preValidateProperty == 'function') {
      options.preValidateProperty(instance, property, additionalProperties, options, ctx);
    }

    var res = this.validateSchema(instance[property], additionalProperties, options, ctx.makeChild(additionalProperties, property));
    if(res.instance !== result.instance[property]) result.instance[property] = res.instance;
    result.importErrors(res);
  }
}

/**
 * Validates patternProperties
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @return {String|null|ValidatorResult}
 */
validators.patternProperties = function validatePatternProperties (instance, schema, options, ctx) {
  if(!this.types.object(instance)) return;
  var result = new ValidatorResult(instance, schema, options, ctx);
  var patternProperties = schema.patternProperties || {};

  for (var property in instance) {
    var test = true;
    for (var pattern in patternProperties) {
      var expr = new RegExp(pattern);
      if (!expr.test(property)) {
        continue;
      }
      test = false;

      if (typeof options.preValidateProperty == 'function') {
        options.preValidateProperty(instance, property, patternProperties[pattern], options, ctx);
      }

      var res = this.validateSchema(instance[property], patternProperties[pattern], options, ctx.makeChild(patternProperties[pattern], property));
      if(res.instance !== result.instance[property]) result.instance[property] = res.instance;
      result.importErrors(res);
    }
    if (test) {
      testAdditionalProperty.call(this, instance, schema, options, ctx, property, result);
    }
  }

  return result;
};

/**
 * Validates additionalProperties
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @return {String|null|ValidatorResult}
 */
validators.additionalProperties = function validateAdditionalProperties (instance, schema, options, ctx) {
  if(!this.types.object(instance)) return;
  // if patternProperties is defined then we'll test when that one is called instead
  if (schema.patternProperties) {
    return null;
  }
  var result = new ValidatorResult(instance, schema, options, ctx);
  for (var property in instance) {
    testAdditionalProperty.call(this, instance, schema, options, ctx, property, result);
  }
  return result;
};

/**
 * Validates whether the instance value is at least of a certain length, when the instance value is a string.
 * @param instance
 * @param schema
 * @return {String|null}
 */
validators.minProperties = function validateMinProperties (instance, schema, options, ctx) {
  if (!this.types.object(instance)) return;
  var result = new ValidatorResult(instance, schema, options, ctx);
  var keys = Object.keys(instance);
  if (!(keys.length >= schema.minProperties)) {
    result.addError({
      name: 'minProperties',
      argument: schema.minProperties,
      message: "does not meet minimum property length of " + schema.minProperties,
    })
  }
  return result;
};

/**
 * Validates whether the instance value is at most of a certain length, when the instance value is a string.
 * @param instance
 * @param schema
 * @return {String|null}
 */
validators.maxProperties = function validateMaxProperties (instance, schema, options, ctx) {
  if (!this.types.object(instance)) return;
  var result = new ValidatorResult(instance, schema, options, ctx);
  var keys = Object.keys(instance);
  if (!(keys.length <= schema.maxProperties)) {
    result.addError({
      name: 'maxProperties',
      argument: schema.maxProperties,
      message: "does not meet maximum property length of " + schema.maxProperties,
    });
  }
  return result;
};

/**
 * Validates items when instance is an array
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @return {String|null|ValidatorResult}
 */
validators.items = function validateItems (instance, schema, options, ctx) {
  var self = this;
  if (!this.types.array(instance)) return;
  if (!schema.items) return;
  var result = new ValidatorResult(instance, schema, options, ctx);
  instance.every(function (value, i) {
    var items = Array.isArray(schema.items) ? (schema.items[i] || schema.additionalItems) : schema.items;
    if (items === undefined) {
      return true;
    }
    if (items === false) {
      result.addError({
        name: 'items',
        message: "additionalItems not permitted",
      });
      return false;
    }
    var res = self.validateSchema(value, items, options, ctx.makeChild(items, i));
    if(res.instance !== result.instance[i]) result.instance[i] = res.instance;
    result.importErrors(res);
    return true;
  });
  return result;
};

/**
 * Validates minimum and exclusiveMinimum when the type of the instance value is a number.
 * @param instance
 * @param schema
 * @return {String|null}
 */
validators.minimum = function validateMinimum (instance, schema, options, ctx) {
  if (!this.types.number(instance)) return;
  var result = new ValidatorResult(instance, schema, options, ctx);
  var valid = true;
  if (schema.exclusiveMinimum && schema.exclusiveMinimum === true) {
    valid = instance > schema.minimum;
  } else {
    valid = instance >= schema.minimum;
  }
  if (!valid) {
    result.addError({
      name: 'minimum',
      argument: schema.minimum,
      message: "must have a minimum value of " + schema.minimum,
    });
  }
  return result;
};

/**
 * Validates maximum and exclusiveMaximum when the type of the instance value is a number.
 * @param instance
 * @param schema
 * @return {String|null}
 */
validators.maximum = function validateMaximum (instance, schema, options, ctx) {
  if (!this.types.number(instance)) return;
  var result = new ValidatorResult(instance, schema, options, ctx);
  var valid;
  if (schema.exclusiveMaximum && schema.exclusiveMaximum === true) {
    valid = instance < schema.maximum;
  } else {
    valid = instance <= schema.maximum;
  }
  if (!valid) {
    result.addError({
      name: 'maximum',
      argument: schema.maximum,
      message: "must have a maximum value of " + schema.maximum,
    });
  }
  return result;
};

/**
 * Perform validation for multipleOf and divisibleBy, which are essentially the same.
 * @param instance
 * @param schema
 * @param validationType
 * @param errorMessage
 * @returns {String|null}
 */
var validateMultipleOfOrDivisbleBy = function validateMultipleOfOrDivisbleBy (instance, schema, options, ctx, validationType, errorMessage) {
  if (!this.types.number(instance)) return;

  var validationArgument = schema[validationType];
  if (validationArgument == 0) {
    throw new SchemaError(validationType + " cannot be zero");
  }

  var result = new ValidatorResult(instance, schema, options, ctx);

  var instanceDecimals = helpers.getDecimalPlaces(instance);
  var divisorDecimals = helpers.getDecimalPlaces(validationArgument);

  var maxDecimals = Math.max(instanceDecimals , divisorDecimals);
  var multiplier = Math.pow(10, maxDecimals);

  if (Math.round(instance * multiplier) % Math.round(validationArgument * multiplier) !== 0) {
    result.addError({
      name: validationType,
      argument:  validationArgument,
      message: errorMessage + JSON.stringify(validationArgument)
    });
  }

  return result;
};

/**
 * Validates divisibleBy when the type of the instance value is a number.
 * @param instance
 * @param schema
 * @return {String|null}
 */
validators.multipleOf = function validateMultipleOf (instance, schema, options, ctx) {
 return validateMultipleOfOrDivisbleBy.call(this, instance, schema, options, ctx, "multipleOf", "is not a multiple of (divisible by) ");
};

/**
 * Validates multipleOf when the type of the instance value is a number.
 * @param instance
 * @param schema
 * @return {String|null}
 */
validators.divisibleBy = function validateDivisibleBy (instance, schema, options, ctx) {
  return validateMultipleOfOrDivisbleBy.call(this, instance, schema, options, ctx, "divisibleBy", "is not divisible by (multiple of) ");
};

/**
 * Validates whether the instance value is present.
 * @param instance
 * @param schema
 * @return {String|null}
 */
validators.required = function validateRequired (instance, schema, options, ctx) {
  var result = new ValidatorResult(instance, schema, options, ctx);
  if (instance === undefined && schema.required === true) {
    // A boolean form is implemented for reverse-compatability with schemas written against older drafts
    result.addError({
      name: 'required',
      message: "is required"
    });
  } else if (this.types.object(instance) && Array.isArray(schema.required)) {
    schema.required.forEach(function(n){
      if(instance[n]===undefined){
        result.addError({
          name: 'required',
          argument: n,
          message: "requires property " + JSON.stringify(n),
        });
      }
    });
  }
  return result;
};

/**
 * Validates whether the instance value matches the regular expression, when the instance value is a string.
 * @param instance
 * @param schema
 * @return {String|null}
 */
validators.pattern = function validatePattern (instance, schema, options, ctx) {
  if (!this.types.string(instance)) return;
  var result = new ValidatorResult(instance, schema, options, ctx);
  if (!instance.match(schema.pattern)) {
    result.addError({
      name: 'pattern',
      argument: schema.pattern,
      message: "does not match pattern " + JSON.stringify(schema.pattern.toString()),
    });
  }
  return result;
};

/**
 * Validates whether the instance value is of a certain defined format or a custom
 * format.
 * The following formats are supported for string types:
 *   - date-time
 *   - date
 *   - time
 *   - ip-address
 *   - ipv6
 *   - uri
 *   - color
 *   - host-name
 *   - alpha
 *   - alpha-numeric
 *   - utc-millisec
 * @param instance
 * @param schema
 * @param [options]
 * @param [ctx]
 * @return {String|null}
 */
validators.format = function validateFormat (instance, schema, options, ctx) {
  if (instance===undefined) return;
  var result = new ValidatorResult(instance, schema, options, ctx);
  if (!result.disableFormat && !helpers.isFormat(instance, schema.format, this)) {
    result.addError({
      name: 'format',
      argument: schema.format,
      message: "does not conform to the " + JSON.stringify(schema.format) + " format",
    });
  }
  return result;
};

/**
 * Validates whether the instance value is at least of a certain length, when the instance value is a string.
 * @param instance
 * @param schema
 * @return {String|null}
 */
validators.minLength = function validateMinLength (instance, schema, options, ctx) {
  if (!this.types.string(instance)) return;
  var result = new ValidatorResult(instance, schema, options, ctx);
  var hsp = instance.match(/[\uDC00-\uDFFF]/g);
  var length = instance.length - (hsp ? hsp.length : 0);
  if (!(length >= schema.minLength)) {
    result.addError({
      name: 'minLength',
      argument: schema.minLength,
      message: "does not meet minimum length of " + schema.minLength,
    });
  }
  return result;
};

/**
 * Validates whether the instance value is at most of a certain length, when the instance value is a string.
 * @param instance
 * @param schema
 * @return {String|null}
 */
validators.maxLength = function validateMaxLength (instance, schema, options, ctx) {
  if (!this.types.string(instance)) return;
  var result = new ValidatorResult(instance, schema, options, ctx);
  // TODO if this was already computed in "minLength", use that value instead of re-computing
  var hsp = instance.match(/[\uDC00-\uDFFF]/g);
  var length = instance.length - (hsp ? hsp.length : 0);
  if (!(length <= schema.maxLength)) {
    result.addError({
      name: 'maxLength',
      argument: schema.maxLength,
      message: "does not meet maximum length of " + schema.maxLength,
    });
  }
  return result;
};

/**
 * Validates whether instance contains at least a minimum number of items, when the instance is an Array.
 * @param instance
 * @param schema
 * @return {String|null}
 */
validators.minItems = function validateMinItems (instance, schema, options, ctx) {
  if (!this.types.array(instance)) return;
  var result = new ValidatorResult(instance, schema, options, ctx);
  if (!(instance.length >= schema.minItems)) {
    result.addError({
      name: 'minItems',
      argument: schema.minItems,
      message: "does not meet minimum length of " + schema.minItems,
    });
  }
  return result;
};

/**
 * Validates whether instance contains no more than a maximum number of items, when the instance is an Array.
 * @param instance
 * @param schema
 * @return {String|null}
 */
validators.maxItems = function validateMaxItems (instance, schema, options, ctx) {
  if (!this.types.array(instance)) return;
  var result = new ValidatorResult(instance, schema, options, ctx);
  if (!(instance.length <= schema.maxItems)) {
    result.addError({
      name: 'maxItems',
      argument: schema.maxItems,
      message: "does not meet maximum length of " + schema.maxItems,
    });
  }
  return result;
};

/**
 * Validates that every item in an instance array is unique, when instance is an array
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @return {String|null|ValidatorResult}
 */
validators.uniqueItems = function validateUniqueItems (instance, schema, options, ctx) {
  if (!this.types.array(instance)) return;
  var result = new ValidatorResult(instance, schema, options, ctx);
  function testArrays (v, i, a) {
    for (var j = i + 1; j < a.length; j++) if (helpers.deepCompareStrict(v, a[j])) {
      return false;
    }
    return true;
  }
  if (!instance.every(testArrays)) {
    result.addError({
      name: 'uniqueItems',
      message: "contains duplicate item",
    });
  }
  return result;
};

/**
 * Deep compares arrays for duplicates
 * @param v
 * @param i
 * @param a
 * @private
 * @return {boolean}
 */
function testArrays (v, i, a) {
  var j, len = a.length;
  for (j = i + 1, len; j < len; j++) {
    if (helpers.deepCompareStrict(v, a[j])) {
      return false;
    }
  }
  return true;
}

/**
 * Validates whether there are no duplicates, when the instance is an Array.
 * @param instance
 * @return {String|null}
 */
validators.uniqueItems = function validateUniqueItems (instance, schema, options, ctx) {
  if (!this.types.array(instance)) return;
  var result = new ValidatorResult(instance, schema, options, ctx);
  if (!instance.every(testArrays)) {
    result.addError({
      name: 'uniqueItems',
      message: "contains duplicate item",
    });
  }
  return result;
};

/**
 * Validate for the presence of dependency properties, if the instance is an object.
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @return {null|ValidatorResult}
 */
validators.dependencies = function validateDependencies (instance, schema, options, ctx) {
  if (!this.types.object(instance)) return;
  var result = new ValidatorResult(instance, schema, options, ctx);
  for (var property in schema.dependencies) {
    if (instance[property] === undefined) {
      continue;
    }
    var dep = schema.dependencies[property];
    var childContext = ctx.makeChild(dep, property);
    if (typeof dep == 'string') {
      dep = [dep];
    }
    if (Array.isArray(dep)) {
      dep.forEach(function (prop) {
        if (instance[prop] === undefined) {
          result.addError({
            // FIXME there's two different "dependencies" errors here with slightly different outputs
            // Can we make these the same? Or should we create different error types?
            name: 'dependencies',
            argument: childContext.propertyPath,
            message: "property " + prop + " not found, required by " + childContext.propertyPath,
          });
        }
      });
    } else {
      var res = this.validateSchema(instance, dep, options, childContext);
      if(result.instance !== res.instance) result.instance = res.instance;
      if (res && res.errors.length) {
        result.addError({
          name: 'dependencies',
          argument: childContext.propertyPath,
          message: "does not meet dependency required by " + childContext.propertyPath,
        });
        result.importErrors(res);
      }
    }
  }
  return result;
};

/**
 * Validates whether the instance value is one of the enumerated values.
 *
 * @param instance
 * @param schema
 * @return {ValidatorResult|null}
 */
validators['enum'] = function validateEnum (instance, schema, options, ctx) {
  if (instance === undefined) {
    return null;
  }
  if (!Array.isArray(schema['enum'])) {
    throw new SchemaError("enum expects an array", schema);
  }
  var result = new ValidatorResult(instance, schema, options, ctx);
  if (!schema['enum'].some(helpers.deepCompareStrict.bind(null, instance))) {
    result.addError({
      name: 'enum',
      argument: schema['enum'],
      message: "is not one of enum values: " + schema['enum'].map(String).join(','),
    });
  }
  return result;
};

/**
 * Validates whether the instance exactly matches a given value
 *
 * @param instance
 * @param schema
 * @return {ValidatorResult|null}
 */
validators['const'] = function validateEnum (instance, schema, options, ctx) {
  if (instance === undefined) {
    return null;
  }
  var result = new ValidatorResult(instance, schema, options, ctx);
  if (!helpers.deepCompareStrict(schema['const'], instance)) {
    result.addError({
      name: 'const',
      argument: schema['const'],
      message: "does not exactly match expected constant: " + schema['const'],
    });
  }
  return result;
};

/**
 * Validates whether the instance if of a prohibited type.
 * @param instance
 * @param schema
 * @param options
 * @param ctx
 * @return {null|ValidatorResult}
 */
validators.not = validators.disallow = function validateNot (instance, schema, options, ctx) {
  var self = this;
  if(instance===undefined) return null;
  var result = new ValidatorResult(instance, schema, options, ctx);
  var notTypes = schema.not || schema.disallow;
  if(!notTypes) return null;
  if(!Array.isArray(notTypes)) notTypes=[notTypes];
  notTypes.forEach(function (type) {
    if (self.testType(instance, schema, options, ctx, type)) {
      var schemaId = type && type.id && ('<' + type.id + '>') || type;
      result.addError({
        name: 'not',
        argument: schemaId,
        message: "is of prohibited type " + schemaId,
      });
    }
  });
  return result;
};

module.exports = attribute;


/***/ }),

/***/ 2684:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uri = __webpack_require__(2677);

var ValidationError = exports.ValidationError = function ValidationError (message, instance, schema, propertyPath, name, argument) {
  if (propertyPath) {
    this.property = propertyPath;
  }
  if (message) {
    this.message = message;
  }
  if (schema) {
    if (schema.id) {
      this.schema = schema.id;
    } else {
      this.schema = schema;
    }
  }
  if (instance) {
    this.instance = instance;
  }
  this.name = name;
  this.argument = argument;
  this.stack = this.toString();
};

ValidationError.prototype.toString = function toString() {
  return this.property + ' ' + this.message;
};

var ValidatorResult = exports.ValidatorResult = function ValidatorResult(instance, schema, options, ctx) {
  this.instance = instance;
  this.schema = schema;
  this.propertyPath = ctx.propertyPath;
  this.errors = [];
  this.throwError = options && options.throwError;
  this.disableFormat = options && options.disableFormat === true;
};

ValidatorResult.prototype.addError = function addError(detail) {
  var err;
  if (typeof detail == 'string') {
    err = new ValidationError(detail, this.instance, this.schema, this.propertyPath);
  } else {
    if (!detail) throw new Error('Missing error detail');
    if (!detail.message) throw new Error('Missing error message');
    if (!detail.name) throw new Error('Missing validator type');
    err = new ValidationError(detail.message, this.instance, this.schema, this.propertyPath, detail.name, detail.argument);
  }

  if (this.throwError) {
    throw err;
  }
  this.errors.push(err);
  return err;
};

ValidatorResult.prototype.importErrors = function importErrors(res) {
  if (typeof res == 'string' || (res && res.validatorType)) {
    this.addError(res);
  } else if (res && res.errors) {
    Array.prototype.push.apply(this.errors, res.errors);
  }
};

function stringizer (v,i){
  return i+': '+v.toString()+'\n';
}
ValidatorResult.prototype.toString = function toString(res) {
  return this.errors.map(stringizer).join('');
};

Object.defineProperty(ValidatorResult.prototype, "valid", { get: function() {
  return !this.errors.length;
} });

/**
 * Describes a problem with a Schema which prevents validation of an instance
 * @name SchemaError
 * @constructor
 */
var SchemaError = exports.SchemaError = function SchemaError (msg, schema) {
  this.message = msg;
  this.schema = schema;
  Error.call(this, msg);
  Error.captureStackTrace(this, SchemaError);
};
SchemaError.prototype = Object.create(Error.prototype,
  { constructor: {value: SchemaError, enumerable: false}
  , name: {value: 'SchemaError', enumerable: false}
  });

var SchemaContext = exports.SchemaContext = function SchemaContext (schema, options, propertyPath, base, schemas) {
  this.schema = schema;
  this.options = options;
  this.propertyPath = propertyPath;
  this.base = base;
  this.schemas = schemas;
};

SchemaContext.prototype.resolve = function resolve (target) {
  return uri.resolve(this.base, target);
};

SchemaContext.prototype.makeChild = function makeChild(schema, propertyName){
  var propertyPath = (propertyName===undefined) ? this.propertyPath : this.propertyPath+makeSuffix(propertyName);
  var base = uri.resolve(this.base, schema.id||'');
  var ctx = new SchemaContext(schema, this.options, propertyPath, base, Object.create(this.schemas));
  if(schema.id && !ctx.schemas[base]){
    ctx.schemas[base] = schema;
  }
  return ctx;
}

var FORMAT_REGEXPS = exports.FORMAT_REGEXPS = {
  'date-time': /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])[tT ](2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])(\.\d+)?([zZ]|[+-]([0-5][0-9]):(60|[0-5][0-9]))$/,
  'date': /^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])$/,
  'time': /^(2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])$/,

  'email': /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,
  'ip-address': /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
  'ipv6': /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,
  'uri': /^[a-zA-Z][a-zA-Z0-9+-.]*:[^\s]*$/,

  'color': /^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,

  // hostname regex from: http://stackoverflow.com/a/1420225/5628
  'hostname': /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,
  'host-name': /^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,

  'alpha': /^[a-zA-Z]+$/,
  'alphanumeric': /^[a-zA-Z0-9]+$/,
  'utc-millisec': function (input) {
    return (typeof input === 'string') && parseFloat(input) === parseInt(input, 10) && !isNaN(input);
  },
  'regex': function (input) {
    var result = true;
    try {
      new RegExp(input);
    } catch (e) {
      result = false;
    }
    return result;
  },
  'style': /\s*(.+?):\s*([^;]+);?/,
  'phone': /^\+(?:[0-9] ?){6,14}[0-9]$/
};

FORMAT_REGEXPS.regexp = FORMAT_REGEXPS.regex;
FORMAT_REGEXPS.pattern = FORMAT_REGEXPS.regex;
FORMAT_REGEXPS.ipv4 = FORMAT_REGEXPS['ip-address'];

exports.isFormat = function isFormat (input, format, validator) {
  if (typeof input === 'string' && FORMAT_REGEXPS[format] !== undefined) {
    if (FORMAT_REGEXPS[format] instanceof RegExp) {
      return FORMAT_REGEXPS[format].test(input);
    }
    if (typeof FORMAT_REGEXPS[format] === 'function') {
      return FORMAT_REGEXPS[format](input);
    }
  } else if (validator && validator.customFormats &&
      typeof validator.customFormats[format] === 'function') {
    return validator.customFormats[format](input);
  }
  return true;
};

var makeSuffix = exports.makeSuffix = function makeSuffix (key) {
  key = key.toString();
  // This function could be capable of outputting valid a ECMAScript string, but the
  // resulting code for testing which form to use would be tens of thousands of characters long
  // That means this will use the name form for some illegal forms
  if (!key.match(/[.\s\[\]]/) && !key.match(/^[\d]/)) {
    return '.' + key;
  }
  if (key.match(/^\d+$/)) {
    return '[' + key + ']';
  }
  return '[' + JSON.stringify(key) + ']';
};

exports.deepCompareStrict = function deepCompareStrict (a, b) {
  if (typeof a !== typeof b) {
    return false;
  }
  if (a instanceof Array) {
    if (!(b instanceof Array)) {
      return false;
    }
    if (a.length !== b.length) {
      return false;
    }
    return a.every(function (v, i) {
      return deepCompareStrict(a[i], b[i]);
    });
  }
  if (typeof a === 'object') {
    if (!a || !b) {
      return a === b;
    }
    var aKeys = Object.keys(a);
    var bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) {
      return false;
    }
    return aKeys.every(function (v) {
      return deepCompareStrict(a[v], b[v]);
    });
  }
  return a === b;
};

function deepMerger (target, dst, e, i) {
  if (typeof e === 'object') {
    dst[i] = deepMerge(target[i], e)
  } else {
    if (target.indexOf(e) === -1) {
      dst.push(e)
    }
  }
}

function copyist (src, dst, key) {
  dst[key] = src[key];
}

function copyistWithDeepMerge (target, src, dst, key) {
  if (typeof src[key] !== 'object' || !src[key]) {
    dst[key] = src[key];
  }
  else {
    if (!target[key]) {
      dst[key] = src[key];
    } else {
      dst[key] = deepMerge(target[key], src[key])
    }
  }
}

function deepMerge (target, src) {
  var array = Array.isArray(src);
  var dst = array && [] || {};

  if (array) {
    target = target || [];
    dst = dst.concat(target);
    src.forEach(deepMerger.bind(null, target, dst));
  } else {
    if (target && typeof target === 'object') {
      Object.keys(target).forEach(copyist.bind(null, target, dst));
    }
    Object.keys(src).forEach(copyistWithDeepMerge.bind(null, target, src, dst));
  }

  return dst;
};

module.exports.deepMerge = deepMerge;

/**
 * Validates instance against the provided schema
 * Implements URI+JSON Pointer encoding, e.g. "%7e"="~0"=>"~", "~1"="%2f"=>"/"
 * @param o
 * @param s The path to walk o along
 * @return any
 */
exports.objectGetPath = function objectGetPath(o, s) {
  var parts = s.split('/').slice(1);
  var k;
  while (typeof (k=parts.shift()) == 'string') {
    var n = decodeURIComponent(k.replace(/~0/,'~').replace(/~1/g,'/'));
    if (!(n in o)) return;
    o = o[n];
  }
  return o;
};

function pathEncoder (v) {
  return '/'+encodeURIComponent(v).replace(/~/g,'%7E');
}
/**
 * Accept an Array of property names and return a JSON Pointer URI fragment
 * @param Array a
 * @return {String}
 */
exports.encodePath = function encodePointer(a){
	// ~ must be encoded explicitly because hacks
	// the slash is encoded by encodeURIComponent
	return a.map(pathEncoder).join('');
};


/**
 * Calculate the number of decimal places a number uses
 * We need this to get correct results out of multipleOf and divisibleBy
 * when either figure is has decimal places, due to IEEE-754 float issues.
 * @param number
 * @returns {number}
 */
exports.getDecimalPlaces = function getDecimalPlaces(number) {

  var decimalPlaces = 0;
  if (isNaN(number)) return decimalPlaces;

  if (typeof number !== 'number') {
    number = Number(number);
  }

  var parts = number.toString().split('e');
  if (parts.length === 2) {
    if (parts[1][0] !== '-') {
      return decimalPlaces;
    } else {
      decimalPlaces = Number(parts[1].slice(1));
    }
  }

  var decimalParts = parts[0].split('.');
  if (decimalParts.length === 2) {
    decimalPlaces += decimalParts[1].length;
  }

  return decimalPlaces;
};



/***/ }),

/***/ 2685:
/***/ (function(module, exports, __webpack_require__) {


var urilib = __webpack_require__(2677);
var helpers = __webpack_require__(2684);

module.exports.SchemaScanResult = SchemaScanResult;
function SchemaScanResult(found, ref){
  this.id = found;
  this.ref = ref;
}

/**
 * Adds a schema with a certain urn to the Validator instance.
 * @param string uri
 * @param object schema
 * @return {Object}
 */
module.exports.scan = function scan(base, schema){
  function scanSchema(baseuri, schema){
    if(!schema || typeof schema!='object') return;
    // Mark all referenced schemas so we can tell later which schemas are referred to, but never defined
    if(schema.$ref){
      var resolvedUri = urilib.resolve(baseuri, schema.$ref);
      ref[resolvedUri] = ref[resolvedUri] ? ref[resolvedUri]+1 : 0;
      return;
    }
    var ourBase = schema.id ? urilib.resolve(baseuri, schema.id) : baseuri;
    if (ourBase) {
      // If there's no fragment, append an empty one
      if(ourBase.indexOf('#')<0) ourBase += '#';
      if(found[ourBase]){
        if(!helpers.deepCompareStrict(found[ourBase], schema)){
          throw new Error('Schema <'+schema+'> already exists with different definition');
        }
        return found[ourBase];
      }
      found[ourBase] = schema;
      // strip trailing fragment
      if(ourBase[ourBase.length-1]=='#'){
        found[ourBase.substring(0, ourBase.length-1)] = schema;
      }
    }
    scanArray(ourBase+'/items', ((schema.items instanceof Array)?schema.items:[schema.items]));
    scanArray(ourBase+'/extends', ((schema.extends instanceof Array)?schema.extends:[schema.extends]));
    scanSchema(ourBase+'/additionalItems', schema.additionalItems);
    scanObject(ourBase+'/properties', schema.properties);
    scanSchema(ourBase+'/additionalProperties', schema.additionalProperties);
    scanObject(ourBase+'/definitions', schema.definitions);
    scanObject(ourBase+'/patternProperties', schema.patternProperties);
    scanObject(ourBase+'/dependencies', schema.dependencies);
    scanArray(ourBase+'/disallow', schema.disallow);
    scanArray(ourBase+'/allOf', schema.allOf);
    scanArray(ourBase+'/anyOf', schema.anyOf);
    scanArray(ourBase+'/oneOf', schema.oneOf);
    scanSchema(ourBase+'/not', schema.not);
  }
  function scanArray(baseuri, schemas){
    if(!(schemas instanceof Array)) return;
    for(var i=0; i<schemas.length; i++){
      scanSchema(baseuri+'/'+i, schemas[i]);
    }
  }
  function scanObject(baseuri, schemas){
    if(!schemas || typeof schemas!='object') return;
    for(var p in schemas){
      scanSchema(baseuri+'/'+p, schemas[p]);
    }
  }

  var found = {};
  var ref = {};
  var schemaUri = base;
  scanSchema(base, schema);
  return new SchemaScanResult(found, ref);
}


/***/ }),

/***/ 2728:
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

/***/ 2746:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2747);

/***/ }),

/***/ 2747:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(403), __webpack_require__(798), __webpack_require__(2748), __webpack_require__(2749), __webpack_require__(2750), __webpack_require__(2751)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ 2748:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(403), __webpack_require__(408)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ 2749:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(403), __webpack_require__(408)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ 2750:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(403), __webpack_require__(408)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

/***/ 2751:
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

/***/ 2770:
/***/ (function(module, exports, __webpack_require__) {

var moment = module.exports = __webpack_require__(2771);
moment.tz.load(__webpack_require__(2772));


/***/ }),

/***/ 2771:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//! moment-timezone.js
//! version : 0.5.28
//! Copyright (c) JS Foundation and other contributors
//! license : MIT
//! github.com/moment/moment-timezone

(function (root, factory) {
	"use strict";

	/*global define*/
	if ( true && module.exports) {
		module.exports = factory(__webpack_require__(800)); // Node
	} else if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(800)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
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

	var VERSION = "0.5.28",
		zones = {},
		links = {},
		countries = {},
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

		countries : function () {
			var zone_name = this.name;
			return Object.keys(countries).filter(function (country_code) {
				return countries[country_code].zones.indexOf(zone_name) !== -1;
			});
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
		Country object
	************************************/

	function Country (country_name, zone_names) {
		this.name = country_name;
		this.zones = zone_names;
	}

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
		if (a.zone.population !== b.zone.population) {
			return b.zone.population - a.zone.population;
		}
		return b.zone.name.localeCompare(a.zone.name);
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

	function getCountryNames () {
		return Object.keys(countries);
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

	function addCountries (data) {
		var i, country_code, country_zones, split;
		if (!data || !data.length) return;
		for (i = 0; i < data.length; i++) {
			split = data[i].split('|');
			country_code = split[0].toUpperCase();
			country_zones = split[1].split(' ');
			countries[country_code] = new Country(
				country_code,
				country_zones
			);
		}
	}

	function getCountry (name) {
		name = name.toUpperCase();
		return countries[name] || null;
	}

	function zonesForCountry(country, with_offset) {
		country = getCountry(country);

		if (!country) return null;

		var zones = country.zones.sort();

		if (with_offset) {
			return zones.map(function (zone_name) {
				var zone = getZone(zone_name);
				return {
					name: zone_name,
					offset: zone.utcOffset(new Date())
				};
			});
		}

		return zones;
	}

	function loadData (data) {
		addZone(data.zones);
		addLink(data.links);
		addCountries(data.countries);
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
	tz._countries	= countries;
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
	tz.countries    = getCountryNames;
	tz.zonesForCountry = zonesForCountry;

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
				var z = mom._z;
				mom.utcOffset(-offset, keepTime);
				mom._z = z;
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

	function resetZoneWrap2 (old) {
		return function () {
			if (arguments.length > 0) this._z = null;
			return old.apply(this, arguments);
		};
	}

	fn.zoneName  = abbrWrap(fn.zoneName);
	fn.zoneAbbr  = abbrWrap(fn.zoneAbbr);
	fn.utc       = resetZoneWrap(fn.utc);
	fn.local     = resetZoneWrap(fn.local);
	fn.utcOffset = resetZoneWrap2(fn.utcOffset);

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

/***/ 2772:
/***/ (function(module) {

module.exports = JSON.parse("{\"version\":\"2019c\",\"zones\":[\"Africa/Abidjan|LMT GMT|g.8 0|01|-2ldXH.Q|48e5\",\"Africa/Accra|LMT GMT +0020|.Q 0 -k|012121212121212121212121212121212121212121212121|-26BbX.8 6tzX.8 MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE|41e5\",\"Africa/Nairobi|LMT EAT +0230 +0245|-2r.g -30 -2u -2J|01231|-1F3Cr.g 3Dzr.g okMu MFXJ|47e5\",\"Africa/Algiers|PMT WET WEST CET CEST|-9.l 0 -10 -10 -20|0121212121212121343431312123431213|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 DA0 Imo0 rd0 De0 9Xz0 1fb0 1ap0 16K0 2yo0 mEp0 hwL0 jxA0 11A0 dDd0 17b0 11B0 1cN0 2Dy0 1cN0 1fB0 1cL0|26e5\",\"Africa/Lagos|LMT WAT|-d.A -10|01|-22y0d.A|17e6\",\"Africa/Bissau|LMT -01 GMT|12.k 10 0|012|-2ldX0 2xoo0|39e4\",\"Africa/Maputo|LMT CAT|-2a.k -20|01|-2GJea.k|26e5\",\"Africa/Cairo|EET EEST|-20 -30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1bIO0 vb0 1ip0 11z0 1iN0 1nz0 12p0 1pz0 10N0 1pz0 16p0 1jz0 s3d0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1WL0 rd0 1Rz0 wp0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1qL0 Xd0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1ny0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 WL0 1qN0 Rb0 1wp0 On0 1zd0 Lz0 1EN0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0|15e6\",\"Africa/Casablanca|LMT +00 +01|u.k 0 -10|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2gMnt.E 130Lt.E rb0 Dd0 dVb0 b6p0 TX0 EoB0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4mn0 SyN0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 28M0 e00 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0|32e5\",\"Africa/Ceuta|WET WEST CET CEST|0 -10 -10 -20|010101010101010101010232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-25KN0 11z0 drd0 18p0 3HX0 17d0 1fz0 1a10 1io0 1a00 1y7o0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4VB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|85e3\",\"Africa/El_Aaiun|LMT -01 +00 +01|Q.M 10 0 -10|012323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1rDz7.c 1GVA7.c 6L0 AL0 1Nd0 XX0 1Cp0 pz0 1cBB0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 28M0 e00 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0|20e4\",\"Africa/Johannesburg|SAST SAST SAST|-1u -20 -30|012121|-2GJdu 1Ajdu 1cL0 1cN0 1cL0|84e5\",\"Africa/Juba|LMT CAT CAST EAT|-26.s -20 -30 -30|01212121212121212121212121212121213|-1yW26.s 1zK06.s 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0|\",\"Africa/Khartoum|LMT CAT CAST EAT|-2a.8 -20 -30 -30|012121212121212121212121212121212131|-1yW2a.8 1zK0a.8 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0 HjL0|51e5\",\"Africa/Monrovia|MMT MMT GMT|H.8 I.u 0|012|-23Lzg.Q 28G01.m|11e5\",\"Africa/Ndjamena|LMT WAT WAST|-10.c -10 -20|0121|-2le10.c 2J3c0.c Wn0|13e5\",\"Africa/Sao_Tome|LMT GMT WAT|A.J 0 -10|0121|-2le00 4i6N0 2q00|\",\"Africa/Tripoli|LMT CET CEST EET|-Q.I -10 -20 -20|012121213121212121212121213123123|-21JcQ.I 1hnBQ.I vx0 4iP0 xx0 4eN0 Bb0 7ip0 U0n0 A10 1db0 1cN0 1db0 1dd0 1db0 1eN0 1bb0 1e10 1cL0 1c10 1db0 1dd0 1db0 1cN0 1db0 1q10 fAn0 1ep0 1db0 AKq0 TA0 1o00|11e5\",\"Africa/Tunis|PMT CET CEST|-9.l -10 -20|0121212121212121212121212121212121|-2nco9.l 18pa9.l 1qM0 DA0 3Tc0 11B0 1ze0 WM0 7z0 3d0 14L0 1cN0 1f90 1ar0 16J0 1gXB0 WM0 1rA0 11c0 nwo0 Ko0 1cM0 1cM0 1rA0 10M0 zuM0 10N0 1aN0 1qM0 WM0 1qM0 11A0 1o00|20e5\",\"Africa/Windhoek|+0130 SAST SAST CAT WAT|-1u -20 -30 -20 -10|01213434343434343434343434343434343434343434343434343|-2GJdu 1Ajdu 1cL0 1SqL0 9Io0 16P0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0|32e4\",\"America/Adak|NST NWT NPT BST BDT AHST HST HDT|b0 a0 a0 b0 a0 a0 a0 90|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|326\",\"America/Anchorage|AST AWT APT AHST AHDT YST AKST AKDT|a0 90 90 a0 90 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T00 8wX0 iA0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|30e4\",\"America/Port_of_Spain|LMT AST|46.4 40|01|-2kNvR.U|43e3\",\"America/Araguaina|LMT -03 -02|3c.M 30 20|0121212121212121212121212121212121212121212121212121|-2glwL.c HdKL.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 ny10 Lz0|14e4\",\"America/Argentina/Buenos_Aires|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 A4p0 uL0 1qN0 WL0|\",\"America/Argentina/Catamarca|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323132321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 7B0 8zb0 uL0|\",\"America/Argentina/Cordoba|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323132323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0 1qN0 WL0|\",\"America/Argentina/Jujuy|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323121323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1ze0 TX0 1ld0 WK0 1wp0 TX0 A4p0 uL0|\",\"America/Argentina/La_Rioja|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0|\",\"America/Argentina/Mendoza|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232312121321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1u20 SL0 1vd0 Tb0 1wp0 TW0 ri10 Op0 7TX0 uL0|\",\"America/Argentina/Rio_Gallegos|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0|\",\"America/Argentina/Salta|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0|\",\"America/Argentina/San_Juan|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rld0 m10 8lb0 uL0|\",\"America/Argentina/San_Luis|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323121212321212|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 XX0 1q20 SL0 AN0 vDb0 m10 8lb0 8L0 jd0 1qN0 WL0 1qN0|\",\"America/Argentina/Tucuman|CMT -04 -03 -02|4g.M 40 30 20|0121212121212121212121212121212121212121212323232313232123232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 4N0 8BX0 uL0 1qN0 WL0|\",\"America/Argentina/Ushuaia|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rkN0 8p0 8zb0 uL0|\",\"America/Curacao|LMT -0430 AST|4z.L 4u 40|012|-2kV7o.d 28KLS.d|15e4\",\"America/Asuncion|AMT -04 -03|3O.E 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-1x589.k 1DKM9.k 3CL0 3Dd0 10L0 1pB0 10n0 1pB0 10n0 1pB0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1lB0 14n0 1dd0 1cL0 1fd0 WL0 1rd0 1aL0 1dB0 Xz0 1qp0 Xb0 1qN0 10L0 1rB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 WN0 1qL0 11B0 1nX0 1ip0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 TX0 1tB0 19X0 1a10 1fz0 1a10 1fz0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0|28e5\",\"America/Atikokan|CST CDT CWT CPT EST|60 50 50 50 50|0101234|-25TQ0 1in0 Rnb0 3je0 8x30 iw0|28e2\",\"America/Bahia_Banderas|LMT MST CST PST MDT CDT|71 70 60 80 60 50|0121212131414141414141414141414141414152525252525252525252525252525252525252525252525252525252|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nW0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|84e3\",\"America/Bahia|LMT -03 -02|2y.4 30 20|01212121212121212121212121212121212121212121212121212121212121|-2glxp.U HdLp.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 l5B0 Rb0|27e5\",\"America/Barbados|LMT BMT AST ADT|3W.t 3W.t 40 30|01232323232|-1Q0I1.v jsM0 1ODC1.v IL0 1ip0 17b0 1ip0 17b0 1ld0 13b0|28e4\",\"America/Belem|LMT -03 -02|3d.U 30 20|012121212121212121212121212121|-2glwK.4 HdKK.4 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|20e5\",\"America/Belize|LMT CST -0530 CDT|5Q.M 60 5u 50|01212121212121212121212121212121212121212121212121213131|-2kBu7.c fPA7.c Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1f0Mu qn0 lxB0 mn0|57e3\",\"America/Blanc-Sablon|AST ADT AWT APT|40 30 30 30|010230|-25TS0 1in0 UGp0 8x50 iu0|11e2\",\"America/Boa_Vista|LMT -04 -03|42.E 40 30|0121212121212121212121212121212121|-2glvV.k HdKV.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 smp0 WL0 1tB0 2L0|62e2\",\"America/Bogota|BMT -05 -04|4U.g 50 40|0121|-2eb73.I 38yo3.I 2en0|90e5\",\"America/Boise|PST PDT MST MWT MPT MDT|80 70 70 60 60 60|0101023425252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-261q0 1nX0 11B0 1nX0 8C10 JCL0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 Dd0 1Kn0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e4\",\"America/Cambridge_Bay|-00 MST MWT MPT MDDT MDT CST CDT EST|0 70 60 60 50 60 60 50 50|0123141515151515151515151515151515151515151515678651515151515151515151515151515151515151515151515151515151515151515151515151|-21Jc0 RO90 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11A0 1nX0 2K0 WQ0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e2\",\"America/Campo_Grande|LMT -04 -03|3C.s 40 30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glwl.w HdLl.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0|77e4\",\"America/Cancun|LMT CST EST EDT CDT|5L.4 60 50 40 50|0123232341414141414141414141414141414141412|-1UQG0 2q2o0 yLB0 1lb0 14p0 1lb0 14p0 Lz0 xB0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4\",\"America/Caracas|CMT -0430 -04|4r.E 4u 40|01212|-2kV7w.k 28KM2.k 1IwOu kqo0|29e5\",\"America/Cayenne|LMT -04 -03|3t.k 40 30|012|-2mrwu.E 2gWou.E|58e3\",\"America/Panama|CMT EST|5j.A 50|01|-2uduE.o|15e5\",\"America/Chicago|CST CDT EST CWT CPT|60 50 50 50 50|01010101010101010101010101010101010102010101010103401010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 1wp0 TX0 WN0 1qL0 1cN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 11B0 1Hz0 14p0 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5\",\"America/Chihuahua|LMT MST CST CDT MDT|74.k 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|81e4\",\"America/Costa_Rica|SJMT CST CDT|5A.d 60 50|0121212121|-1Xd6n.L 2lu0n.L Db0 1Kp0 Db0 pRB0 15b0 1kp0 mL0|12e5\",\"America/Creston|MST PST|70 80|010|-29DR0 43B0|53e2\",\"America/Cuiaba|LMT -04 -03|3I.k 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glwf.E HdLf.E 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 4a10 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0|54e4\",\"America/Danmarkshavn|LMT -03 -02 GMT|1e.E 30 20 0|01212121212121212121212121212121213|-2a5WJ.k 2z5fJ.k 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 DC0|8\",\"America/Dawson_Creek|PST PDT PWT PPT MST|80 70 70 70 70|0102301010101010101010101010101010101010101010101010101014|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 ML0|12e3\",\"America/Dawson|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 jrA0 fNd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|13e2\",\"America/Denver|MST MDT MWT MPT|70 60 60 60|01010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 11B0 1qL0 WN0 mn0 Ord0 8x20 ix0 LCN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e5\",\"America/Detroit|LMT CST EST EWT EPT EDT|5w.b 60 50 40 40 40|0123425252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2Cgir.N peqr.N 156L0 8x40 iv0 6fd0 11z0 JxX1 SMX 1cN0 1cL0 aW10 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e5\",\"America/Edmonton|LMT MST MDT MWT MPT|7x.Q 70 60 60 60|0121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2yd4q.8 shdq.8 1in0 17d0 hz0 2dB0 1fz0 1a10 11z0 1qN0 WL0 1qN0 11z0 IGN0 8x20 ix0 3NB0 11z0 XQp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|10e5\",\"America/Eirunepe|LMT -05 -04|4D.s 50 40|0121212121212121212121212121212121|-2glvk.w HdLk.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0 yTd0 d5X0|31e3\",\"America/El_Salvador|LMT CST CDT|5U.M 60 50|012121|-1XiG3.c 2Fvc3.c WL0 1qN0 WL0|11e5\",\"America/Tijuana|LMT MST PST PDT PWT PPT|7M.4 70 80 70 70 70|012123245232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQE0 4PX0 8mM0 8lc0 SN0 1cL0 pHB0 83r0 zI0 5O10 1Rz0 cOO0 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 BUp0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|20e5\",\"America/Fort_Nelson|PST PDT PWT PPT MST|80 70 70 70 70|01023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010104|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2\",\"America/Fort_Wayne|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010101023010101010101010101040454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 QI10 Db0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 5Tz0 1o10 qLb0 1cL0 1cN0 1cL0 1qhd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|\",\"America/Fortaleza|LMT -03 -02|2y 30 20|0121212121212121212121212121212121212121|-2glxq HdLq 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 5z0 2mN0 On0|34e5\",\"America/Glace_Bay|LMT AST ADT AWT APT|3X.M 40 30 30 30|012134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsI0.c CwO0.c 1in0 UGp0 8x50 iu0 iq10 11z0 Jg10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3\",\"America/Godthab|LMT -03 -02|3q.U 30 20|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5Ux.4 2z5dx.4 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e3\",\"America/Goose_Bay|NST NDT NST NDT NWT NPT AST ADT ADDT|3u.Q 2u.Q 3u 2u 2u 2u 40 30 20|010232323232323245232323232323232323232323232323232323232326767676767676767676767676767676767676767676768676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-25TSt.8 1in0 DXb0 2HbX.8 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 S10 g0u 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|76e2\",\"America/Grand_Turk|KMT EST EDT AST|57.a 50 40 40|01212121212121212121212121212121212121212121212121212121212121212121212121232121212121212121212121212121212121212121|-2l1uQ.O 2HHBQ.O 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 5Ip0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e2\",\"America/Guatemala|LMT CST CDT|62.4 60 50|0121212121|-24KhV.U 2efXV.U An0 mtd0 Nz0 ifB0 17b0 zDB0 11z0|13e5\",\"America/Guayaquil|QMT -05 -04|5e 50 40|0121|-1yVSK 2uILK rz0|27e5\",\"America/Guyana|LMT -0345 -03 -04|3Q.E 3J 30 40|0123|-2dvU7.k 2r6LQ.k Bxbf|80e4\",\"America/Halifax|LMT AST ADT AWT APT|4e.o 40 30 30 30|0121212121212121212121212121212121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsHJ.A xzzJ.A 1db0 3I30 1in0 3HX0 IL0 1E10 ML0 1yN0 Pb0 1Bd0 Mn0 1Bd0 Rz0 1w10 Xb0 1w10 LX0 1w10 Xb0 1w10 Lz0 1C10 Jz0 1E10 OL0 1yN0 Un0 1qp0 Xb0 1qp0 11X0 1w10 Lz0 1HB0 LX0 1C10 FX0 1w10 Xb0 1qp0 Xb0 1BB0 LX0 1td0 Xb0 1qp0 Xb0 Rf0 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 6i10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|39e4\",\"America/Havana|HMT CST CDT|5t.A 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Meuu.o 72zu.o ML0 sld0 An0 1Nd0 Db0 1Nd0 An0 6Ep0 An0 1Nd0 An0 JDd0 Mn0 1Ap0 On0 1fd0 11X0 1qN0 WL0 1wp0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 14n0 1ld0 14L0 1kN0 15b0 1kp0 1cL0 1cN0 1fz0 1a10 1fz0 1fB0 11z0 14p0 1nX0 11B0 1nX0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 1a10 1in0 1a10 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 17c0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 11A0 6i00 Rc0 1wo0 U00 1tA0 Rc0 1wo0 U00 1wo0 U00 1zc0 U00 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0|21e5\",\"America/Hermosillo|LMT MST CST PST MDT|7n.Q 70 60 80 60|0121212131414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0|64e4\",\"America/Indiana/Knox|CST CDT CWT CPT EST|60 50 50 50 50|0101023010101010101010101010101010101040101010101010101010101010101010101010101010101010141010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 3Cn0 8wp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 z8o0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|\",\"America/Indiana/Marengo|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010104545454545414545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 dyN0 11z0 6fd0 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1e6p0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|\",\"America/Indiana/Petersburg|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010104010101010101010101010141014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 njX0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 3Fb0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 19co0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|\",\"America/Indiana/Tell_City|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010401054541010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 njX0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 8wn0 1cN0 1cL0 1cN0 1cK0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|\",\"America/Indiana/Vevay|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010102304545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 kPB0 Awn0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1lnd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|\",\"America/Indiana/Vincennes|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|\",\"America/Indiana/Winamac|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010101010454541054545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1za0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|\",\"America/Inuvik|-00 PST PDDT MST MDT|0 80 60 70 60|0121343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-FnA0 tWU0 1fA0 wPe0 2pz0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|35e2\",\"America/Iqaluit|-00 EWT EPT EST EDDT EDT CST CDT|0 40 40 50 30 40 60 50|01234353535353535353535353535353535353535353567353535353535353535353535353535353535353535353535353535353535353535353535353|-16K00 7nX0 iv0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|67e2\",\"America/Jamaica|KMT EST EDT|57.a 50 40|0121212121212121212121|-2l1uQ.O 2uM1Q.O 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0|94e4\",\"America/Juneau|PST PWT PPT PDT YDT YST AKST AKDT|80 70 70 70 80 90 90 80|01203030303030303030303030403030356767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cM0 1cM0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|33e3\",\"America/Kentucky/Louisville|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101010102301010101010101010101010101454545454545414545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 3Fd0 Nb0 LPd0 11z0 RB0 8x30 iw0 1nX1 e0X 9vd0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 xz0 gso0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|\",\"America/Kentucky/Monticello|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 SWp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|\",\"America/La_Paz|CMT BST -04|4w.A 3w.A 40|012|-1x37r.o 13b0|19e5\",\"America/Lima|LMT -05 -04|58.A 50 40|0121212121212121|-2tyGP.o 1bDzP.o zX0 1aN0 1cL0 1cN0 1cL0 1PrB0 zX0 1O10 zX0 6Gp0 zX0 98p0 zX0|11e6\",\"America/Los_Angeles|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 5Wp1 1VaX 3dA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e6\",\"America/Maceio|LMT -03 -02|2m.Q 30 20|012121212121212121212121212121212121212121|-2glxB.8 HdLB.8 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 8Q10 WL0 1tB0 5z0 2mN0 On0|93e4\",\"America/Managua|MMT CST EST CDT|5J.c 60 50 50|0121313121213131|-1quie.M 1yAMe.M 4mn0 9Up0 Dz0 1K10 Dz0 s3F0 1KH0 DB0 9In0 k8p0 19X0 1o30 11y0|22e5\",\"America/Manaus|LMT -04 -03|40.4 40 30|01212121212121212121212121212121|-2glvX.U HdKX.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0|19e5\",\"America/Martinique|FFMT AST ADT|44.k 40 30|0121|-2mPTT.E 2LPbT.E 19X0|39e4\",\"America/Matamoros|LMT CST CDT|6E 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|45e4\",\"America/Mazatlan|LMT MST CST PST MDT|75.E 70 60 80 60|0121212131414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|44e4\",\"America/Menominee|CST CDT CWT CPT EST|60 50 50 50 50|01010230101041010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 LCN0 1fz0 6410 9Jb0 1cM0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|85e2\",\"America/Merida|LMT CST EST CDT|5W.s 60 50 50|0121313131313131313131313131313131313131313131313131313131313131313131313131313131313131|-1UQG0 2q2o0 2hz0 wu30 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|11e5\",\"America/Metlakatla|PST PWT PPT PDT AKST AKDT|80 70 70 70 90 80|01203030303030303030303030303030304545450454545454545454545454545454545454545454|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1hU10 Rd0 1zb0 Op0 1zb0 Op0 1zb0 uM0 jB0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2\",\"America/Mexico_City|LMT MST CST CDT CWT|6A.A 70 60 50 50|012121232324232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 gEn0 TX0 3xd0 Jb0 6zB0 SL0 e5d0 17b0 1Pff0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|20e6\",\"America/Miquelon|LMT AST -03 -02|3I.E 40 30 20|012323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2mKkf.k 2LTAf.k gQ10 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|61e2\",\"America/Moncton|EST AST ADT AWT APT|50 40 30 30 30|012121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsH0 CwN0 1in0 zAo0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1K10 Lz0 1zB0 NX0 1u10 Wn0 S20 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14n1 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 ReX 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|64e3\",\"America/Monterrey|LMT CST CDT|6F.g 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|41e5\",\"America/Montevideo|LMT MMT -04 -03 -0330 -0230 -02 -0130|3I.P 3I.P 40 30 3u 2u 20 1u|012343434343434343434343435353636353636375363636363636363636363636363636363636363636363|-2tRUf.9 sVc0 8jcf.9 1db0 1dcu 1cLu 1dcu 1cLu ircu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu WLu 1fAu 1cLu 1o0u 11zu NAu 3jXu zXu Dq0u 19Xu pcu jz0 cm10 19X0 6tB0 1fbu 3o0u jX0 4vB0 xz0 3Cp0 mmu 1a10 IMu Db0 4c10 uL0 1Nd0 An0 1SN0 uL0 mp0 28L0 iPB0 un0 1SN0 xz0 1zd0 Lz0 1zd0 Rb0 1zd0 On0 1wp0 Rb0 s8p0 1fB0 1ip0 11z0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 11z0|17e5\",\"America/Toronto|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101012301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 11Wu 1nzu 1fD0 WJ0 1wr0 Nb0 1Ap0 On0 1zd0 On0 1wp0 TX0 1tB0 TX0 1tB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 4kM0 8x40 iv0 1o10 11z0 1nX0 11z0 1o10 11z0 1o10 1qL0 11D0 1nX0 11B0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e5\",\"America/Nassau|LMT EST EDT|59.u 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2kNuO.u 26XdO.u 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|24e4\",\"America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6\",\"America/Nipigon|EST EDT EWT EPT|50 40 40 40|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 Rnb0 3je0 8x40 iv0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|16e2\",\"America/Nome|NST NWT NPT BST BDT YST AKST AKDT|b0 a0 a0 b0 a0 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cl0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|38e2\",\"America/Noronha|LMT -02 -01|29.E 20 10|0121212121212121212121212121212121212121|-2glxO.k HdKO.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|30e2\",\"America/North_Dakota/Beulah|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|\",\"America/North_Dakota/Center|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|\",\"America/North_Dakota/New_Salem|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|\",\"America/Ojinaga|LMT MST CST CDT MDT|6V.E 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3\",\"America/Pangnirtung|-00 AST AWT APT ADDT ADT EDT EST CST CDT|0 40 30 30 20 30 40 50 60 50|012314151515151515151515151515151515167676767689767676767676767676767676767676767676767676767676767676767676767676767676767|-1XiM0 PnG0 8x50 iu0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1o00 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2\",\"America/Paramaribo|LMT PMT PMT -0330 -03|3E.E 3E.Q 3E.A 3u 30|01234|-2nDUj.k Wqo0.c qanX.I 1yVXN.o|24e4\",\"America/Phoenix|MST MDT MWT|70 60 60|01010202010|-261r0 1nX0 11B0 1nX0 SgN0 4Al1 Ap0 1db0 SWqX 1cL0|42e5\",\"America/Port-au-Prince|PPMT EST EDT|4N 50 40|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-28RHb 2FnMb 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14q0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 i6n0 1nX0 11B0 1nX0 d430 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 3iN0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5\",\"America/Rio_Branco|LMT -05 -04|4v.c 50 40|01212121212121212121212121212121|-2glvs.M HdLs.M 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0 d5X0|31e4\",\"America/Porto_Velho|LMT -04 -03|4f.A 40 30|012121212121212121212121212121|-2glvI.o HdKI.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|37e4\",\"America/Puerto_Rico|AST AWT APT|40 30 30|0120|-17lU0 7XT0 iu0|24e5\",\"America/Punta_Arenas|SMT -05 -04 -03|4G.K 50 40 30|0102021212121212121232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 blz0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0|\",\"America/Rainy_River|CST CDT CWT CPT|60 50 50 50|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TQ0 1in0 Rnb0 3je0 8x30 iw0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|842\",\"America/Rankin_Inlet|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313131313131313131313131313131313131313131313131313131313131313131|-vDc0 keu0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e2\",\"America/Recife|LMT -03 -02|2j.A 30 20|0121212121212121212121212121212121212121|-2glxE.o HdLE.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|33e5\",\"America/Regina|LMT MST MDT MWT MPT CST|6W.A 70 60 60 60 60|012121212121212121212121341212121212121212121212121215|-2AD51.o uHe1.o 1in0 s2L0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 66N0 1cL0 1cN0 19X0 1fB0 1cL0 1fB0 1cL0 1cN0 1cL0 M30 8x20 ix0 1ip0 1cL0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 3NB0 1cL0 1cN0|19e4\",\"America/Resolute|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313431313131313131313131313131313131313131313131313131313131313131|-SnA0 GWS0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|229\",\"America/Santarem|LMT -04 -03|3C.M 40 30|0121212121212121212121212121212|-2glwl.c HdLl.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0|21e4\",\"America/Santiago|SMT -05 -04 -03|4G.K 50 40 30|010202121212121212321232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 9Bz0 jb0 1oN0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0|62e5\",\"America/Santo_Domingo|SDMT EST EDT -0430 AST|4E 50 40 4u 40|01213131313131414|-1ttjk 1lJMk Mn0 6sp0 Lbu 1Cou yLu 1RAu wLu 1QMu xzu 1Q0u xXu 1PAu 13jB0 e00|29e5\",\"America/Sao_Paulo|LMT -03 -02|36.s 30 20|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glwR.w HdKR.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 pTd0 PX0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0|20e6\",\"America/Scoresbysund|LMT -02 -01 +00|1r.Q 20 10 0|0121323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2a5Ww.8 2z5ew.8 1a00 1cK0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|452\",\"America/Sitka|PST PWT PPT PDT YST AKST AKDT|80 70 70 70 90 90 80|01203030303030303030303030303030345656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|90e2\",\"America/St_Johns|NST NDT NST NDT NWT NPT NDDT|3u.Q 2u.Q 3u 2u 2u 2u 1u|01010101010101010101010101010101010102323232323232324523232323232323232323232323232323232323232323232323232323232323232323232323232323232326232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-28oit.8 14L0 1nB0 1in0 1gm0 Dz0 1JB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1fB0 19X0 1fB0 19X0 10O0 eKX.8 19X0 1iq0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4\",\"America/Swift_Current|LMT MST MDT MWT MPT CST|7b.k 70 60 60 60 60|012134121212121212121215|-2AD4M.E uHdM.E 1in0 UGp0 8x20 ix0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 isN0 1cL0 3Cp0 1cL0 1cN0 11z0 1qN0 WL0 pMp0|16e3\",\"America/Tegucigalpa|LMT CST CDT|5M.Q 60 50|01212121|-1WGGb.8 2ETcb.8 WL0 1qN0 WL0 GRd0 AL0|11e5\",\"America/Thule|LMT AST ADT|4z.8 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5To.Q 31NBo.Q 1cL0 1cN0 1cL0 1fB0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|656\",\"America/Thunder_Bay|CST EST EWT EPT EDT|60 50 40 40 40|0123141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-2q5S0 1iaN0 8x40 iv0 XNB0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4\",\"America/Vancouver|PST PDT PWT PPT|80 70 70 70|0102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TO0 1in0 UGp0 8x10 iy0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5\",\"America/Whitehorse|YST YDT YWT YPT YDDT PST PDT|90 80 80 80 70 80 70|0101023040565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 3NA0 vrd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3\",\"America/Winnipeg|CST CDT CWT CPT|60 50 50 50|010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aIi0 WL0 3ND0 1in0 Jap0 Rb0 aCN0 8x30 iw0 1tB0 11z0 1ip0 11z0 1o10 11z0 1o10 11z0 1rd0 10L0 1op0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 1cL0 1cN0 11z0 6i10 WL0 6i10 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|66e4\",\"America/Yakutat|YST YWT YPT YDT AKST AKDT|90 80 80 80 90 80|01203030303030303030303030303030304545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-17T10 8x00 iz0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cn0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|642\",\"America/Yellowknife|-00 MST MWT MPT MDDT MDT|0 70 60 60 50 60|012314151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151|-1pdA0 hix0 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3\",\"Antarctica/Casey|-00 +08 +11|0 -80 -b0|01212121|-2q00 1DjS0 T90 40P0 KL0 blz0 3m10|10\",\"Antarctica/Davis|-00 +07 +05|0 -70 -50|01012121|-vyo0 iXt0 alj0 1D7v0 VB0 3Wn0 KN0|70\",\"Antarctica/DumontDUrville|-00 +10|0 -a0|0101|-U0o0 cfq0 bFm0|80\",\"Antarctica/Macquarie|AEST AEDT -00 +11|-a0 -b0 0 -b0|0102010101010101010101010101010101010101010101010101010101010101010101010101010101010101013|-29E80 19X0 4SL0 1ayy0 Lvs0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0|1\",\"Antarctica/Mawson|-00 +06 +05|0 -60 -50|012|-CEo0 2fyk0|60\",\"Pacific/Auckland|NZMT NZST NZST NZDT|-bu -cu -c0 -d0|01020202020202020202020202023232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1GCVu Lz0 1tB0 11zu 1o0u 11zu 1o0u 11zu 1o0u 14nu 1lcu 14nu 1lcu 1lbu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1qLu WMu 1qLu 11Au 1n1bu IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|14e5\",\"Antarctica/Palmer|-00 -03 -04 -02|0 30 40 20|0121212121213121212121212121212121212121212121212121212121212121212121212121212121|-cao0 nD0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 jsN0 14N0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0|40\",\"Antarctica/Rothera|-00 -03|0 30|01|gOo0|130\",\"Antarctica/Syowa|-00 +03|0 -30|01|-vs00|20\",\"Antarctica/Troll|-00 +00 +02|0 0 -20|01212121212121212121212121212121212121212121212121212121212121212121|1puo0 hd0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|40\",\"Antarctica/Vostok|-00 +06|0 -60|01|-tjA0|25\",\"Europe/Oslo|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2awM0 Qm0 W6o0 5pf0 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 wJc0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1qM0 WM0 zpc0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e4\",\"Asia/Riyadh|LMT +03|-36.Q -30|01|-TvD6.Q|57e5\",\"Asia/Almaty|LMT +05 +06 +07|-57.M -50 -60 -70|012323232323232323232321232323232323232323232323232|-1Pc57.M eUo7.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|15e5\",\"Asia/Amman|LMT EET EEST|-2n.I -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1yW2n.I 1HiMn.I KL0 1oN0 11b0 1oN0 11b0 1pd0 1dz0 1cp0 11b0 1op0 11b0 fO10 1db0 1e10 1cL0 1cN0 1cL0 1cN0 1fz0 1pd0 10n0 1ld0 14n0 1hB0 15b0 1ip0 19X0 1cN0 1cL0 1cN0 17b0 1ld0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1So0 y00 1fc0 1dc0 1co0 1dc0 1cM0 1cM0 1cM0 1o00 11A0 1lc0 17c0 1cM0 1cM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|25e5\",\"Asia/Anadyr|LMT +12 +13 +14 +11|-bN.U -c0 -d0 -e0 -b0|01232121212121212121214121212121212121212121212121212121212141|-1PcbN.U eUnN.U 23CL0 1db0 2q10 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|13e3\",\"Asia/Aqtau|LMT +04 +05 +06|-3l.4 -40 -50 -60|012323232323232323232123232312121212121212121212|-1Pc3l.4 eUnl.4 24PX0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|15e4\",\"Asia/Aqtobe|LMT +04 +05 +06|-3M.E -40 -50 -60|0123232323232323232321232323232323232323232323232|-1Pc3M.E eUnM.E 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|27e4\",\"Asia/Ashgabat|LMT +04 +05 +06|-3R.w -40 -50 -60|0123232323232323232323212|-1Pc3R.w eUnR.w 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0|41e4\",\"Asia/Atyrau|LMT +03 +05 +06 +04|-3r.I -30 -50 -60 -40|01232323232323232323242323232323232324242424242|-1Pc3r.I eUor.I 24PW0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 2sp0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|\",\"Asia/Baghdad|BMT +03 +04|-2V.A -30 -40|012121212121212121212121212121212121212121212121212121|-26BeV.A 2ACnV.A 11b0 1cp0 1dz0 1dd0 1db0 1cN0 1cp0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1de0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0|66e5\",\"Asia/Qatar|LMT +04 +03|-3q.8 -40 -30|012|-21Jfq.8 27BXq.8|96e4\",\"Asia/Baku|LMT +03 +04 +05|-3j.o -30 -40 -50|01232323232323232323232123232323232323232323232323232323232323232|-1Pc3j.o 1jUoj.o WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 9Je0 1o00 11z0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5\",\"Asia/Bangkok|BMT +07|-6G.4 -70|01|-218SG.4|15e6\",\"Asia/Barnaul|LMT +06 +07 +08|-5z -60 -70 -80|0123232323232323232323212323232321212121212121212121212121212121212|-21S5z pCnz 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 p90 LE0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|\",\"Asia/Beirut|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-21aq0 1on0 1410 1db0 19B0 1in0 1ip0 WL0 1lQp0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 q6N0 En0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1op0 11b0 dA10 17b0 1iN0 17b0 1iN0 17b0 1iN0 17b0 1vB0 SL0 1mp0 13z0 1iN0 17b0 1iN0 17b0 1jd0 12n0 1a10 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0|22e5\",\"Asia/Bishkek|LMT +05 +06 +07|-4W.o -50 -60 -70|012323232323232323232321212121212121212121212121212|-1Pc4W.o eUnW.o 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2e00 1tX0 17b0 1ip0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1cPu 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0|87e4\",\"Asia/Brunei|LMT +0730 +08|-7D.E -7u -80|012|-1KITD.E gDc9.E|42e4\",\"Asia/Kolkata|MMT IST +0630|-5l.a -5u -6u|012121|-2zOtl.a 1r2LP.a 1un0 HB0 7zX0|15e6\",\"Asia/Chita|LMT +08 +09 +10|-7x.Q -80 -90 -a0|012323232323232323232321232323232323232323232323232323232323232312|-21Q7x.Q pAnx.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3re0|33e4\",\"Asia/Choibalsan|LMT +07 +08 +10 +09|-7C -70 -80 -a0 -90|0123434343434343434343434343434343434343434343424242|-2APHC 2UkoC cKn0 1da0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 3Db0 h1f0 1cJ0 1cP0 1cJ0|38e3\",\"Asia/Shanghai|CST CDT|-80 -90|010101010101010101010101010|-1c2w0 Rz0 11d0 1wL0 A10 8HX0 1G10 Tz0 1ip0 1jX0 1cN0 11b0 1oN0 aL0 1tU30 Rb0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0|23e6\",\"Asia/Colombo|MMT +0530 +06 +0630|-5j.w -5u -60 -6u|01231321|-2zOtj.w 1rFbN.w 1zzu 7Apu 23dz0 11zu n3cu|22e5\",\"Asia/Dhaka|HMT +0630 +0530 +06 +07|-5R.k -6u -5u -60 -70|0121343|-18LFR.k 1unn.k HB0 m6n0 2kxbu 1i00|16e6\",\"Asia/Damascus|LMT EET EEST|-2p.c -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-21Jep.c Hep.c 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1xRB0 11X0 1oN0 10L0 1pB0 11b0 1oN0 10L0 1mp0 13X0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 Nb0 1AN0 Nb0 bcp0 19X0 1gp0 19X0 3ld0 1xX0 Vd0 1Bz0 Sp0 1vX0 10p0 1dz0 1cN0 1cL0 1db0 1db0 1g10 1an0 1ap0 1db0 1fd0 1db0 1cN0 1db0 1dd0 1db0 1cp0 1dz0 1c10 1dX0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 19z0 1fB0 1qL0 11B0 1on0 Wp0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0|26e5\",\"Asia/Dili|LMT +08 +09|-8m.k -80 -90|01212|-2le8m.k 1dnXm.k 1nfA0 Xld0|19e4\",\"Asia/Dubai|LMT +04|-3F.c -40|01|-21JfF.c|39e5\",\"Asia/Dushanbe|LMT +05 +06 +07|-4z.c -50 -60 -70|012323232323232323232321|-1Pc4z.c eUnz.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2hB0|76e4\",\"Asia/Famagusta|LMT EET EEST +03|-2f.M -20 -30 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212312121212121212121212121212121212121212121|-1Vc2f.M 2a3cf.M 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 15U0 2Ks0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|\",\"Asia/Gaza|EET EEST IST IDT|-20 -30 -20 -30|0101010101010101010101010101010123232323232323232323232323232320101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 bXd0 gM0 8Q00 IM0 1wM0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 11z0 1o10 14o0 1lA1 SKX 1xd1 MKX 1AN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0|18e5\",\"Asia/Hebron|EET EEST IST IDT|-20 -30 -20 -30|010101010101010101010101010101012323232323232323232323232323232010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 bXd0 gM0 8Q00 IM0 1wM0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 12L0 1mN0 14o0 1lc0 Tb0 1xd1 MKX bB0 cn0 1cN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0|25e4\",\"Asia/Ho_Chi_Minh|LMT PLMT +07 +08 +09|-76.E -76.u -70 -80 -90|0123423232|-2yC76.E bK00.a 1h7b6.u 5lz0 18o0 3Oq0 k5b0 aW00 BAM0|90e5\",\"Asia/Hong_Kong|LMT HKT HKST HKWT JST|-7A.G -80 -90 -8u -90|0123412121212121212121212121212121212121212121212121212121212121212121|-2CFH0 1taO0 Hc0 xUu 9tBu 11z0 1tDu Rc0 1wo0 11A0 1cM0 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1nX0 U10 1tz0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 Rd0 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 17d0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0|73e5\",\"Asia/Hovd|LMT +06 +07 +08|-66.A -60 -70 -80|012323232323232323232323232323232323232323232323232|-2APG6.A 2Uko6.A cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|81e3\",\"Asia/Irkutsk|IMT +07 +08 +09|-6V.5 -70 -80 -90|01232323232323232323232123232323232323232323232323232323232323232|-21zGV.5 pjXV.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4\",\"Europe/Istanbul|IMT EET EEST +03 +04|-1U.U -20 -30 -30 -40|0121212121212121212121212121212121212121212121234312121212121212121212121212121212121212121212121212121212121212123|-2ogNU.U dzzU.U 11b0 8tB0 1on0 1410 1db0 19B0 1in0 3Rd0 Un0 1oN0 11b0 zSN0 CL0 mp0 1Vz0 1gN0 8yn0 1yp0 ML0 1kp0 17b0 1ip0 17b0 1fB0 19X0 1ip0 19X0 1ip0 17b0 qdB0 38L0 1jd0 Tz0 l6O0 11A0 WN0 1qL0 TB0 1tX0 U10 1tz0 11B0 1in0 17d0 z90 cne0 pb0 2Cp0 1800 14o0 1dc0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1a00 1fA0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WO0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 Xc0 1qo0 WM0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 15w0|13e6\",\"Asia/Jakarta|BMT +0720 +0730 +09 +08 WIB|-77.c -7k -7u -90 -80 -70|01232425|-1Q0Tk luM0 mPzO 8vWu 6kpu 4PXu xhcu|31e6\",\"Asia/Jayapura|LMT +09 +0930 WIT|-9m.M -90 -9u -90|0123|-1uu9m.M sMMm.M L4nu|26e4\",\"Asia/Jerusalem|JMT IST IDT IDDT|-2k.E -20 -30 -40|012121212121321212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-26Bek.E SyMk.E 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 3LB0 Em0 or0 1cn0 1dB0 16n0 10O0 1ja0 1tC0 14o0 1cM0 1a00 11A0 1Na0 An0 1MP0 AJ0 1Kp0 LC0 1oo0 Wl0 EQN0 Db0 1fB0 Rb0 bXd0 gM0 8Q00 IM0 1wM0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 1hB0 1dX0 1ep0 1aL0 1eN0 17X0 1nf0 11z0 1tB0 19W0 1e10 17b0 1ep0 1gL0 18N0 1fz0 1eN0 17b0 1gq0 1gn0 19d0 1dz0 1c10 17X0 1hB0 1gn0 19d0 1dz0 1c10 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0|81e4\",\"Asia/Kabul|+04 +0430|-40 -4u|01|-10Qs0|46e5\",\"Asia/Kamchatka|LMT +11 +12 +13|-ay.A -b0 -c0 -d0|012323232323232323232321232323232323232323232323232323232323212|-1SLKy.A ivXy.A 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|18e4\",\"Asia/Karachi|LMT +0530 +0630 +05 PKT PKST|-4s.c -5u -6u -50 -50 -60|012134545454|-2xoss.c 1qOKW.c 7zX0 eup0 LqMu 1fy00 1cL0 dK10 11b0 1610 1jX0|24e6\",\"Asia/Urumqi|LMT +06|-5O.k -60|01|-1GgtO.k|32e5\",\"Asia/Kathmandu|LMT +0530 +0545|-5F.g -5u -5J|012|-21JhF.g 2EGMb.g|12e5\",\"Asia/Khandyga|LMT +08 +09 +10 +11|-92.d -80 -90 -a0 -b0|0123232323232323232323212323232323232323232323232343434343434343432|-21Q92.d pAp2.d 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 qK0 yN0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|66e2\",\"Asia/Krasnoyarsk|LMT +06 +07 +08|-6b.q -60 -70 -80|01232323232323232323232123232323232323232323232323232323232323232|-21Hib.q prAb.q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5\",\"Asia/Kuala_Lumpur|SMT +07 +0720 +0730 +09 +08|-6T.p -70 -7k -7u -90 -80|0123435|-2Bg6T.p 17anT.p l5XE 17bO 8Fyu 1so1u|71e5\",\"Asia/Kuching|LMT +0730 +08 +0820 +09|-7l.k -7u -80 -8k -90|0123232323232323242|-1KITl.k gDbP.k 6ynu AnE 1O0k AnE 1NAk AnE 1NAk AnE 1NAk AnE 1O0k AnE 1NAk AnE pAk 8Fz0|13e4\",\"Asia/Macau|LMT CST +09 +10 CDT|-7y.a -80 -90 -a0 -90|012323214141414141414141414141414141414141414141414141414141414141414141|-2CFHy.a 1uqKy.a PX0 1kn0 15B0 11b0 4Qq0 1oM0 11c0 1ko0 1u00 11A0 1cM0 11c0 1o00 11A0 1o00 11A0 1oo0 1400 1o00 11A0 1o00 U00 1tA0 U00 1wo0 Rc0 1wru U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 Rd0 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 17d0 1cK0 1cO0 1cK0 1cO0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0|57e4\",\"Asia/Magadan|LMT +10 +11 +12|-a3.c -a0 -b0 -c0|012323232323232323232321232323232323232323232323232323232323232312|-1Pca3.c eUo3.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Cq0|95e3\",\"Asia/Makassar|LMT MMT +08 +09 WITA|-7V.A -7V.A -80 -90 -80|01234|-21JjV.A vfc0 myLV.A 8ML0|15e5\",\"Asia/Manila|PST PDT JST|-80 -90 -90|010201010|-1kJI0 AL0 cK10 65X0 mXB0 vX0 VK10 1db0|24e6\",\"Asia/Nicosia|LMT EET EEST|-2d.s -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Vc2d.s 2a3cd.s 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|32e4\",\"Asia/Novokuznetsk|LMT +06 +07 +08|-5M.M -60 -70 -80|012323232323232323232321232323232323232323232323232323232323212|-1PctM.M eULM.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|55e4\",\"Asia/Novosibirsk|LMT +06 +07 +08|-5v.E -60 -70 -80|0123232323232323232323212323212121212121212121212121212121212121212|-21Qnv.E pAFv.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 ml0 Os0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 4eN0|15e5\",\"Asia/Omsk|LMT +05 +06 +07|-4R.u -50 -60 -70|01232323232323232323232123232323232323232323232323232323232323232|-224sR.u pMLR.u 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|12e5\",\"Asia/Oral|LMT +03 +05 +06 +04|-3p.o -30 -50 -60 -40|01232323232323232424242424242424242424242424242|-1Pc3p.o eUop.o 23CK0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 1cM0 IM0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|27e4\",\"Asia/Pontianak|LMT PMT +0730 +09 +08 WITA WIB|-7h.k -7h.k -7u -90 -80 -80 -70|012324256|-2ua7h.k XE00 munL.k 8Rau 6kpu 4PXu xhcu Wqnu|23e4\",\"Asia/Pyongyang|LMT KST JST KST|-8n -8u -90 -90|012313|-2um8n 97XR 1lTzu 2Onc0 6BA0|29e5\",\"Asia/Qostanay|LMT +04 +05 +06|-4e.s -40 -50 -60|012323232323232323232123232323232323232323232323|-1Pc4e.s eUoe.s 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|\",\"Asia/Qyzylorda|LMT +04 +05 +06|-4l.Q -40 -50 -60|01232323232323232323232323232323232323232323232|-1Pc4l.Q eUol.Q 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 3ao0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 zQl0|73e4\",\"Asia/Rangoon|RMT +0630 +09|-6o.L -6u -90|0121|-21Jio.L SmnS.L 7j9u|48e5\",\"Asia/Sakhalin|LMT +09 +11 +12 +10|-9u.M -90 -b0 -c0 -a0|01232323232323232323232423232323232424242424242424242424242424242|-2AGVu.M 1BoMu.M 1qFa0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 2pB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|58e4\",\"Asia/Samarkand|LMT +04 +05 +06|-4r.R -40 -50 -60|01232323232323232323232|-1Pc4r.R eUor.R 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|36e4\",\"Asia/Seoul|LMT KST JST KST KDT KDT|-8r.Q -8u -90 -90 -a0 -9u|012343434343151515151515134343|-2um8r.Q 97XV.Q 1m1zu 6CM0 Fz0 1kN0 14n0 1kN0 14L0 1zd0 On0 69B0 2I0u OL0 1FB0 Rb0 1qN0 TX0 1tB0 TX0 1tB0 TX0 1tB0 TX0 2ap0 12FBu 11A0 1o00 11A0|23e6\",\"Asia/Srednekolymsk|LMT +10 +11 +12|-ae.Q -a0 -b0 -c0|01232323232323232323232123232323232323232323232323232323232323232|-1Pcae.Q eUoe.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|35e2\",\"Asia/Taipei|CST JST CDT|-80 -90 -90|01020202020202020202020202020202020202020|-1iw80 joM0 1yo0 Tz0 1ip0 1jX0 1cN0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 10N0 1BX0 10p0 1pz0 10p0 1pz0 10p0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1BB0 ML0 1Bd0 ML0 uq10 1db0 1cN0 1db0 97B0 AL0|74e5\",\"Asia/Tashkent|LMT +05 +06 +07|-4B.b -50 -60 -70|012323232323232323232321|-1Pc4B.b eUnB.b 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0|23e5\",\"Asia/Tbilisi|TBMT +03 +04 +05|-2X.b -30 -40 -50|0123232323232323232323212121232323232323232323212|-1Pc2X.b 1jUnX.b WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cK0 1cL0 1cN0 1cL0 1cN0 2pz0 1cL0 1fB0 3Nz0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 An0 Os0 WM0|11e5\",\"Asia/Tehran|LMT TMT +0330 +04 +05 +0430|-3p.I -3p.I -3u -40 -50 -4u|01234325252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2btDp.I 1d3c0 1huLT.I TXu 1pz0 sN0 vAu 1cL0 1dB0 1en0 pNB0 UL0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 64p0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0|14e6\",\"Asia/Thimphu|LMT +0530 +06|-5W.A -5u -60|012|-Su5W.A 1BGMs.A|79e3\",\"Asia/Tokyo|JST JDT|-90 -a0|010101010|-QJJ0 Rc0 1lc0 14o0 1zc0 Oo0 1zc0 Oo0|38e6\",\"Asia/Tomsk|LMT +06 +07 +08|-5D.P -60 -70 -80|0123232323232323232323212323232323232323232323212121212121212121212|-21NhD.P pxzD.P 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 co0 1bB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Qp0|10e5\",\"Asia/Ulaanbaatar|LMT +07 +08 +09|-77.w -70 -80 -90|012323232323232323232323232323232323232323232323232|-2APH7.w 2Uko7.w cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|12e5\",\"Asia/Ust-Nera|LMT +08 +09 +12 +11 +10|-9w.S -80 -90 -c0 -b0 -a0|012343434343434343434345434343434343434343434343434343434343434345|-21Q9w.S pApw.S 23CL0 1d90 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|65e2\",\"Asia/Vladivostok|LMT +09 +10 +11|-8L.v -90 -a0 -b0|01232323232323232323232123232323232323232323232323232323232323232|-1SJIL.v itXL.v 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4\",\"Asia/Yakutsk|LMT +08 +09 +10|-8C.W -80 -90 -a0|01232323232323232323232123232323232323232323232323232323232323232|-21Q8C.W pAoC.W 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|28e4\",\"Asia/Yekaterinburg|LMT PMT +04 +05 +06|-42.x -3J.5 -40 -50 -60|012343434343434343434343234343434343434343434343434343434343434343|-2ag42.x 7mQh.s qBvJ.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|14e5\",\"Asia/Yerevan|LMT +03 +04 +05|-2W -30 -40 -50|0123232323232323232323212121212323232323232323232323232323232|-1Pc2W 1jUnW WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 4RX0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|13e5\",\"Atlantic/Azores|HMT -02 -01 +00 WET|1S.w 20 10 0 0|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121232323232323232323232323232323234323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2ldW0 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|25e4\",\"Atlantic/Bermuda|LMT AST ADT|4j.i 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1BnRE.G 1LTbE.G 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e3\",\"Atlantic/Canary|LMT -01 WET WEST|11.A 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UtaW.o XPAW.o 1lAK0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4\",\"Atlantic/Cape_Verde|LMT -02 -01|1y.4 20 10|01212|-2ldW0 1eEo0 7zX0 1djf0|50e4\",\"Atlantic/Faroe|LMT WET WEST|r.4 0 -10|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2uSnw.U 2Wgow.U 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|49e3\",\"Atlantic/Madeira|FMT -01 +00 +01 WET WEST|17.A 10 0 -10 0 -10|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2ldX0 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e4\",\"Atlantic/Reykjavik|LMT -01 +00 GMT|1s 10 0 0|012121212121212121212121212121212121212121212121212121212121212121213|-2uWmw mfaw 1Bd0 ML0 1LB0 Cn0 1LB0 3fX0 C10 HrX0 1cO0 LB0 1EL0 LA0 1C00 Oo0 1wo0 Rc0 1wo0 Rc0 1wo0 Rc0 1zc0 Oo0 1zc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0|12e4\",\"Atlantic/South_Georgia|-02|20|0||30\",\"Atlantic/Stanley|SMT -04 -03 -02|3P.o 40 30 20|012121212121212323212121212121212121212121212121212121212121212121212|-2kJw8.A 12bA8.A 19X0 1fB0 19X0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 Cn0 1Cc10 WL0 1qL0 U10 1tz0 2mN0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 U10 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qN0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 U10 1tz0 U10 1tz0 U10|21e2\",\"Australia/Sydney|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|40e5\",\"Australia/Adelaide|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 WM0 1qM0 Rc0 1zc0 U00 1tA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|11e5\",\"Australia/Brisbane|AEST AEDT|-a0 -b0|01010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0|20e5\",\"Australia/Broken_Hill|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|18e3\",\"Australia/Currie|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|746\",\"Australia/Darwin|ACST ACDT|-9u -au|010101010|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0|12e4\",\"Australia/Eucla|+0845 +0945|-8J -9J|0101010101010101010|-293kI xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|368\",\"Australia/Hobart|AEST AEDT|-a0 -b0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 VfB0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|21e4\",\"Australia/Lord_Howe|AEST +1030 +1130 +11|-a0 -au -bu -b0|0121212121313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313|raC0 1zdu Rb0 1zd0 On0 1zd0 On0 1zd0 On0 1zd0 TXu 1qMu WLu 1tAu WLu 1tAu TXu 1tAu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 11Au 1nXu 1qMu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu 11zu 1o0u WLu 1qMu 14nu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu|347\",\"Australia/Lindeman|AEST AEDT|-a0 -b0|010101010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0|10\",\"Australia/Melbourne|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1qM0 11A0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|39e5\",\"Australia/Perth|AWST AWDT|-80 -90|0101010101010101010|-293jX xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|18e5\",\"CET|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|\",\"Pacific/Easter|EMT -07 -06 -05|7h.s 70 60 50|012121212121212121212121212123232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1uSgG.w 1s4IG.w WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 2pA0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0|30e2\",\"CST6CDT|CST CDT CWT CPT|60 50 50 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|\",\"EET|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|\",\"Europe/Dublin|DMT IST GMT BST IST|p.l -y.D 0 -10 -10|01232323232324242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242|-2ax9y.D Rc0 1fzy.D 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 g600 14o0 1wo0 17c0 1io0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5\",\"EST|EST|50|0||\",\"EST5EDT|EST EDT EWT EPT|50 40 40 40|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 SgN0 8x40 iv0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|\",\"Etc/GMT-0|GMT|0|0||\",\"Etc/GMT-1|+01|-10|0||\",\"Pacific/Port_Moresby|+10|-a0|0||25e4\",\"Etc/GMT-11|+11|-b0|0||\",\"Pacific/Tarawa|+12|-c0|0||29e3\",\"Etc/GMT-13|+13|-d0|0||\",\"Etc/GMT-14|+14|-e0|0||\",\"Etc/GMT-2|+02|-20|0||\",\"Etc/GMT-3|+03|-30|0||\",\"Etc/GMT-4|+04|-40|0||\",\"Etc/GMT-5|+05|-50|0||\",\"Etc/GMT-6|+06|-60|0||\",\"Indian/Christmas|+07|-70|0||21e2\",\"Etc/GMT-8|+08|-80|0||\",\"Pacific/Palau|+09|-90|0||21e3\",\"Etc/GMT+1|-01|10|0||\",\"Etc/GMT+10|-10|a0|0||\",\"Etc/GMT+11|-11|b0|0||\",\"Etc/GMT+12|-12|c0|0||\",\"Etc/GMT+3|-03|30|0||\",\"Etc/GMT+4|-04|40|0||\",\"Etc/GMT+5|-05|50|0||\",\"Etc/GMT+6|-06|60|0||\",\"Etc/GMT+7|-07|70|0||\",\"Etc/GMT+8|-08|80|0||\",\"Etc/GMT+9|-09|90|0||\",\"Etc/UTC|UTC|0|0||\",\"Europe/Amsterdam|AMT NST +0120 +0020 CEST CET|-j.w -1j.w -1k -k -20 -10|010101010101010101010101010101010101010101012323234545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545|-2aFcj.w 11b0 1iP0 11A0 1io0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1co0 1io0 1yo0 Pc0 1a00 1fA0 1Bc0 Mo0 1tc0 Uo0 1tA0 U00 1uo0 W00 1s00 VA0 1so0 Vc0 1sM0 UM0 1wo0 Rc0 1u00 Wo0 1rA0 W00 1s00 VA0 1sM0 UM0 1w00 fV0 BCX.w 1tA0 U00 1u00 Wo0 1sm0 601k WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|16e5\",\"Europe/Andorra|WET CET CEST|0 -10 -20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-UBA0 1xIN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|79e3\",\"Europe/Astrakhan|LMT +03 +04 +05|-3c.c -30 -40 -50|012323232323232323212121212121212121212121212121212121212121212|-1Pcrc.c eUMc.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|10e5\",\"Europe/Athens|AMT EET EEST CEST CET|-1y.Q -20 -30 -20 -10|012123434121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a61x.Q CNbx.Q mn0 kU10 9b0 3Es0 Xa0 1fb0 1dd0 k3X0 Nz0 SCp0 1vc0 SO0 1cM0 1a00 1ao0 1fc0 1a10 1fG0 1cg0 1dX0 1bX0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|35e5\",\"Europe/London|GMT BST BDST|0 -10 -20|0101010101010101010101010101010101010101010101010121212121210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|10e6\",\"Europe/Belgrade|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19RC0 3IP0 WM0 1fA0 1cM0 1cM0 1rc0 Qo0 1vmo0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5\",\"Europe/Berlin|CET CEST CEMT|-10 -20 -30|01010101010101210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 kL0 Nc0 m10 WM0 1ao0 1cp0 dX0 jz0 Dd0 1io0 17c0 1fA0 1a00 1ehA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e5\",\"Europe/Prague|CET CEST GMT|-10 -20 0|01010101010101010201010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 1qM0 11c0 mp0 xA0 mn0 17c0 1io0 17c0 1fc0 1ao0 1bNc0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|13e5\",\"Europe/Brussels|WET CET CEST WEST|0 -10 -20 -10|0121212103030303030303030303030303030303030303030303212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ehc0 3zX0 11c0 1iO0 11A0 1o00 11A0 my0 Ic0 1qM0 Rc0 1EM0 UM0 1u00 10o0 1io0 1io0 17c0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a30 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 y00 5Wn0 WM0 1fA0 1cM0 16M0 1iM0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|21e5\",\"Europe/Bucharest|BMT EET EEST|-1I.o -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1xApI.o 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Axc0 On0 1fA0 1a10 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|19e5\",\"Europe/Budapest|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1ip0 17b0 1op0 1tb0 Q2m0 3Ne0 WM0 1fA0 1cM0 1cM0 1oJ0 1dc0 1030 1fA0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1iM0 1fA0 8Ha0 Rb0 1wN0 Rb0 1BB0 Lz0 1C20 LB0 SNX0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5\",\"Europe/Zurich|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19Lc0 11A0 1o00 11A0 1xG10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e4\",\"Europe/Chisinau|CMT BMT EET EEST CEST CET MSK MSD|-1T -1I.o -20 -30 -20 -10 -30 -40|012323232323232323234545467676767676767676767323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-26jdT wGMa.A 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 27A0 2en0 39g0 WM0 1fA0 1cM0 V90 1t7z0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 gL0 WO0 1cM0 1cM0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11D0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|67e4\",\"Europe/Copenhagen|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 Tz0 VuO0 60q0 WM0 1fA0 1cM0 1cM0 1cM0 S00 1HA0 Nc0 1C00 Dc0 1Nc0 Ao0 1h5A0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5\",\"Europe/Gibraltar|GMT BST BDST CET CEST|0 -10 -20 -10 -20|010101010101010101010101010101010101010101010101012121212121010121010101010101010101034343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 10Jz0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|30e3\",\"Europe/Helsinki|HMT EET EEST|-1D.N -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1WuND.N OULD.N 1dA0 1xGq0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5\",\"Europe/Kaliningrad|CET CEST EET EEST MSK MSD +03|-10 -20 -20 -30 -30 -40 -30|01010101010101232454545454545454543232323232323232323232323232323232323232323262|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 390 7A0 1en0 12N0 1pbb0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|44e4\",\"Europe/Kiev|KMT EET MSK CEST CET MSD EEST|-22.4 -20 -30 -20 -10 -40 -30|0123434252525252525252525256161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc22.4 eUo2.4 rnz0 2Hg0 WM0 1fA0 da0 1v4m0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 Db0 3220 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|34e5\",\"Europe/Kirov|LMT +03 +04 +05|-3i.M -30 -40 -50|01232323232323232321212121212121212121212121212121212121212121|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|48e4\",\"Europe/Lisbon|LMT WET WEST WEMT CET CEST|A.J 0 -10 -20 -10 -20|012121212121212121212121212121212121212121212321232123212321212121212121212121212121212121212121214121212121212121212121212121212124545454212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2le00 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 pvy0 1cM0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e5\",\"Europe/Luxembourg|LMT CET CEST WET WEST WEST WET|-o.A -10 -20 0 -10 -20 -10|0121212134343434343434343434343434343434343434343434565651212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2DG0o.A t6mo.A TB0 1nX0 Up0 1o20 11A0 rW0 CM0 1qP0 R90 1EO0 UK0 1u20 10m0 1ip0 1in0 17e0 19W0 1fB0 1db0 1cp0 1in0 17d0 1fz0 1a10 1in0 1a10 1in0 17f0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 vA0 60L0 WM0 1fA0 1cM0 17c0 1io0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4\",\"Europe/Madrid|WET WEST WEMT CET CEST|0 -10 -20 -10 -20|010101010101010101210343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-25Td0 19B0 1cL0 1dd0 b1z0 18p0 3HX0 17d0 1fz0 1a10 1io0 1a00 1in0 17d0 iIn0 Hd0 1cL0 bb0 1200 2s20 14n0 5aL0 Mp0 1vz0 17d0 1in0 17d0 1in0 17d0 1in0 17d0 6hX0 11B0 XHX0 1a10 1fz0 1a10 19X0 1cN0 1fz0 1a10 1fC0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e5\",\"Europe/Malta|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1co0 17c0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1co0 1cM0 1lA0 Xc0 1qq0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1iN0 19z0 1fB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4\",\"Europe/Minsk|MMT EET MSK CEST CET MSD EEST +03|-1O -20 -30 -20 -10 -40 -30 -30|01234343252525252525252525261616161616161616161616161616161616161617|-1Pc1O eUnO qNX0 3gQ0 WM0 1fA0 1cM0 Al0 1tsn0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 3Fc0 1cN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0|19e5\",\"Europe/Monaco|PMT WET WEST WEMT CET CEST|-9.l 0 -10 -20 -10 -20|01212121212121212121212121212121212121212121212121232323232345454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 2RV0 11z0 11B0 1ze0 WM0 1fA0 1cM0 1fa0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e3\",\"Europe/Moscow|MMT MMT MST MDST MSD MSK +05 EET EEST MSK|-2u.h -2v.j -3v.j -4v.j -40 -30 -50 -20 -30 -40|012132345464575454545454545454545458754545454545454545454545454545454545454595|-2ag2u.h 2pyW.W 1bA0 11X0 GN0 1Hb0 c4v.j ik0 3DA0 dz0 15A0 c10 2q10 iM10 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|16e6\",\"Europe/Paris|PMT WET WEST CEST CET WEMT|-9.l 0 -10 -20 -10 -20|0121212121212121212121212121212121212121212121212123434352543434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2nco8.l cNb8.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 Ik0 5M30 WM0 1fA0 1cM0 Vx0 hB0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e6\",\"Europe/Riga|RMT LST EET MSK CEST CET MSD EEST|-1A.y -2A.y -20 -30 -20 -10 -40 -30|010102345454536363636363636363727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272|-25TzA.y 11A0 1iM0 ko0 gWm0 yDXA.y 2bX0 3fE0 WM0 1fA0 1cM0 1cM0 4m0 1sLy0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 1o00 11A0 1o00 11A0 1qM0 3oo0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|64e4\",\"Europe/Rome|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1cM0 16M0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1C00 LA0 1zc0 Oo0 1C00 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1zc0 Oo0 1fC0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|39e5\",\"Europe/Samara|LMT +03 +04 +05|-3k.k -30 -40 -50|0123232323232323232121232323232323232323232323232323232323212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2y10 14m0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|12e5\",\"Europe/Saratov|LMT +03 +04 +05|-34.i -30 -40 -50|012323232323232321212121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 5810|\",\"Europe/Simferopol|SMT EET MSK CEST CET MSD EEST MSK|-2g -20 -30 -20 -10 -40 -30 -40|012343432525252525252525252161616525252616161616161616161616161616161616172|-1Pc2g eUog rEn0 2qs0 WM0 1fA0 1cM0 3V0 1u0L0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 4eL0 1cL0 1cN0 1cL0 1cN0 dX0 WL0 1cN0 1cL0 1fB0 1o30 11B0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11z0 1nW0|33e4\",\"Europe/Sofia|EET CET CEST EEST|-20 -10 -20 -30|01212103030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030|-168L0 WM0 1fA0 1cM0 1cM0 1cN0 1mKH0 1dd0 1fb0 1ap0 1fb0 1a20 1fy0 1a30 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5\",\"Europe/Stockholm|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 TB0 2yDe0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|15e5\",\"Europe/Tallinn|TMT CET CEST EET MSK MSD EEST|-1D -10 -20 -20 -30 -40 -30|012103421212454545454545454546363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363|-26oND teD 11A0 1Ta0 4rXl KSLD 2FX0 2Jg0 WM0 1fA0 1cM0 18J0 1sTX0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o10 11A0 1qM0 5QM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e4\",\"Europe/Tirane|LMT CET CEST|-1j.k -10 -20|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glBj.k 14pcj.k 5LC0 WM0 4M0 1fCK0 10n0 1op0 11z0 1pd0 11z0 1qN0 WL0 1qp0 Xb0 1qp0 Xb0 1qp0 11z0 1lB0 11z0 1qN0 11z0 1iN0 16n0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4\",\"Europe/Ulyanovsk|LMT +03 +04 +05 +02|-3d.A -30 -40 -50 -20|01232323232323232321214121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|13e5\",\"Europe/Uzhgorod|CET CEST MSK MSD EET EEST|-10 -20 -30 -40 -20 -30|010101023232323232323232320454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-1cqL0 6i00 WM0 1fA0 1cM0 1ml0 1Cp0 1r3W0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 1Nf0 2pw0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e4\",\"Europe/Vienna|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 3KM0 14o0 LA00 6i00 WM0 1fA0 1cM0 1cM0 1cM0 400 2qM0 1ao0 1co0 1cM0 1io0 17c0 1gHa0 19X0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|18e5\",\"Europe/Vilnius|WMT KMT CET EET MSK CEST MSD EEST|-1o -1z.A -10 -20 -30 -20 -40 -30|012324525254646464646464646473737373737373737352537373737373737373737373737373737373737373737373737373737373737373737373|-293do 6ILM.o 1Ooz.A zz0 Mfd0 29W0 3is0 WM0 1fA0 1cM0 LV0 1tgL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11B0 1o00 11A0 1qM0 8io0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4\",\"Europe/Volgograd|LMT +03 +04 +05|-2V.E -30 -40 -50|012323232323232321212121212121212121212121212121212121212121212|-21IqV.E psLV.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 9Jd0|10e5\",\"Europe/Warsaw|WMT CET CEST EET EEST|-1o -10 -20 -20 -30|012121234312121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ctdo 1LXo 11d0 1iO0 11A0 1o00 11A0 1on0 11A0 6zy0 HWP0 5IM0 WM0 1fA0 1cM0 1dz0 1mL0 1en0 15B0 1aq0 1nA0 11A0 1io0 17c0 1fA0 1a00 iDX0 LA0 1cM0 1cM0 1C00 Oo0 1cM0 1cM0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1C00 LA0 uso0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5\",\"Europe/Zaporozhye|+0220 EET MSK CEST CET MSD EEST|-2k -20 -30 -20 -10 -40 -30|01234342525252525252525252526161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc2k eUok rdb0 2RE0 WM0 1fA0 8m0 1v9a0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cK0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|77e4\",\"HST|HST|a0|0||\",\"Indian/Chagos|LMT +05 +06|-4N.E -50 -60|012|-2xosN.E 3AGLN.E|30e2\",\"Indian/Cocos|+0630|-6u|0||596\",\"Indian/Kerguelen|-00 +05|0 -50|01|-MG00|130\",\"Indian/Mahe|LMT +04|-3F.M -40|01|-2yO3F.M|79e3\",\"Indian/Maldives|MMT +05|-4S -50|01|-olgS|35e4\",\"Indian/Mauritius|LMT +04 +05|-3O -40 -50|012121|-2xorO 34unO 14L0 12kr0 11z0|15e4\",\"Indian/Reunion|LMT +04|-3F.Q -40|01|-2mDDF.Q|84e4\",\"Pacific/Kwajalein|+11 +10 +09 -12 +12|-b0 -a0 -90 c0 -c0|012034|-1kln0 akp0 6Up0 12ry0 Wan0|14e3\",\"MET|MET MEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|\",\"MST|MST|70|0||\",\"MST7MDT|MST MDT MWT MPT|70 60 60 60|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|\",\"Pacific/Chatham|+1215 +1245 +1345|-cf -cJ -dJ|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-WqAf 1adef IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|600\",\"Pacific/Apia|LMT -1130 -11 -10 +14 +13|bq.U bu b0 a0 -e0 -d0|01232345454545454545454545454545454545454545454545454545454|-2nDMx.4 1yW03.4 2rRbu 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|37e3\",\"Pacific/Bougainville|+10 +09 +11|-a0 -90 -b0|0102|-16Wy0 7CN0 2MQp0|18e4\",\"Pacific/Chuuk|+10 +09|-a0 -90|01010|-2ewy0 axB0 RVX0 axd0|49e3\",\"Pacific/Efate|LMT +11 +12|-bd.g -b0 -c0|0121212121212121212121|-2l9nd.g 2Szcd.g 1cL0 1oN0 10L0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 Lz0 1Nd0 An0|66e3\",\"Pacific/Enderbury|-12 -11 +13|c0 b0 -d0|012|nIc0 B7X0|1\",\"Pacific/Fakaofo|-11 +13|b0 -d0|01|1Gfn0|483\",\"Pacific/Fiji|LMT +12 +13|-bT.I -c0 -d0|0121212121212121212121212121212121212121212121212121212121212121|-2bUzT.I 3m8NT.I LA0 1EM0 IM0 nJc0 LA0 1o00 Rc0 1wo0 Ao0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 20o0 pc0 20o0 s00 20o0 pc0 20o0 pc0 20o0 pc0 20o0 pc0 20o0 s00 1VA0 s00 20o0 pc0 20o0 pc0 20o0 pc0 20o0 pc0 20o0 s00 20o0 pc0 20o0 pc0 20o0 pc0 20o0 pc0 20o0 s00 1VA0 s00|88e4\",\"Pacific/Galapagos|LMT -05 -06|5W.o 50 60|01212|-1yVS1.A 2dTz1.A gNd0 rz0|25e3\",\"Pacific/Gambier|LMT -09|8X.M 90|01|-2jof0.c|125\",\"Pacific/Guadalcanal|LMT +11|-aD.M -b0|01|-2joyD.M|11e4\",\"Pacific/Guam|GST +09 GDT ChST|-a0 -90 -b0 -a0|01020202020202020203|-18jK0 6pB0 AhB0 3QL0 g2p0 3p91 WOX rX0 1zd0 Rb0 1wp0 Rb0 5xd0 rX0 5sN0 zb1 1C0X On0 ULb0|17e4\",\"Pacific/Honolulu|HST HDT HWT HPT HST|au 9u 9u 9u a0|0102304|-1thLu 8x0 lef0 8wWu iAu 46p0|37e4\",\"Pacific/Kiritimati|-1040 -10 +14|aE a0 -e0|012|nIaE B7Xk|51e2\",\"Pacific/Kosrae|+11 +09 +10 +12|-b0 -90 -a0 -c0|01021030|-2ewz0 axC0 HBy0 akp0 axd0 WOK0 1bdz0|66e2\",\"Pacific/Majuro|+11 +09 +10 +12|-b0 -90 -a0 -c0|0102103|-2ewz0 axC0 HBy0 akp0 6RB0 12um0|28e3\",\"Pacific/Marquesas|LMT -0930|9i 9u|01|-2joeG|86e2\",\"Pacific/Pago_Pago|LMT SST|bm.M b0|01|-2nDMB.c|37e2\",\"Pacific/Nauru|LMT +1130 +09 +12|-b7.E -bu -90 -c0|01213|-1Xdn7.E QCnB.E 7mqu 1lnbu|10e3\",\"Pacific/Niue|-1120 -1130 -11|bk bu b0|012|-KfME 17y0a|12e2\",\"Pacific/Norfolk|+1112 +1130 +1230 +11 +12|-bc -bu -cu -b0 -c0|012134343434343434343434343434343434343434|-Kgbc W01G Oo0 1COo0 9Jcu 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|25e4\",\"Pacific/Noumea|LMT +11 +12|-b5.M -b0 -c0|01212121|-2l9n5.M 2EqM5.M xX0 1PB0 yn0 HeP0 Ao0|98e3\",\"Pacific/Pitcairn|-0830 -08|8u 80|01|18Vku|56\",\"Pacific/Pohnpei|+11 +09 +10|-b0 -90 -a0|010210|-2ewz0 axC0 HBy0 akp0 axd0|34e3\",\"Pacific/Rarotonga|-1030 -0930 -10|au 9u a0|012121212121212121212121212|lyWu IL0 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu|13e3\",\"Pacific/Tahiti|LMT -10|9W.g a0|01|-2joe1.I|18e4\",\"Pacific/Tongatapu|+1220 +13 +14|-ck -d0 -e0|0121212121|-1aB0k 2n5dk 15A0 1wo0 xz0 1Q10 xz0 zWN0 s00|75e3\",\"PST8PDT|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|\",\"WET|WET WEST|0 -10|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|\"],\"links\":[\"Africa/Abidjan|Africa/Bamako\",\"Africa/Abidjan|Africa/Banjul\",\"Africa/Abidjan|Africa/Conakry\",\"Africa/Abidjan|Africa/Dakar\",\"Africa/Abidjan|Africa/Freetown\",\"Africa/Abidjan|Africa/Lome\",\"Africa/Abidjan|Africa/Nouakchott\",\"Africa/Abidjan|Africa/Ouagadougou\",\"Africa/Abidjan|Africa/Timbuktu\",\"Africa/Abidjan|Atlantic/St_Helena\",\"Africa/Cairo|Egypt\",\"Africa/Johannesburg|Africa/Maseru\",\"Africa/Johannesburg|Africa/Mbabane\",\"Africa/Lagos|Africa/Bangui\",\"Africa/Lagos|Africa/Brazzaville\",\"Africa/Lagos|Africa/Douala\",\"Africa/Lagos|Africa/Kinshasa\",\"Africa/Lagos|Africa/Libreville\",\"Africa/Lagos|Africa/Luanda\",\"Africa/Lagos|Africa/Malabo\",\"Africa/Lagos|Africa/Niamey\",\"Africa/Lagos|Africa/Porto-Novo\",\"Africa/Maputo|Africa/Blantyre\",\"Africa/Maputo|Africa/Bujumbura\",\"Africa/Maputo|Africa/Gaborone\",\"Africa/Maputo|Africa/Harare\",\"Africa/Maputo|Africa/Kigali\",\"Africa/Maputo|Africa/Lubumbashi\",\"Africa/Maputo|Africa/Lusaka\",\"Africa/Nairobi|Africa/Addis_Ababa\",\"Africa/Nairobi|Africa/Asmara\",\"Africa/Nairobi|Africa/Asmera\",\"Africa/Nairobi|Africa/Dar_es_Salaam\",\"Africa/Nairobi|Africa/Djibouti\",\"Africa/Nairobi|Africa/Kampala\",\"Africa/Nairobi|Africa/Mogadishu\",\"Africa/Nairobi|Indian/Antananarivo\",\"Africa/Nairobi|Indian/Comoro\",\"Africa/Nairobi|Indian/Mayotte\",\"Africa/Tripoli|Libya\",\"America/Adak|America/Atka\",\"America/Adak|US/Aleutian\",\"America/Anchorage|US/Alaska\",\"America/Argentina/Buenos_Aires|America/Buenos_Aires\",\"America/Argentina/Catamarca|America/Argentina/ComodRivadavia\",\"America/Argentina/Catamarca|America/Catamarca\",\"America/Argentina/Cordoba|America/Cordoba\",\"America/Argentina/Cordoba|America/Rosario\",\"America/Argentina/Jujuy|America/Jujuy\",\"America/Argentina/Mendoza|America/Mendoza\",\"America/Atikokan|America/Coral_Harbour\",\"America/Chicago|US/Central\",\"America/Curacao|America/Aruba\",\"America/Curacao|America/Kralendijk\",\"America/Curacao|America/Lower_Princes\",\"America/Denver|America/Shiprock\",\"America/Denver|Navajo\",\"America/Denver|US/Mountain\",\"America/Detroit|US/Michigan\",\"America/Edmonton|Canada/Mountain\",\"America/Fort_Wayne|America/Indiana/Indianapolis\",\"America/Fort_Wayne|America/Indianapolis\",\"America/Fort_Wayne|US/East-Indiana\",\"America/Halifax|Canada/Atlantic\",\"America/Havana|Cuba\",\"America/Indiana/Knox|America/Knox_IN\",\"America/Indiana/Knox|US/Indiana-Starke\",\"America/Jamaica|Jamaica\",\"America/Kentucky/Louisville|America/Louisville\",\"America/Los_Angeles|US/Pacific\",\"America/Los_Angeles|US/Pacific-New\",\"America/Manaus|Brazil/West\",\"America/Mazatlan|Mexico/BajaSur\",\"America/Mexico_City|Mexico/General\",\"America/New_York|US/Eastern\",\"America/Noronha|Brazil/DeNoronha\",\"America/Panama|America/Cayman\",\"America/Phoenix|US/Arizona\",\"America/Port_of_Spain|America/Anguilla\",\"America/Port_of_Spain|America/Antigua\",\"America/Port_of_Spain|America/Dominica\",\"America/Port_of_Spain|America/Grenada\",\"America/Port_of_Spain|America/Guadeloupe\",\"America/Port_of_Spain|America/Marigot\",\"America/Port_of_Spain|America/Montserrat\",\"America/Port_of_Spain|America/St_Barthelemy\",\"America/Port_of_Spain|America/St_Kitts\",\"America/Port_of_Spain|America/St_Lucia\",\"America/Port_of_Spain|America/St_Thomas\",\"America/Port_of_Spain|America/St_Vincent\",\"America/Port_of_Spain|America/Tortola\",\"America/Port_of_Spain|America/Virgin\",\"America/Regina|Canada/Saskatchewan\",\"America/Rio_Branco|America/Porto_Acre\",\"America/Rio_Branco|Brazil/Acre\",\"America/Santiago|Chile/Continental\",\"America/Sao_Paulo|Brazil/East\",\"America/St_Johns|Canada/Newfoundland\",\"America/Tijuana|America/Ensenada\",\"America/Tijuana|America/Santa_Isabel\",\"America/Tijuana|Mexico/BajaNorte\",\"America/Toronto|America/Montreal\",\"America/Toronto|Canada/Eastern\",\"America/Vancouver|Canada/Pacific\",\"America/Whitehorse|Canada/Yukon\",\"America/Winnipeg|Canada/Central\",\"Asia/Ashgabat|Asia/Ashkhabad\",\"Asia/Bangkok|Asia/Phnom_Penh\",\"Asia/Bangkok|Asia/Vientiane\",\"Asia/Dhaka|Asia/Dacca\",\"Asia/Dubai|Asia/Muscat\",\"Asia/Ho_Chi_Minh|Asia/Saigon\",\"Asia/Hong_Kong|Hongkong\",\"Asia/Jerusalem|Asia/Tel_Aviv\",\"Asia/Jerusalem|Israel\",\"Asia/Kathmandu|Asia/Katmandu\",\"Asia/Kolkata|Asia/Calcutta\",\"Asia/Kuala_Lumpur|Asia/Singapore\",\"Asia/Kuala_Lumpur|Singapore\",\"Asia/Macau|Asia/Macao\",\"Asia/Makassar|Asia/Ujung_Pandang\",\"Asia/Nicosia|Europe/Nicosia\",\"Asia/Qatar|Asia/Bahrain\",\"Asia/Rangoon|Asia/Yangon\",\"Asia/Riyadh|Asia/Aden\",\"Asia/Riyadh|Asia/Kuwait\",\"Asia/Seoul|ROK\",\"Asia/Shanghai|Asia/Chongqing\",\"Asia/Shanghai|Asia/Chungking\",\"Asia/Shanghai|Asia/Harbin\",\"Asia/Shanghai|PRC\",\"Asia/Taipei|ROC\",\"Asia/Tehran|Iran\",\"Asia/Thimphu|Asia/Thimbu\",\"Asia/Tokyo|Japan\",\"Asia/Ulaanbaatar|Asia/Ulan_Bator\",\"Asia/Urumqi|Asia/Kashgar\",\"Atlantic/Faroe|Atlantic/Faeroe\",\"Atlantic/Reykjavik|Iceland\",\"Atlantic/South_Georgia|Etc/GMT+2\",\"Australia/Adelaide|Australia/South\",\"Australia/Brisbane|Australia/Queensland\",\"Australia/Broken_Hill|Australia/Yancowinna\",\"Australia/Darwin|Australia/North\",\"Australia/Hobart|Australia/Tasmania\",\"Australia/Lord_Howe|Australia/LHI\",\"Australia/Melbourne|Australia/Victoria\",\"Australia/Perth|Australia/West\",\"Australia/Sydney|Australia/ACT\",\"Australia/Sydney|Australia/Canberra\",\"Australia/Sydney|Australia/NSW\",\"Etc/GMT-0|Etc/GMT\",\"Etc/GMT-0|Etc/GMT+0\",\"Etc/GMT-0|Etc/GMT0\",\"Etc/GMT-0|Etc/Greenwich\",\"Etc/GMT-0|GMT\",\"Etc/GMT-0|GMT+0\",\"Etc/GMT-0|GMT-0\",\"Etc/GMT-0|GMT0\",\"Etc/GMT-0|Greenwich\",\"Etc/UTC|Etc/UCT\",\"Etc/UTC|Etc/Universal\",\"Etc/UTC|Etc/Zulu\",\"Etc/UTC|UCT\",\"Etc/UTC|UTC\",\"Etc/UTC|Universal\",\"Etc/UTC|Zulu\",\"Europe/Belgrade|Europe/Ljubljana\",\"Europe/Belgrade|Europe/Podgorica\",\"Europe/Belgrade|Europe/Sarajevo\",\"Europe/Belgrade|Europe/Skopje\",\"Europe/Belgrade|Europe/Zagreb\",\"Europe/Chisinau|Europe/Tiraspol\",\"Europe/Dublin|Eire\",\"Europe/Helsinki|Europe/Mariehamn\",\"Europe/Istanbul|Asia/Istanbul\",\"Europe/Istanbul|Turkey\",\"Europe/Lisbon|Portugal\",\"Europe/London|Europe/Belfast\",\"Europe/London|Europe/Guernsey\",\"Europe/London|Europe/Isle_of_Man\",\"Europe/London|Europe/Jersey\",\"Europe/London|GB\",\"Europe/London|GB-Eire\",\"Europe/Moscow|W-SU\",\"Europe/Oslo|Arctic/Longyearbyen\",\"Europe/Oslo|Atlantic/Jan_Mayen\",\"Europe/Prague|Europe/Bratislava\",\"Europe/Rome|Europe/San_Marino\",\"Europe/Rome|Europe/Vatican\",\"Europe/Warsaw|Poland\",\"Europe/Zurich|Europe/Busingen\",\"Europe/Zurich|Europe/Vaduz\",\"Indian/Christmas|Etc/GMT-7\",\"Pacific/Auckland|Antarctica/McMurdo\",\"Pacific/Auckland|Antarctica/South_Pole\",\"Pacific/Auckland|NZ\",\"Pacific/Chatham|NZ-CHAT\",\"Pacific/Chuuk|Pacific/Truk\",\"Pacific/Chuuk|Pacific/Yap\",\"Pacific/Easter|Chile/EasterIsland\",\"Pacific/Guam|Pacific/Saipan\",\"Pacific/Honolulu|Pacific/Johnston\",\"Pacific/Honolulu|US/Hawaii\",\"Pacific/Kwajalein|Kwajalein\",\"Pacific/Pago_Pago|Pacific/Midway\",\"Pacific/Pago_Pago|Pacific/Samoa\",\"Pacific/Pago_Pago|US/Samoa\",\"Pacific/Palau|Etc/GMT-9\",\"Pacific/Pohnpei|Pacific/Ponape\",\"Pacific/Port_Moresby|Etc/GMT-10\",\"Pacific/Tarawa|Etc/GMT-12\",\"Pacific/Tarawa|Pacific/Funafuti\",\"Pacific/Tarawa|Pacific/Wake\",\"Pacific/Tarawa|Pacific/Wallis\"],\"countries\":[\"AD|Europe/Andorra\",\"AE|Asia/Dubai\",\"AF|Asia/Kabul\",\"AG|America/Port_of_Spain America/Antigua\",\"AI|America/Port_of_Spain America/Anguilla\",\"AL|Europe/Tirane\",\"AM|Asia/Yerevan\",\"AO|Africa/Lagos Africa/Luanda\",\"AQ|Antarctica/Casey Antarctica/Davis Antarctica/DumontDUrville Antarctica/Mawson Antarctica/Palmer Antarctica/Rothera Antarctica/Syowa Antarctica/Troll Antarctica/Vostok Pacific/Auckland Antarctica/McMurdo\",\"AR|America/Argentina/Buenos_Aires America/Argentina/Cordoba America/Argentina/Salta America/Argentina/Jujuy America/Argentina/Tucuman America/Argentina/Catamarca America/Argentina/La_Rioja America/Argentina/San_Juan America/Argentina/Mendoza America/Argentina/San_Luis America/Argentina/Rio_Gallegos America/Argentina/Ushuaia\",\"AS|Pacific/Pago_Pago\",\"AT|Europe/Vienna\",\"AU|Australia/Lord_Howe Antarctica/Macquarie Australia/Hobart Australia/Currie Australia/Melbourne Australia/Sydney Australia/Broken_Hill Australia/Brisbane Australia/Lindeman Australia/Adelaide Australia/Darwin Australia/Perth Australia/Eucla\",\"AW|America/Curacao America/Aruba\",\"AX|Europe/Helsinki Europe/Mariehamn\",\"AZ|Asia/Baku\",\"BA|Europe/Belgrade Europe/Sarajevo\",\"BB|America/Barbados\",\"BD|Asia/Dhaka\",\"BE|Europe/Brussels\",\"BF|Africa/Abidjan Africa/Ouagadougou\",\"BG|Europe/Sofia\",\"BH|Asia/Qatar Asia/Bahrain\",\"BI|Africa/Maputo Africa/Bujumbura\",\"BJ|Africa/Lagos Africa/Porto-Novo\",\"BL|America/Port_of_Spain America/St_Barthelemy\",\"BM|Atlantic/Bermuda\",\"BN|Asia/Brunei\",\"BO|America/La_Paz\",\"BQ|America/Curacao America/Kralendijk\",\"BR|America/Noronha America/Belem America/Fortaleza America/Recife America/Araguaina America/Maceio America/Bahia America/Sao_Paulo America/Campo_Grande America/Cuiaba America/Santarem America/Porto_Velho America/Boa_Vista America/Manaus America/Eirunepe America/Rio_Branco\",\"BS|America/Nassau\",\"BT|Asia/Thimphu\",\"BW|Africa/Maputo Africa/Gaborone\",\"BY|Europe/Minsk\",\"BZ|America/Belize\",\"CA|America/St_Johns America/Halifax America/Glace_Bay America/Moncton America/Goose_Bay America/Blanc-Sablon America/Toronto America/Nipigon America/Thunder_Bay America/Iqaluit America/Pangnirtung America/Atikokan America/Winnipeg America/Rainy_River America/Resolute America/Rankin_Inlet America/Regina America/Swift_Current America/Edmonton America/Cambridge_Bay America/Yellowknife America/Inuvik America/Creston America/Dawson_Creek America/Fort_Nelson America/Vancouver America/Whitehorse America/Dawson\",\"CC|Indian/Cocos\",\"CD|Africa/Maputo Africa/Lagos Africa/Kinshasa Africa/Lubumbashi\",\"CF|Africa/Lagos Africa/Bangui\",\"CG|Africa/Lagos Africa/Brazzaville\",\"CH|Europe/Zurich\",\"CI|Africa/Abidjan\",\"CK|Pacific/Rarotonga\",\"CL|America/Santiago America/Punta_Arenas Pacific/Easter\",\"CM|Africa/Lagos Africa/Douala\",\"CN|Asia/Shanghai Asia/Urumqi\",\"CO|America/Bogota\",\"CR|America/Costa_Rica\",\"CU|America/Havana\",\"CV|Atlantic/Cape_Verde\",\"CW|America/Curacao\",\"CX|Indian/Christmas\",\"CY|Asia/Nicosia Asia/Famagusta\",\"CZ|Europe/Prague\",\"DE|Europe/Zurich Europe/Berlin Europe/Busingen\",\"DJ|Africa/Nairobi Africa/Djibouti\",\"DK|Europe/Copenhagen\",\"DM|America/Port_of_Spain America/Dominica\",\"DO|America/Santo_Domingo\",\"DZ|Africa/Algiers\",\"EC|America/Guayaquil Pacific/Galapagos\",\"EE|Europe/Tallinn\",\"EG|Africa/Cairo\",\"EH|Africa/El_Aaiun\",\"ER|Africa/Nairobi Africa/Asmara\",\"ES|Europe/Madrid Africa/Ceuta Atlantic/Canary\",\"ET|Africa/Nairobi Africa/Addis_Ababa\",\"FI|Europe/Helsinki\",\"FJ|Pacific/Fiji\",\"FK|Atlantic/Stanley\",\"FM|Pacific/Chuuk Pacific/Pohnpei Pacific/Kosrae\",\"FO|Atlantic/Faroe\",\"FR|Europe/Paris\",\"GA|Africa/Lagos Africa/Libreville\",\"GB|Europe/London\",\"GD|America/Port_of_Spain America/Grenada\",\"GE|Asia/Tbilisi\",\"GF|America/Cayenne\",\"GG|Europe/London Europe/Guernsey\",\"GH|Africa/Accra\",\"GI|Europe/Gibraltar\",\"GL|America/Godthab America/Danmarkshavn America/Scoresbysund America/Thule\",\"GM|Africa/Abidjan Africa/Banjul\",\"GN|Africa/Abidjan Africa/Conakry\",\"GP|America/Port_of_Spain America/Guadeloupe\",\"GQ|Africa/Lagos Africa/Malabo\",\"GR|Europe/Athens\",\"GS|Atlantic/South_Georgia\",\"GT|America/Guatemala\",\"GU|Pacific/Guam\",\"GW|Africa/Bissau\",\"GY|America/Guyana\",\"HK|Asia/Hong_Kong\",\"HN|America/Tegucigalpa\",\"HR|Europe/Belgrade Europe/Zagreb\",\"HT|America/Port-au-Prince\",\"HU|Europe/Budapest\",\"ID|Asia/Jakarta Asia/Pontianak Asia/Makassar Asia/Jayapura\",\"IE|Europe/Dublin\",\"IL|Asia/Jerusalem\",\"IM|Europe/London Europe/Isle_of_Man\",\"IN|Asia/Kolkata\",\"IO|Indian/Chagos\",\"IQ|Asia/Baghdad\",\"IR|Asia/Tehran\",\"IS|Atlantic/Reykjavik\",\"IT|Europe/Rome\",\"JE|Europe/London Europe/Jersey\",\"JM|America/Jamaica\",\"JO|Asia/Amman\",\"JP|Asia/Tokyo\",\"KE|Africa/Nairobi\",\"KG|Asia/Bishkek\",\"KH|Asia/Bangkok Asia/Phnom_Penh\",\"KI|Pacific/Tarawa Pacific/Enderbury Pacific/Kiritimati\",\"KM|Africa/Nairobi Indian/Comoro\",\"KN|America/Port_of_Spain America/St_Kitts\",\"KP|Asia/Pyongyang\",\"KR|Asia/Seoul\",\"KW|Asia/Riyadh Asia/Kuwait\",\"KY|America/Panama America/Cayman\",\"KZ|Asia/Almaty Asia/Qyzylorda Asia/Qostanay Asia/Aqtobe Asia/Aqtau Asia/Atyrau Asia/Oral\",\"LA|Asia/Bangkok Asia/Vientiane\",\"LB|Asia/Beirut\",\"LC|America/Port_of_Spain America/St_Lucia\",\"LI|Europe/Zurich Europe/Vaduz\",\"LK|Asia/Colombo\",\"LR|Africa/Monrovia\",\"LS|Africa/Johannesburg Africa/Maseru\",\"LT|Europe/Vilnius\",\"LU|Europe/Luxembourg\",\"LV|Europe/Riga\",\"LY|Africa/Tripoli\",\"MA|Africa/Casablanca\",\"MC|Europe/Monaco\",\"MD|Europe/Chisinau\",\"ME|Europe/Belgrade Europe/Podgorica\",\"MF|America/Port_of_Spain America/Marigot\",\"MG|Africa/Nairobi Indian/Antananarivo\",\"MH|Pacific/Majuro Pacific/Kwajalein\",\"MK|Europe/Belgrade Europe/Skopje\",\"ML|Africa/Abidjan Africa/Bamako\",\"MM|Asia/Yangon\",\"MN|Asia/Ulaanbaatar Asia/Hovd Asia/Choibalsan\",\"MO|Asia/Macau\",\"MP|Pacific/Guam Pacific/Saipan\",\"MQ|America/Martinique\",\"MR|Africa/Abidjan Africa/Nouakchott\",\"MS|America/Port_of_Spain America/Montserrat\",\"MT|Europe/Malta\",\"MU|Indian/Mauritius\",\"MV|Indian/Maldives\",\"MW|Africa/Maputo Africa/Blantyre\",\"MX|America/Mexico_City America/Cancun America/Merida America/Monterrey America/Matamoros America/Mazatlan America/Chihuahua America/Ojinaga America/Hermosillo America/Tijuana America/Bahia_Banderas\",\"MY|Asia/Kuala_Lumpur Asia/Kuching\",\"MZ|Africa/Maputo\",\"NA|Africa/Windhoek\",\"NC|Pacific/Noumea\",\"NE|Africa/Lagos Africa/Niamey\",\"NF|Pacific/Norfolk\",\"NG|Africa/Lagos\",\"NI|America/Managua\",\"NL|Europe/Amsterdam\",\"NO|Europe/Oslo\",\"NP|Asia/Kathmandu\",\"NR|Pacific/Nauru\",\"NU|Pacific/Niue\",\"NZ|Pacific/Auckland Pacific/Chatham\",\"OM|Asia/Dubai Asia/Muscat\",\"PA|America/Panama\",\"PE|America/Lima\",\"PF|Pacific/Tahiti Pacific/Marquesas Pacific/Gambier\",\"PG|Pacific/Port_Moresby Pacific/Bougainville\",\"PH|Asia/Manila\",\"PK|Asia/Karachi\",\"PL|Europe/Warsaw\",\"PM|America/Miquelon\",\"PN|Pacific/Pitcairn\",\"PR|America/Puerto_Rico\",\"PS|Asia/Gaza Asia/Hebron\",\"PT|Europe/Lisbon Atlantic/Madeira Atlantic/Azores\",\"PW|Pacific/Palau\",\"PY|America/Asuncion\",\"QA|Asia/Qatar\",\"RE|Indian/Reunion\",\"RO|Europe/Bucharest\",\"RS|Europe/Belgrade\",\"RU|Europe/Kaliningrad Europe/Moscow Europe/Simferopol Europe/Kirov Europe/Astrakhan Europe/Volgograd Europe/Saratov Europe/Ulyanovsk Europe/Samara Asia/Yekaterinburg Asia/Omsk Asia/Novosibirsk Asia/Barnaul Asia/Tomsk Asia/Novokuznetsk Asia/Krasnoyarsk Asia/Irkutsk Asia/Chita Asia/Yakutsk Asia/Khandyga Asia/Vladivostok Asia/Ust-Nera Asia/Magadan Asia/Sakhalin Asia/Srednekolymsk Asia/Kamchatka Asia/Anadyr\",\"RW|Africa/Maputo Africa/Kigali\",\"SA|Asia/Riyadh\",\"SB|Pacific/Guadalcanal\",\"SC|Indian/Mahe\",\"SD|Africa/Khartoum\",\"SE|Europe/Stockholm\",\"SG|Asia/Singapore\",\"SH|Africa/Abidjan Atlantic/St_Helena\",\"SI|Europe/Belgrade Europe/Ljubljana\",\"SJ|Europe/Oslo Arctic/Longyearbyen\",\"SK|Europe/Prague Europe/Bratislava\",\"SL|Africa/Abidjan Africa/Freetown\",\"SM|Europe/Rome Europe/San_Marino\",\"SN|Africa/Abidjan Africa/Dakar\",\"SO|Africa/Nairobi Africa/Mogadishu\",\"SR|America/Paramaribo\",\"SS|Africa/Juba\",\"ST|Africa/Sao_Tome\",\"SV|America/El_Salvador\",\"SX|America/Curacao America/Lower_Princes\",\"SY|Asia/Damascus\",\"SZ|Africa/Johannesburg Africa/Mbabane\",\"TC|America/Grand_Turk\",\"TD|Africa/Ndjamena\",\"TF|Indian/Reunion Indian/Kerguelen\",\"TG|Africa/Abidjan Africa/Lome\",\"TH|Asia/Bangkok\",\"TJ|Asia/Dushanbe\",\"TK|Pacific/Fakaofo\",\"TL|Asia/Dili\",\"TM|Asia/Ashgabat\",\"TN|Africa/Tunis\",\"TO|Pacific/Tongatapu\",\"TR|Europe/Istanbul\",\"TT|America/Port_of_Spain\",\"TV|Pacific/Funafuti\",\"TW|Asia/Taipei\",\"TZ|Africa/Nairobi Africa/Dar_es_Salaam\",\"UA|Europe/Simferopol Europe/Kiev Europe/Uzhgorod Europe/Zaporozhye\",\"UG|Africa/Nairobi Africa/Kampala\",\"UM|Pacific/Pago_Pago Pacific/Wake Pacific/Honolulu Pacific/Midway\",\"US|America/New_York America/Detroit America/Kentucky/Louisville America/Kentucky/Monticello America/Indiana/Indianapolis America/Indiana/Vincennes America/Indiana/Winamac America/Indiana/Marengo America/Indiana/Petersburg America/Indiana/Vevay America/Chicago America/Indiana/Tell_City America/Indiana/Knox America/Menominee America/North_Dakota/Center America/North_Dakota/New_Salem America/North_Dakota/Beulah America/Denver America/Boise America/Phoenix America/Los_Angeles America/Anchorage America/Juneau America/Sitka America/Metlakatla America/Yakutat America/Nome America/Adak Pacific/Honolulu\",\"UY|America/Montevideo\",\"UZ|Asia/Samarkand Asia/Tashkent\",\"VA|Europe/Rome Europe/Vatican\",\"VC|America/Port_of_Spain America/St_Vincent\",\"VE|America/Caracas\",\"VG|America/Port_of_Spain America/Tortola\",\"VI|America/Port_of_Spain America/St_Thomas\",\"VN|Asia/Bangkok Asia/Ho_Chi_Minh\",\"VU|Pacific/Efate\",\"WF|Pacific/Wallis\",\"WS|Pacific/Apia\",\"YE|Asia/Riyadh Asia/Aden\",\"YT|Africa/Nairobi Indian/Mayotte\",\"ZA|Africa/Johannesburg\",\"ZM|Africa/Maputo Africa/Lusaka\",\"ZW|Africa/Maputo Africa/Harare\"]}");

/***/ }),

/***/ 2780:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  Set: __webpack_require__(2781),
  Static: __webpack_require__(2787)
};

/***/ }),

/***/ 2781:
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = __webpack_require__(403);
var foundationApi = __webpack_require__(739);
var Notification = __webpack_require__(2782);
var Animation = __webpack_require__(2783);
var createReactClass = __webpack_require__(1224);

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

/***/ 2782:
/***/ (function(module, exports, __webpack_require__) {

var React = __webpack_require__(403);
var createReactClass = __webpack_require__(1224);

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

/***/ 2783:
/***/ (function(module, exports, __webpack_require__) {

// some parts of code from react/lib/ReactCSSTransitionGroupChild.js
var React = __webpack_require__(403);
var ReactDOM = __webpack_require__(408);
var ReactTransitionEvents = __webpack_require__(2784);
var CSSCore = __webpack_require__(2786);
var createReactClass = __webpack_require__(1224);

var classnames = __webpack_require__(746);
var TICK = 17;

var Animation = createReactClass({
  displayName: 'Animation',

  getInitialState: function getInitialState() {
    return {};
  },
  getDefaultProps: function getDefaultProps() {
    return {
      active: false,
      animationIn: '',
      animationOut: ''
    };
  },
  reflow: function reflow(node) {
    return node.offsetWidth;
  },
  reset: function reset(node) {
    node.style.transitionDuration = 0;
    CSSCore.removeClass(node, 'ng-enter');
    CSSCore.removeClass(node, 'ng-leave');
    CSSCore.removeClass(node, 'ng-enter-active');
    CSSCore.removeClass(node, 'ng-leave-active');
    CSSCore.removeClass(node, this.props.animationIn);
    CSSCore.removeClass(node, this.props.animationOut);
  },
  finishAnimation: function finishAnimation() {
    var node = ReactDOM.findDOMNode(this);
    this.reset(node);
    CSSCore.removeClass(node, this.props.active ? '' : 'is-active');
    this.reflow(node);
    ReactTransitionEvents.removeEndEventListener(node, this.finishAnimation);
  },
  animate: function animate(animationClass, animationType) {
    var node = ReactDOM.findDOMNode(this);
    var initClass = 'ng-' + animationType;
    var activeClass = initClass + '-active';

    this.reset(node);
    CSSCore.addClass(node, animationClass);
    CSSCore.addClass(node, initClass);
    CSSCore.addClass(node, 'is-active');

    //force a "tick"
    this.reflow(node);

    //activate
    node.style.transitionDuration = '';
    CSSCore.addClass(node, activeClass);

    ReactTransitionEvents.addEndEventListener(node, this.finishAnimation);
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (prevProps.active !== this.props.active) {
      var animationClass = this.props.active ? this.props.animationIn : this.props.animationOut;
      var animationType = this.props.active ? 'enter' : 'leave';
      this.animate(animationClass, animationType);
    }
  },
  render: function render() {
    var child = React.Children.only(this.props.children);
    var extraProps = {};
    return React.cloneElement(child, extraProps);
  }
});

module.exports = Animation;

/***/ }),

/***/ 2784:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
* Copyright 2013-2015, Facebook, Inc.
* All rights reserved.
*
* This source code is licensed under the BSD-style license found in the
* LICENSE file in the root directory of this source tree. An additional grant
* of patent rights can be found in the PATENTS file in the same directory.
*
* @providesModule ReactTransitionEvents
*/



var ExecutionEnvironment = __webpack_require__(2785);

/**
* EVENT_NAME_MAP is used to determine which event fired when a
* transition/animation ends, based on the style property used to
* define that event.
*/
var EVENT_NAME_MAP = {
 transitionend: {
   'transition': 'transitionend',
   'WebkitTransition': 'webkitTransitionEnd',
   'MozTransition': 'mozTransitionEnd',
   'OTransition': 'oTransitionEnd',
   'msTransition': 'MSTransitionEnd'
 },

 animationend: {
   'animation': 'animationend',
   'WebkitAnimation': 'webkitAnimationEnd',
   'MozAnimation': 'mozAnimationEnd',
   'OAnimation': 'oAnimationEnd',
   'msAnimation': 'MSAnimationEnd'
 }
};

var endEvents = [];

function detectEvents() {
 var testEl = document.createElement('div');
 var style = testEl.style;

 // On some platforms, in particular some releases of Android 4.x,
 // the un-prefixed "animation" and "transition" properties are defined on the
 // style object but the events that fire will still be prefixed, so we need
 // to check if the un-prefixed events are useable, and if not remove them
 // from the map
 if (!('AnimationEvent' in window)) {
   delete EVENT_NAME_MAP.animationend.animation;
 }

 if (!('TransitionEvent' in window)) {
   delete EVENT_NAME_MAP.transitionend.transition;
 }

 for (var baseEventName in EVENT_NAME_MAP) {
   var baseEvents = EVENT_NAME_MAP[baseEventName];
   for (var styleName in baseEvents) {
     if (styleName in style) {
       endEvents.push(baseEvents[styleName]);
       break;
     }
   }
 }
}

if (ExecutionEnvironment.canUseDOM) {
 detectEvents();
}

// We use the raw {add|remove}EventListener() call because EventListener
// does not know how to remove event listeners and we really should
// clean up. Also, these events are not triggered in older browsers
// so we should be A-OK here.

function addEventListener(node, eventName, eventListener) {
 node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
 node.removeEventListener(eventName, eventListener, false);
}

var ReactTransitionEvents = {
 addEndEventListener: function(node, eventListener) {
   if (endEvents.length === 0) {
     // If CSS transitions are not supported, trigger an "end animation"
     // event immediately.
     window.setTimeout(eventListener, 0);
     return;
   }
   endEvents.forEach(function(endEvent) {
     addEventListener(node, endEvent, eventListener);
   });
 },

 removeEndEventListener: function(node, eventListener) {
   if (endEvents.length === 0) {
     return;
   }
   endEvents.forEach(function(endEvent) {
     removeEventListener(node, endEvent, eventListener);
   });
 }
};

module.exports = ReactTransitionEvents;


/***/ }),

/***/ 2785:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
/* global define */

(function () {
	'use strict';

	var canUseDOM = !!(
		typeof window !== 'undefined' &&
		window.document &&
		window.document.createElement
	);

	var ExecutionEnvironment = {

		canUseDOM: canUseDOM,

		canUseWorkers: typeof Worker !== 'undefined',

		canUseEventListeners:
			canUseDOM && !!(window.addEventListener || window.attachEvent),

		canUseViewport: canUseDOM && !!window.screen

	};

	if (true) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return ExecutionEnvironment;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}());


/***/ }),

/***/ 2786:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SPACE = ' ';
var RE_CLASS = /[\n\t\r]/g;

var norm = function norm(elemClass) {
  return (SPACE + elemClass + SPACE).replace(RE_CLASS, SPACE);
};

module.exports = {
  addClass: function addClass(elem, className) {
    elem.className += ' ' + className;
  },
  removeClass: function removeClass(elem, needle) {
    var elemClass = elem.className.trim();
    var className = norm(elemClass);
    needle = needle.trim();
    needle = SPACE + needle + SPACE;
    while (className.indexOf(needle) >= 0) {
      className = className.replace(needle, SPACE);
    }
    elem.className = className.trim();
  }
};

/***/ }),

/***/ 2787:
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = __webpack_require__(403);
var classnames = __webpack_require__(746);
var foundationApi = __webpack_require__(739);
var Animation = __webpack_require__(2783);
var Notification = __webpack_require__(2782);
var createReactClass = __webpack_require__(1224);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35leGNoYW5nZS5hZTdkY2VmODFiMDJjNzVhNGU1NC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc3BkZi1hdXRvdGFibGUvZGlzdC9qc3BkZi5wbHVnaW4uYXV0b3RhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc29uc2NoZW1hL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNvbnNjaGVtYS9saWIvdmFsaWRhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91cmwvdXJsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvbm9kZV9tb2R1bGVzL3B1bnljb2RlL3B1bnljb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy91cmwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcXVlcnlzdHJpbmctZXMzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZy1lczMvZGVjb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZy1lczMvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc29uc2NoZW1hL2xpYi9hdHRyaWJ1dGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzb25zY2hlbWEvbGliL2hlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzb25zY2hlbWEvbGliL3NjYW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Jyb3dzZXItbG9jYWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zdGlja3ktdGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0aWNreS10YWJsZS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zdGlja3ktdGFibGUvZGlzdC9UYWJsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3RpY2t5LXRhYmxlL2Rpc3QvUm93L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1zdGlja3ktdGFibGUvZGlzdC9DZWxsL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1ldmVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbW9tZW50LXRpbWV6b25lL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tb21lbnQtdGltZXpvbmUvbW9tZW50LXRpbWV6b25lLmpzIiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZm91bmRhdGlvbi1hcHBzL3NyYy9ub3RpZmljYXRpb24vaW5kZXguanN4Iiwid2VicGFjazovLy9ub2RlX21vZHVsZXMvcmVhY3QtZm91bmRhdGlvbi1hcHBzL3NyYy9ub3RpZmljYXRpb24vc2V0LmpzeCIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWZvdW5kYXRpb24tYXBwcy9zcmMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1mb3VuZGF0aW9uLWFwcHMvc3JjL3V0aWxzL2FuaW1hdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWZvdW5kYXRpb24tYXBwcy9zcmMvdXRpbHMvUmVhY3RUcmFuc2l0aW9uRXZlbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9leGVudi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vbm9kZV9tb2R1bGVzL3JlYWN0LWZvdW5kYXRpb24tYXBwcy9zcmMvdXRpbHMvY3NzY29yZS5qc3giLCJ3ZWJwYWNrOi8vL25vZGVfbW9kdWxlcy9yZWFjdC1mb3VuZGF0aW9uLWFwcHMvc3JjL25vdGlmaWNhdGlvbi9zdGF0aWMuanN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogXG4gKiAgICAgICAgICAgICBqc1BERiBBdXRvVGFibGUgcGx1Z2luIHYzLjIuMTNcbiAqICAgICAgICAgICAgIFxuICogICAgICAgICAgICAgQ29weXJpZ2h0IChjKSAyMDE0IFNpbW9uIEJlbmd0c3NvbiwgaHR0cHM6Ly9naXRodWIuY29tL3NpbW9uYmVuZ3Rzc29uL2pzUERGLUF1dG9UYWJsZVxuICogICAgICAgICAgICAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuICogICAgICAgICAgICAgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlXG4gKiAgICAgICAgICAgICBcbiAqICAgICAgICAgICAgICogL2lmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0Jykgd2luZG93LmpzcGRmQXV0b1RhYmxlVmVyc2lvbiA9ICdcIiArIG5ld1ZlcnNpb24gKyBcIic7LypcIlxuICogICAgICAgICBcbiAqL1xuKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwianNwZGZcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wianNwZGZcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGZhY3RvcnkocmVxdWlyZShcImpzcGRmXCIpKSA6IGZhY3Rvcnkocm9vdFtcImpzUERGXCJdKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHdpbmRvdywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fN19fKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBkZWZhdWx0c0RvY3VtZW50ID0gbnVsbDtcbnZhciBwcmV2aW91c1RhYmxlU3RhdGU7XG52YXIgdGFibGVTdGF0ZSA9IG51bGw7XG5leHBvcnRzLmdsb2JhbERlZmF1bHRzID0ge307XG5leHBvcnRzLmRvY3VtZW50RGVmYXVsdHMgPSB7fTtcbmZ1bmN0aW9uIGRlZmF1bHRfMSgpIHtcbiAgICByZXR1cm4gdGFibGVTdGF0ZTtcbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRfMTtcbmZ1bmN0aW9uIGdldEdsb2JhbE9wdGlvbnMoKSB7XG4gICAgcmV0dXJuIGV4cG9ydHMuZ2xvYmFsRGVmYXVsdHM7XG59XG5leHBvcnRzLmdldEdsb2JhbE9wdGlvbnMgPSBnZXRHbG9iYWxPcHRpb25zO1xuZnVuY3Rpb24gZ2V0RG9jdW1lbnRPcHRpb25zKCkge1xuICAgIHJldHVybiBleHBvcnRzLmRvY3VtZW50RGVmYXVsdHM7XG59XG5leHBvcnRzLmdldERvY3VtZW50T3B0aW9ucyA9IGdldERvY3VtZW50T3B0aW9ucztcbnZhciBUYWJsZVN0YXRlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRhYmxlU3RhdGUoZG9jKSB7XG4gICAgICAgIHRoaXMuZG9jID0gZG9jO1xuICAgIH1cbiAgICBUYWJsZVN0YXRlLnByb3RvdHlwZS5wYWdlSGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wYWdlU2l6ZSgpLmhlaWdodDtcbiAgICB9O1xuICAgIFRhYmxlU3RhdGUucHJvdG90eXBlLnBhZ2VXaWR0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFnZVNpemUoKS53aWR0aDtcbiAgICB9O1xuICAgIFRhYmxlU3RhdGUucHJvdG90eXBlLnBhZ2VTaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcGFnZVNpemUgPSB0aGlzLmRvYy5pbnRlcm5hbC5wYWdlU2l6ZTtcbiAgICAgICAgLy8gSlNQREYgMS40IHVzZXMgZ2V0IGZ1bmN0aW9ucyBpbnN0ZWFkIG9mIHByb3BlcnRpZXMgb24gcGFnZVNpemVcbiAgICAgICAgaWYgKHBhZ2VTaXplLndpZHRoID09IG51bGwpIHtcbiAgICAgICAgICAgIHBhZ2VTaXplID0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBwYWdlU2l6ZS5nZXRXaWR0aCgpLFxuICAgICAgICAgICAgICAgIGhlaWdodDogcGFnZVNpemUuZ2V0SGVpZ2h0KCksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYWdlU2l6ZTtcbiAgICB9O1xuICAgIFRhYmxlU3RhdGUucHJvdG90eXBlLnNjYWxlRmFjdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kb2MuaW50ZXJuYWwuc2NhbGVGYWN0b3I7XG4gICAgfTtcbiAgICBUYWJsZVN0YXRlLnByb3RvdHlwZS5wYWdlTnVtYmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcGFnZUluZm8gPSB0aGlzLmRvYy5pbnRlcm5hbC5nZXRDdXJyZW50UGFnZUluZm8oKTtcbiAgICAgICAgaWYgKCFwYWdlSW5mbykge1xuICAgICAgICAgICAgLy8gT25seSByZWNlbnQgdmVyc2lvbnMgb2YganNwZGYgaGFzIHBhZ2VJbmZvXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kb2MuaW50ZXJuYWwuZ2V0TnVtYmVyT2ZQYWdlcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYWdlSW5mby5wYWdlTnVtYmVyO1xuICAgIH07XG4gICAgcmV0dXJuIFRhYmxlU3RhdGU7XG59KCkpO1xuZnVuY3Rpb24gc2V0dXBTdGF0ZShkb2MpIHtcbiAgICBwcmV2aW91c1RhYmxlU3RhdGUgPSB0YWJsZVN0YXRlO1xuICAgIHRhYmxlU3RhdGUgPSBuZXcgVGFibGVTdGF0ZShkb2MpO1xuICAgIGlmIChkb2MgIT09IGRlZmF1bHRzRG9jdW1lbnQpIHtcbiAgICAgICAgZGVmYXVsdHNEb2N1bWVudCA9IGRvYztcbiAgICAgICAgZXhwb3J0cy5kb2N1bWVudERlZmF1bHRzID0ge307XG4gICAgfVxufVxuZXhwb3J0cy5zZXR1cFN0YXRlID0gc2V0dXBTdGF0ZTtcbmZ1bmN0aW9uIHJlc2V0U3RhdGUoKSB7XG4gICAgdGFibGVTdGF0ZSA9IHByZXZpb3VzVGFibGVTdGF0ZTtcbn1cbmV4cG9ydHMucmVzZXRTdGF0ZSA9IHJlc2V0U3RhdGU7XG5mdW5jdGlvbiBzZXREZWZhdWx0cyhkZWZhdWx0cywgZG9jKSB7XG4gICAgaWYgKGRvYyA9PT0gdm9pZCAwKSB7IGRvYyA9IG51bGw7IH1cbiAgICBpZiAoZG9jKSB7XG4gICAgICAgIGV4cG9ydHMuZG9jdW1lbnREZWZhdWx0cyA9IGRlZmF1bHRzIHx8IHt9O1xuICAgICAgICBkZWZhdWx0c0RvY3VtZW50ID0gZG9jO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZXhwb3J0cy5nbG9iYWxEZWZhdWx0cyA9IGRlZmF1bHRzIHx8IHt9O1xuICAgIH1cbn1cbmV4cG9ydHMuc2V0RGVmYXVsdHMgPSBzZXREZWZhdWx0cztcblxuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfX3NwcmVhZEFycmF5cyA9ICh0aGlzICYmIHRoaXMuX19zcHJlYWRBcnJheXMpIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxuICAgICAgICAgICAgcltrXSA9IGFbal07XG4gICAgcmV0dXJuIHI7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbmZpZ18xID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbnZhciBzdGF0ZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBwb2x5ZmlsbHNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5mdW5jdGlvbiBnZXRTdHJpbmdXaWR0aCh0ZXh0LCBzdHlsZXMpIHtcbiAgICBhcHBseVN0eWxlcyhzdHlsZXMpO1xuICAgIHZhciB0ZXh0QXJyID0gQXJyYXkuaXNBcnJheSh0ZXh0KSA/IHRleHQgOiBbdGV4dF07XG4gICAgdmFyIHdpZGVzdExpbmVXaWR0aCA9IHRleHRBcnJcbiAgICAgICAgLm1hcChmdW5jdGlvbiAodGV4dCkgeyByZXR1cm4gc3RhdGVfMS5kZWZhdWx0KCkuZG9jLmdldFRleHRXaWR0aCh0ZXh0KTsgfSlcbiAgICAgICAgLy8gU2hhdmUgb2ZmIGEgZmV3IGRpZ2l0cyBmb3IgcG90ZW50aWFsIGltcHJvdmVtZW50IGluIHdpZHRoIGNhbGN1bGF0aW9uXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gTWF0aC5mbG9vcih2YWwgKiAxMDAwMCkgLyAxMDAwMDsgfSlcbiAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gTWF0aC5tYXgoYSwgYik7IH0sIDApO1xuICAgIHZhciBmb250U2l6ZSA9IHN0eWxlcy5mb250U2l6ZSAvIHN0YXRlXzEuZGVmYXVsdCgpLnNjYWxlRmFjdG9yKCk7XG4gICAgcmV0dXJuIHdpZGVzdExpbmVXaWR0aDtcbn1cbmV4cG9ydHMuZ2V0U3RyaW5nV2lkdGggPSBnZXRTdHJpbmdXaWR0aDtcbi8qKlxuICogRWxsaXBzaXplIHRoZSB0ZXh0IHRvIGZpdCBpbiB0aGUgd2lkdGhcbiAqL1xuZnVuY3Rpb24gZWxsaXBzaXplKHRleHQsIHdpZHRoLCBzdHlsZXMsIGVsbGlwc2l6ZVN0cikge1xuICAgIGlmIChlbGxpcHNpemVTdHIgPT09IHZvaWQgMCkgeyBlbGxpcHNpemVTdHIgPSAnLi4uJzsgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHRleHQpKSB7XG4gICAgICAgIHZhciB2YWx1ZV8xID0gW107XG4gICAgICAgIHRleHQuZm9yRWFjaChmdW5jdGlvbiAoc3RyLCBpKSB7XG4gICAgICAgICAgICB2YWx1ZV8xW2ldID0gZWxsaXBzaXplKHN0ciwgd2lkdGgsIHN0eWxlcywgZWxsaXBzaXplU3RyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YWx1ZV8xO1xuICAgIH1cbiAgICB2YXIgcHJlY2lzaW9uID0gMTAwMDAgKiBzdGF0ZV8xLmRlZmF1bHQoKS5zY2FsZUZhY3RvcigpO1xuICAgIHdpZHRoID0gTWF0aC5jZWlsKHdpZHRoICogcHJlY2lzaW9uKSAvIHByZWNpc2lvbjtcbiAgICBpZiAod2lkdGggPj0gZ2V0U3RyaW5nV2lkdGgodGV4dCwgc3R5bGVzKSkge1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICB9XG4gICAgd2hpbGUgKHdpZHRoIDwgZ2V0U3RyaW5nV2lkdGgodGV4dCArIGVsbGlwc2l6ZVN0ciwgc3R5bGVzKSkge1xuICAgICAgICBpZiAodGV4dC5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGV4dCA9IHRleHQuc3Vic3RyaW5nKDAsIHRleHQubGVuZ3RoIC0gMSk7XG4gICAgfVxuICAgIHJldHVybiB0ZXh0LnRyaW0oKSArIGVsbGlwc2l6ZVN0cjtcbn1cbmV4cG9ydHMuZWxsaXBzaXplID0gZWxsaXBzaXplO1xuZnVuY3Rpb24gYWRkVGFibGVCb3JkZXIoKSB7XG4gICAgdmFyIHRhYmxlID0gc3RhdGVfMS5kZWZhdWx0KCkudGFibGU7XG4gICAgdmFyIHN0eWxlcyA9IHtcbiAgICAgICAgbGluZVdpZHRoOiB0YWJsZS5zZXR0aW5ncy50YWJsZUxpbmVXaWR0aCxcbiAgICAgICAgbGluZUNvbG9yOiB0YWJsZS5zZXR0aW5ncy50YWJsZUxpbmVDb2xvcixcbiAgICB9O1xuICAgIGFwcGx5U3R5bGVzKHN0eWxlcyk7XG4gICAgdmFyIGZzID0gZ2V0RmlsbFN0eWxlKHN0eWxlcyk7XG4gICAgaWYgKGZzKSB7XG4gICAgICAgIHN0YXRlXzEuZGVmYXVsdCgpLmRvYy5yZWN0KHRhYmxlLnBhZ2VTdGFydFgsIHRhYmxlLnBhZ2VTdGFydFksIHRhYmxlLndpZHRoLCB0YWJsZS5jdXJzb3IueSAtIHRhYmxlLnBhZ2VTdGFydFksIGZzKTtcbiAgICB9XG59XG5leHBvcnRzLmFkZFRhYmxlQm9yZGVyID0gYWRkVGFibGVCb3JkZXI7XG5mdW5jdGlvbiBnZXRGaWxsU3R5bGUoc3R5bGVzKSB7XG4gICAgdmFyIGRyYXdMaW5lID0gc3R5bGVzLmxpbmVXaWR0aCA+IDA7XG4gICAgdmFyIGRyYXdCYWNrZ3JvdW5kID0gc3R5bGVzLmZpbGxDb2xvciB8fCBzdHlsZXMuZmlsbENvbG9yID09PSAwO1xuICAgIGlmIChkcmF3TGluZSAmJiBkcmF3QmFja2dyb3VuZCkge1xuICAgICAgICByZXR1cm4gJ0RGJzsgLy8gRmlsbCB0aGVuIHN0cm9rZVxuICAgIH1cbiAgICBlbHNlIGlmIChkcmF3TGluZSkge1xuICAgICAgICByZXR1cm4gJ1MnOyAvLyBPbmx5IHN0cm9rZSAodHJhbnNwYXJlbnQgYmFja2dyb3VuZClcbiAgICB9XG4gICAgZWxzZSBpZiAoZHJhd0JhY2tncm91bmQpIHtcbiAgICAgICAgcmV0dXJuICdGJzsgLy8gT25seSBmaWxsLCBubyBzdHJva2VcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5leHBvcnRzLmdldEZpbGxTdHlsZSA9IGdldEZpbGxTdHlsZTtcbmZ1bmN0aW9uIGFwcGx5VXNlclN0eWxlcygpIHtcbiAgICBhcHBseVN0eWxlcyhzdGF0ZV8xLmRlZmF1bHQoKS50YWJsZS51c2VyU3R5bGVzKTtcbn1cbmV4cG9ydHMuYXBwbHlVc2VyU3R5bGVzID0gYXBwbHlVc2VyU3R5bGVzO1xuZnVuY3Rpb24gYXBwbHlTdHlsZXMoc3R5bGVzKSB7XG4gICAgdmFyIGRvYyA9IHN0YXRlXzEuZGVmYXVsdCgpLmRvYztcbiAgICB2YXIgc3R5bGVNb2RpZmllcnMgPSB7XG4gICAgICAgIGZpbGxDb2xvcjogZG9jLnNldEZpbGxDb2xvcixcbiAgICAgICAgdGV4dENvbG9yOiBkb2Muc2V0VGV4dENvbG9yLFxuICAgICAgICBmb250U3R5bGU6IGRvYy5zZXRGb250U3R5bGUsXG4gICAgICAgIGxpbmVDb2xvcjogZG9jLnNldERyYXdDb2xvcixcbiAgICAgICAgbGluZVdpZHRoOiBkb2Muc2V0TGluZVdpZHRoLFxuICAgICAgICBmb250OiBkb2Muc2V0Rm9udCxcbiAgICAgICAgZm9udFNpemU6IGRvYy5zZXRGb250U2l6ZSxcbiAgICB9O1xuICAgIE9iamVjdC5rZXlzKHN0eWxlTW9kaWZpZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHZhciBzdHlsZSA9IHN0eWxlc1tuYW1lXTtcbiAgICAgICAgdmFyIG1vZGlmaWVyID0gc3R5bGVNb2RpZmllcnNbbmFtZV07XG4gICAgICAgIGlmICh0eXBlb2Ygc3R5bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShzdHlsZSkpIHtcbiAgICAgICAgICAgICAgICBtb2RpZmllci5hcHBseSh0aGlzLCBzdHlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb2RpZmllcihzdHlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuYXBwbHlTdHlsZXMgPSBhcHBseVN0eWxlcztcbi8vIFRoaXMgaXMgbWVzc3ksIG9ubHkga2VlcCBhcnJheSBhbmQgbnVtYmVyIGZvcm1hdCB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uXG5mdW5jdGlvbiBtYXJnaW5PclBhZGRpbmcodmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xuICAgIHZhciBuZXdWYWx1ZSA9IHt9O1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICBpZiAodmFsdWUubGVuZ3RoID49IDQpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0ge1xuICAgICAgICAgICAgICAgIHRvcDogdmFsdWVbMF0sXG4gICAgICAgICAgICAgICAgcmlnaHQ6IHZhbHVlWzFdLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogdmFsdWVbMl0sXG4gICAgICAgICAgICAgICAgbGVmdDogdmFsdWVbM10sXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSB7XG4gICAgICAgICAgICAgICAgdG9wOiB2YWx1ZVswXSxcbiAgICAgICAgICAgICAgICByaWdodDogdmFsdWVbMV0sXG4gICAgICAgICAgICAgICAgYm90dG9tOiB2YWx1ZVsyXSxcbiAgICAgICAgICAgICAgICBsZWZ0OiB2YWx1ZVsxXSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmFsdWUubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHtcbiAgICAgICAgICAgICAgICB0b3A6IHZhbHVlWzBdLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiB2YWx1ZVsxXSxcbiAgICAgICAgICAgICAgICBib3R0b206IHZhbHVlWzBdLFxuICAgICAgICAgICAgICAgIGxlZnQ6IHZhbHVlWzFdLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWVbMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmICh2YWx1ZVsndmVydGljYWwnXSkge1xuICAgICAgICAgICAgdmFsdWVbJ3RvcCddID0gdmFsdWVbJ3ZlcnRpY2FsJ107XG4gICAgICAgICAgICB2YWx1ZVsnYm90dG9tJ10gPSB2YWx1ZVsndmVydGljYWwnXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsdWVbJ2hvcml6b250YWwnXSkge1xuICAgICAgICAgICAgdmFsdWVbJ3JpZ2h0J10gPSB2YWx1ZVsnaG9yaXpvbnRhbCddO1xuICAgICAgICAgICAgdmFsdWVbJ2xlZnQnXSA9IHZhbHVlWydob3Jpem9udGFsJ107XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J107IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgc2lkZSA9IF9hW19pXTtcbiAgICAgICAgICAgIG5ld1ZhbHVlW3NpZGVdID1cbiAgICAgICAgICAgICAgICB2YWx1ZVtzaWRlXSB8fCB2YWx1ZVtzaWRlXSA9PT0gMCA/IHZhbHVlW3NpZGVdIDogZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIG5ld1ZhbHVlID0geyB0b3A6IHZhbHVlLCByaWdodDogdmFsdWUsIGJvdHRvbTogdmFsdWUsIGxlZnQ6IHZhbHVlIH07XG4gICAgfVxuICAgIHJldHVybiBuZXdWYWx1ZTtcbn1cbmV4cG9ydHMubWFyZ2luT3JQYWRkaW5nID0gbWFyZ2luT3JQYWRkaW5nO1xuZnVuY3Rpb24gc3R5bGVzKHN0eWxlcykge1xuICAgIHN0eWxlcyA9IEFycmF5LmlzQXJyYXkoc3R5bGVzKSA/IHN0eWxlcyA6IFtzdHlsZXNdO1xuICAgIHJldHVybiBwb2x5ZmlsbHNfMS5hc3NpZ24uYXBwbHkodm9pZCAwLCBfX3NwcmVhZEFycmF5cyhbY29uZmlnXzEuZGVmYXVsdFN0eWxlcygpXSwgc3R5bGVzKSk7XG59XG5leHBvcnRzLnN0eWxlcyA9IHN0eWxlcztcblxuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogUmF0aW8gYmV0d2VlbiBmb250IHNpemUgYW5kIGZvbnQgaGVpZ2h0LiBUaGUgbnVtYmVyIGNvbWVzIGZyb20ganNwZGYncyBzb3VyY2UgY29kZVxuICovXG5leHBvcnRzLkZPTlRfUk9XX1JBVElPID0gMS4xNTtcbnZhciBzdGF0ZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbmZ1bmN0aW9uIGRlZmF1bHRDb25maWcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gSHRtbCBjb250ZW50XG4gICAgICAgIGh0bWw6IG51bGwsXG4gICAgICAgIC8vIEN1c3RvbSBjb250ZW50XG4gICAgICAgIGhlYWQ6IG51bGwsXG4gICAgICAgIGJvZHk6IG51bGwsXG4gICAgICAgIGZvb3Q6IG51bGwsXG4gICAgICAgIC8vIFByb3BlcnRpZXNcbiAgICAgICAgaW5jbHVkZUhpZGRlbkh0bWw6IGZhbHNlLFxuICAgICAgICBzdGFydFk6IG51bGwsXG4gICAgICAgIG1hcmdpbjogNDAgLyBzdGF0ZV8xLmRlZmF1bHQoKS5zY2FsZUZhY3RvcigpLFxuICAgICAgICBwYWdlQnJlYWs6ICdhdXRvJyxcbiAgICAgICAgcm93UGFnZUJyZWFrOiAnYXV0bycsXG4gICAgICAgIHRhYmxlV2lkdGg6ICdhdXRvJyxcbiAgICAgICAgc2hvd0hlYWQ6ICdldmVyeVBhZ2UnLFxuICAgICAgICBzaG93Rm9vdDogJ2V2ZXJ5UGFnZScsXG4gICAgICAgIHRhYmxlTGluZVdpZHRoOiAwLFxuICAgICAgICB0YWJsZUxpbmVDb2xvcjogMjAwLFxuICAgICAgICB0YWJsZUlkOiBudWxsLFxuICAgICAgICAvLyBTdHlsaW5nXG4gICAgICAgIHRoZW1lOiAnc3RyaXBlZCcsXG4gICAgICAgIHVzZUNzczogZmFsc2UsXG4gICAgICAgIHN0eWxlczoge30sXG4gICAgICAgIGhlYWRTdHlsZXM6IHt9LFxuICAgICAgICBib2R5U3R5bGVzOiB7fSxcbiAgICAgICAgZm9vdFN0eWxlczoge30sXG4gICAgICAgIGFsdGVybmF0ZVJvd1N0eWxlczoge30sXG4gICAgICAgIGNvbHVtblN0eWxlczoge30sXG4gICAgICAgIC8vIEhvb2tzXG4gICAgICAgIC8vIFVzZSB0byBjaGFuZ2UgdGhlIGNvbnRlbnQgb2YgdGhlIGNlbGwgYmVmb3JlIHdpZHRoIGNhbGN1bGF0aW9ucyBldGMgYXJlIHBlcmZvcm1lZFxuICAgICAgICBkaWRQYXJzZUNlbGw6IGZ1bmN0aW9uIChkYXRhKSB7IH0sXG4gICAgICAgIHdpbGxEcmF3Q2VsbDogZnVuY3Rpb24gKGRhdGEpIHsgfSxcbiAgICAgICAgLy8gVXNlIHRvIGRyYXcgYWRkaXRpb25hbCBjb250ZW50IHN1Y2ggYXMgaW1hZ2VzIGluIHRhYmxlIGNlbGxzXG4gICAgICAgIGRpZERyYXdDZWxsOiBmdW5jdGlvbiAoZGF0YSkgeyB9LFxuICAgICAgICAvLyBVc2UgdG8gZHJhdyBhZGRpdGlvbmFsIGNvbnRlbnQgdG8gZWFjaCBwYWdlIHN1Y2ggYXMgaGVhZGVycyBhbmQgZm9vdGVyc1xuICAgICAgICBkaWREcmF3UGFnZTogZnVuY3Rpb24gKGRhdGEpIHsgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5kZWZhdWx0Q29uZmlnID0gZGVmYXVsdENvbmZpZztcbi8vIEJhc2Ugc3R5bGUgZm9yIGFsbCB0aGVtZXNcbmZ1bmN0aW9uIGRlZmF1bHRTdHlsZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZm9udDogJ2hlbHZldGljYScsXG4gICAgICAgIGZvbnRTdHlsZTogJ25vcm1hbCcsXG4gICAgICAgIG92ZXJmbG93OiAnbGluZWJyZWFrJyxcbiAgICAgICAgZmlsbENvbG9yOiBmYWxzZSxcbiAgICAgICAgdGV4dENvbG9yOiAyMCxcbiAgICAgICAgaGFsaWduOiAnbGVmdCcsXG4gICAgICAgIHZhbGlnbjogJ3RvcCcsXG4gICAgICAgIGZvbnRTaXplOiAxMCxcbiAgICAgICAgY2VsbFBhZGRpbmc6IDUgLyBzdGF0ZV8xLmRlZmF1bHQoKS5zY2FsZUZhY3RvcigpLFxuICAgICAgICBsaW5lQ29sb3I6IDIwMCxcbiAgICAgICAgbGluZVdpZHRoOiAwIC8gc3RhdGVfMS5kZWZhdWx0KCkuc2NhbGVGYWN0b3IoKSxcbiAgICAgICAgY2VsbFdpZHRoOiAnYXV0bycsXG4gICAgICAgIG1pbkNlbGxIZWlnaHQ6IDAsXG4gICAgfTtcbn1cbmV4cG9ydHMuZGVmYXVsdFN0eWxlcyA9IGRlZmF1bHRTdHlsZXM7XG4vKipcbiAqIFN0eWxlcyBmb3IgdGhlIHRoZW1lcyAob3ZlcnJpZGluZyB0aGUgZGVmYXVsdCBzdHlsZXMpXG4gKi9cbmZ1bmN0aW9uIGdldFRoZW1lKG5hbWUpIHtcbiAgICB2YXIgdGhlbWVzID0ge1xuICAgICAgICBzdHJpcGVkOiB7XG4gICAgICAgICAgICB0YWJsZTogeyBmaWxsQ29sb3I6IDI1NSwgdGV4dENvbG9yOiA4MCwgZm9udFN0eWxlOiAnbm9ybWFsJyB9LFxuICAgICAgICAgICAgaGVhZDogeyB0ZXh0Q29sb3I6IDI1NSwgZmlsbENvbG9yOiBbNDEsIDEyOCwgMTg1XSwgZm9udFN0eWxlOiAnYm9sZCcgfSxcbiAgICAgICAgICAgIGJvZHk6IHt9LFxuICAgICAgICAgICAgZm9vdDogeyB0ZXh0Q29sb3I6IDI1NSwgZmlsbENvbG9yOiBbNDEsIDEyOCwgMTg1XSwgZm9udFN0eWxlOiAnYm9sZCcgfSxcbiAgICAgICAgICAgIGFsdGVybmF0ZVJvdzogeyBmaWxsQ29sb3I6IDI0NSB9LFxuICAgICAgICB9LFxuICAgICAgICBncmlkOiB7XG4gICAgICAgICAgICB0YWJsZToge1xuICAgICAgICAgICAgICAgIGZpbGxDb2xvcjogMjU1LFxuICAgICAgICAgICAgICAgIHRleHRDb2xvcjogODAsXG4gICAgICAgICAgICAgICAgZm9udFN0eWxlOiAnbm9ybWFsJyxcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDAuMSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICAgICAgdGV4dENvbG9yOiAyNTUsXG4gICAgICAgICAgICAgICAgZmlsbENvbG9yOiBbMjYsIDE4OCwgMTU2XSxcbiAgICAgICAgICAgICAgICBmb250U3R5bGU6ICdib2xkJyxcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm9keToge30sXG4gICAgICAgICAgICBmb290OiB7XG4gICAgICAgICAgICAgICAgdGV4dENvbG9yOiAyNTUsXG4gICAgICAgICAgICAgICAgZmlsbENvbG9yOiBbMjYsIDE4OCwgMTU2XSxcbiAgICAgICAgICAgICAgICBmb250U3R5bGU6ICdib2xkJyxcbiAgICAgICAgICAgICAgICBsaW5lV2lkdGg6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWx0ZXJuYXRlUm93OiB7fSxcbiAgICAgICAgfSxcbiAgICAgICAgcGxhaW46IHtcbiAgICAgICAgICAgIGhlYWQ6IHsgZm9udFN0eWxlOiAnYm9sZCcgfSxcbiAgICAgICAgICAgIGZvb3Q6IHsgZm9udFN0eWxlOiAnYm9sZCcgfSxcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiB0aGVtZXNbbmFtZV07XG59XG5leHBvcnRzLmdldFRoZW1lID0gZ2V0VGhlbWU7XG5cblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG4vKlxuICogSW5jbHVkZSBjb21tb24gc21hbGwgcG9seWZpbGxzIGluc3RlYWQgb2YgcmVxdWlyaW5nIHRoZSB1c2VyIHRvIHRvIGRvIGl0XG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9hc3NpZ25cbmZ1bmN0aW9uIGFzc2lnbih0YXJnZXQpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIHZhckFyZ3MgPSBbXTtcbiAgICBmb3IgKHZhciBfaSA9IDE7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXJBcmdzW19pIC0gMV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICAgICAgLy8gVHlwZUVycm9yIGlmIHVuZGVmaW5lZCBvciBudWxsXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuICAgIH1cbiAgICB2YXIgdG8gPSBPYmplY3QodGFyZ2V0KTtcbiAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB2YXIgbmV4dFNvdXJjZSA9IGFyZ3VtZW50c1tpbmRleF07XG4gICAgICAgIGlmIChuZXh0U291cmNlICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIFNraXAgb3ZlciBpZiB1bmRlZmluZWQgb3IgbnVsbFxuICAgICAgICAgICAgZm9yICh2YXIgbmV4dEtleSBpbiBuZXh0U291cmNlKSB7XG4gICAgICAgICAgICAgICAgLy8gQXZvaWQgYnVncyB3aGVuIGhhc093blByb3BlcnR5IGlzIHNoYWRvd2VkXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuZXh0U291cmNlLCBuZXh0S2V5KSkge1xuICAgICAgICAgICAgICAgICAgICB0b1tuZXh0S2V5XSA9IG5leHRTb3VyY2VbbmV4dEtleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0bztcbn1cbmV4cG9ydHMuYXNzaWduID0gYXNzaWduO1xuXG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbmZpZ18xID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbnZhciBzdGF0ZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBIb29rRGF0YV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG52YXIgY29tbW9uXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xudmFyIGFzc2lnbiA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG52YXIgQ2VsbEhvb2tzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENlbGxIb29rcygpIHtcbiAgICAgICAgdGhpcy5kaWRQYXJzZUNlbGwgPSBbXTtcbiAgICAgICAgdGhpcy53aWxsRHJhd0NlbGwgPSBbXTtcbiAgICAgICAgdGhpcy5kaWREcmF3Q2VsbCA9IFtdO1xuICAgICAgICB0aGlzLmRpZERyYXdQYWdlID0gW107XG4gICAgfVxuICAgIHJldHVybiBDZWxsSG9va3M7XG59KCkpO1xudmFyIFRhYmxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFRhYmxlKCkge1xuICAgICAgICB0aGlzLmNvbHVtbnMgPSBbXTtcbiAgICAgICAgdGhpcy5oZWFkID0gW107XG4gICAgICAgIHRoaXMuYm9keSA9IFtdO1xuICAgICAgICB0aGlzLmZvb3QgPSBbXTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLndpZHRoID0gMDtcbiAgICAgICAgdGhpcy5wcmVmZXJyZWRXaWR0aCA9IDA7XG4gICAgICAgIHRoaXMud3JhcHBlZFdpZHRoID0gMDtcbiAgICAgICAgdGhpcy5taW5XaWR0aCA9IDA7XG4gICAgICAgIHRoaXMuaGVhZEhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuZm9vdEhlaWdodCA9IDA7XG4gICAgICAgIHRoaXMuc3RhcnRQYWdlTnVtYmVyID0gMTtcbiAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gMTtcbiAgICAgICAgLy8gRGVwcmVjYXRlZCwgdXNlIHBhZ2VOdW1iZXIgaW5zdGVhZFxuICAgICAgICAvLyBOb3QgdXNpbmcgZ2V0dGVyIHNpbmNlOlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vc2ltb25iZW5ndHNzb24vanNQREYtQXV0b1RhYmxlL2lzc3Vlcy81OTZcbiAgICAgICAgdGhpcy5wYWdlQ291bnQgPSAxO1xuICAgICAgICB0aGlzLnN0eWxlcyA9IHtcbiAgICAgICAgICAgIHN0eWxlczoge30sXG4gICAgICAgICAgICBoZWFkU3R5bGVzOiB7fSxcbiAgICAgICAgICAgIGJvZHlTdHlsZXM6IHt9LFxuICAgICAgICAgICAgZm9vdFN0eWxlczoge30sXG4gICAgICAgICAgICBhbHRlcm5hdGVSb3dTdHlsZXM6IHt9LFxuICAgICAgICAgICAgY29sdW1uU3R5bGVzOiB7fSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jZWxsSG9va3MgPSBuZXcgQ2VsbEhvb2tzKCk7XG4gICAgfVxuICAgIFRhYmxlLnByb3RvdHlwZS5hbGxSb3dzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFkLmNvbmNhdCh0aGlzLmJvZHkpLmNvbmNhdCh0aGlzLmZvb3QpO1xuICAgIH07XG4gICAgVGFibGUucHJvdG90eXBlLmNhbGxDZWxsSG9va3MgPSBmdW5jdGlvbiAoaGFuZGxlcnMsIGNlbGwsIHJvdywgY29sdW1uKSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgaGFuZGxlcnNfMSA9IGhhbmRsZXJzOyBfaSA8IGhhbmRsZXJzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlciA9IGhhbmRsZXJzXzFbX2ldO1xuICAgICAgICAgICAgaWYgKGhhbmRsZXIobmV3IEhvb2tEYXRhXzEuQ2VsbEhvb2tEYXRhKGNlbGwsIHJvdywgY29sdW1uKSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgVGFibGUucHJvdG90eXBlLmNhbGxFbmRQYWdlSG9va3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbW1vbl8xLmFwcGx5VXNlclN0eWxlcygpO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGhpcy5jZWxsSG9va3MuZGlkRHJhd1BhZ2U7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlciA9IF9hW19pXTtcbiAgICAgICAgICAgIGhhbmRsZXIobmV3IEhvb2tEYXRhXzEuSG9va0RhdGEoKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFRhYmxlLnByb3RvdHlwZS5tYXJnaW4gPSBmdW5jdGlvbiAoc2lkZSkge1xuICAgICAgICByZXR1cm4gY29tbW9uXzEubWFyZ2luT3JQYWRkaW5nKHRoaXMuc2V0dGluZ3MubWFyZ2luLCBjb25maWdfMS5kZWZhdWx0Q29uZmlnKCkubWFyZ2luKVtzaWRlXTtcbiAgICB9O1xuICAgIHJldHVybiBUYWJsZTtcbn0oKSk7XG5leHBvcnRzLlRhYmxlID0gVGFibGU7XG52YXIgUm93ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJvdyhyYXcsIGluZGV4LCBzZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuY2VsbHMgPSB7fTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLm1heENlbGxIZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLnNwYW5zTXVsdGlwbGVQYWdlcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJhdyA9IHJhdztcbiAgICAgICAgaWYgKHJhdy5fZWxlbWVudCkge1xuICAgICAgICAgICAgdGhpcy5yYXcgPSByYXcuX2VsZW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLnNlY3Rpb24gPSBzZWN0aW9uO1xuICAgIH1cbiAgICBSb3cucHJvdG90eXBlLmNhbkVudGlyZVJvd0ZpdCA9IGZ1bmN0aW9uIChoZWlnaHQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWF4Q2VsbEhlaWdodCA8PSBoZWlnaHQ7XG4gICAgfTtcbiAgICBSb3cucHJvdG90eXBlLmdldE1pbmltdW1Sb3dIZWlnaHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBzdGF0ZV8xLmRlZmF1bHQoKS50YWJsZS5jb2x1bW5zLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjb2x1bW4pIHtcbiAgICAgICAgICAgIHZhciBjZWxsID0gX3RoaXMuY2VsbHNbY29sdW1uLmluZGV4XTtcbiAgICAgICAgICAgIGlmICghY2VsbClcbiAgICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIHZhciBmb250SGVpZ2h0ID0gKGNlbGwuc3R5bGVzLmZvbnRTaXplIC8gc3RhdGVfMS5kZWZhdWx0KCkuc2NhbGVGYWN0b3IoKSkgKiBjb25maWdfMS5GT05UX1JPV19SQVRJTztcbiAgICAgICAgICAgIHZhciB2UGFkZGluZyA9IGNlbGwucGFkZGluZygndmVydGljYWwnKTtcbiAgICAgICAgICAgIHZhciBvbmVSb3dIZWlnaHQgPSB2UGFkZGluZyArIGZvbnRIZWlnaHQ7XG4gICAgICAgICAgICByZXR1cm4gb25lUm93SGVpZ2h0ID4gYWNjID8gb25lUm93SGVpZ2h0IDogYWNjO1xuICAgICAgICB9LCAwKTtcbiAgICB9O1xuICAgIHJldHVybiBSb3c7XG59KCkpO1xuZXhwb3J0cy5Sb3cgPSBSb3c7XG52YXIgQ2VsbCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDZWxsKHJhdywgdGhlbWVTdHlsZXMsIHNlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5jb250ZW50SGVpZ2h0ID0gMDtcbiAgICAgICAgdGhpcy5jb250ZW50V2lkdGggPSAwO1xuICAgICAgICB0aGlzLndyYXBwZWRXaWR0aCA9IDA7XG4gICAgICAgIHRoaXMubWluV2lkdGggPSAwO1xuICAgICAgICB0aGlzLnRleHRQb3MgPSB7fTtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAwO1xuICAgICAgICB0aGlzLndpZHRoID0gMDtcbiAgICAgICAgdGhpcy5yb3dTcGFuID0gKHJhdyAmJiByYXcucm93U3BhbikgfHwgMTtcbiAgICAgICAgdGhpcy5jb2xTcGFuID0gKHJhdyAmJiByYXcuY29sU3BhbikgfHwgMTtcbiAgICAgICAgdGhpcy5zdHlsZXMgPSBhc3NpZ24odGhlbWVTdHlsZXMsIChyYXcgJiYgcmF3LnN0eWxlcykgfHwge30pO1xuICAgICAgICB0aGlzLnNlY3Rpb24gPSBzZWN0aW9uO1xuICAgICAgICB2YXIgdGV4dDtcbiAgICAgICAgdmFyIGNvbnRlbnQgPSByYXcgJiYgcmF3LmNvbnRlbnQgIT0gbnVsbCA/IHJhdy5jb250ZW50IDogcmF3O1xuICAgICAgICBjb250ZW50ID0gY29udGVudCAmJiBjb250ZW50LnRpdGxlICE9IG51bGwgPyBjb250ZW50LnRpdGxlIDogY29udGVudDtcbiAgICAgICAgdGhpcy5yYXcgPSByYXcgJiYgcmF3Ll9lbGVtZW50ID8gcmF3Ll9lbGVtZW50IDogcmF3O1xuICAgICAgICAvLyBTdHJpbmdpZnkgMCBhbmQgZmFsc2UsIGJ1dCBub3QgdW5kZWZpbmVkIG9yIG51bGxcbiAgICAgICAgdGV4dCA9IGNvbnRlbnQgIT0gbnVsbCA/ICcnICsgY29udGVudCA6ICcnO1xuICAgICAgICB2YXIgc3BsaXRSZWdleCA9IC9cXHJcXG58XFxyfFxcbi9nO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0LnNwbGl0KHNwbGl0UmVnZXgpO1xuICAgIH1cbiAgICBDZWxsLnByb3RvdHlwZS5nZXRDb250ZW50SGVpZ2h0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbGluZUNvdW50ID0gQXJyYXkuaXNBcnJheSh0aGlzLnRleHQpID8gdGhpcy50ZXh0Lmxlbmd0aCA6IDE7XG4gICAgICAgIHZhciBmb250SGVpZ2h0ID0gKHRoaXMuc3R5bGVzLmZvbnRTaXplIC8gc3RhdGVfMS5kZWZhdWx0KCkuc2NhbGVGYWN0b3IoKSkgKiBjb25maWdfMS5GT05UX1JPV19SQVRJTztcbiAgICAgICAgcmV0dXJuIGxpbmVDb3VudCAqIGZvbnRIZWlnaHQgKyB0aGlzLnBhZGRpbmcoJ3ZlcnRpY2FsJyk7XG4gICAgfTtcbiAgICBDZWxsLnByb3RvdHlwZS5wYWRkaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdmFyIHBhZGRpbmcgPSBjb21tb25fMS5tYXJnaW5PclBhZGRpbmcodGhpcy5zdHlsZXMuY2VsbFBhZGRpbmcsIGNvbW1vbl8xLnN0eWxlcyhbXSkuY2VsbFBhZGRpbmcpO1xuICAgICAgICBpZiAobmFtZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgICAgICAgcmV0dXJuIHBhZGRpbmcudG9wICsgcGFkZGluZy5ib3R0b207XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFkZGluZy5sZWZ0ICsgcGFkZGluZy5yaWdodDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBwYWRkaW5nW25hbWVdO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQ2VsbDtcbn0oKSk7XG5leHBvcnRzLkNlbGwgPSBDZWxsO1xudmFyIENvbHVtbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb2x1bW4oZGF0YUtleSwgcmF3LCBpbmRleCkge1xuICAgICAgICB0aGlzLnByZWZlcnJlZFdpZHRoID0gMDtcbiAgICAgICAgdGhpcy5taW5XaWR0aCA9IDA7XG4gICAgICAgIHRoaXMud3JhcHBlZFdpZHRoID0gMDtcbiAgICAgICAgdGhpcy53aWR0aCA9IDA7XG4gICAgICAgIHRoaXMuZGF0YUtleSA9IGRhdGFLZXk7XG4gICAgICAgIHRoaXMucmF3ID0gcmF3O1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XG4gICAgfVxuICAgIHJldHVybiBDb2x1bW47XG59KCkpO1xuZXhwb3J0cy5Db2x1bW4gPSBDb2x1bW47XG5cblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cblxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNzc1BhcnNlcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG52YXIgc3RhdGVfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5mdW5jdGlvbiBwYXJzZUh0bWwoaW5wdXQsIGluY2x1ZGVIaWRkZW5IdG1sLCB1c2VDc3MpIHtcbiAgICBpZiAoaW5jbHVkZUhpZGRlbkh0bWwgPT09IHZvaWQgMCkgeyBpbmNsdWRlSGlkZGVuSHRtbCA9IGZhbHNlOyB9XG4gICAgaWYgKHVzZUNzcyA9PT0gdm9pZCAwKSB7IHVzZUNzcyA9IGZhbHNlOyB9XG4gICAgdmFyIHRhYmxlRWxlbWVudDtcbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgICB0YWJsZUVsZW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpbnB1dCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0YWJsZUVsZW1lbnQgPSBpbnB1dDtcbiAgICB9XG4gICAgaWYgKCF0YWJsZUVsZW1lbnQpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignSHRtbCB0YWJsZSBjb3VsZCBub3QgYmUgZm91bmQgd2l0aCBpbnB1dDogJywgaW5wdXQpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBoZWFkID0gcGFyc2VUYWJsZVNlY3Rpb24od2luZG93LCB0YWJsZUVsZW1lbnQudEhlYWQsIGluY2x1ZGVIaWRkZW5IdG1sLCB1c2VDc3MpO1xuICAgIHZhciBib2R5ID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0YWJsZUVsZW1lbnQudEJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBib2R5ID0gYm9keS5jb25jYXQocGFyc2VUYWJsZVNlY3Rpb24od2luZG93LCB0YWJsZUVsZW1lbnQudEJvZGllc1tpXSwgaW5jbHVkZUhpZGRlbkh0bWwsIHVzZUNzcykpO1xuICAgIH1cbiAgICB2YXIgZm9vdCA9IHBhcnNlVGFibGVTZWN0aW9uKHdpbmRvdywgdGFibGVFbGVtZW50LnRGb290LCBpbmNsdWRlSGlkZGVuSHRtbCwgdXNlQ3NzKTtcbiAgICByZXR1cm4geyBoZWFkOiBoZWFkLCBib2R5OiBib2R5LCBmb290OiBmb290IH07XG59XG5leHBvcnRzLnBhcnNlSHRtbCA9IHBhcnNlSHRtbDtcbmZ1bmN0aW9uIHBhcnNlVGFibGVTZWN0aW9uKHdpbmRvdywgc2VjdGlvbkVsZW1lbnQsIGluY2x1ZGVIaWRkZW4sIHVzZUNzcykge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgaWYgKCFzZWN0aW9uRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWN0aW9uRWxlbWVudC5yb3dzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciByb3cgPSBzZWN0aW9uRWxlbWVudC5yb3dzW2ldO1xuICAgICAgICB2YXIgcmVzdWx0Um93ID0gW107XG4gICAgICAgIHZhciByb3dTdHlsZXMgPSB1c2VDc3NcbiAgICAgICAgICAgID8gY3NzUGFyc2VyXzEucGFyc2VDc3Mocm93LCBzdGF0ZV8xLmRlZmF1bHQoKS5zY2FsZUZhY3RvcigpLCBbXG4gICAgICAgICAgICAgICAgJ2NlbGxQYWRkaW5nJyxcbiAgICAgICAgICAgICAgICAnbGluZVdpZHRoJyxcbiAgICAgICAgICAgICAgICAnbGluZUNvbG9yJyxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IHt9O1xuICAgICAgICBmb3IgKHZhciBpXzEgPSAwOyBpXzEgPCByb3cuY2VsbHMubGVuZ3RoOyBpXzErKykge1xuICAgICAgICAgICAgdmFyIGNlbGwgPSByb3cuY2VsbHNbaV8xXTtcbiAgICAgICAgICAgIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNlbGwpO1xuICAgICAgICAgICAgaWYgKGluY2x1ZGVIaWRkZW4gfHwgc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNlbGxTdHlsZXMgPSB1c2VDc3MgPyBjc3NQYXJzZXJfMS5wYXJzZUNzcyhjZWxsLCBzdGF0ZV8xLmRlZmF1bHQoKS5zY2FsZUZhY3RvcigpKSA6IHt9O1xuICAgICAgICAgICAgICAgIHJlc3VsdFJvdy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgcm93U3BhbjogY2VsbC5yb3dTcGFuLFxuICAgICAgICAgICAgICAgICAgICBjb2xTcGFuOiBjZWxsLmNvbFNwYW4sXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlczogdXNlQ3NzID8gY2VsbFN0eWxlcyA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIF9lbGVtZW50OiBjZWxsLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBwYXJzZUNlbGxDb250ZW50KGNlbGwpLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHRSb3cubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgKGluY2x1ZGVIaWRkZW4gfHwgcm93U3R5bGVzLmRpc3BsYXkgIT09ICdub25lJykpIHtcbiAgICAgICAgICAgIHJlc3VsdFJvdy5fZWxlbWVudCA9IHJvdztcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChyZXN1bHRSb3cpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xufVxuZnVuY3Rpb24gcGFyc2VDZWxsQ29udGVudChvcmdDZWxsKSB7XG4gICAgLy8gV29yayBvbiBjbG9uZWQgbm9kZSB0byBtYWtlIHN1cmUgbm8gY2hhbmdlcyBhcmUgYXBwbGllZCB0byBodG1sIHRhYmxlXG4gICAgdmFyIGNlbGwgPSBvcmdDZWxsLmNsb25lTm9kZSh0cnVlKTtcbiAgICAvLyBSZW1vdmUgZXh0cmEgc3BhY2UgYW5kIGxpbmUgYnJlYWtzIGluIG1hcmt1cCB0byBtYWtlIGl0IG1vcmUgc2ltaWxhciB0b1xuICAgIC8vIHdoYXQgd291bGQgYmUgc2hvd24gaW4gaHRtbFxuICAgIGNlbGwuaW5uZXJIVE1MID0gY2VsbC5pbm5lckhUTUwucmVwbGFjZSgvXFxuL2csICcnKS5yZXBsYWNlKC8gKy9nLCAnICcpO1xuICAgIC8vIFByZXNlcnZlIDxicj4gdGFncyBhcyBsaW5lIGJyZWFrcyBpbiB0aGUgcGRmXG4gICAgY2VsbC5pbm5lckhUTUwgPSBjZWxsLmlubmVySFRNTFxuICAgICAgICAuc3BsaXQoJzxicj4nKVxuICAgICAgICAubWFwKGZ1bmN0aW9uIChwYXJ0KSB7IHJldHVybiBwYXJ0LnRyaW0oKTsgfSlcbiAgICAgICAgLmpvaW4oJ1xcbicpO1xuICAgIC8vIGlubmVyVGV4dCBmb3IgaWVcbiAgICByZXR1cm4gY2VsbC5pbm5lclRleHQgfHwgY2VsbC50ZXh0Q29udGVudCB8fCAnJztcbn1cblxuXG4vKioqLyB9KSxcbi8qIDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX183X187XG5cbi8qKiovIH0pLFxuLyogOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHRhYmxlRHJhd2VyXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xudmFyIHdpZHRoQ2FsY3VsYXRvcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG52YXIgaW5wdXRQYXJzZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xudmFyIHN0YXRlXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuX193ZWJwYWNrX3JlcXVpcmVfXygxNSk7XG52YXIgY29tbW9uXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xudmFyIGh0bWxQYXJzZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG52YXIganNQREYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuZnVuY3Rpb24gYXV0b1RhYmxlKCkge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICBzdGF0ZV8xLnNldHVwU3RhdGUodGhpcyk7XG4gICAgLy8gMS4gUGFyc2UgYW5kIHVuaWZ5IHVzZXIgaW5wdXRcbiAgICB2YXIgdGFibGUgPSBpbnB1dFBhcnNlcl8xLnBhcnNlSW5wdXQoYXJncyk7XG4gICAgLy8gMi4gQ2FsY3VsYXRlIHByZWxpbWluYXJ5IHRhYmxlLCBjb2x1bW4sIHJvdyBhbmQgY2VsbCBkaW1lbnNpb25zXG4gICAgd2lkdGhDYWxjdWxhdG9yXzEuY2FsY3VsYXRlV2lkdGhzKHRhYmxlKTtcbiAgICAvLyAzLiBPdXRwdXQgdGFibGUgdG8gcGRmXG4gICAgdGFibGVEcmF3ZXJfMS5kcmF3VGFibGUodGFibGUpO1xuICAgIHRhYmxlLmZpbmFsWSA9IHRhYmxlLmN1cnNvci55O1xuICAgIHRoaXMucHJldmlvdXNBdXRvVGFibGUgPSB0YWJsZTtcbiAgICB0aGlzLmxhc3RBdXRvVGFibGUgPSB0YWJsZTtcbiAgICB0aGlzLmF1dG9UYWJsZS5wcmV2aW91cyA9IHRhYmxlOyAvLyBEZXByZWNhdGVkXG4gICAgY29tbW9uXzEuYXBwbHlVc2VyU3R5bGVzKCk7XG4gICAgc3RhdGVfMS5yZXNldFN0YXRlKCk7XG4gICAgcmV0dXJuIHRoaXM7XG59XG5qc1BERi5BUEkuYXV0b1RhYmxlID0gYXV0b1RhYmxlO1xuLy8gQXNzaWduIGZhbHNlIHRvIGVuYWJsZSBgZG9jLmxhc3RBdXRvVGFibGUuZmluYWxZIHx8IDQwYCBzdWdhcjtcbmpzUERGLkFQSS5sYXN0QXV0b1RhYmxlID0gZmFsc2U7XG5qc1BERi5BUEkucHJldmlvdXNBdXRvVGFibGUgPSBmYWxzZTsgLy8gZGVwcmVjYXRlZCBpbiB2M1xuanNQREYuQVBJLmF1dG9UYWJsZS5wcmV2aW91cyA9IGZhbHNlOyAvLyBkZXByZWNhdGVkIGluIHYzXG5qc1BERi5BUEkuYXV0b1RhYmxlU2V0RGVmYXVsdHMgPSBmdW5jdGlvbiAoZGVmYXVsdHMpIHtcbiAgICBzdGF0ZV8xLnNldERlZmF1bHRzKGRlZmF1bHRzLCB0aGlzKTtcbiAgICByZXR1cm4gdGhpcztcbn07XG5qc1BERi5hdXRvVGFibGVTZXREZWZhdWx0cyA9IGZ1bmN0aW9uIChkZWZhdWx0cywgZG9jKSB7XG4gICAgc3RhdGVfMS5zZXREZWZhdWx0cyhkZWZhdWx0cywgZG9jKTtcbiAgICByZXR1cm4gdGhpcztcbn07XG5qc1BERi5BUEkuYXV0b1RhYmxlSHRtbFRvSnNvbiA9IGZ1bmN0aW9uICh0YWJsZUVsZW0sIGluY2x1ZGVIaWRkZW5FbGVtZW50cykge1xuICAgIGluY2x1ZGVIaWRkZW5FbGVtZW50cyA9IGluY2x1ZGVIaWRkZW5FbGVtZW50cyB8fCBmYWxzZTtcbiAgICBpZiAoIXRhYmxlRWxlbSB8fCAhKHRhYmxlRWxlbSBpbnN0YW5jZW9mIEhUTUxUYWJsZUVsZW1lbnQpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0EgSFRNTFRhYmxlRWxlbWVudCBoYXMgdG8gYmUgc2VudCB0byBhdXRvVGFibGVIdG1sVG9Kc29uJyk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB2YXIgX2EgPSBodG1sUGFyc2VyXzEucGFyc2VIdG1sKHRhYmxlRWxlbSwgaW5jbHVkZUhpZGRlbkVsZW1lbnRzLCBmYWxzZSksIGhlYWQgPSBfYS5oZWFkLCBib2R5ID0gX2EuYm9keSwgZm9vdCA9IF9hLmZvb3Q7XG4gICAgdmFyIGZpcnN0Um93ID0gaGVhZFswXSB8fCBib2R5WzBdIHx8IGZvb3RbMF07XG4gICAgcmV0dXJuIHsgY29sdW1uczogZmlyc3RSb3csIHJvd3M6IGJvZHksIGRhdGE6IGJvZHkgfTtcbn07XG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmpzUERGLkFQSS5hdXRvVGFibGVFbmRQb3NZID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1VzZSBvZiBkZXByZWNhdGVkIGZ1bmN0aW9uOiBhdXRvVGFibGVFbmRQb3NZLiBVc2UgZG9jLnByZXZpb3VzQXV0b1RhYmxlLmZpbmFsWSBpbnN0ZWFkLicpO1xuICAgIHZhciBwcmV2ID0gdGhpcy5wcmV2aW91c0F1dG9UYWJsZTtcbiAgICBpZiAocHJldi5jdXJzb3IgJiYgdHlwZW9mIHByZXYuY3Vyc29yLnkgPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiBwcmV2LmN1cnNvci55O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufTtcbi8qKlxuICogQGRlcHJlY2F0ZWRcbiAqL1xuanNQREYuQVBJLmF1dG9UYWJsZUFkZFBhZ2VDb250ZW50ID0gZnVuY3Rpb24gKGhvb2spIHtcbiAgICBjb25zb2xlLmVycm9yKCdVc2Ugb2YgZGVwcmVjYXRlZCBmdW5jdGlvbjogYXV0b1RhYmxlQWRkUGFnZUNvbnRlbnQuIFVzZSBqc1BERi5hdXRvVGFibGVTZXREZWZhdWx0cyh7ZGlkRHJhd1BhZ2U6ICgpID0+IHt9fSkgaW5zdGVhZC4nKTtcbiAgICBpZiAoIWpzUERGLkFQSS5hdXRvVGFibGUuZ2xvYmFsRGVmYXVsdHMpIHtcbiAgICAgICAganNQREYuQVBJLmF1dG9UYWJsZS5nbG9iYWxEZWZhdWx0cyA9IHt9O1xuICAgIH1cbiAgICBqc1BERi5BUEkuYXV0b1RhYmxlLmdsb2JhbERlZmF1bHRzLmFkZFBhZ2VDb250ZW50ID0gaG9vaztcbiAgICByZXR1cm4gdGhpcztcbn07XG4vKipcbiAqIEBkZXByZWNhdGVkXG4gKi9cbmpzUERGLkFQSS5hdXRvVGFibGVBZGRQYWdlID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1VzZSBvZiBkZXByZWNhdGVkIGZ1bmN0aW9uOiBhdXRvVGFibGVBZGRQYWdlLiBVc2UgZG9jLmFkZFBhZ2UoKScpO1xuICAgIHRoaXMuYWRkUGFnZSgpO1xuICAgIHJldHVybiB0aGlzO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb25maWdfMSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgY29tbW9uXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xudmFyIG1vZGVsc18xID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbnZhciBzdGF0ZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBhc3NpZ24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuZnVuY3Rpb24gZHJhd1RhYmxlKHRhYmxlKSB7XG4gICAgdmFyIHNldHRpbmdzID0gdGFibGUuc2V0dGluZ3M7XG4gICAgdGFibGUuY3Vyc29yID0ge1xuICAgICAgICB4OiB0YWJsZS5tYXJnaW4oJ2xlZnQnKSxcbiAgICAgICAgeTogc2V0dGluZ3Muc3RhcnRZID09IG51bGwgPyB0YWJsZS5tYXJnaW4oJ3RvcCcpIDogc2V0dGluZ3Muc3RhcnRZLFxuICAgIH07XG4gICAgdmFyIG1pblRhYmxlQm90dG9tUG9zID0gc2V0dGluZ3Muc3RhcnRZICtcbiAgICAgICAgdGFibGUubWFyZ2luKCdib3R0b20nKSArXG4gICAgICAgIHRhYmxlLmhlYWRIZWlnaHQgK1xuICAgICAgICB0YWJsZS5mb290SGVpZ2h0O1xuICAgIGlmIChzZXR0aW5ncy5wYWdlQnJlYWsgPT09ICdhdm9pZCcpIHtcbiAgICAgICAgbWluVGFibGVCb3R0b21Qb3MgKz0gdGFibGUuaGVpZ2h0O1xuICAgIH1cbiAgICBpZiAoc2V0dGluZ3MucGFnZUJyZWFrID09PSAnYWx3YXlzJyB8fFxuICAgICAgICAoc2V0dGluZ3Muc3RhcnRZICE9IG51bGwgJiZcbiAgICAgICAgICAgIHNldHRpbmdzLnN0YXJ0WSAhPT0gZmFsc2UgJiZcbiAgICAgICAgICAgIG1pblRhYmxlQm90dG9tUG9zID4gc3RhdGVfMS5kZWZhdWx0KCkucGFnZUhlaWdodCgpKSkge1xuICAgICAgICBuZXh0UGFnZShzdGF0ZV8xLmRlZmF1bHQoKS5kb2MpO1xuICAgICAgICB0YWJsZS5jdXJzb3IueSA9IHRhYmxlLm1hcmdpbigndG9wJyk7XG4gICAgfVxuICAgIHRhYmxlLnBhZ2VTdGFydFggPSB0YWJsZS5jdXJzb3IueDtcbiAgICB0YWJsZS5wYWdlU3RhcnRZID0gdGFibGUuY3Vyc29yLnk7XG4gICAgdGFibGUuc3RhcnRQYWdlTnVtYmVyID0gc3RhdGVfMS5kZWZhdWx0KCkucGFnZU51bWJlcigpO1xuICAgIC8vIEFuIGVtcHR5IHJvdyB1c2VkIHRvIGNhY2hlZCBjZWxscyB0aG9zZSBicmVhayB0aHJvdWdoIHBhZ2VcbiAgICBjb21tb25fMS5hcHBseVVzZXJTdHlsZXMoKTtcbiAgICBpZiAoc2V0dGluZ3Muc2hvd0hlYWQgPT09IHRydWUgfHxcbiAgICAgICAgc2V0dGluZ3Muc2hvd0hlYWQgPT09ICdmaXJzdFBhZ2UnIHx8XG4gICAgICAgIHNldHRpbmdzLnNob3dIZWFkID09PSAnZXZlcnlQYWdlJykge1xuICAgICAgICB0YWJsZS5oZWFkLmZvckVhY2goZnVuY3Rpb24gKHJvdykgeyByZXR1cm4gcHJpbnRSb3cocm93KTsgfSk7XG4gICAgfVxuICAgIGNvbW1vbl8xLmFwcGx5VXNlclN0eWxlcygpO1xuICAgIHRhYmxlLmJvZHkuZm9yRWFjaChmdW5jdGlvbiAocm93LCBpbmRleCkge1xuICAgICAgICBwcmludEZ1bGxSb3cocm93LCBpbmRleCA9PT0gdGFibGUuYm9keS5sZW5ndGggLSAxKTtcbiAgICB9KTtcbiAgICBjb21tb25fMS5hcHBseVVzZXJTdHlsZXMoKTtcbiAgICBpZiAoc2V0dGluZ3Muc2hvd0Zvb3QgPT09IHRydWUgfHxcbiAgICAgICAgc2V0dGluZ3Muc2hvd0Zvb3QgPT09ICdsYXN0UGFnZScgfHxcbiAgICAgICAgc2V0dGluZ3Muc2hvd0Zvb3QgPT09ICdldmVyeVBhZ2UnKSB7XG4gICAgICAgIHRhYmxlLmZvb3QuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7IHJldHVybiBwcmludFJvdyhyb3cpOyB9KTtcbiAgICB9XG4gICAgY29tbW9uXzEuYWRkVGFibGVCb3JkZXIoKTtcbiAgICB0YWJsZS5jYWxsRW5kUGFnZUhvb2tzKCk7XG59XG5leHBvcnRzLmRyYXdUYWJsZSA9IGRyYXdUYWJsZTtcbmZ1bmN0aW9uIGdldFJlbWFpbmluZ0xpbmVDb3VudChjZWxsLCByZW1haW5pbmdQYWdlU3BhY2UpIHtcbiAgICB2YXIgZm9udEhlaWdodCA9IChjZWxsLnN0eWxlcy5mb250U2l6ZSAvIHN0YXRlXzEuZGVmYXVsdCgpLnNjYWxlRmFjdG9yKCkpICogY29uZmlnXzEuRk9OVF9ST1dfUkFUSU87XG4gICAgdmFyIHZQYWRkaW5nID0gY2VsbC5wYWRkaW5nKCd2ZXJ0aWNhbCcpO1xuICAgIHZhciByZW1haW5pbmdMaW5lcyA9IE1hdGguZmxvb3IoKHJlbWFpbmluZ1BhZ2VTcGFjZSAtIHZQYWRkaW5nKSAvIGZvbnRIZWlnaHQpO1xuICAgIHJldHVybiBNYXRoLm1heCgwLCByZW1haW5pbmdMaW5lcyk7XG59XG5mdW5jdGlvbiBtb2RpZnlSb3dUb0ZpdChyb3csIHJlbWFpbmluZ1BhZ2VTcGFjZSwgdGFibGUpIHtcbiAgICB2YXIgcmVtYWluZGVyUm93ID0gbmV3IG1vZGVsc18xLlJvdyhyb3cucmF3LCAtMSwgcm93LnNlY3Rpb24pO1xuICAgIHJlbWFpbmRlclJvdy5zcGFuc011bHRpcGxlUGFnZXMgPSB0cnVlO1xuICAgIHJvdy5zcGFuc011bHRpcGxlUGFnZXMgPSB0cnVlO1xuICAgIHJvdy5oZWlnaHQgPSAwO1xuICAgIHJvdy5tYXhDZWxsSGVpZ2h0ID0gMDtcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGFibGUuY29sdW1uczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGNvbHVtbiA9IF9hW19pXTtcbiAgICAgICAgdmFyIGNlbGwgPSByb3cuY2VsbHNbY29sdW1uLmluZGV4XTtcbiAgICAgICAgaWYgKCFjZWxsKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShjZWxsLnRleHQpKSB7XG4gICAgICAgICAgICBjZWxsLnRleHQgPSBbY2VsbC50ZXh0XTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVtYWluZGVyQ2VsbCA9IG5ldyBtb2RlbHNfMS5DZWxsKGNlbGwucmF3LCB7fSwgY2VsbC5zZWN0aW9uKTtcbiAgICAgICAgcmVtYWluZGVyQ2VsbCA9IGFzc2lnbihyZW1haW5kZXJDZWxsLCBjZWxsKTtcbiAgICAgICAgcmVtYWluZGVyQ2VsbC50ZXh0UG9zID0gYXNzaWduKHt9LCBjZWxsLnRleHRQb3MpO1xuICAgICAgICByZW1haW5kZXJDZWxsLnRleHQgPSBbXTtcbiAgICAgICAgdmFyIHJlbWFpbmluZ0xpbmVDb3VudCA9IGdldFJlbWFpbmluZ0xpbmVDb3VudChjZWxsLCByZW1haW5pbmdQYWdlU3BhY2UpO1xuICAgICAgICBpZiAoY2VsbC50ZXh0Lmxlbmd0aCA+IHJlbWFpbmluZ0xpbmVDb3VudCkge1xuICAgICAgICAgICAgcmVtYWluZGVyQ2VsbC50ZXh0ID0gY2VsbC50ZXh0LnNwbGljZShyZW1haW5pbmdMaW5lQ291bnQsIGNlbGwudGV4dC5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGNlbGwuY29udGVudEhlaWdodCA9IGNlbGwuZ2V0Q29udGVudEhlaWdodCgpO1xuICAgICAgICBpZiAoY2VsbC5jb250ZW50SGVpZ2h0ID4gcm93LmhlaWdodCkge1xuICAgICAgICAgICAgcm93LmhlaWdodCA9IGNlbGwuY29udGVudEhlaWdodDtcbiAgICAgICAgICAgIHJvdy5tYXhDZWxsSGVpZ2h0ID0gY2VsbC5jb250ZW50SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJlbWFpbmRlckNlbGwuY29udGVudEhlaWdodCA9IHJlbWFpbmRlckNlbGwuZ2V0Q29udGVudEhlaWdodCgpO1xuICAgICAgICBpZiAocmVtYWluZGVyQ2VsbC5jb250ZW50SGVpZ2h0ID4gcmVtYWluZGVyUm93LmhlaWdodCkge1xuICAgICAgICAgICAgcmVtYWluZGVyUm93LmhlaWdodCA9IHJlbWFpbmRlckNlbGwuY29udGVudEhlaWdodDtcbiAgICAgICAgICAgIHJlbWFpbmRlclJvdy5tYXhDZWxsSGVpZ2h0ID0gcmVtYWluZGVyQ2VsbC5jb250ZW50SGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHJlbWFpbmRlclJvdy5jZWxsc1tjb2x1bW4uaW5kZXhdID0gcmVtYWluZGVyQ2VsbDtcbiAgICB9XG4gICAgZm9yICh2YXIgX2IgPSAwLCBfYyA9IHRhYmxlLmNvbHVtbnM7IF9iIDwgX2MubGVuZ3RoOyBfYisrKSB7XG4gICAgICAgIHZhciBjb2x1bW4gPSBfY1tfYl07XG4gICAgICAgIHZhciByZW1haW5kZXJDZWxsID0gcmVtYWluZGVyUm93LmNlbGxzW2NvbHVtbi5pbmRleF07XG4gICAgICAgIGlmIChyZW1haW5kZXJDZWxsKSB7XG4gICAgICAgICAgICByZW1haW5kZXJDZWxsLmhlaWdodCA9IHJlbWFpbmRlclJvdy5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNlbGwgPSByb3cuY2VsbHNbY29sdW1uLmluZGV4XTtcbiAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICAgIGNlbGwuaGVpZ2h0ID0gcm93LmhlaWdodDtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVtYWluZGVyUm93O1xufVxuZnVuY3Rpb24gc2hvdWxkUHJpbnRPbkN1cnJlbnRQYWdlKHJvdywgcmVtYWluaW5nUGFnZVNwYWNlLCB0YWJsZSkge1xuICAgIHZhciBwYWdlSGVpZ2h0ID0gc3RhdGVfMS5kZWZhdWx0KCkucGFnZUhlaWdodCgpO1xuICAgIHZhciBtYXJnaW5IZWlnaHQgPSB0YWJsZS5tYXJnaW4oJ3RvcCcpIC0gdGFibGUubWFyZ2luKCdib3R0b20nKTtcbiAgICB2YXIgbWF4VGFibGVIZWlnaHQgPSBwYWdlSGVpZ2h0IC0gbWFyZ2luSGVpZ2h0O1xuICAgIHZhciBtaW5Sb3dGaXRzID0gcm93LmdldE1pbmltdW1Sb3dIZWlnaHQoKSA8IHJlbWFpbmluZ1BhZ2VTcGFjZTtcbiAgICBpZiAocm93LmdldE1pbmltdW1Sb3dIZWlnaHQoKSA+IG1heFRhYmxlSGVpZ2h0KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJXaWxsIG5vdCBiZSBhYmxlIHRvIHByaW50IHJvdyBcIiArIHJvdy5pbmRleCArIFwiIGNvcnJlY3RseSBzaW5jZSBpdCdzIG1pbmltdW0gaGVpZ2h0IGlzIGxhcmdlciB0aGFuIHBhZ2UgaGVpZ2h0XCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIHJvd0hhc1Jvd1NwYW5DZWxsID0gdGFibGUuY29sdW1ucy5maWx0ZXIoZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICB2YXIgY2VsbCA9IHJvdy5jZWxsc1tjb2x1bW4uaW5kZXhdO1xuICAgICAgICBpZiAoIWNlbGwpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiBjZWxsLnJvd1NwYW4gPiAxO1xuICAgIH0pLmxlbmd0aCA+IDA7XG4gICAgaWYgKCFtaW5Sb3dGaXRzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIHJvd0hpZ2hlclRoYW5QYWdlID0gcm93Lm1heENlbGxIZWlnaHQgPiBtYXhUYWJsZUhlaWdodDtcbiAgICBpZiAocm93SGlnaGVyVGhhblBhZ2UpIHtcbiAgICAgICAgaWYgKHJvd0hhc1Jvd1NwYW5DZWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlIGNvbnRlbnQgb2Ygcm93IFwiICsgcm93LmluZGV4ICsgXCIgd2lsbCBub3QgYmUgZHJhd24gY29ycmVjdGx5IHNpbmNlIGRyYXdpbmcgcm93cyB3aXRoIGEgaGVpZ2h0IGxhcmdlciB0aGFuIHRoZSBwYWdlIGhlaWdodCBhbmQgaGFzIGNlbGxzIHdpdGggcm93c3BhbnMgaXMgbm90IHN1cHBvcnRlZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChyb3dIYXNSb3dTcGFuQ2VsbCkge1xuICAgICAgICAvLyBDdXJyZW50bHkgYSBuZXcgcGFnZSBpcyByZXF1aXJlZCB3aGVuZXZlciBhIHJvd3NwYW4gcm93IGRvbid0IGZpdCBhIHBhZ2UuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRhYmxlLnNldHRpbmdzLnJvd1BhZ2VCcmVhayA9PT0gJ2F2b2lkJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIEluIGFsbCBvdGhlciBjYXNlcyBwcmludCB0aGUgcm93IG9uIGN1cnJlbnQgcGFnZVxuICAgIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gcHJpbnRGdWxsUm93KHJvdywgaXNMYXN0Um93KSB7XG4gICAgdmFyIHRhYmxlID0gc3RhdGVfMS5kZWZhdWx0KCkudGFibGU7XG4gICAgdmFyIHJlbWFpbmluZ1BhZ2VTcGFjZSA9IGdldFJlbWFpbmluZ1BhZ2VTcGFjZShpc0xhc3RSb3cpO1xuICAgIGlmIChyb3cuY2FuRW50aXJlUm93Rml0KHJlbWFpbmluZ1BhZ2VTcGFjZSkpIHtcbiAgICAgICAgcHJpbnRSb3cocm93KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChzaG91bGRQcmludE9uQ3VycmVudFBhZ2Uocm93LCByZW1haW5pbmdQYWdlU3BhY2UsIHRhYmxlKSkge1xuICAgICAgICAgICAgdmFyIHJlbWFpbmRlclJvdyA9IG1vZGlmeVJvd1RvRml0KHJvdywgcmVtYWluaW5nUGFnZVNwYWNlLCB0YWJsZSk7XG4gICAgICAgICAgICBwcmludFJvdyhyb3cpO1xuICAgICAgICAgICAgYWRkUGFnZSgpO1xuICAgICAgICAgICAgcHJpbnRGdWxsUm93KHJlbWFpbmRlclJvdywgaXNMYXN0Um93KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFkZFBhZ2UoKTtcbiAgICAgICAgICAgIHByaW50RnVsbFJvdyhyb3csIGlzTGFzdFJvdyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBwcmludFJvdyhyb3cpIHtcbiAgICB2YXIgdGFibGUgPSBzdGF0ZV8xLmRlZmF1bHQoKS50YWJsZTtcbiAgICB0YWJsZS5jdXJzb3IueCA9IHRhYmxlLm1hcmdpbignbGVmdCcpO1xuICAgIHJvdy55ID0gdGFibGUuY3Vyc29yLnk7XG4gICAgcm93LnggPSB0YWJsZS5jdXJzb3IueDtcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGFibGUuY29sdW1uczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGNvbHVtbiA9IF9hW19pXTtcbiAgICAgICAgdmFyIGNlbGwgPSByb3cuY2VsbHNbY29sdW1uLmluZGV4XTtcbiAgICAgICAgaWYgKCFjZWxsKSB7XG4gICAgICAgICAgICB0YWJsZS5jdXJzb3IueCArPSBjb2x1bW4ud2lkdGg7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBjb21tb25fMS5hcHBseVN0eWxlcyhjZWxsLnN0eWxlcyk7XG4gICAgICAgIGNlbGwueCA9IHRhYmxlLmN1cnNvci54O1xuICAgICAgICBjZWxsLnkgPSByb3cueTtcbiAgICAgICAgaWYgKGNlbGwuc3R5bGVzLnZhbGlnbiA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIGNlbGwudGV4dFBvcy55ID0gdGFibGUuY3Vyc29yLnkgKyBjZWxsLnBhZGRpbmcoJ3RvcCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNlbGwuc3R5bGVzLnZhbGlnbiA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICAgIGNlbGwudGV4dFBvcy55ID0gdGFibGUuY3Vyc29yLnkgKyBjZWxsLmhlaWdodCAtIGNlbGwucGFkZGluZygnYm90dG9tJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjZWxsLnRleHRQb3MueSA9IHRhYmxlLmN1cnNvci55ICsgY2VsbC5oZWlnaHQgLyAyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjZWxsLnN0eWxlcy5oYWxpZ24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIGNlbGwudGV4dFBvcy54ID0gY2VsbC54ICsgY2VsbC53aWR0aCAtIGNlbGwucGFkZGluZygncmlnaHQnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjZWxsLnN0eWxlcy5oYWxpZ24gPT09ICdjZW50ZXInKSB7XG4gICAgICAgICAgICBjZWxsLnRleHRQb3MueCA9IGNlbGwueCArIGNlbGwud2lkdGggLyAyO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2VsbC50ZXh0UG9zLnggPSBjZWxsLnggKyBjZWxsLnBhZGRpbmcoJ2xlZnQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGFibGUuY2FsbENlbGxIb29rcyh0YWJsZS5jZWxsSG9va3Mud2lsbERyYXdDZWxsLCBjZWxsLCByb3csIGNvbHVtbikgPT09XG4gICAgICAgICAgICBmYWxzZSkge1xuICAgICAgICAgICAgdGFibGUuY3Vyc29yLnggKz0gY29sdW1uLndpZHRoO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGZpbGxTdHlsZSA9IGNvbW1vbl8xLmdldEZpbGxTdHlsZShjZWxsLnN0eWxlcyk7XG4gICAgICAgIGlmIChmaWxsU3R5bGUpIHtcbiAgICAgICAgICAgIHN0YXRlXzEuZGVmYXVsdCgpLmRvYy5yZWN0KGNlbGwueCwgdGFibGUuY3Vyc29yLnksIGNlbGwud2lkdGgsIGNlbGwuaGVpZ2h0LCBmaWxsU3R5bGUpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlXzEuZGVmYXVsdCgpLmRvYy5hdXRvVGFibGVUZXh0KGNlbGwudGV4dCwgY2VsbC50ZXh0UG9zLngsIGNlbGwudGV4dFBvcy55LCB7XG4gICAgICAgICAgICBoYWxpZ246IGNlbGwuc3R5bGVzLmhhbGlnbixcbiAgICAgICAgICAgIHZhbGlnbjogY2VsbC5zdHlsZXMudmFsaWduLFxuICAgICAgICAgICAgbWF4V2lkdGg6IE1hdGguY2VpbChjZWxsLndpZHRoIC0gY2VsbC5wYWRkaW5nKCdsZWZ0JykgLSBjZWxsLnBhZGRpbmcoJ3JpZ2h0JykpLFxuICAgICAgICB9KTtcbiAgICAgICAgdGFibGUuY2FsbENlbGxIb29rcyh0YWJsZS5jZWxsSG9va3MuZGlkRHJhd0NlbGwsIGNlbGwsIHJvdywgY29sdW1uKTtcbiAgICAgICAgdGFibGUuY3Vyc29yLnggKz0gY29sdW1uLndpZHRoO1xuICAgIH1cbiAgICB0YWJsZS5jdXJzb3IueSArPSByb3cuaGVpZ2h0O1xufVxuZnVuY3Rpb24gZ2V0UmVtYWluaW5nUGFnZVNwYWNlKGlzTGFzdFJvdykge1xuICAgIHZhciB0YWJsZSA9IHN0YXRlXzEuZGVmYXVsdCgpLnRhYmxlO1xuICAgIHZhciBib3R0b21Db250ZW50SGVpZ2h0ID0gdGFibGUubWFyZ2luKCdib3R0b20nKTtcbiAgICB2YXIgc2hvd0Zvb3QgPSB0YWJsZS5zZXR0aW5ncy5zaG93Rm9vdDtcbiAgICBpZiAoc2hvd0Zvb3QgPT09IHRydWUgfHxcbiAgICAgICAgc2hvd0Zvb3QgPT09ICdldmVyeVBhZ2UnIHx8XG4gICAgICAgIChzaG93Rm9vdCA9PT0gJ2xhc3RQYWdlJyAmJiBpc0xhc3RSb3cpKSB7XG4gICAgICAgIGJvdHRvbUNvbnRlbnRIZWlnaHQgKz0gdGFibGUuZm9vdEhlaWdodDtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlXzEuZGVmYXVsdCgpLnBhZ2VIZWlnaHQoKSAtIHRhYmxlLmN1cnNvci55IC0gYm90dG9tQ29udGVudEhlaWdodDtcbn1cbmZ1bmN0aW9uIGFkZFBhZ2UoKSB7XG4gICAgdmFyIHRhYmxlID0gc3RhdGVfMS5kZWZhdWx0KCkudGFibGU7XG4gICAgY29tbW9uXzEuYXBwbHlVc2VyU3R5bGVzKCk7XG4gICAgaWYgKHRhYmxlLnNldHRpbmdzLnNob3dGb290ID09PSB0cnVlIHx8XG4gICAgICAgIHRhYmxlLnNldHRpbmdzLnNob3dGb290ID09PSAnZXZlcnlQYWdlJykge1xuICAgICAgICB0YWJsZS5mb290LmZvckVhY2goZnVuY3Rpb24gKHJvdykgeyByZXR1cm4gcHJpbnRSb3cocm93KTsgfSk7XG4gICAgfVxuICAgIHRhYmxlLmZpbmFsWSA9IHRhYmxlLmN1cnNvci55O1xuICAgIC8vIEFkZCB1c2VyIGNvbnRlbnQganVzdCBiZWZvcmUgYWRkaW5nIG5ldyBwYWdlIGVuc3VyZSBpdCB3aWxsXG4gICAgLy8gYmUgZHJhd24gYWJvdmUgb3RoZXIgdGhpbmdzIG9uIHRoZSBwYWdlXG4gICAgdGFibGUuY2FsbEVuZFBhZ2VIb29rcygpO1xuICAgIGNvbW1vbl8xLmFkZFRhYmxlQm9yZGVyKCk7XG4gICAgbmV4dFBhZ2Uoc3RhdGVfMS5kZWZhdWx0KCkuZG9jKTtcbiAgICB0YWJsZS5wYWdlTnVtYmVyKys7XG4gICAgdGFibGUucGFnZUNvdW50Kys7XG4gICAgdGFibGUuY3Vyc29yID0geyB4OiB0YWJsZS5tYXJnaW4oJ2xlZnQnKSwgeTogdGFibGUubWFyZ2luKCd0b3AnKSB9O1xuICAgIHRhYmxlLnBhZ2VTdGFydFggPSB0YWJsZS5jdXJzb3IueDtcbiAgICB0YWJsZS5wYWdlU3RhcnRZID0gdGFibGUuY3Vyc29yLnk7XG4gICAgaWYgKHRhYmxlLnNldHRpbmdzLnNob3dIZWFkID09PSB0cnVlIHx8XG4gICAgICAgIHRhYmxlLnNldHRpbmdzLnNob3dIZWFkID09PSAnZXZlcnlQYWdlJykge1xuICAgICAgICB0YWJsZS5oZWFkLmZvckVhY2goZnVuY3Rpb24gKHJvdykgeyByZXR1cm4gcHJpbnRSb3cocm93KTsgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5hZGRQYWdlID0gYWRkUGFnZTtcbmZ1bmN0aW9uIG5leHRQYWdlKGRvYykge1xuICAgIHZhciBjdXJyZW50ID0gc3RhdGVfMS5kZWZhdWx0KCkucGFnZU51bWJlcigpO1xuICAgIGRvYy5zZXRQYWdlKGN1cnJlbnQgKyAxKTtcbiAgICB2YXIgbmV3Q3VycmVudCA9IHN0YXRlXzEuZGVmYXVsdCgpLnBhZ2VOdW1iZXIoKTtcbiAgICBpZiAobmV3Q3VycmVudCA9PT0gY3VycmVudCkge1xuICAgICAgICBkb2MuYWRkUGFnZSgpO1xuICAgIH1cbn1cblxuXG4vKioqLyB9KSxcbi8qIDEwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbiAoZCwgYikge1xuICAgICAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XG4gICAgICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XG4gICAgICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcbiAgICAgICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XG4gICAgfTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGQsIGIpIHtcbiAgICAgICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcbiAgICAgICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbiAgICB9O1xufSkoKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBzdGF0ZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBIb29rRGF0YSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBIb29rRGF0YSgpIHtcbiAgICAgICAgdmFyIHRhYmxlID0gc3RhdGVfMS5kZWZhdWx0KCkudGFibGU7XG4gICAgICAgIHRoaXMudGFibGUgPSB0YWJsZTtcbiAgICAgICAgdGhpcy5wYWdlTnVtYmVyID0gdGFibGUucGFnZU51bWJlcjtcbiAgICAgICAgdGhpcy5wYWdlQ291bnQgPSB0aGlzLnBhZ2VOdW1iZXI7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB0YWJsZS5zZXR0aW5ncztcbiAgICAgICAgdGhpcy5jdXJzb3IgPSB0YWJsZS5jdXJzb3I7XG4gICAgICAgIHRoaXMuZG9jID0gc3RhdGVfMS5kZWZhdWx0KCkuZG9jO1xuICAgIH1cbiAgICByZXR1cm4gSG9va0RhdGE7XG59KCkpO1xuZXhwb3J0cy5Ib29rRGF0YSA9IEhvb2tEYXRhO1xudmFyIENlbGxIb29rRGF0YSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ2VsbEhvb2tEYXRhLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENlbGxIb29rRGF0YShjZWxsLCByb3csIGNvbHVtbikge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5jZWxsID0gY2VsbDtcbiAgICAgICAgX3RoaXMucm93ID0gcm93O1xuICAgICAgICBfdGhpcy5jb2x1bW4gPSBjb2x1bW47XG4gICAgICAgIF90aGlzLnNlY3Rpb24gPSByb3cuc2VjdGlvbjtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICByZXR1cm4gQ2VsbEhvb2tEYXRhO1xufShIb29rRGF0YSkpO1xuZXhwb3J0cy5DZWxsSG9va0RhdGEgPSBDZWxsSG9va0RhdGE7XG5cblxuLyoqKi8gfSksXG4vKiAxMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbW1vbl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbnZhciBzdGF0ZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qKlxuICogQ2FsY3VsYXRlIHRoZSBjb2x1bW4gd2lkdGhzXG4gKi9cbmZ1bmN0aW9uIGNhbGN1bGF0ZVdpZHRocyh0YWJsZSkge1xuICAgIHZhciBjb2x1bW5NaW5XaWR0aCA9IDEwIC8gc3RhdGVfMS5kZWZhdWx0KCkuc2NhbGVGYWN0b3IoKTtcbiAgICBpZiAoY29sdW1uTWluV2lkdGggKiB0YWJsZS5jb2x1bW5zLmxlbmd0aCA+IHRhYmxlLndpZHRoKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NvbHVtbnMgY291bGQgbm90IGZpdCBvbiBwYWdlJyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRhYmxlLm1pbldpZHRoID4gdGFibGUud2lkdGgpIHtcbiAgICAgICAgLy8gV291bGQgYmUgbmljZSB0byBpbXByb3ZlIHRoZSB1c2VyIGV4cGVyaWVuY2Ugb2YgdGhpc1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiQ29sdW1uIHdpZHRocyB0b28gd2lkZSBhbmQgY2FuJ3QgZml0IHBhZ2VcIik7XG4gICAgfVxuICAgIHZhciBjb3B5ID0gdGFibGUuY29sdW1ucy5zbGljZSgwKTtcbiAgICBkaXN0cmlidXRlV2lkdGgoY29weSwgdGFibGUud2lkdGgsIHRhYmxlLndyYXBwZWRXaWR0aCk7XG4gICAgYXBwbHlDb2xTcGFucyh0YWJsZSk7XG4gICAgZml0Q29udGVudCh0YWJsZSk7XG4gICAgYXBwbHlSb3dTcGFucyh0YWJsZSk7XG59XG5leHBvcnRzLmNhbGN1bGF0ZVdpZHRocyA9IGNhbGN1bGF0ZVdpZHRocztcbmZ1bmN0aW9uIGFwcGx5Um93U3BhbnModGFibGUpIHtcbiAgICB2YXIgcm93U3BhbkNlbGxzID0ge307XG4gICAgdmFyIGNvbFJvd1NwYW5zTGVmdCA9IDE7XG4gICAgdmFyIGFsbCA9IHRhYmxlLmFsbFJvd3MoKTtcbiAgICBmb3IgKHZhciByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgYWxsLmxlbmd0aDsgcm93SW5kZXgrKykge1xuICAgICAgICB2YXIgcm93ID0gYWxsW3Jvd0luZGV4XTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRhYmxlLmNvbHVtbnM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgY29sdW1uID0gX2FbX2ldO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSByb3dTcGFuQ2VsbHNbY29sdW1uLmluZGV4XTtcbiAgICAgICAgICAgIGlmIChjb2xSb3dTcGFuc0xlZnQgPiAxKSB7XG4gICAgICAgICAgICAgICAgY29sUm93U3BhbnNMZWZ0LS07XG4gICAgICAgICAgICAgICAgZGVsZXRlIHJvdy5jZWxsc1tjb2x1bW4uaW5kZXhdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGRhdGEuY2VsbC5oZWlnaHQgKz0gcm93LmhlaWdodDtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5jZWxsLmhlaWdodCA+IHJvdy5tYXhDZWxsSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucm93Lm1heENlbGxIZWlnaHQgPSBkYXRhLmNlbGwuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb2xSb3dTcGFuc0xlZnQgPSBkYXRhLmNlbGwuY29sU3BhbjtcbiAgICAgICAgICAgICAgICBkZWxldGUgcm93LmNlbGxzW2NvbHVtbi5pbmRleF07XG4gICAgICAgICAgICAgICAgZGF0YS5sZWZ0LS07XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEubGVmdCA8PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByb3dTcGFuQ2VsbHNbY29sdW1uLmluZGV4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY2VsbCA9IHJvdy5jZWxsc1tjb2x1bW4uaW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmICghY2VsbCkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2VsbC5oZWlnaHQgPSByb3cuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLnJvd1NwYW4gPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZW1haW5pbmcgPSBhbGwubGVuZ3RoIC0gcm93SW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsZWZ0ID0gY2VsbC5yb3dTcGFuID4gcmVtYWluaW5nID8gcmVtYWluaW5nIDogY2VsbC5yb3dTcGFuO1xuICAgICAgICAgICAgICAgICAgICByb3dTcGFuQ2VsbHNbY29sdW1uLmluZGV4XSA9IHsgY2VsbDogY2VsbCwgbGVmdDogbGVmdCwgcm93OiByb3cgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdy5zZWN0aW9uID09PSAnaGVhZCcpIHtcbiAgICAgICAgICAgIHRhYmxlLmhlYWRIZWlnaHQgKz0gcm93Lm1heENlbGxIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdy5zZWN0aW9uID09PSAnZm9vdCcpIHtcbiAgICAgICAgICAgIHRhYmxlLmZvb3RIZWlnaHQgKz0gcm93Lm1heENlbGxIZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgdGFibGUuaGVpZ2h0ICs9IHJvdy5oZWlnaHQ7XG4gICAgfVxufVxuZnVuY3Rpb24gYXBwbHlDb2xTcGFucyh0YWJsZSkge1xuICAgIHZhciBhbGwgPSB0YWJsZS5hbGxSb3dzKCk7XG4gICAgZm9yICh2YXIgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IGFsbC5sZW5ndGg7IHJvd0luZGV4KyspIHtcbiAgICAgICAgdmFyIHJvdyA9IGFsbFtyb3dJbmRleF07XG4gICAgICAgIHZhciBjb2xTcGFuQ2VsbCA9IG51bGw7XG4gICAgICAgIHZhciBjb21iaW5lZENvbFNwYW5XaWR0aCA9IDA7XG4gICAgICAgIHZhciBjb2xTcGFuc0xlZnQgPSAwO1xuICAgICAgICBmb3IgKHZhciBjb2x1bW5JbmRleCA9IDA7IGNvbHVtbkluZGV4IDwgdGFibGUuY29sdW1ucy5sZW5ndGg7IGNvbHVtbkluZGV4KyspIHtcbiAgICAgICAgICAgIHZhciBjb2x1bW4gPSB0YWJsZS5jb2x1bW5zW2NvbHVtbkluZGV4XTtcbiAgICAgICAgICAgIHZhciBjZWxsID0gbnVsbDtcbiAgICAgICAgICAgIC8vIFdpZHRoIGFuZCBjb2xzcGFuXG4gICAgICAgICAgICBjb2xTcGFuc0xlZnQgLT0gMTtcbiAgICAgICAgICAgIGlmIChjb2xTcGFuc0xlZnQgPiAxICYmIHRhYmxlLmNvbHVtbnNbY29sdW1uSW5kZXggKyAxXSkge1xuICAgICAgICAgICAgICAgIGNvbWJpbmVkQ29sU3BhbldpZHRoICs9IGNvbHVtbi53aWR0aDtcbiAgICAgICAgICAgICAgICBkZWxldGUgcm93LmNlbGxzW2NvbHVtbi5pbmRleF07XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjb2xTcGFuQ2VsbCkge1xuICAgICAgICAgICAgICAgIGNlbGwgPSBjb2xTcGFuQ2VsbDtcbiAgICAgICAgICAgICAgICBkZWxldGUgcm93LmNlbGxzW2NvbHVtbi5pbmRleF07XG4gICAgICAgICAgICAgICAgY29sU3BhbkNlbGwgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2VsbCA9IHJvdy5jZWxsc1tjb2x1bW4uaW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmICghY2VsbClcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgY29sU3BhbnNMZWZ0ID0gY2VsbC5jb2xTcGFuO1xuICAgICAgICAgICAgICAgIGNvbWJpbmVkQ29sU3BhbldpZHRoID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbC5jb2xTcGFuID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb2xTcGFuQ2VsbCA9IGNlbGw7XG4gICAgICAgICAgICAgICAgICAgIGNvbWJpbmVkQ29sU3BhbldpZHRoICs9IGNvbHVtbi53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2VsbC53aWR0aCA9IGNvbHVtbi53aWR0aCArIGNvbWJpbmVkQ29sU3BhbldpZHRoO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gZml0Q29udGVudCh0YWJsZSkge1xuICAgIHZhciByb3dTcGFuSGVpZ2h0ID0geyBjb3VudDogMCwgaGVpZ2h0OiAwIH07XG4gICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRhYmxlLmFsbFJvd3MoKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHJvdyA9IF9hW19pXTtcbiAgICAgICAgZm9yICh2YXIgX2IgPSAwLCBfYyA9IHRhYmxlLmNvbHVtbnM7IF9iIDwgX2MubGVuZ3RoOyBfYisrKSB7XG4gICAgICAgICAgICB2YXIgY29sdW1uID0gX2NbX2JdO1xuICAgICAgICAgICAgdmFyIGNlbGwgPSByb3cuY2VsbHNbY29sdW1uLmluZGV4XTtcbiAgICAgICAgICAgIGlmICghY2VsbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGNvbW1vbl8xLmFwcGx5U3R5bGVzKGNlbGwuc3R5bGVzKTtcbiAgICAgICAgICAgIHZhciB0ZXh0U3BhY2UgPSBjZWxsLndpZHRoIC0gY2VsbC5wYWRkaW5nKCdob3Jpem9udGFsJyk7XG4gICAgICAgICAgICBpZiAoY2VsbC5zdHlsZXMub3ZlcmZsb3cgPT09ICdsaW5lYnJlYWsnKSB7XG4gICAgICAgICAgICAgICAgLy8gQWRkIG9uZSBwdCB0byB0ZXh0U3BhY2UgdG8gZml4IHJvdW5kaW5nIGVycm9yXG4gICAgICAgICAgICAgICAgY2VsbC50ZXh0ID0gc3RhdGVfMS5kZWZhdWx0KCkuZG9jLnNwbGl0VGV4dFRvU2l6ZShjZWxsLnRleHQsIHRleHRTcGFjZSArIDEgLyAoc3RhdGVfMS5kZWZhdWx0KCkuc2NhbGVGYWN0b3IoKSB8fCAxKSwgeyBmb250U2l6ZTogY2VsbC5zdHlsZXMuZm9udFNpemUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjZWxsLnN0eWxlcy5vdmVyZmxvdyA9PT0gJ2VsbGlwc2l6ZScpIHtcbiAgICAgICAgICAgICAgICBjZWxsLnRleHQgPSBjb21tb25fMS5lbGxpcHNpemUoY2VsbC50ZXh0LCB0ZXh0U3BhY2UsIGNlbGwuc3R5bGVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNlbGwuc3R5bGVzLm92ZXJmbG93ID09PSAnaGlkZGVuJykge1xuICAgICAgICAgICAgICAgIGNlbGwudGV4dCA9IGNvbW1vbl8xLmVsbGlwc2l6ZShjZWxsLnRleHQsIHRleHRTcGFjZSwgY2VsbC5zdHlsZXMsICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjZWxsLnN0eWxlcy5vdmVyZmxvdyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGNlbGwudGV4dCA9IGNlbGwuc3R5bGVzLm92ZXJmbG93KGNlbGwudGV4dCwgdGV4dFNwYWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNlbGwuY29udGVudEhlaWdodCA9IGNlbGwuZ2V0Q29udGVudEhlaWdodCgpO1xuICAgICAgICAgICAgaWYgKGNlbGwuc3R5bGVzLm1pbkNlbGxIZWlnaHQgPiBjZWxsLmNvbnRlbnRIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICBjZWxsLmNvbnRlbnRIZWlnaHQgPSBjZWxsLnN0eWxlcy5taW5DZWxsSGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHJlYWxDb250ZW50SGVpZ2h0ID0gY2VsbC5jb250ZW50SGVpZ2h0IC8gY2VsbC5yb3dTcGFuO1xuICAgICAgICAgICAgaWYgKGNlbGwucm93U3BhbiA+IDEgJiZcbiAgICAgICAgICAgICAgICByb3dTcGFuSGVpZ2h0LmNvdW50ICogcm93U3BhbkhlaWdodC5oZWlnaHQgPFxuICAgICAgICAgICAgICAgICAgICByZWFsQ29udGVudEhlaWdodCAqIGNlbGwucm93U3Bhbikge1xuICAgICAgICAgICAgICAgIHJvd1NwYW5IZWlnaHQgPSB7IGhlaWdodDogcmVhbENvbnRlbnRIZWlnaHQsIGNvdW50OiBjZWxsLnJvd1NwYW4gfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJvd1NwYW5IZWlnaHQgJiYgcm93U3BhbkhlaWdodC5jb3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocm93U3BhbkhlaWdodC5oZWlnaHQgPiByZWFsQ29udGVudEhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICByZWFsQ29udGVudEhlaWdodCA9IHJvd1NwYW5IZWlnaHQuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZWFsQ29udGVudEhlaWdodCA+IHJvdy5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICByb3cuaGVpZ2h0ID0gcmVhbENvbnRlbnRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgcm93Lm1heENlbGxIZWlnaHQgPSByZWFsQ29udGVudEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByb3dTcGFuSGVpZ2h0LmNvdW50LS07XG4gICAgfVxufVxuZnVuY3Rpb24gZGlzdHJpYnV0ZVdpZHRoKGF1dG9Db2x1bW5zLCBhdmFpbGFibGVTcGFjZSwgd3JhcHBlZEF1dG9Db2x1bW5zV2lkdGgpIHtcbiAgICB2YXIgZGlmZldpZHRoID0gYXZhaWxhYmxlU3BhY2UgLSB3cmFwcGVkQXV0b0NvbHVtbnNXaWR0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF1dG9Db2x1bW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjb2x1bW4gPSBhdXRvQ29sdW1uc1tpXTtcbiAgICAgICAgdmFyIHJhdGlvID0gY29sdW1uLndyYXBwZWRXaWR0aCAvIHdyYXBwZWRBdXRvQ29sdW1uc1dpZHRoO1xuICAgICAgICB2YXIgc3VnZ2VzdGVkQ2hhbmdlID0gZGlmZldpZHRoICogcmF0aW87XG4gICAgICAgIHZhciBzdWdnZXN0ZWRXaWR0aCA9IGNvbHVtbi53cmFwcGVkV2lkdGggKyBzdWdnZXN0ZWRDaGFuZ2U7XG4gICAgICAgIHZhciBoYXNDdXN0b21XaWR0aCA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gc3RhdGVfMS5kZWZhdWx0KCkudGFibGUuYWxsUm93cygpOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIHJvdyA9IF9hW19pXTtcbiAgICAgICAgICAgIHZhciBjZWxsID0gcm93LmNlbGxzW2NvbHVtbi5pbmRleF07XG4gICAgICAgICAgICBpZiAoY2VsbCAmJiB0eXBlb2YgY2VsbC5zdHlsZXMuY2VsbFdpZHRoID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgIGhhc0N1c3RvbVdpZHRoID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3VnZ2VzdGVkV2lkdGggPCBjb2x1bW4ubWluV2lkdGggfHwgaGFzQ3VzdG9tV2lkdGgpIHtcbiAgICAgICAgICAgIC8vIEFkZCAxIHRvIG1pbldpZHRoIGFzIGxpbmVicmVha3MgY2FsYyBvdGhlcndpc2Ugc29tZXRpbWVzIG1hZGUgdHdvIHJvd3NcbiAgICAgICAgICAgIGNvbHVtbi53aWR0aCA9IGNvbHVtbi5taW5XaWR0aCArIDEgLyBzdGF0ZV8xLmRlZmF1bHQoKS5zY2FsZUZhY3RvcigpO1xuICAgICAgICAgICAgd3JhcHBlZEF1dG9Db2x1bW5zV2lkdGggLT0gY29sdW1uLndyYXBwZWRXaWR0aDtcbiAgICAgICAgICAgIGF2YWlsYWJsZVNwYWNlIC09IGNvbHVtbi53aWR0aDtcbiAgICAgICAgICAgIGF1dG9Db2x1bW5zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIGRpc3RyaWJ1dGVXaWR0aChhdXRvQ29sdW1ucywgYXZhaWxhYmxlU3BhY2UsIHdyYXBwZWRBdXRvQ29sdW1uc1dpZHRoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNvbHVtbi53aWR0aCA9IHN1Z2dlc3RlZFdpZHRoO1xuICAgIH1cbn1cblxuXG4vKioqLyB9KSxcbi8qIDEyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgX19zcHJlYWRBcnJheXMgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXlzKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xuICAgIHJldHVybiByO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBtb2RlbHNfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG52YXIgY29uZmlnXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xudmFyIGh0bWxQYXJzZXJfMSA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG52YXIgcG9seWZpbGxzXzEgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIGNvbW1vbl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbnZhciBzdGF0ZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBpbnB1dFZhbGlkYXRvcl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG4vKipcbiAqIENyZWF0ZSBtb2RlbHMgZnJvbSB0aGUgdXNlciBpbnB1dFxuICovXG5mdW5jdGlvbiBwYXJzZUlucHV0KGFyZ3MpIHtcbiAgICB2YXIgdGFibGVPcHRpb25zID0gcGFyc2VVc2VyQXJndW1lbnRzKGFyZ3MpO1xuICAgIHZhciBnbG9iYWxPcHRpb25zID0gc3RhdGVfMS5nZXRHbG9iYWxPcHRpb25zKCk7XG4gICAgdmFyIGRvY3VtZW50T3B0aW9ucyA9IHN0YXRlXzEuZ2V0RG9jdW1lbnRPcHRpb25zKCk7XG4gICAgdmFyIGFsbE9wdGlvbnMgPSBbZ2xvYmFsT3B0aW9ucywgZG9jdW1lbnRPcHRpb25zLCB0YWJsZU9wdGlvbnNdO1xuICAgIGlucHV0VmFsaWRhdG9yXzEuZGVmYXVsdChhbGxPcHRpb25zKTtcbiAgICB2YXIgdGFibGUgPSBuZXcgbW9kZWxzXzEuVGFibGUoKTtcbiAgICBzdGF0ZV8xLmRlZmF1bHQoKS50YWJsZSA9IHRhYmxlO1xuICAgIHRhYmxlLmlkID0gdGFibGVPcHRpb25zLnRhYmxlSWQ7XG4gICAgdmFyIGRvYyA9IHN0YXRlXzEuZGVmYXVsdCgpLmRvYztcbiAgICB0YWJsZS51c2VyU3R5bGVzID0ge1xuICAgICAgICAvLyBTZXR0aW5nIHRvIGJsYWNrIGZvciB2ZXJzaW9ucyBvZiBqc3BkZiB3aXRob3V0IGdldFRleHRDb2xvclxuICAgICAgICB0ZXh0Q29sb3I6IGRvYy5nZXRUZXh0Q29sb3IgPyBkb2MuZ2V0VGV4dENvbG9yKCkgOiAwLFxuICAgICAgICBmb250U2l6ZTogZG9jLmludGVybmFsLmdldEZvbnRTaXplKCksXG4gICAgICAgIGZvbnRTdHlsZTogZG9jLmludGVybmFsLmdldEZvbnQoKS5mb250U3R5bGUsXG4gICAgICAgIGZvbnQ6IGRvYy5pbnRlcm5hbC5nZXRGb250KCkuZm9udE5hbWUsXG4gICAgfTtcbiAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChzdHlsZVByb3ApIHtcbiAgICAgICAgdmFyIHN0eWxlcyA9IGFsbE9wdGlvbnMubWFwKGZ1bmN0aW9uIChvcHRzKSB7IHJldHVybiBvcHRzW3N0eWxlUHJvcF0gfHwge307IH0pO1xuICAgICAgICB0YWJsZS5zdHlsZXNbc3R5bGVQcm9wXSA9IHBvbHlmaWxsc18xLmFzc2lnbi5hcHBseSh2b2lkIDAsIF9fc3ByZWFkQXJyYXlzKFt7fV0sIHN0eWxlcykpO1xuICAgIH07XG4gICAgLy8gTWVyZ2Ugc3R5bGVzIG9uZSBsZXZlbCBkZWVwZXJcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gT2JqZWN0LmtleXModGFibGUuc3R5bGVzKTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHN0eWxlUHJvcCA9IF9hW19pXTtcbiAgICAgICAgX2xvb3BfMShzdHlsZVByb3ApO1xuICAgIH1cbiAgICAvLyBBcHBlbmQgaG9va3NcbiAgICBmb3IgKHZhciBfYiA9IDAsIGFsbE9wdGlvbnNfMSA9IGFsbE9wdGlvbnM7IF9iIDwgYWxsT3B0aW9uc18xLmxlbmd0aDsgX2IrKykge1xuICAgICAgICB2YXIgb3B0cyA9IGFsbE9wdGlvbnNfMVtfYl07XG4gICAgICAgIGZvciAodmFyIF9jID0gMCwgX2QgPSBPYmplY3Qua2V5cyh0YWJsZS5jZWxsSG9va3MpOyBfYyA8IF9kLmxlbmd0aDsgX2MrKykge1xuICAgICAgICAgICAgdmFyIGhvb2tOYW1lID0gX2RbX2NdO1xuICAgICAgICAgICAgaWYgKG9wdHMgJiYgdHlwZW9mIG9wdHNbaG9va05hbWVdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGFibGUuY2VsbEhvb2tzW2hvb2tOYW1lXS5wdXNoKG9wdHNbaG9va05hbWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB0YWJsZS5zZXR0aW5ncyA9IHBvbHlmaWxsc18xLmFzc2lnbi5hcHBseSh2b2lkIDAsIF9fc3ByZWFkQXJyYXlzKFt7fSwgY29uZmlnXzEuZGVmYXVsdENvbmZpZygpXSwgYWxsT3B0aW9ucykpO1xuICAgIHRhYmxlLnNldHRpbmdzLm1hcmdpbiA9IGNvbW1vbl8xLm1hcmdpbk9yUGFkZGluZyh0YWJsZS5zZXR0aW5ncy5tYXJnaW4sIGNvbmZpZ18xLmRlZmF1bHRDb25maWcoKS5tYXJnaW4pO1xuICAgIGlmICh0YWJsZS5zZXR0aW5ncy50aGVtZSA9PT0gJ2F1dG8nKSB7XG4gICAgICAgIHRhYmxlLnNldHRpbmdzLnRoZW1lID0gdGFibGUuc2V0dGluZ3MudXNlQ3NzID8gJ3BsYWluJyA6ICdzdHJpcGVkJztcbiAgICB9XG4gICAgaWYgKHRhYmxlLnNldHRpbmdzLnN0YXJ0WSA9PT0gZmFsc2UpIHtcbiAgICAgICAgZGVsZXRlIHRhYmxlLnNldHRpbmdzLnN0YXJ0WTtcbiAgICB9XG4gICAgdmFyIHByZXZpb3VzID0gc3RhdGVfMS5kZWZhdWx0KCkuZG9jLnByZXZpb3VzQXV0b1RhYmxlO1xuICAgIHZhciBpc1NhbWVQYWdlQXNQcmV2aW91cyA9IHByZXZpb3VzICYmXG4gICAgICAgIHByZXZpb3VzLnN0YXJ0UGFnZU51bWJlciArIHByZXZpb3VzLnBhZ2VOdW1iZXIgLSAxID09PSBzdGF0ZV8xLmRlZmF1bHQoKS5wYWdlTnVtYmVyKCk7XG4gICAgaWYgKHRhYmxlLnNldHRpbmdzLnN0YXJ0WSA9PSBudWxsICYmIGlzU2FtZVBhZ2VBc1ByZXZpb3VzKSB7XG4gICAgICAgIHRhYmxlLnNldHRpbmdzLnN0YXJ0WSA9IHByZXZpb3VzLmZpbmFsWSArIDIwIC8gc3RhdGVfMS5kZWZhdWx0KCkuc2NhbGVGYWN0b3IoKTtcbiAgICB9XG4gICAgdmFyIGh0bWxDb250ZW50ID0ge307XG4gICAgaWYgKHRhYmxlLnNldHRpbmdzLmh0bWwpIHtcbiAgICAgICAgaHRtbENvbnRlbnQgPVxuICAgICAgICAgICAgaHRtbFBhcnNlcl8xLnBhcnNlSHRtbCh0YWJsZS5zZXR0aW5ncy5odG1sLCB0YWJsZS5zZXR0aW5ncy5pbmNsdWRlSGlkZGVuSHRtbCwgdGFibGUuc2V0dGluZ3MudXNlQ3NzKSB8fCB7fTtcbiAgICB9XG4gICAgdGFibGUuc2V0dGluZ3MuaGVhZCA9IGh0bWxDb250ZW50LmhlYWQgfHwgdGFibGUuc2V0dGluZ3MuaGVhZCB8fCBbXTtcbiAgICB0YWJsZS5zZXR0aW5ncy5ib2R5ID0gaHRtbENvbnRlbnQuYm9keSB8fCB0YWJsZS5zZXR0aW5ncy5ib2R5IHx8IFtdO1xuICAgIHRhYmxlLnNldHRpbmdzLmZvb3QgPSBodG1sQ29udGVudC5mb290IHx8IHRhYmxlLnNldHRpbmdzLmZvb3QgfHwgW107XG4gICAgcGFyc2VDb250ZW50KHRhYmxlKTtcbiAgICB0YWJsZS5taW5XaWR0aCA9IHRhYmxlLmNvbHVtbnMucmVkdWNlKGZ1bmN0aW9uICh0b3RhbCwgY29sKSB7IHJldHVybiB0b3RhbCArIGNvbC5taW5XaWR0aDsgfSwgMCk7XG4gICAgdGFibGUud3JhcHBlZFdpZHRoID0gdGFibGUuY29sdW1ucy5yZWR1Y2UoZnVuY3Rpb24gKHRvdGFsLCBjb2wpIHsgcmV0dXJuIHRvdGFsICsgY29sLndyYXBwZWRXaWR0aDsgfSwgMCk7XG4gICAgaWYgKHR5cGVvZiB0YWJsZS5zZXR0aW5ncy50YWJsZVdpZHRoID09PSAnbnVtYmVyJykge1xuICAgICAgICB0YWJsZS53aWR0aCA9IHRhYmxlLnNldHRpbmdzLnRhYmxlV2lkdGg7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRhYmxlLnNldHRpbmdzLnRhYmxlV2lkdGggPT09ICd3cmFwJykge1xuICAgICAgICB0YWJsZS53aWR0aCA9IHRhYmxlLndyYXBwZWRXaWR0aDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRhYmxlLndpZHRoID1cbiAgICAgICAgICAgIHN0YXRlXzEuZGVmYXVsdCgpLnBhZ2VXaWR0aCgpIC0gdGFibGUubWFyZ2luKCdsZWZ0JykgLSB0YWJsZS5tYXJnaW4oJ3JpZ2h0Jyk7XG4gICAgfVxuICAgIHJldHVybiB0YWJsZTtcbn1cbmV4cG9ydHMucGFyc2VJbnB1dCA9IHBhcnNlSW5wdXQ7XG5mdW5jdGlvbiBwYXJzZVVzZXJBcmd1bWVudHMoYXJncykge1xuICAgIC8vIE5vcm1hbCBpbml0aWFsaXphdGlvbiBvbiBmb3JtYXQgZG9jLmF1dG9UYWJsZShvcHRpb25zKVxuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gYXJnc1swXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIERlcHJlY2F0ZWQgaW5pdGlhbGl6YXRpb24gb24gZm9ybWF0IGRvYy5hdXRvVGFibGUoY29sdW1ucywgYm9keSwgW29wdGlvbnNdKVxuICAgICAgICB2YXIgb3B0cyA9IGFyZ3NbMl0gfHwge307XG4gICAgICAgIG9wdHMuYm9keSA9IGFyZ3NbMV07XG4gICAgICAgIG9wdHMuY29sdW1ucyA9IGFyZ3NbMF07XG4gICAgICAgIG9wdHMuY29sdW1ucy5mb3JFYWNoKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgICAgIC8vIFN1cHBvcnQgdjIgdGl0bGUgcHJvcCBpbiB2M1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb2wgPT09ICdvYmplY3QnICYmIGNvbC5oZWFkZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbC5oZWFkZXIgPSBjb2wudGl0bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3B0cztcbiAgICB9XG59XG5mdW5jdGlvbiBwYXJzZUNvbnRlbnQodGFibGUpIHtcbiAgICB2YXIgc2V0dGluZ3MgPSB0YWJsZS5zZXR0aW5ncztcbiAgICB0YWJsZS5jb2x1bW5zID0gZ2V0VGFibGVDb2x1bW5zKHNldHRpbmdzKTtcbiAgICB2YXIgX2xvb3BfMiA9IGZ1bmN0aW9uIChzZWN0aW9uTmFtZSkge1xuICAgICAgICB2YXIgcm93U3BhbnNMZWZ0Rm9yQ29sdW1uID0ge307XG4gICAgICAgIHZhciBzZWN0aW9uUm93cyA9IHNldHRpbmdzW3NlY3Rpb25OYW1lXTtcbiAgICAgICAgaWYgKHNlY3Rpb25Sb3dzLmxlbmd0aCA9PT0gMCAmJlxuICAgICAgICAgICAgc2V0dGluZ3MuY29sdW1ucyAmJlxuICAgICAgICAgICAgc2VjdGlvbk5hbWUgIT09ICdib2R5Jykge1xuICAgICAgICAgICAgLy8gSWYgbm8gaGVhZCBvciBmb290IGlzIHNldCwgdHJ5IGdlbmVyYXRpbmcgb25lIHdpdGggY29udGVudCBpbiBjb2x1bW5zXG4gICAgICAgICAgICB2YXIgc2VjdGlvblJvdyA9IGdlbmVyYXRlU2VjdGlvblJvd0Zyb21Db2x1bW5EYXRhKHRhYmxlLCBzZWN0aW9uTmFtZSk7XG4gICAgICAgICAgICBpZiAoc2VjdGlvblJvdykge1xuICAgICAgICAgICAgICAgIHNlY3Rpb25Sb3dzLnB1c2goc2VjdGlvblJvdyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc2VjdGlvblJvd3MuZm9yRWFjaChmdW5jdGlvbiAocmF3Um93LCByb3dJbmRleCkge1xuICAgICAgICAgICAgdmFyIHNraXBwZWRSb3dGb3JSb3dTcGFucyA9IDA7XG4gICAgICAgICAgICB2YXIgcm93ID0gbmV3IG1vZGVsc18xLlJvdyhyYXdSb3csIHJvd0luZGV4LCBzZWN0aW9uTmFtZSk7XG4gICAgICAgICAgICB0YWJsZVtzZWN0aW9uTmFtZV0ucHVzaChyb3cpO1xuICAgICAgICAgICAgdmFyIGNvbFNwYW5zQWRkZWQgPSAwO1xuICAgICAgICAgICAgdmFyIGNvbHVtblNwYW5zTGVmdCA9IDA7XG4gICAgICAgICAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gdGFibGUuY29sdW1uczsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY29sdW1uID0gX2FbX2ldO1xuICAgICAgICAgICAgICAgIGlmIChyb3dTcGFuc0xlZnRGb3JDb2x1bW5bY29sdW1uLmluZGV4XSA9PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICAgIHJvd1NwYW5zTGVmdEZvckNvbHVtbltjb2x1bW4uaW5kZXhdLmxlZnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbHVtblNwYW5zTGVmdCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJhd0NlbGwgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyYXdSb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3Q2VsbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd1Jvd1tjb2x1bW4uaW5kZXggLSBjb2xTcGFuc0FkZGVkIC0gc2tpcHBlZFJvd0ZvclJvd1NwYW5zXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd0NlbGwgPSByYXdSb3dbY29sdW1uLmRhdGFLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0eWxlcyA9IGNlbGxTdHlsZXMoc2VjdGlvbk5hbWUsIGNvbHVtbiwgcm93SW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNlbGwgPSBuZXcgbW9kZWxzXzEuQ2VsbChyYXdDZWxsLCBzdHlsZXMsIHNlY3Rpb25OYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRhdGFLZXkgaXMgbm90IHVzZWQgaW50ZXJuYWxseSBhbnltb3JlIGJ1dCBrZWVwIGZvciBiYWNrd2FyZHMgY29tcGF0IGluIGhvb2tzXG4gICAgICAgICAgICAgICAgICAgICAgICByb3cuY2VsbHNbY29sdW1uLmRhdGFLZXldID0gY2VsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5jZWxsc1tjb2x1bW4uaW5kZXhdID0gY2VsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblNwYW5zTGVmdCA9IGNlbGwuY29sU3BhbiAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3dTcGFuc0xlZnRGb3JDb2x1bW5bY29sdW1uLmluZGV4XSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiBjZWxsLnJvd1NwYW4gLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVzOiBjb2x1bW5TcGFuc0xlZnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uU3BhbnNMZWZ0LS07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xTcGFuc0FkZGVkKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvd1NwYW5zTGVmdEZvckNvbHVtbltjb2x1bW4uaW5kZXhdLmxlZnQtLTtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uU3BhbnNMZWZ0ID0gcm93U3BhbnNMZWZ0Rm9yQ29sdW1uW2NvbHVtbi5pbmRleF0udGltZXM7XG4gICAgICAgICAgICAgICAgICAgIHNraXBwZWRSb3dGb3JSb3dTcGFucysrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBmb3IgKHZhciBfaSA9IDAsIF9hID0gWydoZWFkJywgJ2JvZHknLCAnZm9vdCddOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgc2VjdGlvbk5hbWUgPSBfYVtfaV07XG4gICAgICAgIF9sb29wXzIoc2VjdGlvbk5hbWUpO1xuICAgIH1cbiAgICB0YWJsZS5hbGxSb3dzKCkuZm9yRWFjaChmdW5jdGlvbiAocm93KSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0YWJsZS5jb2x1bW5zOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGNvbHVtbiA9IF9hW19pXTtcbiAgICAgICAgICAgIHZhciBjZWxsID0gcm93LmNlbGxzW2NvbHVtbi5pbmRleF07XG4gICAgICAgICAgICBpZiAoIWNlbGwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB0YWJsZS5jYWxsQ2VsbEhvb2tzKHRhYmxlLmNlbGxIb29rcy5kaWRQYXJzZUNlbGwsIGNlbGwsIHJvdywgY29sdW1uKTtcbiAgICAgICAgICAgIGNlbGwuY29udGVudFdpZHRoID1cbiAgICAgICAgICAgICAgICBjZWxsLnBhZGRpbmcoJ2hvcml6b250YWwnKSArIGNvbW1vbl8xLmdldFN0cmluZ1dpZHRoKGNlbGwudGV4dCwgY2VsbC5zdHlsZXMpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjZWxsLnN0eWxlcy5jZWxsV2lkdGggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5taW5XaWR0aCA9IGNlbGwuc3R5bGVzLmNlbGxXaWR0aDtcbiAgICAgICAgICAgICAgICBjZWxsLndyYXBwZWRXaWR0aCA9IGNlbGwuc3R5bGVzLmNlbGxXaWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNlbGwuc3R5bGVzLmNlbGxXaWR0aCA9PT0gJ3dyYXAnKSB7XG4gICAgICAgICAgICAgICAgY2VsbC5taW5XaWR0aCA9IGNlbGwuY29udGVudFdpZHRoO1xuICAgICAgICAgICAgICAgIGNlbGwud3JhcHBlZFdpZHRoID0gY2VsbC5jb250ZW50V2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBhdXRvXG4gICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRNaW5XaWR0aCA9IDEwIC8gc3RhdGVfMS5kZWZhdWx0KCkuc2NhbGVGYWN0b3IoKTtcbiAgICAgICAgICAgICAgICBjZWxsLm1pbldpZHRoID0gY2VsbC5zdHlsZXMubWluQ2VsbFdpZHRoIHx8IGRlZmF1bHRNaW5XaWR0aDtcbiAgICAgICAgICAgICAgICBjZWxsLndyYXBwZWRXaWR0aCA9IGNlbGwuY29udGVudFdpZHRoO1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLm1pbldpZHRoID4gY2VsbC53cmFwcGVkV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC53cmFwcGVkV2lkdGggPSBjZWxsLm1pbldpZHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHRhYmxlLmFsbFJvd3MoKS5mb3JFYWNoKGZ1bmN0aW9uIChyb3cpIHtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCBfYSA9IHRhYmxlLmNvbHVtbnM7IF9pIDwgX2EubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICB2YXIgY29sdW1uID0gX2FbX2ldO1xuICAgICAgICAgICAgdmFyIGNlbGwgPSByb3cuY2VsbHNbY29sdW1uLmluZGV4XTtcbiAgICAgICAgICAgIC8vIEZvciBub3cgd2UgaWdub3JlIHRoZSBtaW5XaWR0aCBhbmQgd3JhcHBlZFdpZHRoIG9mIGNvbHNwYW4gY2VsbHMgd2hlbiBjYWxjdWxhdGluZyBjb2xzcGFuIHdpZHRocy5cbiAgICAgICAgICAgIC8vIENvdWxkIHByb2JhYmx5IGJlIGltcHJvdmVkIHVwb24gaG93ZXZlci5cbiAgICAgICAgICAgIGlmIChjZWxsICYmIGNlbGwuY29sU3BhbiA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGlmIChjZWxsLndyYXBwZWRXaWR0aCA+IGNvbHVtbi53cmFwcGVkV2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uLndyYXBwZWRXaWR0aCA9IGNlbGwud3JhcHBlZFdpZHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2VsbC5taW5XaWR0aCA+IGNvbHVtbi5taW5XaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4ubWluV2lkdGggPSBjZWxsLm1pbldpZHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFJlc3BlY3QgY2VsbFdpZHRoIHNldCBpbiBjb2x1bW5TdHlsZXMgZXZlbiBpZiB0aGVyZSBpcyBubyBjZWxscyBmb3IgdGhpcyBjb2x1bW5cbiAgICAgICAgICAgICAgICAvLyBvciBvZiBpdCB0aGUgY29sdW1uIG9ubHkgaGF2ZSBjb2xzcGFuIGNlbGxzLiBTaW5jZSB0aGUgd2lkdGggb2YgY29sc3BhbiBjZWxsc1xuICAgICAgICAgICAgICAgIC8vIGRvZXMgbm90IGFmZmVjdCB0aGUgd2lkdGggb2YgY29sdW1ucywgc2V0dGluZyBjb2x1bW5TdHlsZXMgY2VsbFdpZHRoIGVuYWJsZXMgdGhlXG4gICAgICAgICAgICAgICAgLy8gdXNlciB0byBhdCBsZWFzdCBkbyBpdCBtYW51YWxseS5cbiAgICAgICAgICAgICAgICAvLyBOb3RlIHRoYXQgdGhpcyBpcyBub3QgcGVyZmVjdCBmb3Igbm93IHNpbmNlIGZvciBleGFtcGxlIHJvdyBhbmQgdGFibGUgc3R5bGVzIGFyZVxuICAgICAgICAgICAgICAgIC8vIG5vdCBhY2NvdW50ZWQgZm9yXG4gICAgICAgICAgICAgICAgdmFyIGNvbHVtblN0eWxlcyA9IHRhYmxlLnN0eWxlcy5jb2x1bW5TdHlsZXNbY29sdW1uLmRhdGFLZXldIHx8XG4gICAgICAgICAgICAgICAgICAgIHRhYmxlLnN0eWxlcy5jb2x1bW5TdHlsZXNbY29sdW1uLmluZGV4XSB8fFxuICAgICAgICAgICAgICAgICAgICB7fTtcbiAgICAgICAgICAgICAgICB2YXIgY2VsbFdpZHRoID0gY29sdW1uU3R5bGVzLmNlbGxXaWR0aDtcbiAgICAgICAgICAgICAgICBpZiAoY2VsbFdpZHRoICYmIHR5cGVvZiBjZWxsV2lkdGggPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi5taW5XaWR0aCA9IGNlbGxXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uLndyYXBwZWRXaWR0aCA9IGNlbGxXaWR0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2VsbCkge1xuICAgICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBhbGwgY29sdW1ucyBnZXQgYXQgbGVhc3QgbWluIHdpZHRoIGV2ZW4gdGhvdWdoIHdpZHRoIGNhbGN1bGF0aW9ucyBhcmUgbm90IGJhc2VkIG9uIHRoZW1cbiAgICAgICAgICAgICAgICBpZiAoY2VsbC5jb2xTcGFuID4gMSAmJiAhY29sdW1uLm1pbldpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi5taW5XaWR0aCA9IGNlbGwubWluV2lkdGg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjZWxsLmNvbFNwYW4gPiAxICYmICFjb2x1bW4ud3JhcHBlZFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi53cmFwcGVkV2lkdGggPSBjZWxsLm1pbldpZHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YWJsZS5jYWxsQ2VsbEhvb2tzKHRhYmxlLmNlbGxIb29rcy5kaWRQYXJzZUNlbGwsIGNlbGwsIHJvdywgY29sdW1uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVTZWN0aW9uUm93RnJvbUNvbHVtbkRhdGEodGFibGUsIHNlY3Rpb25OYW1lKSB7XG4gICAgdmFyIHNlY3Rpb25Sb3cgPSB7fTtcbiAgICB0YWJsZS5jb2x1bW5zLmZvckVhY2goZnVuY3Rpb24gKGNvbCkge1xuICAgICAgICB2YXIgY29sdW1uRGF0YSA9IGNvbC5yYXc7XG4gICAgICAgIGlmIChzZWN0aW9uTmFtZSA9PT0gJ2hlYWQnKSB7XG4gICAgICAgICAgICB2YXIgdmFsID0gY29sdW1uRGF0YSAmJiBjb2x1bW5EYXRhLmhlYWRlciA/IGNvbHVtbkRhdGEuaGVhZGVyIDogY29sdW1uRGF0YTtcbiAgICAgICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICAgICAgICBzZWN0aW9uUm93W2NvbC5kYXRhS2V5XSA9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzZWN0aW9uTmFtZSA9PT0gJ2Zvb3QnICYmIGNvbHVtbkRhdGEuZm9vdGVyKSB7XG4gICAgICAgICAgICBzZWN0aW9uUm93W2NvbC5kYXRhS2V5XSA9IGNvbHVtbkRhdGEuZm9vdGVyO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHNlY3Rpb25Sb3cpLmxlbmd0aCA+IDAgPyBzZWN0aW9uUm93IDogbnVsbDtcbn1cbmZ1bmN0aW9uIGdldFRhYmxlQ29sdW1ucyhzZXR0aW5ncykge1xuICAgIGlmIChzZXR0aW5ncy5jb2x1bW5zKSB7XG4gICAgICAgIHZhciBjb2xzID0gc2V0dGluZ3MuY29sdW1ucy5tYXAoZnVuY3Rpb24gKGlucHV0LCBpbmRleCkge1xuICAgICAgICAgICAgdmFyIGtleSA9IGlucHV0LmRhdGFLZXkgfHwgaW5wdXQua2V5IHx8IGluZGV4O1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBtb2RlbHNfMS5Db2x1bW4oa2V5LCBpbnB1dCwgaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvbHM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZmlyc3RSb3dfMSA9IHNldHRpbmdzLmhlYWRbMF0gfHwgc2V0dGluZ3MuYm9keVswXSB8fCBzZXR0aW5ncy5mb290WzBdIHx8IFtdO1xuICAgICAgICB2YXIgY29sdW1uc18xID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKGZpcnN0Um93XzEpXG4gICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gJ19lbGVtZW50JzsgfSlcbiAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHZhciBjb2xTcGFuID0gZmlyc3RSb3dfMVtrZXldICYmIGZpcnN0Um93XzFba2V5XS5jb2xTcGFuID8gZmlyc3RSb3dfMVtrZXldLmNvbFNwYW4gOiAxO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb2xTcGFuOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZmlyc3RSb3dfMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWQgPSBjb2x1bW5zXzEubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWQgPSBrZXkgKyAoaSA+IDAgPyBcIl9cIiArIGkgOiAnJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbHVtbnNfMS5wdXNoKG5ldyBtb2RlbHNfMS5Db2x1bW4oaWQsIGlkLCBjb2x1bW5zXzEubGVuZ3RoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29sdW1uc18xO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNlbGxTdHlsZXMoc2VjdGlvbk5hbWUsIGNvbHVtbiwgcm93SW5kZXgpIHtcbiAgICB2YXIgdGFibGUgPSBzdGF0ZV8xLmRlZmF1bHQoKS50YWJsZTtcbiAgICB2YXIgdGhlbWUgPSBjb25maWdfMS5nZXRUaGVtZSh0YWJsZS5zZXR0aW5ncy50aGVtZSk7XG4gICAgdmFyIG90aGVyU3R5bGVzID0gW1xuICAgICAgICB0aGVtZS50YWJsZSxcbiAgICAgICAgdGhlbWVbc2VjdGlvbk5hbWVdLFxuICAgICAgICB0YWJsZS5zdHlsZXMuc3R5bGVzLFxuICAgICAgICB0YWJsZS5zdHlsZXNbc2VjdGlvbk5hbWUgKyBcIlN0eWxlc1wiXSxcbiAgICBdO1xuICAgIHZhciBjb2x1bW5TdHlsZXMgPSB0YWJsZS5zdHlsZXMuY29sdW1uU3R5bGVzW2NvbHVtbi5kYXRhS2V5XSB8fFxuICAgICAgICB0YWJsZS5zdHlsZXMuY29sdW1uU3R5bGVzW2NvbHVtbi5pbmRleF0gfHxcbiAgICAgICAge307XG4gICAgdmFyIGNvbFN0eWxlcyA9IHNlY3Rpb25OYW1lID09PSAnYm9keScgPyBjb2x1bW5TdHlsZXMgOiB7fTtcbiAgICB2YXIgcm93U3R5bGVzID0gc2VjdGlvbk5hbWUgPT09ICdib2R5JyAmJiByb3dJbmRleCAlIDIgPT09IDBcbiAgICAgICAgPyBwb2x5ZmlsbHNfMS5hc3NpZ24oe30sIHRoZW1lLmFsdGVybmF0ZVJvdywgdGFibGUuc3R5bGVzLmFsdGVybmF0ZVJvd1N0eWxlcylcbiAgICAgICAgOiB7fTtcbiAgICByZXR1cm4gcG9seWZpbGxzXzEuYXNzaWduLmFwcGx5KHZvaWQgMCwgX19zcHJlYWRBcnJheXMoW2NvbmZpZ18xLmRlZmF1bHRTdHlsZXMoKV0sIF9fc3ByZWFkQXJyYXlzKG90aGVyU3R5bGVzLCBbcm93U3R5bGVzLCBjb2xTdHlsZXNdKSkpO1xufVxuXG5cbi8qKiovIH0pLFxuLyogMTMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIExpbWl0YXRpb25zXG4vLyAtIE5vIHN1cHBvcnQgZm9yIGJvcmRlciBzcGFjaW5nXG4vLyAtIE5vIHN1cHBvcnQgZm9yIHRyYW5zcGFyZW5jeVxudmFyIGNvbW1vbl8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbnZhciBzdGF0ZV8xID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbmZ1bmN0aW9uIHBhcnNlQ3NzKGVsZW1lbnQsIHNjYWxlRmFjdG9yLCBpZ25vcmVkKSB7XG4gICAgaWYgKGlnbm9yZWQgPT09IHZvaWQgMCkgeyBpZ25vcmVkID0gW107IH1cbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgZnVuY3Rpb24gYXNzaWduKG5hbWUsIHZhbHVlLCBhY2NlcHRlZCkge1xuICAgICAgICBpZiAoYWNjZXB0ZWQgPT09IHZvaWQgMCkgeyBhY2NlcHRlZCA9IFtdOyB9XG4gICAgICAgIGlmICgoYWNjZXB0ZWQubGVuZ3RoID09PSAwIHx8IGFjY2VwdGVkLmluZGV4T2YodmFsdWUpICE9PSAtMSkgJiZcbiAgICAgICAgICAgIGlnbm9yZWQuaW5kZXhPZihuYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gMCB8fCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtuYW1lXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBweFNjYWxlRmFjdG9yID0gOTYgLyA3MjtcbiAgICBhc3NpZ24oJ2ZpbGxDb2xvcicsIHBhcnNlQ29sb3IoZWxlbWVudCwgJ2JhY2tncm91bmRDb2xvcicpKTtcbiAgICBhc3NpZ24oJ2ZvbnRTdHlsZScsIHBhcnNlRm9udFN0eWxlKHN0eWxlKSk7XG4gICAgYXNzaWduKCd0ZXh0Q29sb3InLCBwYXJzZUNvbG9yKGVsZW1lbnQsICdjb2xvcicpKTtcbiAgICBhc3NpZ24oJ2hhbGlnbicsIHN0eWxlLnRleHRBbGlnbiwgWydsZWZ0JywgJ3JpZ2h0JywgJ2NlbnRlcicsICdqdXN0aWZ5J10pO1xuICAgIGFzc2lnbigndmFsaWduJywgc3R5bGUudmVydGljYWxBbGlnbiwgWydtaWRkbGUnLCAnYm90dG9tJywgJ3RvcCddKTtcbiAgICBhc3NpZ24oJ2ZvbnRTaXplJywgcGFyc2VJbnQoc3R5bGUuZm9udFNpemUgfHwgJycpIC8gcHhTY2FsZUZhY3Rvcik7XG4gICAgYXNzaWduKCdjZWxsUGFkZGluZycsIHBhcnNlUGFkZGluZyhbXG4gICAgICAgIHN0eWxlLnBhZGRpbmdUb3AsXG4gICAgICAgIHN0eWxlLnBhZGRpbmdSaWdodCxcbiAgICAgICAgc3R5bGUucGFkZGluZ0JvdHRvbSxcbiAgICAgICAgc3R5bGUucGFkZGluZ0xlZnQsXG4gICAgXSwgc3R5bGUuZm9udFNpemUsIHN0eWxlLmxpbmVIZWlnaHQsIHNjYWxlRmFjdG9yKSk7XG4gICAgLy8gc3R5bGUuYm9yZGVyV2lkdGggb25seSB3b3JrcyBpbiBjaHJvbWUgKGJvcmRlclRvcFdpZHRoIGV0YyB3b3JrcyBpbiBmaXJlZm94IGFuZCBpZSBhcyB3ZWxsKVxuICAgIGFzc2lnbignbGluZVdpZHRoJywgcGFyc2VJbnQoc3R5bGUuYm9yZGVyVG9wV2lkdGggfHwgJycpIC8gcHhTY2FsZUZhY3RvciAvIHNjYWxlRmFjdG9yKTtcbiAgICBhc3NpZ24oJ2xpbmVDb2xvcicsIHBhcnNlQ29sb3IoZWxlbWVudCwgJ2JvcmRlclRvcENvbG9yJykpO1xuICAgIHZhciBmb250ID0gKHN0eWxlLmZvbnRGYW1pbHkgfHwgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKHN0YXRlXzEuZGVmYXVsdCgpLmRvYy5nZXRGb250TGlzdCgpW2ZvbnRdKSB7XG4gICAgICAgIGFzc2lnbignZm9udCcsIGZvbnQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZUNzcyA9IHBhcnNlQ3NzO1xuZnVuY3Rpb24gcGFyc2VGb250U3R5bGUoc3R5bGUpIHtcbiAgICB2YXIgcmVzID0gJyc7XG4gICAgaWYgKHN0eWxlLmZvbnRXZWlnaHQgPT09ICdib2xkJyB8fFxuICAgICAgICBzdHlsZS5mb250V2VpZ2h0ID09PSAnYm9sZGVyJyB8fFxuICAgICAgICBwYXJzZUludChzdHlsZS5mb250V2VpZ2h0KSA+PSA3MDApIHtcbiAgICAgICAgcmVzICs9ICdib2xkJztcbiAgICB9XG4gICAgaWYgKHN0eWxlLmZvbnRTdHlsZSA9PT0gJ2l0YWxpYycgfHwgc3R5bGUuZm9udFN0eWxlID09PSAnb2JsaXF1ZScpIHtcbiAgICAgICAgcmVzICs9ICdpdGFsaWMnO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuZnVuY3Rpb24gcGFyc2VDb2xvcihlbGVtZW50LCBjb2xvclByb3ApIHtcbiAgICB2YXIgY3NzQ29sb3IgPSByZWFsQ29sb3IoZWxlbWVudCwgY29sb3JQcm9wKTtcbiAgICBpZiAoIWNzc0NvbG9yKVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB2YXIgcmdiYSA9IGNzc0NvbG9yLm1hdGNoKC9ecmdiYT9cXCgoXFxkKyksXFxzKihcXGQrKSxcXHMqKFxcZCspKD86LFxccyooXFxkKlxcLj9cXGQqKSk/XFwpJC8pO1xuICAgIGlmICghcmdiYSB8fCAhQXJyYXkuaXNBcnJheShyZ2JhKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIGNvbG9yID0gW3BhcnNlSW50KHJnYmFbMV0pLCBwYXJzZUludChyZ2JhWzJdKSwgcGFyc2VJbnQocmdiYVszXSldO1xuICAgIHZhciBhbHBoYSA9IHBhcnNlSW50KHJnYmFbNF0pO1xuICAgIGlmIChhbHBoYSA9PT0gMCB8fCBpc05hTihjb2xvclswXSkgfHwgaXNOYU4oY29sb3JbMV0pIHx8IGlzTmFOKGNvbG9yWzJdKSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNvbG9yO1xufVxuZnVuY3Rpb24gcmVhbENvbG9yKGVsZW0sIGNvbG9yUHJvcCkge1xuICAgIGlmICghZWxlbSlcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgdmFyIGJnID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbSlbY29sb3JQcm9wXTtcbiAgICBpZiAoYmcgPT09ICdyZ2JhKDAsIDAsIDAsIDApJyB8fFxuICAgICAgICBiZyA9PT0gJ3RyYW5zcGFyZW50JyB8fFxuICAgICAgICBiZyA9PT0gJ2luaXRpYWwnIHx8XG4gICAgICAgIGJnID09PSAnaW5oZXJpdCcpIHtcbiAgICAgICAgcmV0dXJuIHJlYWxDb2xvcihlbGVtLnBhcmVudEVsZW1lbnQsIGNvbG9yUHJvcCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gYmc7XG4gICAgfVxufVxuZnVuY3Rpb24gcGFyc2VQYWRkaW5nKHZhbCwgZm9udFNpemUsIGxpbmVIZWlnaHQsIHNjYWxlRmFjdG9yKSB7XG4gICAgaWYgKCF2YWwpXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIHZhciBweFNjYWxlRmFjdG9yID0gOTYgLyAoNzIgLyBzY2FsZUZhY3Rvcik7XG4gICAgdmFyIGxpbmVQYWRkaW5nID0gKHBhcnNlSW50KGxpbmVIZWlnaHQpIC0gcGFyc2VJbnQoZm9udFNpemUpKSAvIHNjYWxlRmFjdG9yIC8gMjtcbiAgICB2YXIgcGFkZGluZyA9IHZhbC5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KG4pIC8gcHhTY2FsZUZhY3RvcjtcbiAgICB9KTtcbiAgICBwYWRkaW5nID0gY29tbW9uXzEubWFyZ2luT3JQYWRkaW5nKHBhZGRpbmcsIDApO1xuICAgIGlmIChsaW5lUGFkZGluZyA+IHBhZGRpbmcudG9wKSB7XG4gICAgICAgIHBhZGRpbmcudG9wID0gbGluZVBhZGRpbmc7XG4gICAgfVxuICAgIGlmIChsaW5lUGFkZGluZyA+IHBhZGRpbmcuYm90dG9tKSB7XG4gICAgICAgIHBhZGRpbmcuYm90dG9tID0gbGluZVBhZGRpbmc7XG4gICAgfVxuICAgIHJldHVybiBwYWRkaW5nO1xufVxuXG5cbi8qKiovIH0pLFxuLyogMTQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21tb25fMSA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5mdW5jdGlvbiBkZWZhdWx0XzEoYWxsT3B0aW9ucykge1xuICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKHNldHRpbmdzKSB7XG4gICAgICAgIGlmIChzZXR0aW5ncyAmJiB0eXBlb2Ygc2V0dGluZ3MgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgc2hvdWxkIGJlIG9mIHR5cGUgb2JqZWN0LCBpczogJyArIHR5cGVvZiBzZXR0aW5ncyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBzZXR0aW5ncy5leHRlbmRXaWR0aCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHNldHRpbmdzLnRhYmxlV2lkdGggPSBzZXR0aW5ncy5leHRlbmRXaWR0aCA/ICdhdXRvJyA6ICd3cmFwJztcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VzZSBvZiBkZXByZWNhdGVkIG9wdGlvbjogZXh0ZW5kV2lkdGgsIHVzZSB0YWJsZVdpZHRoIGluc3RlYWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBzZXR0aW5ncy5tYXJnaW5zICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzZXR0aW5ncy5tYXJnaW4gPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgIHNldHRpbmdzLm1hcmdpbiA9IHNldHRpbmdzLm1hcmdpbnM7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdVc2Ugb2YgZGVwcmVjYXRlZCBvcHRpb246IG1hcmdpbnMsIHVzZSBtYXJnaW4gaW5zdGVhZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2V0dGluZ3Muc3RhcnRZICYmIHR5cGVvZiBzZXR0aW5ncy5zdGFydFkgIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHZhbHVlIGZvciBzdGFydFkgb3B0aW9uJywgc2V0dGluZ3Muc3RhcnRZKTtcbiAgICAgICAgICAgIGRlbGV0ZSBzZXR0aW5ncy5zdGFydFk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzZXR0aW5ncy5kaWREcmF3UGFnZSAmJlxuICAgICAgICAgICAgKHNldHRpbmdzLmFmdGVyUGFnZUNvbnRlbnQgfHxcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5iZWZvcmVQYWdlQ29udGVudCB8fFxuICAgICAgICAgICAgICAgIHNldHRpbmdzLmFmdGVyUGFnZUFkZCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBhZnRlclBhZ2VDb250ZW50LCBiZWZvcmVQYWdlQ29udGVudCBhbmQgYWZ0ZXJQYWdlQWRkIGhvb2tzIGFyZSBkZXByZWNhdGVkLiBVc2UgZGlkRHJhd1BhZ2UgaW5zdGVhZCcpO1xuICAgICAgICAgICAgc2V0dGluZ3MuZGlkRHJhd1BhZ2UgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIGNvbW1vbl8xLmFwcGx5VXNlclN0eWxlcygpO1xuICAgICAgICAgICAgICAgIGlmIChzZXR0aW5ncy5iZWZvcmVQYWdlQ29udGVudClcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuYmVmb3JlUGFnZUNvbnRlbnQoZGF0YSk7XG4gICAgICAgICAgICAgICAgY29tbW9uXzEuYXBwbHlVc2VyU3R5bGVzKCk7XG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLmFmdGVyUGFnZUNvbnRlbnQpXG4gICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmFmdGVyUGFnZUNvbnRlbnQoZGF0YSk7XG4gICAgICAgICAgICAgICAgY29tbW9uXzEuYXBwbHlVc2VyU3R5bGVzKCk7XG4gICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLmFmdGVyUGFnZUFkZCAmJiBkYXRhLnBhZ2VOdW1iZXIgPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuYWZ0ZXJQYWdlQWRkKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb21tb25fMS5hcHBseVVzZXJTdHlsZXMoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICBbXG4gICAgICAgICAgICAnY3JlYXRlZEhlYWRlckNlbGwnLFxuICAgICAgICAgICAgJ2RyYXdIZWFkZXJSb3cnLFxuICAgICAgICAgICAgJ2RyYXdSb3cnLFxuICAgICAgICAgICAgJ2RyYXdIZWFkZXJDZWxsJyxcbiAgICAgICAgXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICBpZiAoc2V0dGluZ3NbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVGhlIFxcXCJcIiArIG5hbWUgKyBcIlxcXCIgaG9vayBoYXMgY2hhbmdlZCBpbiB2ZXJzaW9uIDMuMCwgY2hlY2sgdGhlIGNoYW5nZWxvZyBmb3IgaG93IHRvIG1pZ3JhdGUuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgW1xuICAgICAgICAgICAgWydzaG93Rm9vdCcsICdzaG93Rm9vdGVyJ10sXG4gICAgICAgICAgICBbJ3Nob3dIZWFkJywgJ3Nob3dIZWFkZXInXSxcbiAgICAgICAgICAgIFsnZGlkRHJhd1BhZ2UnLCAnYWRkUGFnZUNvbnRlbnQnXSxcbiAgICAgICAgICAgIFsnZGlkUGFyc2VDZWxsJywgJ2NyZWF0ZWRDZWxsJ10sXG4gICAgICAgICAgICBbJ2hlYWRTdHlsZXMnLCAnaGVhZGVyU3R5bGVzJ10sXG4gICAgICAgIF0uZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50ID0gX2FbMF0sIGRlcHJlY2F0ZWQgPSBfYVsxXTtcbiAgICAgICAgICAgIGlmIChzZXR0aW5nc1tkZXByZWNhdGVkXSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVc2Ugb2YgZGVwcmVjYXRlZCBvcHRpb24gXCIgKyBkZXByZWNhdGVkICsgXCIuIFVzZSBcIiArIGN1cnJlbnQgKyBcIiBpbnN0ZWFkXCIpO1xuICAgICAgICAgICAgICAgIHNldHRpbmdzW2N1cnJlbnRdID0gc2V0dGluZ3NbZGVwcmVjYXRlZF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBbXG4gICAgICAgICAgICBbJ3BhZGRpbmcnLCAnY2VsbFBhZGRpbmcnXSxcbiAgICAgICAgICAgIFsnbGluZUhlaWdodCcsICdyb3dIZWlnaHQnXSxcbiAgICAgICAgICAgICdmb250U2l6ZScsXG4gICAgICAgICAgICAnb3ZlcmZsb3cnLFxuICAgICAgICBdLmZvckVhY2goZnVuY3Rpb24gKG8pIHtcbiAgICAgICAgICAgIHZhciBkZXByZWNhdGVkT3B0aW9uID0gdHlwZW9mIG8gPT09ICdzdHJpbmcnID8gbyA6IG9bMF07XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSB0eXBlb2YgbyA9PT0gJ3N0cmluZycgPyBvIDogb1sxXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc2V0dGluZ3NbZGVwcmVjYXRlZE9wdGlvbl0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzZXR0aW5ncy5zdHlsZXNbc3R5bGVdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncy5zdHlsZXNbc3R5bGVdID0gc2V0dGluZ3NbZGVwcmVjYXRlZE9wdGlvbl07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VzZSBvZiBkZXByZWNhdGVkIG9wdGlvbjogJyArXG4gICAgICAgICAgICAgICAgICAgIGRlcHJlY2F0ZWRPcHRpb24gK1xuICAgICAgICAgICAgICAgICAgICAnLCB1c2UgdGhlIHN0eWxlICcgK1xuICAgICAgICAgICAgICAgICAgICBzdHlsZSArXG4gICAgICAgICAgICAgICAgICAgICcgaW5zdGVhZC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSBbXG4gICAgICAgICAgICAnc3R5bGVzJyxcbiAgICAgICAgICAgICdib2R5U3R5bGVzJyxcbiAgICAgICAgICAgICdoZWFkU3R5bGVzJyxcbiAgICAgICAgICAgICdmb290U3R5bGVzJyxcbiAgICAgICAgXTsgX2kgPCBfYS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciBzdHlsZVByb3AgPSBfYVtfaV07XG4gICAgICAgICAgICBjaGVja1N0eWxlcyhzZXR0aW5nc1tzdHlsZVByb3BdIHx8IHt9KTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29sdW1uU3R5bGVzID0gc2V0dGluZ3NbJ2NvbHVtblN0eWxlcyddIHx8IHt9O1xuICAgICAgICBmb3IgKHZhciBfYiA9IDAsIF9jID0gT2JqZWN0LmtleXMoY29sdW1uU3R5bGVzKTsgX2IgPCBfYy5sZW5ndGg7IF9iKyspIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBfY1tfYl07XG4gICAgICAgICAgICBjaGVja1N0eWxlcyhjb2x1bW5TdHlsZXNba2V5XSB8fCB7fSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGZvciAodmFyIF9pID0gMCwgYWxsT3B0aW9uc18xID0gYWxsT3B0aW9uczsgX2kgPCBhbGxPcHRpb25zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBzZXR0aW5ncyA9IGFsbE9wdGlvbnNfMVtfaV07XG4gICAgICAgIF9sb29wXzEoc2V0dGluZ3MpO1xuICAgIH1cbn1cbmV4cG9ydHMuZGVmYXVsdCA9IGRlZmF1bHRfMTtcbmZ1bmN0aW9uIGNoZWNrU3R5bGVzKHN0eWxlcykge1xuICAgIGlmIChzdHlsZXMucm93SGVpZ2h0KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VzZSBvZiBkZXByZWNhdGVkIHN0eWxlIHJvd0hlaWdodC4gSXQgaXMgcmVuYW1lZCB0byBtaW5DZWxsSGVpZ2h0LicpO1xuICAgICAgICBpZiAoIXN0eWxlcy5taW5DZWxsSGVpZ2h0KSB7XG4gICAgICAgICAgICBzdHlsZXMubWluQ2VsbEhlaWdodCA9IHN0eWxlcy5yb3dIZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoc3R5bGVzLmNvbHVtbldpZHRoKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VzZSBvZiBkZXByZWNhdGVkIHN0eWxlIGNvbHVtbldpZHRoLiBJdCBpcyByZW5hbWVkIHRvIGNlbGxXaWR0aC4nKTtcbiAgICAgICAgaWYgKCFzdHlsZXMuY2VsbFdpZHRoKSB7XG4gICAgICAgICAgICBzdHlsZXMuY2VsbFdpZHRoID0gc3R5bGVzLmNvbHVtbldpZHRoO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8qKiovIH0pLFxuLyogMTUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGpzUERGID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcbi8qKlxuICogSW1wcm92ZWQgdGV4dCBmdW5jdGlvbiB3aXRoIGhhbGlnbiBhbmQgdmFsaWduIHN1cHBvcnRcbiAqIEluc3BpcmF0aW9uIGZyb206IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjgzMjc1MTAvYWxpZ24tdGV4dC1yaWdodC11c2luZy1qc3BkZi8yODQzMzExMyMyODQzMzExM1xuICovXG5qc1BERi5BUEkuYXV0b1RhYmxlVGV4dCA9IGZ1bmN0aW9uICh0ZXh0LCB4LCB5LCBzdHlsZXMpIHtcbiAgICBzdHlsZXMgPSBzdHlsZXMgfHwge307XG4gICAgdmFyIEZPTlRfUk9XX1JBVElPID0gMS4xNTtcbiAgICBpZiAodHlwZW9mIHggIT09ICdudW1iZXInIHx8IHR5cGVvZiB5ICE9PSAnbnVtYmVyJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgeCBhbmQgeSBwYXJhbWV0ZXJzIGFyZSByZXF1aXJlZC4gTWlzc2luZyBmb3IgdGV4dDogJywgdGV4dCk7XG4gICAgfVxuICAgIHZhciBrID0gdGhpcy5pbnRlcm5hbC5zY2FsZUZhY3RvcjtcbiAgICB2YXIgZm9udFNpemUgPSB0aGlzLmludGVybmFsLmdldEZvbnRTaXplKCkgLyBrO1xuICAgIHZhciBzcGxpdFJlZ2V4ID0gL1xcclxcbnxcXHJ8XFxuL2c7XG4gICAgdmFyIHNwbGl0VGV4dCA9IG51bGw7XG4gICAgdmFyIGxpbmVDb3VudCA9IDE7XG4gICAgaWYgKHN0eWxlcy52YWxpZ24gPT09ICdtaWRkbGUnIHx8XG4gICAgICAgIHN0eWxlcy52YWxpZ24gPT09ICdib3R0b20nIHx8XG4gICAgICAgIHN0eWxlcy5oYWxpZ24gPT09ICdjZW50ZXInIHx8XG4gICAgICAgIHN0eWxlcy5oYWxpZ24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgc3BsaXRUZXh0ID0gdHlwZW9mIHRleHQgPT09ICdzdHJpbmcnID8gdGV4dC5zcGxpdChzcGxpdFJlZ2V4KSA6IHRleHQ7XG4gICAgICAgIGxpbmVDb3VudCA9IHNwbGl0VGV4dC5sZW5ndGggfHwgMTtcbiAgICB9XG4gICAgLy8gQWxpZ24gdGhlIHRvcFxuICAgIHkgKz0gZm9udFNpemUgKiAoMiAtIEZPTlRfUk9XX1JBVElPKTtcbiAgICBpZiAoc3R5bGVzLnZhbGlnbiA9PT0gJ21pZGRsZScpXG4gICAgICAgIHkgLT0gKGxpbmVDb3VudCAvIDIpICogZm9udFNpemUgKiBGT05UX1JPV19SQVRJTztcbiAgICBlbHNlIGlmIChzdHlsZXMudmFsaWduID09PSAnYm90dG9tJylcbiAgICAgICAgeSAtPSBsaW5lQ291bnQgKiBmb250U2l6ZSAqIEZPTlRfUk9XX1JBVElPO1xuICAgIGlmIChzdHlsZXMuaGFsaWduID09PSAnY2VudGVyJyB8fCBzdHlsZXMuaGFsaWduID09PSAncmlnaHQnKSB7XG4gICAgICAgIHZhciBhbGlnblNpemUgPSBmb250U2l6ZTtcbiAgICAgICAgaWYgKHN0eWxlcy5oYWxpZ24gPT09ICdjZW50ZXInKVxuICAgICAgICAgICAgYWxpZ25TaXplICo9IDAuNTtcbiAgICAgICAgaWYgKGxpbmVDb3VudCA+PSAxKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpTGluZSA9IDA7IGlMaW5lIDwgc3BsaXRUZXh0Lmxlbmd0aDsgaUxpbmUrKykge1xuICAgICAgICAgICAgICAgIHRoaXMudGV4dChzcGxpdFRleHRbaUxpbmVdLCB4IC0gdGhpcy5nZXRTdHJpbmdVbml0V2lkdGgoc3BsaXRUZXh0W2lMaW5lXSkgKiBhbGlnblNpemUsIHkpO1xuICAgICAgICAgICAgICAgIHkgKz0gZm9udFNpemUgKiBGT05UX1JPV19SQVRJTztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHggLT0gdGhpcy5nZXRTdHJpbmdVbml0V2lkdGgodGV4dCkgKiBhbGlnblNpemU7XG4gICAgfVxuICAgIGlmIChzdHlsZXMuaGFsaWduID09PSAnanVzdGlmeScpIHtcbiAgICAgICAgdGhpcy50ZXh0KHRleHQsIHgsIHksIHtcbiAgICAgICAgICAgIG1heFdpZHRoOiBzdHlsZXMubWF4V2lkdGggfHwgMTAwLFxuICAgICAgICAgICAgYWxpZ246ICdqdXN0aWZ5JyxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnRleHQodGV4dCwgeCwgeSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xufTtcblxuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBWYWxpZGF0b3IgPSBtb2R1bGUuZXhwb3J0cy5WYWxpZGF0b3IgPSByZXF1aXJlKCcuL3ZhbGlkYXRvcicpO1xuXG5tb2R1bGUuZXhwb3J0cy5WYWxpZGF0b3JSZXN1bHQgPSByZXF1aXJlKCcuL2hlbHBlcnMnKS5WYWxpZGF0b3JSZXN1bHQ7XG5tb2R1bGUuZXhwb3J0cy5WYWxpZGF0aW9uRXJyb3IgPSByZXF1aXJlKCcuL2hlbHBlcnMnKS5WYWxpZGF0aW9uRXJyb3I7XG5tb2R1bGUuZXhwb3J0cy5TY2hlbWFFcnJvciA9IHJlcXVpcmUoJy4vaGVscGVycycpLlNjaGVtYUVycm9yO1xubW9kdWxlLmV4cG9ydHMuU2NoZW1hU2NhblJlc3VsdCA9IHJlcXVpcmUoJy4vc2NhbicpLlNjaGVtYVNjYW5SZXN1bHQ7XG5tb2R1bGUuZXhwb3J0cy5zY2FuID0gcmVxdWlyZSgnLi9zY2FuJykuc2NhbjtcblxubW9kdWxlLmV4cG9ydHMudmFsaWRhdGUgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucykge1xuICB2YXIgdiA9IG5ldyBWYWxpZGF0b3IoKTtcbiAgcmV0dXJuIHYudmFsaWRhdGUoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXJpbGliID0gcmVxdWlyZSgndXJsJyk7XG5cbnZhciBhdHRyaWJ1dGUgPSByZXF1aXJlKCcuL2F0dHJpYnV0ZScpO1xudmFyIGhlbHBlcnMgPSByZXF1aXJlKCcuL2hlbHBlcnMnKTtcbnZhciBzY2FuU2NoZW1hID0gcmVxdWlyZSgnLi9zY2FuJykuc2NhbjtcbnZhciBWYWxpZGF0b3JSZXN1bHQgPSBoZWxwZXJzLlZhbGlkYXRvclJlc3VsdDtcbnZhciBTY2hlbWFFcnJvciA9IGhlbHBlcnMuU2NoZW1hRXJyb3I7XG52YXIgU2NoZW1hQ29udGV4dCA9IGhlbHBlcnMuU2NoZW1hQ29udGV4dDtcbi8vdmFyIGFub255bW91c0Jhc2UgPSAndm5kLmpzb25zY2hlbWE6Ly8vJztcbnZhciBhbm9ueW1vdXNCYXNlID0gJy8nO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVmFsaWRhdG9yIG9iamVjdFxuICogQG5hbWUgVmFsaWRhdG9yXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIFZhbGlkYXRvciA9IGZ1bmN0aW9uIFZhbGlkYXRvciAoKSB7XG4gIC8vIEFsbG93IGEgdmFsaWRhdG9yIGluc3RhbmNlIHRvIG92ZXJyaWRlIGdsb2JhbCBjdXN0b20gZm9ybWF0cyBvciB0byBoYXZlIHRoZWlyXG4gIC8vIG93biBjdXN0b20gZm9ybWF0cy5cbiAgdGhpcy5jdXN0b21Gb3JtYXRzID0gT2JqZWN0LmNyZWF0ZShWYWxpZGF0b3IucHJvdG90eXBlLmN1c3RvbUZvcm1hdHMpO1xuICB0aGlzLnNjaGVtYXMgPSB7fTtcbiAgdGhpcy51bnJlc29sdmVkUmVmcyA9IFtdO1xuXG4gIC8vIFVzZSBPYmplY3QuY3JlYXRlIHRvIG1ha2UgdGhpcyBleHRlbnNpYmxlIHdpdGhvdXQgVmFsaWRhdG9yIGluc3RhbmNlcyBzdGVwcGluZyBvbiBlYWNoIG90aGVyJ3MgdG9lcy5cbiAgdGhpcy50eXBlcyA9IE9iamVjdC5jcmVhdGUodHlwZXMpO1xuICB0aGlzLmF0dHJpYnV0ZXMgPSBPYmplY3QuY3JlYXRlKGF0dHJpYnV0ZS52YWxpZGF0b3JzKTtcbn07XG5cbi8vIEFsbG93IGZvcm1hdHMgdG8gYmUgcmVnaXN0ZXJlZCBnbG9iYWxseS5cblZhbGlkYXRvci5wcm90b3R5cGUuY3VzdG9tRm9ybWF0cyA9IHt9O1xuXG4vLyBIaW50IGF0IHRoZSBwcmVzZW5jZSBvZiBhIHByb3BlcnR5XG5WYWxpZGF0b3IucHJvdG90eXBlLnNjaGVtYXMgPSBudWxsO1xuVmFsaWRhdG9yLnByb3RvdHlwZS50eXBlcyA9IG51bGw7XG5WYWxpZGF0b3IucHJvdG90eXBlLmF0dHJpYnV0ZXMgPSBudWxsO1xuVmFsaWRhdG9yLnByb3RvdHlwZS51bnJlc29sdmVkUmVmcyA9IG51bGw7XG5cbi8qKlxuICogQWRkcyBhIHNjaGVtYSB3aXRoIGEgY2VydGFpbiB1cm4gdG8gdGhlIFZhbGlkYXRvciBpbnN0YW5jZS5cbiAqIEBwYXJhbSBzY2hlbWFcbiAqIEBwYXJhbSB1cm5cbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS5hZGRTY2hlbWEgPSBmdW5jdGlvbiBhZGRTY2hlbWEgKHNjaGVtYSwgYmFzZSkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGlmICghc2NoZW1hKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmFyIHNjYW4gPSBzY2FuU2NoZW1hKGJhc2V8fGFub255bW91c0Jhc2UsIHNjaGVtYSk7XG4gIHZhciBvdXJVcmkgPSBiYXNlIHx8IHNjaGVtYS5pZDtcbiAgZm9yKHZhciB1cmkgaW4gc2Nhbi5pZCl7XG4gICAgdGhpcy5zY2hlbWFzW3VyaV0gPSBzY2FuLmlkW3VyaV07XG4gIH1cbiAgZm9yKHZhciB1cmkgaW4gc2Nhbi5yZWYpe1xuICAgIHRoaXMudW5yZXNvbHZlZFJlZnMucHVzaCh1cmkpO1xuICB9XG4gIHRoaXMudW5yZXNvbHZlZFJlZnMgPSB0aGlzLnVucmVzb2x2ZWRSZWZzLmZpbHRlcihmdW5jdGlvbih1cmkpe1xuICAgIHJldHVybiB0eXBlb2Ygc2VsZi5zY2hlbWFzW3VyaV09PT0ndW5kZWZpbmVkJztcbiAgfSk7XG4gIHJldHVybiB0aGlzLnNjaGVtYXNbb3VyVXJpXTtcbn07XG5cblZhbGlkYXRvci5wcm90b3R5cGUuYWRkU3ViU2NoZW1hQXJyYXkgPSBmdW5jdGlvbiBhZGRTdWJTY2hlbWFBcnJheShiYXNldXJpLCBzY2hlbWFzKSB7XG4gIGlmKCEoc2NoZW1hcyBpbnN0YW5jZW9mIEFycmF5KSkgcmV0dXJuO1xuICBmb3IodmFyIGk9MDsgaTxzY2hlbWFzLmxlbmd0aDsgaSsrKXtcbiAgICB0aGlzLmFkZFN1YlNjaGVtYShiYXNldXJpLCBzY2hlbWFzW2ldKTtcbiAgfVxufTtcblxuVmFsaWRhdG9yLnByb3RvdHlwZS5hZGRTdWJTY2hlbWFPYmplY3QgPSBmdW5jdGlvbiBhZGRTdWJTY2hlbWFBcnJheShiYXNldXJpLCBzY2hlbWFzKSB7XG4gIGlmKCFzY2hlbWFzIHx8IHR5cGVvZiBzY2hlbWFzIT0nb2JqZWN0JykgcmV0dXJuO1xuICBmb3IodmFyIHAgaW4gc2NoZW1hcyl7XG4gICAgdGhpcy5hZGRTdWJTY2hlbWEoYmFzZXVyaSwgc2NoZW1hc1twXSk7XG4gIH1cbn07XG5cblxuXG4vKipcbiAqIFNldHMgYWxsIHRoZSBzY2hlbWFzIG9mIHRoZSBWYWxpZGF0b3IgaW5zdGFuY2UuXG4gKiBAcGFyYW0gc2NoZW1hc1xuICovXG5WYWxpZGF0b3IucHJvdG90eXBlLnNldFNjaGVtYXMgPSBmdW5jdGlvbiBzZXRTY2hlbWFzIChzY2hlbWFzKSB7XG4gIHRoaXMuc2NoZW1hcyA9IHNjaGVtYXM7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHNjaGVtYSBvZiBhIGNlcnRhaW4gdXJuXG4gKiBAcGFyYW0gdXJuXG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUuZ2V0U2NoZW1hID0gZnVuY3Rpb24gZ2V0U2NoZW1hICh1cm4pIHtcbiAgcmV0dXJuIHRoaXMuc2NoZW1hc1t1cm5dO1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgaW5zdGFuY2UgYWdhaW5zdCB0aGUgcHJvdmlkZWQgc2NoZW1hXG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEBwYXJhbSBzY2hlbWFcbiAqIEBwYXJhbSBbb3B0aW9uc11cbiAqIEBwYXJhbSBbY3R4XVxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUudmFsaWRhdGUgPSBmdW5jdGlvbiB2YWxpZGF0ZSAoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICB2YXIgcHJvcGVydHlOYW1lID0gb3B0aW9ucy5wcm9wZXJ0eU5hbWUgfHwgJ2luc3RhbmNlJztcbiAgLy8gVGhpcyB3aWxsIHdvcmsgc28gbG9uZyBhcyB0aGUgZnVuY3Rpb24gYXQgdXJpLnJlc29sdmUoKSB3aWxsIHJlc29sdmUgYSByZWxhdGl2ZSBVUkkgdG8gYSByZWxhdGl2ZSBVUklcbiAgdmFyIGJhc2UgPSB1cmlsaWIucmVzb2x2ZShvcHRpb25zLmJhc2V8fGFub255bW91c0Jhc2UsIHNjaGVtYS5pZHx8JycpO1xuICBpZighY3R4KXtcbiAgICBjdHggPSBuZXcgU2NoZW1hQ29udGV4dChzY2hlbWEsIG9wdGlvbnMsIHByb3BlcnR5TmFtZSwgYmFzZSwgT2JqZWN0LmNyZWF0ZSh0aGlzLnNjaGVtYXMpKTtcbiAgICBpZiAoIWN0eC5zY2hlbWFzW2Jhc2VdKSB7XG4gICAgICBjdHguc2NoZW1hc1tiYXNlXSA9IHNjaGVtYTtcbiAgICB9XG4gICAgdmFyIGZvdW5kID0gc2NhblNjaGVtYShiYXNlLCBzY2hlbWEpO1xuICAgIGZvcih2YXIgbiBpbiBmb3VuZC5pZCl7XG4gICAgICB2YXIgc2NoID0gZm91bmQuaWRbbl07XG4gICAgICBjdHguc2NoZW1hc1tuXSA9IHNjaDtcbiAgICB9XG4gIH1cbiAgaWYgKHNjaGVtYSkge1xuICAgIHZhciByZXN1bHQgPSB0aGlzLnZhbGlkYXRlU2NoZW1hKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCk7XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUmVzdWx0IHVuZGVmaW5lZCcpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHRocm93IG5ldyBTY2hlbWFFcnJvcignbm8gc2NoZW1hIHNwZWNpZmllZCcsIHNjaGVtYSk7XG59O1xuXG4vKipcbiogQHBhcmFtIE9iamVjdCBzY2hlbWFcbiogQHJldHVybiBtaXhlZCBzY2hlbWEgdXJpIG9yIGZhbHNlXG4qL1xuZnVuY3Rpb24gc2hvdWxkUmVzb2x2ZShzY2hlbWEpIHtcbiAgdmFyIHJlZiA9ICh0eXBlb2Ygc2NoZW1hID09PSAnc3RyaW5nJykgPyBzY2hlbWEgOiBzY2hlbWEuJHJlZjtcbiAgaWYgKHR5cGVvZiByZWY9PSdzdHJpbmcnKSByZXR1cm4gcmVmO1xuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogVmFsaWRhdGVzIGFuIGluc3RhbmNlIGFnYWluc3QgdGhlIHNjaGVtYSAodGhlIGFjdHVhbCB3b3JrIGhvcnNlKVxuICogQHBhcmFtIGluc3RhbmNlXG4gKiBAcGFyYW0gc2NoZW1hXG4gKiBAcGFyYW0gb3B0aW9uc1xuICogQHBhcmFtIGN0eFxuICogQHByaXZhdGVcbiAqIEByZXR1cm4ge1ZhbGlkYXRvclJlc3VsdH1cbiAqL1xuVmFsaWRhdG9yLnByb3RvdHlwZS52YWxpZGF0ZVNjaGVtYSA9IGZ1bmN0aW9uIHZhbGlkYXRlU2NoZW1hIChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBWYWxpZGF0b3JSZXN1bHQoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KTtcblxuICAgIC8vIFN1cHBvcnQgZm9yIHRoZSB0cnVlL2ZhbHNlIHNjaGVtYXNcbiAgaWYodHlwZW9mIHNjaGVtYT09PSdib29sZWFuJykge1xuICAgIGlmKHNjaGVtYT09PXRydWUpe1xuICAgICAgLy8gYHRydWVgIGlzIGFsd2F5cyB2YWxpZFxuICAgICAgc2NoZW1hID0ge307XG4gICAgfWVsc2UgaWYoc2NoZW1hPT09ZmFsc2Upe1xuICAgICAgLy8gYGZhbHNlYCBpcyBhbHdheXMgaW52YWxpZFxuICAgICAgc2NoZW1hID0ge3R5cGU6IFtdfTtcbiAgICB9XG4gIH1lbHNlIGlmKCFzY2hlbWEpe1xuICAgIC8vIFRoaXMgbWlnaHQgYmUgYSBzdHJpbmdcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJzY2hlbWEgaXMgdW5kZWZpbmVkXCIpO1xuICB9XG5cbiAgaWYgKHNjaGVtYVsnZXh0ZW5kcyddKSB7XG4gICAgaWYgKHNjaGVtYVsnZXh0ZW5kcyddIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIHZhciBzY2hlbWFvYmogPSB7c2NoZW1hOiBzY2hlbWEsIGN0eDogY3R4fTtcbiAgICAgIHNjaGVtYVsnZXh0ZW5kcyddLmZvckVhY2godGhpcy5zY2hlbWFUcmF2ZXJzZXIuYmluZCh0aGlzLCBzY2hlbWFvYmopKTtcbiAgICAgIHNjaGVtYSA9IHNjaGVtYW9iai5zY2hlbWE7XG4gICAgICBzY2hlbWFvYmouc2NoZW1hID0gbnVsbDtcbiAgICAgIHNjaGVtYW9iai5jdHggPSBudWxsO1xuICAgICAgc2NoZW1hb2JqID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgc2NoZW1hID0gaGVscGVycy5kZWVwTWVyZ2Uoc2NoZW1hLCB0aGlzLnN1cGVyUmVzb2x2ZShzY2hlbWFbJ2V4dGVuZHMnXSwgY3R4KSk7XG4gICAgfVxuICB9XG5cbiAgLy8gSWYgcGFzc2VkIGEgc3RyaW5nIGFyZ3VtZW50LCBsb2FkIHRoYXQgc2NoZW1hIFVSSVxuICB2YXIgc3dpdGNoU2NoZW1hO1xuICBpZiAoc3dpdGNoU2NoZW1hID0gc2hvdWxkUmVzb2x2ZShzY2hlbWEpKSB7XG4gICAgdmFyIHJlc29sdmVkID0gdGhpcy5yZXNvbHZlKHNjaGVtYSwgc3dpdGNoU2NoZW1hLCBjdHgpO1xuICAgIHZhciBzdWJjdHggPSBuZXcgU2NoZW1hQ29udGV4dChyZXNvbHZlZC5zdWJzY2hlbWEsIG9wdGlvbnMsIGN0eC5wcm9wZXJ0eVBhdGgsIHJlc29sdmVkLnN3aXRjaFNjaGVtYSwgY3R4LnNjaGVtYXMpO1xuICAgIHJldHVybiB0aGlzLnZhbGlkYXRlU2NoZW1hKGluc3RhbmNlLCByZXNvbHZlZC5zdWJzY2hlbWEsIG9wdGlvbnMsIHN1YmN0eCk7XG4gIH1cblxuICB2YXIgc2tpcEF0dHJpYnV0ZXMgPSBvcHRpb25zICYmIG9wdGlvbnMuc2tpcEF0dHJpYnV0ZXMgfHwgW107XG4gIC8vIFZhbGlkYXRlIGVhY2ggc2NoZW1hIGF0dHJpYnV0ZSBhZ2FpbnN0IHRoZSBpbnN0YW5jZVxuICBmb3IgKHZhciBrZXkgaW4gc2NoZW1hKSB7XG4gICAgaWYgKCFhdHRyaWJ1dGUuaWdub3JlUHJvcGVydGllc1trZXldICYmIHNraXBBdHRyaWJ1dGVzLmluZGV4T2Yoa2V5KSA8IDApIHtcbiAgICAgIHZhciB2YWxpZGF0b3JFcnIgPSBudWxsO1xuICAgICAgdmFyIHZhbGlkYXRvciA9IHRoaXMuYXR0cmlidXRlc1trZXldO1xuICAgICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgICB2YWxpZGF0b3JFcnIgPSB2YWxpZGF0b3IuY2FsbCh0aGlzLCBpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpO1xuICAgICAgfSBlbHNlIGlmIChvcHRpb25zLmFsbG93VW5rbm93bkF0dHJpYnV0ZXMgPT09IGZhbHNlKSB7XG4gICAgICAgIC8vIFRoaXMgcmVwcmVzZW50cyBhbiBlcnJvciB3aXRoIHRoZSBzY2hlbWEgaXRzZWxmLCBub3QgYW4gaW52YWxpZCBpbnN0YW5jZVxuICAgICAgICB0aHJvdyBuZXcgU2NoZW1hRXJyb3IoXCJVbnN1cHBvcnRlZCBhdHRyaWJ1dGU6IFwiICsga2V5LCBzY2hlbWEpO1xuICAgICAgfVxuICAgICAgaWYgKHZhbGlkYXRvckVycikge1xuICAgICAgICByZXN1bHQuaW1wb3J0RXJyb3JzKHZhbGlkYXRvckVycik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLnJld3JpdGUgPT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciB2YWx1ZSA9IG9wdGlvbnMucmV3cml0ZS5jYWxsKHRoaXMsIGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCk7XG4gICAgcmVzdWx0Lmluc3RhbmNlID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuKiBAcHJpdmF0ZVxuKiBAcGFyYW0gT2JqZWN0IHNjaGVtYVxuKiBAcGFyYW0gU2NoZW1hQ29udGV4dCBjdHhcbiogQHJldHVybnMgT2JqZWN0IHNjaGVtYSBvciByZXNvbHZlZCBzY2hlbWFcbiovXG5WYWxpZGF0b3IucHJvdG90eXBlLnNjaGVtYVRyYXZlcnNlciA9IGZ1bmN0aW9uIHNjaGVtYVRyYXZlcnNlciAoc2NoZW1hb2JqLCBzKSB7XG4gIHNjaGVtYW9iai5zY2hlbWEgPSBoZWxwZXJzLmRlZXBNZXJnZShzY2hlbWFvYmouc2NoZW1hLCB0aGlzLnN1cGVyUmVzb2x2ZShzLCBzY2hlbWFvYmouY3R4KSk7XG59XG5cbi8qKlxuKiBAcHJpdmF0ZVxuKiBAcGFyYW0gT2JqZWN0IHNjaGVtYVxuKiBAcGFyYW0gU2NoZW1hQ29udGV4dCBjdHhcbiogQHJldHVybnMgT2JqZWN0IHNjaGVtYSBvciByZXNvbHZlZCBzY2hlbWFcbiovXG5WYWxpZGF0b3IucHJvdG90eXBlLnN1cGVyUmVzb2x2ZSA9IGZ1bmN0aW9uIHN1cGVyUmVzb2x2ZSAoc2NoZW1hLCBjdHgpIHtcbiAgdmFyIHJlZjtcbiAgaWYocmVmID0gc2hvdWxkUmVzb2x2ZShzY2hlbWEpKSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZShzY2hlbWEsIHJlZiwgY3R4KS5zdWJzY2hlbWE7XG4gIH1cbiAgcmV0dXJuIHNjaGVtYTtcbn1cblxuLyoqXG4qIEBwcml2YXRlXG4qIEBwYXJhbSBPYmplY3Qgc2NoZW1hXG4qIEBwYXJhbSBPYmplY3Qgc3dpdGNoU2NoZW1hXG4qIEBwYXJhbSBTY2hlbWFDb250ZXh0IGN0eFxuKiBAcmV0dXJuIE9iamVjdCByZXNvbHZlZCBzY2hlbWFzIHtzdWJzY2hlbWE6U3RyaW5nLCBzd2l0Y2hTY2hlbWE6IFN0cmluZ31cbiogQHRocm93cyBTY2hlbWFFcnJvclxuKi9cblZhbGlkYXRvci5wcm90b3R5cGUucmVzb2x2ZSA9IGZ1bmN0aW9uIHJlc29sdmUgKHNjaGVtYSwgc3dpdGNoU2NoZW1hLCBjdHgpIHtcbiAgc3dpdGNoU2NoZW1hID0gY3R4LnJlc29sdmUoc3dpdGNoU2NoZW1hKTtcbiAgLy8gRmlyc3Qgc2VlIGlmIHRoZSBzY2hlbWEgZXhpc3RzIHVuZGVyIHRoZSBwcm92aWRlZCBVUklcbiAgaWYgKGN0eC5zY2hlbWFzW3N3aXRjaFNjaGVtYV0pIHtcbiAgICByZXR1cm4ge3N1YnNjaGVtYTogY3R4LnNjaGVtYXNbc3dpdGNoU2NoZW1hXSwgc3dpdGNoU2NoZW1hOiBzd2l0Y2hTY2hlbWF9O1xuICB9XG4gIC8vIEVsc2UgdHJ5IHdhbGtpbmcgdGhlIHByb3BlcnR5IHBvaW50ZXJcbiAgdmFyIHBhcnNlZCA9IHVyaWxpYi5wYXJzZShzd2l0Y2hTY2hlbWEpO1xuICB2YXIgZnJhZ21lbnQgPSBwYXJzZWQgJiYgcGFyc2VkLmhhc2g7XG4gIHZhciBkb2N1bWVudCA9IGZyYWdtZW50ICYmIGZyYWdtZW50Lmxlbmd0aCAmJiBzd2l0Y2hTY2hlbWEuc3Vic3RyKDAsIHN3aXRjaFNjaGVtYS5sZW5ndGggLSBmcmFnbWVudC5sZW5ndGgpO1xuICBpZiAoIWRvY3VtZW50IHx8ICFjdHguc2NoZW1hc1tkb2N1bWVudF0pIHtcbiAgICB0aHJvdyBuZXcgU2NoZW1hRXJyb3IoXCJubyBzdWNoIHNjaGVtYSA8XCIgKyBzd2l0Y2hTY2hlbWEgKyBcIj5cIiwgc2NoZW1hKTtcbiAgfVxuICB2YXIgc3Vic2NoZW1hID0gaGVscGVycy5vYmplY3RHZXRQYXRoKGN0eC5zY2hlbWFzW2RvY3VtZW50XSwgZnJhZ21lbnQuc3Vic3RyKDEpKTtcbiAgaWYoc3Vic2NoZW1hPT09dW5kZWZpbmVkKXtcbiAgICB0aHJvdyBuZXcgU2NoZW1hRXJyb3IoXCJubyBzdWNoIHNjaGVtYSBcIiArIGZyYWdtZW50ICsgXCIgbG9jYXRlZCBpbiA8XCIgKyBkb2N1bWVudCArIFwiPlwiLCBzY2hlbWEpO1xuICB9XG4gIHJldHVybiB7c3Vic2NoZW1hOiBzdWJzY2hlbWEsIHN3aXRjaFNjaGVtYTogc3dpdGNoU2NoZW1hfTtcbn07XG5cbi8qKlxuICogVGVzdHMgd2hldGhlciB0aGUgaW5zdGFuY2UgaWYgb2YgYSBjZXJ0YWluIHR5cGUuXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIGluc3RhbmNlXG4gKiBAcGFyYW0gc2NoZW1hXG4gKiBAcGFyYW0gb3B0aW9uc1xuICogQHBhcmFtIGN0eFxuICogQHBhcmFtIHR5cGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cblZhbGlkYXRvci5wcm90b3R5cGUudGVzdFR5cGUgPSBmdW5jdGlvbiB2YWxpZGF0ZVR5cGUgKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCwgdHlwZSkge1xuICBpZiAodHlwZW9mIHRoaXMudHlwZXNbdHlwZV0gPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0aGlzLnR5cGVzW3R5cGVdLmNhbGwodGhpcywgaW5zdGFuY2UpO1xuICB9XG4gIGlmICh0eXBlICYmIHR5cGVvZiB0eXBlID09ICdvYmplY3QnKSB7XG4gICAgdmFyIHJlcyA9IHRoaXMudmFsaWRhdGVTY2hlbWEoaW5zdGFuY2UsIHR5cGUsIG9wdGlvbnMsIGN0eCk7XG4gICAgcmV0dXJuIHJlcyA9PT0gdW5kZWZpbmVkIHx8ICEocmVzICYmIHJlcy5lcnJvcnMubGVuZ3RoKTtcbiAgfVxuICAvLyBVbmRlZmluZWQgb3IgcHJvcGVydGllcyBub3Qgb24gdGhlIGxpc3QgYXJlIGFjY2VwdGFibGUsIHNhbWUgYXMgbm90IGJlaW5nIGRlZmluZWRcbiAgcmV0dXJuIHRydWU7XG59O1xuXG52YXIgdHlwZXMgPSBWYWxpZGF0b3IucHJvdG90eXBlLnR5cGVzID0ge307XG50eXBlcy5zdHJpbmcgPSBmdW5jdGlvbiB0ZXN0U3RyaW5nIChpbnN0YW5jZSkge1xuICByZXR1cm4gdHlwZW9mIGluc3RhbmNlID09ICdzdHJpbmcnO1xufTtcbnR5cGVzLm51bWJlciA9IGZ1bmN0aW9uIHRlc3ROdW1iZXIgKGluc3RhbmNlKSB7XG4gIC8vIGlzRmluaXRlIHJldHVybnMgZmFsc2UgZm9yIE5hTiwgSW5maW5pdHksIGFuZCAtSW5maW5pdHlcbiAgcmV0dXJuIHR5cGVvZiBpbnN0YW5jZSA9PSAnbnVtYmVyJyAmJiBpc0Zpbml0ZShpbnN0YW5jZSk7XG59O1xudHlwZXMuaW50ZWdlciA9IGZ1bmN0aW9uIHRlc3RJbnRlZ2VyIChpbnN0YW5jZSkge1xuICByZXR1cm4gKHR5cGVvZiBpbnN0YW5jZSA9PSAnbnVtYmVyJykgJiYgaW5zdGFuY2UgJSAxID09PSAwO1xufTtcbnR5cGVzLmJvb2xlYW4gPSBmdW5jdGlvbiB0ZXN0Qm9vbGVhbiAoaW5zdGFuY2UpIHtcbiAgcmV0dXJuIHR5cGVvZiBpbnN0YW5jZSA9PSAnYm9vbGVhbic7XG59O1xudHlwZXMuYXJyYXkgPSBmdW5jdGlvbiB0ZXN0QXJyYXkgKGluc3RhbmNlKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGluc3RhbmNlKTtcbn07XG50eXBlc1snbnVsbCddID0gZnVuY3Rpb24gdGVzdE51bGwgKGluc3RhbmNlKSB7XG4gIHJldHVybiBpbnN0YW5jZSA9PT0gbnVsbDtcbn07XG50eXBlcy5kYXRlID0gZnVuY3Rpb24gdGVzdERhdGUgKGluc3RhbmNlKSB7XG4gIHJldHVybiBpbnN0YW5jZSBpbnN0YW5jZW9mIERhdGU7XG59O1xudHlwZXMuYW55ID0gZnVuY3Rpb24gdGVzdEFueSAoaW5zdGFuY2UpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xudHlwZXMub2JqZWN0ID0gZnVuY3Rpb24gdGVzdE9iamVjdCAoaW5zdGFuY2UpIHtcbiAgLy8gVE9ETzogZml4IHRoaXMgLSBzZWUgIzE1XG4gIHJldHVybiBpbnN0YW5jZSAmJiAodHlwZW9mIGluc3RhbmNlKSA9PT0gJ29iamVjdCcgJiYgIShpbnN0YW5jZSBpbnN0YW5jZW9mIEFycmF5KSAmJiAhKGluc3RhbmNlIGluc3RhbmNlb2YgRGF0ZSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZhbGlkYXRvcjtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwdW55Y29kZSA9IHJlcXVpcmUoJ3B1bnljb2RlJyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5leHBvcnRzLnBhcnNlID0gdXJsUGFyc2U7XG5leHBvcnRzLnJlc29sdmUgPSB1cmxSZXNvbHZlO1xuZXhwb3J0cy5yZXNvbHZlT2JqZWN0ID0gdXJsUmVzb2x2ZU9iamVjdDtcbmV4cG9ydHMuZm9ybWF0ID0gdXJsRm9ybWF0O1xuXG5leHBvcnRzLlVybCA9IFVybDtcblxuZnVuY3Rpb24gVXJsKCkge1xuICB0aGlzLnByb3RvY29sID0gbnVsbDtcbiAgdGhpcy5zbGFzaGVzID0gbnVsbDtcbiAgdGhpcy5hdXRoID0gbnVsbDtcbiAgdGhpcy5ob3N0ID0gbnVsbDtcbiAgdGhpcy5wb3J0ID0gbnVsbDtcbiAgdGhpcy5ob3N0bmFtZSA9IG51bGw7XG4gIHRoaXMuaGFzaCA9IG51bGw7XG4gIHRoaXMuc2VhcmNoID0gbnVsbDtcbiAgdGhpcy5xdWVyeSA9IG51bGw7XG4gIHRoaXMucGF0aG5hbWUgPSBudWxsO1xuICB0aGlzLnBhdGggPSBudWxsO1xuICB0aGlzLmhyZWYgPSBudWxsO1xufVxuXG4vLyBSZWZlcmVuY2U6IFJGQyAzOTg2LCBSRkMgMTgwOCwgUkZDIDIzOTZcblxuLy8gZGVmaW5lIHRoZXNlIGhlcmUgc28gYXQgbGVhc3QgdGhleSBvbmx5IGhhdmUgdG8gYmVcbi8vIGNvbXBpbGVkIG9uY2Ugb24gdGhlIGZpcnN0IG1vZHVsZSBsb2FkLlxudmFyIHByb3RvY29sUGF0dGVybiA9IC9eKFthLXowLTkuKy1dKzopL2ksXG4gICAgcG9ydFBhdHRlcm4gPSAvOlswLTldKiQvLFxuXG4gICAgLy8gU3BlY2lhbCBjYXNlIGZvciBhIHNpbXBsZSBwYXRoIFVSTFxuICAgIHNpbXBsZVBhdGhQYXR0ZXJuID0gL14oXFwvXFwvPyg/IVxcLylbXlxcP1xcc10qKShcXD9bXlxcc10qKT8kLyxcblxuICAgIC8vIFJGQyAyMzk2OiBjaGFyYWN0ZXJzIHJlc2VydmVkIGZvciBkZWxpbWl0aW5nIFVSTHMuXG4gICAgLy8gV2UgYWN0dWFsbHkganVzdCBhdXRvLWVzY2FwZSB0aGVzZS5cbiAgICBkZWxpbXMgPSBbJzwnLCAnPicsICdcIicsICdgJywgJyAnLCAnXFxyJywgJ1xcbicsICdcXHQnXSxcblxuICAgIC8vIFJGQyAyMzk2OiBjaGFyYWN0ZXJzIG5vdCBhbGxvd2VkIGZvciB2YXJpb3VzIHJlYXNvbnMuXG4gICAgdW53aXNlID0gWyd7JywgJ30nLCAnfCcsICdcXFxcJywgJ14nLCAnYCddLmNvbmNhdChkZWxpbXMpLFxuXG4gICAgLy8gQWxsb3dlZCBieSBSRkNzLCBidXQgY2F1c2Ugb2YgWFNTIGF0dGFja3MuICBBbHdheXMgZXNjYXBlIHRoZXNlLlxuICAgIGF1dG9Fc2NhcGUgPSBbJ1xcJyddLmNvbmNhdCh1bndpc2UpLFxuICAgIC8vIENoYXJhY3RlcnMgdGhhdCBhcmUgbmV2ZXIgZXZlciBhbGxvd2VkIGluIGEgaG9zdG5hbWUuXG4gICAgLy8gTm90ZSB0aGF0IGFueSBpbnZhbGlkIGNoYXJzIGFyZSBhbHNvIGhhbmRsZWQsIGJ1dCB0aGVzZVxuICAgIC8vIGFyZSB0aGUgb25lcyB0aGF0IGFyZSAqZXhwZWN0ZWQqIHRvIGJlIHNlZW4sIHNvIHdlIGZhc3QtcGF0aFxuICAgIC8vIHRoZW0uXG4gICAgbm9uSG9zdENoYXJzID0gWyclJywgJy8nLCAnPycsICc7JywgJyMnXS5jb25jYXQoYXV0b0VzY2FwZSksXG4gICAgaG9zdEVuZGluZ0NoYXJzID0gWycvJywgJz8nLCAnIyddLFxuICAgIGhvc3RuYW1lTWF4TGVuID0gMjU1LFxuICAgIGhvc3RuYW1lUGFydFBhdHRlcm4gPSAvXlsrYS16MC05QS1aXy1dezAsNjN9JC8sXG4gICAgaG9zdG5hbWVQYXJ0U3RhcnQgPSAvXihbK2EtejAtOUEtWl8tXXswLDYzfSkoLiopJC8sXG4gICAgLy8gcHJvdG9jb2xzIHRoYXQgY2FuIGFsbG93IFwidW5zYWZlXCIgYW5kIFwidW53aXNlXCIgY2hhcnMuXG4gICAgdW5zYWZlUHJvdG9jb2wgPSB7XG4gICAgICAnamF2YXNjcmlwdCc6IHRydWUsXG4gICAgICAnamF2YXNjcmlwdDonOiB0cnVlXG4gICAgfSxcbiAgICAvLyBwcm90b2NvbHMgdGhhdCBuZXZlciBoYXZlIGEgaG9zdG5hbWUuXG4gICAgaG9zdGxlc3NQcm90b2NvbCA9IHtcbiAgICAgICdqYXZhc2NyaXB0JzogdHJ1ZSxcbiAgICAgICdqYXZhc2NyaXB0Oic6IHRydWVcbiAgICB9LFxuICAgIC8vIHByb3RvY29scyB0aGF0IGFsd2F5cyBjb250YWluIGEgLy8gYml0LlxuICAgIHNsYXNoZWRQcm90b2NvbCA9IHtcbiAgICAgICdodHRwJzogdHJ1ZSxcbiAgICAgICdodHRwcyc6IHRydWUsXG4gICAgICAnZnRwJzogdHJ1ZSxcbiAgICAgICdnb3BoZXInOiB0cnVlLFxuICAgICAgJ2ZpbGUnOiB0cnVlLFxuICAgICAgJ2h0dHA6JzogdHJ1ZSxcbiAgICAgICdodHRwczonOiB0cnVlLFxuICAgICAgJ2Z0cDonOiB0cnVlLFxuICAgICAgJ2dvcGhlcjonOiB0cnVlLFxuICAgICAgJ2ZpbGU6JzogdHJ1ZVxuICAgIH0sXG4gICAgcXVlcnlzdHJpbmcgPSByZXF1aXJlKCdxdWVyeXN0cmluZycpO1xuXG5mdW5jdGlvbiB1cmxQYXJzZSh1cmwsIHBhcnNlUXVlcnlTdHJpbmcsIHNsYXNoZXNEZW5vdGVIb3N0KSB7XG4gIGlmICh1cmwgJiYgdXRpbC5pc09iamVjdCh1cmwpICYmIHVybCBpbnN0YW5jZW9mIFVybCkgcmV0dXJuIHVybDtcblxuICB2YXIgdSA9IG5ldyBVcmw7XG4gIHUucGFyc2UodXJsLCBwYXJzZVF1ZXJ5U3RyaW5nLCBzbGFzaGVzRGVub3RlSG9zdCk7XG4gIHJldHVybiB1O1xufVxuXG5VcmwucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24odXJsLCBwYXJzZVF1ZXJ5U3RyaW5nLCBzbGFzaGVzRGVub3RlSG9zdCkge1xuICBpZiAoIXV0aWwuaXNTdHJpbmcodXJsKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXJhbWV0ZXIgJ3VybCcgbXVzdCBiZSBhIHN0cmluZywgbm90IFwiICsgdHlwZW9mIHVybCk7XG4gIH1cblxuICAvLyBDb3B5IGNocm9tZSwgSUUsIG9wZXJhIGJhY2tzbGFzaC1oYW5kbGluZyBiZWhhdmlvci5cbiAgLy8gQmFjayBzbGFzaGVzIGJlZm9yZSB0aGUgcXVlcnkgc3RyaW5nIGdldCBjb252ZXJ0ZWQgdG8gZm9yd2FyZCBzbGFzaGVzXG4gIC8vIFNlZTogaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTI1OTE2XG4gIHZhciBxdWVyeUluZGV4ID0gdXJsLmluZGV4T2YoJz8nKSxcbiAgICAgIHNwbGl0dGVyID1cbiAgICAgICAgICAocXVlcnlJbmRleCAhPT0gLTEgJiYgcXVlcnlJbmRleCA8IHVybC5pbmRleE9mKCcjJykpID8gJz8nIDogJyMnLFxuICAgICAgdVNwbGl0ID0gdXJsLnNwbGl0KHNwbGl0dGVyKSxcbiAgICAgIHNsYXNoUmVnZXggPSAvXFxcXC9nO1xuICB1U3BsaXRbMF0gPSB1U3BsaXRbMF0ucmVwbGFjZShzbGFzaFJlZ2V4LCAnLycpO1xuICB1cmwgPSB1U3BsaXQuam9pbihzcGxpdHRlcik7XG5cbiAgdmFyIHJlc3QgPSB1cmw7XG5cbiAgLy8gdHJpbSBiZWZvcmUgcHJvY2VlZGluZy5cbiAgLy8gVGhpcyBpcyB0byBzdXBwb3J0IHBhcnNlIHN0dWZmIGxpa2UgXCIgIGh0dHA6Ly9mb28uY29tICBcXG5cIlxuICByZXN0ID0gcmVzdC50cmltKCk7XG5cbiAgaWYgKCFzbGFzaGVzRGVub3RlSG9zdCAmJiB1cmwuc3BsaXQoJyMnKS5sZW5ndGggPT09IDEpIHtcbiAgICAvLyBUcnkgZmFzdCBwYXRoIHJlZ2V4cFxuICAgIHZhciBzaW1wbGVQYXRoID0gc2ltcGxlUGF0aFBhdHRlcm4uZXhlYyhyZXN0KTtcbiAgICBpZiAoc2ltcGxlUGF0aCkge1xuICAgICAgdGhpcy5wYXRoID0gcmVzdDtcbiAgICAgIHRoaXMuaHJlZiA9IHJlc3Q7XG4gICAgICB0aGlzLnBhdGhuYW1lID0gc2ltcGxlUGF0aFsxXTtcbiAgICAgIGlmIChzaW1wbGVQYXRoWzJdKSB7XG4gICAgICAgIHRoaXMuc2VhcmNoID0gc2ltcGxlUGF0aFsyXTtcbiAgICAgICAgaWYgKHBhcnNlUXVlcnlTdHJpbmcpIHtcbiAgICAgICAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlzdHJpbmcucGFyc2UodGhpcy5zZWFyY2guc3Vic3RyKDEpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnF1ZXJ5ID0gdGhpcy5zZWFyY2guc3Vic3RyKDEpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBhcnNlUXVlcnlTdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zZWFyY2ggPSAnJztcbiAgICAgICAgdGhpcy5xdWVyeSA9IHt9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9XG5cbiAgdmFyIHByb3RvID0gcHJvdG9jb2xQYXR0ZXJuLmV4ZWMocmVzdCk7XG4gIGlmIChwcm90bykge1xuICAgIHByb3RvID0gcHJvdG9bMF07XG4gICAgdmFyIGxvd2VyUHJvdG8gPSBwcm90by50b0xvd2VyQ2FzZSgpO1xuICAgIHRoaXMucHJvdG9jb2wgPSBsb3dlclByb3RvO1xuICAgIHJlc3QgPSByZXN0LnN1YnN0cihwcm90by5sZW5ndGgpO1xuICB9XG5cbiAgLy8gZmlndXJlIG91dCBpZiBpdCdzIGdvdCBhIGhvc3RcbiAgLy8gdXNlckBzZXJ2ZXIgaXMgKmFsd2F5cyogaW50ZXJwcmV0ZWQgYXMgYSBob3N0bmFtZSwgYW5kIHVybFxuICAvLyByZXNvbHV0aW9uIHdpbGwgdHJlYXQgLy9mb28vYmFyIGFzIGhvc3Q9Zm9vLHBhdGg9YmFyIGJlY2F1c2UgdGhhdCdzXG4gIC8vIGhvdyB0aGUgYnJvd3NlciByZXNvbHZlcyByZWxhdGl2ZSBVUkxzLlxuICBpZiAoc2xhc2hlc0Rlbm90ZUhvc3QgfHwgcHJvdG8gfHwgcmVzdC5tYXRjaCgvXlxcL1xcL1teQFxcL10rQFteQFxcL10rLykpIHtcbiAgICB2YXIgc2xhc2hlcyA9IHJlc3Quc3Vic3RyKDAsIDIpID09PSAnLy8nO1xuICAgIGlmIChzbGFzaGVzICYmICEocHJvdG8gJiYgaG9zdGxlc3NQcm90b2NvbFtwcm90b10pKSB7XG4gICAgICByZXN0ID0gcmVzdC5zdWJzdHIoMik7XG4gICAgICB0aGlzLnNsYXNoZXMgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICghaG9zdGxlc3NQcm90b2NvbFtwcm90b10gJiZcbiAgICAgIChzbGFzaGVzIHx8IChwcm90byAmJiAhc2xhc2hlZFByb3RvY29sW3Byb3RvXSkpKSB7XG5cbiAgICAvLyB0aGVyZSdzIGEgaG9zdG5hbWUuXG4gICAgLy8gdGhlIGZpcnN0IGluc3RhbmNlIG9mIC8sID8sIDssIG9yICMgZW5kcyB0aGUgaG9zdC5cbiAgICAvL1xuICAgIC8vIElmIHRoZXJlIGlzIGFuIEAgaW4gdGhlIGhvc3RuYW1lLCB0aGVuIG5vbi1ob3N0IGNoYXJzICphcmUqIGFsbG93ZWRcbiAgICAvLyB0byB0aGUgbGVmdCBvZiB0aGUgbGFzdCBAIHNpZ24sIHVubGVzcyBzb21lIGhvc3QtZW5kaW5nIGNoYXJhY3RlclxuICAgIC8vIGNvbWVzICpiZWZvcmUqIHRoZSBALXNpZ24uXG4gICAgLy8gVVJMcyBhcmUgb2Jub3hpb3VzLlxuICAgIC8vXG4gICAgLy8gZXg6XG4gICAgLy8gaHR0cDovL2FAYkBjLyA9PiB1c2VyOmFAYiBob3N0OmNcbiAgICAvLyBodHRwOi8vYUBiP0BjID0+IHVzZXI6YSBob3N0OmMgcGF0aDovP0BjXG5cbiAgICAvLyB2MC4xMiBUT0RPKGlzYWFjcyk6IFRoaXMgaXMgbm90IHF1aXRlIGhvdyBDaHJvbWUgZG9lcyB0aGluZ3MuXG4gICAgLy8gUmV2aWV3IG91ciB0ZXN0IGNhc2UgYWdhaW5zdCBicm93c2VycyBtb3JlIGNvbXByZWhlbnNpdmVseS5cblxuICAgIC8vIGZpbmQgdGhlIGZpcnN0IGluc3RhbmNlIG9mIGFueSBob3N0RW5kaW5nQ2hhcnNcbiAgICB2YXIgaG9zdEVuZCA9IC0xO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaG9zdEVuZGluZ0NoYXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaGVjID0gcmVzdC5pbmRleE9mKGhvc3RFbmRpbmdDaGFyc1tpXSk7XG4gICAgICBpZiAoaGVjICE9PSAtMSAmJiAoaG9zdEVuZCA9PT0gLTEgfHwgaGVjIDwgaG9zdEVuZCkpXG4gICAgICAgIGhvc3RFbmQgPSBoZWM7XG4gICAgfVxuXG4gICAgLy8gYXQgdGhpcyBwb2ludCwgZWl0aGVyIHdlIGhhdmUgYW4gZXhwbGljaXQgcG9pbnQgd2hlcmUgdGhlXG4gICAgLy8gYXV0aCBwb3J0aW9uIGNhbm5vdCBnbyBwYXN0LCBvciB0aGUgbGFzdCBAIGNoYXIgaXMgdGhlIGRlY2lkZXIuXG4gICAgdmFyIGF1dGgsIGF0U2lnbjtcbiAgICBpZiAoaG9zdEVuZCA9PT0gLTEpIHtcbiAgICAgIC8vIGF0U2lnbiBjYW4gYmUgYW55d2hlcmUuXG4gICAgICBhdFNpZ24gPSByZXN0Lmxhc3RJbmRleE9mKCdAJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGF0U2lnbiBtdXN0IGJlIGluIGF1dGggcG9ydGlvbi5cbiAgICAgIC8vIGh0dHA6Ly9hQGIvY0BkID0+IGhvc3Q6YiBhdXRoOmEgcGF0aDovY0BkXG4gICAgICBhdFNpZ24gPSByZXN0Lmxhc3RJbmRleE9mKCdAJywgaG9zdEVuZCk7XG4gICAgfVxuXG4gICAgLy8gTm93IHdlIGhhdmUgYSBwb3J0aW9uIHdoaWNoIGlzIGRlZmluaXRlbHkgdGhlIGF1dGguXG4gICAgLy8gUHVsbCB0aGF0IG9mZi5cbiAgICBpZiAoYXRTaWduICE9PSAtMSkge1xuICAgICAgYXV0aCA9IHJlc3Quc2xpY2UoMCwgYXRTaWduKTtcbiAgICAgIHJlc3QgPSByZXN0LnNsaWNlKGF0U2lnbiArIDEpO1xuICAgICAgdGhpcy5hdXRoID0gZGVjb2RlVVJJQ29tcG9uZW50KGF1dGgpO1xuICAgIH1cblxuICAgIC8vIHRoZSBob3N0IGlzIHRoZSByZW1haW5pbmcgdG8gdGhlIGxlZnQgb2YgdGhlIGZpcnN0IG5vbi1ob3N0IGNoYXJcbiAgICBob3N0RW5kID0gLTE7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub25Ib3N0Q2hhcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBoZWMgPSByZXN0LmluZGV4T2Yobm9uSG9zdENoYXJzW2ldKTtcbiAgICAgIGlmIChoZWMgIT09IC0xICYmIChob3N0RW5kID09PSAtMSB8fCBoZWMgPCBob3N0RW5kKSlcbiAgICAgICAgaG9zdEVuZCA9IGhlYztcbiAgICB9XG4gICAgLy8gaWYgd2Ugc3RpbGwgaGF2ZSBub3QgaGl0IGl0LCB0aGVuIHRoZSBlbnRpcmUgdGhpbmcgaXMgYSBob3N0LlxuICAgIGlmIChob3N0RW5kID09PSAtMSlcbiAgICAgIGhvc3RFbmQgPSByZXN0Lmxlbmd0aDtcblxuICAgIHRoaXMuaG9zdCA9IHJlc3Quc2xpY2UoMCwgaG9zdEVuZCk7XG4gICAgcmVzdCA9IHJlc3Quc2xpY2UoaG9zdEVuZCk7XG5cbiAgICAvLyBwdWxsIG91dCBwb3J0LlxuICAgIHRoaXMucGFyc2VIb3N0KCk7XG5cbiAgICAvLyB3ZSd2ZSBpbmRpY2F0ZWQgdGhhdCB0aGVyZSBpcyBhIGhvc3RuYW1lLFxuICAgIC8vIHNvIGV2ZW4gaWYgaXQncyBlbXB0eSwgaXQgaGFzIHRvIGJlIHByZXNlbnQuXG4gICAgdGhpcy5ob3N0bmFtZSA9IHRoaXMuaG9zdG5hbWUgfHwgJyc7XG5cbiAgICAvLyBpZiBob3N0bmFtZSBiZWdpbnMgd2l0aCBbIGFuZCBlbmRzIHdpdGggXVxuICAgIC8vIGFzc3VtZSB0aGF0IGl0J3MgYW4gSVB2NiBhZGRyZXNzLlxuICAgIHZhciBpcHY2SG9zdG5hbWUgPSB0aGlzLmhvc3RuYW1lWzBdID09PSAnWycgJiZcbiAgICAgICAgdGhpcy5ob3N0bmFtZVt0aGlzLmhvc3RuYW1lLmxlbmd0aCAtIDFdID09PSAnXSc7XG5cbiAgICAvLyB2YWxpZGF0ZSBhIGxpdHRsZS5cbiAgICBpZiAoIWlwdjZIb3N0bmFtZSkge1xuICAgICAgdmFyIGhvc3RwYXJ0cyA9IHRoaXMuaG9zdG5hbWUuc3BsaXQoL1xcLi8pO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBob3N0cGFydHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIHZhciBwYXJ0ID0gaG9zdHBhcnRzW2ldO1xuICAgICAgICBpZiAoIXBhcnQpIGNvbnRpbnVlO1xuICAgICAgICBpZiAoIXBhcnQubWF0Y2goaG9zdG5hbWVQYXJ0UGF0dGVybikpIHtcbiAgICAgICAgICB2YXIgbmV3cGFydCA9ICcnO1xuICAgICAgICAgIGZvciAodmFyIGogPSAwLCBrID0gcGFydC5sZW5ndGg7IGogPCBrOyBqKyspIHtcbiAgICAgICAgICAgIGlmIChwYXJ0LmNoYXJDb2RlQXQoaikgPiAxMjcpIHtcbiAgICAgICAgICAgICAgLy8gd2UgcmVwbGFjZSBub24tQVNDSUkgY2hhciB3aXRoIGEgdGVtcG9yYXJ5IHBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgIC8vIHdlIG5lZWQgdGhpcyB0byBtYWtlIHN1cmUgc2l6ZSBvZiBob3N0bmFtZSBpcyBub3RcbiAgICAgICAgICAgICAgLy8gYnJva2VuIGJ5IHJlcGxhY2luZyBub24tQVNDSUkgYnkgbm90aGluZ1xuICAgICAgICAgICAgICBuZXdwYXJ0ICs9ICd4JztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG5ld3BhcnQgKz0gcGFydFtqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gd2UgdGVzdCBhZ2FpbiB3aXRoIEFTQ0lJIGNoYXIgb25seVxuICAgICAgICAgIGlmICghbmV3cGFydC5tYXRjaChob3N0bmFtZVBhcnRQYXR0ZXJuKSkge1xuICAgICAgICAgICAgdmFyIHZhbGlkUGFydHMgPSBob3N0cGFydHMuc2xpY2UoMCwgaSk7XG4gICAgICAgICAgICB2YXIgbm90SG9zdCA9IGhvc3RwYXJ0cy5zbGljZShpICsgMSk7XG4gICAgICAgICAgICB2YXIgYml0ID0gcGFydC5tYXRjaChob3N0bmFtZVBhcnRTdGFydCk7XG4gICAgICAgICAgICBpZiAoYml0KSB7XG4gICAgICAgICAgICAgIHZhbGlkUGFydHMucHVzaChiaXRbMV0pO1xuICAgICAgICAgICAgICBub3RIb3N0LnVuc2hpZnQoYml0WzJdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub3RIb3N0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICByZXN0ID0gJy8nICsgbm90SG9zdC5qb2luKCcuJykgKyByZXN0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ob3N0bmFtZSA9IHZhbGlkUGFydHMuam9pbignLicpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaG9zdG5hbWUubGVuZ3RoID4gaG9zdG5hbWVNYXhMZW4pIHtcbiAgICAgIHRoaXMuaG9zdG5hbWUgPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaG9zdG5hbWVzIGFyZSBhbHdheXMgbG93ZXIgY2FzZS5cbiAgICAgIHRoaXMuaG9zdG5hbWUgPSB0aGlzLmhvc3RuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgaWYgKCFpcHY2SG9zdG5hbWUpIHtcbiAgICAgIC8vIElETkEgU3VwcG9ydDogUmV0dXJucyBhIHB1bnljb2RlZCByZXByZXNlbnRhdGlvbiBvZiBcImRvbWFpblwiLlxuICAgICAgLy8gSXQgb25seSBjb252ZXJ0cyBwYXJ0cyBvZiB0aGUgZG9tYWluIG5hbWUgdGhhdFxuICAgICAgLy8gaGF2ZSBub24tQVNDSUkgY2hhcmFjdGVycywgaS5lLiBpdCBkb2Vzbid0IG1hdHRlciBpZlxuICAgICAgLy8geW91IGNhbGwgaXQgd2l0aCBhIGRvbWFpbiB0aGF0IGFscmVhZHkgaXMgQVNDSUktb25seS5cbiAgICAgIHRoaXMuaG9zdG5hbWUgPSBwdW55Y29kZS50b0FTQ0lJKHRoaXMuaG9zdG5hbWUpO1xuICAgIH1cblxuICAgIHZhciBwID0gdGhpcy5wb3J0ID8gJzonICsgdGhpcy5wb3J0IDogJyc7XG4gICAgdmFyIGggPSB0aGlzLmhvc3RuYW1lIHx8ICcnO1xuICAgIHRoaXMuaG9zdCA9IGggKyBwO1xuICAgIHRoaXMuaHJlZiArPSB0aGlzLmhvc3Q7XG5cbiAgICAvLyBzdHJpcCBbIGFuZCBdIGZyb20gdGhlIGhvc3RuYW1lXG4gICAgLy8gdGhlIGhvc3QgZmllbGQgc3RpbGwgcmV0YWlucyB0aGVtLCB0aG91Z2hcbiAgICBpZiAoaXB2Nkhvc3RuYW1lKSB7XG4gICAgICB0aGlzLmhvc3RuYW1lID0gdGhpcy5ob3N0bmFtZS5zdWJzdHIoMSwgdGhpcy5ob3N0bmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIGlmIChyZXN0WzBdICE9PSAnLycpIHtcbiAgICAgICAgcmVzdCA9ICcvJyArIHJlc3Q7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gbm93IHJlc3QgaXMgc2V0IHRvIHRoZSBwb3N0LWhvc3Qgc3R1ZmYuXG4gIC8vIGNob3Agb2ZmIGFueSBkZWxpbSBjaGFycy5cbiAgaWYgKCF1bnNhZmVQcm90b2NvbFtsb3dlclByb3RvXSkge1xuXG4gICAgLy8gRmlyc3QsIG1ha2UgMTAwJSBzdXJlIHRoYXQgYW55IFwiYXV0b0VzY2FwZVwiIGNoYXJzIGdldFxuICAgIC8vIGVzY2FwZWQsIGV2ZW4gaWYgZW5jb2RlVVJJQ29tcG9uZW50IGRvZXNuJ3QgdGhpbmsgdGhleVxuICAgIC8vIG5lZWQgdG8gYmUuXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBhdXRvRXNjYXBlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGFlID0gYXV0b0VzY2FwZVtpXTtcbiAgICAgIGlmIChyZXN0LmluZGV4T2YoYWUpID09PSAtMSlcbiAgICAgICAgY29udGludWU7XG4gICAgICB2YXIgZXNjID0gZW5jb2RlVVJJQ29tcG9uZW50KGFlKTtcbiAgICAgIGlmIChlc2MgPT09IGFlKSB7XG4gICAgICAgIGVzYyA9IGVzY2FwZShhZSk7XG4gICAgICB9XG4gICAgICByZXN0ID0gcmVzdC5zcGxpdChhZSkuam9pbihlc2MpO1xuICAgIH1cbiAgfVxuXG5cbiAgLy8gY2hvcCBvZmYgZnJvbSB0aGUgdGFpbCBmaXJzdC5cbiAgdmFyIGhhc2ggPSByZXN0LmluZGV4T2YoJyMnKTtcbiAgaWYgKGhhc2ggIT09IC0xKSB7XG4gICAgLy8gZ290IGEgZnJhZ21lbnQgc3RyaW5nLlxuICAgIHRoaXMuaGFzaCA9IHJlc3Quc3Vic3RyKGhhc2gpO1xuICAgIHJlc3QgPSByZXN0LnNsaWNlKDAsIGhhc2gpO1xuICB9XG4gIHZhciBxbSA9IHJlc3QuaW5kZXhPZignPycpO1xuICBpZiAocW0gIT09IC0xKSB7XG4gICAgdGhpcy5zZWFyY2ggPSByZXN0LnN1YnN0cihxbSk7XG4gICAgdGhpcy5xdWVyeSA9IHJlc3Quc3Vic3RyKHFtICsgMSk7XG4gICAgaWYgKHBhcnNlUXVlcnlTdHJpbmcpIHtcbiAgICAgIHRoaXMucXVlcnkgPSBxdWVyeXN0cmluZy5wYXJzZSh0aGlzLnF1ZXJ5KTtcbiAgICB9XG4gICAgcmVzdCA9IHJlc3Quc2xpY2UoMCwgcW0pO1xuICB9IGVsc2UgaWYgKHBhcnNlUXVlcnlTdHJpbmcpIHtcbiAgICAvLyBubyBxdWVyeSBzdHJpbmcsIGJ1dCBwYXJzZVF1ZXJ5U3RyaW5nIHN0aWxsIHJlcXVlc3RlZFxuICAgIHRoaXMuc2VhcmNoID0gJyc7XG4gICAgdGhpcy5xdWVyeSA9IHt9O1xuICB9XG4gIGlmIChyZXN0KSB0aGlzLnBhdGhuYW1lID0gcmVzdDtcbiAgaWYgKHNsYXNoZWRQcm90b2NvbFtsb3dlclByb3RvXSAmJlxuICAgICAgdGhpcy5ob3N0bmFtZSAmJiAhdGhpcy5wYXRobmFtZSkge1xuICAgIHRoaXMucGF0aG5hbWUgPSAnLyc7XG4gIH1cblxuICAvL3RvIHN1cHBvcnQgaHR0cC5yZXF1ZXN0XG4gIGlmICh0aGlzLnBhdGhuYW1lIHx8IHRoaXMuc2VhcmNoKSB7XG4gICAgdmFyIHAgPSB0aGlzLnBhdGhuYW1lIHx8ICcnO1xuICAgIHZhciBzID0gdGhpcy5zZWFyY2ggfHwgJyc7XG4gICAgdGhpcy5wYXRoID0gcCArIHM7XG4gIH1cblxuICAvLyBmaW5hbGx5LCByZWNvbnN0cnVjdCB0aGUgaHJlZiBiYXNlZCBvbiB3aGF0IGhhcyBiZWVuIHZhbGlkYXRlZC5cbiAgdGhpcy5ocmVmID0gdGhpcy5mb3JtYXQoKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vLyBmb3JtYXQgYSBwYXJzZWQgb2JqZWN0IGludG8gYSB1cmwgc3RyaW5nXG5mdW5jdGlvbiB1cmxGb3JtYXQob2JqKSB7XG4gIC8vIGVuc3VyZSBpdCdzIGFuIG9iamVjdCwgYW5kIG5vdCBhIHN0cmluZyB1cmwuXG4gIC8vIElmIGl0J3MgYW4gb2JqLCB0aGlzIGlzIGEgbm8tb3AuXG4gIC8vIHRoaXMgd2F5LCB5b3UgY2FuIGNhbGwgdXJsX2Zvcm1hdCgpIG9uIHN0cmluZ3NcbiAgLy8gdG8gY2xlYW4gdXAgcG90ZW50aWFsbHkgd29ua3kgdXJscy5cbiAgaWYgKHV0aWwuaXNTdHJpbmcob2JqKSkgb2JqID0gdXJsUGFyc2Uob2JqKTtcbiAgaWYgKCEob2JqIGluc3RhbmNlb2YgVXJsKSkgcmV0dXJuIFVybC5wcm90b3R5cGUuZm9ybWF0LmNhbGwob2JqKTtcbiAgcmV0dXJuIG9iai5mb3JtYXQoKTtcbn1cblxuVXJsLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGF1dGggPSB0aGlzLmF1dGggfHwgJyc7XG4gIGlmIChhdXRoKSB7XG4gICAgYXV0aCA9IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKTtcbiAgICBhdXRoID0gYXV0aC5yZXBsYWNlKC8lM0EvaSwgJzonKTtcbiAgICBhdXRoICs9ICdAJztcbiAgfVxuXG4gIHZhciBwcm90b2NvbCA9IHRoaXMucHJvdG9jb2wgfHwgJycsXG4gICAgICBwYXRobmFtZSA9IHRoaXMucGF0aG5hbWUgfHwgJycsXG4gICAgICBoYXNoID0gdGhpcy5oYXNoIHx8ICcnLFxuICAgICAgaG9zdCA9IGZhbHNlLFxuICAgICAgcXVlcnkgPSAnJztcblxuICBpZiAodGhpcy5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB0aGlzLmhvc3Q7XG4gIH0gZWxzZSBpZiAodGhpcy5ob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKHRoaXMuaG9zdG5hbWUuaW5kZXhPZignOicpID09PSAtMSA/XG4gICAgICAgIHRoaXMuaG9zdG5hbWUgOlxuICAgICAgICAnWycgKyB0aGlzLmhvc3RuYW1lICsgJ10nKTtcbiAgICBpZiAodGhpcy5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHRoaXMucG9ydDtcbiAgICB9XG4gIH1cblxuICBpZiAodGhpcy5xdWVyeSAmJlxuICAgICAgdXRpbC5pc09iamVjdCh0aGlzLnF1ZXJ5KSAmJlxuICAgICAgT2JqZWN0LmtleXModGhpcy5xdWVyeSkubGVuZ3RoKSB7XG4gICAgcXVlcnkgPSBxdWVyeXN0cmluZy5zdHJpbmdpZnkodGhpcy5xdWVyeSk7XG4gIH1cblxuICB2YXIgc2VhcmNoID0gdGhpcy5zZWFyY2ggfHwgKHF1ZXJ5ICYmICgnPycgKyBxdWVyeSkpIHx8ICcnO1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6JztcblxuICAvLyBvbmx5IHRoZSBzbGFzaGVkUHJvdG9jb2xzIGdldCB0aGUgLy8uICBOb3QgbWFpbHRvOiwgeG1wcDosIGV0Yy5cbiAgLy8gdW5sZXNzIHRoZXkgaGFkIHRoZW0gdG8gYmVnaW4gd2l0aC5cbiAgaWYgKHRoaXMuc2xhc2hlcyB8fFxuICAgICAgKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xbcHJvdG9jb2xdKSAmJiBob3N0ICE9PSBmYWxzZSkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpO1xuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZS5jaGFyQXQoMCkgIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZTtcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJztcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2guY2hhckF0KDApICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoO1xuICBpZiAoc2VhcmNoICYmIHNlYXJjaC5jaGFyQXQoMCkgIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoO1xuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBmdW5jdGlvbihtYXRjaCkge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQobWF0Y2gpO1xuICB9KTtcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJyk7XG5cbiAgcmV0dXJuIHByb3RvY29sICsgaG9zdCArIHBhdGhuYW1lICsgc2VhcmNoICsgaGFzaDtcbn07XG5cbmZ1bmN0aW9uIHVybFJlc29sdmUoc291cmNlLCByZWxhdGl2ZSkge1xuICByZXR1cm4gdXJsUGFyc2Uoc291cmNlLCBmYWxzZSwgdHJ1ZSkucmVzb2x2ZShyZWxhdGl2ZSk7XG59XG5cblVybC5wcm90b3R5cGUucmVzb2x2ZSA9IGZ1bmN0aW9uKHJlbGF0aXZlKSB7XG4gIHJldHVybiB0aGlzLnJlc29sdmVPYmplY3QodXJsUGFyc2UocmVsYXRpdmUsIGZhbHNlLCB0cnVlKSkuZm9ybWF0KCk7XG59O1xuXG5mdW5jdGlvbiB1cmxSZXNvbHZlT2JqZWN0KHNvdXJjZSwgcmVsYXRpdmUpIHtcbiAgaWYgKCFzb3VyY2UpIHJldHVybiByZWxhdGl2ZTtcbiAgcmV0dXJuIHVybFBhcnNlKHNvdXJjZSwgZmFsc2UsIHRydWUpLnJlc29sdmVPYmplY3QocmVsYXRpdmUpO1xufVxuXG5VcmwucHJvdG90eXBlLnJlc29sdmVPYmplY3QgPSBmdW5jdGlvbihyZWxhdGl2ZSkge1xuICBpZiAodXRpbC5pc1N0cmluZyhyZWxhdGl2ZSkpIHtcbiAgICB2YXIgcmVsID0gbmV3IFVybCgpO1xuICAgIHJlbC5wYXJzZShyZWxhdGl2ZSwgZmFsc2UsIHRydWUpO1xuICAgIHJlbGF0aXZlID0gcmVsO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IG5ldyBVcmwoKTtcbiAgdmFyIHRrZXlzID0gT2JqZWN0LmtleXModGhpcyk7XG4gIGZvciAodmFyIHRrID0gMDsgdGsgPCB0a2V5cy5sZW5ndGg7IHRrKyspIHtcbiAgICB2YXIgdGtleSA9IHRrZXlzW3RrXTtcbiAgICByZXN1bHRbdGtleV0gPSB0aGlzW3RrZXldO1xuICB9XG5cbiAgLy8gaGFzaCBpcyBhbHdheXMgb3ZlcnJpZGRlbiwgbm8gbWF0dGVyIHdoYXQuXG4gIC8vIGV2ZW4gaHJlZj1cIlwiIHdpbGwgcmVtb3ZlIGl0LlxuICByZXN1bHQuaGFzaCA9IHJlbGF0aXZlLmhhc2g7XG5cbiAgLy8gaWYgdGhlIHJlbGF0aXZlIHVybCBpcyBlbXB0eSwgdGhlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byBkbyBoZXJlLlxuICBpZiAocmVsYXRpdmUuaHJlZiA9PT0gJycpIHtcbiAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gaHJlZnMgbGlrZSAvL2Zvby9iYXIgYWx3YXlzIGN1dCB0byB0aGUgcHJvdG9jb2wuXG4gIGlmIChyZWxhdGl2ZS5zbGFzaGVzICYmICFyZWxhdGl2ZS5wcm90b2NvbCkge1xuICAgIC8vIHRha2UgZXZlcnl0aGluZyBleGNlcHQgdGhlIHByb3RvY29sIGZyb20gcmVsYXRpdmVcbiAgICB2YXIgcmtleXMgPSBPYmplY3Qua2V5cyhyZWxhdGl2ZSk7XG4gICAgZm9yICh2YXIgcmsgPSAwOyByayA8IHJrZXlzLmxlbmd0aDsgcmsrKykge1xuICAgICAgdmFyIHJrZXkgPSBya2V5c1tya107XG4gICAgICBpZiAocmtleSAhPT0gJ3Byb3RvY29sJylcbiAgICAgICAgcmVzdWx0W3JrZXldID0gcmVsYXRpdmVbcmtleV07XG4gICAgfVxuXG4gICAgLy91cmxQYXJzZSBhcHBlbmRzIHRyYWlsaW5nIC8gdG8gdXJscyBsaWtlIGh0dHA6Ly93d3cuZXhhbXBsZS5jb21cbiAgICBpZiAoc2xhc2hlZFByb3RvY29sW3Jlc3VsdC5wcm90b2NvbF0gJiZcbiAgICAgICAgcmVzdWx0Lmhvc3RuYW1lICYmICFyZXN1bHQucGF0aG5hbWUpIHtcbiAgICAgIHJlc3VsdC5wYXRoID0gcmVzdWx0LnBhdGhuYW1lID0gJy8nO1xuICAgIH1cblxuICAgIHJlc3VsdC5ocmVmID0gcmVzdWx0LmZvcm1hdCgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBpZiAocmVsYXRpdmUucHJvdG9jb2wgJiYgcmVsYXRpdmUucHJvdG9jb2wgIT09IHJlc3VsdC5wcm90b2NvbCkge1xuICAgIC8vIGlmIGl0J3MgYSBrbm93biB1cmwgcHJvdG9jb2wsIHRoZW4gY2hhbmdpbmdcbiAgICAvLyB0aGUgcHJvdG9jb2wgZG9lcyB3ZWlyZCB0aGluZ3NcbiAgICAvLyBmaXJzdCwgaWYgaXQncyBub3QgZmlsZTosIHRoZW4gd2UgTVVTVCBoYXZlIGEgaG9zdCxcbiAgICAvLyBhbmQgaWYgdGhlcmUgd2FzIGEgcGF0aFxuICAgIC8vIHRvIGJlZ2luIHdpdGgsIHRoZW4gd2UgTVVTVCBoYXZlIGEgcGF0aC5cbiAgICAvLyBpZiBpdCBpcyBmaWxlOiwgdGhlbiB0aGUgaG9zdCBpcyBkcm9wcGVkLFxuICAgIC8vIGJlY2F1c2UgdGhhdCdzIGtub3duIHRvIGJlIGhvc3RsZXNzLlxuICAgIC8vIGFueXRoaW5nIGVsc2UgaXMgYXNzdW1lZCB0byBiZSBhYnNvbHV0ZS5cbiAgICBpZiAoIXNsYXNoZWRQcm90b2NvbFtyZWxhdGl2ZS5wcm90b2NvbF0pIHtcbiAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocmVsYXRpdmUpO1xuICAgICAgZm9yICh2YXIgdiA9IDA7IHYgPCBrZXlzLmxlbmd0aDsgdisrKSB7XG4gICAgICAgIHZhciBrID0ga2V5c1t2XTtcbiAgICAgICAgcmVzdWx0W2tdID0gcmVsYXRpdmVba107XG4gICAgICB9XG4gICAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmVzdWx0LnByb3RvY29sID0gcmVsYXRpdmUucHJvdG9jb2w7XG4gICAgaWYgKCFyZWxhdGl2ZS5ob3N0ICYmICFob3N0bGVzc1Byb3RvY29sW3JlbGF0aXZlLnByb3RvY29sXSkge1xuICAgICAgdmFyIHJlbFBhdGggPSAocmVsYXRpdmUucGF0aG5hbWUgfHwgJycpLnNwbGl0KCcvJyk7XG4gICAgICB3aGlsZSAocmVsUGF0aC5sZW5ndGggJiYgIShyZWxhdGl2ZS5ob3N0ID0gcmVsUGF0aC5zaGlmdCgpKSk7XG4gICAgICBpZiAoIXJlbGF0aXZlLmhvc3QpIHJlbGF0aXZlLmhvc3QgPSAnJztcbiAgICAgIGlmICghcmVsYXRpdmUuaG9zdG5hbWUpIHJlbGF0aXZlLmhvc3RuYW1lID0gJyc7XG4gICAgICBpZiAocmVsUGF0aFswXSAhPT0gJycpIHJlbFBhdGgudW5zaGlmdCgnJyk7XG4gICAgICBpZiAocmVsUGF0aC5sZW5ndGggPCAyKSByZWxQYXRoLnVuc2hpZnQoJycpO1xuICAgICAgcmVzdWx0LnBhdGhuYW1lID0gcmVsUGF0aC5qb2luKCcvJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wYXRobmFtZSA9IHJlbGF0aXZlLnBhdGhuYW1lO1xuICAgIH1cbiAgICByZXN1bHQuc2VhcmNoID0gcmVsYXRpdmUuc2VhcmNoO1xuICAgIHJlc3VsdC5xdWVyeSA9IHJlbGF0aXZlLnF1ZXJ5O1xuICAgIHJlc3VsdC5ob3N0ID0gcmVsYXRpdmUuaG9zdCB8fCAnJztcbiAgICByZXN1bHQuYXV0aCA9IHJlbGF0aXZlLmF1dGg7XG4gICAgcmVzdWx0Lmhvc3RuYW1lID0gcmVsYXRpdmUuaG9zdG5hbWUgfHwgcmVsYXRpdmUuaG9zdDtcbiAgICByZXN1bHQucG9ydCA9IHJlbGF0aXZlLnBvcnQ7XG4gICAgLy8gdG8gc3VwcG9ydCBodHRwLnJlcXVlc3RcbiAgICBpZiAocmVzdWx0LnBhdGhuYW1lIHx8IHJlc3VsdC5zZWFyY2gpIHtcbiAgICAgIHZhciBwID0gcmVzdWx0LnBhdGhuYW1lIHx8ICcnO1xuICAgICAgdmFyIHMgPSByZXN1bHQuc2VhcmNoIHx8ICcnO1xuICAgICAgcmVzdWx0LnBhdGggPSBwICsgcztcbiAgICB9XG4gICAgcmVzdWx0LnNsYXNoZXMgPSByZXN1bHQuc2xhc2hlcyB8fCByZWxhdGl2ZS5zbGFzaGVzO1xuICAgIHJlc3VsdC5ocmVmID0gcmVzdWx0LmZvcm1hdCgpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICB2YXIgaXNTb3VyY2VBYnMgPSAocmVzdWx0LnBhdGhuYW1lICYmIHJlc3VsdC5wYXRobmFtZS5jaGFyQXQoMCkgPT09ICcvJyksXG4gICAgICBpc1JlbEFicyA9IChcbiAgICAgICAgICByZWxhdGl2ZS5ob3N0IHx8XG4gICAgICAgICAgcmVsYXRpdmUucGF0aG5hbWUgJiYgcmVsYXRpdmUucGF0aG5hbWUuY2hhckF0KDApID09PSAnLydcbiAgICAgICksXG4gICAgICBtdXN0RW5kQWJzID0gKGlzUmVsQWJzIHx8IGlzU291cmNlQWJzIHx8XG4gICAgICAgICAgICAgICAgICAgIChyZXN1bHQuaG9zdCAmJiByZWxhdGl2ZS5wYXRobmFtZSkpLFxuICAgICAgcmVtb3ZlQWxsRG90cyA9IG11c3RFbmRBYnMsXG4gICAgICBzcmNQYXRoID0gcmVzdWx0LnBhdGhuYW1lICYmIHJlc3VsdC5wYXRobmFtZS5zcGxpdCgnLycpIHx8IFtdLFxuICAgICAgcmVsUGF0aCA9IHJlbGF0aXZlLnBhdGhuYW1lICYmIHJlbGF0aXZlLnBhdGhuYW1lLnNwbGl0KCcvJykgfHwgW10sXG4gICAgICBwc3ljaG90aWMgPSByZXN1bHQucHJvdG9jb2wgJiYgIXNsYXNoZWRQcm90b2NvbFtyZXN1bHQucHJvdG9jb2xdO1xuXG4gIC8vIGlmIHRoZSB1cmwgaXMgYSBub24tc2xhc2hlZCB1cmwsIHRoZW4gcmVsYXRpdmVcbiAgLy8gbGlua3MgbGlrZSAuLi8uLiBzaG91bGQgYmUgYWJsZVxuICAvLyB0byBjcmF3bCB1cCB0byB0aGUgaG9zdG5hbWUsIGFzIHdlbGwuICBUaGlzIGlzIHN0cmFuZ2UuXG4gIC8vIHJlc3VsdC5wcm90b2NvbCBoYXMgYWxyZWFkeSBiZWVuIHNldCBieSBub3cuXG4gIC8vIExhdGVyIG9uLCBwdXQgdGhlIGZpcnN0IHBhdGggcGFydCBpbnRvIHRoZSBob3N0IGZpZWxkLlxuICBpZiAocHN5Y2hvdGljKSB7XG4gICAgcmVzdWx0Lmhvc3RuYW1lID0gJyc7XG4gICAgcmVzdWx0LnBvcnQgPSBudWxsO1xuICAgIGlmIChyZXN1bHQuaG9zdCkge1xuICAgICAgaWYgKHNyY1BhdGhbMF0gPT09ICcnKSBzcmNQYXRoWzBdID0gcmVzdWx0Lmhvc3Q7XG4gICAgICBlbHNlIHNyY1BhdGgudW5zaGlmdChyZXN1bHQuaG9zdCk7XG4gICAgfVxuICAgIHJlc3VsdC5ob3N0ID0gJyc7XG4gICAgaWYgKHJlbGF0aXZlLnByb3RvY29sKSB7XG4gICAgICByZWxhdGl2ZS5ob3N0bmFtZSA9IG51bGw7XG4gICAgICByZWxhdGl2ZS5wb3J0ID0gbnVsbDtcbiAgICAgIGlmIChyZWxhdGl2ZS5ob3N0KSB7XG4gICAgICAgIGlmIChyZWxQYXRoWzBdID09PSAnJykgcmVsUGF0aFswXSA9IHJlbGF0aXZlLmhvc3Q7XG4gICAgICAgIGVsc2UgcmVsUGF0aC51bnNoaWZ0KHJlbGF0aXZlLmhvc3QpO1xuICAgICAgfVxuICAgICAgcmVsYXRpdmUuaG9zdCA9IG51bGw7XG4gICAgfVxuICAgIG11c3RFbmRBYnMgPSBtdXN0RW5kQWJzICYmIChyZWxQYXRoWzBdID09PSAnJyB8fCBzcmNQYXRoWzBdID09PSAnJyk7XG4gIH1cblxuICBpZiAoaXNSZWxBYnMpIHtcbiAgICAvLyBpdCdzIGFic29sdXRlLlxuICAgIHJlc3VsdC5ob3N0ID0gKHJlbGF0aXZlLmhvc3QgfHwgcmVsYXRpdmUuaG9zdCA9PT0gJycpID9cbiAgICAgICAgICAgICAgICAgIHJlbGF0aXZlLmhvc3QgOiByZXN1bHQuaG9zdDtcbiAgICByZXN1bHQuaG9zdG5hbWUgPSAocmVsYXRpdmUuaG9zdG5hbWUgfHwgcmVsYXRpdmUuaG9zdG5hbWUgPT09ICcnKSA/XG4gICAgICAgICAgICAgICAgICAgICAgcmVsYXRpdmUuaG9zdG5hbWUgOiByZXN1bHQuaG9zdG5hbWU7XG4gICAgcmVzdWx0LnNlYXJjaCA9IHJlbGF0aXZlLnNlYXJjaDtcbiAgICByZXN1bHQucXVlcnkgPSByZWxhdGl2ZS5xdWVyeTtcbiAgICBzcmNQYXRoID0gcmVsUGF0aDtcbiAgICAvLyBmYWxsIHRocm91Z2ggdG8gdGhlIGRvdC1oYW5kbGluZyBiZWxvdy5cbiAgfSBlbHNlIGlmIChyZWxQYXRoLmxlbmd0aCkge1xuICAgIC8vIGl0J3MgcmVsYXRpdmVcbiAgICAvLyB0aHJvdyBhd2F5IHRoZSBleGlzdGluZyBmaWxlLCBhbmQgdGFrZSB0aGUgbmV3IHBhdGggaW5zdGVhZC5cbiAgICBpZiAoIXNyY1BhdGgpIHNyY1BhdGggPSBbXTtcbiAgICBzcmNQYXRoLnBvcCgpO1xuICAgIHNyY1BhdGggPSBzcmNQYXRoLmNvbmNhdChyZWxQYXRoKTtcbiAgICByZXN1bHQuc2VhcmNoID0gcmVsYXRpdmUuc2VhcmNoO1xuICAgIHJlc3VsdC5xdWVyeSA9IHJlbGF0aXZlLnF1ZXJ5O1xuICB9IGVsc2UgaWYgKCF1dGlsLmlzTnVsbE9yVW5kZWZpbmVkKHJlbGF0aXZlLnNlYXJjaCkpIHtcbiAgICAvLyBqdXN0IHB1bGwgb3V0IHRoZSBzZWFyY2guXG4gICAgLy8gbGlrZSBocmVmPSc/Zm9vJy5cbiAgICAvLyBQdXQgdGhpcyBhZnRlciB0aGUgb3RoZXIgdHdvIGNhc2VzIGJlY2F1c2UgaXQgc2ltcGxpZmllcyB0aGUgYm9vbGVhbnNcbiAgICBpZiAocHN5Y2hvdGljKSB7XG4gICAgICByZXN1bHQuaG9zdG5hbWUgPSByZXN1bHQuaG9zdCA9IHNyY1BhdGguc2hpZnQoKTtcbiAgICAgIC8vb2NjYXRpb25hbHkgdGhlIGF1dGggY2FuIGdldCBzdHVjayBvbmx5IGluIGhvc3RcbiAgICAgIC8vdGhpcyBlc3BlY2lhbGx5IGhhcHBlbnMgaW4gY2FzZXMgbGlrZVxuICAgICAgLy91cmwucmVzb2x2ZU9iamVjdCgnbWFpbHRvOmxvY2FsMUBkb21haW4xJywgJ2xvY2FsMkBkb21haW4yJylcbiAgICAgIHZhciBhdXRoSW5Ib3N0ID0gcmVzdWx0Lmhvc3QgJiYgcmVzdWx0Lmhvc3QuaW5kZXhPZignQCcpID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5ob3N0LnNwbGl0KCdAJykgOiBmYWxzZTtcbiAgICAgIGlmIChhdXRoSW5Ib3N0KSB7XG4gICAgICAgIHJlc3VsdC5hdXRoID0gYXV0aEluSG9zdC5zaGlmdCgpO1xuICAgICAgICByZXN1bHQuaG9zdCA9IHJlc3VsdC5ob3N0bmFtZSA9IGF1dGhJbkhvc3Quc2hpZnQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0LnNlYXJjaCA9IHJlbGF0aXZlLnNlYXJjaDtcbiAgICByZXN1bHQucXVlcnkgPSByZWxhdGl2ZS5xdWVyeTtcbiAgICAvL3RvIHN1cHBvcnQgaHR0cC5yZXF1ZXN0XG4gICAgaWYgKCF1dGlsLmlzTnVsbChyZXN1bHQucGF0aG5hbWUpIHx8ICF1dGlsLmlzTnVsbChyZXN1bHQuc2VhcmNoKSkge1xuICAgICAgcmVzdWx0LnBhdGggPSAocmVzdWx0LnBhdGhuYW1lID8gcmVzdWx0LnBhdGhuYW1lIDogJycpICtcbiAgICAgICAgICAgICAgICAgICAgKHJlc3VsdC5zZWFyY2ggPyByZXN1bHQuc2VhcmNoIDogJycpO1xuICAgIH1cbiAgICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaWYgKCFzcmNQYXRoLmxlbmd0aCkge1xuICAgIC8vIG5vIHBhdGggYXQgYWxsLiAgZWFzeS5cbiAgICAvLyB3ZSd2ZSBhbHJlYWR5IGhhbmRsZWQgdGhlIG90aGVyIHN0dWZmIGFib3ZlLlxuICAgIHJlc3VsdC5wYXRobmFtZSA9IG51bGw7XG4gICAgLy90byBzdXBwb3J0IGh0dHAucmVxdWVzdFxuICAgIGlmIChyZXN1bHQuc2VhcmNoKSB7XG4gICAgICByZXN1bHQucGF0aCA9ICcvJyArIHJlc3VsdC5zZWFyY2g7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5wYXRoID0gbnVsbDtcbiAgICB9XG4gICAgcmVzdWx0LmhyZWYgPSByZXN1bHQuZm9ybWF0KCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIGlmIGEgdXJsIEVORHMgaW4gLiBvciAuLiwgdGhlbiBpdCBtdXN0IGdldCBhIHRyYWlsaW5nIHNsYXNoLlxuICAvLyBob3dldmVyLCBpZiBpdCBlbmRzIGluIGFueXRoaW5nIGVsc2Ugbm9uLXNsYXNoeSxcbiAgLy8gdGhlbiBpdCBtdXN0IE5PVCBnZXQgYSB0cmFpbGluZyBzbGFzaC5cbiAgdmFyIGxhc3QgPSBzcmNQYXRoLnNsaWNlKC0xKVswXTtcbiAgdmFyIGhhc1RyYWlsaW5nU2xhc2ggPSAoXG4gICAgICAocmVzdWx0Lmhvc3QgfHwgcmVsYXRpdmUuaG9zdCB8fCBzcmNQYXRoLmxlbmd0aCA+IDEpICYmXG4gICAgICAobGFzdCA9PT0gJy4nIHx8IGxhc3QgPT09ICcuLicpIHx8IGxhc3QgPT09ICcnKTtcblxuICAvLyBzdHJpcCBzaW5nbGUgZG90cywgcmVzb2x2ZSBkb3VibGUgZG90cyB0byBwYXJlbnQgZGlyXG4gIC8vIGlmIHRoZSBwYXRoIHRyaWVzIHRvIGdvIGFib3ZlIHRoZSByb290LCBgdXBgIGVuZHMgdXAgPiAwXG4gIHZhciB1cCA9IDA7XG4gIGZvciAodmFyIGkgPSBzcmNQYXRoLmxlbmd0aDsgaSA+PSAwOyBpLS0pIHtcbiAgICBsYXN0ID0gc3JjUGF0aFtpXTtcbiAgICBpZiAobGFzdCA9PT0gJy4nKSB7XG4gICAgICBzcmNQYXRoLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKGxhc3QgPT09ICcuLicpIHtcbiAgICAgIHNyY1BhdGguc3BsaWNlKGksIDEpO1xuICAgICAgdXArKztcbiAgICB9IGVsc2UgaWYgKHVwKSB7XG4gICAgICBzcmNQYXRoLnNwbGljZShpLCAxKTtcbiAgICAgIHVwLS07XG4gICAgfVxuICB9XG5cbiAgLy8gaWYgdGhlIHBhdGggaXMgYWxsb3dlZCB0byBnbyBhYm92ZSB0aGUgcm9vdCwgcmVzdG9yZSBsZWFkaW5nIC4uc1xuICBpZiAoIW11c3RFbmRBYnMgJiYgIXJlbW92ZUFsbERvdHMpIHtcbiAgICBmb3IgKDsgdXAtLTsgdXApIHtcbiAgICAgIHNyY1BhdGgudW5zaGlmdCgnLi4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAobXVzdEVuZEFicyAmJiBzcmNQYXRoWzBdICE9PSAnJyAmJlxuICAgICAgKCFzcmNQYXRoWzBdIHx8IHNyY1BhdGhbMF0uY2hhckF0KDApICE9PSAnLycpKSB7XG4gICAgc3JjUGF0aC51bnNoaWZ0KCcnKTtcbiAgfVxuXG4gIGlmIChoYXNUcmFpbGluZ1NsYXNoICYmIChzcmNQYXRoLmpvaW4oJy8nKS5zdWJzdHIoLTEpICE9PSAnLycpKSB7XG4gICAgc3JjUGF0aC5wdXNoKCcnKTtcbiAgfVxuXG4gIHZhciBpc0Fic29sdXRlID0gc3JjUGF0aFswXSA9PT0gJycgfHxcbiAgICAgIChzcmNQYXRoWzBdICYmIHNyY1BhdGhbMF0uY2hhckF0KDApID09PSAnLycpO1xuXG4gIC8vIHB1dCB0aGUgaG9zdCBiYWNrXG4gIGlmIChwc3ljaG90aWMpIHtcbiAgICByZXN1bHQuaG9zdG5hbWUgPSByZXN1bHQuaG9zdCA9IGlzQWJzb2x1dGUgPyAnJyA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmNQYXRoLmxlbmd0aCA/IHNyY1BhdGguc2hpZnQoKSA6ICcnO1xuICAgIC8vb2NjYXRpb25hbHkgdGhlIGF1dGggY2FuIGdldCBzdHVjayBvbmx5IGluIGhvc3RcbiAgICAvL3RoaXMgZXNwZWNpYWxseSBoYXBwZW5zIGluIGNhc2VzIGxpa2VcbiAgICAvL3VybC5yZXNvbHZlT2JqZWN0KCdtYWlsdG86bG9jYWwxQGRvbWFpbjEnLCAnbG9jYWwyQGRvbWFpbjInKVxuICAgIHZhciBhdXRoSW5Ib3N0ID0gcmVzdWx0Lmhvc3QgJiYgcmVzdWx0Lmhvc3QuaW5kZXhPZignQCcpID4gMCA/XG4gICAgICAgICAgICAgICAgICAgICByZXN1bHQuaG9zdC5zcGxpdCgnQCcpIDogZmFsc2U7XG4gICAgaWYgKGF1dGhJbkhvc3QpIHtcbiAgICAgIHJlc3VsdC5hdXRoID0gYXV0aEluSG9zdC5zaGlmdCgpO1xuICAgICAgcmVzdWx0Lmhvc3QgPSByZXN1bHQuaG9zdG5hbWUgPSBhdXRoSW5Ib3N0LnNoaWZ0KCk7XG4gICAgfVxuICB9XG5cbiAgbXVzdEVuZEFicyA9IG11c3RFbmRBYnMgfHwgKHJlc3VsdC5ob3N0ICYmIHNyY1BhdGgubGVuZ3RoKTtcblxuICBpZiAobXVzdEVuZEFicyAmJiAhaXNBYnNvbHV0ZSkge1xuICAgIHNyY1BhdGgudW5zaGlmdCgnJyk7XG4gIH1cblxuICBpZiAoIXNyY1BhdGgubGVuZ3RoKSB7XG4gICAgcmVzdWx0LnBhdGhuYW1lID0gbnVsbDtcbiAgICByZXN1bHQucGF0aCA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0LnBhdGhuYW1lID0gc3JjUGF0aC5qb2luKCcvJyk7XG4gIH1cblxuICAvL3RvIHN1cHBvcnQgcmVxdWVzdC5odHRwXG4gIGlmICghdXRpbC5pc051bGwocmVzdWx0LnBhdGhuYW1lKSB8fCAhdXRpbC5pc051bGwocmVzdWx0LnNlYXJjaCkpIHtcbiAgICByZXN1bHQucGF0aCA9IChyZXN1bHQucGF0aG5hbWUgPyByZXN1bHQucGF0aG5hbWUgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHJlc3VsdC5zZWFyY2ggPyByZXN1bHQuc2VhcmNoIDogJycpO1xuICB9XG4gIHJlc3VsdC5hdXRoID0gcmVsYXRpdmUuYXV0aCB8fCByZXN1bHQuYXV0aDtcbiAgcmVzdWx0LnNsYXNoZXMgPSByZXN1bHQuc2xhc2hlcyB8fCByZWxhdGl2ZS5zbGFzaGVzO1xuICByZXN1bHQuaHJlZiA9IHJlc3VsdC5mb3JtYXQoKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblVybC5wcm90b3R5cGUucGFyc2VIb3N0ID0gZnVuY3Rpb24oKSB7XG4gIHZhciBob3N0ID0gdGhpcy5ob3N0O1xuICB2YXIgcG9ydCA9IHBvcnRQYXR0ZXJuLmV4ZWMoaG9zdCk7XG4gIGlmIChwb3J0KSB7XG4gICAgcG9ydCA9IHBvcnRbMF07XG4gICAgaWYgKHBvcnQgIT09ICc6Jykge1xuICAgICAgdGhpcy5wb3J0ID0gcG9ydC5zdWJzdHIoMSk7XG4gICAgfVxuICAgIGhvc3QgPSBob3N0LnN1YnN0cigwLCBob3N0Lmxlbmd0aCAtIHBvcnQubGVuZ3RoKTtcbiAgfVxuICBpZiAoaG9zdCkgdGhpcy5ob3N0bmFtZSA9IGhvc3Q7XG59O1xuIiwiLyohIGh0dHBzOi8vbXRocy5iZS9wdW55Y29kZSB2MS40LjEgYnkgQG1hdGhpYXMgKi9cbjsoZnVuY3Rpb24ocm9vdCkge1xuXG5cdC8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZXMgKi9cblx0dmFyIGZyZWVFeHBvcnRzID0gdHlwZW9mIGV4cG9ydHMgPT0gJ29iamVjdCcgJiYgZXhwb3J0cyAmJlxuXHRcdCFleHBvcnRzLm5vZGVUeXBlICYmIGV4cG9ydHM7XG5cdHZhciBmcmVlTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PSAnb2JqZWN0JyAmJiBtb2R1bGUgJiZcblx0XHQhbW9kdWxlLm5vZGVUeXBlICYmIG1vZHVsZTtcblx0dmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbDtcblx0aWYgKFxuXHRcdGZyZWVHbG9iYWwuZ2xvYmFsID09PSBmcmVlR2xvYmFsIHx8XG5cdFx0ZnJlZUdsb2JhbC53aW5kb3cgPT09IGZyZWVHbG9iYWwgfHxcblx0XHRmcmVlR2xvYmFsLnNlbGYgPT09IGZyZWVHbG9iYWxcblx0KSB7XG5cdFx0cm9vdCA9IGZyZWVHbG9iYWw7XG5cdH1cblxuXHQvKipcblx0ICogVGhlIGBwdW55Y29kZWAgb2JqZWN0LlxuXHQgKiBAbmFtZSBwdW55Y29kZVxuXHQgKiBAdHlwZSBPYmplY3Rcblx0ICovXG5cdHZhciBwdW55Y29kZSxcblxuXHQvKiogSGlnaGVzdCBwb3NpdGl2ZSBzaWduZWQgMzItYml0IGZsb2F0IHZhbHVlICovXG5cdG1heEludCA9IDIxNDc0ODM2NDcsIC8vIGFrYS4gMHg3RkZGRkZGRiBvciAyXjMxLTFcblxuXHQvKiogQm9vdHN0cmluZyBwYXJhbWV0ZXJzICovXG5cdGJhc2UgPSAzNixcblx0dE1pbiA9IDEsXG5cdHRNYXggPSAyNixcblx0c2tldyA9IDM4LFxuXHRkYW1wID0gNzAwLFxuXHRpbml0aWFsQmlhcyA9IDcyLFxuXHRpbml0aWFsTiA9IDEyOCwgLy8gMHg4MFxuXHRkZWxpbWl0ZXIgPSAnLScsIC8vICdcXHgyRCdcblxuXHQvKiogUmVndWxhciBleHByZXNzaW9ucyAqL1xuXHRyZWdleFB1bnljb2RlID0gL154bi0tLyxcblx0cmVnZXhOb25BU0NJSSA9IC9bXlxceDIwLVxceDdFXS8sIC8vIHVucHJpbnRhYmxlIEFTQ0lJIGNoYXJzICsgbm9uLUFTQ0lJIGNoYXJzXG5cdHJlZ2V4U2VwYXJhdG9ycyA9IC9bXFx4MkVcXHUzMDAyXFx1RkYwRVxcdUZGNjFdL2csIC8vIFJGQyAzNDkwIHNlcGFyYXRvcnNcblxuXHQvKiogRXJyb3IgbWVzc2FnZXMgKi9cblx0ZXJyb3JzID0ge1xuXHRcdCdvdmVyZmxvdyc6ICdPdmVyZmxvdzogaW5wdXQgbmVlZHMgd2lkZXIgaW50ZWdlcnMgdG8gcHJvY2VzcycsXG5cdFx0J25vdC1iYXNpYyc6ICdJbGxlZ2FsIGlucHV0ID49IDB4ODAgKG5vdCBhIGJhc2ljIGNvZGUgcG9pbnQpJyxcblx0XHQnaW52YWxpZC1pbnB1dCc6ICdJbnZhbGlkIGlucHV0J1xuXHR9LFxuXG5cdC8qKiBDb252ZW5pZW5jZSBzaG9ydGN1dHMgKi9cblx0YmFzZU1pbnVzVE1pbiA9IGJhc2UgLSB0TWluLFxuXHRmbG9vciA9IE1hdGguZmxvb3IsXG5cdHN0cmluZ0Zyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUsXG5cblx0LyoqIFRlbXBvcmFyeSB2YXJpYWJsZSAqL1xuXHRrZXk7XG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0LyoqXG5cdCAqIEEgZ2VuZXJpYyBlcnJvciB1dGlsaXR5IGZ1bmN0aW9uLlxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gdHlwZSBUaGUgZXJyb3IgdHlwZS5cblx0ICogQHJldHVybnMge0Vycm9yfSBUaHJvd3MgYSBgUmFuZ2VFcnJvcmAgd2l0aCB0aGUgYXBwbGljYWJsZSBlcnJvciBtZXNzYWdlLlxuXHQgKi9cblx0ZnVuY3Rpb24gZXJyb3IodHlwZSkge1xuXHRcdHRocm93IG5ldyBSYW5nZUVycm9yKGVycm9yc1t0eXBlXSk7XG5cdH1cblxuXHQvKipcblx0ICogQSBnZW5lcmljIGBBcnJheSNtYXBgIHV0aWxpdHkgZnVuY3Rpb24uXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIGZvciBldmVyeSBhcnJheVxuXHQgKiBpdGVtLlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IEEgbmV3IGFycmF5IG9mIHZhbHVlcyByZXR1cm5lZCBieSB0aGUgY2FsbGJhY2sgZnVuY3Rpb24uXG5cdCAqL1xuXHRmdW5jdGlvbiBtYXAoYXJyYXksIGZuKSB7XG5cdFx0dmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblx0XHR2YXIgcmVzdWx0ID0gW107XG5cdFx0d2hpbGUgKGxlbmd0aC0tKSB7XG5cdFx0XHRyZXN1bHRbbGVuZ3RoXSA9IGZuKGFycmF5W2xlbmd0aF0pO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cblx0LyoqXG5cdCAqIEEgc2ltcGxlIGBBcnJheSNtYXBgLWxpa2Ugd3JhcHBlciB0byB3b3JrIHdpdGggZG9tYWluIG5hbWUgc3RyaW5ncyBvciBlbWFpbFxuXHQgKiBhZGRyZXNzZXMuXG5cdCAqIEBwcml2YXRlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBkb21haW4gVGhlIGRvbWFpbiBuYW1lIG9yIGVtYWlsIGFkZHJlc3MuXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIFRoZSBmdW5jdGlvbiB0aGF0IGdldHMgY2FsbGVkIGZvciBldmVyeVxuXHQgKiBjaGFyYWN0ZXIuXG5cdCAqIEByZXR1cm5zIHtBcnJheX0gQSBuZXcgc3RyaW5nIG9mIGNoYXJhY3RlcnMgcmV0dXJuZWQgYnkgdGhlIGNhbGxiYWNrXG5cdCAqIGZ1bmN0aW9uLlxuXHQgKi9cblx0ZnVuY3Rpb24gbWFwRG9tYWluKHN0cmluZywgZm4pIHtcblx0XHR2YXIgcGFydHMgPSBzdHJpbmcuc3BsaXQoJ0AnKTtcblx0XHR2YXIgcmVzdWx0ID0gJyc7XG5cdFx0aWYgKHBhcnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdC8vIEluIGVtYWlsIGFkZHJlc3Nlcywgb25seSB0aGUgZG9tYWluIG5hbWUgc2hvdWxkIGJlIHB1bnljb2RlZC4gTGVhdmVcblx0XHRcdC8vIHRoZSBsb2NhbCBwYXJ0IChpLmUuIGV2ZXJ5dGhpbmcgdXAgdG8gYEBgKSBpbnRhY3QuXG5cdFx0XHRyZXN1bHQgPSBwYXJ0c1swXSArICdAJztcblx0XHRcdHN0cmluZyA9IHBhcnRzWzFdO1xuXHRcdH1cblx0XHQvLyBBdm9pZCBgc3BsaXQocmVnZXgpYCBmb3IgSUU4IGNvbXBhdGliaWxpdHkuIFNlZSAjMTcuXG5cdFx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocmVnZXhTZXBhcmF0b3JzLCAnXFx4MkUnKTtcblx0XHR2YXIgbGFiZWxzID0gc3RyaW5nLnNwbGl0KCcuJyk7XG5cdFx0dmFyIGVuY29kZWQgPSBtYXAobGFiZWxzLCBmbikuam9pbignLicpO1xuXHRcdHJldHVybiByZXN1bHQgKyBlbmNvZGVkO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYW4gYXJyYXkgY29udGFpbmluZyB0aGUgbnVtZXJpYyBjb2RlIHBvaW50cyBvZiBlYWNoIFVuaWNvZGVcblx0ICogY2hhcmFjdGVyIGluIHRoZSBzdHJpbmcuIFdoaWxlIEphdmFTY3JpcHQgdXNlcyBVQ1MtMiBpbnRlcm5hbGx5LFxuXHQgKiB0aGlzIGZ1bmN0aW9uIHdpbGwgY29udmVydCBhIHBhaXIgb2Ygc3Vycm9nYXRlIGhhbHZlcyAoZWFjaCBvZiB3aGljaFxuXHQgKiBVQ1MtMiBleHBvc2VzIGFzIHNlcGFyYXRlIGNoYXJhY3RlcnMpIGludG8gYSBzaW5nbGUgY29kZSBwb2ludCxcblx0ICogbWF0Y2hpbmcgVVRGLTE2LlxuXHQgKiBAc2VlIGBwdW55Y29kZS51Y3MyLmVuY29kZWBcblx0ICogQHNlZSA8aHR0cHM6Ly9tYXRoaWFzYnluZW5zLmJlL25vdGVzL2phdmFzY3JpcHQtZW5jb2Rpbmc+XG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZS51Y3MyXG5cdCAqIEBuYW1lIGRlY29kZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIFRoZSBVbmljb2RlIGlucHV0IHN0cmluZyAoVUNTLTIpLlxuXHQgKiBAcmV0dXJucyB7QXJyYXl9IFRoZSBuZXcgYXJyYXkgb2YgY29kZSBwb2ludHMuXG5cdCAqL1xuXHRmdW5jdGlvbiB1Y3MyZGVjb2RlKHN0cmluZykge1xuXHRcdHZhciBvdXRwdXQgPSBbXSxcblx0XHQgICAgY291bnRlciA9IDAsXG5cdFx0ICAgIGxlbmd0aCA9IHN0cmluZy5sZW5ndGgsXG5cdFx0ICAgIHZhbHVlLFxuXHRcdCAgICBleHRyYTtcblx0XHR3aGlsZSAoY291bnRlciA8IGxlbmd0aCkge1xuXHRcdFx0dmFsdWUgPSBzdHJpbmcuY2hhckNvZGVBdChjb3VudGVyKyspO1xuXHRcdFx0aWYgKHZhbHVlID49IDB4RDgwMCAmJiB2YWx1ZSA8PSAweERCRkYgJiYgY291bnRlciA8IGxlbmd0aCkge1xuXHRcdFx0XHQvLyBoaWdoIHN1cnJvZ2F0ZSwgYW5kIHRoZXJlIGlzIGEgbmV4dCBjaGFyYWN0ZXJcblx0XHRcdFx0ZXh0cmEgPSBzdHJpbmcuY2hhckNvZGVBdChjb3VudGVyKyspO1xuXHRcdFx0XHRpZiAoKGV4dHJhICYgMHhGQzAwKSA9PSAweERDMDApIHsgLy8gbG93IHN1cnJvZ2F0ZVxuXHRcdFx0XHRcdG91dHB1dC5wdXNoKCgodmFsdWUgJiAweDNGRikgPDwgMTApICsgKGV4dHJhICYgMHgzRkYpICsgMHgxMDAwMCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gdW5tYXRjaGVkIHN1cnJvZ2F0ZTsgb25seSBhcHBlbmQgdGhpcyBjb2RlIHVuaXQsIGluIGNhc2UgdGhlIG5leHRcblx0XHRcdFx0XHQvLyBjb2RlIHVuaXQgaXMgdGhlIGhpZ2ggc3Vycm9nYXRlIG9mIGEgc3Vycm9nYXRlIHBhaXJcblx0XHRcdFx0XHRvdXRwdXQucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdFx0Y291bnRlci0tO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvdXRwdXQucHVzaCh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlcyBhIHN0cmluZyBiYXNlZCBvbiBhbiBhcnJheSBvZiBudW1lcmljIGNvZGUgcG9pbnRzLlxuXHQgKiBAc2VlIGBwdW55Y29kZS51Y3MyLmRlY29kZWBcblx0ICogQG1lbWJlck9mIHB1bnljb2RlLnVjczJcblx0ICogQG5hbWUgZW5jb2RlXG5cdCAqIEBwYXJhbSB7QXJyYXl9IGNvZGVQb2ludHMgVGhlIGFycmF5IG9mIG51bWVyaWMgY29kZSBwb2ludHMuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBuZXcgVW5pY29kZSBzdHJpbmcgKFVDUy0yKS5cblx0ICovXG5cdGZ1bmN0aW9uIHVjczJlbmNvZGUoYXJyYXkpIHtcblx0XHRyZXR1cm4gbWFwKGFycmF5LCBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0dmFyIG91dHB1dCA9ICcnO1xuXHRcdFx0aWYgKHZhbHVlID4gMHhGRkZGKSB7XG5cdFx0XHRcdHZhbHVlIC09IDB4MTAwMDA7XG5cdFx0XHRcdG91dHB1dCArPSBzdHJpbmdGcm9tQ2hhckNvZGUodmFsdWUgPj4+IDEwICYgMHgzRkYgfCAweEQ4MDApO1xuXHRcdFx0XHR2YWx1ZSA9IDB4REMwMCB8IHZhbHVlICYgMHgzRkY7XG5cdFx0XHR9XG5cdFx0XHRvdXRwdXQgKz0gc3RyaW5nRnJvbUNoYXJDb2RlKHZhbHVlKTtcblx0XHRcdHJldHVybiBvdXRwdXQ7XG5cdFx0fSkuam9pbignJyk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBiYXNpYyBjb2RlIHBvaW50IGludG8gYSBkaWdpdC9pbnRlZ2VyLlxuXHQgKiBAc2VlIGBkaWdpdFRvQmFzaWMoKWBcblx0ICogQHByaXZhdGVcblx0ICogQHBhcmFtIHtOdW1iZXJ9IGNvZGVQb2ludCBUaGUgYmFzaWMgbnVtZXJpYyBjb2RlIHBvaW50IHZhbHVlLlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgbnVtZXJpYyB2YWx1ZSBvZiBhIGJhc2ljIGNvZGUgcG9pbnQgKGZvciB1c2UgaW5cblx0ICogcmVwcmVzZW50aW5nIGludGVnZXJzKSBpbiB0aGUgcmFuZ2UgYDBgIHRvIGBiYXNlIC0gMWAsIG9yIGBiYXNlYCBpZlxuXHQgKiB0aGUgY29kZSBwb2ludCBkb2VzIG5vdCByZXByZXNlbnQgYSB2YWx1ZS5cblx0ICovXG5cdGZ1bmN0aW9uIGJhc2ljVG9EaWdpdChjb2RlUG9pbnQpIHtcblx0XHRpZiAoY29kZVBvaW50IC0gNDggPCAxMCkge1xuXHRcdFx0cmV0dXJuIGNvZGVQb2ludCAtIDIyO1xuXHRcdH1cblx0XHRpZiAoY29kZVBvaW50IC0gNjUgPCAyNikge1xuXHRcdFx0cmV0dXJuIGNvZGVQb2ludCAtIDY1O1xuXHRcdH1cblx0XHRpZiAoY29kZVBvaW50IC0gOTcgPCAyNikge1xuXHRcdFx0cmV0dXJuIGNvZGVQb2ludCAtIDk3O1xuXHRcdH1cblx0XHRyZXR1cm4gYmFzZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIGRpZ2l0L2ludGVnZXIgaW50byBhIGJhc2ljIGNvZGUgcG9pbnQuXG5cdCAqIEBzZWUgYGJhc2ljVG9EaWdpdCgpYFxuXHQgKiBAcHJpdmF0ZVxuXHQgKiBAcGFyYW0ge051bWJlcn0gZGlnaXQgVGhlIG51bWVyaWMgdmFsdWUgb2YgYSBiYXNpYyBjb2RlIHBvaW50LlxuXHQgKiBAcmV0dXJucyB7TnVtYmVyfSBUaGUgYmFzaWMgY29kZSBwb2ludCB3aG9zZSB2YWx1ZSAod2hlbiB1c2VkIGZvclxuXHQgKiByZXByZXNlbnRpbmcgaW50ZWdlcnMpIGlzIGBkaWdpdGAsIHdoaWNoIG5lZWRzIHRvIGJlIGluIHRoZSByYW5nZVxuXHQgKiBgMGAgdG8gYGJhc2UgLSAxYC4gSWYgYGZsYWdgIGlzIG5vbi16ZXJvLCB0aGUgdXBwZXJjYXNlIGZvcm0gaXNcblx0ICogdXNlZDsgZWxzZSwgdGhlIGxvd2VyY2FzZSBmb3JtIGlzIHVzZWQuIFRoZSBiZWhhdmlvciBpcyB1bmRlZmluZWRcblx0ICogaWYgYGZsYWdgIGlzIG5vbi16ZXJvIGFuZCBgZGlnaXRgIGhhcyBubyB1cHBlcmNhc2UgZm9ybS5cblx0ICovXG5cdGZ1bmN0aW9uIGRpZ2l0VG9CYXNpYyhkaWdpdCwgZmxhZykge1xuXHRcdC8vICAwLi4yNSBtYXAgdG8gQVNDSUkgYS4ueiBvciBBLi5aXG5cdFx0Ly8gMjYuLjM1IG1hcCB0byBBU0NJSSAwLi45XG5cdFx0cmV0dXJuIGRpZ2l0ICsgMjIgKyA3NSAqIChkaWdpdCA8IDI2KSAtICgoZmxhZyAhPSAwKSA8PCA1KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBCaWFzIGFkYXB0YXRpb24gZnVuY3Rpb24gYXMgcGVyIHNlY3Rpb24gMy40IG9mIFJGQyAzNDkyLlxuXHQgKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjMzQ5MiNzZWN0aW9uLTMuNFxuXHQgKiBAcHJpdmF0ZVxuXHQgKi9cblx0ZnVuY3Rpb24gYWRhcHQoZGVsdGEsIG51bVBvaW50cywgZmlyc3RUaW1lKSB7XG5cdFx0dmFyIGsgPSAwO1xuXHRcdGRlbHRhID0gZmlyc3RUaW1lID8gZmxvb3IoZGVsdGEgLyBkYW1wKSA6IGRlbHRhID4+IDE7XG5cdFx0ZGVsdGEgKz0gZmxvb3IoZGVsdGEgLyBudW1Qb2ludHMpO1xuXHRcdGZvciAoLyogbm8gaW5pdGlhbGl6YXRpb24gKi87IGRlbHRhID4gYmFzZU1pbnVzVE1pbiAqIHRNYXggPj4gMTsgayArPSBiYXNlKSB7XG5cdFx0XHRkZWx0YSA9IGZsb29yKGRlbHRhIC8gYmFzZU1pbnVzVE1pbik7XG5cdFx0fVxuXHRcdHJldHVybiBmbG9vcihrICsgKGJhc2VNaW51c1RNaW4gKyAxKSAqIGRlbHRhIC8gKGRlbHRhICsgc2tldykpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgUHVueWNvZGUgc3RyaW5nIG9mIEFTQ0lJLW9ubHkgc3ltYm9scyB0byBhIHN0cmluZyBvZiBVbmljb2RlXG5cdCAqIHN5bWJvbHMuXG5cdCAqIEBtZW1iZXJPZiBwdW55Y29kZVxuXHQgKiBAcGFyYW0ge1N0cmluZ30gaW5wdXQgVGhlIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSByZXN1bHRpbmcgc3RyaW5nIG9mIFVuaWNvZGUgc3ltYm9scy5cblx0ICovXG5cdGZ1bmN0aW9uIGRlY29kZShpbnB1dCkge1xuXHRcdC8vIERvbid0IHVzZSBVQ1MtMlxuXHRcdHZhciBvdXRwdXQgPSBbXSxcblx0XHQgICAgaW5wdXRMZW5ndGggPSBpbnB1dC5sZW5ndGgsXG5cdFx0ICAgIG91dCxcblx0XHQgICAgaSA9IDAsXG5cdFx0ICAgIG4gPSBpbml0aWFsTixcblx0XHQgICAgYmlhcyA9IGluaXRpYWxCaWFzLFxuXHRcdCAgICBiYXNpYyxcblx0XHQgICAgaixcblx0XHQgICAgaW5kZXgsXG5cdFx0ICAgIG9sZGksXG5cdFx0ICAgIHcsXG5cdFx0ICAgIGssXG5cdFx0ICAgIGRpZ2l0LFxuXHRcdCAgICB0LFxuXHRcdCAgICAvKiogQ2FjaGVkIGNhbGN1bGF0aW9uIHJlc3VsdHMgKi9cblx0XHQgICAgYmFzZU1pbnVzVDtcblxuXHRcdC8vIEhhbmRsZSB0aGUgYmFzaWMgY29kZSBwb2ludHM6IGxldCBgYmFzaWNgIGJlIHRoZSBudW1iZXIgb2YgaW5wdXQgY29kZVxuXHRcdC8vIHBvaW50cyBiZWZvcmUgdGhlIGxhc3QgZGVsaW1pdGVyLCBvciBgMGAgaWYgdGhlcmUgaXMgbm9uZSwgdGhlbiBjb3B5XG5cdFx0Ly8gdGhlIGZpcnN0IGJhc2ljIGNvZGUgcG9pbnRzIHRvIHRoZSBvdXRwdXQuXG5cblx0XHRiYXNpYyA9IGlucHV0Lmxhc3RJbmRleE9mKGRlbGltaXRlcik7XG5cdFx0aWYgKGJhc2ljIDwgMCkge1xuXHRcdFx0YmFzaWMgPSAwO1xuXHRcdH1cblxuXHRcdGZvciAoaiA9IDA7IGogPCBiYXNpYzsgKytqKSB7XG5cdFx0XHQvLyBpZiBpdCdzIG5vdCBhIGJhc2ljIGNvZGUgcG9pbnRcblx0XHRcdGlmIChpbnB1dC5jaGFyQ29kZUF0KGopID49IDB4ODApIHtcblx0XHRcdFx0ZXJyb3IoJ25vdC1iYXNpYycpO1xuXHRcdFx0fVxuXHRcdFx0b3V0cHV0LnB1c2goaW5wdXQuY2hhckNvZGVBdChqKSk7XG5cdFx0fVxuXG5cdFx0Ly8gTWFpbiBkZWNvZGluZyBsb29wOiBzdGFydCBqdXN0IGFmdGVyIHRoZSBsYXN0IGRlbGltaXRlciBpZiBhbnkgYmFzaWMgY29kZVxuXHRcdC8vIHBvaW50cyB3ZXJlIGNvcGllZDsgc3RhcnQgYXQgdGhlIGJlZ2lubmluZyBvdGhlcndpc2UuXG5cblx0XHRmb3IgKGluZGV4ID0gYmFzaWMgPiAwID8gYmFzaWMgKyAxIDogMDsgaW5kZXggPCBpbnB1dExlbmd0aDsgLyogbm8gZmluYWwgZXhwcmVzc2lvbiAqLykge1xuXG5cdFx0XHQvLyBgaW5kZXhgIGlzIHRoZSBpbmRleCBvZiB0aGUgbmV4dCBjaGFyYWN0ZXIgdG8gYmUgY29uc3VtZWQuXG5cdFx0XHQvLyBEZWNvZGUgYSBnZW5lcmFsaXplZCB2YXJpYWJsZS1sZW5ndGggaW50ZWdlciBpbnRvIGBkZWx0YWAsXG5cdFx0XHQvLyB3aGljaCBnZXRzIGFkZGVkIHRvIGBpYC4gVGhlIG92ZXJmbG93IGNoZWNraW5nIGlzIGVhc2llclxuXHRcdFx0Ly8gaWYgd2UgaW5jcmVhc2UgYGlgIGFzIHdlIGdvLCB0aGVuIHN1YnRyYWN0IG9mZiBpdHMgc3RhcnRpbmdcblx0XHRcdC8vIHZhbHVlIGF0IHRoZSBlbmQgdG8gb2J0YWluIGBkZWx0YWAuXG5cdFx0XHRmb3IgKG9sZGkgPSBpLCB3ID0gMSwgayA9IGJhc2U7IC8qIG5vIGNvbmRpdGlvbiAqLzsgayArPSBiYXNlKSB7XG5cblx0XHRcdFx0aWYgKGluZGV4ID49IGlucHV0TGVuZ3RoKSB7XG5cdFx0XHRcdFx0ZXJyb3IoJ2ludmFsaWQtaW5wdXQnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGRpZ2l0ID0gYmFzaWNUb0RpZ2l0KGlucHV0LmNoYXJDb2RlQXQoaW5kZXgrKykpO1xuXG5cdFx0XHRcdGlmIChkaWdpdCA+PSBiYXNlIHx8IGRpZ2l0ID4gZmxvb3IoKG1heEludCAtIGkpIC8gdykpIHtcblx0XHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGkgKz0gZGlnaXQgKiB3O1xuXHRcdFx0XHR0ID0gayA8PSBiaWFzID8gdE1pbiA6IChrID49IGJpYXMgKyB0TWF4ID8gdE1heCA6IGsgLSBiaWFzKTtcblxuXHRcdFx0XHRpZiAoZGlnaXQgPCB0KSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRiYXNlTWludXNUID0gYmFzZSAtIHQ7XG5cdFx0XHRcdGlmICh3ID4gZmxvb3IobWF4SW50IC8gYmFzZU1pbnVzVCkpIHtcblx0XHRcdFx0XHRlcnJvcignb3ZlcmZsb3cnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHcgKj0gYmFzZU1pbnVzVDtcblxuXHRcdFx0fVxuXG5cdFx0XHRvdXQgPSBvdXRwdXQubGVuZ3RoICsgMTtcblx0XHRcdGJpYXMgPSBhZGFwdChpIC0gb2xkaSwgb3V0LCBvbGRpID09IDApO1xuXG5cdFx0XHQvLyBgaWAgd2FzIHN1cHBvc2VkIHRvIHdyYXAgYXJvdW5kIGZyb20gYG91dGAgdG8gYDBgLFxuXHRcdFx0Ly8gaW5jcmVtZW50aW5nIGBuYCBlYWNoIHRpbWUsIHNvIHdlJ2xsIGZpeCB0aGF0IG5vdzpcblx0XHRcdGlmIChmbG9vcihpIC8gb3V0KSA+IG1heEludCAtIG4pIHtcblx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHR9XG5cblx0XHRcdG4gKz0gZmxvb3IoaSAvIG91dCk7XG5cdFx0XHRpICU9IG91dDtcblxuXHRcdFx0Ly8gSW5zZXJ0IGBuYCBhdCBwb3NpdGlvbiBgaWAgb2YgdGhlIG91dHB1dFxuXHRcdFx0b3V0cHV0LnNwbGljZShpKyssIDAsIG4pO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHVjczJlbmNvZGUob3V0cHV0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0cyBhIHN0cmluZyBvZiBVbmljb2RlIHN5bWJvbHMgKGUuZy4gYSBkb21haW4gbmFtZSBsYWJlbCkgdG8gYVxuXHQgKiBQdW55Y29kZSBzdHJpbmcgb2YgQVNDSUktb25seSBzeW1ib2xzLlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBzdHJpbmcgb2YgVW5pY29kZSBzeW1ib2xzLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgcmVzdWx0aW5nIFB1bnljb2RlIHN0cmluZyBvZiBBU0NJSS1vbmx5IHN5bWJvbHMuXG5cdCAqL1xuXHRmdW5jdGlvbiBlbmNvZGUoaW5wdXQpIHtcblx0XHR2YXIgbixcblx0XHQgICAgZGVsdGEsXG5cdFx0ICAgIGhhbmRsZWRDUENvdW50LFxuXHRcdCAgICBiYXNpY0xlbmd0aCxcblx0XHQgICAgYmlhcyxcblx0XHQgICAgaixcblx0XHQgICAgbSxcblx0XHQgICAgcSxcblx0XHQgICAgayxcblx0XHQgICAgdCxcblx0XHQgICAgY3VycmVudFZhbHVlLFxuXHRcdCAgICBvdXRwdXQgPSBbXSxcblx0XHQgICAgLyoqIGBpbnB1dExlbmd0aGAgd2lsbCBob2xkIHRoZSBudW1iZXIgb2YgY29kZSBwb2ludHMgaW4gYGlucHV0YC4gKi9cblx0XHQgICAgaW5wdXRMZW5ndGgsXG5cdFx0ICAgIC8qKiBDYWNoZWQgY2FsY3VsYXRpb24gcmVzdWx0cyAqL1xuXHRcdCAgICBoYW5kbGVkQ1BDb3VudFBsdXNPbmUsXG5cdFx0ICAgIGJhc2VNaW51c1QsXG5cdFx0ICAgIHFNaW51c1Q7XG5cblx0XHQvLyBDb252ZXJ0IHRoZSBpbnB1dCBpbiBVQ1MtMiB0byBVbmljb2RlXG5cdFx0aW5wdXQgPSB1Y3MyZGVjb2RlKGlucHV0KTtcblxuXHRcdC8vIENhY2hlIHRoZSBsZW5ndGhcblx0XHRpbnB1dExlbmd0aCA9IGlucHV0Lmxlbmd0aDtcblxuXHRcdC8vIEluaXRpYWxpemUgdGhlIHN0YXRlXG5cdFx0biA9IGluaXRpYWxOO1xuXHRcdGRlbHRhID0gMDtcblx0XHRiaWFzID0gaW5pdGlhbEJpYXM7XG5cblx0XHQvLyBIYW5kbGUgdGhlIGJhc2ljIGNvZGUgcG9pbnRzXG5cdFx0Zm9yIChqID0gMDsgaiA8IGlucHV0TGVuZ3RoOyArK2opIHtcblx0XHRcdGN1cnJlbnRWYWx1ZSA9IGlucHV0W2pdO1xuXHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA8IDB4ODApIHtcblx0XHRcdFx0b3V0cHV0LnB1c2goc3RyaW5nRnJvbUNoYXJDb2RlKGN1cnJlbnRWYWx1ZSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGhhbmRsZWRDUENvdW50ID0gYmFzaWNMZW5ndGggPSBvdXRwdXQubGVuZ3RoO1xuXG5cdFx0Ly8gYGhhbmRsZWRDUENvdW50YCBpcyB0aGUgbnVtYmVyIG9mIGNvZGUgcG9pbnRzIHRoYXQgaGF2ZSBiZWVuIGhhbmRsZWQ7XG5cdFx0Ly8gYGJhc2ljTGVuZ3RoYCBpcyB0aGUgbnVtYmVyIG9mIGJhc2ljIGNvZGUgcG9pbnRzLlxuXG5cdFx0Ly8gRmluaXNoIHRoZSBiYXNpYyBzdHJpbmcgLSBpZiBpdCBpcyBub3QgZW1wdHkgLSB3aXRoIGEgZGVsaW1pdGVyXG5cdFx0aWYgKGJhc2ljTGVuZ3RoKSB7XG5cdFx0XHRvdXRwdXQucHVzaChkZWxpbWl0ZXIpO1xuXHRcdH1cblxuXHRcdC8vIE1haW4gZW5jb2RpbmcgbG9vcDpcblx0XHR3aGlsZSAoaGFuZGxlZENQQ291bnQgPCBpbnB1dExlbmd0aCkge1xuXG5cdFx0XHQvLyBBbGwgbm9uLWJhc2ljIGNvZGUgcG9pbnRzIDwgbiBoYXZlIGJlZW4gaGFuZGxlZCBhbHJlYWR5LiBGaW5kIHRoZSBuZXh0XG5cdFx0XHQvLyBsYXJnZXIgb25lOlxuXHRcdFx0Zm9yIChtID0gbWF4SW50LCBqID0gMDsgaiA8IGlucHV0TGVuZ3RoOyArK2opIHtcblx0XHRcdFx0Y3VycmVudFZhbHVlID0gaW5wdXRbal07XG5cdFx0XHRcdGlmIChjdXJyZW50VmFsdWUgPj0gbiAmJiBjdXJyZW50VmFsdWUgPCBtKSB7XG5cdFx0XHRcdFx0bSA9IGN1cnJlbnRWYWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBJbmNyZWFzZSBgZGVsdGFgIGVub3VnaCB0byBhZHZhbmNlIHRoZSBkZWNvZGVyJ3MgPG4saT4gc3RhdGUgdG8gPG0sMD4sXG5cdFx0XHQvLyBidXQgZ3VhcmQgYWdhaW5zdCBvdmVyZmxvd1xuXHRcdFx0aGFuZGxlZENQQ291bnRQbHVzT25lID0gaGFuZGxlZENQQ291bnQgKyAxO1xuXHRcdFx0aWYgKG0gLSBuID4gZmxvb3IoKG1heEludCAtIGRlbHRhKSAvIGhhbmRsZWRDUENvdW50UGx1c09uZSkpIHtcblx0XHRcdFx0ZXJyb3IoJ292ZXJmbG93Jyk7XG5cdFx0XHR9XG5cblx0XHRcdGRlbHRhICs9IChtIC0gbikgKiBoYW5kbGVkQ1BDb3VudFBsdXNPbmU7XG5cdFx0XHRuID0gbTtcblxuXHRcdFx0Zm9yIChqID0gMDsgaiA8IGlucHV0TGVuZ3RoOyArK2opIHtcblx0XHRcdFx0Y3VycmVudFZhbHVlID0gaW5wdXRbal07XG5cblx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA8IG4gJiYgKytkZWx0YSA+IG1heEludCkge1xuXHRcdFx0XHRcdGVycm9yKCdvdmVyZmxvdycpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGN1cnJlbnRWYWx1ZSA9PSBuKSB7XG5cdFx0XHRcdFx0Ly8gUmVwcmVzZW50IGRlbHRhIGFzIGEgZ2VuZXJhbGl6ZWQgdmFyaWFibGUtbGVuZ3RoIGludGVnZXJcblx0XHRcdFx0XHRmb3IgKHEgPSBkZWx0YSwgayA9IGJhc2U7IC8qIG5vIGNvbmRpdGlvbiAqLzsgayArPSBiYXNlKSB7XG5cdFx0XHRcdFx0XHR0ID0gayA8PSBiaWFzID8gdE1pbiA6IChrID49IGJpYXMgKyB0TWF4ID8gdE1heCA6IGsgLSBiaWFzKTtcblx0XHRcdFx0XHRcdGlmIChxIDwgdCkge1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHFNaW51c1QgPSBxIC0gdDtcblx0XHRcdFx0XHRcdGJhc2VNaW51c1QgPSBiYXNlIC0gdDtcblx0XHRcdFx0XHRcdG91dHB1dC5wdXNoKFxuXHRcdFx0XHRcdFx0XHRzdHJpbmdGcm9tQ2hhckNvZGUoZGlnaXRUb0Jhc2ljKHQgKyBxTWludXNUICUgYmFzZU1pbnVzVCwgMCkpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0cSA9IGZsb29yKHFNaW51c1QgLyBiYXNlTWludXNUKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRvdXRwdXQucHVzaChzdHJpbmdGcm9tQ2hhckNvZGUoZGlnaXRUb0Jhc2ljKHEsIDApKSk7XG5cdFx0XHRcdFx0YmlhcyA9IGFkYXB0KGRlbHRhLCBoYW5kbGVkQ1BDb3VudFBsdXNPbmUsIGhhbmRsZWRDUENvdW50ID09IGJhc2ljTGVuZ3RoKTtcblx0XHRcdFx0XHRkZWx0YSA9IDA7XG5cdFx0XHRcdFx0KytoYW5kbGVkQ1BDb3VudDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQrK2RlbHRhO1xuXHRcdFx0KytuO1xuXG5cdFx0fVxuXHRcdHJldHVybiBvdXRwdXQuam9pbignJyk7XG5cdH1cblxuXHQvKipcblx0ICogQ29udmVydHMgYSBQdW55Y29kZSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZG9tYWluIG5hbWUgb3IgYW4gZW1haWwgYWRkcmVzc1xuXHQgKiB0byBVbmljb2RlLiBPbmx5IHRoZSBQdW55Y29kZWQgcGFydHMgb2YgdGhlIGlucHV0IHdpbGwgYmUgY29udmVydGVkLCBpLmUuXG5cdCAqIGl0IGRvZXNuJ3QgbWF0dGVyIGlmIHlvdSBjYWxsIGl0IG9uIGEgc3RyaW5nIHRoYXQgaGFzIGFscmVhZHkgYmVlblxuXHQgKiBjb252ZXJ0ZWQgdG8gVW5pY29kZS5cblx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgUHVueWNvZGVkIGRvbWFpbiBuYW1lIG9yIGVtYWlsIGFkZHJlc3MgdG9cblx0ICogY29udmVydCB0byBVbmljb2RlLlxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBUaGUgVW5pY29kZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gUHVueWNvZGVcblx0ICogc3RyaW5nLlxuXHQgKi9cblx0ZnVuY3Rpb24gdG9Vbmljb2RlKGlucHV0KSB7XG5cdFx0cmV0dXJuIG1hcERvbWFpbihpbnB1dCwgZnVuY3Rpb24oc3RyaW5nKSB7XG5cdFx0XHRyZXR1cm4gcmVnZXhQdW55Y29kZS50ZXN0KHN0cmluZylcblx0XHRcdFx0PyBkZWNvZGUoc3RyaW5nLnNsaWNlKDQpLnRvTG93ZXJDYXNlKCkpXG5cdFx0XHRcdDogc3RyaW5nO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIENvbnZlcnRzIGEgVW5pY29kZSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZG9tYWluIG5hbWUgb3IgYW4gZW1haWwgYWRkcmVzcyB0b1xuXHQgKiBQdW55Y29kZS4gT25seSB0aGUgbm9uLUFTQ0lJIHBhcnRzIG9mIHRoZSBkb21haW4gbmFtZSB3aWxsIGJlIGNvbnZlcnRlZCxcblx0ICogaS5lLiBpdCBkb2Vzbid0IG1hdHRlciBpZiB5b3UgY2FsbCBpdCB3aXRoIGEgZG9tYWluIHRoYXQncyBhbHJlYWR5IGluXG5cdCAqIEFTQ0lJLlxuXHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0ICogQHBhcmFtIHtTdHJpbmd9IGlucHV0IFRoZSBkb21haW4gbmFtZSBvciBlbWFpbCBhZGRyZXNzIHRvIGNvbnZlcnQsIGFzIGFcblx0ICogVW5pY29kZSBzdHJpbmcuXG5cdCAqIEByZXR1cm5zIHtTdHJpbmd9IFRoZSBQdW55Y29kZSByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gZG9tYWluIG5hbWUgb3Jcblx0ICogZW1haWwgYWRkcmVzcy5cblx0ICovXG5cdGZ1bmN0aW9uIHRvQVNDSUkoaW5wdXQpIHtcblx0XHRyZXR1cm4gbWFwRG9tYWluKGlucHV0LCBmdW5jdGlvbihzdHJpbmcpIHtcblx0XHRcdHJldHVybiByZWdleE5vbkFTQ0lJLnRlc3Qoc3RyaW5nKVxuXHRcdFx0XHQ/ICd4bi0tJyArIGVuY29kZShzdHJpbmcpXG5cdFx0XHRcdDogc3RyaW5nO1xuXHRcdH0pO1xuXHR9XG5cblx0LyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cblx0LyoqIERlZmluZSB0aGUgcHVibGljIEFQSSAqL1xuXHRwdW55Y29kZSA9IHtcblx0XHQvKipcblx0XHQgKiBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGN1cnJlbnQgUHVueWNvZGUuanMgdmVyc2lvbiBudW1iZXIuXG5cdFx0ICogQG1lbWJlck9mIHB1bnljb2RlXG5cdFx0ICogQHR5cGUgU3RyaW5nXG5cdFx0ICovXG5cdFx0J3ZlcnNpb24nOiAnMS40LjEnLFxuXHRcdC8qKlxuXHRcdCAqIEFuIG9iamVjdCBvZiBtZXRob2RzIHRvIGNvbnZlcnQgZnJvbSBKYXZhU2NyaXB0J3MgaW50ZXJuYWwgY2hhcmFjdGVyXG5cdFx0ICogcmVwcmVzZW50YXRpb24gKFVDUy0yKSB0byBVbmljb2RlIGNvZGUgcG9pbnRzLCBhbmQgYmFjay5cblx0XHQgKiBAc2VlIDxodHRwczovL21hdGhpYXNieW5lbnMuYmUvbm90ZXMvamF2YXNjcmlwdC1lbmNvZGluZz5cblx0XHQgKiBAbWVtYmVyT2YgcHVueWNvZGVcblx0XHQgKiBAdHlwZSBPYmplY3Rcblx0XHQgKi9cblx0XHQndWNzMic6IHtcblx0XHRcdCdkZWNvZGUnOiB1Y3MyZGVjb2RlLFxuXHRcdFx0J2VuY29kZSc6IHVjczJlbmNvZGVcblx0XHR9LFxuXHRcdCdkZWNvZGUnOiBkZWNvZGUsXG5cdFx0J2VuY29kZSc6IGVuY29kZSxcblx0XHQndG9BU0NJSSc6IHRvQVNDSUksXG5cdFx0J3RvVW5pY29kZSc6IHRvVW5pY29kZVxuXHR9O1xuXG5cdC8qKiBFeHBvc2UgYHB1bnljb2RlYCAqL1xuXHQvLyBTb21lIEFNRCBidWlsZCBvcHRpbWl6ZXJzLCBsaWtlIHIuanMsIGNoZWNrIGZvciBzcGVjaWZpYyBjb25kaXRpb24gcGF0dGVybnNcblx0Ly8gbGlrZSB0aGUgZm9sbG93aW5nOlxuXHRpZiAoXG5cdFx0dHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmXG5cdFx0dHlwZW9mIGRlZmluZS5hbWQgPT0gJ29iamVjdCcgJiZcblx0XHRkZWZpbmUuYW1kXG5cdCkge1xuXHRcdGRlZmluZSgncHVueWNvZGUnLCBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBwdW55Y29kZTtcblx0XHR9KTtcblx0fSBlbHNlIGlmIChmcmVlRXhwb3J0cyAmJiBmcmVlTW9kdWxlKSB7XG5cdFx0aWYgKG1vZHVsZS5leHBvcnRzID09IGZyZWVFeHBvcnRzKSB7XG5cdFx0XHQvLyBpbiBOb2RlLmpzLCBpby5qcywgb3IgUmluZ29KUyB2MC44LjArXG5cdFx0XHRmcmVlTW9kdWxlLmV4cG9ydHMgPSBwdW55Y29kZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gaW4gTmFyd2hhbCBvciBSaW5nb0pTIHYwLjcuMC1cblx0XHRcdGZvciAoa2V5IGluIHB1bnljb2RlKSB7XG5cdFx0XHRcdHB1bnljb2RlLmhhc093blByb3BlcnR5KGtleSkgJiYgKGZyZWVFeHBvcnRzW2tleV0gPSBwdW55Y29kZVtrZXldKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0Ly8gaW4gUmhpbm8gb3IgYSB3ZWIgYnJvd3NlclxuXHRcdHJvb3QucHVueWNvZGUgPSBwdW55Y29kZTtcblx0fVxuXG59KHRoaXMpKTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGlzU3RyaW5nOiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gdHlwZW9mKGFyZykgPT09ICdzdHJpbmcnO1xuICB9LFxuICBpc09iamVjdDogZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHR5cGVvZihhcmcpID09PSAnb2JqZWN0JyAmJiBhcmcgIT09IG51bGw7XG4gIH0sXG4gIGlzTnVsbDogZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIGFyZyA9PT0gbnVsbDtcbiAgfSxcbiAgaXNOdWxsT3JVbmRlZmluZWQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBhcmcgPT0gbnVsbDtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5kZWNvZGUgPSBleHBvcnRzLnBhcnNlID0gcmVxdWlyZSgnLi9kZWNvZGUnKTtcbmV4cG9ydHMuZW5jb2RlID0gZXhwb3J0cy5zdHJpbmdpZnkgPSByZXF1aXJlKCcuL2VuY29kZScpO1xuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxuLy8gSWYgb2JqLmhhc093blByb3BlcnR5IGhhcyBiZWVuIG92ZXJyaWRkZW4sIHRoZW4gY2FsbGluZ1xuLy8gb2JqLmhhc093blByb3BlcnR5KHByb3ApIHdpbGwgYnJlYWsuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qb3llbnQvbm9kZS9pc3N1ZXMvMTcwN1xuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihxcywgc2VwLCBlcSwgb3B0aW9ucykge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgdmFyIG9iaiA9IHt9O1xuXG4gIGlmICh0eXBlb2YgcXMgIT09ICdzdHJpbmcnIHx8IHFzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICB2YXIgcmVnZXhwID0gL1xcKy9nO1xuICBxcyA9IHFzLnNwbGl0KHNlcCk7XG5cbiAgdmFyIG1heEtleXMgPSAxMDAwO1xuICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5tYXhLZXlzID09PSAnbnVtYmVyJykge1xuICAgIG1heEtleXMgPSBvcHRpb25zLm1heEtleXM7XG4gIH1cblxuICB2YXIgbGVuID0gcXMubGVuZ3RoO1xuICAvLyBtYXhLZXlzIDw9IDAgbWVhbnMgdGhhdCB3ZSBzaG91bGQgbm90IGxpbWl0IGtleXMgY291bnRcbiAgaWYgKG1heEtleXMgPiAwICYmIGxlbiA+IG1heEtleXMpIHtcbiAgICBsZW4gPSBtYXhLZXlzO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciB4ID0gcXNbaV0ucmVwbGFjZShyZWdleHAsICclMjAnKSxcbiAgICAgICAgaWR4ID0geC5pbmRleE9mKGVxKSxcbiAgICAgICAga3N0ciwgdnN0ciwgaywgdjtcblxuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAga3N0ciA9IHguc3Vic3RyKDAsIGlkeCk7XG4gICAgICB2c3RyID0geC5zdWJzdHIoaWR4ICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtzdHIgPSB4O1xuICAgICAgdnN0ciA9ICcnO1xuICAgIH1cblxuICAgIGsgPSBkZWNvZGVVUklDb21wb25lbnQoa3N0cik7XG4gICAgdiA9IGRlY29kZVVSSUNvbXBvbmVudCh2c3RyKTtcblxuICAgIGlmICghaGFzT3duUHJvcGVydHkob2JqLCBrKSkge1xuICAgICAgb2JqW2tdID0gdjtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgb2JqW2tdLnB1c2godik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrXSA9IFtvYmpba10sIHZdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHhzKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeHMpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBzdHJpbmdpZnlQcmltaXRpdmUgPSBmdW5jdGlvbih2KSB7XG4gIHN3aXRjaCAodHlwZW9mIHYpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcmV0dXJuIHY7XG5cbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHJldHVybiB2ID8gJ3RydWUnIDogJ2ZhbHNlJztcblxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgICByZXR1cm4gaXNGaW5pdGUodikgPyB2IDogJyc7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaiwgc2VwLCBlcSwgbmFtZSkge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgIG9iaiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBtYXAob2JqZWN0S2V5cyhvYmopLCBmdW5jdGlvbihrKSB7XG4gICAgICB2YXIga3MgPSBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKGspKSArIGVxO1xuICAgICAgaWYgKGlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgICByZXR1cm4gbWFwKG9ialtrXSwgZnVuY3Rpb24odikge1xuICAgICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUodikpO1xuICAgICAgICB9KS5qb2luKHNlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ga3MgKyBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG9ialtrXSkpO1xuICAgICAgfVxuICAgIH0pLmpvaW4oc2VwKTtcblxuICB9XG5cbiAgaWYgKCFuYW1lKSByZXR1cm4gJyc7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG5hbWUpKSArIGVxICtcbiAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqKSk7XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHhzKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeHMpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuZnVuY3Rpb24gbWFwICh4cywgZikge1xuICBpZiAoeHMubWFwKSByZXR1cm4geHMubWFwKGYpO1xuICB2YXIgcmVzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICByZXMucHVzaChmKHhzW2ldLCBpKSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxudmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciByZXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSByZXMucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaGVscGVycyA9IHJlcXVpcmUoJy4vaGVscGVycycpO1xuXG4vKiogQHR5cGUgVmFsaWRhdG9yUmVzdWx0ICovXG52YXIgVmFsaWRhdG9yUmVzdWx0ID0gaGVscGVycy5WYWxpZGF0b3JSZXN1bHQ7XG4vKiogQHR5cGUgU2NoZW1hRXJyb3IgKi9cbnZhciBTY2hlbWFFcnJvciA9IGhlbHBlcnMuU2NoZW1hRXJyb3I7XG5cbnZhciBhdHRyaWJ1dGUgPSB7fTtcblxuYXR0cmlidXRlLmlnbm9yZVByb3BlcnRpZXMgPSB7XG4gIC8vIGluZm9ybWF0aXZlIHByb3BlcnRpZXNcbiAgJ2lkJzogdHJ1ZSxcbiAgJ2RlZmF1bHQnOiB0cnVlLFxuICAnZGVzY3JpcHRpb24nOiB0cnVlLFxuICAndGl0bGUnOiB0cnVlLFxuICAvLyBhcmd1bWVudHMgdG8gb3RoZXIgcHJvcGVydGllc1xuICAnZXhjbHVzaXZlTWluaW11bSc6IHRydWUsXG4gICdleGNsdXNpdmVNYXhpbXVtJzogdHJ1ZSxcbiAgJ2FkZGl0aW9uYWxJdGVtcyc6IHRydWUsXG4gIC8vIHNwZWNpYWwtaGFuZGxlZCBwcm9wZXJ0aWVzXG4gICckc2NoZW1hJzogdHJ1ZSxcbiAgJyRyZWYnOiB0cnVlLFxuICAnZXh0ZW5kcyc6IHRydWVcbn07XG5cbi8qKlxuICogQG5hbWUgdmFsaWRhdG9yc1xuICovXG52YXIgdmFsaWRhdG9ycyA9IGF0dHJpYnV0ZS52YWxpZGF0b3JzID0ge307XG5cbi8qKlxuICogVmFsaWRhdGVzIHdoZXRoZXIgdGhlIGluc3RhbmNlIGlmIG9mIGEgY2VydGFpbiB0eXBlXG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEBwYXJhbSBzY2hlbWFcbiAqIEBwYXJhbSBvcHRpb25zXG4gKiBAcGFyYW0gY3R4XG4gKiBAcmV0dXJuIHtWYWxpZGF0b3JSZXN1bHR8bnVsbH1cbiAqL1xudmFsaWRhdG9ycy50eXBlID0gZnVuY3Rpb24gdmFsaWRhdGVUeXBlIChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpIHtcbiAgLy8gSWdub3JlIHVuZGVmaW5lZCBpbnN0YW5jZXNcbiAgaWYgKGluc3RhbmNlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgcmVzdWx0ID0gbmV3IFZhbGlkYXRvclJlc3VsdChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpO1xuICB2YXIgdHlwZXMgPSBBcnJheS5pc0FycmF5KHNjaGVtYS50eXBlKSA/IHNjaGVtYS50eXBlIDogW3NjaGVtYS50eXBlXTtcbiAgaWYgKCF0eXBlcy5zb21lKHRoaXMudGVzdFR5cGUuYmluZCh0aGlzLCBpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpKSkge1xuICAgIHZhciBsaXN0ID0gdHlwZXMubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gdi5pZCAmJiAoJzwnICsgdi5pZCArICc+JykgfHwgKHYrJycpO1xuICAgIH0pO1xuICAgIHJlc3VsdC5hZGRFcnJvcih7XG4gICAgICBuYW1lOiAndHlwZScsXG4gICAgICBhcmd1bWVudDogbGlzdCxcbiAgICAgIG1lc3NhZ2U6IFwiaXMgbm90IG9mIGEgdHlwZShzKSBcIiArIGxpc3QsXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmZ1bmN0aW9uIHRlc3RTY2hlbWFOb1Rocm93KGluc3RhbmNlLCBvcHRpb25zLCBjdHgsIGNhbGxiYWNrLCBzY2hlbWEpe1xuICB2YXIgdGhyb3dFcnJvciA9IG9wdGlvbnMudGhyb3dFcnJvcjtcbiAgb3B0aW9ucy50aHJvd0Vycm9yID0gZmFsc2U7XG4gIHZhciByZXMgPSB0aGlzLnZhbGlkYXRlU2NoZW1hKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCk7XG4gIG9wdGlvbnMudGhyb3dFcnJvciA9IHRocm93RXJyb3I7XG5cbiAgaWYgKCEgcmVzLnZhbGlkICYmIGNhbGxiYWNrIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICBjYWxsYmFjayhyZXMpO1xuICB9XG4gIHJldHVybiByZXMudmFsaWQ7XG59XG5cbi8qKlxuICogVmFsaWRhdGVzIHdoZXRoZXIgdGhlIGluc3RhbmNlIG1hdGNoZXMgc29tZSBvZiB0aGUgZ2l2ZW4gc2NoZW1hc1xuICogQHBhcmFtIGluc3RhbmNlXG4gKiBAcGFyYW0gc2NoZW1hXG4gKiBAcGFyYW0gb3B0aW9uc1xuICogQHBhcmFtIGN0eFxuICogQHJldHVybiB7VmFsaWRhdG9yUmVzdWx0fG51bGx9XG4gKi9cbnZhbGlkYXRvcnMuYW55T2YgPSBmdW5jdGlvbiB2YWxpZGF0ZUFueU9mIChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpIHtcbiAgLy8gSWdub3JlIHVuZGVmaW5lZCBpbnN0YW5jZXNcbiAgaWYgKGluc3RhbmNlID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICB2YXIgcmVzdWx0ID0gbmV3IFZhbGlkYXRvclJlc3VsdChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpO1xuICB2YXIgaW5uZXIgPSBuZXcgVmFsaWRhdG9yUmVzdWx0KGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCk7XG4gIGlmICghQXJyYXkuaXNBcnJheShzY2hlbWEuYW55T2YpKXtcbiAgICB0aHJvdyBuZXcgU2NoZW1hRXJyb3IoXCJhbnlPZiBtdXN0IGJlIGFuIGFycmF5XCIpO1xuICB9XG4gIGlmICghc2NoZW1hLmFueU9mLnNvbWUoXG4gICAgdGVzdFNjaGVtYU5vVGhyb3cuYmluZChcbiAgICAgIHRoaXMsIGluc3RhbmNlLCBvcHRpb25zLCBjdHgsIGZ1bmN0aW9uKHJlcyl7aW5uZXIuaW1wb3J0RXJyb3JzKHJlcyk7fVxuICAgICAgKSkpIHtcbiAgICB2YXIgbGlzdCA9IHNjaGVtYS5hbnlPZi5tYXAoZnVuY3Rpb24gKHYsIGkpIHtcbiAgICAgIHJldHVybiAodi5pZCAmJiAoJzwnICsgdi5pZCArICc+JykpIHx8ICh2LnRpdGxlICYmIEpTT04uc3RyaW5naWZ5KHYudGl0bGUpKSB8fCAodlsnJHJlZiddICYmICgnPCcgKyB2WyckcmVmJ10gKyAnPicpKSB8fCAnW3N1YnNjaGVtYSAnK2krJ10nO1xuICAgIH0pO1xuICAgIGlmIChvcHRpb25zLm5lc3RlZEVycm9ycykge1xuICAgICAgcmVzdWx0LmltcG9ydEVycm9ycyhpbm5lcik7XG4gICAgfVxuICAgIHJlc3VsdC5hZGRFcnJvcih7XG4gICAgICBuYW1lOiAnYW55T2YnLFxuICAgICAgYXJndW1lbnQ6IGxpc3QsXG4gICAgICBtZXNzYWdlOiBcImlzIG5vdCBhbnkgb2YgXCIgKyBsaXN0LmpvaW4oJywnKSxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgd2hldGhlciB0aGUgaW5zdGFuY2UgbWF0Y2hlcyBldmVyeSBnaXZlbiBzY2hlbWFcbiAqIEBwYXJhbSBpbnN0YW5jZVxuICogQHBhcmFtIHNjaGVtYVxuICogQHBhcmFtIG9wdGlvbnNcbiAqIEBwYXJhbSBjdHhcbiAqIEByZXR1cm4ge1N0cmluZ3xudWxsfVxuICovXG52YWxpZGF0b3JzLmFsbE9mID0gZnVuY3Rpb24gdmFsaWRhdGVBbGxPZiAoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KSB7XG4gIC8vIElnbm9yZSB1bmRlZmluZWQgaW5zdGFuY2VzXG4gIGlmIChpbnN0YW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKCFBcnJheS5pc0FycmF5KHNjaGVtYS5hbGxPZikpe1xuICAgIHRocm93IG5ldyBTY2hlbWFFcnJvcihcImFsbE9mIG11c3QgYmUgYW4gYXJyYXlcIik7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IG5ldyBWYWxpZGF0b3JSZXN1bHQoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBzY2hlbWEuYWxsT2YuZm9yRWFjaChmdW5jdGlvbih2LCBpKXtcbiAgICB2YXIgdmFsaWQgPSBzZWxmLnZhbGlkYXRlU2NoZW1hKGluc3RhbmNlLCB2LCBvcHRpb25zLCBjdHgpO1xuICAgIGlmKCF2YWxpZC52YWxpZCl7XG4gICAgICB2YXIgbXNnID0gKHYuaWQgJiYgKCc8JyArIHYuaWQgKyAnPicpKSB8fCAodi50aXRsZSAmJiBKU09OLnN0cmluZ2lmeSh2LnRpdGxlKSkgfHwgKHZbJyRyZWYnXSAmJiAoJzwnICsgdlsnJHJlZiddICsgJz4nKSkgfHwgJ1tzdWJzY2hlbWEgJytpKyddJztcbiAgICAgIHJlc3VsdC5hZGRFcnJvcih7XG4gICAgICAgIG5hbWU6ICdhbGxPZicsXG4gICAgICAgIGFyZ3VtZW50OiB7IGlkOiBtc2csIGxlbmd0aDogdmFsaWQuZXJyb3JzLmxlbmd0aCwgdmFsaWQ6IHZhbGlkIH0sXG4gICAgICAgIG1lc3NhZ2U6ICdkb2VzIG5vdCBtYXRjaCBhbGxPZiBzY2hlbWEgJyArIG1zZyArICcgd2l0aCAnICsgdmFsaWQuZXJyb3JzLmxlbmd0aCArICcgZXJyb3Jbc106JyxcbiAgICAgIH0pO1xuICAgICAgcmVzdWx0LmltcG9ydEVycm9ycyh2YWxpZCk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogVmFsaWRhdGVzIHdoZXRoZXIgdGhlIGluc3RhbmNlIG1hdGNoZXMgZXhhY3RseSBvbmUgb2YgdGhlIGdpdmVuIHNjaGVtYXNcbiAqIEBwYXJhbSBpbnN0YW5jZVxuICogQHBhcmFtIHNjaGVtYVxuICogQHBhcmFtIG9wdGlvbnNcbiAqIEBwYXJhbSBjdHhcbiAqIEByZXR1cm4ge1N0cmluZ3xudWxsfVxuICovXG52YWxpZGF0b3JzLm9uZU9mID0gZnVuY3Rpb24gdmFsaWRhdGVPbmVPZiAoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KSB7XG4gIC8vIElnbm9yZSB1bmRlZmluZWQgaW5zdGFuY2VzXG4gIGlmIChpbnN0YW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKCFBcnJheS5pc0FycmF5KHNjaGVtYS5vbmVPZikpe1xuICAgIHRocm93IG5ldyBTY2hlbWFFcnJvcihcIm9uZU9mIG11c3QgYmUgYW4gYXJyYXlcIik7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IG5ldyBWYWxpZGF0b3JSZXN1bHQoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KTtcbiAgdmFyIGlubmVyID0gbmV3IFZhbGlkYXRvclJlc3VsdChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpO1xuICB2YXIgY291bnQgPSBzY2hlbWEub25lT2YuZmlsdGVyKFxuICAgIHRlc3RTY2hlbWFOb1Rocm93LmJpbmQoXG4gICAgICB0aGlzLCBpbnN0YW5jZSwgb3B0aW9ucywgY3R4LCBmdW5jdGlvbihyZXMpIHtpbm5lci5pbXBvcnRFcnJvcnMocmVzKTt9XG4gICAgICApICkubGVuZ3RoO1xuICB2YXIgbGlzdCA9IHNjaGVtYS5vbmVPZi5tYXAoZnVuY3Rpb24gKHYsIGkpIHtcbiAgICByZXR1cm4gKHYuaWQgJiYgKCc8JyArIHYuaWQgKyAnPicpKSB8fCAodi50aXRsZSAmJiBKU09OLnN0cmluZ2lmeSh2LnRpdGxlKSkgfHwgKHZbJyRyZWYnXSAmJiAoJzwnICsgdlsnJHJlZiddICsgJz4nKSkgfHwgJ1tzdWJzY2hlbWEgJytpKyddJztcbiAgfSk7XG4gIGlmIChjb3VudCE9PTEpIHtcbiAgICBpZiAob3B0aW9ucy5uZXN0ZWRFcnJvcnMpIHtcbiAgICAgIHJlc3VsdC5pbXBvcnRFcnJvcnMoaW5uZXIpO1xuICAgIH1cbiAgICByZXN1bHQuYWRkRXJyb3Ioe1xuICAgICAgbmFtZTogJ29uZU9mJyxcbiAgICAgIGFyZ3VtZW50OiBsaXN0LFxuICAgICAgbWVzc2FnZTogXCJpcyBub3QgZXhhY3RseSBvbmUgZnJvbSBcIiArIGxpc3Quam9pbignLCcpLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlcyBwcm9wZXJ0aWVzXG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEBwYXJhbSBzY2hlbWFcbiAqIEBwYXJhbSBvcHRpb25zXG4gKiBAcGFyYW0gY3R4XG4gKiBAcmV0dXJuIHtTdHJpbmd8bnVsbHxWYWxpZGF0b3JSZXN1bHR9XG4gKi9cbnZhbGlkYXRvcnMucHJvcGVydGllcyA9IGZ1bmN0aW9uIHZhbGlkYXRlUHJvcGVydGllcyAoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KSB7XG4gIGlmKCF0aGlzLnR5cGVzLm9iamVjdChpbnN0YW5jZSkpIHJldHVybjtcbiAgdmFyIHJlc3VsdCA9IG5ldyBWYWxpZGF0b3JSZXN1bHQoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KTtcbiAgdmFyIHByb3BlcnRpZXMgPSBzY2hlbWEucHJvcGVydGllcyB8fCB7fTtcbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gcHJvcGVydGllcykge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5wcmVWYWxpZGF0ZVByb3BlcnR5ID09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9wdGlvbnMucHJlVmFsaWRhdGVQcm9wZXJ0eShpbnN0YW5jZSwgcHJvcGVydHksIHByb3BlcnRpZXNbcHJvcGVydHldLCBvcHRpb25zLCBjdHgpO1xuICAgIH1cblxuICAgIHZhciBwcm9wID0gT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFuY2UsIHByb3BlcnR5KSA/IGluc3RhbmNlW3Byb3BlcnR5XSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgcmVzID0gdGhpcy52YWxpZGF0ZVNjaGVtYShwcm9wLCBwcm9wZXJ0aWVzW3Byb3BlcnR5XSwgb3B0aW9ucywgY3R4Lm1ha2VDaGlsZChwcm9wZXJ0aWVzW3Byb3BlcnR5XSwgcHJvcGVydHkpKTtcbiAgICBpZihyZXMuaW5zdGFuY2UgIT09IHJlc3VsdC5pbnN0YW5jZVtwcm9wZXJ0eV0pIHJlc3VsdC5pbnN0YW5jZVtwcm9wZXJ0eV0gPSByZXMuaW5zdGFuY2U7XG4gICAgcmVzdWx0LmltcG9ydEVycm9ycyhyZXMpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFRlc3QgYSBzcGVjaWZpYyBwcm9wZXJ0eSB3aXRoaW4gaW4gaW5zdGFuY2UgYWdhaW5zdCB0aGUgYWRkaXRpb25hbFByb3BlcnRpZXMgc2NoZW1hIGF0dHJpYnV0ZVxuICogVGhpcyBpZ25vcmVzIHByb3BlcnRpZXMgd2l0aCBkZWZpbml0aW9ucyBpbiB0aGUgcHJvcGVydGllcyBzY2hlbWEgYXR0cmlidXRlLCBidXQgbm8gb3RoZXIgYXR0cmlidXRlcy5cbiAqIElmIHRvbyBtYW55IG1vcmUgdHlwZXMgb2YgcHJvcGVydHktZXhpc3RhbmNlIHRlc3RzIHBvcCB1cCB0aGV5IG1heSBuZWVkIHRoZWlyIG93biBjbGFzcyBvZiB0ZXN0cyAobGlrZSBgdHlwZWAgaGFzKVxuICogQHByaXZhdGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRlc3RBZGRpdGlvbmFsUHJvcGVydHkgKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCwgcHJvcGVydHksIHJlc3VsdCkge1xuICBpZighdGhpcy50eXBlcy5vYmplY3QoaW5zdGFuY2UpKSByZXR1cm47XG4gIGlmIChzY2hlbWEucHJvcGVydGllcyAmJiBzY2hlbWEucHJvcGVydGllc1twcm9wZXJ0eV0gIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoc2NoZW1hLmFkZGl0aW9uYWxQcm9wZXJ0aWVzID09PSBmYWxzZSkge1xuICAgIHJlc3VsdC5hZGRFcnJvcih7XG4gICAgICBuYW1lOiAnYWRkaXRpb25hbFByb3BlcnRpZXMnLFxuICAgICAgYXJndW1lbnQ6IHByb3BlcnR5LFxuICAgICAgbWVzc2FnZTogXCJhZGRpdGlvbmFsUHJvcGVydHkgXCIgKyBKU09OLnN0cmluZ2lmeShwcm9wZXJ0eSkgKyBcIiBleGlzdHMgaW4gaW5zdGFuY2Ugd2hlbiBub3QgYWxsb3dlZFwiLFxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHZhciBhZGRpdGlvbmFsUHJvcGVydGllcyA9IHNjaGVtYS5hZGRpdGlvbmFsUHJvcGVydGllcyB8fCB7fTtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5wcmVWYWxpZGF0ZVByb3BlcnR5ID09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9wdGlvbnMucHJlVmFsaWRhdGVQcm9wZXJ0eShpbnN0YW5jZSwgcHJvcGVydHksIGFkZGl0aW9uYWxQcm9wZXJ0aWVzLCBvcHRpb25zLCBjdHgpO1xuICAgIH1cblxuICAgIHZhciByZXMgPSB0aGlzLnZhbGlkYXRlU2NoZW1hKGluc3RhbmNlW3Byb3BlcnR5XSwgYWRkaXRpb25hbFByb3BlcnRpZXMsIG9wdGlvbnMsIGN0eC5tYWtlQ2hpbGQoYWRkaXRpb25hbFByb3BlcnRpZXMsIHByb3BlcnR5KSk7XG4gICAgaWYocmVzLmluc3RhbmNlICE9PSByZXN1bHQuaW5zdGFuY2VbcHJvcGVydHldKSByZXN1bHQuaW5zdGFuY2VbcHJvcGVydHldID0gcmVzLmluc3RhbmNlO1xuICAgIHJlc3VsdC5pbXBvcnRFcnJvcnMocmVzKTtcbiAgfVxufVxuXG4vKipcbiAqIFZhbGlkYXRlcyBwYXR0ZXJuUHJvcGVydGllc1xuICogQHBhcmFtIGluc3RhbmNlXG4gKiBAcGFyYW0gc2NoZW1hXG4gKiBAcGFyYW0gb3B0aW9uc1xuICogQHBhcmFtIGN0eFxuICogQHJldHVybiB7U3RyaW5nfG51bGx8VmFsaWRhdG9yUmVzdWx0fVxuICovXG52YWxpZGF0b3JzLnBhdHRlcm5Qcm9wZXJ0aWVzID0gZnVuY3Rpb24gdmFsaWRhdGVQYXR0ZXJuUHJvcGVydGllcyAoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KSB7XG4gIGlmKCF0aGlzLnR5cGVzLm9iamVjdChpbnN0YW5jZSkpIHJldHVybjtcbiAgdmFyIHJlc3VsdCA9IG5ldyBWYWxpZGF0b3JSZXN1bHQoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KTtcbiAgdmFyIHBhdHRlcm5Qcm9wZXJ0aWVzID0gc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzIHx8IHt9O1xuXG4gIGZvciAodmFyIHByb3BlcnR5IGluIGluc3RhbmNlKSB7XG4gICAgdmFyIHRlc3QgPSB0cnVlO1xuICAgIGZvciAodmFyIHBhdHRlcm4gaW4gcGF0dGVyblByb3BlcnRpZXMpIHtcbiAgICAgIHZhciBleHByID0gbmV3IFJlZ0V4cChwYXR0ZXJuKTtcbiAgICAgIGlmICghZXhwci50ZXN0KHByb3BlcnR5KSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHRlc3QgPSBmYWxzZTtcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnByZVZhbGlkYXRlUHJvcGVydHkgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvcHRpb25zLnByZVZhbGlkYXRlUHJvcGVydHkoaW5zdGFuY2UsIHByb3BlcnR5LCBwYXR0ZXJuUHJvcGVydGllc1twYXR0ZXJuXSwgb3B0aW9ucywgY3R4KTtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlcyA9IHRoaXMudmFsaWRhdGVTY2hlbWEoaW5zdGFuY2VbcHJvcGVydHldLCBwYXR0ZXJuUHJvcGVydGllc1twYXR0ZXJuXSwgb3B0aW9ucywgY3R4Lm1ha2VDaGlsZChwYXR0ZXJuUHJvcGVydGllc1twYXR0ZXJuXSwgcHJvcGVydHkpKTtcbiAgICAgIGlmKHJlcy5pbnN0YW5jZSAhPT0gcmVzdWx0Lmluc3RhbmNlW3Byb3BlcnR5XSkgcmVzdWx0Lmluc3RhbmNlW3Byb3BlcnR5XSA9IHJlcy5pbnN0YW5jZTtcbiAgICAgIHJlc3VsdC5pbXBvcnRFcnJvcnMocmVzKTtcbiAgICB9XG4gICAgaWYgKHRlc3QpIHtcbiAgICAgIHRlc3RBZGRpdGlvbmFsUHJvcGVydHkuY2FsbCh0aGlzLCBpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgsIHByb3BlcnR5LCByZXN1bHQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlcyBhZGRpdGlvbmFsUHJvcGVydGllc1xuICogQHBhcmFtIGluc3RhbmNlXG4gKiBAcGFyYW0gc2NoZW1hXG4gKiBAcGFyYW0gb3B0aW9uc1xuICogQHBhcmFtIGN0eFxuICogQHJldHVybiB7U3RyaW5nfG51bGx8VmFsaWRhdG9yUmVzdWx0fVxuICovXG52YWxpZGF0b3JzLmFkZGl0aW9uYWxQcm9wZXJ0aWVzID0gZnVuY3Rpb24gdmFsaWRhdGVBZGRpdGlvbmFsUHJvcGVydGllcyAoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KSB7XG4gIGlmKCF0aGlzLnR5cGVzLm9iamVjdChpbnN0YW5jZSkpIHJldHVybjtcbiAgLy8gaWYgcGF0dGVyblByb3BlcnRpZXMgaXMgZGVmaW5lZCB0aGVuIHdlJ2xsIHRlc3Qgd2hlbiB0aGF0IG9uZSBpcyBjYWxsZWQgaW5zdGVhZFxuICBpZiAoc2NoZW1hLnBhdHRlcm5Qcm9wZXJ0aWVzKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IG5ldyBWYWxpZGF0b3JSZXN1bHQoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KTtcbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gaW5zdGFuY2UpIHtcbiAgICB0ZXN0QWRkaXRpb25hbFByb3BlcnR5LmNhbGwodGhpcywgaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4LCBwcm9wZXJ0eSwgcmVzdWx0KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgd2hldGhlciB0aGUgaW5zdGFuY2UgdmFsdWUgaXMgYXQgbGVhc3Qgb2YgYSBjZXJ0YWluIGxlbmd0aCwgd2hlbiB0aGUgaW5zdGFuY2UgdmFsdWUgaXMgYSBzdHJpbmcuXG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEBwYXJhbSBzY2hlbWFcbiAqIEByZXR1cm4ge1N0cmluZ3xudWxsfVxuICovXG52YWxpZGF0b3JzLm1pblByb3BlcnRpZXMgPSBmdW5jdGlvbiB2YWxpZGF0ZU1pblByb3BlcnRpZXMgKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCkge1xuICBpZiAoIXRoaXMudHlwZXMub2JqZWN0KGluc3RhbmNlKSkgcmV0dXJuO1xuICB2YXIgcmVzdWx0ID0gbmV3IFZhbGlkYXRvclJlc3VsdChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpO1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGluc3RhbmNlKTtcbiAgaWYgKCEoa2V5cy5sZW5ndGggPj0gc2NoZW1hLm1pblByb3BlcnRpZXMpKSB7XG4gICAgcmVzdWx0LmFkZEVycm9yKHtcbiAgICAgIG5hbWU6ICdtaW5Qcm9wZXJ0aWVzJyxcbiAgICAgIGFyZ3VtZW50OiBzY2hlbWEubWluUHJvcGVydGllcyxcbiAgICAgIG1lc3NhZ2U6IFwiZG9lcyBub3QgbWVldCBtaW5pbXVtIHByb3BlcnR5IGxlbmd0aCBvZiBcIiArIHNjaGVtYS5taW5Qcm9wZXJ0aWVzLFxuICAgIH0pXG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogVmFsaWRhdGVzIHdoZXRoZXIgdGhlIGluc3RhbmNlIHZhbHVlIGlzIGF0IG1vc3Qgb2YgYSBjZXJ0YWluIGxlbmd0aCwgd2hlbiB0aGUgaW5zdGFuY2UgdmFsdWUgaXMgYSBzdHJpbmcuXG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEBwYXJhbSBzY2hlbWFcbiAqIEByZXR1cm4ge1N0cmluZ3xudWxsfVxuICovXG52YWxpZGF0b3JzLm1heFByb3BlcnRpZXMgPSBmdW5jdGlvbiB2YWxpZGF0ZU1heFByb3BlcnRpZXMgKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCkge1xuICBpZiAoIXRoaXMudHlwZXMub2JqZWN0KGluc3RhbmNlKSkgcmV0dXJuO1xuICB2YXIgcmVzdWx0ID0gbmV3IFZhbGlkYXRvclJlc3VsdChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpO1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGluc3RhbmNlKTtcbiAgaWYgKCEoa2V5cy5sZW5ndGggPD0gc2NoZW1hLm1heFByb3BlcnRpZXMpKSB7XG4gICAgcmVzdWx0LmFkZEVycm9yKHtcbiAgICAgIG5hbWU6ICdtYXhQcm9wZXJ0aWVzJyxcbiAgICAgIGFyZ3VtZW50OiBzY2hlbWEubWF4UHJvcGVydGllcyxcbiAgICAgIG1lc3NhZ2U6IFwiZG9lcyBub3QgbWVldCBtYXhpbXVtIHByb3BlcnR5IGxlbmd0aCBvZiBcIiArIHNjaGVtYS5tYXhQcm9wZXJ0aWVzLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlcyBpdGVtcyB3aGVuIGluc3RhbmNlIGlzIGFuIGFycmF5XG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEBwYXJhbSBzY2hlbWFcbiAqIEBwYXJhbSBvcHRpb25zXG4gKiBAcGFyYW0gY3R4XG4gKiBAcmV0dXJuIHtTdHJpbmd8bnVsbHxWYWxpZGF0b3JSZXN1bHR9XG4gKi9cbnZhbGlkYXRvcnMuaXRlbXMgPSBmdW5jdGlvbiB2YWxpZGF0ZUl0ZW1zIChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBpZiAoIXRoaXMudHlwZXMuYXJyYXkoaW5zdGFuY2UpKSByZXR1cm47XG4gIGlmICghc2NoZW1hLml0ZW1zKSByZXR1cm47XG4gIHZhciByZXN1bHQgPSBuZXcgVmFsaWRhdG9yUmVzdWx0KGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCk7XG4gIGluc3RhbmNlLmV2ZXJ5KGZ1bmN0aW9uICh2YWx1ZSwgaSkge1xuICAgIHZhciBpdGVtcyA9IEFycmF5LmlzQXJyYXkoc2NoZW1hLml0ZW1zKSA/IChzY2hlbWEuaXRlbXNbaV0gfHwgc2NoZW1hLmFkZGl0aW9uYWxJdGVtcykgOiBzY2hlbWEuaXRlbXM7XG4gICAgaWYgKGl0ZW1zID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoaXRlbXMgPT09IGZhbHNlKSB7XG4gICAgICByZXN1bHQuYWRkRXJyb3Ioe1xuICAgICAgICBuYW1lOiAnaXRlbXMnLFxuICAgICAgICBtZXNzYWdlOiBcImFkZGl0aW9uYWxJdGVtcyBub3QgcGVybWl0dGVkXCIsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIHJlcyA9IHNlbGYudmFsaWRhdGVTY2hlbWEodmFsdWUsIGl0ZW1zLCBvcHRpb25zLCBjdHgubWFrZUNoaWxkKGl0ZW1zLCBpKSk7XG4gICAgaWYocmVzLmluc3RhbmNlICE9PSByZXN1bHQuaW5zdGFuY2VbaV0pIHJlc3VsdC5pbnN0YW5jZVtpXSA9IHJlcy5pbnN0YW5jZTtcbiAgICByZXN1bHQuaW1wb3J0RXJyb3JzKHJlcyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgbWluaW11bSBhbmQgZXhjbHVzaXZlTWluaW11bSB3aGVuIHRoZSB0eXBlIG9mIHRoZSBpbnN0YW5jZSB2YWx1ZSBpcyBhIG51bWJlci5cbiAqIEBwYXJhbSBpbnN0YW5jZVxuICogQHBhcmFtIHNjaGVtYVxuICogQHJldHVybiB7U3RyaW5nfG51bGx9XG4gKi9cbnZhbGlkYXRvcnMubWluaW11bSA9IGZ1bmN0aW9uIHZhbGlkYXRlTWluaW11bSAoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KSB7XG4gIGlmICghdGhpcy50eXBlcy5udW1iZXIoaW5zdGFuY2UpKSByZXR1cm47XG4gIHZhciByZXN1bHQgPSBuZXcgVmFsaWRhdG9yUmVzdWx0KGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCk7XG4gIHZhciB2YWxpZCA9IHRydWU7XG4gIGlmIChzY2hlbWEuZXhjbHVzaXZlTWluaW11bSAmJiBzY2hlbWEuZXhjbHVzaXZlTWluaW11bSA9PT0gdHJ1ZSkge1xuICAgIHZhbGlkID0gaW5zdGFuY2UgPiBzY2hlbWEubWluaW11bTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZCA9IGluc3RhbmNlID49IHNjaGVtYS5taW5pbXVtO1xuICB9XG4gIGlmICghdmFsaWQpIHtcbiAgICByZXN1bHQuYWRkRXJyb3Ioe1xuICAgICAgbmFtZTogJ21pbmltdW0nLFxuICAgICAgYXJndW1lbnQ6IHNjaGVtYS5taW5pbXVtLFxuICAgICAgbWVzc2FnZTogXCJtdXN0IGhhdmUgYSBtaW5pbXVtIHZhbHVlIG9mIFwiICsgc2NoZW1hLm1pbmltdW0sXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogVmFsaWRhdGVzIG1heGltdW0gYW5kIGV4Y2x1c2l2ZU1heGltdW0gd2hlbiB0aGUgdHlwZSBvZiB0aGUgaW5zdGFuY2UgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEBwYXJhbSBzY2hlbWFcbiAqIEByZXR1cm4ge1N0cmluZ3xudWxsfVxuICovXG52YWxpZGF0b3JzLm1heGltdW0gPSBmdW5jdGlvbiB2YWxpZGF0ZU1heGltdW0gKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCkge1xuICBpZiAoIXRoaXMudHlwZXMubnVtYmVyKGluc3RhbmNlKSkgcmV0dXJuO1xuICB2YXIgcmVzdWx0ID0gbmV3IFZhbGlkYXRvclJlc3VsdChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpO1xuICB2YXIgdmFsaWQ7XG4gIGlmIChzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSAmJiBzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSA9PT0gdHJ1ZSkge1xuICAgIHZhbGlkID0gaW5zdGFuY2UgPCBzY2hlbWEubWF4aW11bTtcbiAgfSBlbHNlIHtcbiAgICB2YWxpZCA9IGluc3RhbmNlIDw9IHNjaGVtYS5tYXhpbXVtO1xuICB9XG4gIGlmICghdmFsaWQpIHtcbiAgICByZXN1bHQuYWRkRXJyb3Ioe1xuICAgICAgbmFtZTogJ21heGltdW0nLFxuICAgICAgYXJndW1lbnQ6IHNjaGVtYS5tYXhpbXVtLFxuICAgICAgbWVzc2FnZTogXCJtdXN0IGhhdmUgYSBtYXhpbXVtIHZhbHVlIG9mIFwiICsgc2NoZW1hLm1heGltdW0sXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogUGVyZm9ybSB2YWxpZGF0aW9uIGZvciBtdWx0aXBsZU9mIGFuZCBkaXZpc2libGVCeSwgd2hpY2ggYXJlIGVzc2VudGlhbGx5IHRoZSBzYW1lLlxuICogQHBhcmFtIGluc3RhbmNlXG4gKiBAcGFyYW0gc2NoZW1hXG4gKiBAcGFyYW0gdmFsaWRhdGlvblR5cGVcbiAqIEBwYXJhbSBlcnJvck1lc3NhZ2VcbiAqIEByZXR1cm5zIHtTdHJpbmd8bnVsbH1cbiAqL1xudmFyIHZhbGlkYXRlTXVsdGlwbGVPZk9yRGl2aXNibGVCeSA9IGZ1bmN0aW9uIHZhbGlkYXRlTXVsdGlwbGVPZk9yRGl2aXNibGVCeSAoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4LCB2YWxpZGF0aW9uVHlwZSwgZXJyb3JNZXNzYWdlKSB7XG4gIGlmICghdGhpcy50eXBlcy5udW1iZXIoaW5zdGFuY2UpKSByZXR1cm47XG5cbiAgdmFyIHZhbGlkYXRpb25Bcmd1bWVudCA9IHNjaGVtYVt2YWxpZGF0aW9uVHlwZV07XG4gIGlmICh2YWxpZGF0aW9uQXJndW1lbnQgPT0gMCkge1xuICAgIHRocm93IG5ldyBTY2hlbWFFcnJvcih2YWxpZGF0aW9uVHlwZSArIFwiIGNhbm5vdCBiZSB6ZXJvXCIpO1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9IG5ldyBWYWxpZGF0b3JSZXN1bHQoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KTtcblxuICB2YXIgaW5zdGFuY2VEZWNpbWFscyA9IGhlbHBlcnMuZ2V0RGVjaW1hbFBsYWNlcyhpbnN0YW5jZSk7XG4gIHZhciBkaXZpc29yRGVjaW1hbHMgPSBoZWxwZXJzLmdldERlY2ltYWxQbGFjZXModmFsaWRhdGlvbkFyZ3VtZW50KTtcblxuICB2YXIgbWF4RGVjaW1hbHMgPSBNYXRoLm1heChpbnN0YW5jZURlY2ltYWxzICwgZGl2aXNvckRlY2ltYWxzKTtcbiAgdmFyIG11bHRpcGxpZXIgPSBNYXRoLnBvdygxMCwgbWF4RGVjaW1hbHMpO1xuXG4gIGlmIChNYXRoLnJvdW5kKGluc3RhbmNlICogbXVsdGlwbGllcikgJSBNYXRoLnJvdW5kKHZhbGlkYXRpb25Bcmd1bWVudCAqIG11bHRpcGxpZXIpICE9PSAwKSB7XG4gICAgcmVzdWx0LmFkZEVycm9yKHtcbiAgICAgIG5hbWU6IHZhbGlkYXRpb25UeXBlLFxuICAgICAgYXJndW1lbnQ6ICB2YWxpZGF0aW9uQXJndW1lbnQsXG4gICAgICBtZXNzYWdlOiBlcnJvck1lc3NhZ2UgKyBKU09OLnN0cmluZ2lmeSh2YWxpZGF0aW9uQXJndW1lbnQpXG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgZGl2aXNpYmxlQnkgd2hlbiB0aGUgdHlwZSBvZiB0aGUgaW5zdGFuY2UgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEBwYXJhbSBzY2hlbWFcbiAqIEByZXR1cm4ge1N0cmluZ3xudWxsfVxuICovXG52YWxpZGF0b3JzLm11bHRpcGxlT2YgPSBmdW5jdGlvbiB2YWxpZGF0ZU11bHRpcGxlT2YgKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCkge1xuIHJldHVybiB2YWxpZGF0ZU11bHRpcGxlT2ZPckRpdmlzYmxlQnkuY2FsbCh0aGlzLCBpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgsIFwibXVsdGlwbGVPZlwiLCBcImlzIG5vdCBhIG11bHRpcGxlIG9mIChkaXZpc2libGUgYnkpIFwiKTtcbn07XG5cbi8qKlxuICogVmFsaWRhdGVzIG11bHRpcGxlT2Ygd2hlbiB0aGUgdHlwZSBvZiB0aGUgaW5zdGFuY2UgdmFsdWUgaXMgYSBudW1iZXIuXG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEBwYXJhbSBzY2hlbWFcbiAqIEByZXR1cm4ge1N0cmluZ3xudWxsfVxuICovXG52YWxpZGF0b3JzLmRpdmlzaWJsZUJ5ID0gZnVuY3Rpb24gdmFsaWRhdGVEaXZpc2libGVCeSAoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KSB7XG4gIHJldHVybiB2YWxpZGF0ZU11bHRpcGxlT2ZPckRpdmlzYmxlQnkuY2FsbCh0aGlzLCBpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgsIFwiZGl2aXNpYmxlQnlcIiwgXCJpcyBub3QgZGl2aXNpYmxlIGJ5IChtdWx0aXBsZSBvZikgXCIpO1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgd2hldGhlciB0aGUgaW5zdGFuY2UgdmFsdWUgaXMgcHJlc2VudC5cbiAqIEBwYXJhbSBpbnN0YW5jZVxuICogQHBhcmFtIHNjaGVtYVxuICogQHJldHVybiB7U3RyaW5nfG51bGx9XG4gKi9cbnZhbGlkYXRvcnMucmVxdWlyZWQgPSBmdW5jdGlvbiB2YWxpZGF0ZVJlcXVpcmVkIChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBWYWxpZGF0b3JSZXN1bHQoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KTtcbiAgaWYgKGluc3RhbmNlID09PSB1bmRlZmluZWQgJiYgc2NoZW1hLnJlcXVpcmVkID09PSB0cnVlKSB7XG4gICAgLy8gQSBib29sZWFuIGZvcm0gaXMgaW1wbGVtZW50ZWQgZm9yIHJldmVyc2UtY29tcGF0YWJpbGl0eSB3aXRoIHNjaGVtYXMgd3JpdHRlbiBhZ2FpbnN0IG9sZGVyIGRyYWZ0c1xuICAgIHJlc3VsdC5hZGRFcnJvcih7XG4gICAgICBuYW1lOiAncmVxdWlyZWQnLFxuICAgICAgbWVzc2FnZTogXCJpcyByZXF1aXJlZFwiXG4gICAgfSk7XG4gIH0gZWxzZSBpZiAodGhpcy50eXBlcy5vYmplY3QoaW5zdGFuY2UpICYmIEFycmF5LmlzQXJyYXkoc2NoZW1hLnJlcXVpcmVkKSkge1xuICAgIHNjaGVtYS5yZXF1aXJlZC5mb3JFYWNoKGZ1bmN0aW9uKG4pe1xuICAgICAgaWYoaW5zdGFuY2Vbbl09PT11bmRlZmluZWQpe1xuICAgICAgICByZXN1bHQuYWRkRXJyb3Ioe1xuICAgICAgICAgIG5hbWU6ICdyZXF1aXJlZCcsXG4gICAgICAgICAgYXJndW1lbnQ6IG4sXG4gICAgICAgICAgbWVzc2FnZTogXCJyZXF1aXJlcyBwcm9wZXJ0eSBcIiArIEpTT04uc3RyaW5naWZ5KG4pLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgd2hldGhlciB0aGUgaW5zdGFuY2UgdmFsdWUgbWF0Y2hlcyB0aGUgcmVndWxhciBleHByZXNzaW9uLCB3aGVuIHRoZSBpbnN0YW5jZSB2YWx1ZSBpcyBhIHN0cmluZy5cbiAqIEBwYXJhbSBpbnN0YW5jZVxuICogQHBhcmFtIHNjaGVtYVxuICogQHJldHVybiB7U3RyaW5nfG51bGx9XG4gKi9cbnZhbGlkYXRvcnMucGF0dGVybiA9IGZ1bmN0aW9uIHZhbGlkYXRlUGF0dGVybiAoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KSB7XG4gIGlmICghdGhpcy50eXBlcy5zdHJpbmcoaW5zdGFuY2UpKSByZXR1cm47XG4gIHZhciByZXN1bHQgPSBuZXcgVmFsaWRhdG9yUmVzdWx0KGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCk7XG4gIGlmICghaW5zdGFuY2UubWF0Y2goc2NoZW1hLnBhdHRlcm4pKSB7XG4gICAgcmVzdWx0LmFkZEVycm9yKHtcbiAgICAgIG5hbWU6ICdwYXR0ZXJuJyxcbiAgICAgIGFyZ3VtZW50OiBzY2hlbWEucGF0dGVybixcbiAgICAgIG1lc3NhZ2U6IFwiZG9lcyBub3QgbWF0Y2ggcGF0dGVybiBcIiArIEpTT04uc3RyaW5naWZ5KHNjaGVtYS5wYXR0ZXJuLnRvU3RyaW5nKCkpLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlcyB3aGV0aGVyIHRoZSBpbnN0YW5jZSB2YWx1ZSBpcyBvZiBhIGNlcnRhaW4gZGVmaW5lZCBmb3JtYXQgb3IgYSBjdXN0b21cbiAqIGZvcm1hdC5cbiAqIFRoZSBmb2xsb3dpbmcgZm9ybWF0cyBhcmUgc3VwcG9ydGVkIGZvciBzdHJpbmcgdHlwZXM6XG4gKiAgIC0gZGF0ZS10aW1lXG4gKiAgIC0gZGF0ZVxuICogICAtIHRpbWVcbiAqICAgLSBpcC1hZGRyZXNzXG4gKiAgIC0gaXB2NlxuICogICAtIHVyaVxuICogICAtIGNvbG9yXG4gKiAgIC0gaG9zdC1uYW1lXG4gKiAgIC0gYWxwaGFcbiAqICAgLSBhbHBoYS1udW1lcmljXG4gKiAgIC0gdXRjLW1pbGxpc2VjXG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEBwYXJhbSBzY2hlbWFcbiAqIEBwYXJhbSBbb3B0aW9uc11cbiAqIEBwYXJhbSBbY3R4XVxuICogQHJldHVybiB7U3RyaW5nfG51bGx9XG4gKi9cbnZhbGlkYXRvcnMuZm9ybWF0ID0gZnVuY3Rpb24gdmFsaWRhdGVGb3JtYXQgKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCkge1xuICBpZiAoaW5zdGFuY2U9PT11bmRlZmluZWQpIHJldHVybjtcbiAgdmFyIHJlc3VsdCA9IG5ldyBWYWxpZGF0b3JSZXN1bHQoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KTtcbiAgaWYgKCFyZXN1bHQuZGlzYWJsZUZvcm1hdCAmJiAhaGVscGVycy5pc0Zvcm1hdChpbnN0YW5jZSwgc2NoZW1hLmZvcm1hdCwgdGhpcykpIHtcbiAgICByZXN1bHQuYWRkRXJyb3Ioe1xuICAgICAgbmFtZTogJ2Zvcm1hdCcsXG4gICAgICBhcmd1bWVudDogc2NoZW1hLmZvcm1hdCxcbiAgICAgIG1lc3NhZ2U6IFwiZG9lcyBub3QgY29uZm9ybSB0byB0aGUgXCIgKyBKU09OLnN0cmluZ2lmeShzY2hlbWEuZm9ybWF0KSArIFwiIGZvcm1hdFwiLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlcyB3aGV0aGVyIHRoZSBpbnN0YW5jZSB2YWx1ZSBpcyBhdCBsZWFzdCBvZiBhIGNlcnRhaW4gbGVuZ3RoLCB3aGVuIHRoZSBpbnN0YW5jZSB2YWx1ZSBpcyBhIHN0cmluZy5cbiAqIEBwYXJhbSBpbnN0YW5jZVxuICogQHBhcmFtIHNjaGVtYVxuICogQHJldHVybiB7U3RyaW5nfG51bGx9XG4gKi9cbnZhbGlkYXRvcnMubWluTGVuZ3RoID0gZnVuY3Rpb24gdmFsaWRhdGVNaW5MZW5ndGggKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCkge1xuICBpZiAoIXRoaXMudHlwZXMuc3RyaW5nKGluc3RhbmNlKSkgcmV0dXJuO1xuICB2YXIgcmVzdWx0ID0gbmV3IFZhbGlkYXRvclJlc3VsdChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpO1xuICB2YXIgaHNwID0gaW5zdGFuY2UubWF0Y2goL1tcXHVEQzAwLVxcdURGRkZdL2cpO1xuICB2YXIgbGVuZ3RoID0gaW5zdGFuY2UubGVuZ3RoIC0gKGhzcCA/IGhzcC5sZW5ndGggOiAwKTtcbiAgaWYgKCEobGVuZ3RoID49IHNjaGVtYS5taW5MZW5ndGgpKSB7XG4gICAgcmVzdWx0LmFkZEVycm9yKHtcbiAgICAgIG5hbWU6ICdtaW5MZW5ndGgnLFxuICAgICAgYXJndW1lbnQ6IHNjaGVtYS5taW5MZW5ndGgsXG4gICAgICBtZXNzYWdlOiBcImRvZXMgbm90IG1lZXQgbWluaW11bSBsZW5ndGggb2YgXCIgKyBzY2hlbWEubWluTGVuZ3RoLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlcyB3aGV0aGVyIHRoZSBpbnN0YW5jZSB2YWx1ZSBpcyBhdCBtb3N0IG9mIGEgY2VydGFpbiBsZW5ndGgsIHdoZW4gdGhlIGluc3RhbmNlIHZhbHVlIGlzIGEgc3RyaW5nLlxuICogQHBhcmFtIGluc3RhbmNlXG4gKiBAcGFyYW0gc2NoZW1hXG4gKiBAcmV0dXJuIHtTdHJpbmd8bnVsbH1cbiAqL1xudmFsaWRhdG9ycy5tYXhMZW5ndGggPSBmdW5jdGlvbiB2YWxpZGF0ZU1heExlbmd0aCAoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KSB7XG4gIGlmICghdGhpcy50eXBlcy5zdHJpbmcoaW5zdGFuY2UpKSByZXR1cm47XG4gIHZhciByZXN1bHQgPSBuZXcgVmFsaWRhdG9yUmVzdWx0KGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCk7XG4gIC8vIFRPRE8gaWYgdGhpcyB3YXMgYWxyZWFkeSBjb21wdXRlZCBpbiBcIm1pbkxlbmd0aFwiLCB1c2UgdGhhdCB2YWx1ZSBpbnN0ZWFkIG9mIHJlLWNvbXB1dGluZ1xuICB2YXIgaHNwID0gaW5zdGFuY2UubWF0Y2goL1tcXHVEQzAwLVxcdURGRkZdL2cpO1xuICB2YXIgbGVuZ3RoID0gaW5zdGFuY2UubGVuZ3RoIC0gKGhzcCA/IGhzcC5sZW5ndGggOiAwKTtcbiAgaWYgKCEobGVuZ3RoIDw9IHNjaGVtYS5tYXhMZW5ndGgpKSB7XG4gICAgcmVzdWx0LmFkZEVycm9yKHtcbiAgICAgIG5hbWU6ICdtYXhMZW5ndGgnLFxuICAgICAgYXJndW1lbnQ6IHNjaGVtYS5tYXhMZW5ndGgsXG4gICAgICBtZXNzYWdlOiBcImRvZXMgbm90IG1lZXQgbWF4aW11bSBsZW5ndGggb2YgXCIgKyBzY2hlbWEubWF4TGVuZ3RoLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlcyB3aGV0aGVyIGluc3RhbmNlIGNvbnRhaW5zIGF0IGxlYXN0IGEgbWluaW11bSBudW1iZXIgb2YgaXRlbXMsIHdoZW4gdGhlIGluc3RhbmNlIGlzIGFuIEFycmF5LlxuICogQHBhcmFtIGluc3RhbmNlXG4gKiBAcGFyYW0gc2NoZW1hXG4gKiBAcmV0dXJuIHtTdHJpbmd8bnVsbH1cbiAqL1xudmFsaWRhdG9ycy5taW5JdGVtcyA9IGZ1bmN0aW9uIHZhbGlkYXRlTWluSXRlbXMgKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCkge1xuICBpZiAoIXRoaXMudHlwZXMuYXJyYXkoaW5zdGFuY2UpKSByZXR1cm47XG4gIHZhciByZXN1bHQgPSBuZXcgVmFsaWRhdG9yUmVzdWx0KGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCk7XG4gIGlmICghKGluc3RhbmNlLmxlbmd0aCA+PSBzY2hlbWEubWluSXRlbXMpKSB7XG4gICAgcmVzdWx0LmFkZEVycm9yKHtcbiAgICAgIG5hbWU6ICdtaW5JdGVtcycsXG4gICAgICBhcmd1bWVudDogc2NoZW1hLm1pbkl0ZW1zLFxuICAgICAgbWVzc2FnZTogXCJkb2VzIG5vdCBtZWV0IG1pbmltdW0gbGVuZ3RoIG9mIFwiICsgc2NoZW1hLm1pbkl0ZW1zLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlcyB3aGV0aGVyIGluc3RhbmNlIGNvbnRhaW5zIG5vIG1vcmUgdGhhbiBhIG1heGltdW0gbnVtYmVyIG9mIGl0ZW1zLCB3aGVuIHRoZSBpbnN0YW5jZSBpcyBhbiBBcnJheS5cbiAqIEBwYXJhbSBpbnN0YW5jZVxuICogQHBhcmFtIHNjaGVtYVxuICogQHJldHVybiB7U3RyaW5nfG51bGx9XG4gKi9cbnZhbGlkYXRvcnMubWF4SXRlbXMgPSBmdW5jdGlvbiB2YWxpZGF0ZU1heEl0ZW1zIChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpIHtcbiAgaWYgKCF0aGlzLnR5cGVzLmFycmF5KGluc3RhbmNlKSkgcmV0dXJuO1xuICB2YXIgcmVzdWx0ID0gbmV3IFZhbGlkYXRvclJlc3VsdChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpO1xuICBpZiAoIShpbnN0YW5jZS5sZW5ndGggPD0gc2NoZW1hLm1heEl0ZW1zKSkge1xuICAgIHJlc3VsdC5hZGRFcnJvcih7XG4gICAgICBuYW1lOiAnbWF4SXRlbXMnLFxuICAgICAgYXJndW1lbnQ6IHNjaGVtYS5tYXhJdGVtcyxcbiAgICAgIG1lc3NhZ2U6IFwiZG9lcyBub3QgbWVldCBtYXhpbXVtIGxlbmd0aCBvZiBcIiArIHNjaGVtYS5tYXhJdGVtcyxcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBWYWxpZGF0ZXMgdGhhdCBldmVyeSBpdGVtIGluIGFuIGluc3RhbmNlIGFycmF5IGlzIHVuaXF1ZSwgd2hlbiBpbnN0YW5jZSBpcyBhbiBhcnJheVxuICogQHBhcmFtIGluc3RhbmNlXG4gKiBAcGFyYW0gc2NoZW1hXG4gKiBAcGFyYW0gb3B0aW9uc1xuICogQHBhcmFtIGN0eFxuICogQHJldHVybiB7U3RyaW5nfG51bGx8VmFsaWRhdG9yUmVzdWx0fVxuICovXG52YWxpZGF0b3JzLnVuaXF1ZUl0ZW1zID0gZnVuY3Rpb24gdmFsaWRhdGVVbmlxdWVJdGVtcyAoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KSB7XG4gIGlmICghdGhpcy50eXBlcy5hcnJheShpbnN0YW5jZSkpIHJldHVybjtcbiAgdmFyIHJlc3VsdCA9IG5ldyBWYWxpZGF0b3JSZXN1bHQoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KTtcbiAgZnVuY3Rpb24gdGVzdEFycmF5cyAodiwgaSwgYSkge1xuICAgIGZvciAodmFyIGogPSBpICsgMTsgaiA8IGEubGVuZ3RoOyBqKyspIGlmIChoZWxwZXJzLmRlZXBDb21wYXJlU3RyaWN0KHYsIGFbal0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmICghaW5zdGFuY2UuZXZlcnkodGVzdEFycmF5cykpIHtcbiAgICByZXN1bHQuYWRkRXJyb3Ioe1xuICAgICAgbmFtZTogJ3VuaXF1ZUl0ZW1zJyxcbiAgICAgIG1lc3NhZ2U6IFwiY29udGFpbnMgZHVwbGljYXRlIGl0ZW1cIixcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBEZWVwIGNvbXBhcmVzIGFycmF5cyBmb3IgZHVwbGljYXRlc1xuICogQHBhcmFtIHZcbiAqIEBwYXJhbSBpXG4gKiBAcGFyYW0gYVxuICogQHByaXZhdGVcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHRlc3RBcnJheXMgKHYsIGksIGEpIHtcbiAgdmFyIGosIGxlbiA9IGEubGVuZ3RoO1xuICBmb3IgKGogPSBpICsgMSwgbGVuOyBqIDwgbGVuOyBqKyspIHtcbiAgICBpZiAoaGVscGVycy5kZWVwQ29tcGFyZVN0cmljdCh2LCBhW2pdKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBWYWxpZGF0ZXMgd2hldGhlciB0aGVyZSBhcmUgbm8gZHVwbGljYXRlcywgd2hlbiB0aGUgaW5zdGFuY2UgaXMgYW4gQXJyYXkuXG4gKiBAcGFyYW0gaW5zdGFuY2VcbiAqIEByZXR1cm4ge1N0cmluZ3xudWxsfVxuICovXG52YWxpZGF0b3JzLnVuaXF1ZUl0ZW1zID0gZnVuY3Rpb24gdmFsaWRhdGVVbmlxdWVJdGVtcyAoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KSB7XG4gIGlmICghdGhpcy50eXBlcy5hcnJheShpbnN0YW5jZSkpIHJldHVybjtcbiAgdmFyIHJlc3VsdCA9IG5ldyBWYWxpZGF0b3JSZXN1bHQoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KTtcbiAgaWYgKCFpbnN0YW5jZS5ldmVyeSh0ZXN0QXJyYXlzKSkge1xuICAgIHJlc3VsdC5hZGRFcnJvcih7XG4gICAgICBuYW1lOiAndW5pcXVlSXRlbXMnLFxuICAgICAgbWVzc2FnZTogXCJjb250YWlucyBkdXBsaWNhdGUgaXRlbVwiLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlIGZvciB0aGUgcHJlc2VuY2Ugb2YgZGVwZW5kZW5jeSBwcm9wZXJ0aWVzLCBpZiB0aGUgaW5zdGFuY2UgaXMgYW4gb2JqZWN0LlxuICogQHBhcmFtIGluc3RhbmNlXG4gKiBAcGFyYW0gc2NoZW1hXG4gKiBAcGFyYW0gb3B0aW9uc1xuICogQHBhcmFtIGN0eFxuICogQHJldHVybiB7bnVsbHxWYWxpZGF0b3JSZXN1bHR9XG4gKi9cbnZhbGlkYXRvcnMuZGVwZW5kZW5jaWVzID0gZnVuY3Rpb24gdmFsaWRhdGVEZXBlbmRlbmNpZXMgKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCkge1xuICBpZiAoIXRoaXMudHlwZXMub2JqZWN0KGluc3RhbmNlKSkgcmV0dXJuO1xuICB2YXIgcmVzdWx0ID0gbmV3IFZhbGlkYXRvclJlc3VsdChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpO1xuICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBzY2hlbWEuZGVwZW5kZW5jaWVzKSB7XG4gICAgaWYgKGluc3RhbmNlW3Byb3BlcnR5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdmFyIGRlcCA9IHNjaGVtYS5kZXBlbmRlbmNpZXNbcHJvcGVydHldO1xuICAgIHZhciBjaGlsZENvbnRleHQgPSBjdHgubWFrZUNoaWxkKGRlcCwgcHJvcGVydHkpO1xuICAgIGlmICh0eXBlb2YgZGVwID09ICdzdHJpbmcnKSB7XG4gICAgICBkZXAgPSBbZGVwXTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGVwKSkge1xuICAgICAgZGVwLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgICAgaWYgKGluc3RhbmNlW3Byb3BdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXN1bHQuYWRkRXJyb3Ioe1xuICAgICAgICAgICAgLy8gRklYTUUgdGhlcmUncyB0d28gZGlmZmVyZW50IFwiZGVwZW5kZW5jaWVzXCIgZXJyb3JzIGhlcmUgd2l0aCBzbGlnaHRseSBkaWZmZXJlbnQgb3V0cHV0c1xuICAgICAgICAgICAgLy8gQ2FuIHdlIG1ha2UgdGhlc2UgdGhlIHNhbWU/IE9yIHNob3VsZCB3ZSBjcmVhdGUgZGlmZmVyZW50IGVycm9yIHR5cGVzP1xuICAgICAgICAgICAgbmFtZTogJ2RlcGVuZGVuY2llcycsXG4gICAgICAgICAgICBhcmd1bWVudDogY2hpbGRDb250ZXh0LnByb3BlcnR5UGF0aCxcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwicHJvcGVydHkgXCIgKyBwcm9wICsgXCIgbm90IGZvdW5kLCByZXF1aXJlZCBieSBcIiArIGNoaWxkQ29udGV4dC5wcm9wZXJ0eVBhdGgsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcmVzID0gdGhpcy52YWxpZGF0ZVNjaGVtYShpbnN0YW5jZSwgZGVwLCBvcHRpb25zLCBjaGlsZENvbnRleHQpO1xuICAgICAgaWYocmVzdWx0Lmluc3RhbmNlICE9PSByZXMuaW5zdGFuY2UpIHJlc3VsdC5pbnN0YW5jZSA9IHJlcy5pbnN0YW5jZTtcbiAgICAgIGlmIChyZXMgJiYgcmVzLmVycm9ycy5sZW5ndGgpIHtcbiAgICAgICAgcmVzdWx0LmFkZEVycm9yKHtcbiAgICAgICAgICBuYW1lOiAnZGVwZW5kZW5jaWVzJyxcbiAgICAgICAgICBhcmd1bWVudDogY2hpbGRDb250ZXh0LnByb3BlcnR5UGF0aCxcbiAgICAgICAgICBtZXNzYWdlOiBcImRvZXMgbm90IG1lZXQgZGVwZW5kZW5jeSByZXF1aXJlZCBieSBcIiArIGNoaWxkQ29udGV4dC5wcm9wZXJ0eVBhdGgsXG4gICAgICAgIH0pO1xuICAgICAgICByZXN1bHQuaW1wb3J0RXJyb3JzKHJlcyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlcyB3aGV0aGVyIHRoZSBpbnN0YW5jZSB2YWx1ZSBpcyBvbmUgb2YgdGhlIGVudW1lcmF0ZWQgdmFsdWVzLlxuICpcbiAqIEBwYXJhbSBpbnN0YW5jZVxuICogQHBhcmFtIHNjaGVtYVxuICogQHJldHVybiB7VmFsaWRhdG9yUmVzdWx0fG51bGx9XG4gKi9cbnZhbGlkYXRvcnNbJ2VudW0nXSA9IGZ1bmN0aW9uIHZhbGlkYXRlRW51bSAoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KSB7XG4gIGlmIChpbnN0YW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKCFBcnJheS5pc0FycmF5KHNjaGVtYVsnZW51bSddKSkge1xuICAgIHRocm93IG5ldyBTY2hlbWFFcnJvcihcImVudW0gZXhwZWN0cyBhbiBhcnJheVwiLCBzY2hlbWEpO1xuICB9XG4gIHZhciByZXN1bHQgPSBuZXcgVmFsaWRhdG9yUmVzdWx0KGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCk7XG4gIGlmICghc2NoZW1hWydlbnVtJ10uc29tZShoZWxwZXJzLmRlZXBDb21wYXJlU3RyaWN0LmJpbmQobnVsbCwgaW5zdGFuY2UpKSkge1xuICAgIHJlc3VsdC5hZGRFcnJvcih7XG4gICAgICBuYW1lOiAnZW51bScsXG4gICAgICBhcmd1bWVudDogc2NoZW1hWydlbnVtJ10sXG4gICAgICBtZXNzYWdlOiBcImlzIG5vdCBvbmUgb2YgZW51bSB2YWx1ZXM6IFwiICsgc2NoZW1hWydlbnVtJ10ubWFwKFN0cmluZykuam9pbignLCcpLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFZhbGlkYXRlcyB3aGV0aGVyIHRoZSBpbnN0YW5jZSBleGFjdGx5IG1hdGNoZXMgYSBnaXZlbiB2YWx1ZVxuICpcbiAqIEBwYXJhbSBpbnN0YW5jZVxuICogQHBhcmFtIHNjaGVtYVxuICogQHJldHVybiB7VmFsaWRhdG9yUmVzdWx0fG51bGx9XG4gKi9cbnZhbGlkYXRvcnNbJ2NvbnN0J10gPSBmdW5jdGlvbiB2YWxpZGF0ZUVudW0gKGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCkge1xuICBpZiAoaW5zdGFuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHZhciByZXN1bHQgPSBuZXcgVmFsaWRhdG9yUmVzdWx0KGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCk7XG4gIGlmICghaGVscGVycy5kZWVwQ29tcGFyZVN0cmljdChzY2hlbWFbJ2NvbnN0J10sIGluc3RhbmNlKSkge1xuICAgIHJlc3VsdC5hZGRFcnJvcih7XG4gICAgICBuYW1lOiAnY29uc3QnLFxuICAgICAgYXJndW1lbnQ6IHNjaGVtYVsnY29uc3QnXSxcbiAgICAgIG1lc3NhZ2U6IFwiZG9lcyBub3QgZXhhY3RseSBtYXRjaCBleHBlY3RlZCBjb25zdGFudDogXCIgKyBzY2hlbWFbJ2NvbnN0J10sXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbi8qKlxuICogVmFsaWRhdGVzIHdoZXRoZXIgdGhlIGluc3RhbmNlIGlmIG9mIGEgcHJvaGliaXRlZCB0eXBlLlxuICogQHBhcmFtIGluc3RhbmNlXG4gKiBAcGFyYW0gc2NoZW1hXG4gKiBAcGFyYW0gb3B0aW9uc1xuICogQHBhcmFtIGN0eFxuICogQHJldHVybiB7bnVsbHxWYWxpZGF0b3JSZXN1bHR9XG4gKi9cbnZhbGlkYXRvcnMubm90ID0gdmFsaWRhdG9ycy5kaXNhbGxvdyA9IGZ1bmN0aW9uIHZhbGlkYXRlTm90IChpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBpZihpbnN0YW5jZT09PXVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XG4gIHZhciByZXN1bHQgPSBuZXcgVmFsaWRhdG9yUmVzdWx0KGluc3RhbmNlLCBzY2hlbWEsIG9wdGlvbnMsIGN0eCk7XG4gIHZhciBub3RUeXBlcyA9IHNjaGVtYS5ub3QgfHwgc2NoZW1hLmRpc2FsbG93O1xuICBpZighbm90VHlwZXMpIHJldHVybiBudWxsO1xuICBpZighQXJyYXkuaXNBcnJheShub3RUeXBlcykpIG5vdFR5cGVzPVtub3RUeXBlc107XG4gIG5vdFR5cGVzLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICBpZiAoc2VsZi50ZXN0VHlwZShpbnN0YW5jZSwgc2NoZW1hLCBvcHRpb25zLCBjdHgsIHR5cGUpKSB7XG4gICAgICB2YXIgc2NoZW1hSWQgPSB0eXBlICYmIHR5cGUuaWQgJiYgKCc8JyArIHR5cGUuaWQgKyAnPicpIHx8IHR5cGU7XG4gICAgICByZXN1bHQuYWRkRXJyb3Ioe1xuICAgICAgICBuYW1lOiAnbm90JyxcbiAgICAgICAgYXJndW1lbnQ6IHNjaGVtYUlkLFxuICAgICAgICBtZXNzYWdlOiBcImlzIG9mIHByb2hpYml0ZWQgdHlwZSBcIiArIHNjaGVtYUlkLFxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gYXR0cmlidXRlO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXJpID0gcmVxdWlyZSgndXJsJyk7XG5cbnZhciBWYWxpZGF0aW9uRXJyb3IgPSBleHBvcnRzLlZhbGlkYXRpb25FcnJvciA9IGZ1bmN0aW9uIFZhbGlkYXRpb25FcnJvciAobWVzc2FnZSwgaW5zdGFuY2UsIHNjaGVtYSwgcHJvcGVydHlQYXRoLCBuYW1lLCBhcmd1bWVudCkge1xuICBpZiAocHJvcGVydHlQYXRoKSB7XG4gICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5UGF0aDtcbiAgfVxuICBpZiAobWVzc2FnZSkge1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gIH1cbiAgaWYgKHNjaGVtYSkge1xuICAgIGlmIChzY2hlbWEuaWQpIHtcbiAgICAgIHRoaXMuc2NoZW1hID0gc2NoZW1hLmlkO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNjaGVtYSA9IHNjaGVtYTtcbiAgICB9XG4gIH1cbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZSA9IGluc3RhbmNlO1xuICB9XG4gIHRoaXMubmFtZSA9IG5hbWU7XG4gIHRoaXMuYXJndW1lbnQgPSBhcmd1bWVudDtcbiAgdGhpcy5zdGFjayA9IHRoaXMudG9TdHJpbmcoKTtcbn07XG5cblZhbGlkYXRpb25FcnJvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHRoaXMucHJvcGVydHkgKyAnICcgKyB0aGlzLm1lc3NhZ2U7XG59O1xuXG52YXIgVmFsaWRhdG9yUmVzdWx0ID0gZXhwb3J0cy5WYWxpZGF0b3JSZXN1bHQgPSBmdW5jdGlvbiBWYWxpZGF0b3JSZXN1bHQoaW5zdGFuY2UsIHNjaGVtYSwgb3B0aW9ucywgY3R4KSB7XG4gIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XG4gIHRoaXMucHJvcGVydHlQYXRoID0gY3R4LnByb3BlcnR5UGF0aDtcbiAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgdGhpcy50aHJvd0Vycm9yID0gb3B0aW9ucyAmJiBvcHRpb25zLnRocm93RXJyb3I7XG4gIHRoaXMuZGlzYWJsZUZvcm1hdCA9IG9wdGlvbnMgJiYgb3B0aW9ucy5kaXNhYmxlRm9ybWF0ID09PSB0cnVlO1xufTtcblxuVmFsaWRhdG9yUmVzdWx0LnByb3RvdHlwZS5hZGRFcnJvciA9IGZ1bmN0aW9uIGFkZEVycm9yKGRldGFpbCkge1xuICB2YXIgZXJyO1xuICBpZiAodHlwZW9mIGRldGFpbCA9PSAnc3RyaW5nJykge1xuICAgIGVyciA9IG5ldyBWYWxpZGF0aW9uRXJyb3IoZGV0YWlsLCB0aGlzLmluc3RhbmNlLCB0aGlzLnNjaGVtYSwgdGhpcy5wcm9wZXJ0eVBhdGgpO1xuICB9IGVsc2Uge1xuICAgIGlmICghZGV0YWlsKSB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgZXJyb3IgZGV0YWlsJyk7XG4gICAgaWYgKCFkZXRhaWwubWVzc2FnZSkgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGVycm9yIG1lc3NhZ2UnKTtcbiAgICBpZiAoIWRldGFpbC5uYW1lKSB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgdmFsaWRhdG9yIHR5cGUnKTtcbiAgICBlcnIgPSBuZXcgVmFsaWRhdGlvbkVycm9yKGRldGFpbC5tZXNzYWdlLCB0aGlzLmluc3RhbmNlLCB0aGlzLnNjaGVtYSwgdGhpcy5wcm9wZXJ0eVBhdGgsIGRldGFpbC5uYW1lLCBkZXRhaWwuYXJndW1lbnQpO1xuICB9XG5cbiAgaWYgKHRoaXMudGhyb3dFcnJvcikge1xuICAgIHRocm93IGVycjtcbiAgfVxuICB0aGlzLmVycm9ycy5wdXNoKGVycik7XG4gIHJldHVybiBlcnI7XG59O1xuXG5WYWxpZGF0b3JSZXN1bHQucHJvdG90eXBlLmltcG9ydEVycm9ycyA9IGZ1bmN0aW9uIGltcG9ydEVycm9ycyhyZXMpIHtcbiAgaWYgKHR5cGVvZiByZXMgPT0gJ3N0cmluZycgfHwgKHJlcyAmJiByZXMudmFsaWRhdG9yVHlwZSkpIHtcbiAgICB0aGlzLmFkZEVycm9yKHJlcyk7XG4gIH0gZWxzZSBpZiAocmVzICYmIHJlcy5lcnJvcnMpIHtcbiAgICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseSh0aGlzLmVycm9ycywgcmVzLmVycm9ycyk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHN0cmluZ2l6ZXIgKHYsaSl7XG4gIHJldHVybiBpKyc6ICcrdi50b1N0cmluZygpKydcXG4nO1xufVxuVmFsaWRhdG9yUmVzdWx0LnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKHJlcykge1xuICByZXR1cm4gdGhpcy5lcnJvcnMubWFwKHN0cmluZ2l6ZXIpLmpvaW4oJycpO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFZhbGlkYXRvclJlc3VsdC5wcm90b3R5cGUsIFwidmFsaWRcIiwgeyBnZXQ6IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gIXRoaXMuZXJyb3JzLmxlbmd0aDtcbn0gfSk7XG5cbi8qKlxuICogRGVzY3JpYmVzIGEgcHJvYmxlbSB3aXRoIGEgU2NoZW1hIHdoaWNoIHByZXZlbnRzIHZhbGlkYXRpb24gb2YgYW4gaW5zdGFuY2VcbiAqIEBuYW1lIFNjaGVtYUVycm9yXG4gKiBAY29uc3RydWN0b3JcbiAqL1xudmFyIFNjaGVtYUVycm9yID0gZXhwb3J0cy5TY2hlbWFFcnJvciA9IGZ1bmN0aW9uIFNjaGVtYUVycm9yIChtc2csIHNjaGVtYSkge1xuICB0aGlzLm1lc3NhZ2UgPSBtc2c7XG4gIHRoaXMuc2NoZW1hID0gc2NoZW1hO1xuICBFcnJvci5jYWxsKHRoaXMsIG1zZyk7XG4gIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIFNjaGVtYUVycm9yKTtcbn07XG5TY2hlbWFFcnJvci5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEVycm9yLnByb3RvdHlwZSxcbiAgeyBjb25zdHJ1Y3Rvcjoge3ZhbHVlOiBTY2hlbWFFcnJvciwgZW51bWVyYWJsZTogZmFsc2V9XG4gICwgbmFtZToge3ZhbHVlOiAnU2NoZW1hRXJyb3InLCBlbnVtZXJhYmxlOiBmYWxzZX1cbiAgfSk7XG5cbnZhciBTY2hlbWFDb250ZXh0ID0gZXhwb3J0cy5TY2hlbWFDb250ZXh0ID0gZnVuY3Rpb24gU2NoZW1hQ29udGV4dCAoc2NoZW1hLCBvcHRpb25zLCBwcm9wZXJ0eVBhdGgsIGJhc2UsIHNjaGVtYXMpIHtcbiAgdGhpcy5zY2hlbWEgPSBzY2hlbWE7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIHRoaXMucHJvcGVydHlQYXRoID0gcHJvcGVydHlQYXRoO1xuICB0aGlzLmJhc2UgPSBiYXNlO1xuICB0aGlzLnNjaGVtYXMgPSBzY2hlbWFzO1xufTtcblxuU2NoZW1hQ29udGV4dC5wcm90b3R5cGUucmVzb2x2ZSA9IGZ1bmN0aW9uIHJlc29sdmUgKHRhcmdldCkge1xuICByZXR1cm4gdXJpLnJlc29sdmUodGhpcy5iYXNlLCB0YXJnZXQpO1xufTtcblxuU2NoZW1hQ29udGV4dC5wcm90b3R5cGUubWFrZUNoaWxkID0gZnVuY3Rpb24gbWFrZUNoaWxkKHNjaGVtYSwgcHJvcGVydHlOYW1lKXtcbiAgdmFyIHByb3BlcnR5UGF0aCA9IChwcm9wZXJ0eU5hbWU9PT11bmRlZmluZWQpID8gdGhpcy5wcm9wZXJ0eVBhdGggOiB0aGlzLnByb3BlcnR5UGF0aCttYWtlU3VmZml4KHByb3BlcnR5TmFtZSk7XG4gIHZhciBiYXNlID0gdXJpLnJlc29sdmUodGhpcy5iYXNlLCBzY2hlbWEuaWR8fCcnKTtcbiAgdmFyIGN0eCA9IG5ldyBTY2hlbWFDb250ZXh0KHNjaGVtYSwgdGhpcy5vcHRpb25zLCBwcm9wZXJ0eVBhdGgsIGJhc2UsIE9iamVjdC5jcmVhdGUodGhpcy5zY2hlbWFzKSk7XG4gIGlmKHNjaGVtYS5pZCAmJiAhY3R4LnNjaGVtYXNbYmFzZV0pe1xuICAgIGN0eC5zY2hlbWFzW2Jhc2VdID0gc2NoZW1hO1xuICB9XG4gIHJldHVybiBjdHg7XG59XG5cbnZhciBGT1JNQVRfUkVHRVhQUyA9IGV4cG9ydHMuRk9STUFUX1JFR0VYUFMgPSB7XG4gICdkYXRlLXRpbWUnOiAvXlxcZHs0fS0oPzowWzAtOV17MX18MVswLTJdezF9KS0oM1swMV18MFsxLTldfFsxMl1bMC05XSlbdFQgXSgyWzAtNF18WzAxXVswLTldKTooWzAtNV1bMC05XSk6KDYwfFswLTVdWzAtOV0pKFxcLlxcZCspPyhbelpdfFsrLV0oWzAtNV1bMC05XSk6KDYwfFswLTVdWzAtOV0pKSQvLFxuICAnZGF0ZSc6IC9eXFxkezR9LSg/OjBbMC05XXsxfXwxWzAtMl17MX0pLSgzWzAxXXwwWzEtOV18WzEyXVswLTldKSQvLFxuICAndGltZSc6IC9eKDJbMC00XXxbMDFdWzAtOV0pOihbMC01XVswLTldKTooNjB8WzAtNV1bMC05XSkkLyxcblxuICAnZW1haWwnOiAvXig/OltcXHdcXCFcXCNcXCRcXCVcXCZcXCdcXCpcXCtcXC1cXC9cXD1cXD9cXF5cXGBcXHtcXHxcXH1cXH5dK1xcLikqW1xcd1xcIVxcI1xcJFxcJVxcJlxcJ1xcKlxcK1xcLVxcL1xcPVxcP1xcXlxcYFxce1xcfFxcfVxcfl0rQCg/Oig/Oig/OlthLXpBLVowLTldKD86W2EtekEtWjAtOVxcLV0oPyFcXC4pKXswLDYxfVthLXpBLVowLTldP1xcLikrW2EtekEtWjAtOV0oPzpbYS16QS1aMC05XFwtXSg/ISQpKXswLDYxfVthLXpBLVowLTldPyl8KD86XFxbKD86KD86WzAxXT9cXGR7MSwyfXwyWzAtNF1cXGR8MjVbMC01XSlcXC4pezN9KD86WzAxXT9cXGR7MSwyfXwyWzAtNF1cXGR8MjVbMC01XSlcXF0pKSQvLFxuICAnaXAtYWRkcmVzcyc6IC9eKD86KD86MjVbMC01XXwyWzAtNF1bMC05XXxbMDFdP1swLTldWzAtOV0/KVxcLil7M30oPzoyNVswLTVdfDJbMC00XVswLTldfFswMV0/WzAtOV1bMC05XT8pJC8sXG4gICdpcHY2JzogL15cXHMqKCgoWzAtOUEtRmEtZl17MSw0fTopezd9KFswLTlBLUZhLWZdezEsNH18OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezZ9KDpbMC05QS1GYS1mXXsxLDR9fCgoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKFxcLigyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KXw6KSl8KChbMC05QS1GYS1mXXsxLDR9Oil7NX0oKCg6WzAtOUEtRmEtZl17MSw0fSl7MSwyfSl8OigoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKFxcLigyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KXw6KSl8KChbMC05QS1GYS1mXXsxLDR9Oil7NH0oKCg6WzAtOUEtRmEtZl17MSw0fSl7MSwzfSl8KCg6WzAtOUEtRmEtZl17MSw0fSk/OigoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKFxcLigyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KSl8OikpfCgoWzAtOUEtRmEtZl17MSw0fTopezN9KCgoOlswLTlBLUZhLWZdezEsNH0pezEsNH0pfCgoOlswLTlBLUZhLWZdezEsNH0pezAsMn06KCgyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoXFwuKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pKXw6KSl8KChbMC05QS1GYS1mXXsxLDR9Oil7Mn0oKCg6WzAtOUEtRmEtZl17MSw0fSl7MSw1fSl8KCg6WzAtOUEtRmEtZl17MSw0fSl7MCwzfTooKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKShcXC4oMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSkpfDopKXwoKFswLTlBLUZhLWZdezEsNH06KXsxfSgoKDpbMC05QS1GYS1mXXsxLDR9KXsxLDZ9KXwoKDpbMC05QS1GYS1mXXsxLDR9KXswLDR9OigoMjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKFxcLigyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KSl8OikpfCg6KCgoOlswLTlBLUZhLWZdezEsNH0pezEsN30pfCgoOlswLTlBLUZhLWZdezEsNH0pezAsNX06KCgyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoXFwuKDI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pKXw6KSkpKCUuKyk/XFxzKiQvLFxuICAndXJpJzogL15bYS16QS1aXVthLXpBLVowLTkrLS5dKjpbXlxcc10qJC8sXG5cbiAgJ2NvbG9yJzogL14oIz8oWzAtOUEtRmEtZl17M30pezEsMn1cXGJ8YXF1YXxibGFja3xibHVlfGZ1Y2hzaWF8Z3JheXxncmVlbnxsaW1lfG1hcm9vbnxuYXZ5fG9saXZlfG9yYW5nZXxwdXJwbGV8cmVkfHNpbHZlcnx0ZWFsfHdoaXRlfHllbGxvd3wocmdiXFwoXFxzKlxcYihbMC05XXxbMS05XVswLTldfDFbMC05XVswLTldfDJbMC00XVswLTldfDI1WzAtNV0pXFxiXFxzKixcXHMqXFxiKFswLTldfFsxLTldWzAtOV18MVswLTldWzAtOV18MlswLTRdWzAtOV18MjVbMC01XSlcXGJcXHMqLFxccypcXGIoWzAtOV18WzEtOV1bMC05XXwxWzAtOV1bMC05XXwyWzAtNF1bMC05XXwyNVswLTVdKVxcYlxccypcXCkpfChyZ2JcXChcXHMqKFxcZD9cXGQlfDEwMCUpK1xccyosXFxzKihcXGQ/XFxkJXwxMDAlKStcXHMqLFxccyooXFxkP1xcZCV8MTAwJSkrXFxzKlxcKSkpJC8sXG5cbiAgLy8gaG9zdG5hbWUgcmVnZXggZnJvbTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTQyMDIyNS81NjI4XG4gICdob3N0bmFtZSc6IC9eKD89LnsxLDI1NX0kKVswLTlBLVphLXpdKD86KD86WzAtOUEtWmEtel18LSl7MCw2MX1bMC05QS1aYS16XSk/KD86XFwuWzAtOUEtWmEtel0oPzooPzpbMC05QS1aYS16XXwtKXswLDYxfVswLTlBLVphLXpdKT8pKlxcLj8kLyxcbiAgJ2hvc3QtbmFtZSc6IC9eKD89LnsxLDI1NX0kKVswLTlBLVphLXpdKD86KD86WzAtOUEtWmEtel18LSl7MCw2MX1bMC05QS1aYS16XSk/KD86XFwuWzAtOUEtWmEtel0oPzooPzpbMC05QS1aYS16XXwtKXswLDYxfVswLTlBLVphLXpdKT8pKlxcLj8kLyxcblxuICAnYWxwaGEnOiAvXlthLXpBLVpdKyQvLFxuICAnYWxwaGFudW1lcmljJzogL15bYS16QS1aMC05XSskLyxcbiAgJ3V0Yy1taWxsaXNlYyc6IGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHJldHVybiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykgJiYgcGFyc2VGbG9hdChpbnB1dCkgPT09IHBhcnNlSW50KGlucHV0LCAxMCkgJiYgIWlzTmFOKGlucHV0KTtcbiAgfSxcbiAgJ3JlZ2V4JzogZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgdmFyIHJlc3VsdCA9IHRydWU7XG4gICAgdHJ5IHtcbiAgICAgIG5ldyBSZWdFeHAoaW5wdXQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuICAnc3R5bGUnOiAvXFxzKiguKz8pOlxccyooW147XSspOz8vLFxuICAncGhvbmUnOiAvXlxcKyg/OlswLTldID8pezYsMTR9WzAtOV0kL1xufTtcblxuRk9STUFUX1JFR0VYUFMucmVnZXhwID0gRk9STUFUX1JFR0VYUFMucmVnZXg7XG5GT1JNQVRfUkVHRVhQUy5wYXR0ZXJuID0gRk9STUFUX1JFR0VYUFMucmVnZXg7XG5GT1JNQVRfUkVHRVhQUy5pcHY0ID0gRk9STUFUX1JFR0VYUFNbJ2lwLWFkZHJlc3MnXTtcblxuZXhwb3J0cy5pc0Zvcm1hdCA9IGZ1bmN0aW9uIGlzRm9ybWF0IChpbnB1dCwgZm9ybWF0LCB2YWxpZGF0b3IpIHtcbiAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgJiYgRk9STUFUX1JFR0VYUFNbZm9ybWF0XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKEZPUk1BVF9SRUdFWFBTW2Zvcm1hdF0gaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIHJldHVybiBGT1JNQVRfUkVHRVhQU1tmb3JtYXRdLnRlc3QoaW5wdXQpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIEZPUk1BVF9SRUdFWFBTW2Zvcm1hdF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBGT1JNQVRfUkVHRVhQU1tmb3JtYXRdKGlucHV0KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodmFsaWRhdG9yICYmIHZhbGlkYXRvci5jdXN0b21Gb3JtYXRzICYmXG4gICAgICB0eXBlb2YgdmFsaWRhdG9yLmN1c3RvbUZvcm1hdHNbZm9ybWF0XSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB2YWxpZGF0b3IuY3VzdG9tRm9ybWF0c1tmb3JtYXRdKGlucHV0KTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciBtYWtlU3VmZml4ID0gZXhwb3J0cy5tYWtlU3VmZml4ID0gZnVuY3Rpb24gbWFrZVN1ZmZpeCAoa2V5KSB7XG4gIGtleSA9IGtleS50b1N0cmluZygpO1xuICAvLyBUaGlzIGZ1bmN0aW9uIGNvdWxkIGJlIGNhcGFibGUgb2Ygb3V0cHV0dGluZyB2YWxpZCBhIEVDTUFTY3JpcHQgc3RyaW5nLCBidXQgdGhlXG4gIC8vIHJlc3VsdGluZyBjb2RlIGZvciB0ZXN0aW5nIHdoaWNoIGZvcm0gdG8gdXNlIHdvdWxkIGJlIHRlbnMgb2YgdGhvdXNhbmRzIG9mIGNoYXJhY3RlcnMgbG9uZ1xuICAvLyBUaGF0IG1lYW5zIHRoaXMgd2lsbCB1c2UgdGhlIG5hbWUgZm9ybSBmb3Igc29tZSBpbGxlZ2FsIGZvcm1zXG4gIGlmICgha2V5Lm1hdGNoKC9bLlxcc1xcW1xcXV0vKSAmJiAha2V5Lm1hdGNoKC9eW1xcZF0vKSkge1xuICAgIHJldHVybiAnLicgKyBrZXk7XG4gIH1cbiAgaWYgKGtleS5tYXRjaCgvXlxcZCskLykpIHtcbiAgICByZXR1cm4gJ1snICsga2V5ICsgJ10nO1xuICB9XG4gIHJldHVybiAnWycgKyBKU09OLnN0cmluZ2lmeShrZXkpICsgJ10nO1xufTtcblxuZXhwb3J0cy5kZWVwQ29tcGFyZVN0cmljdCA9IGZ1bmN0aW9uIGRlZXBDb21wYXJlU3RyaWN0IChhLCBiKSB7XG4gIGlmICh0eXBlb2YgYSAhPT0gdHlwZW9mIGIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGEgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgIGlmICghKGIgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gYS5ldmVyeShmdW5jdGlvbiAodiwgaSkge1xuICAgICAgcmV0dXJuIGRlZXBDb21wYXJlU3RyaWN0KGFbaV0sIGJbaV0pO1xuICAgIH0pO1xuICB9XG4gIGlmICh0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAoIWEgfHwgIWIpIHtcbiAgICAgIHJldHVybiBhID09PSBiO1xuICAgIH1cbiAgICB2YXIgYUtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICB2YXIgYktleXMgPSBPYmplY3Qua2V5cyhiKTtcbiAgICBpZiAoYUtleXMubGVuZ3RoICE9PSBiS2V5cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGFLZXlzLmV2ZXJ5KGZ1bmN0aW9uICh2KSB7XG4gICAgICByZXR1cm4gZGVlcENvbXBhcmVTdHJpY3QoYVt2XSwgYlt2XSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIGEgPT09IGI7XG59O1xuXG5mdW5jdGlvbiBkZWVwTWVyZ2VyICh0YXJnZXQsIGRzdCwgZSwgaSkge1xuICBpZiAodHlwZW9mIGUgPT09ICdvYmplY3QnKSB7XG4gICAgZHN0W2ldID0gZGVlcE1lcmdlKHRhcmdldFtpXSwgZSlcbiAgfSBlbHNlIHtcbiAgICBpZiAodGFyZ2V0LmluZGV4T2YoZSkgPT09IC0xKSB7XG4gICAgICBkc3QucHVzaChlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjb3B5aXN0IChzcmMsIGRzdCwga2V5KSB7XG4gIGRzdFtrZXldID0gc3JjW2tleV07XG59XG5cbmZ1bmN0aW9uIGNvcHlpc3RXaXRoRGVlcE1lcmdlICh0YXJnZXQsIHNyYywgZHN0LCBrZXkpIHtcbiAgaWYgKHR5cGVvZiBzcmNba2V5XSAhPT0gJ29iamVjdCcgfHwgIXNyY1trZXldKSB7XG4gICAgZHN0W2tleV0gPSBzcmNba2V5XTtcbiAgfVxuICBlbHNlIHtcbiAgICBpZiAoIXRhcmdldFtrZXldKSB7XG4gICAgICBkc3Rba2V5XSA9IHNyY1trZXldO1xuICAgIH0gZWxzZSB7XG4gICAgICBkc3Rba2V5XSA9IGRlZXBNZXJnZSh0YXJnZXRba2V5XSwgc3JjW2tleV0pXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZXBNZXJnZSAodGFyZ2V0LCBzcmMpIHtcbiAgdmFyIGFycmF5ID0gQXJyYXkuaXNBcnJheShzcmMpO1xuICB2YXIgZHN0ID0gYXJyYXkgJiYgW10gfHwge307XG5cbiAgaWYgKGFycmF5KSB7XG4gICAgdGFyZ2V0ID0gdGFyZ2V0IHx8IFtdO1xuICAgIGRzdCA9IGRzdC5jb25jYXQodGFyZ2V0KTtcbiAgICBzcmMuZm9yRWFjaChkZWVwTWVyZ2VyLmJpbmQobnVsbCwgdGFyZ2V0LCBkc3QpKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodGFyZ2V0ICYmIHR5cGVvZiB0YXJnZXQgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh0YXJnZXQpLmZvckVhY2goY29weWlzdC5iaW5kKG51bGwsIHRhcmdldCwgZHN0KSk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKHNyYykuZm9yRWFjaChjb3B5aXN0V2l0aERlZXBNZXJnZS5iaW5kKG51bGwsIHRhcmdldCwgc3JjLCBkc3QpKTtcbiAgfVxuXG4gIHJldHVybiBkc3Q7XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5kZWVwTWVyZ2UgPSBkZWVwTWVyZ2U7XG5cbi8qKlxuICogVmFsaWRhdGVzIGluc3RhbmNlIGFnYWluc3QgdGhlIHByb3ZpZGVkIHNjaGVtYVxuICogSW1wbGVtZW50cyBVUkkrSlNPTiBQb2ludGVyIGVuY29kaW5nLCBlLmcuIFwiJTdlXCI9XCJ+MFwiPT5cIn5cIiwgXCJ+MVwiPVwiJTJmXCI9PlwiL1wiXG4gKiBAcGFyYW0gb1xuICogQHBhcmFtIHMgVGhlIHBhdGggdG8gd2FsayBvIGFsb25nXG4gKiBAcmV0dXJuIGFueVxuICovXG5leHBvcnRzLm9iamVjdEdldFBhdGggPSBmdW5jdGlvbiBvYmplY3RHZXRQYXRoKG8sIHMpIHtcbiAgdmFyIHBhcnRzID0gcy5zcGxpdCgnLycpLnNsaWNlKDEpO1xuICB2YXIgaztcbiAgd2hpbGUgKHR5cGVvZiAoaz1wYXJ0cy5zaGlmdCgpKSA9PSAnc3RyaW5nJykge1xuICAgIHZhciBuID0gZGVjb2RlVVJJQ29tcG9uZW50KGsucmVwbGFjZSgvfjAvLCd+JykucmVwbGFjZSgvfjEvZywnLycpKTtcbiAgICBpZiAoIShuIGluIG8pKSByZXR1cm47XG4gICAgbyA9IG9bbl07XG4gIH1cbiAgcmV0dXJuIG87XG59O1xuXG5mdW5jdGlvbiBwYXRoRW5jb2RlciAodikge1xuICByZXR1cm4gJy8nK2VuY29kZVVSSUNvbXBvbmVudCh2KS5yZXBsYWNlKC9+L2csJyU3RScpO1xufVxuLyoqXG4gKiBBY2NlcHQgYW4gQXJyYXkgb2YgcHJvcGVydHkgbmFtZXMgYW5kIHJldHVybiBhIEpTT04gUG9pbnRlciBVUkkgZnJhZ21lbnRcbiAqIEBwYXJhbSBBcnJheSBhXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmV4cG9ydHMuZW5jb2RlUGF0aCA9IGZ1bmN0aW9uIGVuY29kZVBvaW50ZXIoYSl7XG5cdC8vIH4gbXVzdCBiZSBlbmNvZGVkIGV4cGxpY2l0bHkgYmVjYXVzZSBoYWNrc1xuXHQvLyB0aGUgc2xhc2ggaXMgZW5jb2RlZCBieSBlbmNvZGVVUklDb21wb25lbnRcblx0cmV0dXJuIGEubWFwKHBhdGhFbmNvZGVyKS5qb2luKCcnKTtcbn07XG5cblxuLyoqXG4gKiBDYWxjdWxhdGUgdGhlIG51bWJlciBvZiBkZWNpbWFsIHBsYWNlcyBhIG51bWJlciB1c2VzXG4gKiBXZSBuZWVkIHRoaXMgdG8gZ2V0IGNvcnJlY3QgcmVzdWx0cyBvdXQgb2YgbXVsdGlwbGVPZiBhbmQgZGl2aXNpYmxlQnlcbiAqIHdoZW4gZWl0aGVyIGZpZ3VyZSBpcyBoYXMgZGVjaW1hbCBwbGFjZXMsIGR1ZSB0byBJRUVFLTc1NCBmbG9hdCBpc3N1ZXMuXG4gKiBAcGFyYW0gbnVtYmVyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxuICovXG5leHBvcnRzLmdldERlY2ltYWxQbGFjZXMgPSBmdW5jdGlvbiBnZXREZWNpbWFsUGxhY2VzKG51bWJlcikge1xuXG4gIHZhciBkZWNpbWFsUGxhY2VzID0gMDtcbiAgaWYgKGlzTmFOKG51bWJlcikpIHJldHVybiBkZWNpbWFsUGxhY2VzO1xuXG4gIGlmICh0eXBlb2YgbnVtYmVyICE9PSAnbnVtYmVyJykge1xuICAgIG51bWJlciA9IE51bWJlcihudW1iZXIpO1xuICB9XG5cbiAgdmFyIHBhcnRzID0gbnVtYmVyLnRvU3RyaW5nKCkuc3BsaXQoJ2UnKTtcbiAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMikge1xuICAgIGlmIChwYXJ0c1sxXVswXSAhPT0gJy0nKSB7XG4gICAgICByZXR1cm4gZGVjaW1hbFBsYWNlcztcbiAgICB9IGVsc2Uge1xuICAgICAgZGVjaW1hbFBsYWNlcyA9IE51bWJlcihwYXJ0c1sxXS5zbGljZSgxKSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGRlY2ltYWxQYXJ0cyA9IHBhcnRzWzBdLnNwbGl0KCcuJyk7XG4gIGlmIChkZWNpbWFsUGFydHMubGVuZ3RoID09PSAyKSB7XG4gICAgZGVjaW1hbFBsYWNlcyArPSBkZWNpbWFsUGFydHNbMV0ubGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIGRlY2ltYWxQbGFjZXM7XG59O1xuXG4iLCJcbnZhciB1cmlsaWIgPSByZXF1aXJlKCd1cmwnKTtcbnZhciBoZWxwZXJzID0gcmVxdWlyZSgnLi9oZWxwZXJzJyk7XG5cbm1vZHVsZS5leHBvcnRzLlNjaGVtYVNjYW5SZXN1bHQgPSBTY2hlbWFTY2FuUmVzdWx0O1xuZnVuY3Rpb24gU2NoZW1hU2NhblJlc3VsdChmb3VuZCwgcmVmKXtcbiAgdGhpcy5pZCA9IGZvdW5kO1xuICB0aGlzLnJlZiA9IHJlZjtcbn1cblxuLyoqXG4gKiBBZGRzIGEgc2NoZW1hIHdpdGggYSBjZXJ0YWluIHVybiB0byB0aGUgVmFsaWRhdG9yIGluc3RhbmNlLlxuICogQHBhcmFtIHN0cmluZyB1cmlcbiAqIEBwYXJhbSBvYmplY3Qgc2NoZW1hXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbm1vZHVsZS5leHBvcnRzLnNjYW4gPSBmdW5jdGlvbiBzY2FuKGJhc2UsIHNjaGVtYSl7XG4gIGZ1bmN0aW9uIHNjYW5TY2hlbWEoYmFzZXVyaSwgc2NoZW1hKXtcbiAgICBpZighc2NoZW1hIHx8IHR5cGVvZiBzY2hlbWEhPSdvYmplY3QnKSByZXR1cm47XG4gICAgLy8gTWFyayBhbGwgcmVmZXJlbmNlZCBzY2hlbWFzIHNvIHdlIGNhbiB0ZWxsIGxhdGVyIHdoaWNoIHNjaGVtYXMgYXJlIHJlZmVycmVkIHRvLCBidXQgbmV2ZXIgZGVmaW5lZFxuICAgIGlmKHNjaGVtYS4kcmVmKXtcbiAgICAgIHZhciByZXNvbHZlZFVyaSA9IHVyaWxpYi5yZXNvbHZlKGJhc2V1cmksIHNjaGVtYS4kcmVmKTtcbiAgICAgIHJlZltyZXNvbHZlZFVyaV0gPSByZWZbcmVzb2x2ZWRVcmldID8gcmVmW3Jlc29sdmVkVXJpXSsxIDogMDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIG91ckJhc2UgPSBzY2hlbWEuaWQgPyB1cmlsaWIucmVzb2x2ZShiYXNldXJpLCBzY2hlbWEuaWQpIDogYmFzZXVyaTtcbiAgICBpZiAob3VyQmFzZSkge1xuICAgICAgLy8gSWYgdGhlcmUncyBubyBmcmFnbWVudCwgYXBwZW5kIGFuIGVtcHR5IG9uZVxuICAgICAgaWYob3VyQmFzZS5pbmRleE9mKCcjJyk8MCkgb3VyQmFzZSArPSAnIyc7XG4gICAgICBpZihmb3VuZFtvdXJCYXNlXSl7XG4gICAgICAgIGlmKCFoZWxwZXJzLmRlZXBDb21wYXJlU3RyaWN0KGZvdW5kW291ckJhc2VdLCBzY2hlbWEpKXtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NjaGVtYSA8JytzY2hlbWErJz4gYWxyZWFkeSBleGlzdHMgd2l0aCBkaWZmZXJlbnQgZGVmaW5pdGlvbicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmb3VuZFtvdXJCYXNlXTtcbiAgICAgIH1cbiAgICAgIGZvdW5kW291ckJhc2VdID0gc2NoZW1hO1xuICAgICAgLy8gc3RyaXAgdHJhaWxpbmcgZnJhZ21lbnRcbiAgICAgIGlmKG91ckJhc2Vbb3VyQmFzZS5sZW5ndGgtMV09PScjJyl7XG4gICAgICAgIGZvdW5kW291ckJhc2Uuc3Vic3RyaW5nKDAsIG91ckJhc2UubGVuZ3RoLTEpXSA9IHNjaGVtYTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2NhbkFycmF5KG91ckJhc2UrJy9pdGVtcycsICgoc2NoZW1hLml0ZW1zIGluc3RhbmNlb2YgQXJyYXkpP3NjaGVtYS5pdGVtczpbc2NoZW1hLml0ZW1zXSkpO1xuICAgIHNjYW5BcnJheShvdXJCYXNlKycvZXh0ZW5kcycsICgoc2NoZW1hLmV4dGVuZHMgaW5zdGFuY2VvZiBBcnJheSk/c2NoZW1hLmV4dGVuZHM6W3NjaGVtYS5leHRlbmRzXSkpO1xuICAgIHNjYW5TY2hlbWEob3VyQmFzZSsnL2FkZGl0aW9uYWxJdGVtcycsIHNjaGVtYS5hZGRpdGlvbmFsSXRlbXMpO1xuICAgIHNjYW5PYmplY3Qob3VyQmFzZSsnL3Byb3BlcnRpZXMnLCBzY2hlbWEucHJvcGVydGllcyk7XG4gICAgc2NhblNjaGVtYShvdXJCYXNlKycvYWRkaXRpb25hbFByb3BlcnRpZXMnLCBzY2hlbWEuYWRkaXRpb25hbFByb3BlcnRpZXMpO1xuICAgIHNjYW5PYmplY3Qob3VyQmFzZSsnL2RlZmluaXRpb25zJywgc2NoZW1hLmRlZmluaXRpb25zKTtcbiAgICBzY2FuT2JqZWN0KG91ckJhc2UrJy9wYXR0ZXJuUHJvcGVydGllcycsIHNjaGVtYS5wYXR0ZXJuUHJvcGVydGllcyk7XG4gICAgc2Nhbk9iamVjdChvdXJCYXNlKycvZGVwZW5kZW5jaWVzJywgc2NoZW1hLmRlcGVuZGVuY2llcyk7XG4gICAgc2NhbkFycmF5KG91ckJhc2UrJy9kaXNhbGxvdycsIHNjaGVtYS5kaXNhbGxvdyk7XG4gICAgc2NhbkFycmF5KG91ckJhc2UrJy9hbGxPZicsIHNjaGVtYS5hbGxPZik7XG4gICAgc2NhbkFycmF5KG91ckJhc2UrJy9hbnlPZicsIHNjaGVtYS5hbnlPZik7XG4gICAgc2NhbkFycmF5KG91ckJhc2UrJy9vbmVPZicsIHNjaGVtYS5vbmVPZik7XG4gICAgc2NhblNjaGVtYShvdXJCYXNlKycvbm90Jywgc2NoZW1hLm5vdCk7XG4gIH1cbiAgZnVuY3Rpb24gc2NhbkFycmF5KGJhc2V1cmksIHNjaGVtYXMpe1xuICAgIGlmKCEoc2NoZW1hcyBpbnN0YW5jZW9mIEFycmF5KSkgcmV0dXJuO1xuICAgIGZvcih2YXIgaT0wOyBpPHNjaGVtYXMubGVuZ3RoOyBpKyspe1xuICAgICAgc2NhblNjaGVtYShiYXNldXJpKycvJytpLCBzY2hlbWFzW2ldKTtcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gc2Nhbk9iamVjdChiYXNldXJpLCBzY2hlbWFzKXtcbiAgICBpZighc2NoZW1hcyB8fCB0eXBlb2Ygc2NoZW1hcyE9J29iamVjdCcpIHJldHVybjtcbiAgICBmb3IodmFyIHAgaW4gc2NoZW1hcyl7XG4gICAgICBzY2FuU2NoZW1hKGJhc2V1cmkrJy8nK3AsIHNjaGVtYXNbcF0pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBmb3VuZCA9IHt9O1xuICB2YXIgcmVmID0ge307XG4gIHZhciBzY2hlbWFVcmkgPSBiYXNlO1xuICBzY2FuU2NoZW1hKGJhc2UsIHNjaGVtYSk7XG4gIHJldHVybiBuZXcgU2NoZW1hU2NhblJlc3VsdChmb3VuZCwgcmVmKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYnJvd3NlckxvY2FsZSAoKSB7XG4gIHZhciBsYW5nXG5cbiAgaWYgKG5hdmlnYXRvci5sYW5ndWFnZXMgJiYgbmF2aWdhdG9yLmxhbmd1YWdlcy5sZW5ndGgpIHtcbiAgICAvLyBsYXRlc3QgdmVyc2lvbnMgb2YgQ2hyb21lIGFuZCBGaXJlZm94IHNldCB0aGlzIGNvcnJlY3RseVxuICAgIGxhbmcgPSBuYXZpZ2F0b3IubGFuZ3VhZ2VzWzBdXG4gIH0gZWxzZSBpZiAobmF2aWdhdG9yLnVzZXJMYW5ndWFnZSkge1xuICAgIC8vIElFIG9ubHlcbiAgICBsYW5nID0gbmF2aWdhdG9yLnVzZXJMYW5ndWFnZVxuICB9IGVsc2Uge1xuICAgIC8vIGxhdGVzdCB2ZXJzaW9ucyBvZiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkgc2V0IHRoaXMgY29ycmVjdGx5XG4gICAgbGFuZyA9IG5hdmlnYXRvci5sYW5ndWFnZVxuICB9XG5cbiAgcmV0dXJuIGxhbmdcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2luZGV4Jyk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFsnZXhwb3J0cycsICdyZWFjdCcsICdwcm9wLXR5cGVzJywgJy4vVGFibGUnLCAnLi9Sb3cnLCAnLi9DZWxsJywgJ2VsZW1lbnQtcmVzaXplLWV2ZW50J10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgZmFjdG9yeShleHBvcnRzLCByZXF1aXJlKCdyZWFjdCcpLCByZXF1aXJlKCdwcm9wLXR5cGVzJyksIHJlcXVpcmUoJy4vVGFibGUnKSwgcmVxdWlyZSgnLi9Sb3cnKSwgcmVxdWlyZSgnLi9DZWxsJyksIHJlcXVpcmUoJ2VsZW1lbnQtcmVzaXplLWV2ZW50JykpO1xuICB9IGVsc2Uge1xuICAgIHZhciBtb2QgPSB7XG4gICAgICBleHBvcnRzOiB7fVxuICAgIH07XG4gICAgZmFjdG9yeShtb2QuZXhwb3J0cywgZ2xvYmFsLnJlYWN0LCBnbG9iYWwucHJvcFR5cGVzLCBnbG9iYWwuVGFibGUsIGdsb2JhbC5Sb3csIGdsb2JhbC5DZWxsLCBnbG9iYWwuZWxlbWVudFJlc2l6ZUV2ZW50KTtcbiAgICBnbG9iYWwuaW5kZXggPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIF9yZWFjdCwgX3Byb3BUeXBlcywgX1RhYmxlLCBfUm93LCBfQ2VsbCwgZWxlbWVudFJlc2l6ZUV2ZW50KSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcbiAgZXhwb3J0cy5DZWxsID0gZXhwb3J0cy5Sb3cgPSBleHBvcnRzLlRhYmxlID0gZXhwb3J0cy5TdGlja3lUYWJsZSA9IHVuZGVmaW5lZDtcblxuICB2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuICB2YXIgX3Byb3BUeXBlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcm9wVHlwZXMpO1xuXG4gIHZhciBfVGFibGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfVGFibGUpO1xuXG4gIHZhciBfUm93MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX1Jvdyk7XG5cbiAgdmFyIF9DZWxsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX0NlbGwpO1xuXG4gIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgICB9XG4gIH1cblxuICB2YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gICAgfTtcbiAgfSgpO1xuXG4gIGZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgICBpZiAoIXNlbGYpIHtcbiAgICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICAgIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiICsgdHlwZW9mIHN1cGVyQ2xhc3MpO1xuICAgIH1cblxuICAgIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgICAgY29uc3RydWN0b3I6IHtcbiAgICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbiAgfVxuXG4gIHZhciBTdGlja3lUYWJsZSA9IGZ1bmN0aW9uIChfUHVyZUNvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhTdGlja3lUYWJsZSwgX1B1cmVDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gU3RpY2t5VGFibGUocHJvcHMpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGlja3lUYWJsZSk7XG5cbiAgICAgIHZhciBfdGhpcyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTdGlja3lUYWJsZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFN0aWNreVRhYmxlKSkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgICBfdGhpcy5zZXRTY3JvbGxEYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5zdXBwcmVzc1Njcm9sbFggPSBmYWxzZTtcbiAgICAgICAgX3RoaXMuc3VwcHJlc3NTY3JvbGxZID0gZmFsc2U7XG5cbiAgICAgICAgcmV0dXJuIF90aGlzLnNjcm9sbERhdGEgPSB7XG4gICAgICAgICAgc2Nyb2xsVG9wOiBfdGhpcy55U2Nyb2xsYmFyLnNjcm9sbFRvcCxcbiAgICAgICAgICBzY3JvbGxIZWlnaHQ6IF90aGlzLnlTY3JvbGxiYXIuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgIGNsaWVudEhlaWdodDogX3RoaXMueVNjcm9sbGJhci5jbGllbnRIZWlnaHQsXG4gICAgICAgICAgc2Nyb2xsTGVmdDogX3RoaXMueFNjcm9sbGJhci5zY3JvbGxMZWZ0LFxuICAgICAgICAgIHNjcm9sbFdpZHRoOiBfdGhpcy54U2Nyb2xsYmFyLnNjcm9sbFdpZHRoLFxuICAgICAgICAgIGNsaWVudFdpZHRoOiBfdGhpcy54U2Nyb2xsYmFyLmNsaWVudFdpZHRoXG4gICAgICAgIH07XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vblNjcm9sbEJhclggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghX3RoaXMuc3VwcHJlc3NTY3JvbGxYKSB7XG4gICAgICAgICAgX3RoaXMuc2Nyb2xsRGF0YS5zY3JvbGxMZWZ0ID0gX3RoaXMueFdyYXBwZXIuc2Nyb2xsTGVmdCA9IF90aGlzLnhTY3JvbGxiYXIuc2Nyb2xsTGVmdDtcbiAgICAgICAgICBfdGhpcy5zdXBwcmVzc1Njcm9sbFggPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLmhhbmRsZVNjcm9sbCgpO1xuICAgICAgICAgIF90aGlzLnN1cHByZXNzU2Nyb2xsWCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vblNjcm9sbEJhclkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghX3RoaXMuc3VwcHJlc3NTY3JvbGxZKSB7XG4gICAgICAgICAgX3RoaXMuc2Nyb2xsRGF0YS5zY3JvbGxUb3AgPSBfdGhpcy55V3JhcHBlci5zY3JvbGxUb3AgPSBfdGhpcy55U2Nyb2xsYmFyLnNjcm9sbFRvcDtcbiAgICAgICAgICBfdGhpcy5zdXBwcmVzc1Njcm9sbFkgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLmhhbmRsZVNjcm9sbCgpO1xuICAgICAgICAgIF90aGlzLnN1cHByZXNzU2Nyb2xsWSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5vblNjcm9sbFggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzY3JvbGxMZWZ0ID0gTWF0aC5tYXgoX3RoaXMueFdyYXBwZXIuc2Nyb2xsTGVmdCwgMCk7XG4gICAgICAgIF90aGlzLnN0aWNreUhlYWRlci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlKCcgKyAtMSAqIHNjcm9sbExlZnQgKyAncHgsIDApJztcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLnNjcm9sbFhTY3JvbGxiYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghX3RoaXMuc3VwcHJlc3NTY3JvbGxYKSB7XG4gICAgICAgICAgX3RoaXMuc2Nyb2xsRGF0YS5zY3JvbGxMZWZ0ID0gX3RoaXMueFNjcm9sbGJhci5zY3JvbGxMZWZ0ID0gX3RoaXMueFdyYXBwZXIuc2Nyb2xsTGVmdDtcbiAgICAgICAgICBfdGhpcy5zdXBwcmVzc1Njcm9sbFggPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90aGlzLmhhbmRsZVNjcm9sbCgpO1xuICAgICAgICAgIF90aGlzLnN1cHByZXNzU2Nyb2xsWCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5zY3JvbGxZU2Nyb2xsYmFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIV90aGlzLnN1cHByZXNzU2Nyb2xsWSkge1xuICAgICAgICAgIF90aGlzLnNjcm9sbERhdGEuc2Nyb2xsVG9wID0gX3RoaXMueVNjcm9sbGJhci5zY3JvbGxUb3AgPSBfdGhpcy55V3JhcHBlci5zY3JvbGxUb3A7XG4gICAgICAgICAgX3RoaXMuc3VwcHJlc3NTY3JvbGxZID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5oYW5kbGVTY3JvbGwoKTtcbiAgICAgICAgICBfdGhpcy5zdXBwcmVzc1Njcm9sbFkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMuaGFuZGxlU2Nyb2xsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoX3RoaXMucHJvcHMub25TY3JvbGwpIHtcbiAgICAgICAgICBfdGhpcy5wcm9wcy5vblNjcm9sbChfdGhpcy5zY3JvbGxEYXRhKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3RoaXMub25SZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLnNldFNjcm9sbEJhckRpbXMoKTtcbiAgICAgICAgX3RoaXMuc2V0U2Nyb2xsQmFyV3JhcHBlckRpbXMoKTtcblxuICAgICAgICBfdGhpcy5zZXRSb3dIZWlnaHRzKCk7XG4gICAgICAgIF90aGlzLnNldENvbHVtbldpZHRocygpO1xuXG4gICAgICAgIF90aGlzLnNldFNjcm9sbERhdGEoKTtcbiAgICAgICAgX3RoaXMuaGFuZGxlU2Nyb2xsKCk7XG4gICAgICB9O1xuXG4gICAgICBfdGhpcy5zZXRTY3JvbGxCYXJXcmFwcGVyRGltcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMueFNjcm9sbGJhci5zdHlsZS53aWR0aCA9ICdjYWxjKDEwMCUgLSAnICsgX3RoaXMueVNjcm9sbFNpemUgKyAncHgpJztcbiAgICAgICAgX3RoaXMueVNjcm9sbGJhci5zdHlsZS5oZWlnaHQgPSAnY2FsYygxMDAlIC0gJyArIF90aGlzLnN0aWNreUhlYWRlci5vZmZzZXRIZWlnaHQgKyAncHgpJztcbiAgICAgICAgX3RoaXMueVNjcm9sbGJhci5zdHlsZS50b3AgPSBfdGhpcy5zdGlja3lIZWFkZXIub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgIH07XG5cbiAgICAgIF90aGlzLmlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMDAwMDAwMCkgKyAnJztcblxuICAgICAgX3RoaXMucm93Q291bnQgPSAwO1xuICAgICAgX3RoaXMuY29sdW1uQ291bnQgPSAwO1xuICAgICAgX3RoaXMueFNjcm9sbFNpemUgPSAwO1xuICAgICAgX3RoaXMueVNjcm9sbFNpemUgPSAwO1xuXG4gICAgICBfdGhpcy5zdGlja3lIZWFkZXJDb3VudCA9IHByb3BzLnN0aWNreUhlYWRlckNvdW50ID09PSAwID8gMCA6IF90aGlzLnN0aWNreUhlYWRlckNvdW50IHx8IDE7XG5cbiAgICAgIF90aGlzLmlzRmlyZWZveCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgPiAtMTtcbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoU3RpY2t5VGFibGUsIFt7XG4gICAgICBrZXk6ICdjb21wb25lbnREaWRNb3VudCcsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMudGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RpY2t5LXRhYmxlLScgKyB0aGlzLmlkKTtcblxuICAgICAgICBpZiAodGhpcy50YWJsZSkge1xuICAgICAgICAgIHRoaXMucmVhbFRhYmxlID0gdGhpcy50YWJsZS5xdWVyeVNlbGVjdG9yKCcjc3RpY2t5LXRhYmxlLXgtd3JhcHBlcicpLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgdGhpcy54U2Nyb2xsYmFyID0gdGhpcy50YWJsZS5xdWVyeVNlbGVjdG9yKCcjeC1zY3JvbGxiYXInKTtcbiAgICAgICAgICB0aGlzLnlTY3JvbGxiYXIgPSB0aGlzLnRhYmxlLnF1ZXJ5U2VsZWN0b3IoJyN5LXNjcm9sbGJhcicpO1xuICAgICAgICAgIHRoaXMueFdyYXBwZXIgPSB0aGlzLnRhYmxlLnF1ZXJ5U2VsZWN0b3IoJyNzdGlja3ktdGFibGUteC13cmFwcGVyJyk7XG4gICAgICAgICAgdGhpcy55V3JhcHBlciA9IHRoaXMudGFibGUucXVlcnlTZWxlY3RvcignI3N0aWNreS10YWJsZS15LXdyYXBwZXInKTtcbiAgICAgICAgICB0aGlzLnN0aWNreUhlYWRlciA9IHRoaXMudGFibGUucXVlcnlTZWxlY3RvcignI3N0aWNreS10YWJsZS1oZWFkZXInKTtcbiAgICAgICAgICB0aGlzLnN0aWNreUNvbHVtbiA9IHRoaXMudGFibGUucXVlcnlTZWxlY3RvcignI3N0aWNreS10YWJsZS1jb2x1bW4nKTtcbiAgICAgICAgICB0aGlzLnN0aWNreUNvcm5lciA9IHRoaXMudGFibGUucXVlcnlTZWxlY3RvcignI3N0aWNreS10YWJsZS1jb3JuZXInKTtcbiAgICAgICAgICB0aGlzLnNldFNjcm9sbERhdGEoKTtcblxuICAgICAgICAgIGVsZW1lbnRSZXNpemVFdmVudCh0aGlzLnJlYWxUYWJsZSwgdGhpcy5vblJlc2l6ZSk7XG5cbiAgICAgICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgICAgICAgc2V0VGltZW91dCh0aGlzLm9uUmVzaXplKTtcbiAgICAgICAgICB0aGlzLmFkZFNjcm9sbEJhckV2ZW50SGFuZGxlcnMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2NvbXBvbmVudERpZFVwZGF0ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnY29tcG9uZW50V2lsbFVubW91bnQnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBpZiAodGhpcy50YWJsZSkge1xuICAgICAgICAgIHRoaXMueFdyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbFgpO1xuICAgICAgICAgIHRoaXMueFdyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxYU2Nyb2xsYmFyKTtcbiAgICAgICAgICB0aGlzLnhTY3JvbGxiYXIucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbEJhclgpO1xuXG4gICAgICAgICAgdGhpcy55V3JhcHBlci5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLnNjcm9sbFlTY3JvbGxiYXIpO1xuICAgICAgICAgIHRoaXMueVNjcm9sbGJhci5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsQmFyWSk7XG5cbiAgICAgICAgICBlbGVtZW50UmVzaXplRXZlbnQudW5iaW5kKHRoaXMucmVhbFRhYmxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ2FkZFNjcm9sbEJhckV2ZW50SGFuZGxlcnMnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGFkZFNjcm9sbEJhckV2ZW50SGFuZGxlcnMoKSB7XG4gICAgICAgIHRoaXMueFdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5vblNjcm9sbFgpO1xuXG4gICAgICAgIC8vWCBTY3JvbGxiYXJzXG4gICAgICAgIHRoaXMueFdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5zY3JvbGxYU2Nyb2xsYmFyKTtcbiAgICAgICAgdGhpcy54U2Nyb2xsYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMub25TY3JvbGxCYXJYKTtcblxuICAgICAgICAvL1kgU2Nyb2xsYmFyc1xuICAgICAgICB0aGlzLnlXcmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuc2Nyb2xsWVNjcm9sbGJhcik7XG4gICAgICAgIHRoaXMueVNjcm9sbGJhci5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLm9uU2Nyb2xsQmFyWSk7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnc2V0U2Nyb2xsQmFyUGFkZGluZ3MnLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHNldFNjcm9sbEJhclBhZGRpbmdzKCkge1xuICAgICAgICB2YXIgc2Nyb2xsUGFkZGluZyA9ICcwcHggMHB4ICcgKyB0aGlzLnhTY3JvbGxTaXplICsgJ3B4IDBweCc7XG4gICAgICAgIHRoaXMudGFibGUuc3R5bGUucGFkZGluZyA9IHNjcm9sbFBhZGRpbmc7XG5cbiAgICAgICAgdmFyIHNjcm9sbFBhZGRpbmcgPSAnMHB4ICcgKyB0aGlzLnlTY3JvbGxTaXplICsgJ3B4IDBweCAwcHgnO1xuICAgICAgICB0aGlzLnhXcmFwcGVyLmZpcnN0Q2hpbGQuc3R5bGUucGFkZGluZyA9IHNjcm9sbFBhZGRpbmc7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnc2V0U2Nyb2xsQmFyRGltcycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0U2Nyb2xsQmFyRGltcygpIHtcbiAgICAgICAgdGhpcy54U2Nyb2xsU2l6ZSA9IHRoaXMueFNjcm9sbGJhci5vZmZzZXRIZWlnaHQgLSB0aGlzLnhTY3JvbGxiYXIuY2xpZW50SGVpZ2h0O1xuICAgICAgICB0aGlzLnlTY3JvbGxTaXplID0gdGhpcy55U2Nyb2xsYmFyLm9mZnNldFdpZHRoIC0gdGhpcy55U2Nyb2xsYmFyLmNsaWVudFdpZHRoO1xuXG4gICAgICAgIGlmICghdGhpcy5pc0ZpcmVmb3gpIHtcbiAgICAgICAgICB0aGlzLnNldFNjcm9sbEJhclBhZGRpbmdzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgd2lkdGggPSB0aGlzLmdldFNpemUodGhpcy5yZWFsVGFibGUuZmlyc3RDaGlsZCkud2lkdGg7XG4gICAgICAgIHRoaXMueFNjcm9sbGJhci5maXJzdENoaWxkLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuXG4gICAgICAgIHZhciBoZWlnaHQgPSB0aGlzLmdldFNpemUodGhpcy5yZWFsVGFibGUpLmhlaWdodCArIHRoaXMueFNjcm9sbFNpemUgLSB0aGlzLnN0aWNreUhlYWRlci5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHRoaXMueVNjcm9sbGJhci5maXJzdENoaWxkLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cbiAgICAgICAgaWYgKHRoaXMueFNjcm9sbFNpemUpIHRoaXMueFNjcm9sbGJhci5zdHlsZS5oZWlnaHQgPSB0aGlzLnhTY3JvbGxTaXplICsgMSArICdweCc7XG4gICAgICAgIGlmICh0aGlzLnlTY3JvbGxTaXplKSB0aGlzLnlTY3JvbGxiYXIuc3R5bGUud2lkdGggPSB0aGlzLnlTY3JvbGxTaXplICsgMSArICdweCc7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnc2V0Um93SGVpZ2h0cycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Um93SGVpZ2h0cygpIHtcbiAgICAgICAgdmFyIHIsIGNlbGxUb0NvcHksIGhlaWdodDtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zdGlja3lDb2x1bW5Db3VudCkge1xuICAgICAgICAgIGZvciAociA9IDA7IHIgPCB0aGlzLnJvd0NvdW50OyByKyspIHtcbiAgICAgICAgICAgIGNlbGxUb0NvcHkgPSB0aGlzLnJlYWxUYWJsZS5jaGlsZE5vZGVzW3JdLmZpcnN0Q2hpbGQ7XG5cbiAgICAgICAgICAgIGlmIChjZWxsVG9Db3B5KSB7XG4gICAgICAgICAgICAgIGhlaWdodCA9IHRoaXMuZ2V0U2l6ZShjZWxsVG9Db3B5KS5oZWlnaHQ7XG4gICAgICAgICAgICAgIHRoaXMuc3RpY2t5Q29sdW1uLmZpcnN0Q2hpbGQuY2hpbGROb2Rlc1tyXS5maXJzdENoaWxkLnN0eWxlLmhlaWdodCA9IGhlaWdodCArICdweCc7XG5cbiAgICAgICAgICAgICAgaWYgKHIgPT09IDAgJiYgdGhpcy5zdGlja3lDb3JuZXIuZmlyc3RDaGlsZC5jaGlsZE5vZGVzW3JdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGlja3lDb3JuZXIuZmlyc3RDaGlsZC5maXJzdENoaWxkLmZpcnN0Q2hpbGQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3NldENvbHVtbldpZHRocycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gc2V0Q29sdW1uV2lkdGhzKCkge1xuICAgICAgICB2YXIgYywgY2VsbFRvQ29weSwgY2VsbFN0eWxlLCB3aWR0aCwgY2VsbCwgc3RpY2t5V2lkdGg7XG5cbiAgICAgICAgaWYgKHRoaXMuc3RpY2t5SGVhZGVyQ291bnQpIHtcbiAgICAgICAgICBzdGlja3lXaWR0aCA9IDA7XG5cbiAgICAgICAgICBmb3IgKGMgPSAwOyBjIDwgdGhpcy5jb2x1bW5Db3VudDsgYysrKSB7XG4gICAgICAgICAgICBjZWxsVG9Db3B5ID0gdGhpcy5yZWFsVGFibGUuZmlyc3RDaGlsZC5jaGlsZE5vZGVzW2NdO1xuXG4gICAgICAgICAgICBpZiAoY2VsbFRvQ29weSkge1xuICAgICAgICAgICAgICB3aWR0aCA9IHRoaXMuZ2V0U2l6ZShjZWxsVG9Db3B5KS53aWR0aDtcblxuICAgICAgICAgICAgICBjZWxsID0gdGhpcy50YWJsZS5xdWVyeVNlbGVjdG9yKCcjc3RpY2t5LWhlYWRlci1jZWxsLScgKyBjKTtcblxuICAgICAgICAgICAgICBjZWxsLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xuICAgICAgICAgICAgICBjZWxsLnN0eWxlLm1pbldpZHRoID0gd2lkdGggKyAncHgnO1xuXG4gICAgICAgICAgICAgIHZhciBmaXhlZENvbHVtbnNIZWFkZXIgPSB0aGlzLnN0aWNreUNvcm5lci5maXJzdENoaWxkLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICAgIGlmIChmaXhlZENvbHVtbnNIZWFkZXIgJiYgZml4ZWRDb2x1bW5zSGVhZGVyLmNoaWxkTm9kZXNbY10pIHtcbiAgICAgICAgICAgICAgICBjZWxsID0gZml4ZWRDb2x1bW5zSGVhZGVyLmNoaWxkTm9kZXNbY107XG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcbiAgICAgICAgICAgICAgICBjZWxsLnN0eWxlLm1pbldpZHRoID0gd2lkdGggKyAncHgnO1xuXG4gICAgICAgICAgICAgICAgY2VsbCA9IGZpeGVkQ29sdW1uc0hlYWRlci5jaGlsZE5vZGVzW2NdO1xuICAgICAgICAgICAgICAgIGNlbGwuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgY2VsbC5zdHlsZS5taW5XaWR0aCA9IHdpZHRoICsgJ3B4JztcblxuICAgICAgICAgICAgICAgIHN0aWNreVdpZHRoICs9IHdpZHRoO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5zdGlja3lDb2x1bW4uZmlyc3RDaGlsZC5zdHlsZS53aWR0aCA9IHN0aWNreVdpZHRoICsgJ3B4JztcbiAgICAgICAgICB0aGlzLnN0aWNreUNvbHVtbi5maXJzdENoaWxkLnN0eWxlLm1pbldpZHRoID0gc3RpY2t5V2lkdGggKyAncHgnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0U3RpY2t5Q29sdW1ucycsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U3RpY2t5Q29sdW1ucyhyb3dzKSB7XG4gICAgICAgIHZhciBjb2x1bW5zQ291bnQgPSB0aGlzLnByb3BzLnN0aWNreUNvbHVtbkNvdW50O1xuICAgICAgICB2YXIgY2VsbHM7XG4gICAgICAgIHZhciBzdGlja3lSb3dzID0gW107XG5cbiAgICAgICAgcm93cy5mb3JFYWNoKGZ1bmN0aW9uIChyb3csIHIpIHtcbiAgICAgICAgICBjZWxscyA9IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KHJvdy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgICAgICBzdGlja3lSb3dzLnB1c2goX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICBfUm93Mi5kZWZhdWx0LFxuICAgICAgICAgICAgX2V4dGVuZHMoe30sIHJvdy5wcm9wcywgeyBpZDogJycsIGtleTogciB9KSxcbiAgICAgICAgICAgIGNlbGxzLnNsaWNlKDAsIGNvbHVtbnNDb3VudClcbiAgICAgICAgICApKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHN0aWNreVJvd3M7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0U3RpY2t5SGVhZGVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRTdGlja3lIZWFkZXIocm93cykge1xuICAgICAgICB2YXIgcm93ID0gcm93c1swXTtcbiAgICAgICAgdmFyIGNlbGxzID0gW107XG5cbiAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkocm93LnByb3BzLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uIChjZWxsLCBjKSB7XG4gICAgICAgICAgY2VsbHMucHVzaChfcmVhY3QyLmRlZmF1bHQuY2xvbmVFbGVtZW50KGNlbGwsIHsgaWQ6ICdzdGlja3ktaGVhZGVyLWNlbGwtJyArIGMsIGtleTogYyB9KSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfUm93Mi5kZWZhdWx0LFxuICAgICAgICAgIF9leHRlbmRzKHt9LCByb3cucHJvcHMsIHsgaWQ6ICdzdGlja3ktaGVhZGVyLXJvdycgfSksXG4gICAgICAgICAgY2VsbHNcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6ICdnZXRTdGlja3lDb3JuZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0aWNreUNvcm5lcihyb3dzKSB7XG4gICAgICAgIHZhciBjb2x1bW5zQ291bnQgPSB0aGlzLnByb3BzLnN0aWNreUNvbHVtbkNvdW50O1xuICAgICAgICB2YXIgY2VsbHM7XG4gICAgICAgIHZhciBzdGlja3lDb3JuZXIgPSBbXTtcblxuICAgICAgICByb3dzLmZvckVhY2goZnVuY3Rpb24gKHJvdywgcikge1xuICAgICAgICAgIGlmIChyID09PSAwKSB7XG4gICAgICAgICAgICBjZWxscyA9IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KHJvdy5wcm9wcy5jaGlsZHJlbik7XG5cbiAgICAgICAgICAgIHN0aWNreUNvcm5lci5wdXNoKF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICBfUm93Mi5kZWZhdWx0LFxuICAgICAgICAgICAgICBfZXh0ZW5kcyh7fSwgcm93LnByb3BzLCB7IGlkOiAnJywga2V5OiByIH0pLFxuICAgICAgICAgICAgICBjZWxscy5zbGljZSgwLCBjb2x1bW5zQ291bnQpXG4gICAgICAgICAgICApKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBzdGlja3lDb3JuZXI7XG4gICAgICB9XG4gICAgfSwge1xuICAgICAga2V5OiAnZ2V0U2l6ZScsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0U2l6ZShub2RlKSB7XG4gICAgICAgIHZhciB3aWR0aCA9IG5vZGUgPyBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIDogMDtcbiAgICAgICAgdmFyIGhlaWdodCA9IG5vZGUgPyBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCA6IDA7XG5cbiAgICAgICAgcmV0dXJuIHsgd2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodCB9O1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICB2YXIgcm93cyA9IF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICAgICAgICB2YXIgc3RpY2t5Q29sdW1uLCBzdGlja3lIZWFkZXIsIHN0aWNreUNvcm5lcjtcblxuICAgICAgICB0aGlzLnJvd0NvdW50ID0gcm93cy5sZW5ndGg7XG4gICAgICAgIHRoaXMuY29sdW1uQ291bnQgPSByb3dzWzBdICYmIF9yZWFjdDIuZGVmYXVsdC5DaGlsZHJlbi50b0FycmF5KHJvd3NbMF0ucHJvcHMuY2hpbGRyZW4pLmxlbmd0aCB8fCAwO1xuXG4gICAgICAgIGlmIChyb3dzLmxlbmd0aCkge1xuICAgICAgICAgIGlmICh0aGlzLnByb3BzLnN0aWNreUNvbHVtbkNvdW50ID4gMCAmJiB0aGlzLnN0aWNreUhlYWRlckNvdW50ID4gMCkge1xuICAgICAgICAgICAgc3RpY2t5Q29ybmVyID0gdGhpcy5nZXRTdGlja3lDb3JuZXIocm93cyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh0aGlzLnByb3BzLnN0aWNreUNvbHVtbkNvdW50ID4gMCkge1xuICAgICAgICAgICAgc3RpY2t5Q29sdW1uID0gdGhpcy5nZXRTdGlja3lDb2x1bW5zKHJvd3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5zdGlja3lIZWFkZXJDb3VudCA+IDApIHtcbiAgICAgICAgICAgIHN0aWNreUhlYWRlciA9IHRoaXMuZ2V0U3RpY2t5SGVhZGVyKHJvd3MpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICB7IGNsYXNzTmFtZTogJ3N0aWNreS10YWJsZSAnICsgKHRoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnKSwgaWQ6ICdzdGlja3ktdGFibGUtJyArIHRoaXMuaWQgfSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBpZDogJ3gtc2Nyb2xsYmFyJyB9LFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBpZDogJ3ktc2Nyb2xsYmFyJyB9LFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdzdGlja3ktdGFibGUtY29ybmVyJywgaWQ6ICdzdGlja3ktdGFibGUtY29ybmVyJyB9LFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIF9UYWJsZTIuZGVmYXVsdCxcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgc3RpY2t5Q29ybmVyXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdzdGlja3ktdGFibGUtaGVhZGVyJywgaWQ6ICdzdGlja3ktdGFibGUtaGVhZGVyJyB9LFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIF9UYWJsZTIuZGVmYXVsdCxcbiAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgc3RpY2t5SGVhZGVyXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdzdGlja3ktdGFibGUteS13cmFwcGVyJywgaWQ6ICdzdGlja3ktdGFibGUteS13cmFwcGVyJyB9LFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3N0aWNreS10YWJsZS1jb2x1bW4nLCBpZDogJ3N0aWNreS10YWJsZS1jb2x1bW4nIH0sXG4gICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIF9UYWJsZTIuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIHN0aWNreUNvbHVtblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgICB7IGNsYXNzTmFtZTogJ3N0aWNreS10YWJsZS14LXdyYXBwZXInLCBpZDogJ3N0aWNreS10YWJsZS14LXdyYXBwZXInIH0sXG4gICAgICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgICAgIF9UYWJsZTIuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgIHJvd3NcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gU3RpY2t5VGFibGU7XG4gIH0oX3JlYWN0LlB1cmVDb21wb25lbnQpO1xuXG4gIFN0aWNreVRhYmxlLnByb3BUeXBlcyA9IHtcbiAgICBzdGlja3lIZWFkZXJDb3VudDogX3Byb3BUeXBlczIuZGVmYXVsdC5udW1iZXIsXG4gICAgc3RpY2t5Q29sdW1uQ291bnQ6IF9wcm9wVHlwZXMyLmRlZmF1bHQubnVtYmVyLFxuXG4gICAgb25TY3JvbGw6IF9wcm9wVHlwZXMyLmRlZmF1bHQuZnVuY1xuICB9O1xuICBTdGlja3lUYWJsZS5kZWZhdWx0UHJvcHMgPSB7XG4gICAgc3RpY2t5SGVhZGVyQ291bnQ6IDEsXG4gICAgc3RpY2t5Q29sdW1uQ291bnQ6IDFcbiAgfTtcbiAgZXhwb3J0cy5TdGlja3lUYWJsZSA9IFN0aWNreVRhYmxlO1xuICBleHBvcnRzLlRhYmxlID0gX1RhYmxlMi5kZWZhdWx0O1xuICBleHBvcnRzLlJvdyA9IF9Sb3cyLmRlZmF1bHQ7XG4gIGV4cG9ydHMuQ2VsbCA9IF9DZWxsMi5kZWZhdWx0O1xufSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFsnZXhwb3J0cycsICdyZWFjdCcsICdyZWFjdC1kb20nXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoJ3JlYWN0JyksIHJlcXVpcmUoJ3JlYWN0LWRvbScpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5yZWFjdCwgZ2xvYmFsLnJlYWN0RG9tKTtcbiAgICBnbG9iYWwuaW5kZXggPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIF9yZWFjdCwgX3JlYWN0RG9tKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcblxuICB2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuICB2YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICAgIH07XG4gIH0oKTtcblxuICBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gICAgaWYgKCFzZWxmKSB7XG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgICB9XG5cbiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG4gIH1cblxuICB2YXIgVGFibGUgPSBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgIF9pbmhlcml0cyhUYWJsZSwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBUYWJsZSgpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBUYWJsZSk7XG5cbiAgICAgIHJldHVybiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoVGFibGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihUYWJsZSkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhUYWJsZSwgW3tcbiAgICAgIGtleTogJ3JlbmRlcicsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgX2V4dGVuZHMoe30sIHRoaXMucHJvcHMsIHsgY2xhc3NOYW1lOiAnc3RpY2t5LXRhYmxlLWNvbnRhaW5lciAnICsgKHRoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnKSB9KSxcbiAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIFRhYmxlO1xuICB9KF9yZWFjdC5Db21wb25lbnQpO1xuXG4gIGV4cG9ydHMuZGVmYXVsdCA9IFRhYmxlO1xufSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFsnZXhwb3J0cycsICdyZWFjdCcsICdyZWFjdC1kb20nXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoJ3JlYWN0JyksIHJlcXVpcmUoJ3JlYWN0LWRvbScpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5yZWFjdCwgZ2xvYmFsLnJlYWN0RG9tKTtcbiAgICBnbG9iYWwuaW5kZXggPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIF9yZWFjdCwgX3JlYWN0RG9tKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcblxuICB2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuICB2YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICAgIH07XG4gIH0oKTtcblxuICBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gICAgaWYgKCFzZWxmKSB7XG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgICB9XG5cbiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG4gIH1cblxuICB2YXIgUm93ID0gZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHMoUm93LCBfQ29tcG9uZW50KTtcblxuICAgIGZ1bmN0aW9uIFJvdygpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBSb3cpO1xuXG4gICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFJvdy5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFJvdykpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhSb3csIFt7XG4gICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIF9leHRlbmRzKHt9LCB0aGlzLnByb3BzLCB7IGNsYXNzTmFtZTogJ3N0aWNreS10YWJsZS1yb3cgJyArICh0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJykgfSksXG4gICAgICAgICAgdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBSb3c7XG4gIH0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbiAgZXhwb3J0cy5kZWZhdWx0ID0gUm93O1xufSk7IiwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XG4gICAgZGVmaW5lKFsnZXhwb3J0cycsICdyZWFjdCcsICdyZWFjdC1kb20nXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBmYWN0b3J5KGV4cG9ydHMsIHJlcXVpcmUoJ3JlYWN0JyksIHJlcXVpcmUoJ3JlYWN0LWRvbScpKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9kID0ge1xuICAgICAgZXhwb3J0czoge31cbiAgICB9O1xuICAgIGZhY3RvcnkobW9kLmV4cG9ydHMsIGdsb2JhbC5yZWFjdCwgZ2xvYmFsLnJlYWN0RG9tKTtcbiAgICBnbG9iYWwuaW5kZXggPSBtb2QuZXhwb3J0cztcbiAgfVxufSkodGhpcywgZnVuY3Rpb24gKGV4cG9ydHMsIF9yZWFjdCwgX3JlYWN0RG9tKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxuICB9KTtcblxuICB2YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxuICB2YXIgX3JlYWN0RG9tMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0RG9tKTtcblxuICBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gICAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gICAgfVxuICB9XG5cbiAgdmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICAgIH07XG4gIH0oKTtcblxuICBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gICAgaWYgKCFzZWxmKSB7XG4gICAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7XG4gIH1cblxuICBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgICB9XG5cbiAgICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7XG4gIH1cblxuICB2YXIgQ2VsbCA9IGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgX2luaGVyaXRzKENlbGwsIF9Db21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gQ2VsbCgpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDZWxsKTtcblxuICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChDZWxsLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ2VsbCkpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhDZWxsLCBbe1xuICAgICAga2V5OiAncmVuZGVyJyxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICBfZXh0ZW5kcyh7fSwgdGhpcy5wcm9wcywgeyBjbGFzc05hbWU6ICdzdGlja3ktdGFibGUtY2VsbCAnICsgKHRoaXMucHJvcHMuY2xhc3NOYW1lIHx8ICcnKSB9KSxcbiAgICAgICAgICB0aGlzLnByb3BzLmNoaWxkcmVuXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIENlbGw7XG4gIH0oX3JlYWN0LkNvbXBvbmVudCk7XG5cbiAgZXhwb3J0cy5kZWZhdWx0ID0gQ2VsbDtcbn0pOyIsInZhciByZXF1ZXN0RnJhbWUgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgd2luZG93ID0gdGhpc1xuICB2YXIgcmFmID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgZnVuY3Rpb24gZmFsbGJhY2tSQUYoZnVuYykge1xuICAgICAgcmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmMsIDIwKVxuICAgIH1cbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcXVlc3RGcmFtZUZ1bmN0aW9uKGZ1bmMpIHtcbiAgICByZXR1cm4gcmFmKGZ1bmMpXG4gIH1cbn0pKClcblxudmFyIGNhbmNlbEZyYW1lID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHdpbmRvdyA9IHRoaXNcbiAgdmFyIGNhbmNlbCA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgIHdpbmRvdy5jbGVhclRpbWVvdXRcbiAgcmV0dXJuIGZ1bmN0aW9uIGNhbmNlbEZyYW1lRnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2FuY2VsKGlkKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIHJlc2l6ZUxpc3RlbmVyKGUpIHtcbiAgdmFyIHdpbiA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudFxuICBpZiAod2luLl9fcmVzaXplUkFGX18pIHtcbiAgICBjYW5jZWxGcmFtZSh3aW4uX19yZXNpemVSQUZfXylcbiAgfVxuICB3aW4uX19yZXNpemVSQUZfXyA9IHJlcXVlc3RGcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRyaWdnZXIgPSB3aW4uX19yZXNpemVUcmlnZ2VyX19cbiAgICB0cmlnZ2VyLl9fcmVzaXplTGlzdGVuZXJzX18uZm9yRWFjaChmdW5jdGlvbiAoZm4pIHtcbiAgICAgIGZuLmNhbGwodHJpZ2dlciwgZSlcbiAgICB9KVxuICB9KVxufVxuXG52YXIgZXhwb3J0cyA9IGZ1bmN0aW9uIGV4cG9ydHMoZWxlbWVudCwgZm4pIHtcbiAgdmFyIHdpbmRvdyA9IHRoaXNcbiAgdmFyIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50XG4gIHZhciBpc0lFXG5cbiAgdmFyIGF0dGFjaEV2ZW50ID0gZG9jdW1lbnQuYXR0YWNoRXZlbnRcbiAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgaXNJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnQvKSB8fFxuICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRWRnZS8pXG4gIH1cblxuICBmdW5jdGlvbiBvYmplY3RMb2FkKCkge1xuICAgIHRoaXMuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3Ll9fcmVzaXplVHJpZ2dlcl9fID0gdGhpcy5fX3Jlc2l6ZUVsZW1lbnRfX1xuICAgIHRoaXMuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUxpc3RlbmVyKVxuICB9XG5cbiAgaWYgKCFlbGVtZW50Ll9fcmVzaXplTGlzdGVuZXJzX18pIHtcbiAgICBlbGVtZW50Ll9fcmVzaXplTGlzdGVuZXJzX18gPSBbXVxuICAgIGlmIChhdHRhY2hFdmVudCkge1xuICAgICAgZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJfXyA9IGVsZW1lbnRcbiAgICAgIGVsZW1lbnQuYXR0YWNoRXZlbnQoJ29ucmVzaXplJywgcmVzaXplTGlzdGVuZXIpXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgICAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJ1xuICAgICAgfVxuICAgICAgdmFyIG9iaiA9IChlbGVtZW50Ll9fcmVzaXplVHJpZ2dlcl9fID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2JqZWN0JykpXG4gICAgICBvYmouc2V0QXR0cmlidXRlKFxuICAgICAgICAnc3R5bGUnLFxuICAgICAgICAnZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyBoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBvdmVyZmxvdzogaGlkZGVuOyBwb2ludGVyLWV2ZW50czogbm9uZTsgei1pbmRleDogLTE7IG9wYWNpdHk6IDA7J1xuICAgICAgKVxuICAgICAgb2JqLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmVzaXplLXNlbnNvcicpXG4gICAgICBvYmouX19yZXNpemVFbGVtZW50X18gPSBlbGVtZW50XG4gICAgICBvYmoub25sb2FkID0gb2JqZWN0TG9hZFxuICAgICAgb2JqLnR5cGUgPSAndGV4dC9odG1sJ1xuICAgICAgaWYgKGlzSUUpIHtcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChvYmopXG4gICAgICB9XG4gICAgICBvYmouZGF0YSA9ICdhYm91dDpibGFuaydcbiAgICAgIGlmICghaXNJRSkge1xuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG9iailcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgZWxlbWVudC5fX3Jlc2l6ZUxpc3RlbmVyc19fLnB1c2goZm4pXG59XG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyBleHBvcnRzIDogZXhwb3J0cy5iaW5kKHdpbmRvdylcblxubW9kdWxlLmV4cG9ydHMudW5iaW5kID0gZnVuY3Rpb24gKGVsZW1lbnQsIGZuKSB7XG4gIHZhciBhdHRhY2hFdmVudCA9IGRvY3VtZW50LmF0dGFjaEV2ZW50XG4gIGlmIChmbikge1xuICAgIGVsZW1lbnQuX19yZXNpemVMaXN0ZW5lcnNfXy5zcGxpY2UoXG4gICAgICBlbGVtZW50Ll9fcmVzaXplTGlzdGVuZXJzX18uaW5kZXhPZihmbiksXG4gICAgICAxXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIGVsZW1lbnQuX19yZXNpemVMaXN0ZW5lcnNfXyA9IFtdXG4gIH1cbiAgaWYgKCFlbGVtZW50Ll9fcmVzaXplTGlzdGVuZXJzX18ubGVuZ3RoKSB7XG4gICAgaWYgKGF0dGFjaEV2ZW50KSB7XG4gICAgICBlbGVtZW50LmRldGFjaEV2ZW50KCdvbnJlc2l6ZScsIHJlc2l6ZUxpc3RlbmVyKVxuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50Ll9fcmVzaXplVHJpZ2dlcl9fLmNvbnRlbnREb2N1bWVudC5kZWZhdWx0Vmlldy5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAncmVzaXplJyxcbiAgICAgICAgcmVzaXplTGlzdGVuZXJcbiAgICAgIClcbiAgICAgIGRlbGV0ZSBlbGVtZW50Ll9fcmVzaXplVHJpZ2dlcl9fLmNvbnRlbnREb2N1bWVudC5kZWZhdWx0Vmlldy5fX3Jlc2l6ZVRyaWdnZXJfX1xuICAgICAgZWxlbWVudC5fX3Jlc2l6ZVRyaWdnZXJfXyA9ICFlbGVtZW50LnJlbW92ZUNoaWxkKFxuICAgICAgICBlbGVtZW50Ll9fcmVzaXplVHJpZ2dlcl9fXG4gICAgICApXG4gICAgfVxuICAgIGRlbGV0ZSBlbGVtZW50Ll9fcmVzaXplTGlzdGVuZXJzX19cbiAgfVxufVxuIiwidmFyIG1vbWVudCA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vbW9tZW50LXRpbWV6b25lXCIpO1xubW9tZW50LnR6LmxvYWQocmVxdWlyZSgnLi9kYXRhL3BhY2tlZC9sYXRlc3QuanNvbicpKTtcbiIsIi8vISBtb21lbnQtdGltZXpvbmUuanNcbi8vISB2ZXJzaW9uIDogMC41LjI4XG4vLyEgQ29weXJpZ2h0IChjKSBKUyBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbi8vISBsaWNlbnNlIDogTUlUXG4vLyEgZ2l0aHViLmNvbS9tb21lbnQvbW9tZW50LXRpbWV6b25lXG5cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuXHRcInVzZSBzdHJpY3RcIjtcblxuXHQvKmdsb2JhbCBkZWZpbmUqL1xuXHRpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSgnbW9tZW50JykpOyAvLyBOb2RlXG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG5cdFx0ZGVmaW5lKFsnbW9tZW50J10sIGZhY3RvcnkpOyAgICAgICAgICAgICAgICAgLy8gQU1EXG5cdH0gZWxzZSB7XG5cdFx0ZmFjdG9yeShyb290Lm1vbWVudCk7ICAgICAgICAgICAgICAgICAgICAgICAgLy8gQnJvd3NlclxuXHR9XG59KHRoaXMsIGZ1bmN0aW9uIChtb21lbnQpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0Ly8gRG8gbm90IGxvYWQgbW9tZW50LXRpbWV6b25lIGEgc2Vjb25kIHRpbWUuXG5cdC8vIGlmIChtb21lbnQudHogIT09IHVuZGVmaW5lZCkge1xuXHQvLyBcdGxvZ0Vycm9yKCdNb21lbnQgVGltZXpvbmUgJyArIG1vbWVudC50ei52ZXJzaW9uICsgJyB3YXMgYWxyZWFkeSBsb2FkZWQgJyArIChtb21lbnQudHouZGF0YVZlcnNpb24gPyAnd2l0aCBkYXRhIGZyb20gJyA6ICd3aXRob3V0IGFueSBkYXRhJykgKyBtb21lbnQudHouZGF0YVZlcnNpb24pO1xuXHQvLyBcdHJldHVybiBtb21lbnQ7XG5cdC8vIH1cblxuXHR2YXIgVkVSU0lPTiA9IFwiMC41LjI4XCIsXG5cdFx0em9uZXMgPSB7fSxcblx0XHRsaW5rcyA9IHt9LFxuXHRcdGNvdW50cmllcyA9IHt9LFxuXHRcdG5hbWVzID0ge30sXG5cdFx0Z3Vlc3NlcyA9IHt9LFxuXHRcdGNhY2hlZEd1ZXNzO1xuXG5cdGlmICghbW9tZW50IHx8IHR5cGVvZiBtb21lbnQudmVyc2lvbiAhPT0gJ3N0cmluZycpIHtcblx0XHRsb2dFcnJvcignTW9tZW50IFRpbWV6b25lIHJlcXVpcmVzIE1vbWVudC5qcy4gU2VlIGh0dHBzOi8vbW9tZW50anMuY29tL3RpbWV6b25lL2RvY3MvIy91c2UtaXQvYnJvd3Nlci8nKTtcblx0fVxuXG5cdHZhciBtb21lbnRWZXJzaW9uID0gbW9tZW50LnZlcnNpb24uc3BsaXQoJy4nKSxcblx0XHRtYWpvciA9ICttb21lbnRWZXJzaW9uWzBdLFxuXHRcdG1pbm9yID0gK21vbWVudFZlcnNpb25bMV07XG5cblx0Ly8gTW9tZW50LmpzIHZlcnNpb24gY2hlY2tcblx0aWYgKG1ham9yIDwgMiB8fCAobWFqb3IgPT09IDIgJiYgbWlub3IgPCA2KSkge1xuXHRcdGxvZ0Vycm9yKCdNb21lbnQgVGltZXpvbmUgcmVxdWlyZXMgTW9tZW50LmpzID49IDIuNi4wLiBZb3UgYXJlIHVzaW5nIE1vbWVudC5qcyAnICsgbW9tZW50LnZlcnNpb24gKyAnLiBTZWUgbW9tZW50anMuY29tJyk7XG5cdH1cblxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0VW5wYWNraW5nXG5cdCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRmdW5jdGlvbiBjaGFyQ29kZVRvSW50KGNoYXJDb2RlKSB7XG5cdFx0aWYgKGNoYXJDb2RlID4gOTYpIHtcblx0XHRcdHJldHVybiBjaGFyQ29kZSAtIDg3O1xuXHRcdH0gZWxzZSBpZiAoY2hhckNvZGUgPiA2NCkge1xuXHRcdFx0cmV0dXJuIGNoYXJDb2RlIC0gMjk7XG5cdFx0fVxuXHRcdHJldHVybiBjaGFyQ29kZSAtIDQ4O1xuXHR9XG5cblx0ZnVuY3Rpb24gdW5wYWNrQmFzZTYwKHN0cmluZykge1xuXHRcdHZhciBpID0gMCxcblx0XHRcdHBhcnRzID0gc3RyaW5nLnNwbGl0KCcuJyksXG5cdFx0XHR3aG9sZSA9IHBhcnRzWzBdLFxuXHRcdFx0ZnJhY3Rpb25hbCA9IHBhcnRzWzFdIHx8ICcnLFxuXHRcdFx0bXVsdGlwbGllciA9IDEsXG5cdFx0XHRudW0sXG5cdFx0XHRvdXQgPSAwLFxuXHRcdFx0c2lnbiA9IDE7XG5cblx0XHQvLyBoYW5kbGUgbmVnYXRpdmUgbnVtYmVyc1xuXHRcdGlmIChzdHJpbmcuY2hhckNvZGVBdCgwKSA9PT0gNDUpIHtcblx0XHRcdGkgPSAxO1xuXHRcdFx0c2lnbiA9IC0xO1xuXHRcdH1cblxuXHRcdC8vIGhhbmRsZSBkaWdpdHMgYmVmb3JlIHRoZSBkZWNpbWFsXG5cdFx0Zm9yIChpOyBpIDwgd2hvbGUubGVuZ3RoOyBpKyspIHtcblx0XHRcdG51bSA9IGNoYXJDb2RlVG9JbnQod2hvbGUuY2hhckNvZGVBdChpKSk7XG5cdFx0XHRvdXQgPSA2MCAqIG91dCArIG51bTtcblx0XHR9XG5cblx0XHQvLyBoYW5kbGUgZGlnaXRzIGFmdGVyIHRoZSBkZWNpbWFsXG5cdFx0Zm9yIChpID0gMDsgaSA8IGZyYWN0aW9uYWwubGVuZ3RoOyBpKyspIHtcblx0XHRcdG11bHRpcGxpZXIgPSBtdWx0aXBsaWVyIC8gNjA7XG5cdFx0XHRudW0gPSBjaGFyQ29kZVRvSW50KGZyYWN0aW9uYWwuY2hhckNvZGVBdChpKSk7XG5cdFx0XHRvdXQgKz0gbnVtICogbXVsdGlwbGllcjtcblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0ICogc2lnbjtcblx0fVxuXG5cdGZ1bmN0aW9uIGFycmF5VG9JbnQgKGFycmF5KSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0YXJyYXlbaV0gPSB1bnBhY2tCYXNlNjAoYXJyYXlbaV0pO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGludFRvVW50aWwgKGFycmF5LCBsZW5ndGgpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHRhcnJheVtpXSA9IE1hdGgucm91bmQoKGFycmF5W2kgLSAxXSB8fCAwKSArIChhcnJheVtpXSAqIDYwMDAwKSk7IC8vIG1pbnV0ZXMgdG8gbWlsbGlzZWNvbmRzXG5cdFx0fVxuXG5cdFx0YXJyYXlbbGVuZ3RoIC0gMV0gPSBJbmZpbml0eTtcblx0fVxuXG5cdGZ1bmN0aW9uIG1hcEluZGljZXMgKHNvdXJjZSwgaW5kaWNlcykge1xuXHRcdHZhciBvdXQgPSBbXSwgaTtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCBpbmRpY2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRvdXRbaV0gPSBzb3VyY2VbaW5kaWNlc1tpXV07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG91dDtcblx0fVxuXG5cdGZ1bmN0aW9uIHVucGFjayAoc3RyaW5nKSB7XG5cdFx0dmFyIGRhdGEgPSBzdHJpbmcuc3BsaXQoJ3wnKSxcblx0XHRcdG9mZnNldHMgPSBkYXRhWzJdLnNwbGl0KCcgJyksXG5cdFx0XHRpbmRpY2VzID0gZGF0YVszXS5zcGxpdCgnJyksXG5cdFx0XHR1bnRpbHMgID0gZGF0YVs0XS5zcGxpdCgnICcpO1xuXG5cdFx0YXJyYXlUb0ludChvZmZzZXRzKTtcblx0XHRhcnJheVRvSW50KGluZGljZXMpO1xuXHRcdGFycmF5VG9JbnQodW50aWxzKTtcblxuXHRcdGludFRvVW50aWwodW50aWxzLCBpbmRpY2VzLmxlbmd0aCk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0bmFtZSAgICAgICA6IGRhdGFbMF0sXG5cdFx0XHRhYmJycyAgICAgIDogbWFwSW5kaWNlcyhkYXRhWzFdLnNwbGl0KCcgJyksIGluZGljZXMpLFxuXHRcdFx0b2Zmc2V0cyAgICA6IG1hcEluZGljZXMob2Zmc2V0cywgaW5kaWNlcyksXG5cdFx0XHR1bnRpbHMgICAgIDogdW50aWxzLFxuXHRcdFx0cG9wdWxhdGlvbiA6IGRhdGFbNV0gfCAwXG5cdFx0fTtcblx0fVxuXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0XHRab25lIG9iamVjdFxuXHQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0ZnVuY3Rpb24gWm9uZSAocGFja2VkU3RyaW5nKSB7XG5cdFx0aWYgKHBhY2tlZFN0cmluZykge1xuXHRcdFx0dGhpcy5fc2V0KHVucGFjayhwYWNrZWRTdHJpbmcpKTtcblx0XHR9XG5cdH1cblxuXHRab25lLnByb3RvdHlwZSA9IHtcblx0XHRfc2V0IDogZnVuY3Rpb24gKHVucGFja2VkKSB7XG5cdFx0XHR0aGlzLm5hbWUgICAgICAgPSB1bnBhY2tlZC5uYW1lO1xuXHRcdFx0dGhpcy5hYmJycyAgICAgID0gdW5wYWNrZWQuYWJicnM7XG5cdFx0XHR0aGlzLnVudGlscyAgICAgPSB1bnBhY2tlZC51bnRpbHM7XG5cdFx0XHR0aGlzLm9mZnNldHMgICAgPSB1bnBhY2tlZC5vZmZzZXRzO1xuXHRcdFx0dGhpcy5wb3B1bGF0aW9uID0gdW5wYWNrZWQucG9wdWxhdGlvbjtcblx0XHR9LFxuXG5cdFx0X2luZGV4IDogZnVuY3Rpb24gKHRpbWVzdGFtcCkge1xuXHRcdFx0dmFyIHRhcmdldCA9ICt0aW1lc3RhbXAsXG5cdFx0XHRcdHVudGlscyA9IHRoaXMudW50aWxzLFxuXHRcdFx0XHRpO1xuXG5cdFx0XHRmb3IgKGkgPSAwOyBpIDwgdW50aWxzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmICh0YXJnZXQgPCB1bnRpbHNbaV0pIHtcblx0XHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRjb3VudHJpZXMgOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgem9uZV9uYW1lID0gdGhpcy5uYW1lO1xuXHRcdFx0cmV0dXJuIE9iamVjdC5rZXlzKGNvdW50cmllcykuZmlsdGVyKGZ1bmN0aW9uIChjb3VudHJ5X2NvZGUpIHtcblx0XHRcdFx0cmV0dXJuIGNvdW50cmllc1tjb3VudHJ5X2NvZGVdLnpvbmVzLmluZGV4T2Yoem9uZV9uYW1lKSAhPT0gLTE7XG5cdFx0XHR9KTtcblx0XHR9LFxuXG5cdFx0cGFyc2UgOiBmdW5jdGlvbiAodGltZXN0YW1wKSB7XG5cdFx0XHR2YXIgdGFyZ2V0ICA9ICt0aW1lc3RhbXAsXG5cdFx0XHRcdG9mZnNldHMgPSB0aGlzLm9mZnNldHMsXG5cdFx0XHRcdHVudGlscyAgPSB0aGlzLnVudGlscyxcblx0XHRcdFx0bWF4ICAgICA9IHVudGlscy5sZW5ndGggLSAxLFxuXHRcdFx0XHRvZmZzZXQsIG9mZnNldE5leHQsIG9mZnNldFByZXYsIGk7XG5cblx0XHRcdGZvciAoaSA9IDA7IGkgPCBtYXg7IGkrKykge1xuXHRcdFx0XHRvZmZzZXQgICAgID0gb2Zmc2V0c1tpXTtcblx0XHRcdFx0b2Zmc2V0TmV4dCA9IG9mZnNldHNbaSArIDFdO1xuXHRcdFx0XHRvZmZzZXRQcmV2ID0gb2Zmc2V0c1tpID8gaSAtIDEgOiBpXTtcblxuXHRcdFx0XHRpZiAob2Zmc2V0IDwgb2Zmc2V0TmV4dCAmJiB0ei5tb3ZlQW1iaWd1b3VzRm9yd2FyZCkge1xuXHRcdFx0XHRcdG9mZnNldCA9IG9mZnNldE5leHQ7XG5cdFx0XHRcdH0gZWxzZSBpZiAob2Zmc2V0ID4gb2Zmc2V0UHJldiAmJiB0ei5tb3ZlSW52YWxpZEZvcndhcmQpIHtcblx0XHRcdFx0XHRvZmZzZXQgPSBvZmZzZXRQcmV2O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHRhcmdldCA8IHVudGlsc1tpXSAtIChvZmZzZXQgKiA2MDAwMCkpIHtcblx0XHRcdFx0XHRyZXR1cm4gb2Zmc2V0c1tpXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb2Zmc2V0c1ttYXhdO1xuXHRcdH0sXG5cblx0XHRhYmJyIDogZnVuY3Rpb24gKG1vbSkge1xuXHRcdFx0cmV0dXJuIHRoaXMuYWJicnNbdGhpcy5faW5kZXgobW9tKV07XG5cdFx0fSxcblxuXHRcdG9mZnNldCA6IGZ1bmN0aW9uIChtb20pIHtcblx0XHRcdGxvZ0Vycm9yKFwiem9uZS5vZmZzZXQgaGFzIGJlZW4gZGVwcmVjYXRlZCBpbiBmYXZvciBvZiB6b25lLnV0Y09mZnNldFwiKTtcblx0XHRcdHJldHVybiB0aGlzLm9mZnNldHNbdGhpcy5faW5kZXgobW9tKV07XG5cdFx0fSxcblxuXHRcdHV0Y09mZnNldCA6IGZ1bmN0aW9uIChtb20pIHtcblx0XHRcdHJldHVybiB0aGlzLm9mZnNldHNbdGhpcy5faW5kZXgobW9tKV07XG5cdFx0fVxuXHR9O1xuXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0XHRDb3VudHJ5IG9iamVjdFxuXHQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0ZnVuY3Rpb24gQ291bnRyeSAoY291bnRyeV9uYW1lLCB6b25lX25hbWVzKSB7XG5cdFx0dGhpcy5uYW1lID0gY291bnRyeV9uYW1lO1xuXHRcdHRoaXMuem9uZXMgPSB6b25lX25hbWVzO1xuXHR9XG5cblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHRcdEN1cnJlbnQgVGltZXpvbmVcblx0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdGZ1bmN0aW9uIE9mZnNldEF0KGF0KSB7XG5cdFx0dmFyIHRpbWVTdHJpbmcgPSBhdC50b1RpbWVTdHJpbmcoKTtcblx0XHR2YXIgYWJiciA9IHRpbWVTdHJpbmcubWF0Y2goL1xcKFthLXogXStcXCkvaSk7XG5cdFx0aWYgKGFiYnIgJiYgYWJiclswXSkge1xuXHRcdFx0Ly8gMTc6NTY6MzEgR01ULTA2MDAgKENTVClcblx0XHRcdC8vIDE3OjU2OjMxIEdNVC0wNjAwIChDZW50cmFsIFN0YW5kYXJkIFRpbWUpXG5cdFx0XHRhYmJyID0gYWJiclswXS5tYXRjaCgvW0EtWl0vZyk7XG5cdFx0XHRhYmJyID0gYWJiciA/IGFiYnIuam9pbignJykgOiB1bmRlZmluZWQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIDE3OjU2OjMxIENTVFxuXHRcdFx0Ly8gMTc6NTY6MzEgR01UKzA4MDAgKOWPsOWMl+aomea6luaZgumWkylcblx0XHRcdGFiYnIgPSB0aW1lU3RyaW5nLm1hdGNoKC9bQS1aXXszLDV9L2cpO1xuXHRcdFx0YWJiciA9IGFiYnIgPyBhYmJyWzBdIDogdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdGlmIChhYmJyID09PSAnR01UJykge1xuXHRcdFx0YWJiciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHR0aGlzLmF0ID0gK2F0O1xuXHRcdHRoaXMuYWJiciA9IGFiYnI7XG5cdFx0dGhpcy5vZmZzZXQgPSBhdC5nZXRUaW1lem9uZU9mZnNldCgpO1xuXHR9XG5cblx0ZnVuY3Rpb24gWm9uZVNjb3JlKHpvbmUpIHtcblx0XHR0aGlzLnpvbmUgPSB6b25lO1xuXHRcdHRoaXMub2Zmc2V0U2NvcmUgPSAwO1xuXHRcdHRoaXMuYWJiclNjb3JlID0gMDtcblx0fVxuXG5cdFpvbmVTY29yZS5wcm90b3R5cGUuc2NvcmVPZmZzZXRBdCA9IGZ1bmN0aW9uIChvZmZzZXRBdCkge1xuXHRcdHRoaXMub2Zmc2V0U2NvcmUgKz0gTWF0aC5hYnModGhpcy56b25lLnV0Y09mZnNldChvZmZzZXRBdC5hdCkgLSBvZmZzZXRBdC5vZmZzZXQpO1xuXHRcdGlmICh0aGlzLnpvbmUuYWJicihvZmZzZXRBdC5hdCkucmVwbGFjZSgvW15BLVpdL2csICcnKSAhPT0gb2Zmc2V0QXQuYWJicikge1xuXHRcdFx0dGhpcy5hYmJyU2NvcmUrKztcblx0XHR9XG5cdH07XG5cblx0ZnVuY3Rpb24gZmluZENoYW5nZShsb3csIGhpZ2gpIHtcblx0XHR2YXIgbWlkLCBkaWZmO1xuXG5cdFx0d2hpbGUgKChkaWZmID0gKChoaWdoLmF0IC0gbG93LmF0KSAvIDEyZTQgfCAwKSAqIDZlNCkpIHtcblx0XHRcdG1pZCA9IG5ldyBPZmZzZXRBdChuZXcgRGF0ZShsb3cuYXQgKyBkaWZmKSk7XG5cdFx0XHRpZiAobWlkLm9mZnNldCA9PT0gbG93Lm9mZnNldCkge1xuXHRcdFx0XHRsb3cgPSBtaWQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRoaWdoID0gbWlkO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBsb3c7XG5cdH1cblxuXHRmdW5jdGlvbiB1c2VyT2Zmc2V0cygpIHtcblx0XHR2YXIgc3RhcnRZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpIC0gMixcblx0XHRcdGxhc3QgPSBuZXcgT2Zmc2V0QXQobmV3IERhdGUoc3RhcnRZZWFyLCAwLCAxKSksXG5cdFx0XHRvZmZzZXRzID0gW2xhc3RdLFxuXHRcdFx0Y2hhbmdlLCBuZXh0LCBpO1xuXG5cdFx0Zm9yIChpID0gMTsgaSA8IDQ4OyBpKyspIHtcblx0XHRcdG5leHQgPSBuZXcgT2Zmc2V0QXQobmV3IERhdGUoc3RhcnRZZWFyLCBpLCAxKSk7XG5cdFx0XHRpZiAobmV4dC5vZmZzZXQgIT09IGxhc3Qub2Zmc2V0KSB7XG5cdFx0XHRcdGNoYW5nZSA9IGZpbmRDaGFuZ2UobGFzdCwgbmV4dCk7XG5cdFx0XHRcdG9mZnNldHMucHVzaChjaGFuZ2UpO1xuXHRcdFx0XHRvZmZzZXRzLnB1c2gobmV3IE9mZnNldEF0KG5ldyBEYXRlKGNoYW5nZS5hdCArIDZlNCkpKTtcblx0XHRcdH1cblx0XHRcdGxhc3QgPSBuZXh0O1xuXHRcdH1cblxuXHRcdGZvciAoaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0XHRcdG9mZnNldHMucHVzaChuZXcgT2Zmc2V0QXQobmV3IERhdGUoc3RhcnRZZWFyICsgaSwgMCwgMSkpKTtcblx0XHRcdG9mZnNldHMucHVzaChuZXcgT2Zmc2V0QXQobmV3IERhdGUoc3RhcnRZZWFyICsgaSwgNiwgMSkpKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gb2Zmc2V0cztcblx0fVxuXG5cdGZ1bmN0aW9uIHNvcnRab25lU2NvcmVzIChhLCBiKSB7XG5cdFx0aWYgKGEub2Zmc2V0U2NvcmUgIT09IGIub2Zmc2V0U2NvcmUpIHtcblx0XHRcdHJldHVybiBhLm9mZnNldFNjb3JlIC0gYi5vZmZzZXRTY29yZTtcblx0XHR9XG5cdFx0aWYgKGEuYWJiclNjb3JlICE9PSBiLmFiYnJTY29yZSkge1xuXHRcdFx0cmV0dXJuIGEuYWJiclNjb3JlIC0gYi5hYmJyU2NvcmU7XG5cdFx0fVxuXHRcdGlmIChhLnpvbmUucG9wdWxhdGlvbiAhPT0gYi56b25lLnBvcHVsYXRpb24pIHtcblx0XHRcdHJldHVybiBiLnpvbmUucG9wdWxhdGlvbiAtIGEuem9uZS5wb3B1bGF0aW9uO1xuXHRcdH1cblx0XHRyZXR1cm4gYi56b25lLm5hbWUubG9jYWxlQ29tcGFyZShhLnpvbmUubmFtZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRUb0d1ZXNzZXMgKG5hbWUsIG9mZnNldHMpIHtcblx0XHR2YXIgaSwgb2Zmc2V0O1xuXHRcdGFycmF5VG9JbnQob2Zmc2V0cyk7XG5cdFx0Zm9yIChpID0gMDsgaSA8IG9mZnNldHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdG9mZnNldCA9IG9mZnNldHNbaV07XG5cdFx0XHRndWVzc2VzW29mZnNldF0gPSBndWVzc2VzW29mZnNldF0gfHwge307XG5cdFx0XHRndWVzc2VzW29mZnNldF1bbmFtZV0gPSB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGd1ZXNzZXNGb3JVc2VyT2Zmc2V0cyAob2Zmc2V0cykge1xuXHRcdHZhciBvZmZzZXRzTGVuZ3RoID0gb2Zmc2V0cy5sZW5ndGgsXG5cdFx0XHRmaWx0ZXJlZEd1ZXNzZXMgPSB7fSxcblx0XHRcdG91dCA9IFtdLFxuXHRcdFx0aSwgaiwgZ3Vlc3Nlc09mZnNldDtcblxuXHRcdGZvciAoaSA9IDA7IGkgPCBvZmZzZXRzTGVuZ3RoOyBpKyspIHtcblx0XHRcdGd1ZXNzZXNPZmZzZXQgPSBndWVzc2VzW29mZnNldHNbaV0ub2Zmc2V0XSB8fCB7fTtcblx0XHRcdGZvciAoaiBpbiBndWVzc2VzT2Zmc2V0KSB7XG5cdFx0XHRcdGlmIChndWVzc2VzT2Zmc2V0Lmhhc093blByb3BlcnR5KGopKSB7XG5cdFx0XHRcdFx0ZmlsdGVyZWRHdWVzc2VzW2pdID0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZvciAoaSBpbiBmaWx0ZXJlZEd1ZXNzZXMpIHtcblx0XHRcdGlmIChmaWx0ZXJlZEd1ZXNzZXMuaGFzT3duUHJvcGVydHkoaSkpIHtcblx0XHRcdFx0b3V0LnB1c2gobmFtZXNbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBvdXQ7XG5cdH1cblxuXHRmdW5jdGlvbiByZWJ1aWxkR3Vlc3MgKCkge1xuXG5cdFx0Ly8gdXNlIEludGwgQVBJIHdoZW4gYXZhaWxhYmxlIGFuZCByZXR1cm5pbmcgdmFsaWQgdGltZSB6b25lXG5cdFx0dHJ5IHtcblx0XHRcdHZhciBpbnRsTmFtZSA9IEludGwuRGF0ZVRpbWVGb3JtYXQoKS5yZXNvbHZlZE9wdGlvbnMoKS50aW1lWm9uZTtcblx0XHRcdGlmIChpbnRsTmFtZSAmJiBpbnRsTmFtZS5sZW5ndGggPiAzKSB7XG5cdFx0XHRcdHZhciBuYW1lID0gbmFtZXNbbm9ybWFsaXplTmFtZShpbnRsTmFtZSldO1xuXHRcdFx0XHRpZiAobmFtZSkge1xuXHRcdFx0XHRcdHJldHVybiBuYW1lO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxvZ0Vycm9yKFwiTW9tZW50IFRpbWV6b25lIGZvdW5kIFwiICsgaW50bE5hbWUgKyBcIiBmcm9tIHRoZSBJbnRsIGFwaSwgYnV0IGRpZCBub3QgaGF2ZSB0aGF0IGRhdGEgbG9hZGVkLlwiKTtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHQvLyBJbnRsIHVuYXZhaWxhYmxlLCBmYWxsIGJhY2sgdG8gbWFudWFsIGd1ZXNzaW5nLlxuXHRcdH1cblxuXHRcdHZhciBvZmZzZXRzID0gdXNlck9mZnNldHMoKSxcblx0XHRcdG9mZnNldHNMZW5ndGggPSBvZmZzZXRzLmxlbmd0aCxcblx0XHRcdGd1ZXNzZXMgPSBndWVzc2VzRm9yVXNlck9mZnNldHMob2Zmc2V0cyksXG5cdFx0XHR6b25lU2NvcmVzID0gW10sXG5cdFx0XHR6b25lU2NvcmUsIGksIGo7XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgZ3Vlc3Nlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0em9uZVNjb3JlID0gbmV3IFpvbmVTY29yZShnZXRab25lKGd1ZXNzZXNbaV0pLCBvZmZzZXRzTGVuZ3RoKTtcblx0XHRcdGZvciAoaiA9IDA7IGogPCBvZmZzZXRzTGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0em9uZVNjb3JlLnNjb3JlT2Zmc2V0QXQob2Zmc2V0c1tqXSk7XG5cdFx0XHR9XG5cdFx0XHR6b25lU2NvcmVzLnB1c2goem9uZVNjb3JlKTtcblx0XHR9XG5cblx0XHR6b25lU2NvcmVzLnNvcnQoc29ydFpvbmVTY29yZXMpO1xuXG5cdFx0cmV0dXJuIHpvbmVTY29yZXMubGVuZ3RoID4gMCA/IHpvbmVTY29yZXNbMF0uem9uZS5uYW1lIDogdW5kZWZpbmVkO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ3Vlc3MgKGlnbm9yZUNhY2hlKSB7XG5cdFx0aWYgKCFjYWNoZWRHdWVzcyB8fCBpZ25vcmVDYWNoZSkge1xuXHRcdFx0Y2FjaGVkR3Vlc3MgPSByZWJ1aWxkR3Vlc3MoKTtcblx0XHR9XG5cdFx0cmV0dXJuIGNhY2hlZEd1ZXNzO1xuXHR9XG5cblx0LyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXHRcdEdsb2JhbCBNZXRob2RzXG5cdCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXHRmdW5jdGlvbiBub3JtYWxpemVOYW1lIChuYW1lKSB7XG5cdFx0cmV0dXJuIChuYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xcLy9nLCAnXycpO1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkWm9uZSAocGFja2VkKSB7XG5cdFx0dmFyIGksIG5hbWUsIHNwbGl0LCBub3JtYWxpemVkO1xuXG5cdFx0aWYgKHR5cGVvZiBwYWNrZWQgPT09IFwic3RyaW5nXCIpIHtcblx0XHRcdHBhY2tlZCA9IFtwYWNrZWRdO1xuXHRcdH1cblxuXHRcdGZvciAoaSA9IDA7IGkgPCBwYWNrZWQubGVuZ3RoOyBpKyspIHtcblx0XHRcdHNwbGl0ID0gcGFja2VkW2ldLnNwbGl0KCd8Jyk7XG5cdFx0XHRuYW1lID0gc3BsaXRbMF07XG5cdFx0XHRub3JtYWxpemVkID0gbm9ybWFsaXplTmFtZShuYW1lKTtcblx0XHRcdHpvbmVzW25vcm1hbGl6ZWRdID0gcGFja2VkW2ldO1xuXHRcdFx0bmFtZXNbbm9ybWFsaXplZF0gPSBuYW1lO1xuXHRcdFx0YWRkVG9HdWVzc2VzKG5vcm1hbGl6ZWQsIHNwbGl0WzJdLnNwbGl0KCcgJykpO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGdldFpvbmUgKG5hbWUsIGNhbGxlcikge1xuXG5cdFx0bmFtZSA9IG5vcm1hbGl6ZU5hbWUobmFtZSk7XG5cblx0XHR2YXIgem9uZSA9IHpvbmVzW25hbWVdO1xuXHRcdHZhciBsaW5rO1xuXG5cdFx0aWYgKHpvbmUgaW5zdGFuY2VvZiBab25lKSB7XG5cdFx0XHRyZXR1cm4gem9uZTtcblx0XHR9XG5cblx0XHRpZiAodHlwZW9mIHpvbmUgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHR6b25lID0gbmV3IFpvbmUoem9uZSk7XG5cdFx0XHR6b25lc1tuYW1lXSA9IHpvbmU7XG5cdFx0XHRyZXR1cm4gem9uZTtcblx0XHR9XG5cblx0XHQvLyBQYXNzIGdldFpvbmUgdG8gcHJldmVudCByZWN1cnNpb24gbW9yZSB0aGFuIDEgbGV2ZWwgZGVlcFxuXHRcdGlmIChsaW5rc1tuYW1lXSAmJiBjYWxsZXIgIT09IGdldFpvbmUgJiYgKGxpbmsgPSBnZXRab25lKGxpbmtzW25hbWVdLCBnZXRab25lKSkpIHtcblx0XHRcdHpvbmUgPSB6b25lc1tuYW1lXSA9IG5ldyBab25lKCk7XG5cdFx0XHR6b25lLl9zZXQobGluayk7XG5cdFx0XHR6b25lLm5hbWUgPSBuYW1lc1tuYW1lXTtcblx0XHRcdHJldHVybiB6b25lO1xuXHRcdH1cblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0TmFtZXMgKCkge1xuXHRcdHZhciBpLCBvdXQgPSBbXTtcblxuXHRcdGZvciAoaSBpbiBuYW1lcykge1xuXHRcdFx0aWYgKG5hbWVzLmhhc093blByb3BlcnR5KGkpICYmICh6b25lc1tpXSB8fCB6b25lc1tsaW5rc1tpXV0pICYmIG5hbWVzW2ldKSB7XG5cdFx0XHRcdG91dC5wdXNoKG5hbWVzW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0LnNvcnQoKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldENvdW50cnlOYW1lcyAoKSB7XG5cdFx0cmV0dXJuIE9iamVjdC5rZXlzKGNvdW50cmllcyk7XG5cdH1cblxuXHRmdW5jdGlvbiBhZGRMaW5rIChhbGlhc2VzKSB7XG5cdFx0dmFyIGksIGFsaWFzLCBub3JtYWwwLCBub3JtYWwxO1xuXG5cdFx0aWYgKHR5cGVvZiBhbGlhc2VzID09PSBcInN0cmluZ1wiKSB7XG5cdFx0XHRhbGlhc2VzID0gW2FsaWFzZXNdO1xuXHRcdH1cblxuXHRcdGZvciAoaSA9IDA7IGkgPCBhbGlhc2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRhbGlhcyA9IGFsaWFzZXNbaV0uc3BsaXQoJ3wnKTtcblxuXHRcdFx0bm9ybWFsMCA9IG5vcm1hbGl6ZU5hbWUoYWxpYXNbMF0pO1xuXHRcdFx0bm9ybWFsMSA9IG5vcm1hbGl6ZU5hbWUoYWxpYXNbMV0pO1xuXG5cdFx0XHRsaW5rc1tub3JtYWwwXSA9IG5vcm1hbDE7XG5cdFx0XHRuYW1lc1tub3JtYWwwXSA9IGFsaWFzWzBdO1xuXG5cdFx0XHRsaW5rc1tub3JtYWwxXSA9IG5vcm1hbDA7XG5cdFx0XHRuYW1lc1tub3JtYWwxXSA9IGFsaWFzWzFdO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGFkZENvdW50cmllcyAoZGF0YSkge1xuXHRcdHZhciBpLCBjb3VudHJ5X2NvZGUsIGNvdW50cnlfem9uZXMsIHNwbGl0O1xuXHRcdGlmICghZGF0YSB8fCAhZGF0YS5sZW5ndGgpIHJldHVybjtcblx0XHRmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuXHRcdFx0c3BsaXQgPSBkYXRhW2ldLnNwbGl0KCd8Jyk7XG5cdFx0XHRjb3VudHJ5X2NvZGUgPSBzcGxpdFswXS50b1VwcGVyQ2FzZSgpO1xuXHRcdFx0Y291bnRyeV96b25lcyA9IHNwbGl0WzFdLnNwbGl0KCcgJyk7XG5cdFx0XHRjb3VudHJpZXNbY291bnRyeV9jb2RlXSA9IG5ldyBDb3VudHJ5KFxuXHRcdFx0XHRjb3VudHJ5X2NvZGUsXG5cdFx0XHRcdGNvdW50cnlfem9uZXNcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Q291bnRyeSAobmFtZSkge1xuXHRcdG5hbWUgPSBuYW1lLnRvVXBwZXJDYXNlKCk7XG5cdFx0cmV0dXJuIGNvdW50cmllc1tuYW1lXSB8fCBudWxsO1xuXHR9XG5cblx0ZnVuY3Rpb24gem9uZXNGb3JDb3VudHJ5KGNvdW50cnksIHdpdGhfb2Zmc2V0KSB7XG5cdFx0Y291bnRyeSA9IGdldENvdW50cnkoY291bnRyeSk7XG5cblx0XHRpZiAoIWNvdW50cnkpIHJldHVybiBudWxsO1xuXG5cdFx0dmFyIHpvbmVzID0gY291bnRyeS56b25lcy5zb3J0KCk7XG5cblx0XHRpZiAod2l0aF9vZmZzZXQpIHtcblx0XHRcdHJldHVybiB6b25lcy5tYXAoZnVuY3Rpb24gKHpvbmVfbmFtZSkge1xuXHRcdFx0XHR2YXIgem9uZSA9IGdldFpvbmUoem9uZV9uYW1lKTtcblx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRuYW1lOiB6b25lX25hbWUsXG5cdFx0XHRcdFx0b2Zmc2V0OiB6b25lLnV0Y09mZnNldChuZXcgRGF0ZSgpKVxuXHRcdFx0XHR9O1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHpvbmVzO1xuXHR9XG5cblx0ZnVuY3Rpb24gbG9hZERhdGEgKGRhdGEpIHtcblx0XHRhZGRab25lKGRhdGEuem9uZXMpO1xuXHRcdGFkZExpbmsoZGF0YS5saW5rcyk7XG5cdFx0YWRkQ291bnRyaWVzKGRhdGEuY291bnRyaWVzKTtcblx0XHR0ei5kYXRhVmVyc2lvbiA9IGRhdGEudmVyc2lvbjtcblx0fVxuXG5cdGZ1bmN0aW9uIHpvbmVFeGlzdHMgKG5hbWUpIHtcblx0XHRpZiAoIXpvbmVFeGlzdHMuZGlkU2hvd0Vycm9yKSB7XG5cdFx0XHR6b25lRXhpc3RzLmRpZFNob3dFcnJvciA9IHRydWU7XG5cdFx0XHRcdGxvZ0Vycm9yKFwibW9tZW50LnR6LnpvbmVFeGlzdHMoJ1wiICsgbmFtZSArIFwiJykgaGFzIGJlZW4gZGVwcmVjYXRlZCBpbiBmYXZvciBvZiAhbW9tZW50LnR6LnpvbmUoJ1wiICsgbmFtZSArIFwiJylcIik7XG5cdFx0fVxuXHRcdHJldHVybiAhIWdldFpvbmUobmFtZSk7XG5cdH1cblxuXHRmdW5jdGlvbiBuZWVkc09mZnNldCAobSkge1xuXHRcdHZhciBpc1VuaXhUaW1lc3RhbXAgPSAobS5fZiA9PT0gJ1gnIHx8IG0uX2YgPT09ICd4Jyk7XG5cdFx0cmV0dXJuICEhKG0uX2EgJiYgKG0uX3R6bSA9PT0gdW5kZWZpbmVkKSAmJiAhaXNVbml4VGltZXN0YW1wKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGxvZ0Vycm9yIChtZXNzYWdlKSB7XG5cdFx0aWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgY29uc29sZS5lcnJvciA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0Y29uc29sZS5lcnJvcihtZXNzYWdlKTtcblx0XHR9XG5cdH1cblxuXHQvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5cdFx0bW9tZW50LnR6IG5hbWVzcGFjZVxuXHQqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblx0ZnVuY3Rpb24gdHogKGlucHV0KSB7XG5cdFx0dmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDAsIC0xKSxcblx0XHRcdG5hbWUgPSBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdLFxuXHRcdFx0em9uZSA9IGdldFpvbmUobmFtZSksXG5cdFx0XHRvdXQgID0gbW9tZW50LnV0Yy5hcHBseShudWxsLCBhcmdzKTtcblxuXHRcdGlmICh6b25lICYmICFtb21lbnQuaXNNb21lbnQoaW5wdXQpICYmIG5lZWRzT2Zmc2V0KG91dCkpIHtcblx0XHRcdG91dC5hZGQoem9uZS5wYXJzZShvdXQpLCAnbWludXRlcycpO1xuXHRcdH1cblxuXHRcdG91dC50eihuYW1lKTtcblxuXHRcdHJldHVybiBvdXQ7XG5cdH1cblxuXHR0ei52ZXJzaW9uICAgICAgPSBWRVJTSU9OO1xuXHR0ei5kYXRhVmVyc2lvbiAgPSAnJztcblx0dHouX3pvbmVzICAgICAgID0gem9uZXM7XG5cdHR6Ll9saW5rcyAgICAgICA9IGxpbmtzO1xuXHR0ei5fbmFtZXMgICAgICAgPSBuYW1lcztcblx0dHouX2NvdW50cmllc1x0PSBjb3VudHJpZXM7XG5cdHR6LmFkZCAgICAgICAgICA9IGFkZFpvbmU7XG5cdHR6LmxpbmsgICAgICAgICA9IGFkZExpbms7XG5cdHR6LmxvYWQgICAgICAgICA9IGxvYWREYXRhO1xuXHR0ei56b25lICAgICAgICAgPSBnZXRab25lO1xuXHR0ei56b25lRXhpc3RzICAgPSB6b25lRXhpc3RzOyAvLyBkZXByZWNhdGVkIGluIDAuMS4wXG5cdHR6Lmd1ZXNzICAgICAgICA9IGd1ZXNzO1xuXHR0ei5uYW1lcyAgICAgICAgPSBnZXROYW1lcztcblx0dHouWm9uZSAgICAgICAgID0gWm9uZTtcblx0dHoudW5wYWNrICAgICAgID0gdW5wYWNrO1xuXHR0ei51bnBhY2tCYXNlNjAgPSB1bnBhY2tCYXNlNjA7XG5cdHR6Lm5lZWRzT2Zmc2V0ICA9IG5lZWRzT2Zmc2V0O1xuXHR0ei5tb3ZlSW52YWxpZEZvcndhcmQgICA9IHRydWU7XG5cdHR6Lm1vdmVBbWJpZ3VvdXNGb3J3YXJkID0gZmFsc2U7XG5cdHR6LmNvdW50cmllcyAgICA9IGdldENvdW50cnlOYW1lcztcblx0dHouem9uZXNGb3JDb3VudHJ5ID0gem9uZXNGb3JDb3VudHJ5O1xuXG5cdC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcblx0XHRJbnRlcmZhY2Ugd2l0aCBNb21lbnQuanNcblx0KioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cdHZhciBmbiA9IG1vbWVudC5mbjtcblxuXHRtb21lbnQudHogPSB0ejtcblxuXHRtb21lbnQuZGVmYXVsdFpvbmUgPSBudWxsO1xuXG5cdG1vbWVudC51cGRhdGVPZmZzZXQgPSBmdW5jdGlvbiAobW9tLCBrZWVwVGltZSkge1xuXHRcdHZhciB6b25lID0gbW9tZW50LmRlZmF1bHRab25lLFxuXHRcdFx0b2Zmc2V0O1xuXG5cdFx0aWYgKG1vbS5feiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRpZiAoem9uZSAmJiBuZWVkc09mZnNldChtb20pICYmICFtb20uX2lzVVRDKSB7XG5cdFx0XHRcdG1vbS5fZCA9IG1vbWVudC51dGMobW9tLl9hKS5fZDtcblx0XHRcdFx0bW9tLnV0YygpLmFkZCh6b25lLnBhcnNlKG1vbSksICdtaW51dGVzJyk7XG5cdFx0XHR9XG5cdFx0XHRtb20uX3ogPSB6b25lO1xuXHRcdH1cblx0XHRpZiAobW9tLl96KSB7XG5cdFx0XHRvZmZzZXQgPSBtb20uX3oudXRjT2Zmc2V0KG1vbSk7XG5cdFx0XHRpZiAoTWF0aC5hYnMob2Zmc2V0KSA8IDE2KSB7XG5cdFx0XHRcdG9mZnNldCA9IG9mZnNldCAvIDYwO1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1vbS51dGNPZmZzZXQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHR2YXIgeiA9IG1vbS5fejtcblx0XHRcdFx0bW9tLnV0Y09mZnNldCgtb2Zmc2V0LCBrZWVwVGltZSk7XG5cdFx0XHRcdG1vbS5feiA9IHo7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtb20uem9uZShvZmZzZXQsIGtlZXBUaW1lKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Zm4udHogPSBmdW5jdGlvbiAobmFtZSwga2VlcFRpbWUpIHtcblx0XHRpZiAobmFtZSkge1xuXHRcdFx0aWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJykge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RpbWUgem9uZSBuYW1lIG11c3QgYmUgYSBzdHJpbmcsIGdvdCAnICsgbmFtZSArICcgWycgKyB0eXBlb2YgbmFtZSArICddJyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl96ID0gZ2V0Wm9uZShuYW1lKTtcblx0XHRcdGlmICh0aGlzLl96KSB7XG5cdFx0XHRcdG1vbWVudC51cGRhdGVPZmZzZXQodGhpcywga2VlcFRpbWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bG9nRXJyb3IoXCJNb21lbnQgVGltZXpvbmUgaGFzIG5vIGRhdGEgZm9yIFwiICsgbmFtZSArIFwiLiBTZWUgaHR0cDovL21vbWVudGpzLmNvbS90aW1lem9uZS9kb2NzLyMvZGF0YS1sb2FkaW5nLy5cIik7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0aWYgKHRoaXMuX3opIHsgcmV0dXJuIHRoaXMuX3oubmFtZTsgfVxuXHR9O1xuXG5cdGZ1bmN0aW9uIGFiYnJXcmFwIChvbGQpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHRoaXMuX3opIHsgcmV0dXJuIHRoaXMuX3ouYWJicih0aGlzKTsgfVxuXHRcdFx0cmV0dXJuIG9sZC5jYWxsKHRoaXMpO1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiByZXNldFpvbmVXcmFwIChvbGQpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy5feiA9IG51bGw7XG5cdFx0XHRyZXR1cm4gb2xkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlc2V0Wm9uZVdyYXAyIChvbGQpIHtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB0aGlzLl96ID0gbnVsbDtcblx0XHRcdHJldHVybiBvbGQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHR9O1xuXHR9XG5cblx0Zm4uem9uZU5hbWUgID0gYWJicldyYXAoZm4uem9uZU5hbWUpO1xuXHRmbi56b25lQWJiciAgPSBhYmJyV3JhcChmbi56b25lQWJicik7XG5cdGZuLnV0YyAgICAgICA9IHJlc2V0Wm9uZVdyYXAoZm4udXRjKTtcblx0Zm4ubG9jYWwgICAgID0gcmVzZXRab25lV3JhcChmbi5sb2NhbCk7XG5cdGZuLnV0Y09mZnNldCA9IHJlc2V0Wm9uZVdyYXAyKGZuLnV0Y09mZnNldCk7XG5cblx0bW9tZW50LnR6LnNldERlZmF1bHQgPSBmdW5jdGlvbihuYW1lKSB7XG5cdFx0aWYgKG1ham9yIDwgMiB8fCAobWFqb3IgPT09IDIgJiYgbWlub3IgPCA5KSkge1xuXHRcdFx0bG9nRXJyb3IoJ01vbWVudCBUaW1lem9uZSBzZXREZWZhdWx0KCkgcmVxdWlyZXMgTW9tZW50LmpzID49IDIuOS4wLiBZb3UgYXJlIHVzaW5nIE1vbWVudC5qcyAnICsgbW9tZW50LnZlcnNpb24gKyAnLicpO1xuXHRcdH1cblx0XHRtb21lbnQuZGVmYXVsdFpvbmUgPSBuYW1lID8gZ2V0Wm9uZShuYW1lKSA6IG51bGw7XG5cdFx0cmV0dXJuIG1vbWVudDtcblx0fTtcblxuXHQvLyBDbG9uaW5nIGEgbW9tZW50IHNob3VsZCBpbmNsdWRlIHRoZSBfeiBwcm9wZXJ0eS5cblx0dmFyIG1vbWVudFByb3BlcnRpZXMgPSBtb21lbnQubW9tZW50UHJvcGVydGllcztcblx0aWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChtb21lbnRQcm9wZXJ0aWVzKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuXHRcdC8vIG1vbWVudCAyLjguMStcblx0XHRtb21lbnRQcm9wZXJ0aWVzLnB1c2goJ196Jyk7XG5cdFx0bW9tZW50UHJvcGVydGllcy5wdXNoKCdfYScpO1xuXHR9IGVsc2UgaWYgKG1vbWVudFByb3BlcnRpZXMpIHtcblx0XHQvLyBtb21lbnQgMi43LjBcblx0XHRtb21lbnRQcm9wZXJ0aWVzLl96ID0gbnVsbDtcblx0fVxuXG5cdC8vIElOSkVDVCBEQVRBXG5cblx0cmV0dXJuIG1vbWVudDtcbn0pKTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIFNldDogcmVxdWlyZSgnLi9zZXQnKSxcclxuICBTdGF0aWM6IHJlcXVpcmUoJy4vc3RhdGljJylcclxufTsiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xyXG52YXIgZm91bmRhdGlvbkFwaSA9IHJlcXVpcmUoJy4uL3V0aWxzL2ZvdW5kYXRpb24tYXBpJyk7XHJcbnZhciBOb3RpZmljYXRpb24gPSByZXF1aXJlKCcuL25vdGlmaWNhdGlvbicpO1xyXG52YXIgQW5pbWF0aW9uID0gcmVxdWlyZSgnLi4vdXRpbHMvYW5pbWF0aW9uJyk7XHJcbnZhciBjcmVhdGVSZWFjdENsYXNzID0gcmVxdWlyZShcImNyZWF0ZS1yZWFjdC1jbGFzc1wiKTtcclxuXHJcbnZhciBOb3RpZmljYXRpb25TZXQgPSBjcmVhdGVSZWFjdENsYXNzKHtcclxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7bm90aWZpY2F0aW9uczogW119O1xyXG4gIH0sXHJcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIGZvdW5kYXRpb25BcGkuc3Vic2NyaWJlKHRoaXMucHJvcHMuaWQsIGZ1bmN0aW9uKG5hbWUsIG1zZykge1xyXG4gICAgICBpZihtc2cgPT09ICdjbGVhcmFsbCcpIHtcclxuICAgICAgICB0aGlzLmNsZWFyQWxsKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5hZGROb3RpZmljYXRpb24obXNnKTtcclxuICAgICAgfVxyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9LFxyXG4gIGFkZE5vdGlmaWNhdGlvbjogZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xyXG4gICAgbm90aWZpY2F0aW9uLmlkID0gZm91bmRhdGlvbkFwaS5nZW5lcmF0ZVV1aWQoKTtcclxuICAgIHZhciBub3RpZmljYXRpb25zID0gdGhpcy5zdGF0ZS5ub3RpZmljYXRpb25zLmNvbmNhdChub3RpZmljYXRpb24pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG5vdGlmaWNhdGlvbnM6IG5vdGlmaWNhdGlvbnNcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgcmVtb3ZlTm90aWZjYXRpb246IGZ1bmN0aW9uIChpZCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgIHZhciBub3RpZmljYXRpb25zID0gW11cclxuICAgICAgdGhpcy5zdGF0ZS5ub3RpZmljYXRpb25zLmZvckVhY2goZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xyXG4gICAgICAgIGlmIChub3RpZmljYXRpb24uaWQgIT09IGlkKSB7XHJcbiAgICAgICAgICBub3RpZmljYXRpb25zLnB1c2gobm90aWZpY2F0aW9uKVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIG5vdGlmaWNhdGlvbnM6IG5vdGlmaWNhdGlvbnNcclxuICAgICAgfSk7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0uYmluZCh0aGlzKTtcclxuICB9LFxyXG4gIGNsZWFyQWxsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtub3RpZmljYXRpb25zOiBbXX0pO1xyXG4gIH0sXHJcbiAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgbm90aWZpY2F0aW9ucyA9IHRoaXMuc3RhdGUubm90aWZpY2F0aW9ucy5tYXAoZnVuY3Rpb24gKG5vdGlmaWNhdGlvbikge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIDxOb3RpZmljYXRpb24ga2V5PXtub3RpZmljYXRpb24uaWR9IHsuLi5ub3RpZmljYXRpb259IGNsb3NlSGFuZGxlcj17dGhpcy5yZW1vdmVOb3RpZmNhdGlvbihub3RpZmljYXRpb24uaWQpfSBjbGFzc05hbWU9J2lzLWFjdGl2ZSc+XHJcbiAgICAgICAgICB7bm90aWZpY2F0aW9uLmNvbnRlbnR9XHJcbiAgICAgICAgPC9Ob3RpZmljYXRpb24+XHJcbiAgICAgICk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2Pntub3RpZmljYXRpb25zfTwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufSk7XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IE5vdGlmaWNhdGlvblNldDtcclxuIiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIGNyZWF0ZVJlYWN0Q2xhc3MgPSByZXF1aXJlKFwiY3JlYXRlLXJlYWN0LWNsYXNzXCIpO1xyXG5cclxudmFyIE5vdGlmaWNhdGlvbiA9IGNyZWF0ZVJlYWN0Q2xhc3Moe1xyXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcG9zaXRpb246ICd0b3AtcmlnaHQnLFxyXG4gICAgICBjb2xvcjogJ3N1Y2Nlc3MnLFxyXG4gICAgICB0aXRsZTogbnVsbCxcclxuICAgICAgaW1hZ2U6IG51bGwsXHJcbiAgICAgIGNvbnRlbnQ6IG51bGwsXHJcbiAgICAgIHdyYXBwZXJFbGVtZW50OiBcInBcIlxyXG4gICAgfTtcclxuICB9LFxyXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGNsYXNzZXMgPSAnbm90aWZpY2F0aW9uICcgKyB0aGlzLnByb3BzLnBvc2l0aW9uICsgJyAnICsgdGhpcy5wcm9wcy5jb2xvcjtcclxuICAgIGNsYXNzZXMgKz0gICcgJyArICh0aGlzLnByb3BzLmNsYXNzTmFtZSB8fCAnJyk7XHJcbiAgICB2YXIgaW1hZ2VOb2RlID0gbnVsbDtcclxuICAgIGlmICh0aGlzLnByb3BzLmltYWdlKSB7XHJcbiAgICAgIGltYWdlTm9kZSA9IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdGlmaWNhdGlvbi1pY29uXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cInt7IGltYWdlIH19XCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9e3RoaXMucHJvcHMuaWR9IGRhdGEtY2xvc2FibGU9e3RydWV9IGNsYXNzTmFtZT17Y2xhc3Nlc30+XHJcbiAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJjbG9zZS1idXR0b25cIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlSGFuZGxlcn0+JnRpbWVzOzwvYT5cclxuICAgICAgICB7aW1hZ2VOb2RlfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm90aWZpY2F0aW9uLWNvbnRlbnRcIj5cclxuICAgICAgICAgIDxoMT57dGhpcy5wcm9wcy50aXRsZX08L2gxPlxyXG4gICAgICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQodGhpcy5wcm9wcy53cmFwcGVyRWxlbWVudCwgbnVsbCwgdGhpcy5wcm9wcy5jaGlsZHJlbil9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBOb3RpZmljYXRpb247XHJcbiIsIi8vIHNvbWUgcGFydHMgb2YgY29kZSBmcm9tIHJlYWN0L2xpYi9SZWFjdENTU1RyYW5zaXRpb25Hcm91cENoaWxkLmpzXHJcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbnZhciBSZWFjdERPTSA9IHJlcXVpcmUoJ3JlYWN0LWRvbScpO1xyXG52YXIgUmVhY3RUcmFuc2l0aW9uRXZlbnRzID0gcmVxdWlyZSgnLi9SZWFjdFRyYW5zaXRpb25FdmVudHMnKTtcclxudmFyIENTU0NvcmUgPSByZXF1aXJlKCcuL2Nzc2NvcmUnKTtcclxudmFyIGNyZWF0ZVJlYWN0Q2xhc3MgPSByZXF1aXJlKFwiY3JlYXRlLXJlYWN0LWNsYXNzXCIpO1xyXG5cclxudmFyIGNsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XHJcbnZhciBUSUNLID0gMTc7XHJcblxyXG52YXIgQW5pbWF0aW9uID0gY3JlYXRlUmVhY3RDbGFzcyh7XHJcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgfTtcclxuICB9LFxyXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYWN0aXZlOiBmYWxzZSxcclxuICAgICAgYW5pbWF0aW9uSW46ICcnLFxyXG4gICAgICBhbmltYXRpb25PdXQ6ICcnXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgcmVmbG93OiBmdW5jdGlvbiAobm9kZSkge1xyXG4gICAgcmV0dXJuIG5vZGUub2Zmc2V0V2lkdGg7XHJcbiAgfSxcclxuICByZXNldDogZnVuY3Rpb24gKG5vZGUpIHtcclxuICAgIG5vZGUuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gMDtcclxuICAgIENTU0NvcmUucmVtb3ZlQ2xhc3Mobm9kZSwgJ25nLWVudGVyJyk7XHJcbiAgICBDU1NDb3JlLnJlbW92ZUNsYXNzKG5vZGUsICduZy1sZWF2ZScpO1xyXG4gICAgQ1NTQ29yZS5yZW1vdmVDbGFzcyhub2RlLCAnbmctZW50ZXItYWN0aXZlJyk7XHJcbiAgICBDU1NDb3JlLnJlbW92ZUNsYXNzKG5vZGUsICduZy1sZWF2ZS1hY3RpdmUnKTtcclxuICAgIENTU0NvcmUucmVtb3ZlQ2xhc3Mobm9kZSwgdGhpcy5wcm9wcy5hbmltYXRpb25Jbik7XHJcbiAgICBDU1NDb3JlLnJlbW92ZUNsYXNzKG5vZGUsIHRoaXMucHJvcHMuYW5pbWF0aW9uT3V0KTtcclxuICB9LFxyXG4gIGZpbmlzaEFuaW1hdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIG5vZGUgPSBSZWFjdERPTS5maW5kRE9NTm9kZSh0aGlzKTtcclxuICAgIHRoaXMucmVzZXQobm9kZSk7XHJcbiAgICBDU1NDb3JlLnJlbW92ZUNsYXNzKG5vZGUsIHRoaXMucHJvcHMuYWN0aXZlPyAnJyA6ICdpcy1hY3RpdmUnKTtcclxuICAgIHRoaXMucmVmbG93KG5vZGUpO1xyXG4gICAgUmVhY3RUcmFuc2l0aW9uRXZlbnRzLnJlbW92ZUVuZEV2ZW50TGlzdGVuZXIobm9kZSwgdGhpcy5maW5pc2hBbmltYXRpb24pO1xyXG4gIH0sXHJcbiAgYW5pbWF0ZTogZnVuY3Rpb24oYW5pbWF0aW9uQ2xhc3MsIGFuaW1hdGlvblR5cGUpIHtcclxuICAgIHZhciBub2RlID0gUmVhY3RET00uZmluZERPTU5vZGUodGhpcyk7XHJcbiAgICB2YXIgaW5pdENsYXNzID0gJ25nLScgKyBhbmltYXRpb25UeXBlO1xyXG4gICAgdmFyIGFjdGl2ZUNsYXNzID0gaW5pdENsYXNzICsgJy1hY3RpdmUnO1xyXG5cclxuXHJcbiAgICB0aGlzLnJlc2V0KG5vZGUpO1xyXG4gICAgQ1NTQ29yZS5hZGRDbGFzcyhub2RlLCBhbmltYXRpb25DbGFzcyk7XHJcbiAgICBDU1NDb3JlLmFkZENsYXNzKG5vZGUsIGluaXRDbGFzcyk7XHJcbiAgICBDU1NDb3JlLmFkZENsYXNzKG5vZGUsICdpcy1hY3RpdmUnKTtcclxuXHJcbiAgICAvL2ZvcmNlIGEgXCJ0aWNrXCJcclxuICAgIHRoaXMucmVmbG93KG5vZGUpO1xyXG5cclxuICAgIC8vYWN0aXZhdGVcclxuICAgIG5vZGUuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJyc7XHJcbiAgICBDU1NDb3JlLmFkZENsYXNzKG5vZGUsIGFjdGl2ZUNsYXNzKTtcclxuXHJcbiAgICBSZWFjdFRyYW5zaXRpb25FdmVudHMuYWRkRW5kRXZlbnRMaXN0ZW5lcihub2RlLCB0aGlzLmZpbmlzaEFuaW1hdGlvbik7XHJcbiAgfSxcclxuICBjb21wb25lbnREaWRVcGRhdGU6IGZ1bmN0aW9uIChwcmV2UHJvcHMpIHtcclxuICAgIGlmIChwcmV2UHJvcHMuYWN0aXZlICE9PSB0aGlzLnByb3BzLmFjdGl2ZSkge1xyXG4gICAgICB2YXIgYW5pbWF0aW9uQ2xhc3MgPSB0aGlzLnByb3BzLmFjdGl2ZSA/IHRoaXMucHJvcHMuYW5pbWF0aW9uSW46IHRoaXMucHJvcHMuYW5pbWF0aW9uT3V0O1xyXG4gICAgICB2YXIgYW5pbWF0aW9uVHlwZSA9IHRoaXMucHJvcHMuYWN0aXZlID8gJ2VudGVyJzogJ2xlYXZlJztcclxuICAgICAgdGhpcy5hbmltYXRlKGFuaW1hdGlvbkNsYXNzLCBhbmltYXRpb25UeXBlKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGNoaWxkID0gUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKTtcclxuICAgIHZhciBleHRyYVByb3BzID0ge307XHJcbiAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBleHRyYVByb3BzKTtcclxuICB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBBbmltYXRpb247XHJcbiIsIi8qKlxyXG4qIENvcHlyaWdodCAyMDEzLTIwMTUsIEZhY2Vib29rLCBJbmMuXHJcbiogQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuKlxyXG4qIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxyXG4qIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxyXG4qIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxyXG4qXHJcbiogQHByb3ZpZGVzTW9kdWxlIFJlYWN0VHJhbnNpdGlvbkV2ZW50c1xyXG4qL1xyXG5cclxuJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0gcmVxdWlyZSgnZXhlbnYnKTtcclxuXHJcbi8qKlxyXG4qIEVWRU5UX05BTUVfTUFQIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoaWNoIGV2ZW50IGZpcmVkIHdoZW4gYVxyXG4qIHRyYW5zaXRpb24vYW5pbWF0aW9uIGVuZHMsIGJhc2VkIG9uIHRoZSBzdHlsZSBwcm9wZXJ0eSB1c2VkIHRvXHJcbiogZGVmaW5lIHRoYXQgZXZlbnQuXHJcbiovXHJcbnZhciBFVkVOVF9OQU1FX01BUCA9IHtcclxuIHRyYW5zaXRpb25lbmQ6IHtcclxuICAgJ3RyYW5zaXRpb24nOiAndHJhbnNpdGlvbmVuZCcsXHJcbiAgICdXZWJraXRUcmFuc2l0aW9uJzogJ3dlYmtpdFRyYW5zaXRpb25FbmQnLFxyXG4gICAnTW96VHJhbnNpdGlvbic6ICdtb3pUcmFuc2l0aW9uRW5kJyxcclxuICAgJ09UcmFuc2l0aW9uJzogJ29UcmFuc2l0aW9uRW5kJyxcclxuICAgJ21zVHJhbnNpdGlvbic6ICdNU1RyYW5zaXRpb25FbmQnXHJcbiB9LFxyXG5cclxuIGFuaW1hdGlvbmVuZDoge1xyXG4gICAnYW5pbWF0aW9uJzogJ2FuaW1hdGlvbmVuZCcsXHJcbiAgICdXZWJraXRBbmltYXRpb24nOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcclxuICAgJ01vekFuaW1hdGlvbic6ICdtb3pBbmltYXRpb25FbmQnLFxyXG4gICAnT0FuaW1hdGlvbic6ICdvQW5pbWF0aW9uRW5kJyxcclxuICAgJ21zQW5pbWF0aW9uJzogJ01TQW5pbWF0aW9uRW5kJ1xyXG4gfVxyXG59O1xyXG5cclxudmFyIGVuZEV2ZW50cyA9IFtdO1xyXG5cclxuZnVuY3Rpb24gZGV0ZWN0RXZlbnRzKCkge1xyXG4gdmFyIHRlc3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gdmFyIHN0eWxlID0gdGVzdEVsLnN0eWxlO1xyXG5cclxuIC8vIE9uIHNvbWUgcGxhdGZvcm1zLCBpbiBwYXJ0aWN1bGFyIHNvbWUgcmVsZWFzZXMgb2YgQW5kcm9pZCA0LngsXHJcbiAvLyB0aGUgdW4tcHJlZml4ZWQgXCJhbmltYXRpb25cIiBhbmQgXCJ0cmFuc2l0aW9uXCIgcHJvcGVydGllcyBhcmUgZGVmaW5lZCBvbiB0aGVcclxuIC8vIHN0eWxlIG9iamVjdCBidXQgdGhlIGV2ZW50cyB0aGF0IGZpcmUgd2lsbCBzdGlsbCBiZSBwcmVmaXhlZCwgc28gd2UgbmVlZFxyXG4gLy8gdG8gY2hlY2sgaWYgdGhlIHVuLXByZWZpeGVkIGV2ZW50cyBhcmUgdXNlYWJsZSwgYW5kIGlmIG5vdCByZW1vdmUgdGhlbVxyXG4gLy8gZnJvbSB0aGUgbWFwXHJcbiBpZiAoISgnQW5pbWF0aW9uRXZlbnQnIGluIHdpbmRvdykpIHtcclxuICAgZGVsZXRlIEVWRU5UX05BTUVfTUFQLmFuaW1hdGlvbmVuZC5hbmltYXRpb247XHJcbiB9XHJcblxyXG4gaWYgKCEoJ1RyYW5zaXRpb25FdmVudCcgaW4gd2luZG93KSkge1xyXG4gICBkZWxldGUgRVZFTlRfTkFNRV9NQVAudHJhbnNpdGlvbmVuZC50cmFuc2l0aW9uO1xyXG4gfVxyXG5cclxuIGZvciAodmFyIGJhc2VFdmVudE5hbWUgaW4gRVZFTlRfTkFNRV9NQVApIHtcclxuICAgdmFyIGJhc2VFdmVudHMgPSBFVkVOVF9OQU1FX01BUFtiYXNlRXZlbnROYW1lXTtcclxuICAgZm9yICh2YXIgc3R5bGVOYW1lIGluIGJhc2VFdmVudHMpIHtcclxuICAgICBpZiAoc3R5bGVOYW1lIGluIHN0eWxlKSB7XHJcbiAgICAgICBlbmRFdmVudHMucHVzaChiYXNlRXZlbnRzW3N0eWxlTmFtZV0pO1xyXG4gICAgICAgYnJlYWs7XHJcbiAgICAgfVxyXG4gICB9XHJcbiB9XHJcbn1cclxuXHJcbmlmIChFeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00pIHtcclxuIGRldGVjdEV2ZW50cygpO1xyXG59XHJcblxyXG4vLyBXZSB1c2UgdGhlIHJhdyB7YWRkfHJlbW92ZX1FdmVudExpc3RlbmVyKCkgY2FsbCBiZWNhdXNlIEV2ZW50TGlzdGVuZXJcclxuLy8gZG9lcyBub3Qga25vdyBob3cgdG8gcmVtb3ZlIGV2ZW50IGxpc3RlbmVycyBhbmQgd2UgcmVhbGx5IHNob3VsZFxyXG4vLyBjbGVhbiB1cC4gQWxzbywgdGhlc2UgZXZlbnRzIGFyZSBub3QgdHJpZ2dlcmVkIGluIG9sZGVyIGJyb3dzZXJzXHJcbi8vIHNvIHdlIHNob3VsZCBiZSBBLU9LIGhlcmUuXHJcblxyXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcikge1xyXG4gbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcikge1xyXG4gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lciwgZmFsc2UpO1xyXG59XHJcblxyXG52YXIgUmVhY3RUcmFuc2l0aW9uRXZlbnRzID0ge1xyXG4gYWRkRW5kRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24obm9kZSwgZXZlbnRMaXN0ZW5lcikge1xyXG4gICBpZiAoZW5kRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgIC8vIElmIENTUyB0cmFuc2l0aW9ucyBhcmUgbm90IHN1cHBvcnRlZCwgdHJpZ2dlciBhbiBcImVuZCBhbmltYXRpb25cIlxyXG4gICAgIC8vIGV2ZW50IGltbWVkaWF0ZWx5LlxyXG4gICAgIHdpbmRvdy5zZXRUaW1lb3V0KGV2ZW50TGlzdGVuZXIsIDApO1xyXG4gICAgIHJldHVybjtcclxuICAgfVxyXG4gICBlbmRFdmVudHMuZm9yRWFjaChmdW5jdGlvbihlbmRFdmVudCkge1xyXG4gICAgIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZW5kRXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xyXG4gICB9KTtcclxuIH0sXHJcblxyXG4gcmVtb3ZlRW5kRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24obm9kZSwgZXZlbnRMaXN0ZW5lcikge1xyXG4gICBpZiAoZW5kRXZlbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgIHJldHVybjtcclxuICAgfVxyXG4gICBlbmRFdmVudHMuZm9yRWFjaChmdW5jdGlvbihlbmRFdmVudCkge1xyXG4gICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZW5kRXZlbnQsIGV2ZW50TGlzdGVuZXIpO1xyXG4gICB9KTtcclxuIH1cclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUmVhY3RUcmFuc2l0aW9uRXZlbnRzO1xyXG4iLCIvKiFcbiAgQ29weXJpZ2h0IChjKSAyMDE1IEplZCBXYXRzb24uXG4gIEJhc2VkIG9uIGNvZGUgdGhhdCBpcyBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBjYW5Vc2VET00gPSAhIShcblx0XHR0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuXHRcdHdpbmRvdy5kb2N1bWVudCAmJlxuXHRcdHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50XG5cdCk7XG5cblx0dmFyIEV4ZWN1dGlvbkVudmlyb25tZW50ID0ge1xuXG5cdFx0Y2FuVXNlRE9NOiBjYW5Vc2VET00sXG5cblx0XHRjYW5Vc2VXb3JrZXJzOiB0eXBlb2YgV29ya2VyICE9PSAndW5kZWZpbmVkJyxcblxuXHRcdGNhblVzZUV2ZW50TGlzdGVuZXJzOlxuXHRcdFx0Y2FuVXNlRE9NICYmICEhKHdpbmRvdy5hZGRFdmVudExpc3RlbmVyIHx8IHdpbmRvdy5hdHRhY2hFdmVudCksXG5cblx0XHRjYW5Vc2VWaWV3cG9ydDogY2FuVXNlRE9NICYmICEhd2luZG93LnNjcmVlblxuXG5cdH07XG5cblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHRkZWZpbmUoZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIEV4ZWN1dGlvbkVudmlyb25tZW50O1xuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBFeGVjdXRpb25FbnZpcm9ubWVudDtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuRXhlY3V0aW9uRW52aXJvbm1lbnQgPSBFeGVjdXRpb25FbnZpcm9ubWVudDtcblx0fVxuXG59KCkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFNQQUNFID0gJyAnO1xyXG52YXIgUkVfQ0xBU1MgPSAvW1xcblxcdFxccl0vZztcclxuXHJcbnZhciBub3JtID0gZnVuY3Rpb24gKGVsZW1DbGFzcykge1xyXG4gIHJldHVybiAoU1BBQ0UgKyBlbGVtQ2xhc3MgKyBTUEFDRSkucmVwbGFjZShSRV9DTEFTUywgU1BBQ0UpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgYWRkQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XHJcbiAgICBlbGVtLmNsYXNzTmFtZSArPSAnICcgKyBjbGFzc05hbWU7XHJcbiAgfSxcclxuXHJcbiAgcmVtb3ZlQ2xhc3MoZWxlbSwgbmVlZGxlKSB7XHJcbiAgICB2YXIgZWxlbUNsYXNzID0gZWxlbS5jbGFzc05hbWUudHJpbSgpO1xyXG4gICAgdmFyIGNsYXNzTmFtZSA9IG5vcm0oZWxlbUNsYXNzKTtcclxuICAgIG5lZWRsZSA9IG5lZWRsZS50cmltKCk7XHJcbiAgICBuZWVkbGUgPSBTUEFDRSArIG5lZWRsZSArIFNQQUNFO1xyXG4gICAgd2hpbGUgKGNsYXNzTmFtZS5pbmRleE9mKG5lZWRsZSkgPj0gMCkge1xyXG4gICAgICBjbGFzc05hbWUgPSBjbGFzc05hbWUucmVwbGFjZShuZWVkbGUsIFNQQUNFKTtcclxuICAgIH1cclxuICAgIGVsZW0uY2xhc3NOYW1lID0gY2xhc3NOYW1lLnRyaW0oKTtcclxuICB9XHJcbn07IiwidmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIGNsYXNzbmFtZXMgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XHJcbnZhciBmb3VuZGF0aW9uQXBpID0gcmVxdWlyZSgnLi4vdXRpbHMvZm91bmRhdGlvbi1hcGknKTtcclxudmFyIEFuaW1hdGlvbiA9IHJlcXVpcmUoJy4uL3V0aWxzL2FuaW1hdGlvbicpO1xyXG52YXIgTm90aWZpY2F0aW9uID0gcmVxdWlyZSgnLi9ub3RpZmljYXRpb24nKTtcclxudmFyIGNyZWF0ZVJlYWN0Q2xhc3MgPSByZXF1aXJlKFwiY3JlYXRlLXJlYWN0LWNsYXNzXCIpO1xyXG5cclxudmFyIE5vdGlmaWNhdGlvblN0YXRpYyA9IGNyZWF0ZVJlYWN0Q2xhc3Moe1xyXG4gIGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIHsgb3BlbjogZmFsc2UgfTtcclxuICB9LFxyXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKSB7XHJcbiAgICBmb3VuZGF0aW9uQXBpLnN1YnNjcmliZSh0aGlzLnByb3BzLmlkLCBmdW5jdGlvbiAobmFtZSwgbXNnKSB7XHJcbiAgICAgIGlmIChtc2cgPT09ICdvcGVuJykge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe29wZW46IHRydWV9KTtcclxuICAgICAgfSBlbHNlIGlmIChtc2cgPT09ICdjbG9zZScpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xyXG4gICAgICB9XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gIH0sXHJcbiAgY29tcG9uZW50V2lsbFVubW91bnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIGZvdW5kYXRpb25BcGkudW5zdWJzY3JpYmUodGhpcy5wcm9wcy5pZCk7XHJcbiAgfSxcclxuICBjbG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOiBmYWxzZX0pO1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9LFxyXG4gIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEFuaW1hdGlvbiBhY3RpdmU9e3RoaXMuc3RhdGUub3Blbn0gYW5pbWF0aW9uSW49XCJmYWRlSW5cIiBhbmltYXRpb25PdXQ9XCJmYWRlT3V0XCI+XHJcbiAgICAgICAgPE5vdGlmaWNhdGlvbiB7Li4udGhpcy5wcm9wc30gY2xvc2VIYW5kbGVyPXt0aGlzLmNsb3NlSGFuZGxlcn0gPlxyXG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9Ob3RpZmljYXRpb24+XHJcbiAgICAgIDwvQW5pbWF0aW9uPlxyXG4gICAgKTtcclxuICB9XHJcbn0pO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBOb3RpZmljYXRpb25TdGF0aWM7XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3poRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDL1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMzdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0EsVUFhQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3BGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDbnpCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDZkE7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxxQkFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDcmZBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLHFCQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ25IQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxxQkFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNuSEE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EscUJBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM5R0E7QUFDQTs7Ozs7Ozs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsVUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xyQkE7QUFDQTtBQUNBO0FBRkE7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFoREE7QUFDQTtBQWtEQTs7Ozs7OztBQ3pEQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFGQTtBQUhBO0FBU0E7QUFoQ0E7QUFDQTtBQWtDQTs7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlEQTtBQUNBO0FBZ0VBOzs7Ozs7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQSxVQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTs7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBREE7QUFNQTtBQTdCQTtBQUNBO0FBK0JBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=