<template>
  <!-- 장바구니 리스트 -->
  <section>
    <!-- skeleton -->
    <BookListSkeleton v-if="skeletonLoading && !mobile" class="mt14" />
    <BookListMobileSkeleton v-if="skeletonLoading && mobile" class="mt14" />
    <!-- //skeleton -->
    <div v-if="cart.length > 0">
      <section v-if="!skeletonLoading">
        <article class="cart-header" v-if="!mobile">
          <div>품목정보</div>
          <div>ISBN</div>
          <div>
            <div>정가</div>
            <div>공급률</div>
          </div>
          <div>공급가</div>
          <div>수량</div>
          <div></div>
        </article>
        <article class="cart-list">
          <ul class="book-list">
            <li v-for="(book, index) in cart" :key="book.isbn">
              <article class="d-flex align-center">
                <div class="d-flex align-center thumbnail-wrap">
                  <div class="basic-info">
                    <div class="book-name">{{ book.data.subject }}</div>
                    <div class="only-mobile">
                      <div class="author">{{ book.data.author }}</div>
                    </div>
                  </div>
                </div>
                <div class="isbn">{{ book.data.isbn }}</div>
                <div class="price-etc">
                  <div class="normal-price"><span v-if="mobile">정가</span> {{ book.data.price?.toLocaleString() }}원</div>
                  <!-- 서적별 공급률 -->
                  <div v-if="bookRate.some(v => v.data.isbn === book.data.isbn && v.data.rate !== '')" class="rate">
                    <span v-for="(rate, index) in bookRate" :key="index">
                      <span v-if="rate.data.isbn === book.data.isbn"> <span v-if="mobile">공급률</span> {{ rate.data.rate }}% </span>
                    </span>
                  </div>
                  <!-- 상점별 공급률 -->
                  <div v-if="!bookRate.some(v => v.data.isbn === book.data.isbn && v.data.rate !== '') && shopRate.some(v => v.sid === book.data.sid && v.rate !== '')" class="rate">
                    <span v-for="(rate, index) in shopRate" :key="index">
                      <span v-if="rate.sid === book.data.sid && rate.rate !== ''"> <span v-if="mobile">공급률</span> {{ rate.rate }}% </span>
                    </span>
                  </div>
                  <!-- 기본 공급률 -->
                  <div v-if="!bookRate.some(v => v.data.isbn === book.data.isbn && v.data.rate !== '') && !shopRate.some(v => v.sid === book.data.sid && v.rate !== '')" class="rate">
                    <span v-for="(rate, index) in basicRate" :key="index">
                      <span v-if="book.data.sid === rate.sid"><span v-if="mobile">공급률</span> {{ rate.supplyRate }}%</span>
                    </span>
                  </div>
                </div>
                <!-- 서적별 공급률 -->
                <div v-if="bookRate.some(v => v.data.isbn === book.data.isbn && v.data.rate !== '')" class="price a">
                  <span v-for="(rate, index) in bookRate" :key="index">
                    <span v-if="rate.data.isbn === book.data.isbn"> <span v-if="mobile">공급가</span> {{ book.data.price && ((book.data.price * rate.data.rate) / 100).toLocaleString() }}원 </span>
                  </span>
                </div>
                <!-- 상점별 공급률 -->
                <div v-if="!bookRate.some(v => v.data.isbn === book.data.isbn && v.data.rate !== '') && shopRate.some(v => v.sid === book.data.sid && v.rate !== '')" class="price b">
                  <span v-for="(rate, index) in shopRate" :key="index">
                    <span v-if="rate.sid === book.data.sid && rate.rate !== ''">
                      <span v-if="mobile">공급가</span> {{ book.data.price && ((book.data.price * rate.rate) / 100).toLocaleString() }}원
                    </span>
                  </span>
                </div>
                <!-- 기본 공급률 -->
                <div v-if="!bookRate.some(v => v.data.isbn === book.data.isbn && v.data.rate !== '') && !shopRate.some(v => v.sid === book.data.sid && v.rate !== '')" class="price c">
                  <span v-for="(rate, index) in basicRate" :key="index">
                    <span v-if="book.data.sid === rate.sid"><span v-if="mobile">공급가</span> {{ book.data.price && ((book.data.price * rate.supplyRate) / 100).toLocaleString() }}원</span>
                  </span>
                </div>

                <div class="btn">
                  <v-edit-dialog :return-value.sync="cart[index].data.count" large @save="update(book.id, cart[index].data.count)" cancel-text="취소" save-text="저장">
                    <div class="count">{{ cart[index].data.count }}</div>
                    <template v-slot:input>
                      <div class="mt-4 text-h6">수량변경</div>
                      <input v-model="cart[index].data.count" type="number" class="mt10" style="border-bottom: 1px solid #000" />
                    </template>
                  </v-edit-dialog>
                </div>
                <div class="status">
                  <button @click="del(book.id)"><v-icon>mdi-close</v-icon></button>
                </div>
              </article>
            </li>
          </ul>
        </article>
      </section>
      <!-- //장바구니 리스트 -->
      <!-- 총 합계 --->
      <section class="total-wrap mt24">
        <div class="publisher">{{ cart[0].data.publisher }}</div>
        <div>
          <span class="total-prod">총 {{ bookCount }}권</span>
          <span class="total">합계 {{ totalPrice.toLocaleString() }}원</span>
        </div>
        <button class="primary" @click="showModal">주문</button>
      </section>
    </div>
    <!-- //총 합계 --->
    <!-- 카트가 비었을경우 -->
    <div class="alert" v-if="!skeletonLoading && cart.length === 0">장바구니가 비었습니다.</div>
    <!-- //카트가 비었을경우 -->
    <Toast :status="status" :message="message" />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { collection, getDocs, query, doc, updateDoc, deleteDoc, getDoc } from "firebase/firestore";
import { db } from "@/utils/db";
import { getCookie } from "@/utils/cookie";
import { getPopupOpt } from "@/utils/modal";
import BookListSkeleton from "@/skeletons/BookListSkeleton";
import BookListMobileSkeleton from "@/skeletons/BookListMobileSkeleton";
import ModalCart from "@/components/modal/ModalCart";
import Toast from "@/components/common/Toast";
export default {
  components: { BookListSkeleton, BookListMobileSkeleton, Toast },
  data() {
    return {
      cart: [],
      ids: [],
      shopRate: [],
      basicRate: [],
      bookRate: [],
      message: "",
      status: false,
      listWidth: 0,
      titleMaxWidth: 0,
    };
  },
  computed: {
    ...mapGetters("common", ["windowWidth", "mobile", "skeletonLoading"]),
    bookCount() {
      //총 권수 계산
      let count = 0;
      this.cart.forEach(ele => (count += Number(ele.data.count)));
      return count;
    },
    totalPrice() {
      //총 금액 계산
      let price = 0;
      this.cart.forEach(ele => {
        //서적별 공급률
        if (this.bookRate.some(v => v.data.isbn === ele.data.isbn && v.data.rate !== "")) {
          this.bookRate.forEach(elm => {
            if (ele.data.isbn === elm.data.isbn) {
              price += (ele.data.price * Number(elm.data.rate) * ele.data.count) / 100;
            }
          });
        }
        //상점별 공급률
        if (!this.bookRate.some(v => v.data.isbn === ele.data.isbn && v.data.rate !== "") && this.shopRate.some(v => v.sid === ele.data.sid && v.rate !== "")) {
          this.shopRate.forEach(elm => {
            if (ele.data.sid === elm.sid) {
              price += (ele.data.price * Number(elm.rate) * ele.data.count) / 100;
            }
          });
        }
        //기본 공급률
        if (!this.bookRate.some(v => v.data.isbn === ele.data.isbn && v.data.rate !== "") && !this.shopRate.some(v => v.sid === ele.data.sid && v.rate !== "")) {
          this.basicRate.forEach(elm => {
            if (ele.data.sid === elm.sid) {
              price += (ele.data.price * Number(elm.supplyRate) * ele.data.count) / 100;
            }
          });
        }
      });
      return price;
    },
  },
  async created() {
    const { uid } = getCookie("userInfo");
    this.uid = uid;
    this.$store.commit("common/setSkeleton", true);
    //서점별 공급률 로드
    try {
      const shopRef = doc(db, "shopInfo", this.uid);
      const docSnap = await getDoc(shopRef);
      this.shopRate = docSnap.data().shopRate;
      this.bookRate = docSnap.data().bookRate;
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    //출판사 기본 공급률 로드
    try {
      const first = query(collection(db, "publisherInfo"));
      const documentSnapshots = await getDocs(first);
      documentSnapshots.forEach(doc => {
        this.basicRate.push({ sid: doc.data().sid, supplyRate: doc.data().supplyRate });
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    await this.load();
  },
  mounted() {
    window.onresize = () => {
      this.setSize();
    };
  },
  methods: {
    //주문 모달
    showModal() {
      const { uid } = getCookie("userInfo");
      this.mobile
        ? this.$modal.show(ModalCart, { id: this.ids, cart: this.cart, uid }, getPopupOpt("ModalCart", "95%", "auto", false))
        : this.$modal.show(ModalCart, { id: this.ids, cart: this.cart, uid }, getPopupOpt("ModalCart", "500px", "auto", false));
    },
    async load() {
      //초기 장바구니 데이터 로드
      this.cart = []; //리로드시 초기화
      this.ids = [];
      try {
        const { uid } = getCookie("userInfo");
        this.$store.commit("common/setSkeleton", true);
        const first = query(collection(db, `cart-${uid}`));
        const documentSnapshots = await getDocs(first);
        documentSnapshots.forEach(doc => {
          this.cart.push({ id: doc.id, data: doc.data() });
          this.ids.push(doc.id);
        });
        //최종 공급률 init
        this.cart.forEach(ele => {
          //서적별 공급률
          if (this.bookRate.some(v => v.data.isbn === ele.data.isbn && v.data.rate !== "")) {
            this.bookRate.forEach(elm => {
              if (ele.data.isbn === elm.data.isbn) {
                ele.data.supply_rate = elm.data.rate;
              }
            });
          }
          //상점별 공급률
          if (!this.bookRate.some(v => v.data.isbn === ele.data.isbn && v.data.rate !== "") && this.shopRate.some(v => v.sid === ele.data.sid && v.rate !== "")) {
            this.shopRate.forEach(elm => {
              if (ele.data.sid === elm.sid) {
                ele.data.supply_rate = elm.rate;
              }
            });
          }
          //기본 공급률
          if (!this.bookRate.some(v => v.data.isbn === ele.data.isbn && v.data.rate !== "") && !this.shopRate.some(v => v.sid === ele.data.sid && v.rate !== "")) {
            this.basicRate.forEach(elm => {
              if (ele.data.sid === elm.sid) {
                ele.data.supply_rate = elm.supplyRate;
              }
            });
          }
        });
        setTimeout(() => {
          this.setSize();
        }, 200);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      this.$store.commit("common/setSkeleton", false);
    },
    //수량 변경
    async update(id, count) {
      try {
        const { uid } = getCookie("userInfo");
        this.$store.commit("common/setLoading", true);
        await updateDoc(doc(db, `cart-${uid}`, id), {
          count: parseInt(count),
        });
        this.status = !this.status;
        this.message = "수량이 변경 되었습니다";
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      this.$store.commit("common/setLoading", false);
    },
    async del(id) {
      //아이템 삭제
      this.cart = this.cart.filter(ele => {
        if (ele.id !== id) return ele;
      });
      try {
        const { uid } = getCookie("userInfo");
        await deleteDoc(doc(db, `cart-${uid}`, id));
        this.status = !this.status;
        this.message = "삭제 되었습니다";
        this.$store.commit("common/changeCartList", this.cart.length);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    setSize() {
      if (this.mobile) {
        this.listWidth = document.querySelector(".book-list").clientWidth;
        this.titleMaxWidth = this.listWidth;
        setTimeout(() => {
          const select = document.querySelectorAll(".book-name");
          select.forEach(ele => {
            ele.style.maxWidth = `${this.titleMaxWidth}px`;
          });
        }, 200);
      } else {
        this.listWidth = document.querySelector(".book-list").clientWidth;
        console.log(this.listWidth);
        this.titleMaxWidth = this.listWidth - 510;
        setTimeout(() => {
          const select = document.querySelectorAll(".book-name");
          select.forEach(ele => {
            ele.style.maxWidth = `${this.titleMaxWidth}px`;
          });
        }, 200);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.total-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  max-width: 451px;
  margin: 0 auto;
  border: 1px solid #000;
  padding: 15px 42px;
  .total-prod {
    @include NotoSans(1.6, 700, #000);
    margin-right: 48px;
  }
  .total {
    @include NotoSans(1.6, 700, #000);
  }
  button {
    @include NotoSans(1.6, 700, #fff);
  }
  .publisher {
    @include NotoSans(1.6, 700, #000);
  }
}
.cart-header {
  padding: 0 27px 0 21px;
  display: flex;
  div {
    text-align: center;
    @include NotoSans(1.6, 500, #000);
    margin-bottom: 3px;
    @extend .size;
  }
}
.cart-list {
  ul {
    li {
      padding: 10px 27px 10px 21px;
      background-color: #fff;
      margin-bottom: 6px;
      div {
        @include NotoSans(1.4, 400, #000);
        &.book-name {
          @include NotoSans(1.5, 500, #000);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .author,
      .isbn,
      .normal-price {
        @include NotoSans(1.4, 400, #888);
      }
      &:last-child {
        margin-bottom: 0;
      }
      article {
        & > div {
          text-align: center;
          @include NotoSans(1.4, 400, #000);
          @extend .size;
          &.price {
            @include NotoSans(1.4, 700, #000);
          }
          &.status {
            display: flex;
            justify-content: center;
            input[type="number"] {
              width: 50px;
            }
            button {
              margin-left: 5px;
              padding: 0 5px;
            }
          }
          &.btn {
            .count {
              border: 1px solid #000;
              border-radius: 1px;
              padding: 0 10px;
            }
          }
        }
      }
      .basic-info {
        div {
          text-align: left;
        }
      }
    }
  }
}
.alert {
  @include NotoSans(1.6, 500, #000);
  text-align: center;
}
.size {
  &:nth-child(1) {
    width: calc(100% - 454px);
  }
  &:nth-child(2) {
    width: 120px;
  }
  &:nth-child(3) {
    width: 150px;
    display: flex;
    div {
      &:nth-child(1) {
        width: 120px;
      }
      &:nth-child(2) {
        width: 70px;
      }
    }
  }
  &:nth-child(4) {
    width: 100px;
  }
  &:nth-child(5) {
    width: 50px;
  }
  &:nth-child(6) {
    width: 34px;
  }
}
@include mobile {
  .cart-list {
    ul {
      li {
        padding: 19px 18px;
        position: relative;
        article {
          flex-direction: column;
          align-items: flex-start !important;
          .thumbnail-wrap {
            width: 100% !important;
            align-items: flex-start !important;
            .basic-info {
              width: calc(100% - 15px);
              .book-name {
                @include NotoSans(1.6, 500, #000);
              }
              .only-mobile {
                display: flex;
                flex-wrap: wrap;
                .author {
                  margin-right: 30px;
                }
              }
            }
          }
          .isbn {
            text-align: left;
          }
          .price-etc {
            display: flex;
            flex-wrap: wrap;
            div {
              white-space: nowrap;
              &.normal-price {
                margin-right: 30px;
                width: auto !important;
                white-space: nowrap;
              }
            }
          }
          .price {
            margin: 10px 0 0 0px;
            font-size: 1.6rem !important;
            font-weight: 700 !important;
            white-space: nowrap;
          }
          .btn {
            margin: 20px 0 0 0;
            width: auto !important;
          }
          .status {
            position: absolute;
            top: 15px;
            right: 0px;
            margin: 5px 0 0 6px;
          }
        }
      }
    }
  }
  .total-wrap {
    background-color: #fff;
    max-width: 100%;
    padding: 15px 20px;
    .total-prod {
      @include NotoSans(1.6, 700, #000);
      margin-right: 28px;
    }
    .total {
      @include NotoSans(1.6, 700, #000);
    }
    button {
      @include NotoSans(1.6, 700, #fff);
    }
  }
}
</style>
