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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ({

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("m7Ez");


/***/ }),

/***/ "CX0x":
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__("eVuF");

const AWS = __webpack_require__("DaQf");

const admin = __webpack_require__("NWFc");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(__webpack_require__("GUw+"))
  });
}

const db = admin.firestore();

const cors = __webpack_require__("Xm2/")({
  origin: true
});

const stringsCollection = db.collection("strings"); //takes a string(text) and a (slug)
//check the database for if the slug already exists
//if it does, this should prolly be an update function
//if the string does not exist, run the createString funciton

exports.handler = (req, res) => {
  cors(req, res, async () => {
    const {
      slug,
      text,
      scope
    } = req.body;

    try {
      var existingDoc = stringsCollection.doc(slug).get();
      var docExists = existingDoc.exists;

      if (docExists) {//// TODO: create update strings function
      } else {
        const strings = await createStrings(text, slug, scope);
        res.status(200).send(strings);
      }
    } catch (error) {
      res.status(500).send(error);
    }
  });
}; //takes a string(text) and a (slug)
//check the database for if the slug already exists
//if it does, this should prolly be an update function
//if the string does not exist, run the createString funciton


async function createStrings(stringText, slug, scope) {
  const object = {
    ar: await getTranslatedString(stringText, "ar"),
    da: await getTranslatedString(stringText, "da"),
    de: await getTranslatedString(stringText, "de"),
    en: await getTranslatedString(stringText, "en"),
    es: await getTranslatedString(stringText, "es"),
    fr: await getTranslatedString(stringText, "fr"),
    it: await getTranslatedString(stringText, "it"),
    jp: await getTranslatedString(stringText, "ja"),
    ko: await getTranslatedString(stringText, "ko"),
    pt: await getTranslatedString(stringText, "pt"),
    ru: await getTranslatedString(stringText, "ru")
  };
  stringsCollection.doc(scope).collection("strings").doc(slug).set(object).then(() => {
    return object;
  }).catch(e => {});
  return object;
} //takes a string and a target language, sends it to AWS translate, and returns the result


async function getTranslatedString(string, targetLang) {
  AWS.config.region = "us-east-1";
  var ep = new AWS.Endpoint("https://translate.us-east-1.amazonaws.com");
  AWS.config.credentials = new AWS.Credentials("AKIAJQLVBELRL5AAMZOA", "Kl0ArGHFySw+iBEdGXZDrTch2V5VAaDbSs+EKKEZ");
  var translate = new AWS.Translate();
  translate.endpoint = ep;
  var params = {
    Text: string,
    SourceLanguageCode: "en",
    TargetLanguageCode: targetLang
  };
  var promise = new _Promise((resolve, reject) => {
    translate.translateText(params, (err, data) => {
      if (err) return reject(err);else {
        return resolve(data);
      }
    });
  });
  var result = await promise;
  return result.TranslatedText;
}

/***/ }),

/***/ "DaQf":
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),

/***/ "GUw+":
/***/ (function(module, exports) {

module.exports = {
  "type": "service_account",
  "project_id": "next-firebase-boiler",
  "private_key_id": "62e3a48bd0b82d92f56041fc5de5611d4389c4dc",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC7gXMREca6QnQl\noXEkuyL2kJtYVtyaVIkThrCc70SU5/cZkUI/nZxGxd4qp7po01nDg7y/CxMYtsGT\nH2YhINzr1Oe6PsH7SixQRbKvi0WY+cOMrcdGWj+kIMsOt2rto+fGnXkNlleTvIuV\n4w1IX/Z00hHo59EjCfCZXyraa6x4YRNhL6Gh4KlsX3Sn51P2av9Uefek/FRcaUjs\n3679SoRNDYxBWfyRdmzSrVji+QbXANbILcw0MvnV7qBy+3chE5FW3CwcOlvqUUiP\nrQUfcjlAKIXOKGELcYeHtGfzmmq8r+YaeYL9RC0+rCM0yue9/4MkSIZoHHnA2V10\nIQh7xCwlAgMBAAECggEASP6O9gEulQoTvyaHLl5vsP8AirZd8PKh3mkbzixTTYi0\nKE7lNHC+CssyvvZG2lIU6skZLGI6T++tkgGyN4lcl65te5K833+zmphXhIE6WeA5\noUVxg1DU36cohZUf2l1peGeLXZ++fjPzPymB3UAGaNnywPGl9/cBpCNpQliSbtXn\nXDZNCh3JYufxZL+FQyZkKWoT+RRQbyegJ7woLp/RS6fE2jOQ8yPZweSTlTVOoww8\nFZlPkAx6DnqMd1f5wZqqQoBYRgkwn7aeVX/duwtRbWUv8xJnkRQVPulspVhRy1ZM\nARFZZ4DDI5tyb6ck0rQixuQfxTNE6SZeTel0FgpNrQKBgQD9T/pPq6I90RTfhsAc\nVEKFU59bw2NLxN90FkwzsmZ73meQ+BMfNdIScF4JlIDNNec9jAoKQ21KGNpgZJN8\n6O9pDjoFQF6zCYKj8G1sRhg2mOATg4L8SJDoFjnaVhxJmrYuwkrU97K4iGzdrle7\nIehExt6l7R7/96EaahE5QTVHewKBgQC9frvf+vi9DnWdpDrA7F0fU75EyzBSlCVy\neGSVQ1M2KbQTDBrQPxEfrVTYBfbd9te5L2cGSgkBE1DtTl5+g1pFytcA76aSmnnL\nUoklC99waMjRu7yi3hLHsKqw8pULwOUFv0ybVGeJepGH3BCnmWbt+0A/sNUte4Xe\n/xtg+qg43wKBgQCOEo5MovHjA+JWIAidmvCYQLdvSx3lAC1nuZ3RnOx36txhZZGr\n/o6tAtLrQpwe/G2Oin2TFhA0782DJMXH2Al2/aCzE1BJ0DqyYgWtJX8tF/8NUsRj\nZPvI/7ZA6+z/p0Mo5JX97lMRxopwpvjTnwfbk0KLA3xQif2UiArS9uzAAwKBgAHJ\ncigYi8PsoPtNkyhCklY7Se4IJHqC3x+HNxuZOO2n0wTi9lXEYnrz/XrUA5HwQ/SB\nF+2dQRx7fCXguU9kGbPSx9hAakezoTZjntt0kzTSKCKiLJM0mOS9K77jarhjp0U4\nmpZUY22OdFTdpGKQNcJEvkRbfIcjRQ3nRfDSLEftAoGBAPdafPxXLX4Pg5+nmTf8\nNkxji80ABwf8IjjGeU3y/OxKHGn2ryV513vLCagsTw/CDPJe6SbODsbb7JfDnVbk\n6TliG2IJh7yrJejzQXra/rpfPirt9cujbfrx3qdTQ52Y939kH9wAEH9jwBGNly1U\nr6fd/ho/JQ7tT4VdSzfl1dyd\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-kaum8@next-firebase-boiler.iam.gserviceaccount.com",
  "client_id": "111252046848511958649",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-kaum8%40next-firebase-boiler.iam.gserviceaccount.com"
};

/***/ }),

/***/ "NWFc":
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),

/***/ "Xm2/":
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "m7Ez":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const stringsModule = __webpack_require__("CX0x");

/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  await stringsModule.handler(req, res);
});

/***/ })

/******/ });