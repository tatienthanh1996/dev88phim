"use strict";
exports.id = 855;
exports.ids = [855];
exports.modules = {

/***/ 2822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shared_ImageFade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9114);



const TopSearches = ({ topSearches  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex flex-col gap-3",
        children: topSearches.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: item.domainType === 0 ? `/movie/${item.id}` : `/tv/${item.id}/0`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    className: "flex gap-2 hover:brightness-75 transition duration-300",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-[100px] h-[60px] flex-shrink-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_ImageFade__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                src: item.cover,
                                className: "w-[100px] h-[60px] object-cover rounded-lg",
                                width: 100,
                                height: 60,
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                children: item.title
                            })
                        })
                    ]
                })
            }, item.id))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopSearches);


/***/ }),

/***/ 9576:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Fx": () => (/* binding */ getSearchKeywords),
/* harmony export */   "ND": () => (/* binding */ searchWithKeyword),
/* harmony export */   "mj": () => (/* binding */ getTopSearches)
/* harmony export */ });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7927);

const getSearchKeywords = async (keyword)=>(await _client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post(`search/searchLenovo`, {
        searchKeyWord: keyword,
        size: 10
    })).data.data.searchResults;
const searchWithKeyword = async (keyword)=>(await _client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("search/v1/searchWithKeyWord", {
        searchKeyWord: keyword,
        size: 50,
        sort: "",
        searchType: ""
    })).data.data.searchResults;
const getTopSearches = async ()=>(await _client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("search/v1/searchLeaderboard")).data.data.list;


/***/ })

};
;