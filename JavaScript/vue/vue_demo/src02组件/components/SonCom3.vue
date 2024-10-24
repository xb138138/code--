<template>
  <div class="comone3">
    <!-- -->
    <h1>组件3接收方</h1>
  </div>
</template>

<script>
import Bus from '../utils/EventBus';
export default {
    created(){
      // 用于接收其他组件发送的数据
      Bus.$on('sendMsg',(data)=>{
        console.log(data)
      })
    }
}
</script>

<style lang="scss" scoped>
.comone3{
    width: 100px;
    height: 500px;
    background-color: rgb(151, 248, 255);
    display: inline-block;
    vertical-align: top;
}
</style>