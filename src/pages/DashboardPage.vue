<template>
  <main 
    class="dashboard-page" 
    role="main" 
    aria-labelledby="main-title"
  >
    <TitleComponent
      id="main-title"
      :h-type="'h1'"
      text-content="Dashboard Page"
    />
  </main>
</template>
<script setup>
import { onMounted, onUnmounted } from "vue";
import { setNewMessage, setContent } from "../stores/message-store";
import TitleComponent from "../components/TitleComponent.vue";

let timer = null;

onMounted(() => {
  console.log("🟠 pages: DashboardPage.vue has mounted");
  setNewMessage({
    title: "Dashboard Page",
    type: "positive",
    content: "Bienvenue sur votre session",
  });
  timer = setTimeout(() => {
    setContent("");
  }, 3000);
});

onUnmounted(() => {
  setNewMessage({ title: "", type: "", content: "" });
  clearTimeout(timer);
});
</script>
<style scoped lang="scss">
.dashboard-page {
  height: 100%;
  width: 100%;
  flex-direction: column;
  //width: 100%;
}
</style>
