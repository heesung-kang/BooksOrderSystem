(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-558fbee5"],{"1f0b":function(t,s,a){"use strict";var e=a("3129"),i={name:"BookListMobileSkeleton"},o=(a("f412"),a("2877")),c=Object(o.a)(i,(function(){var t=this._self._c;return t("div",[t("ul",[t("li",[t("section",{staticClass:"skeleton-book-list"},[t("div",{staticClass:"img"},[t(e.a,{attrs:{type:"list-item-avatar-two-line"}}),t(e.a,{attrs:{type:"text"}}),t(e.a,{attrs:{type:"text"}}),t(e.a,{attrs:{type:"text"}}),t(e.a,{attrs:{type:"text"}}),t(e.a,{attrs:{type:"text"}})],1)])]),t("li",[t("section",{staticClass:"skeleton-book-list"},[t("div",{staticClass:"img"},[t(e.a,{attrs:{type:"list-item-avatar-two-line"}}),t(e.a,{attrs:{type:"text"}}),t(e.a,{attrs:{type:"text"}}),t(e.a,{attrs:{type:"text"}}),t(e.a,{attrs:{type:"text"}}),t(e.a,{attrs:{type:"text"}})],1)])]),t("li",[t("section",{staticClass:"skeleton-book-list"},[t("div",{staticClass:"img"},[t(e.a,{attrs:{type:"list-item-avatar-two-line"}}),t(e.a,{attrs:{type:"text"}}),t(e.a,{attrs:{type:"text"}}),t(e.a,{attrs:{type:"text"}}),t(e.a,{attrs:{type:"text"}}),t(e.a,{attrs:{type:"text"}})],1)])]),t("li",[t("section",{staticClass:"skeleton-book-list"},[t("div",{staticClass:"img"},[t(e.a,{attrs:{type:"list-item-avatar-two-line"}}),t(e.a,{attrs:{type:"text"}}),t(e.a,{attrs:{type:"text"}}),t(e.a,{attrs:{type:"text"}}),t(e.a,{attrs:{type:"text"}}),t(e.a,{attrs:{type:"text"}})],1)])]),t("li",[t("section",{staticClass:"skeleton-book-list"},[t("div",{staticClass:"img"},[t(e.a,{attrs:{type:"list-item-avatar-two-line"}}),t(e.a,{attrs:{type:"text"}}),t(e.a,{attrs:{type:"text"}}),t(e.a,{attrs:{type:"text"}}),t(e.a,{attrs:{type:"text"}}),t(e.a,{attrs:{type:"text"}})],1)])])])])}),[],!1,null,"975c769e",null);s.a=c.exports},2698:function(t,s,a){},"277f":function(t,s,a){"use strict";a.r(s);a("14d9");var e=a("2f62"),i=a("e31c"),o=a("e71f"),c=a("f3e4"),n=a("132d"),r={name:"Toast",props:["status","message"],data:()=>({isActive:!1,wrap:"toastWrap"}),watch:{status(){this.handleVisible()}},methods:{handleVisible(){this.isActive=!0,setTimeout(()=>{this.isActive=!1},2e3)}}},l=(a("b01e"),a("2877")),d={name:"BookList",components:{Toast:Object(l.a)(r,(function(){var t=this._self._c;return t("section",{class:[{active:this.isActive},this.wrap]},[t("div",{staticClass:"wrapper"},[t("div",{staticClass:"message",domProps:{innerHTML:this._s(this.message)}}),t("div",{staticClass:"mt10"},[t("router-link",{staticClass:"btn",attrs:{to:"/Cart"}},[this._v("장바구니로 이동 "),t(n.a,[this._v("mdi-arrow-right-circle")])],1)],1)])])}),[],!1,null,"c2ee1d1e",null).exports},props:["books","infoChange","shopRate","basicRate","bookRate","totalPage","page"],data:()=>({cart:[],message:"",status:!1}),computed:{...Object(e.b)("common",["cartList"])},async created(){try{const t=Object(c.b)("userInfo");this.uid=t.uid;const s=Object(o.k)(Object(o.b)(i.b,"cart-"+this.uid));(await Object(o.g)(s)).forEach(t=>{this.cart.push(t.data())})}catch(t){console.error("Error adding document: ",t)}},methods:{async addCart(t){try{this.cart.some(s=>s.isbn===t.isbn)?(this.status=!this.status,this.message="이미 담아 두었습니다.<br/>‘장바구니’에서 수량을 조절해 주세요"):(this.$store.commit("common/setLoading",!0),t.count=1,await Object(o.a)(Object(o.b)(i.b,"cart-"+this.uid),t),this.cart.push(t),this.status=!this.status,this.message="장바구니에 담았습니다.",this.$store.commit("common/changeCartList",this.cartList+1))}catch(t){console.error("Error adding document: ",t)}this.$store.commit("common/setLoading",!1)}}},b=(a("c18b"),Object(l.a)(d,(function(){var t=this,s=t._self._c;return s("div",[s("section",{staticClass:"book-list"},[t.books.length>0?s("ul",t._l(t.books,(function(a){return s("li",{key:a.data.isbn},[s("section",{staticClass:"contents d-flex align-center justify-space-between"},[s("article",{staticClass:"basic-info d-flex align-center"},[s("section",{staticClass:"thumbnail"},[s("img",{attrs:{src:`https://bookthumb-phinf.pstatic.net/cover/${a.data.image}?type=m1`,alt:a.data.subject}})]),s("div",{staticClass:"book-info"},[s("h3",[t._v(t._s(a.data.subject))]),s("div",[s("span",{staticClass:"mr18"},[t._v(t._s(a.data.author))]),s("span",[t._v(t._s(a.data.publisher)+" ("+t._s(a.data.publication_date)+")")])])])]),s("article",{staticClass:"isbn"},[t._v("ISBN : "+t._s(a.data.isbn))]),s("article",{staticClass:"price-info"},[s("div",{staticClass:"mr14"},[t._v("정가 "+t._s(a.data.price&&a.data.price.toLocaleString())+"원")]),t.bookRate.some(t=>t.data.isbn===a.data.isbn&&""!==t.data.rate)?s("div",t._l(t.bookRate,(function(e,i){return s("div",{key:i,staticClass:"mr10"},[e.data.isbn===a.data.isbn?s("span",[t._v("공급률 "+t._s(e.data.rate)+"%")]):t._e()])})),0):t._e(),!t.bookRate.some(t=>t.data.isbn===a.data.isbn&&""!==t.data.rate)&&t.shopRate.some(t=>t.sid===a.data.sid&&""!==t.rate)?s("div",t._l(t.shopRate,(function(e,i){return s("div",{key:i,staticClass:"mr10"},[e.sid===a.data.sid&&""!==e.rate?s("span",[t._v(" 공급률 "+t._s(e.rate)+"% ")]):t._e()])})),0):t._e(),t.bookRate.some(t=>t.data.isbn===a.data.isbn&&""!==t.data.rate)||t.shopRate.some(t=>t.sid===a.data.sid&&""!==t.rate)?t._e():s("div",t._l(t.basicRate,(function(e,i){return s("div",{key:i,staticClass:"mr10"},[a.data.sid===e.sid?s("span",[t._v("공급률 "+t._s(e.supplyRate)+"%")]):t._e()])})),0)]),t.bookRate.some(t=>t.data.isbn===a.data.isbn&&""!==t.data.rate)?s("div",{staticClass:"price"},t._l(t.bookRate,(function(e,i){return s("div",{key:i},[e.data.isbn===a.data.isbn?s("span",[t._v(" 공급가 "+t._s(a.data.price&&(a.data.price*e.data.rate/100).toLocaleString())+"원 ")]):t._e()])})),0):t._e(),!t.bookRate.some(t=>t.data.isbn===a.data.isbn&&""!==t.data.rate)&&t.shopRate.some(t=>t.sid===a.data.sid&&""!==t.rate)?s("div",{staticClass:"price"},t._l(t.shopRate,(function(e,i){return s("div",{key:i},[e.sid===a.data.sid&&""!==e.rate?s("span",[t._v(" 공급가 "+t._s(a.data.price&&(a.data.price*e.rate/100).toLocaleString())+"원 ")]):t._e()])})),0):t._e(),t.bookRate.some(t=>t.data.isbn===a.data.isbn&&""!==t.data.rate)||t.shopRate.some(t=>t.sid===a.data.sid&&""!==t.rate)?t._e():s("div",{staticClass:"price"},t._l(t.basicRate,(function(e,i){return s("div",{key:i,staticClass:"mr10"},[a.data.sid===e.sid?s("span",[t._v("공급가 "+t._s(a.data.price&&(a.data.price*e.supplyRate/100).toLocaleString())+"원")]):t._e()])})),0),s("article",{staticClass:"add-cart"},[s("button",{staticClass:"basic",on:{click:function(s){return t.addCart(a.data)}}},[t._v("담기")])])])])})),0):s("div",{staticClass:"book-search-alert"},[t.infoChange?s("span",[t._v("검색 결과가 없습니다.")]):t._e()])]),t.books.length>=10&&t.totalPage!==t.page?s("div",{staticClass:"btn-more",on:{click:function(s){return t.$emit("more")}}},[s("button",{staticClass:"basic"},[t._v("더 보기")])]):t._e(),s("Toast",{attrs:{status:t.status,message:t.message}})],1)}),[],!1,null,"4f746f54",null).exports),h={components:{Selects:a("a05a").a},props:["itemList"],data:()=>({select:"",keyword:""}),computed:{...Object(e.b)("common",["skeletonLoading"])},methods:{change(t){this.select=t},search(){""!==this.keyword?this.$emit("search",{select:this.select,keyword:this.keyword}):alert("검색어를 입력해주세요.")}}},u=(a("5b1e"),Object(l.a)(h,(function(){var t=this,s=t._self._c;return s("section",{staticClass:"search-group"},[s("Selects",{attrs:{itemList:t.itemList},on:{change:t.change}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"basic",attrs:{type:"text"},domProps:{value:t.keyword},on:{keypress:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.search.apply(null,arguments)},input:function(s){s.target.composing||(t.keyword=s.target.value)}}}),s("button",{staticClass:"basic",attrs:{disabled:t.skeletonLoading},on:{click:t.search}},[t._v("검색")])],1)}),[],!1,null,"3df1bcea",null).exports),p=a("bc3a");var m={name:"KakaoBookSearch",props:["keyword","search","clear"],data:()=>({list:[]}),watch:{search(){this.searchBooks()},clear(){this.list=[]}},methods:{async searchBooks(){this.$store.commit("common/setLoading",!0);const t=await(s={query:this.keyword},p.a.get("https://dapi.kakao.com/v3/search/book",{headers:{Authorization:"KakaoAK 2747cc77d6c23300d9fb150e23b1b9df"},params:s}).then(t=>t).catch(t=>console.log(t)));var s;this.$store.commit("common/setLoading",!1),200===t.status?(this.list=[],this.list=t.data.documents,this.list.forEach(t=>{const s=t.isbn.split(" ");t.isbn=s[1]}),0===t.data.documents.length&&this.$emit("result",!1)):this.$emit("result",!1)},isbn(t){this.$emit("result",t)}}},k=(a("7f24"),Object(l.a)(m,(function(){var t=this,s=t._self._c;return s("div",[t.list.length>0?s("ul",t._l(t.list,(function(a){return s("li",{key:a.isbn,on:{click:function(s){return t.isbn(a.isbn)}}},[t._v(t._s(a.title)+" : "+t._s(a.isbn))])})),0):t._e()])}),[],!1,null,"45624eeb",null).exports),v=a("691b"),y={components:{BookListMobileSkeleton:a("1f0b").a,BookListSkeleton:v.a,SearchBasicGroup:u,BookList:b,KakaoBookSearch:k},data:()=>({itemList:[{item:"ISBN",value:"isbn"},{item:"책 제목",value:"subject"},{item:"저자",value:"author"},{item:"출판사",value:"publisher"}],select:"isbn",keyword:"",limit:10,books:[],lastVisible:"",infoChange:!1,kakaoSearch:!1,clear:!1,uid:"",shopRate:[],basicRate:[],bookRate:[],totalPage:0,page:1}),computed:{...Object(e.b)("common",["loading","skeletonLoading","mobile"])},async mounted(){const t=Object(c.b)("userInfo");this.uid=t.uid;try{const t=Object(o.d)(i.b,"shopInfo",this.uid),s=await Object(o.f)(t);this.shopRate=s.data().shopRate,this.bookRate=s.data().bookRate}catch(t){console.log(t)}try{const t=Object(o.k)(Object(o.b)(i.b,"publisherInfo"));(await Object(o.g)(t)).forEach(t=>{this.basicRate.push({sid:t.data().sid,supplyRate:t.data().supplyRate})})}catch(t){console.error("Error adding document: ",t)}},methods:{async firstBookList(){this.$store.commit("common/setLoading",!0);const t=Object(o.k)(Object(o.b)(i.b,"booksData"),Object(o.p)(this.select,"==",this.keyword)),s=await Object(o.e)(t);this.$store.commit("common/setLoading",!1);const a=s.data().count;this.totalPage=Math.ceil(a/this.limit);try{this.$store.commit("common/setSkeleton",!0);const t=Object(o.k)(Object(o.b)(i.b,"booksData"),Object(o.p)(this.select,"==",this.keyword),Object(o.i)(this.limit)),s=await Object(o.g)(t);this.lastVisible=s.docs[s.docs.length-1],s.forEach(t=>{this.books.push({id:t.id,data:t.data()})}),this.infoChange=!0,this.$store.commit("common/setSkeleton",!1)}catch(t){console.error("Error adding document: ",t),this.$store.commit("common/setSkeleton",!1)}},async more(){this.page+=1;try{this.$store.commit("common/setLoading",!0);const t=Object(o.k)(Object(o.b)(i.b,"booksData"),Object(o.p)(this.select,"==",this.keyword),Object(o.n)(this.lastVisible),Object(o.i)(this.limit)),s=await Object(o.g)(t);0===s.docs.length&&alert("도서정보가 더이상 없습니다."),this.lastVisible=s.docs[s.docs.length-1],s.forEach(t=>{this.books.push({id:t.id,data:t.data()})})}catch(t){console.error("Error adding document: ",t)}this.$store.commit("common/setLoading",!1)},search(t){this.books=[],"subject"!==t.select?(this.clear=!this.clear,""!==t.select&&(this.select=t.select),""!==t.keyword&&(this.keyword=t.keyword),this.firstBookList()):(this.infoChange=!1,this.keyword=t.keyword,this.kakaoSearch=!this.kakaoSearch)},isbnSearch(t){!1!==t?(this.books=[],this.select="isbn",this.keyword=t,this.firstBookList()):this.infoChange=!0}}},f=Object(l.a)(y,(function(){var t=this,s=t._self._c;return s("section",[s("h2",{staticClass:"sub-title"},[t._v("책 검색")]),s("section",{staticClass:"sub-container"},[s("SearchBasicGroup",{attrs:{itemList:t.itemList},on:{search:t.search}}),s("KakaoBookSearch",{attrs:{keyword:t.keyword,search:t.kakaoSearch,clear:t.clear},on:{result:t.isbnSearch}}),t.skeletonLoading&&!t.mobile?s("BookListSkeleton",{staticClass:"mt14"}):t._e(),t.skeletonLoading&&t.mobile?s("BookListMobileSkeleton",{staticClass:"mt14"}):s("BookList",{attrs:{books:t.books,infoChange:t.infoChange,shopRate:t.shopRate,basicRate:t.basicRate,bookRate:t.bookRate,totalPage:t.totalPage,page:t.page},on:{more:t.more}})],1)])}),[],!1,null,null,null);s.default=f.exports},"33ec":function(t,s,a){},"43d3":function(t,s,a){},5281:function(t,s,a){},"5b1e":function(t,s,a){"use strict";a("43d3")},"691b":function(t,s,a){"use strict";var e=a("3129"),i={name:"BookListSkeleton"},o=(a("b57b"),a("2877")),c=Object(o.a)(i,(function(){var t=this._self._c;return t("div",[t("ul",[t("li",[t("section",{staticClass:"d-flex align-center justify-space-between skeleton-book-list"},[t("div",{staticClass:"img"},[t(e.a,{attrs:{type:"list-item-avatar-two-line"}})],1),t("div",{staticClass:"text"},[t(e.a,{attrs:{type:"text"}})],1),t("div",{staticClass:"text"},[t(e.a,{attrs:{type:"text"}})],1),t("div",{staticClass:"text"},[t(e.a,{attrs:{type:"text"}})],1),t("div",{staticClass:"text"},[t(e.a,{attrs:{type:"text"}})],1),t("div",{staticClass:"text"},[t(e.a,{attrs:{type:"text"}})],1)])]),t("li",[t("section",{staticClass:"d-flex align-center justify-space-between skeleton-book-list"},[t("div",{staticClass:"img"},[t(e.a,{attrs:{type:"list-item-avatar-two-line"}})],1),t("div",{staticClass:"text"},[t(e.a,{attrs:{type:"text"}})],1),t("div",{staticClass:"text"},[t(e.a,{attrs:{type:"text"}})],1),t("div",{staticClass:"text"},[t(e.a,{attrs:{type:"text"}})],1),t("div",{staticClass:"text"},[t(e.a,{attrs:{type:"text"}})],1),t("div",{staticClass:"text"},[t(e.a,{attrs:{type:"text"}})],1)])]),t("li",[t("section",{staticClass:"d-flex align-center justify-space-between skeleton-book-list"},[t("div",{staticClass:"img"},[t(e.a,{attrs:{type:"list-item-avatar-two-line"}})],1),t("div",{staticClass:"text"},[t(e.a,{attrs:{type:"text"}})],1),t("div",{staticClass:"text"},[t(e.a,{attrs:{type:"text"}})],1),t("div",{staticClass:"text"},[t(e.a,{attrs:{type:"text"}})],1),t("div",{staticClass:"text"},[t(e.a,{attrs:{type:"text"}})],1),t("div",{staticClass:"text"},[t(e.a,{attrs:{type:"text"}})],1)])]),t("li",[t("section",{staticClass:"d-flex align-center justify-space-between skeleton-book-list"},[t("div",{staticClass:"img"},[t(e.a,{attrs:{type:"list-item-avatar-two-line"}})],1),t("div",{staticClass:"text"},[t(e.a,{attrs:{type:"text"}})],1),t("div",{staticClass:"text"},[t(e.a,{attrs:{type:"text"}})],1),t("div",{staticClass:"text"},[t(e.a,{attrs:{type:"text"}})],1),t("div",{staticClass:"text"},[t(e.a,{attrs:{type:"text"}})],1),t("div",{staticClass:"text"},[t(e.a,{attrs:{type:"text"}})],1)])]),t("li",[t("section",{staticClass:"d-flex align-center justify-space-between skeleton-book-list"},[t("div",{staticClass:"img"},[t(e.a,{attrs:{type:"list-item-avatar-two-line"}})],1),t("div",{staticClass:"text"},[t(e.a,{attrs:{type:"text"}})],1),t("div",{staticClass:"text"},[t(e.a,{attrs:{type:"text"}})],1),t("div",{staticClass:"text"},[t(e.a,{attrs:{type:"text"}})],1),t("div",{staticClass:"text"},[t(e.a,{attrs:{type:"text"}})],1),t("div",{staticClass:"text"},[t(e.a,{attrs:{type:"text"}})],1)])])])])}),[],!1,null,"d8eeb990",null);s.a=c.exports},"7f24":function(t,s,a){"use strict";a("5281")},a05a:function(t,s,a){"use strict";var e=a("b974"),i={props:["itemList"],data:()=>({select:""}),mounted(){this.select=this.itemList[0].value}},o=(a("df9f"),a("2877")),c=Object(o.a)(i,(function(){var t=this,s=t._self._c;return s("div",{staticClass:"selects"},[s(e.a,{attrs:{dense:"",items:t.itemList,"item-text":"item","item-value":"value",outlined:""},on:{input:function(s){return t.$emit("change",t.select)}},model:{value:t.select,callback:function(s){t.select=s},expression:"select"}})],1)}),[],!1,null,"7b5afd12",null);s.a=c.exports},b01e:function(t,s,a){"use strict";a("33ec")},b57b:function(t,s,a){"use strict";a("da01")},c18b:function(t,s,a){"use strict";a("f9da")},c2fe:function(t,s,a){},da01:function(t,s,a){},df9f:function(t,s,a){"use strict";a("2698")},f412:function(t,s,a){"use strict";a("c2fe")},f9da:function(t,s,a){}}]);