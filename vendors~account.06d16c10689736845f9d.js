(this["webpackJsonp"] = this["webpackJsonp"] || []).push([[31],{

/***/ 2890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoryRouter", function() { return MemoryRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prompt", function() { return Prompt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Redirect", function() { return Redirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticRouter", function() { return StaticRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__RouterContext", function() { return context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePath", function() { return generatePath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchPath", function() { return matchPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHistory", function() { return useHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLocation", function() { return useLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useParams", function() { return useParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouteMatch", function() { return useRouteMatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withRouter", function() { return withRouter; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2891);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(798);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1784);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1788);
/* harmony import */ var mini_create_react_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2892);
/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1789);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1785);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1801);
/* harmony import */ var path_to_regexp__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(path_to_regexp__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(790);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2894);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1265);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_11__);













// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext = function createNamedContext(name) {
  var context = Object(mini_create_react_context__WEBPACK_IMPORTED_MODULE_5__["default"])();
  context.displayName = name;
  return context;
};

var context =
/*#__PURE__*/
createNamedContext("Router");

/**
 * The public API for putting history on context.
 */

var Router =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        if (_this._isMounted) {
          _this.setState({
            location: location
          });
        } else {
          _this._pendingLocation = location;
        }
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  };

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Provider, {
      children: this.props.children || null,
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    });
  };

  return Router;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  Router.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
    history: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
    staticContext: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
  };

  Router.prototype.componentDidUpdate = function (prevProps) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(prevProps.history === this.props.history, "You cannot change <Router history>") : undefined;
  };
}

/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = Object(history__WEBPACK_IMPORTED_MODULE_3__["createMemoryHistory"])(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  MemoryRouter.propTypes = {
    initialEntries: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
    initialIndex: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    getUserConfirmation: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    keyLength: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node
  };

  MemoryRouter.prototype.componentDidMount = function () {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!this.props.history, "<MemoryRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { MemoryRouter as Router }`.") : undefined;
  };
}

var Lifecycle =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context) {
    !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <Prompt> outside a <Router>") : undefined : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (true) {
  var messageType = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]);
  Prompt.propTypes = {
    when: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    message: messageType.isRequired
  };
}

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = path_to_regexp__WEBPACK_IMPORTED_MODULE_8___default.a.compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context) {
    !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <Redirect> outside a <Router>") : undefined : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(prevProps.to);

        if (!Object(history__WEBPACK_IMPORTED_MODULE_3__["locationsAreEqual"])(prevLocation, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (true) {
  Redirect.propTypes = {
    push: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    from: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    to: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object]).isRequired
  };
}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp__WEBPACK_IMPORTED_MODULE_8___default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(value !== undefined, "You returned `undefined` from the `children` function of " + ("<Route" + (path ? " path=\"" + path + "\"" : "") + ">, but you ") + "should have returned a React element or `null`") : undefined;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var Route =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context$1) {
      !context$1 ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <Route> outside a <Router>") : undefined : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && children.length === 0) {
        children = null;
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  true ? evalChildrenDev(children, props, _this.props.path) : undefined : children : component ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  true ? evalChildrenDev(children, props, _this.props.path) : undefined : null);
    });
  };

  return Route;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  Route.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]),
    component: function component(props, propName) {
      if (props[propName] && !Object(react_is__WEBPACK_IMPORTED_MODULE_9__["isValidElementType"])(props[propName])) {
        return new Error("Invalid prop 'component' supplied to 'Route': the prop is not a valid React component");
      }
    },
    exact: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    path: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string)]),
    render: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
    sensitive: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    strict: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
  };

  Route.prototype.componentDidMount = function () {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.component), "You should not use <Route component> and <Route children> in the same route; <Route component> will be ignored") : undefined;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.children && !isEmptyChildren(this.props.children) && this.props.render), "You should not use <Route render> and <Route children> in the same route; <Route render> will be ignored") : undefined;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.component && this.props.render), "You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored") : undefined;
  };

  Route.prototype.componentDidUpdate = function (prevProps) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.location && !prevProps.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : undefined;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(!this.props.location && prevProps.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : undefined;
  };
}

function addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, location, {
    pathname: addLeadingSlash(basename) + location.pathname
  });
}

function stripBasename(basename, location) {
  if (!basename) return location;
  var base = addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : Object(history__WEBPACK_IMPORTED_MODULE_3__["createPath"])(location);
}

function staticHandler(methodName) {
  return function () {
      true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You cannot %s with <StaticRouter>", methodName) : undefined ;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var StaticRouter =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__["default"])(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: stripBasename(basename, Object(history__WEBPACK_IMPORTED_MODULE_3__["createLocation"])(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Router, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  StaticRouter.propTypes = {
    basename: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    context: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
    location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object])
  };

  StaticRouter.prototype.componentDidMount = function () {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!this.props.history, "<StaticRouter> ignores the history prop. To use a custom history, " + "use `import { Router }` instead of `import { StaticRouter as Router }`.") : undefined;
  };
}

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context) {
      !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <Switch> outside a <Router>") : undefined : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.forEach(_this.props.children, function (child) {
        if (match == null && react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

if (true) {
  Switch.propTypes = {
    children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
    location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
  };

  Switch.prototype.componentDidUpdate = function (prevProps) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(this.props.location && !prevProps.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.') : undefined;
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])(!(!this.props.location && prevProps.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.') : undefined;
  };
}

/**
 * A public higher-order component to access the imperative API
 */

function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_10__["default"])(props, ["wrappedComponentRef"]);

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(context.Consumer, null, function (context) {
      !context ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You should not use <" + displayName + " /> outside a <Router>") : undefined : void 0;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__["default"])({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (true) {
    C.propTypes = {
      wrappedComponentRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object])
    };
  }

  return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_11___default()(C, Component);
}

var useContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext;
function useHistory() {
  if (true) {
    !(typeof useContext === "function") ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You must use React >= 16.8 in order to use useHistory()") : undefined : void 0;
  }

  return useContext(context).history;
}
function useLocation() {
  if (true) {
    !(typeof useContext === "function") ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You must use React >= 16.8 in order to use useLocation()") : undefined : void 0;
  }

  return useContext(context).location;
}
function useParams() {
  if (true) {
    !(typeof useContext === "function") ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You must use React >= 16.8 in order to use useParams()") : undefined : void 0;
  }

  var match = useContext(context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  if (true) {
    !(typeof useContext === "function") ?  true ? Object(tiny_invariant__WEBPACK_IMPORTED_MODULE_6__["default"])(false, "You must use React >= 16.8 in order to use useRouteMatch()") : undefined : void 0;
  }

  return path ? matchPath(useLocation().pathname, path) : useContext(context).match;
}

if (true) {
  if (typeof window !== "undefined") {
    var global = window;
    var key = "__react_router_build__";
    var buildNames = {
      cjs: "CommonJS",
      esm: "ES modules",
      umd: "UMD"
    };

    if (global[key] && global[key] !== "esm") {
      var initialBuildName = buildNames[global[key]];
      var secondaryBuildName = buildNames["esm"]; // TODO: Add link to article that explains in detail how to avoid
      // loading 2 different builds.

      throw new Error("You are loading the " + secondaryBuildName + " build of React Router " + ("on a page that is already running the " + initialBuildName + " ") + "build, so things won't work right.");
    }

    global[key] = "esm";
  }
}


//# sourceMappingURL=react-router.js.map


/***/ }),

/***/ 2891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ 2892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(403);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2893);
/* harmony import */ var _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(798);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gud__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(835);
/* harmony import */ var gud__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gud__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1788);






var MAX_SIGNED_31_BIT_INT = 1073741823;

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + gud__WEBPACK_IMPORTED_MODULE_3___default()() + '__';

  var Provider =
  /*#__PURE__*/
  function (_Component) {
    _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Provider, _Component);

    function Provider() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (true) {
            Object(tiny_warning__WEBPACK_IMPORTED_MODULE_4__["default"])((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: ' + changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired, _Provider$childContex);

  var Consumer =
  /*#__PURE__*/
  function (_Component2) {
    _babel_runtime_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1___default()(Consumer, _Component2);

    function Consumer() {
      var _this2;

      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object, _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

var index = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext || createReactContext;

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ 2893:
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ 2894:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ 2902:
/***/ (function(module, exports) {

module.exports = {
	compareTwoStrings,
	findBestMatch
};

function compareTwoStrings (str1, str2) {
	if (!str1.length && !str2.length) return 1;                    // if both are empty strings
	if (!str1.length || !str2.length) return 0;                    // if only one is empty string
	if (str1.toUpperCase() === str2.toUpperCase()) return 1;       // identical
	if (str1.length === 1 && str2.length === 1) return 0;          // both are 1-letter strings

	const pairs1 = wordLetterPairs(str1);
	const pairs2 = wordLetterPairs(str2);
	const union = pairs1.length + pairs2.length;
	let intersection = 0;
	pairs1.forEach(pair1 => {
		for (let i = 0, pair2; pair2 = pairs2[i]; i++) {
			if (pair1 !== pair2) continue;
			intersection++;
			pairs2.splice(i, 1);
			break;
		}
	});
	return intersection * 2 / union;
}

function findBestMatch (mainString, targetStrings) {
	if (!areArgsValid(mainString, targetStrings)) throw new Error('Bad arguments: First argument should be a string, second should be an array of strings');
	const ratings = targetStrings.map(target => ({ target, rating: compareTwoStrings(mainString, target) }));
	const bestMatch = Array.from(ratings).sort((a, b) => b.rating - a.rating)[0];
	return { ratings, bestMatch };
}

function flattenDeep (arr) {
	return Array.isArray(arr) ? arr.reduce((a, b) => a.concat(flattenDeep(b)) , []) : [arr];
}

function areArgsValid (mainString, targetStrings) {
	if (typeof mainString !== 'string') return false;
	if (!Array.isArray(targetStrings)) return false;
	if (!targetStrings.length) return false;
	if (targetStrings.find(s => typeof s !== 'string')) return false;
	return true;
}

function letterPairs (str) {
	const pairs = [];
	for (let i = 0, max = str.length - 1; i < max; i++) pairs[i] = str.substring(i, i + 2);
	return pairs;
}

function wordLetterPairs (str) {
	const pairs = str.toUpperCase().split(' ').map(letterPairs);
	return flattenDeep(pairs);
}


/***/ }),

/***/ 2913:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1986);
/* harmony import */ var _baseMean_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2914);



/**
 * This method is like `_.mean` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the value to be averaged.
 * The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.7.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {number} Returns the mean.
 * @example
 *
 * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
 *
 * _.meanBy(objects, function(o) { return o.n; });
 * // => 5
 *
 * // The `_.property` iteratee shorthand.
 * _.meanBy(objects, 'n');
 * // => 5
 */
function meanBy(array, iteratee) {
  return Object(_baseMean_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array, Object(_baseIteratee_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, 2));
}

/* harmony default export */ __webpack_exports__["default"] = (meanBy);


/***/ }),

/***/ 2914:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseSum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2915);


/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/**
 * The base implementation of `_.mean` and `_.meanBy` without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {number} Returns the mean.
 */
function baseMean(array, iteratee) {
  var length = array == null ? 0 : array.length;
  return length ? (Object(_baseSum_js__WEBPACK_IMPORTED_MODULE_0__["default"])(array, iteratee) / length) : NAN;
}

/* harmony default export */ __webpack_exports__["default"] = (baseMean);


/***/ }),

/***/ 2915:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * The base implementation of `_.sum` and `_.sumBy` without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {number} Returns the sum.
 */
function baseSum(array, iteratee) {
  var result,
      index = -1,
      length = array.length;

  while (++index < length) {
    var current = iteratee(array[index]);
    if (current !== undefined) {
      result = result === undefined ? current : (result + current);
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (baseSum);


/***/ }),

/***/ 2916:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1986);
/* harmony import */ var _baseSum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2915);



/**
 * This method is like `_.sum` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the value to be summed.
 * The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {number} Returns the sum.
 * @example
 *
 * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
 *
 * _.sumBy(objects, function(o) { return o.n; });
 * // => 20
 *
 * // The `_.property` iteratee shorthand.
 * _.sumBy(objects, 'n');
 * // => 20
 */
function sumBy(array, iteratee) {
  return (array && array.length)
    ? Object(_baseSum_js__WEBPACK_IMPORTED_MODULE_1__["default"])(array, Object(_baseIteratee_js__WEBPACK_IMPORTED_MODULE_0__["default"])(iteratee, 2))
    : 0;
}

/* harmony default export */ __webpack_exports__["default"] = (sumBy);


/***/ }),

/***/ 2917:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(659);
/* harmony import */ var _createAggregator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2918);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an object composed of keys generated from the results of running
 * each element of `collection` thru `iteratee`. The order of grouped values
 * is determined by the order they occur in `collection`. The corresponding
 * value of each key is an array of elements responsible for generating the
 * key. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee to transform keys.
 * @returns {Object} Returns the composed aggregate object.
 * @example
 *
 * _.groupBy([6.1, 4.2, 6.3], Math.floor);
 * // => { '4': [4.2], '6': [6.1, 6.3] }
 *
 * // The `_.property` iteratee shorthand.
 * _.groupBy(['one', 'two', 'three'], 'length');
 * // => { '3': ['one', 'two'], '5': ['three'] }
 */
var groupBy = Object(_createAggregator_js__WEBPACK_IMPORTED_MODULE_1__["default"])(function(result, value, key) {
  if (hasOwnProperty.call(result, key)) {
    result[key].push(value);
  } else {
    Object(_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__["default"])(result, key, [value]);
  }
});

/* harmony default export */ __webpack_exports__["default"] = (groupBy);


/***/ }),

/***/ 2918:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _arrayAggregator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2919);
/* harmony import */ var _baseAggregator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2920);
/* harmony import */ var _baseIteratee_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1986);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(669);





/**
 * Creates a function like `_.groupBy`.
 *
 * @private
 * @param {Function} setter The function to set accumulator values.
 * @param {Function} [initializer] The accumulator object initializer.
 * @returns {Function} Returns the new aggregator function.
 */
function createAggregator(setter, initializer) {
  return function(collection, iteratee) {
    var func = Object(_isArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(collection) ? _arrayAggregator_js__WEBPACK_IMPORTED_MODULE_0__["default"] : _baseAggregator_js__WEBPACK_IMPORTED_MODULE_1__["default"],
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, Object(_baseIteratee_js__WEBPACK_IMPORTED_MODULE_2__["default"])(iteratee, 2), accumulator);
  };
}

/* harmony default export */ __webpack_exports__["default"] = (createAggregator);


/***/ }),

/***/ 2919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

/* harmony default export */ __webpack_exports__["default"] = (arrayAggregator);


/***/ }),

/***/ 2920:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _baseEach_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1981);


/**
 * Aggregates elements of `collection` on `accumulator` with keys transformed
 * by `iteratee` and values set by `setter`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function baseAggregator(collection, setter, iteratee, accumulator) {
  Object(_baseEach_js__WEBPACK_IMPORTED_MODULE_0__["default"])(collection, function(value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

/* harmony default export */ __webpack_exports__["default"] = (baseAggregator);


/***/ }),

/***/ 2926:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v6.2.0 (2018-10-17)

 (c) 2014 Highsoft AS
 Authors: Jon Arild Nygard / Oystein Moseng

 License: www.highcharts.com/license
*/
(function(v){ true&&module.exports?module.exports=v: true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return v}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined})(function(v){var H=function(b){var v=b.each,B=b.extend,E=b.isArray,t=b.isObject,p=b.isNumber,G=b.merge,z=b.pick,l=b.reduce;return{getColor:function(n,m){var q=m.index,f=m.mapOptionsToLevel,l=m.parentColor,y=m.parentColorIndex,F=m.series,d=m.colors,A=m.siblings,r=F.points,x,t,p,C;if(n){r=r[n.i];n=f[n.level]||{};if(x=r&&n.colorByPoint)p=r.index%(d?
d.length:F.chart.options.chart.colorCount),t=d&&d[p];d=r&&r.options.color;x=n&&n.color;if(f=l)f=(f=n&&n.colorVariation)&&"brightness"===f.key?b.color(l).brighten(q/A*f.to).get():l;x=z(d,x,t,f,F.color);C=z(r&&r.options.colorIndex,n&&n.colorIndex,p,y,m.colorIndex)}return{color:x,colorIndex:C}},getLevelOptions:function(b){var m=null,q,f,n,y;if(t(b))for(m={},n=p(b.from)?b.from:1,y=b.levels,f={},q=t(b.defaults)?b.defaults:{},E(y)&&(f=l(y,function(b,d){var f,m;t(d)&&p(d.level)&&(m=G({},d),f="boolean"===
typeof m.levelIsConstant?m.levelIsConstant:q.levelIsConstant,delete m.levelIsConstant,delete m.level,d=d.level+(f?0:n-1),t(b[d])?B(b[d],m):b[d]=m);return b},{})),y=p(b.to)?b.to:1,b=0;b<=y;b++)m[b]=G({},q,t(f[b])?f[b]:{});return m},setTreeValues:function m(b,f){var l=f.before,q=f.idRoot,t=f.mapIdToNode[q],d=f.points[b.i],p=d&&d.options||{},r=0,x=[];B(b,{levelDynamic:b.level-(("boolean"===typeof f.levelIsConstant?f.levelIsConstant:1)?0:t.level),name:z(d&&d.name,""),visible:q===b.id||("boolean"===typeof f.visible?
f.visible:!1)});"function"===typeof l&&(b=l(b,f));v(b.children,function(d,l){var q=B({},f);B(q,{index:l,siblings:b.children.length,visible:b.visible});d=m(d,q);x.push(d);d.visible&&(r+=d.val)});b.visible=0<r||b.visible;l=z(p.value,r);B(b,{children:x,childrenTotal:r,isLeaf:b.visible&&!r,val:l});return b},updateRootId:function(b){var l;t(b)&&(l=t(b.options)?b.options:{},l=z(b.rootNode,l.rootId,""),t(b.userOptions)&&(b.userOptions.rootId=l),b.rootNode=l);return l}}}(v);(function(b,v){var B=b.seriesType,
E=b.seriesTypes,t=b.map,p=b.merge,G=b.extend,z=b.noop,l=b.each,n=v.getColor,m=v.getLevelOptions,q=b.grep,f=b.isArray,H=b.isNumber,y=b.isObject,F=b.isString,d=b.pick,A=b.Series,r=b.stableSort,x=b.Color,J=function(a,c,e){e=e||this;b.objectEach(a,function(b,g){c.call(e,b,g,a)})},I=b.reduce,C=function(a,c,e){e=e||this;a=c.call(e,a);!1!==a&&C(a,c,e)},K=v.updateRootId;B("treemap","scatter",{showInLegend:!1,marker:!1,colorByPoint:!1,dataLabels:{enabled:!0,defer:!1,verticalAlign:"middle",formatter:function(){return this.point.name||
this.point.id},inside:!0},tooltip:{headerFormat:"",pointFormat:"\x3cb\x3e{point.name}\x3c/b\x3e: {point.value}\x3cbr/\x3e"},ignoreHiddenPoint:!0,layoutAlgorithm:"sliceAndDice",layoutStartingDirection:"vertical",alternateStartingDirection:!1,levelIsConstant:!0,drillUpButton:{position:{align:"right",x:-10,y:10}},borderColor:"#e6e6e6",borderWidth:1,opacity:.15,states:{hover:{borderColor:"#999999",brightness:E.heatmap?0:.1,halo:!1,opacity:.75,shadow:!1}}},{pointArrayMap:["value"],directTouch:!0,optionalAxis:"colorAxis",
getSymbol:z,parallelArrays:["x","y","value","colorValue"],colorKey:"colorValue",trackerGroups:["group","dataLabelsGroup"],getListOfParents:function(a,c){a=f(a)?a:[];var e=f(c)?c:[];c=I(a,function(a,c,e){c=d(c.parent,"");void 0===a[c]&&(a[c]=[]);a[c].push(e);return a},{"":[]});J(c,function(a,c,h){""!==c&&-1===b.inArray(c,e)&&(l(a,function(a){h[""].push(a)}),delete h[c])});return c},getTree:function(){var a=t(this.data,function(a){return a.id}),a=this.getListOfParents(this.data,a);this.nodeMap=[];return this.buildNode("",
-1,0,a,null)},init:function(a,c){var e=b.colorSeriesMixin;b.colorSeriesMixin&&(this.translateColors=e.translateColors,this.colorAttribs=e.colorAttribs,this.axisTypes=e.axisTypes);A.prototype.init.call(this,a,c);this.options.allowDrillToNode&&b.addEvent(this,"click",this.onClickDrillToNode)},buildNode:function(a,c,e,b,g){var h=this,w=[],k=h.points[c],d=0,f;l(b[a]||[],function(c){f=h.buildNode(h.points[c].id,c,e+1,b,a);d=Math.max(f.height+1,d);w.push(f)});c={id:a,i:c,children:w,height:d,level:e,parent:g,
visible:!1};h.nodeMap[c.id]=c;k&&(k.node=c);return c},setTreeValues:function(a){var c=this,e=c.options,b=c.nodeMap[c.rootNode],e="boolean"===typeof e.levelIsConstant?e.levelIsConstant:!0,g=0,h=[],D,k=c.points[a.i];l(a.children,function(a){a=c.setTreeValues(a);h.push(a);a.ignore||(g+=a.val)});r(h,function(a,c){return a.sortIndex-c.sortIndex});D=d(k&&k.options.value,g);k&&(k.value=D);G(a,{children:h,childrenTotal:g,ignore:!(d(k&&k.visible,!0)&&0<D),isLeaf:a.visible&&!g,levelDynamic:a.level-(e?0:b.level),
name:d(k&&k.name,""),sortIndex:d(k&&k.sortIndex,-D),val:D});return a},calculateChildrenAreas:function(a,c){var e=this,b=e.options,g=e.mapOptionsToLevel[a.level+1],h=d(e[g&&g.layoutAlgorithm]&&g.layoutAlgorithm,b.layoutAlgorithm),D=b.alternateStartingDirection,k=[];a=q(a.children,function(a){return!a.ignore});g&&g.layoutStartingDirection&&(c.direction="vertical"===g.layoutStartingDirection?0:1);k=e[h](c,a);l(a,function(a,b){b=k[b];a.values=p(b,{val:a.childrenTotal,direction:D?1-c.direction:c.direction});
a.pointValues=p(b,{x:b.x/e.axisRatio,width:b.width/e.axisRatio});a.children.length&&e.calculateChildrenAreas(a,a.values)})},setPointValues:function(){var a=this,c=a.xAxis,e=a.yAxis;l(a.points,function(b){var g=b.node,h=g.pointValues,w,k,d;d=(a.pointAttribs(b)["stroke-width"]||0)%2/2;h&&g.visible?(g=Math.round(c.translate(h.x,0,0,0,1))-d,w=Math.round(c.translate(h.x+h.width,0,0,0,1))-d,k=Math.round(e.translate(h.y,0,0,0,1))-d,h=Math.round(e.translate(h.y+h.height,0,0,0,1))-d,b.shapeType="rect",b.shapeArgs=
{x:Math.min(g,w),y:Math.min(k,h),width:Math.abs(w-g),height:Math.abs(h-k)},b.plotX=b.shapeArgs.x+b.shapeArgs.width/2,b.plotY=b.shapeArgs.y+b.shapeArgs.height/2):(delete b.plotX,delete b.plotY)})},setColorRecursive:function(a,c,e,b,g){var h=this,d=h&&h.chart,d=d&&d.options&&d.options.colors,k;if(a){k=n(a,{colors:d,index:b,mapOptionsToLevel:h.mapOptionsToLevel,parentColor:c,parentColorIndex:e,series:h,siblings:g});if(c=h.points[a.i])c.color=k.color,c.colorIndex=k.colorIndex;l(a.children||[],function(c,
b){h.setColorRecursive(c,k.color,k.colorIndex,b,a.children.length)})}},algorithmGroup:function(a,c,b,d){this.height=a;this.width=c;this.plot=d;this.startDirection=this.direction=b;this.lH=this.nH=this.lW=this.nW=this.total=0;this.elArr=[];this.lP={total:0,lH:0,nH:0,lW:0,nW:0,nR:0,lR:0,aspectRatio:function(a,c){return Math.max(a/c,c/a)}};this.addElement=function(a){this.lP.total=this.elArr[this.elArr.length-1];this.total+=a;0===this.direction?(this.lW=this.nW,this.lP.lH=this.lP.total/this.lW,this.lP.lR=
this.lP.aspectRatio(this.lW,this.lP.lH),this.nW=this.total/this.height,this.lP.nH=this.lP.total/this.nW,this.lP.nR=this.lP.aspectRatio(this.nW,this.lP.nH)):(this.lH=this.nH,this.lP.lW=this.lP.total/this.lH,this.lP.lR=this.lP.aspectRatio(this.lP.lW,this.lH),this.nH=this.total/this.width,this.lP.nW=this.lP.total/this.nH,this.lP.nR=this.lP.aspectRatio(this.lP.nW,this.nH));this.elArr.push(a)};this.reset=function(){this.lW=this.nW=0;this.elArr=[];this.total=0}},algorithmCalcPoints:function(a,c,b,d){var e,
h,w,k,f=b.lW,m=b.lH,u=b.plot,n,r=0,t=b.elArr.length-1;c?(f=b.nW,m=b.nH):n=b.elArr[b.elArr.length-1];l(b.elArr,function(a){if(c||r<t)0===b.direction?(e=u.x,h=u.y,w=f,k=a/w):(e=u.x,h=u.y,k=m,w=a/k),d.push({x:e,y:h,width:w,height:k}),0===b.direction?u.y+=k:u.x+=w;r+=1});b.reset();0===b.direction?b.width-=f:b.height-=m;u.y=u.parent.y+(u.parent.height-b.height);u.x=u.parent.x+(u.parent.width-b.width);a&&(b.direction=1-b.direction);c||b.addElement(n)},algorithmLowAspectRatio:function(a,b,e){var c=[],d=
this,h,f={x:b.x,y:b.y,parent:b},k=0,m=e.length-1,n=new this.algorithmGroup(b.height,b.width,b.direction,f);l(e,function(e){h=e.val/b.val*b.height*b.width;n.addElement(h);n.lP.nR>n.lP.lR&&d.algorithmCalcPoints(a,!1,n,c,f);k===m&&d.algorithmCalcPoints(a,!0,n,c,f);k+=1});return c},algorithmFill:function(a,b,e){var c=[],d,h=b.direction,f=b.x,k=b.y,m=b.width,n=b.height,r,t,p,q;l(e,function(e){d=e.val/b.val*b.height*b.width;r=f;t=k;0===h?(q=n,p=d/q,m-=p,f+=p):(p=m,q=d/p,n-=q,k+=q);c.push({x:r,y:t,width:p,
height:q});a&&(h=1-h)});return c},strip:function(a,b){return this.algorithmLowAspectRatio(!1,a,b)},squarified:function(a,b){return this.algorithmLowAspectRatio(!0,a,b)},sliceAndDice:function(a,b){return this.algorithmFill(!0,a,b)},stripes:function(a,b){return this.algorithmFill(!1,a,b)},translate:function(){var a=this,b=a.options,e=K(a),d,g;A.prototype.translate.call(a);g=a.tree=a.getTree();d=a.nodeMap[e];a.mapOptionsToLevel=m({from:d.level+1,levels:b.levels,to:g.height,defaults:{levelIsConstant:a.options.levelIsConstant,
colorByPoint:b.colorByPoint}});""===e||d&&d.children.length||(a.drillToNode("",!1),e=a.rootNode,d=a.nodeMap[e]);C(a.nodeMap[a.rootNode],function(b){var c=!1,e=b.parent;b.visible=!0;if(e||""===e)c=a.nodeMap[e];return c});C(a.nodeMap[a.rootNode].children,function(a){var b=!1;l(a,function(a){a.visible=!0;a.children.length&&(b=(b||[]).concat(a.children))});return b});a.setTreeValues(g);a.axisRatio=a.xAxis.len/a.yAxis.len;a.nodeMap[""].pointValues=e={x:0,y:0,width:100,height:100};a.nodeMap[""].values=
e=p(e,{width:e.width*a.axisRatio,direction:"vertical"===b.layoutStartingDirection?0:1,val:g.val});a.calculateChildrenAreas(g,e);a.colorAxis?a.translateColors():b.colorByPoint||a.setColorRecursive(a.tree);b.allowDrillToNode&&(b=d.pointValues,a.xAxis.setExtremes(b.x,b.x+b.width,!1),a.yAxis.setExtremes(b.y,b.y+b.height,!1),a.xAxis.setScale(),a.yAxis.setScale());a.setPointValues()},drawDataLabels:function(){var a=this,b=a.mapOptionsToLevel,e=q(a.points,function(a){return a.node.visible}),d,g;l(e,function(c){g=
b[c.node.level];d={style:{}};c.node.isLeaf||(d.enabled=!1);g&&g.dataLabels&&(d=p(d,g.dataLabels),a._hasPointLabels=!0);c.shapeArgs&&(d.style.width=c.shapeArgs.width,c.dataLabel&&c.dataLabel.css({width:c.shapeArgs.width+"px"}));c.dlOptions=p(d,c.options.dataLabels)});A.prototype.drawDataLabels.call(this)},alignDataLabel:function(a){E.column.prototype.alignDataLabel.apply(this,arguments);a.dataLabel&&a.dataLabel.attr({zIndex:(a.node.zIndex||0)+1})},pointAttribs:function(a,b){var c=y(this.mapOptionsToLevel)?
this.mapOptionsToLevel:{},f=a&&c[a.node.level]||{},c=this.options,g=b&&c.states[b]||{},h=a&&a.getClassName()||"";a={stroke:a&&a.borderColor||f.borderColor||g.borderColor||c.borderColor,"stroke-width":d(a&&a.borderWidth,f.borderWidth,g.borderWidth,c.borderWidth),dashstyle:a&&a.borderDashStyle||f.borderDashStyle||g.borderDashStyle||c.borderDashStyle,fill:a&&a.color||this.color};-1!==h.indexOf("highcharts-above-level")?(a.fill="none",a["stroke-width"]=0):-1!==h.indexOf("highcharts-internal-node-interactive")?
(b=d(g.opacity,c.opacity),a.fill=x(a.fill).setOpacity(b).get(),a.cursor="pointer"):-1!==h.indexOf("highcharts-internal-node")?a.fill="none":b&&(a.fill=x(a.fill).brighten(g.brightness).get());return a},drawPoints:function(){var a=this,b=q(a.points,function(a){return a.node.visible});l(b,function(b){var c="level-group-"+b.node.levelDynamic;a[c]||(a[c]=a.chart.renderer.g(c).attr({zIndex:1E3-b.node.levelDynamic}).add(a.group));b.group=a[c]});E.column.prototype.drawPoints.call(this);a.options.allowDrillToNode&&
l(b,function(b){b.graphic&&(b.drillId=a.options.interactByLeaf?a.drillToByLeaf(b):a.drillToByGroup(b))})},onClickDrillToNode:function(a){var b=(a=a.point)&&a.drillId;F(b)&&(a.setState(""),this.drillToNode(b))},drillToByGroup:function(a){var b=!1;1!==a.node.level-this.nodeMap[this.rootNode].level||a.node.isLeaf||(b=a.id);return b},drillToByLeaf:function(a){var b=!1;if(a.node.parent!==this.rootNode&&a.node.isLeaf)for(a=a.node;!b;)a=this.nodeMap[a.parent],a.parent===this.rootNode&&(b=a.id);return b},
drillUp:function(){var a=this.nodeMap[this.rootNode];a&&F(a.parent)&&this.drillToNode(a.parent)},drillToNode:function(a,b){var c=this.nodeMap[a];this.idPreviousRoot=this.rootNode;this.rootNode=a;""===a?this.drillUpButton=this.drillUpButton.destroy():this.showDrillUpButton(c&&c.name||a);this.isDirty=!0;d(b,!0)&&this.chart.redraw()},showDrillUpButton:function(a){var b=this;a=a||"\x3c Back";var d=b.options.drillUpButton,f,g;d.text&&(a=d.text);this.drillUpButton?(this.drillUpButton.placed=!1,this.drillUpButton.attr({text:a}).align()):
(g=(f=d.theme)&&f.states,this.drillUpButton=this.chart.renderer.button(a,null,null,function(){b.drillUp()},f,g&&g.hover,g&&g.select).addClass("highcharts-drillup-button").attr({align:d.position.align,zIndex:7}).add().align(d.position,!1,d.relativeTo||"plotBox"))},buildKDTree:z,drawLegendSymbol:b.LegendSymbolMixin.drawRectangle,getExtremes:function(){A.prototype.getExtremes.call(this,this.colorValueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;A.prototype.getExtremes.call(this)},getExtremesFromAll:!0,
bindAxes:function(){var a={endOnTick:!1,gridLineWidth:0,lineWidth:0,min:0,dataMin:0,minPadding:0,max:100,dataMax:100,maxPadding:0,startOnTick:!1,title:null,tickPositions:[]};A.prototype.bindAxes.call(this);b.extend(this.yAxis.options,a);b.extend(this.xAxis.options,a)},utils:{recursive:C,reduce:I}},{getClassName:function(){var a=b.Point.prototype.getClassName.call(this),c=this.series,e=c.options;this.node.level<=c.nodeMap[c.rootNode].level?a+=" highcharts-above-level":this.node.isLeaf||d(e.interactByLeaf,
!e.allowDrillToNode)?this.node.isLeaf||(a+=" highcharts-internal-node"):a+=" highcharts-internal-node-interactive";return a},isValid:function(){return this.id||H(this.value)},setState:function(a){b.Point.prototype.setState.call(this,a);this.graphic&&this.graphic.attr({zIndex:"hover"===a?1:0})},setVisible:E.pie.prototype.pointClass.prototype.setVisible})})(v,H)});
//# sourceMappingURL=treemap.js.map


/***/ }),

/***/ 2927:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*
 Highcharts JS v6.2.0 (2018-10-17)

 (c) 2009-2018 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(k){ true&&module.exports?module.exports=k: true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return k}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined})(function(k){(function(b){var t=b.addEvent,h=b.Axis,k=b.Chart,m=b.color,q,g=b.each,r=b.extend,p=b.isNumber,e=b.Legend,c=b.LegendSymbolMixin,x=b.noop,w=b.merge,u=b.pick;b.ColorAxis||(q=b.ColorAxis=function(){this.init.apply(this,arguments)},r(q.prototype,h.prototype),r(q.prototype,{defaultColorAxisOptions:{lineWidth:0,minPadding:0,maxPadding:0,gridLineWidth:1,
tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{overflow:"justify",rotation:0},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0},keepProps:["legendGroup","legendItemHeight","legendItemWidth","legendItem","legendSymbol"].concat(h.prototype.keepProps),init:function(a,d){var f="vertical"!==a.options.legend.layout,n;this.coll="colorAxis";n=w(this.defaultColorAxisOptions,{side:f?2:1,reversed:!f},d,{opposite:!f,
showEmpty:!1,title:null,visible:a.options.legend.enabled});h.prototype.init.call(this,a,n);d.dataClasses&&this.initDataClasses(d);this.initStops();this.horiz=f;this.zoomEnabled=!1;this.defaultLegendLength=200},initDataClasses:function(a){var d=this.chart,f,n=0,l=d.options.chart.colorCount,b=this.options,e=a.dataClasses.length;this.dataClasses=f=[];this.legendItems=[];g(a.dataClasses,function(a,c){a=w(a);f.push(a);a.color||("category"===b.dataClassColor?(c=d.options.colors,l=c.length,a.color=c[n],
a.colorIndex=n,n++,n===l&&(n=0)):a.color=m(b.minColor).tweenTo(m(b.maxColor),2>e?.5:c/(e-1)))})},setTickPositions:function(){if(!this.dataClasses)return h.prototype.setTickPositions.call(this)},initStops:function(){this.stops=this.options.stops||[[0,this.options.minColor],[1,this.options.maxColor]];g(this.stops,function(a){a.color=m(a[1])})},setOptions:function(a){h.prototype.setOptions.call(this,a);this.options.crosshair=this.options.marker},setAxisSize:function(){var a=this.legendSymbol,d=this.chart,
f=d.options.legend||{},n,l;a?(this.left=f=a.attr("x"),this.top=n=a.attr("y"),this.width=l=a.attr("width"),this.height=a=a.attr("height"),this.right=d.chartWidth-f-l,this.bottom=d.chartHeight-n-a,this.len=this.horiz?l:a,this.pos=this.horiz?f:n):this.len=(this.horiz?f.symbolWidth:f.symbolHeight)||this.defaultLegendLength},normalizedValue:function(a){this.isLog&&(a=this.val2lin(a));return 1-(this.max-a)/(this.max-this.min||1)},toColor:function(a,d){var f=this.stops,n,l,b=this.dataClasses,e,c;if(b)for(c=
b.length;c--;){if(e=b[c],n=e.from,f=e.to,(void 0===n||a>=n)&&(void 0===f||a<=f)){l=e.color;d&&(d.dataClass=c,d.colorIndex=e.colorIndex);break}}else{a=this.normalizedValue(a);for(c=f.length;c--&&!(a>f[c][0]););n=f[c]||f[c+1];f=f[c+1]||n;a=1-(f[0]-a)/(f[0]-n[0]||1);l=n.color.tweenTo(f.color,a)}return l},getOffset:function(){var a=this.legendGroup,d=this.chart.axisOffset[this.side];a&&(this.axisParent=a,h.prototype.getOffset.call(this),this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),
this.chart.axisOffset[this.side]=d)},setLegendColor:function(){var a,d=this.reversed;a=d?1:0;d=d?0:1;a=this.horiz?[a,0,d,0]:[0,d,0,a];this.legendColor={linearGradient:{x1:a[0],y1:a[1],x2:a[2],y2:a[3]},stops:this.stops}},drawLegendSymbol:function(a,d){var f=a.padding,b=a.options,l=this.horiz,c=u(b.symbolWidth,l?this.defaultLegendLength:12),e=u(b.symbolHeight,l?12:this.defaultLegendLength),g=u(b.labelPadding,l?16:30),b=u(b.itemDistance,10);this.setLegendColor();d.legendSymbol=this.chart.renderer.rect(0,
a.baseline-11,c,e).attr({zIndex:1}).add(d.legendGroup);this.legendItemWidth=c+f+(l?b:g);this.legendItemHeight=e+f+(l?g:0)},setState:function(a){g(this.series,function(d){d.setState(a)})},visible:!0,setVisible:x,getSeriesExtremes:function(){var a=this.series,d=a.length;this.dataMin=Infinity;for(this.dataMax=-Infinity;d--;)a[d].getExtremes(),void 0!==a[d].valueMin&&(this.dataMin=Math.min(this.dataMin,a[d].valueMin),this.dataMax=Math.max(this.dataMax,a[d].valueMax))},drawCrosshair:function(a,d){var f=
d&&d.plotX,b=d&&d.plotY,c,e=this.pos,g=this.len;d&&(c=this.toPixels(d[d.series.colorKey]),c<e?c=e-2:c>e+g&&(c=e+g+2),d.plotX=c,d.plotY=this.len-c,h.prototype.drawCrosshair.call(this,a,d),d.plotX=f,d.plotY=b,this.cross&&!this.cross.addedToColorAxis&&this.legendGroup&&(this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup),this.cross.addedToColorAxis=!0,this.cross.attr({fill:this.crosshair.color})))},getPlotLinePath:function(a,d,f,b,c){return p(c)?this.horiz?["M",c-4,this.top-6,"L",
c+4,this.top-6,c,this.top,"Z"]:["M",this.left,c,"L",this.left-6,c+6,this.left-6,c-6,"Z"]:h.prototype.getPlotLinePath.call(this,a,d,f,b)},update:function(a,d){var c=this.chart,b=c.legend;g(this.series,function(a){a.isDirtyData=!0});a.dataClasses&&b.allItems&&(g(b.allItems,function(a){a.isDataClass&&a.legendGroup&&a.legendGroup.destroy()}),c.isDirtyLegend=!0);c.options[this.coll]=w(this.userOptions,a);h.prototype.update.call(this,a,d);this.legendItem&&(this.setLegendColor(),b.colorizeItem(this,!0))},
remove:function(){this.legendItem&&this.chart.legend.destroyItem(this);h.prototype.remove.call(this)},getDataClassLegendSymbols:function(){var a=this,d=this.chart,f=this.legendItems,e=d.options.legend,l=e.valueDecimals,q=e.valueSuffix||"",h;f.length||g(this.dataClasses,function(e,n){var m=!0,p=e.from,k=e.to;h="";void 0===p?h="\x3c ":void 0===k&&(h="\x3e ");void 0!==p&&(h+=b.numberFormat(p,l)+q);void 0!==p&&void 0!==k&&(h+=" - ");void 0!==k&&(h+=b.numberFormat(k,l)+q);f.push(r({chart:d,name:h,options:{},
drawLegendSymbol:c.drawRectangle,visible:!0,setState:x,isDataClass:!0,setVisible:function(){m=this.visible=!m;g(a.series,function(a){g(a.points,function(a){a.dataClass===n&&a.setVisible(m)})});d.legend.colorizeItem(this,m)}},e))});return f},name:""}),g(["fill","stroke"],function(a){b.Fx.prototype[a+"Setter"]=function(){this.elem.attr(a,m(this.start).tweenTo(m(this.end),this.pos),null,!0)}}),t(k,"afterGetAxes",function(){var a=this.options.colorAxis;this.colorAxis=[];a&&new q(this,a)}),t(e,"afterGetAllItems",
function(a){var d=[],c=this.chart.colorAxis[0];c&&c.options&&c.options.showInLegend&&(c.options.dataClasses?d=c.getDataClassLegendSymbols():d.push(c),g(c.series,function(c){b.erase(a.allItems,c)}));for(c=d.length;c--;)a.allItems.unshift(d[c])}),t(e,"afterColorizeItem",function(a){a.visible&&a.item.legendColor&&a.item.legendSymbol.attr({fill:a.item.legendColor})}),t(e,"afterUpdate",function(a,c,b){this.chart.colorAxis[0]&&this.chart.colorAxis[0].update({},b)}))})(k);(function(b){var k=b.defined,h=
b.each,v=b.noop,m=b.seriesTypes;b.colorPointMixin={isValid:function(){return null!==this.value&&Infinity!==this.value&&-Infinity!==this.value},setVisible:function(b){var g=this,q=b?"show":"hide";g.visible=!!b;h(["graphic","dataLabel"],function(b){if(g[b])g[b][q]()})},setState:function(h){b.Point.prototype.setState.call(this,h);this.graphic&&this.graphic.attr({zIndex:"hover"===h?1:0})}};b.colorSeriesMixin={pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],optionalAxis:"colorAxis",trackerGroups:["group",
"markerGroup","dataLabelsGroup"],getSymbol:v,parallelArrays:["x","y","value"],colorKey:"value",pointAttribs:m.column.prototype.pointAttribs,translateColors:function(){var b=this,g=this.options.nullColor,k=this.colorAxis,m=this.colorKey;h(this.data,function(e){var c=e[m];if(c=e.options.color||(e.isNull?g:k&&void 0!==c?k.toColor(c,e):e.color||b.color))e.color=c})},colorAttribs:function(b){var g={};k(b.color)&&(g[this.colorProp||"fill"]=b.color);return g}}})(k);(function(b){var k=b.colorPointMixin,h=
b.each,v=b.merge,m=b.noop,q=b.pick,g=b.Series,r=b.seriesType,p=b.seriesTypes;r("heatmap","scatter",{animation:!1,borderWidth:0,nullColor:"#f7f7f7",dataLabels:{formatter:function(){return this.point.value},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,padding:0},marker:null,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}\x3cbr/\x3e"},states:{hover:{halo:!1,brightness:.2}}},v(b.colorSeriesMixin,{pointArrayMap:["y","value"],hasPointSpecificOptions:!0,getExtremesFromAll:!0,
directTouch:!0,init:function(){var b;p.scatter.prototype.init.apply(this,arguments);b=this.options;b.pointRange=q(b.pointRange,b.colsize||1);this.yAxis.axisPointRange=b.rowsize||1},translate:function(){var b=this.options,c=this.xAxis,g=this.yAxis,k=b.pointPadding||0,m=function(a,b,c){return Math.min(Math.max(b,a),c)};this.generatePoints();h(this.points,function(a){var d=(b.colsize||1)/2,e=(b.rowsize||1)/2,h=m(Math.round(c.len-c.translate(a.x-d,0,1,0,1)),-c.len,2*c.len),d=m(Math.round(c.len-c.translate(a.x+
d,0,1,0,1)),-c.len,2*c.len),l=m(Math.round(g.translate(a.y-e,0,1,0,1)),-g.len,2*g.len),e=m(Math.round(g.translate(a.y+e,0,1,0,1)),-g.len,2*g.len),p=q(a.pointPadding,k);a.plotX=a.clientX=(h+d)/2;a.plotY=(l+e)/2;a.shapeType="rect";a.shapeArgs={x:Math.min(h,d)+p,y:Math.min(l,e)+p,width:Math.abs(d-h)-2*p,height:Math.abs(e-l)-2*p}});this.translateColors()},drawPoints:function(){p.column.prototype.drawPoints.call(this);h(this.points,function(b){b.graphic.attr(this.colorAttribs(b))},this)},animate:m,getBox:m,
drawLegendSymbol:b.LegendSymbolMixin.drawRectangle,alignDataLabel:p.column.prototype.alignDataLabel,getExtremes:function(){g.prototype.getExtremes.call(this,this.valueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;g.prototype.getExtremes.call(this)}}),b.extend({haloPath:function(b){if(!b)return[];var c=this.shapeArgs;return["M",c.x-b,c.y-b,"L",c.x-b,c.y+c.height+b,c.x+c.width+b,c.y+c.height+b,c.x+c.width+b,c.y-b,"Z"]}},k))})(k)});
//# sourceMappingURL=heatmap.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35hY2NvdW50LjA2ZDE2YzEwNjg5NzM2ODQ1ZjlkLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJvdXRlci9lc20vcmVhY3Qtcm91dGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9taW5pLWNyZWF0ZS1yZWFjdC1jb250ZXh0L2Rpc3QvZXNtL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0cmluZy1zaW1pbGFyaXR5L2NvbXBhcmUtc3RyaW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL21lYW5CeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlTWVhbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoLWVzL19iYXNlU3VtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvc3VtQnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9ncm91cEJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2NyZWF0ZUFnZ3JlZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC1lcy9fYXJyYXlBZ2dyZWdhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gtZXMvX2Jhc2VBZ2dyZWdhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaWdoY2hhcnRzL21vZHVsZXMvdHJlZW1hcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaGlnaGNoYXJ0cy9tb2R1bGVzL2hlYXRtYXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBjcmVhdGVNZW1vcnlIaXN0b3J5LCBjcmVhdGVMb2NhdGlvbiwgbG9jYXRpb25zQXJlRXF1YWwsIGNyZWF0ZVBhdGggfSBmcm9tICdoaXN0b3J5JztcbmltcG9ydCB3YXJuaW5nIGZyb20gJ3Rpbnktd2FybmluZyc7XG5pbXBvcnQgY3JlYXRlQ29udGV4dCBmcm9tICdtaW5pLWNyZWF0ZS1yZWFjdC1jb250ZXh0JztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAndGlueS1pbnZhcmlhbnQnO1xuaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IHBhdGhUb1JlZ2V4cCBmcm9tICdwYXRoLXRvLXJlZ2V4cCc7XG5pbXBvcnQgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSBmcm9tICdyZWFjdC1pcyc7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSc7XG5pbXBvcnQgaG9pc3RTdGF0aWNzIGZyb20gJ2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzJztcblxuLy8gVE9ETzogUmVwbGFjZSB3aXRoIFJlYWN0LmNyZWF0ZUNvbnRleHQgb25jZSB3ZSBjYW4gYXNzdW1lIFJlYWN0IDE2K1xuXG52YXIgY3JlYXRlTmFtZWRDb250ZXh0ID0gZnVuY3Rpb24gY3JlYXRlTmFtZWRDb250ZXh0KG5hbWUpIHtcbiAgdmFyIGNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG4gIGNvbnRleHQuZGlzcGxheU5hbWUgPSBuYW1lO1xuICByZXR1cm4gY29udGV4dDtcbn07XG5cbnZhciBjb250ZXh0ID1cbi8qI19fUFVSRV9fKi9cbmNyZWF0ZU5hbWVkQ29udGV4dChcIlJvdXRlclwiKTtcblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgcHV0dGluZyBoaXN0b3J5IG9uIGNvbnRleHQuXG4gKi9cblxudmFyIFJvdXRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShSb3V0ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIFJvdXRlci5jb21wdXRlUm9vdE1hdGNoID0gZnVuY3Rpb24gY29tcHV0ZVJvb3RNYXRjaChwYXRobmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXRoOiBcIi9cIixcbiAgICAgIHVybDogXCIvXCIsXG4gICAgICBwYXJhbXM6IHt9LFxuICAgICAgaXNFeGFjdDogcGF0aG5hbWUgPT09IFwiL1wiXG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiBSb3V0ZXIocHJvcHMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9SZWFjdCRDb21wb25lbnQuY2FsbCh0aGlzLCBwcm9wcykgfHwgdGhpcztcbiAgICBfdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxvY2F0aW9uOiBwcm9wcy5oaXN0b3J5LmxvY2F0aW9uXG4gICAgfTsgLy8gVGhpcyBpcyBhIGJpdCBvZiBhIGhhY2suIFdlIGhhdmUgdG8gc3RhcnQgbGlzdGVuaW5nIGZvciBsb2NhdGlvblxuICAgIC8vIGNoYW5nZXMgaGVyZSBpbiB0aGUgY29uc3RydWN0b3IgaW4gY2FzZSB0aGVyZSBhcmUgYW55IDxSZWRpcmVjdD5zXG4gICAgLy8gb24gdGhlIGluaXRpYWwgcmVuZGVyLiBJZiB0aGVyZSBhcmUsIHRoZXkgd2lsbCByZXBsYWNlL3B1c2ggd2hlblxuICAgIC8vIHRoZXkgbW91bnQgYW5kIHNpbmNlIGNETSBmaXJlcyBpbiBjaGlsZHJlbiBiZWZvcmUgcGFyZW50cywgd2UgbWF5XG4gICAgLy8gZ2V0IGEgbmV3IGxvY2F0aW9uIGJlZm9yZSB0aGUgPFJvdXRlcj4gaXMgbW91bnRlZC5cblxuICAgIF90aGlzLl9pc01vdW50ZWQgPSBmYWxzZTtcbiAgICBfdGhpcy5fcGVuZGluZ0xvY2F0aW9uID0gbnVsbDtcblxuICAgIGlmICghcHJvcHMuc3RhdGljQ29udGV4dCkge1xuICAgICAgX3RoaXMudW5saXN0ZW4gPSBwcm9wcy5oaXN0b3J5Lmxpc3RlbihmdW5jdGlvbiAobG9jYXRpb24pIHtcbiAgICAgICAgaWYgKF90aGlzLl9pc01vdW50ZWQpIHtcbiAgICAgICAgICBfdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBsb2NhdGlvbjogbG9jYXRpb25cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdGhpcy5fcGVuZGluZ0xvY2F0aW9uID0gbG9jYXRpb247XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBSb3V0ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XG5cbiAgICBpZiAodGhpcy5fcGVuZGluZ0xvY2F0aW9uKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbG9jYXRpb246IHRoaXMuX3BlbmRpbmdMb2NhdGlvblxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnVubGlzdGVuKSB0aGlzLnVubGlzdGVuKCk7XG4gIH07XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICBjaGlsZHJlbjogdGhpcy5wcm9wcy5jaGlsZHJlbiB8fCBudWxsLFxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgaGlzdG9yeTogdGhpcy5wcm9wcy5oaXN0b3J5LFxuICAgICAgICBsb2NhdGlvbjogdGhpcy5zdGF0ZS5sb2NhdGlvbixcbiAgICAgICAgbWF0Y2g6IFJvdXRlci5jb21wdXRlUm9vdE1hdGNoKHRoaXMuc3RhdGUubG9jYXRpb24ucGF0aG5hbWUpLFxuICAgICAgICBzdGF0aWNDb250ZXh0OiB0aGlzLnByb3BzLnN0YXRpY0NvbnRleHRcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gUm91dGVyO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIFJvdXRlci5wcm9wVHlwZXMgPSB7XG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuICAgIGhpc3Rvcnk6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBzdGF0aWNDb250ZXh0OiBQcm9wVHlwZXMub2JqZWN0XG4gIH07XG5cbiAgUm91dGVyLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiAocHJldlByb3BzKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhwcmV2UHJvcHMuaGlzdG9yeSA9PT0gdGhpcy5wcm9wcy5oaXN0b3J5LCBcIllvdSBjYW5ub3QgY2hhbmdlIDxSb3V0ZXIgaGlzdG9yeT5cIikgOiB2b2lkIDA7XG4gIH07XG59XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIGEgPFJvdXRlcj4gdGhhdCBzdG9yZXMgbG9jYXRpb24gaW4gbWVtb3J5LlxuICovXG5cbnZhciBNZW1vcnlSb3V0ZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgX2luaGVyaXRzTG9vc2UoTWVtb3J5Um91dGVyLCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBNZW1vcnlSb3V0ZXIoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG4gICAgX3RoaXMuaGlzdG9yeSA9IGNyZWF0ZU1lbW9yeUhpc3RvcnkoX3RoaXMucHJvcHMpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBNZW1vcnlSb3V0ZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCB7XG4gICAgICBoaXN0b3J5OiB0aGlzLmhpc3RvcnksXG4gICAgICBjaGlsZHJlbjogdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBNZW1vcnlSb3V0ZXI7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgTWVtb3J5Um91dGVyLnByb3BUeXBlcyA9IHtcbiAgICBpbml0aWFsRW50cmllczogUHJvcFR5cGVzLmFycmF5LFxuICAgIGluaXRpYWxJbmRleDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBnZXRVc2VyQ29uZmlybWF0aW9uOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBrZXlMZW5ndGg6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlXG4gIH07XG5cbiAgTWVtb3J5Um91dGVyLnByb3RvdHlwZS5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uICgpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCF0aGlzLnByb3BzLmhpc3RvcnksIFwiPE1lbW9yeVJvdXRlcj4gaWdub3JlcyB0aGUgaGlzdG9yeSBwcm9wLiBUbyB1c2UgYSBjdXN0b20gaGlzdG9yeSwgXCIgKyBcInVzZSBgaW1wb3J0IHsgUm91dGVyIH1gIGluc3RlYWQgb2YgYGltcG9ydCB7IE1lbW9yeVJvdXRlciBhcyBSb3V0ZXIgfWAuXCIpIDogdm9pZCAwO1xuICB9O1xufVxuXG52YXIgTGlmZWN5Y2xlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKExpZmVjeWNsZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTGlmZWN5Y2xlKCkge1xuICAgIHJldHVybiBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBMaWZlY3ljbGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uTW91bnQpIHRoaXMucHJvcHMub25Nb3VudC5jYWxsKHRoaXMsIHRoaXMpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgaWYgKHRoaXMucHJvcHMub25VcGRhdGUpIHRoaXMucHJvcHMub25VcGRhdGUuY2FsbCh0aGlzLCB0aGlzLCBwcmV2UHJvcHMpO1xuICB9O1xuXG4gIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLm9uVW5tb3VudCkgdGhpcy5wcm9wcy5vblVubW91bnQuY2FsbCh0aGlzLCB0aGlzKTtcbiAgfTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBMaWZlY3ljbGU7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIHByb21wdGluZyB0aGUgdXNlciBiZWZvcmUgbmF2aWdhdGluZyBhd2F5IGZyb20gYSBzY3JlZW4uXG4gKi9cblxuZnVuY3Rpb24gUHJvbXB0KF9yZWYpIHtcbiAgdmFyIG1lc3NhZ2UgPSBfcmVmLm1lc3NhZ2UsXG4gICAgICBfcmVmJHdoZW4gPSBfcmVmLndoZW4sXG4gICAgICB3aGVuID0gX3JlZiR3aGVuID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiR3aGVuO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICFjb250ZXh0ID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIllvdSBzaG91bGQgbm90IHVzZSA8UHJvbXB0PiBvdXRzaWRlIGEgPFJvdXRlcj5cIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICAgIGlmICghd2hlbiB8fCBjb250ZXh0LnN0YXRpY0NvbnRleHQpIHJldHVybiBudWxsO1xuICAgIHZhciBtZXRob2QgPSBjb250ZXh0Lmhpc3RvcnkuYmxvY2s7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoTGlmZWN5Y2xlLCB7XG4gICAgICBvbk1vdW50OiBmdW5jdGlvbiBvbk1vdW50KHNlbGYpIHtcbiAgICAgICAgc2VsZi5yZWxlYXNlID0gbWV0aG9kKG1lc3NhZ2UpO1xuICAgICAgfSxcbiAgICAgIG9uVXBkYXRlOiBmdW5jdGlvbiBvblVwZGF0ZShzZWxmLCBwcmV2UHJvcHMpIHtcbiAgICAgICAgaWYgKHByZXZQcm9wcy5tZXNzYWdlICE9PSBtZXNzYWdlKSB7XG4gICAgICAgICAgc2VsZi5yZWxlYXNlKCk7XG4gICAgICAgICAgc2VsZi5yZWxlYXNlID0gbWV0aG9kKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Vbm1vdW50OiBmdW5jdGlvbiBvblVubW91bnQoc2VsZikge1xuICAgICAgICBzZWxmLnJlbGVhc2UoKTtcbiAgICAgIH0sXG4gICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgfSk7XG4gIH0pO1xufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIHZhciBtZXNzYWdlVHlwZSA9IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5mdW5jLCBQcm9wVHlwZXMuc3RyaW5nXSk7XG4gIFByb21wdC5wcm9wVHlwZXMgPSB7XG4gICAgd2hlbjogUHJvcFR5cGVzLmJvb2wsXG4gICAgbWVzc2FnZTogbWVzc2FnZVR5cGUuaXNSZXF1aXJlZFxuICB9O1xufVxuXG52YXIgY2FjaGUgPSB7fTtcbnZhciBjYWNoZUxpbWl0ID0gMTAwMDA7XG52YXIgY2FjaGVDb3VudCA9IDA7XG5cbmZ1bmN0aW9uIGNvbXBpbGVQYXRoKHBhdGgpIHtcbiAgaWYgKGNhY2hlW3BhdGhdKSByZXR1cm4gY2FjaGVbcGF0aF07XG4gIHZhciBnZW5lcmF0b3IgPSBwYXRoVG9SZWdleHAuY29tcGlsZShwYXRoKTtcblxuICBpZiAoY2FjaGVDb3VudCA8IGNhY2hlTGltaXQpIHtcbiAgICBjYWNoZVtwYXRoXSA9IGdlbmVyYXRvcjtcbiAgICBjYWNoZUNvdW50Kys7XG4gIH1cblxuICByZXR1cm4gZ2VuZXJhdG9yO1xufVxuLyoqXG4gKiBQdWJsaWMgQVBJIGZvciBnZW5lcmF0aW5nIGEgVVJMIHBhdGhuYW1lIGZyb20gYSBwYXRoIGFuZCBwYXJhbWV0ZXJzLlxuICovXG5cblxuZnVuY3Rpb24gZ2VuZXJhdGVQYXRoKHBhdGgsIHBhcmFtcykge1xuICBpZiAocGF0aCA9PT0gdm9pZCAwKSB7XG4gICAgcGF0aCA9IFwiL1wiO1xuICB9XG5cbiAgaWYgKHBhcmFtcyA9PT0gdm9pZCAwKSB7XG4gICAgcGFyYW1zID0ge307XG4gIH1cblxuICByZXR1cm4gcGF0aCA9PT0gXCIvXCIgPyBwYXRoIDogY29tcGlsZVBhdGgocGF0aCkocGFyYW1zLCB7XG4gICAgcHJldHR5OiB0cnVlXG4gIH0pO1xufVxuXG4vKipcbiAqIFRoZSBwdWJsaWMgQVBJIGZvciBuYXZpZ2F0aW5nIHByb2dyYW1tYXRpY2FsbHkgd2l0aCBhIGNvbXBvbmVudC5cbiAqL1xuXG5mdW5jdGlvbiBSZWRpcmVjdChfcmVmKSB7XG4gIHZhciBjb21wdXRlZE1hdGNoID0gX3JlZi5jb21wdXRlZE1hdGNoLFxuICAgICAgdG8gPSBfcmVmLnRvLFxuICAgICAgX3JlZiRwdXNoID0gX3JlZi5wdXNoLFxuICAgICAgcHVzaCA9IF9yZWYkcHVzaCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJHB1c2g7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgIWNvbnRleHQgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiWW91IHNob3VsZCBub3QgdXNlIDxSZWRpcmVjdD4gb3V0c2lkZSBhIDxSb3V0ZXI+XCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICB2YXIgaGlzdG9yeSA9IGNvbnRleHQuaGlzdG9yeSxcbiAgICAgICAgc3RhdGljQ29udGV4dCA9IGNvbnRleHQuc3RhdGljQ29udGV4dDtcbiAgICB2YXIgbWV0aG9kID0gcHVzaCA/IGhpc3RvcnkucHVzaCA6IGhpc3RvcnkucmVwbGFjZTtcbiAgICB2YXIgbG9jYXRpb24gPSBjcmVhdGVMb2NhdGlvbihjb21wdXRlZE1hdGNoID8gdHlwZW9mIHRvID09PSBcInN0cmluZ1wiID8gZ2VuZXJhdGVQYXRoKHRvLCBjb21wdXRlZE1hdGNoLnBhcmFtcykgOiBfZXh0ZW5kcyh7fSwgdG8sIHtcbiAgICAgIHBhdGhuYW1lOiBnZW5lcmF0ZVBhdGgodG8ucGF0aG5hbWUsIGNvbXB1dGVkTWF0Y2gucGFyYW1zKVxuICAgIH0pIDogdG8pOyAvLyBXaGVuIHJlbmRlcmluZyBpbiBhIHN0YXRpYyBjb250ZXh0LFxuICAgIC8vIHNldCB0aGUgbmV3IGxvY2F0aW9uIGltbWVkaWF0ZWx5LlxuXG4gICAgaWYgKHN0YXRpY0NvbnRleHQpIHtcbiAgICAgIG1ldGhvZChsb2NhdGlvbik7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChMaWZlY3ljbGUsIHtcbiAgICAgIG9uTW91bnQ6IGZ1bmN0aW9uIG9uTW91bnQoKSB7XG4gICAgICAgIG1ldGhvZChsb2NhdGlvbik7XG4gICAgICB9LFxuICAgICAgb25VcGRhdGU6IGZ1bmN0aW9uIG9uVXBkYXRlKHNlbGYsIHByZXZQcm9wcykge1xuICAgICAgICB2YXIgcHJldkxvY2F0aW9uID0gY3JlYXRlTG9jYXRpb24ocHJldlByb3BzLnRvKTtcblxuICAgICAgICBpZiAoIWxvY2F0aW9uc0FyZUVxdWFsKHByZXZMb2NhdGlvbiwgX2V4dGVuZHMoe30sIGxvY2F0aW9uLCB7XG4gICAgICAgICAga2V5OiBwcmV2TG9jYXRpb24ua2V5XG4gICAgICAgIH0pKSkge1xuICAgICAgICAgIG1ldGhvZChsb2NhdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB0bzogdG9cbiAgICB9KTtcbiAgfSk7XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgUmVkaXJlY3QucHJvcFR5cGVzID0ge1xuICAgIHB1c2g6IFByb3BUeXBlcy5ib29sLFxuICAgIGZyb206IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdG86IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkXG4gIH07XG59XG5cbnZhciBjYWNoZSQxID0ge307XG52YXIgY2FjaGVMaW1pdCQxID0gMTAwMDA7XG52YXIgY2FjaGVDb3VudCQxID0gMDtcblxuZnVuY3Rpb24gY29tcGlsZVBhdGgkMShwYXRoLCBvcHRpb25zKSB7XG4gIHZhciBjYWNoZUtleSA9IFwiXCIgKyBvcHRpb25zLmVuZCArIG9wdGlvbnMuc3RyaWN0ICsgb3B0aW9ucy5zZW5zaXRpdmU7XG4gIHZhciBwYXRoQ2FjaGUgPSBjYWNoZSQxW2NhY2hlS2V5XSB8fCAoY2FjaGUkMVtjYWNoZUtleV0gPSB7fSk7XG4gIGlmIChwYXRoQ2FjaGVbcGF0aF0pIHJldHVybiBwYXRoQ2FjaGVbcGF0aF07XG4gIHZhciBrZXlzID0gW107XG4gIHZhciByZWdleHAgPSBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gIHZhciByZXN1bHQgPSB7XG4gICAgcmVnZXhwOiByZWdleHAsXG4gICAga2V5czoga2V5c1xuICB9O1xuXG4gIGlmIChjYWNoZUNvdW50JDEgPCBjYWNoZUxpbWl0JDEpIHtcbiAgICBwYXRoQ2FjaGVbcGF0aF0gPSByZXN1bHQ7XG4gICAgY2FjaGVDb3VudCQxKys7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuLyoqXG4gKiBQdWJsaWMgQVBJIGZvciBtYXRjaGluZyBhIFVSTCBwYXRobmFtZSB0byBhIHBhdGguXG4gKi9cblxuXG5mdW5jdGlvbiBtYXRjaFBhdGgocGF0aG5hbWUsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIiB8fCBBcnJheS5pc0FycmF5KG9wdGlvbnMpKSB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIHBhdGg6IG9wdGlvbnNcbiAgICB9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIHBhdGggPSBfb3B0aW9ucy5wYXRoLFxuICAgICAgX29wdGlvbnMkZXhhY3QgPSBfb3B0aW9ucy5leGFjdCxcbiAgICAgIGV4YWN0ID0gX29wdGlvbnMkZXhhY3QgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkZXhhY3QsXG4gICAgICBfb3B0aW9ucyRzdHJpY3QgPSBfb3B0aW9ucy5zdHJpY3QsXG4gICAgICBzdHJpY3QgPSBfb3B0aW9ucyRzdHJpY3QgPT09IHZvaWQgMCA/IGZhbHNlIDogX29wdGlvbnMkc3RyaWN0LFxuICAgICAgX29wdGlvbnMkc2Vuc2l0aXZlID0gX29wdGlvbnMuc2Vuc2l0aXZlLFxuICAgICAgc2Vuc2l0aXZlID0gX29wdGlvbnMkc2Vuc2l0aXZlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9vcHRpb25zJHNlbnNpdGl2ZTtcbiAgdmFyIHBhdGhzID0gW10uY29uY2F0KHBhdGgpO1xuICByZXR1cm4gcGF0aHMucmVkdWNlKGZ1bmN0aW9uIChtYXRjaGVkLCBwYXRoKSB7XG4gICAgaWYgKCFwYXRoICYmIHBhdGggIT09IFwiXCIpIHJldHVybiBudWxsO1xuICAgIGlmIChtYXRjaGVkKSByZXR1cm4gbWF0Y2hlZDtcblxuICAgIHZhciBfY29tcGlsZVBhdGggPSBjb21waWxlUGF0aCQxKHBhdGgsIHtcbiAgICAgIGVuZDogZXhhY3QsXG4gICAgICBzdHJpY3Q6IHN0cmljdCxcbiAgICAgIHNlbnNpdGl2ZTogc2Vuc2l0aXZlXG4gICAgfSksXG4gICAgICAgIHJlZ2V4cCA9IF9jb21waWxlUGF0aC5yZWdleHAsXG4gICAgICAgIGtleXMgPSBfY29tcGlsZVBhdGgua2V5cztcblxuICAgIHZhciBtYXRjaCA9IHJlZ2V4cC5leGVjKHBhdGhuYW1lKTtcbiAgICBpZiAoIW1hdGNoKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgdXJsID0gbWF0Y2hbMF0sXG4gICAgICAgIHZhbHVlcyA9IG1hdGNoLnNsaWNlKDEpO1xuICAgIHZhciBpc0V4YWN0ID0gcGF0aG5hbWUgPT09IHVybDtcbiAgICBpZiAoZXhhY3QgJiYgIWlzRXhhY3QpIHJldHVybiBudWxsO1xuICAgIHJldHVybiB7XG4gICAgICBwYXRoOiBwYXRoLFxuICAgICAgLy8gdGhlIHBhdGggdXNlZCB0byBtYXRjaFxuICAgICAgdXJsOiBwYXRoID09PSBcIi9cIiAmJiB1cmwgPT09IFwiXCIgPyBcIi9cIiA6IHVybCxcbiAgICAgIC8vIHRoZSBtYXRjaGVkIHBvcnRpb24gb2YgdGhlIFVSTFxuICAgICAgaXNFeGFjdDogaXNFeGFjdCxcbiAgICAgIC8vIHdoZXRoZXIgb3Igbm90IHdlIG1hdGNoZWQgZXhhY3RseVxuICAgICAgcGFyYW1zOiBrZXlzLnJlZHVjZShmdW5jdGlvbiAobWVtbywga2V5LCBpbmRleCkge1xuICAgICAgICBtZW1vW2tleS5uYW1lXSA9IHZhbHVlc1tpbmRleF07XG4gICAgICAgIHJldHVybiBtZW1vO1xuICAgICAgfSwge30pXG4gICAgfTtcbiAgfSwgbnVsbCk7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHlDaGlsZHJlbihjaGlsZHJlbikge1xuICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4uY291bnQoY2hpbGRyZW4pID09PSAwO1xufVxuXG5mdW5jdGlvbiBldmFsQ2hpbGRyZW5EZXYoY2hpbGRyZW4sIHByb3BzLCBwYXRoKSB7XG4gIHZhciB2YWx1ZSA9IGNoaWxkcmVuKHByb3BzKTtcbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyh2YWx1ZSAhPT0gdW5kZWZpbmVkLCBcIllvdSByZXR1cm5lZCBgdW5kZWZpbmVkYCBmcm9tIHRoZSBgY2hpbGRyZW5gIGZ1bmN0aW9uIG9mIFwiICsgKFwiPFJvdXRlXCIgKyAocGF0aCA/IFwiIHBhdGg9XFxcIlwiICsgcGF0aCArIFwiXFxcIlwiIDogXCJcIikgKyBcIj4sIGJ1dCB5b3UgXCIpICsgXCJzaG91bGQgaGF2ZSByZXR1cm5lZCBhIFJlYWN0IGVsZW1lbnQgb3IgYG51bGxgXCIpIDogdm9pZCAwO1xuICByZXR1cm4gdmFsdWUgfHwgbnVsbDtcbn1cbi8qKlxuICogVGhlIHB1YmxpYyBBUEkgZm9yIG1hdGNoaW5nIGEgc2luZ2xlIHBhdGggYW5kIHJlbmRlcmluZy5cbiAqL1xuXG5cbnZhciBSb3V0ZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShSb3V0ZSwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gUm91dGUoKSB7XG4gICAgcmV0dXJuIF9SZWFjdCRDb21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFJvdXRlLnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29udGV4dCQxKSB7XG4gICAgICAhY29udGV4dCQxID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIllvdSBzaG91bGQgbm90IHVzZSA8Um91dGU+IG91dHNpZGUgYSA8Um91dGVyPlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICB2YXIgbG9jYXRpb24gPSBfdGhpcy5wcm9wcy5sb2NhdGlvbiB8fCBjb250ZXh0JDEubG9jYXRpb247XG4gICAgICB2YXIgbWF0Y2ggPSBfdGhpcy5wcm9wcy5jb21wdXRlZE1hdGNoID8gX3RoaXMucHJvcHMuY29tcHV0ZWRNYXRjaCAvLyA8U3dpdGNoPiBhbHJlYWR5IGNvbXB1dGVkIHRoZSBtYXRjaCBmb3IgdXNcbiAgICAgIDogX3RoaXMucHJvcHMucGF0aCA/IG1hdGNoUGF0aChsb2NhdGlvbi5wYXRobmFtZSwgX3RoaXMucHJvcHMpIDogY29udGV4dCQxLm1hdGNoO1xuXG4gICAgICB2YXIgcHJvcHMgPSBfZXh0ZW5kcyh7fSwgY29udGV4dCQxLCB7XG4gICAgICAgIGxvY2F0aW9uOiBsb2NhdGlvbixcbiAgICAgICAgbWF0Y2g6IG1hdGNoXG4gICAgICB9KTtcblxuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgY2hpbGRyZW4gPSBfdGhpcyRwcm9wcy5jaGlsZHJlbixcbiAgICAgICAgICBjb21wb25lbnQgPSBfdGhpcyRwcm9wcy5jb21wb25lbnQsXG4gICAgICAgICAgcmVuZGVyID0gX3RoaXMkcHJvcHMucmVuZGVyOyAvLyBQcmVhY3QgdXNlcyBhbiBlbXB0eSBhcnJheSBhcyBjaGlsZHJlbiBieVxuICAgICAgLy8gZGVmYXVsdCwgc28gdXNlIG51bGwgaWYgdGhhdCdzIHRoZSBjYXNlLlxuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikgJiYgY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29udGV4dC5Qcm92aWRlciwge1xuICAgICAgICB2YWx1ZTogcHJvcHNcbiAgICAgIH0sIHByb3BzLm1hdGNoID8gY2hpbGRyZW4gPyB0eXBlb2YgY2hpbGRyZW4gPT09IFwiZnVuY3Rpb25cIiA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGV2YWxDaGlsZHJlbkRldihjaGlsZHJlbiwgcHJvcHMsIF90aGlzLnByb3BzLnBhdGgpIDogY2hpbGRyZW4ocHJvcHMpIDogY2hpbGRyZW4gOiBjb21wb25lbnQgPyBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbXBvbmVudCwgcHJvcHMpIDogcmVuZGVyID8gcmVuZGVyKHByb3BzKSA6IG51bGwgOiB0eXBlb2YgY2hpbGRyZW4gPT09IFwiZnVuY3Rpb25cIiA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGV2YWxDaGlsZHJlbkRldihjaGlsZHJlbiwgcHJvcHMsIF90aGlzLnByb3BzLnBhdGgpIDogY2hpbGRyZW4ocHJvcHMpIDogbnVsbCk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIFJvdXRlO1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIFJvdXRlLnByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLmZ1bmMsIFByb3BUeXBlcy5ub2RlXSksXG4gICAgY29tcG9uZW50OiBmdW5jdGlvbiBjb21wb25lbnQocHJvcHMsIHByb3BOYW1lKSB7XG4gICAgICBpZiAocHJvcHNbcHJvcE5hbWVdICYmICFpc1ZhbGlkRWxlbWVudFR5cGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IEVycm9yKFwiSW52YWxpZCBwcm9wICdjb21wb25lbnQnIHN1cHBsaWVkIHRvICdSb3V0ZSc6IHRoZSBwcm9wIGlzIG5vdCBhIHZhbGlkIFJlYWN0IGNvbXBvbmVudFwiKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGV4YWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBsb2NhdGlvbjogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBwYXRoOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKV0pLFxuICAgIHJlbmRlcjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgc2Vuc2l0aXZlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzdHJpY3Q6IFByb3BUeXBlcy5ib29sXG4gIH07XG5cbiAgUm91dGUucHJvdG90eXBlLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoISh0aGlzLnByb3BzLmNoaWxkcmVuICYmICFpc0VtcHR5Q2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbikgJiYgdGhpcy5wcm9wcy5jb21wb25lbnQpLCBcIllvdSBzaG91bGQgbm90IHVzZSA8Um91dGUgY29tcG9uZW50PiBhbmQgPFJvdXRlIGNoaWxkcmVuPiBpbiB0aGUgc2FtZSByb3V0ZTsgPFJvdXRlIGNvbXBvbmVudD4gd2lsbCBiZSBpZ25vcmVkXCIpIDogdm9pZCAwO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoISh0aGlzLnByb3BzLmNoaWxkcmVuICYmICFpc0VtcHR5Q2hpbGRyZW4odGhpcy5wcm9wcy5jaGlsZHJlbikgJiYgdGhpcy5wcm9wcy5yZW5kZXIpLCBcIllvdSBzaG91bGQgbm90IHVzZSA8Um91dGUgcmVuZGVyPiBhbmQgPFJvdXRlIGNoaWxkcmVuPiBpbiB0aGUgc2FtZSByb3V0ZTsgPFJvdXRlIHJlbmRlcj4gd2lsbCBiZSBpZ25vcmVkXCIpIDogdm9pZCAwO1xuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoISh0aGlzLnByb3BzLmNvbXBvbmVudCAmJiB0aGlzLnByb3BzLnJlbmRlciksIFwiWW91IHNob3VsZCBub3QgdXNlIDxSb3V0ZSBjb21wb25lbnQ+IGFuZCA8Um91dGUgcmVuZGVyPiBpbiB0aGUgc2FtZSByb3V0ZTsgPFJvdXRlIHJlbmRlcj4gd2lsbCBiZSBpZ25vcmVkXCIpIDogdm9pZCAwO1xuICB9O1xuXG4gIFJvdXRlLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGUgPSBmdW5jdGlvbiAocHJldlByb3BzKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghKHRoaXMucHJvcHMubG9jYXRpb24gJiYgIXByZXZQcm9wcy5sb2NhdGlvbiksICc8Um91dGU+IGVsZW1lbnRzIHNob3VsZCBub3QgY2hhbmdlIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWQgKG9yIHZpY2UgdmVyc2EpLiBZb3UgaW5pdGlhbGx5IHVzZWQgbm8gXCJsb2NhdGlvblwiIHByb3AgYW5kIHRoZW4gcHJvdmlkZWQgb25lIG9uIGEgc3Vic2VxdWVudCByZW5kZXIuJykgOiB2b2lkIDA7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghKCF0aGlzLnByb3BzLmxvY2F0aW9uICYmIHByZXZQcm9wcy5sb2NhdGlvbiksICc8Um91dGU+IGVsZW1lbnRzIHNob3VsZCBub3QgY2hhbmdlIGZyb20gY29udHJvbGxlZCB0byB1bmNvbnRyb2xsZWQgKG9yIHZpY2UgdmVyc2EpLiBZb3UgcHJvdmlkZWQgYSBcImxvY2F0aW9uXCIgcHJvcCBpbml0aWFsbHkgYnV0IG9taXR0ZWQgaXQgb24gYSBzdWJzZXF1ZW50IHJlbmRlci4nKSA6IHZvaWQgMDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWRkTGVhZGluZ1NsYXNoKHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguY2hhckF0KDApID09PSBcIi9cIiA/IHBhdGggOiBcIi9cIiArIHBhdGg7XG59XG5cbmZ1bmN0aW9uIGFkZEJhc2VuYW1lKGJhc2VuYW1lLCBsb2NhdGlvbikge1xuICBpZiAoIWJhc2VuYW1lKSByZXR1cm4gbG9jYXRpb247XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIHtcbiAgICBwYXRobmFtZTogYWRkTGVhZGluZ1NsYXNoKGJhc2VuYW1lKSArIGxvY2F0aW9uLnBhdGhuYW1lXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdHJpcEJhc2VuYW1lKGJhc2VuYW1lLCBsb2NhdGlvbikge1xuICBpZiAoIWJhc2VuYW1lKSByZXR1cm4gbG9jYXRpb247XG4gIHZhciBiYXNlID0gYWRkTGVhZGluZ1NsYXNoKGJhc2VuYW1lKTtcbiAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoYmFzZSkgIT09IDApIHJldHVybiBsb2NhdGlvbjtcbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBsb2NhdGlvbiwge1xuICAgIHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZS5zdWJzdHIoYmFzZS5sZW5ndGgpXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVUkwobG9jYXRpb24pIHtcbiAgcmV0dXJuIHR5cGVvZiBsb2NhdGlvbiA9PT0gXCJzdHJpbmdcIiA/IGxvY2F0aW9uIDogY3JlYXRlUGF0aChsb2NhdGlvbik7XG59XG5cbmZ1bmN0aW9uIHN0YXRpY0hhbmRsZXIobWV0aG9kTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiWW91IGNhbm5vdCAlcyB3aXRoIDxTdGF0aWNSb3V0ZXI+XCIsIG1ldGhvZE5hbWUpIDogaW52YXJpYW50KGZhbHNlKSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuLyoqXG4gKiBUaGUgcHVibGljIHRvcC1sZXZlbCBBUEkgZm9yIGEgXCJzdGF0aWNcIiA8Um91dGVyPiwgc28tY2FsbGVkIGJlY2F1c2UgaXRcbiAqIGNhbid0IGFjdHVhbGx5IGNoYW5nZSB0aGUgY3VycmVudCBsb2NhdGlvbi4gSW5zdGVhZCwgaXQganVzdCByZWNvcmRzXG4gKiBsb2NhdGlvbiBjaGFuZ2VzIGluIGEgY29udGV4dCBvYmplY3QuIFVzZWZ1bCBtYWlubHkgaW4gdGVzdGluZyBhbmRcbiAqIHNlcnZlci1yZW5kZXJpbmcgc2NlbmFyaW9zLlxuICovXG5cblxudmFyIFN0YXRpY1JvdXRlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShTdGF0aWNSb3V0ZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIFN0YXRpY1JvdXRlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcblxuICAgIF90aGlzLmhhbmRsZVB1c2ggPSBmdW5jdGlvbiAobG9jYXRpb24pIHtcbiAgICAgIHJldHVybiBfdGhpcy5uYXZpZ2F0ZVRvKGxvY2F0aW9uLCBcIlBVU0hcIik7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZVJlcGxhY2UgPSBmdW5jdGlvbiAobG9jYXRpb24pIHtcbiAgICAgIHJldHVybiBfdGhpcy5uYXZpZ2F0ZVRvKGxvY2F0aW9uLCBcIlJFUExBQ0VcIik7XG4gICAgfTtcblxuICAgIF90aGlzLmhhbmRsZUxpc3RlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBub29wO1xuICAgIH07XG5cbiAgICBfdGhpcy5oYW5kbGVCbG9jayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBub29wO1xuICAgIH07XG5cbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU3RhdGljUm91dGVyLnByb3RvdHlwZTtcblxuICBfcHJvdG8ubmF2aWdhdGVUbyA9IGZ1bmN0aW9uIG5hdmlnYXRlVG8obG9jYXRpb24sIGFjdGlvbikge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIF90aGlzJHByb3BzJGJhc2VuYW1lID0gX3RoaXMkcHJvcHMuYmFzZW5hbWUsXG4gICAgICAgIGJhc2VuYW1lID0gX3RoaXMkcHJvcHMkYmFzZW5hbWUgPT09IHZvaWQgMCA/IFwiXCIgOiBfdGhpcyRwcm9wcyRiYXNlbmFtZSxcbiAgICAgICAgX3RoaXMkcHJvcHMkY29udGV4dCA9IF90aGlzJHByb3BzLmNvbnRleHQsXG4gICAgICAgIGNvbnRleHQgPSBfdGhpcyRwcm9wcyRjb250ZXh0ID09PSB2b2lkIDAgPyB7fSA6IF90aGlzJHByb3BzJGNvbnRleHQ7XG4gICAgY29udGV4dC5hY3Rpb24gPSBhY3Rpb247XG4gICAgY29udGV4dC5sb2NhdGlvbiA9IGFkZEJhc2VuYW1lKGJhc2VuYW1lLCBjcmVhdGVMb2NhdGlvbihsb2NhdGlvbikpO1xuICAgIGNvbnRleHQudXJsID0gY3JlYXRlVVJMKGNvbnRleHQubG9jYXRpb24pO1xuICB9O1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgIF90aGlzJHByb3BzMiRiYXNlbmFtZSA9IF90aGlzJHByb3BzMi5iYXNlbmFtZSxcbiAgICAgICAgYmFzZW5hbWUgPSBfdGhpcyRwcm9wczIkYmFzZW5hbWUgPT09IHZvaWQgMCA/IFwiXCIgOiBfdGhpcyRwcm9wczIkYmFzZW5hbWUsXG4gICAgICAgIF90aGlzJHByb3BzMiRjb250ZXh0ID0gX3RoaXMkcHJvcHMyLmNvbnRleHQsXG4gICAgICAgIGNvbnRleHQgPSBfdGhpcyRwcm9wczIkY29udGV4dCA9PT0gdm9pZCAwID8ge30gOiBfdGhpcyRwcm9wczIkY29udGV4dCxcbiAgICAgICAgX3RoaXMkcHJvcHMyJGxvY2F0aW9uID0gX3RoaXMkcHJvcHMyLmxvY2F0aW9uLFxuICAgICAgICBsb2NhdGlvbiA9IF90aGlzJHByb3BzMiRsb2NhdGlvbiA9PT0gdm9pZCAwID8gXCIvXCIgOiBfdGhpcyRwcm9wczIkbG9jYXRpb24sXG4gICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wczIsIFtcImJhc2VuYW1lXCIsIFwiY29udGV4dFwiLCBcImxvY2F0aW9uXCJdKTtcblxuICAgIHZhciBoaXN0b3J5ID0ge1xuICAgICAgY3JlYXRlSHJlZjogZnVuY3Rpb24gY3JlYXRlSHJlZihwYXRoKSB7XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nU2xhc2goYmFzZW5hbWUgKyBjcmVhdGVVUkwocGF0aCkpO1xuICAgICAgfSxcbiAgICAgIGFjdGlvbjogXCJQT1BcIixcbiAgICAgIGxvY2F0aW9uOiBzdHJpcEJhc2VuYW1lKGJhc2VuYW1lLCBjcmVhdGVMb2NhdGlvbihsb2NhdGlvbikpLFxuICAgICAgcHVzaDogdGhpcy5oYW5kbGVQdXNoLFxuICAgICAgcmVwbGFjZTogdGhpcy5oYW5kbGVSZXBsYWNlLFxuICAgICAgZ286IHN0YXRpY0hhbmRsZXIoXCJnb1wiKSxcbiAgICAgIGdvQmFjazogc3RhdGljSGFuZGxlcihcImdvQmFja1wiKSxcbiAgICAgIGdvRm9yd2FyZDogc3RhdGljSGFuZGxlcihcImdvRm9yd2FyZFwiKSxcbiAgICAgIGxpc3RlbjogdGhpcy5oYW5kbGVMaXN0ZW4sXG4gICAgICBibG9jazogdGhpcy5oYW5kbGVCbG9ja1xuICAgIH07XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoUm91dGVyLCBfZXh0ZW5kcyh7fSwgcmVzdCwge1xuICAgICAgaGlzdG9yeTogaGlzdG9yeSxcbiAgICAgIHN0YXRpY0NvbnRleHQ6IGNvbnRleHRcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIFN0YXRpY1JvdXRlcjtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBTdGF0aWNSb3V0ZXIucHJvcFR5cGVzID0ge1xuICAgIGJhc2VuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbnRleHQ6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbG9jYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKVxuICB9O1xuXG4gIFN0YXRpY1JvdXRlci5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghdGhpcy5wcm9wcy5oaXN0b3J5LCBcIjxTdGF0aWNSb3V0ZXI+IGlnbm9yZXMgdGhlIGhpc3RvcnkgcHJvcC4gVG8gdXNlIGEgY3VzdG9tIGhpc3RvcnksIFwiICsgXCJ1c2UgYGltcG9ydCB7IFJvdXRlciB9YCBpbnN0ZWFkIG9mIGBpbXBvcnQgeyBTdGF0aWNSb3V0ZXIgYXMgUm91dGVyIH1gLlwiKSA6IHZvaWQgMDtcbiAgfTtcbn1cblxuLyoqXG4gKiBUaGUgcHVibGljIEFQSSBmb3IgcmVuZGVyaW5nIHRoZSBmaXJzdCA8Um91dGU+IHRoYXQgbWF0Y2hlcy5cbiAqL1xuXG52YXIgU3dpdGNoID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKFN3aXRjaCwgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gU3dpdGNoKCkge1xuICAgIHJldHVybiBfUmVhY3QkQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTd2l0Y2gucHJvdG90eXBlO1xuXG4gIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAhY29udGV4dCA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJZb3Ugc2hvdWxkIG5vdCB1c2UgPFN3aXRjaD4gb3V0c2lkZSBhIDxSb3V0ZXI+XCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgICAgIHZhciBsb2NhdGlvbiA9IF90aGlzLnByb3BzLmxvY2F0aW9uIHx8IGNvbnRleHQubG9jYXRpb247XG4gICAgICB2YXIgZWxlbWVudCwgbWF0Y2g7IC8vIFdlIHVzZSBSZWFjdC5DaGlsZHJlbi5mb3JFYWNoIGluc3RlYWQgb2YgUmVhY3QuQ2hpbGRyZW4udG9BcnJheSgpLmZpbmQoKVxuICAgICAgLy8gaGVyZSBiZWNhdXNlIHRvQXJyYXkgYWRkcyBrZXlzIHRvIGFsbCBjaGlsZCBlbGVtZW50cyBhbmQgd2UgZG8gbm90IHdhbnRcbiAgICAgIC8vIHRvIHRyaWdnZXIgYW4gdW5tb3VudC9yZW1vdW50IGZvciB0d28gPFJvdXRlPnMgdGhhdCByZW5kZXIgdGhlIHNhbWVcbiAgICAgIC8vIGNvbXBvbmVudCBhdCBkaWZmZXJlbnQgVVJMcy5cblxuICAgICAgUmVhY3QuQ2hpbGRyZW4uZm9yRWFjaChfdGhpcy5wcm9wcy5jaGlsZHJlbiwgZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmIChtYXRjaCA9PSBudWxsICYmIFJlYWN0LmlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIGVsZW1lbnQgPSBjaGlsZDtcbiAgICAgICAgICB2YXIgcGF0aCA9IGNoaWxkLnByb3BzLnBhdGggfHwgY2hpbGQucHJvcHMuZnJvbTtcbiAgICAgICAgICBtYXRjaCA9IHBhdGggPyBtYXRjaFBhdGgobG9jYXRpb24ucGF0aG5hbWUsIF9leHRlbmRzKHt9LCBjaGlsZC5wcm9wcywge1xuICAgICAgICAgICAgcGF0aDogcGF0aFxuICAgICAgICAgIH0pKSA6IGNvbnRleHQubWF0Y2g7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG1hdGNoID8gUmVhY3QuY2xvbmVFbGVtZW50KGVsZW1lbnQsIHtcbiAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgICBjb21wdXRlZE1hdGNoOiBtYXRjaFxuICAgICAgfSkgOiBudWxsO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBTd2l0Y2g7XG59KFJlYWN0LkNvbXBvbmVudCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgU3dpdGNoLnByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgbG9jYXRpb246IFByb3BUeXBlcy5vYmplY3RcbiAgfTtcblxuICBTd2l0Y2gucHJvdG90eXBlLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIChwcmV2UHJvcHMpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCEodGhpcy5wcm9wcy5sb2NhdGlvbiAmJiAhcHJldlByb3BzLmxvY2F0aW9uKSwgJzxTd2l0Y2g+IGVsZW1lbnRzIHNob3VsZCBub3QgY2hhbmdlIGZyb20gdW5jb250cm9sbGVkIHRvIGNvbnRyb2xsZWQgKG9yIHZpY2UgdmVyc2EpLiBZb3UgaW5pdGlhbGx5IHVzZWQgbm8gXCJsb2NhdGlvblwiIHByb3AgYW5kIHRoZW4gcHJvdmlkZWQgb25lIG9uIGEgc3Vic2VxdWVudCByZW5kZXIuJykgOiB2b2lkIDA7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyghKCF0aGlzLnByb3BzLmxvY2F0aW9uICYmIHByZXZQcm9wcy5sb2NhdGlvbiksICc8U3dpdGNoPiBlbGVtZW50cyBzaG91bGQgbm90IGNoYW5nZSBmcm9tIGNvbnRyb2xsZWQgdG8gdW5jb250cm9sbGVkIChvciB2aWNlIHZlcnNhKS4gWW91IHByb3ZpZGVkIGEgXCJsb2NhdGlvblwiIHByb3AgaW5pdGlhbGx5IGJ1dCBvbWl0dGVkIGl0IG9uIGEgc3Vic2VxdWVudCByZW5kZXIuJykgOiB2b2lkIDA7XG4gIH07XG59XG5cbi8qKlxuICogQSBwdWJsaWMgaGlnaGVyLW9yZGVyIGNvbXBvbmVudCB0byBhY2Nlc3MgdGhlIGltcGVyYXRpdmUgQVBJXG4gKi9cblxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb25lbnQpIHtcbiAgdmFyIGRpc3BsYXlOYW1lID0gXCJ3aXRoUm91dGVyKFwiICsgKENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSkgKyBcIilcIjtcblxuICB2YXIgQyA9IGZ1bmN0aW9uIEMocHJvcHMpIHtcbiAgICB2YXIgd3JhcHBlZENvbXBvbmVudFJlZiA9IHByb3BzLndyYXBwZWRDb21wb25lbnRSZWYsXG4gICAgICAgIHJlbWFpbmluZ1Byb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UocHJvcHMsIFtcIndyYXBwZWRDb21wb25lbnRSZWZcIl0pO1xuXG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoY29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICFjb250ZXh0ID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIllvdSBzaG91bGQgbm90IHVzZSA8XCIgKyBkaXNwbGF5TmFtZSArIFwiIC8+IG91dHNpZGUgYSA8Um91dGVyPlwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHt9LCByZW1haW5pbmdQcm9wcywgY29udGV4dCwge1xuICAgICAgICByZWY6IHdyYXBwZWRDb21wb25lbnRSZWZcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfTtcblxuICBDLmRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWU7XG4gIEMuV3JhcHBlZENvbXBvbmVudCA9IENvbXBvbmVudDtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgQy5wcm9wVHlwZXMgPSB7XG4gICAgICB3cmFwcGVkQ29tcG9uZW50UmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMuZnVuYywgUHJvcFR5cGVzLm9iamVjdF0pXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBob2lzdFN0YXRpY3MoQywgQ29tcG9uZW50KTtcbn1cblxudmFyIHVzZUNvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0O1xuZnVuY3Rpb24gdXNlSGlzdG9yeSgpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICEodHlwZW9mIHVzZUNvbnRleHQgPT09IFwiZnVuY3Rpb25cIikgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiWW91IG11c3QgdXNlIFJlYWN0ID49IDE2LjggaW4gb3JkZXIgdG8gdXNlIHVzZUhpc3RvcnkoKVwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIH1cblxuICByZXR1cm4gdXNlQ29udGV4dChjb250ZXh0KS5oaXN0b3J5O1xufVxuZnVuY3Rpb24gdXNlTG9jYXRpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICAhKHR5cGVvZiB1c2VDb250ZXh0ID09PSBcImZ1bmN0aW9uXCIpID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gaW52YXJpYW50KGZhbHNlLCBcIllvdSBtdXN0IHVzZSBSZWFjdCA+PSAxNi44IGluIG9yZGVyIHRvIHVzZSB1c2VMb2NhdGlvbigpXCIpIDogaW52YXJpYW50KGZhbHNlKSA6IHZvaWQgMDtcbiAgfVxuXG4gIHJldHVybiB1c2VDb250ZXh0KGNvbnRleHQpLmxvY2F0aW9uO1xufVxuZnVuY3Rpb24gdXNlUGFyYW1zKCkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgISh0eXBlb2YgdXNlQ29udGV4dCA9PT0gXCJmdW5jdGlvblwiKSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IGludmFyaWFudChmYWxzZSwgXCJZb3UgbXVzdCB1c2UgUmVhY3QgPj0gMTYuOCBpbiBvcmRlciB0byB1c2UgdXNlUGFyYW1zKClcIikgOiBpbnZhcmlhbnQoZmFsc2UpIDogdm9pZCAwO1xuICB9XG5cbiAgdmFyIG1hdGNoID0gdXNlQ29udGV4dChjb250ZXh0KS5tYXRjaDtcbiAgcmV0dXJuIG1hdGNoID8gbWF0Y2gucGFyYW1zIDoge307XG59XG5mdW5jdGlvbiB1c2VSb3V0ZU1hdGNoKHBhdGgpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICEodHlwZW9mIHVzZUNvbnRleHQgPT09IFwiZnVuY3Rpb25cIikgPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBpbnZhcmlhbnQoZmFsc2UsIFwiWW91IG11c3QgdXNlIFJlYWN0ID49IDE2LjggaW4gb3JkZXIgdG8gdXNlIHVzZVJvdXRlTWF0Y2goKVwiKSA6IGludmFyaWFudChmYWxzZSkgOiB2b2lkIDA7XG4gIH1cblxuICByZXR1cm4gcGF0aCA/IG1hdGNoUGF0aCh1c2VMb2NhdGlvbigpLnBhdGhuYW1lLCBwYXRoKSA6IHVzZUNvbnRleHQoY29udGV4dCkubWF0Y2g7XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgZ2xvYmFsID0gd2luZG93O1xuICAgIHZhciBrZXkgPSBcIl9fcmVhY3Rfcm91dGVyX2J1aWxkX19cIjtcbiAgICB2YXIgYnVpbGROYW1lcyA9IHtcbiAgICAgIGNqczogXCJDb21tb25KU1wiLFxuICAgICAgZXNtOiBcIkVTIG1vZHVsZXNcIixcbiAgICAgIHVtZDogXCJVTURcIlxuICAgIH07XG5cbiAgICBpZiAoZ2xvYmFsW2tleV0gJiYgZ2xvYmFsW2tleV0gIT09IFwiZXNtXCIpIHtcbiAgICAgIHZhciBpbml0aWFsQnVpbGROYW1lID0gYnVpbGROYW1lc1tnbG9iYWxba2V5XV07XG4gICAgICB2YXIgc2Vjb25kYXJ5QnVpbGROYW1lID0gYnVpbGROYW1lc1tcImVzbVwiXTsgLy8gVE9ETzogQWRkIGxpbmsgdG8gYXJ0aWNsZSB0aGF0IGV4cGxhaW5zIGluIGRldGFpbCBob3cgdG8gYXZvaWRcbiAgICAgIC8vIGxvYWRpbmcgMiBkaWZmZXJlbnQgYnVpbGRzLlxuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgYXJlIGxvYWRpbmcgdGhlIFwiICsgc2Vjb25kYXJ5QnVpbGROYW1lICsgXCIgYnVpbGQgb2YgUmVhY3QgUm91dGVyIFwiICsgKFwib24gYSBwYWdlIHRoYXQgaXMgYWxyZWFkeSBydW5uaW5nIHRoZSBcIiArIGluaXRpYWxCdWlsZE5hbWUgKyBcIiBcIikgKyBcImJ1aWxkLCBzbyB0aGluZ3Mgd29uJ3Qgd29yayByaWdodC5cIik7XG4gICAgfVxuXG4gICAgZ2xvYmFsW2tleV0gPSBcImVzbVwiO1xuICB9XG59XG5cbmV4cG9ydCB7IE1lbW9yeVJvdXRlciwgUHJvbXB0LCBSZWRpcmVjdCwgUm91dGUsIFJvdXRlciwgU3RhdGljUm91dGVyLCBTd2l0Y2gsIGNvbnRleHQgYXMgX19Sb3V0ZXJDb250ZXh0LCBnZW5lcmF0ZVBhdGgsIG1hdGNoUGF0aCwgdXNlSGlzdG9yeSwgdXNlTG9jYXRpb24sIHVzZVBhcmFtcywgdXNlUm91dGVNYXRjaCwgd2l0aFJvdXRlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVhY3Qtcm91dGVyLmpzLm1hcFxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufSIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgX2luaGVyaXRzTG9vc2UgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbmhlcml0c0xvb3NlJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgZ3VkIGZyb20gJ2d1ZCc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd0aW55LXdhcm5pbmcnO1xuXG52YXIgTUFYX1NJR05FRF8zMV9CSVRfSU5UID0gMTA3Mzc0MTgyMztcblxuZnVuY3Rpb24gb2JqZWN0SXMoeCwgeSkge1xuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUV2ZW50RW1pdHRlcih2YWx1ZSkge1xuICB2YXIgaGFuZGxlcnMgPSBbXTtcbiAgcmV0dXJuIHtcbiAgICBvbjogZnVuY3Rpb24gb24oaGFuZGxlcikge1xuICAgICAgaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICB9LFxuICAgIG9mZjogZnVuY3Rpb24gb2ZmKGhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXJzID0gaGFuZGxlcnMuZmlsdGVyKGZ1bmN0aW9uIChoKSB7XG4gICAgICAgIHJldHVybiBoICE9PSBoYW5kbGVyO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KG5ld1ZhbHVlLCBjaGFuZ2VkQml0cykge1xuICAgICAgdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgIGhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgcmV0dXJuIGhhbmRsZXIodmFsdWUsIGNoYW5nZWRCaXRzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuWzBdIDogY2hpbGRyZW47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlYWN0Q29udGV4dChkZWZhdWx0VmFsdWUsIGNhbGN1bGF0ZUNoYW5nZWRCaXRzKSB7XG4gIHZhciBfUHJvdmlkZXIkY2hpbGRDb250ZXgsIF9Db25zdW1lciRjb250ZXh0VHlwZTtcblxuICB2YXIgY29udGV4dFByb3AgPSAnX19jcmVhdGUtcmVhY3QtY29udGV4dC0nICsgZ3VkKCkgKyAnX18nO1xuXG4gIHZhciBQcm92aWRlciA9XG4gIC8qI19fUFVSRV9fKi9cbiAgZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICBfaW5oZXJpdHNMb29zZShQcm92aWRlciwgX0NvbXBvbmVudCk7XG5cbiAgICBmdW5jdGlvbiBQcm92aWRlcigpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgX3RoaXMgPSBfQ29tcG9uZW50LmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgfHwgdGhpcztcbiAgICAgIF90aGlzLmVtaXR0ZXIgPSBjcmVhdGVFdmVudEVtaXR0ZXIoX3RoaXMucHJvcHMudmFsdWUpO1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cblxuICAgIHZhciBfcHJvdG8gPSBQcm92aWRlci5wcm90b3R5cGU7XG5cbiAgICBfcHJvdG8uZ2V0Q2hpbGRDb250ZXh0ID0gZnVuY3Rpb24gZ2V0Q2hpbGRDb250ZXh0KCkge1xuICAgICAgdmFyIF9yZWY7XG5cbiAgICAgIHJldHVybiBfcmVmID0ge30sIF9yZWZbY29udGV4dFByb3BdID0gdGhpcy5lbWl0dGVyLCBfcmVmO1xuICAgIH07XG5cbiAgICBfcHJvdG8uY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy52YWx1ZSAhPT0gbmV4dFByb3BzLnZhbHVlKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMucHJvcHMudmFsdWU7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IG5leHRQcm9wcy52YWx1ZTtcbiAgICAgICAgdmFyIGNoYW5nZWRCaXRzO1xuXG4gICAgICAgIGlmIChvYmplY3RJcyhvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICAgICAgY2hhbmdlZEJpdHMgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoYW5nZWRCaXRzID0gdHlwZW9mIGNhbGN1bGF0ZUNoYW5nZWRCaXRzID09PSAnZnVuY3Rpb24nID8gY2FsY3VsYXRlQ2hhbmdlZEJpdHMob2xkVmFsdWUsIG5ld1ZhbHVlKSA6IE1BWF9TSUdORURfMzFfQklUX0lOVDtcblxuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB3YXJuaW5nKChjaGFuZ2VkQml0cyAmIE1BWF9TSUdORURfMzFfQklUX0lOVCkgPT09IGNoYW5nZWRCaXRzLCAnY2FsY3VsYXRlQ2hhbmdlZEJpdHM6IEV4cGVjdGVkIHRoZSByZXR1cm4gdmFsdWUgdG8gYmUgYSAnICsgJzMxLWJpdCBpbnRlZ2VyLiBJbnN0ZWFkIHJlY2VpdmVkOiAnICsgY2hhbmdlZEJpdHMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNoYW5nZWRCaXRzIHw9IDA7XG5cbiAgICAgICAgICBpZiAoY2hhbmdlZEJpdHMgIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdHRlci5zZXQobmV4dFByb3BzLnZhbHVlLCBjaGFuZ2VkQml0cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90by5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFByb3ZpZGVyO1xuICB9KENvbXBvbmVudCk7XG5cbiAgUHJvdmlkZXIuY2hpbGRDb250ZXh0VHlwZXMgPSAoX1Byb3ZpZGVyJGNoaWxkQ29udGV4ID0ge30sIF9Qcm92aWRlciRjaGlsZENvbnRleFtjb250ZXh0UHJvcF0gPSBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsIF9Qcm92aWRlciRjaGlsZENvbnRleCk7XG5cbiAgdmFyIENvbnN1bWVyID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX0NvbXBvbmVudDIpIHtcbiAgICBfaW5oZXJpdHNMb29zZShDb25zdW1lciwgX0NvbXBvbmVudDIpO1xuXG4gICAgZnVuY3Rpb24gQ29uc3VtZXIoKSB7XG4gICAgICB2YXIgX3RoaXMyO1xuXG4gICAgICBfdGhpczIgPSBfQ29tcG9uZW50Mi5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICBfdGhpczIuc3RhdGUgPSB7XG4gICAgICAgIHZhbHVlOiBfdGhpczIuZ2V0VmFsdWUoKVxuICAgICAgfTtcblxuICAgICAgX3RoaXMyLm9uVXBkYXRlID0gZnVuY3Rpb24gKG5ld1ZhbHVlLCBjaGFuZ2VkQml0cykge1xuICAgICAgICB2YXIgb2JzZXJ2ZWRCaXRzID0gX3RoaXMyLm9ic2VydmVkQml0cyB8IDA7XG5cbiAgICAgICAgaWYgKChvYnNlcnZlZEJpdHMgJiBjaGFuZ2VkQml0cykgIT09IDApIHtcbiAgICAgICAgICBfdGhpczIuc2V0U3RhdGUoe1xuICAgICAgICAgICAgdmFsdWU6IF90aGlzMi5nZXRWYWx1ZSgpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBfdGhpczI7XG4gICAgfVxuXG4gICAgdmFyIF9wcm90bzIgPSBDb25zdW1lci5wcm90b3R5cGU7XG5cbiAgICBfcHJvdG8yLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xuICAgICAgdmFyIG9ic2VydmVkQml0cyA9IG5leHRQcm9wcy5vYnNlcnZlZEJpdHM7XG4gICAgICB0aGlzLm9ic2VydmVkQml0cyA9IG9ic2VydmVkQml0cyA9PT0gdW5kZWZpbmVkIHx8IG9ic2VydmVkQml0cyA9PT0gbnVsbCA/IE1BWF9TSUdORURfMzFfQklUX0lOVCA6IG9ic2VydmVkQml0cztcbiAgICB9O1xuXG4gICAgX3Byb3RvMi5jb21wb25lbnREaWRNb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgaWYgKHRoaXMuY29udGV4dFtjb250ZXh0UHJvcF0pIHtcbiAgICAgICAgdGhpcy5jb250ZXh0W2NvbnRleHRQcm9wXS5vbih0aGlzLm9uVXBkYXRlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIG9ic2VydmVkQml0cyA9IHRoaXMucHJvcHMub2JzZXJ2ZWRCaXRzO1xuICAgICAgdGhpcy5vYnNlcnZlZEJpdHMgPSBvYnNlcnZlZEJpdHMgPT09IHVuZGVmaW5lZCB8fCBvYnNlcnZlZEJpdHMgPT09IG51bGwgPyBNQVhfU0lHTkVEXzMxX0JJVF9JTlQgOiBvYnNlcnZlZEJpdHM7XG4gICAgfTtcblxuICAgIF9wcm90bzIuY29tcG9uZW50V2lsbFVubW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgIGlmICh0aGlzLmNvbnRleHRbY29udGV4dFByb3BdKSB7XG4gICAgICAgIHRoaXMuY29udGV4dFtjb250ZXh0UHJvcF0ub2ZmKHRoaXMub25VcGRhdGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBfcHJvdG8yLmdldFZhbHVlID0gZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICBpZiAodGhpcy5jb250ZXh0W2NvbnRleHRQcm9wXSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0W2NvbnRleHRQcm9wXS5nZXQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIF9wcm90bzIucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIG9ubHlDaGlsZCh0aGlzLnByb3BzLmNoaWxkcmVuKSh0aGlzLnN0YXRlLnZhbHVlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIENvbnN1bWVyO1xuICB9KENvbXBvbmVudCk7XG5cbiAgQ29uc3VtZXIuY29udGV4dFR5cGVzID0gKF9Db25zdW1lciRjb250ZXh0VHlwZSA9IHt9LCBfQ29uc3VtZXIkY29udGV4dFR5cGVbY29udGV4dFByb3BdID0gUHJvcFR5cGVzLm9iamVjdCwgX0NvbnN1bWVyJGNvbnRleHRUeXBlKTtcbiAgcmV0dXJuIHtcbiAgICBQcm92aWRlcjogUHJvdmlkZXIsXG4gICAgQ29uc3VtZXI6IENvbnN1bWVyXG4gIH07XG59XG5cbnZhciBpbmRleCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQgfHwgY3JlYXRlUmVhY3RDb250ZXh0O1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiIsImZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHNMb29zZTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0Y29tcGFyZVR3b1N0cmluZ3MsXG5cdGZpbmRCZXN0TWF0Y2hcbn07XG5cbmZ1bmN0aW9uIGNvbXBhcmVUd29TdHJpbmdzIChzdHIxLCBzdHIyKSB7XG5cdGlmICghc3RyMS5sZW5ndGggJiYgIXN0cjIubGVuZ3RoKSByZXR1cm4gMTsgICAgICAgICAgICAgICAgICAgIC8vIGlmIGJvdGggYXJlIGVtcHR5IHN0cmluZ3Ncblx0aWYgKCFzdHIxLmxlbmd0aCB8fCAhc3RyMi5sZW5ndGgpIHJldHVybiAwOyAgICAgICAgICAgICAgICAgICAgLy8gaWYgb25seSBvbmUgaXMgZW1wdHkgc3RyaW5nXG5cdGlmIChzdHIxLnRvVXBwZXJDYXNlKCkgPT09IHN0cjIudG9VcHBlckNhc2UoKSkgcmV0dXJuIDE7ICAgICAgIC8vIGlkZW50aWNhbFxuXHRpZiAoc3RyMS5sZW5ndGggPT09IDEgJiYgc3RyMi5sZW5ndGggPT09IDEpIHJldHVybiAwOyAgICAgICAgICAvLyBib3RoIGFyZSAxLWxldHRlciBzdHJpbmdzXG5cblx0Y29uc3QgcGFpcnMxID0gd29yZExldHRlclBhaXJzKHN0cjEpO1xuXHRjb25zdCBwYWlyczIgPSB3b3JkTGV0dGVyUGFpcnMoc3RyMik7XG5cdGNvbnN0IHVuaW9uID0gcGFpcnMxLmxlbmd0aCArIHBhaXJzMi5sZW5ndGg7XG5cdGxldCBpbnRlcnNlY3Rpb24gPSAwO1xuXHRwYWlyczEuZm9yRWFjaChwYWlyMSA9PiB7XG5cdFx0Zm9yIChsZXQgaSA9IDAsIHBhaXIyOyBwYWlyMiA9IHBhaXJzMltpXTsgaSsrKSB7XG5cdFx0XHRpZiAocGFpcjEgIT09IHBhaXIyKSBjb250aW51ZTtcblx0XHRcdGludGVyc2VjdGlvbisrO1xuXHRcdFx0cGFpcnMyLnNwbGljZShpLCAxKTtcblx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBpbnRlcnNlY3Rpb24gKiAyIC8gdW5pb247XG59XG5cbmZ1bmN0aW9uIGZpbmRCZXN0TWF0Y2ggKG1haW5TdHJpbmcsIHRhcmdldFN0cmluZ3MpIHtcblx0aWYgKCFhcmVBcmdzVmFsaWQobWFpblN0cmluZywgdGFyZ2V0U3RyaW5ncykpIHRocm93IG5ldyBFcnJvcignQmFkIGFyZ3VtZW50czogRmlyc3QgYXJndW1lbnQgc2hvdWxkIGJlIGEgc3RyaW5nLCBzZWNvbmQgc2hvdWxkIGJlIGFuIGFycmF5IG9mIHN0cmluZ3MnKTtcblx0Y29uc3QgcmF0aW5ncyA9IHRhcmdldFN0cmluZ3MubWFwKHRhcmdldCA9PiAoeyB0YXJnZXQsIHJhdGluZzogY29tcGFyZVR3b1N0cmluZ3MobWFpblN0cmluZywgdGFyZ2V0KSB9KSk7XG5cdGNvbnN0IGJlc3RNYXRjaCA9IEFycmF5LmZyb20ocmF0aW5ncykuc29ydCgoYSwgYikgPT4gYi5yYXRpbmcgLSBhLnJhdGluZylbMF07XG5cdHJldHVybiB7IHJhdGluZ3MsIGJlc3RNYXRjaCB9O1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuRGVlcCAoYXJyKSB7XG5cdHJldHVybiBBcnJheS5pc0FycmF5KGFycikgPyBhcnIucmVkdWNlKChhLCBiKSA9PiBhLmNvbmNhdChmbGF0dGVuRGVlcChiKSkgLCBbXSkgOiBbYXJyXTtcbn1cblxuZnVuY3Rpb24gYXJlQXJnc1ZhbGlkIChtYWluU3RyaW5nLCB0YXJnZXRTdHJpbmdzKSB7XG5cdGlmICh0eXBlb2YgbWFpblN0cmluZyAhPT0gJ3N0cmluZycpIHJldHVybiBmYWxzZTtcblx0aWYgKCFBcnJheS5pc0FycmF5KHRhcmdldFN0cmluZ3MpKSByZXR1cm4gZmFsc2U7XG5cdGlmICghdGFyZ2V0U3RyaW5ncy5sZW5ndGgpIHJldHVybiBmYWxzZTtcblx0aWYgKHRhcmdldFN0cmluZ3MuZmluZChzID0+IHR5cGVvZiBzICE9PSAnc3RyaW5nJykpIHJldHVybiBmYWxzZTtcblx0cmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGxldHRlclBhaXJzIChzdHIpIHtcblx0Y29uc3QgcGFpcnMgPSBbXTtcblx0Zm9yIChsZXQgaSA9IDAsIG1heCA9IHN0ci5sZW5ndGggLSAxOyBpIDwgbWF4OyBpKyspIHBhaXJzW2ldID0gc3RyLnN1YnN0cmluZyhpLCBpICsgMik7XG5cdHJldHVybiBwYWlycztcbn1cblxuZnVuY3Rpb24gd29yZExldHRlclBhaXJzIChzdHIpIHtcblx0Y29uc3QgcGFpcnMgPSBzdHIudG9VcHBlckNhc2UoKS5zcGxpdCgnICcpLm1hcChsZXR0ZXJQYWlycyk7XG5cdHJldHVybiBmbGF0dGVuRGVlcChwYWlycyk7XG59XG4iLCJpbXBvcnQgYmFzZUl0ZXJhdGVlIGZyb20gJy4vX2Jhc2VJdGVyYXRlZS5qcyc7XG5pbXBvcnQgYmFzZU1lYW4gZnJvbSAnLi9fYmFzZU1lYW4uanMnO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8ubWVhbmAgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBgaXRlcmF0ZWVgIHdoaWNoIGlzXG4gKiBpbnZva2VkIGZvciBlYWNoIGVsZW1lbnQgaW4gYGFycmF5YCB0byBnZW5lcmF0ZSB0aGUgdmFsdWUgdG8gYmUgYXZlcmFnZWQuXG4gKiBUaGUgaXRlcmF0ZWUgaXMgaW52b2tlZCB3aXRoIG9uZSBhcmd1bWVudDogKHZhbHVlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuNy4wXG4gKiBAY2F0ZWdvcnkgTWF0aFxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtpdGVyYXRlZT1fLmlkZW50aXR5XSBUaGUgaXRlcmF0ZWUgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG1lYW4uXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3RzID0gW3sgJ24nOiA0IH0sIHsgJ24nOiAyIH0sIHsgJ24nOiA4IH0sIHsgJ24nOiA2IH1dO1xuICpcbiAqIF8ubWVhbkJ5KG9iamVjdHMsIGZ1bmN0aW9uKG8pIHsgcmV0dXJuIG8ubjsgfSk7XG4gKiAvLyA9PiA1XG4gKlxuICogLy8gVGhlIGBfLnByb3BlcnR5YCBpdGVyYXRlZSBzaG9ydGhhbmQuXG4gKiBfLm1lYW5CeShvYmplY3RzLCAnbicpO1xuICogLy8gPT4gNVxuICovXG5mdW5jdGlvbiBtZWFuQnkoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHJldHVybiBiYXNlTWVhbihhcnJheSwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlLCAyKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lYW5CeTtcbiIsImltcG9ydCBiYXNlU3VtIGZyb20gJy4vX2Jhc2VTdW0uanMnO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tZWFuYCBhbmQgYF8ubWVhbkJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG1lYW4uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNZWFuKGFycmF5LCBpdGVyYXRlZSkge1xuICB2YXIgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIHJldHVybiBsZW5ndGggPyAoYmFzZVN1bShhcnJheSwgaXRlcmF0ZWUpIC8gbGVuZ3RoKSA6IE5BTjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZU1lYW47XG4iLCIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLnN1bWAgYW5kIGBfLnN1bUJ5YCB3aXRob3V0IHN1cHBvcnQgZm9yXG4gKiBpdGVyYXRlZSBzaG9ydGhhbmRzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIHN1bS5cbiAqL1xuZnVuY3Rpb24gYmFzZVN1bShhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIHJlc3VsdCxcbiAgICAgIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgY3VycmVudCA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSk7XG4gICAgaWYgKGN1cnJlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0ID09PSB1bmRlZmluZWQgPyBjdXJyZW50IDogKHJlc3VsdCArIGN1cnJlbnQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlU3VtO1xuIiwiaW1wb3J0IGJhc2VJdGVyYXRlZSBmcm9tICcuL19iYXNlSXRlcmF0ZWUuanMnO1xuaW1wb3J0IGJhc2VTdW0gZnJvbSAnLi9fYmFzZVN1bS5qcyc7XG5cbi8qKlxuICogVGhpcyBtZXRob2QgaXMgbGlrZSBgXy5zdW1gIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYGl0ZXJhdGVlYCB3aGljaCBpc1xuICogaW52b2tlZCBmb3IgZWFjaCBlbGVtZW50IGluIGBhcnJheWAgdG8gZ2VuZXJhdGUgdGhlIHZhbHVlIHRvIGJlIHN1bW1lZC5cbiAqIFRoZSBpdGVyYXRlZSBpcyBpbnZva2VkIHdpdGggb25lIGFyZ3VtZW50OiAodmFsdWUpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBNYXRoXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgc3VtLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0cyA9IFt7ICduJzogNCB9LCB7ICduJzogMiB9LCB7ICduJzogOCB9LCB7ICduJzogNiB9XTtcbiAqXG4gKiBfLnN1bUJ5KG9iamVjdHMsIGZ1bmN0aW9uKG8pIHsgcmV0dXJuIG8ubjsgfSk7XG4gKiAvLyA9PiAyMFxuICpcbiAqIC8vIFRoZSBgXy5wcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy5zdW1CeShvYmplY3RzLCAnbicpO1xuICogLy8gPT4gMjBcbiAqL1xuZnVuY3Rpb24gc3VtQnkoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHJldHVybiAoYXJyYXkgJiYgYXJyYXkubGVuZ3RoKVxuICAgID8gYmFzZVN1bShhcnJheSwgYmFzZUl0ZXJhdGVlKGl0ZXJhdGVlLCAyKSlcbiAgICA6IDA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN1bUJ5O1xuIiwiaW1wb3J0IGJhc2VBc3NpZ25WYWx1ZSBmcm9tICcuL19iYXNlQXNzaWduVmFsdWUuanMnO1xuaW1wb3J0IGNyZWF0ZUFnZ3JlZ2F0b3IgZnJvbSAnLi9fY3JlYXRlQWdncmVnYXRvci5qcyc7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgY29tcG9zZWQgb2Yga2V5cyBnZW5lcmF0ZWQgZnJvbSB0aGUgcmVzdWx0cyBvZiBydW5uaW5nXG4gKiBlYWNoIGVsZW1lbnQgb2YgYGNvbGxlY3Rpb25gIHRocnUgYGl0ZXJhdGVlYC4gVGhlIG9yZGVyIG9mIGdyb3VwZWQgdmFsdWVzXG4gKiBpcyBkZXRlcm1pbmVkIGJ5IHRoZSBvcmRlciB0aGV5IG9jY3VyIGluIGBjb2xsZWN0aW9uYC4gVGhlIGNvcnJlc3BvbmRpbmdcbiAqIHZhbHVlIG9mIGVhY2gga2V5IGlzIGFuIGFycmF5IG9mIGVsZW1lbnRzIHJlc3BvbnNpYmxlIGZvciBnZW5lcmF0aW5nIHRoZVxuICoga2V5LiBUaGUgaXRlcmF0ZWUgaXMgaW52b2tlZCB3aXRoIG9uZSBhcmd1bWVudDogKHZhbHVlKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBpdGVyYXRlZSB0byB0cmFuc2Zvcm0ga2V5cy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGNvbXBvc2VkIGFnZ3JlZ2F0ZSBvYmplY3QuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZ3JvdXBCeShbNi4xLCA0LjIsIDYuM10sIE1hdGguZmxvb3IpO1xuICogLy8gPT4geyAnNCc6IFs0LjJdLCAnNic6IFs2LjEsIDYuM10gfVxuICpcbiAqIC8vIFRoZSBgXy5wcm9wZXJ0eWAgaXRlcmF0ZWUgc2hvcnRoYW5kLlxuICogXy5ncm91cEJ5KFsnb25lJywgJ3R3bycsICd0aHJlZSddLCAnbGVuZ3RoJyk7XG4gKiAvLyA9PiB7ICczJzogWydvbmUnLCAndHdvJ10sICc1JzogWyd0aHJlZSddIH1cbiAqL1xudmFyIGdyb3VwQnkgPSBjcmVhdGVBZ2dyZWdhdG9yKGZ1bmN0aW9uKHJlc3VsdCwgdmFsdWUsIGtleSkge1xuICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChyZXN1bHQsIGtleSkpIHtcbiAgICByZXN1bHRba2V5XS5wdXNoKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBiYXNlQXNzaWduVmFsdWUocmVzdWx0LCBrZXksIFt2YWx1ZV0pO1xuICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZ3JvdXBCeTtcbiIsImltcG9ydCBhcnJheUFnZ3JlZ2F0b3IgZnJvbSAnLi9fYXJyYXlBZ2dyZWdhdG9yLmpzJztcbmltcG9ydCBiYXNlQWdncmVnYXRvciBmcm9tICcuL19iYXNlQWdncmVnYXRvci5qcyc7XG5pbXBvcnQgYmFzZUl0ZXJhdGVlIGZyb20gJy4vX2Jhc2VJdGVyYXRlZS5qcyc7XG5pbXBvcnQgaXNBcnJheSBmcm9tICcuL2lzQXJyYXkuanMnO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiBsaWtlIGBfLmdyb3VwQnlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBzZXR0ZXIgVGhlIGZ1bmN0aW9uIHRvIHNldCBhY2N1bXVsYXRvciB2YWx1ZXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaW5pdGlhbGl6ZXJdIFRoZSBhY2N1bXVsYXRvciBvYmplY3QgaW5pdGlhbGl6ZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBhZ2dyZWdhdG9yIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVBZ2dyZWdhdG9yKHNldHRlciwgaW5pdGlhbGl6ZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XG4gICAgdmFyIGZ1bmMgPSBpc0FycmF5KGNvbGxlY3Rpb24pID8gYXJyYXlBZ2dyZWdhdG9yIDogYmFzZUFnZ3JlZ2F0b3IsXG4gICAgICAgIGFjY3VtdWxhdG9yID0gaW5pdGlhbGl6ZXIgPyBpbml0aWFsaXplcigpIDoge307XG5cbiAgICByZXR1cm4gZnVuYyhjb2xsZWN0aW9uLCBzZXR0ZXIsIGJhc2VJdGVyYXRlZShpdGVyYXRlZSwgMiksIGFjY3VtdWxhdG9yKTtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWdncmVnYXRvcjtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlQWdncmVnYXRvcmAgZm9yIGFycmF5cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc2V0dGVyIFRoZSBmdW5jdGlvbiB0byBzZXQgYGFjY3VtdWxhdG9yYCB2YWx1ZXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgaXRlcmF0ZWUgdG8gdHJhbnNmb3JtIGtleXMuXG4gKiBAcGFyYW0ge09iamVjdH0gYWNjdW11bGF0b3IgVGhlIGluaXRpYWwgYWdncmVnYXRlZCBvYmplY3QuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgYGFjY3VtdWxhdG9yYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlBZ2dyZWdhdG9yKGFycmF5LCBzZXR0ZXIsIGl0ZXJhdGVlLCBhY2N1bXVsYXRvcikge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIHNldHRlcihhY2N1bXVsYXRvciwgdmFsdWUsIGl0ZXJhdGVlKHZhbHVlKSwgYXJyYXkpO1xuICB9XG4gIHJldHVybiBhY2N1bXVsYXRvcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXJyYXlBZ2dyZWdhdG9yO1xuIiwiaW1wb3J0IGJhc2VFYWNoIGZyb20gJy4vX2Jhc2VFYWNoLmpzJztcblxuLyoqXG4gKiBBZ2dyZWdhdGVzIGVsZW1lbnRzIG9mIGBjb2xsZWN0aW9uYCBvbiBgYWNjdW11bGF0b3JgIHdpdGgga2V5cyB0cmFuc2Zvcm1lZFxuICogYnkgYGl0ZXJhdGVlYCBhbmQgdmFsdWVzIHNldCBieSBgc2V0dGVyYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc2V0dGVyIFRoZSBmdW5jdGlvbiB0byBzZXQgYGFjY3VtdWxhdG9yYCB2YWx1ZXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgaXRlcmF0ZWUgdG8gdHJhbnNmb3JtIGtleXMuXG4gKiBAcGFyYW0ge09iamVjdH0gYWNjdW11bGF0b3IgVGhlIGluaXRpYWwgYWdncmVnYXRlZCBvYmplY3QuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgYGFjY3VtdWxhdG9yYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUFnZ3JlZ2F0b3IoY29sbGVjdGlvbiwgc2V0dGVyLCBpdGVyYXRlZSwgYWNjdW11bGF0b3IpIHtcbiAgYmFzZUVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGtleSwgY29sbGVjdGlvbikge1xuICAgIHNldHRlcihhY2N1bXVsYXRvciwgdmFsdWUsIGl0ZXJhdGVlKHZhbHVlKSwgY29sbGVjdGlvbik7XG4gIH0pO1xuICByZXR1cm4gYWNjdW11bGF0b3I7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VBZ2dyZWdhdG9yO1xuIiwiLypcbiBIaWdoY2hhcnRzIEpTIHY2LjIuMCAoMjAxOC0xMC0xNylcblxuIChjKSAyMDE0IEhpZ2hzb2Z0IEFTXG4gQXV0aG9yczogSm9uIEFyaWxkIE55Z2FyZCAvIE95c3RlaW4gTW9zZW5nXG5cbiBMaWNlbnNlOiB3d3cuaGlnaGNoYXJ0cy5jb20vbGljZW5zZVxuKi9cbihmdW5jdGlvbih2KXtcIm9iamVjdFwiPT09dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9djpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShmdW5jdGlvbigpe3JldHVybiB2fSk6dihIaWdoY2hhcnRzKX0pKGZ1bmN0aW9uKHYpe3ZhciBIPWZ1bmN0aW9uKGIpe3ZhciB2PWIuZWFjaCxCPWIuZXh0ZW5kLEU9Yi5pc0FycmF5LHQ9Yi5pc09iamVjdCxwPWIuaXNOdW1iZXIsRz1iLm1lcmdlLHo9Yi5waWNrLGw9Yi5yZWR1Y2U7cmV0dXJue2dldENvbG9yOmZ1bmN0aW9uKG4sbSl7dmFyIHE9bS5pbmRleCxmPW0ubWFwT3B0aW9uc1RvTGV2ZWwsbD1tLnBhcmVudENvbG9yLHk9bS5wYXJlbnRDb2xvckluZGV4LEY9bS5zZXJpZXMsZD1tLmNvbG9ycyxBPW0uc2libGluZ3Mscj1GLnBvaW50cyx4LHQscCxDO2lmKG4pe3I9cltuLmldO249ZltuLmxldmVsXXx8e307aWYoeD1yJiZuLmNvbG9yQnlQb2ludClwPXIuaW5kZXglKGQ/XG5kLmxlbmd0aDpGLmNoYXJ0Lm9wdGlvbnMuY2hhcnQuY29sb3JDb3VudCksdD1kJiZkW3BdO2Q9ciYmci5vcHRpb25zLmNvbG9yO3g9biYmbi5jb2xvcjtpZihmPWwpZj0oZj1uJiZuLmNvbG9yVmFyaWF0aW9uKSYmXCJicmlnaHRuZXNzXCI9PT1mLmtleT9iLmNvbG9yKGwpLmJyaWdodGVuKHEvQSpmLnRvKS5nZXQoKTpsO3g9eihkLHgsdCxmLEYuY29sb3IpO0M9eihyJiZyLm9wdGlvbnMuY29sb3JJbmRleCxuJiZuLmNvbG9ySW5kZXgscCx5LG0uY29sb3JJbmRleCl9cmV0dXJue2NvbG9yOngsY29sb3JJbmRleDpDfX0sZ2V0TGV2ZWxPcHRpb25zOmZ1bmN0aW9uKGIpe3ZhciBtPW51bGwscSxmLG4seTtpZih0KGIpKWZvcihtPXt9LG49cChiLmZyb20pP2IuZnJvbToxLHk9Yi5sZXZlbHMsZj17fSxxPXQoYi5kZWZhdWx0cyk/Yi5kZWZhdWx0czp7fSxFKHkpJiYoZj1sKHksZnVuY3Rpb24oYixkKXt2YXIgZixtO3QoZCkmJnAoZC5sZXZlbCkmJihtPUcoe30sZCksZj1cImJvb2xlYW5cIj09PVxudHlwZW9mIG0ubGV2ZWxJc0NvbnN0YW50P20ubGV2ZWxJc0NvbnN0YW50OnEubGV2ZWxJc0NvbnN0YW50LGRlbGV0ZSBtLmxldmVsSXNDb25zdGFudCxkZWxldGUgbS5sZXZlbCxkPWQubGV2ZWwrKGY/MDpuLTEpLHQoYltkXSk/QihiW2RdLG0pOmJbZF09bSk7cmV0dXJuIGJ9LHt9KSkseT1wKGIudG8pP2IudG86MSxiPTA7Yjw9eTtiKyspbVtiXT1HKHt9LHEsdChmW2JdKT9mW2JdOnt9KTtyZXR1cm4gbX0sc2V0VHJlZVZhbHVlczpmdW5jdGlvbiBtKGIsZil7dmFyIGw9Zi5iZWZvcmUscT1mLmlkUm9vdCx0PWYubWFwSWRUb05vZGVbcV0sZD1mLnBvaW50c1tiLmldLHA9ZCYmZC5vcHRpb25zfHx7fSxyPTAseD1bXTtCKGIse2xldmVsRHluYW1pYzpiLmxldmVsLSgoXCJib29sZWFuXCI9PT10eXBlb2YgZi5sZXZlbElzQ29uc3RhbnQ/Zi5sZXZlbElzQ29uc3RhbnQ6MSk/MDp0LmxldmVsKSxuYW1lOnooZCYmZC5uYW1lLFwiXCIpLHZpc2libGU6cT09PWIuaWR8fChcImJvb2xlYW5cIj09PXR5cGVvZiBmLnZpc2libGU/XG5mLnZpc2libGU6ITEpfSk7XCJmdW5jdGlvblwiPT09dHlwZW9mIGwmJihiPWwoYixmKSk7dihiLmNoaWxkcmVuLGZ1bmN0aW9uKGQsbCl7dmFyIHE9Qih7fSxmKTtCKHEse2luZGV4Omwsc2libGluZ3M6Yi5jaGlsZHJlbi5sZW5ndGgsdmlzaWJsZTpiLnZpc2libGV9KTtkPW0oZCxxKTt4LnB1c2goZCk7ZC52aXNpYmxlJiYocis9ZC52YWwpfSk7Yi52aXNpYmxlPTA8cnx8Yi52aXNpYmxlO2w9eihwLnZhbHVlLHIpO0IoYix7Y2hpbGRyZW46eCxjaGlsZHJlblRvdGFsOnIsaXNMZWFmOmIudmlzaWJsZSYmIXIsdmFsOmx9KTtyZXR1cm4gYn0sdXBkYXRlUm9vdElkOmZ1bmN0aW9uKGIpe3ZhciBsO3QoYikmJihsPXQoYi5vcHRpb25zKT9iLm9wdGlvbnM6e30sbD16KGIucm9vdE5vZGUsbC5yb290SWQsXCJcIiksdChiLnVzZXJPcHRpb25zKSYmKGIudXNlck9wdGlvbnMucm9vdElkPWwpLGIucm9vdE5vZGU9bCk7cmV0dXJuIGx9fX0odik7KGZ1bmN0aW9uKGIsdil7dmFyIEI9Yi5zZXJpZXNUeXBlLFxuRT1iLnNlcmllc1R5cGVzLHQ9Yi5tYXAscD1iLm1lcmdlLEc9Yi5leHRlbmQsej1iLm5vb3AsbD1iLmVhY2gsbj12LmdldENvbG9yLG09di5nZXRMZXZlbE9wdGlvbnMscT1iLmdyZXAsZj1iLmlzQXJyYXksSD1iLmlzTnVtYmVyLHk9Yi5pc09iamVjdCxGPWIuaXNTdHJpbmcsZD1iLnBpY2ssQT1iLlNlcmllcyxyPWIuc3RhYmxlU29ydCx4PWIuQ29sb3IsSj1mdW5jdGlvbihhLGMsZSl7ZT1lfHx0aGlzO2Iub2JqZWN0RWFjaChhLGZ1bmN0aW9uKGIsZyl7Yy5jYWxsKGUsYixnLGEpfSl9LEk9Yi5yZWR1Y2UsQz1mdW5jdGlvbihhLGMsZSl7ZT1lfHx0aGlzO2E9Yy5jYWxsKGUsYSk7ITEhPT1hJiZDKGEsYyxlKX0sSz12LnVwZGF0ZVJvb3RJZDtCKFwidHJlZW1hcFwiLFwic2NhdHRlclwiLHtzaG93SW5MZWdlbmQ6ITEsbWFya2VyOiExLGNvbG9yQnlQb2ludDohMSxkYXRhTGFiZWxzOntlbmFibGVkOiEwLGRlZmVyOiExLHZlcnRpY2FsQWxpZ246XCJtaWRkbGVcIixmb3JtYXR0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wb2ludC5uYW1lfHxcbnRoaXMucG9pbnQuaWR9LGluc2lkZTohMH0sdG9vbHRpcDp7aGVhZGVyRm9ybWF0OlwiXCIscG9pbnRGb3JtYXQ6XCJcXHgzY2JcXHgzZXtwb2ludC5uYW1lfVxceDNjL2JcXHgzZToge3BvaW50LnZhbHVlfVxceDNjYnIvXFx4M2VcIn0saWdub3JlSGlkZGVuUG9pbnQ6ITAsbGF5b3V0QWxnb3JpdGhtOlwic2xpY2VBbmREaWNlXCIsbGF5b3V0U3RhcnRpbmdEaXJlY3Rpb246XCJ2ZXJ0aWNhbFwiLGFsdGVybmF0ZVN0YXJ0aW5nRGlyZWN0aW9uOiExLGxldmVsSXNDb25zdGFudDohMCxkcmlsbFVwQnV0dG9uOntwb3NpdGlvbjp7YWxpZ246XCJyaWdodFwiLHg6LTEwLHk6MTB9fSxib3JkZXJDb2xvcjpcIiNlNmU2ZTZcIixib3JkZXJXaWR0aDoxLG9wYWNpdHk6LjE1LHN0YXRlczp7aG92ZXI6e2JvcmRlckNvbG9yOlwiIzk5OTk5OVwiLGJyaWdodG5lc3M6RS5oZWF0bWFwPzA6LjEsaGFsbzohMSxvcGFjaXR5Oi43NSxzaGFkb3c6ITF9fX0se3BvaW50QXJyYXlNYXA6W1widmFsdWVcIl0sZGlyZWN0VG91Y2g6ITAsb3B0aW9uYWxBeGlzOlwiY29sb3JBeGlzXCIsXG5nZXRTeW1ib2w6eixwYXJhbGxlbEFycmF5czpbXCJ4XCIsXCJ5XCIsXCJ2YWx1ZVwiLFwiY29sb3JWYWx1ZVwiXSxjb2xvcktleTpcImNvbG9yVmFsdWVcIix0cmFja2VyR3JvdXBzOltcImdyb3VwXCIsXCJkYXRhTGFiZWxzR3JvdXBcIl0sZ2V0TGlzdE9mUGFyZW50czpmdW5jdGlvbihhLGMpe2E9ZihhKT9hOltdO3ZhciBlPWYoYyk/YzpbXTtjPUkoYSxmdW5jdGlvbihhLGMsZSl7Yz1kKGMucGFyZW50LFwiXCIpO3ZvaWQgMD09PWFbY10mJihhW2NdPVtdKTthW2NdLnB1c2goZSk7cmV0dXJuIGF9LHtcIlwiOltdfSk7SihjLGZ1bmN0aW9uKGEsYyxoKXtcIlwiIT09YyYmLTE9PT1iLmluQXJyYXkoYyxlKSYmKGwoYSxmdW5jdGlvbihhKXtoW1wiXCJdLnB1c2goYSl9KSxkZWxldGUgaFtjXSl9KTtyZXR1cm4gY30sZ2V0VHJlZTpmdW5jdGlvbigpe3ZhciBhPXQodGhpcy5kYXRhLGZ1bmN0aW9uKGEpe3JldHVybiBhLmlkfSksYT10aGlzLmdldExpc3RPZlBhcmVudHModGhpcy5kYXRhLGEpO3RoaXMubm9kZU1hcD1bXTtyZXR1cm4gdGhpcy5idWlsZE5vZGUoXCJcIixcbi0xLDAsYSxudWxsKX0saW5pdDpmdW5jdGlvbihhLGMpe3ZhciBlPWIuY29sb3JTZXJpZXNNaXhpbjtiLmNvbG9yU2VyaWVzTWl4aW4mJih0aGlzLnRyYW5zbGF0ZUNvbG9ycz1lLnRyYW5zbGF0ZUNvbG9ycyx0aGlzLmNvbG9yQXR0cmlicz1lLmNvbG9yQXR0cmlicyx0aGlzLmF4aXNUeXBlcz1lLmF4aXNUeXBlcyk7QS5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMsYSxjKTt0aGlzLm9wdGlvbnMuYWxsb3dEcmlsbFRvTm9kZSYmYi5hZGRFdmVudCh0aGlzLFwiY2xpY2tcIix0aGlzLm9uQ2xpY2tEcmlsbFRvTm9kZSl9LGJ1aWxkTm9kZTpmdW5jdGlvbihhLGMsZSxiLGcpe3ZhciBoPXRoaXMsdz1bXSxrPWgucG9pbnRzW2NdLGQ9MCxmO2woYlthXXx8W10sZnVuY3Rpb24oYyl7Zj1oLmJ1aWxkTm9kZShoLnBvaW50c1tjXS5pZCxjLGUrMSxiLGEpO2Q9TWF0aC5tYXgoZi5oZWlnaHQrMSxkKTt3LnB1c2goZil9KTtjPXtpZDphLGk6YyxjaGlsZHJlbjp3LGhlaWdodDpkLGxldmVsOmUscGFyZW50OmcsXG52aXNpYmxlOiExfTtoLm5vZGVNYXBbYy5pZF09YztrJiYoay5ub2RlPWMpO3JldHVybiBjfSxzZXRUcmVlVmFsdWVzOmZ1bmN0aW9uKGEpe3ZhciBjPXRoaXMsZT1jLm9wdGlvbnMsYj1jLm5vZGVNYXBbYy5yb290Tm9kZV0sZT1cImJvb2xlYW5cIj09PXR5cGVvZiBlLmxldmVsSXNDb25zdGFudD9lLmxldmVsSXNDb25zdGFudDohMCxnPTAsaD1bXSxELGs9Yy5wb2ludHNbYS5pXTtsKGEuY2hpbGRyZW4sZnVuY3Rpb24oYSl7YT1jLnNldFRyZWVWYWx1ZXMoYSk7aC5wdXNoKGEpO2EuaWdub3JlfHwoZys9YS52YWwpfSk7cihoLGZ1bmN0aW9uKGEsYyl7cmV0dXJuIGEuc29ydEluZGV4LWMuc29ydEluZGV4fSk7RD1kKGsmJmsub3B0aW9ucy52YWx1ZSxnKTtrJiYoay52YWx1ZT1EKTtHKGEse2NoaWxkcmVuOmgsY2hpbGRyZW5Ub3RhbDpnLGlnbm9yZTohKGQoayYmay52aXNpYmxlLCEwKSYmMDxEKSxpc0xlYWY6YS52aXNpYmxlJiYhZyxsZXZlbER5bmFtaWM6YS5sZXZlbC0oZT8wOmIubGV2ZWwpLFxubmFtZTpkKGsmJmsubmFtZSxcIlwiKSxzb3J0SW5kZXg6ZChrJiZrLnNvcnRJbmRleCwtRCksdmFsOkR9KTtyZXR1cm4gYX0sY2FsY3VsYXRlQ2hpbGRyZW5BcmVhczpmdW5jdGlvbihhLGMpe3ZhciBlPXRoaXMsYj1lLm9wdGlvbnMsZz1lLm1hcE9wdGlvbnNUb0xldmVsW2EubGV2ZWwrMV0saD1kKGVbZyYmZy5sYXlvdXRBbGdvcml0aG1dJiZnLmxheW91dEFsZ29yaXRobSxiLmxheW91dEFsZ29yaXRobSksRD1iLmFsdGVybmF0ZVN0YXJ0aW5nRGlyZWN0aW9uLGs9W107YT1xKGEuY2hpbGRyZW4sZnVuY3Rpb24oYSl7cmV0dXJuIWEuaWdub3JlfSk7ZyYmZy5sYXlvdXRTdGFydGluZ0RpcmVjdGlvbiYmKGMuZGlyZWN0aW9uPVwidmVydGljYWxcIj09PWcubGF5b3V0U3RhcnRpbmdEaXJlY3Rpb24/MDoxKTtrPWVbaF0oYyxhKTtsKGEsZnVuY3Rpb24oYSxiKXtiPWtbYl07YS52YWx1ZXM9cChiLHt2YWw6YS5jaGlsZHJlblRvdGFsLGRpcmVjdGlvbjpEPzEtYy5kaXJlY3Rpb246Yy5kaXJlY3Rpb259KTtcbmEucG9pbnRWYWx1ZXM9cChiLHt4OmIueC9lLmF4aXNSYXRpbyx3aWR0aDpiLndpZHRoL2UuYXhpc1JhdGlvfSk7YS5jaGlsZHJlbi5sZW5ndGgmJmUuY2FsY3VsYXRlQ2hpbGRyZW5BcmVhcyhhLGEudmFsdWVzKX0pfSxzZXRQb2ludFZhbHVlczpmdW5jdGlvbigpe3ZhciBhPXRoaXMsYz1hLnhBeGlzLGU9YS55QXhpcztsKGEucG9pbnRzLGZ1bmN0aW9uKGIpe3ZhciBnPWIubm9kZSxoPWcucG9pbnRWYWx1ZXMsdyxrLGQ7ZD0oYS5wb2ludEF0dHJpYnMoYilbXCJzdHJva2Utd2lkdGhcIl18fDApJTIvMjtoJiZnLnZpc2libGU/KGc9TWF0aC5yb3VuZChjLnRyYW5zbGF0ZShoLngsMCwwLDAsMSkpLWQsdz1NYXRoLnJvdW5kKGMudHJhbnNsYXRlKGgueCtoLndpZHRoLDAsMCwwLDEpKS1kLGs9TWF0aC5yb3VuZChlLnRyYW5zbGF0ZShoLnksMCwwLDAsMSkpLWQsaD1NYXRoLnJvdW5kKGUudHJhbnNsYXRlKGgueStoLmhlaWdodCwwLDAsMCwxKSktZCxiLnNoYXBlVHlwZT1cInJlY3RcIixiLnNoYXBlQXJncz1cbnt4Ok1hdGgubWluKGcsdykseTpNYXRoLm1pbihrLGgpLHdpZHRoOk1hdGguYWJzKHctZyksaGVpZ2h0Ok1hdGguYWJzKGgtayl9LGIucGxvdFg9Yi5zaGFwZUFyZ3MueCtiLnNoYXBlQXJncy53aWR0aC8yLGIucGxvdFk9Yi5zaGFwZUFyZ3MueStiLnNoYXBlQXJncy5oZWlnaHQvMik6KGRlbGV0ZSBiLnBsb3RYLGRlbGV0ZSBiLnBsb3RZKX0pfSxzZXRDb2xvclJlY3Vyc2l2ZTpmdW5jdGlvbihhLGMsZSxiLGcpe3ZhciBoPXRoaXMsZD1oJiZoLmNoYXJ0LGQ9ZCYmZC5vcHRpb25zJiZkLm9wdGlvbnMuY29sb3JzLGs7aWYoYSl7az1uKGEse2NvbG9yczpkLGluZGV4OmIsbWFwT3B0aW9uc1RvTGV2ZWw6aC5tYXBPcHRpb25zVG9MZXZlbCxwYXJlbnRDb2xvcjpjLHBhcmVudENvbG9ySW5kZXg6ZSxzZXJpZXM6aCxzaWJsaW5nczpnfSk7aWYoYz1oLnBvaW50c1thLmldKWMuY29sb3I9ay5jb2xvcixjLmNvbG9ySW5kZXg9ay5jb2xvckluZGV4O2woYS5jaGlsZHJlbnx8W10sZnVuY3Rpb24oYyxcbmIpe2guc2V0Q29sb3JSZWN1cnNpdmUoYyxrLmNvbG9yLGsuY29sb3JJbmRleCxiLGEuY2hpbGRyZW4ubGVuZ3RoKX0pfX0sYWxnb3JpdGhtR3JvdXA6ZnVuY3Rpb24oYSxjLGIsZCl7dGhpcy5oZWlnaHQ9YTt0aGlzLndpZHRoPWM7dGhpcy5wbG90PWQ7dGhpcy5zdGFydERpcmVjdGlvbj10aGlzLmRpcmVjdGlvbj1iO3RoaXMubEg9dGhpcy5uSD10aGlzLmxXPXRoaXMublc9dGhpcy50b3RhbD0wO3RoaXMuZWxBcnI9W107dGhpcy5sUD17dG90YWw6MCxsSDowLG5IOjAsbFc6MCxuVzowLG5SOjAsbFI6MCxhc3BlY3RSYXRpbzpmdW5jdGlvbihhLGMpe3JldHVybiBNYXRoLm1heChhL2MsYy9hKX19O3RoaXMuYWRkRWxlbWVudD1mdW5jdGlvbihhKXt0aGlzLmxQLnRvdGFsPXRoaXMuZWxBcnJbdGhpcy5lbEFyci5sZW5ndGgtMV07dGhpcy50b3RhbCs9YTswPT09dGhpcy5kaXJlY3Rpb24/KHRoaXMubFc9dGhpcy5uVyx0aGlzLmxQLmxIPXRoaXMubFAudG90YWwvdGhpcy5sVyx0aGlzLmxQLmxSPVxudGhpcy5sUC5hc3BlY3RSYXRpbyh0aGlzLmxXLHRoaXMubFAubEgpLHRoaXMublc9dGhpcy50b3RhbC90aGlzLmhlaWdodCx0aGlzLmxQLm5IPXRoaXMubFAudG90YWwvdGhpcy5uVyx0aGlzLmxQLm5SPXRoaXMubFAuYXNwZWN0UmF0aW8odGhpcy5uVyx0aGlzLmxQLm5IKSk6KHRoaXMubEg9dGhpcy5uSCx0aGlzLmxQLmxXPXRoaXMubFAudG90YWwvdGhpcy5sSCx0aGlzLmxQLmxSPXRoaXMubFAuYXNwZWN0UmF0aW8odGhpcy5sUC5sVyx0aGlzLmxIKSx0aGlzLm5IPXRoaXMudG90YWwvdGhpcy53aWR0aCx0aGlzLmxQLm5XPXRoaXMubFAudG90YWwvdGhpcy5uSCx0aGlzLmxQLm5SPXRoaXMubFAuYXNwZWN0UmF0aW8odGhpcy5sUC5uVyx0aGlzLm5IKSk7dGhpcy5lbEFyci5wdXNoKGEpfTt0aGlzLnJlc2V0PWZ1bmN0aW9uKCl7dGhpcy5sVz10aGlzLm5XPTA7dGhpcy5lbEFycj1bXTt0aGlzLnRvdGFsPTB9fSxhbGdvcml0aG1DYWxjUG9pbnRzOmZ1bmN0aW9uKGEsYyxiLGQpe3ZhciBlLFxuaCx3LGssZj1iLmxXLG09Yi5sSCx1PWIucGxvdCxuLHI9MCx0PWIuZWxBcnIubGVuZ3RoLTE7Yz8oZj1iLm5XLG09Yi5uSCk6bj1iLmVsQXJyW2IuZWxBcnIubGVuZ3RoLTFdO2woYi5lbEFycixmdW5jdGlvbihhKXtpZihjfHxyPHQpMD09PWIuZGlyZWN0aW9uPyhlPXUueCxoPXUueSx3PWYsaz1hL3cpOihlPXUueCxoPXUueSxrPW0sdz1hL2spLGQucHVzaCh7eDplLHk6aCx3aWR0aDp3LGhlaWdodDprfSksMD09PWIuZGlyZWN0aW9uP3UueSs9azp1LngrPXc7cis9MX0pO2IucmVzZXQoKTswPT09Yi5kaXJlY3Rpb24/Yi53aWR0aC09ZjpiLmhlaWdodC09bTt1Lnk9dS5wYXJlbnQueSsodS5wYXJlbnQuaGVpZ2h0LWIuaGVpZ2h0KTt1Lng9dS5wYXJlbnQueCsodS5wYXJlbnQud2lkdGgtYi53aWR0aCk7YSYmKGIuZGlyZWN0aW9uPTEtYi5kaXJlY3Rpb24pO2N8fGIuYWRkRWxlbWVudChuKX0sYWxnb3JpdGhtTG93QXNwZWN0UmF0aW86ZnVuY3Rpb24oYSxiLGUpe3ZhciBjPVtdLGQ9XG50aGlzLGgsZj17eDpiLngseTpiLnkscGFyZW50OmJ9LGs9MCxtPWUubGVuZ3RoLTEsbj1uZXcgdGhpcy5hbGdvcml0aG1Hcm91cChiLmhlaWdodCxiLndpZHRoLGIuZGlyZWN0aW9uLGYpO2woZSxmdW5jdGlvbihlKXtoPWUudmFsL2IudmFsKmIuaGVpZ2h0KmIud2lkdGg7bi5hZGRFbGVtZW50KGgpO24ubFAublI+bi5sUC5sUiYmZC5hbGdvcml0aG1DYWxjUG9pbnRzKGEsITEsbixjLGYpO2s9PT1tJiZkLmFsZ29yaXRobUNhbGNQb2ludHMoYSwhMCxuLGMsZik7ays9MX0pO3JldHVybiBjfSxhbGdvcml0aG1GaWxsOmZ1bmN0aW9uKGEsYixlKXt2YXIgYz1bXSxkLGg9Yi5kaXJlY3Rpb24sZj1iLngsaz1iLnksbT1iLndpZHRoLG49Yi5oZWlnaHQscix0LHAscTtsKGUsZnVuY3Rpb24oZSl7ZD1lLnZhbC9iLnZhbCpiLmhlaWdodCpiLndpZHRoO3I9Zjt0PWs7MD09PWg/KHE9bixwPWQvcSxtLT1wLGYrPXApOihwPW0scT1kL3Asbi09cSxrKz1xKTtjLnB1c2goe3g6cix5OnQsd2lkdGg6cCxcbmhlaWdodDpxfSk7YSYmKGg9MS1oKX0pO3JldHVybiBjfSxzdHJpcDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmFsZ29yaXRobUxvd0FzcGVjdFJhdGlvKCExLGEsYil9LHNxdWFyaWZpZWQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5hbGdvcml0aG1Mb3dBc3BlY3RSYXRpbyghMCxhLGIpfSxzbGljZUFuZERpY2U6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5hbGdvcml0aG1GaWxsKCEwLGEsYil9LHN0cmlwZXM6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5hbGdvcml0aG1GaWxsKCExLGEsYil9LHRyYW5zbGF0ZTpmdW5jdGlvbigpe3ZhciBhPXRoaXMsYj1hLm9wdGlvbnMsZT1LKGEpLGQsZztBLnByb3RvdHlwZS50cmFuc2xhdGUuY2FsbChhKTtnPWEudHJlZT1hLmdldFRyZWUoKTtkPWEubm9kZU1hcFtlXTthLm1hcE9wdGlvbnNUb0xldmVsPW0oe2Zyb206ZC5sZXZlbCsxLGxldmVsczpiLmxldmVscyx0bzpnLmhlaWdodCxkZWZhdWx0czp7bGV2ZWxJc0NvbnN0YW50OmEub3B0aW9ucy5sZXZlbElzQ29uc3RhbnQsXG5jb2xvckJ5UG9pbnQ6Yi5jb2xvckJ5UG9pbnR9fSk7XCJcIj09PWV8fGQmJmQuY2hpbGRyZW4ubGVuZ3RofHwoYS5kcmlsbFRvTm9kZShcIlwiLCExKSxlPWEucm9vdE5vZGUsZD1hLm5vZGVNYXBbZV0pO0MoYS5ub2RlTWFwW2Eucm9vdE5vZGVdLGZ1bmN0aW9uKGIpe3ZhciBjPSExLGU9Yi5wYXJlbnQ7Yi52aXNpYmxlPSEwO2lmKGV8fFwiXCI9PT1lKWM9YS5ub2RlTWFwW2VdO3JldHVybiBjfSk7QyhhLm5vZGVNYXBbYS5yb290Tm9kZV0uY2hpbGRyZW4sZnVuY3Rpb24oYSl7dmFyIGI9ITE7bChhLGZ1bmN0aW9uKGEpe2EudmlzaWJsZT0hMDthLmNoaWxkcmVuLmxlbmd0aCYmKGI9KGJ8fFtdKS5jb25jYXQoYS5jaGlsZHJlbikpfSk7cmV0dXJuIGJ9KTthLnNldFRyZWVWYWx1ZXMoZyk7YS5heGlzUmF0aW89YS54QXhpcy5sZW4vYS55QXhpcy5sZW47YS5ub2RlTWFwW1wiXCJdLnBvaW50VmFsdWVzPWU9e3g6MCx5OjAsd2lkdGg6MTAwLGhlaWdodDoxMDB9O2Eubm9kZU1hcFtcIlwiXS52YWx1ZXM9XG5lPXAoZSx7d2lkdGg6ZS53aWR0aCphLmF4aXNSYXRpbyxkaXJlY3Rpb246XCJ2ZXJ0aWNhbFwiPT09Yi5sYXlvdXRTdGFydGluZ0RpcmVjdGlvbj8wOjEsdmFsOmcudmFsfSk7YS5jYWxjdWxhdGVDaGlsZHJlbkFyZWFzKGcsZSk7YS5jb2xvckF4aXM/YS50cmFuc2xhdGVDb2xvcnMoKTpiLmNvbG9yQnlQb2ludHx8YS5zZXRDb2xvclJlY3Vyc2l2ZShhLnRyZWUpO2IuYWxsb3dEcmlsbFRvTm9kZSYmKGI9ZC5wb2ludFZhbHVlcyxhLnhBeGlzLnNldEV4dHJlbWVzKGIueCxiLngrYi53aWR0aCwhMSksYS55QXhpcy5zZXRFeHRyZW1lcyhiLnksYi55K2IuaGVpZ2h0LCExKSxhLnhBeGlzLnNldFNjYWxlKCksYS55QXhpcy5zZXRTY2FsZSgpKTthLnNldFBvaW50VmFsdWVzKCl9LGRyYXdEYXRhTGFiZWxzOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxiPWEubWFwT3B0aW9uc1RvTGV2ZWwsZT1xKGEucG9pbnRzLGZ1bmN0aW9uKGEpe3JldHVybiBhLm5vZGUudmlzaWJsZX0pLGQsZztsKGUsZnVuY3Rpb24oYyl7Zz1cbmJbYy5ub2RlLmxldmVsXTtkPXtzdHlsZTp7fX07Yy5ub2RlLmlzTGVhZnx8KGQuZW5hYmxlZD0hMSk7ZyYmZy5kYXRhTGFiZWxzJiYoZD1wKGQsZy5kYXRhTGFiZWxzKSxhLl9oYXNQb2ludExhYmVscz0hMCk7Yy5zaGFwZUFyZ3MmJihkLnN0eWxlLndpZHRoPWMuc2hhcGVBcmdzLndpZHRoLGMuZGF0YUxhYmVsJiZjLmRhdGFMYWJlbC5jc3Moe3dpZHRoOmMuc2hhcGVBcmdzLndpZHRoK1wicHhcIn0pKTtjLmRsT3B0aW9ucz1wKGQsYy5vcHRpb25zLmRhdGFMYWJlbHMpfSk7QS5wcm90b3R5cGUuZHJhd0RhdGFMYWJlbHMuY2FsbCh0aGlzKX0sYWxpZ25EYXRhTGFiZWw6ZnVuY3Rpb24oYSl7RS5jb2x1bW4ucHJvdG90eXBlLmFsaWduRGF0YUxhYmVsLmFwcGx5KHRoaXMsYXJndW1lbnRzKTthLmRhdGFMYWJlbCYmYS5kYXRhTGFiZWwuYXR0cih7ekluZGV4OihhLm5vZGUuekluZGV4fHwwKSsxfSl9LHBvaW50QXR0cmliczpmdW5jdGlvbihhLGIpe3ZhciBjPXkodGhpcy5tYXBPcHRpb25zVG9MZXZlbCk/XG50aGlzLm1hcE9wdGlvbnNUb0xldmVsOnt9LGY9YSYmY1thLm5vZGUubGV2ZWxdfHx7fSxjPXRoaXMub3B0aW9ucyxnPWImJmMuc3RhdGVzW2JdfHx7fSxoPWEmJmEuZ2V0Q2xhc3NOYW1lKCl8fFwiXCI7YT17c3Ryb2tlOmEmJmEuYm9yZGVyQ29sb3J8fGYuYm9yZGVyQ29sb3J8fGcuYm9yZGVyQ29sb3J8fGMuYm9yZGVyQ29sb3IsXCJzdHJva2Utd2lkdGhcIjpkKGEmJmEuYm9yZGVyV2lkdGgsZi5ib3JkZXJXaWR0aCxnLmJvcmRlcldpZHRoLGMuYm9yZGVyV2lkdGgpLGRhc2hzdHlsZTphJiZhLmJvcmRlckRhc2hTdHlsZXx8Zi5ib3JkZXJEYXNoU3R5bGV8fGcuYm9yZGVyRGFzaFN0eWxlfHxjLmJvcmRlckRhc2hTdHlsZSxmaWxsOmEmJmEuY29sb3J8fHRoaXMuY29sb3J9Oy0xIT09aC5pbmRleE9mKFwiaGlnaGNoYXJ0cy1hYm92ZS1sZXZlbFwiKT8oYS5maWxsPVwibm9uZVwiLGFbXCJzdHJva2Utd2lkdGhcIl09MCk6LTEhPT1oLmluZGV4T2YoXCJoaWdoY2hhcnRzLWludGVybmFsLW5vZGUtaW50ZXJhY3RpdmVcIik/XG4oYj1kKGcub3BhY2l0eSxjLm9wYWNpdHkpLGEuZmlsbD14KGEuZmlsbCkuc2V0T3BhY2l0eShiKS5nZXQoKSxhLmN1cnNvcj1cInBvaW50ZXJcIik6LTEhPT1oLmluZGV4T2YoXCJoaWdoY2hhcnRzLWludGVybmFsLW5vZGVcIik/YS5maWxsPVwibm9uZVwiOmImJihhLmZpbGw9eChhLmZpbGwpLmJyaWdodGVuKGcuYnJpZ2h0bmVzcykuZ2V0KCkpO3JldHVybiBhfSxkcmF3UG9pbnRzOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcyxiPXEoYS5wb2ludHMsZnVuY3Rpb24oYSl7cmV0dXJuIGEubm9kZS52aXNpYmxlfSk7bChiLGZ1bmN0aW9uKGIpe3ZhciBjPVwibGV2ZWwtZ3JvdXAtXCIrYi5ub2RlLmxldmVsRHluYW1pYzthW2NdfHwoYVtjXT1hLmNoYXJ0LnJlbmRlcmVyLmcoYykuYXR0cih7ekluZGV4OjFFMy1iLm5vZGUubGV2ZWxEeW5hbWljfSkuYWRkKGEuZ3JvdXApKTtiLmdyb3VwPWFbY119KTtFLmNvbHVtbi5wcm90b3R5cGUuZHJhd1BvaW50cy5jYWxsKHRoaXMpO2Eub3B0aW9ucy5hbGxvd0RyaWxsVG9Ob2RlJiZcbmwoYixmdW5jdGlvbihiKXtiLmdyYXBoaWMmJihiLmRyaWxsSWQ9YS5vcHRpb25zLmludGVyYWN0QnlMZWFmP2EuZHJpbGxUb0J5TGVhZihiKTphLmRyaWxsVG9CeUdyb3VwKGIpKX0pfSxvbkNsaWNrRHJpbGxUb05vZGU6ZnVuY3Rpb24oYSl7dmFyIGI9KGE9YS5wb2ludCkmJmEuZHJpbGxJZDtGKGIpJiYoYS5zZXRTdGF0ZShcIlwiKSx0aGlzLmRyaWxsVG9Ob2RlKGIpKX0sZHJpbGxUb0J5R3JvdXA6ZnVuY3Rpb24oYSl7dmFyIGI9ITE7MSE9PWEubm9kZS5sZXZlbC10aGlzLm5vZGVNYXBbdGhpcy5yb290Tm9kZV0ubGV2ZWx8fGEubm9kZS5pc0xlYWZ8fChiPWEuaWQpO3JldHVybiBifSxkcmlsbFRvQnlMZWFmOmZ1bmN0aW9uKGEpe3ZhciBiPSExO2lmKGEubm9kZS5wYXJlbnQhPT10aGlzLnJvb3ROb2RlJiZhLm5vZGUuaXNMZWFmKWZvcihhPWEubm9kZTshYjspYT10aGlzLm5vZGVNYXBbYS5wYXJlbnRdLGEucGFyZW50PT09dGhpcy5yb290Tm9kZSYmKGI9YS5pZCk7cmV0dXJuIGJ9LFxuZHJpbGxVcDpmdW5jdGlvbigpe3ZhciBhPXRoaXMubm9kZU1hcFt0aGlzLnJvb3ROb2RlXTthJiZGKGEucGFyZW50KSYmdGhpcy5kcmlsbFRvTm9kZShhLnBhcmVudCl9LGRyaWxsVG9Ob2RlOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5ub2RlTWFwW2FdO3RoaXMuaWRQcmV2aW91c1Jvb3Q9dGhpcy5yb290Tm9kZTt0aGlzLnJvb3ROb2RlPWE7XCJcIj09PWE/dGhpcy5kcmlsbFVwQnV0dG9uPXRoaXMuZHJpbGxVcEJ1dHRvbi5kZXN0cm95KCk6dGhpcy5zaG93RHJpbGxVcEJ1dHRvbihjJiZjLm5hbWV8fGEpO3RoaXMuaXNEaXJ0eT0hMDtkKGIsITApJiZ0aGlzLmNoYXJ0LnJlZHJhdygpfSxzaG93RHJpbGxVcEJ1dHRvbjpmdW5jdGlvbihhKXt2YXIgYj10aGlzO2E9YXx8XCJcXHgzYyBCYWNrXCI7dmFyIGQ9Yi5vcHRpb25zLmRyaWxsVXBCdXR0b24sZixnO2QudGV4dCYmKGE9ZC50ZXh0KTt0aGlzLmRyaWxsVXBCdXR0b24/KHRoaXMuZHJpbGxVcEJ1dHRvbi5wbGFjZWQ9ITEsdGhpcy5kcmlsbFVwQnV0dG9uLmF0dHIoe3RleHQ6YX0pLmFsaWduKCkpOlxuKGc9KGY9ZC50aGVtZSkmJmYuc3RhdGVzLHRoaXMuZHJpbGxVcEJ1dHRvbj10aGlzLmNoYXJ0LnJlbmRlcmVyLmJ1dHRvbihhLG51bGwsbnVsbCxmdW5jdGlvbigpe2IuZHJpbGxVcCgpfSxmLGcmJmcuaG92ZXIsZyYmZy5zZWxlY3QpLmFkZENsYXNzKFwiaGlnaGNoYXJ0cy1kcmlsbHVwLWJ1dHRvblwiKS5hdHRyKHthbGlnbjpkLnBvc2l0aW9uLmFsaWduLHpJbmRleDo3fSkuYWRkKCkuYWxpZ24oZC5wb3NpdGlvbiwhMSxkLnJlbGF0aXZlVG98fFwicGxvdEJveFwiKSl9LGJ1aWxkS0RUcmVlOnosZHJhd0xlZ2VuZFN5bWJvbDpiLkxlZ2VuZFN5bWJvbE1peGluLmRyYXdSZWN0YW5nbGUsZ2V0RXh0cmVtZXM6ZnVuY3Rpb24oKXtBLnByb3RvdHlwZS5nZXRFeHRyZW1lcy5jYWxsKHRoaXMsdGhpcy5jb2xvclZhbHVlRGF0YSk7dGhpcy52YWx1ZU1pbj10aGlzLmRhdGFNaW47dGhpcy52YWx1ZU1heD10aGlzLmRhdGFNYXg7QS5wcm90b3R5cGUuZ2V0RXh0cmVtZXMuY2FsbCh0aGlzKX0sZ2V0RXh0cmVtZXNGcm9tQWxsOiEwLFxuYmluZEF4ZXM6ZnVuY3Rpb24oKXt2YXIgYT17ZW5kT25UaWNrOiExLGdyaWRMaW5lV2lkdGg6MCxsaW5lV2lkdGg6MCxtaW46MCxkYXRhTWluOjAsbWluUGFkZGluZzowLG1heDoxMDAsZGF0YU1heDoxMDAsbWF4UGFkZGluZzowLHN0YXJ0T25UaWNrOiExLHRpdGxlOm51bGwsdGlja1Bvc2l0aW9uczpbXX07QS5wcm90b3R5cGUuYmluZEF4ZXMuY2FsbCh0aGlzKTtiLmV4dGVuZCh0aGlzLnlBeGlzLm9wdGlvbnMsYSk7Yi5leHRlbmQodGhpcy54QXhpcy5vcHRpb25zLGEpfSx1dGlsczp7cmVjdXJzaXZlOkMscmVkdWNlOkl9fSx7Z2V0Q2xhc3NOYW1lOmZ1bmN0aW9uKCl7dmFyIGE9Yi5Qb2ludC5wcm90b3R5cGUuZ2V0Q2xhc3NOYW1lLmNhbGwodGhpcyksYz10aGlzLnNlcmllcyxlPWMub3B0aW9uczt0aGlzLm5vZGUubGV2ZWw8PWMubm9kZU1hcFtjLnJvb3ROb2RlXS5sZXZlbD9hKz1cIiBoaWdoY2hhcnRzLWFib3ZlLWxldmVsXCI6dGhpcy5ub2RlLmlzTGVhZnx8ZChlLmludGVyYWN0QnlMZWFmLFxuIWUuYWxsb3dEcmlsbFRvTm9kZSk/dGhpcy5ub2RlLmlzTGVhZnx8KGErPVwiIGhpZ2hjaGFydHMtaW50ZXJuYWwtbm9kZVwiKTphKz1cIiBoaWdoY2hhcnRzLWludGVybmFsLW5vZGUtaW50ZXJhY3RpdmVcIjtyZXR1cm4gYX0saXNWYWxpZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmlkfHxIKHRoaXMudmFsdWUpfSxzZXRTdGF0ZTpmdW5jdGlvbihhKXtiLlBvaW50LnByb3RvdHlwZS5zZXRTdGF0ZS5jYWxsKHRoaXMsYSk7dGhpcy5ncmFwaGljJiZ0aGlzLmdyYXBoaWMuYXR0cih7ekluZGV4OlwiaG92ZXJcIj09PWE/MTowfSl9LHNldFZpc2libGU6RS5waWUucHJvdG90eXBlLnBvaW50Q2xhc3MucHJvdG90eXBlLnNldFZpc2libGV9KX0pKHYsSCl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRyZWVtYXAuanMubWFwXG4iLCIvKlxuIEhpZ2hjaGFydHMgSlMgdjYuMi4wICgyMDE4LTEwLTE3KVxuXG4gKGMpIDIwMDktMjAxOCBUb3JzdGVpbiBIb25zaVxuXG4gTGljZW5zZTogd3d3LmhpZ2hjaGFydHMuY29tL2xpY2Vuc2VcbiovXG4oZnVuY3Rpb24oayl7XCJvYmplY3RcIj09PXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWs6XCJmdW5jdGlvblwiPT09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4ga30pOmsoSGlnaGNoYXJ0cyl9KShmdW5jdGlvbihrKXsoZnVuY3Rpb24oYil7dmFyIHQ9Yi5hZGRFdmVudCxoPWIuQXhpcyxrPWIuQ2hhcnQsbT1iLmNvbG9yLHEsZz1iLmVhY2gscj1iLmV4dGVuZCxwPWIuaXNOdW1iZXIsZT1iLkxlZ2VuZCxjPWIuTGVnZW5kU3ltYm9sTWl4aW4seD1iLm5vb3Asdz1iLm1lcmdlLHU9Yi5waWNrO2IuQ29sb3JBeGlzfHwocT1iLkNvbG9yQXhpcz1mdW5jdGlvbigpe3RoaXMuaW5pdC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIocS5wcm90b3R5cGUsaC5wcm90b3R5cGUpLHIocS5wcm90b3R5cGUse2RlZmF1bHRDb2xvckF4aXNPcHRpb25zOntsaW5lV2lkdGg6MCxtaW5QYWRkaW5nOjAsbWF4UGFkZGluZzowLGdyaWRMaW5lV2lkdGg6MSxcbnRpY2tQaXhlbEludGVydmFsOjcyLHN0YXJ0T25UaWNrOiEwLGVuZE9uVGljazohMCxvZmZzZXQ6MCxtYXJrZXI6e2FuaW1hdGlvbjp7ZHVyYXRpb246NTB9LHdpZHRoOi4wMSxjb2xvcjpcIiM5OTk5OTlcIn0sbGFiZWxzOntvdmVyZmxvdzpcImp1c3RpZnlcIixyb3RhdGlvbjowfSxtaW5Db2xvcjpcIiNlNmViZjVcIixtYXhDb2xvcjpcIiMwMDMzOTlcIix0aWNrTGVuZ3RoOjUsc2hvd0luTGVnZW5kOiEwfSxrZWVwUHJvcHM6W1wibGVnZW5kR3JvdXBcIixcImxlZ2VuZEl0ZW1IZWlnaHRcIixcImxlZ2VuZEl0ZW1XaWR0aFwiLFwibGVnZW5kSXRlbVwiLFwibGVnZW5kU3ltYm9sXCJdLmNvbmNhdChoLnByb3RvdHlwZS5rZWVwUHJvcHMpLGluaXQ6ZnVuY3Rpb24oYSxkKXt2YXIgZj1cInZlcnRpY2FsXCIhPT1hLm9wdGlvbnMubGVnZW5kLmxheW91dCxuO3RoaXMuY29sbD1cImNvbG9yQXhpc1wiO249dyh0aGlzLmRlZmF1bHRDb2xvckF4aXNPcHRpb25zLHtzaWRlOmY/MjoxLHJldmVyc2VkOiFmfSxkLHtvcHBvc2l0ZTohZixcbnNob3dFbXB0eTohMSx0aXRsZTpudWxsLHZpc2libGU6YS5vcHRpb25zLmxlZ2VuZC5lbmFibGVkfSk7aC5wcm90b3R5cGUuaW5pdC5jYWxsKHRoaXMsYSxuKTtkLmRhdGFDbGFzc2VzJiZ0aGlzLmluaXREYXRhQ2xhc3NlcyhkKTt0aGlzLmluaXRTdG9wcygpO3RoaXMuaG9yaXo9Zjt0aGlzLnpvb21FbmFibGVkPSExO3RoaXMuZGVmYXVsdExlZ2VuZExlbmd0aD0yMDB9LGluaXREYXRhQ2xhc3NlczpmdW5jdGlvbihhKXt2YXIgZD10aGlzLmNoYXJ0LGYsbj0wLGw9ZC5vcHRpb25zLmNoYXJ0LmNvbG9yQ291bnQsYj10aGlzLm9wdGlvbnMsZT1hLmRhdGFDbGFzc2VzLmxlbmd0aDt0aGlzLmRhdGFDbGFzc2VzPWY9W107dGhpcy5sZWdlbmRJdGVtcz1bXTtnKGEuZGF0YUNsYXNzZXMsZnVuY3Rpb24oYSxjKXthPXcoYSk7Zi5wdXNoKGEpO2EuY29sb3J8fChcImNhdGVnb3J5XCI9PT1iLmRhdGFDbGFzc0NvbG9yPyhjPWQub3B0aW9ucy5jb2xvcnMsbD1jLmxlbmd0aCxhLmNvbG9yPWNbbl0sXG5hLmNvbG9ySW5kZXg9bixuKyssbj09PWwmJihuPTApKTphLmNvbG9yPW0oYi5taW5Db2xvcikudHdlZW5UbyhtKGIubWF4Q29sb3IpLDI+ZT8uNTpjLyhlLTEpKSl9KX0sc2V0VGlja1Bvc2l0aW9uczpmdW5jdGlvbigpe2lmKCF0aGlzLmRhdGFDbGFzc2VzKXJldHVybiBoLnByb3RvdHlwZS5zZXRUaWNrUG9zaXRpb25zLmNhbGwodGhpcyl9LGluaXRTdG9wczpmdW5jdGlvbigpe3RoaXMuc3RvcHM9dGhpcy5vcHRpb25zLnN0b3BzfHxbWzAsdGhpcy5vcHRpb25zLm1pbkNvbG9yXSxbMSx0aGlzLm9wdGlvbnMubWF4Q29sb3JdXTtnKHRoaXMuc3RvcHMsZnVuY3Rpb24oYSl7YS5jb2xvcj1tKGFbMV0pfSl9LHNldE9wdGlvbnM6ZnVuY3Rpb24oYSl7aC5wcm90b3R5cGUuc2V0T3B0aW9ucy5jYWxsKHRoaXMsYSk7dGhpcy5vcHRpb25zLmNyb3NzaGFpcj10aGlzLm9wdGlvbnMubWFya2VyfSxzZXRBeGlzU2l6ZTpmdW5jdGlvbigpe3ZhciBhPXRoaXMubGVnZW5kU3ltYm9sLGQ9dGhpcy5jaGFydCxcbmY9ZC5vcHRpb25zLmxlZ2VuZHx8e30sbixsO2E/KHRoaXMubGVmdD1mPWEuYXR0cihcInhcIiksdGhpcy50b3A9bj1hLmF0dHIoXCJ5XCIpLHRoaXMud2lkdGg9bD1hLmF0dHIoXCJ3aWR0aFwiKSx0aGlzLmhlaWdodD1hPWEuYXR0cihcImhlaWdodFwiKSx0aGlzLnJpZ2h0PWQuY2hhcnRXaWR0aC1mLWwsdGhpcy5ib3R0b209ZC5jaGFydEhlaWdodC1uLWEsdGhpcy5sZW49dGhpcy5ob3Jpej9sOmEsdGhpcy5wb3M9dGhpcy5ob3Jpej9mOm4pOnRoaXMubGVuPSh0aGlzLmhvcml6P2Yuc3ltYm9sV2lkdGg6Zi5zeW1ib2xIZWlnaHQpfHx0aGlzLmRlZmF1bHRMZWdlbmRMZW5ndGh9LG5vcm1hbGl6ZWRWYWx1ZTpmdW5jdGlvbihhKXt0aGlzLmlzTG9nJiYoYT10aGlzLnZhbDJsaW4oYSkpO3JldHVybiAxLSh0aGlzLm1heC1hKS8odGhpcy5tYXgtdGhpcy5taW58fDEpfSx0b0NvbG9yOmZ1bmN0aW9uKGEsZCl7dmFyIGY9dGhpcy5zdG9wcyxuLGwsYj10aGlzLmRhdGFDbGFzc2VzLGUsYztpZihiKWZvcihjPVxuYi5sZW5ndGg7Yy0tOyl7aWYoZT1iW2NdLG49ZS5mcm9tLGY9ZS50bywodm9pZCAwPT09bnx8YT49bikmJih2b2lkIDA9PT1mfHxhPD1mKSl7bD1lLmNvbG9yO2QmJihkLmRhdGFDbGFzcz1jLGQuY29sb3JJbmRleD1lLmNvbG9ySW5kZXgpO2JyZWFrfX1lbHNle2E9dGhpcy5ub3JtYWxpemVkVmFsdWUoYSk7Zm9yKGM9Zi5sZW5ndGg7Yy0tJiYhKGE+ZltjXVswXSk7KTtuPWZbY118fGZbYysxXTtmPWZbYysxXXx8bjthPTEtKGZbMF0tYSkvKGZbMF0tblswXXx8MSk7bD1uLmNvbG9yLnR3ZWVuVG8oZi5jb2xvcixhKX1yZXR1cm4gbH0sZ2V0T2Zmc2V0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5sZWdlbmRHcm91cCxkPXRoaXMuY2hhcnQuYXhpc09mZnNldFt0aGlzLnNpZGVdO2EmJih0aGlzLmF4aXNQYXJlbnQ9YSxoLnByb3RvdHlwZS5nZXRPZmZzZXQuY2FsbCh0aGlzKSx0aGlzLmFkZGVkfHwodGhpcy5hZGRlZD0hMCx0aGlzLmxhYmVsTGVmdD0wLHRoaXMubGFiZWxSaWdodD10aGlzLndpZHRoKSxcbnRoaXMuY2hhcnQuYXhpc09mZnNldFt0aGlzLnNpZGVdPWQpfSxzZXRMZWdlbmRDb2xvcjpmdW5jdGlvbigpe3ZhciBhLGQ9dGhpcy5yZXZlcnNlZDthPWQ/MTowO2Q9ZD8wOjE7YT10aGlzLmhvcml6P1thLDAsZCwwXTpbMCxkLDAsYV07dGhpcy5sZWdlbmRDb2xvcj17bGluZWFyR3JhZGllbnQ6e3gxOmFbMF0seTE6YVsxXSx4MjphWzJdLHkyOmFbM119LHN0b3BzOnRoaXMuc3RvcHN9fSxkcmF3TGVnZW5kU3ltYm9sOmZ1bmN0aW9uKGEsZCl7dmFyIGY9YS5wYWRkaW5nLGI9YS5vcHRpb25zLGw9dGhpcy5ob3JpeixjPXUoYi5zeW1ib2xXaWR0aCxsP3RoaXMuZGVmYXVsdExlZ2VuZExlbmd0aDoxMiksZT11KGIuc3ltYm9sSGVpZ2h0LGw/MTI6dGhpcy5kZWZhdWx0TGVnZW5kTGVuZ3RoKSxnPXUoYi5sYWJlbFBhZGRpbmcsbD8xNjozMCksYj11KGIuaXRlbURpc3RhbmNlLDEwKTt0aGlzLnNldExlZ2VuZENvbG9yKCk7ZC5sZWdlbmRTeW1ib2w9dGhpcy5jaGFydC5yZW5kZXJlci5yZWN0KDAsXG5hLmJhc2VsaW5lLTExLGMsZSkuYXR0cih7ekluZGV4OjF9KS5hZGQoZC5sZWdlbmRHcm91cCk7dGhpcy5sZWdlbmRJdGVtV2lkdGg9YytmKyhsP2I6Zyk7dGhpcy5sZWdlbmRJdGVtSGVpZ2h0PWUrZisobD9nOjApfSxzZXRTdGF0ZTpmdW5jdGlvbihhKXtnKHRoaXMuc2VyaWVzLGZ1bmN0aW9uKGQpe2Quc2V0U3RhdGUoYSl9KX0sdmlzaWJsZTohMCxzZXRWaXNpYmxlOngsZ2V0U2VyaWVzRXh0cmVtZXM6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLnNlcmllcyxkPWEubGVuZ3RoO3RoaXMuZGF0YU1pbj1JbmZpbml0eTtmb3IodGhpcy5kYXRhTWF4PS1JbmZpbml0eTtkLS07KWFbZF0uZ2V0RXh0cmVtZXMoKSx2b2lkIDAhPT1hW2RdLnZhbHVlTWluJiYodGhpcy5kYXRhTWluPU1hdGgubWluKHRoaXMuZGF0YU1pbixhW2RdLnZhbHVlTWluKSx0aGlzLmRhdGFNYXg9TWF0aC5tYXgodGhpcy5kYXRhTWF4LGFbZF0udmFsdWVNYXgpKX0sZHJhd0Nyb3NzaGFpcjpmdW5jdGlvbihhLGQpe3ZhciBmPVxuZCYmZC5wbG90WCxiPWQmJmQucGxvdFksYyxlPXRoaXMucG9zLGc9dGhpcy5sZW47ZCYmKGM9dGhpcy50b1BpeGVscyhkW2Quc2VyaWVzLmNvbG9yS2V5XSksYzxlP2M9ZS0yOmM+ZStnJiYoYz1lK2crMiksZC5wbG90WD1jLGQucGxvdFk9dGhpcy5sZW4tYyxoLnByb3RvdHlwZS5kcmF3Q3Jvc3NoYWlyLmNhbGwodGhpcyxhLGQpLGQucGxvdFg9ZixkLnBsb3RZPWIsdGhpcy5jcm9zcyYmIXRoaXMuY3Jvc3MuYWRkZWRUb0NvbG9yQXhpcyYmdGhpcy5sZWdlbmRHcm91cCYmKHRoaXMuY3Jvc3MuYWRkQ2xhc3MoXCJoaWdoY2hhcnRzLWNvbG9yYXhpcy1tYXJrZXJcIikuYWRkKHRoaXMubGVnZW5kR3JvdXApLHRoaXMuY3Jvc3MuYWRkZWRUb0NvbG9yQXhpcz0hMCx0aGlzLmNyb3NzLmF0dHIoe2ZpbGw6dGhpcy5jcm9zc2hhaXIuY29sb3J9KSkpfSxnZXRQbG90TGluZVBhdGg6ZnVuY3Rpb24oYSxkLGYsYixjKXtyZXR1cm4gcChjKT90aGlzLmhvcml6P1tcIk1cIixjLTQsdGhpcy50b3AtNixcIkxcIixcbmMrNCx0aGlzLnRvcC02LGMsdGhpcy50b3AsXCJaXCJdOltcIk1cIix0aGlzLmxlZnQsYyxcIkxcIix0aGlzLmxlZnQtNixjKzYsdGhpcy5sZWZ0LTYsYy02LFwiWlwiXTpoLnByb3RvdHlwZS5nZXRQbG90TGluZVBhdGguY2FsbCh0aGlzLGEsZCxmLGIpfSx1cGRhdGU6ZnVuY3Rpb24oYSxkKXt2YXIgYz10aGlzLmNoYXJ0LGI9Yy5sZWdlbmQ7Zyh0aGlzLnNlcmllcyxmdW5jdGlvbihhKXthLmlzRGlydHlEYXRhPSEwfSk7YS5kYXRhQ2xhc3NlcyYmYi5hbGxJdGVtcyYmKGcoYi5hbGxJdGVtcyxmdW5jdGlvbihhKXthLmlzRGF0YUNsYXNzJiZhLmxlZ2VuZEdyb3VwJiZhLmxlZ2VuZEdyb3VwLmRlc3Ryb3koKX0pLGMuaXNEaXJ0eUxlZ2VuZD0hMCk7Yy5vcHRpb25zW3RoaXMuY29sbF09dyh0aGlzLnVzZXJPcHRpb25zLGEpO2gucHJvdG90eXBlLnVwZGF0ZS5jYWxsKHRoaXMsYSxkKTt0aGlzLmxlZ2VuZEl0ZW0mJih0aGlzLnNldExlZ2VuZENvbG9yKCksYi5jb2xvcml6ZUl0ZW0odGhpcywhMCkpfSxcbnJlbW92ZTpmdW5jdGlvbigpe3RoaXMubGVnZW5kSXRlbSYmdGhpcy5jaGFydC5sZWdlbmQuZGVzdHJveUl0ZW0odGhpcyk7aC5wcm90b3R5cGUucmVtb3ZlLmNhbGwodGhpcyl9LGdldERhdGFDbGFzc0xlZ2VuZFN5bWJvbHM6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGQ9dGhpcy5jaGFydCxmPXRoaXMubGVnZW5kSXRlbXMsZT1kLm9wdGlvbnMubGVnZW5kLGw9ZS52YWx1ZURlY2ltYWxzLHE9ZS52YWx1ZVN1ZmZpeHx8XCJcIixoO2YubGVuZ3RofHxnKHRoaXMuZGF0YUNsYXNzZXMsZnVuY3Rpb24oZSxuKXt2YXIgbT0hMCxwPWUuZnJvbSxrPWUudG87aD1cIlwiO3ZvaWQgMD09PXA/aD1cIlxceDNjIFwiOnZvaWQgMD09PWsmJihoPVwiXFx4M2UgXCIpO3ZvaWQgMCE9PXAmJihoKz1iLm51bWJlckZvcm1hdChwLGwpK3EpO3ZvaWQgMCE9PXAmJnZvaWQgMCE9PWsmJihoKz1cIiAtIFwiKTt2b2lkIDAhPT1rJiYoaCs9Yi5udW1iZXJGb3JtYXQoayxsKStxKTtmLnB1c2gocih7Y2hhcnQ6ZCxuYW1lOmgsb3B0aW9uczp7fSxcbmRyYXdMZWdlbmRTeW1ib2w6Yy5kcmF3UmVjdGFuZ2xlLHZpc2libGU6ITAsc2V0U3RhdGU6eCxpc0RhdGFDbGFzczohMCxzZXRWaXNpYmxlOmZ1bmN0aW9uKCl7bT10aGlzLnZpc2libGU9IW07ZyhhLnNlcmllcyxmdW5jdGlvbihhKXtnKGEucG9pbnRzLGZ1bmN0aW9uKGEpe2EuZGF0YUNsYXNzPT09biYmYS5zZXRWaXNpYmxlKG0pfSl9KTtkLmxlZ2VuZC5jb2xvcml6ZUl0ZW0odGhpcyxtKX19LGUpKX0pO3JldHVybiBmfSxuYW1lOlwiXCJ9KSxnKFtcImZpbGxcIixcInN0cm9rZVwiXSxmdW5jdGlvbihhKXtiLkZ4LnByb3RvdHlwZVthK1wiU2V0dGVyXCJdPWZ1bmN0aW9uKCl7dGhpcy5lbGVtLmF0dHIoYSxtKHRoaXMuc3RhcnQpLnR3ZWVuVG8obSh0aGlzLmVuZCksdGhpcy5wb3MpLG51bGwsITApfX0pLHQoayxcImFmdGVyR2V0QXhlc1wiLGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcHRpb25zLmNvbG9yQXhpczt0aGlzLmNvbG9yQXhpcz1bXTthJiZuZXcgcSh0aGlzLGEpfSksdChlLFwiYWZ0ZXJHZXRBbGxJdGVtc1wiLFxuZnVuY3Rpb24oYSl7dmFyIGQ9W10sYz10aGlzLmNoYXJ0LmNvbG9yQXhpc1swXTtjJiZjLm9wdGlvbnMmJmMub3B0aW9ucy5zaG93SW5MZWdlbmQmJihjLm9wdGlvbnMuZGF0YUNsYXNzZXM/ZD1jLmdldERhdGFDbGFzc0xlZ2VuZFN5bWJvbHMoKTpkLnB1c2goYyksZyhjLnNlcmllcyxmdW5jdGlvbihjKXtiLmVyYXNlKGEuYWxsSXRlbXMsYyl9KSk7Zm9yKGM9ZC5sZW5ndGg7Yy0tOylhLmFsbEl0ZW1zLnVuc2hpZnQoZFtjXSl9KSx0KGUsXCJhZnRlckNvbG9yaXplSXRlbVwiLGZ1bmN0aW9uKGEpe2EudmlzaWJsZSYmYS5pdGVtLmxlZ2VuZENvbG9yJiZhLml0ZW0ubGVnZW5kU3ltYm9sLmF0dHIoe2ZpbGw6YS5pdGVtLmxlZ2VuZENvbG9yfSl9KSx0KGUsXCJhZnRlclVwZGF0ZVwiLGZ1bmN0aW9uKGEsYyxiKXt0aGlzLmNoYXJ0LmNvbG9yQXhpc1swXSYmdGhpcy5jaGFydC5jb2xvckF4aXNbMF0udXBkYXRlKHt9LGIpfSkpfSkoayk7KGZ1bmN0aW9uKGIpe3ZhciBrPWIuZGVmaW5lZCxoPVxuYi5lYWNoLHY9Yi5ub29wLG09Yi5zZXJpZXNUeXBlcztiLmNvbG9yUG9pbnRNaXhpbj17aXNWYWxpZDpmdW5jdGlvbigpe3JldHVybiBudWxsIT09dGhpcy52YWx1ZSYmSW5maW5pdHkhPT10aGlzLnZhbHVlJiYtSW5maW5pdHkhPT10aGlzLnZhbHVlfSxzZXRWaXNpYmxlOmZ1bmN0aW9uKGIpe3ZhciBnPXRoaXMscT1iP1wic2hvd1wiOlwiaGlkZVwiO2cudmlzaWJsZT0hIWI7aChbXCJncmFwaGljXCIsXCJkYXRhTGFiZWxcIl0sZnVuY3Rpb24oYil7aWYoZ1tiXSlnW2JdW3FdKCl9KX0sc2V0U3RhdGU6ZnVuY3Rpb24oaCl7Yi5Qb2ludC5wcm90b3R5cGUuc2V0U3RhdGUuY2FsbCh0aGlzLGgpO3RoaXMuZ3JhcGhpYyYmdGhpcy5ncmFwaGljLmF0dHIoe3pJbmRleDpcImhvdmVyXCI9PT1oPzE6MH0pfX07Yi5jb2xvclNlcmllc01peGluPXtwb2ludEFycmF5TWFwOltcInZhbHVlXCJdLGF4aXNUeXBlczpbXCJ4QXhpc1wiLFwieUF4aXNcIixcImNvbG9yQXhpc1wiXSxvcHRpb25hbEF4aXM6XCJjb2xvckF4aXNcIix0cmFja2VyR3JvdXBzOltcImdyb3VwXCIsXG5cIm1hcmtlckdyb3VwXCIsXCJkYXRhTGFiZWxzR3JvdXBcIl0sZ2V0U3ltYm9sOnYscGFyYWxsZWxBcnJheXM6W1wieFwiLFwieVwiLFwidmFsdWVcIl0sY29sb3JLZXk6XCJ2YWx1ZVwiLHBvaW50QXR0cmliczptLmNvbHVtbi5wcm90b3R5cGUucG9pbnRBdHRyaWJzLHRyYW5zbGF0ZUNvbG9yczpmdW5jdGlvbigpe3ZhciBiPXRoaXMsZz10aGlzLm9wdGlvbnMubnVsbENvbG9yLGs9dGhpcy5jb2xvckF4aXMsbT10aGlzLmNvbG9yS2V5O2godGhpcy5kYXRhLGZ1bmN0aW9uKGUpe3ZhciBjPWVbbV07aWYoYz1lLm9wdGlvbnMuY29sb3J8fChlLmlzTnVsbD9nOmsmJnZvaWQgMCE9PWM/ay50b0NvbG9yKGMsZSk6ZS5jb2xvcnx8Yi5jb2xvcikpZS5jb2xvcj1jfSl9LGNvbG9yQXR0cmliczpmdW5jdGlvbihiKXt2YXIgZz17fTtrKGIuY29sb3IpJiYoZ1t0aGlzLmNvbG9yUHJvcHx8XCJmaWxsXCJdPWIuY29sb3IpO3JldHVybiBnfX19KShrKTsoZnVuY3Rpb24oYil7dmFyIGs9Yi5jb2xvclBvaW50TWl4aW4saD1cbmIuZWFjaCx2PWIubWVyZ2UsbT1iLm5vb3AscT1iLnBpY2ssZz1iLlNlcmllcyxyPWIuc2VyaWVzVHlwZSxwPWIuc2VyaWVzVHlwZXM7cihcImhlYXRtYXBcIixcInNjYXR0ZXJcIix7YW5pbWF0aW9uOiExLGJvcmRlcldpZHRoOjAsbnVsbENvbG9yOlwiI2Y3ZjdmN1wiLGRhdGFMYWJlbHM6e2Zvcm1hdHRlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzLnBvaW50LnZhbHVlfSxpbnNpZGU6ITAsdmVydGljYWxBbGlnbjpcIm1pZGRsZVwiLGNyb3A6ITEsb3ZlcmZsb3c6ITEscGFkZGluZzowfSxtYXJrZXI6bnVsbCxwb2ludFJhbmdlOm51bGwsdG9vbHRpcDp7cG9pbnRGb3JtYXQ6XCJ7cG9pbnQueH0sIHtwb2ludC55fToge3BvaW50LnZhbHVlfVxceDNjYnIvXFx4M2VcIn0sc3RhdGVzOntob3Zlcjp7aGFsbzohMSxicmlnaHRuZXNzOi4yfX19LHYoYi5jb2xvclNlcmllc01peGluLHtwb2ludEFycmF5TWFwOltcInlcIixcInZhbHVlXCJdLGhhc1BvaW50U3BlY2lmaWNPcHRpb25zOiEwLGdldEV4dHJlbWVzRnJvbUFsbDohMCxcbmRpcmVjdFRvdWNoOiEwLGluaXQ6ZnVuY3Rpb24oKXt2YXIgYjtwLnNjYXR0ZXIucHJvdG90eXBlLmluaXQuYXBwbHkodGhpcyxhcmd1bWVudHMpO2I9dGhpcy5vcHRpb25zO2IucG9pbnRSYW5nZT1xKGIucG9pbnRSYW5nZSxiLmNvbHNpemV8fDEpO3RoaXMueUF4aXMuYXhpc1BvaW50UmFuZ2U9Yi5yb3dzaXplfHwxfSx0cmFuc2xhdGU6ZnVuY3Rpb24oKXt2YXIgYj10aGlzLm9wdGlvbnMsYz10aGlzLnhBeGlzLGc9dGhpcy55QXhpcyxrPWIucG9pbnRQYWRkaW5nfHwwLG09ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBNYXRoLm1pbihNYXRoLm1heChiLGEpLGMpfTt0aGlzLmdlbmVyYXRlUG9pbnRzKCk7aCh0aGlzLnBvaW50cyxmdW5jdGlvbihhKXt2YXIgZD0oYi5jb2xzaXplfHwxKS8yLGU9KGIucm93c2l6ZXx8MSkvMixoPW0oTWF0aC5yb3VuZChjLmxlbi1jLnRyYW5zbGF0ZShhLngtZCwwLDEsMCwxKSksLWMubGVuLDIqYy5sZW4pLGQ9bShNYXRoLnJvdW5kKGMubGVuLWMudHJhbnNsYXRlKGEueCtcbmQsMCwxLDAsMSkpLC1jLmxlbiwyKmMubGVuKSxsPW0oTWF0aC5yb3VuZChnLnRyYW5zbGF0ZShhLnktZSwwLDEsMCwxKSksLWcubGVuLDIqZy5sZW4pLGU9bShNYXRoLnJvdW5kKGcudHJhbnNsYXRlKGEueStlLDAsMSwwLDEpKSwtZy5sZW4sMipnLmxlbikscD1xKGEucG9pbnRQYWRkaW5nLGspO2EucGxvdFg9YS5jbGllbnRYPShoK2QpLzI7YS5wbG90WT0obCtlKS8yO2Euc2hhcGVUeXBlPVwicmVjdFwiO2Euc2hhcGVBcmdzPXt4Ok1hdGgubWluKGgsZCkrcCx5Ok1hdGgubWluKGwsZSkrcCx3aWR0aDpNYXRoLmFicyhkLWgpLTIqcCxoZWlnaHQ6TWF0aC5hYnMoZS1sKS0yKnB9fSk7dGhpcy50cmFuc2xhdGVDb2xvcnMoKX0sZHJhd1BvaW50czpmdW5jdGlvbigpe3AuY29sdW1uLnByb3RvdHlwZS5kcmF3UG9pbnRzLmNhbGwodGhpcyk7aCh0aGlzLnBvaW50cyxmdW5jdGlvbihiKXtiLmdyYXBoaWMuYXR0cih0aGlzLmNvbG9yQXR0cmlicyhiKSl9LHRoaXMpfSxhbmltYXRlOm0sZ2V0Qm94Om0sXG5kcmF3TGVnZW5kU3ltYm9sOmIuTGVnZW5kU3ltYm9sTWl4aW4uZHJhd1JlY3RhbmdsZSxhbGlnbkRhdGFMYWJlbDpwLmNvbHVtbi5wcm90b3R5cGUuYWxpZ25EYXRhTGFiZWwsZ2V0RXh0cmVtZXM6ZnVuY3Rpb24oKXtnLnByb3RvdHlwZS5nZXRFeHRyZW1lcy5jYWxsKHRoaXMsdGhpcy52YWx1ZURhdGEpO3RoaXMudmFsdWVNaW49dGhpcy5kYXRhTWluO3RoaXMudmFsdWVNYXg9dGhpcy5kYXRhTWF4O2cucHJvdG90eXBlLmdldEV4dHJlbWVzLmNhbGwodGhpcyl9fSksYi5leHRlbmQoe2hhbG9QYXRoOmZ1bmN0aW9uKGIpe2lmKCFiKXJldHVybltdO3ZhciBjPXRoaXMuc2hhcGVBcmdzO3JldHVybltcIk1cIixjLngtYixjLnktYixcIkxcIixjLngtYixjLnkrYy5oZWlnaHQrYixjLngrYy53aWR0aCtiLGMueStjLmhlaWdodCtiLGMueCtjLndpZHRoK2IsYy55LWIsXCJaXCJdfX0saykpfSkoayl9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlYXRtYXAuanMubWFwXG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNqdkJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDOUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3REQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDOUJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2hDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN4Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9