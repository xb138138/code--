<script setup>
  import {onMounted, onUpdated, provide, ref} from "vue";

  onMounted(()=>{
    console.log('页面挂载完毕')
  })
  onUpdated(()=>{
    console.log('有数据被改变')
  })
  const num = ref(0)
  //
  import sonCom from '@/components/sonCom.vue'
  const person = ref({name:'zhangsan',age:18})

  provide('sayHello','hello')
  provide('provideName',num)

  
</script>

<template>
  <div>
    <input v-model="num">
    <div>
      <sonCom msg="hello" :num="num" :person="person"></sonCom>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>