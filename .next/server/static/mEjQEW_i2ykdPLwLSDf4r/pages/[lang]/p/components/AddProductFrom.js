module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("9eqF");


/***/ }),

/***/ "21VA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RichEditorExample; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("vYYK");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Hz3a");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_2__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class RichEditorExample extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onChange", editorState => {
      this.props.onChange('editorState', editorState);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "focus", () => this.refs.editor.focus());

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "handleKeyCommand", command => {
      const {
        editorState
      } = this.props;
      const newState = draft_js__WEBPACK_IMPORTED_MODULE_2__["RichUtils"].handleKeyCommand(editorState, command);

      if (newState) {
        this.onChange(newState);
        return true;
      }

      return false;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "onTab", e => {
      const maxDepth = 4;
      this.onChange(draft_js__WEBPACK_IMPORTED_MODULE_2__["RichUtils"].onTab(e, this.props.editorState, maxDepth));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "toggleBlockType", blockType => {
      this.onChange(draft_js__WEBPACK_IMPORTED_MODULE_2__["RichUtils"].toggleBlockType(this.props.editorState, blockType));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, "toggleInlineStyle", inlineStyle => {
      this.onChange(draft_js__WEBPACK_IMPORTED_MODULE_2__["RichUtils"].toggleInlineStyle(this.props.editorState, inlineStyle));
    });
  }

  render() {
    const {
      editorState
    } = this.props; // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.

    let className = 'RichEditor-editor';
    var contentState = editorState.getCurrentContent();

    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    return __jsx("div", {
      className: "RichEditor-root"
    }, __jsx(BlockStyleControls, {
      editorState: editorState,
      onToggle: this.toggleBlockType
    }), __jsx(InlineStyleControls, {
      editorState: editorState,
      onToggle: this.toggleInlineStyle
    }), __jsx("div", {
      className: className,
      onClick: this.focus
    }, __jsx(draft_js__WEBPACK_IMPORTED_MODULE_2__["Editor"], {
      blockStyleFn: getBlockStyle,
      customStyleMap: styleMap,
      editorState: editorState,
      handleKeyCommand: this.handleKeyCommand,
      onChange: this.onChange,
      onTab: this.onTab,
      placeholder: "Tell a story...",
      ref: "editor",
      spellCheck: true
    })));
  }

} // Custom overrides for "code" style.

const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2
  }
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return 'RichEditor-blockquote';

    default:
      return null;
  }
}

class StyleButton extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor() {
    super();

    this.onToggle = e => {
      e.preventDefault();
      this.props.onToggle(this.props.style);
    };
  }

  render() {
    let className = 'RichEditor-styleButton';

    if (this.props.active) {
      className += ' RichEditor-activeButton';
    }

    return __jsx("span", {
      className: className,
      onMouseDown: this.onToggle
    }, this.props.label);
  }

}

const BLOCK_TYPES = [{
  label: 'H1',
  style: 'header-one'
}, {
  label: 'H2',
  style: 'header-two'
}, {
  label: 'H3',
  style: 'header-three'
}, {
  label: 'H4',
  style: 'header-four'
}, {
  label: 'H5',
  style: 'header-five'
}, {
  label: 'H6',
  style: 'header-six'
}, {
  label: 'Blockquote',
  style: 'blockquote'
}, {
  label: 'UL',
  style: 'unordered-list-item'
}, {
  label: 'OL',
  style: 'ordered-list-item'
}, {
  label: 'Code Block',
  style: 'code-block'
}];

const BlockStyleControls = props => {
  const {
    editorState
  } = props;
  const selection = editorState.getSelection();
  const blockType = editorState.getCurrentContent().getBlockForKey(selection.getStartKey()).getType();
  return __jsx("div", {
    className: "RichEditor-controls"
  }, BLOCK_TYPES.map(type => __jsx(StyleButton, {
    key: type.label,
    active: type.style === blockType,
    label: type.label,
    onToggle: props.onToggle,
    style: type.style
  })));
};

var INLINE_STYLES = [{
  label: 'Bold',
  style: 'BOLD'
}, {
  label: 'Italic',
  style: 'ITALIC'
}, {
  label: 'Underline',
  style: 'UNDERLINE'
}, {
  label: 'Monospace',
  style: 'CODE'
}];

const InlineStyleControls = props => {
  var currentStyle = props.editorState.getCurrentInlineStyle();
  return __jsx("div", {
    className: "RichEditor-controls"
  }, INLINE_STYLES.map(type => __jsx(StyleButton, {
    key: type.label,
    active: currentStyle.has(type.style),
    label: type.label,
    onToggle: props.onToggle,
    style: type.style
  })));
};

/***/ }),

/***/ "5kX6":
/***/ (function(module, exports) {

module.exports = require("draft-js-linkify-plugin");

/***/ }),

/***/ "9de7":
/***/ (function(module, exports) {

module.exports = require("draft-js-export-html");

/***/ }),

/***/ "9eqF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("QxnH");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("A00i");
/* harmony import */ var _helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Hz3a");
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _RichEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("21VA");
/* harmony import */ var draft_js_export_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("9de7");
/* harmony import */ var draft_js_export_html__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(draft_js_export_html__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var draft_js_linkify_plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("5kX6");
/* harmony import */ var draft_js_linkify_plugin__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(draft_js_linkify_plugin__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("wVQA");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("EuFW");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(firebase_auth__WEBPACK_IMPORTED_MODULE_10__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











const AddProductFrom = ({
  strings,
  pageStrings,
  lang
}) => {
  const db = firebase_app__WEBPACK_IMPORTED_MODULE_9___default.a.firestore();
  const dis = new draft_js__WEBPACK_IMPORTED_MODULE_5__["EditorState"].createEmpty();
  const linkifyPlugin = draft_js_linkify_plugin__WEBPACK_IMPORTED_MODULE_8___default()();
  const plugins = [linkifyPlugin];
  return __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Formik"], {
    initialValues: {
      name: "",
      editorState: dis
    },
    validate: values => {
      const errors = {};

      if (!values.name) {
        errors.name = "Required";
      }

      return errors;
    },
    onSubmit: async (values, {
      setSubmitting
    }) => {
      const contentState = values.editorState.getCurrentContent();
      let html = Object(draft_js_export_html__WEBPACK_IMPORTED_MODULE_7__["stateToHTML"])(contentState);
      const productsCollection = db.collection("products");
      const product = {
        name: values.name,
        description: html
      };
      await productsCollection.doc(values.name).set(product).then(() => {}).catch(e => {
        res.json({
          error: e
        });
      });
      setSubmitting(false);
    }
  }, ({
    values,
    errors,
    touched,
    handleSubmit,
    isSubmitting,
    setFieldValue,
    handleBlur
  }) => __jsx("form", {
    onSubmit: handleSubmit,
    className: "jsx-2541701229"
  }, __jsx("label", {
    className: "jsx-2541701229"
  }, __jsx("div", {
    className: "jsx-2541701229"
  }, Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_4__["translate"])("PRODUCT-NAME", pageStrings, lang)), __jsx(formik__WEBPACK_IMPORTED_MODULE_2__["Field"], {
    name: "name",
    className: "form-input"
  }), errors.name && touched.name && errors.name), __jsx("label", {
    className: "jsx-2541701229"
  }, __jsx("div", {
    className: "jsx-2541701229"
  }, Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_4__["translate"])("DESCRIPTION", pageStrings, lang)), __jsx(_RichEditor__WEBPACK_IMPORTED_MODULE_6__["default"], {
    editorState: values.editorState,
    onChange: setFieldValue,
    onBlur: handleBlur,
    plugins: plugins
  }), errors.editorState && touched.editorState && errors.editorState), __jsx("button", {
    type: "submit",
    disabled: isSubmitting,
    className: "jsx-2541701229"
  }, Object(_helpers_quickHelpers__WEBPACK_IMPORTED_MODULE_4__["translate"])("SUBMIT", strings, lang)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2541701229"
  }, [".RichEditor-root{background:#fff;border:1px solid #ddd;font-family:'Georgia',serif;font-size:14px;padding:15px;}", ".RichEditor-editor{border-top:1px solid #ddd;cursor:text;font-size:16px;margin-top:10px;}", ".RichEditor-editor .public-DraftEditorPlaceholder-root,.RichEditor-editor .public-DraftEditor-content{margin:0 -15px -15px;padding:15px;}", ".RichEditor-editor .public-DraftEditor-content{min-height:100px;}", ".RichEditor-hidePlaceholder .public-DraftEditorPlaceholder-root{display:none;}", ".RichEditor-editor .RichEditor-blockquote{border-left:5px solid #eee;color:#666;font-family:'Hoefler Text','Georgia',serif;font-style:italic;margin:16px 0;padding:10px 20px;}", ".RichEditor-editor .public-DraftStyleDefault-pre{background-color:rgba(0,0,0,0.05);font-family:'Inconsolata','Menlo','Consolas',monospace;font-size:16px;padding:20px;}", ".RichEditor-controls{font-family:'Helvetica',sans-serif;font-size:14px;margin-bottom:5px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}", ".RichEditor-styleButton{color:#999;cursor:pointer;margin-right:16px;padding:2px 0;display:inline-block;}", ".RichEditor-activeButton{color:#5890ff;}", ".draftJsLinkifyPlugin__link__2ittM,.draftJsLinkifyPlugin__link__2ittM:visited{color:#5e93c5;-webkit-text-decoration:none;text-decoration:none;}", ".draftJsLinkifyPlugin__link__2ittM:hover,.draftJsLinkifyPlugin__link__2ittM:focus{color:#7eadda;outline:0;cursor:pointer;}", ".draftJsLinkifyPlugin__link__2ittM:active{color:#4a7bab;}"])));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(state => state)(AddProductFrom));

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

/***/ "EuFW":
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "Hz3a":
/***/ (function(module, exports) {

module.exports = require("draft-js");

/***/ }),

/***/ "QxnH":
/***/ (function(module, exports) {

module.exports = require("formik");

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

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

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

/***/ "wVQA":
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ })

/******/ });