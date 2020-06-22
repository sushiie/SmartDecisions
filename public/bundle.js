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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__person__ = __webpack_require__(2);
// import './utils.js';
// import subtract, { square, add } from './utils'

// console.log('app.js is running!!')
// console.log(square(4));
// console.log(add(4, 100));
// console.log(subtract(100, 80));



console.log('is 15 year old adult? ', __WEBPACK_IMPORTED_MODULE_0__person__["c" /* isAdult */](15));
console.log('can 15 year old drink? ', __WEBPACK_IMPORTED_MODULE_0__person__["a" /* canDrink */](15));

console.log('is 19 year old adult? ', __WEBPACK_IMPORTED_MODULE_0__person__["c" /* isAdult */](19));
console.log('can 19 year old drink? ', __WEBPACK_IMPORTED_MODULE_0__person__["a" /* canDrink */](19));

console.log('is 22 year old adult? ', __WEBPACK_IMPORTED_MODULE_0__person__["c" /* isAdult */](22));
console.log('can 22 year old drink? ', __WEBPACK_IMPORTED_MODULE_0__person__["a" /* canDrink */](22));

console.log('is 66 year old a senior?', __WEBPACK_IMPORTED_MODULE_0__person__["b" /* default */](66));
console.log('is 64 year old a senior?', __WEBPACK_IMPORTED_MODULE_0__person__["b" /* default */](64));

/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isAdult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return canDrink; });
const isAdult = (age) => {
    return age > 17;
}

const canDrink = (age) => {
    return age > 21;
}



/* harmony default export */ __webpack_exports__["b"] = ((age) => age >= 65);

/***/ })
/******/ ]);