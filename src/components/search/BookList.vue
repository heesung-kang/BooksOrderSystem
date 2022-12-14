<template>
  <div>
    <section class="book-list">
      <ul v-if="books.length > 0">
        <li v-for="book in books" :key="book.data.isbn">
          <section class="contents d-flex align-center justify-space-between">
            <article class="basic-info d-flex align-center">
              <section class="thumbnail">
                <img :src="`https://bookthumb-phinf.pstatic.net/cover/${book.data.image}?type=m1`" :alt="book.data.subject" />
              </section>
              <div class="book-info">
                <h3 class="book-subject">{{ book.data.subject }}</h3>
                <div class="author">{{ book.data.author }}</div>
                <div class="pub-isbn">
                  <span class="mr15">{{ book.data.publisher }}({{ book.data.publication_date }})</span>
                  <span>{{ book.data.isbn }}</span>
                </div>
              </div>
            </article>
            <article class="price-info">
              <div class="mr14">정가 {{ book.data.price && book.data.price.toLocaleString() }}원</div>
              <!-- 서적별 공급률 -->
              <div v-if="bookRate.some(v => v.data.isbn === book.data.isbn && v.data.rate !== '')">
                <div class="mr10" v-for="(rate, index) in bookRate" :key="index">
                  <span v-if="rate.data.isbn === book.data.isbn">공급률 {{ rate.data.rate }}%</span>
                </div>
              </div>
              <!-- 상점별 공급률 -->
              <div v-if="!bookRate.some(v => v.data.isbn === book.data.isbn && v.data.rate !== '') && shopRate.some(v => v.sid === book.data.sid && v.rate !== '')">
                <div class="mr10" v-for="(rate, index) in shopRate" :key="index">
                  <span v-if="rate.sid === book.data.sid && rate.rate !== ''"> 공급률 {{ rate.rate }}% </span>
                </div>
              </div>
              <!-- 기본 공급률 -->
              <div v-if="!bookRate.some(v => v.data.isbn === book.data.isbn && v.data.rate !== '') && !shopRate.some(v => v.sid === book.data.sid && v.rate !== '')">
                <div class="mr10" v-for="(rate, index) in basicRate" :key="index">
                  <span v-if="book.data.sid === rate.sid">공급률 {{ rate.supplyRate }}%</span>
                </div>
              </div>
              <!-- 서적별 공급가 -->
              <div v-if="bookRate.some(v => v.data.isbn === book.data.isbn && v.data.rate !== '')" class="price">
                <div v-for="(rate, index) in bookRate" :key="index">
                  <span v-if="rate.data.isbn === book.data.isbn" class="supply-price"> 공급가 {{ book.data.price && ((book.data.price * rate.data.rate) / 100).toLocaleString() }}원 </span>
                </div>
              </div>
              <!-- 상점별 공급가 -->
              <div v-if="!bookRate.some(v => v.data.isbn === book.data.isbn && v.data.rate !== '') && shopRate.some(v => v.sid === book.data.sid && v.rate !== '')" class="price">
                <div v-for="(rate, index) in shopRate" :key="index">
                  <span v-if="rate.sid === book.data.sid && rate.rate !== ''" class="supply-price"> 공급가 {{ book.data.price && ((book.data.price * rate.rate) / 100).toLocaleString() }}원 </span>
                </div>
              </div>
              <!-- 기본 공급가 -->
              <div v-if="!bookRate.some(v => v.data.isbn === book.data.isbn && v.data.rate !== '') && !shopRate.some(v => v.sid === book.data.sid && v.rate !== '')" class="price">
                <div class="mr10" v-for="(rate, index) in basicRate" :key="index">
                  <span v-if="book.data.sid === rate.sid" class="supply-price">공급가 {{ book.data.price && ((book.data.price * rate.supplyRate) / 100).toLocaleString() }}원</span>
                </div>
              </div>
            </article>
            <article class="add-cart"><button class="basic" @click="addCart(book.data)">담기</button></article>
          </section>
        </li>
      </ul>
      <div v-else class="book-search-alert">
        <span v-if="infoChange">검색 결과가 없습니다.</span>
      </div>
    </section>
    <div class="btn-more" @click="$emit('more')" v-if="books.length >= 10 && totalPage !== page"><button class="basic">더 보기</button></div>
    <Toast :status="status" :message="message" :withBtn="withBtn" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { db } from "@/utils/db";
import { addDoc, collection, query, getDocs } from "firebase/firestore";
import { getCookie } from "@/utils/cookie";
import Toast from "@/components/common/Toast";

export default {
  name: "BookList",
  components: { Toast },
  props: ["books", "infoChange", "shopRate", "basicRate", "bookRate", "totalPage", "page"],
  data() {
    return {
      cart: [],
      message: "",
      status: false,
      listWidth: 0,
      titleMaxWidth: 0,
      withBtn: true,
    };
  },
  computed: {
    ...mapGetters("common", ["cartList", "mobile"]),
  },
  watch: {
    books(newValue) {
      if (newValue.length > 0) {
        this.setSize();
      }
    },
  },
  async created() {
    //초기 장바구니 데이터 로드
    try {
      const infos = getCookie("userInfo");
      this.uid = infos.uid;
      const first = query(collection(db, `cart-${this.uid}`));
      const documentSnapshots = await getDocs(first);
      documentSnapshots.forEach(doc => {
        this.cart.push(doc.data());
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  },
  mounted() {
    window.onresize = () => {
      this.setSize();
    };
  },
  methods: {
    //장바구니 담기
    async addCart(item) {
      try {
        const result = this.cart.some(elm => elm.isbn === item.isbn);
        if (!result) {
          this.$store.commit("common/setLoading", true);
          item.count = 1;
          await addDoc(collection(db, `cart-${this.uid}`), item);
          this.cart.push(item);
          this.status = !this.status;
          this.message = "장바구니에 상품이 추가되었습니다.";
          this.$store.commit("common/changeCartList", this.cartList + 1);
        } else {
          this.status = !this.status;
          this.message = "이미 담아 두었습니다.<br/>‘장바구니’에서 수량을 조절해 주세요";
        }
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      this.$store.commit("common/setLoading", false);
    },
    setSize() {
      if (this.mobile) {
        this.listWidth = document.querySelector(".book-list").clientWidth;
        this.titleMaxWidth = this.listWidth - 100;
        setTimeout(() => {
          const select = document.querySelectorAll(".book-subject");
          select.forEach(ele => {
            ele.style.maxWidth = `${this.titleMaxWidth}px`;
          });
        }, 200);
      } else {
        this.listWidth = document.querySelector(".book-list").clientWidth;
        this.titleMaxWidth = this.listWidth - 400;
        setTimeout(() => {
          const select = document.querySelectorAll(".book-subject");
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
.btn-more {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
.book-list {
  margin-top: 14px;
  .book-search-alert {
    text-align: center;
    @include NotoSans(1.6, 500, #000);
    margin-top: 30px;
  }
  ul {
    li {
      background-color: #fff;
      display: flex;
      margin-bottom: 7px;
      padding: 12px 30px;
      width: 100%;
      &:last-child {
        margin-bottom: 0;
      }
      .thumbnail {
        width: 50px;
        height: 75px;
        min-width: 50px;
        img {
          height: 75px;
          border: 1px solid #ccc;
          object-fit: cover;
        }
      }
      .contents {
        width: 100%;
        .basic-info {
          width: 80%;
          max-width: 100%;
          .book-info {
            margin-left: 18px;
            .pub-isbn {
              @include NotoSans(1.4, 400, #888);
            }
            h3 {
              width: 100%;
              @include NotoSans(1.5, 500, #000);
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .author {
              width: 100%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
        .price-info {
          width: 20%;
          div {
            text-align: center;
            white-space: nowrap;
            .supply-price {
              @include NotoSans(1.5, 700, #000);
            }
          }
        }
        .add-cart {
          width: 58px;
          text-align: right;
          .basic {
            width: 58px;
            font-size: 1.4rem;
          }
        }
      }
    }
  }
}
@include mobile {
  .book-list {
    ul {
      li {
        padding: 19px 18px;
        .contents {
          flex-direction: column;
          align-items: flex-start !important;
          .basic-info {
            align-items: flex-start !important;
            width: 100%;
            h3 {
              font-size: 1.6rem !important;
            }
            span {
              font-size: 1.6rem !important;
            }
          }
          .isbn {
            margin-left: 68px;
            font-size: 1.6rem !important;
          }
          .price-info {
            margin-left: 68px;
            div {
              text-align: left !important;
              font-size: 1.6rem !important;
            }
          }
          .price {
            font-size: 1.6rem !important;
            & > div {
              span {
                white-space: nowrap;
              }
            }
          }
          .add-cart {
            margin: 15px 0 0 68px;
          }
        }
      }
    }
  }
}
</style>
