(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[603],{8266:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/search",function(){return r(1644)}])},7043:function(e,t,r){"use strict";var n=r(5893),s=r(1664),i=r.n(s),a=r(9583),c=r(229);t.Z=function(){return(0,n.jsxs)("div",{className:"flex justify-between items-center my-7",children:[(0,n.jsx)(i(),{href:"/",children:(0,n.jsxs)("a",{className:"flex items-center gap-2",children:[(0,n.jsx)("img",{className:"w-25 h-10",src:"https://odetv.vn/images/common/headerLogo.svg",alt:""}),(0,n.jsx)("span",{className:"text-xl font-medium"})]})}),(0,n.jsx)(i(),{href:"/search",children:(0,n.jsx)("a",{className:"block md:hidden",children:(0,n.jsx)(a.U41,{className:"w-6 h-6"})})}),(0,n.jsx)("div",{className:"max-w-[500px] hidden md:block",children:(0,n.jsx)(c.Z,{})})]})}},229:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var n=r(7568),s=r(655),i=r(5893),a=r(4184),c=r.n(a),o=r(1664),l=r.n(o),u=r(1163),h=r(7294),d=r(9583),m=r(1278),x=function(e){var t=e.autoFocus,r=(0,h.useState)(""),a=r[0],o=r[1],x=(0,h.useState)([]),f=x[0],p=x[1],v=(0,h.useRef)(null),g=(0,u.useRouter)(),j=m.S.useMutation("search.keywords").mutateAsync;(0,h.useEffect)((function(){v.current&&clearTimeout(v.current),p([]),a.trim()&&(v.current=setTimeout((0,n.Z)((function(){var e;return(0,s.__generator)(this,(function(t){switch(t.label){case 0:return[4,j({keyword:a.trim()})];case 1:return e=t.sent(),p(e.map((function(e){return function(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent}(e)}))),[2]}}))})),500))}),[a,j]);return(0,i.jsxs)("div",{className:"relative group w-full",children:[(0,i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),a.trim()&&g.push({pathname:"/search",query:{q:a.trim()}})},className:"relative",children:[(0,i.jsx)("input",{value:a,onKeyDown:function(e){return e.stopPropagation()},onKeyUp:function(e){return e.stopPropagation()},onKeyPress:function(e){return e.stopPropagation()},onChange:function(e){return o(e.target.value)},className:"bg-transparent outline-none border border-gray-600 w-full rounded-full py-2 pl-4 pr-8",type:"text",placeholder:"Search...",autoFocus:t}),(0,i.jsx)("button",{className:"absolute right-2 top-1/2 -translate-y-1/2",children:(0,i.jsx)(d.U41,{className:"w-5 h-5"})})]}),f.length>0&&(0,i.jsx)("div",{className:"absolute z-10 top-full left-0 w-full bg-dark-lighten rounded overflow-x-hidden overflow-y-auto max-h-[200px] flex-col items-stretch hidden group-focus-within:flex",children:f.map((function(e,t){return(0,i.jsx)(l(),{href:{pathname:"/search",query:{q:e}},children:(0,i.jsx)("a",{className:c()("text-left p-2 w-full",{"border-b border-gray-500":t!==f.length-1}),children:e})},t)}))})]})}},2822:function(e,t,r){"use strict";var n=r(5893),s=r(1664),i=r.n(s),a=r(9114);t.Z=function(e){var t=e.topSearches;return(0,n.jsx)("div",{className:"flex flex-col gap-3",children:t.map((function(e){return(0,n.jsx)(i(),{href:0===e.domainType?"/movie/".concat(e.id):"/tv/".concat(e.id,"/0"),children:(0,n.jsxs)("a",{className:"flex gap-2 hover:brightness-75 transition duration-300",children:[(0,n.jsx)("div",{className:"w-[100px] h-[60px] flex-shrink-0",children:(0,n.jsx)(a.Z,{src:e.cover,className:"w-[100px] h-[60px] object-cover rounded-lg",width:100,height:60,alt:""})}),(0,n.jsx)("div",{children:(0,n.jsx)("h1",{children:e.title})})]})},e.id)}))})}},9114:function(e,t,r){"use strict";var n=r(1799),s=r(9396),i=r(9534),a=r(5893),c=r(2679),o=r(8769);t.Z=function(e){var t=e.src,r=e.width,l=e.height,u=(0,i.Z)(e,["src","width","height"]);return(0,a.jsx)(c.LazyLoadImage,(0,s.Z)((0,n.Z)({},u),{src:(0,o.t)(t,r,l),width:r,height:l,effect:"opacity"}))}},6089:function(e,t,r){"use strict";var n=r(5893),s=r(9008),i=r.n(s);t.Z=function(e){var t=e.title,r=e.description,s=e.image;return(0,n.jsxs)(i(),{children:[(0,n.jsx)("title",{children:t}),(0,n.jsx)("meta",{name:"title",content:t}),(0,n.jsx)("meta",{name:"description",content:r}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:title",content:t}),(0,n.jsx)("meta",{property:"og:description",content:r}),(0,n.jsx)("meta",{property:"og:image",content:s}),(0,n.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,n.jsx)("meta",{property:"twitter:title",content:t}),(0,n.jsx)("meta",{property:"twitter:description",content:r}),(0,n.jsx)("meta",{property:"twitter:image",content:s})]})}},1644:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return h}});var n=r(5893),s=r(1664),i=r.n(s),a=r(9114),c=r(6089),o=r(7043),l=r(229),u=r(2822),h=!0;t.default=function(e){var t=e.result,r=e.topSearches,s=e.query;return r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.Z,{title:"Search - Filmhot",description:"FilmHot - AdFree Movie / Anime Watching Website",image:"/preview.png"}),(0,n.jsx)("div",{className:"flex justify-center my-[100px] mx-6",children:(0,n.jsxs)("div",{className:"w-full max-w-[400px] flex flex-col items-center gap-4",children:[(0,n.jsxs)("div",{className:"flex flex-col items-stretch gap-3",children:[(0,n.jsx)("h1",{className:"text-2xl",children:"Search for your favorite movies"}),(0,n.jsx)(l.Z,{autoFocus:!0})]}),(0,n.jsxs)("div",{className:"mt-8 w-full",children:[(0,n.jsx)("h1",{className:"text-lg mb-3",children:"Popular Searches"}),(0,n.jsx)(u.Z,{topSearches:r})]})]})})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.Z,{title:"Search for '".concat(s,"' - Filmhot"),description:"FilmHot - AdFree Movie / Anime Watching Website",image:"/preview.png"}),(0,n.jsxs)("div",{className:"flex flex-col items-stretch mx-[7vw] mb-8",children:[(0,n.jsx)(o.Z,{}),(0,n.jsxs)("div",{children:[(0,n.jsxs)("h1",{className:"mb-6 text-3xl",children:["Search result for ","'".concat(s,"'")]}),0===t.length?(0,n.jsx)("div",{className:"text-center my-6",children:"No result found"}):(0,n.jsx)("div",{className:"grid gap-6 grid-cols-sm md:grid-cols-lg",children:t.map((function(e){return(0,n.jsx)(i(),{href:0===e.domainType?"/movie/".concat(e.id):"/tv/".concat(e.id,"/0"),children:(0,n.jsx)("a",{className:"relative h-0 pb-[163%] bg-dark-lighten rounded overflow-hidden group",children:(0,n.jsxs)("div",{className:"absolute top-0 left-0 w-full h-full flex flex-col items-stretch",children:[(0,n.jsx)("div",{className:"relative w-full h-0 pb-[140%] flex-shrink-0 group-hover:brightness-[80%] transition duration-300",children:(0,n.jsx)(a.Z,{width:250,className:"absolute top-0 left-0 w-full h-full object-cover",src:e.coverVerticalUrl,alt:""})}),(0,n.jsx)("div",{className:"flex-grow flex items-center",children:(0,n.jsx)("h1",{className:"w-full whitespace-nowrap overflow-hidden text-ellipsis px-2 group-hover:text-primary transition duration-300",children:e.name})})]})})},e.id)}))})]})]})]})}},8769:function(e,t,r){"use strict";r.d(t,{G:function(){return n},t:function(){return s}});var n={0:{width:200,height:100},1:{width:175,height:246}},s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return"https://images.weserv.nl/?url=".concat(encodeURIComponent(e),"&w=").concat(t,"&h=").concat(r,"&fit=cover&output=webp")}},1278:function(e,t,r){"use strict";r.d(t,{S:function(){return n}});var n=(0,r(7883).x3)()}},function(e){e.O(0,[445,996,541,774,888,179],(function(){return t=8266,e(e.s=t);var t}));var t=e.O();_N_E=t}]);