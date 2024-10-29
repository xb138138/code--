<template>
  <div class="wrap clearfix">
    <location></location>
    <index></index>
  </div>
</template>

<script>
import location from './components/location.vue'
import index from './components/index.vue'

export default {
  name: 'App',
  components: {
    location,
    index
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
