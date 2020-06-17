/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({"Calendar":"Calendar","Hazards":"Hazards","Notifications":"Notifications","admin~register":"admin~register","admin":"admin","register":"register","assets":"assets","buildings":"buildings","floors":"floors","home":"home","people":"people"}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/content/UserProfile.vue?vue&type=style&index=0&id=f8a0be70&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/content/UserProfile.vue?vue&type=style&index=0&id=f8a0be70&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* obsolete */\n/* use these instead of the obsolete ones */\n/* Colors */\n.container-fluid[data-v-f8a0be70] {\n  position: relative;\n  padding: 0px;\n}\n.container-fluid .main-map[data-v-f8a0be70] {\n    position: relative;\n    width: 100vh;\n    overflow: hidden;\n    height: calc(100vh - 110px);\n}\n.reddish[data-v-f8a0be70] {\n  background-color: #de411b !important;\n}\n.register-text[data-v-f8a0be70] {\n  font-family: Roboto;\n  font-size: 35px;\n  font-weight: normal;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #000000;\n}\n.info[data-v-f8a0be70] {\n  width: 50%;\n}\ng-button[data-v-f8a0be70] {\n  width: 200px;\n  background-color: #de411b !important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/AddHazard.vue?vue&type=style&index=0&id=471b323c&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/employee/AddHazard.vue?vue&type=style&index=0&id=471b323c&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* Colors */\n.title[data-v-471b323c] {\n  text-align: center;\n  color: #de411b;\n}\n.add-hazard-container[data-v-471b323c] {\n  height: 100%;\n  min-width: 250px;\n  max-width: 250px;\n  background-color: white;\n}\n.first-step-text[data-v-471b323c] {\n  margin: 40px 10px 20px 10px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/EmployeeAssets.vue?vue&type=style&index=0&id=243c1adc&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/employee/EmployeeAssets.vue?vue&type=style&index=0&id=243c1adc&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* Colors */\n.container[data-v-243c1adc] {\n  max-width: 100vh;\n}\n.options-container[data-v-243c1adc] {\n  position: fixed;\n  right: 0;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.map-buttons[data-v-243c1adc] {\n  margin-top: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.layer-button[data-v-243c1adc] {\n  opacity: 0.5;\n  background-color: #de411b !important;\n}\n.hazard-button[data-v-243c1adc] {\n  opacity: 0.5;\n  background-color: #de411b !important;\n}\n.layerSelector[data-v-243c1adc] {\n  display: none;\n  min-width: 250px;\n}\n.hazardSelector[data-v-243c1adc] {\n  display: none;\n  min-width: 250px;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/EmployeeMap.vue?vue&type=style&index=0&id=14e8c146&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/employee/EmployeeMap.vue?vue&type=style&index=0&id=14e8c146&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* obsolete */\n/* use these instead of the obsolete ones */\n/* Colors */\n.container-fluid[data-v-14e8c146] {\n  position: relative;\n  padding: 0px;\n}\n.container-fluid .main-map[data-v-14e8c146] {\n    position: relative;\n    width: 100vh;\n    overflow: hidden;\n    height: calc(100vh - 110px);\n}\n.inner-employee-map[data-v-14e8c146] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: white;\n  height: calc(100vh -110px);\n  width: 100vw;\n}\n.inner-employee-map .ol-zoom[data-v-14e8c146] {\n  display: none !important;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/FloorSelector.vue?vue&type=style&index=0&id=6d07b14c&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/employee/FloorSelector.vue?vue&type=style&index=0&id=6d07b14c&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* obsolete */\n/* use these instead of the obsolete ones */\n/* Colors */\n.container-fluid[data-v-6d07b14c] {\n  position: relative;\n  padding: 0px;\n}\n.container-fluid .main-map[data-v-6d07b14c] {\n    position: relative;\n    width: 100vh;\n    overflow: hidden;\n    height: calc(100vh - 110px);\n}\n.stay-to-right[data-v-6d07b14c] {\n  position: absolute;\n  right: 25px;\n}\n.stay-to-bottom[data-v-6d07b14c] {\n  position: absolute;\n  bottom: 0px;\n}\n.no-padding[data-v-6d07b14c] {\n  padding: 0px;\n}\n.default-padding[data-v-6d07b14c] {\n  padding: 20px;\n}\n.default-margin[data-v-6d07b14c] {\n  margin: 25px;\n}\n.card-outter[data-v-6d07b14c] {\n  position: relative;\n  padding-bottom: 50px;\n}\n.card-actions[data-v-6d07b14c] {\n  position: absolute;\n  bottom: 0;\n}\n.btn-save-Rectangle[data-v-6d07b14c] {\n  background-color: #de411b !important;\n  width: 435px;\n  height: 40px;\n  margin-left: -3px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.floor-selector[data-v-6d07b14c] {\n  background-color: #ffffff;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/LayerSelector.vue?vue&type=style&index=0&id=a7c9cdc2&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/employee/LayerSelector.vue?vue&type=style&index=0&id=a7c9cdc2&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/@vue/cli-service/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* Colors */\n/* obsolete */\n/* use these instead of the obsolete ones */\n/* Colors */\n.container-fluid[data-v-a7c9cdc2] {\n  position: relative;\n  padding: 0px;\n}\n.container-fluid .main-map[data-v-a7c9cdc2] {\n    position: relative;\n    width: 100vh;\n    overflow: hidden;\n    height: calc(100vh - 110px);\n}\n.title[data-v-a7c9cdc2] {\n  padding-top: 20px;\n  text-align: center;\n  color: #de411b;\n}\n.flex[data-v-a7c9cdc2] {\n  max-height: 55px !important;\n}\n.layer-selector-container[data-v-a7c9cdc2] {\n  height: 100%;\n  min-width: 250px;\n  background-color: white;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _store_alert_actionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/alert.actionTypes */ "./src/store/alert.actionTypes.js");

//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'App',
  data: function data() {
    return {
      timeout: 2000,
      message: null,
      color: 'success',
      snackbar: false
    };
  },
  computed: Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])({
    alert: function alert(state) {
      return state.alert;
    }
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])(_store_alert_actionTypes__WEBPACK_IMPORTED_MODULE_2__["ALERT"], [_store_alert_actionTypes__WEBPACK_IMPORTED_MODULE_2__["ALERT_SHOW_ALERT"]])), Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('account', ['isLoggedIn'])),
  methods: Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])(_store_alert_actionTypes__WEBPACK_IMPORTED_MODULE_2__["ALERT"], {
    clearAlert: _store_alert_actionTypes__WEBPACK_IMPORTED_MODULE_2__["ALERT_CLEAR"]
  })),
  watch: {
    $route: function $route() {
      this.clearAlert();
    },
    showAlert: function showAlert() {
      if (this.alert.type === 'alert-error') {
        this.color = 'error';
        this.timeout = 0;
      }

      if (this.alert.type === 'alert-success') {
        this.color = 'success';
        this.timeout = 5000;
      }

      this.snackbar = this.showAlert;
    },
    isLoggedIn: function isLoggedIn(val) {
      if (!val) {
        this.$router.push('/');
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/content/UserProfile.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/content/UserProfile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _components_employee_FloorSelector_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/employee/FloorSelector.vue */ "./src/components/employee/FloorSelector.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'UserProfile',
  components: {
    FloorSelector: _components_employee_FloorSelector_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      dirty: false,
      showFloorSelector: false,
      floorId: '',
      floorName: '',
      buildingId: '',
      buildingName: ''
    };
  },
  computed: Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])('account', ['status', 'user', 'userLocation'])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])('account', {
    userProfile: 'profile'
  })),
  methods: Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])('account', ['getProfile'])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])('employee', ['updateEmployeeFloor'])), Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])('toolbar', ['showAdminToolbar', 'hideAdminToolbar'])), {}, {
    editEmployeeLocation: function editEmployeeLocation() {
      this.showFloorSelector = true;
    },
    goBack: function goBack() {
      this.$router.go(-1);
    },
    save: function save() {
      this.updateEmployeeFloor({
        floorId: this.floorId,
        employeeId: this.user.employeeId
      });
      this.dirty = false;
    },
    onFloorSelected: function onFloorSelected(floorInfo) {
      this.floorId = floorInfo.floorId;
      this.floorName = floorInfo.floorName;
      this.buildingName = floorInfo.buildingName;
      this.dirty = true;
      this.showFloorSelector = false;
    }
  }),
  watch: {},
  created: function created() {
    this.hideAdminToolbar();
    this.getProfile();
    this.floorName = this.userLocation.floor;
    this.buildingName = this.userLocation.building;
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    this.showAdminToolbar();
    next();
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/AddHazard.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/employee/AddHazard.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      dialog: false,
      valid: true,
      categories: ['Missing supply', 'Danger', 'Cleaning'],
      hazard: {
        name: undefined,
        description: undefined,
        category: undefined,
        floorId: undefined,
        shape: undefined
      },
      nameRules: [function (v) {
        return !!v || 'Name is required';
      }, function (v) {
        return v && v.length >= 3 || 'Name must be more than 3 characters';
      }, function (v) {
        return v && v.length <= 100 || 'Name must be less than 100 characters';
      }],
      descriptionRules: [function (v) {
        return !!v || 'Description is required';
      }, function (v) {
        return v && v.length >= 3 || 'Description must be more than 3 characters';
      }, function (v) {
        return v && v.length <= 500 || 'Description must be less than 500 characters';
      }],
      categoryRules: [function (v) {
        return !!v || 'Category is required';
      }]
    };
  },
  watch: {
    reportHazard: function reportHazard() {
      if (!this.reportHazard) {
        this.clearHazard();
      }
    }
  },
  methods: Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])('employeeMap', ['setReloadAssets', 'postHazard', 'setReportHazard', 'setHazardPosition'])), {}, {
    save: function save() {
      if (this.$refs.form.validate()) {
        this.hazard.shape = this.hazardPosition;
        this.hazard.floorId = this.floorId;
        this.postHazard(this.hazard);
      }
    },
    dismissChanges: function dismissChanges() {
      this.dialog = false;
      this.setReportHazard(false);
    },
    clearHazard: function clearHazard() {
      this.dialog = false;
      this.$refs.form.reset();
      this.hazard.floorId = undefined;
      this.hazard.shape = undefined;
      this.setHazardPosition(null);
    }
  }),
  computed: Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('employeeMap', ['hazardPosition', 'reportHazard'])),
  props: {
    floorId: {
      required: true
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/EmployeeAssets.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/employee/EmployeeAssets.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _compiled_icons_hazards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/compiled-icons/hazards */ "./src/compiled-icons/hazards.js");
/* harmony import */ var _compiled_icons_hazards__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_compiled_icons_hazards__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _compiled_icons_layers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/compiled-icons/layers */ "./src/compiled-icons/layers.js");
/* harmony import */ var _compiled_icons_layers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_compiled_icons_layers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_employee_LayerSelector_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/employee/LayerSelector.vue */ "./src/components/employee/LayerSelector.vue");
/* harmony import */ var _components_employee_EmployeeMap_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/employee/EmployeeMap.vue */ "./src/components/employee/EmployeeMap.vue");
/* harmony import */ var _components_employee_AddHazard_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/employee/AddHazard.vue */ "./src/components/employee/AddHazard.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    employeeMap: _components_employee_EmployeeMap_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    layerSelector: _components_employee_LayerSelector_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    addHazard: _components_employee_AddHazard_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  data: function data() {
    return {
      lastActiveLayer: undefined
    };
  },
  computed: Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapState"])('employeeMap', ['reportHazard'])), Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapGetters"])('account', ['selectedFloorId'])),
  methods: Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapActions"])('employeeMap', ['setReportHazard'])), {}, {
    toggleDisplay: function toggleDisplay(option_active, option_inactive, button_active, button_inactive) {
      //save last clicked layer
      this.lastActiveLayer = option_active; //change layer display

      if (document.getElementsByClassName(option_active)[0].style.display == 'flex') {
        this.closeAllLayers();
      } else {
        this.switchLayer(option_active, option_inactive, button_active, button_inactive);
      } //call that function


      if (this.lastActiveLayer === 'hazardSelector') {
        this.setReportHazard(true);
      }

      if (this.lastActiveLayer === 'layerSelector') {
        this.setReportHazard(false);
      }
    },
    closeAllLayers: function closeAllLayers() {
      // hide both layers
      document.getElementsByClassName('hazardSelector')[0].style.display = 'none';
      document.getElementsByClassName('layerSelector')[0].style.display = 'none'; //reset the buttons color

      document.getElementsByClassName('hazard-button')[0].style.opacity = 0.5;
      document.getElementsByClassName('layer-button')[0].style.opacity = 0.5;
    },
    switchLayer: function switchLayer(option_active, option_inactive, button_active, button_inactive) {
      //hide inactive layer and show the active one
      document.getElementsByClassName(option_inactive)[0].style.display = 'none';
      document.getElementsByClassName(option_active)[0].style.display = 'flex'; //switch the selected buttons

      document.getElementsByClassName(button_inactive)[0].style.opacity = 0.5;
      document.getElementsByClassName(button_active)[0].style.opacity = 1;
    },
    hazardButtonClicked: function hazardButtonClicked() {
      this.setReportHazard(true);
    }
  }),
  watch: {
    reportHazard: function reportHazard() {
      if (!this.reportHazard && this.lastActiveLayer !== 'layerSelector') {
        this.closeAllLayers();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/EmployeeMap.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/employee/EmployeeMap.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _services_map_service_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/map.service.js */ "./src/services/map.service.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/services */ "./src/services/index.js");
/* harmony import */ var _store_commonSpaces_entityTypes_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/store/commonSpaces.entityTypes.js */ "./src/store/commonSpaces.entityTypes.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/store */ "./src/store.js");





//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      map: undefined,
      layersList: [],
      layer: undefined,
      select: undefined,
      hazardLayer: undefined,
      translateHazard: undefined
    };
  },
  mounted: function mounted() {
    var _this = this;

    // create select interaction
    this.select = _services_map_service_js__WEBPACK_IMPORTED_MODULE_5__["mapService"].selectShape();
    this.select.on('select', function (e) {
      var selectedFeatureId = null;

      if (e.target.getFeatures().getArray()[0]) {
        selectedFeatureId = e.target.getFeatures().getArray()[0].getProperties().Id;
      }

      _this.getAssetDetails(selectedFeatureId);
    }); // create the map

    var floorLayoutService = new _services__WEBPACK_IMPORTED_MODULE_6__["FloorLayoutService"](_store__WEBPACK_IMPORTED_MODULE_9__["default"].getters['account/token']);
    var floorId = _store__WEBPACK_IMPORTED_MODULE_9__["default"].getters['account/userLocation'].floorId;
    floorLayoutService.getLayout(floorId).then(function (layout) {
      if (layout) {
        var source = _services_map_service_js__WEBPACK_IMPORTED_MODULE_5__["mapService"].createMapSource(layout.floorLayoutImage);
        var layer = _services_map_service_js__WEBPACK_IMPORTED_MODULE_5__["mapService"].getLayer(source);
        _this.map = _services_map_service_js__WEBPACK_IMPORTED_MODULE_5__["mapService"].createMap(layer); // get common spaces

        _this.getCommonSpacesLayers(floorId);

        _this.map.addInteraction(_this.select);
      }
    });
  },
  computed: Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapState"])('employeeMap', ['layerSelected', 'reloadAssets', 'reportHazard', 'hazardPosition'])), Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapState"])('mapInteractions', ['newFloorId', 'assetSelected'])),
  watch: {
    reportHazard: function reportHazard() {
      var _this2 = this;

      if (this.reportHazard) {
        this.map.on('singleclick', function (e) {
          if (!_this2.hazardLayer) {
            // create and add a layer for the new hazard that contains a feature with an icon
            _this2.hazardLayer = _services_map_service_js__WEBPACK_IMPORTED_MODULE_5__["mapService"].addNewHazardIconAtCoordinates(e.coordinate);

            _this2.map.addLayer(_this2.hazardLayer); // save the position in store as geojson


            var hazardFeatureGeoJson = JSON.stringify(_services_map_service_js__WEBPACK_IMPORTED_MODULE_5__["mapService"].getGeoJsonFromFeature(_this2.hazardLayer.getSource().getFeatures()[0]));

            _this2.setHazardPosition(hazardFeatureGeoJson); // create and add to the map a translate interaction that applies only to the hazard layer


            _this2.translateHazard = _services_map_service_js__WEBPACK_IMPORTED_MODULE_5__["mapService"].translateOneLayer(_this2.hazardLayer);

            _this2.map.addInteraction(_this2.translateHazard); // when the pin is moved we save the new location as a geojson


            _this2.translateHazard.on('translateend', function () {
              var hazardFeatureGeoJson = JSON.stringify(_services_map_service_js__WEBPACK_IMPORTED_MODULE_5__["mapService"].getGeoJsonFromFeature(_this2.hazardLayer.getSource().getFeatures()[0]));

              _this2.setHazardPosition(hazardFeatureGeoJson);
            });
          }

          _this2.map.removeEventListener('singleclick');
        });
      } else {
        this.removeNewHazard();
      }
    },
    layerSelected: function layerSelected() {
      var _this3 = this;

      // remove all the layers on the map
      this.layersList.forEach(function (layer) {
        _this3.map.removeLayer(layer);
      }); // add just the layers that are selected

      this.layerSelected.forEach(function (selectedLayerName) {
        var selectedLayer = _this3.layersList.find(function (layer) {
          return layer.get('name') === selectedLayerName;
        });

        if (selectedLayer) {
          _this3.map.addLayer(selectedLayer);
        }
      });
    },
    reloadAssets: function reloadAssets() {
      if (this.reloadAssets) {
        this.reloadAssetsOnMap();
      }
    },
    hazardPosition: function hazardPosition() {
      if (!this.hazardPosition) {
        this.removeNewHazard();
      }
    },
    newFloorId: function newFloorId() {
      var _this4 = this;

      // console.log('newFloorId watcher')
      //delete old map
      this.map.setTarget(null); //create map with new floorId

      this.getLayout(this.newFloorId).then(function (layout) {
        if (layout) {
          // console.log('before create map')
          var source = _services_map_service_js__WEBPACK_IMPORTED_MODULE_5__["mapService"].createMapSource(layout.floorLayoutImage);
          var layer = _services_map_service_js__WEBPACK_IMPORTED_MODULE_5__["mapService"].getLayer(source);
          _this4.map = _services_map_service_js__WEBPACK_IMPORTED_MODULE_5__["mapService"].createMap(layer); // get common spaces

          _this4.getNewFloorCommonSpacesLayers(_this4.newFloorId);

          _this4.map.addInteraction(_this4.select); // console.log('after create map')

        }
      });
    },
    assetSelected: function assetSelected() {
      // console.log('assetSelected watcher')
      if (this.assetSelected !== undefined) {
        this.selectFeatureById(this.assetSelected);
      } else {
        this.select.getFeatures().clear();
      }
    }
  },
  methods: Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_4__["default"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapActions"])('employeeMap', ['setReloadAssets', 'setHazardPosition'])), Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapActions"])('floorLayout', ['getLayout'])), {}, {
    getCommonSpacesLayers: function getCommonSpacesLayers(floorId) {
      var _this5 = this;

      var commonSpacesService = new _services__WEBPACK_IMPORTED_MODULE_6__["CommonSpacesService"](_store__WEBPACK_IMPORTED_MODULE_9__["default"].getters['account/token']);
      commonSpacesService.getCommonSpaces(floorId).then(function (commonSpaceDictionary) {
        for (var commonSpaceKey in commonSpaceDictionary) {
          var featureCollection = JSON.parse(commonSpaceDictionary[commonSpaceKey]);

          _this5.addLayerWithFeatures(featureCollection, commonSpaceKey);
        }
      });
    },
    getNewFloorCommonSpacesLayers: function getNewFloorCommonSpacesLayers(newFloor) {
      var _this6 = this;

      var commonSpacesService = new _services__WEBPACK_IMPORTED_MODULE_6__["CommonSpacesService"](_store__WEBPACK_IMPORTED_MODULE_9__["default"].getters['account/token']);
      commonSpacesService.getCommonSpaces(newFloor).then(function (commonSpaceDictionary) {
        for (var commonSpaceKey in commonSpaceDictionary) {
          var featureCollection = JSON.parse(commonSpaceDictionary[commonSpaceKey]);

          _this6.addLayerWithFeatures(featureCollection, commonSpaceKey);
        }
      });
    },
    addLayerWithFeatures: function addLayerWithFeatures(featureCollection, type) {
      // create layer based on feature type
      switch (type) {
        case 'printer':
          this.layer = _services_map_service_js__WEBPACK_IMPORTED_MODULE_5__["mapService"].createVectorLayerWithFeatures(_store_commonSpaces_entityTypes_js__WEBPACK_IMPORTED_MODULE_7__["PRINTER"], featureCollection);
          break;

        case 'bathroom':
          this.layer = _services_map_service_js__WEBPACK_IMPORTED_MODULE_5__["mapService"].createVectorLayerWithFeatures(_store_commonSpaces_entityTypes_js__WEBPACK_IMPORTED_MODULE_7__["BATHROOM"], featureCollection);
          break;

        case 'meetingroom':
          this.layer = _services_map_service_js__WEBPACK_IMPORTED_MODULE_5__["mapService"].createVectorLayerWithFeatures(_store_commonSpaces_entityTypes_js__WEBPACK_IMPORTED_MODULE_7__["meetingRoom"], featureCollection);
          break;

        case 'kitchen':
          this.layer = _services_map_service_js__WEBPACK_IMPORTED_MODULE_5__["mapService"].createVectorLayerWithFeatures(_store_commonSpaces_entityTypes_js__WEBPACK_IMPORTED_MODULE_7__["KITCHEN"], featureCollection);
          break;

        case 'desk':
          this.layer = _services_map_service_js__WEBPACK_IMPORTED_MODULE_5__["mapService"].createDeskLayer(_store_commonSpaces_entityTypes_js__WEBPACK_IMPORTED_MODULE_7__["DESK"], featureCollection);
          break;

        case 'hazard':
          this.layer = _services_map_service_js__WEBPACK_IMPORTED_MODULE_5__["mapService"].addLayerWithHazards(featureCollection);
          break;
      } // add the layer to map


      this.map.addLayer(this.layer); // add the layer to layersList

      this.layersList.push(this.layer);
    },
    getAssetDetails: function getAssetDetails(selectedFeatureId) {
      // eslint-disable-next-line
      console.log(selectedFeatureId);
    },
    reloadAssetsOnMap: function reloadAssetsOnMap() {
      var floorId = _store__WEBPACK_IMPORTED_MODULE_9__["default"].getters['account/selectedFloorId'];
      this.removeNewHazard();
      this.removeCommonSpacesLayers();
      this.getCommonSpacesLayers(floorId);
      this.setReloadAssets(false);
    },
    removeCommonSpacesLayers: function removeCommonSpacesLayers() {
      var _this7 = this;

      this.layersList.forEach(function (layer) {
        _this7.map.removeLayer(layer);
      });
    },
    removeNewHazard: function removeNewHazard() {
      if (this.hazardLayer) {
        this.map.removeLayer(this.hazardLayer);
        this.hazardLayer = null;
      }

      if (this.translateHazard) {
        this.map.removeInteraction(this.translateHazard);
        this.translateHazard = null;
      }

      this.map.removeEventListener('singleclick');
    },
    selectFeatureById: function selectFeatureById(featureId) {
      var searchedFeature = _services_map_service_js__WEBPACK_IMPORTED_MODULE_5__["mapService"].searchFeatureOnFloorMap(this.map, featureId);
      this.select.getFeatures().clear();
      this.select.getFeatures().push(searchedFeature);
    }
  })
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/FloorSelector.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/employee/FloorSelector.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");








//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      open: undefined,
      active: [],
      floorId: '',
      emitTreeSelection: false
    };
  },
  computed: Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__["default"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapState"])('buildingInformation', ['listOfTenants', 'listOfCities', 'listOfBuildingsWithFloors'])), Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapState"])('account', ['userLocation'])),
  watch: {
    active: function active() {
      this.selectAsset();
    }
  },
  methods: Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_7__["default"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapActions"])('buildingInformation', ['getTenants', 'getCities', 'getBuildingsWithFloors'])), Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapActions"])('mapInteractions', ['changeFloor'])), Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapActions"])('account', ['saveFloor'])), Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapMutations"])('buildingInformation', ['setBuildingsWithFloors'])), {}, {
    selectAsset: function selectAsset(newValue) {
      if (this.emitTreeSelection === true && newValue && newValue.length === 1) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.listOfBuildingsWithFloors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var building = _step.value;
            var floor = building.children.find(function (floor) {
              return floor.id === newValue[0];
            });

            if (floor) {
              this.floorId = newValue[0];
              this.$emit('floorSelected', {
                floorId: floor.id,
                floorName: floor.label,
                buldingId: building.id,
                buildingName: building.label
              });
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      if (newValue.length > 0) {
        this.emitTreeSelection = true;
      }
    },
    countrySelected: function countrySelected(newValue) {
      this.citySelected = undefined;
      this.setBuildingsWithFloors(undefined);
      this.getCities(newValue);
    }
  }),
  created: function created() {
    this.getTenants();

    if (this.userLocation.tenantId) {
      this.countrySelected(this.userLocation.tenantId);

      if (this.userLocation.locationId) {
        this.getBuildingsWithFloors(this.userLocation.locationId);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/LayerSelector.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/employee/LayerSelector.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _store_commonSpaces_entityTypes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/commonSpaces.entityTypes.js */ "./src/store/commonSpaces.entityTypes.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      layers: Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _store_commonSpaces_entityTypes_js__WEBPACK_IMPORTED_MODULE_1__["layers"])
    };
  },
  methods: Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])('employeeMap', ['setLayerSelected', 'setSelectAllLayers'])),
  computed: Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapState"])('employeeMap', ['layerSelected', 'selectAllLayers'])), {}, {
    layerSelectedComputed: {
      get: function get() {
        return this.layerSelected;
      },
      set: function set(newLayerSelected) {
        this.setLayerSelected(newLayerSelected);
      }
    },
    selectAllLayersComputed: {
      get: function get() {
        return this.selectAllLayers;
      },
      set: function set(newSelectAllLayers) {
        this.setSelectAllLayers(newSelectAllLayers);
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"525a9f0d-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"525a9f0d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    [
      _c("v-content", { attrs: { fluid: "" } }, [_c("router-view")], 1),
      _c(
        "v-snackbar",
        {
          attrs: {
            right: true,
            timeout: _vm.timeout,
            top: true,
            color: _vm.color
          },
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [
          _vm._v(" " + _vm._s(_vm.alert.message) + " "),
          _c(
            "v-btn",
            {
              attrs: { color: "#fff", flat: "" },
              on: {
                click: function($event) {
                  _vm.snackbar = false
                }
              }
            },
            [_vm._v("Close")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"525a9f0d-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/content/UserProfile.vue?vue&type=template&id=f8a0be70&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"525a9f0d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/content/UserProfile.vue?vue&type=template&id=f8a0be70&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    {
      attrs: {
        "justify-center": "",
        "align-center": "center",
        column: "",
        "fill-height": ""
      }
    },
    [
      _c(
        "div",
        { staticClass: "info" },
        [
          _c(
            "v-layout",
            [
              _c(
                "v-flex",
                { attrs: { xs12: "" } },
                [
                  _c(
                    "v-list",
                    { attrs: { "two-line": "" } },
                    [
                      _c(
                        "v-list-tile",
                        [
                          _c(
                            "v-list-tile-action",
                            [
                              _c("v-icon", { attrs: { color: "indigo" } }, [
                                _vm._v("person")
                              ])
                            ],
                            1
                          ),
                          _c(
                            "v-list-tile-content",
                            [
                              _c("v-list-tile-title", [
                                _vm._v(_vm._s(_vm.userProfile.firstName))
                              ]),
                              _c("v-list-tile-sub-title", [
                                _vm._v("First Name")
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c("v-divider", { attrs: { inset: "" } }),
                      _c(
                        "v-list-tile",
                        [
                          _c("v-list-tile-action"),
                          _c(
                            "v-list-tile-content",
                            [
                              _c("v-list-tile-title", [
                                _vm._v(_vm._s(_vm.userProfile.lastName))
                              ]),
                              _c("v-list-tile-sub-title", [_vm._v("Last Name")])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c("v-divider", { attrs: { inset: "" } }),
                      _c(
                        "v-list-tile",
                        [
                          _c(
                            "v-list-tile-action",
                            [
                              _c("v-icon", { attrs: { color: "indigo" } }, [
                                _vm._v("mail")
                              ])
                            ],
                            1
                          ),
                          _c(
                            "v-list-tile-content",
                            [
                              _c("v-list-tile-title", [
                                _vm._v(
                                  _vm._s(
                                    _vm.userProfile.email
                                      ? _vm.userProfile.email
                                      : ""
                                  )
                                )
                              ]),
                              _c("v-list-tile-sub-title", [_vm._v("Work")])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _c("v-divider", { attrs: { inset: "" } }),
                      _c("v-hover", {
                        attrs: { "open-delay": "200" },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function(ref) {
                              var hover = ref.hover
                              return [
                                _c(
                                  "v-list-tile",
                                  { on: { click: _vm.editEmployeeLocation } },
                                  [
                                    _c(
                                      "v-list-tile-action",
                                      [
                                        _c(
                                          "v-icon",
                                          { attrs: { color: "indigo" } },
                                          [_vm._v("location_on")]
                                        )
                                      ],
                                      1
                                    ),
                                    _c(
                                      "v-list-tile-content",
                                      [
                                        _c("v-list-tile-title", [
                                          _vm._v(_vm._s(_vm.buildingName))
                                        ]),
                                        _c("v-list-tile-sub-title", [
                                          _vm._v(_vm._s(_vm.floorName))
                                        ])
                                      ],
                                      1
                                    ),
                                    _c(
                                      "v-icon",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: hover,
                                            expression: "hover"
                                          }
                                        ],
                                        attrs: { color: "grey" }
                                      },
                                      [_vm._v("edit")]
                                    )
                                  ],
                                  1
                                )
                              ]
                            }
                          }
                        ])
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _c(
            "v-layout",
            { staticStyle: { background: "#fff" } },
            [
              _c(
                "v-flex",
                { attrs: { xs12: "" } },
                [
                  _c(
                    "v-btn",
                    {
                      staticStyle: { float: "right" },
                      attrs: { flat: "", color: "indigo" },
                      on: { click: _vm.goBack }
                    },
                    [_vm._v("Back to Home")]
                  ),
                  _c(
                    "v-btn",
                    {
                      staticStyle: { float: "right" },
                      attrs: {
                        flat: "",
                        color: "indigo",
                        disabled: !_vm.dirty
                      },
                      on: { click: _vm.save }
                    },
                    [_vm._v("Save")]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _c(
        "div",
        { staticClass: "info mt-3" },
        [
          _vm.showFloorSelector
            ? _c("FloorSelector", {
                on: { floorSelected: _vm.onFloorSelected }
              })
            : _vm._e()
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"525a9f0d-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/AddHazard.vue?vue&type=template&id=471b323c&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"525a9f0d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/employee/AddHazard.vue?vue&type=template&id=471b323c&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { staticClass: "add-hazard-container" },
    [
      _c(
        "v-form",
        {
          ref: "form",
          model: {
            value: _vm.valid,
            callback: function($$v) {
              _vm.valid = $$v
            },
            expression: "valid"
          }
        },
        [
          _c(
            "v-container",
            { attrs: { fluid: "" } },
            [
              _c(
                "v-layout",
                {
                  attrs: { "justify-start": "", column: "", "fill-height": "" }
                },
                [
                  _c("v-flex", { attrs: { xs1: "" } }, [
                    _c("h1", { staticClass: "title" }, [
                      _vm._v("Report hazard")
                    ])
                  ]),
                  !_vm.hazardPosition
                    ? [
                        _c("v-flex", { attrs: { xs1: "" } }, [
                          _c("p", { staticClass: "first-step-text" }, [
                            _vm._v(
                              "In order to report a new hazard, first specify its position by clicking on the floor map!"
                            )
                          ])
                        ]),
                        _c(
                          "v-flex",
                          { staticClass: "center", attrs: { xs1: "" } },
                          [
                            _c(
                              "v-btn",
                              {
                                attrs: { flat: "", color: "primary" },
                                on: {
                                  click: function($event) {
                                    return _vm.setReportHazard(false)
                                  }
                                }
                              },
                              [_vm._v("Cancel")]
                            )
                          ],
                          1
                        )
                      ]
                    : [
                        _c(
                          "v-flex",
                          { attrs: { xs1: "" } },
                          [
                            _c("v-text-field", {
                              attrs: { label: "Name", rules: _vm.nameRules },
                              model: {
                                value: _vm.hazard.name,
                                callback: function($$v) {
                                  _vm.$set(_vm.hazard, "name", $$v)
                                },
                                expression: "hazard.name"
                              }
                            })
                          ],
                          1
                        ),
                        _c(
                          "v-flex",
                          { attrs: { xs1: "" } },
                          [
                            _c("v-select", {
                              attrs: {
                                items: _vm.categories,
                                label: "Category",
                                rules: _vm.categoryRules
                              },
                              model: {
                                value: _vm.hazard.category,
                                callback: function($$v) {
                                  _vm.$set(_vm.hazard, "category", $$v)
                                },
                                expression: "hazard.category"
                              }
                            })
                          ],
                          1
                        ),
                        _c(
                          "v-flex",
                          { attrs: { xs1: "" } },
                          [
                            _c("v-textarea", {
                              attrs: {
                                label: "Description",
                                rules: _vm.descriptionRules
                              },
                              model: {
                                value: _vm.hazard.description,
                                callback: function($$v) {
                                  _vm.$set(_vm.hazard, "description", $$v)
                                },
                                expression: "hazard.description"
                              }
                            })
                          ],
                          1
                        ),
                        _c(
                          "v-flex",
                          { attrs: { xs1: "" } },
                          [
                            _c(
                              "v-layout",
                              [
                                _c(
                                  "v-dialog",
                                  {
                                    attrs: {
                                      persistent: "",
                                      "max-width": "290"
                                    },
                                    scopedSlots: _vm._u([
                                      {
                                        key: "activator",
                                        fn: function(ref) {
                                          var on = ref.on
                                          return [
                                            _c(
                                              "v-btn",
                                              _vm._g(
                                                {
                                                  attrs: {
                                                    color: "primary",
                                                    flat: "",
                                                    dark: ""
                                                  }
                                                },
                                                on
                                              ),
                                              [_vm._v("Cancel")]
                                            )
                                          ]
                                        }
                                      }
                                    ]),
                                    model: {
                                      value: _vm.dialog,
                                      callback: function($$v) {
                                        _vm.dialog = $$v
                                      },
                                      expression: "dialog"
                                    }
                                  },
                                  [
                                    _c(
                                      "v-card",
                                      [
                                        _c(
                                          "v-card-title",
                                          { staticClass: "headline" },
                                          [_vm._v("Dismiss changes?")]
                                        ),
                                        _c("v-card-text", [
                                          _vm._v(
                                            "If you dismiss changes you will lose all the data that was not saved."
                                          )
                                        ]),
                                        _c(
                                          "v-card-actions",
                                          [
                                            _c(
                                              "v-layout",
                                              { attrs: { "justify-end": "" } },
                                              [
                                                _c(
                                                  "v-btn",
                                                  {
                                                    attrs: {
                                                      flat: "",
                                                      color: "primary"
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        _vm.dialog = false
                                                      }
                                                    }
                                                  },
                                                  [_vm._v("No")]
                                                ),
                                                _c(
                                                  "v-btn",
                                                  {
                                                    attrs: {
                                                      color: "primary",
                                                      flat: "",
                                                      text: ""
                                                    },
                                                    on: {
                                                      click: _vm.dismissChanges
                                                    }
                                                  },
                                                  [_vm._v("Dismiss Changes")]
                                                )
                                              ],
                                              1
                                            )
                                          ],
                                          1
                                        )
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                ),
                                _c(
                                  "v-btn",
                                  {
                                    attrs: {
                                      disabled: !_vm.valid,
                                      color: "primary"
                                    },
                                    on: { click: _vm.save }
                                  },
                                  [_vm._v("Save")]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                ],
                2
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"525a9f0d-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/EmployeeAssets.vue?vue&type=template&id=243c1adc&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"525a9f0d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/employee/EmployeeAssets.vue?vue&type=template&id=243c1adc&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-layout",
    { staticClass: "container-fluid" },
    [
      _c("employeeMap"),
      _c("div", { staticClass: "options-container" }, [
        _c(
          "div",
          { staticClass: "map-buttons" },
          [
            _c(
              "v-btn",
              {
                staticClass: "layer-button",
                attrs: { fab: "", dark: "" },
                on: {
                  click: function($event) {
                    return _vm.toggleDisplay(
                      "layerSelector",
                      "hazardSelector",
                      "layer-button",
                      "hazard-button"
                    )
                  }
                }
              },
              [
                _c("svgicon", {
                  attrs: {
                    icon: "layers",
                    width: "30",
                    height: "30",
                    color: "#fff",
                    padding: "10px"
                  }
                })
              ],
              1
            ),
            _c(
              "v-btn",
              {
                staticClass: "hazard-button",
                attrs: { fab: "", dark: "" },
                on: {
                  click: function($event) {
                    _vm.toggleDisplay(
                      "hazardSelector",
                      "layerSelector",
                      "hazard-button",
                      "layer-button"
                    )
                    _vm.hazardButtonClicked()
                  }
                }
              },
              [
                _c("svgicon", {
                  attrs: {
                    icon: "hazards",
                    width: "30",
                    height: "30",
                    color: "#fff"
                  }
                })
              ],
              1
            )
          ],
          1
        ),
        _c(
          "div",
          [
            _c("layerSelector", { staticClass: "layerSelector" }),
            _c("addHazard", {
              staticClass: "hazardSelector",
              attrs: { floorId: _vm.selectedFloorId }
            })
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"525a9f0d-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/EmployeeMap.vue?vue&type=template&id=14e8c146&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"525a9f0d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/employee/EmployeeMap.vue?vue&type=template&id=14e8c146&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("v-container", { attrs: { "pa-0": "" } }, [
    _c("div", { staticClass: "inner-employee-map", attrs: { id: "map" } })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"525a9f0d-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/FloorSelector.vue?vue&type=template&id=6d07b14c&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"525a9f0d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/employee/FloorSelector.vue?vue&type=template&id=6d07b14c&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-container",
    { staticClass: "floor-selector", attrs: { "fill-height": "" } },
    [
      _c(
        "v-layout",
        { attrs: { column: "" } },
        [
          _c(
            "v-flex",
            { attrs: { xs1: "" } },
            [
              _c("v-select", {
                attrs: {
                  items: _vm.listOfTenants,
                  label: "Country",
                  "item-text": "country",
                  "item-value": "tenantId",
                  solo: "",
                  "background-color": "grey lighten-3",
                  value: _vm.userLocation.tenantId
                },
                on: { input: _vm.countrySelected }
              })
            ],
            1
          ),
          _c(
            "v-flex",
            { attrs: { xs1: "" } },
            [
              _c("v-select", {
                attrs: {
                  items: _vm.listOfCities,
                  label: "City",
                  "item-text": "name",
                  "item-value": "locationId",
                  solo: "",
                  "background-color": "grey lighten-3",
                  value: _vm.userLocation.locationId
                },
                on: { input: _vm.getBuildingsWithFloors }
              })
            ],
            1
          ),
          _c("v-treeview", {
            attrs: {
              items: _vm.listOfBuildingsWithFloors,
              "item-key": "id",
              "item-text": "label",
              open: [_vm.userLocation.buildingId],
              active: [_vm.userLocation.floorId],
              dense: "",
              activatable: "",
              "open-on-click": ""
            },
            on: { "update:active": _vm.selectAsset }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"525a9f0d-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/LayerSelector.vue?vue&type=template&id=a7c9cdc2&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"525a9f0d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/employee/LayerSelector.vue?vue&type=template&id=a7c9cdc2&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-card",
    { staticClass: "layer-selector-container" },
    [
      _c(
        "v-layout",
        { attrs: { column: "", "align-center": "", "fill-height": "" } },
        [
          _c("v-flex", { staticClass: "title", attrs: { xs12: "" } }, [
            _c("span", [_vm._v("Layers")])
          ]),
          _c(
            "v-flex",
            { attrs: { xs12: "" } },
            [
              _c(
                "v-layout",
                { attrs: { column: "" } },
                [
                  _vm._l(_vm.layers, function(layer, key) {
                    return [
                      _c(
                        "v-flex",
                        { key: key, attrs: { xs10: "" } },
                        [
                          _c("v-checkbox", {
                            attrs: {
                              value: layer.name,
                              label: layer.name,
                              color: layer.color.slice(0, 7)
                            },
                            model: {
                              value: _vm.layerSelectedComputed,
                              callback: function($$v) {
                                _vm.layerSelectedComputed = $$v
                              },
                              expression: "layerSelectedComputed"
                            }
                          })
                        ],
                        1
                      )
                    ]
                  }),
                  _c("v-flex", { attrs: { xs10: "" } }, [_c("hr")]),
                  _c(
                    "v-flex",
                    { attrs: { xs1: "" } },
                    [
                      _c("v-checkbox", {
                        attrs: { label: "Select all layers" },
                        model: {
                          value: _vm.selectAllLayersComputed,
                          callback: function($$v) {
                            _vm.selectAllLayersComputed = $$v
                          },
                          expression: "selectAllLayersComputed"
                        }
                      })
                    ],
                    1
                  )
                ],
                2
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"525a9f0d-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/NotFound.vue?vue&type=template&id=46a88b29&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"525a9f0d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/NotFound.vue?vue&type=template&id=46a88b29& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("h1", [_vm._v("Oops!")]),
      _c("h3", [_vm._v("The page you're looking for is not here")]),
      _c("router-link", { attrs: { to: { name: "landing-page" } } }, [
        _vm._v("Back to home")
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-in": "./node_modules/moment/locale/en-in.js",
	"./en-in.js": "./node_modules/moment/locale/en-in.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./en-sg": "./node_modules/moment/locale/en-sg.js",
	"./en-sg.js": "./node_modules/moment/locale/en-sg.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fil": "./node_modules/moment/locale/fil.js",
	"./fil.js": "./node_modules/moment/locale/fil.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-deva": "./node_modules/moment/locale/gom-deva.js",
	"./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
	"./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-mo": "./node_modules/moment/locale/zh-mo.js",
	"./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/content/UserProfile.vue?vue&type=style&index=0&id=f8a0be70&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/content/UserProfile.vue?vue&type=style&index=0&id=f8a0be70&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=style&index=0&id=f8a0be70&lang=scss&scoped=true& */ "./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/content/UserProfile.vue?vue&type=style&index=0&id=f8a0be70&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("45f42b2c", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/AddHazard.vue?vue&type=style&index=0&id=471b323c&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/employee/AddHazard.vue?vue&type=style&index=0&id=471b323c&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AddHazard.vue?vue&type=style&index=0&id=471b323c&lang=scss&scoped=true& */ "./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/AddHazard.vue?vue&type=style&index=0&id=471b323c&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3b68bf0d", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/EmployeeAssets.vue?vue&type=style&index=0&id=243c1adc&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/employee/EmployeeAssets.vue?vue&type=style&index=0&id=243c1adc&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EmployeeAssets.vue?vue&type=style&index=0&id=243c1adc&lang=scss&scoped=true& */ "./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/EmployeeAssets.vue?vue&type=style&index=0&id=243c1adc&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("53400ff6", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/EmployeeMap.vue?vue&type=style&index=0&id=14e8c146&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/employee/EmployeeMap.vue?vue&type=style&index=0&id=14e8c146&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EmployeeMap.vue?vue&type=style&index=0&id=14e8c146&lang=scss&scoped=true& */ "./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/EmployeeMap.vue?vue&type=style&index=0&id=14e8c146&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("337de140", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/FloorSelector.vue?vue&type=style&index=0&id=6d07b14c&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/employee/FloorSelector.vue?vue&type=style&index=0&id=6d07b14c&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FloorSelector.vue?vue&type=style&index=0&id=6d07b14c&lang=scss&scoped=true& */ "./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/FloorSelector.vue?vue&type=style&index=0&id=6d07b14c&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("23e23fcd", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/LayerSelector.vue?vue&type=style&index=0&id=a7c9cdc2&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--8-oneOf-1-0!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/employee/LayerSelector.vue?vue&type=style&index=0&id=a7c9cdc2&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LayerSelector.vue?vue&type=style&index=0&id=a7c9cdc2&lang=scss&scoped=true& */ "./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/LayerSelector.vue?vue&type=style&index=0&id=a7c9cdc2&lang=scss&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("26e541ee", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90& */ "./src/App.vue?vue&type=template&id=7ba5bd90&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./src/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VApp */ "./node_modules/vuetify/lib/components/VApp/index.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VSnackbar */ "./node_modules/vuetify/lib/components/VSnackbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */





_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VApp: vuetify_lib_components_VApp__WEBPACK_IMPORTED_MODULE_4__["VApp"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VContent: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContent"],VSnackbar: vuetify_lib_components_VSnackbar__WEBPACK_IMPORTED_MODULE_7__["VSnackbar"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/babel-loader/lib!../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90&":
/*!****************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_525a9f0d_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"525a9f0d-vue-loader-template"}!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=7ba5bd90& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"525a9f0d-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_525a9f0d_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_525a9f0d_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_7ba5bd90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/common/apiClientFactory.js":
/*!****************************************!*\
  !*** ./src/common/apiClientFactory.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apiConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apiConfig */ "./src/common/apiConfig.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ "./src/store.js");





var configFactory = function configFactory() {
  return {
    timeout: 5 * 1000,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };
};

function handleError(error) {
  return handleResponse(error.response);
}

function handleResponse(response) {
  var data = response.data.data;
  var success = response.status >= 200 && response.status < 300;
  var defaultError = "Request failed with status ".concat(response.status);

  if (success) {
    return data;
  }

  if (response.status === 401) {
    _store__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('account/logout');
  }

  var error = data && data.errors || defaultError;
  throw error;
}

function createClient(token, baseUrl) {
  var config = configFactory();
  config.baseURL = baseUrl;
  config.headers = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    Authorization: "Bearer ".concat(token)
  }, config.headers);
  var client = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create(config);
  client.interceptors.response.use(handleResponse, handleError);
  return client;
}

function apiClient(token) {
  return createClient(token, _apiConfig__WEBPACK_IMPORTED_MODULE_2__["apiConfig"].apiUrl);
}

function accountsClient(token) {
  return createClient(token, _apiConfig__WEBPACK_IMPORTED_MODULE_2__["apiConfig"].accountsUrl);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  apiClient: apiClient,
  accountsClient: accountsClient
});

/***/ }),

/***/ "./src/common/apiConfig.js":
/*!*********************************!*\
  !*** ./src/common/apiConfig.js ***!
  \*********************************/
/*! exports provided: apiConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiConfig", function() { return apiConfig; });
var apiConfig = {
  apiUrl: "http://localhost:5000/api/v1",
  accountsUrl: "http://localhost:5000/accounts"
};

/***/ }),

/***/ "./src/common/auth.header.js":
/*!***********************************!*\
  !*** ./src/common/auth.header.js ***!
  \***********************************/
/*! exports provided: authHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authHeader", function() { return authHeader; });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ "./src/store.js");

function authHeader() {
  var user = _store__WEBPACK_IMPORTED_MODULE_0__["default"].getters['account/user'];

  if (user && user.token) {
    return {
      Authorization: 'Bearer ' + user.token
    };
  } else {
    return {};
  }
}

/***/ }),

/***/ "./src/common/roles.js":
/*!*****************************!*\
  !*** ./src/common/roles.js ***!
  \*****************************/
/*! exports provided: roles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roles", function() { return roles; });
var roles = {
  officeAdministrator: 'Office Administrator',
  employee: 'Employee',
  guest: 'Guest'
};

/***/ }),

/***/ "./src/compiled-icons/hazards.js":
/*!***************************************!*\
  !*** ./src/compiled-icons/hazards.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */
var icon = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");

icon.register({
  'hazards': {
    width: 17,
    height: 16,
    viewBox: '0 0 17 16',
    data: '<g _fill="#FFF" fill-rule="nonzero"><path pid="0" d="M16.781 13.58L9.808 1.714A1.528 1.528 0 0 0 8.5.956c-.532 0-1.033.29-1.308.758L.22 13.58a1.605 1.605 0 0 0-.022 1.58c.27.491.78.796 1.33.796h13.946c.55 0 1.06-.305 1.33-.796a1.605 1.605 0 0 0-.022-1.58zm-.836 1.153a.425.425 0 0 1-.371.223H1.426a.425.425 0 0 1-.37-.223.454.454 0 0 1 .005-.445L8.135 2.17a.426.426 0 0 1 .365-.214c.149 0 .289.082.365.214l7.074 12.118c.08.136.082.306.006.445z"/><path pid="1" d="M8.503 6C8.221 6 8 6.214 8 6.593c0 1.158.097 2.821.097 3.979 0 .302.186.428.406.428.166 0 .4-.126.4-.428 0-1.158.097-2.821.097-3.979C9 6.214 8.772 6 8.503 6zM8.503 12a.498.498 0 0 0-.503.5c0 .266.216.5.503.5A.51.51 0 0 0 9 12.5c0-.273-.229-.5-.497-.5z"/></g>'
  }
});

/***/ }),

/***/ "./src/compiled-icons/layers.js":
/*!**************************************!*\
  !*** ./src/compiled-icons/layers.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */
var icon = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");

icon.register({
  'layers': {
    width: 20,
    height: 17,
    viewBox: '0 0 20 17',
    data: '<path pid="0" d="M19.73 10.122L17.116 8.5l2.616-1.622A.56.56 0 0 0 20 6.403a.56.56 0 0 0-.27-.476L10.318.09a.604.604 0 0 0-.634 0L.27 5.927A.56.56 0 0 0 0 6.403a.56.56 0 0 0 .27.475L2.884 8.5.269 10.122a.56.56 0 0 0-.269.475.56.56 0 0 0 .27.476l9.413 5.837a.6.6 0 0 0 .634 0l9.414-5.837a.56.56 0 0 0 .269-.476.56.56 0 0 0-.27-.475zM10 1.237l8.33 5.166L10 11.568 1.67 6.403 10 1.237zm0 14.526l-8.33-5.166 2.298-1.425 5.715 3.544a.6.6 0 0 0 .634 0l5.715-3.544 2.299 1.425L10 15.763z" _fill="#FFF" fill-rule="nonzero"/>'
  }
});

/***/ }),

/***/ "./src/components/content/UserProfile.vue":
/*!************************************************!*\
  !*** ./src/components/content/UserProfile.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserProfile_vue_vue_type_template_id_f8a0be70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=template&id=f8a0be70&scoped=true& */ "./src/components/content/UserProfile.vue?vue&type=template&id=f8a0be70&scoped=true&");
/* harmony import */ var _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=script&lang=js& */ "./src/components/content/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UserProfile_vue_vue_type_style_index_0_id_f8a0be70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=style&index=0&id=f8a0be70&lang=scss&scoped=true& */ "./src/components/content/UserProfile.vue?vue&type=style&index=0&id=f8a0be70&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VHover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VHover */ "./node_modules/vuetify/lib/components/VHover/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserProfile_vue_vue_type_template_id_f8a0be70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserProfile_vue_vue_type_template_id_f8a0be70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f8a0be70",
  null
  
)

/* vuetify-loader */













_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_6__["VDivider"],VFlex: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VFlex"],VHover: vuetify_lib_components_VHover__WEBPACK_IMPORTED_MODULE_8__["VHover"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_9__["VIcon"],VLayout: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VLayout"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VList"],VListTile: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VListTile"],VListTileAction: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VListTileAction"],VListTileContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VListTileContent"],VListTileSubTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VListTileSubTitle"],VListTileTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_10__["VListTileTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/content/UserProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/content/UserProfile.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/components/content/UserProfile.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/content/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/content/UserProfile.vue?vue&type=style&index=0&id=f8a0be70&lang=scss&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./src/components/content/UserProfile.vue?vue&type=style&index=0&id=f8a0be70&lang=scss&scoped=true& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_style_index_0_id_f8a0be70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=style&index=0&id=f8a0be70&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/content/UserProfile.vue?vue&type=style&index=0&id=f8a0be70&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_style_index_0_id_f8a0be70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_style_index_0_id_f8a0be70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_style_index_0_id_f8a0be70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_style_index_0_id_f8a0be70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_style_index_0_id_f8a0be70_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/content/UserProfile.vue?vue&type=template&id=f8a0be70&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./src/components/content/UserProfile.vue?vue&type=template&id=f8a0be70&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_525a9f0d_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_f8a0be70_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"525a9f0d-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=template&id=f8a0be70&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"525a9f0d-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/content/UserProfile.vue?vue&type=template&id=f8a0be70&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_525a9f0d_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_f8a0be70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_525a9f0d_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_f8a0be70_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/employee/AddHazard.vue":
/*!***********************************************!*\
  !*** ./src/components/employee/AddHazard.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddHazard_vue_vue_type_template_id_471b323c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddHazard.vue?vue&type=template&id=471b323c&scoped=true& */ "./src/components/employee/AddHazard.vue?vue&type=template&id=471b323c&scoped=true&");
/* harmony import */ var _AddHazard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddHazard.vue?vue&type=script&lang=js& */ "./src/components/employee/AddHazard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddHazard_vue_vue_type_style_index_0_id_471b323c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddHazard.vue?vue&type=style&index=0&id=471b323c&lang=scss&scoped=true& */ "./src/components/employee/AddHazard.vue?vue&type=style&index=0&id=471b323c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VDialog */ "./node_modules/vuetify/lib/components/VDialog/index.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/index.js");
/* harmony import */ var vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VTextarea */ "./node_modules/vuetify/lib/components/VTextarea/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddHazard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddHazard_vue_vue_type_template_id_471b323c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddHazard_vue_vue_type_template_id_471b323c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "471b323c",
  null
  
)

/* vuetify-loader */














_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCard"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardActions"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardText"],VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["VCardTitle"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VContainer"],VDialog: vuetify_lib_components_VDialog__WEBPACK_IMPORTED_MODULE_8__["VDialog"],VFlex: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VFlex"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_9__["VForm"],VLayout: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VLayout"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__["VSelect"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_11__["VTextField"],VTextarea: vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_12__["VTextarea"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/employee/AddHazard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/employee/AddHazard.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./src/components/employee/AddHazard.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHazard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AddHazard.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/AddHazard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHazard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/employee/AddHazard.vue?vue&type=style&index=0&id=471b323c&lang=scss&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./src/components/employee/AddHazard.vue?vue&type=style&index=0&id=471b323c&lang=scss&scoped=true& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHazard_vue_vue_type_style_index_0_id_471b323c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AddHazard.vue?vue&type=style&index=0&id=471b323c&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/AddHazard.vue?vue&type=style&index=0&id=471b323c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHazard_vue_vue_type_style_index_0_id_471b323c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHazard_vue_vue_type_style_index_0_id_471b323c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHazard_vue_vue_type_style_index_0_id_471b323c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHazard_vue_vue_type_style_index_0_id_471b323c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHazard_vue_vue_type_style_index_0_id_471b323c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/employee/AddHazard.vue?vue&type=template&id=471b323c&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./src/components/employee/AddHazard.vue?vue&type=template&id=471b323c&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_525a9f0d_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHazard_vue_vue_type_template_id_471b323c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"525a9f0d-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AddHazard.vue?vue&type=template&id=471b323c&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"525a9f0d-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/AddHazard.vue?vue&type=template&id=471b323c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_525a9f0d_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHazard_vue_vue_type_template_id_471b323c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_525a9f0d_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddHazard_vue_vue_type_template_id_471b323c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/employee/EmployeeAssets.vue":
/*!****************************************************!*\
  !*** ./src/components/employee/EmployeeAssets.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmployeeAssets_vue_vue_type_template_id_243c1adc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmployeeAssets.vue?vue&type=template&id=243c1adc&scoped=true& */ "./src/components/employee/EmployeeAssets.vue?vue&type=template&id=243c1adc&scoped=true&");
/* harmony import */ var _EmployeeAssets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmployeeAssets.vue?vue&type=script&lang=js& */ "./src/components/employee/EmployeeAssets.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EmployeeAssets_vue_vue_type_style_index_0_id_243c1adc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmployeeAssets.vue?vue&type=style&index=0&id=243c1adc&lang=scss&scoped=true& */ "./src/components/employee/EmployeeAssets.vue?vue&type=style&index=0&id=243c1adc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EmployeeAssets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmployeeAssets_vue_vue_type_template_id_243c1adc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmployeeAssets_vue_vue_type_template_id_243c1adc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "243c1adc",
  null
  
)

/* vuetify-loader */



_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["VBtn"],VLayout: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VLayout"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/employee/EmployeeAssets.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/employee/EmployeeAssets.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/components/employee/EmployeeAssets.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeAssets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EmployeeAssets.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/EmployeeAssets.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeAssets_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/employee/EmployeeAssets.vue?vue&type=style&index=0&id=243c1adc&lang=scss&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./src/components/employee/EmployeeAssets.vue?vue&type=style&index=0&id=243c1adc&lang=scss&scoped=true& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeAssets_vue_vue_type_style_index_0_id_243c1adc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EmployeeAssets.vue?vue&type=style&index=0&id=243c1adc&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/EmployeeAssets.vue?vue&type=style&index=0&id=243c1adc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeAssets_vue_vue_type_style_index_0_id_243c1adc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeAssets_vue_vue_type_style_index_0_id_243c1adc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeAssets_vue_vue_type_style_index_0_id_243c1adc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeAssets_vue_vue_type_style_index_0_id_243c1adc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeAssets_vue_vue_type_style_index_0_id_243c1adc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/employee/EmployeeAssets.vue?vue&type=template&id=243c1adc&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./src/components/employee/EmployeeAssets.vue?vue&type=template&id=243c1adc&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_525a9f0d_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeAssets_vue_vue_type_template_id_243c1adc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"525a9f0d-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EmployeeAssets.vue?vue&type=template&id=243c1adc&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"525a9f0d-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/EmployeeAssets.vue?vue&type=template&id=243c1adc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_525a9f0d_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeAssets_vue_vue_type_template_id_243c1adc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_525a9f0d_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeAssets_vue_vue_type_template_id_243c1adc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/employee/EmployeeMap.vue":
/*!*************************************************!*\
  !*** ./src/components/employee/EmployeeMap.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EmployeeMap_vue_vue_type_template_id_14e8c146_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmployeeMap.vue?vue&type=template&id=14e8c146&scoped=true& */ "./src/components/employee/EmployeeMap.vue?vue&type=template&id=14e8c146&scoped=true&");
/* harmony import */ var _EmployeeMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmployeeMap.vue?vue&type=script&lang=js& */ "./src/components/employee/EmployeeMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EmployeeMap_vue_vue_type_style_index_0_id_14e8c146_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EmployeeMap.vue?vue&type=style&index=0&id=14e8c146&lang=scss&scoped=true& */ "./src/components/employee/EmployeeMap.vue?vue&type=style&index=0&id=14e8c146&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EmployeeMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EmployeeMap_vue_vue_type_template_id_14e8c146_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EmployeeMap_vue_vue_type_template_id_14e8c146_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "14e8c146",
  null
  
)

/* vuetify-loader */


_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VContainer"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/employee/EmployeeMap.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/employee/EmployeeMap.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/components/employee/EmployeeMap.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EmployeeMap.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/EmployeeMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/employee/EmployeeMap.vue?vue&type=style&index=0&id=14e8c146&lang=scss&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./src/components/employee/EmployeeMap.vue?vue&type=style&index=0&id=14e8c146&lang=scss&scoped=true& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeMap_vue_vue_type_style_index_0_id_14e8c146_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EmployeeMap.vue?vue&type=style&index=0&id=14e8c146&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/EmployeeMap.vue?vue&type=style&index=0&id=14e8c146&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeMap_vue_vue_type_style_index_0_id_14e8c146_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeMap_vue_vue_type_style_index_0_id_14e8c146_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeMap_vue_vue_type_style_index_0_id_14e8c146_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeMap_vue_vue_type_style_index_0_id_14e8c146_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeMap_vue_vue_type_style_index_0_id_14e8c146_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/employee/EmployeeMap.vue?vue&type=template&id=14e8c146&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/components/employee/EmployeeMap.vue?vue&type=template&id=14e8c146&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_525a9f0d_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeMap_vue_vue_type_template_id_14e8c146_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"525a9f0d-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./EmployeeMap.vue?vue&type=template&id=14e8c146&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"525a9f0d-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/EmployeeMap.vue?vue&type=template&id=14e8c146&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_525a9f0d_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeMap_vue_vue_type_template_id_14e8c146_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_525a9f0d_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeMap_vue_vue_type_template_id_14e8c146_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/employee/FloorSelector.vue":
/*!***************************************************!*\
  !*** ./src/components/employee/FloorSelector.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FloorSelector_vue_vue_type_template_id_6d07b14c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FloorSelector.vue?vue&type=template&id=6d07b14c&scoped=true& */ "./src/components/employee/FloorSelector.vue?vue&type=template&id=6d07b14c&scoped=true&");
/* harmony import */ var _FloorSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FloorSelector.vue?vue&type=script&lang=js& */ "./src/components/employee/FloorSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FloorSelector_vue_vue_type_style_index_0_id_6d07b14c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FloorSelector.vue?vue&type=style&index=0&id=6d07b14c&lang=scss&scoped=true& */ "./src/components/employee/FloorSelector.vue?vue&type=style&index=0&id=6d07b14c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/index.js");
/* harmony import */ var vuetify_lib_components_VTreeview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VTreeview */ "./node_modules/vuetify/lib/components/VTreeview/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FloorSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FloorSelector_vue_vue_type_template_id_6d07b14c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FloorSelector_vue_vue_type_template_id_6d07b14c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6d07b14c",
  null
  
)

/* vuetify-loader */






_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VContainer"],VFlex: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VFlex"],VLayout: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__["VLayout"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_6__["VSelect"],VTreeview: vuetify_lib_components_VTreeview__WEBPACK_IMPORTED_MODULE_7__["VTreeview"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/employee/FloorSelector.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/employee/FloorSelector.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/components/employee/FloorSelector.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloorSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FloorSelector.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/FloorSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloorSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/employee/FloorSelector.vue?vue&type=style&index=0&id=6d07b14c&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./src/components/employee/FloorSelector.vue?vue&type=style&index=0&id=6d07b14c&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloorSelector_vue_vue_type_style_index_0_id_6d07b14c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FloorSelector.vue?vue&type=style&index=0&id=6d07b14c&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/FloorSelector.vue?vue&type=style&index=0&id=6d07b14c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloorSelector_vue_vue_type_style_index_0_id_6d07b14c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloorSelector_vue_vue_type_style_index_0_id_6d07b14c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloorSelector_vue_vue_type_style_index_0_id_6d07b14c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloorSelector_vue_vue_type_style_index_0_id_6d07b14c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloorSelector_vue_vue_type_style_index_0_id_6d07b14c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/employee/FloorSelector.vue?vue&type=template&id=6d07b14c&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./src/components/employee/FloorSelector.vue?vue&type=template&id=6d07b14c&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_525a9f0d_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloorSelector_vue_vue_type_template_id_6d07b14c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"525a9f0d-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FloorSelector.vue?vue&type=template&id=6d07b14c&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"525a9f0d-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/FloorSelector.vue?vue&type=template&id=6d07b14c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_525a9f0d_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloorSelector_vue_vue_type_template_id_6d07b14c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_525a9f0d_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloorSelector_vue_vue_type_template_id_6d07b14c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/components/employee/LayerSelector.vue":
/*!***************************************************!*\
  !*** ./src/components/employee/LayerSelector.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayerSelector_vue_vue_type_template_id_a7c9cdc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayerSelector.vue?vue&type=template&id=a7c9cdc2&scoped=true& */ "./src/components/employee/LayerSelector.vue?vue&type=template&id=a7c9cdc2&scoped=true&");
/* harmony import */ var _LayerSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayerSelector.vue?vue&type=script&lang=js& */ "./src/components/employee/LayerSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _LayerSelector_vue_vue_type_style_index_0_id_a7c9cdc2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LayerSelector.vue?vue&type=style&index=0&id=a7c9cdc2&lang=scss&scoped=true& */ "./src/components/employee/LayerSelector.vue?vue&type=style&index=0&id=a7c9cdc2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCheckbox */ "./node_modules/vuetify/lib/components/VCheckbox/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _LayerSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LayerSelector_vue_vue_type_template_id_a7c9cdc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LayerSelector_vue_vue_type_template_id_a7c9cdc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a7c9cdc2",
  null
  
)

/* vuetify-loader */





_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_6__["VCheckbox"],VFlex: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VFlex"],VLayout: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["VLayout"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/employee/LayerSelector.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/employee/LayerSelector.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/components/employee/LayerSelector.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayerSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LayerSelector.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/LayerSelector.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayerSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/employee/LayerSelector.vue?vue&type=style&index=0&id=a7c9cdc2&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./src/components/employee/LayerSelector.vue?vue&type=style&index=0&id=a7c9cdc2&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayerSelector_vue_vue_type_style_index_0_id_a7c9cdc2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--8-oneOf-1-0!../../../node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--8-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--8-oneOf-1-3!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LayerSelector.vue?vue&type=style&index=0&id=a7c9cdc2&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/@vue/cli-service/node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/LayerSelector.vue?vue&type=style&index=0&id=a7c9cdc2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayerSelector_vue_vue_type_style_index_0_id_a7c9cdc2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayerSelector_vue_vue_type_style_index_0_id_a7c9cdc2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayerSelector_vue_vue_type_style_index_0_id_a7c9cdc2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayerSelector_vue_vue_type_style_index_0_id_a7c9cdc2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_vue_cli_service_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayerSelector_vue_vue_type_style_index_0_id_a7c9cdc2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/employee/LayerSelector.vue?vue&type=template&id=a7c9cdc2&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./src/components/employee/LayerSelector.vue?vue&type=template&id=a7c9cdc2&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_525a9f0d_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayerSelector_vue_vue_type_template_id_a7c9cdc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"525a9f0d-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./LayerSelector.vue?vue&type=template&id=a7c9cdc2&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"525a9f0d-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/employee/LayerSelector.vue?vue&type=template&id=a7c9cdc2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_525a9f0d_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayerSelector_vue_vue_type_template_id_a7c9cdc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_525a9f0d_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayerSelector_vue_vue_type_template_id_a7c9cdc2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _plugins_vuetify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugins/vuetify */ "./src/plugins/vuetify.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.vue */ "./src/App.vue");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./router */ "./src/router.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store */ "./src/store.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vue-svgicon */ "./node_modules/vue-svgicon/dist/components/svgicon.common.js");
/* harmony import */ var vue_svgicon__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(vue_svgicon__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! nprogress/nprogress.css */ "./node_modules/nprogress/nprogress.css");
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var vue_chartkick__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-chartkick */ "./node_modules/vue-chartkick/dist/vue-chartkick.esm.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var vue_fullcalendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vue-fullcalendar */ "./node_modules/vue-fullcalendar/dist/vue-fullcalendar.js");
/* harmony import */ var vue_fullcalendar__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(vue_fullcalendar__WEBPACK_IMPORTED_MODULE_13__);














vue__WEBPACK_IMPORTED_MODULE_4__["default"].config.productionTip = false;
vue__WEBPACK_IMPORTED_MODULE_4__["default"].use(vue_svgicon__WEBPACK_IMPORTED_MODULE_9___default.a);
vue__WEBPACK_IMPORTED_MODULE_4__["default"].use(vue_chartkick__WEBPACK_IMPORTED_MODULE_11__["default"].use(chart_js__WEBPACK_IMPORTED_MODULE_12___default.a));
vue__WEBPACK_IMPORTED_MODULE_4__["default"].component('full-calendar', vue_fullcalendar__WEBPACK_IMPORTED_MODULE_13___default.a);
new vue__WEBPACK_IMPORTED_MODULE_4__["default"]({
  router: _router__WEBPACK_IMPORTED_MODULE_7__["default"],
  store: _store__WEBPACK_IMPORTED_MODULE_8__["default"],
  render: function render(h) {
    return h(_App_vue__WEBPACK_IMPORTED_MODULE_6__["default"]);
  }
}).$mount('#app');

/***/ }),

/***/ "./src/plugins/vuetify.js":
/*!********************************!*\
  !*** ./src/plugins/vuetify.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vuetify_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuetify/lib */ "./node_modules/vuetify/lib/index.js");
/* harmony import */ var vuetify_src_stylus_app_styl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuetify/src/stylus/app.styl */ "./node_modules/vuetify/src/stylus/app.styl");
/* harmony import */ var vuetify_src_stylus_app_styl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuetify_src_stylus_app_styl__WEBPACK_IMPORTED_MODULE_2__);



vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuetify_lib__WEBPACK_IMPORTED_MODULE_1__["default"], {
  iconfont: 'md',
  theme: {
    primary: '#de411b',
    secondary: '#607d8b',
    accent: '#ff5722',
    error: '#ff0000',
    warning: '#ffc107',
    info: '#8bc34a',
    success: '#4caf50'
  }
});

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.some */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _components_employee_FloorSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/employee/FloorSelector */ "./src/components/employee/FloorSelector.vue");
/* harmony import */ var _components_employee_EmployeeAssets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/employee/EmployeeAssets */ "./src/components/employee/EmployeeAssets.vue");
/* harmony import */ var _components_content_UserProfile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/content/UserProfile */ "./src/components/content/UserProfile.vue");
/* harmony import */ var _views_NotFound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/views/NotFound */ "./src/views/NotFound.vue");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/store */ "./src/store.js");
/* harmony import */ var _common_roles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/common/roles */ "./src/common/roles.js");












vue__WEBPACK_IMPORTED_MODULE_3__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_4__["default"]);

var isLoggedIn = function isLoggedIn() {
  var user = _store__WEBPACK_IMPORTED_MODULE_10__["default"].getters['account/user'];
  var userState = _store__WEBPACK_IMPORTED_MODULE_10__["default"].getters['account/userState'];
  return userState && userState.loggedIn && user && user.roles && user.roles.length;
};

var router = new vue_router__WEBPACK_IMPORTED_MODULE_4__["default"]({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'landing-page',
    component: function component() {
      return __webpack_require__.e(/*! import() | home */ "home").then(__webpack_require__.bind(null, /*! ./views/accounts/LandingPage.vue */ "./src/views/accounts/LandingPage.vue"));
    },
    beforeEnter: function beforeEnter(to, from, next) {
      if (!isLoggedIn()) {
        return next();
      }

      var user = _store__WEBPACK_IMPORTED_MODULE_10__["default"].getters['account/user'];

      if (user.roles.some(function (role) {
        return role == _common_roles__WEBPACK_IMPORTED_MODULE_11__["roles"].officeAdministrator;
      })) {
        return next({
          name: 'office-management'
        });
      }

      if (user.roles.some(function (role) {
        return role == _common_roles__WEBPACK_IMPORTED_MODULE_11__["roles"].employee || role == _common_roles__WEBPACK_IMPORTED_MODULE_11__["roles"].guest;
      })) {
        return next({
          name: 'floor-map'
        });
      }
    }
  }, {
    path: '/where-am-i',
    name: 'where-am-i',
    component: function component() {
      return __webpack_require__.e(/*! import() | home */ "home").then(__webpack_require__.bind(null, /*! ./views/accounts/LocatorPage.vue */ "./src/views/accounts/LocatorPage.vue"));
    }
  }, {
    path: '/floor-map',
    name: 'floor-map',
    component: function component() {
      return Promise.all(/*! import() | register */[__webpack_require__.e("admin~register"), __webpack_require__.e("register")]).then(__webpack_require__.bind(null, /*! ./views/map/EmployeeView.vue */ "./src/views/map/EmployeeView.vue"));
    },
    redirect: '/floor-map/employee-assets',
    children: [{
      path: 'employee-assets',
      name: 'employee-assets',
      component: _components_employee_EmployeeAssets__WEBPACK_IMPORTED_MODULE_6__["default"]
    }, {
      path: 'myprofile',
      name: 'myprofile',
      component: _components_content_UserProfile__WEBPACK_IMPORTED_MODULE_7__["default"],
      children: [{
        path: 'employee-location',
        name: 'employee-location-admin',
        component: _components_employee_FloorSelector__WEBPACK_IMPORTED_MODULE_5__["default"]
      }]
    }],
    props: true,
    beforeEnter: function beforeEnter(routeTo, routeFrom, next) {
      routeTo.params.status = _store__WEBPACK_IMPORTED_MODULE_10__["default"].getters['account/userState'];
      next();
    }
  }, {
    path: '/office-management',
    name: 'office-management',
    component: function component() {
      return Promise.all(/*! import() | admin */[__webpack_require__.e("admin~register"), __webpack_require__.e("admin")]).then(__webpack_require__.bind(null, /*! ./views/office-management/OfficeManagementPage.vue */ "./src/views/office-management/OfficeManagementPage.vue"));
    },
    redirect: '/office-management/plans',
    children: [{
      path: 'plans',
      name: 'plans',
      component: function component() {
        return __webpack_require__.e(/*! import() | floors */ "floors").then(__webpack_require__.bind(null, /*! ./views/office-management/plans-management/UploadPlansPage.vue */ "./src/views/office-management/plans-management/UploadPlansPage.vue"));
      },
      children: [{
        path: 'add-floor-plan',
        name: 'add-floor-plan',
        props: true,
        component: function component() {
          return __webpack_require__.e(/*! import() | floors */ "floors").then(__webpack_require__.bind(null, /*! ./components/content/UploadFirstPlanForm.vue */ "./src/components/content/UploadFirstPlanForm.vue"));
        }
      }, {
        path: '',
        name: 'upload-plan',
        component: function component() {
          return __webpack_require__.e(/*! import() | floors */ "floors").then(__webpack_require__.bind(null, /*! ./components/content/PlanDashboard */ "./src/components/content/PlanDashboard.vue"));
        }
      }]
    }, {
      path: 'create-building',
      name: 'create-building',
      component: function component() {
        return __webpack_require__.e(/*! import() | buildings */ "buildings").then(__webpack_require__.bind(null, /*! ./views/office-management/settings/BuildingSetup.vue */ "./src/views/office-management/settings/BuildingSetup.vue"));
      }
    }, {
      path: 'buildings',
      name: 'buildings',
      component: function component() {
        return __webpack_require__.e(/*! import() | buildings */ "buildings").then(__webpack_require__.bind(null, /*! ./views/office-management/dashboards/BuildingsDashboard.vue */ "./src/views/office-management/dashboards/BuildingsDashboard.vue"));
      }
    }, {
      path: 'hazards-dashboard',
      name: 'hazards-deshboard',
      component: function component() {
        return __webpack_require__.e(/*! import() | Hazards */ "Hazards").then(__webpack_require__.bind(null, /*! ./views/office-management/dashboards/HazardsDashboard.vue */ "./src/views/office-management/dashboards/HazardsDashboard.vue"));
      }
    }, {
      path: 'notifications',
      name: 'notifications',
      component: function component() {
        return __webpack_require__.e(/*! import() | Notifications */ "Notifications").then(__webpack_require__.bind(null, /*! ./views/office-management/notifications/Mailbox.vue */ "./src/views/office-management/notifications/Mailbox.vue"));
      }
    }, {
      path: 'calendar',
      name: 'calendar',
      component: function component() {
        return __webpack_require__.e(/*! import() | Calendar */ "Calendar").then(__webpack_require__.bind(null, /*! ./views/office-management/calendar/Calendar.vue */ "./src/views/office-management/calendar/Calendar.vue"));
      }
    }, {
      path: 'assets',
      name: 'assets',
      props: true,
      beforeEnter: function beforeEnter(to, from, next) {
        var floorId = _store__WEBPACK_IMPORTED_MODULE_10__["default"].getters['account/selectedFloorId'];
        _store__WEBPACK_IMPORTED_MODULE_10__["default"].dispatch('floorLayout/getLayout', floorId).then(function (mapLayout) {
          to.params.floorMap = mapLayout.floorLayoutImage;
          to.params.floorId = floorId;
          next();
        });
      },
      component: function component() {
        return __webpack_require__.e(/*! import() | assets */ "assets").then(__webpack_require__.bind(null, /*! ./views/office-management/assets-management/PlaceAssetsPage.vue */ "./src/views/office-management/assets-management/PlaceAssetsPage.vue"));
      }
    }, {
      path: 'employees',
      name: 'employees',
      props: true,
      beforeEnter: function beforeEnter(to, from, next) {
        var userLocation = _store__WEBPACK_IMPORTED_MODULE_10__["default"].getters['account/userLocation'];
        to.params.logedUserLocation = userLocation;
        next();
      },
      component: function component() {
        return __webpack_require__.e(/*! import() | people */ "people").then(__webpack_require__.bind(null, /*! ./views/office-management/employees/EmployeesSearchPage.vue */ "./src/views/office-management/employees/EmployeesSearchPage.vue"));
      }
    }, {
      path: 'people',
      name: 'people',
      props: true,
      beforeEnter: function beforeEnter(to, from, next) {
        var floorId = _store__WEBPACK_IMPORTED_MODULE_10__["default"].getters['account/selectedFloorId'];
        _store__WEBPACK_IMPORTED_MODULE_10__["default"].dispatch('floorLayout/getLayout', floorId).then(function () {
          to.params.floorId = floorId;
          next();
        });
      },
      component: function component() {
        return __webpack_require__.e(/*! import() | people */ "people").then(__webpack_require__.bind(null, /*! ./views/office-management/people/PlacePeoplePage.vue */ "./src/views/office-management/people/PlacePeoplePage.vue"));
      }
    }, {
      path: 'myprofile',
      name: 'myprofile',
      component: _components_content_UserProfile__WEBPACK_IMPORTED_MODULE_7__["default"],
      children: [{
        path: 'employee-location',
        name: 'employee-location-admin',
        component: _components_employee_FloorSelector__WEBPACK_IMPORTED_MODULE_5__["default"]
      }]
    }]
  }, {
    path: '/login-redirect',
    beforeEnter: function beforeEnter(to, from, next) {
      var token = to.query['tkn'];
      _store__WEBPACK_IMPORTED_MODULE_10__["default"].dispatch('account/login', {
        token: token,
        router: router
      });
      next();
    }
  }, {
    path: '/404',
    name: 'notFound',
    component: _views_NotFound__WEBPACK_IMPORTED_MODULE_8__["default"]
  }, {
    path: '*',
    redirect: '/404'
  }, {
    path: '/office-management/notifications',
    name: 'notifications',
    component: function component() {
      return __webpack_require__.e(/*! import() */ "Notifications").then(__webpack_require__.bind(null, /*! ./views/office-management/notifications/Mailbox.vue */ "./src/views/office-management/notifications/Mailbox.vue"));
    }
  }]
});
router.beforeEach(function (to, from, next) {
  nprogress__WEBPACK_IMPORTED_MODULE_9___default.a.start();
  var publicPages = ['/login-redirect', '/'];
  var authRequired = !publicPages.includes(to.path);

  if (authRequired && !isLoggedIn()) {
    return next('/');
  }

  next();
});
router.afterEach(function () {
  nprogress__WEBPACK_IMPORTED_MODULE_9___default.a.done();
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/services/base-service.js":
/*!**************************************!*\
  !*** ./src/services/base-service.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseService; });
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _common_apiClientFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/common/apiClientFactory */ "./src/common/apiClientFactory.js");



var BaseService = function BaseService(token) {
  Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BaseService);

  this.apiClient = _common_apiClientFactory__WEBPACK_IMPORTED_MODULE_1__["default"].apiClient(token);
};



/***/ }),

/***/ "./src/services/bathroom.service.js":
/*!******************************************!*\
  !*** ./src/services/bathroom.service.js ***!
  \******************************************/
/*! exports provided: BathroomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BathroomService", function() { return BathroomService; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base-service */ "./src/services/base-service.js");









function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result);
  };
}


var BathroomService =
/*#__PURE__*/
function (_BaseService) {
  Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(BathroomService, _BaseService);

  var _super = _createSuper(BathroomService);

  function BathroomService(token) {
    Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, BathroomService);

    return _super.call(this, token);
  }

  Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(BathroomService, [{
    key: "postBathroom",
    value: function postBathroom(bathroom) {
      return this.apiClient.post('/bathrooms', JSON.stringify(bathroom));
    }
  }, {
    key: "getBathroomsForFloor",
    value: function getBathroomsForFloor(floorId) {
      return this.apClient("/floors/".concat(floorId, "/bathrooms"));
    }
  }]);

  return BathroomService;
}(_base_service__WEBPACK_IMPORTED_MODULE_8__["default"]);

/***/ }),

/***/ "./src/services/building-information.service.js":
/*!******************************************************!*\
  !*** ./src/services/building-information.service.js ***!
  \******************************************************/
/*! exports provided: BuildingInformationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingInformationService", function() { return BuildingInformationService; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base-service */ "./src/services/base-service.js");









function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result);
  };
}


var BuildingInformationService =
/*#__PURE__*/
function (_BaseService) {
  Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(BuildingInformationService, _BaseService);

  var _super = _createSuper(BuildingInformationService);

  function BuildingInformationService(token) {
    Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, BuildingInformationService);

    return _super.call(this, token);
  }

  Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(BuildingInformationService, [{
    key: "getTenants",
    value: function getTenants() {
      return this.apiClient.get('/tenants');
    }
  }, {
    key: "getCities",
    value: function getCities(tenantId) {
      return this.apiClient.get("/tenants/".concat(tenantId, "/locations"));
    }
  }, {
    key: "getBuildings",
    value: function getBuildings(locationId) {
      return this.apiClient.get("/locations/".concat(locationId, "/buildings"));
    }
  }, {
    key: "getBuildingsWithFloors",
    value: function getBuildingsWithFloors(locationId) {
      return this.apiClient.get("/locations/".concat(locationId, "/buildingsWithFloors"));
    }
  }, {
    key: "getFloors",
    value: function getFloors(buildingId) {
      return this.apiClient.get("/buildings/".concat(buildingId, "/floors"));
    }
  }, {
    key: "postBuildingSetup",
    value: function postBuildingSetup(buildingSetup) {
      return this.apiClient.post('/buildings', JSON.stringify(buildingSetup));
    }
  }]);

  return BuildingInformationService;
}(_base_service__WEBPACK_IMPORTED_MODULE_8__["default"]);

/***/ }),

/***/ "./src/services/common-spaces.service.js":
/*!***********************************************!*\
  !*** ./src/services/common-spaces.service.js ***!
  \***********************************************/
/*! exports provided: CommonSpacesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonSpacesService", function() { return CommonSpacesService; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base-service */ "./src/services/base-service.js");









function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result);
  };
}


var CommonSpacesService =
/*#__PURE__*/
function (_BaseService) {
  Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(CommonSpacesService, _BaseService);

  var _super = _createSuper(CommonSpacesService);

  function CommonSpacesService(token) {
    Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, CommonSpacesService);

    return _super.call(this, token);
  }

  Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(CommonSpacesService, [{
    key: "getCommonSpaces",
    value: function getCommonSpaces(floorId) {
      return this.apiClient.get("/floors/".concat(floorId, "/common-spaces"));
    }
  }]);

  return CommonSpacesService;
}(_base_service__WEBPACK_IMPORTED_MODULE_8__["default"]);

/***/ }),

/***/ "./src/services/desk.service.js":
/*!**************************************!*\
  !*** ./src/services/desk.service.js ***!
  \**************************************/
/*! exports provided: DeskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeskService", function() { return DeskService; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base-service */ "./src/services/base-service.js");









function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result);
  };
}


var DeskService =
/*#__PURE__*/
function (_BaseService) {
  Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DeskService, _BaseService);

  var _super = _createSuper(DeskService);

  function DeskService(token) {
    Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, DeskService);

    return _super.call(this, token);
  }

  Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(DeskService, [{
    key: "postDesk",
    value: function postDesk(desk) {
      return this.apiClient.post('/desks', JSON.stringify(desk));
    }
  }, {
    key: "getDesksForFloor",
    value: function getDesksForFloor(floorId) {
      return this.apiClient.get("/floors/".concat(floorId, "/desks"));
    }
  }]);

  return DeskService;
}(_base_service__WEBPACK_IMPORTED_MODULE_8__["default"]);

/***/ }),

/***/ "./src/services/employee.service.js":
/*!******************************************!*\
  !*** ./src/services/employee.service.js ***!
  \******************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reduce */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./base-service */ "./src/services/base-service.js");










function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result);
  };
}


var EmployeeService =
/*#__PURE__*/
function (_BaseService) {
  Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(EmployeeService, _BaseService);

  var _super = _createSuper(EmployeeService);

  function EmployeeService(token) {
    Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, EmployeeService);

    return _super.call(this, token);
  }

  Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(EmployeeService, [{
    key: "updateEmployeeFloor",
    value: function updateEmployeeFloor(employeeLocation) {
      return this.apiClient.post('/employees/location', JSON.stringify(employeeLocation));
    }
  }, {
    key: "getEmployees",
    value: function getEmployees(floorArray) {
      var params = '';

      if (floorArray !== null) {
        params = floorArray.reduce(function (p, n) {
          return "floorIds=".concat(n, "&");
        });
      }

      var url = "/employees/AllEmployeesByFloor?".concat(params);
      return this.apiClient.get(url);
    }
  }, {
    key: "getAllEmployeeInfo",
    value: function getAllEmployeeInfo(userName) {
      var url = "/employees/InformationByUsername/".concat(userName);
      return this.apiClient.get(url);
    }
  }, {
    key: "getProfile",
    value: function getProfile() {
      return this.apiClient.get('/employees/profile');
    }
  }]);

  return EmployeeService;
}(_base_service__WEBPACK_IMPORTED_MODULE_9__["default"]);

/***/ }),

/***/ "./src/services/floor-layout.service.js":
/*!**********************************************!*\
  !*** ./src/services/floor-layout.service.js ***!
  \**********************************************/
/*! exports provided: FloorLayoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorLayoutService", function() { return FloorLayoutService; });
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _common_apiClientFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/common/apiClientFactory */ "./src/common/apiClientFactory.js");



var FloorLayoutService =
/*#__PURE__*/
function () {
  function FloorLayoutService(token) {
    Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FloorLayoutService);

    this.apiClient = _common_apiClientFactory__WEBPACK_IMPORTED_MODULE_2__["default"].apiClient(token);
  }

  Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FloorLayoutService, [{
    key: "uploadLayout",
    value: function uploadLayout(imageInformation) {
      return this.apiClient.post('/floors/layout', JSON.stringify(imageInformation));
    }
  }, {
    key: "getLayout",
    value: function getLayout(floorId) {
      return this.apiClient.get("/floors/layout/".concat(floorId));
    }
  }]);

  return FloorLayoutService;
}();

/***/ }),

/***/ "./src/services/floor.service.js":
/*!***************************************!*\
  !*** ./src/services/floor.service.js ***!
  \***************************************/
/*! exports provided: FloorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorService", function() { return FloorService; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base-service */ "./src/services/base-service.js");









function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result);
  };
}


var FloorService =
/*#__PURE__*/
function (_BaseService) {
  Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(FloorService, _BaseService);

  var _super = _createSuper(FloorService);

  function FloorService(token) {
    Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, FloorService);

    return _super.call(this, token);
  }

  Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(FloorService, [{
    key: "addFloor",
    value: function addFloor(name, type, building, level) {
      var data = {
        username: name,
        password: type,
        building: building,
        level: level
      };
      return this.apiClient.post('/floors', JSON.stringify(data));
    }
  }, {
    key: "getLocationInformationByFloodId",
    value: function getLocationInformationByFloodId(floorId) {
      return this.apiClient.get("/floors/LocationByFloorId/".concat(floorId));
    }
  }]);

  return FloorService;
}(_base_service__WEBPACK_IMPORTED_MODULE_8__["default"]);

/***/ }),

/***/ "./src/services/hazard.service.js":
/*!****************************************!*\
  !*** ./src/services/hazard.service.js ***!
  \****************************************/
/*! exports provided: HazardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HazardService", function() { return HazardService; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base-service */ "./src/services/base-service.js");









function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result);
  };
}


var HazardService =
/*#__PURE__*/
function (_BaseService) {
  Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(HazardService, _BaseService);

  var _super = _createSuper(HazardService);

  function HazardService(token) {
    Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, HazardService);

    return _super.call(this, token);
  }

  Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(HazardService, [{
    key: "postHazard",
    value: function postHazard(hazard) {
      return this.apiClient.post('/hazards', JSON.stringify(hazard));
    }
  }]);

  return HazardService;
}(_base_service__WEBPACK_IMPORTED_MODULE_8__["default"]);

/***/ }),

/***/ "./src/services/index.js":
/*!*******************************!*\
  !*** ./src/services/index.js ***!
  \*******************************/
/*! exports provided: EmployeeService, FloorLayoutService, BathroomService, BuildingInformationService, CommonSpacesService, DeskService, FloorService, HazardService, KitchenService, mapService, MeetingRoomsService, PlacePeopleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.service */ "./src/services/user.service.js");
/* empty/unused harmony star reexport *//* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee.service */ "./src/services/employee.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return _employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]; });

/* harmony import */ var _floor_layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./floor-layout.service */ "./src/services/floor-layout.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloorLayoutService", function() { return _floor_layout_service__WEBPACK_IMPORTED_MODULE_2__["FloorLayoutService"]; });

/* harmony import */ var _bathroom_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bathroom.service */ "./src/services/bathroom.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BathroomService", function() { return _bathroom_service__WEBPACK_IMPORTED_MODULE_3__["BathroomService"]; });

/* harmony import */ var _building_information_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./building-information.service */ "./src/services/building-information.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BuildingInformationService", function() { return _building_information_service__WEBPACK_IMPORTED_MODULE_4__["BuildingInformationService"]; });

/* harmony import */ var _common_spaces_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common-spaces.service */ "./src/services/common-spaces.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonSpacesService", function() { return _common_spaces_service__WEBPACK_IMPORTED_MODULE_5__["CommonSpacesService"]; });

/* harmony import */ var _desk_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./desk.service */ "./src/services/desk.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeskService", function() { return _desk_service__WEBPACK_IMPORTED_MODULE_6__["DeskService"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _floor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./floor.service */ "./src/services/floor.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FloorService", function() { return _floor_service__WEBPACK_IMPORTED_MODULE_7__["FloorService"]; });

/* harmony import */ var _hazard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hazard.service */ "./src/services/hazard.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HazardService", function() { return _hazard_service__WEBPACK_IMPORTED_MODULE_8__["HazardService"]; });

/* harmony import */ var _kitchen_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./kitchen.service */ "./src/services/kitchen.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KitchenService", function() { return _kitchen_service__WEBPACK_IMPORTED_MODULE_9__["KitchenService"]; });

/* harmony import */ var _map_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./map.service */ "./src/services/map.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mapService", function() { return _map_service__WEBPACK_IMPORTED_MODULE_10__["mapService"]; });

/* harmony import */ var _meeting_rooms_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./meeting-rooms.service */ "./src/services/meeting-rooms.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MeetingRoomsService", function() { return _meeting_rooms_service__WEBPACK_IMPORTED_MODULE_11__["MeetingRoomsService"]; });

/* harmony import */ var _place_people_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./place-people.service */ "./src/services/place-people.service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlacePeopleService", function() { return _place_people_service__WEBPACK_IMPORTED_MODULE_12__["PlacePeopleService"]; });
















/***/ }),

/***/ "./src/services/kitchen.service.js":
/*!*****************************************!*\
  !*** ./src/services/kitchen.service.js ***!
  \*****************************************/
/*! exports provided: KitchenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitchenService", function() { return KitchenService; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base-service */ "./src/services/base-service.js");









function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result);
  };
}


var KitchenService =
/*#__PURE__*/
function (_BaseService) {
  Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(KitchenService, _BaseService);

  var _super = _createSuper(KitchenService);

  function KitchenService(token) {
    Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, KitchenService);

    return _super.call(this, token);
  }

  Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(KitchenService, [{
    key: "postKitchen",
    value: function postKitchen(kitchen) {
      return this.apiClient.post('/kitchens', JSON.stringify(kitchen));
    }
  }]);

  return KitchenService;
}(_base_service__WEBPACK_IMPORTED_MODULE_8__["default"]);

/***/ }),

/***/ "./src/services/map.service.js":
/*!*************************************!*\
  !*** ./src/services/map.service.js ***!
  \*************************************/
/*! exports provided: mapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapService", function() { return mapService; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ol_Map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ol/Map.js */ "./node_modules/ol/Map.js");
/* harmony import */ var ol_View_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ol/View.js */ "./node_modules/ol/View.js");
/* harmony import */ var ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ol/layer/Image.js */ "./node_modules/ol/layer/Image.js");
/* harmony import */ var ol_proj_Projection_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ol/proj/Projection.js */ "./node_modules/ol/proj/Projection.js");
/* harmony import */ var ol_source_ImageStatic_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ol/source/ImageStatic.js */ "./node_modules/ol/source/ImageStatic.js");
/* harmony import */ var ol_layer_Group_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ol/layer/Group.js */ "./node_modules/ol/layer/Group.js");
/* harmony import */ var ol_extent_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ol/extent.js */ "./node_modules/ol/extent.js");
/* harmony import */ var ol_interaction_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ol/interaction.js */ "./node_modules/ol/interaction.js");
/* harmony import */ var ol_layer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ol/layer.js */ "./node_modules/ol/layer.js");
/* harmony import */ var ol_source_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ol/source.js */ "./node_modules/ol/source.js");
/* harmony import */ var ol_style_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ol/style.js */ "./node_modules/ol/style.js");
/* harmony import */ var ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ol/geom/Polygon.js */ "./node_modules/ol/geom/Polygon.js");
/* harmony import */ var ol_format_GeoJSON_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ol/format/GeoJSON.js */ "./node_modules/ol/format/GeoJSON.js");
/* harmony import */ var ol_Feature_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ol/Feature.js */ "./node_modules/ol/Feature.js");
/* harmony import */ var ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ol/geom/Point.js */ "./node_modules/ol/geom/Point.js");
/* harmony import */ var ol_Collection__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ol/Collection */ "./node_modules/ol/Collection.js");





















var mapService = {
  createMap: createMap,
  createVectorLayerWithFeatures: createVectorLayerWithFeatures,
  createVectorLayer: createVectorLayer,
  drawPolygon: drawPolygon,
  modifyShape: modifyShape,
  snapOnShape: snapOnShape,
  drawRectangle: drawRectangle,
  translateShape: translateShape,
  selectShape: selectShape,
  getGeoJsonFromFeature: getGeoJsonFromFeature,
  removeAllLayers: removeAllLayers,
  createImageLayer: createImageLayer,
  translateOneLayer: translateOneLayer,
  addNewHazardIconAtCoordinates: addNewHazardIconAtCoordinates,
  addLayerWithHazards: addLayerWithHazards,
  createDeskLayer: createDeskLayer,
  searchFeatureOnFloorMap: searchFeatureOnFloorMap,
  getLayer: getLayer,
  createMapSource: createMapSource
};
var viewExtent = [0, 0, 1024, 968];
var viewProjection = new ol_proj_Projection_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
  code: 'xkcd-image',
  units: 'pixels',
  extent: viewExtent
});

function createMapSource(image) {
  return new ol_source_ImageStatic_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
    url: image,
    projection: viewProjection,
    imageExtent: viewExtent
  });
}

function getLayer(source) {
  return new ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
    source: source,
    opacity: 0.6
  });
}

function createMap(mapLayer) {
  return new ol_Map_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
    interactions: Object(ol_interaction_js__WEBPACK_IMPORTED_MODULE_11__["defaults"])().extend([new ol_interaction_js__WEBPACK_IMPORTED_MODULE_11__["DragRotateAndZoom"]()]),
    layers: [mapLayer],
    target: 'map',
    view: new ol_View_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
      zoom: 2.5,
      minZoom: 1.2,
      maxZoom: 4.5,
      projection: viewProjection,
      center: Object(ol_extent_js__WEBPACK_IMPORTED_MODULE_10__["getCenter"])(viewExtent),
      extent: viewExtent
    })
  });
}

function createVectorLayerWithFeatures(assetSelected, listOfFeatures) {
  var fullColor = assetSelected.color.slice(0, 7);
  var source = new ol_source_js__WEBPACK_IMPORTED_MODULE_13__["Vector"]({
    wrapX: false,
    format: new ol_format_GeoJSON_js__WEBPACK_IMPORTED_MODULE_16__["default"](),
    features: new ol_format_GeoJSON_js__WEBPACK_IMPORTED_MODULE_16__["default"]().readFeatures(listOfFeatures)
  });
  var vector = new ol_layer_js__WEBPACK_IMPORTED_MODULE_12__["Vector"]({
    source: source,
    style: new ol_style_js__WEBPACK_IMPORTED_MODULE_14__["Style"]({
      fill: new ol_style_js__WEBPACK_IMPORTED_MODULE_14__["Fill"]({
        color: assetSelected.color
      }),
      stroke: new ol_style_js__WEBPACK_IMPORTED_MODULE_14__["Stroke"]({
        color: fullColor,
        width: 2
      }),
      image: new ol_style_js__WEBPACK_IMPORTED_MODULE_14__["Circle"]({
        radius: 7,
        fill: new ol_style_js__WEBPACK_IMPORTED_MODULE_14__["Fill"]({
          color: assetSelected.color
        })
      })
    }),
    name: assetSelected.name
  });
  return vector;
}

function createVectorLayer(assetSelected) {
  var fullColor = assetSelected.color.slice(0, 7);
  var source = new ol_source_js__WEBPACK_IMPORTED_MODULE_13__["Vector"]({
    wrapX: false,
    format: new ol_format_GeoJSON_js__WEBPACK_IMPORTED_MODULE_16__["default"]()
  });
  var vector = new ol_layer_js__WEBPACK_IMPORTED_MODULE_12__["Vector"]({
    source: source,
    style: new ol_style_js__WEBPACK_IMPORTED_MODULE_14__["Style"]({
      fill: new ol_style_js__WEBPACK_IMPORTED_MODULE_14__["Fill"]({
        color: assetSelected.color
      }),
      stroke: new ol_style_js__WEBPACK_IMPORTED_MODULE_14__["Stroke"]({
        color: fullColor,
        width: 2
      }),
      image: new ol_style_js__WEBPACK_IMPORTED_MODULE_14__["Circle"]({
        radius: 7,
        fill: new ol_style_js__WEBPACK_IMPORTED_MODULE_14__["Fill"]({
          color: assetSelected.color
        })
      })
    }),
    name: assetSelected.name
  });
  return vector;
}

function drawPolygon(layer, assetSelected) {
  var source = layer.getSource();
  var draw;
  draw = new ol_interaction_js__WEBPACK_IMPORTED_MODULE_11__["Draw"]({
    source: source,
    type: assetSelected.type
  });
  return draw;
}

function modifyShape(layer) {
  var source = layer.getSource();
  var modify = new ol_interaction_js__WEBPACK_IMPORTED_MODULE_11__["Modify"]({
    source: source
  });
  return modify;
}

function snapOnShape(layer) {
  var source = layer.getSource();
  var snap = new ol_interaction_js__WEBPACK_IMPORTED_MODULE_11__["Snap"]({
    source: source
  });
  return snap;
}

function drawRectangle(layer, assetSelected) {
  var source = layer.getSource();

  var geometryFunction = function geometryFunction(coordinates, geometry) {
    var newCoordinates = [];
    var lengthTranslation = assetSelected.length / 2;
    var widthTranslation = assetSelected.width / 2;
    newCoordinates.push([coordinates[0] + lengthTranslation, coordinates[1] - widthTranslation]);
    newCoordinates.push([coordinates[0] + lengthTranslation, coordinates[1] + widthTranslation]);
    newCoordinates.push([coordinates[0] - lengthTranslation, coordinates[1] + widthTranslation]);
    newCoordinates.push([coordinates[0] - lengthTranslation, coordinates[1] - widthTranslation]);
    newCoordinates.push([coordinates[0] + lengthTranslation, coordinates[1] - widthTranslation]);
    geometry = new ol_geom_Polygon_js__WEBPACK_IMPORTED_MODULE_15__["default"]([newCoordinates]);
    return geometry;
  };

  var draw = new ol_interaction_js__WEBPACK_IMPORTED_MODULE_11__["Draw"]({
    source: source,
    type: assetSelected.type,
    geometryFunction: geometryFunction
  });
  return draw;
}

function selectShape() {
  var select = new ol_interaction_js__WEBPACK_IMPORTED_MODULE_11__["Select"]();
  return select;
}

function translateShape(select) {
  var translate = new ol_interaction_js__WEBPACK_IMPORTED_MODULE_11__["Translate"]({
    features: select.getFeatures()
  });
  return translate;
}

function getGeoJsonFromFeature(feature) {
  var parser = new ol_format_GeoJSON_js__WEBPACK_IMPORTED_MODULE_16__["default"]();
  var shape = parser.writeFeatureObject(feature); // let shapeString = JSON.stringify(shape);

  return shape;
}

function removeAllLayers(map) {
  map.setLayerGroup(new ol_layer_Group_js__WEBPACK_IMPORTED_MODULE_9__["default"]());
  return map;
}

function createImageLayer(image) {
  var extent = [0, 0, 1024, 968];
  var projection = new ol_proj_Projection_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
    code: 'xkcd-image',
    units: 'pixels',
    extent: extent
  });
  var imageLayer = new ol_layer_Image_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
    source: new ol_source_ImageStatic_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
      url: image,
      projection: projection,
      imageExtent: extent
    }),
    opacity: 0.6
  });
  return imageLayer;
}

function translateOneLayer(layer) {
  var features = layer.getSource().getFeatures();
  var featureCollection = new ol_Collection__WEBPACK_IMPORTED_MODULE_19__["default"]();
  featureCollection.extend(features);
  var translate = new ol_interaction_js__WEBPACK_IMPORTED_MODULE_11__["Translate"]({
    features: featureCollection
  });
  return translate;
}

function addNewHazardIconAtCoordinates(coordinates) {
  var iconFeature = new ol_Feature_js__WEBPACK_IMPORTED_MODULE_17__["default"]({
    geometry: new ol_geom_Point_js__WEBPACK_IMPORTED_MODULE_18__["default"]([coordinates[0], coordinates[1]])
  });
  var iconStyle = new ol_style_js__WEBPACK_IMPORTED_MODULE_14__["Style"]({
    image: new ol_style_js__WEBPACK_IMPORTED_MODULE_14__["Icon"]({
      anchor: [0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: __webpack_require__(/*! ../../svg-icons/pin2.svg */ "./svg-icons/pin2.svg")
    })
  });
  iconFeature.setStyle(iconStyle);
  var vectorSource = new ol_source_js__WEBPACK_IMPORTED_MODULE_13__["Vector"]({
    features: [iconFeature]
  });
  var vectorLayer = new ol_layer_js__WEBPACK_IMPORTED_MODULE_12__["Vector"]({
    source: vectorSource
  });
  return vectorLayer;
}

function addLayerWithHazards(listOfFeatures) {
  var iconStyle = new ol_style_js__WEBPACK_IMPORTED_MODULE_14__["Style"]({
    image: new ol_style_js__WEBPACK_IMPORTED_MODULE_14__["Icon"]({
      anchor: [0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: __webpack_require__(/*! ../../svg-icons/pin.svg */ "./svg-icons/pin.svg")
    })
  });
  var listOfConvertedFeatures = [];
  listOfFeatures.features.forEach(function (feature) {
    var featureConverted = new ol_format_GeoJSON_js__WEBPACK_IMPORTED_MODULE_16__["default"]().readFeature(feature);
    featureConverted.setStyle(iconStyle);
    listOfConvertedFeatures.push(featureConverted);
  });
  var source = new ol_source_js__WEBPACK_IMPORTED_MODULE_13__["Vector"]({
    features: listOfConvertedFeatures
  });
  var vector = new ol_layer_js__WEBPACK_IMPORTED_MODULE_12__["Vector"]({
    source: source,
    name: 'Hazard'
  });
  return vector;
}

function createDeskLayer(desk, listOfFeatures) {
  var fullColorFreeDesk = desk.color.slice(0, 7);
  var fullColorOccupiedDesk = desk.colorOccupied.slice(0, 7);
  var styles = {
    false: new ol_style_js__WEBPACK_IMPORTED_MODULE_14__["Style"]({
      fill: new ol_style_js__WEBPACK_IMPORTED_MODULE_14__["Fill"]({
        color: desk.color
      }),
      stroke: new ol_style_js__WEBPACK_IMPORTED_MODULE_14__["Stroke"]({
        color: fullColorFreeDesk,
        width: 2
      }),
      image: new ol_style_js__WEBPACK_IMPORTED_MODULE_14__["Circle"]({
        radius: 7,
        fill: new ol_style_js__WEBPACK_IMPORTED_MODULE_14__["Fill"]({
          color: desk.color
        })
      })
    }),
    true: new ol_style_js__WEBPACK_IMPORTED_MODULE_14__["Style"]({
      fill: new ol_style_js__WEBPACK_IMPORTED_MODULE_14__["Fill"]({
        color: desk.colorOccupied
      }),
      stroke: new ol_style_js__WEBPACK_IMPORTED_MODULE_14__["Stroke"]({
        color: fullColorOccupiedDesk,
        width: 2
      }),
      image: new ol_style_js__WEBPACK_IMPORTED_MODULE_14__["Circle"]({
        radius: 7,
        fill: new ol_style_js__WEBPACK_IMPORTED_MODULE_14__["Fill"]({
          color: desk.colorOccupied
        })
      })
    })
  };

  var styleFunction = function styleFunction(feature, resolution) {
    var featureStyleFunction = feature.getStyleFunction();

    if (featureStyleFunction) {
      return featureStyleFunction.call(feature, resolution);
    } else {
      return styles[feature.getProperties().Occupied];
    }
  };

  var source = new ol_source_js__WEBPACK_IMPORTED_MODULE_13__["Vector"]({
    wrapX: false,
    format: new ol_format_GeoJSON_js__WEBPACK_IMPORTED_MODULE_16__["default"](),
    features: new ol_format_GeoJSON_js__WEBPACK_IMPORTED_MODULE_16__["default"]().readFeatures(listOfFeatures)
  });
  var vector = new ol_layer_js__WEBPACK_IMPORTED_MODULE_12__["Vector"]({
    source: source,
    name: desk.name,
    style: styleFunction
  });
  return vector;
}

function searchFeatureOnFloorMap(map, featureId) {
  var searchedFeature;
  map.getLayers().getArray().forEach(function (layer) {
    if (layer instanceof ol_layer_js__WEBPACK_IMPORTED_MODULE_12__["Vector"]) {
      layer.getSource().getFeatures().forEach(function (feature) {
        var id = feature.getProperties().Id;

        if (id === featureId) {
          searchedFeature = feature;
        }
      });
    }
  });
  return searchedFeature;
}

/***/ }),

/***/ "./src/services/meeting-rooms.service.js":
/*!***********************************************!*\
  !*** ./src/services/meeting-rooms.service.js ***!
  \***********************************************/
/*! exports provided: MeetingRoomsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingRoomsService", function() { return MeetingRoomsService; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base-service */ "./src/services/base-service.js");









function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result);
  };
}


var MeetingRoomsService =
/*#__PURE__*/
function (_BaseService) {
  Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MeetingRoomsService, _BaseService);

  var _super = _createSuper(MeetingRoomsService);

  function MeetingRoomsService(token) {
    Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MeetingRoomsService);

    return _super.call(this, token);
  }

  Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MeetingRoomsService, [{
    key: "postMeetingRoom",
    value: function postMeetingRoom(meetingRoom) {
      return this.apiClient.post('/meeting-rooms', JSON.stringify(meetingRoom));
    }
  }, {
    key: "getMeetingRoomsForFloor",
    value: function getMeetingRoomsForFloor(floorId) {
      return this.apiClient.get("/floors/".concat(floorId, "/meeting-rooms"));
    }
  }, {
    key: "getMeetingRoomDetails",
    value: function getMeetingRoomDetails(meetingRoomId) {
      return this.apiClient.get("/meeting-rooms/".concat(meetingRoomId, "/details"));
    }
  }]);

  return MeetingRoomsService;
}(_base_service__WEBPACK_IMPORTED_MODULE_8__["default"]);

/***/ }),

/***/ "./src/services/place-people.service.js":
/*!**********************************************!*\
  !*** ./src/services/place-people.service.js ***!
  \**********************************************/
/*! exports provided: PlacePeopleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacePeopleService", function() { return PlacePeopleService; });
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.reflect.construct */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./base-service */ "./src/services/base-service.js");









function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result);
  };
}


var PlacePeopleService =
/*#__PURE__*/
function (_BaseService) {
  Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PlacePeopleService, _BaseService);

  var _super = _createSuper(PlacePeopleService);

  function PlacePeopleService(token) {
    Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, PlacePeopleService);

    return _super.call(this, token);
  }

  Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(PlacePeopleService, [{
    key: "postDeskEmployee",
    value: function postDeskEmployee(deskId, employeeId) {
      return this.apiClient.post('/DeskEmployee', JSON.stringify({
        DeskId: deskId,
        EmployeeId: employeeId
      }));
    }
  }, {
    key: "getAllEmployees",
    value: function getAllEmployees() {
      return this.apiClient.get('/Search/employees');
    }
  }]);

  return PlacePeopleService;
}(_base_service__WEBPACK_IMPORTED_MODULE_8__["default"]);

/***/ }),

/***/ "./src/services/printer.service.js":
/*!*****************************************!*\
  !*** ./src/services/printer.service.js ***!
  \*****************************************/
/*! exports provided: printerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printerService", function() { return printerService; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_apiConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/apiConfig */ "./src/common/apiConfig.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_auth_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/auth.header */ "./src/common/auth.header.js");






var printerService = {
  postPrinter: postPrinter,
  getPrintersForFloor: getPrintersForFloor
};

function postPrinter(printer) {
  var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({});
  var data = JSON.stringify(printer);
  var url = "".concat(_common_apiConfig__WEBPACK_IMPORTED_MODULE_3__["apiConfig"].apiUrl, "/printers");

  var headers = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'Content-Type': 'application/json'
  }, Object(_common_auth_header__WEBPACK_IMPORTED_MODULE_5__["authHeader"])());

  var method = 'POST';
  return axiosInstance({
    method: method,
    url: url,
    data: data,
    headers: headers
  }).then(handleResponse);
}

function getPrintersForFloor(floorId) {
  var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({});
  var data = JSON.stringify({
    tenantId: floorId
  });
  var url = "".concat(_common_apiConfig__WEBPACK_IMPORTED_MODULE_3__["apiConfig"].apiUrl, "/floors/").concat(floorId, "/printers");

  var headers = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(_common_auth_header__WEBPACK_IMPORTED_MODULE_5__["authHeader"])());

  var method = 'GET';
  return axiosInstance({
    method: method,
    url: url,
    data: data,
    headers: headers
  }).then(handleResponse);
}

function handleResponse(response) {
  var data = response.data.data;

  if (response.status !== 200) {
    var error = data.errors || response.statusText;
    return q__WEBPACK_IMPORTED_MODULE_4__["Promise"].reject(error);
  }

  return new q__WEBPACK_IMPORTED_MODULE_4__["Promise"](function (resolve) {
    resolve(data);
  });
}

/***/ }),

/***/ "./src/services/search.service.js":
/*!****************************************!*\
  !*** ./src/services/search.service.js ***!
  \****************************************/
/*! exports provided: searchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchService", function() { return searchService; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_apiConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/common/apiConfig */ "./src/common/apiConfig.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! q */ "./node_modules/q/q.js");
/* harmony import */ var q__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(q__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_auth_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/auth.header */ "./src/common/auth.header.js");






var searchService = {
  search: search,
  getSearchResultLocation: getSearchResultLocation
};

function search(searchString) {
  var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({});
  var data = JSON.stringify({
    search: searchString
  });
  var url = "".concat(_common_apiConfig__WEBPACK_IMPORTED_MODULE_3__["apiConfig"].apiUrl, "/search/").concat(searchString);

  var headers = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Object(_common_auth_header__WEBPACK_IMPORTED_MODULE_5__["authHeader"])());

  var method = 'GET';
  return axiosInstance({
    method: method,
    url: url,
    data: data,
    headers: headers
  }).then(handleResponse);
}

function getSearchResultLocation(searchedItemId) {
  var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_2___default.a.create({});
  var url = "".concat(_common_apiConfig__WEBPACK_IMPORTED_MODULE_3__["apiConfig"].apiUrl, "/Search/").concat(searchedItemId, "/location");

  var headers = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({
    'Content-Type': 'application/json'
  }, Object(_common_auth_header__WEBPACK_IMPORTED_MODULE_5__["authHeader"])());

  var method = 'GET';
  return axiosInstance({
    method: method,
    url: url,
    headers: headers
  }).then(handleResponse);
}

function handleResponse(response) {
  var data = response.data.data;

  if (response.status !== 200) {
    var error = data.errors || response.statusText;
    return q__WEBPACK_IMPORTED_MODULE_4__["Promise"].reject(error);
  }

  return new q__WEBPACK_IMPORTED_MODULE_4__["Promise"](function (resolve) {
    resolve(data);
  });
}

/***/ }),

/***/ "./src/services/user.service.js":
/*!**************************************!*\
  !*** ./src/services/user.service.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserService; });
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_apiClientFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/common/apiClientFactory */ "./src/common/apiClientFactory.js");
/* harmony import */ var _common_apiConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/common/apiConfig */ "./src/common/apiConfig.js");







function UserService(token) {
  var apiClient = _common_apiClientFactory__WEBPACK_IMPORTED_MODULE_5__["default"].apiClient(token);
  var accountsClient = _common_apiClientFactory__WEBPACK_IMPORTED_MODULE_5__["default"].accountsClient(token);

  function guestLogin() {
    var returnUrl = new URL("".concat(window.location.protocol).concat(window.location.host));
    returnUrl.pathname = 'login-redirect';
    window.location.href = "".concat(_common_apiConfig__WEBPACK_IMPORTED_MODULE_6__["apiConfig"].accountsUrl, "/guestLogin?returnUrl=").concat(encodeURIComponent(returnUrl));
  }

  function employeeLogin() {
    var returnUrl = new URL("".concat(window.location.protocol).concat(window.location.host));
    returnUrl.pathname = 'login-redirect';
    window.location.href = "".concat(_common_apiConfig__WEBPACK_IMPORTED_MODULE_6__["apiConfig"].accountsUrl, "/employeeLogin?returnUrl=").concat(encodeURIComponent(returnUrl));
  }

  function login() {
    return accountsClient.get('/user-details');
  }

  function getProfile() {
    return accountsClient.get('/profile');
  }

  function getUserLocation(employeeId) {
    return apiClient.get("/employees/".concat(employeeId, "/location"));
  }

  return {
    guestLogin: guestLogin,
    employeeLogin: employeeLogin,
    login: login,
    getProfile: getProfile,
    getUserLocation: getUserLocation
  };
}

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _store_account_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store/account.module */ "./src/store/account.module.js");
/* harmony import */ var _store_alert_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store/alert.module */ "./src/store/alert.module.js");
/* harmony import */ var _store_floorLayout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/store/floorLayout.module */ "./src/store/floorLayout.module.js");
/* harmony import */ var _store_buildingInformation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/store/buildingInformation.module */ "./src/store/buildingInformation.module.js");
/* harmony import */ var _store_employee_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/store/employee.module */ "./src/store/employee.module.js");
/* harmony import */ var _store_navbar_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/store/navbar.module */ "./src/store/navbar.module.js");
/* harmony import */ var _store_meetingRooms_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/store/meetingRooms.module */ "./src/store/meetingRooms.module.js");
/* harmony import */ var _store_assetInteraction_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/store/assetInteraction.module */ "./src/store/assetInteraction.module.js");
/* harmony import */ var _store_printers_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/store/printers.module */ "./src/store/printers.module.js");
/* harmony import */ var _store_bathrooms_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/store/bathrooms.module */ "./src/store/bathrooms.module.js");
/* harmony import */ var _store_kitchens_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/store/kitchens.module */ "./src/store/kitchens.module.js");
/* harmony import */ var _store_employeeMap_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/store/employeeMap.module */ "./src/store/employeeMap.module.js");
/* harmony import */ var _store_desks_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/store/desks.module */ "./src/store/desks.module.js");
/* harmony import */ var _store_search_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/store/search.module */ "./src/store/search.module.js");
/* harmony import */ var _store_placePeople_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/store/placePeople.module */ "./src/store/placePeople.module.js");
/* harmony import */ var _store_sidebar_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/store/sidebar.module */ "./src/store/sidebar.module.js");
/* harmony import */ var _store_mapInteractions_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/store/mapInteractions.module */ "./src/store/mapInteractions.module.js");
/* harmony import */ var _store_toolbar_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/store/toolbar.module */ "./src/store/toolbar.module.js");
/* harmony import */ var _store_buildings_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/store/buildings.module */ "./src/store/buildings.module.js");





















vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (new vuex__WEBPACK_IMPORTED_MODULE_1__["default"].Store({
  modules: {
    account: _store_account_module__WEBPACK_IMPORTED_MODULE_2__["account"],
    alert: _store_alert_module__WEBPACK_IMPORTED_MODULE_3__["alert"],
    floorLayout: _store_floorLayout_module__WEBPACK_IMPORTED_MODULE_4__["floorLayout"],
    buildingInformation: _store_buildingInformation_module__WEBPACK_IMPORTED_MODULE_5__["buildingInformation"],
    employee: _store_employee_module__WEBPACK_IMPORTED_MODULE_6__["employee"],
    navbar: _store_navbar_module__WEBPACK_IMPORTED_MODULE_7__["navbar"],
    meetingRooms: _store_meetingRooms_module__WEBPACK_IMPORTED_MODULE_8__["meetingRooms"],
    assetInteraction: _store_assetInteraction_module__WEBPACK_IMPORTED_MODULE_9__["assetInteraction"],
    printers: _store_printers_module__WEBPACK_IMPORTED_MODULE_10__["printers"],
    bathrooms: _store_bathrooms_module__WEBPACK_IMPORTED_MODULE_11__["bathrooms"],
    kitchens: _store_kitchens_module__WEBPACK_IMPORTED_MODULE_12__["kitchens"],
    employeeMap: _store_employeeMap_module__WEBPACK_IMPORTED_MODULE_13__["employeeMap"],
    desks: _store_desks_module__WEBPACK_IMPORTED_MODULE_14__["desks"],
    search: _store_search_module__WEBPACK_IMPORTED_MODULE_15__["search"],
    placePeople: _store_placePeople_module__WEBPACK_IMPORTED_MODULE_16__["placePeople"],
    sidebar: _store_sidebar_module__WEBPACK_IMPORTED_MODULE_17__["sidebar"],
    mapInteractions: _store_mapInteractions_module__WEBPACK_IMPORTED_MODULE_18__["mapInteractions"],
    toolbar: _store_toolbar_module__WEBPACK_IMPORTED_MODULE_19__["toolbar"],
    buildings: _store_buildings_module__WEBPACK_IMPORTED_MODULE_20__
  }
}));

/***/ }),

/***/ "./src/store/account.actionTypes.js":
/*!******************************************!*\
  !*** ./src/store/account.actionTypes.js ***!
  \******************************************/
/*! exports provided: USER_PROFILE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_PROFILE", function() { return USER_PROFILE; });
var USER_PROFILE = 'setProfile';

/***/ }),

/***/ "./src/store/account.module.js":
/*!*************************************!*\
  !*** ./src/store/account.module.js ***!
  \*************************************/
/*! exports provided: account */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "account", function() { return account; });
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.some */ "./node_modules/core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/user.service */ "./src/services/user.service.js");
/* harmony import */ var _common_roles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/common/roles */ "./src/common/roles.js");
/* harmony import */ var _account_actionTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account.actionTypes */ "./src/store/account.actionTypes.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/services */ "./src/services/index.js");




var _ref11;

function cov_2c2sie0bl6() {
  var path = "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\account.module.js";
  var hash = "205d5445876ecb6d84ad49ed694fdf8666c07ba2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\account.module.js",
    statementMap: {
      "0": {
        start: {
          line: 6,
          column: 19
        },
        end: {
          line: 6,
          column: 63
        }
      },
      "1": {
        start: {
          line: 7,
          column: 27
        },
        end: {
          line: 7,
          column: 80
        }
      },
      "2": {
        start: {
          line: 8,
          column: 22
        },
        end: {
          line: 8,
          column: 69
        }
      },
      "3": {
        start: {
          line: 9,
          column: 14
        },
        end: {
          line: 25,
          column: 1
        }
      },
      "4": {
        start: {
          line: 27,
          column: 16
        },
        end: {
          line: 118,
          column: 1
        }
      },
      "5": {
        start: {
          line: 29,
          column: 28
        },
        end: {
          line: 29,
          column: 54
        }
      },
      "6": {
        start: {
          line: 30,
          column: 8
        },
        end: {
          line: 30,
          column: 32
        }
      },
      "7": {
        start: {
          line: 33,
          column: 28
        },
        end: {
          line: 33,
          column: 54
        }
      },
      "8": {
        start: {
          line: 34,
          column: 8
        },
        end: {
          line: 34,
          column: 35
        }
      },
      "9": {
        start: {
          line: 37,
          column: 8
        },
        end: {
          line: 41,
          column: 9
        }
      },
      "10": {
        start: {
          line: 38,
          column: 12
        },
        end: {
          line: 38,
          column: 28
        }
      },
      "11": {
        start: {
          line: 39,
          column: 12
        },
        end: {
          line: 39,
          column: 67
        }
      },
      "12": {
        start: {
          line: 40,
          column: 12
        },
        end: {
          line: 40,
          column: 18
        }
      },
      "13": {
        start: {
          line: 43,
          column: 8
        },
        end: {
          line: 43,
          column: 33
        }
      },
      "14": {
        start: {
          line: 45,
          column: 28
        },
        end: {
          line: 45,
          column: 54
        }
      },
      "15": {
        start: {
          line: 47,
          column: 8
        },
        end: {
          line: 87,
          column: 14
        }
      },
      "16": {
        start: {
          line: 50,
          column: 16
        },
        end: {
          line: 52,
          column: 17
        }
      },
      "17": {
        start: {
          line: 51,
          column: 20
        },
        end: {
          line: 51,
          column: 53
        }
      },
      "18": {
        start: {
          line: 54,
          column: 16
        },
        end: {
          line: 54,
          column: 44
        }
      },
      "19": {
        start: {
          line: 56,
          column: 16
        },
        end: {
          line: 78,
          column: 18
        }
      },
      "20": {
        start: {
          line: 57,
          column: 20
        },
        end: {
          line: 57,
          column: 55
        }
      },
      "21": {
        start: {
          line: 58,
          column: 20
        },
        end: {
          line: 58,
          column: 91
        }
      },
      "22": {
        start: {
          line: 59,
          column: 20
        },
        end: {
          line: 59,
          column: 69
        }
      },
      "23": {
        start: {
          line: 61,
          column: 20
        },
        end: {
          line: 61,
          column: 106
        }
      },
      "24": {
        start: {
          line: 63,
          column: 20
        },
        end: {
          line: 65,
          column: 21
        }
      },
      "25": {
        start: {
          line: 63,
          column: 48
        },
        end: {
          line: 63,
          column: 67
        }
      },
      "26": {
        start: {
          line: 64,
          column: 24
        },
        end: {
          line: 64,
          column: 42
        }
      },
      "27": {
        start: {
          line: 67,
          column: 20
        },
        end: {
          line: 69,
          column: 21
        }
      },
      "28": {
        start: {
          line: 68,
          column: 24
        },
        end: {
          line: 68,
          column: 43
        }
      },
      "29": {
        start: {
          line: 71,
          column: 20
        },
        end: {
          line: 73,
          column: 21
        }
      },
      "30": {
        start: {
          line: 71,
          column: 48
        },
        end: {
          line: 71,
          column: 81
        }
      },
      "31": {
        start: {
          line: 72,
          column: 24
        },
        end: {
          line: 72,
          column: 50
        }
      },
      "32": {
        start: {
          line: 75,
          column: 20
        },
        end: {
          line: 77,
          column: 21
        }
      },
      "33": {
        start: {
          line: 75,
          column: 48
        },
        end: {
          line: 75,
          column: 70
        }
      },
      "34": {
        start: {
          line: 76,
          column: 24
        },
        end: {
          line: 76,
          column: 42
        }
      },
      "35": {
        start: {
          line: 81,
          column: 16
        },
        end: {
          line: 81,
          column: 77
        }
      },
      "36": {
        start: {
          line: 82,
          column: 16
        },
        end: {
          line: 82,
          column: 50
        }
      },
      "37": {
        start: {
          line: 85,
          column: 16
        },
        end: {
          line: 85,
          column: 32
        }
      },
      "38": {
        start: {
          line: 86,
          column: 16
        },
        end: {
          line: 86,
          column: 70
        }
      },
      "39": {
        start: {
          line: 91,
          column: 8
        },
        end: {
          line: 93,
          column: 9
        }
      },
      "40": {
        start: {
          line: 92,
          column: 12
        },
        end: {
          line: 92,
          column: 18
        }
      },
      "41": {
        start: {
          line: 94,
          column: 8
        },
        end: {
          line: 94,
          column: 72
        }
      },
      "42": {
        start: {
          line: 95,
          column: 8
        },
        end: {
          line: 95,
          column: 44
        }
      },
      "43": {
        start: {
          line: 99,
          column: 8
        },
        end: {
          line: 99,
          column: 24
        }
      },
      "44": {
        start: {
          line: 103,
          column: 28
        },
        end: {
          line: 103,
          column: 54
        }
      },
      "45": {
        start: {
          line: 105,
          column: 8
        },
        end: {
          line: 107,
          column: 10
        }
      },
      "46": {
        start: {
          line: 106,
          column: 12
        },
        end: {
          line: 106,
          column: 41
        }
      },
      "47": {
        start: {
          line: 110,
          column: 29
        },
        end: {
          line: 110,
          column: 72
        }
      },
      "48": {
        start: {
          line: 111,
          column: 8
        },
        end: {
          line: 113,
          column: 10
        }
      },
      "49": {
        start: {
          line: 112,
          column: 12
        },
        end: {
          line: 112,
          column: 54
        }
      },
      "50": {
        start: {
          line: 116,
          column: 8
        },
        end: {
          line: 116,
          column: 42
        }
      },
      "51": {
        start: {
          line: 120,
          column: 18
        },
        end: {
          line: 156,
          column: 1
        }
      },
      "52": {
        start: {
          line: 122,
          column: 8
        },
        end: {
          line: 122,
          column: 32
        }
      },
      "53": {
        start: {
          line: 123,
          column: 8
        },
        end: {
          line: 123,
          column: 68
        }
      },
      "54": {
        start: {
          line: 126,
          column: 8
        },
        end: {
          line: 126,
          column: 36
        }
      },
      "55": {
        start: {
          line: 128,
          column: 8
        },
        end: {
          line: 131,
          column: 9
        }
      },
      "56": {
        start: {
          line: 133,
          column: 8
        },
        end: {
          line: 133,
          column: 68
        }
      },
      "57": {
        start: {
          line: 136,
          column: 8
        },
        end: {
          line: 136,
          column: 37
        }
      },
      "58": {
        start: {
          line: 137,
          column: 8
        },
        end: {
          line: 139,
          column: 9
        }
      },
      "59": {
        start: {
          line: 141,
          column: 8
        },
        end: {
          line: 141,
          column: 34
        }
      },
      "60": {
        start: {
          line: 142,
          column: 8
        },
        end: {
          line: 142,
          column: 43
        }
      },
      "61": {
        start: {
          line: 143,
          column: 8
        },
        end: {
          line: 143,
          column: 46
        }
      },
      "62": {
        start: {
          line: 144,
          column: 8
        },
        end: {
          line: 144,
          column: 52
        }
      },
      "63": {
        start: {
          line: 148,
          column: 8
        },
        end: {
          line: 148,
          column: 38
        }
      },
      "64": {
        start: {
          line: 151,
          column: 8
        },
        end: {
          line: 151,
          column: 48
        }
      },
      "65": {
        start: {
          line: 154,
          column: 8
        },
        end: {
          line: 154,
          column: 39
        }
      },
      "66": {
        start: {
          line: 158,
          column: 16
        },
        end: {
          line: 166,
          column: 1
        }
      },
      "67": {
        start: {
          line: 159,
          column: 24
        },
        end: {
          line: 159,
          column: 36
        }
      },
      "68": {
        start: {
          line: 160,
          column: 19
        },
        end: {
          line: 160,
          column: 29
        }
      },
      "69": {
        start: {
          line: 161,
          column: 20
        },
        end: {
          line: 161,
          column: 36
        }
      },
      "70": {
        start: {
          line: 162,
          column: 25
        },
        end: {
          line: 162,
          column: 46
        }
      },
      "71": {
        start: {
          line: 163,
          column: 27
        },
        end: {
          line: 163,
          column: 45
        }
      },
      "72": {
        start: {
          line: 164,
          column: 30
        },
        end: {
          line: 164,
          column: 51
        }
      },
      "73": {
        start: {
          line: 165,
          column: 25
        },
        end: {
          line: 165,
          column: 131
        }
      },
      "74": {
        start: {
          line: 168,
          column: 23
        },
        end: {
          line: 174,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 28,
            column: 5
          }
        },
        loc: {
          start: {
            line: 28,
            column: 28
          },
          end: {
            line: 31,
            column: 5
          }
        },
        line: 28
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 32,
            column: 4
          },
          end: {
            line: 32,
            column: 5
          }
        },
        loc: {
          start: {
            line: 32,
            column: 31
          },
          end: {
            line: 35,
            column: 5
          }
        },
        line: 32
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 36,
            column: 5
          }
        },
        loc: {
          start: {
            line: 36,
            column: 60
          },
          end: {
            line: 88,
            column: 5
          }
        },
        line: 36
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 49,
            column: 18
          },
          end: {
            line: 49,
            column: 19
          }
        },
        loc: {
          start: {
            line: 49,
            column: 26
          },
          end: {
            line: 79,
            column: 13
          }
        },
        line: 49
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 56,
            column: 73
          },
          end: {
            line: 56,
            column: 74
          }
        },
        loc: {
          start: {
            line: 56,
            column: 89
          },
          end: {
            line: 78,
            column: 17
          }
        },
        line: 56
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 63,
            column: 40
          },
          end: {
            line: 63,
            column: 41
          }
        },
        loc: {
          start: {
            line: 63,
            column: 48
          },
          end: {
            line: 63,
            column: 67
          }
        },
        line: 63
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 71,
            column: 40
          },
          end: {
            line: 71,
            column: 41
          }
        },
        loc: {
          start: {
            line: 71,
            column: 48
          },
          end: {
            line: 71,
            column: 81
          }
        },
        line: 71
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 75,
            column: 40
          },
          end: {
            line: 75,
            column: 41
          }
        },
        loc: {
          start: {
            line: 75,
            column: 48
          },
          end: {
            line: 75,
            column: 70
          }
        },
        line: 75
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 80,
            column: 18
          },
          end: {
            line: 80,
            column: 19
          }
        },
        loc: {
          start: {
            line: 80,
            column: 33
          },
          end: {
            line: 83,
            column: 13
          }
        },
        line: 80
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 84,
            column: 19
          },
          end: {
            line: 84,
            column: 20
          }
        },
        loc: {
          start: {
            line: 84,
            column: 28
          },
          end: {
            line: 87,
            column: 13
          }
        },
        line: 84
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 90,
            column: 4
          },
          end: {
            line: 90,
            column: 5
          }
        },
        loc: {
          start: {
            line: 90,
            column: 60
          },
          end: {
            line: 96,
            column: 5
          }
        },
        line: 90
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 98,
            column: 4
          },
          end: {
            line: 98,
            column: 5
          }
        },
        loc: {
          start: {
            line: 98,
            column: 23
          },
          end: {
            line: 100,
            column: 5
          }
        },
        line: 98
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 102,
            column: 4
          },
          end: {
            line: 102,
            column: 5
          }
        },
        loc: {
          start: {
            line: 102,
            column: 36
          },
          end: {
            line: 108,
            column: 5
          }
        },
        line: 102
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 105,
            column: 38
          },
          end: {
            line: 105,
            column: 39
          }
        },
        loc: {
          start: {
            line: 105,
            column: 49
          },
          end: {
            line: 107,
            column: 9
          }
        },
        line: 105
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 109,
            column: 4
          },
          end: {
            line: 109,
            column: 5
          }
        },
        loc: {
          start: {
            line: 109,
            column: 47
          },
          end: {
            line: 114,
            column: 5
          }
        },
        line: 109
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 111,
            column: 70
          },
          end: {
            line: 111,
            column: 71
          }
        },
        loc: {
          start: {
            line: 111,
            column: 93
          },
          end: {
            line: 113,
            column: 9
          }
        },
        line: 111
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 115,
            column: 4
          },
          end: {
            line: 115,
            column: 5
          }
        },
        loc: {
          start: {
            line: 115,
            column: 41
          },
          end: {
            line: 117,
            column: 5
          }
        },
        line: 115
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 121,
            column: 4
          },
          end: {
            line: 121,
            column: 5
          }
        },
        loc: {
          start: {
            line: 121,
            column: 27
          },
          end: {
            line: 124,
            column: 5
          }
        },
        line: 121
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 125,
            column: 4
          },
          end: {
            line: 125,
            column: 5
          }
        },
        loc: {
          start: {
            line: 125,
            column: 30
          },
          end: {
            line: 134,
            column: 5
          }
        },
        line: 125
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 135,
            column: 4
          },
          end: {
            line: 135,
            column: 5
          }
        },
        loc: {
          start: {
            line: 135,
            column: 18
          },
          end: {
            line: 145,
            column: 5
          }
        },
        line: 135
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 147,
            column: 4
          },
          end: {
            line: 147,
            column: 5
          }
        },
        loc: {
          start: {
            line: 147,
            column: 35
          },
          end: {
            line: 149,
            column: 5
          }
        },
        line: 147
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 150,
            column: 4
          },
          end: {
            line: 150,
            column: 5
          }
        },
        loc: {
          start: {
            line: 150,
            column: 37
          },
          end: {
            line: 152,
            column: 5
          }
        },
        line: 150
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 153,
            column: 4
          },
          end: {
            line: 153,
            column: 5
          }
        },
        loc: {
          start: {
            line: 153,
            column: 38
          },
          end: {
            line: 155,
            column: 5
          }
        },
        line: 153
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 159,
            column: 15
          },
          end: {
            line: 159,
            column: 16
          }
        },
        loc: {
          start: {
            line: 159,
            column: 24
          },
          end: {
            line: 159,
            column: 36
          }
        },
        line: 159
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 160,
            column: 10
          },
          end: {
            line: 160,
            column: 11
          }
        },
        loc: {
          start: {
            line: 160,
            column: 19
          },
          end: {
            line: 160,
            column: 29
          }
        },
        line: 160
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 161,
            column: 11
          },
          end: {
            line: 161,
            column: 12
          }
        },
        loc: {
          start: {
            line: 161,
            column: 20
          },
          end: {
            line: 161,
            column: 36
          }
        },
        line: 161
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 162,
            column: 16
          },
          end: {
            line: 162,
            column: 17
          }
        },
        loc: {
          start: {
            line: 162,
            column: 25
          },
          end: {
            line: 162,
            column: 46
          }
        },
        line: 162
      },
      "27": {
        name: "(anonymous_27)",
        decl: {
          start: {
            line: 163,
            column: 18
          },
          end: {
            line: 163,
            column: 19
          }
        },
        loc: {
          start: {
            line: 163,
            column: 27
          },
          end: {
            line: 163,
            column: 45
          }
        },
        line: 163
      },
      "28": {
        name: "(anonymous_28)",
        decl: {
          start: {
            line: 164,
            column: 21
          },
          end: {
            line: 164,
            column: 22
          }
        },
        loc: {
          start: {
            line: 164,
            column: 30
          },
          end: {
            line: 164,
            column: 51
          }
        },
        line: 164
      },
      "29": {
        name: "(anonymous_29)",
        decl: {
          start: {
            line: 165,
            column: 16
          },
          end: {
            line: 165,
            column: 17
          }
        },
        loc: {
          start: {
            line: 165,
            column: 25
          },
          end: {
            line: 165,
            column: 131
          }
        },
        line: 165
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 18
          },
          end: {
            line: 11,
            column: 43
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 11,
            column: 31
          },
          end: {
            line: 11,
            column: 35
          }
        }, {
          start: {
            line: 11,
            column: 38
          },
          end: {
            line: 11,
            column: 43
          }
        }],
        line: 11
      },
      "1": {
        loc: {
          start: {
            line: 37,
            column: 8
          },
          end: {
            line: 41,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 37,
            column: 8
          },
          end: {
            line: 41,
            column: 9
          }
        }, {
          start: {
            line: 37,
            column: 8
          },
          end: {
            line: 41,
            column: 9
          }
        }],
        line: 37
      },
      "2": {
        loc: {
          start: {
            line: 50,
            column: 16
          },
          end: {
            line: 52,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 50,
            column: 16
          },
          end: {
            line: 52,
            column: 17
          }
        }, {
          start: {
            line: 50,
            column: 16
          },
          end: {
            line: 52,
            column: 17
          }
        }],
        line: 50
      },
      "3": {
        loc: {
          start: {
            line: 63,
            column: 20
          },
          end: {
            line: 65,
            column: 21
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 63,
            column: 20
          },
          end: {
            line: 65,
            column: 21
          }
        }, {
          start: {
            line: 63,
            column: 20
          },
          end: {
            line: 65,
            column: 21
          }
        }],
        line: 63
      },
      "4": {
        loc: {
          start: {
            line: 67,
            column: 20
          },
          end: {
            line: 69,
            column: 21
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 67,
            column: 20
          },
          end: {
            line: 69,
            column: 21
          }
        }, {
          start: {
            line: 67,
            column: 20
          },
          end: {
            line: 69,
            column: 21
          }
        }],
        line: 67
      },
      "5": {
        loc: {
          start: {
            line: 67,
            column: 24
          },
          end: {
            line: 67,
            column: 127
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 67,
            column: 24
          },
          end: {
            line: 67,
            column: 48
          }
        }, {
          start: {
            line: 67,
            column: 52
          },
          end: {
            line: 67,
            column: 73
          }
        }, {
          start: {
            line: 67,
            column: 77
          },
          end: {
            line: 67,
            column: 101
          }
        }, {
          start: {
            line: 67,
            column: 105
          },
          end: {
            line: 67,
            column: 127
          }
        }],
        line: 67
      },
      "6": {
        loc: {
          start: {
            line: 71,
            column: 20
          },
          end: {
            line: 73,
            column: 21
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 71,
            column: 20
          },
          end: {
            line: 73,
            column: 21
          }
        }, {
          start: {
            line: 71,
            column: 20
          },
          end: {
            line: 73,
            column: 21
          }
        }],
        line: 71
      },
      "7": {
        loc: {
          start: {
            line: 75,
            column: 20
          },
          end: {
            line: 77,
            column: 21
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 75,
            column: 20
          },
          end: {
            line: 77,
            column: 21
          }
        }, {
          start: {
            line: 75,
            column: 20
          },
          end: {
            line: 77,
            column: 21
          }
        }],
        line: 75
      },
      "8": {
        loc: {
          start: {
            line: 91,
            column: 8
          },
          end: {
            line: 93,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 91,
            column: 8
          },
          end: {
            line: 93,
            column: 9
          }
        }, {
          start: {
            line: 91,
            column: 8
          },
          end: {
            line: 93,
            column: 9
          }
        }],
        line: 91
      },
      "9": {
        loc: {
          start: {
            line: 91,
            column: 12
          },
          end: {
            line: 91,
            column: 59
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 91,
            column: 12
          },
          end: {
            line: 91,
            column: 20
          }
        }, {
          start: {
            line: 91,
            column: 24
          },
          end: {
            line: 91,
            column: 59
          }
        }],
        line: 91
      },
      "10": {
        loc: {
          start: {
            line: 165,
            column: 25
          },
          end: {
            line: 165,
            column: 131
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 165,
            column: 25
          },
          end: {
            line: 165,
            column: 46
          }
        }, {
          start: {
            line: 165,
            column: 50
          },
          end: {
            line: 165,
            column: 60
          }
        }, {
          start: {
            line: 165,
            column: 64
          },
          end: {
            line: 165,
            column: 80
          }
        }, {
          start: {
            line: 165,
            column: 84
          },
          end: {
            line: 165,
            column: 100
          }
        }, {
          start: {
            line: 165,
            column: 104
          },
          end: {
            line: 165,
            column: 131
          }
        }],
        line: 165
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0, 0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0, 0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "205d5445876ecb6d84ad49ed694fdf8666c07ba2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2c2sie0bl6 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2c2sie0bl6();




var cachedUser = (cov_2c2sie0bl6().s[0]++, JSON.parse(localStorage.getItem('user-key')));
var cachedUserLocation = (cov_2c2sie0bl6().s[1]++, JSON.parse(localStorage.getItem('user-location-key')));
var sessionObject = (cov_2c2sie0bl6().s[2]++, JSON.parse(localStorage.getItem('session-key')));
var state = (cov_2c2sie0bl6().s[3]++, {
  status: {
    loggedIn: cachedUser ? (cov_2c2sie0bl6().b[0][0]++, true) : (cov_2c2sie0bl6().b[0][1]++, false)
  },
  user: Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({
    token: ''
  }, cachedUser),
  profile: {},
  userLocation: Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, cachedUserLocation),
  session: Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({
    floorId: ''
  }, sessionObject)
});
var actions = (cov_2c2sie0bl6().s[4]++, {
  loginGuest: function loginGuest(_ref) {
    var getters = _ref.getters;
    cov_2c2sie0bl6().f[0]++;
    var userService = (cov_2c2sie0bl6().s[5]++, Object(_services_user_service__WEBPACK_IMPORTED_MODULE_3__["default"])(getters.token));
    cov_2c2sie0bl6().s[6]++;
    userService.guestLogin();
  },
  loginEmployee: function loginEmployee(_ref2) {
    var getters = _ref2.getters;
    cov_2c2sie0bl6().f[1]++;
    var userService = (cov_2c2sie0bl6().s[7]++, Object(_services_user_service__WEBPACK_IMPORTED_MODULE_3__["default"])(getters.token));
    cov_2c2sie0bl6().s[8]++;
    userService.employeeLogin();
  },
  login: function login(_ref3, _ref4) {
    var dispatch = _ref3.dispatch,
        commit = _ref3.commit,
        getters = _ref3.getters;
    var token = _ref4.token,
        router = _ref4.router;
    cov_2c2sie0bl6().f[2]++;
    cov_2c2sie0bl6().s[9]++;

    if (!token) {
      cov_2c2sie0bl6().b[1][0]++;
      cov_2c2sie0bl6().s[10]++;
      commit('logout');
      cov_2c2sie0bl6().s[11]++;
      dispatch('alert/error', 'Login error.', {
        root: true
      });
      cov_2c2sie0bl6().s[12]++;
      return;
    } else {
      cov_2c2sie0bl6().b[1][1]++;
    }

    cov_2c2sie0bl6().s[13]++;
    commit('setToken', token);
    var userService = (cov_2c2sie0bl6().s[14]++, Object(_services_user_service__WEBPACK_IMPORTED_MODULE_3__["default"])(getters.token));
    cov_2c2sie0bl6().s[15]++;
    return userService.login(token).then(function (user) {
      cov_2c2sie0bl6().f[3]++;
      cov_2c2sie0bl6().s[16]++;

      if (!user) {
        cov_2c2sie0bl6().b[2][0]++;
        cov_2c2sie0bl6().s[17]++;
        throw {
          message: 'Login error.'
        };
      } else {
        cov_2c2sie0bl6().b[2][1]++;
      }

      cov_2c2sie0bl6().s[18]++;
      commit('loginSuccess', user);
      cov_2c2sie0bl6().s[19]++;
      return userService.getUserLocation(user.employeeId).then(function (userLocation) {
        cov_2c2sie0bl6().f[4]++;
        cov_2c2sie0bl6().s[20]++;
        commit('setLocation', userLocation);
        cov_2c2sie0bl6().s[21]++;
        localStorage.setItem('user-location-key', JSON.stringify(userLocation));
        cov_2c2sie0bl6().s[22]++;
        commit('setSessionFloorId', userLocation.floorId);
        cov_2c2sie0bl6().s[23]++;
        localStorage.setItem('session-key', JSON.stringify({
          floorId: userLocation.floorId
        }));
        cov_2c2sie0bl6().s[24]++;

        if (user.roles.some(function (role) {
          cov_2c2sie0bl6().f[5]++;
          cov_2c2sie0bl6().s[25]++;
          return role == _common_roles__WEBPACK_IMPORTED_MODULE_4__["roles"].guest;
        })) {
          cov_2c2sie0bl6().b[3][0]++;
          cov_2c2sie0bl6().s[26]++;
          return 'floor-map';
        } else {
          cov_2c2sie0bl6().b[3][1]++;
        }

        cov_2c2sie0bl6().s[27]++;

        if ((cov_2c2sie0bl6().b[5][0]++, !userLocation.buildingId) || (cov_2c2sie0bl6().b[5][1]++, !userLocation.floorId) || (cov_2c2sie0bl6().b[5][2]++, !userLocation.locationId) || (cov_2c2sie0bl6().b[5][3]++, !userLocation.tenantId)) {
          cov_2c2sie0bl6().b[4][0]++;
          cov_2c2sie0bl6().s[28]++;
          return 'where-am-i';
        } else {
          cov_2c2sie0bl6().b[4][1]++;
        }

        cov_2c2sie0bl6().s[29]++;

        if (user.roles.some(function (role) {
          cov_2c2sie0bl6().f[6]++;
          cov_2c2sie0bl6().s[30]++;
          return role == _common_roles__WEBPACK_IMPORTED_MODULE_4__["roles"].officeAdministrator;
        })) {
          cov_2c2sie0bl6().b[6][0]++;
          cov_2c2sie0bl6().s[31]++;
          return 'office-management';
        } else {
          cov_2c2sie0bl6().b[6][1]++;
        }

        cov_2c2sie0bl6().s[32]++;

        if (user.roles.some(function (role) {
          cov_2c2sie0bl6().f[7]++;
          cov_2c2sie0bl6().s[33]++;
          return role == _common_roles__WEBPACK_IMPORTED_MODULE_4__["roles"].employee;
        })) {
          cov_2c2sie0bl6().b[7][0]++;
          cov_2c2sie0bl6().s[34]++;
          return 'floor-map';
        } else {
          cov_2c2sie0bl6().b[7][1]++;
        }
      });
    }).then(function (routeToPush) {
      cov_2c2sie0bl6().f[8]++;
      cov_2c2sie0bl6().s[35]++;
      dispatch('alert/success', 'Login successful', {
        root: true
      });
      cov_2c2sie0bl6().s[36]++;
      router.push({
        name: routeToPush
      });
    }).catch(function (error) {
      cov_2c2sie0bl6().f[9]++;
      cov_2c2sie0bl6().s[37]++;
      commit('logout');
      cov_2c2sie0bl6().s[38]++;
      dispatch('alert/error', error.message, {
        root: true
      });
    });
  },
  changeFloor: function changeFloor(_ref5, _ref6) {
    var commit = _ref5.commit,
        getters = _ref5.getters,
        dispatch = _ref5.dispatch;
    var floorId = _ref6.floorId;
    cov_2c2sie0bl6().f[10]++;
    cov_2c2sie0bl6().s[39]++;

    if ((cov_2c2sie0bl6().b[9][0]++, !floorId) || (cov_2c2sie0bl6().b[9][1]++, getters.selectedFloorId === floorId)) {
      cov_2c2sie0bl6().b[8][0]++;
      cov_2c2sie0bl6().s[40]++;
      return;
    } else {
      cov_2c2sie0bl6().b[8][1]++;
    }

    cov_2c2sie0bl6().s[41]++;
    dispatch('mapInteractions/changeFloor', floorId, {
      root: true
    });
    cov_2c2sie0bl6().s[42]++;
    commit('setSessionFloorId', floorId);
  },
  logout: function logout(_ref7) {
    var commit = _ref7.commit;
    cov_2c2sie0bl6().f[11]++;
    cov_2c2sie0bl6().s[43]++;
    commit('logout');
  },
  getProfile: function getProfile(_ref8) {
    var commit = _ref8.commit,
        getters = _ref8.getters;
    cov_2c2sie0bl6().f[12]++;
    var userService = (cov_2c2sie0bl6().s[44]++, Object(_services_user_service__WEBPACK_IMPORTED_MODULE_3__["default"])(getters.token));
    cov_2c2sie0bl6().s[45]++;
    userService.getProfile().then(function (profile) {
      cov_2c2sie0bl6().f[13]++;
      cov_2c2sie0bl6().s[46]++;
      commit(_account_actionTypes__WEBPACK_IMPORTED_MODULE_5__["USER_PROFILE"], profile);
    });
  },
  saveFloor: function saveFloor(_ref9, newFloorID) {
    var commit = _ref9.commit,
        getters = _ref9.getters;
    cov_2c2sie0bl6().f[14]++;
    var floorService = (cov_2c2sie0bl6().s[47]++, new _services__WEBPACK_IMPORTED_MODULE_6__["FloorService"](getters.token));
    cov_2c2sie0bl6().s[48]++;
    floorService.getLocationInformationByFloodId(newFloorID).then(function (locationInformation) {
      cov_2c2sie0bl6().f[15]++;
      cov_2c2sie0bl6().s[49]++;
      commit('setLocation', locationInformation);
    });
  },
  setLocation: function setLocation(_ref10, newLocation) {
    var commit = _ref10.commit;
    cov_2c2sie0bl6().f[16]++;
    cov_2c2sie0bl6().s[50]++;
    commit('setLocation', newLocation);
  }
});
var mutations = (cov_2c2sie0bl6().s[51]++, (_ref11 = {
  setToken: function setToken(state, token) {
    cov_2c2sie0bl6().f[17]++;
    cov_2c2sie0bl6().s[52]++;
    state.user.token = token;
    cov_2c2sie0bl6().s[53]++;
    localStorage.setItem('user-key', JSON.stringify(state.user));
  },
  loginSuccess: function loginSuccess(state, user) {
    cov_2c2sie0bl6().f[18]++;
    cov_2c2sie0bl6().s[54]++;
    state.status.loggedIn = true;
    cov_2c2sie0bl6().s[55]++;
    state.user = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, user), {}, {
      token: state.user.token
    });
    cov_2c2sie0bl6().s[56]++;
    localStorage.setItem('user-key', JSON.stringify(state.user));
  },
  logout: function logout(state) {
    cov_2c2sie0bl6().f[19]++;
    cov_2c2sie0bl6().s[57]++;
    state.status.loggedIn = false;
    cov_2c2sie0bl6().s[58]++;
    state.user = {
      token: ''
    };
    cov_2c2sie0bl6().s[59]++;
    state.session.floorId = '';
    cov_2c2sie0bl6().s[60]++;
    localStorage.removeItem('user-key');
    cov_2c2sie0bl6().s[61]++;
    localStorage.removeItem('session-key');
    cov_2c2sie0bl6().s[62]++;
    localStorage.removeItem('user-location-key');
  }
}, Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref11, _account_actionTypes__WEBPACK_IMPORTED_MODULE_5__["USER_PROFILE"], function (state, profile) {
  cov_2c2sie0bl6().f[20]++;
  cov_2c2sie0bl6().s[63]++;
  state.profile = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, profile);
}), Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref11, "setLocation", function setLocation(state, userLocation) {
  cov_2c2sie0bl6().f[21]++;
  cov_2c2sie0bl6().s[64]++;
  state.userLocation = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_2__["default"])({}, userLocation);
}), Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref11, "setSessionFloorId", function setSessionFloorId(state, floorId) {
  cov_2c2sie0bl6().f[22]++;
  cov_2c2sie0bl6().s[65]++;
  state.session.floorId = floorId;
}), _ref11));
var getters = (cov_2c2sie0bl6().s[66]++, {
  userState: function userState(state) {
    cov_2c2sie0bl6().f[23]++;
    cov_2c2sie0bl6().s[67]++;
    return state.status;
  },
  user: function user(state) {
    cov_2c2sie0bl6().f[24]++;
    cov_2c2sie0bl6().s[68]++;
    return state.user;
  },
  token: function token(state) {
    cov_2c2sie0bl6().f[25]++;
    cov_2c2sie0bl6().s[69]++;
    return state.user.token;
  },
  employeeId: function employeeId(state) {
    cov_2c2sie0bl6().f[26]++;
    cov_2c2sie0bl6().s[70]++;
    return state.user.employeeId;
  },
  userLocation: function userLocation(state) {
    cov_2c2sie0bl6().f[27]++;
    cov_2c2sie0bl6().s[71]++;
    return state.userLocation;
  },
  selectedFloorId: function selectedFloorId(state) {
    cov_2c2sie0bl6().f[28]++;
    cov_2c2sie0bl6().s[72]++;
    return state.session.floorId;
  },
  isLoggedIn: function isLoggedIn(state) {
    cov_2c2sie0bl6().f[29]++;
    cov_2c2sie0bl6().s[73]++;
    return (cov_2c2sie0bl6().b[10][0]++, state.status.loggedIn) && (cov_2c2sie0bl6().b[10][1]++, state.user) && (cov_2c2sie0bl6().b[10][2]++, state.user.token) && (cov_2c2sie0bl6().b[10][3]++, state.user.roles) && (cov_2c2sie0bl6().b[10][4]++, state.user.roles.length > 0);
  }
});
var account = (cov_2c2sie0bl6().s[74]++, {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters
});

/***/ }),

/***/ "./src/store/alert.actionTypes.js":
/*!****************************************!*\
  !*** ./src/store/alert.actionTypes.js ***!
  \****************************************/
/*! exports provided: ALERT_SUCCESS, ALERT_ERROR, ALERT_CLEAR, ALERT_SHOW_ALERT, ALERT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_SUCCESS", function() { return ALERT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_ERROR", function() { return ALERT_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_CLEAR", function() { return ALERT_CLEAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT_SHOW_ALERT", function() { return ALERT_SHOW_ALERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALERT", function() { return ALERT; });
var ALERT_SUCCESS = 'success';
var ALERT_ERROR = 'error';
var ALERT_CLEAR = 'clear';
var ALERT_SHOW_ALERT = 'showAlert';
var ALERT = 'alert';

/***/ }),

/***/ "./src/store/alert.module.js":
/*!***********************************!*\
  !*** ./src/store/alert.module.js ***!
  \***********************************/
/*! exports provided: alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alert", function() { return alert; });
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _alert_actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert.actionTypes */ "./src/store/alert.actionTypes.js");


var _ref4, _ref5;

function cov_1rb39t75pl() {
  var path = "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\alert.module.js";
  var hash = "fa5bf4e66f983e6291041011494e2e7c00b0756d";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\alert.module.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 14
        },
        end: {
          line: 6,
          column: 1
        }
      },
      "1": {
        start: {
          line: 8,
          column: 16
        },
        end: {
          line: 18,
          column: 1
        }
      },
      "2": {
        start: {
          line: 10,
          column: 8
        },
        end: {
          line: 10,
          column: 38
        }
      },
      "3": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 13,
          column: 36
        }
      },
      "4": {
        start: {
          line: 16,
          column: 8
        },
        end: {
          line: 16,
          column: 27
        }
      },
      "5": {
        start: {
          line: 20,
          column: 18
        },
        end: {
          line: 33,
          column: 1
        }
      },
      "6": {
        start: {
          line: 22,
          column: 8
        },
        end: {
          line: 22,
          column: 36
        }
      },
      "7": {
        start: {
          line: 23,
          column: 8
        },
        end: {
          line: 23,
          column: 31
        }
      },
      "8": {
        start: {
          line: 26,
          column: 8
        },
        end: {
          line: 26,
          column: 34
        }
      },
      "9": {
        start: {
          line: 27,
          column: 8
        },
        end: {
          line: 27,
          column: 31
        }
      },
      "10": {
        start: {
          line: 30,
          column: 8
        },
        end: {
          line: 30,
          column: 25
        }
      },
      "11": {
        start: {
          line: 31,
          column: 8
        },
        end: {
          line: 31,
          column: 28
        }
      },
      "12": {
        start: {
          line: 35,
          column: 16
        },
        end: {
          line: 39,
          column: 1
        }
      },
      "13": {
        start: {
          line: 37,
          column: 8
        },
        end: {
          line: 37,
          column: 30
        }
      },
      "14": {
        start: {
          line: 41,
          column: 21
        },
        end: {
          line: 47,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 9,
            column: 5
          }
        },
        loc: {
          start: {
            line: 9,
            column: 41
          },
          end: {
            line: 11,
            column: 5
          }
        },
        line: 9
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 12,
            column: 5
          }
        },
        loc: {
          start: {
            line: 12,
            column: 39
          },
          end: {
            line: 14,
            column: 5
          }
        },
        line: 12
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 15,
            column: 4
          },
          end: {
            line: 15,
            column: 5
          }
        },
        loc: {
          start: {
            line: 15,
            column: 30
          },
          end: {
            line: 17,
            column: 5
          }
        },
        line: 15
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        },
        loc: {
          start: {
            line: 21,
            column: 36
          },
          end: {
            line: 24,
            column: 5
          }
        },
        line: 21
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 25,
            column: 5
          }
        },
        loc: {
          start: {
            line: 25,
            column: 34
          },
          end: {
            line: 28,
            column: 5
          }
        },
        line: 25
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 29,
            column: 5
          }
        },
        loc: {
          start: {
            line: 29,
            column: 25
          },
          end: {
            line: 32,
            column: 5
          }
        },
        line: 29
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 36,
            column: 24
          },
          end: {
            line: 36,
            column: 25
          }
        },
        loc: {
          start: {
            line: 36,
            column: 33
          },
          end: {
            line: 38,
            column: 5
          }
        },
        line: 36
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "fa5bf4e66f983e6291041011494e2e7c00b0756d"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1rb39t75pl = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1rb39t75pl();

var state = (cov_1rb39t75pl().s[0]++, {
  type: null,
  message: null
});
var actions = (cov_1rb39t75pl().s[1]++, (_ref4 = {}, Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, _alert_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ALERT_SUCCESS"], function (_ref, message) {
  var commit = _ref.commit;
  cov_1rb39t75pl().f[0]++;
  cov_1rb39t75pl().s[2]++;
  commit(_alert_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ALERT_SUCCESS"], message);
}), Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, _alert_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ALERT_ERROR"], function (_ref2, message) {
  var commit = _ref2.commit;
  cov_1rb39t75pl().f[1]++;
  cov_1rb39t75pl().s[3]++;
  commit(_alert_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ALERT_ERROR"], message);
}), Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref4, _alert_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ALERT_CLEAR"], function (_ref3) {
  var commit = _ref3.commit;
  cov_1rb39t75pl().f[2]++;
  cov_1rb39t75pl().s[4]++;
  commit(_alert_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ALERT_CLEAR"]);
}), _ref4));
var mutations = (cov_1rb39t75pl().s[5]++, (_ref5 = {}, Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, _alert_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ALERT_SUCCESS"], function (state, message) {
  cov_1rb39t75pl().f[3]++;
  cov_1rb39t75pl().s[6]++;
  state.type = 'alert-success';
  cov_1rb39t75pl().s[7]++;
  state.message = message;
}), Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, _alert_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ALERT_ERROR"], function (state, message) {
  cov_1rb39t75pl().f[4]++;
  cov_1rb39t75pl().s[8]++;
  state.type = 'alert-error';
  cov_1rb39t75pl().s[9]++;
  state.message = message;
}), Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref5, _alert_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ALERT_CLEAR"], function (state) {
  cov_1rb39t75pl().f[5]++;
  cov_1rb39t75pl().s[10]++;
  state.type = null;
  cov_1rb39t75pl().s[11]++;
  state.message = null;
}), _ref5));
var getters = (cov_1rb39t75pl().s[12]++, Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _alert_actionTypes__WEBPACK_IMPORTED_MODULE_1__["ALERT_SHOW_ALERT"], function (state) {
  cov_1rb39t75pl().f[6]++;
  cov_1rb39t75pl().s[13]++;
  return !!state.message;
}));
var alert = (cov_1rb39t75pl().s[14]++, {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters
});

/***/ }),

/***/ "./src/store/assetInteraction.module.js":
/*!**********************************************!*\
  !*** ./src/store/assetInteraction.module.js ***!
  \**********************************************/
/*! exports provided: assetInteraction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assetInteraction", function() { return assetInteraction; });
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _store_commonSpaces_entityTypes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/commonSpaces.entityTypes.js */ "./src/store/commonSpaces.entityTypes.js");


function cov_20037vvh76() {
  var path = "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\assetInteraction.module.js";
  var hash = "4403d6cc117347fd5aa61b679b83181b4b69637e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\assetInteraction.module.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 14
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "1": {
        start: {
          line: 16,
          column: 16
        },
        end: {
          line: 26,
          column: 1
        }
      },
      "2": {
        start: {
          line: 18,
          column: 8
        },
        end: {
          line: 18,
          column: 49
        }
      },
      "3": {
        start: {
          line: 21,
          column: 8
        },
        end: {
          line: 21,
          column: 43
        }
      },
      "4": {
        start: {
          line: 24,
          column: 8
        },
        end: {
          line: 24,
          column: 41
        }
      },
      "5": {
        start: {
          line: 28,
          column: 18
        },
        end: {
          line: 62,
          column: 1
        }
      },
      "6": {
        start: {
          line: 30,
          column: 8
        },
        end: {
          line: 33,
          column: 9
        }
      },
      "7": {
        start: {
          line: 36,
          column: 8
        },
        end: {
          line: 39,
          column: 9
        }
      },
      "8": {
        start: {
          line: 42,
          column: 8
        },
        end: {
          line: 45,
          column: 9
        }
      },
      "9": {
        start: {
          line: 48,
          column: 8
        },
        end: {
          line: 51,
          column: 9
        }
      },
      "10": {
        start: {
          line: 54,
          column: 8
        },
        end: {
          line: 54,
          column: 43
        }
      },
      "11": {
        start: {
          line: 57,
          column: 8
        },
        end: {
          line: 57,
          column: 37
        }
      },
      "12": {
        start: {
          line: 60,
          column: 8
        },
        end: {
          line: 60,
          column: 35
        }
      },
      "13": {
        start: {
          line: 64,
          column: 16
        },
        end: {
          line: 66,
          column: 1
        }
      },
      "14": {
        start: {
          line: 65,
          column: 24
        },
        end: {
          line: 65,
          column: 36
        }
      },
      "15": {
        start: {
          line: 68,
          column: 32
        },
        end: {
          line: 74,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 5
          }
        },
        loc: {
          start: {
            line: 17,
            column: 48
          },
          end: {
            line: 19,
            column: 5
          }
        },
        line: 17
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 20,
            column: 4
          },
          end: {
            line: 20,
            column: 5
          }
        },
        loc: {
          start: {
            line: 20,
            column: 42
          },
          end: {
            line: 22,
            column: 5
          }
        },
        line: 20
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 23,
            column: 5
          }
        },
        loc: {
          start: {
            line: 23,
            column: 40
          },
          end: {
            line: 25,
            column: 5
          }
        },
        line: 23
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 29,
            column: 20
          },
          end: {
            line: 29,
            column: 21
          }
        },
        loc: {
          start: {
            line: 29,
            column: 29
          },
          end: {
            line: 34,
            column: 5
          }
        },
        line: 29
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 35,
            column: 20
          },
          end: {
            line: 35,
            column: 21
          }
        },
        loc: {
          start: {
            line: 35,
            column: 29
          },
          end: {
            line: 40,
            column: 5
          }
        },
        line: 35
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 41,
            column: 19
          },
          end: {
            line: 41,
            column: 20
          }
        },
        loc: {
          start: {
            line: 41,
            column: 28
          },
          end: {
            line: 46,
            column: 5
          }
        },
        line: 41
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 47,
            column: 20
          },
          end: {
            line: 47,
            column: 21
          }
        },
        loc: {
          start: {
            line: 47,
            column: 29
          },
          end: {
            line: 52,
            column: 5
          }
        },
        line: 47
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 53,
            column: 22
          },
          end: {
            line: 53,
            column: 23
          }
        },
        loc: {
          start: {
            line: 53,
            column: 48
          },
          end: {
            line: 55,
            column: 5
          }
        },
        line: 53
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 56,
            column: 19
          },
          end: {
            line: 56,
            column: 20
          }
        },
        loc: {
          start: {
            line: 56,
            column: 42
          },
          end: {
            line: 58,
            column: 5
          }
        },
        line: 56
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 59,
            column: 18
          },
          end: {
            line: 59,
            column: 19
          }
        },
        loc: {
          start: {
            line: 59,
            column: 40
          },
          end: {
            line: 61,
            column: 5
          }
        },
        line: 59
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 65,
            column: 15
          },
          end: {
            line: 65,
            column: 16
          }
        },
        loc: {
          start: {
            line: 65,
            column: 24
          },
          end: {
            line: 65,
            column: 36
          }
        },
        line: 65
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "4403d6cc117347fd5aa61b679b83181b4b69637e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_20037vvh76 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_20037vvh76();

var state = (cov_20037vvh76().s[0]++, {
  mapStates: {
    viewing: true,
    drawing: false,
    adding: false,
    editing: false
  },
  assetSelected: _store_commonSpaces_entityTypes_js__WEBPACK_IMPORTED_MODULE_1__["DEFAULT"],
  drawnShape: undefined,
  reloadMap: false,
  defaultMapState: {
    drawing: false,
    viewing: false,
    editing: false,
    adding: false
  }
});
var actions = (cov_20037vvh76().s[1]++, {
  setAssetSelected: function setAssetSelected(_ref, assetSelected) {
    var commit = _ref.commit;
    cov_20037vvh76().f[0]++;
    cov_20037vvh76().s[2]++;
    commit('setAssetSelected', assetSelected);
  },
  setDrawnShape: function setDrawnShape(_ref2, drawnShape) {
    var commit = _ref2.commit;
    cov_20037vvh76().f[1]++;
    cov_20037vvh76().s[3]++;
    commit('setDrawnShape', drawnShape);
  },
  setReloadMap: function setReloadMap(_ref3, reloadMap) {
    var commit = _ref3.commit;
    cov_20037vvh76().f[2]++;
    cov_20037vvh76().s[4]++;
    commit('setReloadMap', reloadMap);
  }
});
var mutations = (cov_20037vvh76().s[5]++, {
  setViewingMode: function setViewingMode(state) {
    cov_20037vvh76().f[3]++;
    cov_20037vvh76().s[6]++;
    state.mapStates = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.defaultMapState), {}, {
      viewing: true
    });
  },
  setDrawingMode: function setDrawingMode(state) {
    cov_20037vvh76().f[4]++;
    cov_20037vvh76().s[7]++;
    state.mapStates = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.defaultMapState), {}, {
      drawing: true
    });
  },
  setAddingMode: function setAddingMode(state) {
    cov_20037vvh76().f[5]++;
    cov_20037vvh76().s[8]++;
    state.mapStates = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.defaultMapState), {}, {
      adding: true
    });
  },
  setEditingMode: function setEditingMode(state) {
    cov_20037vvh76().f[6]++;
    cov_20037vvh76().s[9]++;
    state.mapStates = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.defaultMapState), {}, {
      editing: true
    });
  },
  setAssetSelected: function setAssetSelected(state, assetSelected) {
    cov_20037vvh76().f[7]++;
    cov_20037vvh76().s[10]++;
    state.assetSelected = assetSelected;
  },
  setDrawnShape: function setDrawnShape(state, drawnShape) {
    cov_20037vvh76().f[8]++;
    cov_20037vvh76().s[11]++;
    state.drawnShape = drawnShape;
  },
  setReloadMap: function setReloadMap(state, reloadMap) {
    cov_20037vvh76().f[9]++;
    cov_20037vvh76().s[12]++;
    state.reloadMap = reloadMap;
  }
});
var getters = (cov_20037vvh76().s[13]++, {
  drawState: function drawState(state) {
    cov_20037vvh76().f[10]++;
    cov_20037vvh76().s[14]++;
    return state.status;
  } //maybe state.mapStates.drawing ?

});
var assetInteraction = (cov_20037vvh76().s[15]++, {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters
});

/***/ }),

/***/ "./src/store/bathrooms.module.js":
/*!***************************************!*\
  !*** ./src/store/bathrooms.module.js ***!
  \***************************************/
/*! exports provided: bathrooms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bathrooms", function() { return bathrooms; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services */ "./src/services/index.js");
function cov_1kafaxis1d() {
  var path = "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\bathrooms.module.js";
  var hash = "318f5c25ca262071e6bad516a1d5b10b66575445";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\bathrooms.module.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 14
        },
        end: {
          line: 3,
          column: 16
        }
      },
      "1": {
        start: {
          line: 5,
          column: 16
        },
        end: {
          line: 21,
          column: 1
        }
      },
      "2": {
        start: {
          line: 7,
          column: 32
        },
        end: {
          line: 7,
          column: 93
        }
      },
      "3": {
        start: {
          line: 8,
          column: 8
        },
        end: {
          line: 19,
          column: 9
        }
      },
      "4": {
        start: {
          line: 10,
          column: 16
        },
        end: {
          line: 13,
          column: 17
        }
      },
      "5": {
        start: {
          line: 11,
          column: 20
        },
        end: {
          line: 11,
          column: 95
        }
      },
      "6": {
        start: {
          line: 12,
          column: 20
        },
        end: {
          line: 12,
          column: 83
        }
      },
      "7": {
        start: {
          line: 16,
          column: 16
        },
        end: {
          line: 16,
          column: 84
        }
      },
      "8": {
        start: {
          line: 17,
          column: 16
        },
        end: {
          line: 17,
          column: 79
        }
      },
      "9": {
        start: {
          line: 22,
          column: 18
        },
        end: {
          line: 22,
          column: 20
        }
      },
      "10": {
        start: {
          line: 24,
          column: 16
        },
        end: {
          line: 26,
          column: 1
        }
      },
      "11": {
        start: {
          line: 25,
          column: 28
        },
        end: {
          line: 25,
          column: 40
        }
      },
      "12": {
        start: {
          line: 27,
          column: 25
        },
        end: {
          line: 33,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 6,
            column: 5
          }
        },
        loc: {
          start: {
            line: 6,
            column: 54
          },
          end: {
            line: 20,
            column: 5
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 12
          },
          end: {
            line: 9,
            column: 13
          }
        },
        loc: {
          start: {
            line: 9,
            column: 20
          },
          end: {
            line: 14,
            column: 13
          }
        },
        line: 9
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 15,
            column: 12
          },
          end: {
            line: 15,
            column: 13
          }
        },
        loc: {
          start: {
            line: 15,
            column: 21
          },
          end: {
            line: 18,
            column: 13
          }
        },
        line: 15
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 25,
            column: 19
          },
          end: {
            line: 25,
            column: 20
          }
        },
        loc: {
          start: {
            line: 25,
            column: 28
          },
          end: {
            line: 25,
            column: 40
          }
        },
        line: 25
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 16
          },
          end: {
            line: 13,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 16
          },
          end: {
            line: 13,
            column: 17
          }
        }, {
          start: {
            line: 10,
            column: 16
          },
          end: {
            line: 13,
            column: 17
          }
        }],
        line: 10
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "318f5c25ca262071e6bad516a1d5b10b66575445"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1kafaxis1d = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1kafaxis1d();

var state = (cov_1kafaxis1d().s[0]++, {});
var actions = (cov_1kafaxis1d().s[1]++, {
  postBathroom: function postBathroom(_ref, bathroom) {
    var dispatch = _ref.dispatch,
        rootGetters = _ref.rootGetters;
    cov_1kafaxis1d().f[0]++;
    var bathroomService = (cov_1kafaxis1d().s[2]++, new _services__WEBPACK_IMPORTED_MODULE_0__["BathroomService"](rootGetters['account/token']));
    cov_1kafaxis1d().s[3]++;
    bathroomService.postBathroom(bathroom).then(function (data) {
      cov_1kafaxis1d().f[1]++;
      cov_1kafaxis1d().s[4]++;

      if (data) {
        cov_1kafaxis1d().b[0][0]++;
        cov_1kafaxis1d().s[5]++;
        dispatch('alert/success', 'Bathroom successfully uploaded', {
          root: true
        });
        cov_1kafaxis1d().s[6]++;
        dispatch('assetInteraction/setReloadMap', true, {
          root: true
        });
      } else {
        cov_1kafaxis1d().b[0][1]++;
      }
    }, function (error) {
      cov_1kafaxis1d().f[2]++;
      cov_1kafaxis1d().s[7]++;
      dispatch('alert/error', error.response.data.Message, {
        root: true
      });
      cov_1kafaxis1d().s[8]++;
      dispatch('assetInteraction/setReloadMap', true, {
        root: true
      });
    });
  }
});
var mutations = (cov_1kafaxis1d().s[9]++, {});
var getters = (cov_1kafaxis1d().s[10]++, {
  bathroomState: function bathroomState(state) {
    cov_1kafaxis1d().f[3]++;
    cov_1kafaxis1d().s[11]++;
    return state.status;
  }
});
var bathrooms = (cov_1kafaxis1d().s[12]++, {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters
});

/***/ }),

/***/ "./src/store/buildingInformation.module.js":
/*!*************************************************!*\
  !*** ./src/store/buildingInformation.module.js ***!
  \*************************************************/
/*! exports provided: buildingInformation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildingInformation", function() { return buildingInformation; });
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services */ "./src/services/index.js");




function cov_1vnypu8utx() {
  var path = "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\buildingInformation.module.js";
  var hash = "6db4126c6fada17961164544439986d372532584";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\buildingInformation.module.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 14
        },
        end: {
          line: 9,
          column: 1
        }
      },
      "1": {
        start: {
          line: 11,
          column: 16
        },
        end: {
          line: 60,
          column: 1
        }
      },
      "2": {
        start: {
          line: 13,
          column: 43
        },
        end: {
          line: 13,
          column: 115
        }
      },
      "3": {
        start: {
          line: 14,
          column: 8
        },
        end: {
          line: 16,
          column: 10
        }
      },
      "4": {
        start: {
          line: 15,
          column: 12
        },
        end: {
          line: 15,
          column: 47
        }
      },
      "5": {
        start: {
          line: 20,
          column: 43
        },
        end: {
          line: 20,
          column: 115
        }
      },
      "6": {
        start: {
          line: 21,
          column: 8
        },
        end: {
          line: 23,
          column: 10
        }
      },
      "7": {
        start: {
          line: 22,
          column: 12
        },
        end: {
          line: 22,
          column: 45
        }
      },
      "8": {
        start: {
          line: 27,
          column: 43
        },
        end: {
          line: 27,
          column: 115
        }
      },
      "9": {
        start: {
          line: 28,
          column: 8
        },
        end: {
          line: 30,
          column: 10
        }
      },
      "10": {
        start: {
          line: 29,
          column: 12
        },
        end: {
          line: 29,
          column: 51
        }
      },
      "11": {
        start: {
          line: 34,
          column: 43
        },
        end: {
          line: 34,
          column: 115
        }
      },
      "12": {
        start: {
          line: 35,
          column: 8
        },
        end: {
          line: 37,
          column: 10
        }
      },
      "13": {
        start: {
          line: 36,
          column: 12
        },
        end: {
          line: 36,
          column: 71
        }
      },
      "14": {
        start: {
          line: 41,
          column: 43
        },
        end: {
          line: 41,
          column: 115
        }
      },
      "15": {
        start: {
          line: 42,
          column: 8
        },
        end: {
          line: 44,
          column: 10
        }
      },
      "16": {
        start: {
          line: 43,
          column: 12
        },
        end: {
          line: 43,
          column: 45
        }
      },
      "17": {
        start: {
          line: 48,
          column: 43
        },
        end: {
          line: 48,
          column: 115
        }
      },
      "18": {
        start: {
          line: 49,
          column: 8
        },
        end: {
          line: 58,
          column: 9
        }
      },
      "19": {
        start: {
          line: 51,
          column: 16
        },
        end: {
          line: 53,
          column: 17
        }
      },
      "20": {
        start: {
          line: 52,
          column: 20
        },
        end: {
          line: 52,
          column: 101
        }
      },
      "21": {
        start: {
          line: 56,
          column: 16
        },
        end: {
          line: 56,
          column: 84
        }
      },
      "22": {
        start: {
          line: 62,
          column: 18
        },
        end: {
          line: 89,
          column: 1
        }
      },
      "23": {
        start: {
          line: 64,
          column: 8
        },
        end: {
          line: 64,
          column: 43
        }
      },
      "24": {
        start: {
          line: 68,
          column: 8
        },
        end: {
          line: 68,
          column: 84
        }
      },
      "25": {
        start: {
          line: 68,
          column: 58
        },
        end: {
          line: 68,
          column: 82
        }
      },
      "26": {
        start: {
          line: 72,
          column: 8
        },
        end: {
          line: 72,
          column: 90
        }
      },
      "27": {
        start: {
          line: 72,
          column: 64
        },
        end: {
          line: 72,
          column: 88
        }
      },
      "28": {
        start: {
          line: 76,
          column: 8
        },
        end: {
          line: 81,
          column: 9
        }
      },
      "29": {
        start: {
          line: 77,
          column: 12
        },
        end: {
          line: 77,
          column: 82
        }
      },
      "30": {
        start: {
          line: 77,
          column: 54
        },
        end: {
          line: 77,
          column: 80
        }
      },
      "31": {
        start: {
          line: 78,
          column: 12
        },
        end: {
          line: 80,
          column: 14
        }
      },
      "32": {
        start: {
          line: 79,
          column: 16
        },
        end: {
          line: 79,
          column: 78
        }
      },
      "33": {
        start: {
          line: 79,
          column: 50
        },
        end: {
          line: 79,
          column: 76
        }
      },
      "34": {
        start: {
          line: 83,
          column: 8
        },
        end: {
          line: 83,
          column: 67
        }
      },
      "35": {
        start: {
          line: 87,
          column: 8
        },
        end: {
          line: 87,
          column: 86
        }
      },
      "36": {
        start: {
          line: 87,
          column: 58
        },
        end: {
          line: 87,
          column: 84
        }
      },
      "37": {
        start: {
          line: 91,
          column: 16
        },
        end: {
          line: 93,
          column: 1
        }
      },
      "38": {
        start: {
          line: 92,
          column: 39
        },
        end: {
          line: 92,
          column: 51
        }
      },
      "39": {
        start: {
          line: 95,
          column: 35
        },
        end: {
          line: 101,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 12,
            column: 5
          }
        },
        loc: {
          start: {
            line: 12,
            column: 40
          },
          end: {
            line: 17,
            column: 5
          }
        },
        line: 12
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 14,
            column: 53
          },
          end: {
            line: 14,
            column: 54
          }
        },
        loc: {
          start: {
            line: 14,
            column: 70
          },
          end: {
            line: 16,
            column: 9
          }
        },
        line: 14
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        },
        loc: {
          start: {
            line: 19,
            column: 49
          },
          end: {
            line: 24,
            column: 5
          }
        },
        line: 19
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 21,
            column: 60
          },
          end: {
            line: 21,
            column: 61
          }
        },
        loc: {
          start: {
            line: 21,
            column: 76
          },
          end: {
            line: 23,
            column: 9
          }
        },
        line: 21
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 26,
            column: 5
          }
        },
        loc: {
          start: {
            line: 26,
            column: 54
          },
          end: {
            line: 31,
            column: 5
          }
        },
        line: 26
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 28,
            column: 65
          },
          end: {
            line: 28,
            column: 66
          }
        },
        loc: {
          start: {
            line: 28,
            column: 84
          },
          end: {
            line: 30,
            column: 9
          }
        },
        line: 28
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 33,
            column: 4
          },
          end: {
            line: 33,
            column: 5
          }
        },
        loc: {
          start: {
            line: 33,
            column: 64
          },
          end: {
            line: 38,
            column: 5
          }
        },
        line: 33
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 35,
            column: 75
          },
          end: {
            line: 35,
            column: 76
          }
        },
        loc: {
          start: {
            line: 35,
            column: 104
          },
          end: {
            line: 37,
            column: 9
          }
        },
        line: 35
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 40,
            column: 4
          },
          end: {
            line: 40,
            column: 5
          }
        },
        loc: {
          start: {
            line: 40,
            column: 51
          },
          end: {
            line: 45,
            column: 5
          }
        },
        line: 40
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 42,
            column: 62
          },
          end: {
            line: 42,
            column: 63
          }
        },
        loc: {
          start: {
            line: 42,
            column: 78
          },
          end: {
            line: 44,
            column: 9
          }
        },
        line: 42
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 47,
            column: 4
          },
          end: {
            line: 47,
            column: 5
          }
        },
        loc: {
          start: {
            line: 47,
            column: 64
          },
          end: {
            line: 59,
            column: 5
          }
        },
        line: 47
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 50,
            column: 12
          },
          end: {
            line: 50,
            column: 13
          }
        },
        loc: {
          start: {
            line: 50,
            column: 20
          },
          end: {
            line: 54,
            column: 13
          }
        },
        line: 50
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 55,
            column: 12
          },
          end: {
            line: 55,
            column: 13
          }
        },
        loc: {
          start: {
            line: 55,
            column: 21
          },
          end: {
            line: 57,
            column: 13
          }
        },
        line: 55
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 63,
            column: 16
          },
          end: {
            line: 63,
            column: 17
          }
        },
        loc: {
          start: {
            line: 63,
            column: 42
          },
          end: {
            line: 65,
            column: 5
          }
        },
        line: 63
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 67,
            column: 15
          },
          end: {
            line: 67,
            column: 16
          }
        },
        loc: {
          start: {
            line: 67,
            column: 40
          },
          end: {
            line: 69,
            column: 5
          }
        },
        line: 67
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 68,
            column: 47
          },
          end: {
            line: 68,
            column: 48
          }
        },
        loc: {
          start: {
            line: 68,
            column: 58
          },
          end: {
            line: 68,
            column: 82
          }
        },
        line: 68
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 71,
            column: 18
          },
          end: {
            line: 71,
            column: 19
          }
        },
        loc: {
          start: {
            line: 71,
            column: 46
          },
          end: {
            line: 73,
            column: 5
          }
        },
        line: 71
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 72,
            column: 53
          },
          end: {
            line: 72,
            column: 54
          }
        },
        loc: {
          start: {
            line: 72,
            column: 64
          },
          end: {
            line: 72,
            column: 88
          }
        },
        line: 72
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 75,
            column: 28
          },
          end: {
            line: 75,
            column: 29
          }
        },
        loc: {
          start: {
            line: 75,
            column: 66
          },
          end: {
            line: 84,
            column: 5
          }
        },
        line: 75
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 77,
            column: 43
          },
          end: {
            line: 77,
            column: 44
          }
        },
        loc: {
          start: {
            line: 77,
            column: 54
          },
          end: {
            line: 77,
            column: 80
          }
        },
        line: 77
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 78,
            column: 46
          },
          end: {
            line: 78,
            column: 47
          }
        },
        loc: {
          start: {
            line: 78,
            column: 58
          },
          end: {
            line: 80,
            column: 13
          }
        },
        line: 78
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 79,
            column: 39
          },
          end: {
            line: 79,
            column: 40
          }
        },
        loc: {
          start: {
            line: 79,
            column: 50
          },
          end: {
            line: 79,
            column: 76
          }
        },
        line: 79
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 86,
            column: 15
          },
          end: {
            line: 86,
            column: 16
          }
        },
        loc: {
          start: {
            line: 86,
            column: 40
          },
          end: {
            line: 88,
            column: 5
          }
        },
        line: 86
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 87,
            column: 47
          },
          end: {
            line: 87,
            column: 48
          }
        },
        loc: {
          start: {
            line: 87,
            column: 58
          },
          end: {
            line: 87,
            column: 84
          }
        },
        line: 87
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 92,
            column: 30
          },
          end: {
            line: 92,
            column: 31
          }
        },
        loc: {
          start: {
            line: 92,
            column: 39
          },
          end: {
            line: 92,
            column: 51
          }
        },
        line: 92
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 51,
            column: 16
          },
          end: {
            line: 53,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 51,
            column: 16
          },
          end: {
            line: 53,
            column: 17
          }
        }, {
          start: {
            line: 51,
            column: 16
          },
          end: {
            line: 53,
            column: 17
          }
        }],
        line: 51
      },
      "1": {
        loc: {
          start: {
            line: 68,
            column: 58
          },
          end: {
            line: 68,
            column: 82
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 68,
            column: 76
          },
          end: {
            line: 68,
            column: 77
          }
        }, {
          start: {
            line: 68,
            column: 80
          },
          end: {
            line: 68,
            column: 82
          }
        }],
        line: 68
      },
      "2": {
        loc: {
          start: {
            line: 72,
            column: 64
          },
          end: {
            line: 72,
            column: 88
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 72,
            column: 82
          },
          end: {
            line: 72,
            column: 83
          }
        }, {
          start: {
            line: 72,
            column: 86
          },
          end: {
            line: 72,
            column: 88
          }
        }],
        line: 72
      },
      "3": {
        loc: {
          start: {
            line: 76,
            column: 8
          },
          end: {
            line: 81,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 76,
            column: 8
          },
          end: {
            line: 81,
            column: 9
          }
        }, {
          start: {
            line: 76,
            column: 8
          },
          end: {
            line: 81,
            column: 9
          }
        }],
        line: 76
      },
      "4": {
        loc: {
          start: {
            line: 77,
            column: 54
          },
          end: {
            line: 77,
            column: 80
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 77,
            column: 74
          },
          end: {
            line: 77,
            column: 75
          }
        }, {
          start: {
            line: 77,
            column: 78
          },
          end: {
            line: 77,
            column: 80
          }
        }],
        line: 77
      },
      "5": {
        loc: {
          start: {
            line: 79,
            column: 50
          },
          end: {
            line: 79,
            column: 76
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 79,
            column: 70
          },
          end: {
            line: 79,
            column: 71
          }
        }, {
          start: {
            line: 79,
            column: 74
          },
          end: {
            line: 79,
            column: 76
          }
        }],
        line: 79
      },
      "6": {
        loc: {
          start: {
            line: 87,
            column: 58
          },
          end: {
            line: 87,
            column: 84
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 87,
            column: 78
          },
          end: {
            line: 87,
            column: 79
          }
        }, {
          start: {
            line: 87,
            column: 82
          },
          end: {
            line: 87,
            column: 84
          }
        }],
        line: 87
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "6db4126c6fada17961164544439986d372532584"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1vnypu8utx = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1vnypu8utx();

var state = (cov_1vnypu8utx().s[0]++, {
  listOfTenants: [],
  listOfCities: [],
  listOfBuildings: [],
  listOfBuildingsWithFloors: [],
  listOfFloors: []
});
var actions = (cov_1vnypu8utx().s[1]++, {
  getTenants: function getTenants(_ref) {
    var commit = _ref.commit,
        rootGetters = _ref.rootGetters;
    cov_1vnypu8utx().f[0]++;
    var buildingInformationService = (cov_1vnypu8utx().s[2]++, new _services__WEBPACK_IMPORTED_MODULE_3__["BuildingInformationService"](rootGetters['account/token']));
    cov_1vnypu8utx().s[3]++;
    buildingInformationService.getTenants().then(function (listOfTenants) {
      cov_1vnypu8utx().f[1]++;
      cov_1vnypu8utx().s[4]++;
      commit('setTenants', listOfTenants);
    });
  },
  getCities: function getCities(_ref2, tenantId) {
    var commit = _ref2.commit,
        rootGetters = _ref2.rootGetters;
    cov_1vnypu8utx().f[2]++;
    var buildingInformationService = (cov_1vnypu8utx().s[5]++, new _services__WEBPACK_IMPORTED_MODULE_3__["BuildingInformationService"](rootGetters['account/token']));
    cov_1vnypu8utx().s[6]++;
    buildingInformationService.getCities(tenantId).then(function (listOfCities) {
      cov_1vnypu8utx().f[3]++;
      cov_1vnypu8utx().s[7]++;
      commit('setCities', listOfCities);
    });
  },
  getBuildings: function getBuildings(_ref3, locationId) {
    var commit = _ref3.commit,
        rootGetters = _ref3.rootGetters;
    cov_1vnypu8utx().f[4]++;
    var buildingInformationService = (cov_1vnypu8utx().s[8]++, new _services__WEBPACK_IMPORTED_MODULE_3__["BuildingInformationService"](rootGetters['account/token']));
    cov_1vnypu8utx().s[9]++;
    buildingInformationService.getBuildings(locationId).then(function (listOfBuildings) {
      cov_1vnypu8utx().f[5]++;
      cov_1vnypu8utx().s[10]++;
      commit('setBuildings', listOfBuildings);
    });
  },
  getBuildingsWithFloors: function getBuildingsWithFloors(_ref4, locationId) {
    var commit = _ref4.commit,
        rootGetters = _ref4.rootGetters;
    cov_1vnypu8utx().f[6]++;
    var buildingInformationService = (cov_1vnypu8utx().s[11]++, new _services__WEBPACK_IMPORTED_MODULE_3__["BuildingInformationService"](rootGetters['account/token']));
    cov_1vnypu8utx().s[12]++;
    buildingInformationService.getBuildingsWithFloors(locationId).then(function (listOfBuildingsWithFloors) {
      cov_1vnypu8utx().f[7]++;
      cov_1vnypu8utx().s[13]++;
      commit('setBuildingsWithFloors', listOfBuildingsWithFloors);
    });
  },
  getFloors: function getFloors(_ref5, buildingId) {
    var commit = _ref5.commit,
        rootGetters = _ref5.rootGetters;
    cov_1vnypu8utx().f[8]++;
    var buildingInformationService = (cov_1vnypu8utx().s[14]++, new _services__WEBPACK_IMPORTED_MODULE_3__["BuildingInformationService"](rootGetters['account/token']));
    cov_1vnypu8utx().s[15]++;
    buildingInformationService.getFloors(buildingId).then(function (listOfFloors) {
      cov_1vnypu8utx().f[9]++;
      cov_1vnypu8utx().s[16]++;
      commit('setFloors', listOfFloors);
    });
  },
  postBuildingSetup: function postBuildingSetup(_ref6, buildingSetup) {
    var dispatch = _ref6.dispatch,
        rootGetters = _ref6.rootGetters;
    cov_1vnypu8utx().f[10]++;
    var buildingInformationService = (cov_1vnypu8utx().s[17]++, new _services__WEBPACK_IMPORTED_MODULE_3__["BuildingInformationService"](rootGetters['account/token']));
    cov_1vnypu8utx().s[18]++;
    return buildingInformationService.postBuildingSetup(buildingSetup).then(function (data) {
      cov_1vnypu8utx().f[11]++;
      cov_1vnypu8utx().s[19]++;

      if (data) {
        cov_1vnypu8utx().b[0][0]++;
        cov_1vnypu8utx().s[20]++;
        dispatch('alert/success', 'Building setup successfully uploaded', {
          root: true
        });
      } else {
        cov_1vnypu8utx().b[0][1]++;
      }
    }, function (error) {
      cov_1vnypu8utx().f[12]++;
      cov_1vnypu8utx().s[21]++;
      dispatch('alert/error', error.response.data.Message, {
        root: true
      });
    });
  }
});
var mutations = (cov_1vnypu8utx().s[22]++, {
  setTenants: function setTenants(state, listOfTenants) {
    cov_1vnypu8utx().f[13]++;
    cov_1vnypu8utx().s[23]++;
    state.listOfTenants = listOfTenants;
  },
  setCities: function setCities(state, listOfCities) {
    cov_1vnypu8utx().f[14]++;
    cov_1vnypu8utx().s[24]++;
    state.listOfCities = listOfCities.sort(function (a, b) {
      cov_1vnypu8utx().f[15]++;
      cov_1vnypu8utx().s[25]++;
      return a.name > b.name ? (cov_1vnypu8utx().b[1][0]++, 1) : (cov_1vnypu8utx().b[1][1]++, -1);
    });
  },
  setBuildings: function setBuildings(state, listOfBuildings) {
    cov_1vnypu8utx().f[16]++;
    cov_1vnypu8utx().s[26]++;
    state.listOfBuildings = listOfBuildings.sort(function (a, b) {
      cov_1vnypu8utx().f[17]++;
      cov_1vnypu8utx().s[27]++;
      return a.name > b.name ? (cov_1vnypu8utx().b[2][0]++, 1) : (cov_1vnypu8utx().b[2][1]++, -1);
    });
  },
  setBuildingsWithFloors: function setBuildingsWithFloors(state, listOfBuildingsWithFloors) {
    cov_1vnypu8utx().f[18]++;
    cov_1vnypu8utx().s[28]++;

    if (listOfBuildingsWithFloors) {
      cov_1vnypu8utx().b[3][0]++;
      cov_1vnypu8utx().s[29]++;
      listOfBuildingsWithFloors.sort(function (a, b) {
        cov_1vnypu8utx().f[19]++;
        cov_1vnypu8utx().s[30]++;
        return a.label > b.label ? (cov_1vnypu8utx().b[4][0]++, 1) : (cov_1vnypu8utx().b[4][1]++, -1);
      });
      cov_1vnypu8utx().s[31]++;
      listOfBuildingsWithFloors.forEach(function (building) {
        cov_1vnypu8utx().f[20]++;
        cov_1vnypu8utx().s[32]++;
        building.children.sort(function (a, b) {
          cov_1vnypu8utx().f[21]++;
          cov_1vnypu8utx().s[33]++;
          return a.level > b.level ? (cov_1vnypu8utx().b[5][0]++, 1) : (cov_1vnypu8utx().b[5][1]++, -1);
        });
      });
    } else {
      cov_1vnypu8utx().b[3][1]++;
    }

    cov_1vnypu8utx().s[34]++;
    state.listOfBuildingsWithFloors = listOfBuildingsWithFloors;
  },
  setFloors: function setFloors(state, listOfFloors) {
    cov_1vnypu8utx().f[22]++;
    cov_1vnypu8utx().s[35]++;
    state.listOfFloors = listOfFloors.sort(function (a, b) {
      cov_1vnypu8utx().f[23]++;
      cov_1vnypu8utx().s[36]++;
      return a.level > b.level ? (cov_1vnypu8utx().b[6][0]++, 1) : (cov_1vnypu8utx().b[6][1]++, -1);
    });
  }
});
var getters = (cov_1vnypu8utx().s[37]++, {
  buildingInformationState: function buildingInformationState(state) {
    cov_1vnypu8utx().f[24]++;
    cov_1vnypu8utx().s[38]++;
    return state.status;
  }
});
var buildingInformation = (cov_1vnypu8utx().s[39]++, {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters
});

/***/ }),

/***/ "./src/store/buildings.module.js":
/*!***************************************!*\
  !*** ./src/store/buildings.module.js ***!
  \***************************************/
/*! exports provided: namespaced, state, actions, mutations, getters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespaced", function() { return namespaced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services */ "./src/services/index.js");
function cov_1uwazjae5p() {
  var path = "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\buildings.module.js";
  var hash = "f01d953f32af944481ba8500c785c616080deb31";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\buildings.module.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 26
        },
        end: {
          line: 3,
          column: 30
        }
      },
      "1": {
        start: {
          line: 5,
          column: 21
        },
        end: {
          line: 7,
          column: 1
        }
      },
      "2": {
        start: {
          line: 9,
          column: 23
        },
        end: {
          line: 16,
          column: 1
        }
      },
      "3": {
        start: {
          line: 11,
          column: 22
        },
        end: {
          line: 11,
          column: 50
        }
      },
      "4": {
        start: {
          line: 12,
          column: 31
        },
        end: {
          line: 12,
          column: 66
        }
      },
      "5": {
        start: {
          line: 13,
          column: 32
        },
        end: {
          line: 13,
          column: 82
        }
      },
      "6": {
        start: {
          line: 14,
          column: 8
        },
        end: {
          line: 14,
          column: 91
        }
      },
      "7": {
        start: {
          line: 14,
          column: 62
        },
        end: {
          line: 14,
          column: 90
        }
      },
      "8": {
        start: {
          line: 18,
          column: 25
        },
        end: {
          line: 22,
          column: 1
        }
      },
      "9": {
        start: {
          line: 20,
          column: 8
        },
        end: {
          line: 20,
          column: 25
        }
      },
      "10": {
        start: {
          line: 24,
          column: 23
        },
        end: {
          line: 26,
          column: 1
        }
      },
      "11": {
        start: {
          line: 25,
          column: 30
        },
        end: {
          line: 25,
          column: 40
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 10,
            column: 5
          }
        },
        loc: {
          start: {
            line: 10,
            column: 42
          },
          end: {
            line: 15,
            column: 5
          }
        },
        line: 10
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 14,
            column: 54
          },
          end: {
            line: 14,
            column: 55
          }
        },
        loc: {
          start: {
            line: 14,
            column: 62
          },
          end: {
            line: 14,
            column: 90
          }
        },
        line: 14
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        },
        loc: {
          start: {
            line: 19,
            column: 30
          },
          end: {
            line: 21,
            column: 5
          }
        },
        line: 19
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 25,
            column: 21
          },
          end: {
            line: 25,
            column: 22
          }
        },
        loc: {
          start: {
            line: 25,
            column: 30
          },
          end: {
            line: 25,
            column: 40
          }
        },
        line: 25
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f01d953f32af944481ba8500c785c616080deb31"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1uwazjae5p = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1uwazjae5p();

var namespaced = (cov_1uwazjae5p().s[0]++, true);
var state = (cov_1uwazjae5p().s[1]++, {
  data: []
});
var actions = (cov_1uwazjae5p().s[2]++, {
  getBuildings: function getBuildings(_ref) {
    var rootGetters = _ref.rootGetters,
        commit = _ref.commit;
    cov_1uwazjae5p().f[0]++;
    var token = (cov_1uwazjae5p().s[3]++, rootGetters['account/token']);

    var _ref2 = (cov_1uwazjae5p().s[4]++, rootGetters['account/userLocation']),
        locationId = _ref2.locationId;

    var buildingService = (cov_1uwazjae5p().s[5]++, new _services__WEBPACK_IMPORTED_MODULE_0__["BuildingInformationService"](token));
    cov_1uwazjae5p().s[6]++;
    buildingService.getBuildings(locationId).then(function (data) {
      cov_1uwazjae5p().f[1]++;
      cov_1uwazjae5p().s[7]++;
      return commit('setBuildings', data);
    });
  }
});
var mutations = (cov_1uwazjae5p().s[8]++, {
  setBuildings: function setBuildings(state, data) {
    cov_1uwazjae5p().f[2]++;
    cov_1uwazjae5p().s[9]++;
    state.data = data;
  }
});
var getters = (cov_1uwazjae5p().s[10]++, {
  listOfBuildings: function listOfBuildings(state) {
    cov_1uwazjae5p().f[3]++;
    cov_1uwazjae5p().s[11]++;
    return state.data;
  }
});

/***/ }),

/***/ "./src/store/commonSpaces.entityTypes.js":
/*!***********************************************!*\
  !*** ./src/store/commonSpaces.entityTypes.js ***!
  \***********************************************/
/*! exports provided: meetingRoom, KITCHEN, BATHROOM, RECREATION_ROOM, RECEPTION, EXIT, PRINTER, DESK, DEFAULT, DRAW, HAZARD, layers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meetingRoom", function() { return meetingRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KITCHEN", function() { return KITCHEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BATHROOM", function() { return BATHROOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECREATION_ROOM", function() { return RECREATION_ROOM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECEPTION", function() { return RECEPTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXIT", function() { return EXIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRINTER", function() { return PRINTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESK", function() { return DESK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT", function() { return DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DRAW", function() { return DRAW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAZARD", function() { return HAZARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layers", function() { return layers; });
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");


function cov_1hi71t6zfr() {
  var path = "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\commonSpaces.entityTypes.js";
  var hash = "21f8ed50e36e53c92f25de0a396864d2a928aa6a";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\commonSpaces.entityTypes.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 27
        },
        end: {
          line: 5,
          column: 1
        }
      },
      "1": {
        start: {
          line: 6,
          column: 23
        },
        end: {
          line: 10,
          column: 1
        }
      },
      "2": {
        start: {
          line: 11,
          column: 24
        },
        end: {
          line: 15,
          column: 1
        }
      },
      "3": {
        start: {
          line: 16,
          column: 31
        },
        end: {
          line: 20,
          column: 1
        }
      },
      "4": {
        start: {
          line: 21,
          column: 25
        },
        end: {
          line: 25,
          column: 1
        }
      },
      "5": {
        start: {
          line: 26,
          column: 20
        },
        end: {
          line: 30,
          column: 1
        }
      },
      "6": {
        start: {
          line: 31,
          column: 23
        },
        end: {
          line: 37,
          column: 1
        }
      },
      "7": {
        start: {
          line: 38,
          column: 20
        },
        end: {
          line: 45,
          column: 1
        }
      },
      "8": {
        start: {
          line: 46,
          column: 23
        },
        end: {
          line: 49,
          column: 1
        }
      },
      "9": {
        start: {
          line: 50,
          column: 20
        },
        end: {
          line: 54,
          column: 1
        }
      },
      "10": {
        start: {
          line: 55,
          column: 22
        },
        end: {
          line: 58,
          column: 1
        }
      },
      "11": {
        start: {
          line: 60,
          column: 22
        },
        end: {
          line: 97,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "21f8ed50e36e53c92f25de0a396864d2a928aa6a"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1hi71t6zfr = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1hi71t6zfr();
var meetingRoom = (cov_1hi71t6zfr().s[0]++, {
  name: 'Meeting room',
  color: '#DB43264D',
  type: 'Polygon'
});
var KITCHEN = (cov_1hi71t6zfr().s[1]++, {
  name: 'Kitchen',
  color: '#FFA92F4D',
  type: 'Polygon'
});
var BATHROOM = (cov_1hi71t6zfr().s[2]++, {
  name: 'Bathroom',
  color: '#0093DD4D',
  type: 'Polygon'
});
var RECREATION_ROOM = (cov_1hi71t6zfr().s[3]++, {
  name: 'Recreation room',
  color: '#4A00FF4D',
  type: 'Polygon'
});
var RECEPTION = (cov_1hi71t6zfr().s[4]++, {
  name: 'Reception',
  color: '#7788994D',
  type: 'Polygon'
});
var EXIT = (cov_1hi71t6zfr().s[5]++, {
  name: 'Exit',
  color: '#8FCA204D',
  type: 'LineString'
});
var PRINTER = (cov_1hi71t6zfr().s[6]++, {
  name: 'Printer',
  color: '#e214144D',
  type: 'Point',
  length: 20,
  width: 10
});
var DESK = (cov_1hi71t6zfr().s[7]++, {
  name: 'Desk',
  color: '#00FF004D',
  type: 'Point',
  length: 30,
  width: 20,
  colorOccupied: '#FF00004D'
});
var DEFAULT = (cov_1hi71t6zfr().s[8]++, {
  name: 'Nothing selected',
  type: 'None'
});
var DRAW = (cov_1hi71t6zfr().s[9]++, {
  name: 'Draw',
  color: '#00BFFF',
  type: 'Point'
});
var HAZARD = (cov_1hi71t6zfr().s[10]++, {
  name: 'Hazard',
  color: '#FF0000'
});
var layers = (cov_1hi71t6zfr().s[11]++, {
  1: Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, meetingRoom), {}, {
    group: 'Rooms'
  }),
  2: Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, HAZARD), {}, {
    group: 'Hazards'
  }),
  3: Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, KITCHEN), {}, {
    group: 'Facilities'
  }),
  4: Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, BATHROOM), {}, {
    group: 'Facilities'
  }),
  5: Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, RECREATION_ROOM), {}, {
    group: 'Facilities'
  }),
  6: Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, RECEPTION), {}, {
    group: 'Facilities'
  }),
  7: Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, PRINTER), {}, {
    group: 'Assets'
  }),
  8: Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, DESK), {}, {
    group: 'Assets'
  }),
  9: Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, EXIT), {}, {
    group: 'Assets'
  })
});

/***/ }),

/***/ "./src/store/desks.module.js":
/*!***********************************!*\
  !*** ./src/store/desks.module.js ***!
  \***********************************/
/*! exports provided: desks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desks", function() { return desks; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services */ "./src/services/index.js");
function cov_1i6zy8or19() {
  var path = "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\desks.module.js";
  var hash = "c4c4f8fcd8cbc7178b6acdfd2be7ac182be0a250";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\desks.module.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 14
        },
        end: {
          line: 3,
          column: 16
        }
      },
      "1": {
        start: {
          line: 5,
          column: 16
        },
        end: {
          line: 22,
          column: 1
        }
      },
      "2": {
        start: {
          line: 7,
          column: 28
        },
        end: {
          line: 7,
          column: 85
        }
      },
      "3": {
        start: {
          line: 9,
          column: 8
        },
        end: {
          line: 20,
          column: 9
        }
      },
      "4": {
        start: {
          line: 11,
          column: 16
        },
        end: {
          line: 14,
          column: 17
        }
      },
      "5": {
        start: {
          line: 12,
          column: 20
        },
        end: {
          line: 12,
          column: 91
        }
      },
      "6": {
        start: {
          line: 13,
          column: 20
        },
        end: {
          line: 13,
          column: 83
        }
      },
      "7": {
        start: {
          line: 17,
          column: 16
        },
        end: {
          line: 17,
          column: 84
        }
      },
      "8": {
        start: {
          line: 18,
          column: 16
        },
        end: {
          line: 18,
          column: 79
        }
      },
      "9": {
        start: {
          line: 23,
          column: 18
        },
        end: {
          line: 23,
          column: 20
        }
      },
      "10": {
        start: {
          line: 25,
          column: 16
        },
        end: {
          line: 27,
          column: 1
        }
      },
      "11": {
        start: {
          line: 26,
          column: 24
        },
        end: {
          line: 26,
          column: 36
        }
      },
      "12": {
        start: {
          line: 28,
          column: 21
        },
        end: {
          line: 34,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 6,
            column: 5
          }
        },
        loc: {
          start: {
            line: 6,
            column: 46
          },
          end: {
            line: 21,
            column: 5
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 12
          },
          end: {
            line: 10,
            column: 13
          }
        },
        loc: {
          start: {
            line: 10,
            column: 20
          },
          end: {
            line: 15,
            column: 13
          }
        },
        line: 10
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 16,
            column: 12
          },
          end: {
            line: 16,
            column: 13
          }
        },
        loc: {
          start: {
            line: 16,
            column: 21
          },
          end: {
            line: 19,
            column: 13
          }
        },
        line: 16
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 26,
            column: 15
          },
          end: {
            line: 26,
            column: 16
          }
        },
        loc: {
          start: {
            line: 26,
            column: 24
          },
          end: {
            line: 26,
            column: 36
          }
        },
        line: 26
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 16
          },
          end: {
            line: 14,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 11,
            column: 16
          },
          end: {
            line: 14,
            column: 17
          }
        }, {
          start: {
            line: 11,
            column: 16
          },
          end: {
            line: 14,
            column: 17
          }
        }],
        line: 11
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c4c4f8fcd8cbc7178b6acdfd2be7ac182be0a250"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1i6zy8or19 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1i6zy8or19();

var state = (cov_1i6zy8or19().s[0]++, {});
var actions = (cov_1i6zy8or19().s[1]++, {
  postDesk: function postDesk(_ref, desk) {
    var dispatch = _ref.dispatch,
        rootGetters = _ref.rootGetters;
    cov_1i6zy8or19().f[0]++;
    var deskService = (cov_1i6zy8or19().s[2]++, new _services__WEBPACK_IMPORTED_MODULE_0__["DeskService"](rootGetters['account/token']));
    cov_1i6zy8or19().s[3]++;
    deskService.postDesk(desk).then(function (data) {
      cov_1i6zy8or19().f[1]++;
      cov_1i6zy8or19().s[4]++;

      if (data) {
        cov_1i6zy8or19().b[0][0]++;
        cov_1i6zy8or19().s[5]++;
        dispatch('alert/success', 'Desk successfully uploaded', {
          root: true
        });
        cov_1i6zy8or19().s[6]++;
        dispatch('assetInteraction/setReloadMap', true, {
          root: true
        });
      } else {
        cov_1i6zy8or19().b[0][1]++;
      }
    }, function (error) {
      cov_1i6zy8or19().f[2]++;
      cov_1i6zy8or19().s[7]++;
      dispatch('alert/error', error.response.data.Message, {
        root: true
      });
      cov_1i6zy8or19().s[8]++;
      dispatch('assetInteraction/setReloadMap', true, {
        root: true
      });
    });
  }
});
var mutations = (cov_1i6zy8or19().s[9]++, {});
var getters = (cov_1i6zy8or19().s[10]++, {
  deskState: function deskState(state) {
    cov_1i6zy8or19().f[3]++;
    cov_1i6zy8or19().s[11]++;
    return state.status;
  }
});
var desks = (cov_1i6zy8or19().s[12]++, {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters
});

/***/ }),

/***/ "./src/store/employee.module.js":
/*!**************************************!*\
  !*** ./src/store/employee.module.js ***!
  \**************************************/
/*! exports provided: employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "employee", function() { return employee; });
/* harmony import */ var C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services */ "./src/services/index.js");


function cov_lao40e4oy() {
  var path = "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\employee.module.js";
  var hash = "c03cfa0b0ed3fad5bbcbe539cf87dc6281c29c83";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\employee.module.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 14
        },
        end: {
          line: 9,
          column: 1
        }
      },
      "1": {
        start: {
          line: 11,
          column: 16
        },
        end: {
          line: 42,
          column: 1
        }
      },
      "2": {
        start: {
          line: 13,
          column: 30
        },
        end: {
          line: 13,
          column: 91
        }
      },
      "3": {
        start: {
          line: 14,
          column: 8
        },
        end: {
          line: 16,
          column: 10
        }
      },
      "4": {
        start: {
          line: 15,
          column: 12
        },
        end: {
          line: 15,
          column: 44
        }
      },
      "5": {
        start: {
          line: 20,
          column: 30
        },
        end: {
          line: 20,
          column: 91
        }
      },
      "6": {
        start: {
          line: 21,
          column: 8
        },
        end: {
          line: 24,
          column: 10
        }
      },
      "7": {
        start: {
          line: 22,
          column: 12
        },
        end: {
          line: 22,
          column: 43
        }
      },
      "8": {
        start: {
          line: 23,
          column: 12
        },
        end: {
          line: 23,
          column: 23
        }
      },
      "9": {
        start: {
          line: 27,
          column: 8
        },
        end: {
          line: 27,
          column: 34
        }
      },
      "10": {
        start: {
          line: 30,
          column: 30
        },
        end: {
          line: 30,
          column: 91
        }
      },
      "11": {
        start: {
          line: 31,
          column: 8
        },
        end: {
          line: 40,
          column: 14
        }
      },
      "12": {
        start: {
          line: 34,
          column: 16
        },
        end: {
          line: 34,
          column: 81
        }
      },
      "13": {
        start: {
          line: 35,
          column: 16
        },
        end: {
          line: 35,
          column: 59
        }
      },
      "14": {
        start: {
          line: 36,
          column: 16
        },
        end: {
          line: 36,
          column: 94
        }
      },
      "15": {
        start: {
          line: 39,
          column: 16
        },
        end: {
          line: 39,
          column: 70
        }
      },
      "16": {
        start: {
          line: 44,
          column: 18
        },
        end: {
          line: 58,
          column: 1
        }
      },
      "17": {
        start: {
          line: 46,
          column: 8
        },
        end: {
          line: 50,
          column: 9
        }
      },
      "18": {
        start: {
          line: 53,
          column: 8
        },
        end: {
          line: 53,
          column: 47
        }
      },
      "19": {
        start: {
          line: 56,
          column: 8
        },
        end: {
          line: 56,
          column: 33
        }
      },
      "20": {
        start: {
          line: 60,
          column: 16
        },
        end: {
          line: 60,
          column: 18
        }
      },
      "21": {
        start: {
          line: 62,
          column: 24
        },
        end: {
          line: 68,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 12,
            column: 5
          }
        },
        loc: {
          start: {
            line: 12,
            column: 58
          },
          end: {
            line: 17,
            column: 5
          }
        },
        line: 12
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 14,
            column: 50
          },
          end: {
            line: 14,
            column: 51
          }
        },
        loc: {
          start: {
            line: 14,
            column: 62
          },
          end: {
            line: 16,
            column: 9
          }
        },
        line: 14
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        },
        loc: {
          start: {
            line: 19,
            column: 58
          },
          end: {
            line: 25,
            column: 5
          }
        },
        line: 19
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 21,
            column: 65
          },
          end: {
            line: 21,
            column: 66
          }
        },
        loc: {
          start: {
            line: 21,
            column: 73
          },
          end: {
            line: 24,
            column: 9
          }
        },
        line: 21
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 26,
            column: 5
          }
        },
        loc: {
          start: {
            line: 26,
            column: 31
          },
          end: {
            line: 28,
            column: 5
          }
        },
        line: 26
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 29,
            column: 5
          }
        },
        loc: {
          start: {
            line: 29,
            column: 84
          },
          end: {
            line: 41,
            column: 5
          }
        },
        line: 29
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 33,
            column: 18
          },
          end: {
            line: 33,
            column: 19
          }
        },
        loc: {
          start: {
            line: 33,
            column: 38
          },
          end: {
            line: 37,
            column: 13
          }
        },
        line: 33
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 38,
            column: 19
          },
          end: {
            line: 38,
            column: 20
          }
        },
        loc: {
          start: {
            line: 38,
            column: 28
          },
          end: {
            line: 40,
            column: 13
          }
        },
        line: 38
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 45,
            column: 14
          },
          end: {
            line: 45,
            column: 15
          }
        },
        loc: {
          start: {
            line: 45,
            column: 50
          },
          end: {
            line: 51,
            column: 5
          }
        },
        line: 45
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 52,
            column: 18
          },
          end: {
            line: 52,
            column: 19
          }
        },
        loc: {
          start: {
            line: 52,
            column: 46
          },
          end: {
            line: 54,
            column: 5
          }
        },
        line: 52
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 55,
            column: 21
          },
          end: {
            line: 55,
            column: 22
          }
        },
        loc: {
          start: {
            line: 55,
            column: 38
          },
          end: {
            line: 57,
            column: 5
          }
        },
        line: 55
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c03cfa0b0ed3fad5bbcbe539cf87dc6281c29c83"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_lao40e4oy = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_lao40e4oy();

var state = (cov_lao40e4oy().s[0]++, {
  listOfEmployees: [],
  employeeInfo: [],
  profile: {
    floorId: '',
    employeeId: ''
  }
});
var actions = (cov_lao40e4oy().s[1]++, {
  getEmployeesByFloors: function getEmployeesByFloors(_ref, floors) {
    var commit = _ref.commit,
        rootGetters = _ref.rootGetters;
    cov_lao40e4oy().f[0]++;
    var employeeService = (cov_lao40e4oy().s[2]++, new _services__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"](rootGetters['account/token']));
    cov_lao40e4oy().s[3]++;
    employeeService.getEmployees(floors).then(function (employes) {
      cov_lao40e4oy().f[1]++;
      cov_lao40e4oy().s[4]++;
      commit('setEmployees', employes);
    });
  },
  getAllEmployeeInfo: function getAllEmployeeInfo(_ref2, username) {
    var commit = _ref2.commit,
        rootGetters = _ref2.rootGetters;
    cov_lao40e4oy().f[2]++;
    var employeeService = (cov_lao40e4oy().s[5]++, new _services__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"](rootGetters['account/token']));
    cov_lao40e4oy().s[6]++;
    return employeeService.getAllEmployeeInfo(username).then(function (info) {
      cov_lao40e4oy().f[3]++;
      cov_lao40e4oy().s[7]++;
      commit('setEmployeeInfo', info);
      cov_lao40e4oy().s[8]++;
      return info;
    });
  },
  clearEmployees: function clearEmployees(_ref3) {
    var commit = _ref3.commit;
    cov_lao40e4oy().f[4]++;
    cov_lao40e4oy().s[9]++;
    commit('setEmployees', []);
  },
  updateEmployeeFloor: function updateEmployeeFloor(_ref4, _ref5) {
    var commit = _ref4.commit,
        dispatch = _ref4.dispatch,
        rootGetters = _ref4.rootGetters;
    var floorId = _ref5.floorId,
        employeeId = _ref5.employeeId;
    cov_lao40e4oy().f[5]++;
    var employeeService = (cov_lao40e4oy().s[10]++, new _services__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"](rootGetters['account/token']));
    cov_lao40e4oy().s[11]++;
    return employeeService.updateEmployeeFloor({
      floorId: floorId,
      employeeId: employeeId
    }).then(function (employeeLocation) {
      cov_lao40e4oy().f[6]++;
      cov_lao40e4oy().s[12]++;
      dispatch('account/setLocation', employeeLocation, {
        root: true
      });
      cov_lao40e4oy().s[13]++;
      commit('setFloor', {
        floorId: floorId,
        employeeId: employeeId
      });
      cov_lao40e4oy().s[14]++;
      dispatch('alert/success', 'Employee floor saved succesfully.', {
        root: true
      });
    }).catch(function (error) {
      cov_lao40e4oy().f[7]++;
      cov_lao40e4oy().s[15]++;
      dispatch('alert/error', error.message, {
        root: true
      });
    });
  }
});
var mutations = (cov_lao40e4oy().s[16]++, {
  setFloor: function setFloor(state, _ref6) {
    var floorId = _ref6.floorId,
        employeeId = _ref6.employeeId;
    cov_lao40e4oy().f[8]++;
    cov_lao40e4oy().s[17]++;
    state.profile = Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(C_Work_OfficeMap_AzureDevOpsSource_office_map_web_app_node_modules_vue_babel_preset_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.profile), {}, {
      floorId: floorId,
      employeeId: employeeId
    });
  },
  setEmployees: function setEmployees(state, listOfEmployees) {
    cov_lao40e4oy().f[9]++;
    cov_lao40e4oy().s[18]++;
    state.listOfEmployees = listOfEmployees;
  },
  setEmployeeInfo: function setEmployeeInfo(state, info) {
    cov_lao40e4oy().f[10]++;
    cov_lao40e4oy().s[19]++;
    state.employeeInfo = info;
  }
});
var getters = (cov_lao40e4oy().s[20]++, {});
var employee = (cov_lao40e4oy().s[21]++, {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters
});

/***/ }),

/***/ "./src/store/employeeMap.module.js":
/*!*****************************************!*\
  !*** ./src/store/employeeMap.module.js ***!
  \*****************************************/
/*! exports provided: employeeMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "employeeMap", function() { return employeeMap; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services */ "./src/services/index.js");
function cov_27v53no2fj() {
  var path = "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\employeeMap.module.js";
  var hash = "7772113505082b598ff3334d943f481b0d055c28";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\employeeMap.module.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 14
        },
        end: {
          line: 10,
          column: 1
        }
      },
      "1": {
        start: {
          line: 12,
          column: 16
        },
        end: {
          line: 42,
          column: 1
        }
      },
      "2": {
        start: {
          line: 14,
          column: 8
        },
        end: {
          line: 14,
          column: 52
        }
      },
      "3": {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 17,
          column: 56
        }
      },
      "4": {
        start: {
          line: 20,
          column: 8
        },
        end: {
          line: 20,
          column: 50
        }
      },
      "5": {
        start: {
          line: 23,
          column: 8
        },
        end: {
          line: 23,
          column: 52
        }
      },
      "6": {
        start: {
          line: 26,
          column: 8
        },
        end: {
          line: 26,
          column: 51
        }
      },
      "7": {
        start: {
          line: 29,
          column: 30
        },
        end: {
          line: 29,
          column: 89
        }
      },
      "8": {
        start: {
          line: 30,
          column: 8
        },
        end: {
          line: 40,
          column: 9
        }
      },
      "9": {
        start: {
          line: 32,
          column: 16
        },
        end: {
          line: 35,
          column: 17
        }
      },
      "10": {
        start: {
          line: 33,
          column: 20
        },
        end: {
          line: 33,
          column: 93
        }
      },
      "11": {
        start: {
          line: 34,
          column: 20
        },
        end: {
          line: 34,
          column: 81
        }
      },
      "12": {
        start: {
          line: 38,
          column: 16
        },
        end: {
          line: 38,
          column: 84
        }
      },
      "13": {
        start: {
          line: 44,
          column: 18
        },
        end: {
          line: 69,
          column: 1
        }
      },
      "14": {
        start: {
          line: 46,
          column: 8
        },
        end: {
          line: 46,
          column: 46
        }
      },
      "15": {
        start: {
          line: 49,
          column: 8
        },
        end: {
          line: 49,
          column: 50
        }
      },
      "16": {
        start: {
          line: 50,
          column: 8
        },
        end: {
          line: 54,
          column: 9
        }
      },
      "17": {
        start: {
          line: 51,
          column: 12
        },
        end: {
          line: 51,
          column: 49
        }
      },
      "18": {
        start: {
          line: 53,
          column: 12
        },
        end: {
          line: 53,
          column: 36
        }
      },
      "19": {
        start: {
          line: 57,
          column: 8
        },
        end: {
          line: 60,
          column: 9
        }
      },
      "20": {
        start: {
          line: 58,
          column: 12
        },
        end: {
          line: 58,
          column: 44
        }
      },
      "21": {
        start: {
          line: 59,
          column: 12
        },
        end: {
          line: 59,
          column: 38
        }
      },
      "22": {
        start: {
          line: 61,
          column: 8
        },
        end: {
          line: 61,
          column: 44
        }
      },
      "23": {
        start: {
          line: 64,
          column: 8
        },
        end: {
          line: 64,
          column: 46
        }
      },
      "24": {
        start: {
          line: 67,
          column: 8
        },
        end: {
          line: 67,
          column: 45
        }
      },
      "25": {
        start: {
          line: 71,
          column: 16
        },
        end: {
          line: 73,
          column: 1
        }
      },
      "26": {
        start: {
          line: 72,
          column: 31
        },
        end: {
          line: 72,
          column: 43
        }
      },
      "27": {
        start: {
          line: 74,
          column: 27
        },
        end: {
          line: 80,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 4
          },
          end: {
            line: 13,
            column: 5
          }
        },
        loc: {
          start: {
            line: 13,
            column: 51
          },
          end: {
            line: 15,
            column: 5
          }
        },
        line: 13
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 16,
            column: 4
          },
          end: {
            line: 16,
            column: 5
          }
        },
        loc: {
          start: {
            line: 16,
            column: 55
          },
          end: {
            line: 18,
            column: 5
          }
        },
        line: 16
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 19,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        },
        loc: {
          start: {
            line: 19,
            column: 49
          },
          end: {
            line: 21,
            column: 5
          }
        },
        line: 19
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 22,
            column: 4
          },
          end: {
            line: 22,
            column: 5
          }
        },
        loc: {
          start: {
            line: 22,
            column: 51
          },
          end: {
            line: 24,
            column: 5
          }
        },
        line: 22
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 25,
            column: 5
          }
        },
        loc: {
          start: {
            line: 25,
            column: 50
          },
          end: {
            line: 27,
            column: 5
          }
        },
        line: 25
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 28,
            column: 4
          },
          end: {
            line: 28,
            column: 5
          }
        },
        loc: {
          start: {
            line: 28,
            column: 50
          },
          end: {
            line: 41,
            column: 5
          }
        },
        line: 28
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 31,
            column: 12
          },
          end: {
            line: 31,
            column: 13
          }
        },
        loc: {
          start: {
            line: 31,
            column: 20
          },
          end: {
            line: 36,
            column: 13
          }
        },
        line: 31
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 37,
            column: 12
          },
          end: {
            line: 37,
            column: 13
          }
        },
        loc: {
          start: {
            line: 37,
            column: 21
          },
          end: {
            line: 39,
            column: 13
          }
        },
        line: 37
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 45,
            column: 22
          },
          end: {
            line: 45,
            column: 23
          }
        },
        loc: {
          start: {
            line: 45,
            column: 51
          },
          end: {
            line: 47,
            column: 5
          }
        },
        line: 45
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 48,
            column: 24
          },
          end: {
            line: 48,
            column: 25
          }
        },
        loc: {
          start: {
            line: 48,
            column: 55
          },
          end: {
            line: 55,
            column: 5
          }
        },
        line: 48
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 56,
            column: 21
          },
          end: {
            line: 56,
            column: 22
          }
        },
        loc: {
          start: {
            line: 56,
            column: 49
          },
          end: {
            line: 62,
            column: 5
          }
        },
        line: 56
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 63,
            column: 21
          },
          end: {
            line: 63,
            column: 22
          }
        },
        loc: {
          start: {
            line: 63,
            column: 51
          },
          end: {
            line: 65,
            column: 5
          }
        },
        line: 63
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 66,
            column: 23
          },
          end: {
            line: 66,
            column: 24
          }
        },
        loc: {
          start: {
            line: 66,
            column: 50
          },
          end: {
            line: 68,
            column: 5
          }
        },
        line: 66
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 72,
            column: 22
          },
          end: {
            line: 72,
            column: 23
          }
        },
        loc: {
          start: {
            line: 72,
            column: 31
          },
          end: {
            line: 72,
            column: 43
          }
        },
        line: 72
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 32,
            column: 16
          },
          end: {
            line: 35,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 32,
            column: 16
          },
          end: {
            line: 35,
            column: 17
          }
        }, {
          start: {
            line: 32,
            column: 16
          },
          end: {
            line: 35,
            column: 17
          }
        }],
        line: 32
      },
      "1": {
        loc: {
          start: {
            line: 50,
            column: 8
          },
          end: {
            line: 54,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 50,
            column: 8
          },
          end: {
            line: 54,
            column: 9
          }
        }, {
          start: {
            line: 50,
            column: 8
          },
          end: {
            line: 54,
            column: 9
          }
        }],
        line: 50
      },
      "2": {
        loc: {
          start: {
            line: 57,
            column: 8
          },
          end: {
            line: 60,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 57,
            column: 8
          },
          end: {
            line: 60,
            column: 9
          }
        }, {
          start: {
            line: 57,
            column: 8
          },
          end: {
            line: 60,
            column: 9
          }
        }],
        line: 57
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7772113505082b598ff3334d943f481b0d055c28"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_27v53no2fj = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_27v53no2fj();

var state = (cov_27v53no2fj().s[0]++, {
  layerSelected: ['Meeting room', 'Kitchen', 'Bathroom', 'Printer', 'Recreation room', 'Reception', 'Exit', 'Desk', 'Hazard'],
  allLayers: ['Meeting room', 'Kitchen', 'Bathroom', 'Printer', 'Recreation room', 'Reception', 'Exit', 'Desk', 'Hazard'],
  selectAllLayers: true,
  reloadAssets: false,
  reportHazard: false,
  hazardPosition: undefined
});
var actions = (cov_27v53no2fj().s[1]++, {
  setLayerSelected: function setLayerSelected(_ref, newLayerSelected) {
    var commit = _ref.commit;
    cov_27v53no2fj().f[0]++;
    cov_27v53no2fj().s[2]++;
    commit('setLayerSelected', newLayerSelected);
  },
  setSelectAllLayers: function setSelectAllLayers(_ref2, newSelectAllLayers) {
    var commit = _ref2.commit;
    cov_27v53no2fj().f[1]++;
    cov_27v53no2fj().s[3]++;
    commit('setSelectAllLayers', newSelectAllLayers);
  },
  setReloadAssets: function setReloadAssets(_ref3, newReloadAssets) {
    var commit = _ref3.commit;
    cov_27v53no2fj().f[2]++;
    cov_27v53no2fj().s[4]++;
    commit('setReloadAssets', newReloadAssets);
  },
  setReportHazard: function setReportHazard(_ref4, reportHazardValue) {
    var commit = _ref4.commit;
    cov_27v53no2fj().f[3]++;
    cov_27v53no2fj().s[5]++;
    commit('setReportHazard', reportHazardValue);
  },
  setHazardPosition: function setHazardPosition(_ref5, hazardPosition) {
    var commit = _ref5.commit;
    cov_27v53no2fj().f[4]++;
    cov_27v53no2fj().s[6]++;
    commit('setHazardPosition', hazardPosition);
  },
  postHazard: function postHazard(_ref6, hazard) {
    var dispatch = _ref6.dispatch,
        rootGetters = _ref6.rootGetters;
    cov_27v53no2fj().f[5]++;
    var hazardService = (cov_27v53no2fj().s[7]++, new _services__WEBPACK_IMPORTED_MODULE_0__["HazardService"](rootGetters['account/token']));
    cov_27v53no2fj().s[8]++;
    hazardService.postHazard(hazard).then(function (data) {
      cov_27v53no2fj().f[6]++;
      cov_27v53no2fj().s[9]++;

      if (data) {
        cov_27v53no2fj().b[0][0]++;
        cov_27v53no2fj().s[10]++;
        dispatch('alert/success', 'Hazard successfully reported', {
          root: true
        });
        cov_27v53no2fj().s[11]++;
        dispatch('employeeMap/setReloadAssets', true, {
          root: true
        });
      } else {
        cov_27v53no2fj().b[0][1]++;
      }
    }, function (error) {
      cov_27v53no2fj().f[7]++;
      cov_27v53no2fj().s[12]++;
      dispatch('alert/error', error.response.data.Message, {
        root: true
      });
    });
  }
});
var mutations = (cov_27v53no2fj().s[13]++, {
  setLayerSelected: function setLayerSelected(state, newLayerSelected) {
    cov_27v53no2fj().f[8]++;
    cov_27v53no2fj().s[14]++;
    state.layerSelected = newLayerSelected;
  },
  setSelectAllLayers: function setSelectAllLayers(state, newSelectAllLayers) {
    cov_27v53no2fj().f[9]++;
    cov_27v53no2fj().s[15]++;
    state.selectAllLayers = newSelectAllLayers;
    cov_27v53no2fj().s[16]++;

    if (state.selectAllLayers) {
      cov_27v53no2fj().b[1][0]++;
      cov_27v53no2fj().s[17]++;
      state.layerSelected = state.allLayers;
    } else {
      cov_27v53no2fj().b[1][1]++;
      cov_27v53no2fj().s[18]++;
      state.layerSelected = [];
    }
  },
  setReloadAssets: function setReloadAssets(state, newReloadAssets) {
    cov_27v53no2fj().f[10]++;
    cov_27v53no2fj().s[19]++;

    if (newReloadAssets) {
      cov_27v53no2fj().b[2][0]++;
      cov_27v53no2fj().s[20]++;
      state.hazardPosition = undefined;
      cov_27v53no2fj().s[21]++;
      state.reportHazard = false;
    } else {
      cov_27v53no2fj().b[2][1]++;
    }

    cov_27v53no2fj().s[22]++;
    state.reloadAssets = newReloadAssets;
  },
  setReportHazard: function setReportHazard(state, hazardReportValue) {
    cov_27v53no2fj().f[11]++;
    cov_27v53no2fj().s[23]++;
    state.reportHazard = hazardReportValue;
  },
  setHazardPosition: function setHazardPosition(state, hazardPosition) {
    cov_27v53no2fj().f[12]++;
    cov_27v53no2fj().s[24]++;
    state.hazardPosition = hazardPosition;
  }
});
var getters = (cov_27v53no2fj().s[25]++, {
  employeeMapState: function employeeMapState(state) {
    cov_27v53no2fj().f[13]++;
    cov_27v53no2fj().s[26]++;
    return state.status;
  }
});
var employeeMap = (cov_27v53no2fj().s[27]++, {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters
});

/***/ }),

/***/ "./src/store/floorLayout.module.js":
/*!*****************************************!*\
  !*** ./src/store/floorLayout.module.js ***!
  \*****************************************/
/*! exports provided: floorLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "floorLayout", function() { return floorLayout; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services */ "./src/services/index.js");
function cov_2e57n4q8ze() {
  var path = "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\floorLayout.module.js";
  var hash = "21c2a5b612e9b8db51ca51e283128023bc45be98";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\floorLayout.module.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 14
        },
        end: {
          line: 5,
          column: 1
        }
      },
      "1": {
        start: {
          line: 6,
          column: 16
        },
        end: {
          line: 28,
          column: 1
        }
      },
      "2": {
        start: {
          line: 8,
          column: 33
        },
        end: {
          line: 8,
          column: 97
        }
      },
      "3": {
        start: {
          line: 9,
          column: 8
        },
        end: {
          line: 19,
          column: 9
        }
      },
      "4": {
        start: {
          line: 11,
          column: 16
        },
        end: {
          line: 14,
          column: 17
        }
      },
      "5": {
        start: {
          line: 12,
          column: 20
        },
        end: {
          line: 12,
          column: 93
        }
      },
      "6": {
        start: {
          line: 13,
          column: 20
        },
        end: {
          line: 13,
          column: 59
        }
      },
      "7": {
        start: {
          line: 17,
          column: 16
        },
        end: {
          line: 17,
          column: 86
        }
      },
      "8": {
        start: {
          line: 22,
          column: 33
        },
        end: {
          line: 22,
          column: 97
        }
      },
      "9": {
        start: {
          line: 23,
          column: 8
        },
        end: {
          line: 26,
          column: 10
        }
      },
      "10": {
        start: {
          line: 24,
          column: 12
        },
        end: {
          line: 24,
          column: 45
        }
      },
      "11": {
        start: {
          line: 25,
          column: 12
        },
        end: {
          line: 25,
          column: 31
        }
      },
      "12": {
        start: {
          line: 29,
          column: 18
        },
        end: {
          line: 33,
          column: 1
        }
      },
      "13": {
        start: {
          line: 31,
          column: 8
        },
        end: {
          line: 31,
          column: 58
        }
      },
      "14": {
        start: {
          line: 34,
          column: 16
        },
        end: {
          line: 36,
          column: 1
        }
      },
      "15": {
        start: {
          line: 35,
          column: 31
        },
        end: {
          line: 35,
          column: 43
        }
      },
      "16": {
        start: {
          line: 37,
          column: 27
        },
        end: {
          line: 43,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 4
          },
          end: {
            line: 7,
            column: 5
          }
        },
        loc: {
          start: {
            line: 7,
            column: 74
          },
          end: {
            line: 20,
            column: 5
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 12
          },
          end: {
            line: 10,
            column: 13
          }
        },
        loc: {
          start: {
            line: 10,
            column: 20
          },
          end: {
            line: 15,
            column: 13
          }
        },
        line: 10
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 16,
            column: 12
          },
          end: {
            line: 16,
            column: 13
          }
        },
        loc: {
          start: {
            line: 16,
            column: 21
          },
          end: {
            line: 18,
            column: 13
          }
        },
        line: 16
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 21,
            column: 5
          }
        },
        loc: {
          start: {
            line: 21,
            column: 48
          },
          end: {
            line: 27,
            column: 5
          }
        },
        line: 21
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 23,
            column: 58
          },
          end: {
            line: 23,
            column: 59
          }
        },
        loc: {
          start: {
            line: 23,
            column: 74
          },
          end: {
            line: 26,
            column: 9
          }
        },
        line: 23
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 30,
            column: 15
          },
          end: {
            line: 30,
            column: 16
          }
        },
        loc: {
          start: {
            line: 30,
            column: 40
          },
          end: {
            line: 32,
            column: 5
          }
        },
        line: 30
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 35,
            column: 22
          },
          end: {
            line: 35,
            column: 23
          }
        },
        loc: {
          start: {
            line: 35,
            column: 31
          },
          end: {
            line: 35,
            column: 43
          }
        },
        line: 35
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 16
          },
          end: {
            line: 14,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 11,
            column: 16
          },
          end: {
            line: 14,
            column: 17
          }
        }, {
          start: {
            line: 11,
            column: 16
          },
          end: {
            line: 14,
            column: 17
          }
        }],
        line: 11
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "21c2a5b612e9b8db51ca51e283128023bc45be98"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2e57n4q8ze = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2e57n4q8ze();

var state = (cov_2e57n4q8ze().s[0]++, {
  imageContent: ''
});
var actions = (cov_2e57n4q8ze().s[1]++, {
  uploadLayout: function uploadLayout(_ref, _ref2) {
    var dispatch = _ref.dispatch,
        rootGetters = _ref.rootGetters;
    var imageInformation = _ref2.imageInformation,
        router = _ref2.router;
    cov_2e57n4q8ze().f[0]++;
    var floorLayoutService = (cov_2e57n4q8ze().s[2]++, new _services__WEBPACK_IMPORTED_MODULE_0__["FloorLayoutService"](rootGetters['account/token']));
    cov_2e57n4q8ze().s[3]++;
    floorLayoutService.uploadLayout(imageInformation).then(function (data) {
      cov_2e57n4q8ze().f[1]++;
      cov_2e57n4q8ze().s[4]++;

      if (data) {
        cov_2e57n4q8ze().b[0][0]++;
        cov_2e57n4q8ze().s[5]++;
        dispatch('alert/success', 'Layout successfully uploaded', {
          root: true
        });
        cov_2e57n4q8ze().s[6]++;
        router.push('/office-management/plans');
      } else {
        cov_2e57n4q8ze().b[0][1]++;
      }
    }, function (error) {
      cov_2e57n4q8ze().f[2]++;
      cov_2e57n4q8ze().s[7]++;
      dispatch('alert/error', error.response.data.errors[0], {
        root: true
      });
    });
  },
  getLayout: function getLayout(_ref3, floorId) {
    var commit = _ref3.commit,
        rootGetters = _ref3.rootGetters;
    cov_2e57n4q8ze().f[3]++;
    var floorLayoutService = (cov_2e57n4q8ze().s[8]++, new _services__WEBPACK_IMPORTED_MODULE_0__["FloorLayoutService"](rootGetters['account/token']));
    cov_2e57n4q8ze().s[9]++;
    return floorLayoutService.getLayout(floorId).then(function (imageContent) {
      cov_2e57n4q8ze().f[4]++;
      cov_2e57n4q8ze().s[10]++;
      commit('setLayout', imageContent);
      cov_2e57n4q8ze().s[11]++;
      return imageContent;
    });
  }
});
var mutations = (cov_2e57n4q8ze().s[12]++, {
  setLayout: function setLayout(state, imageContent) {
    cov_2e57n4q8ze().f[5]++;
    cov_2e57n4q8ze().s[13]++;
    state.imageContent = imageContent.floorLayoutImage;
  }
});
var getters = (cov_2e57n4q8ze().s[14]++, {
  floorLayoutState: function floorLayoutState(state) {
    cov_2e57n4q8ze().f[6]++;
    cov_2e57n4q8ze().s[15]++;
    return state.status;
  }
});
var floorLayout = (cov_2e57n4q8ze().s[16]++, {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters
});

/***/ }),

/***/ "./src/store/kitchens.module.js":
/*!**************************************!*\
  !*** ./src/store/kitchens.module.js ***!
  \**************************************/
/*! exports provided: kitchens */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "kitchens", function() { return kitchens; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services */ "./src/services/index.js");
function cov_err4g0up1() {
  var path = "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\kitchens.module.js";
  var hash = "c15187106f65dd19fcfea5950beef3c2f8ee7a6b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\kitchens.module.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 14
        },
        end: {
          line: 3,
          column: 16
        }
      },
      "1": {
        start: {
          line: 5,
          column: 16
        },
        end: {
          line: 21,
          column: 1
        }
      },
      "2": {
        start: {
          line: 7,
          column: 31
        },
        end: {
          line: 7,
          column: 91
        }
      },
      "3": {
        start: {
          line: 8,
          column: 8
        },
        end: {
          line: 19,
          column: 9
        }
      },
      "4": {
        start: {
          line: 10,
          column: 16
        },
        end: {
          line: 13,
          column: 17
        }
      },
      "5": {
        start: {
          line: 11,
          column: 20
        },
        end: {
          line: 11,
          column: 94
        }
      },
      "6": {
        start: {
          line: 12,
          column: 20
        },
        end: {
          line: 12,
          column: 83
        }
      },
      "7": {
        start: {
          line: 16,
          column: 16
        },
        end: {
          line: 16,
          column: 84
        }
      },
      "8": {
        start: {
          line: 17,
          column: 16
        },
        end: {
          line: 17,
          column: 79
        }
      },
      "9": {
        start: {
          line: 22,
          column: 18
        },
        end: {
          line: 22,
          column: 20
        }
      },
      "10": {
        start: {
          line: 24,
          column: 16
        },
        end: {
          line: 26,
          column: 1
        }
      },
      "11": {
        start: {
          line: 25,
          column: 27
        },
        end: {
          line: 25,
          column: 39
        }
      },
      "12": {
        start: {
          line: 27,
          column: 24
        },
        end: {
          line: 33,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 6,
            column: 5
          }
        },
        loc: {
          start: {
            line: 6,
            column: 52
          },
          end: {
            line: 20,
            column: 5
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 12
          },
          end: {
            line: 9,
            column: 13
          }
        },
        loc: {
          start: {
            line: 9,
            column: 20
          },
          end: {
            line: 14,
            column: 13
          }
        },
        line: 9
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 15,
            column: 12
          },
          end: {
            line: 15,
            column: 13
          }
        },
        loc: {
          start: {
            line: 15,
            column: 21
          },
          end: {
            line: 18,
            column: 13
          }
        },
        line: 15
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 25,
            column: 18
          },
          end: {
            line: 25,
            column: 19
          }
        },
        loc: {
          start: {
            line: 25,
            column: 27
          },
          end: {
            line: 25,
            column: 39
          }
        },
        line: 25
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 16
          },
          end: {
            line: 13,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 16
          },
          end: {
            line: 13,
            column: 17
          }
        }, {
          start: {
            line: 10,
            column: 16
          },
          end: {
            line: 13,
            column: 17
          }
        }],
        line: 10
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c15187106f65dd19fcfea5950beef3c2f8ee7a6b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_err4g0up1 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_err4g0up1();

var state = (cov_err4g0up1().s[0]++, {});
var actions = (cov_err4g0up1().s[1]++, {
  postKitchen: function postKitchen(_ref, kitchen) {
    var dispatch = _ref.dispatch,
        rootGetters = _ref.rootGetters;
    cov_err4g0up1().f[0]++;
    var kitchenService = (cov_err4g0up1().s[2]++, new _services__WEBPACK_IMPORTED_MODULE_0__["KitchenService"](rootGetters['account/token']));
    cov_err4g0up1().s[3]++;
    kitchenService.postKitchen(kitchen).then(function (data) {
      cov_err4g0up1().f[1]++;
      cov_err4g0up1().s[4]++;

      if (data) {
        cov_err4g0up1().b[0][0]++;
        cov_err4g0up1().s[5]++;
        dispatch('alert/success', 'Kitchen successfully uploaded', {
          root: true
        });
        cov_err4g0up1().s[6]++;
        dispatch('assetInteraction/setReloadMap', true, {
          root: true
        });
      } else {
        cov_err4g0up1().b[0][1]++;
      }
    }, function (error) {
      cov_err4g0up1().f[2]++;
      cov_err4g0up1().s[7]++;
      dispatch('alert/error', error.response.data.Message, {
        root: true
      });
      cov_err4g0up1().s[8]++;
      dispatch('assetInteraction/setReloadMap', true, {
        root: true
      });
    });
  }
});
var mutations = (cov_err4g0up1().s[9]++, {});
var getters = (cov_err4g0up1().s[10]++, {
  kitchenState: function kitchenState(state) {
    cov_err4g0up1().f[3]++;
    cov_err4g0up1().s[11]++;
    return state.status;
  }
});
var kitchens = (cov_err4g0up1().s[12]++, {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters
});

/***/ }),

/***/ "./src/store/mapInteractions.module.js":
/*!*********************************************!*\
  !*** ./src/store/mapInteractions.module.js ***!
  \*********************************************/
/*! exports provided: mapInteractions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapInteractions", function() { return mapInteractions; });
function cov_ooqacynig() {
  var path = "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\mapInteractions.module.js";
  var hash = "3b4fe5abdf05e190ae042213abe0d63be1630665";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\mapInteractions.module.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 14
        },
        end: {
          line: 5,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 16
        },
        end: {
          line: 20,
          column: 1
        }
      },
      "2": {
        start: {
          line: 9,
          column: 8
        },
        end: {
          line: 9,
          column: 42
        }
      },
      "3": {
        start: {
          line: 12,
          column: 8
        },
        end: {
          line: 12,
          column: 39
        }
      },
      "4": {
        start: {
          line: 15,
          column: 8
        },
        end: {
          line: 15,
          column: 41
        }
      },
      "5": {
        start: {
          line: 18,
          column: 8
        },
        end: {
          line: 18,
          column: 48
        }
      },
      "6": {
        start: {
          line: 22,
          column: 18
        },
        end: {
          line: 33,
          column: 1
        }
      },
      "7": {
        start: {
          line: 24,
          column: 8
        },
        end: {
          line: 24,
          column: 37
        }
      },
      "8": {
        start: {
          line: 27,
          column: 8
        },
        end: {
          line: 27,
          column: 37
        }
      },
      "9": {
        start: {
          line: 30,
          column: 8
        },
        end: {
          line: 30,
          column: 44
        }
      },
      "10": {
        start: {
          line: 31,
          column: 8
        },
        end: {
          line: 31,
          column: 46
        }
      },
      "11": {
        start: {
          line: 35,
          column: 31
        },
        end: {
          line: 40,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 4
          },
          end: {
            line: 8,
            column: 5
          }
        },
        loc: {
          start: {
            line: 8,
            column: 38
          },
          end: {
            line: 10,
            column: 5
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 11,
            column: 5
          }
        },
        loc: {
          start: {
            line: 11,
            column: 35
          },
          end: {
            line: 13,
            column: 5
          }
        },
        line: 11
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 14,
            column: 4
          },
          end: {
            line: 14,
            column: 5
          }
        },
        loc: {
          start: {
            line: 14,
            column: 26
          },
          end: {
            line: 16,
            column: 5
          }
        },
        line: 14
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 17,
            column: 5
          }
        },
        loc: {
          start: {
            line: 17,
            column: 44
          },
          end: {
            line: 19,
            column: 5
          }
        },
        line: 17
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 23,
            column: 17
          },
          end: {
            line: 23,
            column: 18
          }
        },
        loc: {
          start: {
            line: 23,
            column: 40
          },
          end: {
            line: 25,
            column: 5
          }
        },
        line: 23
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 26,
            column: 17
          },
          end: {
            line: 26,
            column: 18
          }
        },
        loc: {
          start: {
            line: 26,
            column: 37
          },
          end: {
            line: 28,
            column: 5
          }
        },
        line: 26
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 29,
            column: 25
          },
          end: {
            line: 29,
            column: 26
          }
        },
        loc: {
          start: {
            line: 29,
            column: 46
          },
          end: {
            line: 32,
            column: 5
          }
        },
        line: 29
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3b4fe5abdf05e190ae042213abe0d63be1630665"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_ooqacynig = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_ooqacynig();
var state = (cov_ooqacynig().s[0]++, {
  newFloorId: undefined,
  assetSelected: undefined
});
var actions = (cov_ooqacynig().s[1]++, {
  changeFloor: function changeFloor(_ref, newFloorId) {
    var commit = _ref.commit;
    cov_ooqacynig().f[0]++;
    cov_ooqacynig().s[2]++;
    commit('changeFloor', newFloorId);
  },
  selectAsset: function selectAsset(_ref2, assetId) {
    var commit = _ref2.commit;
    cov_ooqacynig().f[1]++;
    cov_ooqacynig().s[3]++;
    commit('selectAsset', assetId);
  },
  removeAsset: function removeAsset(_ref3) {
    var commit = _ref3.commit;
    cov_ooqacynig().f[2]++;
    cov_ooqacynig().s[4]++;
    commit('selectAsset', undefined);
  },
  changeFloorAndAsset: function changeFloorAndAsset(_ref4, location) {
    var commit = _ref4.commit;
    cov_ooqacynig().f[3]++;
    cov_ooqacynig().s[5]++;
    commit('changeFloorAndAsset', location);
  }
});
var mutations = (cov_ooqacynig().s[6]++, {
  changeFloor: function changeFloor(state, newFloorId) {
    cov_ooqacynig().f[4]++;
    cov_ooqacynig().s[7]++;
    state.newFloorId = newFloorId;
  },
  selectAsset: function selectAsset(state, assetId) {
    cov_ooqacynig().f[5]++;
    cov_ooqacynig().s[8]++;
    state.assetSelected = assetId;
  },
  changeFloorAndAsset: function changeFloorAndAsset(state, location) {
    cov_ooqacynig().f[6]++;
    cov_ooqacynig().s[9]++;
    state.newFloorId = location.floorId;
    cov_ooqacynig().s[10]++;
    state.assetSelected = location.deskId;
  }
});
var mapInteractions = (cov_ooqacynig().s[11]++, {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations
});

/***/ }),

/***/ "./src/store/meetingRooms.module.js":
/*!******************************************!*\
  !*** ./src/store/meetingRooms.module.js ***!
  \******************************************/
/*! exports provided: meetingRooms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "meetingRooms", function() { return meetingRooms; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services */ "./src/services/index.js");
function cov_2hru4cgpgr() {
  var path = "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\meetingRooms.module.js";
  var hash = "397173ce2b7e0fcd62a71342c824d2f141e6c211";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\meetingRooms.module.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 14
        },
        end: {
          line: 5,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 16
        },
        end: {
          line: 33,
          column: 1
        }
      },
      "2": {
        start: {
          line: 9,
          column: 36
        },
        end: {
          line: 9,
          column: 101
        }
      },
      "3": {
        start: {
          line: 10,
          column: 8
        },
        end: {
          line: 21,
          column: 9
        }
      },
      "4": {
        start: {
          line: 12,
          column: 16
        },
        end: {
          line: 15,
          column: 17
        }
      },
      "5": {
        start: {
          line: 13,
          column: 20
        },
        end: {
          line: 13,
          column: 83
        }
      },
      "6": {
        start: {
          line: 14,
          column: 20
        },
        end: {
          line: 14,
          column: 99
        }
      },
      "7": {
        start: {
          line: 18,
          column: 16
        },
        end: {
          line: 18,
          column: 79
        }
      },
      "8": {
        start: {
          line: 19,
          column: 16
        },
        end: {
          line: 19,
          column: 84
        }
      },
      "9": {
        start: {
          line: 24,
          column: 36
        },
        end: {
          line: 24,
          column: 101
        }
      },
      "10": {
        start: {
          line: 25,
          column: 8
        },
        end: {
          line: 31,
          column: 9
        }
      },
      "11": {
        start: {
          line: 26,
          column: 12
        },
        end: {
          line: 28,
          column: 14
        }
      },
      "12": {
        start: {
          line: 27,
          column: 16
        },
        end: {
          line: 27,
          column: 67
        }
      },
      "13": {
        start: {
          line: 30,
          column: 12
        },
        end: {
          line: 30,
          column: 49
        }
      },
      "14": {
        start: {
          line: 35,
          column: 18
        },
        end: {
          line: 39,
          column: 1
        }
      },
      "15": {
        start: {
          line: 37,
          column: 8
        },
        end: {
          line: 37,
          column: 53
        }
      },
      "16": {
        start: {
          line: 41,
          column: 16
        },
        end: {
          line: 43,
          column: 1
        }
      },
      "17": {
        start: {
          line: 42,
          column: 32
        },
        end: {
          line: 42,
          column: 44
        }
      },
      "18": {
        start: {
          line: 45,
          column: 28
        },
        end: {
          line: 51,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 4
          },
          end: {
            line: 8,
            column: 5
          }
        },
        loc: {
          start: {
            line: 8,
            column: 60
          },
          end: {
            line: 22,
            column: 5
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 11,
            column: 12
          },
          end: {
            line: 11,
            column: 13
          }
        },
        loc: {
          start: {
            line: 11,
            column: 20
          },
          end: {
            line: 16,
            column: 13
          }
        },
        line: 11
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 17,
            column: 12
          },
          end: {
            line: 17,
            column: 13
          }
        },
        loc: {
          start: {
            line: 17,
            column: 21
          },
          end: {
            line: 20,
            column: 13
          }
        },
        line: 17
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 23,
            column: 5
          }
        },
        loc: {
          start: {
            line: 23,
            column: 66
          },
          end: {
            line: 32,
            column: 5
          }
        },
        line: 23
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 26,
            column: 74
          },
          end: {
            line: 26,
            column: 75
          }
        },
        loc: {
          start: {
            line: 26,
            column: 96
          },
          end: {
            line: 28,
            column: 13
          }
        },
        line: 26
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 36,
            column: 27
          },
          end: {
            line: 36,
            column: 28
          }
        },
        loc: {
          start: {
            line: 36,
            column: 58
          },
          end: {
            line: 38,
            column: 5
          }
        },
        line: 36
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 42,
            column: 23
          },
          end: {
            line: 42,
            column: 24
          }
        },
        loc: {
          start: {
            line: 42,
            column: 32
          },
          end: {
            line: 42,
            column: 44
          }
        },
        line: 42
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 12,
            column: 16
          },
          end: {
            line: 15,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 12,
            column: 16
          },
          end: {
            line: 15,
            column: 17
          }
        }, {
          start: {
            line: 12,
            column: 16
          },
          end: {
            line: 15,
            column: 17
          }
        }],
        line: 12
      },
      "1": {
        loc: {
          start: {
            line: 25,
            column: 8
          },
          end: {
            line: 31,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 25,
            column: 8
          },
          end: {
            line: 31,
            column: 9
          }
        }, {
          start: {
            line: 25,
            column: 8
          },
          end: {
            line: 31,
            column: 9
          }
        }],
        line: 25
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "397173ce2b7e0fcd62a71342c824d2f141e6c211"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2hru4cgpgr = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2hru4cgpgr();

var state = (cov_2hru4cgpgr().s[0]++, {
  meetingRoomDetails: null
});
var actions = (cov_2hru4cgpgr().s[1]++, {
  postMeetingRoom: function postMeetingRoom(_ref, meetingRoom) {
    var dispatch = _ref.dispatch,
        rootGetters = _ref.rootGetters;
    cov_2hru4cgpgr().f[0]++;
    var meetingRoomsService = (cov_2hru4cgpgr().s[2]++, new _services__WEBPACK_IMPORTED_MODULE_0__["MeetingRoomsService"](rootGetters['account/token']));
    cov_2hru4cgpgr().s[3]++;
    meetingRoomsService.postMeetingRoom(meetingRoom).then(function (data) {
      cov_2hru4cgpgr().f[1]++;
      cov_2hru4cgpgr().s[4]++;

      if (data) {
        cov_2hru4cgpgr().b[0][0]++;
        cov_2hru4cgpgr().s[5]++;
        dispatch('assetInteraction/setReloadMap', true, {
          root: true
        });
        cov_2hru4cgpgr().s[6]++;
        dispatch('alert/success', 'Meeting room successfully uploaded', {
          root: true
        });
      } else {
        cov_2hru4cgpgr().b[0][1]++;
      }
    }, function (error) {
      cov_2hru4cgpgr().f[2]++;
      cov_2hru4cgpgr().s[7]++;
      dispatch('assetInteraction/setReloadMap', true, {
        root: true
      });
      cov_2hru4cgpgr().s[8]++;
      dispatch('alert/error', error.response.data.Message, {
        root: true
      });
    });
  },
  getMeetingRoomDetails: function getMeetingRoomDetails(_ref2, meetingRoomId) {
    var commit = _ref2.commit,
        rootGetters = _ref2.rootGetters;
    cov_2hru4cgpgr().f[3]++;
    var meetingRoomsService = (cov_2hru4cgpgr().s[9]++, new _services__WEBPACK_IMPORTED_MODULE_0__["MeetingRoomsService"](rootGetters['account/token']));
    cov_2hru4cgpgr().s[10]++;

    if (meetingRoomId) {
      cov_2hru4cgpgr().b[1][0]++;
      cov_2hru4cgpgr().s[11]++;
      meetingRoomsService.getMeetingRoomDetails(meetingRoomId).then(function (meetingRoomDetails) {
        cov_2hru4cgpgr().f[4]++;
        cov_2hru4cgpgr().s[12]++;
        commit('setMeetingRoomDetails', meetingRoomDetails);
      });
    } else {
      cov_2hru4cgpgr().b[1][1]++;
      cov_2hru4cgpgr().s[13]++;
      commit('setMeetingRoomDetails', null);
    }
  }
});
var mutations = (cov_2hru4cgpgr().s[14]++, {
  setMeetingRoomDetails: function setMeetingRoomDetails(state, meetingRoomDetails) {
    cov_2hru4cgpgr().f[5]++;
    cov_2hru4cgpgr().s[15]++;
    state.meetingRoomDetails = meetingRoomDetails;
  }
});
var getters = (cov_2hru4cgpgr().s[16]++, {
  meetingRoomsState: function meetingRoomsState(state) {
    cov_2hru4cgpgr().f[6]++;
    cov_2hru4cgpgr().s[17]++;
    return state.status;
  }
});
var meetingRooms = (cov_2hru4cgpgr().s[18]++, {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters
});

/***/ }),

/***/ "./src/store/navbar.module.js":
/*!************************************!*\
  !*** ./src/store/navbar.module.js ***!
  \************************************/
/*! exports provided: navbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navbar", function() { return navbar; });
function cov_jmdst0s7z() {
  var path = "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\navbar.module.js";
  var hash = "914aabb596b7fcd7f97e7c9c8a7333370050a495";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\navbar.module.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 14
        },
        end: {
          line: 4,
          column: 1
        }
      },
      "1": {
        start: {
          line: 6,
          column: 16
        },
        end: {
          line: 13,
          column: 1
        }
      },
      "2": {
        start: {
          line: 8,
          column: 8
        },
        end: {
          line: 8,
          column: 36
        }
      },
      "3": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 11,
          column: 37
        }
      },
      "4": {
        start: {
          line: 15,
          column: 18
        },
        end: {
          line: 19,
          column: 1
        }
      },
      "5": {
        start: {
          line: 17,
          column: 8
        },
        end: {
          line: 17,
          column: 40
        }
      },
      "6": {
        start: {
          line: 21,
          column: 22
        },
        end: {
          line: 26,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 4
          },
          end: {
            line: 7,
            column: 5
          }
        },
        loc: {
          start: {
            line: 7,
            column: 25
          },
          end: {
            line: 9,
            column: 5
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 10,
            column: 4
          },
          end: {
            line: 10,
            column: 5
          }
        },
        loc: {
          start: {
            line: 10,
            column: 25
          },
          end: {
            line: 12,
            column: 5
          }
        },
        line: 10
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 16,
            column: 18
          },
          end: {
            line: 16,
            column: 19
          }
        },
        loc: {
          start: {
            line: 16,
            column: 42
          },
          end: {
            line: 18,
            column: 5
          }
        },
        line: 16
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "914aabb596b7fcd7f97e7c9c8a7333370050a495"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_jmdst0s7z = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_jmdst0s7z();
var state = (cov_jmdst0s7z().s[0]++, {
  sliderHidden: false
});
var actions = (cov_jmdst0s7z().s[1]++, {
  hideSlider: function hideSlider(_ref) {
    var commit = _ref.commit;
    cov_jmdst0s7z().f[0]++;
    cov_jmdst0s7z().s[2]++;
    commit('changeSlider', true);
  },
  showSlider: function showSlider(_ref2) {
    var commit = _ref2.commit;
    cov_jmdst0s7z().f[1]++;
    cov_jmdst0s7z().s[3]++;
    commit('changeSlider', false);
  }
});
var mutations = (cov_jmdst0s7z().s[4]++, {
  changeSlider: function changeSlider(state, sliderValue) {
    cov_jmdst0s7z().f[2]++;
    cov_jmdst0s7z().s[5]++;
    state.sliderHidden = sliderValue;
  }
});
var navbar = (cov_jmdst0s7z().s[6]++, {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations
});

/***/ }),

/***/ "./src/store/placePeople.module.js":
/*!*****************************************!*\
  !*** ./src/store/placePeople.module.js ***!
  \*****************************************/
/*! exports provided: placePeople */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placePeople", function() { return placePeople; });
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/services */ "./src/services/index.js");
function cov_lv1uwn55z() {
  var path = "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\placePeople.module.js";
  var hash = "7b0a82fff1f061f0a466a97c33790328edcd5a8f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\placePeople.module.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 14
        },
        end: {
          line: 8,
          column: 1
        }
      },
      "1": {
        start: {
          line: 10,
          column: 16
        },
        end: {
          line: 44,
          column: 1
        }
      },
      "2": {
        start: {
          line: 12,
          column: 35
        },
        end: {
          line: 12,
          column: 99
        }
      },
      "3": {
        start: {
          line: 13,
          column: 8
        },
        end: {
          line: 22,
          column: 9
        }
      },
      "4": {
        start: {
          line: 15,
          column: 16
        },
        end: {
          line: 17,
          column: 17
        }
      },
      "5": {
        start: {
          line: 16,
          column: 20
        },
        end: {
          line: 16,
          column: 91
        }
      },
      "6": {
        start: {
          line: 20,
          column: 16
        },
        end: {
          line: 20,
          column: 84
        }
      },
      "7": {
        start: {
          line: 23,
          column: 8
        },
        end: {
          line: 23,
          column: 32
        }
      },
      "8": {
        start: {
          line: 24,
          column: 8
        },
        end: {
          line: 24,
          column: 36
        }
      },
      "9": {
        start: {
          line: 27,
          column: 35
        },
        end: {
          line: 27,
          column: 99
        }
      },
      "10": {
        start: {
          line: 28,
          column: 8
        },
        end: {
          line: 30,
          column: 10
        }
      },
      "11": {
        start: {
          line: 29,
          column: 12
        },
        end: {
          line: 29,
          column: 51
        }
      },
      "12": {
        start: {
          line: 33,
          column: 8
        },
        end: {
          line: 33,
          column: 50
        }
      },
      "13": {
        start: {
          line: 36,
          column: 8
        },
        end: {
          line: 36,
          column: 62
        }
      },
      "14": {
        start: {
          line: 39,
          column: 8
        },
        end: {
          line: 39,
          column: 32
        }
      },
      "15": {
        start: {
          line: 42,
          column: 8
        },
        end: {
          line: 42,
          column: 44
        }
      },
      "16": {
        start: {
          line: 46,
          column: 18
        },
        end: {
          line: 63,
          column: 1
        }
      },
      "17": {
        start: {
          line: 48,
          column: 8
        },
        end: {
          line: 48,
          column: 41
        }
      },
      "18": {
        start: {
          line: 51,
          column: 8
        },
        end: {
          line: 51,
          column: 44
        }
      },
      "19": {
        start: {
          line: 54,
          column: 8
        },
        end: {
          line: 54,
          column: 56
        }
      },
      "20": {
        start: {
          line: 57,
          column: 8
        },
        end: {
          line: 57,
          column: 38
        }
      },
      "21": {
        start: {
          line: 58,
          column: 8
        },
        end: {
          line: 58,
          column: 44
        }
      },
      "22": {
        start: {
          line: 61,
          column: 8
        },
        end: {
          line: 61,
          column: 43
        }
      },
      "23": {
        start: {
          line: 65,
          column: 16
        },
        end: {
          line: 67,
          column: 1
        }
      },
      "24": {
        start: {
          line: 66,
          column: 31
        },
        end: {
          line: 66,
          column: 43
        }
      },
      "25": {
        start: {
          line: 69,
          column: 27
        },
        end: {
          line: 75,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 11,
            column: 5
          }
        },
        loc: {
          start: {
            line: 11,
            column: 70
          },
          end: {
            line: 25,
            column: 5
          }
        },
        line: 11
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 14,
            column: 12
          },
          end: {
            line: 14,
            column: 13
          }
        },
        loc: {
          start: {
            line: 14,
            column: 20
          },
          end: {
            line: 18,
            column: 13
          }
        },
        line: 14
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 19,
            column: 12
          },
          end: {
            line: 19,
            column: 13
          }
        },
        loc: {
          start: {
            line: 19,
            column: 21
          },
          end: {
            line: 21,
            column: 13
          }
        },
        line: 19
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 26,
            column: 4
          },
          end: {
            line: 26,
            column: 5
          }
        },
        loc: {
          start: {
            line: 26,
            column: 45
          },
          end: {
            line: 31,
            column: 5
          }
        },
        line: 26
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 28,
            column: 50
          },
          end: {
            line: 28,
            column: 51
          }
        },
        loc: {
          start: {
            line: 28,
            column: 66
          },
          end: {
            line: 30,
            column: 9
          }
        },
        line: 28
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 32,
            column: 4
          },
          end: {
            line: 32,
            column: 5
          }
        },
        loc: {
          start: {
            line: 32,
            column: 49
          },
          end: {
            line: 34,
            column: 5
          }
        },
        line: 32
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 35,
            column: 4
          },
          end: {
            line: 35,
            column: 5
          }
        },
        loc: {
          start: {
            line: 35,
            column: 61
          },
          end: {
            line: 37,
            column: 5
          }
        },
        line: 35
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 38,
            column: 4
          },
          end: {
            line: 38,
            column: 5
          }
        },
        loc: {
          start: {
            line: 38,
            column: 31
          },
          end: {
            line: 40,
            column: 5
          }
        },
        line: 38
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 41,
            column: 4
          },
          end: {
            line: 41,
            column: 5
          }
        },
        loc: {
          start: {
            line: 41,
            column: 43
          },
          end: {
            line: 43,
            column: 5
          }
        },
        line: 41
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 47,
            column: 21
          },
          end: {
            line: 47,
            column: 22
          }
        },
        loc: {
          start: {
            line: 47,
            column: 46
          },
          end: {
            line: 49,
            column: 5
          }
        },
        line: 47
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 50,
            column: 21
          },
          end: {
            line: 50,
            column: 22
          }
        },
        loc: {
          start: {
            line: 50,
            column: 49
          },
          end: {
            line: 52,
            column: 5
          }
        },
        line: 50
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 53,
            column: 27
          },
          end: {
            line: 53,
            column: 28
          }
        },
        loc: {
          start: {
            line: 53,
            column: 61
          },
          end: {
            line: 55,
            column: 5
          }
        },
        line: 53
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 56,
            column: 20
          },
          end: {
            line: 56,
            column: 21
          }
        },
        loc: {
          start: {
            line: 56,
            column: 29
          },
          end: {
            line: 59,
            column: 5
          }
        },
        line: 56
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 60,
            column: 18
          },
          end: {
            line: 60,
            column: 19
          }
        },
        loc: {
          start: {
            line: 60,
            column: 48
          },
          end: {
            line: 62,
            column: 5
          }
        },
        line: 60
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 66,
            column: 22
          },
          end: {
            line: 66,
            column: 23
          }
        },
        loc: {
          start: {
            line: 66,
            column: 31
          },
          end: {
            line: 66,
            column: 43
          }
        },
        line: 66
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
            column: 16
          },
          end: {
            line: 17,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 15,
            column: 16
          },
          end: {
            line: 17,
            column: 17
          }
        }, {
          start: {
            line: 15,
            column: 16
          },
          end: {
            line: 17,
            column: 17
          }
        }],
        line: 15
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "7b0a82fff1f061f0a466a97c33790328edcd5a8f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_lv1uwn55z = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_lv1uwn55z();

var state = (cov_lv1uwn55z().s[0]++, {
  employeeList: [],
  selectedDesk: undefined,
  selectedEmployeeId: undefined,
  reloadMap: false
});
var actions = (cov_lv1uwn55z().s[1]++, {
  postDeskEmployee: function postDeskEmployee(_ref, deskEmployee) {
    var dispatch = _ref.dispatch,
        commit = _ref.commit,
        rootGetters = _ref.rootGetters;
    cov_lv1uwn55z().f[0]++;
    var placePeopleService = (cov_lv1uwn55z().s[2]++, new _services__WEBPACK_IMPORTED_MODULE_0__["PlacePeopleService"](rootGetters['account/token']));
    cov_lv1uwn55z().s[3]++;
    placePeopleService.postDeskEmployee(deskEmployee.deskId, deskEmployee.employeeId).then(function (data) {
      cov_lv1uwn55z().f[1]++;
      cov_lv1uwn55z().s[4]++;

      if (data) {
        cov_lv1uwn55z().b[0][0]++;
        cov_lv1uwn55z().s[5]++;
        dispatch('alert/success', 'Desk successfully assigned', {
          root: true
        });
      } else {
        cov_lv1uwn55z().b[0][1]++;
      }
    }, function (error) {
      cov_lv1uwn55z().f[2]++;
      cov_lv1uwn55z().s[6]++;
      dispatch('alert/error', error.response.data.Message, {
        root: true
      });
    });
    cov_lv1uwn55z().s[7]++;
    commit('clearSelection');
    cov_lv1uwn55z().s[8]++;
    commit('setReloadMap', true);
  },
  getAllEmployees: function getAllEmployees(_ref2) {
    var commit = _ref2.commit,
        rootGetters = _ref2.rootGetters;
    cov_lv1uwn55z().f[3]++;
    var placePeopleService = (cov_lv1uwn55z().s[9]++, new _services__WEBPACK_IMPORTED_MODULE_0__["PlacePeopleService"](rootGetters['account/token']));
    cov_lv1uwn55z().s[10]++;
    placePeopleService.getAllEmployees().then(function (employeeList) {
      cov_lv1uwn55z().f[4]++;
      cov_lv1uwn55z().s[11]++;
      commit('setEmployeeList', employeeList);
    });
  },
  setSelectedDesk: function setSelectedDesk(_ref3, newSelectedDesk) {
    var commit = _ref3.commit;
    cov_lv1uwn55z().f[5]++;
    cov_lv1uwn55z().s[12]++;
    commit('setSelectedDesk', newSelectedDesk);
  },
  setSelectedEmployeeId: function setSelectedEmployeeId(_ref4, newSelectedEmployeeId) {
    var commit = _ref4.commit;
    cov_lv1uwn55z().f[6]++;
    cov_lv1uwn55z().s[13]++;
    commit('setSelectedEmployeeId', newSelectedEmployeeId);
  },
  clearSelection: function clearSelection(_ref5) {
    var commit = _ref5.commit;
    cov_lv1uwn55z().f[7]++;
    cov_lv1uwn55z().s[14]++;
    commit('clearSelection');
  },
  setReloadMap: function setReloadMap(_ref6, newReloadMap) {
    var commit = _ref6.commit;
    cov_lv1uwn55z().f[8]++;
    cov_lv1uwn55z().s[15]++;
    commit('setReloadMap', newReloadMap);
  }
});
var mutations = (cov_lv1uwn55z().s[16]++, {
  setEmployeeList: function setEmployeeList(state, employeeList) {
    cov_lv1uwn55z().f[9]++;
    cov_lv1uwn55z().s[17]++;
    state.employeeList = employeeList;
  },
  setSelectedDesk: function setSelectedDesk(state, newSelectedDesk) {
    cov_lv1uwn55z().f[10]++;
    cov_lv1uwn55z().s[18]++;
    state.selectedDesk = newSelectedDesk;
  },
  setSelectedEmployeeId: function setSelectedEmployeeId(state, newSelectedEmployeeId) {
    cov_lv1uwn55z().f[11]++;
    cov_lv1uwn55z().s[19]++;
    state.selectedEmployeeId = newSelectedEmployeeId;
  },
  clearSelection: function clearSelection(state) {
    cov_lv1uwn55z().f[12]++;
    cov_lv1uwn55z().s[20]++;
    state.selectedDesk = undefined;
    cov_lv1uwn55z().s[21]++;
    state.selectedEmployeeId = undefined;
  },
  setReloadMap: function setReloadMap(state, newReloadMapState) {
    cov_lv1uwn55z().f[13]++;
    cov_lv1uwn55z().s[22]++;
    state.reloadMap = newReloadMapState;
  }
});
var getters = (cov_lv1uwn55z().s[23]++, {
  placePeopleState: function placePeopleState(state) {
    cov_lv1uwn55z().f[14]++;
    cov_lv1uwn55z().s[24]++;
    return state.status;
  }
});
var placePeople = (cov_lv1uwn55z().s[25]++, {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters
});

/***/ }),

/***/ "./src/store/printers.module.js":
/*!**************************************!*\
  !*** ./src/store/printers.module.js ***!
  \**************************************/
/*! exports provided: printers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printers", function() { return printers; });
/* harmony import */ var _services_printer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/printer.service */ "./src/services/printer.service.js");
function cov_cj15u5uoa() {
  var path = "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\printers.module.js";
  var hash = "a3053d8ca7ecd8903cb60df1c80e6c36c8f9f27e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\printers.module.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 14
        },
        end: {
          line: 4,
          column: 1
        }
      },
      "1": {
        start: {
          line: 6,
          column: 16
        },
        end: {
          line: 21,
          column: 1
        }
      },
      "2": {
        start: {
          line: 8,
          column: 8
        },
        end: {
          line: 19,
          column: 9
        }
      },
      "3": {
        start: {
          line: 10,
          column: 16
        },
        end: {
          line: 13,
          column: 17
        }
      },
      "4": {
        start: {
          line: 11,
          column: 20
        },
        end: {
          line: 11,
          column: 94
        }
      },
      "5": {
        start: {
          line: 12,
          column: 20
        },
        end: {
          line: 12,
          column: 83
        }
      },
      "6": {
        start: {
          line: 16,
          column: 16
        },
        end: {
          line: 16,
          column: 84
        }
      },
      "7": {
        start: {
          line: 17,
          column: 16
        },
        end: {
          line: 17,
          column: 79
        }
      },
      "8": {
        start: {
          line: 22,
          column: 18
        },
        end: {
          line: 23,
          column: 1
        }
      },
      "9": {
        start: {
          line: 25,
          column: 16
        },
        end: {
          line: 27,
          column: 1
        }
      },
      "10": {
        start: {
          line: 26,
          column: 27
        },
        end: {
          line: 26,
          column: 39
        }
      },
      "11": {
        start: {
          line: 28,
          column: 24
        },
        end: {
          line: 34,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 4
          },
          end: {
            line: 7,
            column: 5
          }
        },
        loc: {
          start: {
            line: 7,
            column: 37
          },
          end: {
            line: 20,
            column: 5
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 12
          },
          end: {
            line: 9,
            column: 13
          }
        },
        loc: {
          start: {
            line: 9,
            column: 20
          },
          end: {
            line: 14,
            column: 13
          }
        },
        line: 9
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 15,
            column: 12
          },
          end: {
            line: 15,
            column: 13
          }
        },
        loc: {
          start: {
            line: 15,
            column: 21
          },
          end: {
            line: 18,
            column: 13
          }
        },
        line: 15
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 26,
            column: 18
          },
          end: {
            line: 26,
            column: 19
          }
        },
        loc: {
          start: {
            line: 26,
            column: 27
          },
          end: {
            line: 26,
            column: 39
          }
        },
        line: 26
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 16
          },
          end: {
            line: 13,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 16
          },
          end: {
            line: 13,
            column: 17
          }
        }, {
          start: {
            line: 10,
            column: 16
          },
          end: {
            line: 13,
            column: 17
          }
        }],
        line: 10
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "a3053d8ca7ecd8903cb60df1c80e6c36c8f9f27e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_cj15u5uoa = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_cj15u5uoa();

var state = (cov_cj15u5uoa().s[0]++, {});
var actions = (cov_cj15u5uoa().s[1]++, {
  postPrinter: function postPrinter(_ref, printer) {
    var dispatch = _ref.dispatch;
    cov_cj15u5uoa().f[0]++;
    cov_cj15u5uoa().s[2]++;
    _services_printer_service__WEBPACK_IMPORTED_MODULE_0__["printerService"].postPrinter(printer).then(function (data) {
      cov_cj15u5uoa().f[1]++;
      cov_cj15u5uoa().s[3]++;

      if (data) {
        cov_cj15u5uoa().b[0][0]++;
        cov_cj15u5uoa().s[4]++;
        dispatch('alert/success', 'Printer successfully uploaded', {
          root: true
        });
        cov_cj15u5uoa().s[5]++;
        dispatch('assetInteraction/setReloadMap', true, {
          root: true
        });
      } else {
        cov_cj15u5uoa().b[0][1]++;
      }
    }, function (error) {
      cov_cj15u5uoa().f[2]++;
      cov_cj15u5uoa().s[6]++;
      dispatch('alert/error', error.response.data.Message, {
        root: true
      });
      cov_cj15u5uoa().s[7]++;
      dispatch('assetInteraction/setReloadMap', true, {
        root: true
      });
    });
  }
});
var mutations = (cov_cj15u5uoa().s[8]++, {});
var getters = (cov_cj15u5uoa().s[9]++, {
  printerState: function printerState(state) {
    cov_cj15u5uoa().f[3]++;
    cov_cj15u5uoa().s[10]++;
    return state.status;
  }
});
var printers = (cov_cj15u5uoa().s[11]++, {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters
});

/***/ }),

/***/ "./src/store/search.module.js":
/*!************************************!*\
  !*** ./src/store/search.module.js ***!
  \************************************/
/*! exports provided: search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/search.service */ "./src/services/search.service.js");



function cov_79b4cxjek() {
  var path = "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\search.module.js";
  var hash = "f220bdf8c4575ad4e492906a64224d9960154f5f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\search.module.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 14
        },
        end: {
          line: 4,
          column: 1
        }
      },
      "1": {
        start: {
          line: 6,
          column: 16
        },
        end: {
          line: 19,
          column: 1
        }
      },
      "2": {
        start: {
          line: 8,
          column: 8
        },
        end: {
          line: 17,
          column: 9
        }
      },
      "3": {
        start: {
          line: 10,
          column: 24
        },
        end: {
          line: 12,
          column: 21
        }
      },
      "4": {
        start: {
          line: 11,
          column: 24
        },
        end: {
          line: 11,
          column: 36
        }
      },
      "5": {
        start: {
          line: 15,
          column: 16
        },
        end: {
          line: 15,
          column: 84
        }
      },
      "6": {
        start: {
          line: 20,
          column: 18
        },
        end: {
          line: 21,
          column: 1
        }
      },
      "7": {
        start: {
          line: 23,
          column: 16
        },
        end: {
          line: 25,
          column: 1
        }
      },
      "8": {
        start: {
          line: 24,
          column: 26
        },
        end: {
          line: 24,
          column: 38
        }
      },
      "9": {
        start: {
          line: 27,
          column: 22
        },
        end: {
          line: 33,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 4
          },
          end: {
            line: 7,
            column: 5
          }
        },
        loc: {
          start: {
            line: 7,
            column: 40
          },
          end: {
            line: 18,
            column: 5
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 12
          },
          end: {
            line: 9,
            column: 13
          }
        },
        loc: {
          start: {
            line: 9,
            column: 20
          },
          end: {
            line: 13,
            column: 13
          }
        },
        line: 9
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 14,
            column: 12
          },
          end: {
            line: 14,
            column: 13
          }
        },
        loc: {
          start: {
            line: 14,
            column: 21
          },
          end: {
            line: 16,
            column: 13
          }
        },
        line: 14
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 24,
            column: 17
          },
          end: {
            line: 24,
            column: 18
          }
        },
        loc: {
          start: {
            line: 24,
            column: 26
          },
          end: {
            line: 24,
            column: 38
          }
        },
        line: 24
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 10,
            column: 24
          },
          end: {
            line: 12,
            column: 21
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 10,
            column: 24
          },
          end: {
            line: 12,
            column: 21
          }
        }, {
          start: {
            line: 10,
            column: 24
          },
          end: {
            line: 12,
            column: 21
          }
        }],
        line: 10
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f220bdf8c4575ad4e492906a64224d9960154f5f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_79b4cxjek = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_79b4cxjek();

var state = (cov_79b4cxjek().s[0]++, {});
var actions = (cov_79b4cxjek().s[1]++, {
  searchAll: function searchAll(_ref, searchString) {
    var dispatch = _ref.dispatch;
    cov_79b4cxjek().f[0]++;
    cov_79b4cxjek().s[2]++;
    _services_search_service__WEBPACK_IMPORTED_MODULE_2__["searchService"].search(searchString).then(function (data) {
      cov_79b4cxjek().f[1]++;
      cov_79b4cxjek().s[3]++;

      if (data) {
        cov_79b4cxjek().b[0][0]++;
        cov_79b4cxjek().s[4]++;
        return data;
      } else {
        cov_79b4cxjek().b[0][1]++;
      }
    }, function (error) {
      cov_79b4cxjek().f[2]++;
      cov_79b4cxjek().s[5]++;
      dispatch('alert/error', error.response.data.Message, {
        root: true
      });
    });
  }
});
var mutations = (cov_79b4cxjek().s[6]++, {});
var getters = (cov_79b4cxjek().s[7]++, {
  searchState: function searchState(state) {
    cov_79b4cxjek().f[3]++;
    cov_79b4cxjek().s[8]++;
    return state.status;
  }
});
var search = (cov_79b4cxjek().s[9]++, {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters
});

/***/ }),

/***/ "./src/store/sidebar.module.js":
/*!*************************************!*\
  !*** ./src/store/sidebar.module.js ***!
  \*************************************/
/*! exports provided: sidebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebar", function() { return sidebar; });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/esm/index.js");
function cov_2oczfemi3e() {
  var path = "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\sidebar.module.js";
  var hash = "c038f541edb087d6f3712bd71b8c42d635174967";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\sidebar.module.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 14
        },
        end: {
          line: 9,
          column: 1
        }
      },
      "1": {
        start: {
          line: 12,
          column: 16
        },
        end: {
          line: 16,
          column: 1
        }
      },
      "2": {
        start: {
          line: 13,
          column: 24
        },
        end: {
          line: 13,
          column: 41
        }
      },
      "3": {
        start: {
          line: 14,
          column: 19
        },
        end: {
          line: 14,
          column: 31
        }
      },
      "4": {
        start: {
          line: 15,
          column: 19
        },
        end: {
          line: 15,
          column: 31
        }
      },
      "5": {
        start: {
          line: 19,
          column: 16
        },
        end: {
          line: 29,
          column: 1
        }
      },
      "6": {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 21,
          column: 34
        }
      },
      "7": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 44
        }
      },
      "8": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 29
        }
      },
      "9": {
        start: {
          line: 32,
          column: 18
        },
        end: {
          line: 51,
          column: 1
        }
      },
      "10": {
        start: {
          line: 34,
          column: 4
        },
        end: {
          line: 34,
          column: 42
        }
      },
      "11": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 39,
          column: 6
        }
      },
      "12": {
        start: {
          line: 40,
          column: 4
        },
        end: {
          line: 40,
          column: 45
        }
      },
      "13": {
        start: {
          line: 43,
          column: 15
        },
        end: {
          line: 43,
          column: 62
        }
      },
      "14": {
        start: {
          line: 45,
          column: 4
        },
        end: {
          line: 48,
          column: 6
        }
      },
      "15": {
        start: {
          line: 49,
          column: 4
        },
        end: {
          line: 49,
          column: 21
        }
      },
      "16": {
        start: {
          line: 53,
          column: 23
        },
        end: {
          line: 59,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 13,
            column: 15
          },
          end: {
            line: 13,
            column: 16
          }
        },
        loc: {
          start: {
            line: 13,
            column: 24
          },
          end: {
            line: 13,
            column: 41
          }
        },
        line: 13
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 14,
            column: 10
          },
          end: {
            line: 14,
            column: 11
          }
        },
        loc: {
          start: {
            line: 14,
            column: 19
          },
          end: {
            line: 14,
            column: 31
          }
        },
        line: 14
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 15,
            column: 10
          },
          end: {
            line: 15,
            column: 11
          }
        },
        loc: {
          start: {
            line: 15,
            column: 19
          },
          end: {
            line: 15,
            column: 31
          }
        },
        line: 15
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 20,
            column: 2
          },
          end: {
            line: 20,
            column: 3
          }
        },
        loc: {
          start: {
            line: 20,
            column: 36
          },
          end: {
            line: 22,
            column: 3
          }
        },
        line: 20
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        loc: {
          start: {
            line: 23,
            column: 25
          },
          end: {
            line: 25,
            column: 3
          }
        },
        line: 23
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 26,
            column: 2
          },
          end: {
            line: 26,
            column: 3
          }
        },
        loc: {
          start: {
            line: 26,
            column: 27
          },
          end: {
            line: 28,
            column: 3
          }
        },
        line: 26
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 33,
            column: 2
          },
          end: {
            line: 33,
            column: 3
          }
        },
        loc: {
          start: {
            line: 33,
            column: 23
          },
          end: {
            line: 35,
            column: 3
          }
        },
        line: 33
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 36,
            column: 3
          }
        },
        loc: {
          start: {
            line: 36,
            column: 39
          },
          end: {
            line: 41,
            column: 3
          }
        },
        line: 36
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 42,
            column: 2
          },
          end: {
            line: 42,
            column: 3
          }
        },
        loc: {
          start: {
            line: 42,
            column: 19
          },
          end: {
            line: 50,
            column: 3
          }
        },
        line: 42
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 43,
            column: 15
          },
          end: {
            line: 43,
            column: 62
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 43,
            column: 28
          },
          end: {
            line: 43,
            column: 29
          }
        }, {
          start: {
            line: 43,
            column: 32
          },
          end: {
            line: 43,
            column: 62
          }
        }],
        line: 43
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "c038f541edb087d6f3712bd71b8c42d635174967"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2oczfemi3e = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2oczfemi3e();
 // initial state

var state = (cov_2oczfemi3e().s[0]++, {
  sidebarOpen: false,
  titles: 'press this to load sidebar',
  offset: 0 // getters

});
var getters = (cov_2oczfemi3e().s[1]++, {
  sidebarOpen: function sidebarOpen(state) {
    cov_2oczfemi3e().f[0]++;
    cov_2oczfemi3e().s[2]++;
    return state.sidebarOpen;
  },
  titles: function titles(state) {
    cov_2oczfemi3e().f[1]++;
    cov_2oczfemi3e().s[3]++;
    return state.titles;
  },
  offset: function offset(state) {
    cov_2oczfemi3e().f[2]++;
    cov_2oczfemi3e().s[4]++;
    return state.offset;
  } // actions

});
var actions = (cov_2oczfemi3e().s[5]++, {
  toggleSidebar: function toggleSidebar(_ref) {
    var commit = _ref.commit,
        state = _ref.state;
    cov_2oczfemi3e().f[3]++;
    cov_2oczfemi3e().s[6]++;
    commit('toggleSidebar', state);
  },
  init: function init(_ref2, element) {
    var commit = _ref2.commit;
    cov_2oczfemi3e().f[4]++;
    cov_2oczfemi3e().s[7]++;
    commit('computeInitialisation', element);
  },
  showIt: function showIt(_ref3, element) {
    var commit = _ref3.commit;
    cov_2oczfemi3e().f[5]++;
    cov_2oczfemi3e().s[8]++;
    commit('showIt', element);
  }
}); // mutations

var mutations = (cov_2oczfemi3e().s[9]++, {
  toggleSidebar: function toggleSidebar(state) {
    cov_2oczfemi3e().f[6]++;
    cov_2oczfemi3e().s[10]++;
    state.sidebarOpen = !state.sidebarOpen;
  },
  computeInitialisation: function computeInitialisation(state, element) {
    cov_2oczfemi3e().f[7]++;
    cov_2oczfemi3e().s[11]++;
    gsap__WEBPACK_IMPORTED_MODULE_0__["TweenMax"].set(element, {
      x: -1 * element.offsetWidth
    });
    cov_2oczfemi3e().s[12]++;
    state.offset = -1 * element.offsetWidth;
  },
  showIt: function showIt(state, obj) {
    cov_2oczfemi3e().f[8]++;
    var dX = (cov_2oczfemi3e().s[13]++, obj.isOpen ? (cov_2oczfemi3e().b[0][0]++, 0) : (cov_2oczfemi3e().b[0][1]++, -1 * obj.element.offsetWidth));
    cov_2oczfemi3e().s[14]++;
    gsap__WEBPACK_IMPORTED_MODULE_0__["TweenMax"].to(obj.element, 0.1, {
      x: dX,
      ease: gsap__WEBPACK_IMPORTED_MODULE_0__["Power4"].easeOut
    });
    cov_2oczfemi3e().s[15]++;
    state.offset = dX;
  }
});
var sidebar = (cov_2oczfemi3e().s[16]++, {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations,
  getters: getters
});

/***/ }),

/***/ "./src/store/toolbar.module.js":
/*!*************************************!*\
  !*** ./src/store/toolbar.module.js ***!
  \*************************************/
/*! exports provided: toolbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toolbar", function() { return toolbar; });
function cov_1op6r8mstk() {
  var path = "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\toolbar.module.js";
  var hash = "2bb221a7aed25fe29886946727ec5c5542e6f62f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Work\\OfficeMap\\AzureDevOpsSource\\office-map-web-app\\src\\store\\toolbar.module.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 14
        },
        end: {
          line: 3,
          column: 1
        }
      },
      "1": {
        start: {
          line: 5,
          column: 16
        },
        end: {
          line: 12,
          column: 1
        }
      },
      "2": {
        start: {
          line: 7,
          column: 8
        },
        end: {
          line: 7,
          column: 43
        }
      },
      "3": {
        start: {
          line: 10,
          column: 8
        },
        end: {
          line: 10,
          column: 42
        }
      },
      "4": {
        start: {
          line: 14,
          column: 18
        },
        end: {
          line: 18,
          column: 1
        }
      },
      "5": {
        start: {
          line: 16,
          column: 8
        },
        end: {
          line: 16,
          column: 37
        }
      },
      "6": {
        start: {
          line: 20,
          column: 23
        },
        end: {
          line: 25,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 6,
            column: 4
          },
          end: {
            line: 6,
            column: 5
          }
        },
        loc: {
          start: {
            line: 6,
            column: 33
          },
          end: {
            line: 8,
            column: 5
          }
        },
        line: 6
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 9,
            column: 5
          }
        },
        loc: {
          start: {
            line: 9,
            column: 33
          },
          end: {
            line: 11,
            column: 5
          }
        },
        line: 9
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 15,
            column: 24
          },
          end: {
            line: 15,
            column: 25
          }
        },
        loc: {
          start: {
            line: 15,
            column: 41
          },
          end: {
            line: 17,
            column: 5
          }
        },
        line: 15
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "2bb221a7aed25fe29886946727ec5c5542e6f62f"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1op6r8mstk = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1op6r8mstk();
var state = (cov_1op6r8mstk().s[0]++, {
  showAdminToolbar: true
});
var actions = (cov_1op6r8mstk().s[1]++, {
  hideAdminToolbar: function hideAdminToolbar(_ref) {
    var commit = _ref.commit;
    cov_1op6r8mstk().f[0]++;
    cov_1op6r8mstk().s[2]++;
    commit('changeAdminToolbar', false);
  },
  showAdminToolbar: function showAdminToolbar(_ref2) {
    var commit = _ref2.commit;
    cov_1op6r8mstk().f[1]++;
    cov_1op6r8mstk().s[3]++;
    commit('changeAdminToolbar', true);
  }
});
var mutations = (cov_1op6r8mstk().s[4]++, {
  changeAdminToolbar: function changeAdminToolbar(state, show) {
    cov_1op6r8mstk().f[2]++;
    cov_1op6r8mstk().s[5]++;
    state.showAdminToolbar = show;
  }
});
var toolbar = (cov_1op6r8mstk().s[6]++, {
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations
});

/***/ }),

/***/ "./src/views/NotFound.vue":
/*!********************************!*\
  !*** ./src/views/NotFound.vue ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NotFound_vue_vue_type_template_id_46a88b29___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NotFound.vue?vue&type=template&id=46a88b29& */ "./src/views/NotFound.vue?vue&type=template&id=46a88b29&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _NotFound_vue_vue_type_template_id_46a88b29___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NotFound_vue_vue_type_template_id_46a88b29___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/NotFound.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/NotFound.vue?vue&type=template&id=46a88b29&":
/*!***************************************************************!*\
  !*** ./src/views/NotFound.vue?vue&type=template&id=46a88b29& ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_525a9f0d_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_template_id_46a88b29___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"525a9f0d-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../node_modules/vue-loader/lib??vue-loader-options!./NotFound.vue?vue&type=template&id=46a88b29& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"525a9f0d-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/NotFound.vue?vue&type=template&id=46a88b29&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_525a9f0d_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_template_id_46a88b29___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_525a9f0d_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NotFound_vue_vue_type_template_id_46a88b29___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./svg-icons/pin.svg":
/*!***************************!*\
  !*** ./svg-icons/pin.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pin.a0518e26.svg";

/***/ }),

/***/ "./svg-icons/pin2.svg":
/*!****************************!*\
  !*** ./svg-icons/pin2.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/pin2.d68c10a6.svg";

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/main.js */"./src/main.js");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map