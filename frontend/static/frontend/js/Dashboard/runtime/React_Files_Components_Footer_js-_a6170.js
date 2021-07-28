/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkiha_ecommerce"] = self["webpackChunkiha_ecommerce"] || []).push([["React_Files_Components_Footer_js-_a6170"],{

/***/ "./React_Files/Components/BrandLinks.js":
/*!**********************************************!*\
  !*** ./React_Files/Components/BrandLinks.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BrandLinkStrip\": () => (/* binding */ BrandLinkStrip)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\n\nvar iconClass = \"transition-all h-6 w-6 fill-current text-gray-600 hover:text-gray-800 shadow-none hover:shadow-lg\";\nvar BrandLinks = [{\n  title: \"Github\",\n  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaGithub, {\n    className: iconClass\n  }),\n  link: \"https://github.com/Wajid2001/Iha-ecommerce/\"\n}, {\n  title: \"Facebook\",\n  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaFacebook, {\n    className: iconClass\n  }),\n  link: \"https://www.facebook.com/pages/category/Consulting-Agency/Iha-Consulting-Services-PvtLtd-871522229625033/\"\n}, {\n  title: \"Linked In\",\n  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaLinkedin, {\n    className: iconClass\n  }),\n  link: \"https://www.linkedin.com/company/iha_consulting_services_pvt_ltd/mycompany/\"\n}];\nvar BrandLinkStrip = function BrandLinkStrip() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"space-x-4 flex\"\n  }, BrandLinks.map(function (_ref, i) {\n    var title = _ref.title,\n        icon = _ref.icon,\n        link = _ref.link;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n      href: link,\n      title: title,\n      key: i\n    }, icon);\n  }));\n};\n\n//# sourceURL=webpack://iha-ecommerce/./React_Files/Components/BrandLinks.js?");

/***/ }),

/***/ "./React_Files/Components/BrandLogo.js":
/*!*********************************************!*\
  !*** ./React_Files/Components/BrandLogo.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BrandLogoImg\": () => (/* binding */ BrandLogoImg),\n/* harmony export */   \"BrandLogoImgFull\": () => (/* binding */ BrandLogoImgFull),\n/* harmony export */   \"BrandLogoCircle\": () => (/* binding */ BrandLogoCircle),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n__webpack_require__(/*! ../static/index.scss */ \"./React_Files/static/index.scss\");\n\nvar BrandLogoImg = function BrandLogoImg(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    className: \" h-12 w-12 my-2 my:0 \".concat(props.className),\n    src: \"/static/frontend/img/Iha Unnathi logo Croped.jpeg\",\n    alt: \"Iha Ecommerce Logo\"\n  }));\n};\nvar BrandLogoImgFull = function BrandLogoImgFull(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    className: \"h-24 w-24 my-2 my:0 \".concat(props.className),\n    src: \"/static/frontend/img/Iha Unnathi logo.jpeg\",\n    alt: \"Iha Ecommerce Logo\"\n  }));\n};\nvar BrandLogoCircle = function BrandLogoCircle() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: \"/home\",\n    className: \"flex mx-auto w-max transition flex px-1 py-1 rounded-full bg-transparent hover:bg-white active:bg-gray-100 border border-white hover:border-gray-200 active:border-gray-500 shadow-none hover:shadow active:shadow-md\",\n    title: \"Goto Iha Ecommerce\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BrandLogoImg, {\n    className: \"rounded-full\"\n  }));\n};\n\nvar BrandLogo = function BrandLogo() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: \"/home\",\n    className: \"flex ml-2 sm:ml-0\",\n    title: \"Goto Iha Ecommerce\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BrandLogoImg, null));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrandLogo);\n\n//# sourceURL=webpack://iha-ecommerce/./React_Files/Components/BrandLogo.js?");

/***/ }),

/***/ "./React_Files/Components/Footer.js":
/*!******************************************!*\
  !*** ./React_Files/Components/Footer.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Footer)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _BrandLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BrandLinks */ \"./React_Files/Components/BrandLinks.js\");\n/* harmony import */ var _BrandLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BrandLogo */ \"./React_Files/Components/BrandLogo.js\");\n\n\n\nfunction Footer() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"footer\", {\n    className: \"text-gray-600 body-font bg-white border-t\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    className: \"flex title-font font-medium items-center md:justify-start justify-center text-gray-900\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BrandLogo__WEBPACK_IMPORTED_MODULE_2__.BrandLogoImgFull, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    className: \"text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4\"\n  }, \"\\xA9 2021 Iha Consultancy \\u2014\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: \"https://github.com/Wajid2001/\",\n    className: \"text-gray-600 ml-1\",\n    target: \"_blank\"\n  }, \"@Wajid2001\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BrandLinks__WEBPACK_IMPORTED_MODULE_1__.BrandLinkStrip, null))));\n}\n\n//# sourceURL=webpack://iha-ecommerce/./React_Files/Components/Footer.js?");

/***/ })

}]);