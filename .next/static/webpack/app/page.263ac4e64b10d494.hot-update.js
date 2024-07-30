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

/***/ "(app-pages-browser)/./src/app/redux/slice.js":
/*!********************************!*\
  !*** ./src/app/redux/slice.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addUser: function() { return /* binding */ addUser; },\n/* harmony export */   removeUser: function() { return /* binding */ removeUser; }\n/* harmony export */ });\nconst { createSlice, nanoid, current } = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\nconst initialState = {\n    users: JSON.parse(localStorage.getItem(\"users\")) ? JSON.parse(localStorage.getItem(\"users\")) : []\n};\nconst Slice = createSlice({\n    name: \"addUserSlice\",\n    initialState,\n    reducers: {\n        addUser: (state, action)=>{\n            const data = {\n                id: nanoid(),\n                name: action.payload\n            };\n            state.users.push(data);\n            let userData = JSON.stringify(current(state.users));\n            localStorage.setItem(\"users\", userData);\n        },\n        removeUser: (state, action)=>{\n            const data = state.users.filter((item)=>{\n                return item.id !== action.payload;\n            });\n            state.users = data;\n            let userData = JSON.stringify(data);\n            localStorage.setItem(\"users\", userData);\n        }\n    }\n});\nconst { addUser, removeUser } = Slice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcmVkdXgvc2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNLEVBQUVBLFdBQVcsRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR0MsbUJBQU9BLENBQUMsdUdBQWtCO0FBRW5FLE1BQU1DLGVBQWU7SUFDbkJDLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0MsYUFBYUMsT0FBTyxDQUFDLFlBQ25DSCxLQUFLQyxLQUFLLENBQUNDLGFBQWFDLE9BQU8sQ0FBQyxZQUNoQyxFQUFFO0FBQ1I7QUFFQSxNQUFNQyxRQUFRVixZQUFZO0lBQ3hCVyxNQUFNO0lBQ05QO0lBQ0FRLFVBQVU7UUFDUkMsU0FBUyxDQUFDQyxPQUFPQztZQUNmLE1BQU1DLE9BQU87Z0JBQ1hDLElBQUloQjtnQkFDSlUsTUFBTUksT0FBT0csT0FBTztZQUN0QjtZQUVBSixNQUFNVCxLQUFLLENBQUNjLElBQUksQ0FBQ0g7WUFDakIsSUFBSUksV0FBV2QsS0FBS2UsU0FBUyxDQUFDbkIsUUFBUVksTUFBTVQsS0FBSztZQUNqREcsYUFBYWMsT0FBTyxDQUFDLFNBQVNGO1FBQ2hDO1FBQ0FHLFlBQVksQ0FBQ1QsT0FBT0M7WUFDbEIsTUFBTUMsT0FBT0YsTUFBTVQsS0FBSyxDQUFDbUIsTUFBTSxDQUFDLENBQUNDO2dCQUMvQixPQUFPQSxLQUFLUixFQUFFLEtBQUtGLE9BQU9HLE9BQU87WUFDbkM7WUFDQUosTUFBTVQsS0FBSyxHQUFHVztZQUNkLElBQUlJLFdBQVdkLEtBQUtlLFNBQVMsQ0FBQ0w7WUFDOUJSLGFBQWFjLE9BQU8sQ0FBQyxTQUFTRjtRQUNoQztJQUNGO0FBQ0Y7QUFFTyxNQUFNLEVBQUVQLE9BQU8sRUFBRVUsVUFBVSxFQUFFLEdBQUdiLE1BQU1nQixPQUFPLENBQUM7QUFDckQsK0RBQWVoQixNQUFNaUIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvcmVkdXgvc2xpY2UuanM/ZmE2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNyZWF0ZVNsaWNlLCBuYW5vaWQsIGN1cnJlbnQgfSA9IHJlcXVpcmUoXCJAcmVkdXhqcy90b29sa2l0XCIpO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHVzZXJzOiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcnNcIikpXHJcbiAgICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2Vyc1wiKSlcclxuICAgIDogW10sXHJcbn07XHJcblxyXG5jb25zdCBTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcImFkZFVzZXJTbGljZVwiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgYWRkVXNlcjogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICBpZDogbmFub2lkKCksXHJcbiAgICAgICAgbmFtZTogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBzdGF0ZS51c2Vycy5wdXNoKGRhdGEpO1xyXG4gICAgICBsZXQgdXNlckRhdGEgPSBKU09OLnN0cmluZ2lmeShjdXJyZW50KHN0YXRlLnVzZXJzKSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlcnNcIiwgdXNlckRhdGEpO1xyXG4gICAgfSxcclxuICAgIHJlbW92ZVVzZXI6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBzdGF0ZS51c2Vycy5maWx0ZXIoKGl0ZW0pID0+IHtcclxuICAgICAgICByZXR1cm4gaXRlbS5pZCAhPT0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIH0pO1xyXG4gICAgICBzdGF0ZS51c2VycyA9IGRhdGE7XHJcbiAgICAgIGxldCB1c2VyRGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJzXCIsIHVzZXJEYXRhKTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgeyBhZGRVc2VyLCByZW1vdmVVc2VyIH0gPSBTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgZGVmYXVsdCBTbGljZS5yZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJuYW5vaWQiLCJjdXJyZW50IiwicmVxdWlyZSIsImluaXRpYWxTdGF0ZSIsInVzZXJzIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIlNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiYWRkVXNlciIsInN0YXRlIiwiYWN0aW9uIiwiZGF0YSIsImlkIiwicGF5bG9hZCIsInB1c2giLCJ1c2VyRGF0YSIsInN0cmluZ2lmeSIsInNldEl0ZW0iLCJyZW1vdmVVc2VyIiwiZmlsdGVyIiwiaXRlbSIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/redux/slice.js\n"));

/***/ })

});