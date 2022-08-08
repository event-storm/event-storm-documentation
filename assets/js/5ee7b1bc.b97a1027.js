"use strict";(self.webpackChunkevent_storm_documentation=self.webpackChunkevent_storm_documentation||[]).push([[9810],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,g=p["".concat(c,".").concat(d)]||p[d]||u[d]||a;return n?o.createElement(g,i(i({ref:t},m),{},{components:n})):o.createElement(g,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={id:"glossary",title:"The terminology",tags:["terminology","glossary","structure"],sidebar_position:1},i=void 0,s={unversionedId:"concepts/glossary",id:"concepts/glossary",title:"The terminology",description:"The Event Storm is based on event sourcing technology. To organize such a system you need to define what is the information that needs to be considered as a source.",source:"@site/docs/concepts/glossary.md",sourceDirName:"concepts",slug:"/concepts/glossary",permalink:"/event-storm-documentation/docs/concepts/glossary",draft:!1,editUrl:"https://github.com/event-storm/event-storm-documentation/tree/main/concepts/glossary.md",tags:[{label:"terminology",permalink:"/event-storm-documentation/docs/tags/terminology"},{label:"glossary",permalink:"/event-storm-documentation/docs/tags/glossary"},{label:"structure",permalink:"/event-storm-documentation/docs/tags/structure"}],version:"current",sidebarPosition:1,frontMatter:{id:"glossary",title:"The terminology",tags:["terminology","glossary","structure"],sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Main concepts",permalink:"/event-storm-documentation/docs/category/main-concepts"},next:{title:"The bigger picture",permalink:"/event-storm-documentation/docs/concepts/overview"}},c={},l=[{value:"Model",id:"model",level:3},{value:"VirtualModel",id:"virtualmodel",level:3}],m={toc:l};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Event Storm is based on event sourcing technology. To organize such a system you need to define what is the information that needs to be considered as a source. "),(0,r.kt)("p",null,"Information specifications:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Can be updated during the time"),(0,r.kt)("li",{parentName:"ul"},"You can subscribe to the changes of that information updates"),(0,r.kt)("li",{parentName:"ul"},"Can be combined with other information to construct a bigger information segment. The last means that you can derive the information's current state(state here basically means the value of the information).")),(0,r.kt)("p",null,"To manage the changes and subscriptions of the models, Event Storm library implements a pubsub technology."),(0,r.kt)("h3",{id:"model"},"Model"),(0,r.kt)("p",null,"To fit the above requirements, the Event Storm library has defined a programming interface for that information. This interface is called a ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/docs/api-reference/model"},"model")),"."),(0,r.kt)("h3",{id:"virtualmodel"},"VirtualModel"),(0,r.kt)("p",null,"As mentioned in the main section, models can be combined to construct bigger information segments. To keep the developer experience the same and manage models composition the Event Storm library is providing ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/virtualModel"},"createVirtualModel")," function.\nWhy do you need to combine the existing models? The principle of single source of truth and event sourcing in general you need to keep the information source and its management in a single place(memory segment). The ",(0,r.kt)("strong",{parentName:"p"},"virtual model")," is using existing information to create something on top of that, in other words, derive the existing information."))}u.isMDXComponent=!0}}]);