<template>
    <article>

        <lable :for="data.id"></lable>
        <input 
            v-if="data.type === 'text' || data.type === 'email' || data.type === 'password'"
            :placeholder="data.placeholder" 
            :name="data.name" 
            :id="data.id"
            :type="data.type"
            v-model="inputValue"
        />
        <textarea
            v-else-if="data.type == 'textarea'"  
            placeholder="data.placeholder" 
            id="data.id"
            v-model="inputValue"
            
        >
        </textarea>
        <select :name="data.select.name" :id="data.select.id" v-else>
        </select>
    </article>
</template>

<script setup>
import { onMounted, ref, watch } from "vue"

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

</style>