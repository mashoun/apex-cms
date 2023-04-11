<template>
<h1>comments {{store}}</h1>
</template>
<script>
import {useProfile} from '../stores/profile'
export default {
    setup(){
        const store = useProfile()
        return {store} 
    }
    
}
</script>