<template>
  <form
    class="form-component"
    @submit.prevent="onSubmit"
  >
    <section>
      <InputComponent 
        v-for="(input, index) of formInputs"
        :key="index"
        :data="input"
        @input-change="onInputChange"
      />
    </section>
    <button> {{ buttonTextContent }} </button>
  </form>
</template>
<script setup>
import { ref, watch, onMounted, reactive } from "vue";
import InputComponent from "./InputComponent.vue";

// vous permet de faire comprendre à l'enfant qu'il doit attendre
// de son parent des propriétés
const { buttonTextContent, onFormSubmit , formInputs } = defineProps({
    buttonTextContent: String,
    formInputs:Array,
    onFormSubmit:Function
})

const formData = reactive({})
const onInputChange = (data) => {
    formData[data.name]= data.value
    console.log('formInputs', formData)
}

const onSubmit = () => {
    onFormSubmit(formData)
}

onMounted(() => {
    console.log(' 🔵 form component has mounted', onFormSubmit, formInputs)
})

</script>
<style scoped lang="scss">

.form-component {
    display: flex;
    flex-direction: column;
    width: 100%;
    button {
        margin: 10px 0;
    }

}

</style>

<!-- HEADER -->
<!-- trouver le moyen d'installer fontawesome dans votre application -->
<!-- créer une fonction qui va se déclecher au clic sur un icon de header-->