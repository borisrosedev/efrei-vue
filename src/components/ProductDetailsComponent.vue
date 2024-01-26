<template>
  <article 
    v-if="product" 
    class="product-details"
  >
    <figure class="product-details__figure">
      <img 
        :src="product.url" 
        :alt="product.name" 
      >
    </figure>
    <section class="product-details__info">
      <section v-if="product.description">
        <p>Description</p>
        <p>{{ product.description }}</p>
      </section>
      <section v-if="product.quantity">
        <p>Restant:</p>
        <p>{{ product.quantity }}</p>
      </section>
      <section v-if="product.price">
        <p>Pris:</p>
        <p>{{ product.price }}</p>
      </section>
    </section>
    <section class="product-details__actions">
      <font-awesome-icon
        :icon="['fas', 'cart-plus']"
        class="cart-icon"
        @click="onAddClick(product)"
      />
    </section>
  </article>
</template>
<script setup>
import { onMounted } from "vue";
import { addToCart } from "../stores/cart-store";

onMounted(() => {
  console.log("🟠 Product Details Component has mounted");
});

defineProps({
  product: {
    type: Object,
    default: null,
  },
});

const onAddClick = (product) => {
  console.log("🧤 add to cart");
  addToCart(product);
};
</script>
<style scoped lang="scss"></style>
