"use strict";
(() => {
var exports = {};
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 9528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1421);
/* harmony import */ var babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Shared_ImageFade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9114);
/* harmony import */ var _components_Shared_Meta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6089);
/* harmony import */ var _services_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9576);
/* harmony import */ var _components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7043);
/* harmony import */ var _components_Search_SearchBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(229);
/* harmony import */ var _components_Search_TopSearches__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2822);










const Search = ({ result , topSearches , query  })=>{
    if (topSearches) return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared_Meta__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: "Search - Filmhot",
                description: "FilmHot - AdFree Movie / Anime Watching Website",
                image: "/preview.png"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-center my-[100px] mx-6",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full max-w-[400px] flex flex-col items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col items-stretch gap-3",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-2xl",
                                    children: "Search for your favorite movies"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Search_SearchBox__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    autoFocus: true
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "mt-8 w-full",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-lg mb-3",
                                    children: "Popular Searches"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Search_TopSearches__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                    topSearches: topSearches
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared_Meta__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                title: `Search for '${query}' - Filmhot`,
                description: "FilmHot - AdFree Movie / Anime Watching Website",
                image: "/preview.png"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col items-stretch mx-[7vw] mb-8",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Navbar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                className: "mb-6 text-3xl",
                                children: [
                                    "Search result for ",
                                    `'${query}'`
                                ]
                            }),
                            result.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "text-center my-6",
                                children: "No result found"
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "grid gap-6 grid-cols-sm md:grid-cols-lg",
                                children: result.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: item.domainType === 0 ? `/movie/${item.id}` : `/tv/${item.id}/0`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "relative h-0 pb-[163%] bg-dark-lighten rounded overflow-hidden group",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "absolute top-0 left-0 w-full h-full flex flex-col items-stretch",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "relative w-full h-0 pb-[140%] flex-shrink-0 group-hover:brightness-[80%] transition duration-300",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared_ImageFade__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                            width: 250,
                                                            className: "absolute top-0 left-0 w-full h-full object-cover",
                                                            src: item.coverVerticalUrl,
                                                            alt: ""
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex-grow flex items-center",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                            className: "w-full whitespace-nowrap overflow-hidden text-ellipsis px-2 group-hover:text-primary transition duration-300",
                                                            children: item.name
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    }, item.id))
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__.withSuperJSONPage)(Search));
const getServerSideProps = (0,babel_plugin_superjson_next_tools__WEBPACK_IMPORTED_MODULE_1__.withSuperJSONProps)(async ({ query  })=>{
    const q = query.q;
    if (!q || typeof q !== "string") {
        const topSearches = await (0,_services_search__WEBPACK_IMPORTED_MODULE_5__/* .getTopSearches */ .mj)();
        return {
            props: {
                topSearches
            }
        };
    }
    const result = await (0,_services_search__WEBPACK_IMPORTED_MODULE_5__/* .searchWithKeyword */ .ND)(q);
    return {
        props: {
            result,
            query: q.trim()
        }
    };
}, []);


/***/ }),

/***/ 7927:
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

/***/ 1782:
/***/ ((module) => {

module.exports = require("@trpc/react");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 1421:
/***/ ((module) => {

module.exports = require("babel-plugin-superjson-next/tools");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 9252:
/***/ ((module) => {

module.exports = require("react-lazy-load-image-component");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [699,676,664,89,768,43,855], () => (__webpack_exec__(9528)));
module.exports = __webpack_exports__;

})();