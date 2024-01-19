<template>
  <HeaderComponent />
  <video autoplay loop muted>
    <source src="./assets/coffee.mp4" type="video/mp4">
  </video>
  <router-view></router-view>
  <NotificationComponent/>
</template>
<script setup>
import { onMounted } from "vue"
import NotificationComponent from "./components/NotificationComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";

// life cycle hook number one : onMounted
// hook de cycle de vie des components
onMounted(() => {
  console.log('🔵 App.vue has mounted')
})


</script>
