<template>
  <div id="app">
    <!-- 路由视图，用来显示根据路由规则对应的页面组件 -->
     <!-- js引擎解析router-view过程：
      1.获取网络地址的hash值，#后面的值
      2.解析路由规则，找到对应的组件
      3.显示组件
      -->
   <ShortCut></ShortCut>
   <router-view></router-view>
    
    
  </div>
</template>

<script>

import ShortCut from './components/common/ShortCut.vue'
export default {
  name: 'App',
  components: {
    ShortCut
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
  // margin-top: 60px;
}
</style>
