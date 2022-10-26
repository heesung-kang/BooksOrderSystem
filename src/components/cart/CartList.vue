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
          <div>출판사</div>
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
          <ul>
            <li v-for="(book, index) in cart" :key="book.isbn">
              <article class="d-flex align-center">
                <div class="d-flex align-center thumbnail-wrap">
                  <div class="basic-info">
                    <div class="book-name">{{ book.data.subject }}</div>
                    <div class="only-mobile">
                      <div class="author">{{ book.data.author }}</div>
                      <div v-if="mobile" class="company">{{ book.data.publisher }}</div>
                    </div>
                  </div>
                </div>
                <div v-if="!mobile">{{ book.data.publisher }}</div>
                <div class="isbn">{{ book.data.isbn }}</div>
                <div class="price-etc">
                  <div class="normal-price"><span v-if="mobile">정가</span> {{ book.data.price && book.data.price.toLocaleString() }}원</div>
                  <div class="rate"><span v-if="mobile">공급률</span> {{ book.data.supply_rate }}%</div>
                </div>
                <div class="price">
                  <span v-if="mobile">공급가</span
                  >{{ book.data.price && ((book.data.price * book.data.supply_rate * book.data.count) / 100).toLocaleString() }}원
                </div>
                <div class="btn">
                  <v-edit-dialog
                    :return-value.sync="cart[index].data.count"
                    large
                    @save="update(book.id, cart[index].data.count)"
                    cancel-text="취소"
                    save-text="저장"
                  >
                    <div>{{ cart[index].data.count }}</div>
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
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { collection, getDocs, query, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/utils/db";
import { getCookie } from "@/utils/cookie";
import { getPopupOpt } from "@/utils/modal";
import BookListSkeleton from "@/skeletons/BookListSkeleton";
import BookListMobileSkeleton from "@/skeletons/BookListMobileSkeleton";
import ModalCart from "@/components/modal/ModalCart";
export default {
  components: { BookListSkeleton, BookListMobileSkeleton },
  data() {
    return {
      cart: [],
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
        price += (ele.data.price * ele.data.supply_rate * ele.data.count) / 100;
      });
      return price;
    },
  },
  created() {
    this.load();
  },
  methods: {
    showModal() {
      this.mobile
        ? this.$modal.show(ModalCart, {}, getPopupOpt("ModalCart", "95%", "auto", false))
        : this.$modal.show(ModalCart, {}, getPopupOpt("ModalCart", "500px", "auto", false));
    },
    async load() {
      //초기 장바구니 데이터 로드
      this.cart = []; //리로드시 초기화
      try {
        const { uid } = getCookie("userInfo");
        this.$store.commit("common/setSkeleton", true);
        const first = query(collection(db, `cart-${uid}`));
        const documentSnapshots = await getDocs(first);
        documentSnapshots.forEach(doc => {
          this.cart.push({ id: doc.id, data: doc.data() });
        });
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
          count: count,
        });
        alert("수량이 변경 되었습니다");
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      this.$store.commit("common/setLoading", false);
    },
    async del(id) {
      //아이템 삭제
      try {
        const { uid } = getCookie("userInfo");
        this.$store.commit("common/setLoading", true);
        await deleteDoc(doc(db, `cart-${uid}`, id));
        alert("삭제 되었습니다");
        await this.load();
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      this.$store.commit("common/setLoading", false);
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
          @include NotoSans(1.6, 500, #000);
        }
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
        }
      }
      .basic-info {
        div {
          text-align: left;
        }
        .author {
          @include NotoSans(1.4, 400, #000);
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
    width: calc(100% - 300px);
  }
  &:nth-child(2) {
    width: 150px;
  }
  &:nth-child(3) {
    width: 120px;
  }
  &:nth-child(4) {
    width: 150px;
    display: flex;
    div {
      &:nth-child(1) {
        width: 80px;
      }
      &:nth-child(2) {
        width: 70px;
      }
    }
  }
  &:nth-child(5) {
    width: 100px;
  }
  &:nth-child(6) {
    width: 70px;
  }
  &:nth-child(7) {
    width: 50px;
  }
}
@include mobile {
  .cart-list {
    ul {
      li {
        padding: 19px 18px;
        article {
          flex-direction: column;
          align-items: flex-start !important;
          .thumbnail-wrap {
            width: 100% !important;
            align-items: flex-start !important;
            .basic-info {
              width: calc(100% - 60px);
              .book-name {
                @include NotoSans(1.6, 500, #000);
              }
              .only-mobile {
                display: flex;
                flex-wrap: wrap;
                .author {
                  margin-right: 30px;
                }
                div {
                  @include NotoSans(1.6, 400, #000);
                }
              }
            }
          }
          .isbn {
            @include NotoSans(1.6, 400, #000);
          }
          .price-etc {
            display: flex;
            flex-wrap: wrap;
            div {
              white-space: nowrap;
              @include NotoSans(1.6, 400, #000);
              &.normal-price {
                margin-right: 30px;
              }
            }
          }
          .price {
            margin: 10px 0 0 0px;
            font-size: 1.6rem !important;
            font-weight: 700 !important;
          }
          .btn {
            margin: 20px 0 0 0px;
          }
          .status {
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
