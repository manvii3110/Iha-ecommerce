/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkiha_ecommerce"] = self["webpackChunkiha_ecommerce"] || []).push([["React_Files_Pages_ProductDashboard_ProductPostingForm_js"],{

/***/ "./React_Files/Pages/ProductDashboard/ProductPostingForm.js":
/*!******************************************************************!*\
  !*** ./React_Files/Pages/ProductDashboard/ProductPostingForm.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProductPostingForm)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nfunction ProductPostingForm() {\n  var inputClass = \"mt-1 appearance-none rounded-lg relative block w-full px-3 py-2 border placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-green-500 focus:border-green-500  focus-within:border-green-500 focus:z-10 sm:text-sm\";\n\n  function getCookie(name) {\n    var cookieValue = null;\n\n    if (document.cookie && document.cookie !== \"\") {\n      var cookies = document.cookie.split(\";\");\n\n      for (var i = 0; i < cookies.length; i++) {\n        var cookie = cookies[i].trim(); // Does this cookie string begin with the name we want?\n\n        if (cookie.substring(0, name.length + 1) === name + \"=\") {\n          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));\n          break;\n        }\n      }\n    }\n\n    return cookieValue;\n  }\n\n  var csrftoken = getCookie(\"csrftoken\");\n  var formData = new FormData(); // This will store important data send to server\n\n  var submitBtnData = \"\"; // This will store restore state for sign in button\n\n  var Loading = function Loading() {\n    formData = new FormData(); // Storing data from form to formData variable as object\n    // document.querySelectorAll(\"#CreateProductForm input\").forEach((e) => {\n    // \tif (e.name != \"images\") {\n    // \t\tformData[e.name] = e.value;\n    // \t}\n    // });\n    // formData[document.querySelector(\"textarea\").name] =\n    // \tdocument.querySelector(\"textarea\").value;\n    // document.querySelectorAll(\"#CreateProductForm select\").forEach((e) => {\n    // \tformData[e.name] = e.value;\n    // });\n    // formData[\"images\"] = document.querySelector(\n    // \t'#CreateProductForm input[name=\"images\"]',\n    // ).files;\n    // Append method\n\n    document.querySelectorAll(\"#CreateProductForm input\").forEach(function (e) {\n      if (e.name != \"images\") {\n        formData.append(e.name, e.value);\n      }\n    });\n    formData.append(document.querySelector(\"textarea\").name, document.querySelector(\"textarea\").value);\n    document.querySelectorAll(\"#CreateProductForm select\").forEach(function (e) {\n      formData.append(e.name, e.value);\n    }); // // Appending images\n    // for (let i in formData) {\n    // \tformData.append(\n    // \t\t\"images\" + i,\n    // \t\tdocument.querySelector('#CreateProductForm input[name=\"images\"]').files[i],\n    // \t);\n    // }\n    // formData.append(\n    // \t\"length\",\n    // \tdocument.querySelector('#CreateProductForm input[name=\"images\"]').files.length,\n    // );\n\n    formData.append(\"images\", document.querySelector('#CreateProductForm input[name=\"images\"]').files); // for (var key of formData.entries()) {\n    // \tconsole.log(key[0] + \", \" + key[1]);\n    // }\n    // Changing submitBtn state to loading\n\n    var submitBtn = document.querySelector(\"button[type='submit']\");\n    submitBtnData = submitBtn.innerHTML;\n    submitBtn.innerHTML = \"<div class='loading'></div>\";\n    console.log(formData);\n  }; // This will restore the sign btn state to previous one\n\n\n  var resetSubmitBtn = function resetSubmitBtn() {\n    var submitBtn = document.querySelector(\"button[type='submit']\");\n    submitBtn.innerHTML = submitBtnData;\n  };\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      _useState2 = _slicedToArray(_useState, 2),\n      errorMessage = _useState2[0],\n      setErrorMessage = _useState2[1];\n\n  var submitForm = function submitForm(e) {\n    setErrorMessage(\"\");\n    Loading();\n    fetch(\"/api/product/\", {\n      method: \"POST\",\n      headers: {\n        \"X-CSRFToken\": csrftoken\n      },\n      body: formData\n    }) // axios\n    // \t.post(\"/api/product/\", formData, {\n    // \t\theaders: {\n    // \t\t\t\"Content-Type\": \"multipart/form-data\",\n    // \t\t\t\"X-CSRFToken\": csrftoken,\n    // \t\t},\n    // \t})\n    .then(function (r) {\n      return r.json();\n    }).then(function (data) {\n      /*\r\n       * This will work only\r\n       * if there is any type of error\r\n       * else the user will be redirected to index page\r\n       */\n      resetSubmitBtn();\n      console.log(data); // if (data.error) {\n      // } else {\n      // \tlocation.replace(\"/dashboard\");\n      // }\n    })[\"catch\"](function (e) {\n      resetSubmitBtn();\n      setErrorMessage(e);\n      console.log(\"There is a catch \".concat(e));\n    });\n  }; // This will import categories for the form\n\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),\n      _useState4 = _slicedToArray(_useState3, 2),\n      categories = _useState4[0],\n      setCategories = _useState4[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    fetch(\"/api/product/categories\").then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      setCategories(data[\"categories\"]);\n    });\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"form\", {\n    id: \"CreateProductForm\",\n    className: \" max-w-6xl mx-auto\",\n    onSubmit: function onSubmit(e) {\n      e.preventDefault();\n      submitForm();\n    },\n    method: \"POST\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"w-100\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"h2\", {\n    className: \" mb-4 text-xl sm:text-3xl font-medium sm:font-normal text-gray-900 border-b pb-2\"\n  }, \"Create a new Product Listing\")), errorMessage != \"\" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"mt-4 w-full bg-red-50 text-red-500 font-bold border-2 border-red-500 rounded-md px-1 py-2 text-center\"\n  }, \"This is \", errorMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"mt-6 flex flex-col md:flex-row border rounded-lg p-5 pt-4 bg-white\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"mr-0 mb-6 md:mr-5 w-full md:w-2/5\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"label\", null, \"Product Photos\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"relative focus-within:border-green-500 focus-within:bg-gray-50 transition-all mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"input\", {\n    name: \"images\",\n    type: \"file\",\n    accept: \"image/*\",\n    className: \"absolute  top-0 h-full w-full cursor-pointer\",\n    multiple: true\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"space-y-1 text-center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"svg\", {\n    className: \"mx-auto h-12 w-12 text-gray-400\",\n    stroke: \"currentColor\",\n    fill: \"none\",\n    viewBox: \"0 0 48 48\",\n    \"aria-hidden\": \"true\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"path\", {\n    d: \"M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02\",\n    strokeWidth: 2,\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"flex text-sm text-gray-600\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"label\", {\n    htmlFor: \"file-upload\",\n    className: \"relative cursor-pointer bg-white rounded-md font-medium text-green-600 hover:text-green-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-green-500\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"span\", null, \"Upload a file\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", {\n    className: \"pl-1\"\n  }, \"or drag and drop\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"p\", {\n    className: \"text-xs text-gray-500\"\n  }, \"PNG, JPG, GIF up to 10MB\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"w-full md:w-3/5 space-y-6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"label\", {\n    className: \"flex\"\n  }, \"Product Title\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"span\", {\n    className: \"text-xs ml-auto font-gray-400 font-normal my-auto\"\n  }, \"(64 characters at max)\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"input\", {\n    className: \" \".concat(inputClass.replace(\"sm:text-sm\", \"text-4xl\")),\n    name: \"productName\",\n    type: \"text\",\n    placeholder: \"Product Title\",\n    maxLength: 64,\n    required: true\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"block md:grid grid-flow-col grid-cols-3 space-y-6 md:space-y-0 space-x-0 md:space-x-6\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"label\", null, \"Product Price\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"span\", {\n    className: \"\".concat(inputClass, \" flex font-medium\")\n  }, \"\\u20B9\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"input\", {\n    className: \"ml-2 focus:outline-none w-full \",\n    name: \"price\",\n    type: \"number\",\n    placeholder: \"1\",\n    min: 1,\n    required: true\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"label\", null, \"Condition\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"relative z-0 w-full\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"select\", {\n    name: \"condition\",\n    className: inputClass\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"option\", {\n    value: \"new\",\n    selected: true\n  }, \"New\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"option\", {\n    value: \"old\"\n  }, \"Old\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"label\", null, \"Category\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"relative z-0 w-full\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"select\", {\n    name: \"category\",\n    className: inputClass,\n    required: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"option\", {\n    value: \"o\",\n    disabled: true,\n    selected: true\n  }, \"select category\"), categories != [] && categories.map(function (d, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"option\", {\n      value: d[0],\n      key: index\n    }, d[1]);\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"label\", null, \"Description\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"textarea\", {\n    name: \"description\",\n    className: \"\".concat(inputClass, \" h-28\")\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"label\", null, \"Keywords\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"input\", {\n    className: inputClass,\n    name: \"keywords\",\n    type: \"text\",\n    required: true\n  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"div\", {\n    className: \"mt-4 flex\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"button\", {\n    className: \"btn-secondary\"\n  }, \"Cancel\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(\"button\", {\n    type: \"submit\",\n    className: \"ml-auto btn-primary\"\n  }, \"Publish\"))));\n}\n\n//# sourceURL=webpack://iha-ecommerce/./React_Files/Pages/ProductDashboard/ProductPostingForm.js?");

/***/ })

}]);