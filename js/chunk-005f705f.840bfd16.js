(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-005f705f"],{"43d0":function(t,a,s){"use strict";s("956e")},4809:function(t,a,s){},"68e0":function(t,a,s){"use strict";s.d(a,"a",(function(){return e}));const e=function(t,a,s,e){return{name:t,width:a,height:s,resizable:e,clickToClose:!1,draggable:".popup-title",scrollable:!0}}},7402:function(t,a,s){"use strict";var e=s("132d"),i={methods:{close(){this.$emit("close")}}},o=(s("cc0a"),s("2877")),d=Object(o.a)(i,(function(){var t=this._self._c;return t("div",{staticClass:"modal-wrap"},[t("div",{staticClass:"close",on:{click:this.close}},[t(e.a,[this._v("mdi-window-close")])],1),this._t("head"),t("div",{staticClass:"line"}),t("div",{staticClass:"body"},[this._t("body")],2),this._t("footer")],2)}),[],!1,null,"1c84da6b",null);a.a=d.exports},"78e9":function(t,a,s){"use strict";s("e04e")},"956e":function(t,a,s){},c228:function(t,a,s){"use strict";s.r(a);var e=s("7679"),i=s("132d"),o=(s("14d9"),s("2f62")),d=s("e71f"),c=s("e31c"),n=s("f3e4"),r=s("68e0"),l=s("691b"),u=s("1f0b"),h={components:{modalWrap:s("7402").a},props:["id","cart","uid"],data:()=>({sendData:[]}),async created(){const t=Object(d.d)(c.b,"shopInfo",this.uid),a=(await Object(d.f)(t)).data().shop,s=Object(d.l)(),{payType:e}=Object(n.b)("userInfo");this.cart.forEach(t=>{e.forEach(a=>{a.sid===t.data.sid&&(t.data.payType=a.payType)}),t.data.count=parseInt(t.data.count),t.data.uid=this.uid,t.data.order_time_id=this.$date().format("YYYYMMDDHHmmss"),t.data.order_time=s,t.data.reply_time=null,t.data.reply_time_id=null,t.data.order_real_time=null,t.data.order_real_time_id=null,t.data.release_time=null,t.data.release_time_id=null,t.data.complete_time_id=null,t.data.complete_time=null,t.data.memo=null,t.data.shop_order_status=0,t.data.publisher_reply_status=0,t.data.order_check=!1,t.data.reply_count=0,t.data.shop_name=a,t.data.reply_count=t.data.count,t.data.totalCount=0,t.data.totalPrice=0,t.data.distribution=null,this.sendData.push(t.data)});const i=Object(d.q)(c.b);await this.sendData.forEach(t=>{const a=Object(d.d)(Object(d.b)(c.b,"orderRequest"));i.set(a,t)}),await i.commit()},methods:{async close(){const t=Object(d.q)(c.b),{uid:a}=Object(n.b)("userInfo");await this.id.forEach(s=>{t.delete(Object(d.d)(c.b,"cart-"+a,s))}),await t.commit(),this.$store.commit("common/setLoading",!1),this.$store.commit("common/changeCartList",0),this.$emit("close"),this.$router.push("/")}}},b=(s("43d0"),s("2877")),m=Object(b.a)(h,(function(){var t=this._self._c;return t("modalWrap",{on:{close:this.close}},[t("template",{slot:"head"},[t("h2",[this._v("주문서")])]),t("template",{slot:"body"},[t("div",[this._v("\n      주문서가 출판사에 전송되었습니다."),t("br"),this._v('\n      "주문 내역"에서 회신 확인 후 결제 해 주세요\n    ')]),t("div",{staticClass:"mt20 btn-wrap"},[t("button",{staticClass:"basic",on:{click:this.close}},[this._v("확인")])])])],2)}),[],!1,null,"36728752",null).exports,p=s("78dc"),_={components:{BookListSkeleton:l.a,BookListMobileSkeleton:u.a,Toast:p.a},data:()=>({cart:[],ids:[],shopRate:[],basicRate:[],bookRate:[],message:"",status:!1,listWidth:0,titleMaxWidth:0}),computed:{...Object(o.b)("common",["windowWidth","mobile","skeletonLoading"]),bookCount(){let t=0;return this.cart.forEach(a=>t+=Number(a.data.count)),t},totalPrice(){let t=0;return this.cart.forEach(a=>{this.bookRate.some(t=>t.data.isbn===a.data.isbn&&""!==t.data.rate)&&this.bookRate.forEach(s=>{a.data.isbn===s.data.isbn&&(t+=a.data.price*Number(s.data.rate)*a.data.count/100)}),!this.bookRate.some(t=>t.data.isbn===a.data.isbn&&""!==t.data.rate)&&this.shopRate.some(t=>t.sid===a.data.sid&&""!==t.rate)&&this.shopRate.forEach(s=>{a.data.sid===s.sid&&(t+=a.data.price*Number(s.rate)*a.data.count/100)}),this.bookRate.some(t=>t.data.isbn===a.data.isbn&&""!==t.data.rate)||this.shopRate.some(t=>t.sid===a.data.sid&&""!==t.rate)||this.basicRate.forEach(s=>{a.data.sid===s.sid&&(t+=a.data.price*Number(s.supplyRate)*a.data.count/100)})}),t}},async created(){const{uid:t}=Object(n.b)("userInfo");this.uid=t,this.$store.commit("common/setSkeleton",!0);try{const t=Object(d.d)(c.b,"shopInfo",this.uid),a=await Object(d.f)(t);this.shopRate=a.data().shopRate,this.bookRate=a.data().bookRate}catch(t){console.error("Error adding document: ",t)}try{const t=Object(d.k)(Object(d.b)(c.b,"publisherInfo"));(await Object(d.g)(t)).forEach(t=>{this.basicRate.push({sid:t.data().sid,supplyRate:t.data().supplyRate})})}catch(t){console.error("Error adding document: ",t)}await this.load()},mounted(){window.onresize=()=>{this.setSize()}},methods:{showModal(){const{uid:t}=Object(n.b)("userInfo");this.mobile?this.$modal.show(m,{id:this.ids,cart:this.cart,uid:t},Object(r.a)("ModalCart","95%","auto",!1)):this.$modal.show(m,{id:this.ids,cart:this.cart,uid:t},Object(r.a)("ModalCart","500px","auto",!1))},async load(){this.cart=[],this.ids=[];try{const{uid:t}=Object(n.b)("userInfo");this.$store.commit("common/setSkeleton",!0);const a=Object(d.k)(Object(d.b)(c.b,"cart-"+t));(await Object(d.g)(a)).forEach(t=>{this.cart.push({id:t.id,data:t.data()}),this.ids.push(t.id)}),this.cart.forEach(t=>{this.bookRate.some(a=>a.data.isbn===t.data.isbn&&""!==a.data.rate)&&this.bookRate.forEach(a=>{t.data.isbn===a.data.isbn&&(t.data.supply_rate=a.data.rate)}),!this.bookRate.some(a=>a.data.isbn===t.data.isbn&&""!==a.data.rate)&&this.shopRate.some(a=>a.sid===t.data.sid&&""!==a.rate)&&this.shopRate.forEach(a=>{t.data.sid===a.sid&&(t.data.supply_rate=a.rate)}),this.bookRate.some(a=>a.data.isbn===t.data.isbn&&""!==a.data.rate)||this.shopRate.some(a=>a.sid===t.data.sid&&""!==a.rate)||this.basicRate.forEach(a=>{t.data.sid===a.sid&&(t.data.supply_rate=a.supplyRate)})}),setTimeout(()=>{this.setSize()},200)}catch(t){console.error("Error adding document: ",t)}this.$store.commit("common/setSkeleton",!1)},async update(t,a){try{const{uid:s}=Object(n.b)("userInfo");this.$store.commit("common/setLoading",!0),await Object(d.o)(Object(d.d)(c.b,"cart-"+s,t),{count:parseInt(a)}),this.status=!this.status,this.message="수량이 변경 되었습니다"}catch(t){console.error("Error adding document: ",t)}this.$store.commit("common/setLoading",!1)},async del(t){this.cart=this.cart.filter(a=>{if(a.id!==t)return a});try{const{uid:a}=Object(n.b)("userInfo");await Object(d.c)(Object(d.d)(c.b,"cart-"+a,t)),this.status=!this.status,this.message="삭제 되었습니다",this.$store.commit("common/changeCartList",this.cart.length)}catch(t){console.error("Error adding document: ",t)}},setSize(){null!==document.querySelector(".book-list")&&(this.mobile?(this.listWidth=document.querySelector(".book-list").clientWidth,this.titleMaxWidth=this.listWidth,setTimeout(()=>{document.querySelectorAll(".book-name").forEach(t=>{t.style.maxWidth=this.titleMaxWidth+"px"})},200)):(this.listWidth=document.querySelector(".book-list").clientWidth,console.log(this.listWidth),this.titleMaxWidth=this.listWidth-510,setTimeout(()=>{document.querySelectorAll(".book-name").forEach(t=>{t.style.maxWidth=this.titleMaxWidth+"px"})},200)))}}},v=(s("78e9"),{components:{CartList:Object(b.a)(_,(function(){var t=this,a=t._self._c;return a("section",[t.skeletonLoading&&!t.mobile?a("BookListSkeleton",{staticClass:"mt14"}):t._e(),t.skeletonLoading&&t.mobile?a("BookListMobileSkeleton",{staticClass:"mt14"}):t._e(),t.cart.length>0?a("div",[t.skeletonLoading?t._e():a("section",[t.mobile?t._e():a("article",{staticClass:"cart-header"},[a("div",[t._v("품목정보")]),a("div",[t._v("ISBN")]),t._m(0),a("div",[t._v("공급가")]),a("div",[t._v("수량")]),a("div")]),a("article",{staticClass:"cart-list"},[a("ul",{staticClass:"book-list"},t._l(t.cart,(function(s,o){var d;return a("li",{key:s.isbn},[a("article",{staticClass:"d-flex align-center"},[a("div",{staticClass:"d-flex align-center thumbnail-wrap"},[a("div",{staticClass:"basic-info"},[a("div",{staticClass:"book-name"},[t._v(t._s(s.data.subject))]),a("div",{staticClass:"only-mobile"},[a("div",{staticClass:"author"},[t._v(t._s(s.data.author))])])])]),a("div",{staticClass:"isbn"},[t._v(t._s(s.data.isbn))]),a("div",{staticClass:"price-etc"},[a("div",{staticClass:"normal-price"},[t.mobile?a("span",[t._v("정가")]):t._e(),t._v(" "+t._s(null===(d=s.data.price)||void 0===d?void 0:d.toLocaleString())+"원")]),t.bookRate.some(t=>t.data.isbn===s.data.isbn&&""!==t.data.rate)?a("div",{staticClass:"rate"},t._l(t.bookRate,(function(e,i){return a("span",{key:i},[e.data.isbn===s.data.isbn?a("span",[t.mobile?a("span",[t._v("공급률")]):t._e(),t._v(" "+t._s(e.data.rate)+"% ")]):t._e()])})),0):t._e(),!t.bookRate.some(t=>t.data.isbn===s.data.isbn&&""!==t.data.rate)&&t.shopRate.some(t=>t.sid===s.data.sid&&""!==t.rate)?a("div",{staticClass:"rate"},t._l(t.shopRate,(function(e,i){return a("span",{key:i},[e.sid===s.data.sid&&""!==e.rate?a("span",[t.mobile?a("span",[t._v("공급률")]):t._e(),t._v(" "+t._s(e.rate)+"% ")]):t._e()])})),0):t._e(),t.bookRate.some(t=>t.data.isbn===s.data.isbn&&""!==t.data.rate)||t.shopRate.some(t=>t.sid===s.data.sid&&""!==t.rate)?t._e():a("div",{staticClass:"rate"},t._l(t.basicRate,(function(e,i){return a("span",{key:i},[s.data.sid===e.sid?a("span",[t.mobile?a("span",[t._v("공급률")]):t._e(),t._v(" "+t._s(e.supplyRate)+"%")]):t._e()])})),0)]),t.bookRate.some(t=>t.data.isbn===s.data.isbn&&""!==t.data.rate)?a("div",{staticClass:"price a"},t._l(t.bookRate,(function(e,i){return a("span",{key:i},[e.data.isbn===s.data.isbn?a("span",[t.mobile?a("span",[t._v("공급가")]):t._e(),t._v(" "+t._s(s.data.price&&(s.data.price*e.data.rate/100).toLocaleString())+"원 ")]):t._e()])})),0):t._e(),!t.bookRate.some(t=>t.data.isbn===s.data.isbn&&""!==t.data.rate)&&t.shopRate.some(t=>t.sid===s.data.sid&&""!==t.rate)?a("div",{staticClass:"price b"},t._l(t.shopRate,(function(e,i){return a("span",{key:i},[e.sid===s.data.sid&&""!==e.rate?a("span",[t.mobile?a("span",[t._v("공급가")]):t._e(),t._v(" "+t._s(s.data.price&&(s.data.price*e.rate/100).toLocaleString())+"원\n                  ")]):t._e()])})),0):t._e(),t.bookRate.some(t=>t.data.isbn===s.data.isbn&&""!==t.data.rate)||t.shopRate.some(t=>t.sid===s.data.sid&&""!==t.rate)?t._e():a("div",{staticClass:"price c"},t._l(t.basicRate,(function(e,i){return a("span",{key:i},[s.data.sid===e.sid?a("span",[t.mobile?a("span",[t._v("공급가")]):t._e(),t._v(" "+t._s(s.data.price&&(s.data.price*e.supplyRate/100).toLocaleString())+"원")]):t._e()])})),0),a("div",{staticClass:"btn"},[a(e.a,{attrs:{"return-value":t.cart[o].data.count,large:"","cancel-text":"취소","save-text":"저장"},on:{"update:returnValue":function(a){return t.$set(t.cart[o].data,"count",a)},"update:return-value":function(a){return t.$set(t.cart[o].data,"count",a)},save:function(a){return t.update(s.id,t.cart[o].data.count)}},scopedSlots:t._u([{key:"input",fn:function(){return[a("div",{staticClass:"mt-4 text-h6"},[t._v("수량변경")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.cart[o].data.count,expression:"cart[index].data.count"}],staticClass:"mt10",staticStyle:{"border-bottom":"1px solid #000"},attrs:{type:"number"},domProps:{value:t.cart[o].data.count},on:{input:function(a){a.target.composing||t.$set(t.cart[o].data,"count",a.target.value)}}})]},proxy:!0}],null,!0)},[a("div",{staticClass:"count"},[t._v(t._s(t.cart[o].data.count))])])],1),a("div",{staticClass:"status"},[a("button",{on:{click:function(a){return t.del(s.id)}}},[a(i.a,[t._v("mdi-close")])],1)])])])})),0)])]),a("section",{staticClass:"total-wrap mt24"},[a("div",{staticClass:"publisher"},[t._v(t._s(t.cart[0].data.publisher))]),a("div",[a("span",{staticClass:"total-prod"},[t._v("총 "+t._s(t.bookCount)+"권")]),a("span",{staticClass:"total"},[t._v("합계 "+t._s(t.totalPrice.toLocaleString())+"원")])]),a("button",{staticClass:"primary",on:{click:t.showModal}},[t._v("주문")])])]):t._e(),t.skeletonLoading||0!==t.cart.length?t._e():a("div",{staticClass:"alert"},[t._v("장바구니가 비었습니다.")]),a("Toast",{attrs:{status:t.status,message:t.message}})],1)}),[function(){var t=this._self._c;return t("div",[t("div",[this._v("정가")]),t("div",[this._v("공급률")])])}],!1,null,"7dbed2f0",null).exports}}),f=Object(b.a)(v,(function(){var t=this._self._c;return t("section",[t("h2",{staticClass:"sub-title"},[this._v("장바구니")]),t("section",{staticClass:"sub-container"},[t("CartList")],1)])}),[],!1,null,null,null);a.default=f.exports},cc0a:function(t,a,s){"use strict";s("4809")},e04e:function(t,a,s){}}]);