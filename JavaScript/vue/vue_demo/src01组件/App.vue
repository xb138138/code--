<template>
  <!-- html代码 -->
  <div id="app" class="app">
    <h1>我是根组件</h1>
    <h2>{{msg}}</h2>
    <my-header></my-header>
    <my-main></my-main>
    <my-bottom></my-bottom>
  </div>
</template>

<script>
// js代码
import MyBottom from './components/MyBottom.vue';
import MyHeader from './components/MyHeader.vue'
import MyMain from './components/MyMain.vue';
export default {
  data() {
    return {
      msg:'hello vue'
    }
  },
  components: {
    MyHeader,
    MyMain,
    MyBottom
  }
}
</script>

<style>
/* css代码 */
.app {
  color: pink;
}
</style>