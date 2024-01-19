<template>
    <main class="login-page">
        <h1>
        Login Page 
        <!-- child component -->
        <section class="login-page__form-section">
            <FormComponent 
                v-bind:buttonTextContent="'Valider'" 
                :formInputs="FORM_INPUTS"
                :onFormSubmit="onFormSubmit"
            />
        </section>
        </h1>
    </main>
  
</template>

<script setup>
// Options API |  Composition API avec le setup intégré
// on reverra la notion de hook , setup en étant un 
// c'est un setup intégré 
import FormComponent from "../components/FormComponent.vue";
import { ref, onMounted,  reactive } from "vue";

// CONSTANTS
const FORM_INPUTS = [

    {
        name: 'email',
        id: 'email',
        placeholder: 'Email',
        type: 'email'
    },
    {
        name: 'password',
        id: 'password',
        placeholder: 'Password',
        type: 'password'
    }

]
// REFS
const loginData = reactive({
    email: '',
    password: '',
})


// FUNCTIONS
const onFormSubmit = (data) => {
    console.log('🔴 into on form submit')
    loginData.email = data.email
    loginData.password = data.password
    console.log('loginData', loginData)

}




onMounted(() => {
    console.log('🟠 Login Page has mounted')
})

</script>

<style scoped lang="scss">

.login-page {

    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &__form-section {
        margin-top: 10px;
        display: flex;
       
    }


}

  

</style> 