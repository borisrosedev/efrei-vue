<template>
  <video autoplay loop muted>
    <source src="./assets/coffee.mp4" type="video/mp4">
  </video>
  <router-view></router-view>
</template>
<script setup>
import { onMounted } from "vue"

// life cycle hook number one : onMounted
// hook de cycle de vie des components
onMounted(() => {
  console.log('🔵 App.vue has mounted')
})


</script>
