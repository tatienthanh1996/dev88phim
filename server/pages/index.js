"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6131:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3015);
/* harmony import */ var _Shared_ImageFade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9114);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__]);
([swiper__WEBPACK_IMPORTED_MODULE_2__, swiper_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const BannerSlider = ({ images  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.Swiper, {
        className: "rounded-lg overflow-hidden",
        modules: [
            swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation,
            swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay
        ],
        navigation: true,
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 5000
        },
        children: images.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__.SwiperSlide, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: item.link,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: "block w-full h-0 pb-[42%] relative",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_ImageFade__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                width: 900,
                                height: 400,
                                className: "absolute top-0 left-0 w-full h-full object-cover opacity-75",
                                src: item.image,
                                alt: ""
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "scale-100 absolute left-[7%] bottom-[10%] text-xl md:text-3xl max-w-[86%] whitespace-nowrap overflow-hidden text-ellipsis",
                                children: item.title
                            })
                        ]
                    })
                })
            }, item.image))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerSlider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2804:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3015);
/* harmony import */ var _components_Shared_Skeleton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4079);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__]);
([swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const InfiniteLoader = ({ forwardedRef ,  })=>{
    const { 0: windowWidth , 1: setWindowWidth  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setWindowWidth(innerWidth);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared_Skeleton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: "my-8 h-6 w-full max-w-[200px]"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: forwardedRef,
                className: "overflow-hidden",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
                    modules: [
                        swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation
                    ],
                    navigation: true,
                    slidesPerView: "auto",
                    slidesPerGroupAuto: true,
                    children: [
                        ...new Array(Math.ceil(windowWidth / 200))
                    ].map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("!w-[175px]", {
                                "!ml-[30px]": index !== 0
                            }),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared_Skeleton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                className: "w-[175px] h-[246px] rounded-xl"
                            })
                        }, index))
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InfiniteLoader);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3097:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3015);
/* harmony import */ var _shared_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8769);
/* harmony import */ var _Shared_ImageFade__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9114);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__]);
([swiper__WEBPACK_IMPORTED_MODULE_3__, swiper_react__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Slider = ({ images , coverType  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.Swiper, {
        modules: [
            swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation
        ],
        navigation: true,
        slidesPerView: "auto",
        slidesPerGroupAuto: true,
        children: images.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_4__.SwiperSlide, {
                style: {
                    width: _shared_constants__WEBPACK_IMPORTED_MODULE_5__/* .IMAGE_CARD_SIZE */ .G[coverType || 1].width
                },
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
                    "!ml-[30px]": index !== 0
                }),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                    href: item.link,
                    prefetch: false,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        className: "block rounded-lg overflow-hidden bg-dark-lighten group",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_ImageFade__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                style: {
                                    width: _shared_constants__WEBPACK_IMPORTED_MODULE_5__/* .IMAGE_CARD_SIZE */ .G[coverType || 1].width,
                                    height: _shared_constants__WEBPACK_IMPORTED_MODULE_5__/* .IMAGE_CARD_SIZE */ .G[coverType || 1].height
                                },
                                className: "group-hover:brightness-75 transition duration-300 object-cover",
                                src: item.image,
                                width: _shared_constants__WEBPACK_IMPORTED_MODULE_5__/* .IMAGE_CARD_SIZE */ .G[coverType || 1].width,
                                height: _shared_constants__WEBPACK_IMPORTED_MODULE_5__/* .IMAGE_CARD_SIZE */ .G[coverType || 1].height,
                                alt: ""
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "group-hover:text-primary transition duration-300 py-1 px-2 m-0 text-lg max-w-full whitespace-nowrap overflow-hidden text-ellipsis",
                                children: item.title
                            })
                        ]
                    })
                })
            }, item.image))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4016:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2451);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8135);
/* harmony import */ var _utils_supabase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2968);
/* harmony import */ var _Shared_ImageFade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9114);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_2__, _store__WEBPACK_IMPORTED_MODULE_6__]);
([jotai__WEBPACK_IMPORTED_MODULE_2__, _store__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Sidebar = ({ sidebarActive , setSidebarActive  })=>{
    const [user] = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.useAtom)(_store__WEBPACK_IMPORTED_MODULE_6__/* .userAtom */ .L);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex-shrink-0 sm:sticky left-auto right-full sm:!right-0 sm:!left-0 fixed top-0 flex flex-col items-stretch py-10 pl-5 xl:pl-10 pr-0 w-[90vw] max-w-[288px] sm:max-w-none sm:w-16 xl:w-72 border-r border-gray-800 h-screen overflow-y-auto z-10 bg-dark sm:bg-transparent sm:!translate-x-0 transition-all duration-500", {
                    "translate-x-full": sidebarActive,
                    "translate-x-0": !sidebarActive
                }),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                        href: "/",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            className: "flex gap-2 items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "w-30 h-6",
                                    src: "https://odetv.vn/images/common/headerLogo.svg",
                                    alt: ""
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    className: "font-semibold text-xl block sm:hidden xl:block",
                                    children: "DEV88"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-0 sm:mt-4 xl:mt-0 block sm:flex flex-col gap-0 sm:gap-4 xl:block xl:gap-0",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-400 uppercase mt-10 mb-4 block sm:hidden xl:block",
                                children: "Menu"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col items-stretch gap-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex items-center gap-2 transition", {
                                                "text-primary border-r-4 border-primary hover:brightness-125": router.pathname === "/",
                                                "text-gray-400 hover:text-gray-300": router.pathname !== "/"
                                            }),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaHome, {
                                                    className: "w-6 h-6 fill-current"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "block sm:hidden xl:block",
                                                    children: "Home"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/history",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex items-center gap-2 transition", {
                                                "text-primary border-r-4 border-primary hover:brightness-125": router.pathname === "/history",
                                                "text-gray-400 hover:text-gray-300": router.pathname !== "/history"
                                            }),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaHistory, {
                                                    className: "w-6 h-6 fill-current"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "block sm:hidden xl:block",
                                                    children: "History"
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/search",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("md:!hidden flex items-center gap-2 transition", {
                                                "text-primary border-r-4 border-primary hover:brightness-125": router.pathname === "/search",
                                                "text-gray-400 hover:text-gray-300": router.pathname !== "/search"
                                            }),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaSearch, {
                                                    className: "w-6 h-6 fill-current"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: "block sm:hidden xl:block",
                                                    children: "Search"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-400 uppercase mt-10 mb-4 block sm:hidden xl:block",
                                children: "Personal"
                            }),
                            !user ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                href: "/sign-in",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: "flex items-center gap-2 transition text-gray-400 hover:text-gray-300",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaSignInAlt, {
                                            className: "w-6 h-6 fill-current"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "block sm:hidden xl:block",
                                            children: "Sign In"
                                        })
                                    ]
                                })
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col items-stretch gap-3",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex gap-2 items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_ImageFade__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                src: user.user_metadata.avatar_url || user.user_metadata.picture,
                                                width: 24,
                                                height: 24,
                                                className: "rounded-full",
                                                alt: ""
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "text-gray-400 block sm:hidden xl:block",
                                                children: user.user_metadata.full_name || user.user_metadata.name
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                        onClick: ()=>_utils_supabase__WEBPACK_IMPORTED_MODULE_7__/* .supabase.auth.signOut */ .O.auth.signOut(),
                                        className: "flex items-center cursor-pointer gap-2 transition text-gray-400 hover:text-gray-300",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaSignOutAlt, {
                                                className: "w-6 h-6 fill-current"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: "block sm:hidden xl:block",
                                                children: "Sign Out"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>setSidebarActive(false),
                className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("bg-[#00000080] z-[5] fixed top-0 left-0 w-full h-full transition-all duration-500 sm:!opacity-0", {
                    "opacity-100 visible": sidebarActive,
                    "opacity-0 invisible": !sidebarActive
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


const Skeleton = ({ className , ...others })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("animate-pulse bg-gray-700", className),
        ...others
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skeleton);


/***/ }),

/***/ 441:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _trpc_react_ssg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3414);
/* harmony import */ var _trpc_react_ssg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_trpc_react_ssg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4009);
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72);
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(superjson__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Home_BannerSlider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6131);
/* harmony import */ var _components_Home_InfiniteLoader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2804);
/* harmony import */ var _components_Home_SectionSlider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3097);
/* harmony import */ var _components_Layout_Sidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4016);
/* harmony import */ var _components_Search_SearchBox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(229);
/* harmony import */ var _components_Search_TopSearches__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2822);
/* harmony import */ var _components_Shared_Meta__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6089);
/* harmony import */ var _server_createRouter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(617);
/* harmony import */ var _services_search__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9576);
/* harmony import */ var _utils_trpc__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1278);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__, _components_Home_BannerSlider__WEBPACK_IMPORTED_MODULE_7__, _components_Home_InfiniteLoader__WEBPACK_IMPORTED_MODULE_8__, _components_Home_SectionSlider__WEBPACK_IMPORTED_MODULE_9__, _components_Layout_Sidebar__WEBPACK_IMPORTED_MODULE_10__, _server_createRouter__WEBPACK_IMPORTED_MODULE_14__]);
([react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__, _components_Home_BannerSlider__WEBPACK_IMPORTED_MODULE_7__, _components_Home_InfiniteLoader__WEBPACK_IMPORTED_MODULE_8__, _components_Home_SectionSlider__WEBPACK_IMPORTED_MODULE_9__, _components_Layout_Sidebar__WEBPACK_IMPORTED_MODULE_10__, _server_createRouter__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const Home = ({ topSearches  })=>{
    const { 0: sidebarActive , 1: setSidebarActive  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const { data , fetchNextPage , isFetchingNextPage  } = _utils_trpc__WEBPACK_IMPORTED_MODULE_16__/* .trpc.useInfiniteQuery */ .S.useInfiniteQuery([
        "home.infinite",
        {}
    ], {
        getNextPageParam: (_, allPages)=>allPages.length,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared_Meta__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                title: "FilmHot - AdFree Movie / Anime Watching Website",
                description: "Your favorite movies and TV shows in one place",
                image: "/preview.png"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex sm:hidden justify-between px-[4vw] mt-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: "/",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: "w-8 h-8",
                                    src: "/icon.png",
                                    alt: ""
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-xl font-medium",
                                    children: "FilmHot"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>setSidebarActive(!sidebarActive),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaBars, {
                            className: "w-6 h-6 fill-white"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout_Sidebar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                        sidebarActive: sidebarActive,
                        setSidebarActive: setSidebarActive
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-grow px-[4vw] md:px-8 pb-8 pt-0 overflow-hidden flex flex-col items-stretch",
                        children: [
                            data?.pages?.flat().map((section)=>section.homeSectionType === "BANNER" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "overflow-hidden w-full mt-8",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home_BannerSlider__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                        images: section.recommendContentVOList.map((item)=>{
                                            const searchParams = new URLSearchParams(new URL(item.jumpAddress).search);
                                            if (!searchParams.get("id")) return null;
                                            return {
                                                title: item.title,
                                                image: item.imageUrl,
                                                link: searchParams.get("type") === "0" ? `/movie/${searchParams.get("id")}` : `/tv/${searchParams.get("id")}/0`
                                            };
                                        }).filter(Boolean) || []
                                    })
                                }, section.homeSectionId) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            className: "text-2xl mb-3 mt-8",
                                            children: section.homeSectionName.replace("on Loklok", "")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home_SectionSlider__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            images: section.recommendContentVOList.map((item)=>{
                                                const searchParams = new URLSearchParams(new URL(item.jumpAddress).search);
                                                return {
                                                    title: item.title,
                                                    image: item.imageUrl,
                                                    link: searchParams.get("type") === "0" ? `/movie/${searchParams.get("id")}` : `/tv/${searchParams.get("id")}/0`
                                                };
                                            }),
                                            coverType: section.coverType
                                        })
                                    ]
                                }, section.homeSectionId)),
                            data?.pages?.slice(-1)?.[0]?.length !== 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_intersection_observer__WEBPACK_IMPORTED_MODULE_5__.InView, {
                                onChange: (inView)=>{
                                    if (inView && !isFetchingNextPage && data?.pages?.slice(-1)?.[0]?.length !== 0) {
                                        fetchNextPage();
                                    }
                                },
                                rootMargin: "0px 0px 1000px 0px",
                                threshold: [
                                    0,
                                    0.25,
                                    0.5,
                                    0.75,
                                    1
                                ],
                                children: ({ ref  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Home_InfiniteLoader__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                        forwardedRef: ref
                                    })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex-shrink-0 w-[350px] p-8 sticky top-0 h-screen scrollbar overflow-hidden overflow-y-auto hidden md:block",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Search_SearchBox__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "text-xl my-6",
                                children: "Top Searches"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Search_TopSearches__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                topSearches: topSearches
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
const getStaticProps = async ()=>{
    try {
        const ssg = (0,_trpc_react_ssg__WEBPACK_IMPORTED_MODULE_1__.createSSGHelpers)({
            router: _server_createRouter__WEBPACK_IMPORTED_MODULE_14__/* .appRouter */ .q,
            ctx: {
                req: undefined,
                res: undefined
            },
            transformer: (superjson__WEBPACK_IMPORTED_MODULE_6___default())
        });
        const [topSearches] = await Promise.all([
            (0,_services_search__WEBPACK_IMPORTED_MODULE_15__/* .getTopSearches */ .mj)(),
            ssg.fetchInfiniteQuery("home.infinite", {}), 
        ]);
        return {
            props: {
                topSearches,
                trpcState: ssg.dehydrate()
            },
            revalidate: 300
        };
    } catch (error) {
        return {
            props: {},
            revalidate: 60,
            notFound: true
        };
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": () => (/* binding */ createRouter)
});

// UNUSED EXPORTS: createContext

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

/***/ 617:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ appRouter)
/* harmony export */ });
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(superjson__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6913);
/* harmony import */ var _routers_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5621);
/* harmony import */ var _routers_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2641);
/* harmony import */ var _routers_video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2309);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_routers_home__WEBPACK_IMPORTED_MODULE_2__, _routers_search__WEBPACK_IMPORTED_MODULE_3__, _routers_video__WEBPACK_IMPORTED_MODULE_4__]);
([_routers_home__WEBPACK_IMPORTED_MODULE_2__, _routers_search__WEBPACK_IMPORTED_MODULE_3__, _routers_video__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const appRouter = (0,_context__WEBPACK_IMPORTED_MODULE_1__/* .createRouter */ .p)().transformer((superjson__WEBPACK_IMPORTED_MODULE_0___default())).merge("home.", _routers_home__WEBPACK_IMPORTED_MODULE_2__/* .homeRouter */ .W).merge("search.", _routers_search__WEBPACK_IMPORTED_MODULE_3__/* .searchRouter */ .Z).merge("video.", _routers_video__WEBPACK_IMPORTED_MODULE_4__/* .videoRouter */ .u);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5621:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ homeRouter)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
/* harmony import */ var _services_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9189);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6913);
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

/***/ 2641:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ searchRouter)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
/* harmony import */ var _services_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9576);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6913);
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

/***/ 2309:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ videoRouter)
/* harmony export */ });
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9926);
/* harmony import */ var _services_movie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3693);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6913);
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

/***/ 9189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ getHome)
/* harmony export */ });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7927);

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

/***/ 2885:
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ 1782:
/***/ ((module) => {

module.exports = require("@trpc/react");

/***/ }),

/***/ 3414:
/***/ ((module) => {

module.exports = require("@trpc/react/ssg");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

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

/***/ }),

/***/ 72:
/***/ ((module) => {

module.exports = require("superjson");

/***/ }),

/***/ 2451:
/***/ ((module) => {

module.exports = import("jotai");;

/***/ }),

/***/ 4009:
/***/ ((module) => {

module.exports = import("react-intersection-observer");;

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ }),

/***/ 9926:
/***/ ((module) => {

module.exports = import("zod");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [699,676,664,89,768,947,855], () => (__webpack_exec__(441)));
module.exports = __webpack_exports__;

})();