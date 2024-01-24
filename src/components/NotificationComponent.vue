<template>
    <aside class="notification-component">
        <span aria-label="notification title">{{ title }}</span>
        <p> {{   content ? content : "Aucun message"  }}</p>
    </aside>
</template>
<script setup>
import { onMounted } from "vue";
const { title, content } = defineProps({
    title: String,
    content: String
})

onMounted(() => {
    console.log('🟢 notification component has mounted', title, content)
})

</script>
<style scoped lang="scss">
.notification-component {
    display: flex;
    border: solid black 2px;
    align-items: center;
    padding: 5px 10px;
    position: fixed;
    bottom: 20px;
    align-self: center;
}
</style>