<template>
  <section>
    <h2 class="sub-title">책 검색</h2>
    <section class="sub-container">
      <!-- 책 검색 -->
      <SearchBasicGroup :itemList="itemList" @search="search" />
      <!-- //책 검색 -->
      <!-- skeleton -->
      <BookListSkeleton v-if="skeletonLoading && !mobile" class="mt14" />
      <BookListMobileSkeleton v-if="skeletonLoading && mobile" class="mt14" />
      <!-- //skeleton -->
      <!-- 책 리스트 -->
      <BookList :books="books" @more="more" v-else :infoChange="infoChange" />
      <!-- //책 리스트 -->
    </section>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import BookList from "@/components/search/BookList";
import SearchBasicGroup from "@/components/form/SearchBasicGroup";
import { db } from "@/utils/db";
import { collection, query, limit, getDocs, startAfter, where } from "firebase/firestore";
import BookListSkeleton from "@/skeletons/BookListSkeleton";
import BookListMobileSkeleton from "@/skeletons/BookListMobileSkeleton";
export default {
  components: { BookListMobileSkeleton, BookListSkeleton, SearchBasicGroup, BookList },
  data() {
    return {
      itemList: [
        { item: "책 제목", value: "subject" },
        { item: "ISBN", value: "isbn" },
        { item: "저자", value: "author" },
        { item: "출판사", value: "publisher" },
      ],
      select: "subject",
      keyword: "",
      limit: 10,
      books: [],
      lastVisible: "",
      infoChange: false,
    };
  },
  computed: {
    ...mapGetters("common", ["loading", "skeletonLoading", "mobile"]),
  },
  methods: {
    //첫번재 리스트 불러오기
    async firstBookList() {
      try {
        this.$store.commit("common/setSkeleton", true);
        const first = query(collection(db, "booksData"), where(this.select, ">=", this.keyword), limit(this.limit));
        const documentSnapshots = await getDocs(first);
        this.lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
        documentSnapshots.forEach(doc => {
          this.books.push({ id: doc.id, data: doc.data() });
        });
        this.infoChange = true;
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      this.$store.commit("common/setSkeleton", false);
    },
    //더보기 리스트 불러오기
    async more() {
      try {
        this.$store.commit("common/setLoading", true);
        const next = query(collection(db, "booksData"), where(this.select, ">=", this.keyword), startAfter(this.lastVisible), limit(this.limit));
        const documentSnapshots = await getDocs(next);
        this.lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
        documentSnapshots.forEach(doc => {
          this.books.push({ id: doc.id, data: doc.data() });
        });
      } catch (e) {
        alert("도서정보가 더이상 없습니다.");
        console.error("Error adding document: ", e);
      }
      this.$store.commit("common/setLoading", false);
    },
    //검색
    search(payload) {
      if (payload.select !== "") this.select = payload.select;
      if (payload.keyword !== "") this.keyword = payload.keyword;
      this.books = []; //리스트 초기화
      this.firstBookList();
    },
  },
};
</script>
