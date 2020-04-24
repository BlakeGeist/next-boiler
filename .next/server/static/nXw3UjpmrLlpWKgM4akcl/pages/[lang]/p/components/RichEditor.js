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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("21VA");


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

/***/ "Hz3a":
/***/ (function(module, exports) {

module.exports = require("draft-js");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

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

/***/ })

/******/ });