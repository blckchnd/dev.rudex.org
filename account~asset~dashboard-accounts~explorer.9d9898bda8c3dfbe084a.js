(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ 2526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return Tab; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(388);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(730);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(855);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(771);
/* harmony import */ var alt_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(alt_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var actions_SettingsActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(713);
/* harmony import */ var stores_SettingsStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(712);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(573);
/* harmony import */ var counterpart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(counterpart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(727);
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
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    "option",
                    { value: index, "data-is-link-to": this.props.isLinkTo },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                        "span",
                        { className: "tab-title" },
                        title,
                        updatedTab ? "*" : "",
                        subText && " (",
                        subText && subText,
                        subText && ")"
                    )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudH5hc3NldH5kYXNoYm9hcmQtYWNjb3VudHN+ZXhwbG9yZXIuOWQ5ODk4YmRhOGMzZGZiZTA4NGEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvVXRpbGl0eS9UYWJzLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgY25hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gXCJhbHQtcmVhY3RcIjtcbmltcG9ydCBTZXR0aW5nc0FjdGlvbnMgZnJvbSBcImFjdGlvbnMvU2V0dGluZ3NBY3Rpb25zXCI7XG5pbXBvcnQgU2V0dGluZ3NTdG9yZSBmcm9tIFwic3RvcmVzL1NldHRpbmdzU3RvcmVcIjtcbmltcG9ydCBjb3VudGVycGFydCBmcm9tIFwiY291bnRlcnBhcnRcIjtcbmltcG9ydCB7d2l0aFJvdXRlcn0gZnJvbSBcInJlYWN0LXJvdXRlci1kb21cIjtcblxuLyoqXG4gKiAgUmVuZGVycyBhIHRhYiBsYXlvdXQsIGhhbmRsaW5nIHN3aXRjaGluZyBhbmQgb3B0aW9uYWxseSBwZXJzaXN0cyB0aGUgY3VycmVudGx5IG9wZW4gdGFiIHVzaW5nIHRoZSBTZXR0aW5nc1N0b3JlXG4gKlxuICogIHByb3BzOlxuICogICAgIHNldHRpbmc6IHVuaXF1ZSBuYW1lIHRvIGJlIHVzZWQgdG8gcmVtZW1iZXIgdGhlIGFjdGl2ZSB0YWIgb2YgdGhpcyB0YWJzIGxheW91dCxcbiAqICAgICB0YWJzQ2xhc3M6IG9wdGlvbmFsIGNsYXNzZXMgZm9yIHRoZSB0YWJzIGNvbnRhaW5lciBkaXZcbiAqICAgICBjb250ZW50Q2xhc3M6IG9wdGlvbmFsIGNsYXNzZXMgZm9yIHRoZSBjb250ZW50IGNvbnRhaW5lciBkaXZcbiAqXG4gKiAgVXNhZ2U6XG4gKlxuICogIDxUYWJzIHNldHRpbmc9XCJteVNldHRpbmdcIj5cbiAqICAgICAgPFRhYiB0aXRsZT1cImxvY2FsZS5zdHJpbmcudGl0bGUxXCI+VGFiIDEgY29udGVudDwvVGFiPlxuICogICAgICA8VGFiIHRpdGxlPVwibG9jYWxlLnN0cmluZy50aXRsZTJcIj5UYWIgMiBjb250ZW50PC9UYWI+XG4gKiAgPC9UYWJzPlxuICpcbiAqL1xuXG5jbGFzcyBUYWIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgICAgIGNoYW5nZVRhYjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgICAgIGlzQWN0aXZlOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICAgICAgICBpbmRleDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgICAgICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIGlzTGlua1RvOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBzdWJUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMub2JqZWN0LCBQcm9wVHlwZXMuc3RyaW5nXSlcbiAgICB9O1xuXG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICAgICBpbmRleDogMCxcbiAgICAgICAgY2xhc3NOYW1lOiBcIlwiLFxuICAgICAgICBpc0xpbmtUbzogXCJcIixcbiAgICAgICAgc3ViVGV4dDogbnVsbFxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCB7XG4gICAgICAgICAgICBpc0FjdGl2ZSxcbiAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgY2hhbmdlVGFiLFxuICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgICB1cGRhdGVkVGFiLFxuICAgICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgICBzdWJUZXh0XG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBsZXQgYyA9IGNuYW1lcyh7XCJpcy1hY3RpdmVcIjogaXNBY3RpdmV9LCBjbGFzc05hbWUpO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGl0bGUgPT09IFwic3RyaW5nXCIgJiYgdGl0bGUuaW5kZXhPZihcIi5cIikgPiAwKSB7XG4gICAgICAgICAgICB0aXRsZSA9IGNvdW50ZXJwYXJ0LnRyYW5zbGF0ZSh0aXRsZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkb250IHN0cmluZyBjb25jZXRlbmF0ZSBzdWJUZXh0IGRpcmVjdGx5IHdpdGhpbiB0aGUgcmVuZGVyaW5nLCBzdWJUZXh0IGNhbiBiZSBhbiBvYmplY3Qgd2l0aG91dCB0b1N0cmluZ1xuICAgICAgICAvLyBpbXBsZW1lbnRhdGlvbiwgYnV0IHZhbGlkIERPTSAobWVhbmluZywgZG9uJ3QgZG8gc3ViVGV4dCArIFwic29tZVN0cmluZ1wiXG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29sbGFwc2VkKSB7XG4gICAgICAgICAgICAvLyBpZiBzdWJUZXh0IGlzIGVtcHR5LCBkb250IHJlbmRlciBpdCwgd2UgZG9udCB3YW50IGVtcHR5IGJyYWNrZXRzIGFkZGVkXG4gICAgICAgICAgICBpZiAodHlwZW9mIHN1YlRleHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBzdWJUZXh0ID0gc3ViVGV4dC50cmltKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e2luZGV4fSBkYXRhLWlzLWxpbmstdG89e3RoaXMucHJvcHMuaXNMaW5rVG99PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0YWItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHt1cGRhdGVkVGFiID8gXCIqXCIgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgICAgICAge3N1YlRleHQgJiYgXCIgKFwifVxuICAgICAgICAgICAgICAgICAgICAgICAge3N1YlRleHQgJiYgc3ViVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdWJUZXh0ICYmIFwiKVwifVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2N9XG4gICAgICAgICAgICAgICAgb25DbGljaz17XG4gICAgICAgICAgICAgICAgICAgICFkaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBjaGFuZ2VUYWIuYmluZCh0aGlzLCBpbmRleCwgdGhpcy5wcm9wcy5pc0xpbmtUbylcbiAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGFiLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICB7dXBkYXRlZFRhYiA/IFwiKlwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB7c3ViVGV4dCAmJiA8ZGl2IGNsYXNzTmFtZT1cInRhYi1zdWJ0ZXh0XCI+e3N1YlRleHR9PC9kaXY+fVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jbGFzcyBUYWJzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgcHJvcFR5cGVzID0ge1xuICAgICAgICBzZXR0aW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBkZWZhdWx0QWN0aXZlVGFiOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBzZWdtZW50ZWQ6IFByb3BUeXBlcy5ib29sXG4gICAgfTtcblxuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGFjdGl2ZTogMCxcbiAgICAgICAgZGVmYXVsdEFjdGl2ZVRhYjogMCxcbiAgICAgICAgc2VnbWVudGVkOiB0cnVlLFxuICAgICAgICBjb250ZW50Q2xhc3M6IFwiXCIsXG4gICAgICAgIHN0eWxlOiB7fVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgYWN0aXZlVGFiOiBwcm9wcy5zZXR0aW5nXG4gICAgICAgICAgICAgICAgPyBwcm9wcy52aWV3U2V0dGluZ3MuZ2V0KHByb3BzLnNldHRpbmcsIHByb3BzLmRlZmF1bHRBY3RpdmVUYWIpXG4gICAgICAgICAgICAgICAgOiBwcm9wcy5kZWZhdWx0QWN0aXZlVGFiLFxuICAgICAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5fc2V0RGltZW5zaW9ucyA9IHRoaXMuX3NldERpbWVuc2lvbnMuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5fc2V0RGltZW5zaW9ucygpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9zZXREaW1lbnNpb25zLCB7XG4gICAgICAgICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgICAgICAgIHBhc3NpdmU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICAgICAgbGV0IG5leHRTZXR0aW5nID0gbmV4dFByb3BzLnZpZXdTZXR0aW5ncy5nZXQobmV4dFByb3BzLnNldHRpbmcpO1xuICAgICAgICBpZiAobmV4dFNldHRpbmcgIT09IHRoaXMucHJvcHMudmlld1NldHRpbmdzLmdldCh0aGlzLnByb3BzLnNldHRpbmcpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhY3RpdmVUYWI6IG5leHRTZXR0aW5nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLl9zZXREaW1lbnNpb25zKTtcbiAgICB9XG5cbiAgICBfc2V0RGltZW5zaW9ucygpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cbiAgICAgICAgaWYgKHdpZHRoICE9PSB0aGlzLnN0YXRlLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt3aWR0aH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2NoYW5nZVRhYih2YWx1ZSwgaXNMaW5rVG8pIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSB0aGlzLnN0YXRlLmFjdGl2ZVRhYikgcmV0dXJuO1xuICAgICAgICAvLyBQZXJzaXN0IGN1cnJlbnQgdGFiIGlmIGRlc2lyZWRcblxuICAgICAgICBpZiAoaXNMaW5rVG8gIT09IFwiXCIpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKGlzTGlua1RvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNldHRpbmcpIHtcbiAgICAgICAgICAgIFNldHRpbmdzQWN0aW9ucy5jaGFuZ2VWaWV3U2V0dGluZyh7XG4gICAgICAgICAgICAgICAgW3RoaXMucHJvcHMuc2V0dGluZ106IHZhbHVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHthY3RpdmVUYWI6IHZhbHVlfSk7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DaGFuZ2VUYWIpIHRoaXMucHJvcHMub25DaGFuZ2VUYWIodmFsdWUpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IHtjaGlsZHJlbiwgY29udGVudENsYXNzLCB0YWJzQ2xhc3MsIHN0eWxlLCBzZWdtZW50ZWR9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgY29sbGFwc2VUYWJzID1cbiAgICAgICAgICAgIHRoaXMuc3RhdGUud2lkdGggPCA5MDAgJiYgUmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pID4gMjtcblxuICAgICAgICBsZXQgYWN0aXZlQ29udGVudCA9IG51bGw7XG5cbiAgICAgICAgbGV0IHRhYnMgPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmICghY2hpbGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb2xsYXBzZVRhYnMgJiYgY2hpbGQucHJvcHMuZGlzYWJsZWQpIHJldHVybiBudWxsO1xuICAgICAgICAgICAgbGV0IGlzQWN0aXZlID0gaW5kZXggPT09IHRoaXMuc3RhdGUuYWN0aXZlVGFiO1xuICAgICAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ29udGVudCA9IGNoaWxkLnByb3BzLmNoaWxkcmVuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG4gICAgICAgICAgICAgICAgY29sbGFwc2VkOiBjb2xsYXBzZVRhYnMsXG4gICAgICAgICAgICAgICAgaXNBY3RpdmUsXG4gICAgICAgICAgICAgICAgY2hhbmdlVGFiOiB0aGlzLl9jaGFuZ2VUYWIuYmluZCh0aGlzKSxcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KS5maWx0ZXIoYSA9PiBhICE9PSBudWxsKTtcblxuICAgICAgICBpZiAoIWFjdGl2ZUNvbnRlbnQpIHtcbiAgICAgICAgICAgIGFjdGl2ZUNvbnRlbnQgPSB0YWJzWzBdLnByb3BzLmNoaWxkcmVuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuYW1lcyhcbiAgICAgICAgICAgICAgICAgICAgISF0aGlzLnByb3BzLmFjdGlvbkJ1dHRvbnMgPyBcIndpdGgtYnV0dG9uc1wiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbGFzc05hbWVcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VydmljZS1zZWxlY3RvclwiPlxuICAgICAgICAgICAgICAgICAgICA8dWxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y25hbWVzKFwiYnV0dG9uLWdyb3VwIG5vLW1hcmdpblwiLCB0YWJzQ2xhc3MsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWdtZW50ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29sbGFwc2VUYWJzID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IDEwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAxMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiBcIjE1cmVtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFjdGl2ZVRhYn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luVG9wOiAxMCwgbWFyZ2luQm90dG9tOiAxMH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidHMtc2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kID0gcGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGFuZ2VUYWIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50YXJnZXRbaW5kXS5hdHRyaWJ1dGVzW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkYXRhLWlzLWxpbmstdG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWJzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJzXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYWN0aW9uQnV0dG9ucyA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFicy1hY3Rpb24tYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5hY3Rpb25CdXR0b25zfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y25hbWVzKFwidGFiLWNvbnRlbnRcIiwgY29udGVudENsYXNzKX0+XG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmVDb250ZW50fVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5UYWJzID0gY29ubmVjdChcbiAgICBUYWJzLFxuICAgIHtcbiAgICAgICAgbGlzdGVuVG8oKSB7XG4gICAgICAgICAgICByZXR1cm4gW1NldHRpbmdzU3RvcmVdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9wcygpIHtcbiAgICAgICAgICAgIHJldHVybiB7dmlld1NldHRpbmdzOiBTZXR0aW5nc1N0b3JlLmdldFN0YXRlKCkudmlld1NldHRpbmdzfTtcbiAgICAgICAgfVxuICAgIH1cbik7XG5cblRhYnMgPSB3aXRoUm91dGVyKFRhYnMpO1xuXG5leHBvcnQge1RhYnMsIFRhYn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBOzs7Ozs7Ozs7OztBQWtCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQURBO0FBVUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFRQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFSQTtBQWlCQTs7OztBQXpFQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQURBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFpRUE7OztBQWVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFKQTtBQUNBO0FBTUE7QUFUQTtBQVVBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBWkE7QUFjQTtBQWRBO0FBUEE7QUEyQkE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQW5DQTtBQURBO0FBMENBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFoREE7QUFxREE7Ozs7QUE3SkE7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBSEE7QUFEQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBQ0E7QUF1SkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBU0E7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==