<template>
  <main class="home-page">
    <TitleComponent 
      h-type="h1" 
      text-content="Tea Room" 
    />
    <section class="home-page__actions">
      <button> Voir nos produits </button>
    </section>
  </main>
</template>
<script setup>
import { onBeforeMount, onMounted, onUnmounted } from "vue";
import TitleComponent from "../components/TitleComponent.vue";
import { setNewMessage, setContent } from "../stores/message-store";
import { useMountComposable } from "../composables/mount";


let timer = null;
const { setMountMessage } = useMountComposable();

onBeforeMount(() => {
  setMountMessage("🟠 HomePage.vue has mounted");
});

onMounted(() => {
  setNewMessage({
    title: "Home Page",
    type: "positive",
    content: "Bienvenue sur la page d'accueil",
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
<style lang="scss" scoped>
.home-page {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  //width: 100%;
  align-items: center;



  &__actions {
    justify-content: center;

    button {
      opacity: 1;
      font-family: 'Poppins',sans-serif;
      box-shadow: 0 3px rgba(226, 140, 224, 0.5);
      
      &:active {
    
        box-shadow: none;
        transform: translateY(2px);
    
      }
    }
  }
}
</style>
