<script setup>
const props = defineProps({
    msg:String,
    num:Number,
    person:Object
  })

  // import gsoncom from './Gsoncom.vue';
  const sayHello = inject('sayHello')
  const provideName = inject('provideName')
</script>

<template>
  <div class="soncom">
    <h1>这是子组件</h1>
    <p>访问msg{{msg}}</p>
    <p>访问num{{num}}</p>
    <p>
      <input v-model="person.name">
    </p>
    <!--  -->
    <p>
      <input type="text" v-model="person.name"><br>
      <input type="" v-model.number="person.age">
    </p>
    <h1>祖先组件person的数据：{{ sayHello }}</h1>
    <h1>祖先组件provideName的数据：{{ provideName }}</h1>
  </div>
</template>

<style>
.soncom{
  background-color: #0a53be;
}
</style>