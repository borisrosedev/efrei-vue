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

@mixin FlexBox($justif: center, $align: center){
  display: flex;
  justify-content: $justif;
  @if $justif == center {
    align-items: center
  }@else {
    align-items: $align
  }
}

.not-found-page {
  @include FlexBox(center);
  flex-direction: column;
  width: 100%;
}
</style>
