<template>
  <div class="selects">
    <v-select dense v-model="select" :items="itemList" item-text="item" item-value="value" outlined></v-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select: "01",
      itemList: [
        { item: "책 제목 검색", value: "01" },
        { item: "ISBN 검색", value: "02" },
        { item: "저자 검색", value: "03" },
        { item: "출판사 검색", value: "04" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.selects::v-deep {
  max-width: 150px;
  .v-select__selections {
    padding: 0 !important;
    .v-select__selection {
      font-size: 1.5rem !important;
    }
  }
}
</style>
