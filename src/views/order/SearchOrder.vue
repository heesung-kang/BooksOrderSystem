<template>
  <section>
    <h2 class="sub-title">책 검색</h2>
    <section class="sub-container">
      <!-- 책 검색 -->
      <SearchBasicGroup :itemList="itemList" @search="search" />
      <!-- //책 검색 -->
      <!-- 카카오 책검색 -->
      <KakaoBookSearch :keyword="keyword" :search="kakaoSearch" :clear="clear" @result="isbnSearch" />
      <!-- //카카오 책검색 -->
      <!-- skeleton -->
      <BookListSkeleton v-if="skeletonLoading && !mobile" class="mt14" />
      <BookListMobileSkeleton v-if="skeletonLoading && mobile" class="mt14" />
      <!-- //skeleton -->
      <!-- 책 리스트 -->
      <BookList :books="books" @more="more" v-else :infoChange="infoChange" :shopRate="shopRate" :basicRate="basicRate" :bookRate="bookRate" :totalPage="totalPage" :page="page" />
      <!-- //책 리스트 -->
    </section>
    <Toast :status="status" :message="message" />
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import BookList from "@/components/search/BookList";
import SearchBasicGroup from "@/components/form/SearchBasicGroup";
import KakaoBookSearch from "@/components/search/KakaoBookSearch";
import { db } from "@/utils/db";
import { collection, query, limit, getDocs, startAfter, where, doc, getDoc, getCountFromServer } from "firebase/firestore";
import BookListSkeleton from "@/skeletons/BookListSkeleton";
import BookListMobileSkeleton from "@/skeletons/BookListMobileSkeleton";
import { getCookie } from "@/utils/cookie";
import Toast from "@/components/common/Toast";
export default {
  components: { Toast, BookListMobileSkeleton, BookListSkeleton, SearchBasicGroup, BookList, KakaoBookSearch },
  data() {
    return {
      itemList: [
        { item: "ISBN", value: "isbn" },
        { item: "책 제목", value: "subject" },
        { item: "저자", value: "author" },
        { item: "출판사", value: "publisher" },
      ],
      select: "isbn",
      keyword: "",
      limit: 10,
      books: [],
      lastVisible: "",
      infoChange: false,
      kakaoSearch: false,
      clear: false,
      uid: "",
      shopRate: [],
      basicRate: [],
      bookRate: [],
      totalPage: 0,
      page: 1,
      message: "",
      status: false,
    };
  },
  computed: {
    ...mapGetters("common", ["loading", "skeletonLoading", "mobile"]),
  },
  async mounted() {
    const infos = getCookie("userInfo");
    this.uid = infos.uid;
    //서점별 공급률 로드
    try {
      const shopRef = doc(db, "shopInfo", this.uid);
      const docSnap = await getDoc(shopRef);
      this.shopRate = docSnap.data().shopRate;
      this.bookRate = docSnap.data().bookRate;
    } catch (e) {
      console.log(e);
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
  },
  methods: {
    //첫번재 리스트 불러오기
    async firstBookList() {
      //출판사 보유 서적 전체 갯수
      this.$store.commit("common/setLoading", true);
      const query_ = query(collection(db, "booksData"), where(this.select, "==", this.keyword));
      const snapshot = await getCountFromServer(query_);
      this.$store.commit("common/setLoading", false);
      const totalLen = snapshot.data().count;
      this.totalPage = Math.ceil(totalLen / this.limit);
      try {
        this.$store.commit("common/setSkeleton", true);
        const first = query(collection(db, "booksData"), where(this.select, "==", this.keyword), limit(this.limit));
        const documentSnapshots = await getDocs(first);
        this.lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
        documentSnapshots.forEach(doc => {
          this.books.push({ id: doc.id, data: doc.data() });
        });
        this.infoChange = true;
        this.$store.commit("common/setSkeleton", false);
      } catch (e) {
        console.error("Error adding document: ", e);
        this.$store.commit("common/setSkeleton", false);
      }
    },
    //더보기 리스트 불러오기
    async more() {
      this.page += 1;
      try {
        this.$store.commit("common/setLoading", true);
        const next = query(collection(db, "booksData"), where(this.select, "==", this.keyword), startAfter(this.lastVisible), limit(this.limit));
        const documentSnapshots = await getDocs(next);
        if (documentSnapshots.docs.length === 0) {
          this.status = !this.status;
          this.message = "도서정보가 더이상 없습니다.";
        }
        this.lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
        documentSnapshots.forEach(doc => {
          this.books.push({ id: doc.id, data: doc.data() });
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      this.$store.commit("common/setLoading", false);
    },
    //검색
    search(payload) {
      this.books = []; //리스트 초기화
      if (payload.select !== "subject") {
        this.clear = !this.clear;
        if (payload.select !== "") this.select = payload.select;
        if (payload.keyword !== "") this.keyword = payload.keyword;
        this.firstBookList();
      } else {
        this.infoChange = false;
        this.keyword = payload.keyword;
        this.kakaoSearch = !this.kakaoSearch;
      }
    },
    //카카오 책 검색 isbn
    isbnSearch(num) {
      if (num !== false) {
        this.books = []; //리스트 초기화
        this.select = "isbn";
        this.keyword = num;
        this.firstBookList();
      } else {
        this.infoChange = true;
      }
    },
  },
};
</script>
