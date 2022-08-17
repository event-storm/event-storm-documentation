"use strict";(self.webpackChunkevent_storm_documentation=self.webpackChunkevent_storm_documentation||[]).push([[5966],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={id:"api",title:"How the API is designed?",tags:["concepts","api"],sidebar_position:6},i=void 0,c={unversionedId:"concepts/api",id:"concepts/api",title:"How the API is designed?",description:"The Event Storm library",source:"@site/docs/concepts/api.md",sourceDirName:"concepts",slug:"/concepts/api",permalink:"/event-storm-documentation/docs/concepts/api",draft:!1,editUrl:"https://github.com/event-storm/event-storm-documentation/tree/main/concepts/api.md",tags:[{label:"concepts",permalink:"/event-storm-documentation/docs/tags/concepts"},{label:"api",permalink:"/event-storm-documentation/docs/tags/api"}],version:"current",sidebarPosition:6,frontMatter:{id:"api",title:"How the API is designed?",tags:["concepts","api"],sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Developer experience",permalink:"/event-storm-documentation/docs/concepts/dx"},next:{title:"FAQ",permalink:"/event-storm-documentation/docs/faq"}},s={},p=[{value:"Basic concepts",id:"basic-concepts",level:2}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Event Storm library "),(0,o.kt)("h2",{id:"basic-concepts"},"Basic concepts"),(0,o.kt)("p",null,"The library consists of 2 parts: event store implementation and data model abstraction. The event store supports:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2b50 ",(0,o.kt)("inlineCode",{parentName:"li"},"dispatch/subscribe")," of models"),(0,o.kt)("li",{parentName:"ul"},"\u2b50 not propagates on duplicate changes(configurable)"),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udca5 middlewares support"),(0,o.kt)("li",{parentName:"ul"},"\u26a1 store persistence")),(0,o.kt)("p",null,"With the store you can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud83d\udc8a get the last state of the store at any time"),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udc4a creating data on real information"),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udccc subscription to last event(even if it happens earlier)"),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udd28 combine the existing information to derive(compute) some information")))}u.isMDXComponent=!0}}]);