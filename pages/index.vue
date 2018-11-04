<template>
  <section>
    <navbar></navbar>
    <div v-if="isLoading">
        <h3> Loading </h3>
    </div>
    <div v-else>
      <div class="p-4">
        <div v-for="(show,index) in shows" :key="index">
          <nuxt-link :to="{ path: `shows/${show.id}`}" class="no-underline">
            <div class="bg-white w-full mt-4 rounded-t-lg shadow-lg home-card-image bg-cover bg-top bg-no-repeat" :style="{ backgroundImage: 'url(' + show.relationships.media.data[0].relationships.image.data.attributes.path + ')' }">
            </div>
            <div class="w-full rounded-b-lg py-8 px-4  bg-home-card">
              <h3 class="text-white text-2xl font-normal no-underline">{{ show.attributes.promoTitle }} </h3>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import navbar from '~/components/navbar.vue'
import axios from 'axios'

export default {
  components: {
    navbar
  },
  data () {
    return {
      isLoading: true,
      shows: []
    }
  },
  mounted(){
      this.getShows();
  },
  methods: {
    getShows() {

      let self = this
      axios.get('//localhost:9000/shows')
      .then((res) => {
        console.log(res);
        self.isLoading = false;
        self.shows = res.data.data.shows.data;
        
      })
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500');
  html{
    font-family: 'Fira Sans', sans-serif;
    background-color: #1D2129;
  }
  .home-card-image{
    height: 400px;
  }
  .bg-home-card{
    background-color: #4c4b4b;
  }
</style>
