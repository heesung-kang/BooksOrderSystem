(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-cb13f7d6"],{1743:function(t,s,e){"use strict";e.r(s);var a=[function(){var t=this._self._c;return t("div",{staticClass:"pt26 logo"},[t("img",{attrs:{src:e("e347"),alt:"instaPay"}})])}],c=(e("14d9"),e("f3e4")),i=e("e71f"),r=e("e31c"),o={props:["show"],data:()=>({activeStatus:0,routeName:"",isActive:!1,userInfo:{}}),watch:{$route(t){this.routeName=t.name,this.menuDefaultSetup()},show(t){this.isActive=!!t}},created(){this.routeName=this.$route.name,this.menuDefaultSetup(),this.userInfo=Object(c.b)("userInfo"),this.cart()},methods:{close(){this.$emit("close",!0)},async cart(){const t=[];try{const{uid:s}=Object(c.b)("userInfo"),e=Object(i.j)(Object(i.b)(r.b,"cart-"+s));(await Object(i.f)(e)).forEach(s=>{t.push(s.data())}),this.$store.commit("common/changeCartList",t.length)}catch(t){console.error("Error adding document: ",t)}},menuDefaultSetup(){switch(this.routeName){case"SearchOrder":this.activeStatus=1;break;case"Cart":this.activeStatus=2;break;case"OrderList":case"OrderResult":this.activeStatus=3;break;case"ReleaseList":case"ReleaseStatus":this.activeStatus=4;break;case"ShopInfo":this.activeStatus=5}}}},u=(e("277c"),e("2877")),n=Object(u.a)(o,(function(){var t=this,s=t._self._c;return s("section",{staticClass:"lnb-wrap"},[s("aside",{staticClass:"side-bar",class:{active:t.isActive}},[t._m(0),s("div",{staticClass:"system-name"},[t._v("서점용 도서 주문 시스템")]),s("nav",{staticClass:"lnb"},[s("ul",{on:{click:t.close}},[s("li",{class:{active:1===t.activeStatus}},[s("router-link",{attrs:{to:"/SearchOrder"}},[t._v("책 검색")])],1),s("li",{class:{active:2===t.activeStatus}},[s("router-link",{attrs:{to:"/Cart"}},[t._v("장바구니")])],1),s("li",{class:{active:3===t.activeStatus}},[s("router-link",{attrs:{to:"/OrderList"}},[t._v("주문 목록 보기")])],1),s("li",{class:{active:4===t.activeStatus}},[s("router-link",{attrs:{to:"/ReleaseList"}},[t._v("출고 목록 보기")])],1),s("li",{class:{active:5===t.activeStatus}},[s("router-link",{attrs:{to:"/ShopInfo"}},[t._v("서점 정보")])],1)])])]),s("div",{staticClass:"dim",class:{active:t.isActive},on:{click:t.close}})])}),a,!1,null,"0689934d",null);s.default=n.exports},"277c":function(t,s,e){"use strict";e("dc10")},dc10:function(t,s,e){},e347:function(t,s,e){t.exports=e.p+"img/logo.ab65988c.svg"}}]);