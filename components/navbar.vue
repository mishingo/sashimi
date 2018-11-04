<template>
    <nav class="flex items-center justify-center flex-wrap  p-6 position-relative">
        
        <div class="block lg:hidden absolute menu-btn">
            <button class="flex items-center">
                <img src="~/assets/images/menu-toggle.svg">
            </button>
        </div>
    
        <div class="flex items-center justify-center  text-white mr-6">
            <nuxt-link :to="{ path: '/'}">
                <img src="~/assets/images/logo.svg">
            </nuxt-link>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
html{
    font-family: 'Fira Sans', sans-serif;
    background-color: #1D2129;
  }
    .menu-btn{
        top: 30px;
        left: 20px;
    }
</style>
