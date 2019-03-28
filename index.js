/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /*
                                                                                                                                                                                                                                                                              * 入口文件
                                                                                                                                                                                                                                                                              * */

var _module = __webpack_require__(1);

var _module2 = __webpack_require__(2);

var _data = __webpack_require__(3);

var _data2 = _interopRequireDefault(_data);

__webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _module.add)(3, 4));
console.log((0, _module.sub)(4, 3));
console.log((0, _module2.mul)(4, 3));
console.log(_data2.default, typeof _data2.default === 'undefined' ? 'undefined' : _typeof(_data2.default));

setTimeout(function () {}, 200);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

exports.add = add;
exports.sub = sub;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mul = mul;
function mul(a, b) {
  return a * b;
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {"name":"jack","age":28}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Couldn't find preset \"@babel/preset-env\" relative to directory \"C:\\\\Users\\\\tianyu\\\\Desktop\\\\webpack\\\\node_modules\\\\css-loader\"\n    at C:\\Users\\tianyu\\Desktop\\webpack\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:293:19\n    at Array.map (<anonymous>)\n    at OptionManager.resolvePresets (C:\\Users\\tianyu\\Desktop\\webpack\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:275:20)\n    at OptionManager.mergePresets (C:\\Users\\tianyu\\Desktop\\webpack\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:264:10)\n    at OptionManager.mergeOptions (C:\\Users\\tianyu\\Desktop\\webpack\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:249:14)\n    at OptionManager.init (C:\\Users\\tianyu\\Desktop\\webpack\\node_modules\\babel-core\\lib\\transformation\\file\\options\\option-manager.js:368:12)\n    at File.initOptions (C:\\Users\\tianyu\\Desktop\\webpack\\node_modules\\babel-core\\lib\\transformation\\file\\index.js:212:65)\n    at new File (C:\\Users\\tianyu\\Desktop\\webpack\\node_modules\\babel-core\\lib\\transformation\\file\\index.js:135:24)\n    at Pipeline.transform (C:\\Users\\tianyu\\Desktop\\webpack\\node_modules\\babel-core\\lib\\transformation\\pipeline.js:46:16)\n    at transpile (C:\\Users\\tianyu\\Desktop\\webpack\\node_modules\\babel-loader\\lib\\index.js:50:20)\n    at Object.module.exports (C:\\Users\\tianyu\\Desktop\\webpack\\node_modules\\babel-loader\\lib\\index.js:173:20)\n    at runLoaders (C:\\Users\\tianyu\\Desktop\\webpack\\node_modules\\webpack\\lib\\NormalModule.js:195:19)\n    at C:\\Users\\tianyu\\Desktop\\webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\Users\\tianyu\\Desktop\\webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at runSyncOrAsync (C:\\Users\\tianyu\\Desktop\\webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:143:3)\n    at iterateNormalLoaders (C:\\Users\\tianyu\\Desktop\\webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:232:2)\n    at C:\\Users\\tianyu\\Desktop\\webpack\\node_modules\\loader-runner\\lib\\LoaderRunner.js:205:4\n    at C:\\Users\\tianyu\\Desktop\\webpack\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:70:14\n    at process._tickCallback (internal/process/next_tick.js:61:11)");

/***/ })
/******/ ]);