<template>
  <section>
    <h2 class="sub-title">책 검색</h2>
    <section class="sub-container">
      <!-- 책 검색 -->
      <SearchBasicGroup :itemList="itemList" />
      <!-- //책 검색 -->

      <!-- 책 리스트 -->
      <BookList />
      <!-- //책 리스트 -->
    </section>
  </section>
</template>

<script>
import BookList from "@/components/search/BookList";
import SearchBasicGroup from "@/components/form/SearchBasicGroup";
import { db } from "@/utils/db";
import {
  collection,
  doc,
  query,
  orderBy,
  limit,
  getDocs,
  startAt,
  getDoc,
  addDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  where,
  collectionGroup,
  startAfter,
  deleteDoc,
  endBefore,
} from "firebase/firestore";
export default {
  components: { SearchBasicGroup, BookList },
  data() {
    return {
      itemList: [
        { item: "책 제목", value: "01" },
        { item: "ISBN", value: "02" },
        { item: "저자", value: "03" },
        { item: "출판사", value: "04" },
      ],
      limit: 2,
      booksAll: [],
      books: [],
      page: 0,
    };
  },
  mounted() {
    this.callDB();
  },
  methods: {
    async callDB() {
      try {
        const first = query(collection(db, "booksData"), orderBy("subject"), limit(this.limit));
        const documentSnapshots = await getDocs(first);
        console.log(documentSnapshots);
        this.lastVisible = documentSnapshots.docs[1];
        documentSnapshots.forEach(doc => {
          console.log(doc);
          //his.booksAll.push({ id: doc.id, data: doc.data() });
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  },
};
</script>
