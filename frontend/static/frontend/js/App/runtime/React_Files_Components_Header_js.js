/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkiha_ecommerce"] = self["webpackChunkiha_ecommerce"] || []).push([["React_Files_Components_Header_js"],{

/***/ "./React_Files/Components/BrandLogo.js":
/*!*********************************************!*\
  !*** ./React_Files/Components/BrandLogo.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BrandLogoImg\": () => (/* binding */ BrandLogoImg),\n/* harmony export */   \"BrandLogoCircle\": () => (/* binding */ BrandLogoCircle),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\n__webpack_require__(/*! ../static/index.scss */ \"./React_Files/static/index.scss\");\n\nvar BrandLogoImg = function BrandLogoImg(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    className: \"h-12 w-12 my-2 my:0 \".concat(props.className),\n    src: \"/static/frontend/img/Iha Unnathi logo Croped.jpeg\",\n    alt: \"Iha Ecommerce Logo\"\n  }));\n};\nvar BrandLogoCircle = function BrandLogoCircle() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: \"/home\",\n    className: \"flex mx-auto w-max transition flex px-1 py-1 rounded-full bg-transparent hover:bg-white active:bg-gray-100 border border-white hover:border-gray-200 active:border-gray-500 shadow-none hover:shadow active:shadow-md\",\n    title: \"Goto Iha Ecommerce\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BrandLogoImg, {\n    className: \"rounded-full\"\n  }));\n};\n\nvar BrandLogo = function BrandLogo() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: \"/home\",\n    className: \"flex ml-2 sm:ml-0\",\n    title: \"Goto Iha Ecommerce\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BrandLogoImg, null));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BrandLogo);\n\n//# sourceURL=webpack://iha-ecommerce/./React_Files/Components/BrandLogo.js?");

/***/ }),

/***/ "./React_Files/Components/Header.js":
/*!******************************************!*\
  !*** ./React_Files/Components/Header.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/components/popover/popover.esm.js\");\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/components/transitions/transition.esm.js\");\n/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @heroicons/react/outline */ \"./node_modules/@heroicons/react/outline/esm/index.js\");\n/* harmony import */ var _BrandLogo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BrandLogo */ \"./React_Files/Components/BrandLogo.js\");\n\n\n\n\nvar BrandLogo = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {\n  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./BrandLogo */ \"./React_Files/Components/BrandLogo.js\"));\n});\nvar SignInButton = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {\n  return __webpack_require__.e(/*! import() */ \"React_Files_Components_SignInButton_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./SignInButton */ \"./React_Files/Components/SignInButton.js\"));\n});\nvar pages = [{\n  name: \"Home\",\n  description: \"Iha Ecommerce\",\n  href: \"/home\",\n  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.HomeIcon\n}, {\n  name: \"Categories\",\n  description: \"Shop from various categories\",\n  href: \"/categories\",\n  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.ShoppingBagIcon\n}, {\n  name: \"Dashboard\",\n  description: \"Manage Your Order and Favorite products\",\n  href: \"/dashboard\",\n  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.PresentationChartLineIcon\n}, {\n  name: \"Sell\",\n  description: \"Start Selling on Iha Ecommerce\",\n  href: \"/dashboard/sell\",\n  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.TruckIcon\n}, {\n  name: \"Contact us\",\n  description: \"Quickly Solve your problems while shopping\",\n  href: \"/contactus\",\n  icon: _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.PhoneIcon\n}];\nfunction Header(mainProp) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover, {\n    className: \"relative w-full border-b-2 border-gray-200 \".concat(mainProp.className ? mainProp.className : \" bg-white \")\n  }, function (_ref) {\n    var open = _ref.open;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"max-w-screen-2xl mx-auto px-2 sm:px-4\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"flex justify-between items-center md:justify-start md:space-x-10\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n      fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"Loading\"\n      })\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BrandLogo, {\n      small: mainProp && mainProp.small == true ? true : false\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"hidden -mb-0.5 md:flex md:space-x-10 \".concat(mainProp && mainProp.small == true ? \"h-12\" : \"h-20\")\n    }, pages.map(function (page, index) {\n      var classes = \"h-full transition-all px-2 flex text-base font-medium text-gray-500 hover:text-green-500 focus:text-gray-700 border-b-2 border-transparent focus:border-green-500\";\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n        key: index,\n        className: classes,\n        href: page.href\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n        className: \"my-auto\"\n      }, page.name));\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"hidden md:contents\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {\n      fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"Loading\"\n      })\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SignInButton, {\n      small: mainProp && mainProp.small == true ? true : false\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"mr-2 -my-2 md:hidden\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover.Button, {\n      className: \"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n      className: \"sr-only\"\n    }, \"Open menu\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.MenuIcon, {\n      className: \"h-6 w-6\",\n      \"aria-hidden\": \"true\"\n    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_4__.Transition, {\n      show: open,\n      as: react__WEBPACK_IMPORTED_MODULE_0__.Fragment,\n      enter: \"duration-200 ease-out\",\n      enterFrom: \"opacity-0 scale-95\",\n      enterTo: \"opacity-100 scale-100\",\n      leave: \"duration-100 ease-in\",\n      leaveFrom: \"opacity-100 scale-100\",\n      leaveTo: \"opacity-0 scale-95\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover.Panel, {\n      focus: true,\n      \"static\": true,\n      className: \"z-40 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"pt-5 pb-6 px-5\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"-mt-2 flex items-center justify-between\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_BrandLogo__WEBPACK_IMPORTED_MODULE_2__.BrandLogoImg, {\n      className: \"h-16 py-2\"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"-mr-2\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover.Button, {\n      className: \"bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n      className: \"sr-only\"\n    }, \"Close menu\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_1__.XIcon, {\n      className: \"h-6 w-6\",\n      \"aria-hidden\": \"true\"\n    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"mt-6\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"nav\", {\n      className: \"grid gap-y-8\"\n    }, pages.map(function (item, index) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n        key: index,\n        href: item.href,\n        className: \"-m-3 p-3 flex items-center rounded-md hover:bg-gray-200\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(item.icon, {\n        className: \"flex-shrink-0 h-6 w-6 text-green-600\",\n        \"aria-hidden\": \"true\"\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n        className: \"ml-3 text-base font-medium text-gray-900\"\n      }, item.name));\n    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(SignInButton, null)))))));\n  });\n}\n\n//# sourceURL=webpack://iha-ecommerce/./React_Files/Components/Header.js?");

/***/ })

}]);