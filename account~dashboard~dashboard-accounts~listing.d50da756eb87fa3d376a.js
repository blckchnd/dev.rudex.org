(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[28],{

/***/ 2952:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(402);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(842);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(752);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1898);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(738);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(737);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(599);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1858);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudH5kYXNoYm9hcmR+ZGFzaGJvYXJkLWFjY291bnRzfmxpc3RpbmcuZDUwZGE3NTZlYjg3ZmEzZDM3NmEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9UYWJzLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuLyoqXG4gKiAgUmVuZGVycyBhIHRhYiBsYXlvdXQsIGhhbmRsaW5nIHN3aXRjaGluZyBhbmQgb3B0aW9uYWxseSBwZXJzaXN0cyB0aGUgY3VycmVudGx5IG9wZW4gdGFiIHVzaW5nIHRoZSBTZXR0aW5nc1N0b3JlXG4gKlxuICogIHByb3BzOlxuICogICAgIHNldHRpbmc6IHVuaXF1ZSBuYW1lIHRvIGJlIHVzZWQgdG8gcmVtZW1iZXIgdGhlIGFjdGl2ZSB0YWIgb2YgdGhpcyB0YWJzIGxheW91dCxcbiAqICAgICB0YWJzQ2xhc3M6IG9wdGlvbmFsIGNsYXNzZXMgZm9yIHRoZSB0YWJzIGNvbnRhaW5lciBkaXZcbiAqICAgICBjb250ZW50Q2xhc3M6IG9wdGlvbmFsIGNsYXNzZXMgZm9yIHRoZSBjb250ZW50IGNvbnRhaW5lciBkaXZcbiAqXG4gKiAgVXNhZ2U6XG4gKlxuICogIDxUYWJzIHNldHRpbmc9XCJteVNldHRpbmdcIj5cbiAqICAgICAgPFRhYiB0aXRsZT1cImxvY2FsZS5zdHJpbmcudGl0bGUxXCI+VGFiIDEgY29udGVudDwvVGFiPlxuICogICAgICA8VGFiIHRpdGxlPVwibG9jYWxlLnN0cmluZy50aXRsZTJcIj5UYWIgMiBjb250ZW50PC9UYWI+XG4gKiAgPC9UYWJzPlxuICpcbiAqL1xuXG5jbGFzcyBUYWIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGNoYW5nZVRhYjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIGlzQWN0aXZlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgICAgICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGlzTGlua1RvOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBzdWJUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuc3RyaW5nXSlcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICAgICBpbmRleDogMCxcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLFxuICAgICAgICBpc0xpbmtUbzogXCJcIixcbiAgICAgICAgc3ViVGV4dDogbnVsbFxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBpc0FjdGl2ZSxcbiAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgY2hhbmdlVGFiLFxuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgICB1cGRhdGVkVGFiLFxuICAgICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgICBzdWJUZXh0XG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgYyA9IGNuYW1lcyh7XCJpcy1hY3RpdmVcIjogaXNBY3RpdmV9LCBjbGFzc05hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGl0bGUgPT09IFwic3RyaW5nXCIgJiYgdGl0bGUuaW5kZXhPZihcIi5cIikgPiAwKSB7XG4gICAgICAgICAgICB0aXRsZSA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZSh0aXRsZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkb250IHN0cmluZyBjb25jZXRlbmF0ZSBzdWJUZXh0IGRpcmVjdGx5IHdpdGhpbiB0aGUgcmVuZGVyaW5nLCBzdWJUZXh0IGNhbiBiZSBhbiBvYmplY3Qgd2l0aG91dCB0b1N0cmluZ1xuICAgICAgICAvLyBpbXBsZW1lbnRhdGlvbiwgYnV0IHZhbGlkIERPTSAobWVhbmluZywgZG9uJ3QgZG8gc3ViVGV4dCArIFwic29tZVN0cmluZ1wiXG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29sbGFwc2VkKSB7XG4gICAgICAgICAgICAvLyBpZiBzdWJUZXh0IGlzIGVtcHR5LCBkb250IHJlbmRlciBpdCwgd2UgZG9udCB3YW50IGVtcHR5IGJyYWNrZXRzIGFkZGVkXG4gICAgICAgICAgICBpZiAodHlwZW9mIHN1YlRleHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBzdWJUZXh0ID0gc3ViVGV4dC50cmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGl0bGUudHlwZSA9PT0gXCJzcGFuXCIpIHtcbiAgICAgICAgICAgICAgICB0aXRsZSA9IHRpdGxlLnByb3BzLmNoaWxkcmVuWzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXtpbmRleH0gZGF0YS1pcy1saW5rLXRvPXt0aGlzLnByb3BzLmlzTGlua1RvfT5cbiAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICB7dXBkYXRlZFRhYiA/IFwiKlwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAge3N1YlRleHQgJiYgXCIgKFwifVxuICAgICAgICAgICAgICAgICAgICB7c3ViVGV4dCAmJiBzdWJUZXh0fVxuICAgICAgICAgICAgICAgICAgICB7c3ViVGV4dCAmJiBcIilcIn1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y31cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtcbiAgICAgICAgICAgICAgICAgICAgIWRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGNoYW5nZVRhYi5iaW5kKHRoaXMsIGluZGV4LCB0aGlzLnByb3BzLmlzTGlua1RvKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0YWItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt1cGRhdGVkVGFiID8gXCIqXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHtzdWJUZXh0ICYmIDxkaXYgY2xhc3NOYW1lPVwidGFiLXN1YnRleHRcIj57c3ViVGV4dH08L2Rpdj59XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmNsYXNzIFRhYnMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIHNldHRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGRlZmF1bHRBY3RpdmVUYWI6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIHNlZ21lbnRlZDogUHJvcFR5cGVzLmJvb2xcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgYWN0aXZlOiAwLFxuICAgICAgICBkZWZhdWx0QWN0aXZlVGFiOiAwLFxuICAgICAgICBzZWdtZW50ZWQ6IHRydWUsXG4gICAgICAgIGNvbnRlbnRDbGFzczogXCJcIixcbiAgICAgICAgc3R5bGU6IHt9XG4gICAgfTtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBhY3RpdmVUYWI6IHByb3BzLnNldHRpbmdcbiAgICAgICAgICAgICAgICA/IHByb3BzLnZpZXdTZXR0aW5ncy5nZXQocHJvcHMuc2V0dGluZywgcHJvcHMuZGVmYXVsdEFjdGl2ZVRhYilcbiAgICAgICAgICAgICAgICA6IHByb3BzLmRlZmF1bHRBY3RpdmVUYWIsXG4gICAgICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGhcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9zZXREaW1lbnNpb25zID0gdGhpcy5fc2V0RGltZW5zaW9ucy5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLl9zZXREaW1lbnNpb25zKCk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3NldERpbWVuc2lvbnMsIHtcbiAgICAgICAgICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgICAgICAgICAgcGFzc2l2ZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgICBsZXQgbmV4dFNldHRpbmcgPSBuZXh0UHJvcHMudmlld1NldHRpbmdzLmdldChuZXh0UHJvcHMuc2V0dGluZyk7XG4gICAgICAgIGlmIChuZXh0U2V0dGluZyAhPT0gdGhpcy5wcm9wcy52aWV3U2V0dGluZ3MuZ2V0KHRoaXMucHJvcHMuc2V0dGluZykpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFjdGl2ZVRhYjogbmV4dFNldHRpbmdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuX3NldERpbWVuc2lvbnMpO1xuICAgIH1cblxuICAgIF9zZXREaW1lbnNpb25zKCkge1xuICAgICAgICBsZXQgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgICAgICBpZiAod2lkdGggIT09IHRoaXMuc3RhdGUud2lkdGgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3dpZHRofSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfY2hhbmdlVGFiKHZhbHVlLCBpc0xpbmtUbykge1xuICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMuc3RhdGUuYWN0aXZlVGFiKSByZXR1cm47XG4gICAgICAgIC8vIFBlcnNpc3QgY3VycmVudCB0YWIgaWYgZGVzaXJlZFxuXG4gICAgICAgIGlmIChpc0xpbmtUbyAhPT0gXCJcIikge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goaXNMaW5rVG8pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2V0dGluZykge1xuICAgICAgICAgICAgU2V0dGluZ3NBY3Rpb25zLmNoYW5nZVZpZXdTZXR0aW5nKHtcbiAgICAgICAgICAgICAgICBbdGhpcy5wcm9wcy5zZXR0aW5nXTogdmFsdWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2FjdGl2ZVRhYjogdmFsdWV9KTtcblxuICAgICAgICBpZiAodGhpcy5wcm9wcy5vbkNoYW5nZVRhYikgdGhpcy5wcm9wcy5vbkNoYW5nZVRhYih2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQge2NoaWxkcmVuLCBjb250ZW50Q2xhc3MsIHRhYnNDbGFzcywgc3R5bGUsIHNlZ21lbnRlZH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCBjb2xsYXBzZVRhYnMgPVxuICAgICAgICAgICAgdGhpcy5zdGF0ZS53aWR0aCA8IDkwMCAmJiBSZWFjdC5DaGlsZHJlbi5jb3VudChjaGlsZHJlbikgPiAyO1xuXG4gICAgICAgIGxldCBhY3RpdmVDb250ZW50ID0gbnVsbDtcblxuICAgICAgICBsZXQgdGFicyA9IFJlYWN0LkNoaWxkcmVuLm1hcChjaGlsZHJlbiwgKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjaGlsZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvbGxhcHNlVGFicyAmJiBjaGlsZC5wcm9wcy5kaXNhYmxlZCkgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBsZXQgaXNBY3RpdmUgPSBpbmRleCA9PT0gdGhpcy5zdGF0ZS5hY3RpdmVUYWI7XG4gICAgICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVDb250ZW50ID0gY2hpbGQucHJvcHMuY2hpbGRyZW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IGNvbGxhcHNlVGFicyxcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZSxcbiAgICAgICAgICAgICAgICBjaGFuZ2VUYWI6IHRoaXMuX2NoYW5nZVRhYi5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLmZpbHRlcihhID0+IGEgIT09IG51bGwpO1xuXG4gICAgICAgIGlmICghYWN0aXZlQ29udGVudCkge1xuICAgICAgICAgICAgYWN0aXZlQ29udGVudCA9IHRhYnNbMF0ucHJvcHMuY2hpbGRyZW47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFxuICAgICAgICAgICAgICAgICAgICAhIXRoaXMucHJvcHMuYWN0aW9uQnV0dG9ucyA/IFwid2l0aC1idXR0b25zXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsYXNzTmFtZVxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXJ2aWNlLXNlbGVjdG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bFxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbmFtZXMoXCJidXR0b24tZ3JvdXAgbm8tbWFyZ2luXCIsIHRhYnNDbGFzcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnRlZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2xsYXBzZVRhYnMgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IFwiMTVyZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWN0aXZlVGFifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3ttYXJnaW5Ub3A6IDEwLCBtYXJnaW5Cb3R0b206IDEwfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0cy1zZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmQgPSBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoYW5nZVRhYihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnRhcmdldFtpbmRdLmF0dHJpYnV0ZXNbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRhdGEtaXMtbGluay10b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhYnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYnNcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hY3Rpb25CdXR0b25zID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YWJzLWFjdGlvbi1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmFjdGlvbkJ1dHRvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbmFtZXMoXCJ0YWItY29udGVudFwiLCBjb250ZW50Q2xhc3MpfT5cbiAgICAgICAgICAgICAgICAgICAge2FjdGl2ZUNvbnRlbnR9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblRhYnMgPSBjb25uZWN0KFxuICAgIFRhYnMsXG4gICAge1xuICAgICAgICBsaXN0ZW5UbygpIHtcbiAgICAgICAgICAgIHJldHVybiBbU2V0dGluZ3NTdG9yZV07XG4gICAgICAgIH0sXG4gICAgICAgIGdldFByb3BzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHt2aWV3U2V0dGluZ3M6IFNldHRpbmdzU3RvcmUuZ2V0U3RhdGUoKS52aWV3U2V0dGluZ3N9O1xuICAgICAgICB9XG4gICAgfVxuKTtcblxuVGFicyA9IHdpdGhSb3V0ZXIoVGFicyk7XG5cbmV4cG9ydCB7VGFicywgVGFifTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTs7Ozs7Ozs7Ozs7QUFrQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQVFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVJBO0FBaUJBOzs7O0FBMUVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBREE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQWtFQTs7O0FBZUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUpBO0FBQ0E7QUFNQTtBQVRBO0FBVUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBT0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFaQTtBQWNBO0FBZEE7QUFQQTtBQTJCQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBbkNBO0FBREE7QUEwQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQWhEQTtBQXFEQTs7OztBQTdKQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFDQTtBQXVKQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFTQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9