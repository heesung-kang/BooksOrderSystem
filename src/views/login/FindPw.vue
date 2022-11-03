<template>
  <div class="login-container">
    <div class="wrap">
      <h1>비밀번호 찾기</h1>
      <div class="mt10">이메일<input class="basic" v-model="email" placeholder="이메일을 입력해주세요." type="text" /></div>
      <div class="btn-wrap"><button @click="sendEmail">메일전송</button><router-link to="/login" class="login">로그인</router-link></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "@/utils/db";

export default {
  data() {
    return {
      email: "",
    };
  },
  computed: {
    ...mapGetters("common", ["mobile"]),
  },
  methods: {
    sendEmail() {
      const auth = getAuth(app);
      sendPasswordResetEmail(auth, this.email)
        .then(() => {
          alert("이메일을 발송했습니다.\n스팸 메일함도 확인해 주세요.");
          this.$router.push("/Login");
        })
        .catch(error => {
          if (error.message === "Firebase: Error (auth/user-not-found).") {
            alert("가입된 이메일이 아닙니다.\n이메일을 확인해주세요.");
            this.email = "";
          }
          console.log(error);
        });
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
  z-index: 100;
  background-color: #f5f5f5;
  .wrap {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    background-color: #fff;
    width: 300px;
    h1 {
      font-size: 1.6rem;
    }
  }
  input {
    border: 1px solid #000;
    padding: 0 10px;
    height: 30px;
    width: 100%;
    font-size: 1.4rem !important;
    &::placeholder {
      font-size: 1.4rem;
    }
    &.zip {
      width: 80px;
      margin-left: 3px;
    }
  }
  .btn-wrap {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    button {
      padding: 2px 15px;
      background: deepskyblue;
      color: #fff;
      font-size: 1.5rem;
      border-radius: 3px;
    }
    .login {
      background: #f4f4f4;
      border-radius: 3px;
      height: 26px;
      color: #333;
      line-height: 26px;
      margin-left: 5px;
      padding: 0 15px;
    }
  }
  .btn-zip {
    border: 1px solid #666;
    border-radius: 3px;
    height: 30px;
    margin-left: 5px;
    background: #f4f4f4;
    padding: 0 10px;
  }
}
</style>
