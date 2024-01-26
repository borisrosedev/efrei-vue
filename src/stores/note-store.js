import {
    defineStore 
} from 'pinia'

import { ref, watch, onMounted, onBeforeMount, computed } from "vue"

export const useNoteStore = defineStore('note-store', () => {

    //refs
    const notes = ref([])

    //getters
    const notesGetter = computed(() => notes.value)
    //end of getters

    //life cyle hooks
    onBeforeMount(() => {
        console.log('🛍️ NoteBook Store is about to mount')
    })
    //end of the hooks

    function addNote(data){
        notes.value.push(data)
    }


    function $reset(){
        notes.value = []
        if(localStorage.getItem('noteStore')){
            localStorage.removeItem('noteStore')
        } else {
            console.log('🔵 Aucun note enregistrée dans le navigateur')
        }
       
    }

    


    return {
        notesGetter,
        addNote,
        $reset
    }

})