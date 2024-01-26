<template>
  <article class="input-component">
    <label :for="data.id" />
    <input 
      v-if="data.type === 'text' || data.type === 'email' || data.type === 'password'"
      :id="data.id" 
      v-model="inputValue" 
      :placeholder="data.placeholder"
      :name="data.name"
      :type="data.type"
    >
    <textarea
      v-else-if="data.type == 'textarea'"  
      id="data.id" 
      v-model="inputValue"
      placeholder="data.placeholder"
    />
    <select
      v-else
      :id="data.select.id"
      :name="data.select.name"
    />
  </article>
</template>

<script setup>
import {onMounted, ref, watch } from "vue"

const { data } = defineProps({
    data: Object
})

const inputValue = ref("");


const emit = defineEmits(['inputChange'])

onMounted(() => {
    console.log('🟠 [input-component] has mounted')
})

watch(inputValue, (val) => {
    console.log('val', val)
    emit('inputChange', {
        name: data.name,
        value: val
    })
})

</script>
<style scoped lang="scss">

.input-component {
    margin: 10px 0;
    width: 100%;

    input {
        width: inherit;
    }
}

</style>