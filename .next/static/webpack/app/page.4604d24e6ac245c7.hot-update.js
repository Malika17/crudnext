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

/***/ "(app-pages-browser)/./src/app/components/DisplayUsers.js":
/*!********************************************!*\
  !*** ./src/app/components/DisplayUsers.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DisplayUsers; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_slice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/slice */ \"(app-pages-browser)/./src/app/redux/slice.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction DisplayUsers() {\n    _s();\n    const userData = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((data)=>data.usersData.users);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [newName, setNewName] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleEdit = (id, name)=>{\n        setIsEditing(id);\n        setNewName(name);\n    };\n    const handleSave = (id)=>{\n        dispatch((0,_redux_slice__WEBPACK_IMPORTED_MODULE_3__.editUser)({\n            id,\n            name: newName\n        }));\n        setIsEditing(null);\n        setNewName(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"display-user\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"User List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\MALIKA SHARMA\\\\Desktop\\\\git\\\\crudrablo\\\\next-rtk\\\\src\\\\app\\\\components\\\\DisplayUsers.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            userData.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"user-item\",\n                    children: isEditing === item.id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: newName,\n                                onChange: (e)=>setNewName(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MALIKA SHARMA\\\\Desktop\\\\git\\\\crudrablo\\\\next-rtk\\\\src\\\\app\\\\components\\\\DisplayUsers.js\",\n                                lineNumber: 31,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleSave(item.id),\n                                children: \"Save\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MALIKA SHARMA\\\\Desktop\\\\git\\\\crudrablo\\\\next-rtk\\\\src\\\\app\\\\components\\\\DisplayUsers.js\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: item.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MALIKA SHARMA\\\\Desktop\\\\git\\\\crudrablo\\\\next-rtk\\\\src\\\\app\\\\components\\\\DisplayUsers.js\",\n                                lineNumber: 40,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>dispatch((0,_redux_slice__WEBPACK_IMPORTED_MODULE_3__.removeUser)(item.id)),\n                                children: \"Remove\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MALIKA SHARMA\\\\Desktop\\\\git\\\\crudrablo\\\\next-rtk\\\\src\\\\app\\\\components\\\\DisplayUsers.js\",\n                                lineNumber: 41,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleEdit(item.id, item.name),\n                                children: \"Edit\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\MALIKA SHARMA\\\\Desktop\\\\git\\\\crudrablo\\\\next-rtk\\\\src\\\\app\\\\components\\\\DisplayUsers.js\",\n                                lineNumber: 44,\n                                columnNumber: 15\n                            }, this)\n                        ]\n                    }, void 0, true)\n                }, item.id, false, {\n                    fileName: \"C:\\\\Users\\\\MALIKA SHARMA\\\\Desktop\\\\git\\\\crudrablo\\\\next-rtk\\\\src\\\\app\\\\components\\\\DisplayUsers.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\MALIKA SHARMA\\\\Desktop\\\\git\\\\crudrablo\\\\next-rtk\\\\src\\\\app\\\\components\\\\DisplayUsers.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(DisplayUsers, \"xcI0Z0tu/S5upkwsmJGIRf8LW8w=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch\n    ];\n});\n_c = DisplayUsers;\nvar _c;\n$RefreshReg$(_c, \"DisplayUsers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9EaXNwbGF5VXNlcnMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDdUQ7QUFDdEI7QUFDcUI7QUFFdkMsU0FBU0s7O0lBQ3RCLE1BQU1DLFdBQVdMLHdEQUFXQSxDQUFDLENBQUNNLE9BQVNBLEtBQUtDLFNBQVMsQ0FBQ0MsS0FBSztJQUMzRCxNQUFNQyxXQUFXVix3REFBV0E7SUFFNUIsTUFBTSxDQUFDVyxXQUFXQyxhQUFhLEdBQUdWLCtDQUFRQSxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1csU0FBU0MsV0FBVyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUV2QyxNQUFNYSxhQUFhLENBQUNDLElBQUlDO1FBQ3RCTCxhQUFhSTtRQUNiRixXQUFXRztJQUNiO0lBRUEsTUFBTUMsYUFBYSxDQUFDRjtRQUNsQk4sU0FBU04sc0RBQVFBLENBQUM7WUFBRVk7WUFBSUMsTUFBTUo7UUFBUTtRQUN0Q0QsYUFBYTtRQUNiRSxXQUFXO0lBQ2I7SUFFQSxxQkFDRSw4REFBQ0s7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDOzBCQUFHOzs7Ozs7WUFDSGYsU0FBU2dCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDYiw4REFBQ0o7b0JBQWtCQyxXQUFVOzhCQUMxQlQsY0FBY1ksS0FBS1AsRUFBRSxpQkFDcEI7OzBDQUNFLDhEQUFDUTtnQ0FDQ0MsTUFBSztnQ0FDTEMsT0FBT2I7Z0NBQ1BjLFVBQVUsQ0FBQ0MsSUFBTWQsV0FBV2MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7MENBRTVDLDhEQUFDSTtnQ0FBT0MsU0FBUyxJQUFNYixXQUFXSyxLQUFLUCxFQUFFOzBDQUFHOzs7Ozs7O3FEQUc5Qzs7MENBQ0UsOERBQUNnQjswQ0FBTVQsS0FBS04sSUFBSTs7Ozs7OzBDQUNoQiw4REFBQ2E7Z0NBQU9DLFNBQVMsSUFBTXJCLFNBQVNQLHdEQUFVQSxDQUFDb0IsS0FBS1AsRUFBRTswQ0FBSTs7Ozs7OzBDQUd0RCw4REFBQ2M7Z0NBQU9DLFNBQVMsSUFBTWhCLFdBQVdRLEtBQUtQLEVBQUUsRUFBRU8sS0FBS04sSUFBSTswQ0FBRzs7Ozs7Ozs7bUJBaEJuRE0sS0FBS1AsRUFBRTs7Ozs7Ozs7Ozs7QUF5QnpCO0dBL0N3Qlg7O1FBQ0xKLG9EQUFXQTtRQUNYRCxvREFBV0E7OztLQUZOSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvRGlzcGxheVVzZXJzLmpzPzU4YjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyByZW1vdmVVc2VyLCBlZGl0VXNlciB9IGZyb20gXCIuLi9yZWR1eC9zbGljZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGlzcGxheVVzZXJzKCkge1xyXG4gIGNvbnN0IHVzZXJEYXRhID0gdXNlU2VsZWN0b3IoKGRhdGEpID0+IGRhdGEudXNlcnNEYXRhLnVzZXJzKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IFtpc0VkaXRpbmcsIHNldElzRWRpdGluZ10gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbmV3TmFtZSwgc2V0TmV3TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRWRpdCA9IChpZCwgbmFtZSkgPT4ge1xyXG4gICAgc2V0SXNFZGl0aW5nKGlkKTtcclxuICAgIHNldE5ld05hbWUobmFtZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2F2ZSA9IChpZCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goZWRpdFVzZXIoeyBpZCwgbmFtZTogbmV3TmFtZSB9KSk7XHJcbiAgICBzZXRJc0VkaXRpbmcobnVsbCk7XHJcbiAgICBzZXROZXdOYW1lKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXktdXNlclwiPlxyXG4gICAgICA8aDM+VXNlciBMaXN0PC9oMz5cclxuICAgICAge3VzZXJEYXRhLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgIDxkaXYga2V5PXtpdGVtLmlkfSBjbGFzc05hbWU9XCJ1c2VyLWl0ZW1cIj5cclxuICAgICAgICAgIHtpc0VkaXRpbmcgPT09IGl0ZW0uaWQgPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmV3TmFtZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZVNhdmUoaXRlbS5pZCl9PlNhdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxzcGFuPntpdGVtLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2gocmVtb3ZlVXNlcihpdGVtLmlkKSl9PlxyXG4gICAgICAgICAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFZGl0KGl0ZW0uaWQsIGl0ZW0ubmFtZSl9PlxyXG4gICAgICAgICAgICAgICAgRWRpdFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInVzZVN0YXRlIiwicmVtb3ZlVXNlciIsImVkaXRVc2VyIiwiRGlzcGxheVVzZXJzIiwidXNlckRhdGEiLCJkYXRhIiwidXNlcnNEYXRhIiwidXNlcnMiLCJkaXNwYXRjaCIsImlzRWRpdGluZyIsInNldElzRWRpdGluZyIsIm5ld05hbWUiLCJzZXROZXdOYW1lIiwiaGFuZGxlRWRpdCIsImlkIiwibmFtZSIsImhhbmRsZVNhdmUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsIm1hcCIsIml0ZW0iLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/DisplayUsers.js\n"));

/***/ })

});