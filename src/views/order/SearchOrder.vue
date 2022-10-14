<template>
  <section>
    <h2 class="sub-title">책 검색</h2>
    <section class="sub-container">
      <!--      <div>{{ books }}</div>-->
      <!--      <div @click="addDB">DB입력 테스트</div>-->
      <!--      <div @click="updateDB">DB업데이트</div>-->
      <!--      <div @click="insertDB">DB추가</div>-->
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
} from "firebase/firestore";
export default {
  components: { SearchBasicGroup, BookList },
  data() {
    return {
      books: [],
    };
  },
  async created() {
    //where, oderBy
    const dbRef = doc(db, "Instapay", "book");
    const docSnapshot = await getDoc(dbRef);
    this.books = docSnapshot.data().favorites;

    const museums = query(collectionGroup(db, "Instapay"), where("subject", "==", "recess"));

    const querySnapshot = await getDocs(museums);
    querySnapshot.forEach(doc => {
      console.log(doc.data().favorites);
    });
  },
  methods: {
    async addDB() {
      try {
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
