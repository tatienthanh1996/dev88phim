(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(741)}])},229:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(7568),s=r(655),a=r(5893),i=r(4184),l=r.n(i),c=r(1664),o=r.n(c),d=r(1163),h=r(7294),m=r(9583),u=r(1278),x=function(e){var t=e.autoFocus,r=(0,h.useState)(""),i=r[0],c=r[1],x=(0,h.useState)([]),p=x[0],f=x[1],g=(0,h.useRef)(null),v=(0,d.useRouter)(),j=u.S.useMutation("search.keywords").mutateAsync;(0,h.useEffect)((function(){g.current&&clearTimeout(g.current),f([]),i.trim()&&(g.current=setTimeout((0,n.Z)((function(){var e;return(0,s.__generator)(this,(function(t){switch(t.label){case 0:return[4,j({keyword:i.trim()})];case 1:return e=t.sent(),f(e.map((function(e){return function(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent}(e)}))),[2]}}))})),500))}),[i,j]);return(0,a.jsxs)("div",{className:"relative group w-full",children:[(0,a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i.trim()&&v.push({pathname:"/search",query:{q:i.trim()}})},className:"relative",children:[(0,a.jsx)("input",{value:i,onKeyDown:function(e){return e.stopPropagation()},onKeyUp:function(e){return e.stopPropagation()},onKeyPress:function(e){return e.stopPropagation()},onChange:function(e){return c(e.target.value)},className:"bg-transparent outline-none border border-gray-600 w-full rounded-full py-2 pl-4 pr-8",type:"text",placeholder:"Search...",autoFocus:t}),(0,a.jsx)("button",{className:"absolute right-2 top-1/2 -translate-y-1/2",children:(0,a.jsx)(m.U41,{className:"w-5 h-5"})})]}),p.length>0&&(0,a.jsx)("div",{className:"absolute z-10 top-full left-0 w-full bg-dark-lighten rounded overflow-x-hidden overflow-y-auto max-h-[200px] flex-col items-stretch hidden group-focus-within:flex",children:p.map((function(e,t){return(0,a.jsx)(o(),{href:{pathname:"/search",query:{q:e}},children:(0,a.jsx)("a",{className:l()("text-left p-2 w-full",{"border-b border-gray-500":t!==p.length-1}),children:e})},t)}))})]})}},2822:function(e,t,r){"use strict";var n=r(5893),s=r(1664),a=r.n(s),i=r(9114);t.Z=function(e){var t=e.topSearches;return(0,n.jsx)("div",{className:"flex flex-col gap-3",children:t.map((function(e){return(0,n.jsx)(a(),{href:0===e.domainType?"/movie/".concat(e.id):"/tv/".concat(e.id,"/0"),children:(0,n.jsxs)("a",{className:"flex gap-2 hover:brightness-75 transition duration-300",children:[(0,n.jsx)("div",{className:"w-[100px] h-[60px] flex-shrink-0",children:(0,n.jsx)(i.Z,{src:e.cover,className:"w-[100px] h-[60px] object-cover rounded-lg",width:100,height:60,alt:""})}),(0,n.jsx)("div",{children:(0,n.jsx)("h1",{children:e.title})})]})},e.id)}))})}},9114:function(e,t,r){"use strict";var n=r(1799),s=r(9396),a=r(9534),i=r(5893),l=r(2679),c=r(8769);t.Z=function(e){var t=e.src,r=e.width,o=e.height,d=(0,a.Z)(e,["src","width","height"]);return(0,i.jsx)(l.LazyLoadImage,(0,s.Z)((0,n.Z)({},d),{src:(0,c.t)(t,r,o),width:r,height:o,effect:"opacity"}))}},6089:function(e,t,r){"use strict";var n=r(5893),s=r(9008),a=r.n(s);t.Z=function(e){var t=e.title,r=e.description,s=e.image;return(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:t}),(0,n.jsx)("meta",{name:"title",content:t}),(0,n.jsx)("meta",{name:"description",content:r}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:title",content:t}),(0,n.jsx)("meta",{property:"og:description",content:r}),(0,n.jsx)("meta",{property:"og:image",content:s}),(0,n.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{property:"twitter:title",content:t}),(0,n.jsx)("meta",{property:"twitter:description",content:r}),(0,n.jsx)("meta",{property:"twitter:image",content:s})]})}},741:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return T},default:function(){return C}});var n=r(5893),s=r(1664),a=r.n(s),i=r(7294),l=r(9583),c=r(7650),o=r(965),d=r(719),h=r(9114),m=function(e){var t=e.images;return(0,n.jsx)(d.tq,{className:"rounded-lg overflow-hidden",modules:[o.W_,o.pt],navigation:!0,loop:!0,slidesPerView:1,autoplay:{delay:5e3},children:t.map((function(e){return(0,n.jsx)(d.o5,{children:(0,n.jsx)(a(),{href:e.link,children:(0,n.jsxs)("a",{className:"block w-full h-0 pb-[42%] relative",children:[(0,n.jsx)(h.Z,{width:900,height:400,className:"absolute top-0 left-0 w-full h-full object-cover opacity-75",src:e.image,alt:""}),(0,n.jsx)("h1",{className:"scale-100 absolute left-[7%] bottom-[10%] text-xl md:text-3xl max-w-[86%] whitespace-nowrap overflow-hidden text-ellipsis",children:e.title})]})})},e.image)}))})},u=r(9815),x=r(4184),p=r.n(x),f=r(1799),g=r(9534),v=function(e){var t=e.className,r=(0,g.Z)(e,["className"]);return(0,n.jsx)("div",(0,f.Z)({className:p()("animate-pulse bg-gray-700",t)},r))},j=function(e){var t=e.forwardedRef,r=(0,i.useState)(0),s=r[0],a=r[1];return(0,i.useEffect)((function(){a(innerWidth)}),[]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(v,{className:"my-8 h-6 w-full max-w-[200px]"}),(0,n.jsx)("div",{ref:t,className:"overflow-hidden",children:(0,n.jsx)(d.tq,{modules:[o.W_],navigation:!0,slidesPerView:"auto",slidesPerGroupAuto:!0,children:(0,u.Z)(new Array(Math.ceil(s/200))).map((function(e,t){return(0,n.jsx)(d.o5,{className:p()("!w-[175px]",{"!ml-[30px]":0!==t}),children:(0,n.jsx)(v,{className:"w-[175px] h-[246px] rounded-xl"})},t)}))})})]})},w=r(8769),b=function(e){var t=e.images,r=e.coverType;return(0,n.jsx)(d.tq,{modules:[o.W_],navigation:!0,slidesPerView:"auto",slidesPerGroupAuto:!0,children:t.map((function(e,t){return(0,n.jsx)(d.o5,{style:{width:w.G[r||1].width},className:p()({"!ml-[30px]":0!==t}),children:(0,n.jsx)(a(),{href:e.link,prefetch:!1,children:(0,n.jsxs)("a",{className:"block rounded-lg overflow-hidden bg-dark-lighten group",children:[(0,n.jsx)(h.Z,{style:{width:w.G[r||1].width,height:w.G[r||1].height},className:"group-hover:brightness-75 transition duration-300 object-cover",src:e.image,width:w.G[r||1].width,height:w.G[r||1].height,alt:""}),(0,n.jsx)("h1",{className:"group-hover:text-primary transition duration-300 py-1 px-2 m-0 text-lg max-w-full whitespace-nowrap overflow-hidden text-ellipsis",children:e.title})]})})},e.image)}))})},y=r(828),N=r(1131),k=r(1163),_=r(8135),S=r(6032),P=function(e){var t=e.sidebarActive,r=e.setSidebarActive,s=(0,y.Z)((0,N.KO)(_.L),1)[0],i=(0,k.useRouter)();return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:p()("flex-shrink-0 sm:sticky left-auto right-full sm:!right-0 sm:!left-0 fixed top-0 flex flex-col items-stretch py-10 pl-5 xl:pl-10 pr-0 w-[90vw] max-w-[288px] sm:max-w-none sm:w-16 xl:w-72 border-r border-gray-800 h-screen overflow-y-auto z-10 bg-dark sm:bg-transparent sm:!translate-x-0 transition-all duration-500",{"translate-x-full":t,"translate-x-0":!t}),children:[(0,n.jsx)(a(),{href:"/",children:(0,n.jsxs)("a",{className:"flex gap-2 items-center",children:[(0,n.jsx)("img",{className:"w-30 h-6",src:"https://odetv.vn/images/common/headerLogo.svg",alt:""}),(0,n.jsx)("p",{className:"font-semibold text-xl block sm:hidden xl:block",children:"DEV88"})]})}),(0,n.jsxs)("div",{className:"mt-0 sm:mt-4 xl:mt-0 block sm:flex flex-col gap-0 sm:gap-4 xl:block xl:gap-0",children:[(0,n.jsx)("p",{className:"text-gray-400 uppercase mt-10 mb-4 block sm:hidden xl:block",children:"Menu"}),(0,n.jsxs)("div",{className:"flex flex-col items-stretch gap-3",children:[(0,n.jsx)(a(),{href:"/",children:(0,n.jsxs)("a",{className:p()("flex items-center gap-2 transition",{"text-primary border-r-4 border-primary hover:brightness-125":"/"===i.pathname,"text-gray-400 hover:text-gray-300":"/"!==i.pathname}),children:[(0,n.jsx)(l.xng,{className:"w-6 h-6 fill-current"}),(0,n.jsx)("p",{className:"block sm:hidden xl:block",children:"Home"})]})}),(0,n.jsx)(a(),{href:"/history",children:(0,n.jsxs)("a",{className:p()("flex items-center gap-2 transition",{"text-primary border-r-4 border-primary hover:brightness-125":"/history"===i.pathname,"text-gray-400 hover:text-gray-300":"/history"!==i.pathname}),children:[(0,n.jsx)(l.ceS,{className:"w-6 h-6 fill-current"}),(0,n.jsx)("p",{className:"block sm:hidden xl:block",children:"History"})]})}),(0,n.jsx)(a(),{href:"/search",children:(0,n.jsxs)("a",{className:p()("md:!hidden flex items-center gap-2 transition",{"text-primary border-r-4 border-primary hover:brightness-125":"/search"===i.pathname,"text-gray-400 hover:text-gray-300":"/search"!==i.pathname}),children:[(0,n.jsx)(l.U41,{className:"w-6 h-6 fill-current"}),(0,n.jsx)("p",{className:"block sm:hidden xl:block",children:"Search"})]})})]}),(0,n.jsx)("p",{className:"text-gray-400 uppercase mt-10 mb-4 block sm:hidden xl:block",children:"Personal"}),s?(0,n.jsxs)("div",{className:"flex flex-col items-stretch gap-3",children:[(0,n.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,n.jsx)(h.Z,{src:s.user_metadata.avatar_url||s.user_metadata.picture,width:24,height:24,className:"rounded-full",alt:""}),(0,n.jsx)("p",{className:"text-gray-400 block sm:hidden xl:block",children:s.user_metadata.full_name||s.user_metadata.name})]}),(0,n.jsxs)("button",{onClick:function(){return S.O.auth.signOut()},className:"flex items-center cursor-pointer gap-2 transition text-gray-400 hover:text-gray-300",children:[(0,n.jsx)(l.fHX,{className:"w-6 h-6 fill-current"}),(0,n.jsx)("p",{className:"block sm:hidden xl:block",children:"Sign Out"})]})]}):(0,n.jsx)(a(),{href:"/sign-in",children:(0,n.jsxs)("a",{className:"flex items-center gap-2 transition text-gray-400 hover:text-gray-300",children:[(0,n.jsx)(l.IPB,{className:"w-6 h-6 fill-current"}),(0,n.jsx)("p",{className:"block sm:hidden xl:block",children:"Sign In"})]})})]})]}),(0,n.jsx)("div",{onClick:function(){return r(!1)},className:p()("bg-[#00000080] z-[5] fixed top-0 left-0 w-full h-full transition-all duration-500 sm:!opacity-0",{"opacity-100 visible":t,"opacity-0 invisible":!t})})]})},Z=r(229),A=r(2822),L=r(6089),R=r(1278),T=!0,C=function(e){var t,r,s,o,d=e.topSearches,h=(0,i.useState)(!1),u=h[0],x=h[1],p=R.S.useInfiniteQuery(["home.infinite",{}],{getNextPageParam:function(e,t){return t.length},refetchOnWindowFocus:!1,refetchOnMount:!1,refetchOnReconnect:!1}),f=p.data,g=p.fetchNextPage,v=p.isFetchingNextPage;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(L.Z,{title:"FilmHot - AdFree Movie / Anime Watching Website",description:"Your favorite movies and TV shows in one place",image:"/preview.png"}),(0,n.jsxs)("div",{className:"flex sm:hidden justify-between px-[4vw] mt-6",children:[(0,n.jsx)(a(),{href:"/",children:(0,n.jsxs)("a",{className:"flex items-center gap-2",children:[(0,n.jsx)("img",{className:"w-8 h-8",src:"/icon.png",alt:""}),(0,n.jsx)("span",{className:"text-xl font-medium",children:"FilmHot"})]})}),(0,n.jsx)("button",{onClick:function(){return x(!u)},children:(0,n.jsx)(l.Fm7,{className:"w-6 h-6 fill-white"})})]}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)(P,{sidebarActive:u,setSidebarActive:x}),(0,n.jsxs)("div",{className:"flex-grow px-[4vw] md:px-8 pb-8 pt-0 overflow-hidden flex flex-col items-stretch",children:[null===f||void 0===f||null===(t=f.pages)||void 0===t?void 0:t.flat().map((function(e){return"BANNER"===e.homeSectionType?(0,n.jsx)("div",{className:"overflow-hidden w-full mt-8",children:(0,n.jsx)(m,{images:e.recommendContentVOList.map((function(e){var t=new URLSearchParams(new URL(e.jumpAddress).search);return t.get("id")?{title:e.title,image:e.imageUrl,link:"0"===t.get("type")?"/movie/".concat(t.get("id")):"/tv/".concat(t.get("id"),"/0")}:null})).filter(Boolean)||[]})},e.homeSectionId):(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{className:"text-2xl mb-3 mt-8",children:e.homeSectionName.replace("on Loklok","")}),(0,n.jsx)(b,{images:e.recommendContentVOList.map((function(e){var t=new URLSearchParams(new URL(e.jumpAddress).search);return{title:e.title,image:e.imageUrl,link:"0"===t.get("type")?"/movie/".concat(t.get("id")):"/tv/".concat(t.get("id"),"/0")}})),coverType:e.coverType})]},e.homeSectionId)})),0!==(null===(s=null===f||void 0===f||null===(r=f.pages)||void 0===r?void 0:r.slice(-1))||void 0===s||null===(o=s[0])||void 0===o?void 0:o.length)&&(0,n.jsx)(c.df,{onChange:function(e){var t,r,n;e&&!v&&0!==(null===(r=null===f||void 0===f||null===(t=f.pages)||void 0===t?void 0:t.slice(-1))||void 0===r||null===(n=r[0])||void 0===n?void 0:n.length)&&g()},rootMargin:"0px 0px 1000px 0px",threshold:[0,.25,.5,.75,1],children:function(e){var t=e.ref;return(0,n.jsx)(j,{forwardedRef:t})}})]}),(0,n.jsxs)("div",{className:"flex-shrink-0 w-[350px] p-8 sticky top-0 h-screen scrollbar overflow-hidden overflow-y-auto hidden md:block",children:[(0,n.jsx)(Z.Z,{}),(0,n.jsx)("h1",{className:"text-xl my-6",children:"Top Searches"}),(0,n.jsx)(A.Z,{topSearches:d})]})]})]})}},8769:function(e,t,r){"use strict";r.d(t,{G:function(){return n},t:function(){return s}});var n={0:{width:200,height:100},1:{width:175,height:246}},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return"https://images.weserv.nl/?url=".concat(encodeURIComponent(e),"&w=").concat(t,"&h=").concat(r,"&fit=cover&output=webp")}},1278:function(e,t,r){"use strict";r.d(t,{S:function(){return n}});var n=(0,r(7883).x3)()}},function(e){e.O(0,[445,996,541,507,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);