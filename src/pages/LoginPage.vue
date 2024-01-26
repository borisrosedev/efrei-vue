<template>
  <main class="login-page">
    <TitleComponent
      :h-type="'h1'"
      text-content="Login"
    />
    <!-- child component -->
    <section class="login-page__form-section">
      <FormComponent 
        :button-text-content="'Valider'" 
        :form-inputs="FORM_INPUTS"
        :on-form-submit="onFormSubmit"
      />
    </section>
  </main>
</template>

<script setup>
// Options API |  Composition API avec le setup intégré
// on reverra la notion de hook , setup en étant un 
// c'est un setup intégré 
import FormComponent from "../components/FormComponent.vue";
import { ref, onMounted,  reactive, onUnmounted } from "vue";
import TitleComponent from "../components/TitleComponent.vue";
import { setNewMessage, setContent } from "../stores/message-store"

let timer = null;
// hooks 
onMounted(() => {
    console.log('🟠 Login Page has mounted')
    setNewMessage({ title: 'Login Page', type: 'positive', content: 'Connectez-vous' })
    timer = setTimeout(() => {
        setContent('');
    }, 3000)
})

onUnmounted(() => {
    setNewMessage({ title: '', type: '', content: '' })
    clearTimeout(timer);
})

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


//COMPOSABLES 

// FUNCTIONS
const onFormSubmit = (data) => {
    console.log('🔴 into on form submit')
    loginData.email = data.email
    loginData.password = data.password
    console.log('loginData', loginData)

}




</script>

<style scoped lang="scss">

.login-page {

    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    opacity: 0;
    animation: loginPageAnimation 1000ms ease-in-out forwards;
    //width: 100%;

    &__form-section {

        display: flex;
        padding: 20px;
        width: 50%;
        background-color: rgba($color: #000000, $alpha: 0.7);
       
    }


}

@keyframes loginPageAnimation {

    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
    
}

  

</style> 