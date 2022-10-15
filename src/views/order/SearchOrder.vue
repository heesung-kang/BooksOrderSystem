<template>
  <section>
    <h2 class="sub-title">책 검색</h2>
    <section class="sub-container">
      <div @click="addDB">DB입력 테스트</div>
      <div @click="updateDB">DB업데이트</div>
      <!-- 책 검색 -->
      <SearchBasicGroup />
      <!-- //책 검색 -->

      <!-- 책 리스트 -->
      <BookList />
      <!-- //책 리스트 -->
    </section>
  </section>
</template>

<script>
import BookList from "@/components/order/BookList";
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
} from "firebase/firestore";
export default {
  components: { SearchBasicGroup, BookList },
  data() {
    return {
      books: [],
    };
  },
  async created() {
    // 정렬, 갯수 제한 불러오기
    const first = query(collection(db, "kyle"), orderBy("title"), limit(2));
    // 검색 필터, 갯수제한 적용
    //const first = query(collection(db, "kyle"), where("title", "==", "abc"), limit(2));
    const documentSnapshots = await getDocs(first);
    documentSnapshots.forEach(doc => {
      console.log(doc.data());
    });
    console.log("length", documentSnapshots.docs.length);
    //페이지 변경시
    const lastVisible = documentSnapshots.docs[documentSnapshots.docs.length - 1];
    console.log("last", lastVisible);
    const next = query(collection(db, "kyle"), orderBy("title"), startAfter(lastVisible), limit(2));
    console.log("next", next);
    const documentSnapshotsNext = await getDocs(next);
    documentSnapshotsNext.forEach(doc => {
      console.log(doc.data());
    });
  },
  methods: {
    async addDB() {
      try {
        console.log();
        // const docData = {
        //   title: "Mathison2",
        //   subject: "Mathison2",
        // };
        // const docRef = await addDoc(collection(db, "Instapay"), docData, { merge: true });
        //const docRef = await setDoc(doc(db, "Instapay", "book"), { name: "Los Angeles", state: "CA1" }, { merge: true });
        //console.log("Document written with ID: ", docRef.id);
        // const frankDocRef = doc(db, "Instapay", "book");
        // await setDoc(frankDocRef, {
        //   favorites: [{ food: "Pizza", color: "Blue", subject: "recess" }],
        // });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
    async updateDB() {
      // const updateRef = doc(db, "Instapay", "book");
      // await updateDoc(updateRef, {
      //   title: "Mathison5",
      //   publisher: "Mathison5",
      // });
      // console.log("success");
      // const frankDocRef = doc(db, "Instapay", "book");
      // await updateDoc(frankDocRef, {
      //   "favorites.color": "222",
      // });
      const frankDocRef = doc(db, "Instapay", "book");
      await updateDoc(frankDocRef, {
        favorites: arrayUnion({ food: "Pizza9", color: "Blue9", subject: "recess9" }),
      });
    },
  },
};
</script>
