<template>
  <ProductDetailsComponent />
</template>
<script setup>
import { onMounted } from "vue";
import ProductDetailsComponent from "../components/ProductDetailsComponent.vue";
import { useRoute } from "vue-router";

let route = null;

onMounted(() => {
  console.log("🟠 Single Product Page has mounted");
  route = useRoute();
  const id = route.params.id;
  console.log("id", id);
});
</script>
<style scoped lang="scss"></style>
