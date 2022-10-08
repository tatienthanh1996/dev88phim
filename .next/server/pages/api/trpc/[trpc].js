"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 72:
/***/ ((module) => {

module.exports = require("superjson");

/***/ }),

/***/ 9926:
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 2933:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5445);
/* harmony import */ var _server_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3569);
/* harmony import */ var _server_createRouter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3088);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_createRouter__WEBPACK_IMPORTED_MODULE_2__]);
_server_createRouter__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_0__.createNextApiHandler)({
    router: _server_createRouter__WEBPACK_IMPORTED_MODULE_2__/* .appRouter */ .q,
    createContext: _server_context__WEBPACK_IMPORTED_MODULE_1__/* .createContext */ .k
}));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "k": () => (/* binding */ createContext),
  "p": () => (/* binding */ createRouter)
});

;// CONCATENATED MODULE: external "@trpc/server"
const server_namespaceObject = require("@trpc/server");
;// CONCATENATED MODULE: ./src/server/context.ts

const createContext = async (opts)=>{
    const req = opts?.req;
    const res = opts?.res;
    return {
        req,
        res
    };
};
const createRouter = ()=>server_namespaceObject.router();


/***/ }),

/***/ 3088:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ appRouter)
/* harmony export */ });
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(superjson__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3569);
/* harmony import */ var _routers_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2012);
/* harmony import */ var _routers_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6009);
/* harmony import */ var _routers_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9749);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_routers_home__WEBPACK_IMPORTED_MODULE_2__, _routers_search__WEBPACK_IMPORTED_MODULE_3__, _routers_video__WEBPACK_IMPORTED_MODULE_4__]);
([_routers_home__WEBPACK_IMPORTED_MODULE_2__, _routers_search__WEBPACK_IMPORTED_MODULE_3__, _routers_video__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const appRouter = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .createRouter */ .p)().transformer((superjson__WEBPACK_IMPORTED_MODULE_0___default())).merge("home.", _routers_home__WEBPACK_IMPORTED_MODULE_2__/* .homeRouter */ .W).merge("search.", _routers_search__WEBPACK_IMPORTED_MODULE_3__/* .searchRouter */ .Z).merge("video.", _routers_video__WEBPACK_IMPORTED_MODULE_4__/* .videoRouter */ .u);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2012:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ homeRouter)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
/* harmony import */ var _services_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6303);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3569);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);
zod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const homeRouter = (0,_context__WEBPACK_IMPORTED_MODULE_2__/* .createRouter */ .p)().query("infinite", {
    input: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        cursor: zod__WEBPACK_IMPORTED_MODULE_0__.z.number().nullish()
    }),
    resolve: async ({ input  })=>{
        const data = await (0,_services_home__WEBPACK_IMPORTED_MODULE_1__/* .getHome */ .e)(input.cursor || 0);
        return data;
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6009:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ searchRouter)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
/* harmony import */ var _services_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6791);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3569);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);
zod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const searchRouter = (0,_context__WEBPACK_IMPORTED_MODULE_2__/* .createRouter */ .p)().mutation("keywords", {
    input: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        keyword: zod__WEBPACK_IMPORTED_MODULE_0__.z.string()
    }),
    resolve: async ({ input  })=>{
        const data = await (0,_services_search__WEBPACK_IMPORTED_MODULE_1__/* .getSearchKeywords */ .Fx)(input.keyword);
        return data;
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9749:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ videoRouter)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
/* harmony import */ var _services_movie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7285);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3569);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_0__]);
zod__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const videoRouter = (0,_context__WEBPACK_IMPORTED_MODULE_2__/* .createRouter */ .p)().query("info", {
    input: zod__WEBPACK_IMPORTED_MODULE_0__.z.object({
        id: zod__WEBPACK_IMPORTED_MODULE_0__.z.string(),
        category: zod__WEBPACK_IMPORTED_MODULE_0__.z.number(),
        episodeIndex: zod__WEBPACK_IMPORTED_MODULE_0__.z.number().nullish()
    }),
    resolve: async ({ input , ctx: { res  }  })=>{
        res?.revalidate(input.category === 0 ? `/movie/${input.id}` : `/tv/${input.id}/${input.episodeIndex}`);
        const data = await (0,_services_movie__WEBPACK_IMPORTED_MODULE_1__/* .getMovieDetail */ .d)(input.id, input.category, input.episodeIndex || undefined);
        return data;
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 6303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ getHome)
/* harmony export */ });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4895);

const getHome = async (page = 0)=>{
    try {
        const data = (await _client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("homePage/getHome", {
            params: {
                page
            }
        })).data.data.recommendItems.filter((section)=>section.homeSectionType !== "BLOCK_GROUP");
        if (!data) {
            return [];
        }
        return data;
    } catch (error) {
        return [];
    }
};


/***/ }),

/***/ 7285:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ getMovieDetail)
/* harmony export */ });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4895);

const getMovieDetail = async (id, category, episodeIndex = 0)=>{
    const data = (await _client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("movieDrama/get", {
        params: {
            id,
            category
        }
    })).data.data;
    const sources = (await Promise.all(data.episodeVo[episodeIndex].definitionList.map(async (quality)=>(await _client__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("media/previewInfo", {
            params: {
                category,
                contentId: id,
                episodeId: data.episodeVo[episodeIndex].id,
                definition: quality.code
            }
        })).data.data.mediaUrl))).map((url, index)=>({
            quality: Number(data.episodeVo[episodeIndex].definitionList[index].description.toLowerCase().replace("p", "")),
            url
        })).sort((a, b)=>b.quality - a.quality);
    if (sources.some((item)=>item.url.startsWith("http:"))) {
        return await getMovieDetail(id, category, episodeIndex);
    }
    const subtitles = data.episodeVo[episodeIndex].subtitlingList.map((sub)=>({
            language: `${sub.language}${sub.translateType ? " (Auto)" : ""}`,
            url: sub.subtitlingUrl,
            lang: sub.languageAbbr
        })).reduce((acc, element)=>{
        if (element.lang === "en") {
            return [
                element,
                ...acc
            ];
        }
        return [
            ...acc,
            element
        ];
    }, []).reduce((acc, element)=>{
        if (element.lang === "vi") {
            return [
                element,
                ...acc
            ];
        }
        return [
            ...acc,
            element
        ];
    }, []);
    return {
        data: {
            ...data,
            // Info of all episode can be huge, up to 2MB
            episodeVo: data.episodeVo.length
        },
        sources,
        subtitles
    };
};


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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [445], () => (__webpack_exec__(2933)));
module.exports = __webpack_exports__;

})();