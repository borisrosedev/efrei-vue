<template>
    <header class="app-header">
        <figure>
            <img src="../assets/starbuck.png"  alt="logo de Tea Room"/>
        </figure>
        <nav>
            <font-awesome-icon
                @click="onHomeClick" 
                :icon="['fas', 'home']"  
                class="app-header__icon"
            /> 
            <font-awesome-icon 
                @click="" 
                :icon="['fas', 'shopping-bag']" 
                class="app-header__icon"
            />
            <font-awesome-icon 
                @click="" 
                :icon="['fas', 'sign-in-alt']" 
                class="app-header__icon"
            /> 
            <font-awesome-icon 
                v-on:click="" 
                :icon="['fas', 'sign-out-alt']" 
                class="app-header__icon"
            />
        </nav>
    </header>
</template>
<script setup>
import { onMounted, ref } from "vue"


const onHomeClick = () => {
    console.log('🧤 you clicked on me')
}

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

    }

    .app-header__icon {
        margin-inline: 10px;
        transition: all 300ms ease-in-out;
        opacity: 0.7;
        &:hover {
            cursor: pointer;
            transform: scale(1.1);
            opacity: 1;
        }
    }

   
}


</style>