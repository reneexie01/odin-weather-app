/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const inputField = document.querySelector(\".location\");\nconst submitButton = document.querySelector(\".submit\");\nconst weatherTodayDiv = document.querySelector(\".weather-today\");\nsubmitButton.addEventListener(\"click\", () => {\n  const inputFieldValue = inputField.value;\n  getWeather(inputFieldValue);\n});\nasync function getWeather(location) {\n  try {\n    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=NDNCH7XP9PE4PXWQB9T3R7ED5`, {\n      mode: \"cors\"\n    });\n    const weatherData = await response.json();\n    const currentConditionsOutput = weatherData.currentConditions;\n    const todaysConditionsOutput = weatherData.days[0];\n    const timeZone = weatherData.timezone;\n    const todaysDate = todaysConditionsOutput.datetime;\n    const currentTemperature = convertToCelcius(currentConditionsOutput.temp);\n    const currentFeelsLikeTemperature = convertToCelcius(currentConditionsOutput.feelslike);\n    const todaysTempMax = convertToCelcius(todaysConditionsOutput.tempmax);\n    const todaysTempMin = convertToCelcius(todaysConditionsOutput.tempmin);\n    const todaysPrecip = todaysConditionsOutput.precip;\n    const currentConditionsDescription = currentConditionsOutput.conditions;\n    let weatherOutput = {\n      timezone: timeZone,\n      date: todaysDate,\n      temp: currentTemperature,\n      feelsLike: currentFeelsLikeTemperature,\n      tempMax: todaysTempMax,\n      tempMin: todaysTempMin,\n      precip: todaysPrecip,\n      description: currentConditionsDescription\n    };\n\n    //TODO: Try and get the week's data\n\n    //TODO: Add the weather to the DOM using the div\n\n    console.log(weatherOutput, weatherData);\n  } catch (err) {\n    console.log(err);\n  }\n}\nfunction convertToCelcius(fahrenheit) {\n  const celcius = (fahrenheit - 32) / 1.8;\n  const temperature = celcius.toFixed(1);\n  return temperature;\n}\n\n//# sourceURL=webpack://odin-weather-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;