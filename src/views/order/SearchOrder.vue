<template>
  <section class="sub-container">
    <!--    <div>{{ books }}</div>-->
    <!--    <div @click="addDB">DB입력 테스트</div>-->
    <!--    <div @click="updateDB">DB업데이트</div>-->
    <!--    <div @click="insertDB">DB추가</div>-->
    <h2 class="sub-title">검색 및 주문</h2>
    <!-- 책 검색 -->
    <SearchBasicGroup />
    <!-- //책 검색 -->

    <!-- 책 리스트 -->
    <BookList />
    <!-- //책 리스트 -->
  </section>
</template>

<script>
import BookList from "@/components/order/BookList";
import SearchBasicGroup from "@/components/form/SearchBasicGroup";
import { db } from "@/utils/db";
import { collection, doc, getDoc, addDoc, setDoc, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore";
export default {
  components: { SearchBasicGroup, BookList },
  data() {
    return {
      books: [],
    };
  },
  async created() {
    const docRef = doc(db, "Instapay", "book");
    const docSnap = await getDoc(docRef);
    this.books = docSnap.data().bookList;
  },
  methods: {
    async addDB() {
      try {
        const docData = {
          bookList: [{ title: "Mathison4", publisher: "Mathison4" }],
        };
        const docRef = await addDoc(collection(db, "Instapay", "book"), docData, { merge: true });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    async updateDB() {
      const updateRef = doc(db, "Instapay", "book");
      await updateDoc(updateRef, {
        bookList: [...this.books, { title: "Mathison5", publisher: "Mathison5" }],
      });
      console.log("success");
    },
  },
  // async insertDB() {
  //   const insertRef = doc(db, "Instapay", "book");
  //   await updateDoc(insertRef, {
  //     regions: arrayUnion("greater_virginia"),
  //   });
  // },
};
</script>
