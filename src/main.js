import { createApp } from 'vue'
import './style.css'
/** LES PLUGINS */
//----------------------VUE-ROUTER------------------------
import { createRouter, createWebHashHistory } from 'vue-router'
//---------------------FONTAWESOME------------------------
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faSignInAlt, faSignOutAlt, faShoppingBag, faCartPlus, faPlus } from '@fortawesome/free-solid-svg-icons'
//---------------------HARLEM-----------------
import {
    createVuePlugin
} from 'harlem';
//---------------------TRES-----------------
import Tres from '@tresjs/core'
//---------------------PINIA-----------------
import {
    createPinia
} from 'pinia'
/** FIN DES PLUGINS */
/** LES COMPONENTS  */
import App from './App.vue'
import HomePage from './pages/HomePage.vue'
import LoginPage from './pages/LoginPage.vue'
import DashboardPage from './pages/DashboardPage.vue'
import ShopPage from './pages/ShopPage.vue'
import NoteBook from './components/NoteBook.vue'
import NotFoundPage from './pages/NotFoundPage.vue'
/** LES CHOSES DYNAMIQUES UTILISANT LES PLUGINS  */
//-------------------------AJOUT DES ICONES--------------------------
/* add icons to the library */
library.add(faHome, faSignInAlt, faSignOutAlt, faShoppingBag, faCartPlus, faPlus)
// harlem related 
//-------------------------AJOUT DES ROUTES-----------------------
const routes = [
    { 
        path: '/', 
        component: HomePage, 
        name: 'landing', 
        //alias: '/landing',
        //meta: { transition: 'slide-left' },
    },
    {
        path: '/landing',
        redirect: '/'
    },
    { 
        path: '/login', 
        component: LoginPage, 
        name: 'login',
        //meta: { transition: 'slide-left' },
    },
    { 
        path: '/dashboard/:id(\\d+)', 
        components: { default: DashboardPage }, 
        name: 'dashboard',
        //meta: { transition: 'slide-left' }
    },
    { 
        path: '/shop', 
        component: ShopPage ,
        //meta: { transition: 'slide-left' },
    },
    { 
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: NotFoundPage,
        //meta: { transition: 'slide-left' }, 
    },
]
//-------------------------AJOUT DU ROUTER-----------------------
const router = createRouter({
    history: createWebHashHistory(),
    routes, 
    strict: true
})


//-----------------------MIDDLEWARES----------------------------
//-------------TRANSITION----------------------------------
router.afterEach((to, from) => {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    to.meta.transition = toDepth < fromDepth ? 'slide-right 500ms ease-in' : 'slide-left 500ms ease-in'
})

//-------------NAVIGATION GUARDS-----------------------
router.beforeEach((to, from, next) => {
    const harlerUserStore = import('../src/stores/auth-store')
        .then((result) => {
            console.log('result', result, to)
            console.log('result userGetter', result.userGetter.value)
            if (to.name == 'dashboard' &&  (result.userGetter.value.id).toString() !== to.params.id) next({ name: 'login' })
            else next()

        })
        .catch(error => {
            console.error('Une erreur est survenue lors de l\'importation du module :', error);
            next({ name: 'login' }); 
        });

  
})

//-------------------------AJOUT DES PLUGINS À L'APPLICATION ----------------------
const app = createApp(App)
const pinia = createPinia()
app.use(router)
app.use(Tres)
app.use(createVuePlugin())
app.use(pinia)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
