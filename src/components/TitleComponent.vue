<template>
  <header class="title-component">
    <h1 v-if="hType == 'h1'" v-bind="$attrs">
      {{ textContent }}
    </h1>
    <h2 v-if="hType == 'h2'" v-bind="$attrs">
      {{ textContent }}
    </h2>
    <h3 v-if="hType == 'h3'" v-bind="$attrs">
      {{ textContent }}
    </h3>
  </header>
</template>
<script setup>
defineProps({
  hType: {
    type: String,
    default: "h1",
  },
  textContent: {
    type: String,
    default: "",
  },
  inheritAttrs: {type: Boolean, default: false},
});
</script>
<style scoped lang="scss">
.title-component {
  display: flex;
  align-items: center;
  padding: 10px;
}
</style>
