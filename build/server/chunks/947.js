"use strict";
exports.id = 947;
exports.ids = [947];
exports.modules = {

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

/***/ 3693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ getMovieDetail)
/* harmony export */ });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7927);

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

/***/ 8135:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ userAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2451);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_0__]);
jotai__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const userAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(null);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ supabase)
/* harmony export */ });
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2885);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);

const url = "https://qmlqnnraxopeorifkipv.supabase.co";
const secret = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFtbHFubnJheG9wZW9yaWZraXB2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjUwNDE1NTUsImV4cCI6MTk4MDYxNzU1NX0.JjnLL5B1YWx4nrMx3Szxuabg-sB5GcsxOqO4VPTl5Vw";
if (!url || !secret) throw new Error("Missing supabase credentials");
const supabase = (0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)(url, secret);


/***/ })

};
;