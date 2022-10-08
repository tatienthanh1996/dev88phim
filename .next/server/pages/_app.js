"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1335:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _trpc_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1820);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2451);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8890);
/* harmony import */ var nextjs_progressbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nextjs_progressbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72);
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(superjson__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8135);
/* harmony import */ var _utils_supabase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2968);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_2__, _store__WEBPACK_IMPORTED_MODULE_7__]);
([jotai__WEBPACK_IMPORTED_MODULE_2__, _store__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function MyApp({ Component , pageProps  }) {
    const setUser = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.useSetAtom)(_store__WEBPACK_IMPORTED_MODULE_7__/* .userAtom */ .L);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        setUser(_utils_supabase__WEBPACK_IMPORTED_MODULE_8__/* .supabase.auth.user */ .O.auth.user());
        _utils_supabase__WEBPACK_IMPORTED_MODULE_8__/* .supabase.auth.onAuthStateChange */ .O.auth.onAuthStateChange(()=>setUser(_utils_supabase__WEBPACK_IMPORTED_MODULE_8__/* .supabase.auth.user */ .O.auth.user())); // eslint-disable-next-line
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((nextjs_progressbar__WEBPACK_IMPORTED_MODULE_4___default()), {
                color: "#0D90F3",
                options: {
                    showSpinner: false
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            }),
            process.env.NEXT_PUBLIC_GA_ID && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {
                        strategy: "lazyOnload",
                        async: true,
                        src: `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {
                        id: "google-analytics",
                        strategy: "lazyOnload",
                        children: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `
                    })
                ]
            })
        ]
    });
}
const getBaseUrl = ()=>{
    if (false) {}
    if (false) {}
    if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_trpc_next__WEBPACK_IMPORTED_MODULE_1__.withTRPC)({
    config () {
        const url = `${getBaseUrl()}/api/trpc`;
        return {
            url,
            transformer: (superjson__WEBPACK_IMPORTED_MODULE_6___default())
        };
    }
})(MyApp));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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


/***/ }),

/***/ 2885:
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ 1782:
/***/ ((module) => {

module.exports = require("@trpc/react");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8890:
/***/ ((module) => {

module.exports = require("nextjs-progressbar");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 7583:
/***/ ((module) => {

module.exports = require("react-ssr-prepass");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 72:
/***/ ((module) => {

module.exports = require("superjson");

/***/ }),

/***/ 2451:
/***/ ((module) => {

module.exports = import("jotai");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [699,604], () => (__webpack_exec__(1335)));
module.exports = __webpack_exports__;

})();