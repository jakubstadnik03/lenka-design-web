"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[slug]",{

/***/ "./pages/posts/[slug].js":
/*!*******************************!*\
  !*** ./pages/posts/[slug].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/error */ \"./node_modules/next/error.js\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_cover_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cover-image */ \"./components/cover-image.js\");\n/* harmony import */ var _components_date_formatter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/date-formatter */ \"./components/date-formatter.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSG = true;\nfunction Post(param) {\n    let { post , morePosts , preview  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const title = post.title;\n    if (!router.isFallback && !(post === null || post === void 0 ? void 0 : post.slug)) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_2___default()), {\n            statusCode: 404\n        }, void 0, false, {\n            fileName: \"/Users/jakubstadnik/Documents/GitHub/Lenka-design-next-web/pages/posts/[slug].js\",\n            lineNumber: 14,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                fileName: \"/Users/jakubstadnik/Documents/GitHub/Lenka-design-next-web/pages/posts/[slug].js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"min-h-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container mx-auto px-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/\",\n                                        className: \"hover:underline\",\n                                        children: \"Blog\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/jakubstadnik/Documents/GitHub/Lenka-design-next-web/pages/posts/[slug].js\",\n                                        lineNumber: 23,\n                                        columnNumber: 15\n                                    }, this),\n                                    \".\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/jakubstadnik/Documents/GitHub/Lenka-design-next-web/pages/posts/[slug].js\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, this),\n                            router.isFallback ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: \"Loading…\"\n                            }, void 0, false, {\n                                fileName: \"/Users/jakubstadnik/Documents/GitHub/Lenka-design-next-web/pages/posts/[slug].js\",\n                                lineNumber: 29,\n                                columnNumber: 15\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                                    className: \"mb-32\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                                                    children: title\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jakubstadnik/Documents/GitHub/Lenka-design-next-web/pages/posts/[slug].js\",\n                                                    lineNumber: 34,\n                                                    columnNumber: 21\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                                                    property: \"og:image\",\n                                                    content: post.ogImage.url\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/jakubstadnik/Documents/GitHub/Lenka-design-next-web/pages/posts/[slug].js\",\n                                                    lineNumber: 35,\n                                                    columnNumber: 21\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/jakubstadnik/Documents/GitHub/Lenka-design-next-web/pages/posts/[slug].js\",\n                                            lineNumber: 33,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                            className: \"text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left\",\n                                            children: post.title\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jakubstadnik/Documents/GitHub/Lenka-design-next-web/pages/posts/[slug].js\",\n                                            lineNumber: 37,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"mb-8 md:mb-16 sm:mx-0\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cover_image__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                title: post.title,\n                                                src: post.coverImage\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jakubstadnik/Documents/GitHub/Lenka-design-next-web/pages/posts/[slug].js\",\n                                                lineNumber: 42,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jakubstadnik/Documents/GitHub/Lenka-design-next-web/pages/posts/[slug].js\",\n                                            lineNumber: 41,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"max-w-2xl mx-auto\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                dangerouslySetInnerHTML: {\n                                                    __html: post.content\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"/Users/jakubstadnik/Documents/GitHub/Lenka-design-next-web/pages/posts/[slug].js\",\n                                                lineNumber: 45,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jakubstadnik/Documents/GitHub/Lenka-design-next-web/pages/posts/[slug].js\",\n                                            lineNumber: 44,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_date_formatter__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                            dateString: post.date\n                                        }, void 0, false, {\n                                            fileName: \"/Users/jakubstadnik/Documents/GitHub/Lenka-design-next-web/pages/posts/[slug].js\",\n                                            lineNumber: 48,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/jakubstadnik/Documents/GitHub/Lenka-design-next-web/pages/posts/[slug].js\",\n                                    lineNumber: 32,\n                                    columnNumber: 17\n                                }, this)\n                            }, void 0, false)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/jakubstadnik/Documents/GitHub/Lenka-design-next-web/pages/posts/[slug].js\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/jakubstadnik/Documents/GitHub/Lenka-design-next-web/pages/posts/[slug].js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jakubstadnik/Documents/GitHub/Lenka-design-next-web/pages/posts/[slug].js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = Post;\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNMO0FBQ047QUFFQTtBQUV5QjtBQUNNOztBQUU3QyxTQUFTTSxLQUFLLEtBQTRCLEVBQUU7UUFBOUIsRUFBRUMsS0FBSSxFQUFFQyxVQUFTLEVBQUVDLFFBQU8sRUFBRSxHQUE1Qjs7SUFDM0IsTUFBTUMsU0FBU1Ysc0RBQVNBO0lBQ3hCLE1BQU1XLFFBQVFKLEtBQUtJLEtBQUs7SUFDeEIsSUFBSSxDQUFDRCxPQUFPRSxVQUFVLElBQUksQ0FBQ0wsQ0FBQUEsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNTSxJQUFJLEdBQUU7UUFDckMscUJBQU8sOERBQUNaLG1EQUFTQTtZQUFDYSxZQUFZOzs7Ozs7SUFDaEMsQ0FBQztJQUNELHFCQUNFOzswQkFDRSw4REFBQ0M7Ozs7OzBCQUNELDhEQUFDQztnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7OEJBQ0MsNEVBQUNGO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0U7Z0NBQUdGLFdBQVU7O2tEQUNaLDhEQUFDZixrREFBSUE7d0NBQUNrQixNQUFLO3dDQUFJSCxXQUFVO2tEQUFrQjs7Ozs7O29DQUVwQzs7Ozs7Ozs0QkFHUlAsT0FBT0UsVUFBVSxpQkFDaEIsOERBQUNTOzBDQUFHOzs7OztxREFFSjswQ0FDRSw0RUFBQ0M7b0NBQVFMLFdBQVU7O3NEQUNqQiw4REFBQ2Qsa0RBQUlBOzs4REFDSCw4REFBQ1E7OERBQU9BOzs7Ozs7OERBQ1IsOERBQUNZO29EQUFLQyxVQUFTO29EQUFXQyxTQUFTbEIsS0FBS21CLE9BQU8sQ0FBQ0MsR0FBRzs7Ozs7Ozs7Ozs7O3NEQUVyRCw4REFBQ047NENBQUdKLFdBQVU7c0RBQ1hWLEtBQUtJLEtBQUs7Ozs7OztzREFHYiw4REFBQ0s7NENBQUlDLFdBQVU7c0RBQ2IsNEVBQUNiLCtEQUFVQTtnREFBQ08sT0FBT0osS0FBS0ksS0FBSztnREFBRWlCLEtBQUtyQixLQUFLc0IsVUFBVTs7Ozs7Ozs7Ozs7c0RBRXJELDhEQUFDYjs0Q0FBSUMsV0FBVTtzREFDYiw0RUFBQ0Q7Z0RBQUljLHlCQUF5QjtvREFBRUMsUUFBUXhCLEtBQUtrQixPQUFPO2dEQUFDOzs7Ozs7Ozs7OztzREFHdkQsOERBQUNwQixrRUFBYUE7NENBQUMyQixZQUFZekIsS0FBSzBCLElBQUk7Ozs7Ozs7Ozs7Ozs2Q0FHekM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYixDQUFDO0dBL0N1QjNCOztRQUNQTixrREFBU0E7OztLQURGTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0cy9bc2x1Z10uanM/NjkwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBFcnJvclBhZ2UgZnJvbSBcIm5leHQvZXJyb3JcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGdldFBvc3RCeVNsdWcsIGdldEFsbFBvc3RzIH0gZnJvbSBcIi4uL2xpYi9hcGlcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBtYXJrZG93blRvSHRtbCBmcm9tIFwiLi4vbGliL21hcmtkb3duVG9IdG1sXCI7XG5pbXBvcnQgQ292ZXJJbWFnZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb3Zlci1pbWFnZVwiO1xuaW1wb3J0IERhdGVGb3JtYXR0ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZGF0ZS1mb3JtYXR0ZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IHBvc3QsIG1vcmVQb3N0cywgcHJldmlldyB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB0aXRsZSA9IHBvc3QudGl0bGU7XG4gIGlmICghcm91dGVyLmlzRmFsbGJhY2sgJiYgIXBvc3Q/LnNsdWcpIHtcbiAgICByZXR1cm4gPEVycm9yUGFnZSBzdGF0dXNDb2RlPXs0MDR9IC8+O1xuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuXCI+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNVwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIG1kOnRleHQtNHhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCBtZDp0cmFja2luZy10aWdodGVyIGxlYWRpbmctdGlnaHQgbWItMjAgbXQtOFwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImhvdmVyOnVuZGVybGluZVwiPlxuICAgICAgICAgICAgICAgIEJsb2dcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAuXG4gICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAge3JvdXRlci5pc0ZhbGxiYWNrID8gKFxuICAgICAgICAgICAgICA8aDE+TG9hZGluZ+KApjwvaDE+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cIm1iLTMyXCI+XG4gICAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17cG9zdC5vZ0ltYWdlLnVybH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBtZDp0ZXh0LTd4bCBsZzp0ZXh0LTh4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHRlciBsZWFkaW5nLXRpZ2h0IG1kOmxlYWRpbmctbm9uZSBtYi0xMiB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAge3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTggbWQ6bWItMTYgc206bXgtMFwiPlxuICAgICAgICAgICAgICAgICAgICA8Q292ZXJJbWFnZSB0aXRsZT17cG9zdC50aXRsZX0gc3JjPXtwb3N0LmNvdmVySW1hZ2V9IC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctMnhsIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHBvc3QuY29udGVudCB9fSAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxEYXRlRm9ybWF0dGVyIGRhdGVTdHJpbmc9e3Bvc3QuZGF0ZX0gLz5cbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XG4gIGNvbnN0IHBvc3QgPSBnZXRQb3N0QnlTbHVnKHBhcmFtcy5zbHVnLCBbXG4gICAgXCJ0aXRsZVwiLFxuICAgIFwiZGF0ZVwiLFxuICAgIFwic2x1Z1wiLFxuICAgIFwiYXV0aG9yXCIsXG4gICAgXCJjb250ZW50XCIsXG4gICAgXCJvZ0ltYWdlXCIsXG4gICAgXCJjb3ZlckltYWdlXCIsXG4gIF0pO1xuICBjb25zdCBjb250ZW50ID0gYXdhaXQgbWFya2Rvd25Ub0h0bWwocG9zdC5jb250ZW50IHx8IFwiXCIpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3Q6IHtcbiAgICAgICAgLi4ucG9zdCxcbiAgICAgICAgY29udGVudCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwb3N0cyA9IGdldEFsbFBvc3RzKFtcInNsdWdcIl0pO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IHBvc3RzLm1hcCgocG9zdCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgc2x1ZzogcG9zdC5zbHVnLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9KSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiRXJyb3JQYWdlIiwiTGluayIsIkhlYWQiLCJDb3ZlckltYWdlIiwiRGF0ZUZvcm1hdHRlciIsIlBvc3QiLCJwb3N0IiwibW9yZVBvc3RzIiwicHJldmlldyIsInJvdXRlciIsInRpdGxlIiwiaXNGYWxsYmFjayIsInNsdWciLCJzdGF0dXNDb2RlIiwiSGVhZGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFpbiIsImgyIiwiaHJlZiIsImgxIiwiYXJ0aWNsZSIsIm1ldGEiLCJwcm9wZXJ0eSIsImNvbnRlbnQiLCJvZ0ltYWdlIiwidXJsIiwic3JjIiwiY292ZXJJbWFnZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZGF0ZVN0cmluZyIsImRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/posts/[slug].js\n"));

/***/ })

});