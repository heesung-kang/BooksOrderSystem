(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6204cb1a"],{"01d3":function(t,s,i){},"277f":function(t,s,i){"use strict";i.r(s);var e=[function(){var t=this._self._c;return t("section",{staticClass:"book-list"},[t("ul",[t("li",[t("section",{staticClass:"contents d-flex align-center justify-space-between"},[t("article",{staticClass:"basic-info d-flex align-center"},[t("section",{staticClass:"thumbnail"},[t("img",{attrs:{src:i("9811"),alt:""}})]),t("div",{staticClass:"book-info"},[t("h3",[this._v("아노말리(양장본 Hardcover)")]),t("div",[t("span",{staticClass:"mr18"},[this._v("에르베 르 텔리에")]),t("span",[this._v("민음사 (20220526)")])])])]),t("article",{staticClass:"price-info"},[t("div",{staticClass:"mr14"},[this._v("정가 20,000원")]),t("div",{staticClass:"mr10"},[this._v("공급률 60%")])]),t("article",{staticClass:"price"},[this._v("공급가 12,000")]),t("article",{staticClass:"add-cart"},[t("button",{staticClass:"basic"},[this._v("담기")])])])])])])}],a={name:"BookList"},c=(i("5934"),i("2877")),n=Object(c.a)(a,(function(){this._self._c;return this._m(0)}),e,!1,null,"5fd70c86",null).exports,l={components:{Selects:i("a05a").a},props:["itemList"]},o=(i("da14"),{components:{SearchBasicGroup:Object(c.a)(l,(function(){var t=this._self._c;return t("section",{staticClass:"search-group"},[t("Selects",{attrs:{itemList:this.itemList}}),t("input",{staticClass:"basic",attrs:{type:"text"}}),t("button",{staticClass:"basic"},[this._v("검색")])],1)}),[],!1,null,"8b003632",null).exports,BookList:n},data:()=>({itemList:[{item:"책 제목",value:"01"},{item:"ISBN",value:"02"},{item:"저자",value:"03"},{item:"출판사",value:"04"}]})}),u=Object(c.a)(o,(function(){var t=this._self._c;return t("section",[t("h2",{staticClass:"sub-title"},[this._v("책 검색")]),t("section",{staticClass:"sub-container"},[t("SearchBasicGroup",{attrs:{itemList:this.itemList}}),t("BookList")],1)])}),[],!1,null,null,null);s.default=u.exports},5934:function(t,s,i){"use strict";i("d38f")},"8d44":function(t,s,i){},9811:function(t,s,i){t.exports=i.p+"img/book.504b6ed5.jpg"},a05a:function(t,s,i){"use strict";var e=i("b974"),a={props:["itemList"],data:()=>({select:""}),mounted(){this.select=this.itemList[0].value}},c=(i("bff9"),i("2877")),n=Object(c.a)(a,(function(){var t=this,s=t._self._c;return s("div",{staticClass:"selects"},[s(e.a,{attrs:{dense:"",items:t.itemList,"item-text":"item","item-value":"value",outlined:""},model:{value:t.select,callback:function(s){t.select=s},expression:"select"}})],1)}),[],!1,null,"3010c937",null);s.a=n.exports},bff9:function(t,s,i){"use strict";i("01d3")},d38f:function(t,s,i){},da14:function(t,s,i){"use strict";i("8d44")}}]);