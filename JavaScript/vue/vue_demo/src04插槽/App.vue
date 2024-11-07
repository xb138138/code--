<template>
  <MyDialog>你不好吗<h1>ku</h1>
    <template v-slot:tips>
      <div class="dialog-header">
      <h3>友情提示</h3>
      <span class="close">✖️</span>
      </div>
    </template>
    <template #btn1>
      znobgjrdgjgdgij
    </template>
    <template #btn2>
      <button>znobgjrdgjgdgij</button>
    </template>
  </MyDialog>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MyDialog from './components/MyDialog.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    MyDialog
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
