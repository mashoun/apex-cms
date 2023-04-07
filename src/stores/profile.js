import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProfile = defineStore('profile', () => {
    state: () => {
        return {
            pic: 'https://drive.google.com/uc?export=view&id=1carhdDO1t8HQlqGYBC9ad57n2WQamfaa'
        }
    }
})
// https://drive.google.com/uc?export=view&id=1carhdDO1t8HQlqGYBC9ad57n2WQamfaa