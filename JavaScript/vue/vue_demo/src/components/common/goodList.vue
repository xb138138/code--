<template>
    <!-- 新鲜好物 -->
    <div class="goods wrapper">
      <div class="title">
        <div class="left">
          <h3>{{type}}</h3>
          <p>新鲜出炉 品质靠谱</p>
        </div>
        <div class="right">
          <a href="#" class="more"
            >查看全部<span class="iconfont icon-arrow-right-bold"></span
          ></a>
        </div>
      </div>
      <div class="bd">
        <ul>
          <li v-for="item in goodsList" :key="item.id">
            <a href="#/goods">
              <div class="pic"><img :src='require(`../../assets/${item.img}`)' alt="" /></div>
              <div class="txt">
                <h4>{{item.name}}</h4>
                <p>¥ <span>{{item.price}}</span></p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>
  
<script>
import axios from 'axios';
import goods from '../../views/goods.vue'
  export default {
      components:'goods',
      props:{
        type:String
      },
      data(){
          return{
              goodsList:[]
          }
      },
      created(){
        axios({
            url:"http://10.11.121.62:3000/goodsList",
            method:"get"
        }).then((res)=>{
            this.goodsList = res.data.filter((item)=>{
                return item.type === this.type
            })
        })
      }
  }
</script>
  
<style lang="scss" scoped>
  .goods .bd ul {
  display: flex;
  justify-content: space-between;
}
.goods .bd li {
  width: 304px;
  height: 404px;
  background-color: #EEF9F4;
}
.goods .bd li {
  display: block;
}
.goods .bd li .pic {
  width: 304px;
  height: 304px;
}
.goods .bd li .txt {
  text-align: center;
}
.goods .bd li h4 {
  margin-top: 17px;
  margin-bottom: 8px;
  font-size: 20px;
}
.goods .bd li p {
  font-size: 18px;
  color: #AA2113;
}
.goods .bd li p span {
  font-size: 22px;
}
</style>