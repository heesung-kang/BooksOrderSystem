<template>
  <div>
    <ul>
      <li>
        <section class="d-flex align-center justify-space-between skeleton-book-list">
          <div class="img"><v-skeleton-loader type="list-item-avatar-two-line"></v-skeleton-loader></div>
          <div class="text"><v-skeleton-loader type="text"></v-skeleton-loader></div>
          <div class="text"><v-skeleton-loader type="text"></v-skeleton-loader></div>
          <div class="text"><v-skeleton-loader type="text"></v-skeleton-loader></div>
          <div class="text"><v-skeleton-loader type="text"></v-skeleton-loader></div>
          <div class="text"><v-skeleton-loader type="text"></v-skeleton-loader></div>
        </section>
      </li>
      <li>
        <section class="d-flex align-center justify-space-between skeleton-book-list">
          <div class="img"><v-skeleton-loader type="list-item-avatar-two-line"></v-skeleton-loader></div>
          <div class="text"><v-skeleton-loader type="text"></v-skeleton-loader></div>
          <div class="text"><v-skeleton-loader type="text"></v-skeleton-loader></div>
          <div class="text"><v-skeleton-loader type="text"></v-skeleton-loader></div>
          <div class="text"><v-skeleton-loader type="text"></v-skeleton-loader></div>
          <div class="text"><v-skeleton-loader type="text"></v-skeleton-loader></div>
        </section>
      </li>
      <li>
        <section class="d-flex align-center justify-space-between skeleton-book-list">
          <div class="img"><v-skeleton-loader type="list-item-avatar-two-line"></v-skeleton-loader></div>
          <div class="text"><v-skeleton-loader type="text"></v-skeleton-loader></div>
          <div class="text"><v-skeleton-loader type="text"></v-skeleton-loader></div>
          <div class="text"><v-skeleton-loader type="text"></v-skeleton-loader></div>
          <div class="text"><v-skeleton-loader type="text"></v-skeleton-loader></div>
          <div class="text"><v-skeleton-loader type="text"></v-skeleton-loader></div>
        </section>
      </li>
      <li>
        <section class="d-flex align-center justify-space-between skeleton-book-list">
          <div class="img"><v-skeleton-loader type="list-item-avatar-two-line"></v-skeleton-loader></div>
          <div class="text"><v-skeleton-loader type="text"></v-skeleton-loader></div>
          <div class="text"><v-skeleton-loader type="text"></v-skeleton-loader></div>
          <div class="text"><v-skeleton-loader type="text"></v-skeleton-loader></div>
          <div class="text"><v-skeleton-loader type="text"></v-skeleton-loader></div>
          <div class="text"><v-skeleton-loader type="text"></v-skeleton-loader></div>
        </section>
      </li>
      <li>
        <section class="d-flex align-center justify-space-between skeleton-book-list">
          <div class="img"><v-skeleton-loader type="list-item-avatar-two-line"></v-skeleton-loader></div>
          <div class="text"><v-skeleton-loader type="text"></v-skeleton-loader></div>
          <div class="text"><v-skeleton-loader type="text"></v-skeleton-loader></div>
          <div class="text"><v-skeleton-loader type="text"></v-skeleton-loader></div>
          <div class="text"><v-skeleton-loader type="text"></v-skeleton-loader></div>
          <div class="text"><v-skeleton-loader type="text"></v-skeleton-loader></div>
        </section>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BookListSkeleton",
};
</script>

<style lang="scss" scoped>
ul {
  margin: 0 !important;
  padding: 0 !important;
  li {
    margin-bottom: 8px;
    .skeleton-book-list {
      border: 1px solid #000;
      background-color: #fff;
      padding: 0 20px;
      .img {
        min-width: 150px;
      }
      .text {
        min-width: 80px;
      }
    }
  }
}
</style>
