webpackHotUpdate(5,{

/***/ "./components/Page.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui__ = __webpack_require__("./node_modules/material-ui/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Clock__ = __webpack_require__("./components/Clock.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AddCount__ = __webpack_require__("./components/AddCount.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_withRoot__ = __webpack_require__("./src/withRoot.js");
var _jsxFileName = '/home/fidel/Documents/ssr/with-redux-app/components/Page.js';


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();








var PageWrapper = function PageWrapper(_ref) {
  var title = _ref.title,
      lastUpdate = _ref.lastUpdate;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_3_material_ui__["j" /* Typography */],
      { variant: 'display1', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      title
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Clock__["a" /* default */], { lastUpdate: lastUpdate, __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__AddCount__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    })
  );
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"])(function (state) {
  return state;
})(Object(__WEBPACK_IMPORTED_MODULE_6__src_withRoot__["a" /* default */])(PageWrapper));

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(PageWrapper, 'PageWrapper', '/home/fidel/Documents/ssr/with-redux-app/components/Page.js');
  reactHotLoader.register(_default, 'default', '/home/fidel/Documents/ssr/with-redux-app/components/Page.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/withRoot.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__ = __webpack_require__("./node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Reboot__ = __webpack_require__("./node_modules/material-ui/Reboot/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_Reboot___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_Reboot__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getPageContext__ = __webpack_require__("./src/getPageContext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Layout__ = __webpack_require__("./src/Layout/index.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/home/fidel/Documents/ssr/with-redux-app/src/withRoot.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








function withRoot(Component) {
  var WithRoot = function (_React$Component) {
    _inherits(WithRoot, _React$Component);

    function WithRoot() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, WithRoot);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = WithRoot.__proto__ || Object.getPrototypeOf(WithRoot)).call.apply(_ref, [this].concat(args))), _this), _this.pageContext = null, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(WithRoot, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.pageContext = this.props.pageContext || Object(__WEBPACK_IMPORTED_MODULE_4__getPageContext__["a" /* default */])();
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        // Remove the server-side injected CSS.
        var jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
          jssStyles.parentNode.removeChild(jssStyles);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        // MuiThemeProvider makes the theme available down the React tree thanks to React context.
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_material_ui_styles__["MuiThemeProvider"],
          {
            theme: this.pageContext.theme,
            sheetsManager: this.pageContext.sheetsManager,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_Reboot___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_5__Layout__["a" /* default */],
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 33
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, this.props, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34
              }
            }))
          )
        );
      }
    }, {
      key: '__reactstandin__regenerateByEval',
      value: function __reactstandin__regenerateByEval(key, code) {
        this[key] = eval(code);
      }
    }]);

    return WithRoot;
  }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

  WithRoot.propTypes = {
    pageContext: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  };

  WithRoot.getInitialProps = function (ctx) {
    if (Component.getInitialProps) {
      return Component.getInitialProps(ctx);
    }

    return {};
  };

  return WithRoot;
}

var _default = withRoot;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(withRoot, 'withRoot', '/home/fidel/Documents/ssr/with-redux-app/src/withRoot.js');
  reactHotLoader.register(_default, 'default', '/home/fidel/Documents/ssr/with-redux-app/src/withRoot.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.32c0ea3f892492938997.hot-update.js.map