"use strict";
(() => {
var exports = {};
exports.id = 685;
exports.ids = [685];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 2766:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6791);

const handler = async (req, res)=>{
    const keyword = req.query.keyword;
    if (!keyword || typeof keyword !== "string") return res.status(400).send("Invalid request");
    const data = await (0,_services_search__WEBPACK_IMPORTED_MODULE_0__/* .getSearchKeywords */ .Fx)(keyword);
    res.send(data);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ }),

/***/ 4895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const client = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: "https://ga-mobile-api.loklok.tv/cms/app",
    headers: {
        lang: "en",
        versioncode: "11",
        clienttype: "ios_jike_default"
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);


/***/ }),

/***/ 6791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fx": () => (/* binding */ getSearchKeywords)
/* harmony export */ });
/* unused harmony exports searchWithKeyword, getTopSearches */
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4895);

const getSearchKeywords = async (keyword)=>(await _client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`search/searchLenovo`, {
        searchKeyWord: keyword,
        size: 10
    })).data.data.searchResults;
const searchWithKeyword = async (keyword)=>(await axios.post("search/v1/searchWithKeyWord", {
        searchKeyWord: keyword,
        size: 50,
        sort: "",
        searchType: ""
    })).data.data.searchResults;
const getTopSearches = async ()=>(await axios.get("search/v1/searchLeaderboard")).data.data.list;


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2766));
module.exports = __webpack_exports__;

})();