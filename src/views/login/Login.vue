<template>
  <div class="login-container">
    <div class="login-box">
      <h1>서점 로그인</h1>
      <form @submit.prevent="signIn">
        <div class="mt30 field">
          <v-icon>mdi-account</v-icon>
          <input type="text" v-model="email" placeholder="아이디를 입력하세요." />
        </div>
        <div class="mt10 field">
          <v-icon>mdi-shield-key</v-icon>
          <input type="password" v-model="password" placeholder="비밀번호를 입력하세요." />
        </div>
        <button type="submit" class="btn-login mt25">로그인</button>
        <p class="error-message">{{ logMessage }}</p>
        <article class="link-wrap d-flex justify-space-between">
          <a href="https://bookorder.instapay.kr/publisher/#/login" target="_blank">출판사 로그인</a>
          <div class="signup">
            <router-link to="/SignUp">회원가입</router-link> |&nbsp;
            <router-link to="/FindPw">비밀번호 찾기</router-link>
          </div>
        </article>
      </form>
    </div>
    <Toast :status="status" :message="message" />
  </div>
</template>

<script>
import { saveCookie } from "@/utils/cookie";
import { getAuth, signInWithEmailAndPassword, setPersistence, browserSessionPersistence } from "firebase/auth";
import { app } from "@/utils/db";
import Toast from "@/components/common/Toast";
const auth = getAuth(app);
export default {
  components: { Toast },
  data() {
    return {
      email: "",
      password: "",
      logMessage: "",
      message: "",
      status: false,
    };
  },
  methods: {
    async signIn() {
      try {
        this.$store.commit("common/setLoading", true);
        setPersistence(auth, browserSessionPersistence)
          .then(() => {
            return signInWithEmailAndPassword(auth, this.email, this.password)
              .then(async userCredential => {
                // Signed in
                const user = userCredential.user;
                const userName = user.displayName.split("-");
                //1:관리자, 2:출판사, 3:서점
                if (Number(userName[1]) !== 3) {
                  this.status = !this.status;
                  this.message = "서점회원이 아닙니다.";
                  this.$store.commit("common/setLoading", false);
                } else {
                  saveCookie("userInfo", { uid: user.uid, name: userName[0], email: user.email, type: Number(userName[1]) });
                  this.$router.push("/");
                }
                this.$store.commit("common/setLoading", false);
              })
              .catch(error => {
                this.$store.commit("common/setLoading", false);
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
          })
          .catch(error => {
            // Handle Errors here.
            console.log(error);
            this.$store.commit("common/setLoading", false);
          });
      } catch (e) {
        console.log(e);
        this.$store.commit("common/setLoading", false);
      }
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
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-color: #000;
  &:before {
    content: "";
    background-image: url("../../assets/images/bg.jpg");
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    opacity: 0.5;
  }
  .login-box {
    background: #fff;
    border-radius: 1px;
    padding: 30px;
    width: 400px;
    z-index: 1000;
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
      border-radius: 1px;
    }
    button {
      width: 100%;
      height: 50px;
      background: #48c0c1;
      color: #fff;
      border-radius: 1px;
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
    .link-wrap {
      a {
        color: #333;
      }
      .signup {
        text-align: right;
        a {
          color: #333;
        }
      }
    }
  }
}
</style>
