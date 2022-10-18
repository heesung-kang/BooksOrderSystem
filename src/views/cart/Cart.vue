<template>
  <section>
    <h2 class="sub-title">장바구니</h2>
    <section class="sub-container">
      <CartList />
    </section>
  </section>
</template>

<script>
import CartList from "@/components/cart/CartList";
export default {
  components: { CartList },
};
</script>
