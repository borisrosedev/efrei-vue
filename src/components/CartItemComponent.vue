<template>
  <article class="cart-item">
    <figure class="cart-item__figure">
      <img 
        :src="cartItem.product.url" 
        :alt="cartItem.product.name" 
      >
    </figure>
    <section class="cart-item__info">
      <font-awesome-icon 
        :icon="['fas', 'minus']" 
        @click="onMinusClick(cartItem.product)" 
        class="cart-item__minus-icon"
      />
      <span>{{ cartItem.quantity }}</span>
      <font-awesome-icon 
        :icon="['fas', 'plus']" 
        @click="onPlusClick(cartItem.product)" 
        class="cart-item__plus-icon"
      />
    </section>
  </article>
</template>
<script setup>
import { removeFromCart, addToCart } from "../stores/cart-store"
defineProps({
  cartItem: {
    type: Object,
    default: null,
  },
});

const onMinusClick = (prod) => {
  removeFromCart(prod)
}

const onPlusClick = (prod) => {
  addToCart(prod)
}

</script>
<style lang="scss" scoped>

.cart-item {
    width: 500px;
    margin: 20px 0;
    display: flex;
    align-self: center;
    flex-direction: row;
    background-color: rgb(255, 192, 203, 0.3);
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    &__figure {
      width: 100px;
      height: 100px;
      position: relative;
      margin: 10px;
    
      &::before {
        content: '';
        background-color: black;
        position: absolute;
        top: 2px;
        right: -7.2px;
        height: 100%;
        width: 7px;
        transform: skewY(30deg);
        
      }

      &::after {
        content: '';
        background-color: black;
        position: absolute;
        bottom: -3.9px;
        left: 3px;
        height: 4px;
        width: 100%;
        transform: skewX(60deg);
      }
      
    }

    &__info {
      padding: 10px 0;
      span {
        margin-inline: 10px;
      }
    }


    &__minus-icon, &__plus-icon {
      transition: all 300ms ease-in;
      &:hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    }

}

</style>
