import { onMounted, shallowRef } from "vue";



export function useMountComposable(){

    const content = shallowRef("")

    onMounted(() => {
        console.log(content.value)
    })

    function setMountMessage(val){
        content.value = val
    }

    return {
        setMountMessage
    }
    
}