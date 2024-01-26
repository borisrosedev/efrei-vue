<template>
  <main class="not-found-page">
    <h1>Page inexistante</h1>
    <RouterLink to="/"> 
      Revenir à la page d'accueil 
    </RouterLink>
  </main>
</template>
<script setup></script>
<style lang="scss" scoped>
.not-found-page {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
