<template>
  <section>
    <h3>출판사 정보</h3>
    <!-- 출판사 정보 테이블 -->
    <table class="info-tbl mt5">
      <colgroup>
        <col width="100" />
        <col width="*" />
      </colgroup>
      <tbody>
        <tr>
          <td>서점명</td>
          <td>
            <span v-if="!infoModify">{{ info.shop }}</span>
            <input type="text" v-model="infoTemp.shop" class="basic" v-else />
          </td>
        </tr>
        <tr>
          <td>아이디(이메일)</td>
          <td>{{ info.email }}</td>
          <!--     이메일 변경 숨김처리     <td>-->
          <!--            <span v-if="!infoModify">{{ info.email }}</span-->
          <!--            ><input type="text" v-model="infoTemp.email" class="basic" v-else />-->
          <!--          </td>-->
        </tr>
        <tr>
          <td>주소</td>
          <td>
            <span v-if="!infoModify">{{ info.address1 }} {{ info.address2 }}</span>
            <div v-else>
              <div><button class="basic xs" @click="showAddressModalPopup">주소찾기</button></div>
              <div class="mt5"><input type="text" v-model="infoTemp.address1" class="basic" readonly /></div>
              <div class="mt5"><input type="text" v-model="infoTemp.address2" class="basic" /></div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- //출판사 정보 테이블 -->

    <!-- 버튼 영역 -->
    <section>
      <div v-if="!infoModify" class="d-flex justify-end mt5"><button class="primary" @click="infoStatusChange">수정</button></div>
      <div v-else class="d-flex justify-end mt5">
        <button class="basic mr5" @click="cancel">취소</button>
        <button class="primary" @click="infoUpdate">확인</button>
      </div>
    </section>
    <!-- //버튼 영역 -->
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { getCookie } from "@/utils/cookie";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/utils/db";
import AddressModal from "@/components/modal/ModalAddress";
import { getPopupOpt } from "@/utils/modal";
import { getAuth, updateEmail } from "firebase/auth";
import { app } from "@/utils/db";
export default {
  name: "Distribution",
  data() {
    return {
      infoModify: false,
      uid: "",
      info: {},
      infoTemp: {},
      zip: "",
    };
  },
  computed: {
    ...mapGetters("common", ["mobile"]),
  },
  created() {
    const { uid } = getCookie("userInfo");
    this.uid = uid;
    this.load();
  },
  methods: {
    infoStatusChange() {
      this.infoModify = true;
    },
    cancel() {
      //정보 수정 취소
      this.infoModify = false;
      this.infoTemp = this.info;
    },
    async load() {
      //출판사 정보, 정산정보 불러오기
      try {
        this.$store.commit("common/setLoading", true);
        const docRef = doc(db, "shopInfo", this.uid);
        const docSnap = await getDoc(docRef);
        this.info = docSnap.data();
        this.infoTemp = docSnap.data();
        this.zip = docSnap.data().zip;
      } catch (e) {
        console.log(e);
      }
      this.$store.commit("common/setLoading", false);
    },
    async infoUpdate() {
      //출판사 정보 업데이트
      if (this.infoTemp.shop === "") {
        alert("출판사명을 입력해주세요");
        return;
      }
      if (this.infoTemp.shop === "") {
        alert("이메일(아이디)를 입력해주세요");
        return;
      }
      if (this.infoTemp.address1 === "") {
        alert("주소를 입력해주세요");
        return;
      }
      if (this.infoTemp.address2 === "") {
        alert("주소를 입력해주세요");
        return;
      }
      this.$store.commit("common/setLoading", true);
      this.infoModify = false;
      this.info = this.infoTemp;
      try {
        const updateRef = doc(db, "shopInfo", this.uid);
        await updateDoc(updateRef, {
          shop: this.infoTemp.shop,
          zip: this.zip,
          address1: this.infoTemp.address1,
          address2: this.infoTemp.address2,
          email: this.infoTemp.email,
        });
        const auth = getAuth(app);
        await updateEmail(auth.currentUser, this.infoTemp.email)
          .then(() => {
            this.$store.commit("common/setLoading", false);
          })
          .catch(error => {
            this.$store.commit("common/setLoading", false);
            console.log(error);
          });
        await this.load();
      } catch (e) {
        this.$store.commit("common/setLoading", false);
        console.log(e);
      }
    },
    showAddressModalPopup() {
      this.mobile
        ? this.$modal.show(AddressModal, { updateZip: this.updateZip }, getPopupOpt("AddressModal", "95%", "auto", false))
        : this.$modal.show(AddressModal, { updateZip: this.updateZip }, getPopupOpt("AddressModal", "600px", "auto", false));
    },
    updateZip(data) {
      this.infoTemp.address1 = data.addr1;
      this.zip = data.zip;
    },
  },
};
</script>

<style lang="scss" scoped>
h3 {
  font-size: 1.6rem;
}
.info-tbl {
  border-top: 1px solid #000000;
  tr {
    td {
      border-bottom: 1px solid #ccc;
      height: 40px;
      padding: 5px 0;
      &:nth-child(1) {
        font-weight: 700;
      }
      .xs {
        font-size: 1.4rem !important;
        padding: 0 10px !important;
      }
    }
  }
}
.cal-wrap {
  display: flex;
  article {
    width: 25%;
    div {
      border-bottom: 1px solid #ccc;
      height: 40px;
      line-height: 40px;
      text-align: center;
      padding: 0 10px;
      &:first-child {
        border-top: 1px solid #000000;
        font-weight: 700;
      }
    }
  }
}
button.primary {
  background-color: #000 !important;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.4rem;
  color: #fff;
}
@include mobile {
  .cal-wrap {
    flex-direction: column;
    article {
      width: 100%;
      display: flex;
      div {
        text-align: left;
        &:first-child {
          width: 90px;
          border-top: 0;
        }
        &:last-child {
          width: calc(100% - 90px);
        }
      }
      &:first-child {
        border-top: 1px solid #000000;
      }
    }
  }
}
</style>
