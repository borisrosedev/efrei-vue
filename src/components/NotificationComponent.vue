<template>
  <aside 
    :class="`notification-component ${state.type == 'positive' ? 'positive' :  (state.type == 'negative' ? 'negative' : 'info')}`" 
    v-if="state.content"
  >
    <span aria-label="notification title">{{ state.title }}</span>
    <p> {{ state.content }}</p>
  </aside>
</template>
<script setup>
import { onMounted } from "vue";
import { state } from "../stores/message-store"

onMounted(() => {
    console.log('🟢 notification component has mounted', state)
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
    right: 30%;
    left: 30%;
    flex-direction: column;
    z-index: 10;
  
  
   
}

.positive {
  background-color: lightgreen;

}

.negative {
  background-color: lightcoral;
}

.info {
  background-color: lightblue;
}
</style>