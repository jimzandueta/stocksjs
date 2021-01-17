(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default, getSMA, getEMA, getMACD, getSignal, getHistogram, getALMA, getMACDCross, getRSI, getRSICross, getTP, getCCI, getCCICross, getTrend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _indicators_getSMA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indicators/getSMA */ \"./src/indicators/getSMA.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getSMA\", function() { return _indicators_getSMA__WEBPACK_IMPORTED_MODULE_0__[\"getSMA\"]; });\n\n/* harmony import */ var _indicators_getEMA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indicators/getEMA */ \"./src/indicators/getEMA.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getEMA\", function() { return _indicators_getEMA__WEBPACK_IMPORTED_MODULE_1__[\"getEMA\"]; });\n\n/* harmony import */ var _indicators_getMACD__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indicators/getMACD */ \"./src/indicators/getMACD.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getMACD\", function() { return _indicators_getMACD__WEBPACK_IMPORTED_MODULE_2__[\"getMACD\"]; });\n\n/* harmony import */ var _indicators_getSignal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./indicators/getSignal */ \"./src/indicators/getSignal.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getSignal\", function() { return _indicators_getSignal__WEBPACK_IMPORTED_MODULE_3__[\"getSignal\"]; });\n\n/* harmony import */ var _indicators_getHistogram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./indicators/getHistogram */ \"./src/indicators/getHistogram.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getHistogram\", function() { return _indicators_getHistogram__WEBPACK_IMPORTED_MODULE_4__[\"getHistogram\"]; });\n\n/* harmony import */ var _indicators_getALMA__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./indicators/getALMA */ \"./src/indicators/getALMA.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getALMA\", function() { return _indicators_getALMA__WEBPACK_IMPORTED_MODULE_5__[\"getALMA\"]; });\n\n/* harmony import */ var _indicators_getMACDCross__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./indicators/getMACDCross */ \"./src/indicators/getMACDCross.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getMACDCross\", function() { return _indicators_getMACDCross__WEBPACK_IMPORTED_MODULE_6__[\"getMACDCross\"]; });\n\n/* harmony import */ var _indicators_getTrend__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./indicators/getTrend */ \"./src/indicators/getTrend.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getTrend\", function() { return _indicators_getTrend__WEBPACK_IMPORTED_MODULE_7__[\"getTrend\"]; });\n\n/* harmony import */ var _indicators_getRSI__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./indicators/getRSI */ \"./src/indicators/getRSI.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getRSI\", function() { return _indicators_getRSI__WEBPACK_IMPORTED_MODULE_8__[\"getRSI\"]; });\n\n/* harmony import */ var _indicators_getRSICross__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./indicators/getRSICross */ \"./src/indicators/getRSICross.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getRSICross\", function() { return _indicators_getRSICross__WEBPACK_IMPORTED_MODULE_9__[\"getRSICross\"]; });\n\n/* harmony import */ var _indicators_getTP__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./indicators/getTP */ \"./src/indicators/getTP.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getTP\", function() { return _indicators_getTP__WEBPACK_IMPORTED_MODULE_10__[\"getTP\"]; });\n\n/* harmony import */ var _indicators_getCCI__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./indicators/getCCI */ \"./src/indicators/getCCI.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getCCI\", function() { return _indicators_getCCI__WEBPACK_IMPORTED_MODULE_11__[\"getCCI\"]; });\n\n/* harmony import */ var _indicators_getCCICross__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./indicators/getCCICross */ \"./src/indicators/getCCICross.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getCCICross\", function() { return _indicators_getCCICross__WEBPACK_IMPORTED_MODULE_12__[\"getCCICross\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getSMA: _indicators_getSMA__WEBPACK_IMPORTED_MODULE_0__[\"getSMA\"],\n  getEMA: _indicators_getEMA__WEBPACK_IMPORTED_MODULE_1__[\"getEMA\"],\n  getMACD: _indicators_getMACD__WEBPACK_IMPORTED_MODULE_2__[\"getMACD\"],\n  getSignal: _indicators_getSignal__WEBPACK_IMPORTED_MODULE_3__[\"getSignal\"],\n  getHistogram: _indicators_getHistogram__WEBPACK_IMPORTED_MODULE_4__[\"getHistogram\"],\n  getALMA: _indicators_getALMA__WEBPACK_IMPORTED_MODULE_5__[\"getALMA\"],\n  getMACDCross: _indicators_getMACDCross__WEBPACK_IMPORTED_MODULE_6__[\"getMACDCross\"],\n  getRSI: _indicators_getRSI__WEBPACK_IMPORTED_MODULE_8__[\"getRSI\"],\n  getRSICross: _indicators_getRSICross__WEBPACK_IMPORTED_MODULE_9__[\"getRSICross\"],\n  getTP: _indicators_getTP__WEBPACK_IMPORTED_MODULE_10__[\"getTP\"],\n  getCCI: _indicators_getCCI__WEBPACK_IMPORTED_MODULE_11__[\"getCCI\"],\n  getCCICross: _indicators_getCCICross__WEBPACK_IMPORTED_MODULE_12__[\"getCCICross\"],\n  getTrend: _indicators_getTrend__WEBPACK_IMPORTED_MODULE_7__[\"getTrend\"]\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/indicators/getALMA.js":
/*!***********************************!*\
  !*** ./src/indicators/getALMA.js ***!
  \***********************************/
/*! exports provided: getALMA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getALMA\", function() { return getALMA; });\nvar getALMA = function getALMA(priceHist) {\n  var period = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 9;\n  var sigma = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 6.0;\n  var offset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.85;\n  var keyPrice = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'price';\n  var window = period + 1;\n  var m = Math.floor(offset * period);\n  var s = period / sigma;\n\n  for (var i = 0; i < priceHist.length; i++) {\n    var cSum = 0.0;\n    var norm = 0.0;\n\n    if (i + period < priceHist.length) {\n      for (var j = i; j < i + window; j++) {\n        var jj = j - i;\n        var coeff = Math.exp(-((jj - m) * (jj - m)) / (2 * s * s));\n        cSum += parseFloat(priceHist[i + window - 1 - jj][keyPrice]) * coeff;\n        norm += coeff;\n      }\n\n      priceHist[i].alma = (cSum / norm).toFixed(4);\n    } else {\n      priceHist[i].alma = 0 .toFixed(4);\n    }\n  }\n\n  return priceHist;\n};\n\n\n\n//# sourceURL=webpack:///./src/indicators/getALMA.js?");

/***/ }),

/***/ "./src/indicators/getCCI.js":
/*!**********************************!*\
  !*** ./src/indicators/getCCI.js ***!
  \**********************************/
/*! exports provided: getCCI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCCI\", function() { return getCCI; });\n/* harmony import */ var _getTP__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getTP */ \"./src/indicators/getTP.js\");\n/* harmony import */ var _getSMA__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getSMA */ \"./src/indicators/getSMA.js\");\n\n\n\nvar getCCI = function getCCI(priceHist) {\n  var period = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;\n  var constant = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.015;\n  var priceKeys = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ['price', 'high', 'low'];\n  var setKey = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'cci';\n  priceHist = Object(_getTP__WEBPACK_IMPORTED_MODULE_0__[\"getTP\"])(priceHist, priceKeys);\n  priceHist = Object(_getSMA__WEBPACK_IMPORTED_MODULE_1__[\"getSMA\"])(priceHist, period, 'tp', 'smatp');\n\n  for (var i = priceHist.length - 1; i >= 0; i--) {\n    if (i <= priceHist.length - period) {\n      var mdSum = 0.0;\n\n      for (var j = i; j < i + period; j++) {\n        mdSum += Math.abs(parseFloat(priceHist[j]['tp']) - parseFloat(priceHist[i][\"smatp\".concat(period)]));\n      }\n\n      var md = mdSum / period;\n      priceHist[i][setKey] = ((parseFloat(priceHist[i]['tp']) - parseFloat(priceHist[i][\"smatp\".concat(period)])) / (constant * md)).toFixed(4);\n    } else {\n      priceHist[i][setKey] = 0 .toFixed(4);\n    }\n  }\n\n  return priceHist;\n};\n\n\n\n//# sourceURL=webpack:///./src/indicators/getCCI.js?");

/***/ }),

/***/ "./src/indicators/getCCICross.js":
/*!***************************************!*\
  !*** ./src/indicators/getCCICross.js ***!
  \***************************************/
/*! exports provided: getCCICross */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCCICross\", function() { return getCCICross; });\n/* harmony import */ var _getCCI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCCI */ \"./src/indicators/getCCI.js\");\n\n\nvar getCCICross = function getCCICross(priceHist) {\n  var period = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;\n  var constant = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.015;\n  var priceKeys = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ['price', 'high', 'low'];\n  var limit = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 100;\n  var isWithCCI = priceHist[0].hasOwnProperty('cci');\n  priceHist = !isWithCCI ? Object(_getCCI__WEBPACK_IMPORTED_MODULE_0__[\"getCCI\"])(priceHist, period, constant, priceKeys) : priceHist;\n  var arr = [];\n  var cIdx = 0;\n\n  for (var i = 0; i < priceHist.length; i++) {\n    var a = parseFloat(priceHist[cIdx]['cci']) >= limit;\n    var b = parseFloat(priceHist[cIdx]['cci']) < limit;\n    var c = parseFloat(priceHist[i]['cci']) >= limit;\n    var d = parseFloat(priceHist[i]['cci']) < limit;\n\n    if (a && d) {\n      priceHist[cIdx]['days'] = cIdx;\n      arr.push(priceHist[cIdx]);\n      cIdx = i;\n    } else {\n      cIdx = i;\n    }\n\n    if (!isWithCCI) delete priceHist[i]['cci'];\n  }\n\n  return arr;\n};\n\n\n\n//# sourceURL=webpack:///./src/indicators/getCCICross.js?");

/***/ }),

/***/ "./src/indicators/getEMA.js":
/*!**********************************!*\
  !*** ./src/indicators/getEMA.js ***!
  \**********************************/
/*! exports provided: getEMA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEMA\", function() { return getEMA; });\n/* harmony import */ var _getSMA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSMA */ \"./src/indicators/getSMA.js\");\n\n\nvar getEMA = function getEMA(priceHist, period) {\n  var priceKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'price';\n  var setKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'ema';\n  var s = 2;\n  var k = s / (1 + period);\n  var isWithSMA = priceHist[0].hasOwnProperty(\"sma\".concat(period));\n  priceHist = !isWithSMA ? Object(_getSMA__WEBPACK_IMPORTED_MODULE_0__[\"getSMA\"])(priceHist, period) : priceHist;\n\n  for (var i = priceHist.length - 1; i >= 0; i--) {\n    if (i === priceHist.length - period) {\n      priceHist[i][\"\".concat(setKey).concat(period)] = priceHist[i][\"sma\".concat(period)];\n    } else if (i < priceHist.length - period) {\n      priceHist[i][\"\".concat(setKey).concat(period)] = (parseFloat(priceHist[i][priceKey] * k) + parseFloat(priceHist[i + 1][\"\".concat(setKey).concat(period)] * (1 - k))).toFixed(6);\n    } else {\n      priceHist[i][\"\".concat(setKey).concat(period)] = 0 .toFixed(6);\n    }\n\n    if (!isWithSMA) delete priceHist[i][\"sma\".concat(period)];\n  }\n\n  return priceHist;\n};\n\n\n\n//# sourceURL=webpack:///./src/indicators/getEMA.js?");

/***/ }),

/***/ "./src/indicators/getHistogram.js":
/*!****************************************!*\
  !*** ./src/indicators/getHistogram.js ***!
  \****************************************/
/*! exports provided: getHistogram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getHistogram\", function() { return getHistogram; });\n/* harmony import */ var _getMACD__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getMACD */ \"./src/indicators/getMACD.js\");\n/* harmony import */ var _getSignal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getSignal */ \"./src/indicators/getSignal.js\");\n\n\n\nvar getHistogram = function getHistogram(priceHist, periods) {\n  var priceKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'price';\n  var setKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'histogram';\n  var fastPeriod = periods.fastPeriod ? periods.fastPeriod : 12;\n  var slowPeriod = periods.slowPeriod ? periods.slowPeriod : 26;\n  var signalLength = periods.signalLength ? periods.signalLength : 9;\n  var isWithMACD = priceHist[0].hasOwnProperty('macd');\n  var isWithSignal = priceHist[0].hasOwnProperty('signal');\n  priceHist = !isWithMACD ? Object(_getMACD__WEBPACK_IMPORTED_MODULE_0__[\"getMACD\"])(priceHist, {\n    fastPeriod: fastPeriod,\n    slowPeriod: slowPeriod\n  }, priceKey) : priceHist;\n  priceHist = !isWithSignal ? Object(_getSignal__WEBPACK_IMPORTED_MODULE_1__[\"getSignal\"])(priceHist, {\n    fastPeriod: fastPeriod,\n    slowPeriod: slowPeriod,\n    signalLength: signalLength\n  }, priceKey) : priceHist;\n\n  for (var i = 0; i < priceHist.length; i++) {\n    priceHist[i][setKey] = (parseFloat(priceHist[i].macd) - parseFloat(priceHist[i].signal)).toFixed(6);\n  }\n\n  return priceHist;\n};\n\n\n\n//# sourceURL=webpack:///./src/indicators/getHistogram.js?");

/***/ }),

/***/ "./src/indicators/getMACD.js":
/*!***********************************!*\
  !*** ./src/indicators/getMACD.js ***!
  \***********************************/
/*! exports provided: getMACD */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMACD\", function() { return getMACD; });\n/* harmony import */ var _getEMA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getEMA */ \"./src/indicators/getEMA.js\");\n/* harmony import */ var _getSignal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getSignal */ \"./src/indicators/getSignal.js\");\n/* harmony import */ var _getHistogram__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getHistogram */ \"./src/indicators/getHistogram.js\");\n\n\n\n\nvar getMACD = function getMACD(priceHist, periods) {\n  var priceKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'price';\n  var setKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'macd';\n  var options = arguments.length > 4 ? arguments[4] : undefined;\n  var fastPeriod = periods.fastPeriod ? periods.fastPeriod : 12;\n  var slowPeriod = periods.slowPeriod ? periods.slowPeriod : 26;\n  var signalLength = periods.signalLength ? periods.signalLength : 9;\n  var isWithEMAFast = priceHist[0].hasOwnProperty(\"ema\".concat(fastPeriod));\n  var isWithEMASlow = priceHist[0].hasOwnProperty(\"ema\".concat(slowPeriod));\n  priceHist = !isWithEMAFast ? Object(_getEMA__WEBPACK_IMPORTED_MODULE_0__[\"getEMA\"])(priceHist, fastPeriod, priceKey) : priceHist;\n  priceHist = !isWithEMASlow ? Object(_getEMA__WEBPACK_IMPORTED_MODULE_0__[\"getEMA\"])(priceHist, slowPeriod, priceKey) : priceHist;\n\n  for (var i = 0; i < priceHist.length; i++) {\n    if (i < priceHist.length - slowPeriod - 1) {\n      priceHist[i][setKey] = parseFloat(priceHist[i][\"ema\".concat(fastPeriod)] - priceHist[i][\"ema\".concat(slowPeriod)]).toFixed(6);\n    } else {\n      priceHist[i][setKey] = 0 .toFixed(6);\n    }\n\n    if (!isWithEMAFast) delete priceHist[i][\"ema\".concat(fastPeriod)];\n    if (!isWithEMASlow) delete priceHist[i][\"ema\".concat(slowPeriod)];\n  }\n\n  priceHist = options.includeSignal ? Object(_getSignal__WEBPACK_IMPORTED_MODULE_1__[\"getSignal\"])(priceHist, {\n    fastPeriod: fastPeriod,\n    slowPeriod: slowPeriod,\n    signalLength: signalLength\n  }, priceKey) : priceHist;\n  priceHist = options.includeHistogram ? Object(_getHistogram__WEBPACK_IMPORTED_MODULE_2__[\"getHistogram\"])(priceHist, {\n    fastPeriod: fastPeriod,\n    slowPeriod: slowPeriod,\n    signalLength: signalLength\n  }, priceKey) : priceHist;\n  return priceHist;\n};\n\n\n\n//# sourceURL=webpack:///./src/indicators/getMACD.js?");

/***/ }),

/***/ "./src/indicators/getMACDCross.js":
/*!****************************************!*\
  !*** ./src/indicators/getMACDCross.js ***!
  \****************************************/
/*! exports provided: getMACDCross */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMACDCross\", function() { return getMACDCross; });\n/* harmony import */ var _getMACD__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getMACD */ \"./src/indicators/getMACD.js\");\n\n\nvar getMACDCross = function getMACDCross(priceHist, periods) {\n  var priceKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'price';\n  var fastPeriod = periods.fastPeriod ? periods.fastPeriod : 12;\n  var slowPeriod = periods.slowPeriod ? periods.slowPeriod : 26;\n  var signalLength = periods.signalLength ? periods.signalLength : 9;\n  var options = {\n    includeSignal: true,\n    includeHistogram: true\n  };\n  var isWithMACD = priceHist[0].hasOwnProperty('macd');\n  priceHist = !isWithMACD ? Object(_getMACD__WEBPACK_IMPORTED_MODULE_0__[\"getMACD\"])(priceHist, {\n    fastPeriod: fastPeriod,\n    slowPeriod: slowPeriod,\n    signalLength: signalLength\n  }, priceKey, 'macd', options) : priceHist;\n  var arr = [];\n  var cIdx = 0;\n\n  for (var i = 0; i < priceHist.length; i++) {\n    var a = parseFloat(priceHist[cIdx].macd) > parseFloat(priceHist[cIdx].signal);\n    var b = parseFloat(priceHist[i].macd) > parseFloat(priceHist[i].signal);\n\n    if (!a != !b) {\n      priceHist[i - cIdx - 1]['days'] = i - cIdx - 1;\n      arr.push(priceHist[i - cIdx - 1]);\n      cIdx = i;\n    }\n\n    if (!isWithMACD) delete priceHist[i]['macd'];\n  }\n\n  return arr;\n};\n\n\n\n//# sourceURL=webpack:///./src/indicators/getMACDCross.js?");

/***/ }),

/***/ "./src/indicators/getRSI.js":
/*!**********************************!*\
  !*** ./src/indicators/getRSI.js ***!
  \**********************************/
/*! exports provided: getRSI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRSI\", function() { return getRSI; });\nvar getRSI = function getRSI(priceHist) {\n  var period = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 14;\n  var changeKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'change';\n  var setKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'rsi';\n\n  for (var i = priceHist.length - 1; i >= 0; i--) {\n    var gArr = [];\n    var lArr = [];\n    var gAve = null;\n    var lAve = null;\n    var gCur = null;\n    var lCur = null;\n\n    if (i <= priceHist.length - 1 - period) {\n      for (var j = i; j < i + period; j++) {\n        var change = parseFloat(priceHist[j][changeKey]);\n        change >= 0 ? gArr.push(change) : gArr.push(0);\n        change < 0 ? lArr.push(Math.abs(change)) : lArr.push(0);\n      }\n    }\n\n    if (i === priceHist.length - 1 - period) {\n      gAve = gArr.reduce(function (sum, g) {\n        return sum + g;\n      }) / gArr.length;\n      lAve = lArr.reduce(function (sum, l) {\n        return sum + l;\n      }) / lArr.length;\n    } else if (i < priceHist.length - 1 - period) {\n      gCur = gArr.slice(0, 1)[0];\n      lCur = lArr.slice(0, 1)[0];\n      gAve = (priceHist[i + 1]['gAve'] * (period - 1) + gCur) / period;\n      lAve = (priceHist[i + 1]['lAve'] * (period - 1) + lCur) / period;\n      delete priceHist[i + 1]['gAve'];\n      delete priceHist[i + 1]['lAve'];\n    } else {\n      priceHist[i]['gAve'] = 0;\n      priceHist[i]['lAve'] = 0;\n      priceHist[i][\"\".concat(setKey).concat(period)] = 0 .toFixed(2);\n    }\n\n    priceHist[i]['gAve'] = gAve;\n    priceHist[i]['lAve'] = lAve;\n    priceHist[i][\"\".concat(setKey).concat(period)] = (100 - 100 / (1 + gAve / lAve)).toFixed(4);\n  }\n\n  return priceHist;\n};\n\n\n\n//# sourceURL=webpack:///./src/indicators/getRSI.js?");

/***/ }),

/***/ "./src/indicators/getRSICross.js":
/*!***************************************!*\
  !*** ./src/indicators/getRSICross.js ***!
  \***************************************/
/*! exports provided: getRSICross */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRSICross\", function() { return getRSICross; });\n/* harmony import */ var _getRSI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRSI */ \"./src/indicators/getRSI.js\");\n\n\nvar getRSICross = function getRSICross(priceHist) {\n  var period = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 14;\n  var changeKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'change';\n  var limits = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [50, 55];\n  var isWithRSI = priceHist[0].hasOwnProperty(\"rsi\".concat(period));\n  priceHist = !isWithRSI ? Object(_getRSI__WEBPACK_IMPORTED_MODULE_0__[\"getRSI\"])(priceHist, period, changeKey) : priceHist;\n  var arr = [];\n  var cIdx = 0;\n\n  for (var i = 0; i < priceHist.length; i++) {\n    var a = parseFloat(priceHist[cIdx][\"rsi\".concat(period)]) >= limits[1];\n    var b = parseFloat(priceHist[cIdx][\"rsi\".concat(period)]) >= limits[0] && parseFloat(priceHist[cIdx][\"rsi\".concat(period)]) < limits[1];\n    var c = parseFloat(priceHist[cIdx][\"rsi\".concat(period)]) < limits[0];\n    var d = parseFloat(priceHist[i][\"rsi\".concat(period)]) >= limits[1];\n    var e = parseFloat(priceHist[i][\"rsi\".concat(period)]) >= limits[0] && parseFloat(priceHist[i][\"rsi\".concat(period)]) < limits[1];\n    var f = parseFloat(priceHist[i][\"rsi\".concat(period)]) < limits[0];\n\n    if (a && (e || f) || b && f) {\n      priceHist[cIdx]['days'] = cIdx;\n      arr.push(priceHist[cIdx]);\n      cIdx = i;\n    } else if (c && (f || e || d) || b && (e || d) || a && d) {\n      cIdx = i;\n    }\n\n    if (!isWithRSI) delete priceHist[i][\"rsi\".concat(period)];\n  }\n\n  return arr;\n};\n\n\n\n//# sourceURL=webpack:///./src/indicators/getRSICross.js?");

/***/ }),

/***/ "./src/indicators/getSMA.js":
/*!**********************************!*\
  !*** ./src/indicators/getSMA.js ***!
  \**********************************/
/*! exports provided: getSMA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSMA\", function() { return getSMA; });\nvar getSMA = function getSMA(priceHist, period) {\n  var priceKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'price';\n  var setKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'sma';\n\n  for (var i = 0; i < priceHist.length; i++) {\n    if (i < priceHist.length - period + 1) {\n      var tt = 0;\n\n      for (var j = i; j < i + period; j++) {\n        tt += parseFloat(priceHist[j][priceKey]);\n      }\n\n      priceHist[i][\"\".concat(setKey).concat(period)] = (tt / period).toFixed(6);\n    } else {\n      priceHist[i][\"\".concat(setKey).concat(period)] = 0 .toFixed(6);\n    }\n  }\n\n  return priceHist;\n};\n\n\n\n//# sourceURL=webpack:///./src/indicators/getSMA.js?");

/***/ }),

/***/ "./src/indicators/getSignal.js":
/*!*************************************!*\
  !*** ./src/indicators/getSignal.js ***!
  \*************************************/
/*! exports provided: getSignal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSignal\", function() { return getSignal; });\n/* harmony import */ var _getSMA__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getSMA */ \"./src/indicators/getSMA.js\");\n/* harmony import */ var _getMACD__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getMACD */ \"./src/indicators/getMACD.js\");\n\n\n\nvar getSignal = function getSignal(priceHist, periods) {\n  var priceKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'price';\n  var setKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'signal';\n  var fastPeriod = periods.fastPeriod ? periods.fastPeriod : 12;\n  var slowPeriod = periods.slowPeriod ? periods.slowPeriod : 26;\n  var signalLength = periods.signalLength ? periods.signalLength : 9;\n  var isWithMACD = priceHist[0].hasOwnProperty('macd');\n  var isWithMACDSMA = priceHist[0].hasOwnProperty(\"macdsma\".concat(signalLength));\n  priceHist = !isWithMACD ? Object(_getMACD__WEBPACK_IMPORTED_MODULE_1__[\"getMACD\"])(priceHist, {\n    fastPeriod: fastPeriod,\n    slowPeriod: slowPeriod\n  }, priceKey) : priceHist;\n  priceHist = !isWithMACDSMA ? Object(_getSMA__WEBPACK_IMPORTED_MODULE_0__[\"getSMA\"])(priceHist, signalLength, 'macd', 'macdsma') : priceHist;\n  var s = 2;\n  var k = s / (1 + signalLength);\n\n  for (var i = priceHist.length - 1; i >= 0; i--) {\n    if (i === priceHist.length - signalLength - slowPeriod - 1) {\n      priceHist[i][setKey] = priceHist[i][\"macdsma\".concat(signalLength)];\n    } else if (i < priceHist.length - signalLength - slowPeriod - 1) {\n      priceHist[i][setKey] = (parseFloat(priceHist[i].macd * k) + parseFloat(priceHist[i + 1][setKey] * (1 - k))).toFixed(6);\n    } else {\n      priceHist[i][setKey] = 0 .toFixed(6);\n    }\n\n    if (!isWithMACD) delete priceHist[i]['macd'];\n    if (!isWithMACDSMA) delete priceHist[i][\"macdsma\".concat(signalLength)];\n  }\n\n  return priceHist;\n};\n\n\n\n//# sourceURL=webpack:///./src/indicators/getSignal.js?");

/***/ }),

/***/ "./src/indicators/getTP.js":
/*!*********************************!*\
  !*** ./src/indicators/getTP.js ***!
  \*********************************/
/*! exports provided: getTP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTP\", function() { return getTP; });\nvar getTP = function getTP(priceHist) {\n  var priceKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['price', 'high', 'low'];\n  var setKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'tp';\n\n  for (var i = 0; i < priceHist.length; i++) {\n    var sum = parseFloat(priceHist[i][priceKeys[0]]) + parseFloat(priceHist[i][priceKeys[1]]) + parseFloat(priceHist[i][priceKeys[2]]);\n    priceHist[i][setKey] = (sum / priceKeys.length).toFixed(6);\n  }\n\n  return priceHist;\n};\n\n\n\n//# sourceURL=webpack:///./src/indicators/getTP.js?");

/***/ }),

/***/ "./src/indicators/getTrend.js":
/*!************************************!*\
  !*** ./src/indicators/getTrend.js ***!
  \************************************/
/*! exports provided: getTrend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTrend\", function() { return getTrend; });\nvar getTrend = function getTrend(priceHist, key) {\n  var start = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n  var end = arguments.length > 3 ? arguments[3] : undefined;\n  var isVector = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;\n  var diff = {\n    increasing: [],\n    decreasing: [],\n    equals: []\n  };\n  var arr = priceHist.slice(start, end).reverse();\n  arr.map(function (item, index, array) {\n    if (index > 0) {\n      var difference = parseFloat(item[key] - array[index - 1][key]);\n      difference = isVector ? Math.abs(difference) : difference;\n      if (difference === 0) diff.equals.push(difference);else if (difference > 0) diff.increasing.push(difference);else diff.decreasing.push(difference);\n    }\n\n    return item;\n  });\n  if (diff.increasing.length > diff.decreasing.length + diff.equals.length) return 1;\n  if (diff.decreasing.length > diff.increasing.length + diff.equals.length) return -1;\n  if (diff.equals.length > diff.increasing.length + diff.decreasing.length) return 0;\n  return 0;\n};\n\n\n\n//# sourceURL=webpack:///./src/indicators/getTrend.js?");

/***/ })

/******/ });
});