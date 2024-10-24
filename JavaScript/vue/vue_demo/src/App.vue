<template>
  <div id="app">
    <ShortCut></ShortCut>
    <HeadersNav></HeadersNav>
  </div>
</template>

<script>
  import ShortCut from './components/ShortCut.vue'
  import HeadersNav from './components/HeaderNav.vue'
  export default {
    components: {
      ShortCut,
      HeadersNav
    }
  }
</script>

<style>

</style>