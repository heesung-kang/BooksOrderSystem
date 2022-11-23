<template>
  <section>
    <BookListSkeleton v-if="!mobile && skeletonLoading" />
    <BookListMobileSkeleton v-if="mobile && skeletonLoading" />
    <!-- 발주 내역 -->
    <section class="header d-flex" v-if="!mobile && !skeletonLoading">
      <div class="d-flex dual">
        <div>
          <v-checkbox v-model="selectedAll" :disabled="books[0]?.data.shop_order_status !== 1" v-if="books[0]?.data.shop_order_status < 3"></v-checkbox>
        </div>
        <div>품목정보</div>
      </div>
      <div>ISBN</div>
      <div class="d-flex">
        <div>정가</div>
        <div>공급률</div>
      </div>
      <div>공급가</div>
      <div>주문</div>
      <div>공급</div>
    </section>
    <ul class="body">
      <li class="d-flex align-center" v-for="(book, index) in books" :key="index" :class="{ none: book.data.shop_order_status > 2 && book.data.order_check === false }">
        <div class="d-flex align-center info-wrap ck-wrap">
          <div class="ck-box">
            <v-checkbox :input-value="book.data.order_check" disabled v-if="books[0]?.data.shop_order_status >= 3"></v-checkbox>
            <v-checkbox v-model="selected" :value="book.id" :disabled="books[0]?.data.shop_order_status !== 1 || book.data.reply_count === 0" v-else></v-checkbox>
          </div>
          <div class="book-info">
            <h3>{{ book.data.subject }}</h3>
            <div class="author">{{ book.data.author }}</div>
          </div>
        </div>
        <div class="isbn">{{ book.data.isbn }}</div>
        <div class="d-flex price-info">
          <div class="normal-price"><span v-if="mobile">정가</span> {{ book.data.price?.toLocaleString() }}</div>
          <div><span v-if="mobile">공급률</span> {{ book.data.supply_rate }}%</div>
        </div>
        <div class="final-price"><span v-if="mobile">공급가</span> {{ ((book.data.price * book.data.supply_rate) / 100).toLocaleString() }} 원</div>
        <div class="count"><span v-if="mobile">주문</span> {{ book.data.count }}</div>
        <div class="count">
          <span v-if="mobile">공급</span>
          <span :class="{ warning: book.data.count !== book.data.reply_count && book.data.shop_order_status !== 0 }">{{ book.data.reply_count === null ? "-" : book.data.reply_count }}</span>
        </div>
      </li>
    </ul>
    <!-- //발주 내역 -->
    <!-- 메모 -->
    <section class="memo" v-if="books[0]?.data.memo !== null && books[0]?.data.memo !== '' && books.length !== 0">
      <h4>메모</h4>
      <div>{{ books[0]?.data.memo }}</div>
    </section>
    <!-- //메모 -->
    <!-- 총 합계 --->
    <section class="total-wrap mt24" v-if="!skeletonLoading">
      <div>
        <span class="total-prod"
          >총 <span v-if="this.books[0].data.shop_order_status === 0">{{ bookCount }}</span>
          <span v-if="this.books[0].data.shop_order_status === 1">{{ checkCount }}</span>
          <span v-if="this.books[0].data.shop_order_status >= 3">{{ this.books[0].data.totalCount }}</span
          >권</span
        >
        <span class="total"
          >합계 <span v-if="this.books[0].data.shop_order_status === 0">{{ totalPrice.toLocaleString() }}</span
          ><span v-if="this.books[0].data.shop_order_status === 1">{{ checkPrice.toLocaleString() }}</span
          ><span v-if="this.books[0].data.shop_order_status >= 3">{{ this.books[0].data.totalPrice.toLocaleString() }}</span
          >원</span
        >
      </div>
      <button class="primary" @click="order" :disabled="books[0]?.data.shop_order_status !== 1">발주</button>
    </section>
    <!-- //총 합계 --->
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import { getCookie } from "@/utils/cookie";
import { collection, getDocs, query, where, writeBatch, doc, serverTimestamp } from "firebase/firestore";
import { db } from "@/utils/db";
import BookListSkeleton from "@/skeletons/BookListSkeleton";
import BookListMobileSkeleton from "@/skeletons/BookListMobileSkeleton";
import qrCreateMixin from "@/mixins/qrCreate";
import ModalOrder from "@/components/modal/ModalOrder";
import { getPopupOpt } from "@/utils/modal";
import isMobile from "@/utils/isMobile";
export default {
  components: { BookListMobileSkeleton, BookListSkeleton },
  mixins: [qrCreateMixin],
  props: ["id", "orderTimeId"],
  data() {
    return {
      books: [],
      selected: [],
      selectedAll: false,
      allID: [],
      checkCount: 0,
      checkPrice: 0,
      buyList: [],
      buyId: [],
      uid: "",
    };
  },
  computed: {
    ...mapGetters("common", ["windowWidth", "mobile", "skeletonLoading"]),
    bookCount() {
      //총 권수 계산
      if (this.books[0].data.shop_order_status === 0) {
        let count = 0;
        this.books.forEach(ele => (count += Number(ele.data.count)));
        return count;
      }
      return 0;
    },
    totalPrice() {
      //총 금액 계산
      let price = 0;
      this.books.forEach(ele => {
        price += (ele.data.price * Number(ele.data.supply_rate) * ele.data.count) / 100;
      });
      return price;
    },
  },
  watch: {
    selected() {
      //회신후 체크박스 선택시 권수, 가격 계산
      if (this.books[0].data.shop_order_status === 1) {
        this.checkCount = 0;
        this.checkPrice = 0;
        this.books.forEach(ele => {
          if (this.selected.includes(ele.id)) {
            this.checkCount += ele.data.reply_count;
            //상점별 공급률 설정
            this.checkPrice += (ele.data.price * ele.data.supply_rate * ele.data.reply_count) / 100;
          }
        });
      }
      this.allID.length === this.selected.length ? (this.selectedAll = true) : (this.selectedAll = false); //전체체크 연동
    },
    selectedAll(n) {
      //전체체크
      if (n) {
        this.selected = this.allID;
      } else {
        if (this.allID.length === this.selected.length) {
          this.selected = [];
        }
      }
    },
  },
  created() {
    this.load();
  },
  mounted() {
    const { uid } = getCookie("userInfo");
    this.uid = uid;
  },
  methods: {
    async load() {
      try {
        this.books = [];
        this.allID = [];
        this.$store.commit("common/setSkeleton", true);
        const { uid } = getCookie("userInfo");
        const first = query(collection(db, "orderRequest"), where("uid", "==", uid), where("sid", "==", Number(this.id)), where("order_time_id", "==", this.orderTimeId));
        const documentSnapshots = await getDocs(first);
        documentSnapshots.forEach(doc => {
          this.books.push({ id: doc.id, data: doc.data() });
          if (doc.data().reply_count !== 0) {
            this.allID.push(doc.id);
          }
        });
      } catch (e) {
        console.log(e);
      }
      this.$store.commit("common/setSkeleton", false);
    },
    //발주
    async order() {
      if (this.checkCount === 0) {
        alert("책을 선택해 주세요");
        return;
      }
      this.buyList = [];
      this.buyId = [];
      this.books.forEach(ele => {
        if (this.selected.includes(ele.id)) {
          this.buyList.push(ele.data.subject);
          this.buyId.push(ele.id);
        }
      });
      isMobile()
        ? this._open({ productName: this.buyList.join(","), productAmount: this.checkPrice, ttl: 20 })
        : this.$modal.show(ModalOrder, { book: this.buyList, price: this.checkPrice, update: this.paidComplete, close: this._stop }, getPopupOpt("ModalOrder", "500px", "auto", false));
    },
    //결재완료
    async paidComplete() {
      const batch = writeBatch(db);
      try {
        const timestamp = serverTimestamp();
        await this.books.forEach(ele => {
          const docRef = doc(db, "orderRequest", ele.id);
          batch.update(docRef, {
            shop_order_status: 3,
            order_real_time_id: this.$date().format("YYYYMMDDHHmmss"),
            order_real_time: timestamp,
            totalPrice: this.checkPrice,
            totalCount: this.checkCount,
          });
        });
        await this.buyId.forEach(ele => {
          const docRef = doc(db, "orderRequest", ele);
          batch.update(docRef, {
            order_check: true,
          });
        });
        await batch.commit();
        await this.load();
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 5px 13px;
  & > div {
    text-align: center;
    font-size: 1.6rem;
    @extend .size;
  }
  .dual {
    div {
      &:nth-child(1) {
        text-align: left;
        width: 80px;
      }
      &:nth-child(2) {
        text-align: center;
        width: calc(100% - 80px);
      }
    }
  }
}
.body {
  li {
    background-color: #fff;
    padding: 5px 13px;
    margin-bottom: 6px;
    & > div {
      text-align: center;
      @extend .size;
      .book-info {
        margin-left: 8px;
        h3 {
          @include NotoSans(1.6, 500, #000);
        }
        .author {
          text-align: left;
          @include NotoSans(1.4, 400, #000);
        }
      }
      &.final-price {
        @include NotoSans(1.4, 700, #000);
      }
      &.count {
        .warning {
          color: red !important;
          background-color: #fff !important;
          font-weight: 700 !important;
        }
      }
    }
    &.none {
      h3 {
        color: #989898 !important;
        text-decoration: line-through;
      }
      div {
        color: #989898 !important;
        text-decoration: line-through;
        &.ck-wrap {
          text-decoration: none;
          div {
            text-decoration: none;
          }
          .author {
            text-decoration: line-through !important;
          }
        }
        .warning {
          color: #989898 !important;
          text-decoration: line-through;
        }
      }
    }
  }
}
.memo {
  h4 {
    @include NotoSans(1.6, 500, #000);
  }
  @include NotoSans(1.4, 400, #000);
  margin-top: 5px;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
}
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
    @include NotoSans(1.4, 700, #fff);
  }
}
.size {
  &:nth-child(1) {
    width: calc(100% - 360px);
  }
  &:nth-child(2) {
    width: 120px;
  }
  &:nth-child(3) {
    width: 160px;
    & > div {
      &:nth-child(1) {
        width: 80px;
      }
      &:nth-child(2) {
        width: 80px;
      }
    }
  }
  &:nth-child(4) {
    width: 80px;
  }
  &:nth-child(5) {
    width: 60px;
  }
  &:nth-child(6) {
    width: 60px;
  }
}
@include mobile {
  .body {
    li {
      padding: 19px 18px;
      flex-direction: column;
      align-items: flex-start !important;
      div {
        font-size: 1.6rem;
        .ck-box {
          margin-top: 2px;
        }
      }
      .info-wrap {
        width: 100% !important;
        align-items: flex-start !important;
        .book-info {
          width: 100%;
          h3 {
            text-align: left;
          }
        }
      }
      .isbn {
        margin-left: 30px;
      }
      .price-info {
        margin-left: 33px;
        .normal-price {
          margin-right: 20px;
        }
        div {
          text-align: left;
          white-space: nowrap;
        }
      }
      .final-price {
        margin: 10px 0 0 33px;
        text-align: left;
        white-space: nowrap;
      }
      .count {
        margin-left: 33px;
        text-align: left;
        white-space: nowrap;
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
