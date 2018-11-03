<template>
  <section>
    <navbar></navbar>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import navbar from '~/components/navbar.vue'

export default {
  components: {
    Logo,
    navbar
  }
}
</script>

<style>
  html{
    background-color: #1D2129;
  }
</style>
