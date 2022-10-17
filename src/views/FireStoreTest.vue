<template>
  <section>
    <h2 class="sub-title">책 검색</h2>
    <section class="sub-container">
      <button class="basic" @click="callDB">데이터 불러오기</button>
      <ul>
        <li v-for="(item, index) in books" :key="index" class="book-list">
          <span>id: {{ item.id }}</span
          >,
          <span>title: {{ item.data.title }}</span>
          <button class="basic" @click="delDB(item.id)">삭제</button>
        </li>
      </ul>
      <v-pagination v-model="page" :length="pageLength"></v-pagination>
      <h3>DB입력</h3>
      <div class="d-flex">
        <input type="text" class="basic" v-model="title" />
        <button class="basic" @click="addDB">전송</button>
      </div>
      <h3 class="mt50">DB수정</h3>
      <div class="d-flex">
        <input type="text" class="basic" v-model="id" placeholder="id" />
        <input type="text" class="basic" v-model="updateTitle" placeholder="title" />
        <button class="basic" @click="updateDB">전송</button>
      </div>
    </section>
  </section>
</template>

<script>
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
} from "firebase/firestore";
export default {
  data() {
    return {
      books: [],
      title: "",
      updateTitle: "",
      id: "",
      page: 1,
      pageLength: 2,
    };
  },
  // async created() {
  //   // 정렬, 갯수 제한 불러오기
  //   const first = query(collection(db, "kyle"), orderBy("title"), limit(2));
  //   // 검색 필터, 갯수제한 적용
  //   //const first = query(collection(db, "kyle"), where("title", "==", "abc"), limit(2));
  //   const documentSnapshots = await getDocs(first);
  //   documentSnapshots.forEach(doc => {
  //     console.log(doc.data());
  //   });
  //   console.log("length", documentSnapshots.docs.length);
  //   //페이지 변경시
  //   const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
  //   console.log("last", lastVisible);
  //   const next = query(collection(db, "kyle"), orderBy("title"), startAfter(lastVisible), limit(2));
  //   console.log("next", next);
  //   const documentSnapshotsNext = await getDocs(next);
  //   documentSnapshotsNext.forEach(doc => {
  //     console.log(doc.data());
  //   });
  // },
  async mounted() {
    await this.callDB();
  },
  methods: {
    async callDB() {
      try {
        const first = query(collection(db, "kyle"), orderBy("title"), limit(3));
        const documentSnapshots = await getDocs(first);
        this.books = [];
        documentSnapshots.forEach(doc => {
          this.books.push({ id: doc.id, data: doc.data() });
        });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    async addDB() {
      try {
        await addDoc(collection(db, "kyle"), { title: this.title });
        alert("등록완료");
        this.title = "";
        await this.callDB();
      } catch (e) {
        console.error("Error adding document: ", e);
        this.title = "";
      }
    },
    async updateDB() {
      try {
        const frankDocRef = doc(db, "kyle", this.id);
        await updateDoc(frankDocRef, { title: this.updateTitle });
        alert("수정완료");
        this.updateTitle = "";
        this.id = "";
        await this.callDB();
      } catch (e) {
        console.error("Error adding document: ", e);
        this.updateTitle = "";
        this.id = "";
      }
    },
    async delDB(id) {
      try {
        await deleteDoc(doc(db, "kyle", id));
        alert("삭제완료");
        await this.callDB();
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
ul {
  margin: 30px 0;
  li {
    border: 1px solid #000;
    margin-bottom: 3px;
  }
}
</style>
