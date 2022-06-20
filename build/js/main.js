/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./source/js/const.js":
/*!****************************!*\
  !*** ./source/js/const.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fillings\": function() { return /* binding */ fillings; },\n/* harmony export */   \"titles\": function() { return /* binding */ titles; },\n/* harmony export */   \"weights\": function() { return /* binding */ weights; }\n/* harmony export */ });\nconst fillings = ['фуа-гра', 'рыбой', 'курой', 'лососем', 'телятиной'];\nconst titles = ['Нямушка', 'Нямушка1', 'Нямушка2', 'Нямушка3'];\nconst weights = ['0,5', '2', '5'];\n\n\n//# sourceURL=webpack://funbox/./source/js/const.js?");

/***/ }),

/***/ "./source/js/main.js":
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_board_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/board-model.js */ \"./source/js/model/board-model.js\");\n/* harmony import */ var _presenter_board_presenter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presenter/board-presenter.js */ \"./source/js/presenter/board-presenter.js\");\n\n\nconst sitePageMainElement = document.querySelector('.page-main');\nconst boardModel = new _model_board_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst boardPresenter = new _presenter_board_presenter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](sitePageMainElement, boardModel);\nboardPresenter.init();\n\n//# sourceURL=webpack://funbox/./source/js/main.js?");

/***/ }),

/***/ "./source/js/mock/card.js":
/*!********************************!*\
  !*** ./source/js/mock/card.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateCards\": function() { return /* binding */ generateCards; }\n/* harmony export */ });\n/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const.js */ \"./source/js/const.js\");\n/* harmony import */ var _utils_common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/common.js */ \"./source/js/utils/common.js\");\n\n\nconst generateCards = () => ({\n  title: _const_js__WEBPACK_IMPORTED_MODULE_0__.titles[(0,_utils_common_js__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(0, _const_js__WEBPACK_IMPORTED_MODULE_0__.titles.length - 1)],\n  weight: _const_js__WEBPACK_IMPORTED_MODULE_0__.weights[(0,_utils_common_js__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(0, _const_js__WEBPACK_IMPORTED_MODULE_0__.weights.length - 1)],\n  filling: _const_js__WEBPACK_IMPORTED_MODULE_0__.fillings[(0,_utils_common_js__WEBPACK_IMPORTED_MODULE_1__.getRandomInteger)(0, _const_js__WEBPACK_IMPORTED_MODULE_0__.fillings.length - 1)]\n});\n\n//# sourceURL=webpack://funbox/./source/js/mock/card.js?");

/***/ }),

/***/ "./source/js/model/board-model.js":
/*!****************************************!*\
  !*** ./source/js/model/board-model.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BoardModel; }\n/* harmony export */ });\n/* harmony import */ var _mock_card_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mock/card.js */ \"./source/js/mock/card.js\");\n\nclass BoardModel {\n  #card = Array.from({\n    length: 3\n  }, _mock_card_js__WEBPACK_IMPORTED_MODULE_0__.generateCards);\n\n  get card() {\n    return this.#card;\n  }\n\n}\n\n//# sourceURL=webpack://funbox/./source/js/model/board-model.js?");

/***/ }),

/***/ "./source/js/presenter/board-presenter.js":
/*!************************************************!*\
  !*** ./source/js/presenter/board-presenter.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BoardPresenter; }\n/* harmony export */ });\nclass BoardPresenter {\n  #boardContainer = null;\n  #cardsModel = null;\n  #boardCards = [];\n\n  constructor(boardContainer, cardsModel) {\n    this.#boardContainer = boardContainer;\n    this.#cardsModel = cardsModel;\n  }\n\n  init = () => {\n    this.#boardCards = [...this.#cardsModel.card];\n    console.log(this.#boardCards);\n  };\n}\n\n//# sourceURL=webpack://funbox/./source/js/presenter/board-presenter.js?");

/***/ }),

/***/ "./source/js/utils/common.js":
/*!***********************************!*\
  !*** ./source/js/utils/common.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandomInteger\": function() { return /* binding */ getRandomInteger; }\n/* harmony export */ });\n// Функция из интернета по генерации случайного числа из диапазона\n// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random\nconst getRandomInteger = (a = 0, b = 1) => {\n  const lower = Math.ceil(Math.min(a, b));\n  const upper = Math.floor(Math.max(a, b));\n  return Math.floor(lower + Math.random() * (upper - lower + 1));\n};\n\n\n\n//# sourceURL=webpack://funbox/./source/js/utils/common.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./source/js/main.js");
/******/ 	
/******/ })()
;