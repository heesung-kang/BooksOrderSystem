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
                <h3>{{ book.data.subject }}</h3>
                <div>
                  <span class="mr18">{{ book.data.author }}</span>
                  <span>{{ book.data.publisher }} ({{ book.data.publication_date }})</span>
                </div>
              </div>
            </article>
            <article class="isbn">ISBN : {{ book.data.isbn }}</article>
            <article class="price-info">
              <div class="mr14">정가 {{ book.data.price && book.data.price.toLocaleString() }}원</div>
              <!-- 서적별 공급률 -->
              <div v-if="bookRate.some(v => v.data.isbn === book.data.isbn && v.data.rate !== '')">
                <div class="mr10" v-for="(rate, index) in bookRate" :key="index">
                  <span v-if="rate.data.isbn === book.data.isbn">공급률 {{ rate.data.rate }}%</span>
                </div>
              </div>
              <!-- 상점별 공급률 -->
              <div
                v-if="
                  (shopRate.some(v => v.sid === book.data.sid && v.rate !== '') && bookRate.some(v => v.data.isbn === book.data.isbn && v.data.rate === '')) ||
                  bookRate.filter(v => v.data.isbn === book.data.isbn).length === 0
                "
              >
                <div class="mr10" v-for="(rate, index) in shopRate" :key="index">
                  <span v-if="rate.sid === book.data.sid && rate.rate !== ''"> 공급률 {{ rate.rate }}% </span>
                </div>
              </div>
              <!-- 기본 공급률 -->
              <div
                v-if="
                  (shopRate.some(v => v.sid === book.data.sid && v.rate === '') && bookRate.some(v => v.data.isbn === book.data.isbn && v.data.rate === '')) ||
                  shopRate.filter(v => v.sid === book.data.sid).length === 0 ||
                  bookRate.filter(v => v.data.isbn === book.data.isbn).length === 0
                "
              >
                <div class="mr10" v-for="(rate, index) in basicRate" :key="index">
                  <span v-if="book.data.sid === rate.sid">공급률 {{ rate.supplyRate }}%</span>
                </div>
              </div>
            </article>
            <!-- 서적별 공급률 -->
            <div v-if="bookRate.some(v => v.data.isbn === book.data.isbn && v.data.rate !== '')" class="price">
              <div v-for="(rate, index) in bookRate" :key="index">
                <span v-if="rate.data.isbn === book.data.isbn"> 공급가 {{ book.data.price && ((book.data.price * rate.data.rate) / 100).toLocaleString() }}원 </span>
              </div>
            </div>
            <!-- 상점별 공급률 -->
            <div
              v-if="
                (shopRate.some(v => v.sid === book.data.sid && v.rate !== '') && bookRate.some(v => v.data.isbn === book.data.isbn && v.data.rate === '')) ||
                bookRate.filter(v => v.data.isbn === book.data.isbn).length === 0
              "
              class="price"
            >
              <div v-for="(rate, index) in shopRate" :key="index">
                <span v-if="rate.sid === book.data.sid && rate.rate !== ''"> 공급가 {{ book.data.price && ((book.data.price * rate.rate) / 100).toLocaleString() }}원 </span>
              </div>
            </div>
            <!-- 기본 공급률 -->
            <div
              v-if="
                (shopRate.some(v => v.sid === book.data.sid && v.rate === '') && bookRate.some(v => v.data.isbn === book.data.isbn && v.data.rate === '')) ||
                shopRate.filter(v => v.sid === book.data.sid).length === 0 ||
                bookRate.filter(v => v.data.isbn === book.data.isbn).length === 0
              "
              class="price"
            >
              <div class="mr10" v-for="(rate, index) in basicRate" :key="index">
                <span v-if="book.data.sid === rate.sid">공급가 {{ book.data.price && ((book.data.price * rate.supplyRate) / 100).toLocaleString() }}원</span>
              </div>
            </div>
            <article class="add-cart"><button class="basic" @click="addCart(book.data)">담기</button></article>
          </section>
        </li>
      </ul>
      <div v-else class="book-search-alert">
        <span v-if="infoChange">검색 결과가 없습니다.</span>
      </div>
    </section>
    <div class="btn-more" @click="$emit('more')" v-if="books.length >= 10"><button class="basic">더 보기</button></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { db } from "@/utils/db";
import { addDoc, collection, query, getDocs } from "firebase/firestore";
import { getCookie } from "@/utils/cookie";

export default {
  name: "BookList",
  props: ["books", "infoChange", "shopRate", "basicRate", "bookRate"],
  data() {
    return {
      cart: [],
    };
  },
  computed: {
    ...mapGetters("common", ["cartList"]),
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
          alert("장바구니에 담았습니다.");
          this.$store.commit("common/changeCartList", this.cartList + 1);
        } else {
          alert("이미 담아 두었습니다.\n ‘장바구니’에서 수량을 조절해 주세요");
        }
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      this.$store.commit("common/setLoading", false);
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
      padding: 12px 39px 13px 29px;
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
          width: 30%;
          .book-info {
            margin-left: 18px;
            h3 {
              @include NotoSans(1.6, 500, #000);
            }
            span {
              @include NotoSans(1.4, 400, #000);
            }
          }
        }
        .price-info {
          div {
            @include NotoSans(1.4, 400, #000);
          }
        }
        .price {
          @include NotoSans(1.4, 700, #000);
          white-space: nowrap;
          min-width: 80px;
          text-align: right;
          margin-right: 32px;
        }
        .add-cart {
          min-width: 69px;
          text-align: right;
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
            margin-top: -20px;
            margin-left: 68px;
            font-size: 1.6rem !important;
          }
          .price-info {
            margin-left: 68px;
            div {
              font-size: 1.6rem !important;
            }
          }
          .price {
            font-size: 1.6rem !important;
            margin: 15px 0 0 68px;
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
