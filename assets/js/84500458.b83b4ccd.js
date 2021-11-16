"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7667],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6699:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"how-detox-works",slug:"introduction/how-detox-works",title:"How Detox Works",sidebar_label:"How Detox Works"},l=void 0,c={unversionedId:"how-detox-works",id:"how-detox-works",isDocsHomePage:!1,title:"How Detox Works",description:"How Detox Works",source:"@site/../docs/Introduction.HowDetoxWorks.md",sourceDirName:".",slug:"/introduction/how-detox-works",permalink:"/Detox/docs/introduction/how-detox-works",editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/Introduction.HowDetoxWorks.md",tags:[],version:"current",frontMatter:{id:"how-detox-works",slug:"introduction/how-detox-works",title:"How Detox Works",sidebar_label:"How Detox Works"},sidebar:"tutorialSidebar",previous:{title:"Writing Your First Test",permalink:"/Detox/docs/introduction/writing-first-test"},next:{title:"Design Principles",permalink:"/Detox/docs/introduction/design-principles"}},u=[{value:"How Detox Works",id:"how-detox-works",children:[{value:"How Detox Automatically Synchronizes With Your App",id:"how-detox-automatically-synchronizes-with-your-app",children:[],level:3},{value:"Architecture",id:"architecture",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"how-detox-works"},"How Detox Works"),(0,i.kt)("p",null,"Detox is an end-to-end testing framework. This means it runs your app on an actual device/simulator and interacts with it just like a real user would. This type of testing can give a lot of confidence in your app and help automate a manual QA process."),(0,i.kt)("p",null,"When a Detox test executes, you actually have two different parts running side by side:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"The mobile app itself"),", usually running on a simulator/emulator. A regular native build of your app is installed and executed on the device. Your app is usually built once before the tests start running.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"The test suite"),", running on Node.js, using a test runner like Jest. The tests are normally written in JavaScript. Because the tests are asynchronous in nature (every test line requires to access the app and wait for a response), the tests rely heavily on ",(0,i.kt)("a",{parentName:"p",href:"https://ponyfoo.com/articles/understanding-javascript-async-await"},"async-await"),"."))),(0,i.kt)("p",null,"The two parts are usually running in separate processes on your machine. It is also possible to run the two parts on different machines. Communication between the two parts takes place over the network using a web socket."),(0,i.kt)("p",null,"In practice, to make the communication more resilient, both parts are implemented as clients and communicate with a Detox server that acts as proxy. This allows some nice behaviors like allowing one side to disconnect (during a simulator boot for example or app restart) without disconnecting the other side and losing its state."),(0,i.kt)("h3",{id:"how-detox-automatically-synchronizes-with-your-app"},"How Detox Automatically Synchronizes With Your App"),(0,i.kt)("p",null,"One of the key features of Detox is its ability to automatically synchronize the test execution with your app. The most annoying aspect of end-to-end tests is flakiness\u2014tests sometimes fail without anything changing. Flakiness happens because tests are nondeterministic. Every time a test is running, things take place in a slightly different order inside your app."),(0,i.kt)("p",null,"Consider a scenario where the app is making multiple network requests at the same time. What is the order of execution? It depends on which request completes first. This is an external concern depending on network congestion and how busy the server is."),(0,i.kt)("p",null,"The traditional method of dealing with flakiness is adding various ",(0,i.kt)("inlineCode",{parentName:"p"},"sleep()"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"waitFor()")," commands throughout the test in an attempt to force a certain execution order. This is a bad practice, riddled with fragile magic values that often change if the machine running the tests becomes faster or slower."),(0,i.kt)("p",null,"Detox tries to eliminate flakiness by automatically synchronizing your tests with the app. A test cannot continue to the next command until the app becomes idle. Detox monitors your app very closely in order to know when it's idle. It tracks several asynchronous operations and waits until they complete. This includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Keeping track of all network requests that are currently in-flight and waiting until they complete"),(0,i.kt)("li",{parentName:"ul"},"Keeping track of pending animations and waiting until they complete"),(0,i.kt)("li",{parentName:"ul"},"Keeping track of timers and waiting until they expire or are cancelled"),(0,i.kt)("li",{parentName:"ul"},"Keeping track of the React Native operations")),(0,i.kt)("h3",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"Detox is comprised of the following components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/wix/Detox/tree/master/detox/src"},(0,i.kt)("strong",{parentName:"a"},"Tester")),": The testing component, running in a Node.js process on the host computer, executing the test logic. The tester is also responsible for device management and artifact collection."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Detox native client (",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/wix/Detox/tree/master/detox/ios"},"iOS")," & ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/wix/Detox/tree/master/detox/android"},"Android"),"):")," A component that gets seamlessly integrated into the tested app on the tested device, right as Detox starts executing. It synchronizes with the app, matches user queries, executes user commands (e.g. taps, scrolls) and validates expectations."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/wix/Detox/tree/master/detox/src/server"},"Detox mediator server")),": A small web socket server, running in a Node.js process on the host computer, used to connect between the tester and the client. Normally, the tester starts a server on a randomized session id and an available port, and sends the session and port to the client app as a launch argument.")))}d.isMDXComponent=!0}}]);