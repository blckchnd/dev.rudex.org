(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[28],{

/***/ 2929:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(390);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(830);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(740);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1886);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(726);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(725);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(587);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1846);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudH5kYXNoYm9hcmR+ZGFzaGJvYXJkLWFjY291bnRzLmE0NTE1NDkwMDIzOTYzYTdjZGYwLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL1V0aWxpdHkvVGFicy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBjbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tIFwiYWx0LXJlYWN0XCI7XHJcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XHJcbmltcG9ydCBTZXR0aW5nc1N0b3JlIGZyb20gXCJzdG9yZXMvU2V0dGluZ3NTdG9yZVwiO1xyXG5pbXBvcnQgY291bnRlcnBhcnQgZnJvbSBcImNvdW50ZXJwYXJ0XCI7XHJcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcclxuXHJcbi8qKlxyXG4gKiAgUmVuZGVycyBhIHRhYiBsYXlvdXQsIGhhbmRsaW5nIHN3aXRjaGluZyBhbmQgb3B0aW9uYWxseSBwZXJzaXN0cyB0aGUgY3VycmVudGx5IG9wZW4gdGFiIHVzaW5nIHRoZSBTZXR0aW5nc1N0b3JlXHJcbiAqXHJcbiAqICBwcm9wczpcclxuICogICAgIHNldHRpbmc6IHVuaXF1ZSBuYW1lIHRvIGJlIHVzZWQgdG8gcmVtZW1iZXIgdGhlIGFjdGl2ZSB0YWIgb2YgdGhpcyB0YWJzIGxheW91dCxcclxuICogICAgIHRhYnNDbGFzczogb3B0aW9uYWwgY2xhc3NlcyBmb3IgdGhlIHRhYnMgY29udGFpbmVyIGRpdlxyXG4gKiAgICAgY29udGVudENsYXNzOiBvcHRpb25hbCBjbGFzc2VzIGZvciB0aGUgY29udGVudCBjb250YWluZXIgZGl2XHJcbiAqXHJcbiAqICBVc2FnZTpcclxuICpcclxuICogIDxUYWJzIHNldHRpbmc9XCJteVNldHRpbmdcIj5cclxuICogICAgICA8VGFiIHRpdGxlPVwibG9jYWxlLnN0cmluZy50aXRsZTFcIj5UYWIgMSBjb250ZW50PC9UYWI+XHJcbiAqICAgICAgPFRhYiB0aXRsZT1cImxvY2FsZS5zdHJpbmcudGl0bGUyXCI+VGFiIDIgY29udGVudDwvVGFiPlxyXG4gKiAgPC9UYWJzPlxyXG4gKlxyXG4gKi9cclxuXHJcbmNsYXNzIFRhYiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xyXG4gICAgICAgIGNoYW5nZVRhYjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICAgICAgaXNBY3RpdmU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbiAgICAgICAgaW5kZXg6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICAgICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgaXNMaW5rVG86IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICAgICAgc3ViVGV4dDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm9iamVjdCwgUHJvcFR5cGVzLnN0cmluZ10pXHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgIGluZGV4OiAwLFxyXG4gICAgICAgIGNsYXNzTmFtZTogXCJcIixcclxuICAgICAgICBpc0xpbmtUbzogXCJcIixcclxuICAgICAgICBzdWJUZXh0OiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge1xyXG4gICAgICAgICAgICBpc0FjdGl2ZSxcclxuICAgICAgICAgICAgaW5kZXgsXHJcbiAgICAgICAgICAgIGNoYW5nZVRhYixcclxuICAgICAgICAgICAgdGl0bGUsXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZSxcclxuICAgICAgICAgICAgdXBkYXRlZFRhYixcclxuICAgICAgICAgICAgZGlzYWJsZWQsXHJcbiAgICAgICAgICAgIHN1YlRleHRcclxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBsZXQgYyA9IGNuYW1lcyh7XCJpcy1hY3RpdmVcIjogaXNBY3RpdmV9LCBjbGFzc05hbWUpO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mIHRpdGxlID09PSBcInN0cmluZ1wiICYmIHRpdGxlLmluZGV4T2YoXCIuXCIpID4gMCkge1xyXG4gICAgICAgICAgICB0aXRsZSA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZSh0aXRsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBkb250IHN0cmluZyBjb25jZXRlbmF0ZSBzdWJUZXh0IGRpcmVjdGx5IHdpdGhpbiB0aGUgcmVuZGVyaW5nLCBzdWJUZXh0IGNhbiBiZSBhbiBvYmplY3Qgd2l0aG91dCB0b1N0cmluZ1xyXG4gICAgICAgIC8vIGltcGxlbWVudGF0aW9uLCBidXQgdmFsaWQgRE9NIChtZWFuaW5nLCBkb24ndCBkbyBzdWJUZXh0ICsgXCJzb21lU3RyaW5nXCJcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29sbGFwc2VkKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIHN1YlRleHQgaXMgZW1wdHksIGRvbnQgcmVuZGVyIGl0LCB3ZSBkb250IHdhbnQgZW1wdHkgYnJhY2tldHMgYWRkZWRcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBzdWJUZXh0ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgICAgICBzdWJUZXh0ID0gc3ViVGV4dC50cmltKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRpdGxlLnR5cGUgPT09IFwic3BhblwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZSA9IHRpdGxlLnByb3BzLmNoaWxkcmVuWzJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpbmRleH0gZGF0YS1pcy1saW5rLXRvPXt0aGlzLnByb3BzLmlzTGlua1RvfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAge3VwZGF0ZWRUYWIgPyBcIipcIiA6IFwiXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAge3N1YlRleHQgJiYgXCIgKFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHtzdWJUZXh0ICYmIHN1YlRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAge3N1YlRleHQgJiYgXCIpXCJ9XHJcbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtcclxuICAgICAgICAgICAgICAgICAgICAhZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjaGFuZ2VUYWIuYmluZCh0aGlzLCBpbmRleCwgdGhpcy5wcm9wcy5pc0xpbmtUbylcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRhYi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt1cGRhdGVkVGFiID8gXCIqXCIgOiBcIlwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7c3ViVGV4dCAmJiA8ZGl2IGNsYXNzTmFtZT1cInRhYi1zdWJ0ZXh0XCI+e3N1YlRleHR9PC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFRhYnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGljIHByb3BUeXBlcyA9IHtcclxuICAgICAgICBzZXR0aW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHRBY3RpdmVUYWI6IFByb3BUeXBlcy5udW1iZXIsXHJcbiAgICAgICAgc2VnbWVudGVkOiBQcm9wVHlwZXMuYm9vbFxyXG4gICAgfTtcclxuXHJcbiAgICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgICAgIGFjdGl2ZTogMCxcclxuICAgICAgICBkZWZhdWx0QWN0aXZlVGFiOiAwLFxyXG4gICAgICAgIHNlZ21lbnRlZDogdHJ1ZSxcclxuICAgICAgICBjb250ZW50Q2xhc3M6IFwiXCIsXHJcbiAgICAgICAgc3R5bGU6IHt9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBhY3RpdmVUYWI6IHByb3BzLnNldHRpbmdcclxuICAgICAgICAgICAgICAgID8gcHJvcHMudmlld1NldHRpbmdzLmdldChwcm9wcy5zZXR0aW5nLCBwcm9wcy5kZWZhdWx0QWN0aXZlVGFiKVxyXG4gICAgICAgICAgICAgICAgOiBwcm9wcy5kZWZhdWx0QWN0aXZlVGFiLFxyXG4gICAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGhcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl9zZXREaW1lbnNpb25zID0gdGhpcy5fc2V0RGltZW5zaW9ucy5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuX3NldERpbWVuc2lvbnMoKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9zZXREaW1lbnNpb25zLCB7XHJcbiAgICAgICAgICAgIGNhcHR1cmU6IGZhbHNlLFxyXG4gICAgICAgICAgICBwYXNzaXZlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuICAgICAgICBsZXQgbmV4dFNldHRpbmcgPSBuZXh0UHJvcHMudmlld1NldHRpbmdzLmdldChuZXh0UHJvcHMuc2V0dGluZyk7XHJcbiAgICAgICAgaWYgKG5leHRTZXR0aW5nICE9PSB0aGlzLnByb3BzLnZpZXdTZXR0aW5ncy5nZXQodGhpcy5wcm9wcy5zZXR0aW5nKSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVRhYjogbmV4dFNldHRpbmdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3NldERpbWVuc2lvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIF9zZXREaW1lbnNpb25zKCkge1xyXG4gICAgICAgIGxldCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG5cclxuICAgICAgICBpZiAod2lkdGggIT09IHRoaXMuc3RhdGUud2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7d2lkdGh9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgX2NoYW5nZVRhYih2YWx1ZSwgaXNMaW5rVG8pIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMuc3RhdGUuYWN0aXZlVGFiKSByZXR1cm47XHJcbiAgICAgICAgLy8gUGVyc2lzdCBjdXJyZW50IHRhYiBpZiBkZXNpcmVkXHJcblxyXG4gICAgICAgIGlmIChpc0xpbmtUbyAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLmhpc3RvcnkucHVzaChpc0xpbmtUbyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5zZXR0aW5nKSB7XHJcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XHJcbiAgICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5zZXR0aW5nXTogdmFsdWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZVRhYjogdmFsdWV9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2VUYWIpIHRoaXMucHJvcHMub25DaGFuZ2VUYWIodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQge2NoaWxkcmVuLCBjb250ZW50Q2xhc3MsIHRhYnNDbGFzcywgc3R5bGUsIHNlZ21lbnRlZH0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIGNvbnN0IGNvbGxhcHNlVGFicyA9XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGUud2lkdGggPCA5MDAgJiYgUmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pID4gMjtcclxuXHJcbiAgICAgICAgbGV0IGFjdGl2ZUNvbnRlbnQgPSBudWxsO1xyXG5cclxuICAgICAgICBsZXQgdGFicyA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY29sbGFwc2VUYWJzICYmIGNoaWxkLnByb3BzLmRpc2FibGVkKSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgbGV0IGlzQWN0aXZlID0gaW5kZXggPT09IHRoaXMuc3RhdGUuYWN0aXZlVGFiO1xyXG4gICAgICAgICAgICBpZiAoaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNvbnRlbnQgPSBjaGlsZC5wcm9wcy5jaGlsZHJlbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xyXG4gICAgICAgICAgICAgICAgY29sbGFwc2VkOiBjb2xsYXBzZVRhYnMsXHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZSxcclxuICAgICAgICAgICAgICAgIGNoYW5nZVRhYjogdGhpcy5fY2hhbmdlVGFiLmJpbmQodGhpcyksXHJcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXhcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSkuZmlsdGVyKGEgPT4gYSAhPT0gbnVsbCk7XHJcblxyXG4gICAgICAgIGlmICghYWN0aXZlQ29udGVudCkge1xyXG4gICAgICAgICAgICBhY3RpdmVDb250ZW50ID0gdGFic1swXS5wcm9wcy5jaGlsZHJlbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFxyXG4gICAgICAgICAgICAgICAgICAgICEhdGhpcy5wcm9wcy5hY3Rpb25CdXR0b25zID8gXCJ3aXRoLWJ1dHRvbnNcIiA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWVcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1zZWxlY3RvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFwiYnV0dG9uLWdyb3VwIG5vLW1hcmdpblwiLCB0YWJzQ2xhc3MsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xsYXBzZVRhYnMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogMTAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiBcIjE1cmVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWN0aXZlVGFifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e21hcmdpblRvcDogMTAsIG1hcmdpbkJvdHRvbTogMTB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidHMtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZCA9IHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VUYWIoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUudGFyZ2V0W2luZF0uYXR0cmlidXRlc1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWlzLWxpbmstdG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0udmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGFic31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmFjdGlvbkJ1dHRvbnMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFicy1hY3Rpb24tYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmFjdGlvbkJ1dHRvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y25hbWVzKFwidGFiLWNvbnRlbnRcIiwgY29udGVudENsYXNzKX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2FjdGl2ZUNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuVGFicyA9IGNvbm5lY3QoXHJcbiAgICBUYWJzLFxyXG4gICAge1xyXG4gICAgICAgIGxpc3RlblRvKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmVdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UHJvcHMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7dmlld1NldHRpbmdzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcblxyXG5UYWJzID0gd2l0aFJvdXRlcihUYWJzKTtcclxuXHJcbmV4cG9ydCB7VGFicywgVGFifTtcclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOzs7Ozs7Ozs7OztBQWtCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBUUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBUkE7QUFpQkE7Ozs7QUExRUE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFEQTtBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBa0VBOzs7QUFlQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBSkE7QUFDQTtBQU1BO0FBVEE7QUFVQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQVpBO0FBY0E7QUFkQTtBQVBBO0FBMkJBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFuQ0E7QUFEQTtBQTBDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBaERBO0FBcURBOzs7O0FBN0pBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBREE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQUNBO0FBdUpBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFDQTtBQVNBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=