(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6ea7d8a0"],{6401:function(e,s,t){"use strict";t("8903")},8903:function(e,s,t){},ede4:function(e,s,t){"use strict";t.r(s);var a=t("132d"),o=(t("14d9"),t("f3e4")),i=t("ea7b"),n=t("e31c");const c=Object(i.b)(n.a);var l={data:()=>({email:"",password:"",logMessage:""}),methods:{async signIn(){try{this.$store.commit("common/setLoading",!0),await Object(i.d)(c,this.email,this.password).then(async e=>{const s=e.user,t=s.displayName.split("-");2===Number(t[1])?alert("서점회원으로 가입해주세요."):(Object(o.c)("userInfo",{uid:s.uid,name:t[0],email:s.email,type:Number(t[1])}),Object(o.c)("accessToken",s.accessToken),this.$router.push("/"))}).catch(e=>{switch(e.code){case"auth/invalid-email":this.logMessage="이메일을 잘못 입력 하셨습니다.";break;case"auth/user-not-found":this.logMessage="존재하지 않는 이메일 주소입니다.";break;case"auth/wrong-password":this.logMessage="비밀번호를 잘못 입력 하셨습니다.";break;case"auth/too-many-requests":this.logMessage="접속 시도를 너무 많이 하셨습니다.";break;default:this.logMessage="이메일 혹은 비밀번호가 틀렸습니다."}})}catch(e){console.log(e)}this.$store.commit("common/setLoading",!1)}}},r=(t("6401"),t("2877")),u=Object(r.a)(l,(function(){var e=this,s=e._self._c;return s("div",{staticClass:"login-container"},[s("div",{staticClass:"login-box"},[s("h1",[e._v("인스타북 로그인")]),s("form",{on:{submit:function(s){return s.preventDefault(),e.signIn.apply(null,arguments)}}},[s("div",{staticClass:"mt30 field"},[s(a.a,[e._v("mdi-account")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"아이디를 입력하세요."},domProps:{value:e.email},on:{input:function(s){s.target.composing||(e.email=s.target.value)}}})],1),s("div",{staticClass:"mt10 field"},[s(a.a,[e._v("mdi-shield-key")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"비밀번호를 입력하세요."},domProps:{value:e.password},on:{input:function(s){s.target.composing||(e.password=s.target.value)}}})],1),s("button",{staticClass:"btn-login mt25",attrs:{type:"submit"},on:{click:e.signIn}},[e._v("로그인 하기")]),s("p",{staticClass:"error-message"},[e._v(e._s(e.logMessage))])])])])}),[],!1,null,"56c5b886",null);s.default=u.exports}}]);