(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+Np3":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("CiFA");function o(){for(var t=Object(r.a)(),e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return n.map((function(e){return"".concat(t.radii[e],"px")})).join(" ")}},0:function(t,e,n){n("qQbD"),t.exports=n("bBV7")},"2LUv":function(t,e,n){var r=n("m1Oa"),o=n("o/EK"),i=n("sJOi");t.exports=function(t){return r(t)||o(t)||i()}},"2W1i":function(t,e,n){var r,o;!function(i){if(void 0===(o="function"===typeof(r=i)?r.call(e,n,e,t):r)||(t.exports=o),!0,t.exports=i(),!!0){var a=window.Cookies,c=window.Cookies=i();c.noConflict=function(){return window.Cookies=a,c}}}((function(){function t(){for(var t=0,e={};t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}function e(t){return t.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(r){function o(){}function i(e,n,i){if("undefined"!==typeof document){"number"===typeof(i=t({path:"/"},o.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var a=JSON.stringify(n);/^[\{\[]/.test(a)&&(n=a)}catch(l){}n=r.write?r.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var c="";for(var u in i)i[u]&&(c+="; "+u,!0!==i[u]&&(c+="="+i[u].split(";")[0]));return document.cookie=e+"="+n+c}}function a(t,n){if("undefined"!==typeof document){for(var o={},i=document.cookie?document.cookie.split("; "):[],a=0;a<i.length;a++){var c=i[a].split("="),u=c.slice(1).join("=");n||'"'!==u.charAt(0)||(u=u.slice(1,-1));try{var l=e(c[0]);if(u=(r.read||r)(u,l)||e(u),n)try{u=JSON.parse(u)}catch(s){}if(o[l]=u,t===l)break}catch(s){}}return t?o[t]:o}}return o.set=i,o.get=function(t){return a(t,!1)},o.getJSON=function(t){return a(t,!0)},o.remove=function(e,n){i(e,"",t(n,{expires:-1}))},o.defaults={},o.withConverter=n,o}((function(){}))}))},"3vJe":function(t,e,n){"use strict";e.parse=function(t,e){if("string"!==typeof t)throw new TypeError("argument str must be a string");for(var n={},o=e||{},a=t.split(i),u=o.decode||r,l=0;l<a.length;l++){var s=a[l],d=s.indexOf("=");if(!(d<0)){var f=s.substr(0,d).trim(),p=s.substr(++d,s.length).trim();'"'==p[0]&&(p=p.slice(1,-1)),void 0==n[f]&&(n[f]=c(p,u))}}return n},e.serialize=function(t,e,n){var r=n||{},i=r.encode||o;if("function"!==typeof i)throw new TypeError("option encode is invalid");if(!a.test(t))throw new TypeError("argument name is invalid");var c=i(e);if(c&&!a.test(c))throw new TypeError("argument val is invalid");var u=t+"="+c;if(null!=r.maxAge){var l=r.maxAge-0;if(isNaN(l)||!isFinite(l))throw new TypeError("option maxAge is invalid");u+="; Max-Age="+Math.floor(l)}if(r.domain){if(!a.test(r.domain))throw new TypeError("option domain is invalid");u+="; Domain="+r.domain}if(r.path){if(!a.test(r.path))throw new TypeError("option path is invalid");u+="; Path="+r.path}if(r.expires){if("function"!==typeof r.expires.toUTCString)throw new TypeError("option expires is invalid");u+="; Expires="+r.expires.toUTCString()}r.httpOnly&&(u+="; HttpOnly");r.secure&&(u+="; Secure");if(r.sameSite){switch("string"===typeof r.sameSite?r.sameSite.toLowerCase():r.sameSite){case!0:u+="; SameSite=Strict";break;case"lax":u+="; SameSite=Lax";break;case"strict":u+="; SameSite=Strict";break;case"none":u+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return u};var r=decodeURIComponent,o=encodeURIComponent,i=/; */,a=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function c(t,e){try{return e(t)}catch(n){return t}}},"5dyF":function(t,e,n){t.exports=n("9CGT")},"9CGT":function(t,e,n){"use strict";var r=n("fwM5"),o=n("bkNG"),i=n("5YB7"),a=n("Y8Bl"),c=n("7osH");function u(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=c(t);if(e){var o=c(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}var l=n("mYab"),s=n("HIQq");e.__esModule=!0,e.default=void 0;var d,f=s(n("mXGw")),p=n("ly6l"),m=n("z4BS"),h=l(n("bBV7")),b=n("a4i1");function g(t){return t&&"object"===typeof t?(0,m.formatWithValidation)(t):t}var y=new Map,v=window.IntersectionObserver,w={};function x(){return d||(v?d=new v((function(t){t.forEach((function(t){if(y.has(t.target)){var e=y.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(d.unobserve(t.target),y.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var O=function(t){i(n,t);var e=u(n);function n(t){var o;return r(this,n),(o=e.call(this,t)).p=void 0,o.cleanUpListeners=function(){},o.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var a=t(o,i);return e=o,n=i,r=a,a}}((function(t,e){return{href:(0,b.addBasePath)(g(t)),as:e?(0,b.addBasePath)(g(e)):e}})),o.linkClicked=function(t){var e=t.currentTarget,n=e.nodeName,r=e.target;if("A"!==n||!(r&&"_self"!==r||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=o.formatUrls(o.props.href,o.props.as),a=i.href,c=i.as;if(function(t){var e=(0,p.parse)(t,!1,!0),n=(0,p.parse)((0,m.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(a)){var u=window.location.pathname;a=(0,p.resolve)(u,a),c=c?(0,p.resolve)(u,c):a,t.preventDefault();var l=o.props.scroll;null==l&&(l=c.indexOf("#")<0),h.default[o.props.replace?"replace":"push"](a,c,{shallow:o.props.shallow}).then((function(t){t&&l&&(window.scrollTo(0,0),document.body.focus())}))}}},o.p=!1!==t.prefetch,o}return o(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getPaths",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as),n=e.href,r=e.as,o=(0,p.resolve)(t,n);return[o,r?(0,p.resolve)(t,r):o]}},{key:"handleRef",value:function(t){var e=this;this.p&&v&&t&&t.tagName&&(this.cleanUpListeners(),w[this.getPaths().join("%")]||(this.cleanUpListeners=function(t,e){var n=x();return n?(n.observe(t),y.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}y.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(t){if(this.p){var e=this.getPaths();h.default.prefetch(e[0],e[1],t).catch((function(t){0})),w[e.join("%")]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=f.default.createElement("a",null,e));var i=f.Children.only(e),a={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch({priority:!0})},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(a.href=o||r),f.default.cloneElement(i,a)}}]),n}(f.Component);e.default=O},"9fEB":function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("mXGw")),i=r(n("GlZI")),a=n("9rrO"),c=n("bxxT"),u=n("vI6Y");function l(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function s(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}e.defaultHead=l;var d=["name","httpEquiv","charSet","itemProp"];function f(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(s,[]).reverse().concat(l(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var i=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var a=o.key.slice(o.key.indexOf("$")+1);t.has(a)?i=!1:t.add(a)}switch(o.type){case"title":case"base":e.has(o.type)?i=!1:e.add(o.type);break;case"meta":for(var c=0,u=d.length;c<u;c++){var l=d[c];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?i=!1:n.add(l);else{var s=o.props[l],f=r[l]||new Set;f.has(s)?i=!1:(f.add(s),r[l]=f)}}}return i}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}var p=i.default();function m(t){var e=t.children;return o.default.createElement(a.AmpStateContext.Consumer,null,(function(t){return o.default.createElement(c.HeadManagerContext.Consumer,null,(function(n){return o.default.createElement(p,{reduceComponentsToState:f,handleStateChange:n,inAmpMode:u.isInAmpMode(t)},e)}))}))}m.rewind=p.rewind,e.default=m},"9rrO":function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("mXGw"));e.AmpStateContext=o.createContext({})},Djbo:function(t,e,n){"use strict";e.a=[{path:"index.mdx",category:"",route:"/static-doc/",icon:null,isExternalLink:!1,data:{title:"Getting started",name:"Getting started"}},{path:"configure.mdx",category:"",route:"/static-doc/configure",icon:null,isExternalLink:!1,data:{title:"Configure",name:"Configure"}},{path:"Customize/theme.mdx",category:"Customize",route:"/static-doc/Customize/theme",icon:null,isExternalLink:!1,data:{title:"Theme",name:"Theme"}},{path:"Customize/custom-components.mdx",category:"Customize",route:"/static-doc/Customize/custom-components",icon:null,isExternalLink:!1,data:{title:"Custom components",name:"Custom components"}},{path:"Customize/error-page.mdx",category:"Customize",route:"/static-doc/Customize/error-page",icon:null,isExternalLink:!1,data:{title:"Customize error page",name:"error page"}},{path:"https://github.com/Maycon-Santos/static-doc",category:"",route:"https://github.com/Maycon-Santos/static-doc",icon:{light:"/static-doc/.assets/L2hvbWUvbWF5Y29uc2FudG9zL2Rldi9teS1wcm9qZWN0cy9zdGF0aWMtZG9jL2RvY3MvYXNzZXRzL2dpdGh1Yi1pY29uLWxpZ2h0LnN2Zw==.svg",dark:"/static-doc/.assets/L2hvbWUvbWF5Y29uc2FudG9zL2Rldi9teS1wcm9qZWN0cy9zdGF0aWMtZG9jL2RvY3MvYXNzZXRzL2dpdGh1Yi1pY29uLWRhcmsuc3Zn.svg"},isExternalLink:!0,data:{name:"Github"}}]},Ei4Q:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("CiFA");function o(t){return Object(r.a)().fontFamilies[t].map((function(t){return/ /.test(t)?"'".concat(t,"'"):t})).join(", ")}},GlZI:function(t,e,n){"use strict";var r=n("fwM5"),o=n("0pOA"),i=n("bkNG"),a=n("5YB7"),c=n("Y8Bl"),u=n("7osH"),l=n("2LUv");function s(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}Object.defineProperty(e,"__esModule",{value:!0});var d=n("mXGw"),f=!1;e.default=function(){var t,e=new Set;function n(n){t=n.props.reduceComponentsToState(l(e),n.props),n.props.handleStateChange&&n.props.handleStateChange(t)}return function(c){a(l,c);var u=s(l);function l(t){var i;return r(this,l),i=u.call(this,t),f&&(e.add(o(i)),n(o(i))),i}return i(l,null,[{key:"rewind",value:function(){var n=t;return t=void 0,e.clear(),n}}]),i(l,[{key:"componentDidMount",value:function(){e.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){e.delete(this),n(this)}},{key:"render",value:function(){return null}}]),l}(d.Component)}},NthX:function(t,e,n){t.exports=n("wcNg")},Q7Be:function(t,e,n){"use strict";n("2ZZa"),n("+4tB");var r=n("Ei4Q");n.d(e,"a",(function(){return r.a}));var o=n("ZdEu");n.d(e,"b",(function(){return o.a}));var i=n("Bf9F");n.d(e,"c",(function(){return i.a}));n("cSdw"),n("38De"),n("+Np3"),n("gR4k"),n("E3CV"),n("CiFA"),n("rBam")},bxxT:function(t,e,n){"use strict";var r=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("mXGw"));e.HeadManagerContext=o.createContext(null)},cZi2:function(t,e,n){"use strict";e.a={colorMode:"dark",spacing:[0,2,4,8,16,32,48,64,80,100],fontSizes:[12,14,16,20,24,32,48,64],fontWeights:{body:400,semiBold:600,bold:700},lineHeights:{body:1.5,heading:1.125},radii:{square:0,radius:4,rounded:10},googleFonts:[{name:"Open Sans",weights:[400,600,700]}],fontFamilies:{primary:["Open Sans","sans-serif"],menu:["Open Sans","sans-serif"],logo:["Open Sans","sans-serif"]},colors:{light:{body:{background:"white"},text:{light:"#13161F",dark:"white"},primary:{100:"#E1F5FE",200:"#81D4FA",300:"#29B6F6",400:"#29B6F6",500:"#03A9F4",600:"#039BE5",700:"#0288D1",800:"#0277BD",900:"#01579B"},gray:{100:"#fdfdfd",200:"#FAFAFA",300:"#edecec",400:"#dadde2",500:"#ececee",600:"#cfd5e0",700:"#616161"},dark:"#282A36",light:"#f8f8f2",negative:"#EB4D4B",link:{light:"#1a5ad2",dark:"",background:"#4a79d6"},syntaxHighlight:{plain:{text:"#f8f8f2",background:"#282A36"},highlight:[{types:["function","attr-name"],text:"#50fa7b"},{types:["class-name","property","atrule"],text:"#8be9fd"},{types:["number","boolean","prolog","constant","builtin"],text:"#bd93f9"},{types:["inserted"],text:"#50fa7b"},{types:["deleted"],text:"#50fa7b"},{types:["changed"],text:"#ffb86c"},{types:["punctuation","symbol"],text:"#f8f8f2"},{types:["string","attr-value"],text:"#f1fa8c"},{types:["char","tag","selector"],text:"#ff79c6"},{types:["script"],text:"#f8f8f2"},{types:["keyword","variable","operator"],text:"#ff79c6"},{types:["comment"],text:"#6272a4"}]}},dark:{body:{background:"#211F3B"},text:{light:"#FFFEFF",dark:"#282A36"},primary:{100:"#E1F5FE",200:"#81D4FA",300:"#29B6F6",400:"#29B6F6",500:"#03A9F4",600:"#039BE5",700:"#0288D1",800:"#0277BD",900:"#01579B"},gray:{100:"#26233f",200:"#2E2B4C",300:"#272541",400:"#2E2B4C",500:"#25233F",600:"#211F3B",700:"#1f1d33"},dark:"white",light:"#282A36",negative:"#EB4D4B",link:{light:"#1BA9EA",dark:"white",background:"#1356CB"},syntaxHighlight:{plain:{background:"#25233F"}}}}}},cha2:function(t,e,n){"use strict";n.r(e);var r=n("NthX"),o=n.n(r),i=n("mK0O");function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=n("mXGw"),l=n.n(u),s=n("9fEB"),d=n.n(s),f=n("bBV7"),p=n("3vJe"),m=n.n(p),h=n("2W1i"),b=n.n(h),g=n("/FXl"),y=n("UutA"),v=n("cZi2"),w=n("t+G7");var x=Object(y.d)(["html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}"]),O=n("+4tB"),k=n("Ei4Q");function j(){var t,e,n=(t=["\n  ","\n  html, body, #__next { height: 100%; }\n  html { scroll-behavior: smooth; }\n  body {\n    color: ",";\n    font-family: ",";\n    line-height: ",";\n    font-weight: ",";\n    background-color: ",";\n  }\n"],e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}})));return j=function(){return n},n}var C=Object(y.c)(j(),x,(function(){return Object(O.a)("text")}),(function(){return Object(k.a)("primary")}),(function(t){return t.lineHeights.body}),(function(t){return t.fontWeights.body}),(function(){return Object(O.a)("body","background")})),_=n("5dyF"),E=n.n(_),S=n("gR4k"),N=n("ZdEu"),A=n("+Np3"),I=y.e.div.withConfig({displayName:"menustyled__Wrapper",componentId:"sc-1w2gtcj-0"})(["font-family:",";"],(function(){return Object(k.a)("menu")})),M=y.e.div.withConfig({displayName:"menustyled__NavGroup",componentId:"sc-1w2gtcj-1"})(["& + &{margin-top:",";}"],(function(){return Object(S.a)(4)})),B=y.e.h4.withConfig({displayName:"menustyled__NavName",componentId:"sc-1w2gtcj-2"})(["display:block;padding:",";margin-bottom:",";color:",";font-size:",";font-weight:",";"],(function(){return Object(S.a)(0,4)}),(function(){return Object(S.a)(3)}),(function(){return Object(O.a)("primary")}),(function(){return Object(N.a)(2)}),(function(t){return t.theme.fontWeights.bold})),F=y.e.ul.withConfig({displayName:"menustyled__List",componentId:"sc-1w2gtcj-3"})(["padding:0;list-style:none;"]),z=y.e.li.withConfig({displayName:"menustyled__Item",componentId:"sc-1w2gtcj-4"})(["padding-right:",";a{display:flex;align-items:center;height:50px;padding:",";border-radius:",";color:",";font-size:",";text-decoration:none;transition:transform 200ms ease-out;&:hover{color:",";background-color:",";}&.active{color:white;background-color:",";}}"],(function(){return Object(S.a)(4)}),(function(){return Object(S.a)(0,4)}),(function(){return Object(A.a)("square","radius","radius","square")}),(function(){return Object(O.a)("dark",void 0,.6)}),(function(){return Object(N.a)(2)}),(function(){return Object(O.a)("link","dark")}),(function(){return Object(O.a)("link","background",.2)}),(function(){return Object(O.a)("link","background")})),L=y.e.img.withConfig({displayName:"menustyled__Icon",componentId:"sc-1w2gtcj-5"})(["width:20px;height:20px;object-fit:contain;object-position:center;margin-right:",";"],(function(){return Object(S.a)(3)})),P=(y.e.img.withConfig({displayName:"menustyled__externalLinkIcon",componentId:"sc-1w2gtcj-6"})([""]),n("Djbo")),D=n("2ZZa"),R=n("rBam");function T(){return(T=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var G=u.createElement("path",{d:"M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"});var U=function(t){return u.createElement("svg",T({stroke:"currentColor",fill:"none",strokeWidth:2,viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",height:"1em",width:"1em"},t),G)},W=l.a.createElement;function q(){var t=Object(f.useRouter)(),e=P.a.find((function(e){return t.pathname===e.route})),n=Object(R.a)();return W(I,null,Object.keys(n).map((function(t){var r=n[t];return W(M,{key:t},t&&W(B,null,t),W(F,null,r.map((function(t){var n,r,o=Object(D.a)({light:null===t||void 0===t?void 0:null===(n=t.icon)||void 0===n?void 0:n.light,dark:null===t||void 0===t?void 0:null===(r=t.icon)||void 0===r?void 0:r.dark});return W(z,{key:t.route},t.isExternalLink?W("a",{href:t.route,target:"_blank",rel:"noreferrer"},o&&W(L,{src:o,alt:""}),t.data.name,"\xa0",W(U,null)):W(E.a,{href:t.route},W("a",{className:t===e?"active":""},o&&W(L,{src:o,alt:""}),t.data.name)))}))))})))}var Z=n("ssvn"),X=n("Q7Be"),Y=y.e.div.withConfig({displayName:"logostyled__Wrapper",componentId:"sc-82q3aq-0"})(["display:flex;align-items:center;min-height:70px;padding:",";margin-bottom:",";border-bottom:1px "," solid;box-sizing:border-box;font-family:",";font-size:",";font-weight:",";background-color:",";"],(function(){return Object(S.a)(4,4)}),(function(){return Object(S.a)(5)}),(function(){return Object(O.a)("gray",200)}),(function(){return Object(X.a)("logo")}),(function(){return Object(N.a)(3)}),(function(t){return t.theme.fontWeights.bold}),(function(){return Object(O.a)("gray",500)})),H=y.e.img.withConfig({displayName:"logostyled__LogoImage",componentId:"sc-82q3aq-1"})(["width:100%;max-height:70px;object-fit:contain;object-position:left;"]),J=l.a.createElement;function Q(){var t,e,n=Object(D.a)({light:null===Z.a||void 0===Z.a?void 0:null===(t=Z.a.logo)||void 0===t?void 0:t.light,dark:null===Z.a||void 0===Z.a?void 0:null===(e=Z.a.logo)||void 0===e?void 0:e.dark});return J(Y,null,n?J(H,{src:n,alt:Z.a.name,title:Z.a.name}):Z.a.name||"Your logo here")}var K=y.e.div.withConfig({displayName:"asidestyled__Wrapper",componentId:"sc-148evc5-0"})(["@media (min-width:1200px){padding-left:","px;}"],280),V=y.e.aside.withConfig({displayName:"asidestyled__AsideWrapper",componentId:"sc-148evc5-1"})(["position:fixed;left:0;top:0;bottom:0;z-index:2;transform:translate3d(-100%,0,0);width:100%;max-width:","px;border-right:1px "," solid;overflow-x:hidden;overflow-y:auto;color:",";background-color:",";transition:transform 150ms ease-out;"," @media (min-width:1200px){transform:none;flex:0 0 ","px;}"],280,(function(){return Object(D.a)({dark:Object(O.a)("gray",200),light:Object(O.a)("gray",300)})}),(function(){return Object(O.a)("text")}),(function(){return Object(D.a)({dark:Object(O.a)("gray",300),light:Object(O.a)("gray",200)})}),(function(t){return t.open&&Object(y.d)(["transform:translate3d(0,0,0);"])}),280),$=y.e.div.withConfig({displayName:"asidestyled__Overlay",componentId:"sc-148evc5-2"})(["position:fixed;left:0;top:0;right:0;bottom:0;z-index:2;opacity:0;background-color:",";pointer-events:none;transition:opacity 300ms linear;"," @media (min-width:1200px){display:none;}"],(function(){return Object(O.a)("dark",void 0,.5)}),(function(t){return t.open&&Object(y.d)(["opacity:1;pointer-events:all;"])})),tt=l.a.createElement;function et(t){var e=t.open,n=t.onClose;return tt(K,null,tt($,{open:e,onClick:n}),tt(V,{open:e},tt(Q,null),tt(q,null)))}var nt=y.e.div.withConfig({displayName:"layoutstyled__Wrapper",componentId:"t2hk4i-0"})(["min-height:100%;@media (min-width:768px){display:flex;}"]),rt=y.e.div.withConfig({displayName:"layoutstyled__MainSection",componentId:"t2hk4i-1"})(["display:flex;flex-direction:column;width:100%;min-width:0;"]),ot=y.e.main.withConfig({displayName:"layoutstyled__Main",componentId:"t2hk4i-2"})(["flex:1;width:100%;max-width:1350px;padding:",";box-sizing:border-box;@media (min-width:768px){display:flex;flex-direction:row-reverse;justify-content:center;align-items:flex-start;margin:",";}@media (min-width:1200px){padding:",";margin:",";}"],(function(){return Object(S.a)(0,4)}),(function(){return Object(S.a)(0,"auto")}),(function(){return Object(S.a)(0,5)}),(function(){return Object(S.a)(0,"auto")})),it=y.e.div.withConfig({displayName:"layoutstyled__Content",componentId:"t2hk4i-3"})(["width:100%;min-width:0;min-height:100%;> *:nth-child(1){margin-top:0;}@media (min-width:768px){flex:0 0 calc(100% - 266px);width:auto;}"]),at=n("cSdw"),ct=n("Bf9F"),ut=y.e.div.withConfig({displayName:"table-of-contentsstyled__Wrapper",componentId:"sc-1xkbck7-0"})(["width:100%;margin-bottom:",";padding-bottom:",";border-bottom:1px "," solid;@media (min-width:768px){position:sticky;top:86px;flex:0 0 250px;margin-left:",";padding:",";border:1px "," solid;border-radius:",";box-sizing:border-box;background-color:",";}@media (min-width:1200px){top:70px;}"],(function(){return Object(S.a)(4)}),(function(){return Object(S.a)(4)}),(function(){return Object(O.a)("gray",300)}),(function(){return Object(S.a)(4)}),(function(){return Object(S.a)(4)}),(function(){return Object(O.a)("gray",400)}),(function(){return Object(A.a)("radius")}),(function(){return Object(O.a)("gray",100)})),lt=y.e.h5.withConfig({displayName:"table-of-contentsstyled__Title",componentId:"sc-1xkbck7-1"})(["color:",";font-size:",";font-weight:",";"],(function(){return Object(O.a)("dark")}),(function(){return Object(N.a)(1)}),(function(){return Object(ct.a)("bold")})),st=y.e.ul.withConfig({displayName:"table-of-contentsstyled__List",componentId:"sc-1xkbck7-2"})(["margin-top:",";list-style:none;"],(function(){return Object(S.a)(2)})),dt=y.e.li.withConfig({displayName:"table-of-contentsstyled__Item",componentId:"sc-1xkbck7-3"})(["&.level-2{padding-left:",";}&.level-3{padding-left:",";}&.level-4{padding-left:",";}&.level-5{padding-left:",";}&.level-6{padding-left:",";}"],(function(){return Object(S.a)(3)}),(function(){return Object(S.a)(5)}),(function(){return Object(S.a)(6)}),(function(){return Object(S.a)(7)}),(function(){return Object(S.a)(8)})),ft=y.e.a.withConfig({displayName:"table-of-contentsstyled__ItemLink",componentId:"sc-1xkbck7-4"})(["display:block;padding:",";color:",";font-size:",";&:hover{text-decoration:underline;cursor:pointer;}"],(function(){return Object(S.a)(1,0)}),(function(){return Object(O.a)("link")}),(function(){return Object(N.a)(1)})),pt=l.a.createElement;function mt(){var t=Object(at.a)().items;return 0===t.length?null:pt(ut,null,pt(lt,null,"Table of contents"),pt(st,null,t.map((function(t){return pt(dt,{className:"level-".concat(t.level),key:t.id},pt(E.a,{href:"#".concat(t.id)},pt(ft,null,"\u25cf ",t.text)))}))))}var ht=y.e.header.withConfig({displayName:"headerstyled__Wrapper",componentId:"sc-7cpdk2-0"})(["position:sticky;top:0;left:0;z-index:1;display:flex;align-items:center;width:100%;height:50px;box-sizing:border-box;padding:",";margin-bottom:",";border-bottom:1px "," solid;background-color:",";@media (min-width:768px){height:70px;}@media (min-width:1200px){margin-bottom:0;border-bottom:none;background-color:transparent;pointer-events:none;}"],(function(){return Object(S.a)(0,4)}),(function(){return Object(S.a)(4)}),(function(){return Object(O.a)("gray",200)}),(function(){return Object(D.a)({dark:Object(O.a)("gray",700),light:Object(O.a)("gray",300)})})),bt=y.e.div.withConfig({displayName:"headerstyled__Container",componentId:"sc-7cpdk2-1"})(["display:flex;align-items:center;width:100%;box-sizing:border-box;@media (min-width:1200px){max-width:1318px;margin:0 auto;padding:",";> *{pointer-events:all;}}"],(function(){return Object(S.a)(0,4)})),gt=y.e.button.withConfig({displayName:"headerstyled__HamburgerButton",componentId:"sc-7cpdk2-2"})(["display:flex;justify-content:center;align-items:center;width:35px;height:40px;border:none;outline:none;background:transparent;&::after{content:'';display:block;width:100%;height:3px;box-shadow:0 -7px 0 ",",0 7px 0 ",";background:",";}@media (min-width:1200px){display:none;}"],(function(){return Object(O.a)("dark")}),(function(){return Object(O.a)("dark")}),(function(){return Object(O.a)("dark")})),yt=y.e.button.withConfig({displayName:"headerstyled__ColorModeSwitchButton",componentId:"sc-7cpdk2-3"})(["width:30px;height:30px;border-radius:50%;margin-left:auto;outline:none;cursor:pointer;transition:all 300ms linear;&.light{border:4px "," solid;box-shadow:inset 6px 0 0 ",";background-color:",";}&.dark{border:4px "," solid;box-shadow:inset 0 8px 0 ",";background-color:",";}"],(function(){return Object(O.a)("dark")}),(function(){return Object(O.a)("light")}),(function(){return Object(O.a)("dark")}),(function(){return Object(O.a)("dark")}),(function(){return Object(O.a)("light")}),(function(){return Object(O.a)("dark")})),vt=l.a.createElement;function wt(t){var e=t.openAside,n=Object(u.useContext)(y.a),r=n.colorMode,o=n.setColorMode;return vt(ht,null,vt(bt,null,vt(gt,{onClick:e}),vt(yt,{className:r,onClick:function(){o("dark"===r?"light":"dark")}})))}var xt=l.a.createElement;function Ot(t){var e=t.children,n=Object(u.useState)(!1),r=n[0],o=n[1],i=Object(f.useRouter)();return Object(u.useEffect)((function(){return o(!1)}),[i.pathname]),xt(nt,null,xt(et,{open:r,onClose:function(){return o(!1)}}),xt(rt,null,xt(wt,{openAside:function(){return o(!0)}}),xt(ot,null,xt(mt,null),xt(it,null,e))))}var kt=n("XC7N"),jt=l.a.createElement;function Ct(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _t(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Ct(Object(n),!0).forEach((function(e){Object(i.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ct(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var Et=function(t){var e,n=t.Component,r=t.pageProps,o=t.initialColorMode,i=Object(u.useState)(o||v.a.colorMode),a=i[0],l=i[1],s=Object(u.useState)([]),p=s[0],m=s[1],h=Object(u.useMemo)((function(){return[]}),[]),x=Object(f.useRouter)(),O=P.a.find((function(t){return x.pathname===t.route})),k=((null===O||void 0===O?void 0:O.data)||{}).title;v.a.colorMode=a;return Object(u.useEffect)((function(){m(c(h)),h.splice(0,h.length)}),[n]),Object(u.useEffect)((function(){b.a.set("colorMode",a)}),[a]),jt(y.b,{theme:_t({},v.a,{setColorMode:l})},jt(d.a,null,jt("title",null,k),null===(e=v.a.googleFonts)||void 0===e?void 0:e.map((function(t){var e=t.name,n=t.weights,r=e.replace(/ /g,"+"),o=n.join(";");return jt("link",{key:e,href:"https://fonts.googleapis.com/css2?family=".concat(r,":wght@").concat(o,"&display=swap"),rel:"stylesheet"})}))),jt(C,v.a),jt(w.a.Provider,{value:{register:function(t){h.push(t)},items:p}},jt(Ot,null,jt(g.a,{components:kt},jt(n,r)))))};Et.getInitialProps=function(t){var e,n,r,i;return o.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return e=t.ctx.req,n=e?e.headers.cookie:document.cookie,r=m.a.parse(n||""),i=r.colorMode,o.abrupt("return",{initialColorMode:i});case 4:case"end":return o.stop()}}),null,null,null,Promise)};e.default=Et},m1Oa:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},"o/EK":function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},qQbD:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},rBam:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("mXGw"),o=n("Djbo");function i(){return Object(r.useMemo)((function(){var t={};return o.a.forEach((function(e){var n=e.path.split("/").filter(Boolean).length>=1&&e.category||"";t[n]||(t[n]=[]),t[n].push(e)})),t}),[])}},sJOi:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},vI6Y:function(t,e,n){"use strict";var r=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});var o=r(n("mXGw")),i=n("9rrO");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,i=t.hasQuery;return n||o&&(void 0!==i&&i)}e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))}}},[[0,0,1,2,4,3]]]);