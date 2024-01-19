import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import LoginPage from './pages/LoginPage.vue'


const routes = [
    { path: '/', component: HomePage, name: 'landing-page', alias: '/landing'},
    { path: '/login', component: LoginPage}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})
   
const app = createApp(App)

app.use(router)

app.mount('#app')
