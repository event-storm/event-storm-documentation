"use strict";(self.webpackChunkevent_storm_documentation=self.webpackChunkevent_storm_documentation||[]).push([[9765],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=u(r),d=i,b=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(b,s(s({ref:t},p),{},{components:r})):n.createElement(b,s({ref:t},p))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2656:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const o={id:"usepublish",title:"usePublish",description:"The publish hook, is simply re exporting of the storm.publish method. Arguments: storm (the storm object, for which the publish method will be provided)",tags:["react","Event Storm","usepublish","bindings"],sidebar_position:2},s=void 0,a={unversionedId:"bindings/react/api-reference/usepublish",id:"bindings/react/api-reference/usepublish",title:"usePublish",description:"The publish hook, is simply re exporting of the storm.publish method. Arguments: storm (the storm object, for which the publish method will be provided)",source:"@site/docs/bindings/react/api-reference/usePublish.md",sourceDirName:"bindings/react/api-reference",slug:"/bindings/react/api-reference/usepublish",permalink:"/docs/bindings/react/api-reference/usepublish",draft:!1,editUrl:"https://github.com/event-storm/tree/main/docs/bindings/react/api-reference/usePublish.md",tags:[{label:"react",permalink:"/docs/tags/react"},{label:"Event Storm",permalink:"/docs/tags/event-storm"},{label:"usepublish",permalink:"/docs/tags/usepublish"},{label:"bindings",permalink:"/docs/tags/bindings"}],version:"current",sidebarPosition:2,frontMatter:{id:"usepublish",title:"usePublish",description:"The publish hook, is simply re exporting of the storm.publish method. Arguments: storm (the storm object, for which the publish method will be provided)",tags:["react","Event Storm","usepublish","bindings"],sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"useStorm",permalink:"/docs/bindings/react/api-reference/usestorm"},next:{title:"useModels",permalink:"/docs/bindings/react/api-reference/usemodels"}},l={},u=[{value:"Arguments",id:"arguments",level:2},{value:"Returns",id:"returns",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The publish hook, is simply re exporting of the ",(0,i.kt)("inlineCode",{parentName:"p"},"storm.publish")," method."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createStore } from 'event-storm';\nimport { useStorm, usePublish } from 'react-event-storm';\n\nconst store = createStore({\n taxes: 20,\n grossSalary: 100_000,\n});\n\nfunction AnyComponent() {\n const { taxes } = useStorm(store);\n const publish = usePublish(store);\n\n return (\n   <div onClick={() => publish({ taxes: 30 })}>\n     {taxes}\n   </div>\n );\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function usePublish<T>(storm: IStorm<T>): IStorm<T>['publish'];\n")),(0,i.kt)("h2",{id:"arguments"},"Arguments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"storm - the ",(0,i.kt)("a",{parentName:"li",href:"/docs/api-reference/storm#istorm"},"storm object"),", for which the ",(0,i.kt)("inlineCode",{parentName:"li"},"publish")," method will be provided")),(0,i.kt)("h2",{id:"returns"},"Returns"),(0,i.kt)("p",null,"A function that will publish to the provided storm. Simple the ",(0,i.kt)("inlineCode",{parentName:"p"},"storm.publish")," method."))}c.isMDXComponent=!0}}]);