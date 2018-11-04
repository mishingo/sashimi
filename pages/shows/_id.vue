<template>
    <div>
        <navbar></navbar>
        <div v-if="isLoading">
            Loading
        </div>
        <div v-else>
            <div class="p-3 text-center">
                <div class="text-white text-md">{{ this.show.attributes.promoTitle }} </div>
            </div>
            <div class="video-reel-container" >
                <div class="video-reel">
                    <img class="video-reel-img" :src="require(`@/assets/images/${$route.params.id}.png`)">
                </div>
            </div>
            <div class="p-4 text-right">
                <div class="text-white text-sm">&#9658; 27min {{timer}} </div>
            </div>
        </div>
        <div v-if="isChatLoading">

        </div>
        <div v-else>
            <div class="px-4">
                <div v-for="(c,index) in chat" :key="index">
                    <div v-show="c.time <= timer">
                        <div class="flex items-center  cursor-pointer">
                            <div>
                                <img class="h-12 w-12 rounded-full"
                                        src="https://darrenjameseeley.files.wordpress.com/2014/09/expendables3.jpeg"/>
                            </div>
                            <div class="ml-4 flex-1  py-4">
                                <div class="flex items-bottom justify-between">
                                    <p class="text-grey">
                                        {{c.user}}
                                    </p>
                                    <p class="text-xs text-grey-darkest">
                                        12:45 pm
                                    </p>
                                </div>
                                <p class="text-grey-dark mt-1 text-sm">
                                    {{c.comment}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import navbar from '~/components/navbar.vue'
import axios from 'axios'

export default {
    components: {
        navbar
    },
    data (){
        return{
            isLoading: true,
            isChatLoading: true,
            show: [],
            chat: [],
            timer: 0
        }
    },
    mounted (){
      console.log(this.$route)
      this.getShow();
      this.startInterval();
      this.getChat();
    },
    methods: {
        getChat: function() {
            let self = this
            axios.get('//localhost:9000/mongo')
            .then((res) => {
                console.log(res);
                self.isChatLoading = false;
                self.chat = res.data;
            })
        },
        getShow: function () {
            let self = this
            axios.get('//localhost:9000/oneshow')
            .then((res) => {
                console.log(res);
                self.isLoading = false;
                self.show = res.data.data.shows.data[0];
                console.log(self.show);
            })
        },
          startInterval: function () {
                   setInterval(() => {
                        this.timer = this.timer + 1
                   }, 1000);
          }
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