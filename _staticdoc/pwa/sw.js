if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,c,t)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(c.map(s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}})).then(e=>{const s=t(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-a61ac24a"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/3ef630e34cd10ba68f9d468ac363ff81c534e1e9.92c1b659cdbee9cba80b.js",revision:"4039becf516d5bfe63458eaee1629b5e"},{url:"/_next/static/chunks/framework.9c34edb71d0ef1cf5036.js",revision:"12086b632af2167ec9a5604f2643e854"},{url:"/_next/static/chunks/main-3a7ab4966a6da80a841c.js",revision:"6a792497e64a8f713acc9abc06c4893a"},{url:"/_next/static/chunks/pages/Customize/custom-components-9123f54e380b363f046d.js",revision:"6e341583018494a01a900ea66116726f"},{url:"/_next/static/chunks/pages/Customize/error-page-4a4af5d282b6856f95ee.js",revision:"5c1dff39e7ce9421c74eade8f49d6fc3"},{url:"/_next/static/chunks/pages/Customize/theme-106ae77c93b856bb00c1.js",revision:"9d36f4b6dcd4d951427bfd975454426d"},{url:"/_next/static/chunks/pages/_app-afc4befecd098362b715.js",revision:"a9575f3fac865179465090daeb7bc84e"},{url:"/_next/static/chunks/pages/_error-40831f46e6a083446b2b.js",revision:"d5c8efbf8451a3e6998e7e1ecf3f14bf"},{url:"/_next/static/chunks/pages/configure-a15b21b5cbd9499f9467.js",revision:"5ab31ee4fbb4cb8c9ba8af4596dcc6b0"},{url:"/_next/static/chunks/pages/index-d40b3dd97188fe44a431.js",revision:"1dd0e3b63fd8ddaeb785fcf56dd045be"},{url:"/_next/static/chunks/polyfills-edfd69ab1e3f18afe7fe.js",revision:"208451d665ca064d340ec2114f96fc1e"},{url:"/_next/static/chunks/webpack-ccf5ab034a524403276a.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/53d35de46d6df5432047.css",revision:"8bd05abeeff4a8b0bb82ef7f09c9e456"},{url:"/_next/static/fxn17uA9-bo1Wja2I7dOu/_buildManifest.js",revision:"8c8ce24af816a954f8477db276e37aba"},{url:"/_next/static/fxn17uA9-bo1Wja2I7dOu/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_staticdoc/og-images/Q3VzdG9taXplL2N1c3RvbS1jb21wb25lbnRzLm1keA==.jpg",revision:"3321f7ee3c8333c5902bfa2bf2753a90"},{url:"/_staticdoc/og-images/Q3VzdG9taXplL2Vycm9yLXBhZ2UubWR4.jpg",revision:"18be58c1f71db080d78bf9478e9c0c9b"},{url:"/_staticdoc/og-images/Q3VzdG9taXplL3RoZW1lLm1keA==.jpg",revision:"03092260d70b45969dfb4f933599291b"},{url:"/_staticdoc/og-images/Y29uZmlndXJlLm1keA==.jpg",revision:"aac06db3f290cc528a35e8386ed3df15"},{url:"/_staticdoc/og-images/aW5kZXgubWR4.jpg",revision:"999685dcb5507e66f30a10ae10ec022b"},{url:"/_staticdoc/pwa/sw.js",revision:"3555bf576b39cf94af61ae9297a0a789"},{url:"/_staticdoc/pwa/workbox-a61ac24a.js",revision:"b6c7bd7f87e0c148b94094075c526883"},{url:"/assets/favicon.ico",revision:"5f4c371f9ab6a41c850ada5b536ef1dc"},{url:"/assets/github-icon-dark.svg",revision:"eb189432286f8e87e4f98574d8ac16d9"},{url:"/assets/github-icon-light.svg",revision:"2e991f4c96be7a6dcd902c913a187c77"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
