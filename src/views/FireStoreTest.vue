<template>
  <section>
    <h2 class="sub-title">책 검색</h2>
    <section class="sub-container">
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
  endBefore,
} from "firebase/firestore";
export default {
  data() {
    return {
      booksAll: [],
      books: [],
      title: "",
      updateTitle: "",
      id: "",
      page: 1,
      pageLength: 0,
      limit: 5,
      lastVisible: "",
      documentSnapshots: "",
    };
  },
  watch: {
    page(newValue) {
      let last = newValue * this.limit;
      let first = last - this.limit;
      this.books = [];
      this.booksAll.forEach((ele, index) => {
        if (index >= first && index < last) {
          this.books.push(ele);
        }
      });
    },
  },
  mounted() {
    this.callDB();
  },
  methods: {
    // async pageDB(status) {
    //   this.lastVisible = this.documentSnapshots.docs[this.documentSnapshots.docs.length - 1];
    //
    //   let next;
    //   status === "next"
    //     ? (next = query(collection(db, "kyle"), orderBy("title"), startAfter(this.lastVisible), limit(this.limit)))
    //     : (next = query(collection(db, "kyle"), orderBy("title"), endBefore(this.lastVisible), limit(this.limit)));
    //   this.documentSnapshots = await getDocs(next);
    //   this.books = [];
    //   this.documentSnapshots.forEach(doc => {
    //     this.books.push({ id: doc.id, data: doc.data() });
    //   });
    // },
    async callDB() {
      try {
        const first = query(collection(db, "kyle"), orderBy("title"));
        const documentSnapshots = await getDocs(first);
        this.lastVisible = documentSnapshots.docs[1];
        this.pageLength = Math.ceil(documentSnapshots.size / this.limit);
        this.booksAll = [];
        this.books = [];
        this.page = 1;
        documentSnapshots.forEach(doc => {
          this.booksAll.push({ id: doc.id, data: doc.data() });
        });
        this.booksAll.forEach((ele, index) => {
          if (index > -1 && index < this.limit) {
            this.books.push(ele);
          }
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
