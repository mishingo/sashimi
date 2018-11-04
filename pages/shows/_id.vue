<template>
    <div>
        <navbar></navbar>
        <div class="video-reel-container" >
            <div class="video-reel">
                <img class="video-reel-img" :src="require(`@/assets/images/${$route.params.id}.png`)">
            </div>
        </div>

    </div>
</template>

<script>
import navbar from '~/components/navbar.vue'

export default {
    components: {
    navbar
  },
  mounted (){
      console.log(this.$route)
  }
}
</script>

<style lang="scss">

.video-reel-container{
    position:relative;
    height: 120px;
    overflow: hidden;
    border: 3px solid #31FFAE;
    background-color: red;
    &:after{
        content: '';
        position: absolute;
        top: 0;
        left:0;
        bottom: 0;
        border-left:3px solid #31FFAE;
        animation: needle 180s linear forwards;
    }
    .video-reel{
        width: 3213px;
        height: 100%;
        .video-reel-img{
                height: 100%;
        }

        
        animation: mover 180s linear forwards;
    }
}
@keyframes needle {
    0% { transform: translateX(0); }
    100% { transform: translateX(300px); }
}
@keyframes mover {
    0% { transform: translateX(0); }
    100% { transform: translateX(-300px); }
}

    
</style>