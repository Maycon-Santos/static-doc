(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{SPjU:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Customize/theme",function(){return n("XNvY")}])},XNvY:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var a=n("Fcif"),o=n("dV/x"),r=n("mXGw"),i=n.n(r),s=n("/FXl"),l=n("cZi2"),c=n("XC7N"),b=(i.a.createElement,{}),d="wrapper";function h(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(s.b)(d,Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",null,"Theme"),Object(s.b)("p",null,"There is an object Theme which is where the style variables are configured."),Object(s.b)("h2",null,"Creating your theme"),Object(s.b)("p",null,"In the ",Object(s.b)("inlineCode",{parentName:"p"},".config")," file you can write the style variables within the key theme:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "name": "\u26a1 Static Docs",\n    "theme": {\n        // Configuration here\n    }\n}\n')),Object(s.b)("h3",null,"Fonts"),Object(s.b)("p",null,"You can import fonts from google and then name where each font should be used:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "name": "\u26a1 Static Docs",\n    "theme": {\n        "googleFonts": [{\n            "name": "Open Sans",\n            "weights": [400, 600, 700]\n        }],\n        "fontFamilies": {\n            "primary": ["Open Sans", "sans-serif"],\n            "menu": ["Open Sans", "sans-serif"],\n            "logo": ["Open Sans", "sans-serif"]\n        },\n        "fontWeights": {\n            "body": 400,\n            "semiBold": 600,\n            "bold": 700\n        }\n    }\n}\n')),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"googleFonts")," You must receive the font names as they are in google fonts and their weights.",Object(s.b)("br",{parentName:"p"}),"\n",Object(s.b)("inlineCode",{parentName:"p"},"fontFamilies")," Must receive the places where the font families are to be used.",Object(s.b)("br",{parentName:"p"}),"\n",Object(s.b)("inlineCode",{parentName:"p"},"fontWeights")," You must receive the weights for each part of the site."),Object(s.b)("h3",null,"Default color mode"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "name": "\u26a1 Static Docs",\n    "theme": {\n      "colorMode": "dark"\n    }\n}\n')),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"colorMode")," should receive standard color mode, which is how the user will see on the first access."),Object(s.b)("h3",null,"Colors"),Object(s.b)("p",null,"Below you will see the colors by color mode. It is worth remembering that if the current color mode does not have the color set, the application takes from another color mode for this color."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "name": "\u26a1 Static Docs",\n    "theme": {\n        "colors": {\n            "light": {\n              // Light mode colors\n            },\n            "dark": {\n              // Dark mode colors\n            }\n        }\n    }\n}\n')),Object(s.b)("h3",null,"Default theme"),Object(s.b)("p",null,"With all this in mind, you can override or add new variables to the ",Object(s.b)("inlineCode",{parentName:"p"},"theme"),". Below you will see the original ",Object(s.b)("inlineCode",{parentName:"p"},"theme"),":"),Object(s.b)(c.code,{className:"language-json"},JSON.stringify(l.a,null,4)))}h.isMDXComponent=!0},cZi2:function(e,t,n){"use strict";t.a={colorMode:"dark",spacing:[0,2,4,8,16,32,48,64,80,100],fontSizes:[12,14,16,20,24,32,48,64],fontWeights:{body:400,semiBold:600,bold:700},lineHeights:{body:1.5,heading:1.125},radii:{square:0,radius:4,rounded:10},googleFonts:[{name:"Open Sans",weights:[400,600,700]}],fontFamilies:{primary:["Open Sans","sans-serif"],menu:["Open Sans","sans-serif"],logo:["Open Sans","sans-serif"]},colors:{light:{body:{background:"white"},text:{light:"#13161F",dark:"white"},primary:{100:"#E1F5FE",200:"#81D4FA",300:"#29B6F6",400:"#29B6F6",500:"#03A9F4",600:"#039BE5",700:"#0288D1",800:"#0277BD",900:"#01579B"},gray:{100:"#fdfdfd",200:"#FAFAFA",300:"#edecec",400:"#dadde2",500:"#ececee",600:"#cfd5e0",700:"#616161"},dark:"#282A36",light:"#f8f8f2",negative:"#EB4D4B",link:{light:"#1a5ad2",dark:"",background:"#4a79d6"},syntaxHighlight:{plain:{text:"#f8f8f2",background:"#282A36"},highlight:[{types:["function","attr-name"],text:"#50fa7b"},{types:["class-name","property","atrule"],text:"#8be9fd"},{types:["number","boolean","prolog","constant","builtin"],text:"#bd93f9"},{types:["inserted"],text:"#50fa7b"},{types:["deleted"],text:"#50fa7b"},{types:["changed"],text:"#ffb86c"},{types:["punctuation","symbol"],text:"#f8f8f2"},{types:["string","attr-value"],text:"#f1fa8c"},{types:["char","tag","selector"],text:"#ff79c6"},{types:["script"],text:"#f8f8f2"},{types:["keyword","variable","operator"],text:"#ff79c6"},{types:["comment"],text:"#6272a4"}]}},dark:{body:{background:"#211F3B"},text:{light:"#FFFEFF",dark:"#282A36"},primary:{100:"#E1F5FE",200:"#81D4FA",300:"#29B6F6",400:"#29B6F6",500:"#03A9F4",600:"#039BE5",700:"#0288D1",800:"#0277BD",900:"#01579B"},gray:{100:"#26233f",200:"#2E2B4C",300:"#272541",400:"#2E2B4C",500:"#25233F",600:"#211F3B",700:"#1f1d33"},dark:"white",light:"#282A36",negative:"#EB4D4B",link:{light:"#1BA9EA",dark:"white",background:"#1356CB"},syntaxHighlight:{plain:{background:"#25233F"}}}}}},"dV/x":function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",(function(){return a}))}},[["SPjU",0,1,3,4]]]);