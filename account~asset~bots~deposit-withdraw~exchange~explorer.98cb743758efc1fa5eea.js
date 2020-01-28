(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[14],{

/***/ 2792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Bots_libs_AssetWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2793);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(830);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var AssetImage = function (_React$Component) {
    _inherits(AssetImage, _React$Component);

    function AssetImage(props) {
        _classCallCheck(this, AssetImage);

        var _this = _possibleConstructorReturn(this, (AssetImage.__proto__ || Object.getPrototypeOf(AssetImage)).call(this, props));

        _this.state = {
            imgError: false
        };
        return _this;
    }

    _createClass(AssetImage, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(np, ns) {
            return this.props.asset !== np.asset || this.props.maxWidth !== np.maxWidth || this.props.whiteList !== np.whiteList || this.state.imgError !== ns.imgError;
        }
    }, {
        key: "_onError",
        value: function _onError(imgName) {
            if (!this.state.imgError) {
                if (this.props.replaceNoneToBts) this.refs[imgName.toLowerCase()].src = "" + "asset-symbols/bts.png";else this.refs[imgName.toLowerCase()].remove();
                this.setState({
                    imgError: true
                });
            }
        }
    }, {
        key: "render",
        value: function render() {
            var asset = this.props.asset;


            function getImageName(asset) {
                var symbol = asset.get("symbol");
                return symbol;
                // if (symbol === "OPEN.BTC" || symbol === "GDEX.BTC") return symbol;
                // if (symbol.startsWith("ESCROW.")) return symbol;
                // let imgName = asset.get("symbol").split(".");
                //return imgName.length === 2 ? imgName[1] : imgName[0];
            }

            var imgName = getImageName(asset);

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
                ref: imgName.toLowerCase(),
                className: "column-hide-small",
                onError: this._onError.bind(this, imgName),
                style: { maxWidth: this.props.maxWidth, marginRight: 5 },
                src: "" + "asset-symbols/" + imgName.toLowerCase() + ".png"
            });
        }
    }]);

    return AssetImage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

AssetImage.propTypes = {
    replaceNoneToBts: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    maxWidth: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number
};
AssetImage.defaultProps = {
    replaceNoneToBts: true,
    maxWidth: 20
};


AssetImage = Object(_Bots_libs_AssetWrapper__WEBPACK_IMPORTED_MODULE_1__["default"])(AssetImage);

var AssetImageWrapper = function (_React$Component2) {
    _inherits(AssetImageWrapper, _React$Component2);

    function AssetImageWrapper() {
        _classCallCheck(this, AssetImageWrapper);

        return _possibleConstructorReturn(this, (AssetImageWrapper.__proto__ || Object.getPrototypeOf(AssetImageWrapper)).apply(this, arguments));
    }

    _createClass(AssetImageWrapper, [{
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AssetImage, _extends({}, this.props, { asset: this.props.name }));
        }
    }]);

    return AssetImageWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (AssetImageWrapper);

/***/ }),

/***/ 2793:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_reactUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2118);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2002);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2003);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(527);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_4__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var DynamicObjectResolver = function (_React$Component) {
    _inherits(DynamicObjectResolver, _React$Component);

    function DynamicObjectResolver() {
        _classCallCheck(this, DynamicObjectResolver);

        var _this = _possibleConstructorReturn(this, (DynamicObjectResolver.__proto__ || Object.getPrototypeOf(DynamicObjectResolver)).call(this));

        _this.getDynamicObject = _this.getDynamicObject.bind(_this);
        return _this;
    }

    _createClass(DynamicObjectResolver, [{
        key: "getDynamicObject",
        value: function getDynamicObject(id) {
            return this.props.dos.find(function (a) {
                return a && a.get("id") === id;
            });
        }
    }, {
        key: "render",
        value: function render() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(this.props.children), _extends({}, this.props, {
                getDynamicObject: this.getDynamicObject
            }));
        }
    }]);

    return DynamicObjectResolver;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

DynamicObjectResolver.propTypes = {
    dos: components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainObjectsList
};
DynamicObjectResolver.defaultProps = {
    dos: Object(immutable__WEBPACK_IMPORTED_MODULE_4__["List"])()
};

DynamicObjectResolver = Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(DynamicObjectResolver);

/**
 * HOC that resolves either a number of assets directly with ChainAsset,
 * or a list of assets with ChainAssets
 *
 *  Options
 *  -'propNames' an array of prop names to be resolved as assets. (defaults to "asset" or "assets")
 *  -'defaultProps' default values to use for objects (optional)
 *  -'asList' defines whether to use ChainAssetsList or not (useful for resolving large quantities of assets)
 *  -'withDynamic' defines whether to also resolve dynamic objects or not
 */

function AssetWrapper(Component) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    options.propNames = options.propNames || [!!options.asList ? "assets" : "asset"];
    var finalPropTypes = options.propNames.reduce(function (res, type) {
        res[type] = options.asList ? components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAssetsList : components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__["default"].ChainAsset.isRequired;
        return res;
    }, {});

    var defaultProps = Object.keys(finalPropTypes).reduce(function (res, key) {
        var current = options.defaultProps && options.defaultProps[key];
        res[key] = !!options.asList ? Object(immutable__WEBPACK_IMPORTED_MODULE_4__["List"])(current || []) : current || "1.3.0";
        return res;
    }, {});

    if (options.defaultProps && !!options.defaultProps.tempComponent) {
        defaultProps.tempComponent = options.defaultProps.tempComponent;
    }

    var AssetsResolver = function (_React$Component2) {
        _inherits(AssetsResolver, _React$Component2);

        function AssetsResolver() {
            _classCallCheck(this, AssetsResolver);

            return _possibleConstructorReturn(this, (AssetsResolver.__proto__ || Object.getPrototypeOf(AssetsResolver)).apply(this, arguments));
        }

        _createClass(AssetsResolver, [{
            key: "render",
            value: function render() {
                var _this3 = this;

                var finalAssets = {};
                var passTroughProps = {};
                var dos = Object(immutable__WEBPACK_IMPORTED_MODULE_4__["List"])();
                Object.keys(this.props).forEach(function (prop) {
                    if (_this3.props[prop] && options.propNames.indexOf(prop) !== -1) {
                        if (options.withDynamic) {
                            if (!options.asList) {
                                dos = dos.push(_this3.props[prop].get("dynamic_asset_data_id"));
                            } else {
                                _this3.props[prop].forEach(function (a) {
                                    if (!!a) dos = dos.push(a.get("dynamic_asset_data_id"));
                                });
                            }
                        }
                        finalAssets[prop] = options.asList ? _this3.props[prop].filter(function (a) {
                            return !!a;
                        }) : _this3.props[prop];
                    } else {
                        passTroughProps[prop] = _this3.props[prop];
                    }
                });

                var wrapped = react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.only(this.props.children), _extends({}, passTroughProps, finalAssets));

                if (options.withDynamic) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    DynamicObjectResolver,
                    { dos: dos },
                    wrapped
                );else return wrapped;
            }
        }]);

        return AssetsResolver;
    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

    AssetsResolver.propTypes = finalPropTypes;
    AssetsResolver.defaultProps = defaultProps;

    AssetsResolver = Object(components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__["default"])(AssetsResolver);

    var Wrapper = function (_React$Component3) {
        _inherits(Wrapper, _React$Component3);

        function Wrapper() {
            _classCallCheck(this, Wrapper);

            return _possibleConstructorReturn(this, (Wrapper.__proto__ || Object.getPrototypeOf(Wrapper)).apply(this, arguments));
        }

        _createClass(Wrapper, [{
            key: "render",
            value: function render() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    AssetsResolver,
                    this.props,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, { ref: "bound_component" })
                );
            }
        }]);

        return Wrapper;
    }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

    Wrapper.displayName = "Wrapper(" + Object(common_reactUtils__WEBPACK_IMPORTED_MODULE_1__["getDisplayName"])(Component) + ")";
    return Wrapper;
}

/* harmony default export */ __webpack_exports__["default"] = (AssetWrapper);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudH5hc3NldH5ib3RzfmRlcG9zaXQtd2l0aGRyYXd+ZXhjaGFuZ2V+ZXhwbG9yZXIuOThjYjc0Mzc1OGVmYzFmYTVlZWEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9Bc3NldEltYWdlLmpzeCIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvQm90cy9saWJzL0Fzc2V0V3JhcHBlci5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXNzZXRXcmFwcGVyIGZyb20gXCIuLi9Cb3RzL2xpYnMvQXNzZXRXcmFwcGVyXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuXHJcbmNsYXNzIEFzc2V0SW1hZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICByZXBsYWNlTm9uZVRvQnRzOiBQcm9wVHlwZXMuYm9vbCxcclxuICAgICAgICBtYXhXaWR0aDogUHJvcFR5cGVzLm51bWJlclxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIHJlcGxhY2VOb25lVG9CdHM6IHRydWUsXHJcbiAgICAgICAgbWF4V2lkdGg6IDIwXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpbWdFcnJvcjogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCwgbnMpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmFzc2V0ICE9PSBucC5hc3NldCB8fFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm1heFdpZHRoICE9PSBucC5tYXhXaWR0aCB8fFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLndoaXRlTGlzdCAhPT0gbnAud2hpdGVMaXN0IHx8XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuaW1nRXJyb3IgIT09IG5zLmltZ0Vycm9yXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBfb25FcnJvcihpbWdOYW1lKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmltZ0Vycm9yKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLnJlcGxhY2VOb25lVG9CdHMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnNbXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nTmFtZS50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICBdLnNyYyA9IGAke19fQkFTRV9VUkxfX31hc3NldC1zeW1ib2xzL2J0cy5wbmdgO1xyXG4gICAgICAgICAgICBlbHNlIHRoaXMucmVmc1tpbWdOYW1lLnRvTG93ZXJDYXNlKCldLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGltZ0Vycm9yOiB0cnVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHthc3NldH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRJbWFnZU5hbWUoYXNzZXQpIHtcclxuICAgICAgICAgICAgbGV0IHN5bWJvbCA9IGFzc2V0LmdldChcInN5bWJvbFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHN5bWJvbDtcclxuICAgICAgICAgICAgLy8gaWYgKHN5bWJvbCA9PT0gXCJPUEVOLkJUQ1wiIHx8IHN5bWJvbCA9PT0gXCJHREVYLkJUQ1wiKSByZXR1cm4gc3ltYm9sO1xyXG4gICAgICAgICAgICAvLyBpZiAoc3ltYm9sLnN0YXJ0c1dpdGgoXCJFU0NST1cuXCIpKSByZXR1cm4gc3ltYm9sO1xyXG4gICAgICAgICAgICAvLyBsZXQgaW1nTmFtZSA9IGFzc2V0LmdldChcInN5bWJvbFwiKS5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgICAgIC8vcmV0dXJuIGltZ05hbWUubGVuZ3RoID09PSAyID8gaW1nTmFtZVsxXSA6IGltZ05hbWVbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpbWdOYW1lID0gZ2V0SW1hZ2VOYW1lKGFzc2V0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgcmVmPXtpbWdOYW1lLnRvTG93ZXJDYXNlKCl9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2x1bW4taGlkZS1zbWFsbFwiXHJcbiAgICAgICAgICAgICAgICBvbkVycm9yPXt0aGlzLl9vbkVycm9yLmJpbmQodGhpcywgaW1nTmFtZSl9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e21heFdpZHRoOiB0aGlzLnByb3BzLm1heFdpZHRoLCBtYXJnaW5SaWdodDogNX19XHJcbiAgICAgICAgICAgICAgICBzcmM9e2Ake19fQkFTRV9VUkxfX31hc3NldC1zeW1ib2xzLyR7aW1nTmFtZS50b0xvd2VyQ2FzZSgpfS5wbmdgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkFzc2V0SW1hZ2UgPSBBc3NldFdyYXBwZXIoQXNzZXRJbWFnZSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3NldEltYWdlV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIDxBc3NldEltYWdlIHsuLi50aGlzLnByb3BzfSBhc3NldD17dGhpcy5wcm9wcy5uYW1lfSAvPjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge2dldERpc3BsYXlOYW1lfSBmcm9tIFwiY29tbW9uL3JlYWN0VXRpbHNcIjtcbmltcG9ydCBDaGFpblR5cGVzIGZyb20gXCJjb21wb25lbnRzL1V0aWxpdHkvQ2hhaW5UeXBlc1wiO1xuaW1wb3J0IEJpbmRUb0NoYWluU3RhdGUgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9CaW5kVG9DaGFpblN0YXRlXCI7XG5pbXBvcnQge0xpc3R9IGZyb20gXCJpbW11dGFibGVcIjtcblxuY2xhc3MgRHluYW1pY09iamVjdFJlc29sdmVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBkb3M6IENoYWluVHlwZXMuQ2hhaW5PYmplY3RzTGlzdFxuICAgIH07XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgZG9zOiBMaXN0KClcbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5nZXREeW5hbWljT2JqZWN0ID0gdGhpcy5nZXREeW5hbWljT2JqZWN0LmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0RHluYW1pY09iamVjdChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5kb3MuZmluZChhID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhICYmIGEuZ2V0KFwiaWRcIikgPT09IGlkO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKSwge1xuICAgICAgICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGdldER5bmFtaWNPYmplY3Q6IHRoaXMuZ2V0RHluYW1pY09iamVjdFxuICAgICAgICB9KTtcbiAgICB9XG59XG5EeW5hbWljT2JqZWN0UmVzb2x2ZXIgPSBCaW5kVG9DaGFpblN0YXRlKER5bmFtaWNPYmplY3RSZXNvbHZlcik7XG5cbi8qKlxuICogSE9DIHRoYXQgcmVzb2x2ZXMgZWl0aGVyIGEgbnVtYmVyIG9mIGFzc2V0cyBkaXJlY3RseSB3aXRoIENoYWluQXNzZXQsXG4gKiBvciBhIGxpc3Qgb2YgYXNzZXRzIHdpdGggQ2hhaW5Bc3NldHNcbiAqXG4gKiAgT3B0aW9uc1xuICogIC0ncHJvcE5hbWVzJyBhbiBhcnJheSBvZiBwcm9wIG5hbWVzIHRvIGJlIHJlc29sdmVkIGFzIGFzc2V0cy4gKGRlZmF1bHRzIHRvIFwiYXNzZXRcIiBvciBcImFzc2V0c1wiKVxuICogIC0nZGVmYXVsdFByb3BzJyBkZWZhdWx0IHZhbHVlcyB0byB1c2UgZm9yIG9iamVjdHMgKG9wdGlvbmFsKVxuICogIC0nYXNMaXN0JyBkZWZpbmVzIHdoZXRoZXIgdG8gdXNlIENoYWluQXNzZXRzTGlzdCBvciBub3QgKHVzZWZ1bCBmb3IgcmVzb2x2aW5nIGxhcmdlIHF1YW50aXRpZXMgb2YgYXNzZXRzKVxuICogIC0nd2l0aER5bmFtaWMnIGRlZmluZXMgd2hldGhlciB0byBhbHNvIHJlc29sdmUgZHluYW1pYyBvYmplY3RzIG9yIG5vdFxuICovXG5cbmZ1bmN0aW9uIEFzc2V0V3JhcHBlcihDb21wb25lbnQsIG9wdGlvbnMgPSB7fSkge1xuICAgIG9wdGlvbnMucHJvcE5hbWVzID0gb3B0aW9ucy5wcm9wTmFtZXMgfHwgW1xuICAgICAgICAhIW9wdGlvbnMuYXNMaXN0ID8gXCJhc3NldHNcIiA6IFwiYXNzZXRcIlxuICAgIF07XG4gICAgY29uc3QgZmluYWxQcm9wVHlwZXMgPSBvcHRpb25zLnByb3BOYW1lcy5yZWR1Y2UoKHJlcywgdHlwZSkgPT4ge1xuICAgICAgICByZXNbdHlwZV0gPSBvcHRpb25zLmFzTGlzdFxuICAgICAgICAgICAgPyBDaGFpblR5cGVzLkNoYWluQXNzZXRzTGlzdFxuICAgICAgICAgICAgOiBDaGFpblR5cGVzLkNoYWluQXNzZXQuaXNSZXF1aXJlZDtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9LCB7fSk7XG5cbiAgICBsZXQgZGVmYXVsdFByb3BzID0gT2JqZWN0LmtleXMoZmluYWxQcm9wVHlwZXMpLnJlZHVjZSgocmVzLCBrZXkpID0+IHtcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBvcHRpb25zLmRlZmF1bHRQcm9wcyAmJiBvcHRpb25zLmRlZmF1bHRQcm9wc1trZXldO1xuICAgICAgICByZXNba2V5XSA9ICEhb3B0aW9ucy5hc0xpc3QgPyBMaXN0KGN1cnJlbnQgfHwgW10pIDogY3VycmVudCB8fCBcIjEuMy4wXCI7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSwge30pO1xuXG4gICAgaWYgKG9wdGlvbnMuZGVmYXVsdFByb3BzICYmICEhb3B0aW9ucy5kZWZhdWx0UHJvcHMudGVtcENvbXBvbmVudCkge1xuICAgICAgICBkZWZhdWx0UHJvcHMudGVtcENvbXBvbmVudCA9IG9wdGlvbnMuZGVmYXVsdFByb3BzLnRlbXBDb21wb25lbnQ7XG4gICAgfVxuXG4gICAgY2xhc3MgQXNzZXRzUmVzb2x2ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgICBzdGF0aWMgcHJvcFR5cGVzID0gZmluYWxQcm9wVHlwZXM7XG4gICAgICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgbGV0IGZpbmFsQXNzZXRzID0ge307XG4gICAgICAgICAgICBsZXQgcGFzc1Ryb3VnaFByb3BzID0ge307XG4gICAgICAgICAgICBsZXQgZG9zID0gTGlzdCgpO1xuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy5wcm9wcykuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHNbcHJvcF0gJiZcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wcm9wTmFtZXMuaW5kZXhPZihwcm9wKSAhPT0gLTFcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMud2l0aER5bmFtaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3B0aW9ucy5hc0xpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3MgPSBkb3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wc1twcm9wXS5nZXQoXCJkeW5hbWljX2Fzc2V0X2RhdGFfaWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzW3Byb3BdLmZvckVhY2goYSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIWEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3MgPSBkb3MucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhLmdldChcImR5bmFtaWNfYXNzZXRfZGF0YV9pZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbEFzc2V0c1twcm9wXSA9IG9wdGlvbnMuYXNMaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHNbcHJvcF0uZmlsdGVyKGEgPT4gISFhKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLnByb3BzW3Byb3BdO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhc3NUcm91Z2hQcm9wc1twcm9wXSA9IHRoaXMucHJvcHNbcHJvcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCB3cmFwcGVkID0gUmVhY3QuY2xvbmVFbGVtZW50KFxuICAgICAgICAgICAgICAgIFJlYWN0LkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbiksXG4gICAgICAgICAgICAgICAgey4uLnBhc3NUcm91Z2hQcm9wcywgLi4uZmluYWxBc3NldHN9XG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy53aXRoRHluYW1pYylcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8RHluYW1pY09iamVjdFJlc29sdmVyIGRvcz17ZG9zfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt3cmFwcGVkfVxuICAgICAgICAgICAgICAgICAgICA8L0R5bmFtaWNPYmplY3RSZXNvbHZlcj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgZWxzZSByZXR1cm4gd3JhcHBlZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBBc3NldHNSZXNvbHZlciA9IEJpbmRUb0NoYWluU3RhdGUoQXNzZXRzUmVzb2x2ZXIpO1xuXG4gICAgY2xhc3MgV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEFzc2V0c1Jlc29sdmVyIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCByZWY9XCJib3VuZF9jb21wb25lbnRcIiAvPlxuICAgICAgICAgICAgICAgIDwvQXNzZXRzUmVzb2x2ZXI+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuICAgIFdyYXBwZXIuZGlzcGxheU5hbWUgPSBgV3JhcHBlcigke2dldERpc3BsYXlOYW1lKENvbXBvbmVudCl9KWA7XG4gICAgcmV0dXJuIFdyYXBwZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0V3JhcHBlcjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQVdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFIQTtBQU1BO0FBQ0E7OztBQUNBO0FBQ0E7QUFNQTs7O0FBRUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTs7OztBQWhFQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBRkE7QUFEQTtBQU9BO0FBQ0E7QUFGQTtBQUNBO0FBQ0E7QUEyREE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7OztBQUhBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQVFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBRkE7QUFJQTs7OztBQXpCQTtBQUNBO0FBREE7QUFFQTtBQURBO0FBREE7QUFLQTtBQURBO0FBQ0E7QUFzQkE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVdBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQXlCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBcEVBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFvQkE7QUFBQTtBQUNBO0FBZ0RBO0FBQ0E7QUF2RUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBMEVBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFJQTtBQS9FQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBZ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==