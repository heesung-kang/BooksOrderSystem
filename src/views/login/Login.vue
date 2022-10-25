<template>
  <div class="login-container">
    <div class="login-box">
      <h1>인스타북 로그인</h1>
      <!--      <form @submit.prevent="gotoMain"> 서브밋 임시 숨김처리-->
      <div class="mt30 field">
        <v-icon>mdi-account</v-icon>
        <input type="text" v-model="email" placeholder="아이디를 입력하세요." />
      </div>
      <div class="mt10 field">
        <v-icon>mdi-shield-key</v-icon>
        <input type="password" v-model="password" placeholder="비밀번호를 입력하세요." />
      </div>
      <!-- 로그인 임시 버튼 : API 연동 안됨 -->
      <button type="submit" class="btn-login mt25" @click="signIn">로그인 하기</button>
      <!-- 로그인 버튼 숨김 처리
        <button type="submit" class="btn-login mt25" :disabled="!username || !password" :class="{ dev: develop === true }">로그인 하기</button>-->
      <p class="error-message">{{ logMessage }}</p>
      <!--        <p @click="$store.commit('common/setLoading', true)">로딩 true</p>-->
      <!--        <p @click="$store.commit('common/setLoading', false)">로딩 false</p>-->
      <!--      </form>-->
    </div>
  </div>
</template>

<script>
import { saveCookie } from "@/utils/cookie";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "@/utils/db";
const auth = getAuth(app);
export default {
  data() {
    return {
      email: "",
      password: "",
      logMessage: "",
    };
  },
  methods: {
    signIn() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(userCredential => {
          // Signed in
          const user = userCredential.user;
          saveCookie("accessToken", user.accessToken);
          this.$router.push("/");
          // ...
        })
        .catch(error => {
          switch (error.code) {
            case "auth/invalid-email":
              this.logMessage = "이메일을 잘못 입력 하셨습니다.";
              break;
            case "auth/user-not-found":
              this.logMessage = "존재하지 않는 이메일 주소입니다.";
              break;
            case "auth/wrong-password":
              this.logMessage = "비밀번호를 잘못 입력 하셨습니다.";
              break;
            case "auth/too-many-requests":
              this.logMessage = "접속 시도를 너무 많이 하셨습니다.";
              break;
            default:
              this.logMessage = "이메일 혹은 비밀번호가 틀렸습니다.";
              break;
          }
        });
    },
    gotoMain() {
      console.log("login");
      //this.$router.push("/SearchOrder");
    },
  },
};
</script>
<style lang="scss" scoped>
.login-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("../../assets/images/bg.jpg");
  .login-box {
    background: #fff;
    border-radius: 10px;
    padding: 30px;
    width: 400px;
    @include boxshadow(0px, 3px, 6px, 0px, rgba(0, 0, 0, 0.05));
    .icon {
      width: 28px;
      vertical-align: -4px;
      margin-right: 10px;
    }
    .field {
      position: relative;
      .v-icon {
        position: absolute;
        top: 10px;
        left: 10px;
        color: rgb(226, 226, 226);
      }
    }
    h1 {
      text-align: center;
      .icon {
        vertical-align: -6px;
      }
    }
    input {
      height: 45px !important;
      width: 100%;
      border: 1px solid rgb(214, 214, 214);
      padding: 0 10px 0 40px;
      border-radius: 5px;
    }
    button {
      width: 100%;
      height: 50px;
      background: #035dba;
      color: #fff;
      border-radius: 5px;
      font-size: 1.8rem;
      &:disabled {
        background: #ccc;
      }
    }
    .flex-between {
      & a {
        color: rgb(51, 51, 51);
      }
    }
    .error-message {
      text-align: center;
      padding: 10px 0;
      color: red;
    }
  }
}
</style>
