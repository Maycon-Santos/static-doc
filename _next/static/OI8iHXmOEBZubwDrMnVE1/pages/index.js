(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/FXl":function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n("mXGw"),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,d=p["".concat(c,".").concat(f)]||p[f]||b[f]||a;return n?o.a.createElement(d,i(i({ref:t},s),{},{components:n})):o.a.createElement(d,i({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"===typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[f]="string"===typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},"5dyF":function(e,t,n){e.exports=n("9CGT")},"9CGT":function(e,t,n){"use strict";var r=n("fwM5"),o=n("bkNG"),a=n("5YB7"),c=n("Y8Bl"),i=n("7osH");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}var s=n("mYab"),u=n("HIQq");t.__esModule=!0,t.default=void 0;var p,f=u(n("mXGw")),b=n("ly6l"),d=n("z4BS"),h=s(n("bBV7")),m=n("a4i1");function y(e){return e&&"object"===typeof e?(0,d.formatWithValidation)(e):e}var O=new Map,g=window.IntersectionObserver,v={};function j(){return p||(g?p=new g((function(e){e.forEach((function(e){if(O.has(e.target)){var t=O.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),O.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0)}var w=function(e){a(n,e);var t=l(n);function n(e){var o;return r(this,n),(o=t.call(this,e)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(e){var t=null,n=null,r=null;return function(o,a){if(r&&o===t&&a===n)return r;var c=e(o,a);return t=o,n=a,r=c,c}}((function(e,t){return{href:(0,m.addBasePath)(y(e)),as:t?(0,m.addBasePath)(y(t)):t}})),o.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var a=o.formatUrls(o.props.href,o.props.as),c=a.href,i=a.as;if(function(e){var t=(0,b.parse)(e,!1,!0),n=(0,b.parse)((0,d.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(c)){var l=window.location.pathname;c=(0,b.resolve)(l,c),i=i?(0,b.resolve)(l,i):c,e.preventDefault();var s=o.props.scroll;null==s&&(s=i.indexOf("#")<0),h.default[o.props.replace?"replace":"push"](c,i,{shallow:o.props.shallow}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==e.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as),n=t.href,r=t.as,o=(0,b.resolve)(e,n);return[o,r?(0,b.resolve)(e,r):o]}},{key:"handleRef",value:function(e){var t=this;this.p&&g&&e&&e.tagName&&(this.cleanUpListeners(),v[this.getPaths().join("%")]||(this.cleanUpListeners=function(e,t){var n=j();return n?(n.observe(e),O.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}O.delete(e)}):function(){}}(e,(function(){t.prefetch()}))))}},{key:"prefetch",value:function(e){if(this.p){var t=this.getPaths();h.default.prefetch(t[0],t[1],e).catch((function(e){0})),v[t.join("%")]=!0}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof t&&(t=f.default.createElement("a",null,t));var a=f.Children.only(t),c={ref:function(t){e.handleRef(t),a&&"object"===typeof a&&a.ref&&("function"===typeof a.ref?a.ref(t):"object"===typeof a.ref&&(a.ref.current=t))},onMouseEnter:function(t){a.props&&"function"===typeof a.props.onMouseEnter&&a.props.onMouseEnter(t),e.prefetch({priority:!0})},onClick:function(t){a.props&&"function"===typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(c.href=o||r),f.default.cloneElement(a,c)}}]),n}(f.Component);t.default=w},Fcif:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},IXnM:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n("Fcif"),o=n("dV/x"),a=n("mXGw"),c=n.n(a),i=n("/FXl"),l=(n("5dyF"),c.a.createElement,{}),s="wrapper";function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(s,Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"Getting started"),Object(i.b)("p",null,"This is a app to make easily the document write and read for the other users."),Object(i.b)("h2",null,"Install"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Using yarn:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"yarn add static-doc\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Using npm:")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"npm install static-doc\n")),Object(i.b)("h2",null,"Configure scripts (optional)"),Object(i.b)("p",null,"Insert these commands into your ",Object(i.b)("inlineCode",{parentName:"p"},"package.json"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'"scripts": {\n  "docs:dev": "static-doc dev",\n  "docs:build": "static-doc build",\n  "docs:serve": "static-doc build && static-doc start"\n}\n')),Object(i.b)("p",null,"By default your documents should be in the doc folder at the root of the project, but this can be changed by passing a directory as an argument. Example: ",Object(i.b)("inlineCode",{parentName:"p"},"static-doc dev ./my-docs")),Object(i.b)("h2",null,"Your docs directory"),Object(i.b)("p",null,"Here will be the .mdx and .md files that will be interpreted will generate the pages. See an example file:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"---\ntitle: Hello world\nname: My first doc\n---\n\n# Hello world\n\nThis is an example file!\n")),Object(i.b)("p",null,"What is between the dashes are page properties, ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/page-properties"}),"see more here"),"."),Object(i.b)("h2",null,"Configuration"),Object(i.b)("p",null,"You may need to change the logo, write the name of the app and/or change the order of the menu. To do this, create a ",Object(i.b)("inlineCode",{parentName:"p"},".config")," file inside your ",Object(i.b)("inlineCode",{parentName:"p"},"docs directory"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n  "name": "\u26a1 Static Docs",\n  "menu": [\n    "index.mdx",\n    {\n      "name": "Github",\n      "icon": {\n        "dark": "assets/github-icon-dark.svg",\n        "light": "assets/github-icon-light.svg"\n      },\n      "to": "https://github.com/Maycon-Santos/static-doc"\n    }\n  ]\n}\n')),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/configuration"}),"Click here")," to learn more about ",Object(i.b)("inlineCode",{parentName:"p"},".config"),"."))}u.isMDXComponent=!0},"dV/x":function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return r}))},u4QB:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("IXnM")}])},x9yg:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports}},[["u4QB",0,1,3]]]);