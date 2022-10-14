<template>
  <footer>
    <div class="company">INSTAPAY CONFIDENTIAL</div>
    <div class="copyright">Copyright© 2022 Instapay. All rights reserved.</div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid #ccc;
  height: 30px;
  display: flex;
  align-items: center;
  padding-left: 40px;
  .company {
    color: #ea5959;
  }
  .copyright {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #666;
  }
}
</style>
