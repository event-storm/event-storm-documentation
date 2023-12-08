"use strict";(self.webpackChunkevent_storm_documentation=self.webpackChunkevent_storm_documentation||[]).push([[1435],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=i,h=m["".concat(l,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),i=n(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),i=n(7294),r=n(6010),o=n(2389),s=n(7392),l=n(7094),c=n(2466);const u="tabList__CuJ",p="tabItem_LNqP";function m(e){var t,n;const{lazy:o,block:m,defaultValue:d,values:h,groupId:b,className:f}=e,g=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,s.l)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===d?d:null!=(t=null!=d?d:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,l.U)(),[T,S]=(0,i.useState)(y),I=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=b){const e=w[b];null!=e&&e!==T&&v.some((t=>t.value===e))&&S(e)}const O=e=>{const t=e.currentTarget,n=I.indexOf(t),a=v[n].value;a!==T&&(E(t),S(a),null!=b&&N(b,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=I.indexOf(e.currentTarget)+1;n=null!=(a=I[t])?a:I[0];break}case"ArrowLeft":{var i;const t=I.indexOf(e.currentTarget)-1;n=null!=(i=I[t])?i:I[I.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",u)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":m},f)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>I.push(e),onKeyDown:x,onFocus:O,onClick:O},o,{className:(0,r.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,i.cloneElement)(g.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function d(e){const t=(0,o.Z)();return i.createElement(m,(0,a.Z)({key:String(t)},e))}},8162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(7462),i=(n(7294),n(3905)),r=n(5488),o=n(5162);const s={id:"api",title:"How the API is designed?",description:"The API of the library entities is designed to be consistent in provided entities, provide useful subscription types and configurations, require minimal changes when migrating from other libraries",tags:["concepts","api"],sidebar_position:6},l=void 0,c={unversionedId:"concepts/api",id:"concepts/api",title:"How the API is designed?",description:"The API of the library entities is designed to be consistent in provided entities, provide useful subscription types and configurations, require minimal changes when migrating from other libraries",source:"@site/docs/concepts/api.mdx",sourceDirName:"concepts",slug:"/concepts/api",permalink:"/event-storm-documentation/docs/concepts/api",draft:!1,editUrl:"https://github.com/event-storm/tree/main/docs/concepts/api.mdx",tags:[{label:"concepts",permalink:"/event-storm-documentation/docs/tags/concepts"},{label:"api",permalink:"/event-storm-documentation/docs/tags/api"}],version:"current",sidebarPosition:6,frontMatter:{id:"api",title:"How the API is designed?",description:"The API of the library entities is designed to be consistent in provided entities, provide useful subscription types and configurations, require minimal changes when migrating from other libraries",tags:["concepts","api"],sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Performance impact",permalink:"/event-storm-documentation/docs/concepts/performance"},next:{title:"FAQ",permalink:"/event-storm-documentation/docs/faq"}},u={},p=[{value:"Model",id:"model",level:2},{value:"Subscribing to a model",id:"subscribing-to-a-model",level:3},{value:"Updating the model",id:"updating-the-model",level:3},{value:"VirtualModel",id:"virtualmodel",level:2},{value:"Subcribing to virtual model",id:"subcribing-to-virtual-model",level:3},{value:"Updating the virtual model",id:"updating-the-virtual-model",level:3},{value:"Storm",id:"storm",level:2},{value:"Subscribing to the storm",id:"subscribing-to-the-storm",level:3},{value:"Updating the storm",id:"updating-the-storm",level:3},{value:"What else?",id:"what-else",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The API of the library entities is designed to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"be consistent in provided entities"),(0,i.kt)("li",{parentName:"ul"},"provide useful subscription types and configurations "),(0,i.kt)("li",{parentName:"ul"},"require minimal changes when migrating from other libraries")),(0,i.kt)("h2",{id:"model"},"Model"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createModel } from 'event-storm';\n\nconst model1 = createModel();\n// When defining a model it is often usefull to have a default value\nconst model2 = createModel({});\n")),(0,i.kt)("p",null,"In the above example you can notice 2 different ways to instantiate a model - with and without a ",(0,i.kt)("strong",{parentName:"p"},"default state"),". The model can receive and hold any type of information, meand any data type."),(0,i.kt)("admonition",{title:"About model type",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"There is not restriction on changing the model data types during the runtime. Dispatching a new value can be with a different type. However, it is not recommended to change the model type after instantiation, due to performance reasons.")),(0,i.kt)("h3",{id:"subscribing-to-a-model"},"Subscribing to a model"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import import { createModel } from 'event-storm';\n\nconst model = createModel<string>('initial');\n\nmodel.subscribe(value => {\n  console.log(value);\n});\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Subscription")," is the main feature of the model. In the example with subcription, the provided function will not be called until some ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch")," happens. It is possible to configure this behaviour and make the subscription fire immediately:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"model.subscribe(value => {\n  console.log(value); // 'initial'\n}, { needPrevious: true });\n")),(0,i.kt)("h3",{id:"updating-the-model"},"Updating the model"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createModel } from 'event-storm';\n\nconst model = createModel<string>('initial');\n\nmodel.subscribe(value => {\n  console.log(value); // 'final'\n});\n\nmodel.dispatch('final');\n")),(0,i.kt)("p",null,"To update the model you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch")," method. The given value will make the subscribers be called with that value. By default, the model will not fire duplicated changes. Why? Assuming that the code using a model will be a pure functional, the Event Storm library is preventing duplicated changes to avoid useless compuations. Still, in real life applications it can be that duplicated changes are necassary, or the dispatched value is the event, which must be properly handled. If that's the case, you can use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"model.dispatch('final', { fireDuplicates: true });\n")),(0,i.kt)("p",null,"This will make model to skip checks and run the subscribers anyway."),(0,i.kt)("h2",{id:"virtualmodel"},"VirtualModel"),(0,i.kt)("p",null,"It is recommended to keep raw information(source of truth) inside models. In that case a question are rising: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"How to process the function? "),(0,i.kt)("li",{parentName:"ul"},"Do I need to subscribe and process the information inside the subscription callback? "),(0,i.kt)("li",{parentName:"ul"},"And finally what if the same processing is required in multiple places?")),(0,i.kt)("p",null,"The Event Storm library is providing a ",(0,i.kt)("strong",{parentName:"p"},"virtualModel")," concept to solve all those issues."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"models/rectSizes.ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createModel } from 'event-storm';\n\ninterface IRect {\n  width: number;\n  height: number;\n}\n\nconst rectSizes = createModel<IRect>({ width: 100, height: 100 });\n\nexport default rectSizes;\n"))),(0,i.kt)(o.Z,{value:"models/rectSquare.ts",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import rectSizes from './rectSizes';\n\nconst rectSquare = createVirtualModel<number>({\n  handler: ({ width, height }) => width * height,\n  models: [rectSizes],\n});\n\nrectSquare.subscribe(value => {\n  console.log(value);\n});\n")))),(0,i.kt)("p",null,"As you can see in the example, ",(0,i.kt)("strong",{parentName:"p"},"createVirtualModel")," receives the ",(0,i.kt)("inlineCode",{parentName:"p"},"handler")," function and ",(0,i.kt)("inlineCode",{parentName:"p"},"models"),". Each time the one of the provided models is being updated the ",(0,i.kt)("inlineCode",{parentName:"p"},"handler")," function will be executed."),(0,i.kt)("admonition",{title:"models order matter",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The handler function will receive the same order of model's state as provided in the models array.")),(0,i.kt)("h3",{id:"subcribing-to-virtual-model"},"Subcribing to virtual model"),(0,i.kt)("p",null,"It is possible to subscribe to virtual model. Model change will recompute the data processing and call all the subscribers. The virtual model as the model itself has the same ",(0,i.kt)("a",{parentName:"p",href:"#subscribing-to-a-model"},"subscription configuration"),"."),(0,i.kt)("h3",{id:"updating-the-virtual-model"},"Updating the virtual model"),(0,i.kt)("admonition",{title:"Virtual model can't be published",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The virtual model is just a derived state. The virtual model is representing the infromation processing, not the infromation itself. This means the virtual model can't change during the time.")),(0,i.kt)("h2",{id:"storm"},"Storm"),(0,i.kt)("p",null,"In more complex situations it is important to describe different entities infromation state at once. It is also worth nothing to say, that it is reducing the time spent on generating that much code for each infromation entity. The Event Storm library is providing ",(0,i.kt)("inlineCode",{parentName:"p"},"storm")," abstraction for this purposed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createStorm } from 'event-storm';\n\nconst storm = createStorm({\n  firstname: 'Bob',\n  lastname: 'Smith',\n});\n\nstorm.subscribe((state, subscribe) => {\n  const firstname = subscribe(state.firstname);\n  // additional handling\n});\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"createStorm")," is similiar to ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"#model"},"createModel")),". It is not possible to preserve default state for ",(0,i.kt)("strong",{parentName:"p"},"storm"),". This is the only difference between ",(0,i.kt)("strong",{parentName:"p"},"model")," and ",(0,i.kt)("strong",{parentName:"p"},"storm")," when creating them."),(0,i.kt)("h3",{id:"subscribing-to-the-storm"},"Subscribing to the storm"),(0,i.kt)("p",null,"The storm main feature is providing individual, decentralized subscriptions, while the storm itself is centralized at creation. What does this mean? It means it is possible to susbcribe to storm some fragment, and consume only that data updates. Storm other part's updates will not trigger subscription run. The below example will show how to subscribe to single fragment of the storm."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createStorm } from 'event-storm';\n\nconst storm = createStorm({\n  firstname: 'Bob',\n  lastname: 'Smith',\n  age: 17\n});\n\nstorm.subscribe((state, subscribe) => {\n  const firstname = subscribe(state.firstname);\n  const lastname = subscribe(state.lastname);\n\n  // ...\n});\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"subcribe")," method receive the ",(0,i.kt)("strong",{parentName:"p"},"storm")," actual state and ",(0,i.kt)("strong",{parentName:"p"},"subscribe")," function. The provided second function can receive any peace of storm state, subscribe to that peace and return the actual value of that peace. There is no limit how many time to use the ",(0,i.kt)("strong",{parentName:"p"},"subscribe")," argument. You can call it as many times as you need. Each call will instantiate a new subscription."),(0,i.kt)("admonition",{title:"Subscription argument",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"There is no certain limitation to call the ",(0,i.kt)("strong",{parentName:"p"},"subcribe")," argument on the same storm segment mutliple times. It will not result in having more than one subscription for that segment anyway.")),(0,i.kt)("h3",{id:"updating-the-storm"},"Updating the storm"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"storm")," update is similiar to ",(0,i.kt)("a",{parentName:"p",href:"#model"},"model")," update functionality. Here also, there is the ",(0,i.kt)("inlineCode",{parentName:"p"},"dispatch")," method. When calling dispatch with some value, it will make the appropriate updates on the storm and make the subcribers fire. During the calculation of update, storm determines which tree nodes are matter for update, which not. After tree traversal, only the changed nodes and their subscribers will be notified on that dispatch."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createStorm } from 'event-storm';\n\nconst storm = createStorm({\n  firstname: 'Bob',\n  lastname: 'Smith',\n  age: 17\n});\n\nstorm.dispatch({ age: 20 });\n")),(0,i.kt)("p",null,"The storm also, by default will not fire the subscribers for duplicated change. You can provide the second argument to override the default behaviour."),(0,i.kt)("admonition",{title:"About duplicated changes",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Even thought you can provide ",(0,i.kt)("strong",{parentName:"p"},"fireDuplicates")," to storm dispatch, it will only fire that change on the subcribed nodes. You can't use this configuration as whole storm force update.")),(0,i.kt)("h2",{id:"what-else"},"What else?"),(0,i.kt)("p",null,"All the described ",(0,i.kt)("strong",{parentName:"p"},"dispatch")," functions(for ",(0,i.kt)("a",{parentName:"p",href:"#updating-the-storm"},"storm")," and ",(0,i.kt)("a",{parentName:"p",href:"#updating-the-model"},"model"),") can also be called with functional approach."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import import { createModel } from 'event-storm';\n\nconst isActive = createModel<boolean>(true);\n\nisActive.dispatch(prev => !prev);\n")),(0,i.kt)("p",null,"For more details see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/overview"},"API section"),"."))}d.isMDXComponent=!0}}]);