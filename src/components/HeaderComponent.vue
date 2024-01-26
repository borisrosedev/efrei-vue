<template>
  <header class="app-header">
    <figure>
      <img src="../assets/starbuck.png" alt="logo de Tea Room" />
    </figure>
    <nav>
      <ul>
        <li>
          <font-awesome-icon
            :icon="['fas', 'home']"
            class="app-header__icon"
            @click="onHomeClick"
          />
        </li>

        <li class="bag-icon-li">
          <font-awesome-icon
            :icon="['fas', 'shopping-bag']"
            class="app-header__icon"
            @click="onShopClick"
          />
          <small class="cart-length-icon" v-if="cartGetter.length">{{
            cartGetter.length 
          }}</small>
        </li>
        <li>
          <font-awesome-icon
            :icon="['fas', 'sign-in-alt']"
            class="app-header__icon"
            @click="onLoginClick"
          />
        </li>

        <li>
          <font-awesome-icon
            :icon="['fas', 'sign-out-alt']"
            class="app-header__icon"
          />
        </li>
      </ul>
    </nav>
  </header>
</template>
<script setup>
import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import {  cartGetter } from "../stores/cart-store";
import { watchEffect } from "vue";

onMounted(() => {
  console.log("🔵 header has mounted");
});

const cartObservable = watchEffect(() => console.log(cartGetter.value));

const router = useRouter();

const onHomeClick = () => {
  console.log("🧤 [onHomeClick]");
  //router.push({ name: 'landing'});
  router.push("/");
};

const onLoginClick = () => {
  console.log("🧤 [onLoginClick]");
  router.push("/login");
};

const onShopClick = () => {
  console.log("🧤 [onShopClick]");
  router.push("/shop");
};

onUnmounted(() => {
  console.log("❌ header has unmounted");
  cartObservable();
});
</script>

<style scoped lang="scss">
.app-header {
  height: 8vh;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;
  box-shadow: 1px 1px 5px gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;

  figure {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    border: solid black 2px;

    img {
      transform: scale(0.8);
    }
  }

  ul {
    display: flex;

    li {
      margin-inline: 20px;
      transition: all 300ms ease-in-out;
      opacity: 0.7;
      &:hover {
        cursor: pointer;
        transform: scale(1.1);
        opacity: 1;
      }
    }
  }

  .bag-icon-li {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    .cart-length-icon {
      position: absolute;
      top: -10px;
      right: -20px;
      overflow: hidden;
      background-color: plum;
      padding: 5px;
    }
  }
}
</style>
