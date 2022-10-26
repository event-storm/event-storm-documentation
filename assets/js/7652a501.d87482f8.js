"use strict";(self.webpackChunkevent_storm_documentation=self.webpackChunkevent_storm_documentation||[]).push([[4327],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),s=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),c=n,h=u["".concat(d,".").concat(c)]||u[c]||m[c]||l;return r?a.createElement(h,o(o({ref:t},p),{},{components:r})):a.createElement(h,o({ref:t},p))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2890:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const l={id:"virtualmodel",title:"Model with state derivation",description:"It is possible to derive the state of the model and compose abstraction on that derivation. The abstraction is called virtual model",tags:["api","model","virtual model","derived state","api-reference"],sidebar_position:4},o=void 0,i={unversionedId:"api-reference/virtualmodel",id:"api-reference/virtualmodel",title:"Model with state derivation",description:"It is possible to derive the state of the model and compose abstraction on that derivation. The abstraction is called virtual model",source:"@site/docs/api-reference/virtualModel.md",sourceDirName:"api-reference",slug:"/api-reference/virtualmodel",permalink:"/docs/api-reference/virtualmodel",draft:!1,editUrl:"https://github.com/event-storm/tree/main/docs/api-reference/virtualModel.md",tags:[{label:"api",permalink:"/docs/tags/api"},{label:"model",permalink:"/docs/tags/model"},{label:"virtual model",permalink:"/docs/tags/virtual-model"},{label:"derived state",permalink:"/docs/tags/derived-state"},{label:"api-reference",permalink:"/docs/tags/api-reference"}],version:"current",sidebarPosition:4,frontMatter:{id:"virtualmodel",title:"Model with state derivation",description:"It is possible to derive the state of the model and compose abstraction on that derivation. The abstraction is called virtual model",tags:["api","model","virtual model","derived state","api-reference"],sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Model",permalink:"/docs/api-reference/model"},next:{title:"Make the store persistant",permalink:"/docs/api-reference/persistency"}},d={},s=[{value:"createVirtualModel",id:"createvirtualmodel",level:2},{value:"VirtualModel internal structure",id:"virtualmodel-internal-structure",level:3},{value:"What does it mean to subscribe to a virtual model?",id:"what-does-it-mean-to-subscribe-to-a-virtual-model",level:3},{value:"Methods",id:"methods",level:3},{value:"IVirtualModelOptions(extends IModelOptions)",id:"ivirtualmodeloptionsextends-imodeloptions",level:3}],p={toc:s};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"It is possible to derive the state of the model and compose abstraction on that derivation. The abstraction is called virtual model.\nIn general the virtual model has the same interface as the model.\nThe only method which is different is: ",(0,n.kt)("strong",{parentName:"p"},"publish")," - ",(0,n.kt)("strong",{parentName:"p"},"This method call will do nothing"),". As the virtual model is not the real owner of the information you can't update that information."),(0,n.kt)("h2",{id:"createvirtualmodel"},"createVirtualModel"),(0,n.kt)("h3",{id:"virtualmodel-internal-structure"},"VirtualModel internal structure"),(0,n.kt)("p",null,"The internal structure of the virtual model is similar to the model's internal structure. See ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/model#model-internal-structure"},"this section")," for details."),(0,n.kt)("h3",{id:"what-does-it-mean-to-subscribe-to-a-virtual-model"},"What does it mean to subscribe to a virtual model?"),(0,n.kt)("p",null,"Subscription of virtual models is based on the provided configuration models subscription. Virtual model internally subscribes to those models. Whenever an update is received from those models the virtual model will try to figure out whether the changes are resulting in a duplicate result of a handler function or not. Behind the scenes, the virtual model will subscribe to the provided models, which will allow it to be updated on those models' changes. This part is similar to a model, which means you can avoid this check with the help of ",(0,n.kt)("inlineCode",{parentName:"p"},"fireDuplicates")," option. The default behavior of the ",(0,n.kt)("inlineCode",{parentName:"p"},"fireDuplicates")," is the same as the model's behavior."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createModel, createVirtualModel } from 'event-storm';\n// real models\nconst time = createModel(0);\nconst velocity = createModel(10);\n\n// virtual model\nconst road = createVirtualModel({\n  handler: () => time.getState() * velocity.getState(),\n  models: [time, velocity],\n});\n\nroad.subscribe(nextValue => {\n  console.log(nextValue); // 10\n});\n\ntime.dispatch(1);\n")),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"createVirtualModel"),(0,n.kt)("td",{parentName:"tr",align:null},"<","T>(options: ",(0,n.kt)("a",{parentName:"td",href:"#ivirtualmodeloptionsextends-imodeloptions"},"IVirtualModelOptions"),"<","T>): Omit","<",(0,n.kt)("a",{parentName:"td",href:"/docs/api-reference/model#imodel"},"IModel"),"<","T, ",(0,n.kt)("a",{parentName:"td",href:"#ivirtualmodeloptionsextends-imodeloptions"},"IVirtualModelOptions"),">, 'dispatch'>"),(0,n.kt)("td",{parentName:"tr",align:null},"Calling this method will return a ",(0,n.kt)("a",{parentName:"td",href:"/docs/api-reference/model#imodel"},"model"),". Note the returned ",(0,n.kt)("a",{parentName:"td",href:"/docs/api-reference/model#imodel"},"IModel")," ",(0,n.kt)("strong",{parentName:"td"},"has no dispatch method"))))),(0,n.kt)("h3",{id:"ivirtualmodeloptionsextends-imodeloptions"},"IVirtualModelOptions(extends ",(0,n.kt)("a",{parentName:"h3",href:"/docs/api-reference/model#imodeloptions"},"IModelOptions"),")"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"interface IVirtualModelOptions<T> extends IModelOptions {\n  handler: () => T;\n  models: IModel<any>[];\n}\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Method"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"handler"),(0,n.kt)("td",{parentName:"tr",align:null},"() => T"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,n.kt)("td",{parentName:"tr",align:null},"Manipulate with models inside this method. The return value for this method will be the virtual model's state")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Properties"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"models"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"/docs/api-reference/model#imodel"},"IModel"),"<","any>[];"),(0,n.kt)("td",{parentName:"tr",align:null},"\u274e"),(0,n.kt)("td",{parentName:"tr",align:null},"The provided models will be the ones that virtual model will rely on. The provided model's update will trigger the handler function to rerun. After rerun, depending on the model options, the result will or will not propagate to all subscribers.")))))}m.isMDXComponent=!0}}]);