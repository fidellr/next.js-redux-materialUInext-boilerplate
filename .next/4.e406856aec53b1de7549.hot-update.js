webpackHotUpdate(4,{

/***/ "./src/Layout/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_material_ui__ = __webpack_require__("./node_modules/material-ui/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_icons__ = __webpack_require__("./node_modules/material-ui-icons/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles__ = __webpack_require__("./node_modules/material-ui/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__partial_DrawerList__ = __webpack_require__("./src/Layout/partial/DrawerList.js");
var _jsxFileName = "/home/fidel/Documents/ssr/with-redux-app/src/Layout/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



(function () {
    var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

    enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Styles = function Styles(theme) {
    var _drawerPaper, _content;

    return {
        appFrame: {
            position: 'relative',
            display: 'flex',
            width: '100%'
            // height: '100%',
        },
        flex: {
            flex: 1
        },
        appBar: _defineProperty({
            position: 'absolute',
            marginLeft: '19%'
        }, theme.breakpoints.up('md'), {
            width: '19%'
        }),
        menuButton: _defineProperty({
            marginLeft: -12,
            marginRight: 20
        }, theme.breakpoints.up('md'), {
            display: 'none'
        }),
        drawerHeader: theme.mixins.toolbar,
        drawerPaper: (_drawerPaper = {
            position: 'fixed'
        }, _defineProperty(_drawerPaper, theme.breakpoints.up('lg'), {
            width: '251px',
            position: 'fixed',
            paddingTop: '9ch',
            height: '100%',
            zIndex: 0
        }), _defineProperty(_drawerPaper, theme.breakpoints.up('sm'), {
            width: '251px',
            position: 'fixed',
            height: '100%',
            zIndex: 0
        }), _defineProperty(_drawerPaper, theme.breakpoints.up('md'), {
            width: '251px',
            position: 'fixed',
            paddingTop: '9ch',
            height: '100%',
            zIndex: 0
        }), _drawerPaper),
        content: (_content = {
            backgroundColor: theme.palette.background.default,
            width: '100%',
            height: 'calc(100% - 56px)'
        }, _defineProperty(_content, theme.breakpoints.up('md'), {
            margin: '9.2ch 36ch'
        }), _defineProperty(_content, theme.breakpoints.down('md'), {
            margin: '9.2ch 36ch'
        }), _defineProperty(_content, theme.breakpoints.down('sm'), {
            margin: '10ch 3ch'
        }), _defineProperty(_content, theme.breakpoints.down('xs'), {
            margin: '9ch 3ch'
        }), _content)
    };
};

var Layout = function (_React$Component) {
    _inherits(Layout, _React$Component);

    function Layout() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Layout);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Layout.__proto__ || Object.getPrototypeOf(Layout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            isOpen: false
        }, _this.handleDrawer = function () {
            return _this.setState({ isOpen: !_this.state.isOpen });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Layout, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                classes = _props.classes,
                children = _props.children;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: classes.appFrame, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 81
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_material_ui__["a" /* AppBar */],
                    {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 82
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_material_ui__["i" /* Toolbar */],
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 83
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_material_ui__["f" /* IconButton */],
                            { className: classes.menuButton, color: "inherit", "aria-label": "Menu", onClick: this.handleDrawer, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 84
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_icons__["a" /* Menu */], {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 85
                                }
                            })
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_1_material_ui__["j" /* Typography */],
                            { variant: "title", color: "inherit", className: classes.flex, __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 87
                                }
                            },
                            "Title"
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_material_ui__["e" /* Hidden */],
                    { mdUp: true, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 92
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_material_ui__["d" /* Drawer */],
                        {
                            open: this.state.isOpen,
                            onClose: this.handleDrawer,
                            variant: "temporary",
                            ModalProps: {
                                keepMounted: true
                            },
                            classes: { paper: classes.drawerPaper },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 93
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__partial_DrawerList__["a" /* default */], {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 102
                            }
                        })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    __WEBPACK_IMPORTED_MODULE_1_material_ui__["e" /* Hidden */],
                    { smDown: true, implementation: "css", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 105
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_1_material_ui__["d" /* Drawer */],
                        {
                            variant: "permanent",
                            open: true,
                            classes: { paper: classes.drawerPaper },
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 106
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__partial_DrawerList__["a" /* default */], {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 111
                            }
                        })
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: classes.content, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 114
                        }
                    },
                    children
                )
            );
        }
    }, {
        key: "__reactstandin__regenerateByEval",
        value: function __reactstandin__regenerateByEval(key, code) {
            this[key] = eval(code);
        }
    }]);

    return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var _default = Object(__WEBPACK_IMPORTED_MODULE_3_material_ui_styles__["withStyles"])(Styles)(Layout);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
    var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

    var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(Styles, "Styles", "/home/fidel/Documents/ssr/with-redux-app/src/Layout/index.js");
    reactHotLoader.register(Layout, "Layout", "/home/fidel/Documents/ssr/with-redux-app/src/Layout/index.js");
    reactHotLoader.register(_default, "default", "/home/fidel/Documents/ssr/with-redux-app/src/Layout/index.js");
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.e406856aec53b1de7549.hot-update.js.map