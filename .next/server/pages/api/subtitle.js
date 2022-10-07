"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/subtitle";
exports.ids = ["pages/api/subtitle"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "subtitle-converter":
/*!*************************************!*\
  !*** external "subtitle-converter" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("subtitle-converter");

/***/ }),

/***/ "(api)/./src/pages/api/subtitle.ts":
/*!***********************************!*\
  !*** ./src/pages/api/subtitle.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var subtitle_converter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! subtitle-converter */ \"subtitle-converter\");\n/* harmony import */ var subtitle_converter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(subtitle_converter__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst handler = async (req, res)=>{\n    try {\n        const url = req.query.url;\n        if (!url || typeof url !== \"string\") return res.status(400).send(\"Invalid request\");\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(encodeURI(url));\n        if (!response.headers[\"content-type\"].startsWith(\"application/x-subrip\") && !response.headers[\"content-type\"].includes(\"srt\")) return res.status(400).send(\"Invalid content type\");\n        const { subtitle  } = (0,subtitle_converter__WEBPACK_IMPORTED_MODULE_1__.convert)(response.data, \".vtt\");\n        if (!subtitle) return res.status(400).send(\"Cannot convert\");\n        res.setHeader(\"content-type\", \"text/vtt\");\n        res.send(subtitle);\n    } catch (error) {\n        if (!res.headersSent) res.status(500).send(\"Failed to convert the subtitle\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3N1YnRpdGxlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBR0E7QUFHTTtBQUFBLE1BQUFFLE9BQ0YsVUFBQUMsR0FBQSxFQUFBQyxHQUFBO0lBQUEsSUFFQTtRQUdBLE1BQUFDLEdBQU0sR0FBQUYsR0FBQSxDQUFBRyxLQUFXLENBQUFELEdBQUE7UUFFakIsS0FBQUEsR0FDRyxXQUFTQSxHQUFBLEtBQVEsaUJBQWdCRCxHQUFBLENBQVdHLE1BQUEsTUFBQUMsSUFBQTtRQUsvQyxNQUFBQyxRQUFNLFNBQUFULGdEQUFBLENBQUFXLFNBQUEsQ0FBQU4sR0FBQTtRQUFBLEtBQUFJLFFBQUEsQ0FBQUcsT0FFTixDQUFJLGNBQUMsRUFBVUMsVUFBVyx1QkFBTyxNQUFBSixRQUFBLENBQUFHLE9BQUEsaUJBQUFFLFFBQUEsZ0JBQUFWLEdBQUEsQ0FBQUcsTUFBQSxNQUFBQyxJQUFBO1FBRWpDLE1BQUksRUFBQU8sUUFBVSxNQUFBZCwyREFBQSxDQUFBUSxRQUFnQixDQUFBTyxJQUE5QjtRQUVBLElBQUksQ0FBQUQsUUFBSyxTQUFBWCxHQUFBLENBQUFHLE1BQVQsTUFBQUMsSUFBQTtRQUNBSixHQUFBLENBQUFhLFNBQU8sZUFBTztRQUNkYixHQUFBLENBQUFJLElBQUssQ0FBQU8sUUFBSTtJQUFBLFNBRVZHLEtBQUE7UUF6QkgsS0FBQWQsR0FBQSxDQUFBZSxXQUFBLEVBQUFmLEdBQUEsQ0FBQUcsTUFBQSxNQUFBQyxJQUFBO0lBQUE7QUE0QkE7QUFBQSxpRUFBQU4sT0FBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpbG1ob3QtbmV4dC8uL3NyYy9wYWdlcy9hcGkvc3VidGl0bGUudHM/NTQ2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBOZXh0QXBpSGFuZGxlciB9IGZyb20gXCJuZXh0XCI7XG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgeyBjb252ZXJ0IH0gZnJvbSBcInN1YnRpdGxlLWNvbnZlcnRlclwiO1xuXG5jb25zdCBoYW5kbGVyOiBOZXh0QXBpSGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IHJlcS5xdWVyeS51cmw7XG5cbiAgICBpZiAoIXVybCB8fCB0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKVxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5zZW5kKFwiSW52YWxpZCByZXF1ZXN0XCIpO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoZW5jb2RlVVJJKHVybCkpO1xuXG4gICAgaWYgKFxuICAgICAgIXJlc3BvbnNlLmhlYWRlcnNbXCJjb250ZW50LXR5cGVcIl0uc3RhcnRzV2l0aChcImFwcGxpY2F0aW9uL3gtc3VicmlwXCIpICYmXG4gICAgICAhcmVzcG9uc2UuaGVhZGVyc1tcImNvbnRlbnQtdHlwZVwiXS5pbmNsdWRlcyhcInNydFwiKVxuICAgIClcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwMCkuc2VuZChcIkludmFsaWQgY29udGVudCB0eXBlXCIpO1xuXG4gICAgY29uc3QgeyBzdWJ0aXRsZSB9ID0gY29udmVydChyZXNwb25zZS5kYXRhLCBcIi52dHRcIik7XG5cbiAgICBpZiAoIXN1YnRpdGxlKSByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoXCJDYW5ub3QgY29udmVydFwiKTtcblxuICAgIHJlcy5zZXRIZWFkZXIoXCJjb250ZW50LXR5cGVcIiwgXCJ0ZXh0L3Z0dFwiKTtcblxuICAgIHJlcy5zZW5kKHN1YnRpdGxlKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoIXJlcy5oZWFkZXJzU2VudClcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKFwiRmFpbGVkIHRvIGNvbnZlcnQgdGhlIHN1YnRpdGxlXCIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xuIl0sIm5hbWVzIjpbImF4aW9zIiwiY29udmVydCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ1cmwiLCJxdWVyeSIsInN0YXR1cyIsInNlbmQiLCJyZXNwb25zZSIsImdldCIsImVuY29kZVVSSSIsImhlYWRlcnMiLCJzdGFydHNXaXRoIiwiaW5jbHVkZXMiLCJzdWJ0aXRsZSIsImRhdGEiLCJzZXRIZWFkZXIiLCJlcnJvciIsImhlYWRlcnNTZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/subtitle.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/subtitle.ts"));
module.exports = __webpack_exports__;

})();