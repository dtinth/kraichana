(function(e){function t(t){for(var o,r,i=t[0],s=t[1],u=t[2],f=0,l=[];f<i.length;f++)r=i[f],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&l.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);h&&h(t);while(l.length)l.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-065b89ff":"33ebebe8","chunk-0f914a84":"e1b412c8","chunk-1824c4ac":"87eb1bc8","chunk-1e795822":"b31adf9a","chunk-49f2d512":"af6b6065","chunk-68ce3660":"75406671","chunk-a5f3fc28":"49eccfdc","chunk-a9c80a02":"b2431b16"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-065b89ff":1,"chunk-0f914a84":1,"chunk-1824c4ac":1,"chunk-1e795822":1,"chunk-49f2d512":1,"chunk-68ce3660":1,"chunk-a5f3fc28":1,"chunk-a9c80a02":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-065b89ff":"c1c4f605","chunk-0f914a84":"6ad20ae2","chunk-1824c4ac":"9a7f0328","chunk-1e795822":"2d6c680f","chunk-49f2d512":"dba6ccb6","chunk-68ce3660":"19f55679","chunk-a5f3fc28":"fba3394a","chunk-a9c80a02":"224c515b"}[e]+".css",a=s.p+o,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],f=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(f===o||f===a))return t()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],f=u.getAttribute("data-href");if(f===o||f===a)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var o=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[e],h.parentNode.removeChild(h),n(c)},h.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=c);var u,f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=i(e);var l=new Error;u=function(t){f.onerror=f.onload=null,clearTimeout(h);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",l.name="ChunkLoadError",l.type=o,l.request=r,n[1](l)}a[e]=void 0}};var h=setTimeout((function(){u({type:"timeout",target:f})}),12e4);f.onerror=f.onload=u,document.head.appendChild(f)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/kraichana/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],f=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var h=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1a42":function(e,t,n){},"1a5d":function(e,t,n){var o={"./FavoriteList.vue":["7e12","chunk-1e795822"],"./Home.vue":["bb51","chunk-a5f3fc28"],"./QRCodeReader.vue":["6d9b","chunk-a9c80a02"],"./QRShare.vue":["6bc5","chunk-0f914a84"],"./ShopDetail.vue":["93f8","chunk-49f2d512"],"./ShopResult.vue":["17db","chunk-68ce3660"],"./ShopResultOut.vue":["a645","chunk-1824c4ac"],"./ViewHistory.vue":["784d","chunk-065b89ff"]};function r(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return n.e(t[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(o)},r.id="1a5d",e.exports=r},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-navbar",{attrs:{currentPath:e.$route.path}}),n("router-view"),n("hr",{staticStyle:{padding:"0 20px"}}),e._m(0)],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticStyle:{padding:"0 20px","font-size":"80%","text-align":"center"}},[e._v(' เว็บไซต์ "ใครชนะ?" จัดทำขึ้นเพื่อการศึกษาเท่านั้น '),n("strong",[e._v("ไม่มีส่วนเกี่ยวข้อง")]),e._v("กับโครงการไทยชนะหรือเว็บไซต์ https://www.thaichana.com/ และ"),n("strong",[e._v("ไม่สามารถบันทึกข้อมูล")]),e._v("ลงระบบ ThaiChana ได้ ")])}],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"main-navbar",attrs:{role:"navigation","aria-label":"main navigation"}},[n("section",{staticClass:"home"},["/"!==e.currentPath?n("a",{on:{click:function(t){return e.$router.go(-1)}}},[n("i",{staticClass:"fas fa-arrow-left fa-2x"})]):e._e()]),e._m(0),n("section",{staticClass:"qr"},["/"!==e.currentPath&&"/qr"!==e.currentPath?n("router-link",{attrs:{to:"/qr"}},[n("i",{staticClass:"fas fa-qrcode fa-2x"})]):e._e()],1)])},i=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"title"},[o("img",{staticClass:"img-fluid",staticStyle:{height:"36px"},attrs:{src:n("8b4d"),alt:"ใครชนะ?"}})])}],s={name:"AppNavbar",props:{currentPath:{type:String,required:!0}}},u=s,f=(n("665a"),n("2877")),l=Object(f["a"])(u,c,i,!1,null,"287c8732",null),h=l.exports,p={name:"App",components:{AppNavbar:h}},d=p,m=(n("5c0b"),Object(f["a"])(d,r,a,!1,null,null,null)),v=m.exports,g=n("9483");Object(g["a"])("".concat("/kraichana/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("7db0"),n("fb6a"),n("d3b7");var b=n("8c4f");function y(e){return function(){return n("1a5d")("./".concat(e,".vue"))}}o["a"].use(b["a"]);var k=[{path:"/",name:"Home",component:y("Home"),meta:{title:"หน้าหลัก"}},{path:"/qr",name:"QRcode",component:y("QRCodeReader"),meta:{title:"QRCode Reader"}},{path:"/shop_detail",name:"ShopDetail",component:y("ShopDetail"),meta:{title:"ข้อมูลร้านค้า"}},{path:"/history",name:"ViewHistory",component:y("ViewHistory"),meta:{title:"ประวัติการสแกน"}},{path:"/favorite",name:"FavoriteList",component:y("FavoriteList"),meta:{title:"แก้ไขรายการโปรด"}},{path:"/shop_result",name:"ShopResult",component:y("ShopResult"),meta:{title:"เช็คอินแล้ว"}},{path:"/shop_result_out",name:"ShopResultOut",component:y("ShopResultOut"),meta:{title:"เช็คเอาท์แล้ว"}},{path:"/shop_qr",name:"QRShare",component:y("QRShare"),meta:{title:"QRCode ร้าน"}},{path:"*",redirect:"/"}],S=new b["a"]({mode:"history",base:"/kraichana/",routes:k});S.beforeEach((function(e,t,n){var o=e.matched.slice().reverse().find((function(e){return e.meta&&e.meta.title}));document.title="".concat(o?o.meta.title:""," - ใครชนะ?"),n()}));var w=S,_=(n("99af"),n("4de4"),n("d81d"),n("2f62"));o["a"].use(_["a"]);var O="kraichana-store",H=new _["a"].Store({state:{shopDetail:null,shopHistory:[],shopFavorite:[]},getters:{getDetail:function(e){return e.shopDetail},getTopHistory:function(e){return e.shopHistory.slice(0,3)},getHistory:function(e){return e.shopHistory},getFavorite:function(e){return e.shopFavorite},getFavoriteMetadata:function(e){return e.shopFavorite.map((function(e){var t=e.shopId,n=e.appId;return"".concat(n,".").concat(t)}))}},mutations:{initialiseStore:function(e){localStorage.getItem(O)&&this.replaceState(Object.assign(e,JSON.parse(localStorage.getItem(O))))},setShopDetail:function(e,t){e.shopDetail=t},addHistory:function(e,t){e.shopHistory.length?"".concat(e.shopHistory[0].appId,".").concat(e.shopHistory[0].shopId)!=="".concat(t.appId,".").concat(t.shopId)&&e.shopHistory.unshift(t):e.shopHistory.unshift(t)},addFavorite:function(e,t){e.shopFavorite.unshift(t)},removeFavorite:function(e,t){e.shopFavorite=e.shopFavorite.filter((function(e){return"".concat(e.appId,".").concat(e.shopId)!=="".concat(t.appId,".").concat(t.shopId)}))},clearHistory:function(e){e.shopHistory=[]}},actions:{setDetail:function(e,t){e.commit("setShopDetail",t),e.commit("addHistory",t)},saveFavorite:function(e,t){e.commit("addFavorite",t)},deleteFavorite:function(e,t){e.commit("removeFavorite",t)},clearHistory:function(e){e.commit("clearHistory")}},modules:{}});H.subscribe((function(e,t){localStorage.setItem(O,JSON.stringify(t))}));var C=H;o["a"].config.productionTip=!1,new o["a"]({router:w,store:C,beforeCreate:function(){this.$store.commit("initialiseStore")},render:function(e){return e(v)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"665a":function(e,t,n){"use strict";var o=n("1a42"),r=n.n(o);r.a},"8b4d":function(e,t,n){e.exports=n.p+"img/logo_with_text.2fb35af1.png"},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.928d490a.js.map