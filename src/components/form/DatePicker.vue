<template class="date-range-picker">
  <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent width="290px">
    <template v-slot:activator="{ on, attrs }">
      <v-text-field v-model="date" readonly v-bind="attrs" v-on="on" @click="hangleDelete" :placeholder="placeholder"></v-text-field>
    </template>
    <v-date-picker v-model="date" scrollable locale="ko" :picker-date.sync="pickerDate">
      <v-spacer></v-spacer>
      <v-btn text color="primary" @click="modal = false"> 취소 </v-btn>
      <v-btn text color="primary" @click="$refs.dialog.save(date)"> 설정 </v-btn>
    </v-date-picker>
  </v-dialog>
</template>

<script>
export default {
  props: ["clear"],
  data() {
    return {
      date: "",
      visible: false,
      pickerDate: null,
      modal: false,
      placeholder: "2022/11/11",
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
    pickerDate() {
      this.hangleDelete();
    },
  },
  mounted() {
    //초기 값을 보여주고 싶은 값이 있다면
    this.placeholder = this.$date().format("YYYY-MM-DD");
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
<style lang="scss">
.v-picker__body {
  .v-date-picker-header__value {
    .accent--text {
      font-size: 2rem;
    }
  }
}
.v-input {
  margin-bottom: 0 !important;
  &.v-text-field.v-input--is-readonly {
    height: 30px;
    background-color: #fff;
    .v-input__slot {
      margin-bottom: 0 !important;
      height: 30px !important;
      border: 1px solid #000;
      &:before {
        left: -999999px;
      }
      &:after {
        left: -999999px;
      }
    }
    .v-text-field__slot {
      input {
        padding: 0 10px;
        @include NotoSans(1.4, 400, #000);
      }
    }
  }
  &.v-text-field {
    padding-top: 0 !important;
    margin-top: 0 !important;
  }
}
</style>
