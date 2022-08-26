"use strict";(self.webpackChunkevent_storm_documentation=self.webpackChunkevent_storm_documentation||[]).push([[4737],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,h=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5157:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={id:"performance",title:"Performance impact",description:"The library addressed the following areas regarding the performance&#58; bundle size, maintenance cost, minimal data processing",tags:["concepts","performance"],sidebar_position:2},o=void 0,s={unversionedId:"concepts/performance",id:"concepts/performance",title:"Performance impact",description:"The library addressed the following areas regarding the performance&#58; bundle size, maintenance cost, minimal data processing",source:"@site/docs/concepts/performance.md",sourceDirName:"concepts",slug:"/concepts/performance",permalink:"/event-storm-documentation/docs/concepts/performance",draft:!1,editUrl:"https://github.com/event-storm/event-storm-documentation/tree/main/docs/concepts/performance.md",tags:[{label:"concepts",permalink:"/event-storm-documentation/docs/tags/concepts"},{label:"performance",permalink:"/event-storm-documentation/docs/tags/performance"}],version:"current",sidebarPosition:2,frontMatter:{id:"performance",title:"Performance impact",description:"The library addressed the following areas regarding the performance&#58; bundle size, maintenance cost, minimal data processing",tags:["concepts","performance"],sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"The bigger picture",permalink:"/event-storm-documentation/docs/concepts/overview"},next:{title:"How the API is designed?",permalink:"/event-storm-documentation/docs/concepts/api"}},c={},l=[{value:"Bundle size",id:"bundle-size",level:2},{value:"Maintanance cost",id:"maintanance-cost",level:2},{value:"Mimimal data processing",id:"mimimal-data-processing",level:2}],p={toc:l};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The library is concentrated in providing highly optimized subscription mechanism. The library addressed the following areas regarding the performance:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bundle size(load performance)"),(0,a.kt)("li",{parentName:"ul"},"Maintenance cost(development performance)"),(0,a.kt)("li",{parentName:"ul"},"Minimal data processing(CPU performance)")),(0,a.kt)("h2",{id:"bundle-size"},"Bundle size"),(0,a.kt)("p",null,"The application bundle is being dependent on library initial cost, modularity support and integration cost. The Event Storm library is providing built-in support for ",(0,a.kt)("a",{parentName:"p",href:"https://immerjs.github.io/immer/"},"immer"),", and with that only dependency the library size is ",(0,a.kt)("a",{parentName:"p",href:"https://bundlephobia.com/package/event-storm@3.0.0"},"4.5kB(MINIFIED + GZIPPED)"),". The Event Storm library is lazy by design. "),(0,a.kt)("p",null,"What does it mean?\nIt is possible to add/remove/update or import different store assets lazely:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"storm handlers(e.g. some dispatch and data handler, complex data selector)"),(0,a.kt)("li",{parentName:"ul"},"totally new storm instance")),(0,a.kt)("p",null,"The lazyness is allowing to organize, and split the code in a way which is appropriate to exact application."),(0,a.kt)("p",null,'As the library is aware of centralized data management, there is no need to add additional "meta-code" to support new data manipulation. The Event Storm library is allowing to concentrate the source code of the application on the application business logic. Less code written, more light weight bundle at the end.'),(0,a.kt)("h2",{id:"maintanance-cost"},"Maintanance cost"),(0,a.kt)("p",null,"No additional time is needed to generate boilerplate code. The event Storm library has not centralized data management points. It is not forcing to write action/reducer stuff, or any specific code hints or utility functions. The structure is simple as it can be, just adding the data peace in store and making an update with any handler function. The minimalistic touch points allow Event storm library to be easy to maintain solution. "),(0,a.kt)("h2",{id:"mimimal-data-processing"},"Mimimal data processing"),(0,a.kt)("p",null,"To ensure runtime performance the Event storm library is designed to compute as less as possible. The storm updates will be passed to the subscribers in the same event loop cycle. The updates are done synchronously, so it's safe to write code after dispatching data change. Any line after dispatch can access already updated store state. "),(0,a.kt)("p",null,"As already described in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/motivation"},"motivation")," section, the described issues are addressed and fixed by Event Storm.\n",(0,a.kt)("strong",{parentName:"p"},"There is no silver bullet in optimization field"),". "),(0,a.kt)("p",null,"When dealing with CPU optimizations there are 2 aspects:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CPU working time"),(0,a.kt)("li",{parentName:"ul"},"Memory")),(0,a.kt)("p",null,"Whoever tries to optimize the one, it will be at the expense of the other. So, the above described CPU optimizations are also at the expense of memory consumption. Does this mean you can have memory issues? It's hardly possible to cause memory issues with the Event Storm solution, but anyway any system can test the application memory usage with the Event Storm or an alternative solution."))}m.isMDXComponent=!0}}]);