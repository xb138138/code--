<template>
  <div id="app">
    <!-- 父传子的数据是响应式的，父变子变 -->
    <button @click="faCount++">+</button>
    <!-- 接收子传父的数据 @子组件定义的事件名=“处理行数的名字” -->
    <SonCom1 msg="我是父组件的数据" :count="faCount" :user="user" :userlist="userlist" @sendMsg="sendMsg"></SonCom1>
    {{msgfromSon}}
    {{faCount}}
    <SonCom2></SonCom2>
    <SonCom3></SonCom3>
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
      }],
      msgfromSon:''
    }
  },
  components: {
    SonCom1,
    SonCom2: () => import('./components/SonCom2.vue'),
    SonCom3: () => import('./components/SonCom3.vue')
  },
  methods: {
    sendMsg(msg,count) {
      console.log(msg);
      this.msgfromSon = msg
      console.log(count);
      this.faCount = count
    }
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
