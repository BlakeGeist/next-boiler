module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AuthForm.js":
/*!********************************!*\
  !*** ./components/AuthForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Blake Geist\\Documents\\blakes-apps\\react\\next-firebase-boiler\\src\\app\\components\\AuthForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AuthForm = ({
  email,
  password,
  handleChange,
  handleEmailPassAuth,
  errorMessage
}) => {
  return __jsx("form", {
    onSubmit: handleEmailPassAuth,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, errorMessage && __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, errorMessage), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "email",
    placeholder: "Email",
    value: email,
    name: "email",
    onChange: handleChange,
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 12
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "password",
    placeholder: "Password",
    value: password,
    name: "password",
    onChange: handleChange,
    required: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 12
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 12
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (AuthForm);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_languages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/languages */ "./helpers/languages.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _NewsLetterFormOr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NewsLetterFormOr */ "./components/NewsLetterFormOr.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/quickHelpers */ "./helpers/quickHelpers.js");
/* harmony import */ var _helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\Blake Geist\\Documents\\blakes-apps\\react\\next-firebase-boiler\\src\\app\\components\\Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












const Footer = ({
  dispatch,
  lang,
  user,
  strings
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  const handleLanguageSelectChange = e => {
    router.push(next_router__WEBPACK_IMPORTED_MODULE_3___default.a.pathname, next_router__WEBPACK_IMPORTED_MODULE_3___default.a.asPath.split(`/${lang}/`).join(`/${e.target.value}/`), {
      shallow: true
    });
    return dispatch({
      type: "SET_ITEM",
      name: "lang",
      payload: e.target.value
    });
  };

  const LanguageSelect = () => {
    const renderOption = (option, i) => {
      return __jsx("option", {
        key: i,
        value: option.lang,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 17
        }
      }, option.name);
    };

    return __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 13
      }
    }, __jsx("label", {
      htmlFor: "languageSelect",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }
    }, Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_10__["translate"])("LANGUAGE", strings, lang), ":"), __jsx("select", {
      value: lang,
      onChange: handleLanguageSelectChange,
      id: "languageSelect",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }
    }, _helpers_languages__WEBPACK_IMPORTED_MODULE_5__["default"].map((option, i) => renderOption(option, i)))));
  };

  const handleLogout = e => {
    e.preventDefault();
    firebase_app__WEBPACK_IMPORTED_MODULE_8___default.a.auth().signOut().then(() => {
      dispatch({
        type: "SET_ITEM",
        name: "user",
        payload: {}
      });
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/login");
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("footer", {
    className: "jsx-1902517548",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1902517548" + " " + "container footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1902517548" + " " + "footer-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, __jsx(LanguageSelect, {
    className: "jsx-1902517548",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "jsx-1902517548" + " " + "footer-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx(_NewsLetterFormOr__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, "You are already subbscribed to our newsletter!")), __jsx("div", {
    className: "jsx-1902517548" + " " + "footer-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, "item 1"), __jsx("div", {
    className: "jsx-1902517548" + " " + "footer-item",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: "jsx-1902517548",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }, __jsx("li", {
    className: "jsx-1902517548",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/[lang]",
    as: `/${lang}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 33
    }
  }, __jsx("a", {
    className: "jsx-1902517548",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 37
    }
  }, Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_10__["translate"])("HOME", strings, lang)))), __jsx("li", {
    className: "jsx-1902517548",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/[lang]/about",
    as: `/${lang}/about`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 33
    }
  }, __jsx("a", {
    className: "jsx-1902517548",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 37
    }
  }, Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_10__["translate"])("ABOUT-US", strings, lang)))), __jsx("li", {
    className: "jsx-1902517548",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "https://github.com/BlakeGeist/next-firebase-boiler",
    target: "_blank",
    className: "jsx-1902517548",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 33
    }
  }, "GitHub")), user && user.uid ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("li", {
    className: "jsx-1902517548",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 37
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/[lang]/dashboard",
    as: `/${lang}/dashboard`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 41
    }
  }, __jsx("a", {
    className: "jsx-1902517548" + " " + "navItem",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 45
    }
  }, Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_10__["translate"])("DASHBOARD", strings, lang)))), __jsx("li", {
    className: "jsx-1902517548",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 37
    }
  }, __jsx("a", {
    href: "",
    onClick: handleLogout,
    className: "jsx-1902517548" + " " + "navItem",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 41
    }
  }, Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_10__["translate"])("LOGOUT", strings, lang)))) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("li", {
    className: "jsx-1902517548",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 37
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/[lang]/sign-up",
    as: `/${lang}/sign-up`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 41
    }
  }, __jsx("a", {
    className: "jsx-1902517548" + " " + "navItem",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 45
    }
  }, Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_10__["translate"])("SIGN-UP", strings, lang)))), __jsx("li", {
    className: "jsx-1902517548",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 37
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/[lang]/login",
    as: `/${lang}/login`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 41
    }
  }, __jsx("a", {
    className: "jsx-1902517548" + " " + "navItem",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 45
    }
  }, Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_10__["translate"])("LOGIN", strings, lang)))))))), __jsx("div", {
    className: "jsx-1902517548" + " " + "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 17
    }
  }, __jsx("nav", {
    className: "jsx-1902517548",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 21
    }
  }, __jsx("ul", {
    className: "jsx-1902517548" + " " + "terms",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }, __jsx("li", {
    className: "jsx-1902517548",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/[lang]/terms",
    as: `/${lang}/terms`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 33
    }
  }, __jsx("a", {
    className: "jsx-1902517548",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 37
    }
  }, Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_10__["translate"])("TERMS", strings, lang)))), __jsx("li", {
    className: "jsx-1902517548",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/[lang]/privacy",
    as: `/${lang}/privacy`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 33
    }
  }, __jsx("a", {
    className: "jsx-1902517548",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 37
    }
  }, Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_10__["translate"])("PRIVACY", strings, lang)))))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1902517548",
    __self: undefined
  }, ".footer{-webkit-column-count:4;column-count:4;background-color:#fff;border-top:3px solid #ccc;}footer{text-align:center;}footer a{color:#067df7;-webkit-text-decoration:none;-webkit-text-decoration:none;text-decoration:none;font-size:13px;}ul.terms{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}ul.terms li{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}ul.terms li:after{content:\" | \";padding:0 5px;}ul.terms li:last-of-type:after{content:\"\";}nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.footer-item{min-height:150px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.footer-item label{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.footer-item label select{margin:0 5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQmxha2UgR2Vpc3RcXERvY3VtZW50c1xcYmxha2VzLWFwcHNcXHJlYWN0XFxuZXh0LWZpcmViYXNlLWJvaWxlclxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXEZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0SCtCLEFBR3dCLEFBS0csQUFHSixBQU1ELEFBTUEsQUFPQyxBQUlILEFBR0UsQUFJSSxBQU1KLEFBR0EsV0FmZixFQWdCQSxDQXZDK0IsQUFtQmYsR0FXRCxDQWpDZixVQXVCQSxVQTVCd0IsS0FTRCxpQkFSSyxjQWFoQixBQU1lLEFBY0ssQUFVaEMsVUE3QmdCLEVBYmhCLEtBcUNxQixFQTdCSixlQUNqQiw4QkFLeUIsaUNBS0osYUFtQkksS0FMekIsZ0RBbEJBLDJCQUtvQixrQkFDSixDQWtCaEIscURBakJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQmxha2UgR2Vpc3RcXERvY3VtZW50c1xcYmxha2VzLWFwcHNcXHJlYWN0XFxuZXh0LWZpcmViYXNlLWJvaWxlclxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXEZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGFuZ3MgZnJvbSBcIi4uL2hlbHBlcnMvbGFuZ3VhZ2VzXCI7XHJcbmltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IE5ld3NMZXR0ZXJGb3JtT3IgZnJvbSBcIi4vTmV3c0xldHRlckZvcm1PclwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gXCIuLi9oZWxwZXJzL3F1aWNrSGVscGVyc1wiO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKHsgZGlzcGF0Y2gsIGxhbmcsIHVzZXIsIHN0cmluZ3MgfSkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTGFuZ3VhZ2VTZWxlY3RDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKFJvdXRlci5wYXRobmFtZSwgUm91dGVyLmFzUGF0aC5zcGxpdChgLyR7bGFuZ30vYCkuam9pbihgLyR7ZS50YXJnZXQudmFsdWV9L2ApLCB7IHNoYWxsb3c6IHRydWUgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfSVRFTVwiLCBuYW1lOiBcImxhbmdcIiwgcGF5bG9hZDogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IExhbmd1YWdlU2VsZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlbmRlck9wdGlvbiA9IChvcHRpb24sIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17b3B0aW9uLmxhbmd9PntvcHRpb24ubmFtZX08L29wdGlvbj5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhbmd1YWdlU2VsZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj57dHJhbnNsYXRlKFwiTEFOR1VBR0VcIiwgc3RyaW5ncywgbGFuZyl9OjwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IHZhbHVlPXtsYW5nfSBvbkNoYW5nZT17aGFuZGxlTGFuZ3VhZ2VTZWxlY3RDaGFuZ2V9IGlkPVwibGFuZ3VhZ2VTZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge0xhbmdzLm1hcCgob3B0aW9uLCBpKSA9PiByZW5kZXJPcHRpb24ob3B0aW9uLCBpKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8L2Rpdj4gICAgICBcclxuICAgICAgICApO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVMb2dvdXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbk91dCgpXHJcbiAgICAgICAgICAgIC50aGVuKCgpPT57XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0lURU1cIiwgbmFtZTogXCJ1c2VyXCIsIHBheWxvYWQ6IHt9IH0pO1xyXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBmb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYW5ndWFnZVNlbGVjdCAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5ld3NMZXR0ZXJGb3JtT3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBZb3UgYXJlIGFscmVhZHkgc3ViYnNjcmliZWQgdG8gb3VyIG5ld3NsZXR0ZXIhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmV3c0xldHRlckZvcm1Pcj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gMVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9Jy9bbGFuZ10nIGFzPXtgLyR7bGFuZ31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3RyYW5zbGF0ZShcIkhPTUVcIiwgc3RyaW5ncywgbGFuZyl9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL1tsYW5nXS9hYm91dCcgYXM9e2AvJHtsYW5nfS9hYm91dGB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57dHJhbnNsYXRlKFwiQUJPVVQtVVNcIiwgc3RyaW5ncywgbGFuZyl9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9CbGFrZUdlaXN0L25leHQtZmlyZWJhc2UtYm9pbGVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+R2l0SHViPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dXNlciAmJiB1c2VyLnVpZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvW2xhbmddL2Rhc2hib2FyZCcgYXM9e2AvJHtsYW5nfS9kYXNoYm9hcmRgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZJdGVtXCI+e3RyYW5zbGF0ZShcIkRBU0hCT0FSRFwiLCBzdHJpbmdzLCBsYW5nKX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJuYXZJdGVtXCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT57dHJhbnNsYXRlKFwiTE9HT1VUXCIsIHN0cmluZ3MsIGxhbmcpfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL1tsYW5nXS9zaWduLXVwJyBhcz17YC8ke2xhbmd9L3NpZ24tdXBgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZJdGVtXCI+e3RyYW5zbGF0ZShcIlNJR04tVVBcIiwgc3RyaW5ncywgbGFuZyl9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvW2xhbmddL2xvZ2luJyBhcz17YC8ke2xhbmd9L2xvZ2luYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2SXRlbVwiPnt0cmFuc2xhdGUoXCJMT0dJTlwiLCBzdHJpbmdzLCBsYW5nKX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmF2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGVybXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvW2xhbmddL3Rlcm1zJyBhcz17YC8ke2xhbmd9L3Rlcm1zYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPnt0cmFuc2xhdGUoXCJURVJNU1wiLCBzdHJpbmdzLCBsYW5nKX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvW2xhbmddL3ByaXZhY3knIGFzPXtgLyR7bGFuZ30vcHJpdmFjeWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57dHJhbnNsYXRlKFwiUFJJVkFDWVwiLCBzdHJpbmdzLCBsYW5nKX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgY29sdW1uLWNvdW50OiA0O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNjY2M7XHJcbiAgICAgIH1cclxuICAgICAgZm9vdGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgZm9vdGVyIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMDY3ZGY3O1xyXG4gICAgICAgIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIH1cclxuICAgICAgdWwudGVybXMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgfVxyXG4gICAgICB1bC50ZXJtcyBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICB9XHJcbiAgICAgIHVsLnRlcm1zIGxpOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiBcIiB8IFwiO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIHVsLnRlcm1zIGxpOmxhc3Qtb2YtdHlwZTphZnRlcntcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICB9XHJcbiAgICAgIG5hdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIH1cclxuICAgICAgLmZvb3Rlci1pdGVtIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgICAgLmZvb3Rlci1pdGVtIGxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB9XHJcbiAgICAgIC5mb290ZXItaXRlbSBsYWJlbCBzZWxlY3Qge1xyXG4gICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+IHN0YXRlKShGb290ZXIpO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Blake Geist\\Documents\\blakes-apps\\react\\next-firebase-boiler\\src\\app\\components\\Footer.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(state => state)(Footer));

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Nav */ "./components/Nav.js");
var _jsxFileName = "C:\\Users\\Blake Geist\\Documents\\blakes-apps\\react\\next-firebase-boiler\\src\\app\\components\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Header = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx(_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/LoadingSpinner.js":
/*!**************************************!*\
  !*** ./components/LoadingSpinner.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Blake Geist\\Documents\\blakes-apps\\react\\next-firebase-boiler\\src\\app\\components\\LoadingSpinner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const LoadingSpinner = ({
  isLoading
}) => {
  return isLoading && __jsx("div", {
    className: "jsx-2586767729" + " " + "loader-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-2586767729" + " " + "loader",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2586767729",
    __self: undefined
  }, ".loader.jsx-2586767729{border:16px solid #f3f3f3;border-top:16px solid #3498db;border-radius:50%;width:120px;height:120px;-webkit-animation:spin-jsx-2586767729 2s linear infinite;animation:spin-jsx-2586767729 2s linear infinite;}.loader-wrapper.jsx-2586767729{position:fixed;margin:auto;height:100%;width:100%;top:0;bottom:0;right:0;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:rgba(241,241,241,0.7);}@-webkit-keyframes spin-jsx-2586767729{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes spin-jsx-2586767729{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQmxha2UgR2Vpc3RcXERvY3VtZW50c1xcYmxha2VzLWFwcHNcXHJlYWN0XFxuZXh0LWZpcmViYXNlLWJvaWxlclxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXExvYWRpbmdTcGlubmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFzQixBQUd1QyxBQVFYLEFBZVksQUFDSSxlQWZuQixXQVJrQixDQVNsQixZQUNELFdBQ0wsTUFWWSxBQVdULFNBQ0QsUUFDRCxDQVpLLE1BYUMsQ0FPZSxLQW5CZixDQW9CbUIsWUFuQkUsdURBWVgsbURBWHpCLGdEQVlxQiw2RkFDdUIsdUNBQzVDIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQmxha2UgR2Vpc3RcXERvY3VtZW50c1xcYmxha2VzLWFwcHNcXHJlYWN0XFxuZXh0LWZpcmViYXNlLWJvaWxlclxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXExvYWRpbmdTcGlubmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5jb25zdCBMb2FkaW5nU3Bpbm5lciA9ICh7IGlzTG9hZGluZyB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIGlzTG9hZGluZyAmJlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmxvYWRlciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMTZweCBzb2xpZCAjZjNmM2YzOyAvKiBMaWdodCBncmV5ICovXHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjsgLyogQmx1ZSAqL1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sb2FkZXItd3JhcHBlcntcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQxLCAyNDEsIDI0MSwgMC43KTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgICAgICAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICAgICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+IHN0YXRlKShMb2FkaW5nU3Bpbm5lcik7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Blake Geist\\Documents\\blakes-apps\\react\\next-firebase-boiler\\src\\app\\components\\LoadingSpinner.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(state => state)(LoadingSpinner));

/***/ }),

/***/ "./components/Modal.js":
/*!*****************************!*\
  !*** ./components/Modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Blake Geist\\Documents\\blakes-apps\\react\\next-firebase-boiler\\src\\app\\components\\Modal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Modal = ({
  modalTarget,
  dispatch
}) => {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleCloseModal = () => {
    dispatch({
      type: "SET_ITEM",
      name: "modalTarget",
      payload: null
    });
  };

  const handleKeyPress = event => {
    if (event.key === 'Escape') {
      handleCloseModal();
    }
  };

  if (modalTarget) {
    return __jsx("div", {
      onKeyPress: e => handleKeyPress(e),
      className: "jsx-2589857032" + " " + "modal-bg",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-2589857032" + " " + "modal",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "jsx-2589857032" + " " + "modal-header",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: "jsx-2589857032",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 25
      }
    }, "This is the modal header"), __jsx("span", {
      className: "jsx-2589857032",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 25
      }
    }, __jsx("a", {
      onClick: handleCloseModal,
      href: "",
      className: "jsx-2589857032",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 31
      }
    }, "Close"))), __jsx("div", {
      className: "jsx-2589857032" + " " + "modal-body",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 21
      }
    }, modalTarget, "This is the modal body"), __jsx("div", {
      className: "jsx-2589857032" + " " + "modal-footer",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 21
      }
    }, "This is the modal footer")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2589857032",
      __self: undefined
    }, ".modal-bg.jsx-2589857032{position:fixed;width:100%;height:100%;background-color:rgba(50,115,220,0.3);top:0;left:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.modal.jsx-2589857032{background-color:#fff;padding:15px;min-width:500px;min-height:300px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.modal-header.jsx-2589857032{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}.modal-body.jsx-2589857032{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;}input.jsx-2589857032,textarea.jsx-2589857032{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQmxha2UgR2Vpc3RcXERvY3VtZW50c1xcYmxha2VzLWFwcHNcXHJlYWN0XFxuZXh0LWZpcmViYXNlLWJvaWxlclxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXE1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtDNEIsQUFHd0MsQUFhTyxBQVFMLEFBSUMsQUFJdkIsV0FBQyxJQTVCZSxPQWFFLElBWkQsU0FhSSxHQVp5QixhQWF4QixHQVVqQixjQVRhLE1BS3FCLEVBbEI1QixNQUNDLE9BQ0MsUUFDQyxTQUNJLG9DQVVTLHNDQVRILFNBY25CLCtCQUpKLHFEQVQyQixtR0FDM0IiLCJmaWxlIjoiQzpcXFVzZXJzXFxCbGFrZSBHZWlzdFxcRG9jdW1lbnRzXFxibGFrZXMtYXBwc1xccmVhY3RcXG5leHQtZmlyZWJhc2UtYm9pbGVyXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcTW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmNvbnN0IE1vZGFsID0gKHsgbW9kYWxUYXJnZXQsIGRpc3BhdGNoIH0pID0+IHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlQcmVzcyk7XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVLZXlQcmVzcyk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsb3NlTW9kYWwgPSAoKSA9PiB7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9JVEVNXCIsIG5hbWU6IFwibW9kYWxUYXJnZXRcIiwgcGF5bG9hZDogbnVsbCB9KTtcclxuICAgIH07XHJcbiAgICBjb25zdCBoYW5kbGVLZXlQcmVzcyA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpe1xyXG4gICAgICAgICAgICBoYW5kbGVDbG9zZU1vZGFsKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZihtb2RhbFRhcmdldCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1iZ1wiIG9uS2V5UHJlc3M9e2UgPT4gaGFuZGxlS2V5UHJlc3MoZSl9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlRoaXMgaXMgdGhlIG1vZGFsIGhlYWRlcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGEgb25DbGljaz17aGFuZGxlQ2xvc2VNb2RhbH0gaHJlZj1cIlwiPkNsb3NlPC9hPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge21vZGFsVGFyZ2V0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzIGlzIHRoZSBtb2RhbCBib2R5XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyB0aGUgbW9kYWwgZm9vdGVyXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAubW9kYWwtYmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTAsIDExNSwgMjIwLCAwLjMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubW9kYWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1vZGFsLWhlYWRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1vZGFsLWJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dCwgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiBudWxsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+IHN0YXRlKShNb2RhbCk7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Blake Geist\\Documents\\blakes-apps\\react\\next-firebase-boiler\\src\\app\\components\\Modal.js */"));
  }

  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(state => state)(Modal));

/***/ }),

/***/ "./components/ModalLogin.js":
/*!**********************************!*\
  !*** ./components/ModalLogin.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _credentials_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../credentials/client */ "./credentials/client.js");
/* harmony import */ var _credentials_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_credentials_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! recompose */ "recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _AuthForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AuthForm */ "./components/AuthForm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "C:\\Users\\Blake Geist\\Documents\\blakes-apps\\react\\next-firebase-boiler\\src\\app\\components\\ModalLogin.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










const LoginBase = ({
  setState,
  state,
  dispatch,
  lang
}) => {
  if (!firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.apps.length) {
    firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.initializeApp(_credentials_client__WEBPACK_IMPORTED_MODULE_4___default.a);
  }

  ;
  const {
    email,
    password,
    isLoading,
    errorMessage
  } = state;

  const handleChange = event => {
    let tempObj = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);

    tempObj[event.target.name] = event.target.value;
    setState(tempObj);
  };

  function updateState(item, payload) {
    let tempObj = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state);

    tempObj[item] = payload;
    setState(tempObj);
  }

  const handleEmailPassAuth = e => {
    e.preventDefault();
    updateState("isLoading", true);
    const {
      email,
      password
    } = state;
    firebase_app__WEBPACK_IMPORTED_MODULE_2___default.a.auth().signInWithEmailAndPassword(email, password).then(response => {
      response.user.getIdToken().then(token => {
        //dispatch({ type: 'SET_ITEM', name: 'user', payload: user });
        // eslint-disable-next-line no-undef
        js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.set("token2", token, {
          expires: 1
        });
        dispatch({
          type: "SET_ITEM",
          name: "modalTarget",
          payload: null
        });
      });
      dispatch({
        type: "SET_ITEM",
        name: "user",
        payload: response.user
      });
      dispatch({
        type: "SET_ITEM",
        name: "isLoggedIn",
        payload: true
      });
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      updateState("isLoading", false);

      if (errorCode === "auth/user-not-found") {
        errorMessage = "User not found please register";
      }

      updateState("errorMessage", errorMessage);
    });
  };

  return __jsx(_AuthForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    errorMessage: errorMessage,
    email: email,
    password: password,
    handleEmailPassAuth: handleEmailPassAuth,
    handleChange: handleChange,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  });
};

const Login = Object(recompose__WEBPACK_IMPORTED_MODULE_6__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_6__["withState"])("state", "setState", {
  email: "",
  password: "",
  isLoading: false,
  errorMessage: ""
}))(LoginBase);
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(state => state)(Login));

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "firebase/app");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/auth */ "firebase/auth");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/quickHelpers */ "./helpers/quickHelpers.js");
/* harmony import */ var _helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _credentials_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../credentials/client */ "./credentials/client.js");
/* harmony import */ var _credentials_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_credentials_client__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ModalLogin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ModalLogin */ "./components/ModalLogin.js");
var _jsxFileName = "C:\\Users\\Blake Geist\\Documents\\blakes-apps\\react\\next-firebase-boiler\\src\\app\\components\\Nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;












const Nav = ({
  router,
  user,
  dispatch,
  lang,
  strings
}) => {
  if (!firebase_app__WEBPACK_IMPORTED_MODULE_4___default.a.apps.length) {
    firebase_app__WEBPACK_IMPORTED_MODULE_4___default.a.initializeApp(_credentials_client__WEBPACK_IMPORTED_MODULE_9___default.a);
  }

  ;
  const leftNav = [{
    href: `/${lang}`,
    label: Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_7__["translate"])("HOME", strings, lang),
    target: "/"
  }, {
    href: `/${lang}/about`,
    label: Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_7__["translate"])("ABOUT-US", strings, lang),
    target: "/about"
  }, {
    href: `/${lang}/contact`,
    label: Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_7__["translate"])("CONTACT", strings, lang),
    target: "/contact"
  }, {
    href: `/${lang}/p`,
    label: Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_7__["translate"])("SHOP", strings, lang),
    target: "/p"
  }, {
    href: `/${lang}/blog`,
    label: Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_7__["translate"])("BLOG", strings, lang),
    target: "/blog"
  }, {
    href: "https://github.com/BlakeGeist/next-firebase-boiler",
    label: "GitHub",
    isExternal: true
  }].map(link => {
    link.key = `nav-link-${link.href}-${link.label}`;
    return link;
  });

  const handleLogout = e => {
    e.preventDefault();
    firebase_app__WEBPACK_IMPORTED_MODULE_4___default.a.auth().signOut().then(() => {
      dispatch({
        type: "SET_ITEM",
        name: "user",
        payload: {}
      });
      dispatch({
        type: "SET_ITEM",
        name: "isLoggedIn",
        payload: false
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_8___default.a.remove("token2");

      if (router) {
        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(router.pathname);
      }
    });
  };

  const handleOpenModal = e => {
    e.preventDefault();
    dispatch({
      type: "SET_ITEM",
      name: "modalTarget",
      payload: __jsx(_ModalLogin__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 68
        }
      })
    });
  };

  const LinkItem = ({
    isExternal,
    href,
    label,
    target
  }) => {
    if (isExternal) {
      return __jsx("a", {
        href: href,
        className: "navItem",
        target: "_blank",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 20
        }
      }, label);
    } else {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: `/[lang]${target}`,
        as: href,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }
      }, __jsx("a", {
        className: "navItem",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }
      }, label));
    }
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("nav", {
    className: "jsx-3756164257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "jsx-3756164257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, leftNav.map(({
    key,
    href,
    label,
    isExternal,
    target
  }) => __jsx("li", {
    key: key,
    className: "jsx-3756164257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }, __jsx(LinkItem, {
    href: href,
    label: label,
    isExternal: isExternal,
    target: target,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 29
    }
  })))), __jsx("ul", {
    className: "jsx-3756164257" + " " + "user-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, user && user.uid ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("li", {
    className: "jsx-3756164257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/[lang]/dashboard",
    as: `/${lang}/dashboard`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 33
    }
  }, __jsx("a", {
    className: "jsx-3756164257" + " " + "navItem",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 90
    }
  }, Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_7__["translate"])("DASHBOARD", strings, lang)))), __jsx("li", {
    className: "jsx-3756164257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 29
    }
  }, __jsx("a", {
    href: "",
    onClick: handleLogout,
    className: "jsx-3756164257" + " " + "navItem",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 33
    }
  }, Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_7__["translate"])("LOGOUT", strings, lang)))) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("li", {
    className: "jsx-3756164257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/[lang]/sign-up",
    as: `/${lang}/sign-up`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 33
    }
  }, __jsx("a", {
    className: "jsx-3756164257" + " " + "navItem",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 86
    }
  }, Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_7__["translate"])("SIGN-UP", strings, lang)))), __jsx("li", {
    className: "jsx-3756164257",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  }, __jsx("a", {
    onClick: e => handleOpenModal(e),
    href: "/[lang]/login",
    as: `/${lang}/login`,
    className: "jsx-3756164257" + " " + "navItem",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 33
    }
  }, "Login"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "875371457",
    __self: undefined
  }, ".navItem{color:#067df7;-webkit-text-decoration:none;text-decoration:none;font-size:13px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQmxha2UgR2Vpc3RcXERvY3VtZW50c1xcYmxha2VzLWFwcHNcXHJlYWN0XFxuZXh0LWZpcmViYXNlLWJvaWxlclxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXE5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RitCLEFBR21DLGNBQ08sa0RBQ04sZUFDbkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxCbGFrZSBHZWlzdFxcRG9jdW1lbnRzXFxibGFrZXMtYXBwc1xccmVhY3RcXG5leHQtZmlyZWJhc2UtYm9pbGVyXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcclxuaW1wb3J0IFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tIFwiLi4vaGVscGVycy9xdWlja0hlbHBlcnNcIjtcclxuaW1wb3J0IGNvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCBjbGllbnRDcmVkZW50aWFscyBmcm9tIFwiLi4vY3JlZGVudGlhbHMvY2xpZW50XCI7XHJcbmltcG9ydCBMb2dpbk1vZGFsIGZyb20gJy4vTW9kYWxMb2dpbidcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNvbnN0IE5hdiA9ICh7IHJvdXRlciwgdXNlciwgZGlzcGF0Y2gsIGxhbmcsIHN0cmluZ3MgfSkgPT4ge1xyXG4gIFxyXG4gICAgaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gICAgICAgIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY2xpZW50Q3JlZGVudGlhbHMpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsZWZ0TmF2ID0gW1xyXG4gICAgICAgIHsgaHJlZjogYC8ke2xhbmd9YCwgbGFiZWw6IHRyYW5zbGF0ZShcIkhPTUVcIiwgc3RyaW5ncywgbGFuZyksIHRhcmdldDogXCIvXCIgfSxcclxuICAgICAgICB7IGhyZWY6IGAvJHtsYW5nfS9hYm91dGAsIGxhYmVsOiB0cmFuc2xhdGUoXCJBQk9VVC1VU1wiLCBzdHJpbmdzLCBsYW5nKSwgdGFyZ2V0OiBcIi9hYm91dFwiIH0sXHJcbiAgICAgICAgeyBocmVmOiBgLyR7bGFuZ30vY29udGFjdGAsIGxhYmVsOiB0cmFuc2xhdGUoXCJDT05UQUNUXCIsIHN0cmluZ3MsIGxhbmcpLCB0YXJnZXQ6IFwiL2NvbnRhY3RcIiB9LFxyXG4gICAgICAgIHsgaHJlZjogYC8ke2xhbmd9L3BgLCBsYWJlbDogdHJhbnNsYXRlKFwiU0hPUFwiLCBzdHJpbmdzLCBsYW5nKSwgdGFyZ2V0OiBcIi9wXCIgfSxcclxuICAgICAgICB7IGhyZWY6IGAvJHtsYW5nfS9ibG9nYCwgbGFiZWw6IHRyYW5zbGF0ZShcIkJMT0dcIiwgc3RyaW5ncywgbGFuZyksIHRhcmdldDogXCIvYmxvZ1wiIH0sXHJcbiAgICAgICAgeyBocmVmOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9CbGFrZUdlaXN0L25leHQtZmlyZWJhc2UtYm9pbGVyXCIsIGxhYmVsOiBcIkdpdEh1YlwiLCBpc0V4dGVybmFsOiB0cnVlIH1cclxuICAgIF0ubWFwKGxpbmsgPT4ge1xyXG4gICAgICAgIGxpbmsua2V5ID0gYG5hdi1saW5rLSR7bGluay5ocmVmfS0ke2xpbmsubGFiZWx9YDtcclxuICAgICAgICByZXR1cm4gbGluaztcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUxvZ291dCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGZpcmViYXNlLmF1dGgoKS5zaWduT3V0KClcclxuICAgICAgICAgICAgLnRoZW4oKCk9PntcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfSVRFTVwiLCBuYW1lOiBcInVzZXJcIiwgcGF5bG9hZDoge30gfSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh7IHR5cGU6IFwiU0VUX0lURU1cIiwgbmFtZTogXCJpc0xvZ2dlZEluXCIsIHBheWxvYWQ6IGZhbHNlIH0pO1xyXG4gICAgICAgICAgICAgICAgY29va2llLnJlbW92ZShcInRva2VuMlwiKTtcclxuICAgICAgICAgICAgICAgIGlmKHJvdXRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKHJvdXRlci5wYXRobmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IGhhbmRsZU9wZW5Nb2RhbCA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfSVRFTVwiLCBuYW1lOiBcIm1vZGFsVGFyZ2V0XCIsIHBheWxvYWQ6IDxMb2dpbk1vZGFsIC8+IH0pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgTGlua0l0ZW0gPSAoeyBpc0V4dGVybmFsLCBocmVmLCBsYWJlbCwgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgICBpZihpc0V4dGVybmFsKXtcclxuICAgICAgICAgICAgcmV0dXJuIDxhIGhyZWY9e2hyZWZ9IGNsYXNzTmFtZT1cIm5hdkl0ZW1cIiB0YXJnZXQ9XCJfYmxhbmtcIj57bGFiZWx9PC9hPjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9bbGFuZ10ke3RhcmdldH1gfSBhcz17aHJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2SXRlbVwiPntsYWJlbH08L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxuYXY+XHJcbiAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge2xlZnROYXYubWFwKCh7IGtleSwgaHJlZiwgbGFiZWwsIGlzRXh0ZXJuYWwsIHRhcmdldCB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2tleX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua0l0ZW0gaHJlZj17aHJlZn0gbGFiZWw9e2xhYmVsfSBpc0V4dGVybmFsPXtpc0V4dGVybmFsfSB0YXJnZXQ9e3RhcmdldH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidXNlci1uYXZcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dXNlciAmJiB1c2VyLnVpZCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1tsYW5nXS9kYXNoYm9hcmRcIiBhcz17YC8ke2xhbmd9L2Rhc2hib2FyZGB9PjxhIGNsYXNzTmFtZT1cIm5hdkl0ZW1cIj57dHJhbnNsYXRlKFwiREFTSEJPQVJEXCIsIHN0cmluZ3MsIGxhbmcpfTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJuYXZJdGVtXCIgb25DbGljaz17aGFuZGxlTG9nb3V0fT57dHJhbnNsYXRlKFwiTE9HT1VUXCIsIHN0cmluZ3MsIGxhbmcpfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nL1tsYW5nXS9zaWduLXVwJyBhcz17YC8ke2xhbmd9L3NpZ24tdXBgfT48YSBjbGFzc05hbWU9XCJuYXZJdGVtXCI+e3RyYW5zbGF0ZShcIlNJR04tVVBcIiwgc3RyaW5ncywgbGFuZyl9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17ZSA9PiBoYW5kbGVPcGVuTW9kYWwoZSl9IGNsYXNzTmFtZT1cIm5hdkl0ZW1cIiBocmVmPXtcIi9bbGFuZ10vbG9naW5cIn0gYXM9e2AvJHtsYW5nfS9sb2dpbmB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb2dpblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5uYXZJdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzA2N2RmNztcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoYm9keSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBBdmVuaXIgTmV4dCwgQXZlbmlyLFxyXG4gICAgICAgICAgICAgICAgICAgIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudXNlci1uYXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMCAxIGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxpOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIiB8IFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxpOmxhc3Qtb2YtdHlwZTphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmF2IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlID0+IHN0YXRlKShOYXYpO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Blake Geist\\Documents\\blakes-apps\\react\\next-firebase-boiler\\src\\app\\components\\Nav.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2968377513",
    __self: undefined
  }, "body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;}ul.jsx-3756164257{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;}.user-nav.jsx-3756164257{-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;}li.jsx-3756164257{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}li.jsx-3756164257:after{content:\" | \";padding:0 5px;}li.jsx-3756164257:last-of-type.jsx-3756164257:after{content:\"\";}nav.jsx-3756164257{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQmxha2UgR2Vpc3RcXERvY3VtZW50c1xcYmxha2VzLWFwcHNcXHJlYWN0XFxuZXh0LWZpcmViYXNlLWJvaWxlclxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXE5hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtR3dCLEFBRzhCLEFBS0ksQUFLQyxBQUdELEFBT0MsQUFJSCxBQUdFLFNBekJRLEVBdUJ6QixHQUprQixjQUNsQiwwQkFYQSxvQkFMYyxBQVFlLEFBY0ssVUFyQmhCLFdBSmxCLDJDQUtBLGlDQU91QixrQkFjdkIsMkVBYnNCLGtCQUNKLHNEQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXEJsYWtlIEdlaXN0XFxEb2N1bWVudHNcXGJsYWtlcy1hcHBzXFxyZWFjdFxcbmV4dC1maXJlYmFzZS1ib2lsZXJcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxOYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgZmlyZWJhc2UgZnJvbSBcImZpcmViYXNlL2FwcFwiO1xyXG5pbXBvcnQgXCJmaXJlYmFzZS9hdXRoXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gXCIuLi9oZWxwZXJzL3F1aWNrSGVscGVyc1wiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IGNsaWVudENyZWRlbnRpYWxzIGZyb20gXCIuLi9jcmVkZW50aWFscy9jbGllbnRcIjtcclxuaW1wb3J0IExvZ2luTW9kYWwgZnJvbSAnLi9Nb2RhbExvZ2luJ1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgTmF2ID0gKHsgcm91dGVyLCB1c2VyLCBkaXNwYXRjaCwgbGFuZywgc3RyaW5ncyB9KSA9PiB7XHJcbiAgXHJcbiAgICBpZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgICAgICAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjbGllbnRDcmVkZW50aWFscyk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxlZnROYXYgPSBbXHJcbiAgICAgICAgeyBocmVmOiBgLyR7bGFuZ31gLCBsYWJlbDogdHJhbnNsYXRlKFwiSE9NRVwiLCBzdHJpbmdzLCBsYW5nKSwgdGFyZ2V0OiBcIi9cIiB9LFxyXG4gICAgICAgIHsgaHJlZjogYC8ke2xhbmd9L2Fib3V0YCwgbGFiZWw6IHRyYW5zbGF0ZShcIkFCT1VULVVTXCIsIHN0cmluZ3MsIGxhbmcpLCB0YXJnZXQ6IFwiL2Fib3V0XCIgfSxcclxuICAgICAgICB7IGhyZWY6IGAvJHtsYW5nfS9jb250YWN0YCwgbGFiZWw6IHRyYW5zbGF0ZShcIkNPTlRBQ1RcIiwgc3RyaW5ncywgbGFuZyksIHRhcmdldDogXCIvY29udGFjdFwiIH0sXHJcbiAgICAgICAgeyBocmVmOiBgLyR7bGFuZ30vcGAsIGxhYmVsOiB0cmFuc2xhdGUoXCJTSE9QXCIsIHN0cmluZ3MsIGxhbmcpLCB0YXJnZXQ6IFwiL3BcIiB9LFxyXG4gICAgICAgIHsgaHJlZjogYC8ke2xhbmd9L2Jsb2dgLCBsYWJlbDogdHJhbnNsYXRlKFwiQkxPR1wiLCBzdHJpbmdzLCBsYW5nKSwgdGFyZ2V0OiBcIi9ibG9nXCIgfSxcclxuICAgICAgICB7IGhyZWY6IFwiaHR0cHM6Ly9naXRodWIuY29tL0JsYWtlR2Vpc3QvbmV4dC1maXJlYmFzZS1ib2lsZXJcIiwgbGFiZWw6IFwiR2l0SHViXCIsIGlzRXh0ZXJuYWw6IHRydWUgfVxyXG4gICAgXS5tYXAobGluayA9PiB7XHJcbiAgICAgICAgbGluay5rZXkgPSBgbmF2LWxpbmstJHtsaW5rLmhyZWZ9LSR7bGluay5sYWJlbH1gO1xyXG4gICAgICAgIHJldHVybiBsaW5rO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlTG9nb3V0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25PdXQoKVxyXG4gICAgICAgICAgICAudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9JVEVNXCIsIG5hbWU6IFwidXNlclwiLCBwYXlsb2FkOiB7fSB9KTtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogXCJTRVRfSVRFTVwiLCBuYW1lOiBcImlzTG9nZ2VkSW5cIiwgcGF5bG9hZDogZmFsc2UgfSk7XHJcbiAgICAgICAgICAgICAgICBjb29raWUucmVtb3ZlKFwidG9rZW4yXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYocm91dGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2gocm91dGVyLnBhdGhuYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgaGFuZGxlT3Blbk1vZGFsID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiBcIlNFVF9JVEVNXCIsIG5hbWU6IFwibW9kYWxUYXJnZXRcIiwgcGF5bG9hZDogPExvZ2luTW9kYWwgLz4gfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBMaW5rSXRlbSA9ICh7IGlzRXh0ZXJuYWwsIGhyZWYsIGxhYmVsLCB0YXJnZXQgfSkgPT4ge1xyXG4gICAgICAgIGlmKGlzRXh0ZXJuYWwpe1xyXG4gICAgICAgICAgICByZXR1cm4gPGEgaHJlZj17aHJlZn0gY2xhc3NOYW1lPVwibmF2SXRlbVwiIHRhcmdldD1cIl9ibGFua1wiPntsYWJlbH08L2E+O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL1tsYW5nXSR7dGFyZ2V0fWB9IGFzPXtocmVmfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZJdGVtXCI+e2xhYmVsfTwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7bGVmdE5hdi5tYXAoKHsga2V5LCBocmVmLCBsYWJlbCwgaXNFeHRlcm5hbCwgdGFyZ2V0IH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rSXRlbSBocmVmPXtocmVmfSBsYWJlbD17bGFiZWx9IGlzRXh0ZXJuYWw9e2lzRXh0ZXJuYWx9IHRhcmdldD17dGFyZ2V0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1c2VyLW5hdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt1c2VyICYmIHVzZXIudWlkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvW2xhbmddL2Rhc2hib2FyZFwiIGFzPXtgLyR7bGFuZ30vZGFzaGJvYXJkYH0+PGEgY2xhc3NOYW1lPVwibmF2SXRlbVwiPnt0cmFuc2xhdGUoXCJEQVNIQk9BUkRcIiwgc3RyaW5ncywgbGFuZyl9PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cIm5hdkl0ZW1cIiBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9Pnt0cmFuc2xhdGUoXCJMT0dPVVRcIiwgc3RyaW5ncywgbGFuZyl9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvW2xhbmddL3NpZ24tdXAnIGFzPXtgLyR7bGFuZ30vc2lnbi11cGB9PjxhIGNsYXNzTmFtZT1cIm5hdkl0ZW1cIj57dHJhbnNsYXRlKFwiU0lHTi1VUFwiLCBzdHJpbmdzLCBsYW5nKX08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtlID0+IGhhbmRsZU9wZW5Nb2RhbChlKX0gY2xhc3NOYW1lPVwibmF2SXRlbVwiIGhyZWY9e1wiL1tsYW5nXS9sb2dpblwifSBhcz17YC8ke2xhbmd9L2xvZ2luYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLm5hdkl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDY3ZGY3O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbChib2R5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIEF2ZW5pciBOZXh0LCBBdmVuaXIsXHJcbiAgICAgICAgICAgICAgICAgICAgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC51c2VyLW5hdntcclxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAwIDEgYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGk6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiIHwgXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGk6bGFzdC1vZi10eXBlOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBuYXYge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gc3RhdGUpKE5hdik7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Blake Geist\\Documents\\blakes-apps\\react\\next-firebase-boiler\\src\\app\\components\\Nav.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(state => state)(Nav));

/***/ }),

/***/ "./components/NewsLetterForm.js":
/*!**************************************!*\
  !*** ./components/NewsLetterForm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/quickHelpers */ "./helpers/quickHelpers.js");
/* harmony import */ var _helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Blake Geist\\Documents\\blakes-apps\\react\\next-firebase-boiler\\src\\app\\components\\NewsLetterForm.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const NewsLetterForm = ({
  user,
  lang,
  strings
}) => {
  const initalEmail = user.email || '';
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: {
      email: initalEmail
    },
    validate: values => {
      const errors = {};

      if (!values.email) {
        errors.email = "Required";
      }

      return errors;
    },
    onSubmit: async (values, {
      setSubmitting
    }) => {
      const payload = {
        email: values.email
      };

      if (user.uid) {
        payload.uid = user.uid;
      }

      await axios__WEBPACK_IMPORTED_MODULE_5___default.a.post("/api/addEmailToNewsLetter", payload);
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, ({
    errors,
    touched,
    handleSubmit,
    isSubmitting
  }) => __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-1547168735",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1547168735",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_3__["translate"])("SIGN-UP-FOR-OUR-NEWSLETTER", strings, lang)), __jsx("div", {
    className: "jsx-1547168735" + " " + "newsLetter-inputs",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, __jsx("label", {
    className: "jsx-1547168735",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "email",
    className: "form-input",
    placeholder: Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_3__["translate"])("EMAIL", strings, lang),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }), errors.email && touched.email && errors.email), __jsx("button", {
    type: "submit",
    disabled: isSubmitting,
    className: "jsx-1547168735",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_3__["translate"])("SUBMIT", strings, lang))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1547168735",
    __self: undefined
  }, "form.jsx-1547168735{text-align:left;}.newsLetter-inputs.jsx-1547168735{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQmxha2UgR2Vpc3RcXERvY3VtZW50c1xcYmxha2VzLWFwcHNcXHJlYWN0XFxuZXh0LWZpcmViYXNlLWJvaWxlclxcc3JjXFxhcHBcXGNvbXBvbmVudHNcXE5ld3NMZXR0ZXJGb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDZ0MsQUFHeUMsQUFHSCxnQkFGakIsMERBR0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxCbGFrZSBHZWlzdFxcRG9jdW1lbnRzXFxibGFrZXMtYXBwc1xccmVhY3RcXG5leHQtZmlyZWJhc2UtYm9pbGVyXFxzcmNcXGFwcFxcY29tcG9uZW50c1xcTmV3c0xldHRlckZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvcm1paywgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCI7XHJcbmltcG9ydCB7IHRyYW5zbGF0ZSB9IGZyb20gXCIuLi9oZWxwZXJzL3F1aWNrSGVscGVyc1wiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IE5ld3NMZXR0ZXJGb3JtID0gKHsgdXNlciwgbGFuZywgc3RyaW5ncyB9KSA9PiB7XHJcbiAgICBjb25zdCBpbml0YWxFbWFpbCA9IHVzZXIuZW1haWwgfHwgJyc7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgaW5pdGlhbFZhbHVlcz17eyBlbWFpbDogaW5pdGFsRW1haWwgfX1cclxuICAgICAgICAgICAgdmFsaWRhdGU9e3ZhbHVlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvcnMgPSB7fTtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsdWVzLmVtYWlsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzLmVtYWlsID0gXCJSZXF1aXJlZFwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVycm9ycztcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgb25TdWJtaXQ9e2FzeW5jICh2YWx1ZXMsIHsgc2V0U3VibWl0dGluZyB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXlsb2FkID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB2YWx1ZXMuZW1haWxcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHVzZXIudWlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZC51aWQgPSB1c2VyLnVpZFxyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL2FkZEVtYWlsVG9OZXdzTGV0dGVyXCIsIHBheWxvYWQpXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7KHtcclxuICAgICAgICAgICAgICAgIGVycm9ycyxcclxuICAgICAgICAgICAgICAgIHRvdWNoZWQsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQsXHJcbiAgICAgICAgICAgICAgICBpc1N1Ym1pdHRpbmcsXHJcbiAgICAgICAgICAgIH0pID0+IChcclxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+e3RyYW5zbGF0ZShcIlNJR04tVVAtRk9SLU9VUi1ORVdTTEVUVEVSXCIsIHN0cmluZ3MsIGxhbmcpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c0xldHRlci1pbnB1dHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkIG5hbWU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIiBwbGFjZWhvbGRlcj17dHJhbnNsYXRlKFwiRU1BSUxcIiwgc3RyaW5ncywgbGFuZyl9Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvcnMuZW1haWwgJiYgdG91Y2hlZC5lbWFpbCAmJiBlcnJvcnMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpc2FibGVkPXtpc1N1Ym1pdHRpbmd9Pnt0cmFuc2xhdGUoXCJTVUJNSVRcIiwgc3RyaW5ncywgbGFuZyl9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICBmb3JtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm5ld3NMZXR0ZXItaW5wdXRzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZSA9PiBzdGF0ZSkoTmV3c0xldHRlckZvcm0pO1xyXG4iXX0= */\n/*@ sourceURL=C:\\Users\\Blake Geist\\Documents\\blakes-apps\\react\\next-firebase-boiler\\src\\app\\components\\NewsLetterForm.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(state => state)(NewsLetterForm));

/***/ }),

/***/ "./components/NewsLetterFormOr.js":
/*!****************************************!*\
  !*** ./components/NewsLetterFormOr.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NewsLetterForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsLetterForm */ "./components/NewsLetterForm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Blake Geist\\Documents\\blakes-apps\\react\\next-firebase-boiler\\src\\app\\components\\NewsLetterFormOr.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const NewsLetterOr = ({
  children,
  user
}) => {
  if (user.isSubscribedToNewsletter) {
    return children;
  }

  return __jsx(_NewsLetterForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 12
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(state => state)(NewsLetterOr));

/***/ }),

/***/ "./credentials/client.js":
/*!*******************************!*\
  !*** ./credentials/client.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  // paste your firebase config here:
  apiKey: "AIzaSyCCVcObmhVvlRj4j2NdMJqmUeGVRuVF7qY",
  authDomain: "next-firebase-boiler.firebaseapp.com",
  databaseURL: "https://next-firebase-boiler.firebaseio.com",
  projectId: "next-firebase-boiler",
  storageBucket: "next-firebase-boiler.appspot.com",
  messagingSenderId: "10012920341",
  appId: "1:10012920341:web:14cd40691b942ed14f1c1c"
};

/***/ }),

/***/ "./helpers/languages.js":
/*!******************************!*\
  !*** ./helpers/languages.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  lang: "ar",
  name: "عربى"
}, {
  lang: "es",
  name: "Español"
}, {
  lang: "da",
  name: "Dansk"
}, {
  lang: "de",
  name: "Deutsche"
}, {
  lang: "en",
  name: "English"
}, {
  lang: "fr",
  name: "Français"
}, {
  lang: "it",
  name: "Italiano"
}, {
  lang: "jp",
  name: "日本語"
}, {
  lang: "ko",
  name: "한국어"
}, {
  lang: "pt",
  name: "Português"
}, {
  lang: "ru",
  name: "Pусский"
}]);

/***/ }),

/***/ "./helpers/quickHelpers.js":
/*!*********************************!*\
  !*** ./helpers/quickHelpers.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _parseFloat = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");

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

/***/ "./layouts/Layout.js":
/*!***************************!*\
  !*** ./layouts/Layout.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LoadingSpinner */ "./components/LoadingSpinner.js");
/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Modal */ "./components/Modal.js");
var _jsxFileName = "C:\\Users\\Blake Geist\\Documents\\blakes-apps\\react\\next-firebase-boiler\\src\\app\\layouts\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







const Layout = ({
  children,
  pageMod
}) => {
  const containerClass = pageMod ? "container " + pageMod + "-page" : "container";
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }), __jsx("main", {
    className: "jsx-3474998234" + " " + "body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-3474998234" + " " + (containerClass || ""),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-3474998234",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, children))), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx(_components_LoadingSpinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx(_components_Modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3474998234",
    __self: undefined
  }, "html,body,#__next{height:100%;}#__next{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}body{background-color:#f1f1f1;}main{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;}main .container{height:100%;background-color:#fff;min-height:500px;}.container{max-width:1150px;margin:0 auto;}.container .container{padding:0 24px;}h1{margin:0;padding:2rem 0 1rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQmxha2UgR2Vpc3RcXERvY3VtZW50c1xcYmxha2VzLWFwcHNcXHJlYWN0XFxuZXh0LWZpcmViYXNlLWJvaWxlclxcc3JjXFxhcHBcXGxheW91dHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQitCLEFBRzZCLEFBR0MsQUFJWSxBQUdYLEFBR0YsQUFLSyxBQUlGLEFBR04sU0FDVyxHQXpCdEIsQUFhd0IsR0FTeEIsRUFKZ0IsUUFYaEIsSUFtQkEsRUFQQSxHQUxtQixpQkFDbkIsR0FMQSxvQkFQd0IsOEVBQ3hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQmxha2UgR2Vpc3RcXERvY3VtZW50c1xcYmxha2VzLWFwcHNcXHJlYWN0XFxuZXh0LWZpcmViYXNlLWJvaWxlclxcc3JjXFxhcHBcXGxheW91dHNcXExheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGluZ1NwaW5uZXJcIjtcclxuaW1wb3J0IE1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL01vZGFsXCI7XHJcblxyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgcGFnZU1vZCB9KSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXJDbGFzcyA9ICgocGFnZU1vZCkgPyBcImNvbnRhaW5lciBcIiArIHBhZ2VNb2QgKyBcIi1wYWdlXCIgOiBcImNvbnRhaW5lclwiKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwiYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NvbnRhaW5lckNsYXNzfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PnsgY2hpbGRyZW4gfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgICA8TG9hZGluZ1NwaW5uZXIgLz5cclxuICAgICAgICAgICAgPE1vZGFsIC8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXHJcbiAgICAgICAgICAgICAgaHRtbCwgYm9keSwgI19fbmV4dCB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICNfX25leHR7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYm9keXtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG1haW4ge1xyXG4gICAgICAgICAgICAgICAgZmxleDogMSAxIDEwMCU7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIG1haW4gLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIC5jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMTUwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLmNvbnRhaW5lciAuY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjRweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnJlbSAwIDFyZW07ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gc3RhdGUpKExheW91dCk7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Blake Geist\\Documents\\blakes-apps\\react\\next-firebase-boiler\\src\\app\\layouts\\Layout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(state => state)(Layout));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-float */ "core-js/library/fn/parse-float");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? Object(arguments[i]) : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/next/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./pages/[lang]/dashboard/index.js":
/*!*****************************************!*\
  !*** ./pages/[lang]/dashboard/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../layouts/Layout */ "./layouts/Layout.js");
/* harmony import */ var _helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../helpers/quickHelpers */ "./helpers/quickHelpers.js");
/* harmony import */ var _helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\Blake Geist\\Documents\\blakes-apps\\react\\next-firebase-boiler\\src\\app\\pages\\[lang]\\dashboard\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const Dashbaord = ({
  user,
  lang,
  pageStrings
}) => {
  return __jsx(_layouts_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pageMod: "dashboard",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3930483435" + " " + "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "jsx-3930483435",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, user.email), __jsx("nav", {
    className: "jsx-3930483435",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/[lang]/dashboard/strings",
    as: `/${lang}/dashboard/strings`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, __jsx("a", {
    className: "jsx-3930483435",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }, Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_4__["translate"])("MANAGE-STRINGS", pageStrings, lang))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3930483435",
    __self: undefined
  }, ".cards{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQmxha2UgR2Vpc3RcXERvY3VtZW50c1xcYmxha2VzLWFwcHNcXHJlYWN0XFxuZXh0LWZpcmViYXNlLWJvaWxlclxcc3JjXFxhcHBcXHBhZ2VzXFxbbGFuZ11cXGRhc2hib2FyZFxcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUIrQixBQUd3QiwwRUFDRSx5REFDZSxtSEFDaEMiLCJmaWxlIjoiQzpcXFVzZXJzXFxCbGFrZSBHZWlzdFxcRG9jdW1lbnRzXFxibGFrZXMtYXBwc1xccmVhY3RcXG5leHQtZmlyZWJhc2UtYm9pbGVyXFxzcmNcXGFwcFxccGFnZXNcXFtsYW5nXVxcZGFzaGJvYXJkXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi9sYXlvdXRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyB0cmFuc2xhdGUgfSBmcm9tIFwiLi4vLi4vLi4vaGVscGVycy9xdWlja0hlbHBlcnNcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuY29uc3QgRGFzaGJhb3JkID0gKHsgdXNlciwgbGFuZywgcGFnZVN0cmluZ3MgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0IHBhZ2VNb2Q9XCJkYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMT57dXNlci5lbWFpbH08L2gxPlxyXG4gICAgICAgICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScvW2xhbmddL2Rhc2hib2FyZC9zdHJpbmdzJyBhcz17YC8ke2xhbmd9L2Rhc2hib2FyZC9zdHJpbmdzYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPnt0cmFuc2xhdGUoXCJNQU5BR0UtU1RSSU5HU1wiLCBwYWdlU3RyaW5ncywgbGFuZyl9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAuY2FyZHMge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn07XHJcblxyXG5EYXNoYmFvcmQuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcmVkdXhTdG9yZSwgcmVxLCBxdWVyeSwgcmVzIH0pID0+IHtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RhdGUgPT4gc3RhdGUpKERhc2hiYW9yZCk7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\Users\\Blake Geist\\Documents\\blakes-apps\\react\\next-firebase-boiler\\src\\app\\pages\\[lang]\\dashboard\\index.js */"));
};

Dashbaord.getInitialProps = async ({
  reduxStore,
  req,
  query,
  res
}) => {};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(state => state)(Dashbaord));

/***/ }),

/***/ 7:
/*!***********************************************!*\
  !*** multi ./pages/[lang]/dashboard/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Blake Geist\Documents\blakes-apps\react\next-firebase-boiler\src\app\pages\[lang]\dashboard\index.js */"./pages/[lang]/dashboard/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-float":
/*!*************************************************!*\
  !*** external "core-js/library/fn/parse-float" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "recompose":
/*!****************************!*\
  !*** external "recompose" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=dashboard.js.map