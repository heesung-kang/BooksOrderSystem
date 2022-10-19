<template>
  <div class="selects">
    <v-select dense v-model="select" :items="itemList" item-text="item" item-value="value" outlined></v-select>
  </div>
</template>

<script>
export default {
  props: ["itemList"],
  data() {
    return {
      select: "",
    };
  },
  mounted() {
    this.select = this.itemList[0].value;
  },
};
</script>

<style lang="scss" scoped>
.selects::v-deep {
  max-width: 150px;
  .v-input__slot {
    margin-bottom: 0;
    min-height: 30px !important;
  }
  .v-text-field--outlined {
    fieldset {
      border: 1px solid #000;
      border-radius: 0;
      background-color: #fff;
      height: 35px !important;
    }
    .v-select__slot {
      height: 29px !important;
    }
  }
  .v-select__selections {
    padding: 0 !important;
    .v-select__selection {
      @include NotoSans(1.4, 500, #000);
    }
  }
  .v-text-field__details {
    display: none;
  }
  .v-input__append-inner {
    margin-top: 4px !important;
  }
  .v-select__selection--comma {
    margin: 3px 4px 3px 0 !important;
  }
  .v-input__append-inner {
    i {
      background: url(../../assets/images/arrow_down.svg);
      width: 15px;
      height: 9px;
      &:after {
        content: "" !important;
      }
      &:before {
        content: "" !important;
      }
    }
  }
}
@include mobile {
  .selects::v-deep {
    max-width: 100px;
  }
}
</style>
