<template>
    <main>
        <TitleComponent h-type="h1" text-content="Tea Room" @message="getMessage"/>
    </main>
</template>
<script setup>
import { onMounted } from "vue";
import TitleComponent from "../components/TitleComponent.vue";

const getMessage  = (message) => {
    console.log('papa récupère le message suivant:', message)
}

</script>
<style lang="scss" scoped>

</style>