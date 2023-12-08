"use strict";(self.webpackChunkevent_storm_documentation=self.webpackChunkevent_storm_documentation||[]).push([[4128],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),c=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),u=c(n),d=o,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,i(i({ref:e},p),{},{components:n})):r.createElement(h,i({ref:e},p))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8495:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={id:"introduction",title:"Introduction to Event Storm",description:"Event Storm helps to organize and manage your application's state. The library is designed to be framework and platform agnostics.",tags:["intro","introduction"],sidebar_position:1},i=void 0,s={unversionedId:"introduction",id:"introduction",title:"Introduction to Event Storm",description:"Event Storm helps to organize and manage your application's state. The library is designed to be framework and platform agnostics.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/event-storm-documentation/docs/introduction",draft:!1,editUrl:"https://github.com/event-storm/tree/main/docs/introduction.md",tags:[{label:"intro",permalink:"/event-storm-documentation/docs/tags/intro"},{label:"introduction",permalink:"/event-storm-documentation/docs/tags/introduction"}],version:"current",sidebarPosition:1,frontMatter:{id:"introduction",title:"Introduction to Event Storm",description:"Event Storm helps to organize and manage your application's state. The library is designed to be framework and platform agnostics.",tags:["intro","introduction"],sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Motivation",permalink:"/event-storm-documentation/docs/motivation"}},l={},c=[{value:"When to use Event Storm?",id:"when-to-use-event-storm",level:3},{value:"Installation",id:"installation",level:2},{value:"Simple example",id:"simple-example",level:3},{value:"See it in action",id:"see-it-in-action",level:3},{value:"How the documentation is structured?",id:"how-the-documentation-is-structured",level:2}],p={toc:c};function m(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The Event Storm is a tiny store implementation with pure javascript."),"\nEvent Storm will help to organize and manage your application's state. The library is designed to be framework and platform agnostics, which empowers an ability to use it, in ",(0,o.kt)("strong",{parentName:"p"},"any Javascript runtime"),"."),(0,o.kt)("admonition",{title:"Reactjs binding",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"There is an official ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/event-storm/react-event-storm"},"React wrapper"))," of the Event Storm.")),(0,o.kt)("h3",{id:"when-to-use-event-storm"},"When to use Event Storm?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Large scale application with a lot of data consumers(1K+)"),(0,o.kt)("li",{parentName:"ul"},"The application is doing a lot of CPU intensive computations"),(0,o.kt)("li",{parentName:"ul"},"The bundle size limited applications(library size 2kb)"),(0,o.kt)("li",{parentName:"ul"},"Microservice applications(no matter using the same technology for microservices or not)")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"To install the library run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm i event-storm\n\n# yarn\nyarn add event-storm\n")),(0,o.kt)("h3",{id:"simple-example"},"Simple example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createStorm } from 'event-storm';\n\nconst defaultState = {\n  name: 'Event Storm',\n  isActive: false,\n}\n\nconst storm = createStorm(defaultState);\n\n// subscribing to listen all the changes\nstorm.subscribe((state, access) => console.log(access(storm)));\n\n// subscribing to listen only partial changes\nstorm.subscribe((state, access) => console.log(access(storm.name)));\n\n// update the state\nstorm.dispatch({ name: 'Event Storm - manage your state effectively' });\n\n// use previous state to make the updates\nstorm.dispatch(prev => ({ isActive: !prev.isActive }));\n")),(0,o.kt)("h3",{id:"see-it-in-action"},"See it in action"),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/beautiful-currying-bl9dv"},(0,o.kt)("strong",{parentName:"a"},"Typescript"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/intelligent-http-iupz5"},(0,o.kt)("strong",{parentName:"a"},"React")))),(0,o.kt)("h2",{id:"how-the-documentation-is-structured"},"How the documentation is structured?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/motivation"},"The motiviation")," - For better understanding the ",(0,o.kt)("strong",{parentName:"li"},"what"),"'s and ",(0,o.kt)("strong",{parentName:"li"},"why"),"'s you can start with the motivation."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/concepts/overview"},"Core concepts")," - To better understand the ideology of the Event Storm, the data abstraction and how the library is organized read the core concepts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/faq#howtoorganizethedirectorystructure"},"How to structure code")," - To have more organized and minimalistic structure, we recommend some hints and tips"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/bindings/overview"},"Official bindings")," - Find the official packages for to integrate the Event Storm with your UI solution"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/overview"},"API reference"))))}m.isMDXComponent=!0}}]);