"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/AddUsers.js":
/*!****************************************!*\
  !*** ./src/app/components/AddUsers.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddUsers; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/slice */ \"(app-pages-browser)/./src/app/redux/slice.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction AddUsers() {\n    _s();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const userDispatch = ()=>{\n        dispatch((0,_redux_slice__WEBPACK_IMPORTED_MODULE_2__.addUser)(name));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"add-user\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Add Users\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MALIKA SHARMA\\\\Desktop\\\\git\\\\crudrablo\\\\next-rtk\\\\src\\\\app\\\\components\\\\AddUsers.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                className: \"add-user-input\",\n                onChange: (e)=>setName(e.target.value),\n                placeholder: \"Add New User\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MALIKA SHARMA\\\\Desktop\\\\git\\\\crudrablo\\\\next-rtk\\\\src\\\\app\\\\components\\\\AddUsers.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: userDispatch,\n                className: \"add-user-btn\",\n                children: \"Add User\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MALIKA SHARMA\\\\Desktop\\\\git\\\\crudrablo\\\\next-rtk\\\\src\\\\app\\\\components\\\\AddUsers.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\MALIKA SHARMA\\\\Desktop\\\\git\\\\crudrablo\\\\next-rtk\\\\src\\\\app\\\\components\\\\AddUsers.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(AddUsers, \"NsrGp9a6nXdbOOOwr5njYSmhQY4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = AddUsers;\nvar _c;\n$RefreshReg$(_c, \"AddUsers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9BZGRVc2Vycy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ2lDO0FBQ1E7QUFDQztBQUNiO0FBRWQsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNTyxXQUFXTCx3REFBV0E7SUFDNUIsTUFBTU0sZUFBZTtRQUNuQkQsU0FBU04scURBQU9BLENBQUNJO0lBQ25CO0lBQ0EscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFDQ0MsTUFBSztnQkFDTEgsV0FBVTtnQkFDVkksVUFBVSxDQUFDQyxJQUFNVCxRQUFRUyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7Z0JBQ3ZDQyxhQUFZOzs7Ozs7MEJBRWQsOERBQUNDO2dCQUFPQyxTQUFTWjtnQkFBY0UsV0FBVTswQkFBZTs7Ozs7Ozs7Ozs7O0FBSzlEO0dBcEJ3Qk47O1FBRUxGLG9EQUFXQTs7O0tBRk5FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9BZGRVc2Vycy5qcz8wMDAzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBhZGRVc2VyIH0gZnJvbSBcIi4uL3JlZHV4L3NsaWNlXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZFVzZXJzKCkge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB1c2VyRGlzcGF0Y2ggPSAoKSA9PiB7XHJcbiAgICBkaXNwYXRjaChhZGRVc2VyKG5hbWUpKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZC11c2VyXCI+XHJcbiAgICAgIDxoMz5BZGQgVXNlcnM8L2gzPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiYWRkLXVzZXItaW5wdXRcIlxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgTmV3IFVzZXJcIlxyXG4gICAgICAvPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e3VzZXJEaXNwYXRjaH0gY2xhc3NOYW1lPVwiYWRkLXVzZXItYnRuXCI+XHJcbiAgICAgICAgQWRkIFVzZXJcclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImFkZFVzZXIiLCJ1c2VEaXNwYXRjaCIsIkxpbmsiLCJBZGRVc2VycyIsIm5hbWUiLCJzZXROYW1lIiwiZGlzcGF0Y2giLCJ1c2VyRGlzcGF0Y2giLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/AddUsers.js\n"));

/***/ })

});