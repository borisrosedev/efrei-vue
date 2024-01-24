<template>
    <header class="title-component">
        <h1 v-if="hType === 'h1'">{{ textContent }}</h1>
        <h2 v-if="hType === 'h2'">{{ textContent }}</h2>
        <h3 v-if="hType === 'h3'">{{ textContent }}</h3>
    </header>
</template>
<script setup>
import { onMounted } from 'vue';

defineProps({
    hType:String,
    textContent:String
})

</script>
<style scoped lang="scss">


.title-component {
    display: flex;
    align-items: center;
    padding: 10px;
 

}

</style>