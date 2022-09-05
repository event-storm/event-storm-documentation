"use strict";(self.webpackChunkevent_storm_documentation=self.webpackChunkevent_storm_documentation||[]).push([[1783],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(c,".").concat(b)]||d[b]||u[b]||s;return n?i.createElement(m,o(o({ref:t},l),{},{components:n})):i.createElement(m,o({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,o[1]=a;for(var p=2;p<s;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3430:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const s={id:"subscription",title:"Subscription types",description:"The Event Storm is presenting 3 levels of subscription: active subscription, passive subscription, condition-based subscription",tags:["react","bindings","Event Storm","subscription types","active subscription","passive subscription"],sidebar_position:2},o=void 0,a={unversionedId:"bindings/react/subscription",id:"bindings/react/subscription",title:"Subscription types",description:"The Event Storm is presenting 3 levels of subscription: active subscription, passive subscription, condition-based subscription",source:"@site/docs/bindings/react/subcription.md",sourceDirName:"bindings/react",slug:"/bindings/react/subscription",permalink:"/docs/bindings/react/subscription",draft:!1,editUrl:"https://github.com/event-storm/tree/main/docs/bindings/react/subcription.md",tags:[{label:"react",permalink:"/docs/tags/react"},{label:"bindings",permalink:"/docs/tags/bindings"},{label:"Event Storm",permalink:"/docs/tags/event-storm"},{label:"subscription types",permalink:"/docs/tags/subscription-types"},{label:"active subscription",permalink:"/docs/tags/active-subscription"},{label:"passive subscription",permalink:"/docs/tags/passive-subscription"}],version:"current",sidebarPosition:2,frontMatter:{id:"subscription",title:"Subscription types",description:"The Event Storm is presenting 3 levels of subscription: active subscription, passive subscription, condition-based subscription",tags:["react","bindings","Event Storm","subscription types","active subscription","passive subscription"],sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/bindings/react/overview"},next:{title:"useStorm",permalink:"/docs/bindings/react/api-reference/usestorm"}},c={},p=[{value:"The background problem",id:"the-background-problem",level:2},{value:"Active Subscription",id:"active-subscription",level:4},{value:"Passive subscription",id:"passive-subscription",level:4},{value:"Condition-based subscription",id:"condition-based-subscription",level:4}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"event-storm")," is presenting 3 levels of subscription:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Active subscription"),(0,r.kt)("li",{parentName:"ul"},"Passive subscription"),(0,r.kt)("li",{parentName:"ul"},"Condition-based subscription")),(0,r.kt)("h2",{id:"the-background-problem"},"The background problem"),(0,r.kt)("p",null,"Imagine a react application. You have a component and it is subscribed to store. It is using ",(0,r.kt)("inlineCode",{parentName:"p"},"sizes")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"cards")," properties.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"cards")," are used to render a list. Let's imagine you want to save in backend the provided ",(0,r.kt)("inlineCode",{parentName:"p"},"sizes")," for clicked ",(0,r.kt)("inlineCode",{parentName:"p"},"card"),". So, the ",(0,r.kt)("inlineCode",{parentName:"p"},"sizes")," information is used whenever you are clicking on a particular ",(0,r.kt)("inlineCode",{parentName:"p"},"card"),". In most store managers(e.g. Overmind, Redux) your component will be updated on ",(0,r.kt)("inlineCode",{parentName:"p"},"sizes")," change even if the user will never click on the list."),(0,r.kt)("p",null,"To avoid unnecassary renders, you'll need to directly access the store in your ",(0,r.kt)("inlineCode",{parentName:"p"},"card"),'\'s click event handler. Which is most probably not the solution you\'re looking for. With the workarround you\'ll get store usage in a "react-way" as usual, also in a "none react-way"(accessing the store diretly, not via ',(0,r.kt)("inlineCode",{parentName:"p"},"useStore")," or some other hook). Also, worth nothing that you'll have components where you need more than one handler. So you'll need to duplicate the code that accesses the store."),(0,r.kt)("h4",{id:"active-subscription"},"Active Subscription"),(0,r.kt)("p",null,"This is a regular subscription. Whenever you are using any key from the store like in the example below, you'll receive any update on that keys."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { cards, sizes } = useStore();\n")),(0,r.kt)("p",null,"This is the same as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { cards, sizes } = useStore({ active: true });\n")),(0,r.kt)("h4",{id:"passive-subscription"},"Passive subscription"),(0,r.kt)("p",null,"This option allows you to access any store key without getting you component rerendered on the particular keys' updates. ",(0,r.kt)("strong",{parentName:"p"},"It is guaranteed that whenever you'll use the store values they'll be up to date(fresh values)"),"."),(0,r.kt)("admonition",{title:"Syntax is chaning",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Please pay attention on the ",(0,r.kt)("inlineCode",{parentName:"p"},"current")," object. Never destruct the current when using primitives. The updates with primitives will not work.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const result = useStore({ active: false });\nconsole.log(result.current); // { cards: 'anyvalue', sizes: anyvalue }\n")),(0,r.kt)("h4",{id:"condition-based-subscription"},"Condition-based subscription"),(0,r.kt)("p",null,"What is a condition-based subscription? The updates on the keys will not update the component until the provided condition will be truthy.\nWhenever ",(0,r.kt)("inlineCode",{parentName:"p"},"active")," option can becomes ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," during runtime, the subcription becomes active. This means, starting from that point, your component\nwill be rerendered on the key's updates. ",(0,r.kt)("strong",{parentName:"p"},"With this feature, you are controlling your subscription.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const [counter, setCounter] = useState(0);\nconst condition = counter > 4;\nconst { cards, sizes } = useStore({ active: condition });\n\nif (condition) {\n  console.log(cards, sizes);\n  // other stuff related to 'cards' or 'sizes'\n}\n")),(0,r.kt)("p",null,"You can change the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"active")," option from ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," or vise versa. Whenever it'll be ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," your component will not be updated for the used keys' changes."))}u.isMDXComponent=!0}}]);