"use strict";
exports.id = 573;
exports.ids = [573];
exports.modules = {

/***/ 5596:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks_useFetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8950);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8135);
/* harmony import */ var _utils_supabase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2968);
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6832);
/* harmony import */ var _Shared_ImageFade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9114);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([jotai__WEBPACK_IMPORTED_MODULE_2__, _store__WEBPACK_IMPORTED_MODULE_7__]);
([jotai__WEBPACK_IMPORTED_MODULE_2__, _store__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Comment = ({ data , episodeIndex  })=>{
    const [user] = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.useAtom)(_store__WEBPACK_IMPORTED_MODULE_7__/* .userAtom */ .L);
    const { 0: commentInputValue , 1: setCommentInputValue  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("");
    const { 0: isCommenting , 1: setIsCommenting  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const movieSlug = `${typeof episodeIndex === "undefined" ? "movie" : "tv"}-${data.id}`;
    const { data: comments , error , loading , mutate ,  } = (0,_hooks_useFetch__WEBPACK_IMPORTED_MODULE_6__/* .useFetch */ .i)(movieSlug, async ()=>{
        const { data: comments , error  } = await _utils_supabase__WEBPACK_IMPORTED_MODULE_8__/* .supabase.from */ .O.from("comments").select("*,user(*),reactions(*)").eq("movie_slug", movieSlug).order("created_at", {
            ascending: false
        });
        if (error) {
            console.log(error);
            throw error;
        }
        return comments;
    });
    const handleFormSubmit = async (e)=>{
        e.preventDefault();
        if (commentInputValue.trim() || !user?.id) {
            setIsCommenting(true);
            setCommentInputValue("");
            const { error  } = await _utils_supabase__WEBPACK_IMPORTED_MODULE_8__/* .supabase.from */ .O.from("comments").insert({
                user: user?.id,
                content: commentInputValue.trim().slice(0, 1000),
                movie_slug: movieSlug
            });
            console.log(error);
            await mutate();
            setIsCommenting(false);
        }
    };
    const addReaction = async (commentId, value)=>{
        if (!user?.id) return;
        await _utils_supabase__WEBPACK_IMPORTED_MODULE_8__/* .supabase.from */ .O.from("reactions").upsert({
            user: user.id,
            comment: commentId,
            value
        });
        mutate();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "max-w-[92vw] md:max-w-[calc(88vw-300px)]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-2xl mt-10",
                children: "Comments"
            }),
            error ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "my-3",
                children: "Cannot load comments"
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    user ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: handleFormSubmit,
                        className: "relative border border-gray-600 rounded-full my-6",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-[30px] h-[30px] absolute top-1/2 -translate-y-1/2 left-[10px]",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_ImageFade__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                    src: user.user_metadata.avatar_url,
                                    width: 30,
                                    height: 30,
                                    className: "rounded-full",
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                value: commentInputValue,
                                onChange: (e)=>setCommentInputValue(e.target.value),
                                onKeyDown: (e)=>e.stopPropagation(),
                                onKeyUp: (e)=>e.stopPropagation(),
                                onKeyPress: (e)=>e.stopPropagation(),
                                className: "w-full h-12 bg-transparent outline-none text-white px-12",
                                placeholder: "Comment what you think...",
                                maxLength: 1000,
                                type: "text"
                            }),
                            isCommenting ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute right-[14px] top-1/2 -translate-y-1/2",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-[25px] h-[25px] rounded-full border-white border-t-transparent border-[3px] animate-spin"
                                })
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                className: "absolute right-[14px] top-1/2 -translate-y-1/2",
                                type: "submit",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaPaperPlane, {
                                    className: "w-5 h-5"
                                })
                            })
                        ]
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center gap-3 h-12 border border-gray-600 rounded-full my-6 px-3",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "w-[30px] h-[30px] rounded-full",
                                src: "/default-avatar.png",
                                alt: ""
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    "You need to",
                                    " ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        href: "/sign-in",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            className: "text-primary",
                                            children: "Sign in"
                                        })
                                    }),
                                    " ",
                                    "to comment"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col items-stretch gap-3 w-full",
                        children: comments?.map((comment)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex gap-2 w-full",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Shared_ImageFade__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        className: "rounded-full flex-shrink-0",
                                        src: comment.user.photo_url,
                                        width: 50,
                                        height: 50,
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex-1 min-w-0",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex gap-2 items-end",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "font-bold",
                                                        children: comment.user.display_name
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "text-gray-400 text-sm",
                                                        children: (0,_utils_time__WEBPACK_IMPORTED_MODULE_10__/* .calculateCreatedTime */ .o)(comment.created_at)
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                style: {
                                                    wordWrap: "break-word",
                                                    overflowWrap: "break-word"
                                                },
                                                children: comment.content
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex gap-3 items-center",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                        onClick: ()=>addReaction(comment.id, comment.reactions.some((reaction)=>reaction.user === user?.id && reaction.value === 1) ? 0 : 1),
                                                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex items-center gap-1 transition", {
                                                            "cursor-default": !user,
                                                            "hover:brightness-75": user,
                                                            "text-primary": comment.reactions.some((reaction)=>reaction.user === user?.id && reaction.value === 1)
                                                        }),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaThumbsUp, {
                                                                className: "fill-current"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: comment.reactions.filter((reaction)=>reaction.value === 1).length
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                        onClick: ()=>addReaction(comment.id, comment.reactions.some((reaction)=>reaction.user === user?.id && reaction.value === 2) ? 0 : 2),
                                                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex items-center gap-1 transition", {
                                                            "cursor-default": !user,
                                                            "hover:brightness-75": user,
                                                            "text-primary": comment.reactions.some((reaction)=>reaction.user === user?.id && reaction.value === 2)
                                                        }),
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__.FaThumbsDown, {
                                                                className: "fill-current"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: comment.reactions.filter((reaction)=>reaction.value === 2).length
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }, comment.id))
                    }),
                    !loading && comments?.length === 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "text-center text-gray-400",
                        children: "No one has commented"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Comment);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





const MetaData = ({ data , episodeIndex  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const lastEpisodeRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    const { 0: showLoadMoreButton , 1: setShowLoadMoreButton  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const { 0: isExpanded , 1: setIsExpanded  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        setIsExpanded(false);
        if (lastEpisodeRef.current) {
            if (lastEpisodeRef.current.offsetTop > 0) {
                setShowLoadMoreButton(true);
            }
        }
    }, [
        router.asPath
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col gap-[10px]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "text-3xl mt-5",
                children: data?.name
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "w-4 h-4",
                                src: "/star.png",
                                alt: ""
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: data?.score?.toFixed(1)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "w-4 h-4",
                                src: "/calendar.png",
                                alt: ""
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: data?.year
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex gap-3 flex-wrap",
                children: data.tagList.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "bg-dark-lighten rounded-full px-3 py-1",
                        children: tag.name
                    }, tag.id))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                children: data.introduction
            }),
            data.episodeVo > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-xl my-3",
                        children: "Episodes"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("flex flex-wrap gap-3 relative", {
                            "before:absolute before:bg-gradient-to-b before:from-[#00000000] before:to-dark before:top-10 before:w-full before:left-0 before:h-8 max-h-[68px] overflow-hidden": showLoadMoreButton && !isExpanded
                        }),
                        children: new Array(data.episodeVo).fill("").map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                prefetch: false,
                                href: `/tv/${data.id}/${index}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    ...index === data.episodeVo - 1 ? {
                                        ref: lastEpisodeRef
                                    } : {},
                                    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("px-4 h-[42px] flex items-center bg-dark-lighten rounded hover:brightness-125 transition duration-300", {
                                        "!bg-primary text-white": index === episodeIndex
                                    }),
                                    children: index + 1
                                })
                            }, index))
                    }),
                    showLoadMoreButton && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "text-primary",
                            onClick: ()=>setIsExpanded(!isExpanded),
                            children: isExpanded ? "Show less" : "Show more"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MetaData);


/***/ }),

/***/ 6924:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Shared_ImageFade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9114);



const Similar = ({ data  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex-shrink-0 md:w-[300px]",
        children: [
            data?.refList && data.refList.filter((item)=>item.id !== data.id).length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-2xl my-3",
                        children: "In the series"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "max-h-[60vh] overflow-x-hidden overflow-y-auto flex flex-col items-stretch gap-2",
                        children: data?.refList.filter((item)=>item.id !== data.id).map((ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: `/${ref.category === 0 ? "movie" : "tv"}/${ref.id}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: "flex gap-3 pr-2 hover:brightness-[85%] transition duration-300",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex-shrink-0 h-[100px] w-[70px]",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared_ImageFade__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                height: 100,
                                                width: 70,
                                                className: "h-full w-full object-cover",
                                                src: ref.coverVerticalUrl,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "my-2 flex-grow",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: ref.name
                                            })
                                        })
                                    ]
                                })
                            }, ref.id))
                    })
                ]
            }),
            data?.likeList && data.likeList.length > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "text-2xl my-3",
                        children: "Similar to this"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "max-h-[60vh] overflow-x-hidden overflow-y-auto flex flex-col items-stretch gap-2",
                        children: data?.likeList.map((like)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: `/${like.category === 0 ? "movie" : "tv"}/${like.id}`,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    className: "flex gap-3 pr-2 hover:brightness-[85%] transition duration-300",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex-shrink-0 h-[100px] w-[70px]",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Shared_ImageFade__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                                width: 70,
                                                height: 100,
                                                className: "h-full w-full object-cover",
                                                src: like.coverVerticalUrl,
                                                alt: ""
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "my-2 flex-grow",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: like.name
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            className: "w-4 h-4",
                                                            src: "/star.png",
                                                            alt: ""
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            children: like.score?.toFixed(1)
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }, like.id))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Similar);


/***/ }),

/***/ 1573:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_trpc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1278);
/* harmony import */ var _Layout_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7043);
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5596);
/* harmony import */ var _Metadata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4335);
/* harmony import */ var _Similar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Comment__WEBPACK_IMPORTED_MODULE_5__]);
_Comment__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Player = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\WatchView\\index.tsx -> " + "./Player"
        ]
    },
    ssr: false
});
const WatchView = ({ data , sources , subtitles , episodeIndex ,  })=>{
    const mediaType = typeof episodeIndex === "undefined" ? "movie" : "tv";
    const playerKey = `${mediaType}-${data?.id}${episodeIndex ? `-${episodeIndex}` : ""}`;
    const { 0: willFetchLatestSource , 1: setWillFetchLatestSource  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { data: newData  } = _utils_trpc__WEBPACK_IMPORTED_MODULE_3__/* .trpc.useQuery */ .S.useQuery([
        "video.info",
        {
            id: data.id,
            category: typeof episodeIndex === "undefined" ? 0 : 1,
            episodeIndex
        }, 
    ], {
        enabled: willFetchLatestSource
    });
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        // @ts-ignore
        if (window.xhrModified) return;
        const oldMethod = XMLHttpRequest.prototype.open;
        // @ts-ignore
        XMLHttpRequest.prototype.open = function(method, url, async, username, password) {
            if (typeof url === "string" && url.includes("m3u8")) {
                this.addEventListener("error", ()=>{
                    setWillFetchLatestSource(true);
                });
                this.addEventListener("loadend", ()=>{
                    if (this.status >= 300) {
                        setWillFetchLatestSource(true);
                    }
                });
            }
            return oldMethod.call(this, method, url, async, username, password);
        };
        // @ts-ignore
        window.xhrModified = true;
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!data) return;
        let existing = JSON.parse(localStorage.getItem("filmhot-recent") || "[]");
        if (!Array.isArray(existing)) return;
        existing = existing.filter((item)=>item.id !== data.id);
        existing.unshift({
            id: data.id,
            category: data.category,
            coverVerticalUrl: data.coverVerticalUrl,
            name: data.name
        });
        localStorage.setItem("filmhot-recent", JSON.stringify(existing));
    }, [
        data
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex justify-center",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mx-[4vw] lg:mx-[6vw] flex-1",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Layout_Navbar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col md:flex-row gap-10 my-7",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col items-stretch flex-grow",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-full h-0 pb-[56.25%] relative",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "absolute inset-0 w-full h-full bg-black",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Player, {
                                                playerKey: playerKey,
                                                primaryColor: "#0D90F3",
                                                src: newData?.sources || sources,
                                                subtitles: subtitles?.map((subtitle)=>({
                                                        ...subtitle,
                                                        url: `/api/subtitle?url=${encodeURIComponent(subtitle.url)}`
                                                    })) || []
                                            }, playerKey)
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Metadata__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        data: data,
                                        episodeIndex: episodeIndex
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Comment__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                        data: data,
                                        episodeIndex: episodeIndex
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Similar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                data: data
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WatchView);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8950:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useFetch)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */ 
function useFetch(key, query) {
    const { 0: data , 1: setData  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!data);
    const { 0: error , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    const mutate = ()=>query(key).then((res)=>{
            setData(res);
            setLoading(false);
            setError(false);
        }).catch((err)=>{
            setData(null);
            setLoading(false);
            setError(err);
        });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        mutate();
    }, [
        key
    ]);
    return {
        data,
        loading,
        error,
        mutate
    };
}


/***/ }),

/***/ 6832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ calculateCreatedTime)
/* harmony export */ });
const calculateCreatedTime = (timeCreated)=>{
    let periods = {
        year: 365 * 30 * 24 * 60 * 60 * 1000,
        month: 30 * 24 * 60 * 60 * 1000,
        week: 7 * 24 * 60 * 60 * 1000,
        day: 24 * 60 * 60 * 1000,
        hour: 60 * 60 * 1000,
        minute: 60 * 1000
    };
    let diff = Date.now() - new Date(timeCreated).getTime();
    for(const key in periods){
        if (diff >= periods[key]) {
            let result = Math.floor(diff / periods[key]);
            return `${result} ${result === 1 ? key : key + "s"} ago`;
        }
    }
    return "Just now";
};


/***/ })

};
;