<template>
  <main class="cart-page" role="main" aria-labelledby="main-title">
    <TitleComponent h-type="h1" :title="'Panier'" id="main-title" />
    <Transition>
      <section v-if="cartGetter.length" class="cart-page__items">
        <CartItemComponent
          v-for="(item, index) in cartGetter"
          :key="index"
          :cart-item="item"
        />
      </section>
    </Transition>
    <Transition>
      <section 
        v-if="!cartGetter.length" 
        class="cart-page__no-items"
      >
        <p>Aucun produit dans votre panier pour l'instant</p>
        <router-link to="/shop">
          Voir nos produits
        </router-link>
      </section>
    </Transition>
  </main>
</template>
<script setup>
import { onMounted } from "vue";
import TitleComponent from "../components/TitleComponent.vue";
import { cartGetter } from "../stores/cart-store";
import CartItemComponent from "../components/CartItemComponent.vue";

onMounted(() => {
  console.log("🟠 CartPage has mounted", cartGetter);
});
</script>
<style scoped lang="scss">
.cart-page {
  height: 100%;
  width: 100%;
  flex-direction: column;
  //width: 100%;

  &__items {
    display: flex;
    flex-direction: column;
  }

  &__no-items {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: bisque;
    align-self: center;
  }
}

.v-enter-active {
  transition: opacity 0.5s ease;
}

.v-enter-from {
  opacity: 0;
}
</style>
