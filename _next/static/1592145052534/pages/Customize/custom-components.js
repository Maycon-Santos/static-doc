(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"dV/x":function(e,t,o){"use strict";function n(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}o.d(t,"a",(function(){return n}))},lHdK:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Customize/custom-components",function(){return o("sVb0")}])},sVb0:function(e,t,o){"use strict";o.r(t),o.d(t,"default",(function(){return i}));var n=o("Fcif"),r=o("dV/x"),a=o("mXGw"),s=o.n(a),c=o("/FXl"),l=(o("XC7N"),s.a.createElement,{}),u="wrapper";function i(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(c.b)(u,Object(n.a)({},l,o,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",null,"Custom components"),Object(c.b)("p",null,"All custom components must be placed in the ",Object(c.b)("inlineCode",{parentName:"p"},".components")," folder in your docs directory.\nYou can customize any component in ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Maycon-Santos/static-doc/tree/master/src/components"}),"this list"),", just create a file of the same name.\nRemember that the layout component is the parent component of all."),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),"docs/\n  \u251c\u2500\u2500 index.mdx\n+\u251c\u2500\u2500 .components\n+\u2502      \u251c\u2500\u2500 logo.tsx\n+\u2502      \u2514\u2500\u2500 menu.tsx\n  \u2514\u2500\u2500 ...rest\n")),Object(c.b)("h2",null,"Some features:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"You must not and cannot import content from outside the ",Object(c.b)("inlineCode",{parentName:"li"},".components")," folder (Except packages in node_modules);"),Object(c.b)("li",{parentName:"ul"},"You can import the hooks as follows: ",Object(c.b)("inlineCode",{parentName:"li"},"import { useMenu } from 'hooks'"),".",Object(c.b)("br",{parentName:"li"}),"The same goes for other components: ",Object(c.b)("inlineCode",{parentName:"li"},"import Logo from 'components/logo'"),";")),Object(c.b)("h2",null,"Hooks"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Maycon-Santos/static-doc/tree/master/src/hooks"}),"Here")," you can see the complete list of hooks.\nIt has hooks for various style attributes and hooks for content, such as ",Object(c.b)("inlineCode",{parentName:"p"},"useMenu"),"."),Object(c.b)("h2",null,"Style"),Object(c.b)("p",null,"The project uses styled-components, but you can follow this ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://nextjs.org/blog/styling-next-with-styled-jsx"}),"Nextjs tutorial"),". Nextjs is the foundation of the project.."),Object(c.b)("h2",null,"An example file"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"import React from 'react'\nimport userConfig from 'data/user-config'\nimport { useColorMode } from 'hooks/use-color-mode'\nimport { Wrapper, LogoImage } from './logo.styled'\n\nexport default function Logo () {\n  const logoImage = useColorMode({\n    light: userConfig.logo.light,\n    dark: userConfig.logo.dark\n  }) as string\n\n  return (\n    <Wrapper>\n      {logoImage ? (\n        <LogoImage src={logoImage} alt={userConfig.name} title={userConfig.name} />\n      ) : (\n        userConfig.name\n      )}\n    </Wrapper>\n  )\n}\n")))}i.isMDXComponent=!0}},[["lHdK",0,1,2,4]]]);