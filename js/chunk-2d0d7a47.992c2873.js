(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d7a47"],{"784d":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",{staticClass:"app-main view-history",staticStyle:{"margin-top":"1rem"}},[i("div",{staticClass:"columns middle",staticStyle:{"margin-bottom":".4rem"}},[i("h1",{staticClass:"expanded"},[t._v("ประวัติสถานที่")]),i("div",{on:{click:function(e){return t.clearHistory()}}},[i("i",{staticClass:"fas fa-trash-alt fa-2x"})])]),t.getHistory.length?t._e():i("app-empty-state",{attrs:{name:"ประวัติสถานที่"}}),t._l(t.getHistory,(function(e,s){return i("app-list-item",t._b({key:s,attrs:{removable:""},on:{remove:t.removeHistory},nativeOn:{click:function(i){return t.gotoShop(e)}}},"app-list-item",e,!1))}))],2)},a=[],o=i("5530"),n=i("26e2"),r=i("f8e5"),c=i("7db7"),l={name:"ViewHistory",components:{AppListItem:r["a"],AppEmptyState:n["a"]},computed:Object(o["a"])({},c["a"]),methods:{gotoShop:function(t){this.$store.dispatch("setDetail",t),this.$router.push("/shop_detail")},clearHistory:function(){confirm("ต้องการล้างประวัติสถานที่หรือไม่?\nข้อมูลสถานที่ทั้งหมดจะถูกลบ และไม่สามารถกู้คืนได้")&&this.$store.dispatch("clearHistory")},removeHistory:function(t){confirm("ต้องการลบประวัติร้านนี้หรือไม่?\nเมื่อลบแล้วข้อมูลของร้านนี้จะไม่สามารถกู้คืนได้อีก")&&this.$store.dispatch("deleteHistory",t)}}},p=l,m=i("2877"),u=Object(m["a"])(p,s,a,!1,null,null,null);e["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0d7a47.992c2873.js.map