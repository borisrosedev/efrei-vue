import { ref, onMounted } from "vue"

// logique avec état
export function useChecker (){
    // fermeture  -- closure ( mdn )

    const isValid = ref(false)

    function checker (userInput, pattern){
        const regexp = new RegExp(pattern, 'g')
        if(regexp.test(userInput)){
            isValid.value = true
        } else {
            isValid.value = false
        }
    }


    return {
        isValid,
        checker
    }
}