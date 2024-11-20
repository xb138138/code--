<script setup>
  import { ref } from 'vue'
  const count = ref(0)
  // 
  console.log(count.value);
  const add = () => {
    count.value++
  }
  const sub = () => {
    count.value--
  }
</script>

<template>
  <div>
  <h2>{{ count }}</h2>
  <button @click="add">+</button>
  <button @click="sub">-</button>
  </div>
</template>

<style scoped>

</style>
