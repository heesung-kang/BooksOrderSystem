<template>
  <div class="login-container">
    <div class="wrap">
      <h1>서점 회원가입</h1>
      <div class="mt10"><span class="require">*</span>서점명 : <input class="basic" v-model="shop" placeholder="서점명" type="text" /></div>
      <div class="mt5"><span class="require">*</span>ID : <input class="basic" v-model="email" placeholder="이메일 입력" type="text" /></div>
      <div class="mt5"><span class="require">*</span>PW : <input class="basic" v-model="password" placeholder="비밀번호는 6자리이상 입력" type="password" /></div>
      <div class="mt5"><span class="require">*</span>전화번호 : <input class="basic" v-model="tel" placeholder="전화번호" type="text" /></div>
      <div class="mt5">사업자번호 : <input class="basic" v-model="BN" placeholder="사업자번호" type="text" /></div>
      <div class="mt5">업태 : <input class="basic" v-model="business" placeholder="업태" type="text" /></div>
      <div class="mt5">종목 : <input class="basic" v-model="item" placeholder="종목" type="text" /></div>
      <div class="mt10 d-flex align-center">
        <span class="require">*</span>주소 : <input v-model="zip" placeholder="우편번호" type="text" class="basic zip" readonly /><button class="btn-zip" @click="showAddressModalPopup">
          주소 찾기
        </button>
      </div>
      <div class="mt2"><input class="basic" v-model="address1" type="text" readonly /></div>
      <div class="mt2"><input class="basic" v-model="address2" placeholder="나머지주소" type="text" /></div>
      <div class="btn-wrap"><button @click="userRegistration">가입</button><router-link to="/login" class="login">로그인</router-link></div>
    </div>
    <Toast :status="status" :message="message" />
  </div>
</template>

<script>
import AddressModal from "@/components/modal/ModalAddress";
import { getPopupOpt } from "@/utils/modal";
import { mapGetters } from "vuex";
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp, collection, query, getDocs } from "firebase/firestore";
import { app, db } from "@/utils/db";
import Toast from "@/components/common/Toast";
const auth = getAuth(app);
export default {
  name: "SignUp",
  components: { Toast },
  data() {
    return {
      email: "",
      password: "",
      shop: "",
      zip: "",
      address1: "",
      address2: "",
      publishers: [],
      message: "",
      status: false,
      tel: "",
      BN: "",
      business: "",
      item: "",
    };
  },
  computed: {
    ...mapGetters("common", ["mobile"]),
  },
  async created() {
    //출판사 Info 로드
    try {
      const q = query(collection(db, "publisherInfo"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach(doc => {
        this.publishers.push({ id: doc.id, data: doc.data() });
      });
    } catch (e) {
      console.log(e);
    }
  },
  methods: {
    userRegistration() {
      if (this.shop === "") {
        this.status = !this.status;
        this.message = "서점명을 입력해주세요.";
        return;
      }
      if (this.email === "") {
        this.status = !this.status;
        this.message = "이메일을 입력해주세요.";
        return;
      }
      if (this.password === "") {
        this.status = !this.status;
        this.message = "비밀번호를 입력해주세요.";
        return;
      }
      if (this.tel === "") {
        this.status = !this.status;
        this.message = "전화번호를 입력해주세요.";
        return;
      }
      if (this.address1 === "") {
        this.status = !this.status;
        this.message = "주소를 입력해주세요.";
        return;
      }
      if (this.address2 === "") {
        this.status = !this.status;
        this.message = "주소를 입력해주세요.";
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
                this.status = !this.status;
                this.message = error.message;
                this.$store.commit("common/setLoading", false);
              });
          })
          .catch(error => {
            this.status = !this.status;
            this.message = error.message;
            this.$store.commit("common/setLoading", false);
          });
      } catch (e) {
        console.log(e);
        this.$store.commit("common/setLoading", false);
      }
    },
    async addInfo() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password)
          .then(async userCredential => {
            // Signed in
            const { uid } = userCredential.user;
            //서점별 Rate 정보 업데이트
            const rate = [];
            const payType = [];
            this.publishers.forEach(ele => {
              rate.push({ sid: ele.data.sid, rate: "" });
              payType.push({ sid: ele.data.sid, payType: 0 });
            });
            await setDoc(doc(db, "shopInfo", uid), {
              email: this.email,
              shop: this.shop,
              zip: this.zip,
              address1: this.address1,
              address2: this.address2,
              tel: this.tel,
              bn: this.BN,
              business: this.business,
              item: this.item,
              timestamp: serverTimestamp(),
              shopRate: rate,
              bookRate: [],
              payType: payType,
            });
            this.$store.commit("common/setLoading", false);
            this.status = !this.status;
            this.message = "정상 가입 되셨습니다.";
            this.$router.push("/Login");
          })
          .catch(error => {
            console.log(error);
            this.$store.commit("common/setLoading", false);
          });
      } catch (e) {
        console.log(e);
        this.$store.commit("common/setLoading", false);
      }
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
      background: #48c0c1;
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
.require {
  color: red;
}
</style>
