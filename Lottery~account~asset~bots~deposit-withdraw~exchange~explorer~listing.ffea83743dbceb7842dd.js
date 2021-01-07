(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[14],{

/***/ 2826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(411);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Bots_libs_AssetWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2827);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(851);
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
                style: {
                    maxWidth: this.props.maxWidth,
                    marginRight: 5,
                    marginTop: "-3px"
                },
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

/***/ 2827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(411);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_reactUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2141);
/* harmony import */ var components_Utility_ChainTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2025);
/* harmony import */ var components_Utility_BindToChainState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2026);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(548);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG90dGVyeX5hY2NvdW50fmFzc2V0fmJvdHN+ZGVwb3NpdC13aXRoZHJhd35leGNoYW5nZX5leHBsb3Jlcn5saXN0aW5nLmZmZWE4Mzc0M2RiY2ViNzg0MmRkLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvQXNzZXRJbWFnZS5qc3giLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0JvdHMvbGlicy9Bc3NldFdyYXBwZXIuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBc3NldFdyYXBwZXIgZnJvbSBcIi4uL0JvdHMvbGlicy9Bc3NldFdyYXBwZXJcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcblxuY2xhc3MgQXNzZXRJbWFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgcmVwbGFjZU5vbmVUb0J0czogUHJvcFR5cGVzLmJvb2wsXG4gICAgICAgIG1heFdpZHRoOiBQcm9wVHlwZXMubnVtYmVyXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIHJlcGxhY2VOb25lVG9CdHM6IHRydWUsXG4gICAgICAgIG1heFdpZHRoOiAyMFxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGltZ0Vycm9yOiBmYWxzZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHNob3VsZENvbXBvbmVudFVwZGF0ZShucCwgbnMpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIHRoaXMucHJvcHMuYXNzZXQgIT09IG5wLmFzc2V0IHx8XG4gICAgICAgICAgICB0aGlzLnByb3BzLm1heFdpZHRoICE9PSBucC5tYXhXaWR0aCB8fFxuICAgICAgICAgICAgdGhpcy5wcm9wcy53aGl0ZUxpc3QgIT09IG5wLndoaXRlTGlzdCB8fFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5pbWdFcnJvciAhPT0gbnMuaW1nRXJyb3JcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBfb25FcnJvcihpbWdOYW1lKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5pbWdFcnJvcikge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMucmVwbGFjZU5vbmVUb0J0cylcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnNbXG4gICAgICAgICAgICAgICAgICAgIGltZ05hbWUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgICAgIF0uc3JjID0gYCR7X19CQVNFX1VSTF9ffWFzc2V0LXN5bWJvbHMvYnRzLnBuZ2A7XG4gICAgICAgICAgICBlbHNlIHRoaXMucmVmc1tpbWdOYW1lLnRvTG93ZXJDYXNlKCldLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgaW1nRXJyb3I6IHRydWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2Fzc2V0fSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0SW1hZ2VOYW1lKGFzc2V0KSB7XG4gICAgICAgICAgICBsZXQgc3ltYm9sID0gYXNzZXQuZ2V0KFwic3ltYm9sXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHN5bWJvbDtcbiAgICAgICAgICAgIC8vIGlmIChzeW1ib2wgPT09IFwiT1BFTi5CVENcIiB8fCBzeW1ib2wgPT09IFwiR0RFWC5CVENcIikgcmV0dXJuIHN5bWJvbDtcbiAgICAgICAgICAgIC8vIGlmIChzeW1ib2wuc3RhcnRzV2l0aChcIkVTQ1JPVy5cIikpIHJldHVybiBzeW1ib2w7XG4gICAgICAgICAgICAvLyBsZXQgaW1nTmFtZSA9IGFzc2V0LmdldChcInN5bWJvbFwiKS5zcGxpdChcIi5cIik7XG4gICAgICAgICAgICAvL3JldHVybiBpbWdOYW1lLmxlbmd0aCA9PT0gMiA/IGltZ05hbWVbMV0gOiBpbWdOYW1lWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaW1nTmFtZSA9IGdldEltYWdlTmFtZShhc3NldCk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICByZWY9e2ltZ05hbWUudG9Mb3dlckNhc2UoKX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2x1bW4taGlkZS1zbWFsbFwiXG4gICAgICAgICAgICAgICAgb25FcnJvcj17dGhpcy5fb25FcnJvci5iaW5kKHRoaXMsIGltZ05hbWUpfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiB0aGlzLnByb3BzLm1heFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogNSxcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIi0zcHhcIlxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgc3JjPXtgJHtfX0JBU0VfVVJMX199YXNzZXQtc3ltYm9scy8ke2ltZ05hbWUudG9Mb3dlckNhc2UoKX0ucG5nYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Bc3NldEltYWdlID0gQXNzZXRXcmFwcGVyKEFzc2V0SW1hZ2UpO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3NldEltYWdlV3JhcHBlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gPEFzc2V0SW1hZ2Ugey4uLnRoaXMucHJvcHN9IGFzc2V0PXt0aGlzLnByb3BzLm5hbWV9IC8+O1xuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7Z2V0RGlzcGxheU5hbWV9IGZyb20gXCJjb21tb24vcmVhY3RVdGlsc1wiO1xuaW1wb3J0IENoYWluVHlwZXMgZnJvbSBcImNvbXBvbmVudHMvVXRpbGl0eS9DaGFpblR5cGVzXCI7XG5pbXBvcnQgQmluZFRvQ2hhaW5TdGF0ZSBmcm9tIFwiY29tcG9uZW50cy9VdGlsaXR5L0JpbmRUb0NoYWluU3RhdGVcIjtcbmltcG9ydCB7TGlzdH0gZnJvbSBcImltbXV0YWJsZVwiO1xuXG5jbGFzcyBEeW5hbWljT2JqZWN0UmVzb2x2ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGRvczogQ2hhaW5UeXBlcy5DaGFpbk9iamVjdHNMaXN0XG4gICAgfTtcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBkb3M6IExpc3QoKVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmdldER5bmFtaWNPYmplY3QgPSB0aGlzLmdldER5bmFtaWNPYmplY3QuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXREeW5hbWljT2JqZWN0KGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb3BzLmRvcy5maW5kKGEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGEgJiYgYS5nZXQoXCJpZFwiKSA9PT0gaWQ7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChSZWFjdC5DaGlsZHJlbi5vbmx5KHRoaXMucHJvcHMuY2hpbGRyZW4pLCB7XG4gICAgICAgICAgICAuLi50aGlzLnByb3BzLFxuICAgICAgICAgICAgZ2V0RHluYW1pY09iamVjdDogdGhpcy5nZXREeW5hbWljT2JqZWN0XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbkR5bmFtaWNPYmplY3RSZXNvbHZlciA9IEJpbmRUb0NoYWluU3RhdGUoRHluYW1pY09iamVjdFJlc29sdmVyKTtcblxuLyoqXG4gKiBIT0MgdGhhdCByZXNvbHZlcyBlaXRoZXIgYSBudW1iZXIgb2YgYXNzZXRzIGRpcmVjdGx5IHdpdGggQ2hhaW5Bc3NldCxcbiAqIG9yIGEgbGlzdCBvZiBhc3NldHMgd2l0aCBDaGFpbkFzc2V0c1xuICpcbiAqICBPcHRpb25zXG4gKiAgLSdwcm9wTmFtZXMnIGFuIGFycmF5IG9mIHByb3AgbmFtZXMgdG8gYmUgcmVzb2x2ZWQgYXMgYXNzZXRzLiAoZGVmYXVsdHMgdG8gXCJhc3NldFwiIG9yIFwiYXNzZXRzXCIpXG4gKiAgLSdkZWZhdWx0UHJvcHMnIGRlZmF1bHQgdmFsdWVzIHRvIHVzZSBmb3Igb2JqZWN0cyAob3B0aW9uYWwpXG4gKiAgLSdhc0xpc3QnIGRlZmluZXMgd2hldGhlciB0byB1c2UgQ2hhaW5Bc3NldHNMaXN0IG9yIG5vdCAodXNlZnVsIGZvciByZXNvbHZpbmcgbGFyZ2UgcXVhbnRpdGllcyBvZiBhc3NldHMpXG4gKiAgLSd3aXRoRHluYW1pYycgZGVmaW5lcyB3aGV0aGVyIHRvIGFsc28gcmVzb2x2ZSBkeW5hbWljIG9iamVjdHMgb3Igbm90XG4gKi9cblxuZnVuY3Rpb24gQXNzZXRXcmFwcGVyKENvbXBvbmVudCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgb3B0aW9ucy5wcm9wTmFtZXMgPSBvcHRpb25zLnByb3BOYW1lcyB8fCBbXG4gICAgICAgICEhb3B0aW9ucy5hc0xpc3QgPyBcImFzc2V0c1wiIDogXCJhc3NldFwiXG4gICAgXTtcbiAgICBjb25zdCBmaW5hbFByb3BUeXBlcyA9IG9wdGlvbnMucHJvcE5hbWVzLnJlZHVjZSgocmVzLCB0eXBlKSA9PiB7XG4gICAgICAgIHJlc1t0eXBlXSA9IG9wdGlvbnMuYXNMaXN0XG4gICAgICAgICAgICA/IENoYWluVHlwZXMuQ2hhaW5Bc3NldHNMaXN0XG4gICAgICAgICAgICA6IENoYWluVHlwZXMuQ2hhaW5Bc3NldC5pc1JlcXVpcmVkO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH0sIHt9KTtcblxuICAgIGxldCBkZWZhdWx0UHJvcHMgPSBPYmplY3Qua2V5cyhmaW5hbFByb3BUeXBlcykucmVkdWNlKChyZXMsIGtleSkgPT4ge1xuICAgICAgICBsZXQgY3VycmVudCA9IG9wdGlvbnMuZGVmYXVsdFByb3BzICYmIG9wdGlvbnMuZGVmYXVsdFByb3BzW2tleV07XG4gICAgICAgIHJlc1trZXldID0gISFvcHRpb25zLmFzTGlzdCA/IExpc3QoY3VycmVudCB8fCBbXSkgOiBjdXJyZW50IHx8IFwiMS4zLjBcIjtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9LCB7fSk7XG5cbiAgICBpZiAob3B0aW9ucy5kZWZhdWx0UHJvcHMgJiYgISFvcHRpb25zLmRlZmF1bHRQcm9wcy50ZW1wQ29tcG9uZW50KSB7XG4gICAgICAgIGRlZmF1bHRQcm9wcy50ZW1wQ29tcG9uZW50ID0gb3B0aW9ucy5kZWZhdWx0UHJvcHMudGVtcENvbXBvbmVudDtcbiAgICB9XG5cbiAgICBjbGFzcyBBc3NldHNSZXNvbHZlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICAgIHN0YXRpYyBwcm9wVHlwZXMgPSBmaW5hbFByb3BUeXBlcztcbiAgICAgICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcblxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICBsZXQgZmluYWxBc3NldHMgPSB7fTtcbiAgICAgICAgICAgIGxldCBwYXNzVHJvdWdoUHJvcHMgPSB7fTtcbiAgICAgICAgICAgIGxldCBkb3MgPSBMaXN0KCk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnByb3BzKS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wc1twcm9wXSAmJlxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLnByb3BOYW1lcy5pbmRleE9mKHByb3ApICE9PSAtMVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy53aXRoRHluYW1pYykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLmFzTGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvcyA9IGRvcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzW3Byb3BdLmdldChcImR5bmFtaWNfYXNzZXRfZGF0YV9pZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHNbcHJvcF0uZm9yRWFjaChhID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEhYSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvcyA9IGRvcy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEuZ2V0KFwiZHluYW1pY19hc3NldF9kYXRhX2lkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsQXNzZXRzW3Byb3BdID0gb3B0aW9ucy5hc0xpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wc1twcm9wXS5maWx0ZXIoYSA9PiAhIWEpXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMucHJvcHNbcHJvcF07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFzc1Ryb3VnaFByb3BzW3Byb3BdID0gdGhpcy5wcm9wc1twcm9wXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGV0IHdyYXBwZWQgPSBSZWFjdC5jbG9uZUVsZW1lbnQoXG4gICAgICAgICAgICAgICAgUmVhY3QuQ2hpbGRyZW4ub25seSh0aGlzLnByb3BzLmNoaWxkcmVuKSxcbiAgICAgICAgICAgICAgICB7Li4ucGFzc1Ryb3VnaFByb3BzLCAuLi5maW5hbEFzc2V0c31cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGlmIChvcHRpb25zLndpdGhEeW5hbWljKVxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxEeW5hbWljT2JqZWN0UmVzb2x2ZXIgZG9zPXtkb3N9PlxuICAgICAgICAgICAgICAgICAgICAgICAge3dyYXBwZWR9XG4gICAgICAgICAgICAgICAgICAgIDwvRHluYW1pY09iamVjdFJlc29sdmVyPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBlbHNlIHJldHVybiB3cmFwcGVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIEFzc2V0c1Jlc29sdmVyID0gQmluZFRvQ2hhaW5TdGF0ZShBc3NldHNSZXNvbHZlcik7XG5cbiAgICBjbGFzcyBXcmFwcGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8QXNzZXRzUmVzb2x2ZXIgey4uLnRoaXMucHJvcHN9PlxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHJlZj1cImJvdW5kX2NvbXBvbmVudFwiIC8+XG4gICAgICAgICAgICAgICAgPC9Bc3NldHNSZXNvbHZlcj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgV3JhcHBlci5kaXNwbGF5TmFtZSA9IGBXcmFwcGVyKCR7Z2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KX0pYDtcbiAgICByZXR1cm4gV3JhcHBlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXNzZXRXcmFwcGVyO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBV0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUhBO0FBTUE7QUFDQTs7O0FBQ0E7QUFDQTtBQU1BOzs7QUFFQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQVRBO0FBWUE7Ozs7QUFwRUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUZBO0FBREE7QUFPQTtBQUNBO0FBRkE7QUFDQTtBQUNBO0FBK0RBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFIQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFRQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7Ozs7QUF6QkE7QUFDQTtBQURBO0FBRUE7QUFEQTtBQURBO0FBS0E7QUFEQTtBQUNBO0FBc0JBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUF5QkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFLQTtBQXBFQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBb0JBO0FBQUE7QUFDQTtBQWdEQTtBQUNBO0FBdkVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQTBFQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUEvRUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQWdGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=