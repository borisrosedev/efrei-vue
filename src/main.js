import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import LoginPage from './pages/LoginPage.vue'
import Dashboard from './pages/Dashboard.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faHome, faSignInAlt, faSignOutAlt, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import {
    createVuePlugin
} from 'harlem';



/* add icons to the library */
library.add(faHome, faSignInAlt, faSignOutAlt, faShoppingBag)

// harlem related 




const routes = [
    { path: '/', component: HomePage, name: 'landing', alias: '/landing'},
    { path: '/login', component: LoginPage, name: 'login'},
    { path: '/dashboard/:id', component: Dashboard, name: 'dashboard'}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})
   
const app = createApp(App)

app.use(router)
app.use(createVuePlugin())
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
