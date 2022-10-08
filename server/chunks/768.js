"use strict";
exports.id = 768;
exports.ids = [768];
exports.modules = {

/***/ 229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Search_SearchBox)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(6290);
;// CONCATENATED MODULE: ./src/utils/text.ts
const htmlToText = (html)=>{
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent;
};

// EXTERNAL MODULE: ./src/utils/trpc.ts
var trpc = __webpack_require__(1278);
;// CONCATENATED MODULE: ./src/components/Search/SearchBox.tsx








const SearchBox = ({ autoFocus  })=>{
    const { 0: inputValue , 1: setInputValue  } = (0,external_react_.useState)("");
    const { 0: suggestions , 1: setSuggestions  } = (0,external_react_.useState)([]);
    const timeoutRef = (0,external_react_.useRef)(null);
    const router = (0,router_.useRouter)();
    const { mutateAsync: fetchKeywords  } = trpc/* trpc.useMutation */.S.useMutation("search.keywords");
    (0,external_react_.useEffect)(()=>{
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setSuggestions([]);
        if (!inputValue.trim()) return;
        timeoutRef.current = setTimeout(async ()=>{
            const data = await fetchKeywords({
                keyword: inputValue.trim()
            });
            setSuggestions(data.map((item)=>htmlToText(item)));
        }, 500);
    }, [
        inputValue,
        fetchKeywords
    ]);
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        if (inputValue.trim()) {
            router.push({
                pathname: "/search",
                query: {
                    q: inputValue.trim()
                }
            });
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative group w-full",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleFormSubmit,
                className: "relative",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        value: inputValue,
                        onKeyDown: (e)=>e.stopPropagation(),
                        onKeyUp: (e)=>e.stopPropagation(),
                        onKeyPress: (e)=>e.stopPropagation(),
                        onChange: (e)=>setInputValue(e.target.value),
                        className: "bg-transparent outline-none border border-gray-600 w-full rounded-full py-2 pl-4 pr-8",
                        type: "text",
                        placeholder: "Search...",
                        autoFocus: autoFocus
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "absolute right-2 top-1/2 -translate-y-1/2",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaSearch, {
                            className: "w-5 h-5"
                        })
                    })
                ]
            }),
            suggestions.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute z-10 top-full left-0 w-full bg-dark-lighten rounded overflow-x-hidden overflow-y-auto max-h-[200px] flex-col items-stretch hidden group-focus-within:flex",
                children: suggestions.map((suggestion, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: {
                            pathname: "/search",
                            query: {
                                q: suggestion
                            }
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            className: external_classnames_default()("text-left p-2 w-full", {
                                "border-b border-gray-500": index !== suggestions.length - 1
                            }),
                            children: suggestion
                        })
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const Search_SearchBox = (SearchBox);


/***/ }),

/***/ 9114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9252);
/* harmony import */ var react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8769);



const ImageFade = ({ src , width , height , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_lazy_load_image_component__WEBPACK_IMPORTED_MODULE_1__.LazyLoadImage, {
        ...props,
        src: (0,_shared_constants__WEBPACK_IMPORTED_MODULE_2__/* .resizeImage */ .t)(src, width, height),
        width: width,
        height: height,
        effect: "opacity"
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageFade);


/***/ }),

/***/ 8769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ IMAGE_CARD_SIZE),
/* harmony export */   "t": () => (/* binding */ resizeImage)
/* harmony export */ });
const IMAGE_CARD_SIZE = {
    0: {
        width: 200,
        height: 100
    },
    1: {
        width: 175,
        height: 246
    }
};
const resizeImage = (url, width = "", height = "")=>`https://images.weserv.nl/?url=${encodeURIComponent(url)}&w=${width}&h=${height}&fit=cover&output=webp`;


/***/ }),

/***/ 1278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ trpc)
/* harmony export */ });
/* harmony import */ var _trpc_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1782);
/* harmony import */ var _trpc_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_trpc_react__WEBPACK_IMPORTED_MODULE_0__);

const trpc = (0,_trpc_react__WEBPACK_IMPORTED_MODULE_0__.createReactQueryHooks)();


/***/ })

};
;