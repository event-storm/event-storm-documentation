"use strict";(self.webpackChunkevent_storm_documentation=self.webpackChunkevent_storm_documentation||[]).push([[927],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=i,v=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1603:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={id:"overview",title:"Overview",description:"The React Event Storm is providing a lightweight, minimal abstraction for the Event Storm library",tags:["react","Event Storm","bindings"],sidebar_position:1},o=void 0,l={unversionedId:"bindings/react/overview",id:"bindings/react/overview",title:"Overview",description:"The React Event Storm is providing a lightweight, minimal abstraction for the Event Storm library",source:"@site/docs/bindings/react/introduction.md",sourceDirName:"bindings/react",slug:"/bindings/react/overview",permalink:"/event-storm-documentation/docs/bindings/react/overview",draft:!1,editUrl:"https://github.com/event-storm/tree/main/docs/bindings/react/introduction.md",tags:[{label:"react",permalink:"/event-storm-documentation/docs/tags/react"},{label:"Event Storm",permalink:"/event-storm-documentation/docs/tags/event-storm"},{label:"bindings",permalink:"/event-storm-documentation/docs/tags/bindings"}],version:"current",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",description:"The React Event Storm is providing a lightweight, minimal abstraction for the Event Storm library",tags:["react","Event Storm","bindings"],sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Supported bindings",permalink:"/event-storm-documentation/docs/bindings/overview"},next:{title:"Subscription types",permalink:"/event-storm-documentation/docs/bindings/react/subscription"}},c={},s=[{value:"Technical stack",id:"technical-stack",level:2},{value:"Installation",id:"installation",level:2},{value:"Simple example",id:"simple-example",level:3},{value:"See it in action",id:"see-it-in-action",level:3}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The React Event Storm is providing a lightweight, minimal abstraction for the ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction"},"Event Storm")," library."),(0,i.kt)("h2",{id:"technical-stack"},"Technical stack"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"React ^16.8.0(hooks support)")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"To install the library run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm i react-event-storm\n\n# yarn\nyarn add react-event-storm\n")),(0,i.kt)("admonition",{title:"Required dependency",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The library is using Event Storm as a peer dependency, so you need to ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction#installation"},"install it"),".")),(0,i.kt)("h3",{id:"simple-example"},"Simple example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createStorm } from 'event-storm';\nimport { useStorm } from 'react-event-storm';\n\nconst defaultState = {\n  name: 'React Event Storm',\n}\n\nconst storm = createStorm(defaultState);\n\nfunction Component() {\n  const { name } = useStorm(storm);\n  return <span>This is {name}</span>\n}\n")),(0,i.kt)("h3",{id:"see-it-in-action"},"See it in action"),(0,i.kt)("p",null,"Examples:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/beautiful-currying-bl9dv"},(0,i.kt)("strong",{parentName:"a"},"Typescript"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://codesandbox.io/s/intelligent-http-iupz5"},(0,i.kt)("strong",{parentName:"a"},"React")))))}m.isMDXComponent=!0}}]);