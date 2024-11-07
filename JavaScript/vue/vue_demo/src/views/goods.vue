<template>
    <div class="goods">
      <!-- -->
      <h1>这是商品信息组件</h1>
      <ul>
        <li v-for="item in goodsList" :key="item.goodsId">
          商品id: {{ item.goodsId }}  &&& 
          商品名称:
          <!-- 
          1.路由管理器在解析地址时，取'#'后'?'前的内容作为hash地址进行路由匹配
          2.地址栏中,?后面的内容称为地址栏参数，用于页面组件之间传参，如：goodsdetail?goodsid=1&name=zs
          3.地址栏中的参数都会封装在this.$route.query对象中
          4.如获得商品id：this.$route.query.goodsid


           -->
          <router-link :to="`/goodsdetail/goodsintro?goodsid=${item.goodsId}`">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default{
    data(){
      return{
        goodsList:[]

      }
    },
    created(){
      //向服务器端请求商品信息的数据，初始化goodsList
      this.goodsList = [
        {goodsId:1,name:'电脑'},
        {goodsId:2,name:'鼠标'},
        {goodsId:3,name:'电视'}
      ]

    }
  }
  </script>
  
  <style lang="scss" scoped>
  .goods{
      height: 900px;
      background-color: rgb(255, 0, 212);
      ul{
        width: 50%;
        padding: 20px;
        background-color: white;
        font-size: larger;
        margin: 20px auto;
        border-radius: 20px;
        li{
          padding: 10px 0px;
        }
      }

  }
  
  </style>