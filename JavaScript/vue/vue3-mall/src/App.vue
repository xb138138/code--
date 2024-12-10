<script setup>
import shortCut from './components/common/ShortCut.vue'
import Footer from './components/common/Footer.vue';
</script>

<template>
  <div>
    <shortCut></shortCut>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<style scoped>

</style>
