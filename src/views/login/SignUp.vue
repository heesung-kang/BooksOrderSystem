<template>
  <div class="login-container">
    <div class="wrap">
      <h1>서점 회원가입</h1>
      <div class="mt10">서점명 : <input class="basic" v-model="shop" placeholder="서점명" type="text" /></div>
      <div class="mt5">ID : <input class="basic" v-model="email" placeholder="이메일 입력" type="text" /></div>
      <div class="mt5">PW : <input class="basic" v-model="password" placeholder="비밀번호는 6자리이상 입력" type="password" /></div>
      <div class="mt10 d-flex align-center">
        주소 : <input v-model="zip" placeholder="우편번호" type="text" class="basic zip" readonly /><button
          class="btn-zip"
          @click="showAddressModalPopup"
        >
          주소 찾기
        </button>
      </div>
      <div class="mt2"><input class="basic" v-model="address1" type="text" readonly /></div>
      <div class="mt2"><input class="basic" v-model="address2" placeholder="나머지주소" type="text" /></div>
      <div class="btn-wrap"><button @click="userRegistration">가입</button></div>
    </div>
  </div>
</template>

<script>
import AddressModal from "@/components/modal/ModalAddress";
import { getPopupOpt } from "@/utils/modal";
import { mapGetters } from "vuex";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { app, db } from "@/utils/db";
const auth = getAuth(app);
export default {
  name: "SignUp",
  data() {
    return {
      email: "",
      password: "",
      shop: "",
      zip: "",
      address1: "",
      address2: "",
    };
  },
  computed: {
    ...mapGetters("common", ["mobile"]),
  },
  methods: {
    userRegistration() {
      if (this.shop === "") {
        alert("서점명을 입력해주세요.");
        return;
      }
      if (this.email === "") {
        alert("이메일을 입력해주세요.");
        return;
      }
      if (this.password === "") {
        alert("비밀번호를 입력해주세요.");
        return;
      }
      if (this.address2 === "") {
        alert("주소를 입력해주세요.");
        return;
      }
      try {
        this.$store.commit("common/setLoading", true);
        createUserWithEmailAndPassword(auth, this.email, this.password)
          .then(() => {
            updateProfile(getAuth().currentUser, {
              displayName: `${this.shop}-3`, //3:권한
            })
              .then(() => {
                this.addInfo();
              })
              .catch(error => {
                alert(error.message);
              });
          })
          .catch(error => {
            alert(error.message);
          });
      } catch (e) {
        console.log(e);
      }
      this.$store.commit("common/setLoading", false);
    },
    async addInfo() {
      this.$store.commit("common/setLoading", true);
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password)
          .then(async userCredential => {
            // Signed in
            const { uid } = userCredential.user;
            await setDoc(doc(db, "shopInfo", uid), {
              email: this.email,
              shop: this.shop,
              zip: this.zip,
              address1: this.address1,
              address2: this.address2,
              timestamp: serverTimestamp(),
            });
            alert("정상 가입 되셨습니다.");
            this.$router.push("/Login");
          })
          .catch(error => {
            console.log(error);
          });
      } catch (e) {
        console.log(e);
      }
      this.$store.commit("common/setLoading", false);
    },
    showAddressModalPopup() {
      this.mobile
        ? this.$modal.show(AddressModal, { updateZip: this.updateZip }, getPopupOpt("AddressModal", "95%", "auto", false))
        : this.$modal.show(AddressModal, { updateZip: this.updateZip }, getPopupOpt("AddressModal", "600px", "auto", false));
    },
    updateZip(data) {
      this.address1 = data.addr1;
      this.zip = data.zip;
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
    padding: 50px;
    background-color: #fff;
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
    button {
      margin-top: 10px;
      padding: 2px 15px;
      background: deepskyblue;
      color: #fff;
      font-size: 1.5rem;
      border-radius: 3px;
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
