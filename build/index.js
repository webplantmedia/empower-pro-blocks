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

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

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

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/block-hero/components/cta.js":
/*!******************************************!*\
  !*** ./src/block-hero/components/cta.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CallToAction; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);








function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * CTA Wrapper
 */
// Setup the block
 // Import block dependencies and components


/**
 * Create a CallToAction wrapper Component
 */

var CallToAction = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(CallToAction, _Component);

  var _super = _createSuper(CallToAction);

  function CallToAction(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, CallToAction);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(CallToAction, [{
    key: "render",
    value: function render() {
      var _classnames;

      // Setup the attributes
      var _this$props$attribute = this.props.attributes,
          buttonText = _this$props$attribute.buttonText,
          buttonUrl = _this$props$attribute.buttonUrl,
          buttonAlignment = _this$props$attribute.buttonAlignment,
          buttonBackgroundColor = _this$props$attribute.buttonBackgroundColor,
          buttonTextColor = _this$props$attribute.buttonTextColor,
          buttonSize = _this$props$attribute.buttonSize,
          buttonShape = _this$props$attribute.buttonShape,
          buttonTarget = _this$props$attribute.buttonTarget,
          ctaTitle = _this$props$attribute.ctaTitle,
          ctaText = _this$props$attribute.ctaText,
          ctaTitleFontSize = _this$props$attribute.ctaTitleFontSize,
          ctaTextFontSize = _this$props$attribute.ctaTextFontSize,
          ctaWidth = _this$props$attribute.ctaWidth,
          ctaBackgroundColor = _this$props$attribute.ctaBackgroundColor,
          ctaTextColor = _this$props$attribute.ctaTextColor;
      var className = classnames__WEBPACK_IMPORTED_MODULE_7___default()([this.props.className, 'ab-block-cta'], (_classnames = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'ab-font-size-' + ctaTextFontSize, ctaTextFontSize), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'align' + ctaWidth, ctaWidth), _classnames));
      var styles = {
        backgroundColor: ctaBackgroundColor ? ctaBackgroundColor : undefined,
        textAlign: buttonAlignment ? buttonAlignment : undefined
      };
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        style: styles,
        className: className ? className : undefined
      }, this.props.children);
    }
  }]);

  return CallToAction;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]);



/***/ }),

/***/ "./src/block-hero/components/inspector.js":
/*!************************************************!*\
  !*** ./src/block-hero/components/inspector.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Inspector; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_components_settings_renderSettingControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/components/settings/renderSettingControl */ "./src/utils/components/settings/renderSettingControl.js");







function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * Inspector Controls
 */

/**
 * Internal dependencies.
 */
 // Setup the block

var __ = wp.i18n.__;
var Component = wp.element.Component; // Import block components

var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    PanelColorSettings = _wp$blockEditor.PanelColorSettings,
    MediaUpload = _wp$blockEditor.MediaUpload; // Import Inspector components

var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl,
    ToggleControl = _wp$components.ToggleControl,
    IconButton = _wp$components.IconButton;
/**
 * Create an Inspector Controls wrapper Component
 */

var Inspector = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Inspector, _Component);

  var _super = _createSuper(Inspector);

  function Inspector(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Inspector);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Inspector, [{
    key: "render",
    value: function render() {
      var _this = this;

      // Setup the attributes
      var _this$props$attribute = this.props.attributes,
          buttonBackgroundColor = _this$props$attribute.buttonBackgroundColor,
          buttonTextColor = _this$props$attribute.buttonTextColor,
          buttonSize = _this$props$attribute.buttonSize,
          buttonShape = _this$props$attribute.buttonShape,
          buttonTarget = _this$props$attribute.buttonTarget,
          titleFontSize = _this$props$attribute.titleFontSize,
          ctaTextFontSize = _this$props$attribute.ctaTextFontSize,
          ctaBackgroundColor = _this$props$attribute.ctaBackgroundColor,
          ctaTextColor = _this$props$attribute.ctaTextColor,
          dimRatio = _this$props$attribute.dimRatio,
          imgURL = _this$props$attribute.imgURL,
          imgID = _this$props$attribute.imgID;
      var setAttributes = this.props.setAttributes; // Button size values

      var buttonSizeOptions = [{
        value: 'ab-button-size-small',
        label: __('Small')
      }, {
        value: 'ab-button-size-medium',
        label: __('Medium')
      }, {
        value: 'ab-button-size-large',
        label: __('Large')
      }, {
        value: 'ab-button-size-extralarge',
        label: __('Extra Large')
      }]; // Button shape

      var buttonShapeOptions = [{
        value: 'ab-button-shape-square',
        label: __('Square')
      }, {
        value: 'ab-button-shape-rounded',
        label: __('Rounded Square')
      }, {
        value: 'ab-button-shape-circular',
        label: __('Circular')
      }]; // Change the image

      var onSelectImage = function onSelectImage(img) {
        setAttributes({
          imgID: img.id,
          imgURL: img.url,
          imgAlt: img.alt
        });
      }; // Clear the image


      var onRemoveImage = function onRemoveImage() {
        setAttributes({
          imgID: null,
          imgURL: null,
          imgAlt: null
        });
      }; // Update color values


      var onChangeBackgroundColor = function onChangeBackgroundColor(value) {
        return setAttributes({
          ctaBackgroundColor: value
        });
      };

      var onChangeTextColor = function onChangeTextColor(value) {
        return setAttributes({
          ctaTextColor: value
        });
      };

      var onChangeButtonColor = function onChangeButtonColor(value) {
        return setAttributes({
          buttonBackgroundColor: value
        });
      };

      var onChangeButtonTextColor = function onChangeButtonTextColor(value) {
        return setAttributes({
          buttonTextColor: value
        });
      };

      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(InspectorControls, {
        key: "inspector"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_utils_components_settings_renderSettingControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "ab_cta_textOptions"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        title: __('Text Options', 'atomic-blocks'),
        initialOpen: true
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: __('Title Font Size', 'atomic-blocks'),
        value: titleFontSize,
        onChange: function onChange(value) {
          return _this.props.setAttributes({
            titleFontSize: value
          });
        },
        min: 24,
        max: 60,
        step: 2
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: __('Text Font Size', 'atomic-blocks'),
        value: ctaTextFontSize,
        onChange: function onChange(value) {
          return _this.props.setAttributes({
            ctaTextFontSize: value
          });
        },
        min: 14,
        max: 24,
        step: 2
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelColorSettings, {
        title: __('Text Color', 'atomic-blocks'),
        initialOpen: false,
        colorSettings: [{
          value: ctaTextColor,
          onChange: onChangeTextColor,
          label: __('Text Color', 'atomic-blocks')
        }]
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_utils_components_settings_renderSettingControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "ab_cta_backgroundOptions"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        title: __('Background Options', 'atomic-blocks'),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("p", null, __('Select a background image:', 'atomic-blocks')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(MediaUpload, {
        onSelect: onSelectImage,
        type: "image",
        value: imgID,
        render: function render(_ref) {
          var open = _ref.open;
          return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(IconButton, {
            className: "ab-cta-inspector-media",
            label: __('Edit image', 'atomic-blocks'),
            icon: "format-image",
            onClick: open
          }, __('Select Image', 'atomic-blocks')), imgURL && !!imgURL.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(IconButton, {
            className: "ab-cta-inspector-media",
            label: __('Remove Image', 'atomic-blocks'),
            icon: "dismiss",
            onClick: onRemoveImage
          }, __('Remove', 'atomic-blocks')));
        }
      }), imgURL && !!imgURL.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(RangeControl, {
        label: __('Image Opacity', 'atomic-blocks'),
        value: dimRatio,
        onChange: function onChange(value) {
          return _this.props.setAttributes({
            dimRatio: value
          });
        },
        min: 0,
        max: 100,
        step: 10
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelColorSettings, {
        title: __('Background Color', 'atomic-blocks'),
        initialOpen: false,
        colorSettings: [{
          value: ctaBackgroundColor,
          onChange: onChangeBackgroundColor,
          label: __('Overlay Color', 'atomic-blocks')
        }]
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(_utils_components_settings_renderSettingControl__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "ab_cta_buttonOptions"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelBody, {
        title: __('Button Options', 'atomic-blocks'),
        initialOpen: false
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ToggleControl, {
        label: __('Open link in new window', 'atomic-blocks'),
        checked: buttonTarget,
        onChange: function onChange() {
          return _this.props.setAttributes({
            buttonTarget: !buttonTarget
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: __('Button Size', 'atomic-blocks'),
        value: buttonSize,
        options: buttonSizeOptions.map(function (_ref2) {
          var value = _ref2.value,
              label = _ref2.label;
          return {
            value: value,
            label: label
          };
        }),
        onChange: function onChange(value) {
          _this.props.setAttributes({
            buttonSize: value
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(SelectControl, {
        label: __('Button Shape', 'atomic-blocks'),
        value: buttonShape,
        options: buttonShapeOptions.map(function (_ref3) {
          var value = _ref3.value,
              label = _ref3.label;
          return {
            value: value,
            label: label
          };
        }),
        onChange: function onChange(value) {
          _this.props.setAttributes({
            buttonShape: value
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelColorSettings, {
        title: __('Button Color', 'atomic-blocks'),
        initialOpen: false,
        colorSettings: [{
          value: buttonBackgroundColor,
          onChange: onChangeButtonColor,
          label: __('Button Color', 'atomic-blocks')
        }]
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])(PanelColorSettings, {
        title: __('Button Text Color', 'atomic-blocks'),
        initialOpen: false,
        colorSettings: [{
          value: buttonTextColor,
          onChange: onChangeButtonTextColor,
          label: __('Button Text Color', 'atomic-blocks')
        }]
      }))));
    }
  }]);

  return Inspector;
}(Component);



/***/ }),

/***/ "./src/block-hero/deprecated/1.4.21/components/cta.js":
/*!************************************************************!*\
  !*** ./src/block-hero/deprecated/1.4.21/components/cta.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CallToAction_1_4_21; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);







function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * CTA Wrapper
 */
// Setup the block
var Component = wp.element.Component; // Import block dependencies and components


/**
 * Create a CallToAction wrapper Component
 */

var CallToAction_1_4_21 = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(CallToAction_1_4_21, _Component);

  var _super = _createSuper(CallToAction_1_4_21);

  function CallToAction_1_4_21(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, CallToAction_1_4_21);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(CallToAction_1_4_21, [{
    key: "render",
    value: function render() {
      // Setup the attributes
      var _this$props$attribute = this.props.attributes,
          buttonText = _this$props$attribute.buttonText,
          buttonUrl = _this$props$attribute.buttonUrl,
          buttonAlignment = _this$props$attribute.buttonAlignment,
          buttonBackgroundColor = _this$props$attribute.buttonBackgroundColor,
          buttonTextColor = _this$props$attribute.buttonTextColor,
          buttonSize = _this$props$attribute.buttonSize,
          buttonShape = _this$props$attribute.buttonShape,
          buttonTarget = _this$props$attribute.buttonTarget,
          ctaTitle = _this$props$attribute.ctaTitle,
          ctaText = _this$props$attribute.ctaText,
          ctaTitleFontSize = _this$props$attribute.ctaTitleFontSize,
          ctaTextFontSize = _this$props$attribute.ctaTextFontSize,
          ctaWidth = _this$props$attribute.ctaWidth,
          ctaBackgroundColor = _this$props$attribute.ctaBackgroundColor,
          ctaTextColor = _this$props$attribute.ctaTextColor;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_5__["createElement"])("div", {
        style: {
          backgroundColor: ctaBackgroundColor,
          textAlign: buttonAlignment
        },
        className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(this.props.className, "align".concat(ctaWidth), 'ab-block-cta', 'ab-font-size-' + ctaTextFontSize)
      }, this.props.children);
    }
  }]);

  return CallToAction_1_4_21;
}(Component);



/***/ }),

/***/ "./src/block-hero/deprecated/1.4.22/components/cta.js":
/*!************************************************************!*\
  !*** ./src/block-hero/deprecated/1.4.22/components/cta.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CallToAction_1_4_22; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);








function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * CTA Wrapper
 */
// Setup the block
var Component = wp.element.Component; // Import block dependencies and components


/**
 * Create a CallToAction wrapper Component
 */

var CallToAction_1_4_22 = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(CallToAction_1_4_22, _Component);

  var _super = _createSuper(CallToAction_1_4_22);

  function CallToAction_1_4_22(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, CallToAction_1_4_22);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(CallToAction_1_4_22, [{
    key: "render",
    value: function render() {
      // Setup the attributes
      var _this$props$attribute = this.props.attributes,
          buttonText = _this$props$attribute.buttonText,
          buttonUrl = _this$props$attribute.buttonUrl,
          buttonAlignment = _this$props$attribute.buttonAlignment,
          buttonBackgroundColor = _this$props$attribute.buttonBackgroundColor,
          buttonTextColor = _this$props$attribute.buttonTextColor,
          buttonSize = _this$props$attribute.buttonSize,
          buttonShape = _this$props$attribute.buttonShape,
          buttonTarget = _this$props$attribute.buttonTarget,
          ctaTitle = _this$props$attribute.ctaTitle,
          ctaText = _this$props$attribute.ctaText,
          ctaTitleFontSize = _this$props$attribute.ctaTitleFontSize,
          ctaTextFontSize = _this$props$attribute.ctaTextFontSize,
          ctaWidth = _this$props$attribute.ctaWidth,
          ctaBackgroundColor = _this$props$attribute.ctaBackgroundColor,
          ctaTextColor = _this$props$attribute.ctaTextColor;
      var className = classnames__WEBPACK_IMPORTED_MODULE_7___default()([this.props.className, 'ab-block-cta'], _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, 'ab-font-size-' + ctaTextFontSize, ctaTextFontSize));
      var styles = {
        backgroundColor: ctaBackgroundColor ? ctaBackgroundColor : undefined,
        textAlign: buttonAlignment ? buttonAlignment : undefined
      };
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        style: styles,
        className: className ? className : undefined
      }, this.props.children);
    }
  }]);

  return CallToAction_1_4_22;
}(Component);



/***/ }),

/***/ "./src/block-hero/deprecated/1.5.2/components/cta.js":
/*!***********************************************************!*\
  !*** ./src/block-hero/deprecated/1.5.2/components/cta.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CallToAction_1_5_2; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);








function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * CTA Wrapper
 */
// Setup the block
var Component = wp.element.Component; // Import block dependencies and components


/**
 * Create a CallToAction wrapper Component
 */

var CallToAction_1_5_2 = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(CallToAction_1_5_2, _Component);

  var _super = _createSuper(CallToAction_1_5_2);

  function CallToAction_1_5_2(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, CallToAction_1_5_2);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(CallToAction_1_5_2, [{
    key: "render",
    value: function render() {
      var _classnames;

      // Setup the attributes
      var _this$props$attribute = this.props.attributes,
          buttonText = _this$props$attribute.buttonText,
          buttonUrl = _this$props$attribute.buttonUrl,
          buttonAlignment = _this$props$attribute.buttonAlignment,
          buttonBackgroundColor = _this$props$attribute.buttonBackgroundColor,
          buttonTextColor = _this$props$attribute.buttonTextColor,
          buttonSize = _this$props$attribute.buttonSize,
          buttonShape = _this$props$attribute.buttonShape,
          buttonTarget = _this$props$attribute.buttonTarget,
          ctaTitle = _this$props$attribute.ctaTitle,
          ctaText = _this$props$attribute.ctaText,
          ctaTitleFontSize = _this$props$attribute.ctaTitleFontSize,
          ctaTextFontSize = _this$props$attribute.ctaTextFontSize,
          ctaWidth = _this$props$attribute.ctaWidth,
          ctaBackgroundColor = _this$props$attribute.ctaBackgroundColor,
          ctaTextColor = _this$props$attribute.ctaTextColor;
      var className = classnames__WEBPACK_IMPORTED_MODULE_7___default()([this.props.className, 'ab-block-cta'], (_classnames = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'ab-font-size-' + ctaTextFontSize, ctaTextFontSize), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_classnames, 'align' + ctaWidth, ctaWidth), _classnames));
      var styles = {
        backgroundColor: ctaBackgroundColor ? ctaBackgroundColor : undefined,
        textAlign: buttonAlignment ? buttonAlignment : undefined
      };
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        style: styles,
        className: className ? className : undefined
      }, this.props.children);
    }
  }]);

  return CallToAction_1_5_2;
}(Component);



/***/ }),

/***/ "./src/block-hero/deprecated/deprecated.js":
/*!*************************************************!*\
  !*** ./src/block-hero/deprecated/deprecated.js ***!
  \*************************************************/
/*! exports provided: callToAction_1_5_2_attr, callToAction_1_5_2_save, callToAction_1_4_22_attr, callToAction_1_4_22_save, callToAction_1_4_21_attr, callToAction_1_4_21_save, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callToAction_1_5_2_attr", function() { return callToAction_1_5_2_attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callToAction_1_5_2_save", function() { return callToAction_1_5_2_save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callToAction_1_4_22_attr", function() { return callToAction_1_4_22_attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callToAction_1_4_22_save", function() { return callToAction_1_4_22_save; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callToAction_1_4_21_attr", function() { return callToAction_1_4_21_attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callToAction_1_4_21_save", function() { return callToAction_1_4_21_save; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _1_5_2_components_cta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./1.5.2/components/cta */ "./src/block-hero/deprecated/1.5.2/components/cta.js");
/* harmony import */ var _1_4_22_components_cta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./1.4.22/components/cta */ "./src/block-hero/deprecated/1.4.22/components/cta.js");
/* harmony import */ var _1_4_21_components_cta__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./1.4.21/components/cta */ "./src/block-hero/deprecated/1.4.21/components/cta.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var RichText = wp.blockEditor.RichText;
var callToAction_1_5_2_attr = {
  buttonText: {
    type: 'string'
  },
  buttonUrl: {
    type: 'string',
    source: 'attribute',
    selector: 'a',
    attribute: 'href'
  },
  buttonAlignment: {
    type: 'string',
    default: 'center'
  },
  buttonBackgroundColor: {
    type: 'string',
    default: '#3373dc'
  },
  buttonTextColor: {
    type: 'string',
    default: '#ffffff'
  },
  buttonSize: {
    type: 'string',
    default: 'ab-button-size-medium'
  },
  buttonShape: {
    type: 'string',
    default: 'ab-button-shape-rounded'
  },
  buttonTarget: {
    type: 'boolean',
    default: false
  },
  ctaTitle: {
    type: 'array',
    selector: '.ab-cta-title',
    source: 'children'
  },
  titleFontSize: {
    type: 'number',
    default: '32'
  },
  ctaTextFontSize: {
    type: 'number'
  },
  ctaText: {
    type: 'array',
    selector: '.ab-cta-text',
    source: 'children'
  },
  ctaWidth: {
    type: 'string'
  },
  ctaBackgroundColor: {
    type: 'string'
  },
  ctaTextColor: {
    type: 'string',
    default: '#32373c'
  },
  imgURL: {
    type: 'string',
    source: 'attribute',
    attribute: 'src',
    selector: 'img'
  },
  imgID: {
    type: 'number'
  },
  imgAlt: {
    type: 'string',
    source: 'attribute',
    attribute: 'alt',
    selector: 'img'
  },
  dimRatio: {
    type: 'number',
    default: 50
  },
  // Deprecated
  ctaTitleFontSize: {
    type: 'string',
    default: '32'
  }
};
var callToAction_1_5_2_save = function callToAction_1_5_2_save(props) {
  var _props$attributes = props.attributes,
      buttonText = _props$attributes.buttonText,
      buttonUrl = _props$attributes.buttonUrl,
      buttonAlignment = _props$attributes.buttonAlignment,
      buttonBackgroundColor = _props$attributes.buttonBackgroundColor,
      buttonTextColor = _props$attributes.buttonTextColor,
      buttonSize = _props$attributes.buttonSize,
      buttonShape = _props$attributes.buttonShape,
      buttonTarget = _props$attributes.buttonTarget,
      ctaTitle = _props$attributes.ctaTitle,
      ctaText = _props$attributes.ctaText,
      ctaTitleFontSize = _props$attributes.ctaTitleFontSize,
      titleFontSize = _props$attributes.titleFontSize,
      ctaTextFontSize = _props$attributes.ctaTextFontSize,
      ctaWidth = _props$attributes.ctaWidth,
      ctaBackgroundColor = _props$attributes.ctaBackgroundColor,
      ctaTextColor = _props$attributes.ctaTextColor,
      imgURL = _props$attributes.imgURL,
      imgID = _props$attributes.imgID,
      imgAlt = _props$attributes.imgAlt,
      dimRatio = _props$attributes.dimRatio;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_1_5_2_components_cta__WEBPACK_IMPORTED_MODULE_3__["default"], props, imgURL && !!imgURL.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ab-cta-image-wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ab-cta-image', dimRatioToClass(dimRatio), {
      'has-background-dim': 0 !== dimRatio
    }),
    src: imgURL,
    alt: imgAlt
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ab-cta-content"
  }, ctaTitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
    tagName: "h2",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ab-cta-title', 'ab-font-size-' + titleFontSize),
    style: {
      color: ctaTextColor
    },
    value: ctaTitle
  }), ctaText && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
    tagName: "div",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ab-cta-text', 'ab-font-size-' + ctaTitleFontSize),
    style: {
      color: ctaTextColor
    },
    value: ctaText
  })), buttonText && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ab-cta-button"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
    href: buttonUrl,
    target: buttonTarget ? '_blank' : '_self',
    rel: buttonTarget ? 'noopener noreferrer' : null,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ab-button', buttonShape, buttonSize),
    style: {
      color: buttonTextColor,
      backgroundColor: buttonBackgroundColor
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
    value: buttonText
  }))));
}; // Version 1_4_22 attributes

var callToAction_1_4_22_attr = {
  buttonText: {
    type: 'string'
  },
  buttonUrl: {
    type: 'string',
    source: 'attribute',
    selector: 'a',
    attribute: 'href'
  },
  buttonAlignment: {
    type: 'string',
    default: 'center'
  },
  buttonBackgroundColor: {
    type: 'string',
    default: '#3373dc'
  },
  buttonTextColor: {
    type: 'string',
    default: '#ffffff'
  },
  buttonSize: {
    type: 'string',
    default: 'ab-button-size-medium'
  },
  buttonShape: {
    type: 'string',
    default: 'ab-button-shape-rounded'
  },
  buttonTarget: {
    type: 'boolean',
    default: false
  },
  ctaTitle: {
    type: 'array',
    selector: '.ab-cta-title',
    source: 'children'
  },
  titleFontSize: {
    type: 'number',
    default: '32'
  },
  ctaTextFontSize: {
    type: 'number'
  },
  ctaText: {
    type: 'array',
    selector: '.ab-cta-text',
    source: 'children'
  },
  ctaWidth: {
    type: 'string',
    default: 'center'
  },
  ctaBackgroundColor: {
    type: 'string'
  },
  ctaTextColor: {
    type: 'string',
    default: '#32373c'
  },
  imgURL: {
    type: 'string',
    source: 'attribute',
    attribute: 'src',
    selector: 'img'
  },
  imgID: {
    type: 'number'
  },
  imgAlt: {
    type: 'string',
    source: 'attribute',
    attribute: 'alt',
    selector: 'img'
  },
  dimRatio: {
    type: 'number',
    default: 50
  },
  // Deprecated
  ctaTitleFontSize: {
    type: 'string',
    default: '32'
  }
}; // Version 1_4_22 save

var callToAction_1_4_22_save = function callToAction_1_4_22_save(props) {
  var _props$attributes2 = props.attributes,
      buttonText = _props$attributes2.buttonText,
      buttonUrl = _props$attributes2.buttonUrl,
      buttonAlignment = _props$attributes2.buttonAlignment,
      buttonBackgroundColor = _props$attributes2.buttonBackgroundColor,
      buttonTextColor = _props$attributes2.buttonTextColor,
      buttonSize = _props$attributes2.buttonSize,
      buttonShape = _props$attributes2.buttonShape,
      buttonTarget = _props$attributes2.buttonTarget,
      ctaTitle = _props$attributes2.ctaTitle,
      ctaText = _props$attributes2.ctaText,
      ctaTitleFontSize = _props$attributes2.ctaTitleFontSize,
      ctaTextFontSize = _props$attributes2.ctaTextFontSize,
      ctaWidth = _props$attributes2.ctaWidth,
      ctaBackgroundColor = _props$attributes2.ctaBackgroundColor,
      ctaTextColor = _props$attributes2.ctaTextColor,
      imgURL = _props$attributes2.imgURL,
      imgID = _props$attributes2.imgID,
      imgAlt = _props$attributes2.imgAlt,
      dimRatio = _props$attributes2.dimRatio;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_1_4_22_components_cta__WEBPACK_IMPORTED_MODULE_4__["default"], props, imgURL && !!imgURL.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ab-cta-image-wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ab-cta-image', dimRatioToClass(dimRatio), {
      'has-background-dim': 0 !== dimRatio
    }),
    src: imgURL,
    alt: imgAlt
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ab-cta-content"
  }, ctaTitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
    tagName: "h2",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ab-cta-title', 'ab-font-size-' + ctaTitleFontSize),
    style: {
      color: ctaTextColor
    },
    value: ctaTitle
  }), ctaText && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
    tagName: "div",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ab-cta-text', 'ab-font-size-' + ctaTextFontSize),
    style: {
      color: ctaTextColor
    },
    value: ctaText
  })), buttonText && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ab-cta-button"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
    href: buttonUrl,
    target: buttonTarget ? '_blank' : '_self',
    rel: buttonTarget ? 'noopener noreferrer' : null,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ab-button', buttonShape, buttonSize),
    style: {
      color: buttonTextColor,
      backgroundColor: buttonBackgroundColor
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
    value: buttonText
  }))));
}; // Version 1_4_21 attributes

var callToAction_1_4_21_attr = {
  buttonText: {
    type: 'string'
  },
  buttonUrl: {
    type: 'string',
    source: 'attribute',
    selector: 'a',
    attribute: 'href'
  },
  buttonAlignment: {
    type: 'string',
    default: 'center'
  },
  buttonBackgroundColor: {
    type: 'string',
    default: '#3373dc'
  },
  buttonTextColor: {
    type: 'string',
    default: '#ffffff'
  },
  buttonSize: {
    type: 'string',
    default: 'ab-button-size-medium'
  },
  buttonShape: {
    type: 'string',
    default: 'ab-button-shape-rounded'
  },
  buttonTarget: {
    type: 'boolean',
    default: false
  },
  ctaTitle: {
    type: 'array',
    selector: '.ab-cta-title',
    source: 'children'
  },
  ctaTitleFontSize: {
    type: 'string',
    default: '32'
  },
  ctaTextFontSize: {
    type: 'string',
    default: '20'
  },
  ctaText: {
    type: 'array',
    selector: '.ab-cta-text',
    source: 'children'
  },
  ctaWidth: {
    type: 'string',
    default: 'center'
  },
  ctaBackgroundColor: {
    type: 'string',
    default: '#f2f2f2'
  },
  ctaTextColor: {
    type: 'string',
    default: '#32373c'
  },
  imgURL: {
    type: 'string',
    source: 'attribute',
    attribute: 'src',
    selector: 'img'
  },
  imgID: {
    type: 'number'
  },
  imgAlt: {
    type: 'string',
    source: 'attribute',
    attribute: 'alt',
    selector: 'img'
  },
  dimRatio: {
    type: 'number',
    default: 50
  }
}; // Version 1_4_21 save

var callToAction_1_4_21_save = function callToAction_1_4_21_save(props) {
  var _props$attributes3 = props.attributes,
      buttonText = _props$attributes3.buttonText,
      buttonUrl = _props$attributes3.buttonUrl,
      buttonAlignment = _props$attributes3.buttonAlignment,
      buttonBackgroundColor = _props$attributes3.buttonBackgroundColor,
      buttonTextColor = _props$attributes3.buttonTextColor,
      buttonSize = _props$attributes3.buttonSize,
      buttonShape = _props$attributes3.buttonShape,
      buttonTarget = _props$attributes3.buttonTarget,
      ctaTitle = _props$attributes3.ctaTitle,
      ctaText = _props$attributes3.ctaText,
      ctaTitleFontSize = _props$attributes3.ctaTitleFontSize,
      ctaTextFontSize = _props$attributes3.ctaTextFontSize,
      ctaWidth = _props$attributes3.ctaWidth,
      ctaBackgroundColor = _props$attributes3.ctaBackgroundColor,
      ctaTextColor = _props$attributes3.ctaTextColor,
      imgURL = _props$attributes3.imgURL,
      imgID = _props$attributes3.imgID,
      imgAlt = _props$attributes3.imgAlt,
      dimRatio = _props$attributes3.dimRatio;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_1_4_21_components_cta__WEBPACK_IMPORTED_MODULE_5__["default"], props, imgURL && !!imgURL.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ab-cta-image-wrap"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ab-cta-image', dimRatioToClass(dimRatio), {
      'has-background-dim': 0 !== dimRatio
    }),
    src: imgURL,
    alt: imgAlt
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ab-cta-content"
  }, ctaTitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
    tagName: "h2",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ab-cta-title', 'ab-font-size-' + ctaTitleFontSize),
    style: {
      color: ctaTextColor
    },
    value: ctaTitle
  }), ctaText && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
    tagName: "div",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ab-cta-text', 'ab-font-size-' + ctaTextFontSize),
    style: {
      color: ctaTextColor
    },
    value: ctaText
  })), buttonText && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "ab-cta-button"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
    href: buttonUrl,
    target: buttonTarget ? '_blank' : '_self',
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('ab-button', buttonShape, buttonSize),
    style: {
      color: buttonTextColor,
      backgroundColor: buttonBackgroundColor
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, {
    value: buttonText
  }))));
}; // Build deprecated list

var deprecated = [// Version 1_5_2
{
  attributes: callToAction_1_5_2_attr,
  save: callToAction_1_5_2_save
}, // Version 1_4_22
{
  attributes: callToAction_1_4_22_attr,
  save: callToAction_1_4_22_save
}, // Version 1_4_21
{
  attributes: callToAction_1_4_21_attr,
  save: callToAction_1_4_21_save,
  migrate: function migrate(attributes) {
    return _objectSpread({
      titleFontSize: attributes.ctaTitleFontSize
    }, attributes);
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (deprecated); // Image opacity function

function dimRatioToClass(ratio) {
  return 0 === ratio || 50 === ratio ? null : 'has-background-dim-' + 10 * Math.round(ratio / 10);
}

/***/ }),

/***/ "./src/block-hero/index.js":
/*!*********************************!*\
  !*** ./src/block-hero/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_inspector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/inspector */ "./src/block-hero/components/inspector.js");
/* harmony import */ var _components_cta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cta */ "./src/block-hero/components/cta.js");
/* harmony import */ var _deprecated_deprecated__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./deprecated/deprecated */ "./src/block-hero/deprecated/deprecated.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12__);








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

/**
 * BLOCK: Atomic Blocks Call-To-Action
 */
// Import block dependencies and components


 // Deprecated components

 // Import CSS
// import './styles/style.scss';
// import './styles/editor.scss';
// Components

 // Extend component

 // Register block

 // Register editor components

var _wp$blockEditor = wp.blockEditor,
    AlignmentToolbar = _wp$blockEditor.AlignmentToolbar,
    URLInput = _wp$blockEditor.URLInput,
    BlockControls = _wp$blockEditor.BlockControls,
    BlockAlignmentToolbar = _wp$blockEditor.BlockAlignmentToolbar,
    RichText = _wp$blockEditor.RichText; // Register components

var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    Dashicon = _wp$components.Dashicon;
var blockAttributes = {
  buttonText: {
    type: 'string'
  },
  buttonUrl: {
    type: 'string',
    source: 'attribute',
    selector: 'a',
    attribute: 'href'
  },
  buttonAlignment: {
    type: 'string',
    default: 'center'
  },
  buttonBackgroundColor: {
    type: 'string',
    default: '#3373dc'
  },
  buttonTextColor: {
    type: 'string',
    default: '#ffffff'
  },
  buttonSize: {
    type: 'string',
    default: 'ab-button-size-medium'
  },
  buttonShape: {
    type: 'string',
    default: 'ab-button-shape-rounded'
  },
  buttonTarget: {
    type: 'boolean',
    default: false
  },
  ctaTitle: {
    type: 'array',
    selector: '.ab-cta-title',
    source: 'children'
  },
  titleFontSize: {
    type: 'number',
    default: '32'
  },
  ctaTextFontSize: {
    type: 'number'
  },
  ctaText: {
    type: 'array',
    selector: '.ab-cta-text',
    source: 'children'
  },
  ctaWidth: {
    type: 'string'
  },
  ctaBackgroundColor: {
    type: 'string'
  },
  ctaTextColor: {
    type: 'string',
    default: '#32373c'
  },
  imgURL: {
    type: 'string',
    source: 'attribute',
    attribute: 'src',
    selector: 'img'
  },
  imgID: {
    type: 'number'
  },
  imgAlt: {
    type: 'string',
    source: 'attribute',
    attribute: 'alt',
    selector: 'img'
  },
  dimRatio: {
    type: 'number',
    default: 50
  },
  // Deprecated
  ctaTitleFontSize: {
    type: 'string',
    default: '32'
  }
};

var ABCTABlock = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(ABCTABlock, _Component);

  var _super = _createSuper(ABCTABlock);

  function ABCTABlock() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ABCTABlock);

    return _super.apply(this, arguments);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ABCTABlock, [{
    key: "render",
    value: function render() {
      // Setup the attributes
      var _this$props = this.props,
          _this$props$attribute = _this$props.attributes,
          buttonText = _this$props$attribute.buttonText,
          buttonUrl = _this$props$attribute.buttonUrl,
          buttonAlignment = _this$props$attribute.buttonAlignment,
          buttonBackgroundColor = _this$props$attribute.buttonBackgroundColor,
          buttonTextColor = _this$props$attribute.buttonTextColor,
          buttonSize = _this$props$attribute.buttonSize,
          buttonShape = _this$props$attribute.buttonShape,
          ctaTitle = _this$props$attribute.ctaTitle,
          ctaText = _this$props$attribute.ctaText,
          titleFontSize = _this$props$attribute.titleFontSize,
          ctaTextFontSize = _this$props$attribute.ctaTextFontSize,
          ctaWidth = _this$props$attribute.ctaWidth,
          ctaTextColor = _this$props$attribute.ctaTextColor,
          imgURL = _this$props$attribute.imgURL,
          imgAlt = _this$props$attribute.imgAlt,
          dimRatio = _this$props$attribute.dimRatio,
          isSelected = _this$props.isSelected,
          setAttributes = _this$props.setAttributes;

      var onSelectImage = function onSelectImage(img) {
        setAttributes({
          imgID: img.id,
          imgURL: img.url,
          imgAlt: img.alt
        });
      };

      return [// Show the alignment toolbar on focus
      Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(BlockControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(BlockAlignmentToolbar, {
        value: ctaWidth,
        onChange: function onChange(ctaWidth) {
          return setAttributes({
            ctaWidth: ctaWidth
          });
        },
        controls: ['center', 'wide', 'full']
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(AlignmentToolbar, {
        value: buttonAlignment,
        onChange: function onChange(value) {
          setAttributes({
            buttonAlignment: value
          });
        }
      })), // Show the block controls on focus
      Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_inspector__WEBPACK_IMPORTED_MODULE_8__["default"], _objectSpread({
        setAttributes: setAttributes
      }, this.props)), // Show the button markup in the editor
      Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_cta__WEBPACK_IMPORTED_MODULE_9__["default"], this.props, imgURL && !!imgURL.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "ab-cta-image-wrap"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("img", {
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('ab-cta-image', dimRatioToClass(dimRatio), {
          'has-background-dim': 0 !== dimRatio
        }),
        src: imgURL,
        alt: imgAlt
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "ab-cta-content"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichText, {
        tagName: "h2",
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Call-To-Action Title', 'atomic-blocks'),
        keepPlaceholderOnFocus: true,
        value: ctaTitle,
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('ab-cta-title', 'ab-font-size-' + titleFontSize),
        style: {
          color: ctaTextColor
        },
        onChange: function onChange(value) {
          return setAttributes({
            ctaTitle: value
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichText, {
        tagName: "div",
        multiline: "p",
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Call To Action Text', 'atomic-blocks'),
        keepPlaceholderOnFocus: true,
        value: ctaText,
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('ab-cta-text', 'ab-font-size-' + ctaTextFontSize),
        style: {
          color: ctaTextColor
        },
        onChange: function onChange(value) {
          return setAttributes({
            ctaText: value
          });
        }
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
        className: "ab-cta-button"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichText, {
        tagName: "span",
        placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Button text...', 'atomic-blocks'),
        value: buttonText,
        formattingControls: [],
        className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('ab-button', buttonShape, buttonSize),
        style: {
          color: buttonTextColor,
          backgroundColor: buttonBackgroundColor
        },
        onChange: function onChange(value) {
          return setAttributes({
            buttonText: value
          });
        }
      }), isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("form", {
        key: "form-link",
        className: "blocks-button__inline-link ab-button-".concat(buttonAlignment),
        onSubmit: function onSubmit(event) {
          return event.preventDefault();
        },
        style: {
          textAlign: buttonAlignment
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(Dashicon, {
        icon: 'admin-links'
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(URLInput, {
        className: "button-url",
        value: buttonUrl,
        onChange: function onChange(value) {
          return setAttributes({
            buttonUrl: value
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(IconButton, {
        icon: "editor-break",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Apply', 'atomic-blocks'),
        type: "submit"
      }))))];
    }
  }]);

  return ABCTABlock;
}(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["Component"]); // Register the block


Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_12__["registerBlockType"])('atomic-blocks/ab-cta', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('AB Call To Action', 'atomic-blocks'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Add a call to action section with a title, text, and a button.', 'atomic-blocks'),
  icon: 'megaphone',
  category: 'atomic-blocks',
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('call to action', 'atomic-blocks'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('cta', 'atomic-blocks'), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('atomic', 'atomic-blocks')],
  attributes: blockAttributes,
  ab_settings_data: {
    ab_cta_textOptions: {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Text Options', 'atomic-blocks')
    },
    ab_cta_backgroundOptions: {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Background Options', 'atomic-blocks')
    },
    ab_cta_buttonOptions: {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_11__["__"])('Button Options', 'atomic-blocks')
    }
  },
  getEditWrapperProps: function getEditWrapperProps(_ref) {
    var ctaWidth = _ref.ctaWidth;

    if ('left' === ctaWidth || 'right' === ctaWidth || 'full' === ctaWidth) {
      return {
        'data-align': ctaWidth
      };
    }
  },
  // Render the block components
  edit: ABCTABlock,
  // Save the attributes and markup
  save: function save(props) {
    // Setup the attributes
    var _props$attributes = props.attributes,
        buttonText = _props$attributes.buttonText,
        buttonUrl = _props$attributes.buttonUrl,
        buttonBackgroundColor = _props$attributes.buttonBackgroundColor,
        buttonTextColor = _props$attributes.buttonTextColor,
        buttonSize = _props$attributes.buttonSize,
        buttonShape = _props$attributes.buttonShape,
        buttonTarget = _props$attributes.buttonTarget,
        ctaTitle = _props$attributes.ctaTitle,
        ctaText = _props$attributes.ctaText,
        ctaTitleFontSize = _props$attributes.ctaTitleFontSize,
        titleFontSize = _props$attributes.titleFontSize,
        ctaTextColor = _props$attributes.ctaTextColor,
        imgURL = _props$attributes.imgURL,
        imgAlt = _props$attributes.imgAlt,
        dimRatio = _props$attributes.dimRatio; // Save the block markup for the front end

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(_components_cta__WEBPACK_IMPORTED_MODULE_9__["default"], props, imgURL && !!imgURL.length && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
      className: "ab-cta-image-wrap"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("img", {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('ab-cta-image', dimRatioToClass(dimRatio), {
        'has-background-dim': 0 !== dimRatio
      }),
      src: imgURL,
      alt: imgAlt
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
      className: "ab-cta-content"
    }, ctaTitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichText.Content, {
      tagName: "h2",
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('ab-cta-title', 'ab-font-size-' + titleFontSize),
      style: {
        color: ctaTextColor
      },
      value: ctaTitle
    }), ctaText && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichText.Content, {
      tagName: "div",
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('ab-cta-text', 'ab-font-size-' + ctaTitleFontSize),
      style: {
        color: ctaTextColor
      },
      value: ctaText
    })), buttonText && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("div", {
      className: "ab-cta-button"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])("a", {
      href: buttonUrl,
      target: buttonTarget ? '_blank' : '_self',
      rel: "noopener noreferrer",
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()('ab-button', buttonShape, buttonSize),
      style: {
        color: buttonTextColor,
        backgroundColor: buttonBackgroundColor
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_6__["createElement"])(RichText.Content, {
      value: buttonText
    }))));
  }
});

function dimRatioToClass(ratio) {
  return 0 === ratio || 50 === ratio ? null : 'has-background-dim-' + 10 * Math.round(ratio / 10);
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block-hero */ "./src/block-hero/index.js");


/***/ }),

/***/ "./src/utils/components/data-providers/currentUserData.js":
/*!****************************************************************!*\
  !*** ./src/utils/components/data-providers/currentUserData.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getCurrentUserData; });
function getCurrentUserData() {
  return atomic_globals.user_data;
}
;

/***/ }),

/***/ "./src/utils/components/settings/renderSettingControl.js":
/*!***************************************************************!*\
  !*** ./src/utils/components/settings/renderSettingControl.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RenderSettingControl; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _data_providers_currentUserData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../data-providers/currentUserData */ "./src/utils/components/data-providers/currentUserData.js");






function _createSuper(Derived) { return function () { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Component = wp.element.Component;
var applyFilters = wp.hooks.applyFilters;

/**
 * A wrapper that contains user data for making decisions when rendering block setting controls.
 */

var RenderSettingControl = /*#__PURE__*/function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(RenderSettingControl, _Component);

  var _super = _createSuper(RenderSettingControl);

  function RenderSettingControl(props) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, RenderSettingControl);

    return _super.call(this, props);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(RenderSettingControl, [{
    key: "render",
    value: function render() {
      if ('undefined' === typeof this.props.children) {
        return null;
      }
      /**
       * Let the temporary hacks begin.
       * Get the block name this setting is associated with.
       */


      var fallback = false;

      if ('undefined' === typeof this.props.children.props || 'undefined' === typeof this.props.children.props.name) {
        fallback = true;
      }

      if (fallback && ('undefined' === typeof this.props.children._owner || 'undefined' === typeof this.props.children._owner.memoizedProps || 'undefined' === typeof this.props.children._owner.memoizedProps.name)) {
        return this.props.children;
      }

      var blockName = fallback ? this.props.children._owner.memoizedProps.name : this.props.children.props.name;
      /**
       * A filter for determining whether or not a setting should be rendered.
       *
       * @param {boolean} Whether or not the setting control should be rendered. Default true.
       * @param {string} The block name.
       * @param {string} The setting control's ID.
       * @param {object} The current user's data.
       */

      if (applyFilters('ab_should_render_block_setting', true, blockName, this.props.id, Object(_data_providers_currentUserData__WEBPACK_IMPORTED_MODULE_5__["default"])())) {
        return this.props.children;
      }

      return null;
    }
  }]);

  return RenderSettingControl;
}(Component);



/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map