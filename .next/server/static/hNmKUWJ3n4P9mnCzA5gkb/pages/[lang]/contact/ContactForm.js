module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("yvGL");


/***/ }),

/***/ "A00i":
/***/ (function(module, exports, __webpack_require__) {

var _parseFloat = __webpack_require__("Wa2I");

const filterOutliers = someArray => {
  if (someArray.length < 4) return someArray;
  let values, q1, q3, iqr, maxValue, minValue;
  values = someArray.slice().sort((a, b) => a - b); //copy array fast and sort

  if (values.length / 4 % 1 === 0) {
    //find quartiles
    q1 = 1 / 2 * (values[values.length / 4] + values[values.length / 4 + 1]);
    q3 = 1 / 2 * (values[values.length * (3 / 4)] + values[values.length * (3 / 4) + 1]);
  } else {
    q1 = values[Math.floor(values.length / 4 + 1)];
    q3 = values[Math.ceil(values.length * (3 / 4) + 1)];
  }

  iqr = q3 - q1;
  maxValue = q3 + iqr * 1.5;
  minValue = q1 - iqr * 1.5;
  return values.filter(x => x >= minValue && x <= maxValue);
};

const getAverage = someArray => {
  let total = 0;
  someArray.forEach(float => {
    total += _parseFloat(float);
  });
  let average = total / someArray.length;
  return average;
};

const roundMoney = float => {
  return Math.ceil(float * 100) / 100;
};

const moneyRoundOfArray = someArray => {
  let total = 0;
  someArray.forEach(number => {
    total += _parseFloat(number);
  });
  return roundMoney(total);
};

const firstNumber = string => {
  if (string.match(/\d+/)) {
    if (string.match(/\d+/)[0] > 4) {
      return 1;
    } else {
      return string.match(/\d+/)[0];
    }
  } else {
    return 1;
  }
};

const priceByQTY = (number, price) => {
  return "$" + roundMoney(price / number);
};

const translate = (string, strings, lang) => {
  if (strings[string] && strings[string][lang]) return strings[string][lang];
  return null;
};

module.exports = {
  filterOutliers,
  getAverage,
  roundMoney,
  firstNumber,
  priceByQTY,
  moneyRoundOfArray,
  translate
};

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "T22j":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "Wa2I":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("T22j");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "yvGL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("QxnH");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("A00i");
/* harmony import */ var _helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const ContactForm = ({
  strings,
  pageStrings,
  lang
}) => {
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: {
      name: "",
      email: "",
      message: ""
    },
    validate: values => {
      const errors = {};

      if (!values.name) {
        errors.name = "Required";
      } else if (!values.email) {
        errors.email = "Required";
      } else if (!values.message) {
        errors.message = "Required";
      }

      return errors;
    },
    onSubmit: async (values, {
      setSubmitting
    }) => {
      const response = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.post("/api/sendContactMessage", values);
      console.log(response);
      setSubmitting(false);
    }
  }, ({
    errors,
    touched,
    handleSubmit,
    isSubmitting
  }) => __jsx("form", {
    onSubmit: handleSubmit
  }, __jsx("label", null, __jsx("div", null, Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_3__["translate"])("NAME", pageStrings, lang)), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: "name",
    className: "form-input"
  }), errors.name && touched.name && errors.name), __jsx("label", null, __jsx("div", null, Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_3__["translate"])("EMAIL", pageStrings, lang)), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: "email",
    className: "form-input"
  }), errors.email && touched.email && errors.email), __jsx("label", null, __jsx("div", null, Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_3__["translate"])("MESSAGE", pageStrings, lang)), __jsx(formik__WEBPACK_IMPORTED_MODULE_1__["Field"], {
    name: "message",
    as: "textarea",
    className: "form-input"
  }), errors.message && touched.message && errors.message), __jsx("button", {
    type: "submit",
    disabled: isSubmitting
  }, Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_3__["translate"])("SUBMIT", strings, lang))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(state => state)(ContactForm));

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });