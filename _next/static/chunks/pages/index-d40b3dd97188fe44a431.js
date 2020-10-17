_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[10],{FGSz:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n("cxan"),o=n("HbGN"),a=n("ERkP"),c=n.n(a),i=n("ZVZ0"),l=(n("jvFD"),c.a.createElement,{}),u="wrapper";function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.mdx)(u,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("h1",null,"Getting started"),Object(i.mdx)("p",null,"This is a app to make easily the document write and read for the other users."),Object(i.mdx)("h2",null,"Install"),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Using yarn:")),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"yarn add static-doc\n")),Object(i.mdx)("p",null,Object(i.mdx)("strong",{parentName:"p"},"Using npm:")),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"npm install static-doc\n")),Object(i.mdx)("h2",null,"Configure scripts (optional)"),Object(i.mdx)("p",null,"Insert these commands into your ",Object(i.mdx)("inlineCode",{parentName:"p"},"package.json"),":"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"scripts": {\n  "docs:dev": "static-doc dev",\n  "docs:build": "static-doc build",\n  "docs:serve": "static-doc build && static-doc start"\n}\n')),Object(i.mdx)("p",null,"By default your documents should be in the doc folder at the root of the project, but this can be changed by passing a directory as an argument. Example: ",Object(i.mdx)("inlineCode",{parentName:"p"},"static-doc dev ./my-docs")),Object(i.mdx)("h2",null,"Docs directory"),Object(i.mdx)("p",null,"Here will be the .mdx and .md files that will be interpreted will generate the pages. See an example file:"),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"---\ntitle: Hello world\nname: My first doc\n---\n# Hello world\n\nThis is an example file!\n")),Object(i.mdx)("p",null,"What is between the dashes are page properties, ",Object(i.mdx)("a",Object(r.a)({parentName:"p"},{href:"/page-properties"}),"see more here"),"."),Object(i.mdx)("h2",null,"Configuration"),Object(i.mdx)("p",null,"You may need to change the logo, write the name of the app and/or change the order of the menu. To do this, create a ",Object(i.mdx)("inlineCode",{parentName:"p"},".config")," file inside your ",Object(i.mdx)("inlineCode",{parentName:"p"},"docs directory"),"."),Object(i.mdx)("pre",null,Object(i.mdx)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "\u26a1 Static Docs",\n  "menu": [\n    "index.mdx",\n    {\n      "name": "Github",\n      "icon": {\n        "dark": "assets/github-icon-dark.svg",\n        "light": "assets/github-icon-light.svg"\n      },\n      "to": "https://github.com/Maycon-Santos/static-doc"\n    }\n  ]\n}\n')),Object(i.mdx)("p",null,Object(i.mdx)("a",Object(r.a)({parentName:"p"},{href:"/configuration"}),"Click here")," to learn more about ",Object(i.mdx)("inlineCode",{parentName:"p"},".config"),"."))}s.isMDXComponent=!0},HbGN:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},KeDb:function(e,t,n){"use strict";var r=n("x3oR"),o=n("pONU");t.__esModule=!0,t.default=void 0;var a,c=o(n("ERkP")),i=n("L9lV"),l=(n("fvxO"),n("7xIC")),u=new Map,s=window.IntersectionObserver,p={};var f=function(e,t){var n=a||(s?a=new s((function(e){e.forEach((function(e){if(u.has(e.target)){var t=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),u.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),u.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}u.delete(e)}):function(){}};function d(e,t,n,r){(0,i.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),p[t+"%"+n]=!0)}var m=function(e){var t=!1!==e.prefetch,n=c.default.useState(),o=r(n,2),a=o[0],u=o[1],m=(0,l.useRouter)(),b=m&&m.pathname||"/",h=c.default.useMemo((function(){var t=(0,i.resolveHref)(b,e.href);return{href:t,as:e.as?(0,i.resolveHref)(b,e.as):t}}),[b,e.href,e.as]),O=h.href,y=h.as;c.default.useEffect((function(){if(t&&s&&a&&a.tagName&&(0,i.isLocalURL)(O)&&!p[O+"%"+y])return f(a,(function(){d(m,O,y)}))}),[t,a,O,y,m]);var g=e.children,j=e.replace,v=e.shallow,x=e.scroll;"string"===typeof g&&(g=c.default.createElement("a",null,g));var w=c.Children.only(g),N={ref:function(e){e&&u(e),w&&"object"===typeof w&&w.ref&&("function"===typeof w.ref?w.ref(e):"object"===typeof w.ref&&(w.ref.current=e))},onClick:function(e){w.props&&"function"===typeof w.props.onClick&&w.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,m,O,y,j,v,x)}};return t&&(N.onMouseEnter=function(e){(0,i.isLocalURL)(O)&&(w.props&&"function"===typeof w.props.onMouseEnter&&w.props.onMouseEnter(e),d(m,O,y,{priority:!0}))}),!e.passHref&&("a"!==w.type||"href"in w.props)||(N.href=(0,i.addBasePath)(y)),c.default.cloneElement(w,N)};t.default=m},Sjde:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("FGSz")}])},ZVZ0:function(e,t,n){"use strict";n.r(t),n.d(t,"MDXContext",(function(){return s})),n.d(t,"MDXProvider",(function(){return d})),n.d(t,"mdx",(function(){return O})),n.d(t,"useMDXComponents",(function(){return f})),n.d(t,"withMDXComponents",(function(){return p}));var r=n("ERkP"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){return function(t){var n=f(t.components);return(o.a.createElement(e,c({},t,{components:n})))}},f=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=f(e.components);return(o.a.createElement(s.Provider,{value:t},e.children))},m="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return(o.a.createElement(o.a.Fragment,{},t))}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),s=f(n),p=r,d=s["".concat(c,".").concat(p)]||s[p]||b[p]||a;return n?o.a.createElement(d,l(l({ref:t},i),{},{components:n})):o.a.createElement(d,l({ref:t},i))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,c=new Array(a);c[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"===typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},jvFD:function(e,t,n){e.exports=n("KeDb")}},[["Sjde",0,1,2]]]);