(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[27],{

/***/ 2963:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(411);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(851);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(761);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1907);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(747);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(746);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(608);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1867);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










/**
 *  Renders a tab layout, handling switching and optionally persists the currently open tab using the SettingsStore
 *
 *  props:
 *     setting: unique name to be used to remember the active tab of this tabs layout,
 *     tabsClass: optional classes for the tabs container div
 *     contentClass: optional classes for the content container div
 *
 *  Usage:
 *
 *  <Tabs setting="mySetting">
 *      <Tab title="locale.string.title1">Tab 1 content</Tab>
 *      <Tab title="locale.string.title2">Tab 2 content</Tab>
 *  </Tabs>
 *
 */

var Tab = function (_React$Component) {
    _inherits(Tab, _React$Component);

    function Tab() {
        _classCallCheck(this, Tab);

        return _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));
    }

    _createClass(Tab, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                isActive = _props.isActive,
                index = _props.index,
                changeTab = _props.changeTab,
                title = _props.title,
                className = _props.className,
                updatedTab = _props.updatedTab,
                disabled = _props.disabled,
                subText = _props.subText;

            var c = classnames__WEBPACK_IMPORTED_MODULE_2___default()({ "is-active": isActive }, className);

            if (typeof title === "string" && title.indexOf(".") > 0) {
                title = counterpart__WEBPACK_IMPORTED_MODULE_6___default.a.translate(title);
            }

            // dont string concetenate subText directly within the rendering, subText can be an object without toString
            // implementation, but valid DOM (meaning, don't do subText + "someString"

            if (this.props.collapsed) {
                // if subText is empty, dont render it, we dont want empty brackets added
                if (typeof subText === "string") {
                    subText = subText.trim();
                }
                if (title.type === "span") {
                    title = title.props.children[2];
                }
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "option",
                    { value: index, "data-is-link-to": this.props.isLinkTo },
                    title,
                    updatedTab ? "*" : "",
                    subText && " (",
                    subText && subText,
                    subText && ")"
                );
            }
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "li",
                {
                    className: c,
                    onClick: !disabled ? changeTab.bind(this, index, this.props.isLinkTo) : null
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "a",
                    null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "tab-title" },
                        title,
                        updatedTab ? "*" : ""
                    ),
                    subText && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "div",
                        { className: "tab-subtext" },
                        subText
                    )
                )
            );
        }
    }]);

    return Tab;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Tab.propTypes = {
    changeTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    isActive: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
    index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    isLinkTo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    subText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string])
};
Tab.defaultProps = {
    isActive: false,
    index: 0,
    className: "",
    isLinkTo: "",
    subText: null
};

var Tabs = function (_React$Component2) {
    _inherits(Tabs, _React$Component2);

    function Tabs(props) {
        _classCallCheck(this, Tabs);

        var _this2 = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this));

        _this2.state = {
            activeTab: props.setting ? props.viewSettings.get(props.setting, props.defaultActiveTab) : props.defaultActiveTab,
            width: window.innerWidth
        };

        _this2._setDimensions = _this2._setDimensions.bind(_this2);
        return _this2;
    }

    _createClass(Tabs, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this._setDimensions();
            window.addEventListener("resize", this._setDimensions, {
                capture: false,
                passive: true
            });
        }
    }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
            var nextSetting = nextProps.viewSettings.get(nextProps.setting);
            if (nextSetting !== this.props.viewSettings.get(this.props.setting)) {
                this.setState({
                    activeTab: nextSetting
                });
            }
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener("resize", this._setDimensions);
        }
    }, {
        key: "_setDimensions",
        value: function _setDimensions() {
            var width = window.innerWidth;

            if (width !== this.state.width) {
                this.setState({ width: width });
            }
        }
    }, {
        key: "_changeTab",
        value: function _changeTab(value, isLinkTo) {
            if (value === this.state.activeTab) return;
            // Persist current tab if desired

            if (isLinkTo !== "") {
                this.props.history.push(isLinkTo);
            }

            if (this.props.setting) {
                actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__["default"].changeViewSetting(_defineProperty({}, this.props.setting, value));
            }
            this.setState({ activeTab: value });

            if (this.props.onChangeTab) this.props.onChangeTab(value);
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var _props2 = this.props,
                children = _props2.children,
                contentClass = _props2.contentClass,
                tabsClass = _props2.tabsClass,
                style = _props2.style,
                segmented = _props2.segmented;

            var collapseTabs = this.state.width < 900 && react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.count(children) > 2;

            var activeContent = null;

            var tabs = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child, index) {
                if (!child) {
                    return null;
                }
                if (collapseTabs && child.props.disabled) return null;
                var isActive = index === _this3.state.activeTab;
                if (isActive) {
                    activeContent = child.props.children;
                }

                return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
                    collapsed: collapseTabs,
                    isActive: isActive,
                    changeTab: _this3._changeTab.bind(_this3),
                    index: index
                });
            }).filter(function (a) {
                return a !== null;
            });

            if (!activeContent) {
                activeContent = tabs[0].props.children;
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                "div",
                {
                    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(!!this.props.actionButtons ? "with-buttons" : "", this.props.className)
                },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: "service-selector" },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "ul",
                        {
                            style: style,
                            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("button-group no-margin", tabsClass, {
                                segmented: segmented
                            })
                        },
                        collapseTabs ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            {
                                style: {
                                    paddingLeft: 10,
                                    paddingRight: 10,
                                    minWidth: "15rem"
                                }
                            },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                                "select",
                                {
                                    value: this.state.activeTab,
                                    style: { marginTop: 10, marginBottom: 10 },
                                    className: "bts-select",
                                    onChange: function onChange(e) {
                                        var ind = parseInt(e.target.value, 10);
                                        _this3._changeTab(ind, e.target[ind].attributes["data-is-link-to"].value);
                                    }
                                },
                                tabs
                            )
                        ) : tabs,
                        this.props.actionButtons ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                            "li",
                            { className: "tabs-action-buttons" },
                            this.props.actionButtons
                        ) : null
                    )
                ),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "div",
                    { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("tab-content", contentClass) },
                    activeContent
                )
            );
        }
    }]);

    return Tabs;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Tabs.propTypes = {
    setting: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    defaultActiveTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    segmented: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Tabs.defaultProps = {
    active: 0,
    defaultActiveTab: 0,
    segmented: true,
    contentClass: "",
    style: {}
};


Tabs = Object(alt_react__WEBPACK_IMPORTED_MODULE_3__["connect"])(Tabs, {
    listenTo: function listenTo() {
        return [stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__["default"]];
    },
    getProps: function getProps() {
        return { viewSettings: stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__["default"].getState().viewSettings };
    }
});

Tabs = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["withRouter"])(Tabs);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG90dGVyeX5hY2NvdW50fmRhc2hib2FyZH5kYXNoYm9hcmQtYWNjb3VudHN+bGlzdGluZy5jYWZjYzllYjM5Yjk0YTczNTA0OS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9VdGlsaXR5L1RhYnMuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBjbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSBcImFsdC1yZWFjdFwiO1xuaW1wb3J0IFNldHRpbmdzQWN0aW9ucyBmcm9tIFwiYWN0aW9ucy9TZXR0aW5nc0FjdGlvbnNcIjtcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xuaW1wb3J0IGNvdW50ZXJwYXJ0IGZyb20gXCJjb3VudGVycGFydFwiO1xuaW1wb3J0IHt3aXRoUm91dGVyfSBmcm9tIFwicmVhY3Qtcm91dGVyLWRvbVwiO1xuXG4vKipcbiAqICBSZW5kZXJzIGEgdGFiIGxheW91dCwgaGFuZGxpbmcgc3dpdGNoaW5nIGFuZCBvcHRpb25hbGx5IHBlcnNpc3RzIHRoZSBjdXJyZW50bHkgb3BlbiB0YWIgdXNpbmcgdGhlIFNldHRpbmdzU3RvcmVcbiAqXG4gKiAgcHJvcHM6XG4gKiAgICAgc2V0dGluZzogdW5pcXVlIG5hbWUgdG8gYmUgdXNlZCB0byByZW1lbWJlciB0aGUgYWN0aXZlIHRhYiBvZiB0aGlzIHRhYnMgbGF5b3V0LFxuICogICAgIHRhYnNDbGFzczogb3B0aW9uYWwgY2xhc3NlcyBmb3IgdGhlIHRhYnMgY29udGFpbmVyIGRpdlxuICogICAgIGNvbnRlbnRDbGFzczogb3B0aW9uYWwgY2xhc3NlcyBmb3IgdGhlIGNvbnRlbnQgY29udGFpbmVyIGRpdlxuICpcbiAqICBVc2FnZTpcbiAqXG4gKiAgPFRhYnMgc2V0dGluZz1cIm15U2V0dGluZ1wiPlxuICogICAgICA8VGFiIHRpdGxlPVwibG9jYWxlLnN0cmluZy50aXRsZTFcIj5UYWIgMSBjb250ZW50PC9UYWI+XG4gKiAgICAgIDxUYWIgdGl0bGU9XCJsb2NhbGUuc3RyaW5nLnRpdGxlMlwiPlRhYiAyIGNvbnRlbnQ8L1RhYj5cbiAqICA8L1RhYnM+XG4gKlxuICovXG5cbmNsYXNzIFRhYiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgY2hhbmdlVGFiOiBQcm9wVHlwZXMuZnVuYyxcbiAgICAgICAgaXNBY3RpdmU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gICAgICAgIGluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gICAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgaXNMaW5rVG86IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIHN1YlRleHQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vYmplY3QsIFByb3BUeXBlcy5zdHJpbmddKVxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXG4gICAgICAgIGluZGV4OiAwLFxuICAgICAgICBjbGFzc05hbWU6IFwiXCIsXG4gICAgICAgIGlzTGlua1RvOiBcIlwiLFxuICAgICAgICBzdWJUZXh0OiBudWxsXG4gICAgfTtcblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtcbiAgICAgICAgICAgIGlzQWN0aXZlLFxuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICBjaGFuZ2VUYWIsXG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICAgIHVwZGF0ZWRUYWIsXG4gICAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICAgIHN1YlRleHRcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGxldCBjID0gY25hbWVzKHtcImlzLWFjdGl2ZVwiOiBpc0FjdGl2ZX0sIGNsYXNzTmFtZSk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aXRsZSA9PT0gXCJzdHJpbmdcIiAmJiB0aXRsZS5pbmRleE9mKFwiLlwiKSA+IDApIHtcbiAgICAgICAgICAgIHRpdGxlID0gY291bnRlcnBhcnQudHJhbnNsYXRlKHRpdGxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRvbnQgc3RyaW5nIGNvbmNldGVuYXRlIHN1YlRleHQgZGlyZWN0bHkgd2l0aGluIHRoZSByZW5kZXJpbmcsIHN1YlRleHQgY2FuIGJlIGFuIG9iamVjdCB3aXRob3V0IHRvU3RyaW5nXG4gICAgICAgIC8vIGltcGxlbWVudGF0aW9uLCBidXQgdmFsaWQgRE9NIChtZWFuaW5nLCBkb24ndCBkbyBzdWJUZXh0ICsgXCJzb21lU3RyaW5nXCJcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIC8vIGlmIHN1YlRleHQgaXMgZW1wdHksIGRvbnQgcmVuZGVyIGl0LCB3ZSBkb250IHdhbnQgZW1wdHkgYnJhY2tldHMgYWRkZWRcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3ViVGV4dCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHN1YlRleHQgPSBzdWJUZXh0LnRyaW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aXRsZS50eXBlID09PSBcInNwYW5cIikge1xuICAgICAgICAgICAgICAgIHRpdGxlID0gdGl0bGUucHJvcHMuY2hpbGRyZW5bMl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2luZGV4fSBkYXRhLWlzLWxpbmstdG89e3RoaXMucHJvcHMuaXNMaW5rVG99PlxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIHt1cGRhdGVkVGFiID8gXCIqXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICB7c3ViVGV4dCAmJiBcIiAoXCJ9XG4gICAgICAgICAgICAgICAgICAgIHtzdWJUZXh0ICYmIHN1YlRleHR9XG4gICAgICAgICAgICAgICAgICAgIHtzdWJUZXh0ICYmIFwiKVwifVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgICAgICAhZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY2hhbmdlVGFiLmJpbmQodGhpcywgaW5kZXgsIHRoaXMucHJvcHMuaXNMaW5rVG8pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRhYi10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAge3VwZGF0ZWRUYWIgPyBcIipcIiA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge3N1YlRleHQgJiYgPGRpdiBjbGFzc05hbWU9XCJ0YWItc3VidGV4dFwiPntzdWJUZXh0fTwvZGl2Pn1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY2xhc3MgVGFicyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICAgICAgc2V0dGluZzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgZGVmYXVsdEFjdGl2ZVRhYjogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgc2VnbWVudGVkOiBQcm9wVHlwZXMuYm9vbFxuICAgIH07XG5cbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBhY3RpdmU6IDAsXG4gICAgICAgIGRlZmF1bHRBY3RpdmVUYWI6IDAsXG4gICAgICAgIHNlZ21lbnRlZDogdHJ1ZSxcbiAgICAgICAgY29udGVudENsYXNzOiBcIlwiLFxuICAgICAgICBzdHlsZToge31cbiAgICB9O1xuXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZVRhYjogcHJvcHMuc2V0dGluZ1xuICAgICAgICAgICAgICAgID8gcHJvcHMudmlld1NldHRpbmdzLmdldChwcm9wcy5zZXR0aW5nLCBwcm9wcy5kZWZhdWx0QWN0aXZlVGFiKVxuICAgICAgICAgICAgICAgIDogcHJvcHMuZGVmYXVsdEFjdGl2ZVRhYixcbiAgICAgICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX3NldERpbWVuc2lvbnMgPSB0aGlzLl9zZXREaW1lbnNpb25zLmJpbmQodGhpcyk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMuX3NldERpbWVuc2lvbnMoKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fc2V0RGltZW5zaW9ucywge1xuICAgICAgICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICAgICAgICBwYXNzaXZlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICAgIGxldCBuZXh0U2V0dGluZyA9IG5leHRQcm9wcy52aWV3U2V0dGluZ3MuZ2V0KG5leHRQcm9wcy5zZXR0aW5nKTtcbiAgICAgICAgaWYgKG5leHRTZXR0aW5nICE9PSB0aGlzLnByb3BzLnZpZXdTZXR0aW5ncy5nZXQodGhpcy5wcm9wcy5zZXR0aW5nKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgYWN0aXZlVGFiOiBuZXh0U2V0dGluZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5fc2V0RGltZW5zaW9ucyk7XG4gICAgfVxuXG4gICAgX3NldERpbWVuc2lvbnMoKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgICAgIGlmICh3aWR0aCAhPT0gdGhpcy5zdGF0ZS53aWR0aCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7d2lkdGh9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9jaGFuZ2VUYWIodmFsdWUsIGlzTGlua1RvKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5zdGF0ZS5hY3RpdmVUYWIpIHJldHVybjtcbiAgICAgICAgLy8gUGVyc2lzdCBjdXJyZW50IHRhYiBpZiBkZXNpcmVkXG5cbiAgICAgICAgaWYgKGlzTGlua1RvICE9PSBcIlwiKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChpc0xpbmtUbyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZXR0aW5nKSB7XG4gICAgICAgICAgICBTZXR0aW5nc0FjdGlvbnMuY2hhbmdlVmlld1NldHRpbmcoe1xuICAgICAgICAgICAgICAgIFt0aGlzLnByb3BzLnNldHRpbmddOiB2YWx1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YWN0aXZlVGFiOiB2YWx1ZX0pO1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLm9uQ2hhbmdlVGFiKSB0aGlzLnByb3BzLm9uQ2hhbmdlVGFiKHZhbHVlKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7Y2hpbGRyZW4sIGNvbnRlbnRDbGFzcywgdGFic0NsYXNzLCBzdHlsZSwgc2VnbWVudGVkfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGNvbGxhcHNlVGFicyA9XG4gICAgICAgICAgICB0aGlzLnN0YXRlLndpZHRoIDwgOTAwICYmIFJlYWN0LkNoaWxkcmVuLmNvdW50KGNoaWxkcmVuKSA+IDI7XG5cbiAgICAgICAgbGV0IGFjdGl2ZUNvbnRlbnQgPSBudWxsO1xuXG4gICAgICAgIGxldCB0YWJzID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGNoaWxkcmVuLCAoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29sbGFwc2VUYWJzICYmIGNoaWxkLnByb3BzLmRpc2FibGVkKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGxldCBpc0FjdGl2ZSA9IGluZGV4ID09PSB0aGlzLnN0YXRlLmFjdGl2ZVRhYjtcbiAgICAgICAgICAgIGlmIChpc0FjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNvbnRlbnQgPSBjaGlsZC5wcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogY29sbGFwc2VUYWJzLFxuICAgICAgICAgICAgICAgIGlzQWN0aXZlLFxuICAgICAgICAgICAgICAgIGNoYW5nZVRhYjogdGhpcy5fY2hhbmdlVGFiLmJpbmQodGhpcyksXG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkuZmlsdGVyKGEgPT4gYSAhPT0gbnVsbCk7XG5cbiAgICAgICAgaWYgKCFhY3RpdmVDb250ZW50KSB7XG4gICAgICAgICAgICBhY3RpdmVDb250ZW50ID0gdGFic1swXS5wcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXG4gICAgICAgICAgICAgICAgICAgICEhdGhpcy5wcm9wcy5hY3Rpb25CdXR0b25zID8gXCJ3aXRoLWJ1dHRvbnNcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xhc3NOYW1lXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlcnZpY2Utc2VsZWN0b3JcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcImJ1dHRvbi1ncm91cCBuby1tYXJnaW5cIiwgdGFic0NsYXNzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VnbWVudGVkXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbGxhcHNlVGFicyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogXCIxNXJlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hY3RpdmVUYWJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDogMTAsIG1hcmdpbkJvdHRvbTogMTB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRzLXNlbGVjdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZCA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2hhbmdlVGFiKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0W2luZF0uYXR0cmlidXRlc1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGF0YS1pcy1saW5rLXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXS52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFic31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFic1xuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmFjdGlvbkJ1dHRvbnMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRhYnMtYWN0aW9uLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYWN0aW9uQnV0dG9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuYW1lcyhcInRhYi1jb250ZW50XCIsIGNvbnRlbnRDbGFzcyl9PlxuICAgICAgICAgICAgICAgICAgICB7YWN0aXZlQ29udGVudH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuVGFicyA9IGNvbm5lY3QoXG4gICAgVGFicyxcbiAgICB7XG4gICAgICAgIGxpc3RlblRvKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtTZXR0aW5nc1N0b3JlXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UHJvcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge3ZpZXdTZXR0aW5nczogU2V0dGluZ3NTdG9yZS5nZXRTdGF0ZSgpLnZpZXdTZXR0aW5nc307XG4gICAgICAgIH1cbiAgICB9XG4pO1xuXG5UYWJzID0gd2l0aFJvdXRlcihUYWJzKTtcblxuZXhwb3J0IHtUYWJzLCBUYWJ9O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOzs7Ozs7Ozs7OztBQWtCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBUkE7QUFpQkE7Ozs7QUExRUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFEQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBa0VBOzs7QUFlQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSkE7QUFDQTtBQU1BO0FBVEE7QUFVQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQVpBO0FBY0E7QUFkQTtBQVBBO0FBMkJBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFuQ0E7QUFEQTtBQTBDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBaERBO0FBcURBOzs7O0FBN0pBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQUNBO0FBdUpBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=