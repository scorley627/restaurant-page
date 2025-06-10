/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  color: springgreen;\n}\n\nul {\n  list-style: none;\n}\n\n.page {\n  background-color: rgb(59, 50, 116);\n}\n\n.header {\n  background-color: rgb(113, 19, 201);\n  min-width: 900px;\n  padding-top: 16px;\n}\n\n.header__nav {\n  display: grid;\n  grid-auto-flow: column;\n  justify-content: center;\n  align-items: end;\n  gap: 16px;\n}\n\n.header__button {\n  background-color: rgb(82, 13, 146);\n  width: 100px;\n  height: 40px;\n  border: none;\n  border-radius: 10px 10px 0px 0px;\n  font-weight: bold;\n  font-size: 1.1em;\n  cursor: pointer;\n}\n\n.header__button:disabled {\n  cursor: default;\n  background-color: rgb(59, 50, 116);\n}\n\n.content {\n  background-color: rgb(113, 19, 201);\n  box-sizing: border-box;\n  width: 900px;\n  margin: 32px auto;\n  padding: 64px;\n  border-radius: 25px;\n  display: grid;\n  gap: 50px;\n}\n\n.content__box {\n  background-color: rgb(82, 13, 146);\n  box-sizing: border-box;\n  width: 500px;\n  padding: 25px;\n  line-height: 1.5;\n  margin: auto;\n  text-align: center;\n  border: 5px solid gold;\n  border-radius: 25px;\n  display: grid;\n  gap: 8px;\n}\n\n.content__box--heading {\n  width: 700px;\n}\n\n.restaurant-description {\n  font-size: 1.3em;\n}\n\n.menu-section {\n  display: grid;\n  gap: 25px;\n}\n\n.menu-section__heading {\n  width: 600px;\n  font-size: 1.8em;\n}\n\n.menu-item-description {\n  font-size: 0.9em;\n}\n\n.menu-list {\n  width: 600px;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact_page.js":
/*!*****************************!*\
  !*** ./src/contact_page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContactPage)\n/* harmony export */ });\nconst CONTACT_INFO = [\n  {\n    name: \"Aerie Boris\",\n    role: \"Chef\",\n    phone: \"123-555-0190\",\n    email: \"aerieboris@totallyRealEmail.com\",\n  },\n  {\n    name: \"Other Dude\",\n    role: \"Manager\",\n    phone: \"123-555-0067\",\n    email: \"otherdude@totallyRealEmail.com\",\n  },\n  {\n    name: \"Last Dude\",\n    role: \"Waiter\",\n    phone: \"123-555-0137\",\n    email: \"lastdude@totallyRealEmail.com\",\n  },\n];\n\nfunction loadContactPage() {\n  const contactHeading = createContactHeading();\n\n  const content = document.querySelector(\".content\");\n  content.replaceChildren(contactHeading);\n\n  for (const contact of CONTACT_INFO) {\n    const contactBox = createContactBox(contact);\n    content.appendChild(contactBox);\n  }\n}\n\nfunction createContactHeading() {\n  const contactHeading = document.createElement(\"h1\");\n  contactHeading.classList.add(\"content__box\");\n  contactHeading.classList.add(\"content__box--heading\");\n  contactHeading.textContent = \"Contact Us\";\n  return contactHeading;\n}\n\nfunction createContactBox(contact) {\n  const contactBox = document.createElement(\"div\");\n  const contactName = document.createElement(\"h3\");\n  const contactInfo = document.createElement(\"ul\");\n  const contactRole = document.createElement(\"li\");\n  const contactPhone = document.createElement(\"li\");\n  const contactEmail = document.createElement(\"li\");\n\n  contactBox.classList.add(\"content__box\");\n  contactName.textContent = contact.name;\n  contactRole.textContent = contact.role;\n  contactPhone.textContent = contact.phone;\n  contactEmail.textContent = contact.email;\n\n  contactInfo.appendChild(contactRole);\n  contactInfo.appendChild(contactPhone);\n  contactInfo.appendChild(contactEmail);\n\n  contactBox.appendChild(contactName);\n  contactBox.appendChild(contactInfo);\n\n  return contactBox;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact_page.js?");

/***/ }),

/***/ "./src/home_page.js":
/*!**************************!*\
  !*** ./src/home_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\nconst RESTAURANT_INFO = {\n  NAME: \"Eyes of the Heart Eatery\",\n  DESCRIPTION:\n    \"Organic cuisine inspired by the flavors of the world and the abundance of Earth.\",\n  HOURS: [\n    \"Sunday: 8am - 8pm\",\n    \"Monday: 8am - 6pm\",\n    \"Tuesday: 8am - 6pm\",\n    \"Wednesday: 8am - 6pm\",\n    \"Thursday: 8am - 6pm\",\n    \"Friday: 8am - 10pm\",\n    \"Saturday: 8am - 10pm\",\n  ],\n  ADDRESS: \"123 12th Street, Mountainville, CO 12345\",\n};\n\nfunction loadHomePage() {\n  const restaurantHeading = createRestaurantHeading();\n  const restaurantDescription = createRestaurantDescription();\n  const restaurantHours = createRestaurantHours();\n  const restaurantAddress = createRestaurantAddress();\n\n  const content = document.querySelector(\".content\");\n  content.replaceChildren(\n    restaurantHeading,\n    restaurantDescription,\n    restaurantHours,\n    restaurantAddress\n  );\n}\n\nfunction createRestaurantHeading() {\n  const heading = document.createElement(\"h1\");\n  heading.classList.add(\"content__box\");\n  heading.classList.add(\"content__box--heading\");\n  heading.textContent = RESTAURANT_INFO.NAME;\n  return heading;\n}\n\nfunction createRestaurantDescription() {\n  const description = document.createElement(\"p\");\n  description.classList.add(\"content__box\");\n  description.classList.add(\"restaurant-description\");\n  description.textContent = RESTAURANT_INFO.DESCRIPTION;\n  return description;\n}\n\nfunction createRestaurantHours() {\n  const hoursSection = document.createElement(\"section\");\n  const hoursHeading = document.createElement(\"h2\");\n  const hoursList = document.createElement(\"ul\");\n\n  hoursSection.classList.add(\"content__box\");\n  hoursHeading.textContent = \"Hours\";\n\n  for (const hours of RESTAURANT_INFO.HOURS) {\n    const hoursItem = document.createElement(\"li\");\n    hoursItem.textContent = hours;\n    hoursList.appendChild(hoursItem);\n  }\n\n  hoursSection.appendChild(hoursHeading);\n  hoursSection.appendChild(hoursList);\n\n  return hoursSection;\n}\n\nfunction createRestaurantAddress() {\n  const addressSection = document.createElement(\"section\");\n  const addressHeading = document.createElement(\"h2\");\n  const address = document.createElement(\"p\");\n\n  addressSection.classList.add(\"content__box\");\n  addressHeading.textContent = \"Address\";\n  address.textContent = RESTAURANT_INFO.ADDRESS;\n\n  addressSection.appendChild(addressHeading);\n  addressSection.appendChild(address);\n\n  return addressSection;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/home_page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_page_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home_page.js */ \"./src/home_page.js\");\n/* harmony import */ var _menu_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu_page.js */ \"./src/menu_page.js\");\n/* harmony import */ var _contact_page_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact_page.js */ \"./src/contact_page.js\");\n\n\n\n\n\nconst homeButton = document.querySelector(\".home-button\");\nlet currentButton = homeButton;\ncurrentButton.disabled = true;\n(0,_home_page_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst headerNav = document.querySelector(\".header__nav\");\nheaderNav.addEventListener(\"click\", function (event) {\n  if (event.target.className.includes(\"header__button\")) {\n    currentButton.disabled = false;\n    currentButton = event.target;\n    currentButton.disabled = true;\n\n    if (currentButton.className.includes(\"home-button\")) {\n      (0,_home_page_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    } else if (currentButton.className.includes(\"menu-button\")) {\n      (0,_menu_page_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    } else if (currentButton.className.includes(\"contact-button\")) {\n      (0,_contact_page_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    }\n  }\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu_page.js":
/*!**************************!*\
  !*** ./src/menu_page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nconst MENU = {\n  LUNCH: [\n    {\n      name: \"BBQ Pork Bowl\",\n      description:\n        \"BBQ pork, roasted carrots, wilted kale. Topped with avocado and hot sauce.\",\n    },\n    {\n      name: \"Cauliflower Bowl\",\n      description:\n        \"Roasted curry cauliflower over sweet potato hummus. Topped with avocado.\",\n    },\n    {\n      name: \"Kitchen Sink Taco\",\n      description:\n        \"Sauteed onion, pepper, black beans, squash, and kale enveloped in scrambled cage-free eggs. Topped with hot sauce or creamy avocado salsa.\",\n    },\n    {\n      name: \"Green Machine Smoothie\",\n      description:\n        \"Spinach, avocado, celery, apple, peanut butter, protein powder\",\n    },\n  ],\n  ENTREES: [\n    {\n      name: \"Veggie Curry\",\n      description:\n        \"Cauliflower, bell pepper, potato, squash, and carrot in a housemade yellow coconut curry sauce. Served with naan.\",\n    },\n    {\n      name: \"Stir Fry\",\n      description:\n        \"Ground beef, carrot, zuchinni, onion, and bell pepper stir fried in a brown sauce. Seved with rice.\",\n    },\n    {\n      name: \"Chile Colorado\",\n      description:\n        \"Classic Chihuahuan dish made with pork smothered in a spicy red chile sauce. Served with refried beans and corn tortillas.\",\n    },\n    {\n      name: \"Pork Schnitzel\",\n      description:\n        \"Double-battered pork cutlet served with cucumber salad and mashed potatoes.\",\n    },\n  ],\n  SIDES: [\n    \"Refried beans\",\n    \"Rice\",\n    \"Roasted veggies\",\n    \"Tortilla chips and salsa\",\n    \"Wilted kale\",\n  ],\n  DESSERT: [\n    \"Choco flan\",\n    \"Dark chocolate brownies\",\n    \"Blackberry cobbler\",\n    \"*Specialty* yogurt dessert\",\n  ],\n  DRINKS: [\n    \"Jarritos\",\n    \"Hibiscus orange Tea\",\n    \"Iced peppermint Tea\",\n    \"Aqua fresca (horchata or tamarind)\",\n  ],\n};\n\nfunction loadMenuPage() {\n  const menuHeading = createMenuHeading();\n  const lunchSection = createMenuSection(\"LUNCH\", MENU.LUNCH);\n  const entreesSection = createMenuSection(\"ENTREES\", MENU.ENTREES);\n  const sidesSection = createListSection(\"SIDES\", MENU.SIDES);\n  const dessertSection = createListSection(\"DESSERT\", MENU.DESSERT);\n  const drinksSection = createListSection(\"DRINKS\", MENU.DRINKS);\n\n  const content = document.querySelector(\".content\");\n  content.replaceChildren(\n    menuHeading,\n    lunchSection,\n    entreesSection,\n    sidesSection,\n    dessertSection,\n    drinksSection\n  );\n}\n\nfunction createMenuHeading() {\n  const heading = document.createElement(\"h1\");\n  heading.classList.add(\"content__box\");\n  heading.classList.add(\"content__box--heading\");\n  heading.textContent = \"MENU\";\n  return heading;\n}\n\nfunction createMenuSection(sectionName, menuItems) {\n  const menuSection = document.createElement(\"section\");\n  const sectionHeading = document.createElement(\"h2\");\n\n  menuSection.classList.add(\"menu-section\");\n  sectionHeading.classList.add(\"content__box\");\n  sectionHeading.classList.add(\"menu-section__heading\");\n  sectionHeading.textContent = sectionName;\n\n  menuSection.appendChild(sectionHeading);\n  for (const item of menuItems) {\n    const itemBox = document.createElement(\"div\");\n    const itemName = document.createElement(\"h3\");\n    const itemDescription = document.createElement(\"p\");\n\n    itemBox.classList.add(\"content__box\");\n    itemName.textContent = item.name;\n    itemDescription.classList.add(\"menu-item-description\");\n    itemDescription.textContent = item.description;\n\n    itemBox.appendChild(itemName);\n    itemBox.appendChild(itemDescription);\n    menuSection.appendChild(itemBox);\n  }\n\n  return menuSection;\n}\n\nfunction createListSection(sectionName, menuItems) {\n  const listSection = document.createElement(\"section\");\n  const listHeading = document.createElement(\"h2\");\n  const list = document.createElement(\"ul\");\n\n  listSection.classList.add(\"content__box\");\n  listSection.classList.add(\"menu-list\");\n  listHeading.textContent = sectionName;\n\n  for (const item of menuItems) {\n    const listItem = document.createElement(\"li\");\n    listItem.textContent = item;\n    list.appendChild(listItem);\n  }\n\n  listSection.appendChild(listHeading);\n  listSection.appendChild(list);\n\n  return listSection;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu_page.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;