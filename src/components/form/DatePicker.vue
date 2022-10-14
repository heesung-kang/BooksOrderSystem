<template>
  <v-menu v-model="visible" :close-on-content-click="false" transition="scale-transition" offset-y min-width="auto">
    <template v-slot:activator="{ on, attrs }">
      <v-text-field v-model="date" v-bind="attrs" v-on="on" class="date" @click="hangleDelete" autocomplete="no"></v-text-field>
    </template>
    <v-date-picker v-model="date" @input="visible = false" locale="ko" :picker-date.sync="pickerDate" autocomplete="no"></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  props: ["clear"],
  data() {
    return {
      date: "",
      visible: false,
      pickerDate: null,
    };
  },
  watch: {
    date(value) {
      this.$emit("updateDate", value);
    },
    clear(o, n) {
      if (o !== n) {
        this.date = "";
      }
    },
  },
  mounted() {
    //초기 값을 보여주고 싶은 값이 있다면
    this.$nextTick(function () {
      if (this.defaultValue !== null || this.defaultValue !== "") {
        this.date = this.defaultValue;
      }
    });
  },
  methods: {
    //한글일경우 '일' 제거
    hangleDelete() {
      let time = setTimeout(function () {
        const day = document.querySelectorAll(".v-date-picker-table .v-btn__content");
        day.forEach(ele => {
          ele.textContent = ele.textContent.replace("일", "");
        });
        clearInterval(time);
      }, 100);
    },
  },
};
</script>
