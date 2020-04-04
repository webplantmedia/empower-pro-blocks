/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./src/hero/block.json":
/*!*****************************!*\
  !*** ./src/hero/block.json ***!
  \*****************************/
/*! exports provided: name, category, attributes, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"leadership-pro-blocks/hero\",\"category\":\"layout\",\"attributes\":{\"url\":{\"type\":\"string\"},\"id\":{\"type\":\"number\"},\"hasParallax\":{\"type\":\"boolean\",\"default\":false},\"dimRatio\":{\"type\":\"number\",\"default\":50},\"overlayColor\":{\"type\":\"string\"},\"customOverlayColor\":{\"type\":\"string\"},\"backgroundType\":{\"type\":\"string\",\"default\":\"image\"},\"focalPoint\":{\"type\":\"object\"},\"minHeight\":{\"type\":\"number\"},\"gradient\":{\"type\":\"string\"},\"customGradient\":{\"type\":\"string\"}}}");

/***/ }),

/***/ "./src/hero/deprecated.js":
/*!********************************!*\
  !*** ./src/hero/deprecated.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared */ "./src/hero/shared.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */


var blockAttributes = {
  url: {
    type: 'string'
  },
  id: {
    type: 'number'
  },
  hasParallax: {
    type: 'boolean',
    default: false
  },
  dimRatio: {
    type: 'number',
    default: 50
  },
  overlayColor: {
    type: 'string'
  },
  customOverlayColor: {
    type: 'string'
  },
  backgroundType: {
    type: 'string',
    default: 'image'
  },
  focalPoint: {
    type: 'object'
  }
};
var deprecated = [{
  attributes: _objectSpread({}, blockAttributes, {
    title: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    contentAlign: {
      type: 'string',
      default: 'center'
    },
    minHeight: {
      type: 'number'
    },
    gradient: {
      type: 'string'
    },
    customGradient: {
      type: 'string'
    }
  }),
  save: function save(_ref) {
    var attributes = _ref.attributes;
    var backgroundType = attributes.backgroundType,
        gradient = attributes.gradient,
        customGradient = attributes.customGradient,
        customOverlayColor = attributes.customOverlayColor,
        dimRatio = attributes.dimRatio,
        focalPoint = attributes.focalPoint,
        hasParallax = attributes.hasParallax,
        overlayColor = attributes.overlayColor,
        url = attributes.url,
        minHeight = attributes.minHeight;
    var overlayColorClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["getColorClassName"])('background-color', overlayColor);

    var gradientClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["__experimentalGetGradientClass"])(gradient);

    var style = backgroundType === _shared__WEBPACK_IMPORTED_MODULE_7__["IMAGE_BACKGROUND_TYPE"] ? Object(_shared__WEBPACK_IMPORTED_MODULE_7__["backgroundImageStyles"])(url) : {};

    if (!overlayColorClass) {
      style.backgroundColor = customOverlayColor;
    }

    if (focalPoint && !hasParallax) {
      style.backgroundPosition = "".concat(Math.round(focalPoint.x * 100), "% ").concat(Math.round(focalPoint.y * 100), "%");
    }

    if (customGradient && !url) {
      style.background = customGradient;
    }

    style.minHeight = minHeight || undefined;
    var classes = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(_shared__WEBPACK_IMPORTED_MODULE_7__["dimRatioToClass"])(dimRatio), overlayColorClass, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      'has-background-dim': dimRatio !== 0,
      'has-parallax': hasParallax,
      'has-background-gradient': customGradient
    }, gradientClass, !url && gradientClass));
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classes,
      style: style
    }, url && (gradient || customGradient) && dimRatio !== 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      "aria-hidden": "true",
      className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('wp-block-cover__gradient-background', gradientClass),
      style: customGradient ? {
        background: customGradient
      } : undefined
    }), _shared__WEBPACK_IMPORTED_MODULE_7__["VIDEO_BACKGROUND_TYPE"] === backgroundType && url && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("video", {
      className: "wp-block-cover__video-background",
      autoPlay: true,
      muted: true,
      loop: true,
      src: url
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "wp-block-cover__inner-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InnerBlocks"].Content, null)));
  }
}, {
  attributes: _objectSpread({}, blockAttributes, {
    title: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    contentAlign: {
      type: 'string',
      default: 'center'
    },
    minHeight: {
      type: 'number'
    },
    gradient: {
      type: 'string'
    },
    customGradient: {
      type: 'string'
    }
  }),
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var backgroundType = attributes.backgroundType,
        gradient = attributes.gradient,
        customGradient = attributes.customGradient,
        customOverlayColor = attributes.customOverlayColor,
        dimRatio = attributes.dimRatio,
        focalPoint = attributes.focalPoint,
        hasParallax = attributes.hasParallax,
        overlayColor = attributes.overlayColor,
        url = attributes.url,
        minHeight = attributes.minHeight;
    var overlayColorClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["getColorClassName"])('background-color', overlayColor);

    var gradientClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["__experimentalGetGradientClass"])(gradient);

    var style = backgroundType === _shared__WEBPACK_IMPORTED_MODULE_7__["IMAGE_BACKGROUND_TYPE"] ? Object(_shared__WEBPACK_IMPORTED_MODULE_7__["backgroundImageStyles"])(url) : {};

    if (!overlayColorClass) {
      style.backgroundColor = customOverlayColor;
    }

    if (focalPoint && !hasParallax) {
      style.backgroundPosition = "".concat(focalPoint.x * 100, "% ").concat(focalPoint.y * 100, "%");
    }

    if (customGradient && !url) {
      style.background = customGradient;
    }

    style.minHeight = minHeight || undefined;
    var classes = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(_shared__WEBPACK_IMPORTED_MODULE_7__["dimRatioToClass"])(dimRatio), overlayColorClass, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      'has-background-dim': dimRatio !== 0,
      'has-parallax': hasParallax,
      'has-background-gradient': customGradient
    }, gradientClass, !url && gradientClass));
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classes,
      style: style
    }, url && (gradient || customGradient) && dimRatio !== 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      "aria-hidden": "true",
      className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('wp-block-cover__gradient-background', gradientClass),
      style: customGradient ? {
        background: customGradient
      } : undefined
    }), _shared__WEBPACK_IMPORTED_MODULE_7__["VIDEO_BACKGROUND_TYPE"] === backgroundType && url && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("video", {
      className: "wp-block-cover__video-background",
      autoPlay: true,
      muted: true,
      loop: true,
      src: url
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "wp-block-cover__inner-container"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["InnerBlocks"].Content, null)));
  }
}, {
  attributes: _objectSpread({}, blockAttributes, {
    title: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    contentAlign: {
      type: 'string',
      default: 'center'
    }
  }),
  supports: {
    align: true
  },
  save: function save(_ref3) {
    var attributes = _ref3.attributes;
    var backgroundType = attributes.backgroundType,
        contentAlign = attributes.contentAlign,
        customOverlayColor = attributes.customOverlayColor,
        dimRatio = attributes.dimRatio,
        focalPoint = attributes.focalPoint,
        hasParallax = attributes.hasParallax,
        overlayColor = attributes.overlayColor,
        title = attributes.title,
        url = attributes.url;
    var overlayColorClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["getColorClassName"])('background-color', overlayColor);
    var style = backgroundType === _shared__WEBPACK_IMPORTED_MODULE_7__["IMAGE_BACKGROUND_TYPE"] ? Object(_shared__WEBPACK_IMPORTED_MODULE_7__["backgroundImageStyles"])(url) : {};

    if (!overlayColorClass) {
      style.backgroundColor = customOverlayColor;
    }

    if (focalPoint && !hasParallax) {
      style.backgroundPosition = "".concat(focalPoint.x * 100, "% ").concat(focalPoint.y * 100, "%");
    }

    var classes = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(_shared__WEBPACK_IMPORTED_MODULE_7__["dimRatioToClass"])(dimRatio), overlayColorClass, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      'has-background-dim': dimRatio !== 0,
      'has-parallax': hasParallax
    }, "has-".concat(contentAlign, "-content"), contentAlign !== 'center'));
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classes,
      style: style
    }, _shared__WEBPACK_IMPORTED_MODULE_7__["VIDEO_BACKGROUND_TYPE"] === backgroundType && url && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("video", {
      className: "wp-block-cover__video-background",
      autoPlay: true,
      muted: true,
      loop: true,
      src: url
    }), !_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"].isEmpty(title) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"].Content, {
      tagName: "p",
      className: "wp-block-cover-text",
      value: title
    }));
  },
  migrate: function migrate(attributes) {
    return [Object(lodash__WEBPACK_IMPORTED_MODULE_2__["omit"])(attributes, ['title', 'contentAlign']), [Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["createBlock"])('core/paragraph', {
      content: attributes.title,
      align: attributes.contentAlign,
      fontSize: 'large',
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Write title…')
    })]];
  }
}, {
  attributes: _objectSpread({}, blockAttributes, {
    title: {
      type: 'string',
      source: 'html',
      selector: 'p'
    },
    contentAlign: {
      type: 'string',
      default: 'center'
    },
    align: {
      type: 'string'
    }
  }),
  supports: {
    className: false
  },
  save: function save(_ref4) {
    var attributes = _ref4.attributes;
    var url = attributes.url,
        title = attributes.title,
        hasParallax = attributes.hasParallax,
        dimRatio = attributes.dimRatio,
        align = attributes.align,
        contentAlign = attributes.contentAlign,
        overlayColor = attributes.overlayColor,
        customOverlayColor = attributes.customOverlayColor;
    var overlayColorClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["getColorClassName"])('background-color', overlayColor);
    var style = Object(_shared__WEBPACK_IMPORTED_MODULE_7__["backgroundImageStyles"])(url);

    if (!overlayColorClass) {
      style.backgroundColor = customOverlayColor;
    }

    var classes = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('wp-block-cover-image', Object(_shared__WEBPACK_IMPORTED_MODULE_7__["dimRatioToClass"])(dimRatio), overlayColorClass, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
      'has-background-dim': dimRatio !== 0,
      'has-parallax': hasParallax
    }, "has-".concat(contentAlign, "-content"), contentAlign !== 'center'), align ? "align".concat(align) : null);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: classes,
      style: style
    }, !_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"].isEmpty(title) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"].Content, {
      tagName: "p",
      className: "wp-block-cover-image-text",
      value: title
    }));
  },
  migrate: function migrate(attributes) {
    return [Object(lodash__WEBPACK_IMPORTED_MODULE_2__["omit"])(attributes, ['title', 'contentAlign', 'align']), [Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["createBlock"])('core/paragraph', {
      content: attributes.title,
      align: attributes.contentAlign,
      fontSize: 'large',
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Write title…')
    })]];
  }
}, {
  attributes: _objectSpread({}, blockAttributes, {
    title: {
      type: 'string',
      source: 'html',
      selector: 'h2'
    },
    align: {
      type: 'string'
    },
    contentAlign: {
      type: 'string',
      default: 'center'
    }
  }),
  supports: {
    className: false
  },
  save: function save(_ref5) {
    var attributes = _ref5.attributes;
    var url = attributes.url,
        title = attributes.title,
        hasParallax = attributes.hasParallax,
        dimRatio = attributes.dimRatio,
        align = attributes.align;
    var style = Object(_shared__WEBPACK_IMPORTED_MODULE_7__["backgroundImageStyles"])(url);
    var classes = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('wp-block-cover-image', Object(_shared__WEBPACK_IMPORTED_MODULE_7__["dimRatioToClass"])(dimRatio), {
      'has-background-dim': dimRatio !== 0,
      'has-parallax': hasParallax
    }, align ? "align".concat(align) : null);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("section", {
      className: classes,
      style: style
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"].Content, {
      tagName: "h2",
      value: title
    }));
  },
  migrate: function migrate(attributes) {
    return [Object(lodash__WEBPACK_IMPORTED_MODULE_2__["omit"])(attributes, ['title', 'contentAlign', 'align']), [Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["createBlock"])('core/paragraph', {
      content: attributes.title,
      align: attributes.contentAlign,
      fontSize: 'large',
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__["__"])('Write title…')
    })]];
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (deprecated);

/***/ }),

/***/ "./src/hero/edit.js":
/*!**************************!*\
  !*** ./src/hero/edit.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'fast-average-color'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'tinycolor2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@wordpress/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared */ "./src/hero/shared.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */








/**
 * Internal dependencies
 */


/**
 * Module Constants
 */

var ALLOWED_MEDIA_TYPES = ['image', 'video'];
var INNER_BLOCKS_TEMPLATE = [['core/paragraph', {
  align: 'center',
  fontSize: 'large',
  placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Write title…')
}]];

function retrieveFastAverageColor() {
  if (!retrieveFastAverageColor.fastAverageColor) {
    retrieveFastAverageColor.fastAverageColor = new !(function webpackMissingModule() { var e = new Error("Cannot find module 'fast-average-color'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
  }

  return retrieveFastAverageColor.fastAverageColor;
}

var CoverHeightInput = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["withInstanceId"])(function (_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      instanceId = _ref.instanceId,
      _onChange = _ref.onChange;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      temporaryInput = _useState2[0],
      setTemporaryInput = _useState2[1];

  var inputId = "block-cover-height-input-".concat(instanceId);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Minimum height in pixels'),
    id: inputId
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("input", {
    type: "number",
    id: inputId,
    onChange: function onChange(event) {
      var unprocessedValue = event.target.value;
      var inputValue = unprocessedValue !== '' ? parseInt(event.target.value, 10) : undefined;

      if ((isNaN(inputValue) || inputValue < _shared__WEBPACK_IMPORTED_MODULE_9__["COVER_MIN_HEIGHT"]) && inputValue !== undefined) {
        setTemporaryInput(event.target.value);
        return;
      }

      setTemporaryInput(null);

      _onChange(inputValue);
    },
    onBlur: function onBlur() {
      if (temporaryInput !== null) {
        setTemporaryInput(null);
      }
    },
    value: temporaryInput !== null ? temporaryInput : value,
    min: _shared__WEBPACK_IMPORTED_MODULE_9__["COVER_MIN_HEIGHT"],
    step: "1"
  }));
});
var RESIZABLE_BOX_ENABLE_OPTION = {
  top: false,
  right: false,
  bottom: true,
  left: false,
  topRight: false,
  bottomRight: false,
  bottomLeft: false,
  topLeft: false
};

function ResizableCover(_ref2) {
  var className = _ref2.className,
      children = _ref2.children,
      _onResizeStart = _ref2.onResizeStart,
      _onResize = _ref2.onResize,
      _onResizeStop = _ref2.onResizeStop;

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      isResizing = _useState4[0],
      setIsResizing = _useState4[1];

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ResizableBox"], {
    className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(className, {
      'is-resizing': isResizing
    }),
    enable: RESIZABLE_BOX_ENABLE_OPTION,
    onResizeStart: function onResizeStart(event, direction, elt) {
      _onResizeStart(elt.clientHeight);

      _onResize(elt.clientHeight);
    },
    onResize: function onResize(event, direction, elt) {
      _onResize(elt.clientHeight);

      if (!isResizing) {
        setIsResizing(true);
      }
    },
    onResizeStop: function onResizeStop(event, direction, elt) {
      _onResizeStop(elt.clientHeight);

      setIsResizing(false);
    },
    minHeight: _shared__WEBPACK_IMPORTED_MODULE_9__["COVER_MIN_HEIGHT"]
  }, children);
}
/**
 * useCoverIsDark is a hook that returns a boolean variable specifying if the cover
 * background is dark or not.
 *
 * @param {?string} url          Url of the media background.
 * @param {?number} dimRatio     Transparency of the overlay color. If an image and
 *                               color are set, dimRatio is used to decide what is used
 *                               for background darkness checking purposes.
 * @param {?string} overlayColor String containing the overlay color value if one exists.
 * @param {?Object} elementRef   If a media background is set, elementRef should contain a reference to a
 *                               dom element that renders that media.
 *
 * @return {boolean} True if the cover background is considered "dark" and false otherwise.
 */


function useCoverIsDark(url) {
  var dimRatio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
  var overlayColor = arguments.length > 2 ? arguments[2] : undefined;
  var elementRef = arguments.length > 3 ? arguments[3] : undefined;

  var _useState5 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      isDark = _useState6[0],
      setIsDark = _useState6[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // If opacity is lower than 50 the dominant color is the image or video color,
    // so use that color for the dark mode computation.
    if (url && dimRatio <= 50 && elementRef.current) {
      retrieveFastAverageColor().getColorAsync(elementRef.current, function (color) {
        setIsDark(color.isDark);
      });
    }
  }, [url, url && dimRatio <= 50 && elementRef.current, setIsDark]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // If opacity is greater than 50 the dominant color is the overlay color,
    // so use that color for the dark mode computation.
    if (dimRatio > 50 || !url) {
      if (!overlayColor) {
        // If no overlay color exists the overlay color is black (isDark )
        setIsDark(true);
        return;
      }

      setIsDark(!(function webpackMissingModule() { var e = new Error("Cannot find module 'tinycolor2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(overlayColor).isDark());
    }
  }, [overlayColor, dimRatio > 50 || !url, setIsDark]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!url && !overlayColor) {
      // Reset isDark
      setIsDark(false);
    }
  }, [!url && !overlayColor, setIsDark]);
  return isDark;
}

function CoverEdit(_ref3) {
  var _classnames;

  var attributes = _ref3.attributes,
      setAttributes = _ref3.setAttributes,
      isSelected = _ref3.isSelected,
      className = _ref3.className,
      noticeUI = _ref3.noticeUI,
      overlayColor = _ref3.overlayColor,
      setOverlayColor = _ref3.setOverlayColor,
      toggleSelection = _ref3.toggleSelection,
      noticeOperations = _ref3.noticeOperations;
  var id = attributes.id,
      backgroundType = attributes.backgroundType,
      dimRatio = attributes.dimRatio,
      focalPoint = attributes.focalPoint,
      hasParallax = attributes.hasParallax,
      minHeight = attributes.minHeight,
      url = attributes.url;

  var _experimentalUseGrad = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["__experimentalUseGradient"])(),
      gradientClass = _experimentalUseGrad.gradientClass,
      gradientValue = _experimentalUseGrad.gradientValue,
      setGradient = _experimentalUseGrad.setGradient;

  var onSelectMedia = Object(_shared__WEBPACK_IMPORTED_MODULE_9__["attributesFromMedia"])(setAttributes);

  var toggleParallax = function toggleParallax() {
    setAttributes(_objectSpread({
      hasParallax: !hasParallax
    }, !hasParallax ? {
      focalPoint: undefined
    } : {}));
  };

  var isDarkElement = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var isDark = useCoverIsDark(url, dimRatio, overlayColor.color, isDarkElement);

  var _useState7 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),
      temporaryMinHeight = _useState8[0],
      setTemporaryMinHeight = _useState8[1];

  var removeAllNotices = noticeOperations.removeAllNotices,
      createErrorNotice = noticeOperations.createErrorNotice;

  var style = _objectSpread({}, backgroundType === _shared__WEBPACK_IMPORTED_MODULE_9__["IMAGE_BACKGROUND_TYPE"] ? Object(_shared__WEBPACK_IMPORTED_MODULE_9__["backgroundImageStyles"])(url) : {}, {
    backgroundColor: overlayColor.color,
    minHeight: temporaryMinHeight || minHeight
  });

  if (gradientValue && !url) {
    style.background = gradientValue;
  }

  if (focalPoint) {
    style.backgroundPosition = "".concat(focalPoint.x * 100, "% ").concat(focalPoint.y * 100, "%");
  }

  var hasBackground = !!(url || overlayColor.color || gradientValue);
  var controls = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["BlockControls"], null, hasBackground && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["MediaReplaceFlow"], {
    mediaId: id,
    mediaURL: url,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    accept: "image/*,video/*",
    onSelect: onSelectMedia
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["InspectorControls"], null, !!url && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Media settings')
  }, _shared__WEBPACK_IMPORTED_MODULE_9__["IMAGE_BACKGROUND_TYPE"] === backgroundType && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Fixed background'),
    checked: hasParallax,
    onChange: toggleParallax
  }), _shared__WEBPACK_IMPORTED_MODULE_9__["IMAGE_BACKGROUND_TYPE"] === backgroundType && !hasParallax && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["FocalPointPicker"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Focal point picker'),
    url: url,
    value: focalPoint,
    onChange: function onChange(newFocalPoint) {
      return setAttributes({
        focalPoint: newFocalPoint
      });
    }
  }), _shared__WEBPACK_IMPORTED_MODULE_9__["VIDEO_BACKGROUND_TYPE"] === backgroundType && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("video", {
    autoPlay: true,
    muted: true,
    loop: true,
    src: url
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    isSecondary: true,
    isSmall: true,
    className: "block-library-cover__reset-button",
    onClick: function onClick() {
      return setAttributes({
        url: undefined,
        id: undefined,
        backgroundType: undefined,
        dimRatio: undefined,
        focalPoint: undefined,
        hasParallax: undefined
      });
    }
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Clear Media')))), hasBackground && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Dimensions')
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(CoverHeightInput, {
    value: temporaryMinHeight || minHeight,
    onChange: function onChange(newMinHeight) {
      return setAttributes({
        minHeight: newMinHeight
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["__experimentalPanelColorGradientSettings"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Overlay'),
    initialOpen: true,
    settings: [{
      colorValue: overlayColor.color,
      gradientValue: gradientValue,
      onColorChange: setOverlayColor,
      onGradientChange: setGradient,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Color')
    }]
  }, !!url && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Background opacity'),
    value: dimRatio,
    onChange: function onChange(newDimRation) {
      return setAttributes({
        dimRatio: newDimRation
      });
    },
    min: 0,
    max: 100,
    step: 10,
    required: true
  })))));

  if (!hasBackground) {
    var placeholderIcon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["BlockIcon"], {
      icon: !(function webpackMissingModule() { var e = new Error("Cannot find module '@wordpress/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
    });

    var label = Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Cover');

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, controls, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["MediaPlaceholder"], {
      icon: placeholderIcon,
      className: className,
      labels: {
        title: label,
        instructions: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Upload an image or video file, or pick one from your media library.')
      },
      onSelect: onSelectMedia,
      accept: "image/*,video/*",
      allowedTypes: ALLOWED_MEDIA_TYPES,
      notices: noticeUI,
      onError: function onError(message) {
        removeAllNotices();
        createErrorNotice(message);
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
      className: "wp-block-cover__placeholder-background-options"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["ColorPalette"], {
      disableCustomColors: true,
      value: overlayColor.color,
      onChange: setOverlayColor,
      clearable: false
    }))));
  }

  var classes = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(className, Object(_shared__WEBPACK_IMPORTED_MODULE_9__["dimRatioToClass"])(dimRatio), (_classnames = {
    'is-dark-theme': isDark,
    'has-background-dim': dimRatio !== 0,
    'has-parallax': hasParallax
  }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, overlayColor.class, overlayColor.class), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'has-background-gradient', gradientValue), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, gradientClass, !url && gradientClass), _classnames));
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, controls, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ResizableCover, {
    className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('block-library-cover__resize-container', {
      'is-selected': isSelected
    }),
    onResizeStart: function onResizeStart() {
      return toggleSelection(false);
    },
    onResize: setTemporaryMinHeight,
    onResizeStop: function onResizeStop(newMinHeight) {
      toggleSelection(true);
      setAttributes({
        minHeight: newMinHeight
      });
      setTemporaryMinHeight(null);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    "data-url": url,
    style: style,
    className: classes
  }, _shared__WEBPACK_IMPORTED_MODULE_9__["IMAGE_BACKGROUND_TYPE"] === backgroundType && // Used only to programmatically check if the image is dark or not
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("img", {
    ref: isDarkElement,
    "aria-hidden": true,
    alt: "",
    style: {
      display: 'none'
    },
    src: url
  }), url && gradientValue && dimRatio !== 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    "aria-hidden": "true",
    className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('wp-block-cover__gradient-background', gradientClass),
    style: {
      background: gradientValue
    }
  }), _shared__WEBPACK_IMPORTED_MODULE_9__["VIDEO_BACKGROUND_TYPE"] === backgroundType && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("video", {
    ref: isDarkElement,
    className: "wp-block-cover__video-background",
    autoPlay: true,
    muted: true,
    loop: true,
    src: url
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "wp-block-cover__inner-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["InnerBlocks"], {
    template: INNER_BLOCKS_TEMPLATE
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["compose"])([Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_8__["withDispatch"])(function (dispatch) {
  var _dispatch = dispatch('core/block-editor'),
      toggleSelection = _dispatch.toggleSelection;

  return {
    toggleSelection: toggleSelection
  };
}), Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["withColors"])({
  overlayColor: 'background-color'
}), _wordpress_components__WEBPACK_IMPORTED_MODULE_4__["withNotices"], _wordpress_compose__WEBPACK_IMPORTED_MODULE_5__["withInstanceId"]])(CoverEdit));

/***/ }),

/***/ "./src/hero/index.js":
/*!***************************!*\
  !*** ./src/hero/index.js ***!
  \***************************/
/*! exports provided: metadata, name, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@wordpress/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _deprecated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deprecated */ "./src/hero/deprecated.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/hero/edit.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/hero/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/hero/block.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "metadata", function() { return _block_json__WEBPACK_IMPORTED_MODULE_4__; });
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./save */ "./src/hero/save.js");
/* harmony import */ var _transforms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transforms */ "./src/hero/transforms.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */






var name = _block_json__WEBPACK_IMPORTED_MODULE_4__.name;

var settings = {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Cover'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Add an image or video with a text overlay — great for headers.'),
  icon: !(function webpackMissingModule() { var e = new Error("Cannot find module '@wordpress/icons'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
  supports: {
    align: true,
    html: false
  },
  example: {
    attributes: {
      customOverlayColor: '#065174',
      dimRatio: 40,
      url: 'https://s.w.org/images/core/5.3/Windbuchencom.jpg'
    },
    innerBlocks: [{
      name: 'core/paragraph',
      attributes: {
        customFontSize: 48,
        content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('<strong>Snow Patrol</strong>'),
        align: 'center'
      }
    }]
  },
  transforms: _transforms__WEBPACK_IMPORTED_MODULE_6__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_5__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  deprecated: _deprecated__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/hero/save.js":
/*!**************************!*\
  !*** ./src/hero/save.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared */ "./src/hero/shared.js");



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */


function save(_ref) {
  var attributes = _ref.attributes;
  var backgroundType = attributes.backgroundType,
      gradient = attributes.gradient,
      customGradient = attributes.customGradient,
      customOverlayColor = attributes.customOverlayColor,
      dimRatio = attributes.dimRatio,
      focalPoint = attributes.focalPoint,
      hasParallax = attributes.hasParallax,
      overlayColor = attributes.overlayColor,
      url = attributes.url,
      minHeight = attributes.minHeight;
  var overlayColorClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["getColorClassName"])('background-color', overlayColor);

  var gradientClass = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["__experimentalGetGradientClass"])(gradient);

  var style = backgroundType === _shared__WEBPACK_IMPORTED_MODULE_4__["IMAGE_BACKGROUND_TYPE"] ? Object(_shared__WEBPACK_IMPORTED_MODULE_4__["backgroundImageStyles"])(url) : {};

  if (!overlayColorClass) {
    style.backgroundColor = customOverlayColor;
  }

  if (focalPoint && !hasParallax) {
    style.backgroundPosition = "".concat(Math.round(focalPoint.x * 100), "% ").concat(Math.round(focalPoint.y * 100), "%");
  }

  if (customGradient && !url) {
    style.background = customGradient;
  }

  style.minHeight = minHeight || undefined;
  var classes = !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(_shared__WEBPACK_IMPORTED_MODULE_4__["dimRatioToClass"])(dimRatio), overlayColorClass, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({
    'has-background-dim': dimRatio !== 0,
    'has-parallax': hasParallax,
    'has-background-gradient': gradient || customGradient
  }, gradientClass, !url && gradientClass));
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: classes,
    style: style
  }, url && (gradient || customGradient) && dimRatio !== 0 && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    "aria-hidden": "true",
    className: !(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('wp-block-cover__gradient-background', gradientClass),
    style: customGradient ? {
      background: customGradient
    } : undefined
  }), _shared__WEBPACK_IMPORTED_MODULE_4__["VIDEO_BACKGROUND_TYPE"] === backgroundType && url && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("video", {
    className: "wp-block-cover__video-background",
    autoPlay: true,
    muted: true,
    loop: true,
    src: url
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "wp-block-cover__inner-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InnerBlocks"].Content, null)));
}

/***/ }),

/***/ "./src/hero/shared.js":
/*!****************************!*\
  !*** ./src/hero/shared.js ***!
  \****************************/
/*! exports provided: IMAGE_BACKGROUND_TYPE, VIDEO_BACKGROUND_TYPE, COVER_MIN_HEIGHT, backgroundImageStyles, dimRatioToClass, attributesFromMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGE_BACKGROUND_TYPE", function() { return IMAGE_BACKGROUND_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VIDEO_BACKGROUND_TYPE", function() { return VIDEO_BACKGROUND_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COVER_MIN_HEIGHT", function() { return COVER_MIN_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundImageStyles", function() { return backgroundImageStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dimRatioToClass", function() { return dimRatioToClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributesFromMedia", function() { return attributesFromMedia; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var IMAGE_BACKGROUND_TYPE = 'image';
var VIDEO_BACKGROUND_TYPE = 'video';
var COVER_MIN_HEIGHT = 50;
function backgroundImageStyles(url) {
  return url ? {
    backgroundImage: "url(".concat(url, ")")
  } : {};
}
function dimRatioToClass(ratio) {
  return ratio === 0 || ratio === 50 || !ratio ? null : 'has-background-dim-' + 10 * Math.round(ratio / 10);
}
function attributesFromMedia(setAttributes) {
  return function (media) {
    if (!media || !media.url) {
      setAttributes({
        url: undefined,
        id: undefined
      });
      return;
    }

    var mediaType; // for media selections originated from a file upload.

    if (media.media_type) {
      if (media.media_type === IMAGE_BACKGROUND_TYPE) {
        mediaType = IMAGE_BACKGROUND_TYPE;
      } else {
        // only images and videos are accepted so if the media_type is not an image we can assume it is a video.
        // Videos contain the media type of 'file' in the object returned from the rest api.
        mediaType = VIDEO_BACKGROUND_TYPE;
      }
    } else {
      // for media selections originated from existing files in the media library.
      if (media.type !== IMAGE_BACKGROUND_TYPE && media.type !== VIDEO_BACKGROUND_TYPE) {
        return;
      }

      mediaType = media.type;
    }

    setAttributes(_objectSpread({
      url: media.url,
      id: media.id,
      backgroundType: mediaType
    }, mediaType === VIDEO_BACKGROUND_TYPE ? {
      focalPoint: undefined,
      hasParallax: undefined
    } : {}));
  };
}

/***/ }),

/***/ "./src/hero/transforms.js":
/*!********************************!*\
  !*** ./src/hero/transforms.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared */ "./src/hero/shared.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


var transforms = {
  from: [{
    type: 'block',
    blocks: ['core/image'],
    transform: function transform(_ref) {
      var caption = _ref.caption,
          url = _ref.url,
          align = _ref.align,
          id = _ref.id;
      return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["createBlock"])('core/cover', {
        title: caption,
        url: url,
        align: align,
        id: id
      });
    }
  }, {
    type: 'block',
    blocks: ['core/video'],
    transform: function transform(_ref2) {
      var caption = _ref2.caption,
          src = _ref2.src,
          align = _ref2.align,
          id = _ref2.id;
      return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["createBlock"])('core/cover', {
        title: caption,
        url: src,
        align: align,
        id: id,
        backgroundType: _shared__WEBPACK_IMPORTED_MODULE_1__["VIDEO_BACKGROUND_TYPE"]
      });
    }
  }],
  to: [{
    type: 'block',
    blocks: ['core/image'],
    isMatch: function isMatch(_ref3) {
      var backgroundType = _ref3.backgroundType,
          url = _ref3.url,
          overlayColor = _ref3.overlayColor,
          customOverlayColor = _ref3.customOverlayColor,
          gradient = _ref3.gradient,
          customGradient = _ref3.customGradient;

      if (url) {
        // If a url exists the transform could happen if that URL represents an image background.
        return backgroundType === _shared__WEBPACK_IMPORTED_MODULE_1__["IMAGE_BACKGROUND_TYPE"];
      } // If a url is not set the transform could happen if the cover has no background color or gradient;


      return !overlayColor && !customOverlayColor && !gradient && !customGradient;
    },
    transform: function transform(_ref4) {
      var title = _ref4.title,
          url = _ref4.url,
          align = _ref4.align,
          id = _ref4.id;
      return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["createBlock"])('core/image', {
        caption: title,
        url: url,
        align: align,
        id: id
      });
    }
  }, {
    type: 'block',
    blocks: ['core/video'],
    isMatch: function isMatch(_ref5) {
      var backgroundType = _ref5.backgroundType,
          url = _ref5.url,
          overlayColor = _ref5.overlayColor,
          customOverlayColor = _ref5.customOverlayColor,
          gradient = _ref5.gradient,
          customGradient = _ref5.customGradient;

      if (url) {
        // If a url exists the transform could happen if that URL represents a video background.
        return backgroundType === _shared__WEBPACK_IMPORTED_MODULE_1__["VIDEO_BACKGROUND_TYPE"];
      } // If a url is not set the transform could happen if the cover has no background color or gradient;


      return !overlayColor && !customOverlayColor && !gradient && !customGradient;
    },
    transform: function transform(_ref6) {
      var title = _ref6.title,
          url = _ref6.url,
          align = _ref6.align,
          id = _ref6.id;
      return Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["createBlock"])('core/video', {
        caption: title,
        src: url,
        id: id,
        align: align
      });
    }
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (transforms);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero */ "./src/hero/index.js");
/**
 * WordPress dependencies
 */



/**
 * Internal dependencies
 */


/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 */

var registerBlock = function registerBlock(block) {
  if (!block) {
    return;
  }

  var metadata = block.metadata,
      settings = block.settings,
      name = block.name;

  if (metadata) {
    settings.category = metadata.category;
  }

  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__["registerBlockType"])(name, settings);
};

[// Common blocks are grouped at the top to prioritize their display
// in various contexts — like the inserter and auto-complete components.
// Register all remaining core blocks.
_hero__WEBPACK_IMPORTED_MODULE_3__].forEach(registerBlock);

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/compose":
/*!******************************************!*\
  !*** external {"this":["wp","compose"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/core-data":
/*!*******************************************!*\
  !*** external {"this":["wp","coreData"]} ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["coreData"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!***************************************!*\
  !*** external {"this":["wp","data"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "lodash":
/*!**********************************!*\
  !*** external {"this":"lodash"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["lodash"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map