/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom-manager.js":
/*!****************************!*\
  !*** ./src/dom-manager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   domManager: () => (/* binding */ domManager)\n/* harmony export */ });\n/* harmony import */ var _weather_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather-api */ \"./src/weather-api.js\");\n\n\nconst domManager = function DomManager() {\n  const inputField = document.querySelector(\".location\");\n  const submitButton = document.querySelector(\".submit\");\n  const weatherContainer = document.querySelector(\".weather-today\");\n  const locationButton = () => {\n    submitButton.addEventListener(\"click\", async () => {\n      const inputFieldValue = inputField.value;\n      try {\n        let weatherOutput = await _weather_api__WEBPACK_IMPORTED_MODULE_0__.weatherAPI.getWeather(inputFieldValue);\n        console.log(weatherOutput);\n        weatherContainer.innerHTML = `\n                <ul>\n                    <li class=\"current-output\" id=\"current-date\">Date: ${weatherOutput.date}</li>\n                    <li class=\"current-output\" id=\"current-description\">Description: ${weatherOutput.description}</li>\n                    <li class=\"current-output\" id=\"current-location\">Location: ${weatherOutput.resolvedAddress}</li>\n                    <li class=\"current-output\" id=\"current-timezone\">Timezone: ${weatherOutput.timezone}</li>\n                    <li class=\"current-output\" id=\"current-temperature\">Current Temperature: ${weatherOutput.temp}</li>\n                    <li class=\"current-output\" id=\"current-feelslike\">Feels Like: ${weatherOutput.feelsLike}</li>\n                    <li class=\"current-output\" id=\"todays-max\">Temperature (Max): ${weatherOutput.tempMax}</li>\n                    <li class=\"current-output\" id=\"todays-min\">Temperature (Min): ${weatherOutput.tempMin}</li>\n                    <li class=\"current-output\" id=\"current-precipitation\">Precipitation:${weatherOutput.precip}</li>\n                </ul>\n                `;\n        //TODO: Add the weatherOutput to the weatherContainer\n      } catch (err) {\n        console.log(err);\n      }\n    });\n  };\n  return {\n    locationButton\n  };\n}();\n\n//# sourceURL=webpack://odin-weather-app/./src/dom-manager.js?");

/***/ }),

/***/ "./src/function-tools.js":
/*!*******************************!*\
  !*** ./src/function-tools.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   convertToCelcius: () => (/* binding */ convertToCelcius)\n/* harmony export */ });\n\nfunction convertToCelcius(fahrenheit) {\n  const celcius = (fahrenheit - 32) / 1.8;\n  const temperature = celcius.toFixed(1);\n  return temperature;\n}\n\n//# sourceURL=webpack://odin-weather-app/./src/function-tools.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manager */ \"./src/dom-manager.js\");\n\n_dom_manager__WEBPACK_IMPORTED_MODULE_0__.domManager.locationButton();\n\n//# sourceURL=webpack://odin-weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weather-api.js":
/*!****************************!*\
  !*** ./src/weather-api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   weatherAPI: () => (/* binding */ weatherAPI)\n/* harmony export */ });\n/* harmony import */ var _function_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./function-tools */ \"./src/function-tools.js\");\n\n\nconst weatherAPI = function WeatherAPI() {\n  const getWeather = async function getWeather(location) {\n    try {\n      const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=NDNCH7XP9PE4PXWQB9T3R7ED5`, {\n        mode: \"cors\"\n      });\n      const weatherData = await response.json();\n      const currentConditionsOutput = weatherData.currentConditions;\n      const todaysConditionsOutput = weatherData.days[0];\n      const resolvedAddress = weatherData.resolvedAddress;\n      const timeZone = weatherData.timezone;\n      const todaysDate = todaysConditionsOutput.datetime;\n      const currentTemperature = (0,_function_tools__WEBPACK_IMPORTED_MODULE_0__.convertToCelcius)(currentConditionsOutput.temp);\n      const currentFeelsLikeTemperature = (0,_function_tools__WEBPACK_IMPORTED_MODULE_0__.convertToCelcius)(currentConditionsOutput.feelslike);\n      const todaysTempMax = (0,_function_tools__WEBPACK_IMPORTED_MODULE_0__.convertToCelcius)(todaysConditionsOutput.tempmax);\n      const todaysTempMin = (0,_function_tools__WEBPACK_IMPORTED_MODULE_0__.convertToCelcius)(todaysConditionsOutput.tempmin);\n      const todaysPrecip = todaysConditionsOutput.precip;\n      const currentConditionsDescription = currentConditionsOutput.conditions;\n      let weatherOutput = {\n        resolvedAddress: resolvedAddress,\n        timezone: timeZone,\n        date: todaysDate,\n        temp: currentTemperature,\n        feelsLike: currentFeelsLikeTemperature,\n        tempMax: todaysTempMax,\n        tempMin: todaysTempMin,\n        precip: todaysPrecip,\n        description: currentConditionsDescription\n      };\n\n      //TODO: Try and get the week's data\n\n      //TODO: Add the weather to the DOM using the div\n\n      return weatherOutput;\n    } catch (err) {\n      console.log(err);\n    }\n  };\n  return {\n    getWeather\n  };\n}();\n\n//# sourceURL=webpack://odin-weather-app/./src/weather-api.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;