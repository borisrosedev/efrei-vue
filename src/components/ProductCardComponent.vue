<template>
  <article class="product-card-component">
    <img
      :src="data.url"
      :alt="data.name"
    >
    <section class="product-card-component__actions">
      <font-awesome-icon
        :icon="['fas', 'cart-plus']"
        class="cart-icon"
        @click="onAddClick(data)"
      />
    </section>
  </article>
</template>
<script setup>
import { addToCart } from "../stores/cart-store";

defineProps({
    data: Object
})


const onAddClick = (product) => {
    console.log('🧤 add to cart');
    addToCart(product);
}

</script>
<style scoped lang="scss">


@mixin positionBox($z: 0,$t: 0, $l: 0, $r:0, $b:0){
    z-index: $z;
    top:$t;
    right: $r;
    bottom: $b;
    left: $l;

    @if $b != 0{
        position: fixed;
    } @else {
        position: absolute;
    }
}


.product-card-component {
    display: flex;
    flex-direction: column;
    height: 300px;
    margin: 10px;
    width: 300px;
    border-radius: 25px;
    overflow: hidden;
    transition: all 300ms ease-in-out;
    animation: productCardAnimation 1000ms ease-in-out;
    position: relative;

    &__actions {
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgba(0,0, 0, 0.6);
        @include positionBox(2, unset, 0, 0, 0);
     


    }

    .cart-icon {
        color: white;
        opacity: 0.7;
        transition: all 300ms ease-in-out;

        &:hover {
            cursor: pointer;
            opacity: 1;
            transform: scale(1.3);
            border-color: none;
        }
    }

    img {
        @include positionBox(-2, 0, 0, 0, 0)
    }
}

@keyframes productCardAnimation {
    from {
        transform: scale(0);
    }

    to {
        transform: scale(1.1);
    }
}

</style>

