<template>
  <div>
    <!-- -->
    我是主体
    <Tybutton @click="showCom='com01'">组件1</Tybutton>
    <Tybutton @click="showCom='com02'">组件2</Tybutton>
    <!-- <button @click="showCom='com01'">1</button>
    <button @click="showCom='com02'">2</button> -->
    <component :is="showCom"></component>
  </div>
</template>

<script>
import com01 from './com01.vue';
import com02 from './com02.vue';
export default {
    data() {
        return {
            showCom:'com01'
        }
    },
    components:{
        com01,
        com02
    }
}
</script>

<style lang="scss" scoped>
div{
  font-size: 20px;
  height: 300px;
  width: 100%;
  text-align: center;
  color: aliceblue;
  background-color: rgb(165, 255, 252);
}
</style>