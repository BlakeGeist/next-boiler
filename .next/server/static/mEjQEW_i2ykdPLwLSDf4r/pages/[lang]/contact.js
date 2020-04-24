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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+KcL":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "+NUC":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("HDbY");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("3+Pc"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

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

  if (false) {}

  return WithRouteWrapper;
}

/***/ }),

/***/ "3+Pc":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("+KcL");

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

/***/ "3FTO":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);

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
      className: "jsx-2589857032" + " " + "modal-bg"
    }, __jsx("div", {
      className: "jsx-2589857032" + " " + "modal"
    }, __jsx("div", {
      className: "jsx-2589857032" + " " + "modal-header"
    }, __jsx("span", {
      className: "jsx-2589857032"
    }, "This is the modal header"), __jsx("span", {
      className: "jsx-2589857032"
    }, __jsx("a", {
      onClick: handleCloseModal,
      href: "",
      className: "jsx-2589857032"
    }, "Close"))), __jsx("div", {
      className: "jsx-2589857032" + " " + "modal-body"
    }, modalTarget, "This is the modal body"), __jsx("div", {
      className: "jsx-2589857032" + " " + "modal-footer"
    }, "This is the modal footer")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2589857032"
    }, [".modal-bg.jsx-2589857032{position:fixed;width:100%;height:100%;background-color:rgba(50,115,220,0.3);top:0;left:0;right:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".modal.jsx-2589857032{background-color:#fff;padding:15px;min-width:500px;min-height:300px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", ".modal-header.jsx-2589857032{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".modal-body.jsx-2589857032{-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;}", "input.jsx-2589857032,textarea.jsx-2589857032{width:100%;}"]));
  }

  return null;
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(state => state)(Modal));

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lYAS");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "7ntV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "9f0s":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

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

/***/ "Bqhj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const AuthForm = ({
  email,
  password,
  handleChange,
  handleEmailPassAuth,
  errorMessage
}) => {
  return __jsx("form", {
    onSubmit: handleEmailPassAuth
  }, errorMessage && __jsx("div", null, errorMessage), __jsx("div", null, __jsx("input", {
    type: "email",
    placeholder: "Email",
    value: email,
    name: "email",
    onChange: handleChange,
    required: true
  })), __jsx("div", null, __jsx("input", {
    type: "password",
    placeholder: "Password",
    value: password,
    name: "password",
    onChange: handleChange,
    required: true
  })), __jsx("div", null, __jsx("input", {
    type: "submit"
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (AuthForm);

/***/ }),

/***/ "D9KS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const LoadingSpinner = ({
  isLoading
}) => {
  return isLoading && __jsx("div", {
    className: "jsx-2586767729" + " " + "loader-wrapper"
  }, __jsx("div", {
    className: "jsx-2586767729" + " " + "loader"
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2586767729"
  }, [".loader.jsx-2586767729{border:16px solid #f3f3f3;border-top:16px solid #3498db;border-radius:50%;width:120px;height:120px;-webkit-animation:spin-jsx-2586767729 2s linear infinite;animation:spin-jsx-2586767729 2s linear infinite;}", ".loader-wrapper.jsx-2586767729{position:fixed;margin:auto;height:100%;width:100%;top:0;bottom:0;right:0;left:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:rgba(241,241,241,0.7);}", "@-webkit-keyframes spin-jsx-2586767729{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes spin-jsx-2586767729{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]));
};

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(state => state)(LoadingSpinner));

/***/ }),

/***/ "EuFW":
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "HDbY":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "JwBy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "firebase/app"
var app_ = __webpack_require__("wVQA");
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "firebase/auth"
var auth_ = __webpack_require__("EuFW");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./helpers/quickHelpers.js
var quickHelpers = __webpack_require__("A00i");

// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__("vmXh");
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);

// EXTERNAL MODULE: ./credentials/client.js
var client = __webpack_require__("hmoh");
var client_default = /*#__PURE__*/__webpack_require__.n(client);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: external "recompose"
var external_recompose_ = __webpack_require__("NnCY");

// EXTERNAL MODULE: ./components/AuthForm.js
var AuthForm = __webpack_require__("Bqhj");

// CONCATENATED MODULE: ./components/ModalLogin.js

var __jsx = external_react_default.a.createElement;










const LoginBase = ({
  setState,
  state,
  dispatch,
  lang
}) => {
  if (!app_default.a.apps.length) {
    app_default.a.initializeApp(client_default.a);
  }

  ;
  const {
    email,
    password,
    isLoading,
    errorMessage
  } = state;

  const handleChange = event => {
    let tempObj = Object(objectSpread["a" /* default */])({}, state);

    tempObj[event.target.name] = event.target.value;
    setState(tempObj);
  };

  function updateState(item, payload) {
    let tempObj = Object(objectSpread["a" /* default */])({}, state);

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
    app_default.a.auth().signInWithEmailAndPassword(email, password).then(response => {
      response.user.getIdToken().then(token => {
        //dispatch({ type: 'SET_ITEM', name: 'user', payload: user });
        // eslint-disable-next-line no-undef
        external_js_cookie_default.a.set("token2", token, {
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

  return __jsx(AuthForm["a" /* default */], {
    errorMessage: errorMessage,
    email: email,
    password: password,
    handleEmailPassAuth: handleEmailPassAuth,
    handleChange: handleChange
  });
};

const Login = Object(external_recompose_["compose"])(Object(external_recompose_["withState"])("state", "setState", {
  email: "",
  password: "",
  isLoading: false,
  errorMessage: ""
}))(LoginBase);
/* harmony default export */ var ModalLogin = (Object(external_react_redux_["connect"])(state => state)(Login));
// CONCATENATED MODULE: ./components/Nav.js

var Nav_jsx = external_react_default.a.createElement;












const Nav = ({
  router,
  user,
  dispatch,
  lang,
  strings
}) => {
  if (!app_default.a.apps.length) {
    app_default.a.initializeApp(client_default.a);
  }

  ;
  const leftNav = [{
    href: `/${lang}`,
    label: Object(quickHelpers["translate"])("HOME", strings, lang),
    target: "/"
  }, {
    href: `/${lang}/about`,
    label: Object(quickHelpers["translate"])("ABOUT-US", strings, lang),
    target: "/about"
  }, {
    href: `/${lang}/contact`,
    label: Object(quickHelpers["translate"])("CONTACT", strings, lang),
    target: "/contact"
  }, {
    href: `/${lang}/p`,
    label: Object(quickHelpers["translate"])("SHOP", strings, lang),
    target: "/p"
  }, {
    href: `/${lang}/blog`,
    label: Object(quickHelpers["translate"])("BLOG", strings, lang),
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
    app_default.a.auth().signOut().then(() => {
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
      external_js_cookie_default.a.remove("token2");

      if (router) {
        router_default.a.push(router.pathname);
      }
    });
  };

  const handleOpenModal = e => {
    e.preventDefault();
    dispatch({
      type: "SET_ITEM",
      name: "modalTarget",
      payload: Nav_jsx(ModalLogin, null)
    });
  };

  const LinkItem = ({
    isExternal,
    href,
    label,
    target
  }) => {
    if (isExternal) {
      return Nav_jsx("a", {
        href: href,
        className: "navItem",
        target: "_blank"
      }, label);
    } else {
      return Nav_jsx(link_default.a, {
        href: `/[lang]${target}`,
        as: href
      }, Nav_jsx("a", {
        className: "navItem"
      }, label));
    }
  };

  return Nav_jsx(external_react_default.a.Fragment, null, Nav_jsx("nav", {
    className: "jsx-3756164257"
  }, Nav_jsx("ul", {
    className: "jsx-3756164257"
  }, leftNav.map(({
    key,
    href,
    label,
    isExternal,
    target
  }) => Nav_jsx("li", {
    key: key,
    className: "jsx-3756164257"
  }, Nav_jsx(LinkItem, {
    href: href,
    label: label,
    isExternal: isExternal,
    target: target
  })))), Nav_jsx("ul", {
    className: "jsx-3756164257" + " " + "user-nav"
  }, user && user.uid ? Nav_jsx(external_react_default.a.Fragment, null, Nav_jsx("li", {
    className: "jsx-3756164257"
  }, Nav_jsx(link_default.a, {
    href: "/[lang]/dashboard",
    as: `/${lang}/dashboard`
  }, Nav_jsx("a", {
    className: "jsx-3756164257" + " " + "navItem"
  }, Object(quickHelpers["translate"])("DASHBOARD", strings, lang)))), Nav_jsx("li", {
    className: "jsx-3756164257"
  }, Nav_jsx("a", {
    href: "",
    onClick: handleLogout,
    className: "jsx-3756164257" + " " + "navItem"
  }, Object(quickHelpers["translate"])("LOGOUT", strings, lang)))) : Nav_jsx(external_react_default.a.Fragment, null, Nav_jsx("li", {
    className: "jsx-3756164257"
  }, Nav_jsx(link_default.a, {
    href: "/[lang]/sign-up",
    as: `/${lang}/sign-up`
  }, Nav_jsx("a", {
    className: "jsx-3756164257" + " " + "navItem"
  }, Object(quickHelpers["translate"])("SIGN-UP", strings, lang)))), Nav_jsx("li", {
    className: "jsx-3756164257"
  }, Nav_jsx("a", {
    onClick: e => handleOpenModal(e),
    href: "/[lang]/login",
    as: `/${lang}/login`,
    className: "jsx-3756164257" + " " + "navItem"
  }, "Login"))))), Nav_jsx(style_default.a, {
    id: "875371457"
  }, [".navItem{color:#067df7;-webkit-text-decoration:none;text-decoration:none;font-size:13px;}"]), Nav_jsx(style_default.a, {
    id: "2968377513"
  }, ["body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;}", "ul.jsx-3756164257{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;}", ".user-nav.jsx-3756164257{-webkit-flex:0 1 auto;-ms-flex:0 1 auto;flex:0 1 auto;}", "li.jsx-3756164257{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}", "li.jsx-3756164257:after{content:\" | \";padding:0 5px;}", "li.jsx-3756164257:last-of-type.jsx-3756164257:after{content:\"\";}", "nav.jsx-3756164257{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}"]));
};

/* harmony default export */ var components_Nav = (Object(external_react_redux_["connect"])(state => state)(Nav));
// CONCATENATED MODULE: ./components/Header.js
var Header_jsx = external_react_default.a.createElement;



const Header = () => {
  return Header_jsx("div", null, Header_jsx("div", {
    className: "container"
  }, Header_jsx(components_Nav, null)));
};

/* harmony default export */ var components_Header = (Header);
// CONCATENATED MODULE: ./helpers/languages.js
/* harmony default export */ var languages = ([{
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
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__("YLtl");

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__("QxnH");

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./components/NewsLetterForm.js

var NewsLetterForm_jsx = external_react_default.a.createElement;






const NewsLetterForm = ({
  user,
  lang,
  strings
}) => {
  const initalEmail = user.email || '';
  return NewsLetterForm_jsx(external_formik_["Formik"], {
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

      await external_axios_default.a.post("/api/addEmailToNewsLetter", payload);
    }
  }, ({
    errors,
    touched,
    handleSubmit,
    isSubmitting
  }) => NewsLetterForm_jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-1547168735"
  }, NewsLetterForm_jsx("div", {
    className: "jsx-1547168735"
  }, Object(quickHelpers["translate"])("SIGN-UP-FOR-OUR-NEWSLETTER", strings, lang)), NewsLetterForm_jsx("div", {
    className: "jsx-1547168735" + " " + "newsLetter-inputs"
  }, NewsLetterForm_jsx("label", {
    className: "jsx-1547168735"
  }, NewsLetterForm_jsx(external_formik_["Field"], {
    name: "email",
    className: "form-input",
    placeholder: Object(quickHelpers["translate"])("EMAIL", strings, lang)
  }), errors.email && touched.email && errors.email), NewsLetterForm_jsx("button", {
    type: "submit",
    disabled: isSubmitting,
    className: "jsx-1547168735"
  }, Object(quickHelpers["translate"])("SUBMIT", strings, lang))), NewsLetterForm_jsx(style_default.a, {
    id: "1547168735"
  }, ["form.jsx-1547168735{text-align:left;}", ".newsLetter-inputs.jsx-1547168735{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}"])));
};

/* harmony default export */ var components_NewsLetterForm = (Object(external_react_redux_["connect"])(state => state)(NewsLetterForm));
// CONCATENATED MODULE: ./components/NewsLetterFormOr.js
var NewsLetterFormOr_jsx = external_react_default.a.createElement;




const NewsLetterOr = ({
  children,
  user
}) => {
  if (user.isSubscribedToNewsletter) {
    return children;
  }

  return NewsLetterFormOr_jsx(components_NewsLetterForm, null);
};

/* harmony default export */ var NewsLetterFormOr = (Object(external_react_redux_["connect"])(state => state)(NewsLetterOr));
// CONCATENATED MODULE: ./components/Footer.js

var Footer_jsx = external_react_default.a.createElement;












const Footer = ({
  dispatch,
  lang,
  user,
  strings
}) => {
  const router = Object(router_["useRouter"])();

  const handleLanguageSelectChange = e => {
    router.push(router_default.a.pathname, router_default.a.asPath.split(`/${lang}/`).join(`/${e.target.value}/`), {
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
      return Footer_jsx("option", {
        key: i,
        value: option.lang
      }, option.name);
    };

    return Footer_jsx("div", null, Footer_jsx("label", {
      htmlFor: "languageSelect"
    }, Footer_jsx("div", null, Object(quickHelpers["translate"])("LANGUAGE", strings, lang), ":"), Footer_jsx("select", {
      value: lang,
      onChange: handleLanguageSelectChange,
      id: "languageSelect"
    }, languages.map((option, i) => renderOption(option, i)))));
  };

  const handleLogout = e => {
    e.preventDefault();
    app_default.a.auth().signOut().then(() => {
      dispatch({
        type: "SET_ITEM",
        name: "user",
        payload: {}
      });
      router_default.a.push("/login");
    });
  };

  return Footer_jsx(external_react_default.a.Fragment, null, Footer_jsx("footer", {
    className: "jsx-1902517548"
  }, Footer_jsx("div", {
    className: "jsx-1902517548" + " " + "container footer"
  }, Footer_jsx("div", {
    className: "jsx-1902517548" + " " + "footer-item"
  }, Footer_jsx(LanguageSelect, {
    className: "jsx-1902517548"
  })), Footer_jsx("div", {
    className: "jsx-1902517548" + " " + "footer-item"
  }, Footer_jsx(NewsLetterFormOr, null, "You are already subbscribed to our newsletter!")), Footer_jsx("div", {
    className: "jsx-1902517548" + " " + "footer-item"
  }, "item 1"), Footer_jsx("div", {
    className: "jsx-1902517548" + " " + "footer-item"
  }, Footer_jsx("ul", {
    className: "jsx-1902517548"
  }, Footer_jsx("li", {
    className: "jsx-1902517548"
  }, Footer_jsx(link_default.a, {
    href: "/[lang]",
    as: `/${lang}`
  }, Footer_jsx("a", {
    className: "jsx-1902517548"
  }, Object(quickHelpers["translate"])("HOME", strings, lang)))), Footer_jsx("li", {
    className: "jsx-1902517548"
  }, Footer_jsx(link_default.a, {
    href: "/[lang]/about",
    as: `/${lang}/about`
  }, Footer_jsx("a", {
    className: "jsx-1902517548"
  }, Object(quickHelpers["translate"])("ABOUT-US", strings, lang)))), Footer_jsx("li", {
    className: "jsx-1902517548"
  }, Footer_jsx("a", {
    href: "https://github.com/BlakeGeist/next-firebase-boiler",
    target: "_blank",
    className: "jsx-1902517548"
  }, "GitHub")), user && user.uid ? Footer_jsx(external_react_default.a.Fragment, null, Footer_jsx("li", {
    className: "jsx-1902517548"
  }, Footer_jsx(link_default.a, {
    href: "/[lang]/dashboard",
    as: `/${lang}/dashboard`
  }, Footer_jsx("a", {
    className: "jsx-1902517548" + " " + "navItem"
  }, Object(quickHelpers["translate"])("DASHBOARD", strings, lang)))), Footer_jsx("li", {
    className: "jsx-1902517548"
  }, Footer_jsx("a", {
    href: "",
    onClick: handleLogout,
    className: "jsx-1902517548" + " " + "navItem"
  }, Object(quickHelpers["translate"])("LOGOUT", strings, lang)))) : Footer_jsx(external_react_default.a.Fragment, null, Footer_jsx("li", {
    className: "jsx-1902517548"
  }, Footer_jsx(link_default.a, {
    href: "/[lang]/sign-up",
    as: `/${lang}/sign-up`
  }, Footer_jsx("a", {
    className: "jsx-1902517548" + " " + "navItem"
  }, Object(quickHelpers["translate"])("SIGN-UP", strings, lang)))), Footer_jsx("li", {
    className: "jsx-1902517548"
  }, Footer_jsx(link_default.a, {
    href: "/[lang]/login",
    as: `/${lang}/login`
  }, Footer_jsx("a", {
    className: "jsx-1902517548" + " " + "navItem"
  }, Object(quickHelpers["translate"])("LOGIN", strings, lang)))))))), Footer_jsx("div", {
    className: "jsx-1902517548" + " " + "container"
  }, Footer_jsx("nav", {
    className: "jsx-1902517548"
  }, Footer_jsx("ul", {
    className: "jsx-1902517548" + " " + "terms"
  }, Footer_jsx("li", {
    className: "jsx-1902517548"
  }, Footer_jsx(link_default.a, {
    href: "/[lang]/terms",
    as: `/${lang}/terms`
  }, Footer_jsx("a", {
    className: "jsx-1902517548"
  }, Object(quickHelpers["translate"])("TERMS", strings, lang)))), Footer_jsx("li", {
    className: "jsx-1902517548"
  }, Footer_jsx(link_default.a, {
    href: "/[lang]/privacy",
    as: `/${lang}/privacy`
  }, Footer_jsx("a", {
    className: "jsx-1902517548"
  }, Object(quickHelpers["translate"])("PRIVACY", strings, lang)))))))), Footer_jsx(style_default.a, {
    id: "1902517548"
  }, [".footer{-webkit-column-count:4;column-count:4;background-color:#fff;border-top:3px solid #ccc;}", "footer{text-align:center;}", "footer a{color:#067df7;-webkit-text-decoration:none;-webkit-text-decoration:none;text-decoration:none;font-size:13px;}", "ul.terms{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:0;-webkit-flex:1 1 auto;-ms-flex:1 1 auto;flex:1 1 auto;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", "ul.terms li{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;-webkit-flex:0 0 auto;-ms-flex:0 0 auto;flex:0 0 auto;}", "ul.terms li:after{content:\" | \";padding:0 5px;}", "ul.terms li:last-of-type:after{content:\"\";}", "nav{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", ".footer-item{min-height:150px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}", ".footer-item label{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".footer-item label select{margin:0 5px;}"]));
};

/* harmony default export */ var components_Footer = (Object(external_react_redux_["connect"])(state => state)(Footer));
// EXTERNAL MODULE: ./components/LoadingSpinner.js
var LoadingSpinner = __webpack_require__("D9KS");

// EXTERNAL MODULE: ./components/Modal.js
var Modal = __webpack_require__("3FTO");

// CONCATENATED MODULE: ./layouts/Layout.js

var Layout_jsx = external_react_default.a.createElement;







const Layout = ({
  children,
  pageMod
}) => {
  const containerClass = pageMod ? "container " + pageMod + "-page" : "container";
  return Layout_jsx(external_react_default.a.Fragment, null, Layout_jsx(components_Header, null), Layout_jsx("main", {
    className: "jsx-3474998234" + " " + "body"
  }, Layout_jsx("div", {
    className: "jsx-3474998234" + " " + (containerClass || "")
  }, Layout_jsx("div", {
    className: "jsx-3474998234"
  }, children))), Layout_jsx(components_Footer, null), Layout_jsx(LoadingSpinner["a" /* default */], null), Layout_jsx(Modal["a" /* default */], null), Layout_jsx(style_default.a, {
    id: "3474998234"
  }, ["html,body,#__next{height:100%;}", "#__next{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}", "body{background-color:#f1f1f1;}", "main{-webkit-flex:1 1 100%;-ms-flex:1 1 100%;flex:1 1 100%;}", "main .container{height:100%;background-color:#fff;min-height:500px;}", ".container{max-width:1150px;margin:0 auto;}", ".container .container{padding:0 24px;}", "h1{margin:0;padding:2rem 0 1rem;}"]));
};

/* harmony default export */ var layouts_Layout = __webpack_exports__["a"] = (Object(external_react_redux_["connect"])(state => state)(Layout));

/***/ }),

/***/ "NnCY":
/***/ (function(module, exports) {

module.exports = require("recompose");

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "SD04":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "T22j":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-float");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Wa2I":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("T22j");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YLtl":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "bIOf":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("7ntV");

var _Object$defineProperty = __webpack_require__("9f0s");

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

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("bIOf");

var _interopRequireDefault = __webpack_require__("HDbY");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("SD04"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("+NUC");

var _utils = __webpack_require__("p8BD");
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

    if (false) {}

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

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "hmoh":
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

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "lYAS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("JwBy");
/* harmony import */ var _ContactForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("yvGL");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("A00i");
/* harmony import */ var _helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Contact = ({
  pageStrings,
  lang
}) => {
  return __jsx(_layouts_Layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, __jsx("div", {
    className: "container"
  }, __jsx("h1", null, Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_4__["translate"])("CONTACT-US", pageStrings, lang)), __jsx(_ContactForm__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(state => state)(Contact));

/***/ }),

/***/ "mJK4":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("bIOf");

var _interopRequireDefault = __webpack_require__("HDbY");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("3+Pc"));

var _defineProperty = _interopRequireDefault(__webpack_require__("9f0s"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("qxCs"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("mJK4");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

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

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qxCs":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
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

/***/ "vmXh":
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

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

/***/ }),

/***/ "zrwo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Jo+v");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4mXO");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("pLtp");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vYYK");




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
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ })

/******/ });