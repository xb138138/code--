<template>
  <div class="comone2">
    <!-- -->
    <h1>组件二发送方</h1>
    <button @click="send()">发送</button>
  </div>
</template>

<script>
import Bus from '../utils/EventBus';
export default {
    methods: {
        send() {
            Bus.$emit('sendMsg', '我是色匹克')
        } 
    }
}
</script>

<style lang="scss" scoped>
.comone2{
    width: 100px;
    height: 500px;
    background-color: rgb(200, 255, 188);
    display: inline-block;
    vertical-align: top;
}
</style>