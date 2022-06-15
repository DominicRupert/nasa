<template>
    <div class="row">
        <div class="col-12">
            <img class="img-fluid" :src="image.hdurl" alt="">
            <h1>{{image.date}}, Photo: {{image.copyright}}</h1>
            <h5>{{image.explanation}}</h5>
        </div>
        
    </div>
</template>
<script>
import { AppState } from '../AppState.js'
import { useRouter } from 'vue-router'



export default {
    props: {
        image: {
            type: Object,
            required: true
        }
     },
    setup(){
        const router = useRouter()
        return{

        }
    }
    
}
</script>
<style>
    
</style>