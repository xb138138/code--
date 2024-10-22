<template>
  <div id="app">
    <!-- 父传子的数据是响应式的，父变子变 -->
    <button @click="faCount++">+</button>
    <SonCom1 msg="我是父组件的数据" :count="faCount" :user="user" :userlist="userlist"></SonCom1>
  </div>
</template>

<script>
import SonCom1 from './components/SonCom1.vue'

export default {
  name: 'App',
  data() {
    return {
      faCount: 1,
      user:{
        id:3,
        name:'林晨',
        age:18,
        address:'湖南'
      },
      userlist:[{
        id:1,
        name:'林晨',
        age:19,
        address:'湖南'
      },{
        id:2,
        name:'小宝',
        age:18,
        address:'湖南'
      }]
    }
  },
  components: {
    SonCom1
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
