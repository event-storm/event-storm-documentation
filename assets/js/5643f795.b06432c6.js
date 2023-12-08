"use strict";(self.webpackChunkevent_storm_documentation=self.webpackChunkevent_storm_documentation||[]).push([[9249],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9411:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={id:"persistency",title:"Make the store persistant",description:"You can easily make your store's any segment to be persisted by using the respective function.",tags:["api","store","api-reference","persistant store"],sidebar_position:5},s=void 0,i={unversionedId:"api-reference/persistency",id:"api-reference/persistency",title:"Make the store persistant",description:"You can easily make your store's any segment to be persisted by using the respective function.",source:"@site/docs/api-reference/persistency.md",sourceDirName:"api-reference",slug:"/api-reference/persistency",permalink:"/event-storm-documentation/docs/api-reference/persistency",draft:!1,editUrl:"https://github.com/event-storm/tree/main/docs/api-reference/persistency.md",tags:[{label:"api",permalink:"/event-storm-documentation/docs/tags/api"},{label:"store",permalink:"/event-storm-documentation/docs/tags/store"},{label:"api-reference",permalink:"/event-storm-documentation/docs/tags/api-reference"},{label:"persistant store",permalink:"/event-storm-documentation/docs/tags/persistant-store"}],version:"current",sidebarPosition:5,frontMatter:{id:"persistency",title:"Make the store persistant",description:"You can easily make your store's any segment to be persisted by using the respective function.",tags:["api","store","api-reference","persistant store"],sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Model with state derivation",permalink:"/event-storm-documentation/docs/api-reference/virtualmodel"},next:{title:"Supported bindings",permalink:"/event-storm-documentation/docs/bindings/overview"}},l={},p=[{value:"persisted",id:"persisted",level:2},{value:"IPersistOptions",id:"ipersistoptions",level:3},{value:"Methods",id:"methods",level:3},{value:"Properties",id:"properties",level:3}],c={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can easily make your store's any segment to be persisted by ",(0,a.kt)("inlineCode",{parentName:"p"},"persisted")," function."),(0,a.kt)("h2",{id:"persisted"},"persisted"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createStorm, persisted } from 'event-storm';\n\nconst createPersistedStore = persisted(createStorm)({\n  storageKey: 'some_store_key',\n  beforeunload: state => ({\n    users: state.users,\n  }),\n});\n\nconst defaultState = {\n  users: [],\n  age: 15,\n  loading: false,\n};\n\nconst store = createPersistedStore(defaultState);\n")),(0,a.kt)("h3",{id:"ipersistoptions"},"IPersistOptions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"interface IPersistOptions<T> {\n  storageKey: string;\n  beforeunload: (storm: IStormState<T>) => Partial<IStormState<T>>;\n  permanent?: boolean,\n}\n")),(0,a.kt)("h3",{id:"methods"},"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Method"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"beforeunload"),(0,a.kt)("td",{parentName:"tr",align:null},"(storm: ",(0,a.kt)("a",{parentName:"td",href:"/event-storm-documentation/docs/api-reference/storm"},"IStormState"),"<","T>) => Partial","<",(0,a.kt)("a",{parentName:"td",href:"/event-storm-documentation/docs/api-reference/storm"},"IStormState"),"<","T>>"),(0,a.kt)("td",{parentName:"tr",align:null},"method is called right before the browser unload event. It will receive the current storm state as an argument. It can return any storm fragment as a return value. The return value will be persisted.")))),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"storageKey"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies where to keep the persisted data in the storage")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"permanent"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274e"),(0,a.kt)("td",{parentName:"tr",align:null},"By default the ",(0,a.kt)("inlineCode",{parentName:"td"},"sessionStorage")," is used to store the persisted data. To change the storage to ",(0,a.kt)("inlineCode",{parentName:"td"},"localStorage")," you can set the ",(0,a.kt)("inlineCode",{parentName:"td"},"permanent")," property to ",(0,a.kt)("inlineCode",{parentName:"td"},"true"),":")))))}d.isMDXComponent=!0}}]);