<template>
  <main class="shop-page">
    <div
      aria-label="conteneur du titre de la page Shop"
      class="shop-page__title-container"
    >
      <TitleComponent 
        :h-type="'h1'" 
        text-content="Shop" 
      />
    </div>

    <section v-if="products" class="products-container">
      <!-- child component -->
      <ProductCardComponent
        v-for="(product, index) in products"
        :key="index"
        :data="product"
      />
    </section>
  </main>
</template>
<script setup>
import { computed, onMounted, onUnmounted, ref } from "vue";
import TitleComponent from "../components/TitleComponent.vue";
import ProductCardComponent from "../components/ProductCardComponent.vue";
import { setNewMessage, setContent } from "../stores/message-store";
import { useProductStore } from "../stores/product-store";
import { storeToRefs } from "pinia";

const productStore = useProductStore();
const { getProducts } = productStore;
const { productsGetter } = storeToRefs(productStore);
const products = computed(() => productsGetter.value);

let timer = null;

onMounted(async () => {
  getProducts();
  setNewMessage({
    title: "Shop Page",
    type: "positive",
    content: "N'hésitez pas à remplir votre panier",
  });
  timer = setTimeout(() => {
    setContent("");
  }, 3000);
});

onUnmounted(() => {
  console.log("Shop has unmounted");
  setNewMessage({ title: "", type: "", content: "" });
  clearTimeout(timer);
});
</script>
<style scoped lang="scss">
@mixin FlexBox($flexD: row, $align: center, $justif: flex-start) {
  flex-direction: $flexD;
  align-items: $align;
  justify-content: $justif;
  display: flex;
}

.shop-page {
  @include FlexBox(column, flex-start);
  width: 100%;
  .products-container {
    @include FlexBox(row, flex-start, space-evenly);
    flex-wrap: wrap;
    width: 100%;
  }

  &__title-container {
    padding: 0 30px;
  }
}
</style>
