(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-62476b1e"],{"2bb3":function(s,t,e){"use strict";e.r(t);e("14d9");var a=e("dfe2"),i=e("68e0"),o=e("2f62"),d=e("ea7b"),n=e("e71f"),l=e("e31c");const c=Object(d.c)(l.a);var r={name:"SignUp",data:()=>({email:"",password:"",shop:"",zip:"",address1:"",address2:"",publishers:[]}),computed:{...Object(o.b)("common",["mobile"])},async created(){try{const s=Object(n.j)(Object(n.b)(l.b,"publisherInfo"));(await Object(n.f)(s)).forEach(s=>{this.publishers.push({id:s.id,data:s.data()})})}catch(s){console.log(s)}},methods:{userRegistration(){if(""!==this.shop)if(""!==this.email)if(""!==this.password)if(""!==this.address1)if(""!==this.address2)try{this.$store.commit("common/setLoading",!0),Object(d.b)(c,this.email,this.password).then(()=>{Object(d.i)(Object(d.c)().currentUser,{displayName:this.shop+"-3"}).then(()=>{this.addInfo()}).catch(s=>{alert(s.message)})}).catch(s=>{alert(s.message)})}catch(s){console.log(s),this.$store.commit("common/setLoading",!1)}else alert("주소를 입력해주세요.");else alert("주소를 입력해주세요.");else alert("비밀번호를 입력해주세요.");else alert("이메일을 입력해주세요.");else alert("서점명을 입력해주세요.")},async addInfo(){try{await Object(d.f)(c,this.email,this.password).then(async s=>{const{uid:t}=s.user,e=[];this.publishers.forEach(s=>{e.push({sid:s.data.sid,rate:""})}),console.log(e),await Object(n.l)(Object(n.d)(l.b,"shopInfo",t),{email:this.email,shop:this.shop,zip:this.zip,address1:this.address1,address2:this.address2,timestamp:Object(n.k)(),shopRate:e,bookRate:[]}),this.$store.commit("common/setLoading",!1),alert("정상 가입 되셨습니다."),this.$router.push("/Login")}).catch(s=>{console.log(s),this.$store.commit("common/setLoading",!1)})}catch(s){console.log(s),this.$store.commit("common/setLoading",!1)}},showAddressModalPopup(){this.mobile?this.$modal.show(a.a,{updateZip:this.updateZip},Object(i.a)("AddressModal","95%","auto",!1)):this.$modal.show(a.a,{updateZip:this.updateZip},Object(i.a)("AddressModal","600px","auto",!1))},updateZip(s){this.address1=s.addr1,this.zip=s.zip}}},p=(e("e471"),e("2877")),m=Object(p.a)(r,(function(){var s=this,t=s._self._c;return t("div",{staticClass:"login-container"},[t("div",{staticClass:"wrap"},[t("h1",[s._v("서점 회원가입")]),t("div",{staticClass:"mt10"},[s._v("서점명 : "),t("input",{directives:[{name:"model",rawName:"v-model",value:s.shop,expression:"shop"}],staticClass:"basic",attrs:{placeholder:"서점명",type:"text"},domProps:{value:s.shop},on:{input:function(t){t.target.composing||(s.shop=t.target.value)}}})]),t("div",{staticClass:"mt5"},[s._v("ID : "),t("input",{directives:[{name:"model",rawName:"v-model",value:s.email,expression:"email"}],staticClass:"basic",attrs:{placeholder:"이메일 입력",type:"text"},domProps:{value:s.email},on:{input:function(t){t.target.composing||(s.email=t.target.value)}}})]),t("div",{staticClass:"mt5"},[s._v("PW : "),t("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],staticClass:"basic",attrs:{placeholder:"비밀번호는 6자리이상 입력",type:"password"},domProps:{value:s.password},on:{input:function(t){t.target.composing||(s.password=t.target.value)}}})]),t("div",{staticClass:"mt10 d-flex align-center"},[s._v("\n      주소 : "),t("input",{directives:[{name:"model",rawName:"v-model",value:s.zip,expression:"zip"}],staticClass:"basic zip",attrs:{placeholder:"우편번호",type:"text",readonly:""},domProps:{value:s.zip},on:{input:function(t){t.target.composing||(s.zip=t.target.value)}}}),t("button",{staticClass:"btn-zip",on:{click:s.showAddressModalPopup}},[s._v("\n        주소 찾기\n      ")])]),t("div",{staticClass:"mt2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.address1,expression:"address1"}],staticClass:"basic",attrs:{type:"text",readonly:""},domProps:{value:s.address1},on:{input:function(t){t.target.composing||(s.address1=t.target.value)}}})]),t("div",{staticClass:"mt2"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.address2,expression:"address2"}],staticClass:"basic",attrs:{placeholder:"나머지주소",type:"text"},domProps:{value:s.address2},on:{input:function(t){t.target.composing||(s.address2=t.target.value)}}})]),t("div",{staticClass:"btn-wrap"},[t("button",{on:{click:s.userRegistration}},[s._v("가입")]),t("router-link",{staticClass:"login",attrs:{to:"/login"}},[s._v("로그인")])],1)])])}),[],!1,null,"0e420ce2",null);t.default=m.exports},4809:function(s,t,e){},"68e0":function(s,t,e){"use strict";e.d(t,"a",(function(){return a}));const a=function(s,t,e,a){return{name:s,width:t,height:e,resizable:a,clickToClose:!1,draggable:".popup-title",scrollable:!0}}},7402:function(s,t,e){"use strict";var a=e("132d"),i={methods:{close(){this.$emit("close")}}},o=(e("cc0a"),e("2877")),d=Object(o.a)(i,(function(){var s=this._self._c;return s("div",{staticClass:"modal-wrap"},[s("div",{staticClass:"close",on:{click:this.close}},[s(a.a,[this._v("mdi-window-close")])],1),this._t("head"),s("div",{staticClass:"line"}),s("div",{staticClass:"body"},[this._t("body")],2),this._t("footer")],2)}),[],!1,null,"1c84da6b",null);t.a=d.exports},"7def":function(s,t,e){},cc0a:function(s,t,e){"use strict";e("4809")},dfe2:function(s,t,e){"use strict";var a={components:{modalWrap:e("7402").a},data:()=>({zip:"",addr1:"",sido:"",sigungu:"",bname:""}),watch:{zip(){this.$attrs.updateZip({zip:this.zip,addr1:this.addr1,sido:this.sido,sigungu:this.sigungu,dong:this.bname}),this.$emit("close")}},mounted(){this.showApi()},methods:{showApi(){new window.daum.Postcode({width:"100%",oncomplete:s=>{let t=s.roadAddress,e="";""!==s.bname&&/[동|로|가]$/g.test(s.bname)&&(e+=s.bname),""!==s.buildingName&&"Y"===s.apartment&&(e+=""!==e?", "+s.buildingName:s.buildingName),""!==e&&(e=" ("+e+")"),""!==t&&(t+=e),this.zip=s.zonecode,this.addr1=t,this.sido=s.sido,this.sigungu=s.sigungu,this.bname=s.bname}}).embed(this.$refs.embed)},close(){this.$emit("close")}}},i=e("2877"),o=Object(i.a)(a,(function(){var s=this._self._c;return s("modalWrap",{on:{close:this.close}},[s("template",{slot:"head"},[s("h2",[this._v("주소찾기")])]),s("template",{slot:"body"},[s("div",{ref:"embed"})])],2)}),[],!1,null,null,null);t.a=o.exports},e471:function(s,t,e){"use strict";e("7def")}}]);