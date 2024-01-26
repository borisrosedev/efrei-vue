import {
    defineStore
} from 'pinia'

import { ref, computed, watch, onBeforeMount } from "vue"

export const useProductStore = defineStore('products', () => {
    const products = ref([])
    const backupProducts = ref([])
    const productsGetter = computed(() => products.value)

    onBeforeMount(async() => {
        console.log('🛍️ pinia products store is about to mount')
        try {
            backupProducts.value = await (localStorage.getItem('productState')).json()
        } catch(e){
            console.log('🔴 localStorage is empty')
            console.log('🔵 Filling the db')
            const backupFile = await fetch('/src/database/products.json')
            const backupFileProducts = await backupFile.json()
            localStorage.setItem('productState', JSON.stringify(backupFileProducts))
            const localStorageBackup = localStorage.getItem('productState')
            backupProducts.value = JSON.parse(localStorageBackup)
        }
          
    })

    function $reset(){
        products.value = []
    }

    async function getProducts() {
        try {
            products.value = await(await fetch(import.meta.env.VITE_API_URL_PRODUCTS)).json();
        } catch(e){
            console.log('❌ Echec de la communication avec le serveur')
        }

    }

    watch(backupProducts, (val) => {
        if(!products.value.length){
            products.value = val
        }
    })

    watch(
        products,
        (val) => {
          // persist the whole state to the local storage whenever it changes
          if(val.length){
            localStorage.setItem('productState', JSON.stringify(val))
          }
        },
        { deep: true }
    )
  
    return { productsGetter, getProducts, $reset }

})