<template>
  <Teleport to="#app">
    <aside 
      v-if="showTres"
      class="tres-component" 
    >
      <TresCanvas 
        preset="realistic" 
        clear-color="rgb(200,180,100)"
      >
        <!-- Your scene here -->
        <TresPerspectiveCamera
          :position="[1, 1, 5]"
          :look-at="[0, 0, 0]"
          :args="[45, 1, 0.1, 1000]"
        />
        <TresMesh>
          <TresTorusGeometry :args="[1, 0.5, 16, 32]" />
          <TresMeshBasicMaterial color="rgb(255,100,0)" />
        </TresMesh>
        <TresAmbientLight :intensity="1" />
      </TresCanvas>
    </aside>
  </Teleport>
</template>
<script setup>
import { TresCanvas } from "@tresjs/core";

defineProps({
  showTres: Boolean,
});
</script>
<style scoped lang="scss">
.tres-component {
  width: 100px;
  height: 100px;
  align-self: center;
  margin: auto;
}
</style>
