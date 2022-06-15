<template>
 <div class="container-fluid">
  <div class="row">
   <div class="col-12" >
    <Image :image="image" />

   </div>
   <div class="row">
    <button @click="changeImage(count - 1)" >change</button>
   </div>
  </div>
 </div>
</template>

<script>
import { logger } from '../utils/Logger.js'
import Pop from '../utils/Pop.js'
import { imageService } from '../services/ImageService.js'
import { computed, onMounted, onUnmounted} from '@vue/runtime-core'
import { AppState } from '../AppState.js'


export default {
  name: 'Home',
  setup(){
    onMounted(async () => {
     try{
      await imageService.getImage('')
     }catch (error) {
       Pop.toast(error.message, 'error')
       logger.error(error)
     }
    });
    return {
      date: computed(() => AppState.date),
      image: computed(() => AppState.image),
      async changeImage(count, image) {
        try{
          await imageService.changeImage(count, image)
        }catch{
          logger.error(error)
          Pop.toast(error.message, 'error')
        }

      }
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
