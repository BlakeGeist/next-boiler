module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js
var object_assign = __webpack_require__("UXZV");
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js

function _extends() {
  _extends = assign_default.a || function (target) {
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js
var objectSpread = __webpack_require__("zrwo");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// CONCATENATED MODULE: ./store.js



const exampleInitialState = {
  isLoading: false,
  modalTarget: null,
  lang: "en",
  strings: {},
  pageStrings: {},
  isLoggedIn: false,
  user: {}
};
const actionTypes = {
  SET_ITEM: "SET_ITEM"
}; // REDUCERS

const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ITEM:
      {
        return assign_default()({}, state, {
          [action.name]: action.payload
        });
      }

    default:
      {
        return state;
      }
  }
}; // ACTIONS

/*
    export const resetCount = () => {
        return { type: actionTypes.RESET };
    };
*/

function initializeStore(initialState = exampleInitialState) {
  return Object(external_redux_["createStore"])(reducer, initialState, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])()));
}
// CONCATENATED MODULE: ./lib/reducers.js


var __jsx = external_react_default.a.createElement;


const isServer = true;
const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

/* harmony default export */ var reducers = (App => {
  return class AppWithRedux extends external_react_default.a.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

      appContext.ctx.reduxStore = reduxStore;
      let appProps = {};

      if (typeof App.getInitialProps === "function") {
        appProps = await App.getInitialProps(appContext);
      }

      return Object(objectSpread["a" /* default */])({}, appProps, {
        initialReduxState: reduxStore.getState()
      });
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return __jsx(App, _extends({}, this.props, {
        reduxStore: this.reduxStore
      }));
    }

  };
});
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./pages/api/helpers/setUserState.js
var setUserState = __webpack_require__("4HbQ");

// EXTERNAL MODULE: ./pages/api/helpers/redirectIfNoLanguage.js
var redirectIfNoLanguage = __webpack_require__("Y3Wu");

// EXTERNAL MODULE: ./pages/api/helpers/getPageStrings.js
var getPageStrings = __webpack_require__("RyNj");

// EXTERNAL MODULE: ./pages/api/helpers/getGlobalStrings.js
var getGlobalStrings = __webpack_require__("K0El");

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");

// CONCATENATED MODULE: ./pages/_app.js
var _app_jsx = external_react_default.a.createElement;









const MyApp = ({
  Component,
  pageProps,
  reduxStore
}) => {
  return _app_jsx(external_react_default.a.Fragment, null, _app_jsx(external_react_redux_["Provider"], {
    store: reduxStore
  }, _app_jsx(Component, pageProps)));
};

MyApp.getInitialProps = async ({
  Component,
  ctx
}) => {
  if (ctx.req) {
    await Object(redirectIfNoLanguage["default"])(ctx);
    await Object(setUserState["default"])(ctx);
  }

  await Object(getPageStrings["default"])(ctx);
  await Object(getGlobalStrings["default"])(ctx);
  ctx.reduxStore.dispatch({
    type: "SET_ITEM",
    name: "lang",
    payload: ctx.query.lang
  });
  const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
  return {
    pageProps
  };
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (reducers(MyApp));

/***/ }),

/***/ "3i/4":
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "4HbQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_getAbsoluteUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ki/z");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("3i/4");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("vmXh");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (async ctx => {
  const {
    apiURL
  } = Object(_helpers_getAbsoluteUrl__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(ctx.req);
  const {
    token2
  } = next_cookies__WEBPACK_IMPORTED_MODULE_2___default()(ctx);
  const getUserResponse = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${apiURL}/api/getUserFromToken`, {
    token: token2
  });
  const user = getUserResponse.data.user;
  user ? ctx.reduxStore.dispatch({
    type: "SET_ITEM",
    name: "user",
    payload: user
  }) : js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.remove('token2');
  user ? ctx.reduxStore.dispatch({
    type: "SET_ITEM",
    name: "isLoggedIn",
    payload: true
  }) : "";
});

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "EuFW":
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "K0El":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wVQA");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("EuFW");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("bnmT");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _credentials_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("hmoh");
/* harmony import */ var _credentials_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_credentials_client__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = (async ctx => {
  if (!firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.apps.length) {
    firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializeApp(_credentials_client__WEBPACK_IMPORTED_MODULE_4___default.a);
  }

  ;
  const db = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.app().firestore();
  const usersRef2 = db.collection("strings").doc("global");
  await usersRef2.get().then(async docSnapshot => {
    if (docSnapshot.exists) {
      let strings = db.collection("strings").doc("global").collection("strings");
      await strings.get().then(snap => {
        strings = snap.docs.map(d => {
          return {
            [d.id]: d.data()
          };
        });

        const objectizedStrings = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, ...strings);

        ctx.reduxStore.dispatch({
          type: "SET_ITEM",
          name: "strings",
          payload: objectizedStrings
        });
      }).catch(e => {});
    } else {}
  });
});

/***/ }),

/***/ "RyNj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("wVQA");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("EuFW");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("bnmT");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_firestore__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _credentials_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("hmoh");
/* harmony import */ var _credentials_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_credentials_client__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = (async ctx => {
  if (!firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.apps.length) {
    firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.initializeApp(_credentials_client__WEBPACK_IMPORTED_MODULE_4___default.a);
  }

  ;
  const db = firebase_app__WEBPACK_IMPORTED_MODULE_1___default.a.app().firestore();
  const pathWithoutLang = ctx.asPath.replace(`/${ctx.query.lang}/`, "").replace("/", "-");
  const usersRef = db.collection("strings").doc("global");
  await usersRef.get().then(async docSnapshot => {
    if (docSnapshot.exists) {
      let pageStrings = db.collection("strings").doc(pathWithoutLang).collection("strings");
      await pageStrings.get().then(snap => {
        pageStrings = snap.docs.map(d => {
          return {
            [d.id]: d.data()
          };
        });

        const objectizedStrings = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, ...pageStrings);

        ctx.reduxStore.dispatch({
          type: "SET_ITEM",
          name: "pageStrings",
          payload: objectizedStrings
        });
      });
    } else {}
  });
});

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "Y3Wu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (ctx => {
  const headers = ctx.req.headers;
  const userRegionLang = headers["accept-language"].split(",")[0].split("-");
  const userLang = userRegionLang[0];
  const userRegion = userRegionLang[1].toLowerCase();

  if (ctx.res && ctx.asPath === '/') {
    ctx.res.writeHead(301, {
      Location: `/${userLang}`,
      // Add the content-type for SEO considerations
      'Content-Type': 'text/html; charset=utf-8'
    });
    ctx.res.end();
  }
});

/***/ }),

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "bnmT":
/***/ (function(module, exports) {

module.exports = require("firebase/firestore");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ "ki/z":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function absoluteUrl(req, setLocalhost) {
  var protocol = "https:";
  var host = req ? req.headers.host : window.location.hostname;

  if (host.indexOf("localhost") > -1) {
    if (setLocalhost) host = setLocalhost;
    protocol = "http:";
  }

  return {
    protocol: protocol,
    host: host,
    apiURL: `${protocol}//${host}`
  };
}

/* harmony default export */ __webpack_exports__["a"] = (absoluteUrl);

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

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

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

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