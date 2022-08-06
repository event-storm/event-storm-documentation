"use strict";(self.webpackChunkevent_storm_documentation=self.webpackChunkevent_storm_documentation||[]).push([[128],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,a(a({ref:e},p),{},{components:n})):r.createElement(f,a({ref:e},p))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8495:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={id:"introduction",title:"Introduction",tags:["intro","introduction"],sidebar_position:1},a="Introduction to Event Storm",l={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"The Event storm is a tiny store implementation with pure javascript.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/introduction",draft:!1,editUrl:"https://github.com/event-storm/event-storm-documentation/tree/main/introduction.md",tags:[{label:"intro",permalink:"/docs/tags/intro"},{label:"introduction",permalink:"/docs/tags/introduction"}],version:"current",sidebarPosition:1,frontMatter:{id:"introduction",title:"Introduction",tags:["intro","introduction"],sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Motivation",permalink:"/docs/motivation"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"What is the library focus?",id:"what-is-the-library-focus",level:2},{value:"Basic concepts",id:"basic-concepts",level:2}],p={toc:c};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction-to-event-storm"},"Introduction to Event Storm"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The Event storm is a tiny store implementation with pure javascript."),"\nEvent storm will help to organize and manage your application's state. The library is deigned to be framework and platform agnotics, which empowers an ability to use it, in ",(0,o.kt)("strong",{parentName:"p"},"any Javascript runtime"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"There is an official ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/event-storm/react-event-storm"},"React wrapper"))," of the Event storm.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To install the library run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm i event-storm\n\n# yarn\nyarn add event-storm\n")),(0,o.kt)("h2",{id:"what-is-the-library-focus"},"What is the library focus?"),(0,o.kt)("p",null,"The main focus areas of the library are"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"performance"),(0,o.kt)("li",{parentName:"ul"},"runtime optimizations"),(0,o.kt)("li",{parentName:"ul"},"simple API"),(0,o.kt)("li",{parentName:"ul"},"better development experience")),(0,o.kt)("h2",{id:"basic-concepts"},"Basic concepts"),(0,o.kt)("p",null,"The library consists of 2 parts: event store implementation and data model abstraction. The event store supports:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u2b50 dispatch/subscribe of models"),(0,o.kt)("li",{parentName:"ul"},"\u2b50 not propagates on duplicate changes(configurable)"),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udca5 middlewares support"),(0,o.kt)("li",{parentName:"ul"},"\u26a1 store persistence")),(0,o.kt)("p",null,"With the store you can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ud83d\udc8a get the last state of the store at any time"),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udc4a creating data on real information"),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udccc subscription to last event(even if it happens earlier)"),(0,o.kt)("li",{parentName:"ul"},"\ud83d\udd28 combine the existing information to derive(compute) some information")))}u.isMDXComponent=!0}}]);