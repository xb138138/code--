<template>
    <div class="subject">
      <div v-for="item in 5" :key="item">
        <span>{{a = Math.floor(Math.random() * 10)}}</span>
        <span>+</span>
        <span>{{Math.floor(Math.random() * 10)}}</span>
        <span>=</span>
        <!-- 判断结果是否相等 -->
        <input type="number" />
        <button>提交</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  name: 'SubjectItem',
  data() {
    return {
        sub:[]
    };
  }
  };
  </script>
  
  <style scoped>
  .subject {
    margin: 5px;
    padding: 5px;
    font-size: 20px;
  }
  .subject span {
    display: inline-block;
    text-align: center;
    width: 20px;
  }
  .subject input {
    width: 50px;
    height: 20px;
  }
  </style>